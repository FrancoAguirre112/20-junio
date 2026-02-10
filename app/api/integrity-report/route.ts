import { NextResponse, NextRequest } from "next/server";
import { submitIntegrityReport } from "@/lib/supabase/actions";
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

    // 2. Safe JSON Parsing (Catch syntax errors specifically)
    let parsedData;
    try {
      parsedData = JSON.parse(jsonString);
    } catch (e) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON format." },
        { status: 400 },
      );
    }

    // 3. Zod Validation (Data Content)
    const validation = IntegrityReportSchema.safeParse(parsedData);
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
      // Check Size
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { success: false, error: "File size exceeds 5MB limit." },
          { status: 400 },
        );
      }

      // Check Type (MIME)
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
    // 7. Secure Error Handling (Don't leak internals)
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
