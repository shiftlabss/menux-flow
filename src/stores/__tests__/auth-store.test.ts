// @vitest-environment node
import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock document.cookie since we use node environment (store calls document.cookie)
let cookieStore = "";
if (typeof globalThis.document === "undefined") {
  Object.defineProperty(globalThis, "document", {
    value: {
      get cookie() {
        return cookieStore;
      },
      set cookie(value: string) {
        // Simulate browser cookie behavior: parse name=value, handle max-age=0 removal
        const parts = value.split(";").map((p) => p.trim());
        const [nameValue] = parts;
        const [name] = nameValue.split("=");
        const maxAgePart = parts.find((p) => p.toLowerCase().startsWith("max-age="));
        const maxAge = maxAgePart ? parseInt(maxAgePart.split("=")[1], 10) : undefined;

        if (maxAge === 0) {
          // Remove cookie
          const cookies = cookieStore
            .split("; ")
            .filter((c) => !c.startsWith(`${name}=`));
          cookieStore = cookies.join("; ");
        } else {
          // Add/update cookie (store only name=value)
          const cookies = cookieStore
            .split("; ")
            .filter((c) => c && !c.startsWith(`${name}=`));
          cookies.push(nameValue);
          cookieStore = cookies.join("; ");
        }
      },
    },
    writable: false,
    configurable: true,
  });
}

import { useAuthStore } from "../auth-store";
import type { User, UserRole } from "../auth-store";

// Helper to create a mock user with a given role
function createMockUser(role: UserRole, overrides?: Partial<User>): User {
  return {
    id: "usr-1",
    name: "Test User",
    email: "test@flow.com",
    role,
    unitId: "unit-1",
    unitName: "Unit A",
    isActive: true,
    ...overrides,
  };
}

