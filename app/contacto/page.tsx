import { MapPin, Phone, Mail } from "lucide-react";
import type { Metadata } from "next";

// Optional: Updated metadata for SEO
export const metadata: Metadata = {
  title: "Contacto | 20 de Junio",
  description: "Información de contacto y ubicación de 20 de Junio.",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-26">
      <div className="mx-auto px-4 lg:px-8 max-w-7xl container">
        {/* === Contact Info Grid === */}
        <div className="gap-12 md:gap-8 grid grid-cols-1 md:grid-cols-3 mb-16 md:mb-24">
          {/* 1. Address */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <MapPin className="w-14 h-14 text-gray-500" strokeWidth={1.5} />
            </div>
            <p className="text-gray-700 text-lg">
              Llavallol 4331 - C.P. 1419
              <br />
              C.A.B.A. – Argentina
            </p>
          </div>

          {/* 2. Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Phone className="w-14 h-14 text-gray-500" strokeWidth={1.5} />
            </div>
            <a
              href="tel:01145717540"
              className="text-gray-700 hover:text-blue-600 text-lg transition-colors"
            >
              (011) 4571-7540
            </a>
          </div>

          {/* 3. Email (Simplified for one address) */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Mail className="w-14 h-14 text-gray-500" strokeWidth={1.5} />
            </div>
            <a
              href="mailto:info@20dejunio.com.ar"
              className="text-gray-700 hover:text-blue-600 text-lg transition-colors"
            >
              info@20dejunio.com.ar
            </a>
          </div>
        </div>

        {/* === Map Section === */}
        <div className="w-full">
          <div className="shadow-xl border border-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Llavallol%204331+(20%20de%20Junio)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación 20 de Junio"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
