import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// 1. Initialize Redis and Ratelimit
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"), // 5 requests per minute
  analytics: true,
  prefix: "@upstash/ratelimit",
});

// 2. Define which paths to protect
export const config = {
  matcher: "/api/:path*", // Protect all API routes
};

// 3. Rename function to 'proxy'
export default async function proxy(request: NextRequest) {
  // Only enforce rate limiting if the Env vars are set
  if (!process.env.UPSTASH_REDIS_REST_URL) {
    return NextResponse.next();
  }

  // 4. Identify the user (IP Address) using Headers (The Fix for 'request.ip')
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

  // 5. Check the limit
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);

  // 6. If limit exceeded, return 429 Error
  if (!success) {
    return NextResponse.json(
      {
        error: "Too Many Requests",
        message:
          "Ha excedido el límite de solicitudes. Por favor intente nuevamente en un minuto.",
      },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      },
    );
  }

  // 7. If OK, proceed
  const response = NextResponse.next();

  // Optional: Add headers so the client knows their limit
  response.headers.set("X-RateLimit-Limit", limit.toString());
  response.headers.set("X-RateLimit-Remaining", remaining.toString());

  return response;
}
