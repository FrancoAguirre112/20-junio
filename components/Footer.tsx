import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-t-gray-200 text-slate-700">
      <div className="mx-auto px-4 py-10 container">
        <div className="flex justify-between gap-12">
          {/* Column 1: Logo */}
          <div className="w-40">
            {" "}
            {/* A fixed width is often more reliable than dvw here */}
            <Link href="/" passHref>
              <Image
                src={"/assets/icons/Logo.webp"}
                alt="20 de Junio Logo"
                height={1000}
                width={1000}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wider">
              Navegación
            </h4>
            <div className="flex gap-2">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/productos"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/salud-visual"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Salud Visual
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cotizacion"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Obtener Cotización
                  </Link>
                </li>
              </ul>

              <ul className="space-y-2">
                <li>
                  <Link
                    href="/gestion-de-incidencias-de-calidad"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Gestión de Incidencias de Calidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/canal-de-integridad"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Canal de Integridad y Gestión de No Conformidades
                  </Link>
                </li>
                <li>
                  <Link
                    href="/assets/20 DE JUNIO - CODIGO DE ETICA.pdf"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Código de Ética
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-2 text-sm">
              <p>Campana 4689 - C1419AHM - CABA</p>
              <p>
                <strong>Tel./Fax:</strong> 11 4571 9291
                <br />
                <strong>Cel.:</strong> 11 3172 9667
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-t-gray-200 text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} 20 de Junio. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
