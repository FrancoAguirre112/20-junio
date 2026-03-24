import { NextResponse, NextRequest } from "next/server"; // 1. Import NextRequest
import { submitQualityIncident } from "@/lib/supabase/actions";
import { QualityIncidentSchema } from "@/lib/schemas";
import { verifyRecaptcha } from "@/lib/supabase/actions";

export async function POST(request: NextRequest) {
  // 2. Use NextRequest as the type
  try {
    const jsonData = await request.json();
    const { gReCaptchaToken, ...formData } = jsonData; // Extract token

    const isHuman = await verifyRecaptcha(gReCaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { success: false, error: "Verificación de bot fallida." },
        { status: 400 },
      );
    }
    // 1. Validate form data
    const validation = QualityIncidentSchema.safeParse(jsonData);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data.",
          details: validation.error.format(),
        },
        { status: 400 },
      );
    }

    // 2. Get IP address from platform header
    const ip = request.headers.get("x-real-ip") ?? "unknown";

    // 3. Call the server-side action
    const result = await submitQualityIncident(
      validation.data,
      ip, // Use the IP retrieved from headers
    );

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("API Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
