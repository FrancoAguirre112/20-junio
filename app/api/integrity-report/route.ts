// app/api/integrity-report/route.ts

import { NextResponse, NextRequest } from "next/server";
import { submitIntegrityReport, verifyRecaptcha } from "@/lib/supabase/actions"; // Asegúrate de exportar verifyRecaptcha desde actions
import { IntegrityReportSchema } from "@/lib/schemas";

// CONFIGURATION
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const jsonString = formData.get("jsonData") as string;

    // 1. Validate JSON existence
    if (!jsonString) {
      return NextResponse.json(
        { success: false, error: "Missing form data." },
        { status: 400 },
      );
    }

    // 2. Safe JSON Parsing
    let parsedData;
    try {
      parsedData = JSON.parse(jsonString);
    } catch (e) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON format." },
        { status: 400 },
      );
    }

    // --- NUEVO: Extraer token y verificar reCAPTCHA ---
    const { gReCaptchaToken, ...cleanData } = parsedData;

    if (!gReCaptchaToken) {
      return NextResponse.json(
        { success: false, error: "Falta token de verificación." },
        { status: 400 },
      );
    }

    const isHuman = await verifyRecaptcha(gReCaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { success: false, error: "Verificación de bot fallida." },
        { status: 400 },
      );
    }
    // --------------------------------------------------

    // 3. Zod Validation (Usamos cleanData para no incluir el token en la validación del esquema)
    const validation = IntegrityReportSchema.safeParse(cleanData);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form fields.",
          details: validation.error.format(),
        },
        { status: 400 },
      );
    }

    // 4. File Validation (Security Check)
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { success: false, error: "File size exceeds 5MB limit." },
          { status: 400 },
        );
      }

      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        return NextResponse.json(
          {
            success: false,
            error: "File type not supported. Use JPG, PNG, or PDF.",
          },
          { status: 400 },
        );
      }
    }

    // 5. IP Handling
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

    // 6. Action Call
    const result = await submitIntegrityReport(validation.data, file, ip);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("CRITICAL API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error. Please try again later.",
      },
      { status: 500 },
    );
  }
}
