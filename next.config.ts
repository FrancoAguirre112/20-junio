import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Optimized variants stay in the edge cache for a year instead of 4h,
    // so repeat views don't re-hit the optimizer.
    minimumCacheTTL: 31536000,
    // Trimmed from the defaults (8 device + 7 image widths). Fewer candidate
    // widths = fewer distinct /_next/image objects to generate and cache.
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.20dejunio.com.ar",
          },
          {
            key: "Server",
            value: "",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self'",
              "frame-src https://www.google.com https://maps.google.com",
              "connect-src 'self' https://www.google.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), fullscreen=(self)",
          },
        ],
      },
      {
        // Content-addressed by filename: rename the file when you change it.
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
