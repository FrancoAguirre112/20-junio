// lib/supabase/actions.ts

import { createHash } from "crypto";
import { supabaseServerClient } from "./serverClient";
import { v4 as uuidv4 } from "uuid";
import { sendEmail } from "../email";
import { QuoteConfirmationEmail } from "@/emails/QuoteConfirmationEmail";
import { IntegrityReportEmail } from "@/emails/IntegrityReportEmail";
import { QualityIncidentEmail } from "@/emails/QualityIncidentEmail";
import {
  QuoteFormData,
  IntegrityReportFormData,
  QualityIncidentFormData,
} from "../schemas";

// =============================================
//      SECURITY CONFIGURATION
// =============================================

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// --- RECIPIENTS (Production) ---
const QUALITY_RECIPIENTS = [
  "info@20dejunio.com.ar",
  "direccion.tecnica@20dejunio.com.ar",
];
const QUOTE_RECIPIENT = "presupuestos@20dejunio.com.ar";
const INTEGRITY_RECIPIENT = "info@20dejunio.com.ar";

// =============================================
//      SECURITY UTILITIES (MAGIC BYTES)
// =============================================

/**
 * Checks the "Magic Bytes" (File Signature) to ensure the file
 * is truly a PDF or Image, ignoring the file extension.
 */
const validateFileSecurity = async (file: File) => {
  // 1. Size Check
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("El archivo excede el tamaño máximo de 5MB.");
  }

  // 2. Magic Bytes Check (The Pentest Fix)
  const arrayBuffer = await file.slice(0, 4).arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  let header = "";
  for (let i = 0; i < bytes.length; i++) {
    header += bytes[i].toString(16).toUpperCase();
  }

  // Signatures:
  // PDF: 25 50 44 46 (%PDF)
  // JPEG: FF D8 FF ...
  // PNG: 89 50 4E 47 (.PNG)
  // WEBP: 52 49 46 46 (RIFF) ... starts with RIFF usually

  const isPDF = header.startsWith("25504446");
  const isJPEG = header.startsWith("FFD8FF");
  const isPNG = header.startsWith("89504E47");
  // WEBP is trickier (RIFF....WEBP), but let's allow common RIFF headers
  const isRIFF = header.startsWith("52494646");

  if (!isPDF && !isJPEG && !isPNG && !isRIFF) {
    throw new Error("Formato de archivo inválido. Solo PDF o Imágenes.");
  }

  // 3. Return a clean extension for the filename
  if (isPDF) return "pdf";
  if (isJPEG) return "jpg";
  if (isPNG) return "png";
  if (isRIFF) return "webp";
  return "bin";
};

const createDataHash = (data: unknown): string => {
  const dataString = JSON.stringify(data);
  return createHash("sha256").update(dataString).digest("hex");
};

// =============================================
//      FORM SUBMISSION ACTIONS
// =============================================

export const submitQuote = async (
  formData: QuoteFormData,
  file: File | null,
  ipAddress: string,
) => {
  let prescriptionFilePath: string | null = null;
  let publicUrl = "";

  if (file) {
    const fileExtension = await validateFileSecurity(file); // Validates & gets safe ext

    // SECURITY FIX: Randomize filename completely (Finding #5)
    const uniqueFileName = `${uuidv4()}.${fileExtension}`;

    const { error: uploadError } = await supabaseServerClient.storage
      .from("prescriptions")
      .upload(uniqueFileName, file);
    if (uploadError) throw new Error("Error al subir el archivo.");

    prescriptionFilePath = uniqueFileName;

    const { data: urlData } = supabaseServerClient.storage
      .from("prescriptions")
      .getPublicUrl(uniqueFileName);

    if (urlData) publicUrl = urlData.publicUrl;
  }

  const { data: newQuote, error: insertError } = await supabaseServerClient
    .from("cotizaciones")
    .insert({
      full_name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      institution: formData.institution,
      requesting_professional: formData.requestingProfessional,
      observations: formData.observations,
      prescription_file_path: prescriptionFilePath,
      ip_address: ipAddress,
    })
    .select()
    .single();

  if (insertError) throw new Error("Error al guardar la cotización.");

  await sendEmail({
    to: QUOTE_RECIPIENT,
    subject: `Nueva Solicitud de Cotización de ${formData.fullName}`,
    react: QuoteConfirmationEmail({ ...formData, fileUrl: publicUrl }),
  });

  return newQuote;
};

