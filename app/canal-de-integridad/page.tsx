// /app/canal-integridad/page.tsx

// Make sure to import your form component from its correct location
import { IntegrityReportForm } from "@/components/forms/IntegrityReportForm";

export default function CanalIntegridadPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="mt-20">
        {/* --- Hero Banner Section --- */}
        <header className="bg-main-500 py-20 text-white">
          <div className="relative mx-auto px-4 max-w-4xl text-center">
            <h1 className="font-bold text-4xl md:text-5xl">
              Canal de Integridad y Gestión de No Conformidades
            </h1>
            <p className="mt-4 text-gray-100 text-lg">
              Un espacio seguro y confidencial para reportar inquietudes y
              asegurar la calidad de nuestros procesos.
            </p>
          </div>
        </header>

        {/* --- Form Section --- */}
        <div className="mx-auto px-4 py-16 max-w-2xl">
          <IntegrityReportForm />
        </div>
      </main>
    </div>
  );
}
