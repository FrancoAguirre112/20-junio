// /app/salud-visual/page.tsx

import Link from "next/link";
import Image from "next/image"; // Usaremos Image para el fondo
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 1. Definimos los slugs de los 3 posts que queremos mostrar
const mainPostSlugs = [
  "mantenga-sus-ojos-sanos",
  "como-funcionan-los-ojos",
  "8-cosas-para-proteger-su-vision",
];

/**
 * Función para obtener solo los 3 posts principales.
 * Lee el frontmatter de los archivos MDX especificados.
 */
function getMainBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content");

  const posts = mainPostSlugs.map((slug) => {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Usamos gray-matter para leer el frontmatter
    const { data: frontmatter } = matter(fileContents);

    return {
      slug,
      frontmatter: frontmatter as {
        title: string;
        description: string;
        coverImage: string;
      },
    };
  });

  return posts;
}

// 2. Ya no necesitamos la función slugify,
// el nombre del archivo es el slug.

export default function SaludVisualPage() {
  // 3. Obtenemos los posts desde nuestra nueva función
  const mainBlogPosts = getMainBlogPosts();

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="mt-20">
        {/* Encabezado de la página */}
        <header className="flex justify-center items-center bg-[url(/assets/images/clouds.png)] py-10">
          <div className="bg-white p-5 rounded-lg">
            <h1 className="mb-4 font-bold text-gray-800 text-2xl md:text-3xl">
              Visión saludable
            </h1>
            <p className="mx-auto max-w-3xl text-gray-600 text-lg">
              Si usted siente los ojos saludables, es fácil asumir que están
              saludables. Sin embargo, muchas enfermedades de los ojos no tienen
              señales de advertencia...
            </p>
          </div>
        </header>

        {/* Contenedor de las tarjetas de blog */}
        <div className="space-y-8 mx-auto mt-10 pb-20 max-w-4xl">
          {/* 4. Actualizamos el map para usar `post.slug` y `post.frontmatter` */}
          {mainBlogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/salud-visual/${post.slug}`} // Usamos el slug directamente
              className="group block"
            >
              <article className="flex md:flex-row flex-col bg-white shadow-sm hover:shadow-lg border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300">
                {/* --- SECCIÓN DE IMAGEN CORREGIDA --- */}
                {/* h-48 en móvil, w-1/3 y h-auto en desktop para que la altura se ajuste */}
                <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                  <Image
                    src={post.frontmatter.coverImage}
                    alt={`Imagen de portada para ${post.frontmatter.title}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* --- SECCIÓN DE CONTENIDO CORREGIDA --- */}
                {/* w-full en móvil, w-2/3 en desktop */}
                <div className="flex flex-col p-6 w-full md:w-2/3">
                  <h2 className="mb-2 font-bold text-gray-900 text-2xl">
                    {post.frontmatter.title}
                  </h2>
                  <p className="flex-grow mb-4 text-gray-600">
                    {post.frontmatter.description}
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
