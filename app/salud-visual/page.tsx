// /app/salud-visual/page.tsx

import Link from "next/link";
import Image from "next/image";
import { allBlogPosts } from "@/data/blog-posts";

/**
 * Helper para convertir un título en una URL amigable (slug).
 * Ejemplo: "Mantenga sus ojos sanos" -> "mantenga-sus-ojos-sanos"
 */
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Reemplaza espacios con -
    .replace(/[^\w\-]+/g, "") // Remueve caracteres no alfanuméricos
    .replace(/\-\-+/g, "-"); // Reemplaza múltiples - con uno solo
};

export default function SaludVisualPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="mt-20">
        {/* Encabezado de la página */}
        <header className="flex justify-center items-center bg-[url(/assets/images/hero_eyes.jpg)] py-10">
          <div className="bg-white p-5 rounded-lg">
            <h1 className="mb-4 font-bold text-gray-800 text-2xl md:text-3xl">
              Visión saludable
            </h1>
            <p className="mx-auto max-w-3xl text-gray-600 text-lg">
              Si usted siente los ojos saludables, es fácil asumir que están
              saludables. Sin embargo, muchas enfermedades de los ojos no tienen
              señales de advertencia, por lo que usted podría tener un problema
              en los ojos y no saberlo. ¡La buena noticia es que hay muchas
              cosas que puede hacer para prepararse para ver bien toda la vida!
            </p>
          </div>
        </header>

        {/* Contenedor de las tarjetas de blog */}
        <div className="space-y-8 mx-auto mt-10 max-w-4xl">
          {allBlogPosts.map((post) => (
            <Link
              key={post.title}
              href={`/salud-visual/${slugify(post.title)}`}
              className="group block" // 'group' permite efectos hover en elementos hijos
            >
              <article className="flex md:flex-row flex-col bg-white shadow-sm hover:shadow-lg border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300">
                {/* Sección de la Imagen */}
                <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                  <Image
                    src={post.coverImage}
                    alt={`Imagen de portada para ${post.title}`}
                    fill // 'fill' hace que la imagen llene el contenedor
                    style={{ objectFit: "cover" }} // Asegura que la imagen cubra el espacio sin distorsionarse
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Sección del Contenido */}
                <div className="flex flex-col p-6">
                  <h2 className="mb-2 font-bold text-gray-900 text-2xl">
                    {post.title}
                  </h2>
                  <p className="flex-grow mb-4 text-gray-600">
                    {post.description}
                  </p>
                  <span className="flex items-center self-start font-semibold text-blue-600 group-hover:underline">
                    Obtenga más información
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
