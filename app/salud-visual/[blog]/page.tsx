// /app/salud-visual/[blog]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { allBlogPosts } from "@/data/blog-posts"; // Adjust path if needed

// --- CORRECTED METADATA FUNCTION ---
export async function generateMetadata({
  params,
}: {
  // 1. The 'params' prop is now typed as a Promise
  params: Promise<{ blog: string }>;
}) {
  // 2. We must 'await' the params to get the slug value
  const { blog } = await params;

  const post = allBlogPosts.find((p) => p.id === blog);

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

// generateStaticParams does NOT receive params, so it remains unchanged
export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    blog: post.id,
  }));
}

// --- CORRECTED PAGE COMPONENT ---
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog: slug } = await params;

  const post = allBlogPosts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mt-20">
      <div className="mx-auto px-4 py-8 md:py-12 container">
        <article className="mx-auto max-w-3xl">
          <header className="mb-8 md:mb-12">
            <h1 className="mb-4 font-extrabold text-gray-900 text-3xl md:text-5xl leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              {post.description}
            </p>
          </header>

          {post.sectionIds && post.sectionIds.length > 0 && (
            <nav className="mb-8 md:mb-12 py-4 border-gray-200 border-t border-b">
              <h3 className="mb-2 font-bold text-gray-800 text-lg">
                En esta página:
              </h3>
              <ul className="space-y-1">
                {post.sectionIds.map((id) => {
                  const section = post.sections.find((sec) => sec.id === id);
                  if (!section) return null;
                  return (
                    <li key={id} className="ml-4">
                      <a
                        href={`#${id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {section.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}

          {post.coverImage && (
            <div className="relative shadow-lg mb-8 md:mb-12 rounded-lg w-full h-64 md:h-96 overflow-hidden">
              <Image
                src={post.coverImage}
                alt={`Imagen de portada para ${post.title}`}
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          <div className="prose-li:my-1 max-w-none prose-a:text-blue-600 hover:prose-a:underline prose prose-lg">
            {post.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-8 scroll-mt-24"
              >
                <h2 className="mb-4 pb-2 border-gray-200 border-b font-bold text-2xl md:text-3xl">
                  {section.title}
                </h2>
                <div>{section.content}</div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
