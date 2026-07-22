// lib/db/actions.ts

import { createHash } from "crypto";
import { v4 as uuidv4 } from "uuid";
import { db } from "./index";
import {
  cotizaciones,
  reportesIntegridad,
  incidenciasCalidad,
  reportAuditLog,
} from "./schema";
import { uploadPublicFile, uploadPrivateFile } from "../cloudinary";
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
// These two receive every form submission across all three channels.
const ALWAYS_CC = [
  "ariel.barreto@20dejunio.com.ar",
  "ana.russo@20dejunio.com.ar",
];

const QUALITY_RECIPIENTS = [
  "info@20dejunio.com.ar",
  "direccion.tecnica@20dejunio.com.ar",
  ...ALWAYS_CC,
];
const QUOTE_RECIPIENT = ["presupuesto@20dejunio.com.ar", ...ALWAYS_CC];
const INTEGRITY_RECIPIENT = ["info@20dejunio.com.ar", ...ALWAYS_CC];

// const QUALITY_RECIPIENTS = ["francoaguirretrabajo@gmail.com"];
// const QUOTE_RECIPIENT = ["francoaguirretrabajo@gmail.com"];
// const INTEGRITY_RECIPIENT = ["francoaguirretrabajo@gmail.com"];

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
    // Robustness Fix: Ensure every byte is 2 chars long (e.g. "0A", not "A")
    header += bytes[i].toString(16).padStart(2, "0").toUpperCase();
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

    // SECURITY FIX: Randomize filename completely
    const uniqueFileName = `${uuidv4()}.${fileExtension}`;

    const uploaded = await uploadPublicFile(
      file,
      "prescriptions",
      uniqueFileName,
    ).catch(() => {
      throw new Error("Error al subir el archivo.");
    });

    prescriptionFilePath = uploaded.filePath;
    publicUrl = uploaded.url;
  }

  const [newQuote] = await db
    .insert(cotizaciones)
    .values({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      institution: formData.institution,
      requestingProfessional: formData.requestingProfessional,
      observations: formData.observations,
      prescriptionFilePath,
      ipAddress,
    })
    .returning()
    .catch(() => {
      throw new Error("Error al guardar la cotización.");
    });

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

    const uploaded = await uploadPrivateFile(
      file,
      "reports",
      uniqueFileName,
    ).catch(() => {
      throw new Error("Error al subir evidencia.");
    });
    reportFilePath = uploaded.filePath;
  }

  // Snake_case shape kept intentionally: it is the canonical object for the
  // SHA-256 audit hash and must match verify-report's reconstruction.
  const reportToInsert = {
    full_name: formData.fullName,
    contact_info: formData.contactInfo,
    report_description: formData.reportDescription,
    file_path: reportFilePath,
    ip_address: ipAddress,
  };

  const [newReport] = await db
    .insert(reportesIntegridad)
    .values({
      fullName: reportToInsert.full_name,
      contactInfo: reportToInsert.contact_info,
      reportDescription: reportToInsert.report_description,
      filePath: reportToInsert.file_path,
      ipAddress: reportToInsert.ip_address,
    })
    .returning()
    .catch(() => {
      throw new Error("Error al guardar reporte.");
    });

  const dataHash = createDataHash(reportToInsert);
  await db
    .insert(reportAuditLog)
    .values({ reportIdIntegrity: newReport.id, dataHash })
    .catch(() => {
      throw new Error("Error de auditoría.");
    });

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
  // Snake_case shape kept intentionally: it is the canonical object for the
  // SHA-256 audit hash and must match verify-report's reconstruction.
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

  const [newIncident] = await db
    .insert(incidenciasCalidad)
    .values({
      contactInfo: incidentForDb.contact_info,
      eventDescription: incidentForDb.event_description,
      patientContact: incidentForDb.patient_contact,
      procedure: incidentForDb.procedure,
      eventTiming: incidentForDb.event_timing,
      surgeryCompleted: incidentForDb.surgery_completed,
      deviceInfo: incidentForDb.device_info,
      patientInitials: incidentForDb.patient_initials,
      age: incidentForDb.age,
      dob: incidentForDb.dob,
      sex: incidentForDb.sex,
      medicalHistory: incidentForDb.medical_history,
      patientImpact: incidentForDb.patient_impact,
      medicalInterventionRequired:
        incidentForDb.medical_intervention_required,
      interventionDetails: incidentForDb.intervention_details,
      diagnosis: incidentForDb.diagnosis,
      wasHospitalized: incidentForDb.was_hospitalized,
      treatmentPrescribed: incidentForDb.treatment_prescribed,
      treatmentDetails: incidentForDb.treatment_details,
      patientStatus: incidentForDb.patient_status,
      ipAddress: incidentForDb.ip_address,
    })
    .returning()
    .catch(() => {
      throw new Error("Error al guardar incidencia.");
    });

  const dataHash = createDataHash(incidentForDb);
  await db
    .insert(reportAuditLog)
    .values({ reportIdQuality: newIncident.id, dataHash })
    .catch(() => {
      throw new Error("Error de auditoría.");
    });

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

export const verifyRecaptcha = async (token: string) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY is missing.");
    return false; // Or true in dev if you want to skip it
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" },
    );
    const data = await response.json();

    // Google returns a score between 0.0 (bot) and 1.0 (human).
    // 0.5 is usually a safe threshold.
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
};
