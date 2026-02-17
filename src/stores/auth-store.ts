import { create } from "zustand";
import {
  isSessionUser,
  type SessionUser,
  type UserRole,
} from "@/lib/auth-types";

export type { UserRole };
export type User = SessionUser;

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
    canManageGoals: true,
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

const AUTH_SESSION_ENDPOINT = "/api/auth/session";
const AUTH_LOGOUT_ENDPOINT = "/api/auth/logout";
const ACTIVITY_LAST_SEEN_KEY = "flow-auth-last-activity-at";
const INACTIVITY_TIMEOUT_MS = 2 * 60 * 60 * 1000;
const INACTIVITY_CHECK_INTERVAL_MS = 60 * 1000;

let inactivityIntervalId: number | null = null;
let activityListenerBound = false;

const ACTIVITY_EVENTS = [
  "click",
  "keydown",
  "mousemove",
  "touchstart",
  "scroll",
  "visibilitychange",
] as const;

function getPermissionsForRole(role: UserRole): Permission {
  return rolePermissions[role];
}

function readLastActivityAt(): number {
  if (typeof window === "undefined") return Date.now();
  try {
    const raw = window.localStorage.getItem(ACTIVITY_LAST_SEEN_KEY);
    const parsed = raw ? Number(raw) : NaN;
    return Number.isFinite(parsed) && parsed > 0 ? parsed : Date.now();
  } catch {
    return Date.now();
  }
}

function writeLastActivityAt() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(ACTIVITY_LAST_SEEN_KEY, String(Date.now()));
  } catch {
    // Ignore storage errors in mock frontend mode.
  }
}

function clearLastActivityAt() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(ACTIVITY_LAST_SEEN_KEY);
  } catch {
    // Ignore storage errors in mock frontend mode.
  }
}

function bindActivityListener() {
  if (typeof window === "undefined" || activityListenerBound) return;
  ACTIVITY_EVENTS.forEach((eventName) => {
    window.addEventListener(eventName, writeLastActivityAt, {
      passive: true,
    });
  });
  activityListenerBound = true;
}

function unbindActivityListener() {
  if (typeof window === "undefined" || !activityListenerBound) return;
  ACTIVITY_EVENTS.forEach((eventName) => {
    window.removeEventListener(eventName, writeLastActivityAt);
  });
  activityListenerBound = false;
}

function stopInactivityTracking() {
  if (typeof window === "undefined") return;
  if (inactivityIntervalId !== null) {
    window.clearInterval(inactivityIntervalId);
    inactivityIntervalId = null;
  }
  unbindActivityListener();
  clearLastActivityAt();
}

function startInactivityTracking(onInactivityLogout: () => void) {
  if (typeof window === "undefined") return;

  bindActivityListener();
  writeLastActivityAt();

  if (inactivityIntervalId !== null) {
    window.clearInterval(inactivityIntervalId);
  }

  inactivityIntervalId = window.setInterval(() => {
    const elapsedMs = Date.now() - readLastActivityAt();
    if (elapsedMs >= INACTIVITY_TIMEOUT_MS) {
      onInactivityLogout();
    }
  }, INACTIVITY_CHECK_INTERVAL_MS);
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
  hydrateSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  permissions: null,
  isAuthenticated: false,
  isLoading: true,
  setUser: (user, token) => {
    if (!isSessionUser(user)) return;

    startInactivityTracking(() => {
      useAuthStore.getState().logout();
    });

    set({
      user,
      token,
      permissions: getPermissionsForRole(user.role),
      isAuthenticated: true,
      isLoading: false,
    });
  },
  logout: () => {
    stopInactivityTracking();

    if (typeof window !== "undefined") {
      void fetch(AUTH_LOGOUT_ENDPOINT, {
        method: "POST",
        credentials: "include",
      }).catch(() => {
        // Ignore network errors in mock frontend mode.
      });
    }

    set({
      user: null,
      token: null,
      permissions: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },
  setLoading: (isLoading) => set({ isLoading }),
  hydrateSession: async () => {
    if (typeof window === "undefined") return;

    set({ isLoading: true });

    try {
      const response = await fetch(AUTH_SESSION_ENDPOINT, {
        method: "GET",
        cache: "no-store",
        credentials: "include",
      });

      if (!response.ok) {
        stopInactivityTracking();
        set({
          user: null,
          token: null,
          permissions: null,
          isAuthenticated: false,
          isLoading: false,
        });
        return;
      }

      const data = (await response.json()) as { user?: unknown };
      if (!isSessionUser(data.user)) {
        stopInactivityTracking();
        set({
          user: null,
          token: null,
          permissions: null,
          isAuthenticated: false,
          isLoading: false,
        });
        return;
      }

      startInactivityTracking(() => {
        useAuthStore.getState().logout();
      });

      set({
        user: data.user,
        token: "session-cookie",
        permissions: getPermissionsForRole(data.user.role),
        isAuthenticated: true,
        isLoading: false,
      });
    } catch {
      stopInactivityTracking();
      set({
        user: null,
        token: null,
        permissions: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },
}));
