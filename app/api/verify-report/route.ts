/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { z } from "zod";
import { createHash } from "crypto";
import { supabaseServerClient } from "@/lib/supabase/serverClient";

const VerifySchema = z.object({
  reportId: z.string().uuid(),
  accessCode: z.string().min(1),
});

const createVerifiableObject = (reportData: any) => {
  return {
    contact_info: reportData.contact_info,
    event_description: reportData.event_description,
    patient_contact: reportData.patient_contact,
    procedure: reportData.procedure,
    event_timing: reportData.event_timing,
    surgery_completed: reportData.surgery_completed,
    device_info: reportData.device_info,
    patient_initials: reportData.patient_initials,
    age: reportData.age,
    dob: reportData.dob,
    sex: reportData.sex,
    medical_history: reportData.medical_history,
    patient_impact: reportData.patient_impact,
    medical_intervention_required: reportData.medical_intervention_required,
    intervention_details: reportData.intervention_details,
    diagnosis: reportData.diagnosis,
    was_hospitalized: reportData.was_hospitalized,
    treatment_prescribed: reportData.treatment_prescribed,
    treatment_details: reportData.treatment_details,
    patient_status: reportData.patient_status,
    ip_address: reportData.ip_address,
  };
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = VerifySchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { status: "error", message: "Datos incompletos." },
        { status: 400 },
      );
    }

    const { reportId, accessCode } = validation.data;

    // SECURITY CHECK
    const adminPassword = process.env.ADMIN_ACCESS_PASSWORD;
    if (!adminPassword || accessCode !== adminPassword) {
      return NextResponse.json(
        { status: "error", message: "Credenciales inválidas." },
        { status: 401 },
      );
    }

    // 1. Fetch Audit Log
    const { data: auditLog, error: auditError } = await supabaseServerClient
      .from("report_audit_log")
      .select("*")
      .or(`report_id_integrity.eq.${reportId},report_id_quality.eq.${reportId}`)
      .single();

    if (auditError || !auditLog) {
      return NextResponse.json({
        status: "not_found",
        message: "No se encontró registro de auditoría para este ID.",
      });
    }

    const originalHash = auditLog.data_hash;
    const submissionDate = auditLog.created_at;

    // 2. Fetch Original Data
    let reportData: any = null;
    let isIntegrityReport = false;

    if (auditLog.report_id_integrity) {
      const { data } = await supabaseServerClient
        .from("reportes_integridad")
        .select("*")
        .eq("id", reportId)
        .single();
      reportData = data;
      isIntegrityReport = true;
    } else if (auditLog.report_id_quality) {
      const { data } = await supabaseServerClient
        .from("incidencias_calidad")
        .select("*")
        .eq("id", reportId)
        .single();
      reportData = data;
    }

    if (!reportData) {
      return NextResponse.json({
        status: "not_found",
        message: "El registro original no se encuentra (posible eliminación).",
      });
    }

    // 3. Re-Verify Hash
    const objectToHash = isIntegrityReport
      ? {
          full_name: reportData.full_name,
          contact_info: reportData.contact_info,
          report_description: reportData.report_description,
          file_path: reportData.file_path,
          ip_address: reportData.ip_address,
        }
      : createVerifiableObject(reportData);

    const recalculatedHash = createHash("sha256")
      .update(JSON.stringify(objectToHash))
      .digest("hex");

    const verificationStatus =
      recalculatedHash === originalHash ? "verified" : "tampered";

    // 4. Generate Signed URL for File (If applicable)
    let fileUrl = null;
    if (isIntegrityReport && reportData.file_path) {
      // Create a temporary link valid for 1 hour (3600 seconds)
      const { data: signedData } = await supabaseServerClient.storage
        .from("reports")
        .createSignedUrl(reportData.file_path, 3600);

      if (signedData) fileUrl = signedData.signedUrl;
    }

    return NextResponse.json({
      status: verificationStatus,
      message:
        verificationStatus === "verified"
          ? "VERIFICADO: El reporte es auténtico."
          : "ALERTA: El reporte ha sido modificado.",
      data: reportData,
      timestamp: submissionDate,
      type: isIntegrityReport ? "integrity" : "quality",
      fileUrl, // Return the temporary secure link
    });
  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json(
      { status: "error", message: "Error interno del servidor." },
      { status: 500 },
    );
  }
}
