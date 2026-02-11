import { NextResponse, NextRequest } from "next/server";
import { submitQuote, verifyRecaptcha } from "@/lib/supabase/actions"; // 1. Importar la función de verificación
import { QuoteFormSchema } from "@/lib/schemas";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const jsonString = formData.get("jsonData") as string;

    if (!jsonString) {
      return NextResponse.json(
        { success: false, error: "Missing form data." },
        { status: 400 },
      );
    }

    // 2. Parsear JSON y extraer el token de reCAPTCHA
    const parsedData = JSON.parse(jsonString);
    const { gReCaptchaToken, ...cleanData } = parsedData;

    // 3. VERIFICACIÓN reCAPTCHA (Obligatorio para el pentest)
    const isHuman = await verifyRecaptcha(gReCaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { success: false, error: "Verificación de bot fallida." },
        { status: 400 },
      );
    }

    // 4. Validar los datos limpios (sin el token) contra el esquema Zod
    const validation = QuoteFormSchema.safeParse(cleanData);

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

    // 5. Obtener la dirección IP del usuario desde los encabezados
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

    // 6. Llamar a la acción del lado del servidor para procesar la cotización
    const result = await submitQuote(validation.data, file, ip);

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
