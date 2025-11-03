import Image from "next/image";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";

// --- REMOVE THESE ---
// import { MDXRemote } from "next-mdx-remote/rsc";
// import { useMDXComponents } from "@/components/mdx-components";

// --- ADD THIS ---
import { MdxContent } from "@/components/MdxContent"; // Import your new Client Component

const postsDirectory = path.join(process.cwd(), "content");

// --- Funciones de obtención de datos ---
function getBlogPost(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);
    return { frontmatter, content };
  } catch (err) {
    return null; // El archivo no existe
  }
}

function getPostSlugs() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    blog: filename.replace(".mdx", ""),
  }));
}

// --- Generación de metadatos y páginas ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog: string }>;
}): Promise<Metadata> {
  const { blog } = await params;
  const post = getBlogPost(blog);

  if (!post) {
    return { title: "Post no encontrado" };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export async function generateStaticParams() {
  return getPostSlugs();
}

// --- El componente de la página (Server Component) ---
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog: slug } = await params; // Correctly await params
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  // --- REMOVE THIS LINE ---
  // const components = useMDXComponents({}); // <-- This was the error

  return (
    <main className="mx-auto mt-[5dvh] px-4 py-8 md:py-12 container">
      <article className="mx-auto max-w-3xl">
        <header className="mb-8 md:mb-12">
          <h1 className="mb-4 font-extrabold text-gray-900 text-3xl md:text-5xl leading-tight">
            {frontmatter.title}
          </h1>
        </header>

        {/* --- Renderizado del Índice --- */}
        {frontmatter.sectionIds && frontmatter.sectionIds.length > 0 && (
          <nav className="mb-8 md:mb-12 py-4 border-gray-200 border-t border-b">
            {/* ... (tu código del índice va aquí, no hay cambios) ... */}
            <h3 className="mb-2 font-bold text-gray-800 text-lg">
              En esta página:
            </h3>
            <ul className="space-y-1">
              {frontmatter.sectionIds.map((id: string) => (
                <li key={id} className="ml-4">
                  <a href={`#${id}`} className="text-blue-600 hover:underline">
                    {id.replace(/-/g, " ").charAt(0).toUpperCase() +
                      id.replace(/-/g, " ").slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* --- Renderizado de la Imagen de Portada --- */}
        {/* ... (tu código de imagen comentado va aquí) ... */}

        {/* --- Renderizado del Contenido MDX --- */}
        {/* AQUÍ ESTÁ EL CAMBIO:
          En lugar de <MDXRemote>, usamos nuestro nuevo componente <MdxContent>
          y le pasamos el 'content' (string) como prop.
        */}
        <MdxContent source={content} />
      </article>
    </main>
  );
}
