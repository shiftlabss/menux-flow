import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth-session";
import type { UserRole } from "@/lib/auth-types";

const AUTH_COOKIE_NAME = "flow-token";

const protectedRoutes = [
  "/dashboard",
  "/activities",
  "/pipes",
  "/clients",
  "/finance",
  "/goals",
  "/reports",
  "/audit",
  "/settings",
  "/intelligence",
];

const authRoutes = ["/login", "/forgot-password", "/reset-password"];
const sellerLikeRoles: UserRole[] = ["comercial", "cs", "leitura"];
const sellerBlockedPrefixes = ["/audit", "/settings", "/reports"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestedPathWithSearch = `${pathname}${request.nextUrl.search}`;
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const session = token ? await verifySessionToken(token) : null;

  if (pathname.startsWith("/activate")) {
    return NextResponse.next();
  }

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", requestedPathWithSearch);
    return NextResponse.redirect(loginUrl);
  }

  if (session) {
    const userRole = session.user.role;
    const isSellerLike = sellerLikeRoles.includes(userRole);
    const blockedForRole = isSellerLike && sellerBlockedPrefixes.some((prefix) => pathname.startsWith(prefix));

    if (blockedForRole) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/activities/:path*",
    "/pipes/:path*",
    "/clients/:path*",
    "/finance/:path*",
    "/goals/:path*",
    "/reports/:path*",
    "/audit/:path*",
    "/settings/:path*",
    "/intelligence/:path*",
    "/login",
    "/forgot-password",
    "/reset-password",
    "/activate/:path*",
  ],
};
