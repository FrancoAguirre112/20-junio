import { NextResponse, NextRequest } from "next/server"; // Keep NextRequest, it's best practice
import { submitIntegrityReport } from "@/lib/supabase/actions";
import { IntegrityReportSchema } from "@/lib/schemas";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const jsonString = formData.get("jsonData") as string;

    if (!jsonString) {
      return NextResponse.json(
        { success: false, error: "Missing form data." },
        { status: 400 }
      );
    }

    const parsedData = JSON.parse(jsonString);
    const validation = IntegrityReportSchema.safeParse(parsedData);

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

    // --- FIX: Get IP address from headers (more robust method) ---
    // 'x-forwarded-for' contains the origin IP and can be a comma-separated list.
    // We take the first IP in the list.
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

    // 3. Call the server-side action
    const result = await submitIntegrityReport(
      validation.data,
      file,
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
