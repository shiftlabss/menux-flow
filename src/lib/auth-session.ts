import { isSessionUser, type SessionUser, type UserRole } from "@/lib/auth-types";

const FALLBACK_AUTH_SECRET = "flow-dev-auth-secret-change-me";

const ROLE_BY_EMAIL: Record<string, UserRole> = {
  "master@flow.demo": "master",
  "admin@flow.demo": "admin",
  "comercial@flow.demo": "comercial",
  "cs@flow.demo": "cs",
  "leitura@flow.demo": "leitura",
};

export interface SessionTokenPayload {
  user: SessionUser;
  iat: number;
  exp: number;
}

function getAuthSecret(): string {
  const value = process.env.FLOW_AUTH_SECRET;
  return value && value.length >= 16 ? value : FALLBACK_AUTH_SECRET;
}

function toBase64Url(data: Uint8Array): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(data)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");
  }

  let binary = "";
  for (const byte of data) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(data: string): Uint8Array | null {
  const normalized = data.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);

  try {
    if (typeof Buffer !== "undefined") {
      return new Uint8Array(Buffer.from(padded, "base64"));
    }

    const binary = atob(padded);
    const out = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      out[i] = binary.charCodeAt(i);
    }
    return out;
  } catch {
    return null;
  }
}

function asArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength
  ) as ArrayBuffer;
}

async function importSigningKey(): Promise<CryptoKey> {
  const raw = new TextEncoder().encode(getAuthSecret());
  return crypto.subtle.importKey(
    "raw",
    raw,
    {
      name: "HMAC",
      hash: "SHA-256",
    },
    false,
    ["sign", "verify"]
  );
}

function isSessionTokenPayload(value: unknown): value is SessionTokenPayload {
  if (!value || typeof value !== "object") return false;

  const payload = value as Record<string, unknown>;
  return (
    isSessionUser(payload.user) &&
    typeof payload.iat === "number" &&
    Number.isFinite(payload.iat) &&
    typeof payload.exp === "number" &&
    Number.isFinite(payload.exp) &&
    payload.exp > payload.iat
  );
}

function normalizeName(email: string): string {
  const localPart = email.split("@")[0] ?? "";
  const cleaned = localPart
    .replace(/[._-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) return "Usuário Demo";

  return cleaned
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

export function buildDemoUser(email: string): SessionUser {
  const normalizedEmail = email.trim().toLowerCase();
  const role = ROLE_BY_EMAIL[normalizedEmail] ?? "admin";
  return {
    id: `user-${normalizedEmail.replace(/[^a-z0-9]/g, "-") || "demo"}`,
    name: normalizeName(normalizedEmail),
    email: normalizedEmail,
    role,
    unitId: "unit-1",
    unitName: "Matriz",
    isActive: true,
  };
}

export async function createSessionToken(
  user: SessionUser,
  maxAgeSeconds: number
): Promise<string> {
  const nowSeconds = Math.floor(Date.now() / 1000);
  const payload: SessionTokenPayload = {
    user,
    iat: nowSeconds,
    exp: nowSeconds + maxAgeSeconds,
  };

  const payloadPart = toBase64Url(
    new TextEncoder().encode(JSON.stringify(payload))
  );

  const key = await importSigningKey();
  const signatureBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payloadPart)
  );

  const signaturePart = toBase64Url(new Uint8Array(signatureBuffer));
  return `${payloadPart}.${signaturePart}`;
}

export async function verifySessionToken(
  token: string
): Promise<SessionTokenPayload | null> {
  const [payloadPart, signaturePart, extra] = token.split(".");
  if (!payloadPart || !signaturePart || extra) return null;

  const payloadBytes = fromBase64Url(payloadPart);
  const signatureBytes = fromBase64Url(signaturePart);
  if (!payloadBytes || !signatureBytes) return null;

  const key = await importSigningKey();
  const isValidSignature = await crypto.subtle.verify(
    "HMAC",
    key,
    asArrayBuffer(signatureBytes),
    new TextEncoder().encode(payloadPart)
  );

  if (!isValidSignature) return null;

  try {
    const parsed = JSON.parse(new TextDecoder().decode(payloadBytes));
    if (!isSessionTokenPayload(parsed)) return null;
    if (parsed.exp <= Math.floor(Date.now() / 1000)) return null;
    return parsed;
  } catch {
    return null;
  }
}
