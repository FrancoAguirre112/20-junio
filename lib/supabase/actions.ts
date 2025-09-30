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
//      REUSABLE UTILITY FUNCTIONS
// =============================================

const createDataHash = (data: unknown): string => {
  const dataString = JSON.stringify(data);
  return createHash("sha256").update(dataString).digest("hex");
};

// =============================================
//      FORM SUBMISSION ACTIONS
// =============================================

const notificationRecipient = process.env.NOTIFICATION_EMAIL;

/**
 * Handles the "Get a Quote" form submission.
 */
export const submitQuote = async (
  formData: QuoteFormData,
  file: File | null,
  ipAddress: string
) => {
  let prescriptionFilePath: string | null = null;

  if (file) {
    const uniqueFileName = `${uuidv4()}-${file.name}`;
    const { error: uploadError } = await supabaseServerClient.storage
      .from("prescriptions")
      .upload(uniqueFileName, file);
    if (uploadError) throw new Error("Failed to upload prescription file.");
    prescriptionFilePath = uniqueFileName;
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

  if (insertError) throw new Error("Failed to save quote request.");

  if (notificationRecipient) {
    await sendEmail({
      to: notificationRecipient,
      subject: `Nueva Solicitud de Cotización de ${formData.fullName}`,
      react: QuoteConfirmationEmail({ ...formData }),
    });
  }

  return newQuote;
};

/**
 * Handles the "Integrity Report" submission with digital notary.
 */
export const submitIntegrityReport = async (
  formData: IntegrityReportFormData,
  file: File | null,
  ipAddress: string
) => {
  let reportFilePath: string | null = null;
  if (file) {
    const uniqueFileName = `${uuidv4()}-${file.name}`;
    const { error } = await supabaseServerClient.storage
      .from("reports")
      .upload(uniqueFileName, file);
    if (error) throw new Error("Failed to upload report file.");
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
  if (reportError) throw new Error("Failed to save integrity report.");

  const dataHash = createDataHash(reportToInsert);
  const { error: auditError } = await supabaseServerClient
    .from("report_audit_log")
    .insert({ report_id_integrity: newReport.id, data_hash: dataHash });
  if (auditError) throw new Error("Failed to save report audit log.");

  if (notificationRecipient) {
    await sendEmail({
      to: notificationRecipient,
      subject: `Nuevo Reporte en Canal de Integridad`,
      react: IntegrityReportEmail({
        ...formData,
        reportId: newReport.id,
        hash: dataHash,
        hasAttachment: !!file,
      }),
    });
  }

  return { reportId: newReport.id, hash: dataHash };
};

/**
 * Handles the "Quality Incident" submission with digital notary.
 */
export const submitQualityIncident = async (
  formData: QualityIncidentFormData,
  ipAddress: string
) => {
  // Map the camelCase formData to the snake_case object required by the database.
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
    patient_impact: formData.patientImpact, // This is the correct column
    medical_intervention_required:
      formData.medicalInterventionRequired === "SI",
    intervention_details: formData.interventionDetails,
    diagnosis: formData.diagnosis,
    was_hospitalized: formData.wasHospitalized,
    treatment_prescribed: formData.treatmentPrescribed === "SI",
    treatment_details: formData.treatmentDetails,
    patient_status: formData.patientStatus,
    ip_address: ipAddress,
    // The incorrect "was_patient_harmed" line has been completely removed.
  };

  const { data: newIncident, error: incidentError } = await supabaseServerClient
    .from("incidencias_calidad")
    .insert(incidentForDb)
    .select()
    .single();

  if (incidentError) {
    console.error("Database insert error:", incidentError);
    throw new Error("Failed to save quality incident.");
  }

  const dataHash = createDataHash(incidentForDb);
  const { error: auditError } = await supabaseServerClient
    .from("report_audit_log")
    .insert({ report_id_quality: newIncident.id, data_hash: dataHash });

  if (auditError) {
    console.error(
      "CRITICAL: Failed to save audit log for incident:",
      newIncident.id
    );
    throw new Error("Failed to save incident audit log.");
  }

  if (process.env.NOTIFICATION_EMAIL) {
    await sendEmail({
      to: process.env.NOTIFICATION_EMAIL,
      subject: `Nuevo Reporte de Incidencia de Calidad - ID: ${newIncident.id.substring(0, 8)}`,
      react: QualityIncidentEmail({
        formData,
        reportId: newIncident.id,
        hash: dataHash,
      }),
    });
  }

  return { reportId: newIncident.id, hash: dataHash };
};