describe("auth-store", () => {
  beforeEach(() => {
    // Reset cookie store
    cookieStore = "";
    // Reset store to initial state before each test
    useAuthStore.setState({
      user: null,
      token: null,
      permissions: null,
      isAuthenticated: false,
      isLoading: true,
    });
  });

  // ─── setUser ────────────────────────────────────────────────────────

  describe("setUser", () => {
    it("should set user, token, mark authenticated, and set isLoading false", () => {
      const user = createMockUser("admin");
      useAuthStore.getState().setUser(user, "tok-abc123");

      const state = useAuthStore.getState();
      expect(state.user).toEqual(user);
      expect(state.token).toBe("tok-abc123");
      expect(state.isAuthenticated).toBe(true);
      expect(state.isLoading).toBe(false);
    });

    it("should derive permissions from the user role", () => {
      const user = createMockUser("comercial");
      useAuthStore.getState().setUser(user, "tok-xyz");

      const state = useAuthStore.getState();
      expect(state.permissions).not.toBeNull();
      expect(state.permissions!.canCreateOpportunity).toBe(true);
      expect(state.permissions!.canDeleteOpportunity).toBe(false);
    });

    it("should set a cookie with the token", () => {
      const user = createMockUser("admin");
      useAuthStore.getState().setUser(user, "my-token");

      expect(document.cookie).toContain("flow-token=my-token");
    });
  });

  // ─── logout ─────────────────────────────────────────────────────────

  describe("logout", () => {
    it("should clear user, token, permissions, and mark unauthenticated", () => {
      // First log in
      const user = createMockUser("master");
      useAuthStore.getState().setUser(user, "tok-123");
      expect(useAuthStore.getState().isAuthenticated).toBe(true);

      // Then log out
      useAuthStore.getState().logout();

      const state = useAuthStore.getState();
      expect(state.user).toBeNull();
      expect(state.token).toBeNull();
      expect(state.permissions).toBeNull();
      expect(state.isAuthenticated).toBe(false);
      expect(state.isLoading).toBe(false);
    });

    it("should clear the auth cookie", () => {
      const user = createMockUser("admin");
      useAuthStore.getState().setUser(user, "tok-456");
      useAuthStore.getState().logout();

      // After logout, cookie should be cleared (max-age=0 effectively removes it)
      expect(document.cookie).not.toContain("flow-token=tok-456");
    });
  });

  // ─── setLoading ─────────────────────────────────────────────────────

  describe("setLoading", () => {
    it("should update isLoading to true", () => {
      useAuthStore.getState().setLoading(true);
      expect(useAuthStore.getState().isLoading).toBe(true);
    });

    it("should update isLoading to false", () => {
      useAuthStore.getState().setLoading(false);
      expect(useAuthStore.getState().isLoading).toBe(false);
    });
  });

  // ─── Role-based permissions ─────────────────────────────────────────

  describe("role-based permissions", () => {
    it("master: should have all permissions", () => {
      const user = createMockUser("master");
      useAuthStore.getState().setUser(user, "tok");

      const p = useAuthStore.getState().permissions!;
      expect(p.canCreateOpportunity).toBe(true);
      expect(p.canEditOpportunity).toBe(true);
      expect(p.canDeleteOpportunity).toBe(true);
      expect(p.canViewFinance).toBe(true);
      expect(p.canEditFinance).toBe(true);
      expect(p.canManageUsers).toBe(true);
      expect(p.canManageSettings).toBe(true);
      expect(p.canViewReports).toBe(true);
      expect(p.canExportData).toBe(true);
      expect(p.canApproveDiscounts).toBe(true);
      expect(p.canManageGoals).toBe(true);
      expect(p.canViewAllUnits).toBe(true);
    });

    it("admin: should have most permissions but not canViewAllUnits", () => {
      const user = createMockUser("admin");
      useAuthStore.getState().setUser(user, "tok");

      const p = useAuthStore.getState().permissions!;
      expect(p.canCreateOpportunity).toBe(true);
      expect(p.canEditOpportunity).toBe(true);
      expect(p.canDeleteOpportunity).toBe(true);
      expect(p.canViewFinance).toBe(true);
      expect(p.canEditFinance).toBe(true);
      expect(p.canManageUsers).toBe(true);
      expect(p.canManageSettings).toBe(true);
      expect(p.canViewReports).toBe(true);
      expect(p.canExportData).toBe(true);
      expect(p.canApproveDiscounts).toBe(true);
      expect(p.canManageGoals).toBe(true);
      expect(p.canViewAllUnits).toBe(false);
    });

    it("comercial: can create/edit opportunities and view finance only", () => {
      const user = createMockUser("comercial");
      useAuthStore.getState().setUser(user, "tok");

      const p = useAuthStore.getState().permissions!;
      expect(p.canCreateOpportunity).toBe(true);
      expect(p.canEditOpportunity).toBe(true);
      expect(p.canDeleteOpportunity).toBe(false);
      expect(p.canViewFinance).toBe(true);
      expect(p.canEditFinance).toBe(false);
      expect(p.canManageUsers).toBe(false);
      expect(p.canManageSettings).toBe(false);
      expect(p.canViewReports).toBe(false);
      expect(p.canExportData).toBe(false);
      expect(p.canApproveDiscounts).toBe(false);
      expect(p.canManageGoals).toBe(false);
      expect(p.canViewAllUnits).toBe(false);
    });

    it("cs: can only edit opportunities", () => {
      const user = createMockUser("cs");
      useAuthStore.getState().setUser(user, "tok");

      const p = useAuthStore.getState().permissions!;
      expect(p.canCreateOpportunity).toBe(false);
      expect(p.canEditOpportunity).toBe(true);
      expect(p.canDeleteOpportunity).toBe(false);
      expect(p.canViewFinance).toBe(false);
      expect(p.canEditFinance).toBe(false);
      expect(p.canManageUsers).toBe(false);
      expect(p.canManageSettings).toBe(false);
      expect(p.canViewReports).toBe(false);
      expect(p.canExportData).toBe(false);
      expect(p.canApproveDiscounts).toBe(false);
      expect(p.canManageGoals).toBe(false);
      expect(p.canViewAllUnits).toBe(false);
    });

    it("leitura: should have no permissions at all", () => {
      const user = createMockUser("leitura");
      useAuthStore.getState().setUser(user, "tok");

      const p = useAuthStore.getState().permissions!;
      expect(p.canCreateOpportunity).toBe(false);
      expect(p.canEditOpportunity).toBe(false);
      expect(p.canDeleteOpportunity).toBe(false);
      expect(p.canViewFinance).toBe(false);
      expect(p.canEditFinance).toBe(false);
      expect(p.canManageUsers).toBe(false);
      expect(p.canManageSettings).toBe(false);
      expect(p.canViewReports).toBe(false);
      expect(p.canExportData).toBe(false);
      expect(p.canApproveDiscounts).toBe(false);
      expect(p.canManageGoals).toBe(false);
      expect(p.canViewAllUnits).toBe(false);
    });
  });
});
