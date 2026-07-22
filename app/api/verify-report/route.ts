import { NextResponse } from "next/server";
import { z } from "zod";
import { createHash } from "crypto";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { eq, or } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  reportAuditLog,
  reportesIntegridad,
  incidenciasCalidad,
} from "@/lib/db/schema";
import { getPrivateFileUrl } from "@/lib/cloudinary";

const VerifySchema = z.object({
  reportId: z.string().uuid(),
});

// Snake_case shapes are the canonical objects for the SHA-256 audit hash —
// key names AND order must match what lib/db/actions.ts hashed at insert time.
const toVerifiableIntegrity = (
  row: typeof reportesIntegridad.$inferSelect,
) => ({
  full_name: row.fullName,
  contact_info: row.contactInfo,
  report_description: row.reportDescription,
  file_path: row.filePath,
  ip_address: row.ipAddress,
});

const toVerifiableQuality = (row: typeof incidenciasCalidad.$inferSelect) => ({
  contact_info: row.contactInfo,
  event_description: row.eventDescription,
  patient_contact: row.patientContact,
  procedure: row.procedure,
  event_timing: row.eventTiming,
  surgery_completed: row.surgeryCompleted,
  device_info: row.deviceInfo,
  patient_initials: row.patientInitials,
  age: row.age,
  dob: row.dob,
  sex: row.sex,
  medical_history: row.medicalHistory,
  patient_impact: row.patientImpact,
  medical_intervention_required: row.medicalInterventionRequired,
  intervention_details: row.interventionDetails,
  diagnosis: row.diagnosis,
  was_hospitalized: row.wasHospitalized,
  treatment_prescribed: row.treatmentPrescribed,
  treatment_details: row.treatmentDetails,
  patient_status: row.patientStatus,
  ip_address: row.ipAddress,
});

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

    const { reportId } = validation.data;

    // SECURITY CHECK — Verify JWT session cookie
    const secret = process.env.SESSION_SECRET;
    if (!secret) {
      return NextResponse.json(
        { status: "error", message: "Error de configuración del servidor." },
        { status: 500 },
      );
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;
    if (!token) {
      return NextResponse.json(
        { status: "error", message: "Credenciales inválidas." },
        { status: 401 },
      );
    }

    try {
      await jwtVerify(token, new TextEncoder().encode(secret));
    } catch {
      return NextResponse.json(
        { status: "error", message: "Sesión expirada o inválida." },
        { status: 401 },
      );
    }

    // 1. Fetch Audit Log
    const auditLog = await db.query.reportAuditLog.findFirst({
      where: or(
        eq(reportAuditLog.reportIdIntegrity, reportId),
        eq(reportAuditLog.reportIdQuality, reportId),
      ),
    });

    if (!auditLog) {
      return NextResponse.json({
        status: "not_found",
        message: "No se encontró registro de auditoría para este ID.",
      });
    }

    const originalHash = auditLog.dataHash;
    const submissionDate = auditLog.createdAt;

    // 2. Fetch Original Data
    let objectToHash: Record<string, unknown> | null = null;
    let filePath: string | null = null;
    const isIntegrityReport = !!auditLog.reportIdIntegrity;

    if (isIntegrityReport) {
      const row = await db.query.reportesIntegridad.findFirst({
        where: eq(reportesIntegridad.id, reportId),
      });
      if (row) {
        objectToHash = toVerifiableIntegrity(row);
        filePath = row.filePath;
      }
    } else if (auditLog.reportIdQuality) {
      const row = await db.query.incidenciasCalidad.findFirst({
        where: eq(incidenciasCalidad.id, reportId),
      });
      if (row) objectToHash = toVerifiableQuality(row);
    }

    if (!objectToHash) {
      return NextResponse.json({
        status: "not_found",
        message: "El registro original no se encuentra (posible eliminación).",
      });
    }

    // 3. Re-Verify Hash
    const recalculatedHash = createHash("sha256")
      .update(JSON.stringify(objectToHash))
      .digest("hex");

    const verificationStatus =
      recalculatedHash === originalHash ? "verified" : "tampered";

    // 4. Generate Signed URL for File (If applicable)
    let fileUrl = null;
    if (isIntegrityReport && filePath) {
      // Temporary Cloudinary link valid for 1 hour (3600 seconds)
      try {
        fileUrl = getPrivateFileUrl(filePath, 3600);
      } catch (e) {
        console.error("Signed URL error:", e);
      }
    }

    return NextResponse.json({
      status: verificationStatus,
      message:
        verificationStatus === "verified"
          ? "VERIFICADO: El reporte es auténtico."
          : "ALERTA: El reporte ha sido modificado.",
      data: objectToHash,
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
