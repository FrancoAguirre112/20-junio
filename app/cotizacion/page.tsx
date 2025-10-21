// /app/cotizacion/page.tsx

import { QuoteForm } from "@/components/forms/QuoteForm"; // 1. Import your existing form component

export default function CotizacionPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="mt-20">
        {/* --- Hero Banner Section --- */}
        <header className="bg-main-500 py-20 text-white">
          <div className="relative mx-auto px-4 max-w-4xl text-center">
            <h1 className="font-bold text-4xl md:text-5xl">
              Solicitar Cotización
            </h1>
            <p className="mt-4 text-main-100 text-lg">
              Complete el siguiente formulario y nos pondremos en contacto a la
              brevedad para asistirlo con su pedido.
            </p>
          </div>
        </header>

        {/* --- Form Section --- */}
        <div className="mx-auto px-4 py-16 max-w-2xl">
          <QuoteForm /> {/* 2. Place your form component here */}
        </div>
      </main>
    </div>
  );
}
