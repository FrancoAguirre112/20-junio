import { NextResponse } from "next/server";
import { submitQuote } from "@/lib/supabase/actions";
import { QuoteFormSchema } from "@/lib/schemas";

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

    // 2. Get the user's IP address
    const ip = request.headers.get("x-forwarded-for") ?? request.ip;

    // 3. Call the server-side action to handle the submission
    const result = await submitQuote(validation.data, file, ip || "unknown");

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
