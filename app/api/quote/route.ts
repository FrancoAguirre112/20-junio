import { NextResponse, NextRequest } from "next/server"; // 1. Import NextRequest
import { submitQuote } from "@/lib/supabase/actions";
import { QuoteFormSchema } from "@/lib/schemas";

export async function POST(request: NextRequest) {
  // 2. Use NextRequest as the type
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

    // 1. Validate the form data against the Zod schema
    const parsedData = JSON.parse(jsonString);
    const validation = QuoteFormSchema.safeParse(parsedData);

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

    // 2. FIX: Get the user's IP address from headers
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

    // 3. Call the server-side action to handle the submission
    const result = await submitQuote(validation.data, file, ip);

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
