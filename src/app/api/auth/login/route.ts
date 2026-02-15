import { NextRequest, NextResponse } from "next/server";
import { buildDemoUser, createSessionToken } from "@/lib/auth-session";

const AUTH_COOKIE_NAME = "flow-token";
const REMEMBER_ME_MAX_AGE_SECONDS = 30 * 24 * 60 * 60;
const SESSION_MAX_AGE_SECONDS = 8 * 60 * 60;

interface LoginBody {
  email?: string;
  rememberMe?: boolean;
}

export async function POST(request: NextRequest) {
  let body: LoginBody;

  try {
    body = (await request.json()) as LoginBody;
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "E-mail inválido para login." },
      { status: 400 }
    );
  }

  const rememberMe = body.rememberMe === true;
  const maxAgeSeconds = rememberMe
    ? REMEMBER_ME_MAX_AGE_SECONDS
    : SESSION_MAX_AGE_SECONDS;

  const user = buildDemoUser(email);
  const token = await createSessionToken(user, maxAgeSeconds);

  const response = NextResponse.json({ user });
  response.cookies.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: maxAgeSeconds,
    path: "/",
  });

  return response;
}
