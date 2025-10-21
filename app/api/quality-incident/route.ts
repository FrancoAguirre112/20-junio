import { NextResponse, NextRequest } from "next/server"; // 1. Import NextRequest
import { submitQualityIncident } from "@/lib/supabase/actions";
import { QualityIncidentSchema } from "@/lib/schemas";

export async function POST(request: NextRequest) {
  // 2. Use NextRequest as the type
  try {
    // This form doesn't have a file upload, so we can parse JSON directly
    const jsonData = await request.json();

    // 1. Validate form data
    const validation = QualityIncidentSchema.safeParse(jsonData);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data.",
          details: validation.error.format(),
        },
        { status: 400 }
      );
    }

    // 2. FIX: Get IP address from headers
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

    // 3. Call the server-side action
    const result = await submitQualityIncident(
      validation.data,
      ip // Use the IP retrieved from headers
    );

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("API Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
