import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

// The same navigation links from your navbar for consistency
const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Nuestra Historia y Propósito" },
  { href: "/productos", label: "Productos" },
  { href: "/salud-visual", label: "Salud Visual" },
  { href: "/cotizacion", label: "Obtener Cotización" },
];

// Your legal links
const legalLinks = [
  { href: "/aviso-de-privacidad", label: "Aviso de Privacidad" },
  // { href: "/terminos-y-condiciones", label: "Términos y Condiciones" },
];

// --- NEW: Added your requested compliance links ---
const complianceLinks = [
  {
    href: "/gestion-de-incidencias-de-calidad",
    label: "Gestión de Incidencias de Calidad",
  },
  {
    href: "/canal-de-integridad",
    label: "Canal de Integridad y Gestión de No Conformidades",
  },
  {
    href: "/assets/20 DE JUNIO - CODIGO DE ETICA.pdf",
    label: "Código de Ética",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-gray-200 border-t text-black">
      <div className="mx-auto px-4 py-12 container">
        {/* Main grid. On desktop (md) it's 4 columns. 
          On mobile, it's 1 column.
        */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
          {/* 1. Brand/Logo Section 
              - items-center (mobile) centers the logo.
              - md:items-start (desktop) aligns it left.
          */}
          <div className="flex flex-col items-center md:items-start md:col-span-1">
            <Link href="/" passHref>
              <div className="flex items-center gap-2 max-w-[30dvw] md:max-w-[10dvw] cursor-pointer">
                <Image
                  src={"/assets/icons/Logo.webp"}
                  alt="20 de junio"
                  height={1000}
                  width={1000}
                  className=""
                />
              </div>
            </Link>
          </div>

          {/* 2. Navigation Links 
              - text-center (mobile) centers the heading and links.
              - md:text-left (desktop) aligns them left.
          */}
          <div className="md:text-left text-center">
            <h3 className="mb-4 font-bold text-sm uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info 
              - text-center (mobile) centers heading.
              - md:text-left (desktop) aligns left.
              - List items use justify-center (mobile) and md:justify-start (desktop).
          */}
          <div className="md:text-left text-center">
            <h3 className="mb-4 font-bold text-sm uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Phone size={18} />
                <a href="tel:01145717540" className="hover:text-gray-500">
                  (011) 4571-7540
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Mail size={18} />
                <a
                  href="mailto:info@20dejunio.com.ar"
                  className="hover:text-gray-500"
                >
                  info@20dejunio.com.ar
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <MapPin size={18} />
                <span>Llavallol 4331 - C.P. 1419, CABA</span>
              </li>
            </ul>
          </div>

          {/* 4. Social & Legal Links 
              - text-center (mobile) / md:text-left (desktop)
              - Social icons use justify-center (mobile) / md:justify-start (desktop)
          */}
          <div className="md:text-left text-center">
            <h3 className="mb-4 font-bold text-sm uppercase tracking-wider">
              Complimiento
            </h3>
            <ul className="space-y-2 mb-6">
              {/* --- NEW LINKS ADDED HERE --- */}
              {complianceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* --- EXISTING LEGAL LINKS --- */}
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar 
          - Changed border-gray-700 to border-gray-200
          - Changed text-gray-400 to text-gray-500
          - items-center will center the text on mobile
          - Removed extra link to keep it clean
      */}
      <div className="mt-8 py-6 border-gray-200 border-t">
        <div className="flex flex-col justify-center items-center mx-auto px-4 text-gray-500 text-sm container">
          <p>
            &copy; {new Date().getFullYear()} 20 de Junio. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