export const submitIntegrityReport = async (
  formData: IntegrityReportFormData,
  file: File | null,
  ipAddress: string,
) => {
  let reportFilePath: string | null = null;

  if (file) {
    const fileExtension = await validateFileSecurity(file); // Validates & gets safe ext

    // SECURITY FIX: Randomize filename completely
    const uniqueFileName = `${uuidv4()}.${fileExtension}`;

    const { error } = await supabaseServerClient.storage
      .from("reports")
      .upload(uniqueFileName, file);
    if (error) throw new Error("Error al subir evidencia.");
    reportFilePath = uniqueFileName;
  }

  const reportToInsert = {
    full_name: formData.fullName,
    contact_info: formData.contactInfo,
    report_description: formData.reportDescription,
    file_path: reportFilePath,
    ip_address: ipAddress,
  };

  const { data: newReport, error: reportError } = await supabaseServerClient
    .from("reportes_integridad")
    .insert(reportToInsert)
    .select()
    .single();
  if (reportError) throw new Error("Error al guardar reporte.");

  const dataHash = createDataHash(reportToInsert);
  const { error: auditError } = await supabaseServerClient
    .from("report_audit_log")
    .insert({ report_id_integrity: newReport.id, data_hash: dataHash });
  if (auditError) throw new Error("Error de auditoría.");

  await sendEmail({
    to: INTEGRITY_RECIPIENT,
    subject: `Nuevo Reporte en Canal de Integridad`,
    react: IntegrityReportEmail({
      ...formData,
      reportId: newReport.id,
      hash: dataHash,
      hasAttachment: !!file,
    }),
  });

  return { reportId: newReport.id, hash: dataHash };
};

export const submitQualityIncident = async (
  formData: QualityIncidentFormData,
  ipAddress: string,
) => {
  const incidentForDb = {
    contact_info: formData.contactInfo,
    event_description: formData.eventDescription,
    patient_contact: formData.patientContact,
    procedure: formData.procedure,
    event_timing: formData.eventTiming,
    surgery_completed: formData.surgeryCompleted,
    device_info: formData.deviceInfo,
    patient_initials: formData.patientInitials,
    age: formData.age,
    dob: formData.dob,
    sex: formData.sex,
    medical_history: formData.medicalHistory,
    patient_impact: formData.patientImpact,
    medical_intervention_required:
      formData.medicalInterventionRequired === "SI",
    intervention_details: formData.interventionDetails,
    diagnosis: formData.diagnosis,
    was_hospitalized: formData.wasHospitalized,
    treatment_prescribed: formData.treatmentPrescribed === "SI",
    treatment_details: formData.treatmentDetails,
    patient_status: formData.patientStatus,
    ip_address: ipAddress,
  };

  const { data: newIncident, error: incidentError } = await supabaseServerClient
    .from("incidencias_calidad")
    .insert(incidentForDb)
    .select()
    .single();

  if (incidentError) throw new Error("Error al guardar incidencia.");

  const dataHash = createDataHash(incidentForDb);
  const { error: auditError } = await supabaseServerClient
    .from("report_audit_log")
    .insert({ report_id_quality: newIncident.id, data_hash: dataHash });

  if (auditError) throw new Error("Error de auditoría.");

  await sendEmail({
    to: QUALITY_RECIPIENTS,
    subject: `Nuevo Reporte de Incidencia - ID: ${newIncident.id.substring(0, 8)}`,
    react: QualityIncidentEmail({
      formData,
      reportId: newIncident.id,
      hash: dataHash,
    }),
  });

  return { reportId: newIncident.id, hash: dataHash };
};
