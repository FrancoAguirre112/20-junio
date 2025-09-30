import { NextResponse } from "next/server";
import { submitIntegrityReport } from "@/lib/supabase/actions";
import { IntegrityReportSchema } from "@/lib/schemas";

export async function POST(request: Request) {
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

    // 1. Validate form data
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

    // 2. Get IP address
    const ip = request.headers.get("x-forwarded-for") ?? request.ip;

    // 3. Call the server-side action
    const result = await submitIntegrityReport(
      validation.data,
      file,
      ip || "unknown"
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
