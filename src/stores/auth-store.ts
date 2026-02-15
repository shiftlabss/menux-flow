import { create } from "zustand";

export type UserRole = "master" | "admin" | "comercial" | "cs" | "leitura";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  unitId: string;
  unitName: string;
  isActive: boolean;
}

export interface Permission {
  canCreateOpportunity: boolean;
  canEditOpportunity: boolean;
  canDeleteOpportunity: boolean;
  canViewFinance: boolean;
  canEditFinance: boolean;
  canManageUsers: boolean;
  canManageSettings: boolean;
  canViewReports: boolean;
  canExportData: boolean;
  canApproveDiscounts: boolean;
  canManageGoals: boolean;
  canViewAllUnits: boolean;
}

const rolePermissions: Record<UserRole, Permission> = {
  master: {
    canCreateOpportunity: true,
    canEditOpportunity: true,
    canDeleteOpportunity: true,
    canViewFinance: true,
    canEditFinance: true,
    canManageUsers: true,
    canManageSettings: true,
    canViewReports: true,
    canExportData: true,
    canApproveDiscounts: true,
    canManageGoals: true,
    canViewAllUnits: true,
  },
  admin: {
    canCreateOpportunity: true,
    canEditOpportunity: true,
    canDeleteOpportunity: true,
    canViewFinance: true,
    canEditFinance: true,
    canManageUsers: true,
    canManageSettings: true,
    canViewReports: true,
    canExportData: true,
    canApproveDiscounts: true,
    canManageGoals: true,
    canViewAllUnits: false,
  },
  comercial: {
    canCreateOpportunity: true,
    canEditOpportunity: true,
    canDeleteOpportunity: false,
    canViewFinance: true,
    canEditFinance: false,
    canManageUsers: false,
    canManageSettings: false,
    canViewReports: false,
    canExportData: false,
    canApproveDiscounts: false,
    canManageGoals: false,
    canViewAllUnits: false,
  },
  cs: {
    canCreateOpportunity: false,
    canEditOpportunity: true,
    canDeleteOpportunity: false,
    canViewFinance: false,
    canEditFinance: false,
    canManageUsers: false,
    canManageSettings: false,
    canViewReports: false,
    canExportData: false,
    canApproveDiscounts: false,
    canManageGoals: false,
    canViewAllUnits: false,
  },
  leitura: {
    canCreateOpportunity: false,
    canEditOpportunity: false,
    canDeleteOpportunity: false,
    canViewFinance: false,
    canEditFinance: false,
    canManageUsers: false,
    canManageSettings: false,
    canViewReports: false,
    canExportData: false,
    canApproveDiscounts: false,
    canManageGoals: false,
    canViewAllUnits: false,
  },
};

const AUTH_COOKIE_NAME = "flow-token";
const AUTH_STORAGE_KEY = "flow-auth-session";
const REMEMBER_ME_MAX_AGE_SECONDS = 30 * 24 * 60 * 60;
const SESSION_MAX_AGE_SECONDS = 8 * 60 * 60;

interface StoredAuthSession {
  user: User;
  token: string;
  rememberMe: boolean;
  expiresAt: number;
}

function setAuthCookie(token: string, maxAgeSeconds: number) {
  if (typeof document === "undefined") return;
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${AUTH_COOKIE_NAME}=${encodeURIComponent(token)}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax${secure}`;
}

function clearAuthCookie() {
  if (typeof document === "undefined") return;
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax${secure}`;
}

function persistSession(session: StoredAuthSession) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  } catch {
    // Ignore storage errors in mock frontend mode.
  }
}

function clearSessionStorage() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch {
    // Ignore storage errors in mock frontend mode.
  }
}

function loadStoredSession(): StoredAuthSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredAuthSession;
    const isValid =
      !!parsed &&
      typeof parsed.token === "string" &&
      typeof parsed.expiresAt === "number" &&
      parsed.expiresAt > Date.now() &&
      !!parsed.user &&
      typeof parsed.user.role === "string";
    if (!isValid) {
      clearSessionStorage();
      clearAuthCookie();
      return null;
    }
    return parsed;
  } catch {
    clearSessionStorage();
    clearAuthCookie();
    return null;
  }
}

interface AuthState {
  user: User | null;
  token: string | null;
  permissions: Permission | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (
    user: User,
    token: string,
    options?: { rememberMe?: boolean }
  ) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

const initialSession = loadStoredSession();

export const useAuthStore = create<AuthState>((set) => ({
  user: initialSession?.user ?? null,
  token: initialSession?.token ?? null,
  permissions: initialSession?.user
    ? rolePermissions[initialSession.user.role]
    : null,
  isAuthenticated: !!initialSession,
  isLoading: false,
  setUser: (user, token, options) => {
    const rememberMe = options?.rememberMe ?? false;
    const maxAgeSeconds = rememberMe
      ? REMEMBER_ME_MAX_AGE_SECONDS
      : SESSION_MAX_AGE_SECONDS;
    persistSession({
      user,
      token,
      rememberMe,
      expiresAt: Date.now() + maxAgeSeconds * 1000,
    });
    setAuthCookie(token, maxAgeSeconds);
    set({
      user,
      token,
      permissions: rolePermissions[user.role],
      isAuthenticated: true,
      isLoading: false,
    });
  },
  logout: () => {
    clearSessionStorage();
    clearAuthCookie();
    set({
      user: null,
      token: null,
      permissions: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },
  setLoading: (isLoading) => set({ isLoading }),
}));
