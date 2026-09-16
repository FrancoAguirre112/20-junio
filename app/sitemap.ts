import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Same source of truth as generateStaticParams in /salud-visual/[blog].
const postsDirectory = path.join(process.cwd(), "content");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    route: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { route: "", priority: 1, changeFrequency: "monthly" },
    { route: "/productos", priority: 0.9, changeFrequency: "monthly" },
    { route: "/salud-visual", priority: 0.8, changeFrequency: "weekly" },
    { route: "/sobre-nosotros", priority: 0.7, changeFrequency: "yearly" },
    { route: "/contacto", priority: 0.7, changeFrequency: "yearly" },
    { route: "/cotizacion", priority: 0.7, changeFrequency: "yearly" },
    { route: "/canal-de-integridad", priority: 0.5, changeFrequency: "yearly" },
    {
      route: "/gestion-de-incidencias-de-calidad",
      priority: 0.5,
      changeFrequency: "yearly",
    },
    { route: "/aviso-de-privacidad", priority: 0.3, changeFrequency: "yearly" },
  ];

  const posts = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      return {
        url: `${SITE_URL}/salud-visual/${slug}`,
        // No date in the frontmatter, so fall back to the file's mtime.
        lastModified: fs.statSync(path.join(postsDirectory, filename)).mtime,
        changeFrequency: "yearly" as const,
        priority: 0.6,
      };
    });

  return [
    ...staticRoutes.map(({ route, priority, changeFrequency }) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...posts,
  ];
}
