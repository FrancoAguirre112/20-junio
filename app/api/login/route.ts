import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    const adminPassword = process.env.ADMIN_ACCESS_PASSWORD;
    if (!adminPassword || password !== adminPassword) {
      return NextResponse.json(
        { error: "Credenciales inválidas." },
        { status: 401 },
      );
    }

    const secret = process.env.SESSION_SECRET;
    if (!secret) {
      console.error("SESSION_SECRET is not configured");
      return NextResponse.json(
        { error: "Error interno del servidor." },
        { status: 500 },
      );
    }

    const token = await new SignJWT({ role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(new TextEncoder().encode(secret));

    const cookieStore = await cookies();
    cookieStore.set("session", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 3600,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 },
    );
  }
}
