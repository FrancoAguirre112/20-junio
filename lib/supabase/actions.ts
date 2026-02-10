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
//      CONFIGURATION & RECIPIENTS
// =============================================

// SECURITY: Max file size (5MB) and allowed types
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
];

const QUALITY_RECIPIENTS = [
  "info@20dejunio.com.ar",
  "direccion.tecnica@20dejunio.com.ar",
];
const QUOTE_RECIPIENT = "presupuestos@20dejunio.com.ar";
const INTEGRITY_RECIPIENT = "info@20dejunio.com.ar";
// =============================================
//      UTILITY FUNCTIONS
// =============================================

const createDataHash = (data: unknown): string => {
  const dataString = JSON.stringify(data);
  return createHash("sha256").update(dataString).digest("hex");
};

const validateFile = (file: File) => {
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("El archivo excede el tamaño máximo de 5MB.");
  }
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    throw new Error("Tipo de archivo no permitido. Solo PDF o Imágenes.");
  }
};

// =============================================
//      FORM SUBMISSION ACTIONS
// =============================================

/**
 * Handles the "Get a Quote" form submission.
 */
export const submitQuote = async (
  formData: QuoteFormData,
  file: File | null,
  ipAddress: string,
) => {
  let prescriptionFilePath: string | null = null;
  let publicUrl = "";

  if (file) {
    validateFile(file); // Security Check

    const uniqueFileName = `${uuidv4()}-${file.name}`;
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

  // Send Email
  await sendEmail({
    to: QUOTE_RECIPIENT,
    subject: `Nueva Solicitud de Cotización de ${formData.fullName}`,
    react: QuoteConfirmationEmail({ ...formData, fileUrl: publicUrl }),
  });

  return newQuote;
};

/**
 * Handles the "Integrity Report" submission.
 */
export const submitIntegrityReport = async (
  formData: IntegrityReportFormData,
  file: File | null,
  ipAddress: string,
) => {
  let reportFilePath: string | null = null;

  if (file) {
    validateFile(file); // Security Check

    const uniqueFileName = `${uuidv4()}-${file.name}`;
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

  // Send Email (Secure link included in template)
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

/**
 * Handles the "Quality Incident" submission.
 */
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

  // Send Email to Multiple Recipients
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
