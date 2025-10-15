// /app/salud-visual/[blog]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { allBlogPosts } from "@/data/blog-posts"; // Ajusta la ruta si es necesario

// (Opcional pero recomendado) Función para generar metadata dinámica para SEO
export async function generateMetadata({
  params,
}: {
  params: { blog: string };
}) {
  const post = allBlogPosts.find((p) => p.id === params.blog);

  if (!post) {
    return {
      title: "Post no encontrado",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

// Genera las páginas estáticas en el momento de la compilación
export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    blog: post.id,
  }));
}

// Tipado para las props de la página
type BlogPostPageProps = {
  params: {
    blog: string; // 'blog' coincide con el nombre de la carpeta [blog]
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { blog: slug } = params;

  // Encontrar el post correspondiente al slug de la URL
  const post = allBlogPosts.find((p) => p.id === slug);

  // Si no se encuentra ningún post, se renderiza la página 404 de Next.js
  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto px-4 py-8 md:py-12 container">
      <article className="mx-auto max-w-3xl">
        <header className="mb-8 md:mb-12">
          {/* Título del Post */}
          <h1 className="mb-4 font-extrabold text-gray-900 text-3xl md:text-5xl leading-tight">
            {post.title}
          </h1>
          {/* Descripción corta */}
          <p className="text-gray-600 text-lg md:text-xl">{post.description}</p>
        </header>

        {/* Imagen de Portada */}
        <div className="relative shadow-lg mb-8 md:mb-12 rounded-lg w-full h-64 md:h-96 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={`Imagen de portada para ${post.title}`}
            fill
            priority // Carga esta imagen con prioridad ya que es importante (LCP)
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Contenido principal - Secciones */}
        <div className="prose-li:my-1 max-w-none prose-a:text-blue-600 hover:prose-a:underline prose prose-lg">
          {post.sections.map((section, index) => (
            <section key={index} className="mb-8">
              {/* Título de la Sección */}
              <h2 className="mb-4 pb-2 border-gray-200 border-b font-bold text-2xl md:text-3xl">
                {section.title}
              </h2>
              {/* Contenido de la Sección (que ya es un ReactElement) */}
              <div>{section.content}</div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
