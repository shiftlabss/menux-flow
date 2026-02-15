import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth-session";

const AUTH_COOKIE_NAME = "flow-token";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const payload = await verifySessionToken(token);
  if (!payload) {
    const response = NextResponse.json(
      { error: "Sessão inválida ou expirada." },
      { status: 401 }
    );
    response.cookies.set(AUTH_COOKIE_NAME, "", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ user: payload.user });
}
