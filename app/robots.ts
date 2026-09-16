import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /verificar is the password-gated report lookup; /api/ is rate-limited
      // by proxy.ts and has nothing worth crawling.
      disallow: ["/api/", "/verificar"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
