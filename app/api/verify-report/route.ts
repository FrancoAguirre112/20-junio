import { NextResponse } from "next/server";
import { z } from "zod";
import { createHash } from "crypto";
import { supabaseServerClient } from "@/lib/supabase/serverClient";

// Zod schema to validate the incoming request body
const VerifySchema = z.object({
  reportId: z.string().uuid({ message: "El ID del reporte no es válido." }),
});

// This is the most critical part: it re-creates the object that was originally hashed.
// This must perfectly match the `incidentForDb` object in your actions.ts file.
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
        { status: "error", message: "Invalid input." },
        { status: 400 }
      );
    }

    const { reportId } = validation.data;

    // 1. Fetch the original hash and report type from the audit log
    const { data: auditLog, error: auditError } = await supabaseServerClient
      .from("report_audit_log")
      .select("*")
      .or(`report_id_integrity.eq.${reportId},report_id_quality.eq.${reportId}`)
      .single();

    if (auditError || !auditLog) {
      return NextResponse.json({
        status: "not_found",
        message: "No se encontró ningún reporte con ese ID.",
      });
    }

    const originalHash = auditLog.data_hash;
    const submissionDate = auditLog.created_at;

    // 2. Determine which table to query and fetch the report data
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
      // This should be rare, but indicates a data inconsistency (log exists, but report is gone)
      return NextResponse.json({
        status: "not_found",
        message:
          "El registro de auditoría existe pero no se encontró el reporte original.",
      });
    }

    // 3. Re-calculate the hash from the fetched data
    // We must hash the exact same object structure that was originally saved
    const objectToHash = isIntegrityReport
      ? {
          // This structure must match `reportToInsert` in actions.ts
          full_name: reportData.full_name,
          contact_info: reportData.contact_info,
          report_description: reportData.report_description,
          file_path: reportData.file_path,
          ip_address: reportData.ip_address,
        }
      : createVerifiableObject(reportData); // Use the helper for the complex object

    const dataString = JSON.stringify(objectToHash);
    const recalculatedHash = createHash("sha256")
      .update(dataString)
      .digest("hex");

    // 4. Compare the hashes and return the result
    if (recalculatedHash === originalHash) {
      return NextResponse.json({
        status: "verified",
        message: "Verificado: El reporte es auténtico y no ha sido modificado.",
        data: reportData,
        timestamp: submissionDate,
      });
    } else {
      return NextResponse.json({
        status: "tampered",
        message:
          "Alerta: La integridad de este reporte no puede ser verificada. Los datos pueden haber sido alterados.",
        timestamp: submissionDate,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Ocurrió un error en el servidor." },
      { status: 500 }
    );
  }
}
