module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/auth-types.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USER_ROLES",
    ()=>USER_ROLES,
    "isSessionUser",
    ()=>isSessionUser,
    "isUserRole",
    ()=>isUserRole
]);
const USER_ROLES = [
    "master",
    "admin",
    "comercial",
    "cs",
    "leitura"
];
function isUserRole(value) {
    return typeof value === "string" && USER_ROLES.includes(value);
}
function isSessionUser(value) {
    if (!value || typeof value !== "object") return false;
    const candidate = value;
    return typeof candidate.id === "string" && typeof candidate.name === "string" && typeof candidate.email === "string" && isUserRole(candidate.role) && typeof candidate.unitId === "string" && typeof candidate.unitName === "string" && typeof candidate.isActive === "boolean" && (candidate.avatar === undefined || typeof candidate.avatar === "string");
}
}),
"[project]/src/lib/auth-session.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildDemoUser",
    ()=>buildDemoUser,
    "createSessionToken",
    ()=>createSessionToken,
    "verifySessionToken",
    ()=>verifySessionToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$types$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-types.ts [middleware] (ecmascript)");
;
const FALLBACK_AUTH_SECRET = "flow-dev-auth-secret-change-me";
const ROLE_BY_EMAIL = {
    "master@flow.demo": "master",
    "master@menux.co": "master",
    "admin@flow.demo": "admin",
    "comercial@flow.demo": "comercial",
    "cs@flow.demo": "cs",
    "leitura@flow.demo": "leitura"
};
const DEFAULT_USER_ID_BY_ROLE = {
    master: "user-1",
    admin: "user-2",
    comercial: "user-3",
    cs: "user-5",
    leitura: "user-8"
};
const FIXED_DEMO_PROFILE_BY_EMAIL = {
    "master@flow.demo": {
        id: "user-1",
        name: "Rafael Mendes"
    },
    "master@menux.co": {
        id: "user-1",
        name: "Master"
    },
    "admin@flow.demo": {
        id: "user-2",
        name: "Camila Ferreira"
    },
    "comercial@flow.demo": {
        id: "user-3",
        name: "Lucas Oliveira"
    },
    "cs@flow.demo": {
        id: "user-5",
        name: "Fernanda Lima"
    },
    "leitura@flow.demo": {
        id: "user-8",
        name: "Pedro Almeida"
    }
};
function getAuthSecret() {
    const value = process.env.FLOW_AUTH_SECRET;
    return value && value.length >= 16 ? value : FALLBACK_AUTH_SECRET;
}
function toBase64Url(data) {
    if (typeof Buffer !== "undefined") {
        return Buffer.from(data).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
    }
    let binary = "";
    for (const byte of data){
        binary += String.fromCharCode(byte);
    }
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function fromBase64Url(data) {
    const normalized = data.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized + "=".repeat((4 - normalized.length % 4) % 4);
    try {
        if (typeof Buffer !== "undefined") {
            return new Uint8Array(Buffer.from(padded, "base64"));
        }
        const binary = atob(padded);
        const out = new Uint8Array(binary.length);
        for(let i = 0; i < binary.length; i += 1){
            out[i] = binary.charCodeAt(i);
        }
        return out;
    } catch  {
        return null;
    }
}
function asArrayBuffer(bytes) {
    return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}
async function importSigningKey() {
    const raw = new TextEncoder().encode(getAuthSecret());
    return crypto.subtle.importKey("raw", raw, {
        name: "HMAC",
        hash: "SHA-256"
    }, false, [
        "sign",
        "verify"
    ]);
}
function isSessionTokenPayload(value) {
    if (!value || typeof value !== "object") return false;
    const payload = value;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$types$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["isSessionUser"])(payload.user) && typeof payload.iat === "number" && Number.isFinite(payload.iat) && typeof payload.exp === "number" && Number.isFinite(payload.exp) && payload.exp > payload.iat;
}
function normalizeName(email) {
    const localPart = email.split("@")[0] ?? "";
    const cleaned = localPart.replace(/[._-]+/g, " ").replace(/\s+/g, " ").trim();
    if (!cleaned) return "Usuário Demo";
    return cleaned.split(" ").map((part)=>part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(" ");
}
function buildDemoUser(email) {
    const normalizedEmail = email.trim().toLowerCase();
    const role = ROLE_BY_EMAIL[normalizedEmail] ?? "comercial";
    const fixedProfile = FIXED_DEMO_PROFILE_BY_EMAIL[normalizedEmail];
    const id = fixedProfile?.id ?? DEFAULT_USER_ID_BY_ROLE[role];
    const name = fixedProfile?.name ?? normalizeName(normalizedEmail);
    return {
        id,
        name,
        email: normalizedEmail,
        role,
        unitId: "unit-1",
        unitName: "Matriz",
        isActive: true
    };
}
async function createSessionToken(user, maxAgeSeconds) {
    const nowSeconds = Math.floor(Date.now() / 1000);
    const payload = {
        user,
        iat: nowSeconds,
        exp: nowSeconds + maxAgeSeconds
    };
    const payloadPart = toBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
    const key = await importSigningKey();
    const signatureBuffer = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payloadPart));
    const signaturePart = toBase64Url(new Uint8Array(signatureBuffer));
    return `${payloadPart}.${signaturePart}`;
}
async function verifySessionToken(token) {
    const [payloadPart, signaturePart, extra] = token.split(".");
    if (!payloadPart || !signaturePart || extra) return null;
    const payloadBytes = fromBase64Url(payloadPart);
    const signatureBytes = fromBase64Url(signaturePart);
    if (!payloadBytes || !signatureBytes) return null;
    const key = await importSigningKey();
    const isValidSignature = await crypto.subtle.verify("HMAC", key, asArrayBuffer(signatureBytes), new TextEncoder().encode(payloadPart));
    if (!isValidSignature) return null;
    try {
        const parsed = JSON.parse(new TextDecoder().decode(payloadBytes));
        if (!isSessionTokenPayload(parsed)) return null;
        if (parsed.exp <= Math.floor(Date.now() / 1000)) return null;
        return parsed;
    } catch  {
        return null;
    }
}
}),
"[project]/src/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$session$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-session.ts [middleware] (ecmascript)");
;
;
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
    "/intelligence"
];
const authRoutes = [
    "/login",
    "/forgot-password",
    "/reset-password"
];
const sellerLikeRoles = [
    "comercial",
    "cs",
    "leitura"
];
const sellerBlockedPrefixes = [
    "/audit",
    "/settings",
    "/reports"
];
async function proxy(request) {
    const { pathname } = request.nextUrl;
    const requestedPathWithSearch = `${pathname}${request.nextUrl.search}`;
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    const session = token ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$session$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["verifySessionToken"])(token) : null;
    if (pathname.startsWith("/activate")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const isProtected = protectedRoutes.some((route)=>pathname.startsWith(route));
    if (isProtected && !session) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", requestedPathWithSearch);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    if (session) {
        const userRole = session.user.role;
        const isSellerLike = sellerLikeRoles.includes(userRole);
        const blockedForRole = isSellerLike && sellerBlockedPrefixes.some((prefix)=>pathname.startsWith(prefix));
        if (blockedForRole) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/dashboard", request.url));
        }
    }
    const isAuthRoute = authRoutes.some((route)=>pathname.startsWith(route));
    if (isAuthRoute && session) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/dashboard", request.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
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
        "/activate/:path*"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__103481cf._.js.map