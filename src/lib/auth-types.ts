export const USER_ROLES = [
  "master",
  "admin",
  "comercial",
  "cs",
  "leitura",
] as const;

export type UserRole = (typeof USER_ROLES)[number];

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  unitId: string;
  unitName: string;
  isActive: boolean;
}

export function isUserRole(value: unknown): value is UserRole {
  return (
    typeof value === "string" &&
    (USER_ROLES as readonly string[]).includes(value)
  );
}

export function isSessionUser(value: unknown): value is SessionUser {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.id === "string" &&
    typeof candidate.name === "string" &&
    typeof candidate.email === "string" &&
    isUserRole(candidate.role) &&
    typeof candidate.unitId === "string" &&
    typeof candidate.unitName === "string" &&
    typeof candidate.isActive === "boolean" &&
    (candidate.avatar === undefined || typeof candidate.avatar === "string")
  );
}
