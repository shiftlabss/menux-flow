// @vitest-environment node
import { describe, it, expect, beforeEach } from "vitest";
import { useActivityStore } from "../activity-store";
import type { Activity } from "@/types";

// ─── Seed data ──────────────────────────────────────────────────────────────

const seedActivities: Activity[] = [
  {
    id: "act-1",
    title: "Ligar para cliente",
    type: "call",
    status: "pending",
    description: "Agendar reuniao",
    dueDate: "2025-06-15",
    dueTime: "10:00",
    responsibleId: "usr-1",
    responsibleName: "Rafael Mendes",
    opportunityId: "opp-1",
    opportunityTitle: "Projeto Alpha",
    clientId: "cli-1",
    clientName: "Acme Corp",
    createdAt: "2025-06-01T10:00:00.000Z",
  },
  {
    id: "act-2",
    title: "Enviar proposta",
    type: "email",
    status: "overdue",
    description: "Proposta comercial",
    dueDate: "2025-06-10",
    responsibleId: "usr-2",
    responsibleName: "Ana Souza",
    opportunityId: "opp-2",
    opportunityTitle: "Projeto Beta",
    clientId: "cli-2",
    clientName: "Beta Inc",
    createdAt: "2025-06-02T08:00:00.000Z",
  },
];

describe("activity-store", () => {
  beforeEach(() => {
    useActivityStore.setState({ activities: seedActivities, isLoading: false });
  });

  // ─── CRUD ───────────────────────────────────────────────────────────────

  describe("addActivity", () => {
    it("should generate an id and createdAt, and return the new activity", () => {
      const data: Omit<Activity, "id" | "createdAt"> = {
        title: "Nova atividade",
        type: "meeting",
        status: "pending",
        dueDate: "2025-07-01",
        responsibleId: "usr-1",
        responsibleName: "Rafael Mendes",
      };

      const result = useActivityStore.getState().addActivity(data);

      expect(result.id).toMatch(/^act-\d+$/);
      expect(result.createdAt).toBeTruthy();
      expect(result.title).toBe("Nova atividade");
      expect(result.type).toBe("meeting");

      // Verify it was added to the store
      const all = useActivityStore.getState().activities;
      expect(all).toHaveLength(3);
      expect(all.find((a) => a.id === result.id)).toBeDefined();
    });
  });

  describe("updateActivity", () => {
    it("should merge data into the target activity without affecting others", () => {
      useActivityStore.getState().updateActivity("act-1", { title: "Titulo atualizado", dueTime: "14:00" });

      const updated = useActivityStore.getState().activities.find((a) => a.id === "act-1")!;
      expect(updated.title).toBe("Titulo atualizado");
      expect(updated.dueTime).toBe("14:00");
      // Other fields preserved
      expect(updated.type).toBe("call");
      expect(updated.status).toBe("pending");

      // Other activity unchanged
      const other = useActivityStore.getState().activities.find((a) => a.id === "act-2")!;
      expect(other.title).toBe("Enviar proposta");
    });
  });

  describe("deleteActivity", () => {
    it("should remove the activity from the store", () => {
      useActivityStore.getState().deleteActivity("act-1");

      const all = useActivityStore.getState().activities;
      expect(all).toHaveLength(1);
      expect(all.find((a) => a.id === "act-1")).toBeUndefined();
      expect(all[0].id).toBe("act-2");
    });
  });

  // ─── Status management ────────────────────────────────────────────────

  describe("completeActivity", () => {
    it("should set status to completed and set completedAt", () => {
      useActivityStore.getState().completeActivity("act-1");

      const activity = useActivityStore.getState().activities.find((a) => a.id === "act-1")!;
      expect(activity.status).toBe("completed");
      expect(activity.completedAt).toBeTruthy();
      // completedAt is date only (YYYY-MM-DD)
      expect(activity.completedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it("should store notes in completionNotes field when provided", () => {
      useActivityStore.getState().completeActivity("act-1", "Cliente confirmou");

      const activity = useActivityStore.getState().activities.find((a) => a.id === "act-1")!;
      expect(activity.status).toBe("completed");
      expect(activity.completionNotes).toBe("Cliente confirmou");
      // Original description should NOT be modified
      expect(activity.description).toBe("Agendar reuniao");
    });

    it("should not set completionNotes when no notes provided", () => {
      useActivityStore.getState().completeActivity("act-1");

      const activity = useActivityStore.getState().activities.find((a) => a.id === "act-1")!;
      expect(activity.completionNotes).toBeUndefined();
      expect(activity.description).toBe("Agendar reuniao");
    });
  });

  describe("cancelActivity", () => {
    it("should set status to cancelled", () => {
      useActivityStore.getState().cancelActivity("act-1");

      const activity = useActivityStore.getState().activities.find((a) => a.id === "act-1")!;
      expect(activity.status).toBe("cancelled");
    });
  });

  describe("postponeActivity", () => {
    // Use a date far enough in the future so the test won't break over time
    const futureDate = "2099-07-20";
    const futureDate2 = "2099-08-01";
    const pastDate = "2020-01-01";

    it("should update dueDate and dueTime", () => {
      useActivityStore.getState().postponeActivity("act-1", futureDate, "16:00");

      const activity = useActivityStore.getState().activities.find((a) => a.id === "act-1")!;
      expect(activity.dueDate).toBe(futureDate);
      expect(activity.dueTime).toBe("16:00");
    });

    it("should keep existing dueTime when newDueTime is not provided", () => {
      useActivityStore.getState().postponeActivity("act-1", futureDate);

      const activity = useActivityStore.getState().activities.find((a) => a.id === "act-1")!;
      expect(activity.dueDate).toBe(futureDate);
      expect(activity.dueTime).toBe("10:00"); // original dueTime preserved
    });

    it("should change overdue status to pending when new date is in the future", () => {
      // act-2 is overdue
      useActivityStore.getState().postponeActivity("act-2", futureDate2);

      const activity = useActivityStore.getState().activities.find((a) => a.id === "act-2")!;
      expect(activity.status).toBe("pending");
      expect(activity.dueDate).toBe(futureDate2);
    });

    it("should keep status as pending when postponed to a future date", () => {
      // act-1 is pending
      useActivityStore.getState().postponeActivity("act-1", futureDate);

      const activity = useActivityStore.getState().activities.find((a) => a.id === "act-1")!;
      expect(activity.status).toBe("pending");
    });

    it("should set status to overdue when postponed to a past date", () => {
      // act-1 is pending, postpone to a past date
      useActivityStore.getState().postponeActivity("act-1", pastDate);

      const activity = useActivityStore.getState().activities.find((a) => a.id === "act-1")!;
      expect(activity.status).toBe("overdue");
      expect(activity.dueDate).toBe(pastDate);
    });
  });

  // ─── Computed getters ─────────────────────────────────────────────────

  describe("getById", () => {
    it("should return the activity matching the id", () => {
      const activity = useActivityStore.getState().getById("act-1");
      expect(activity).toBeDefined();
      expect(activity!.title).toBe("Ligar para cliente");
    });

    it("should return undefined for a non-existent id", () => {
      const activity = useActivityStore.getState().getById("act-999");
      expect(activity).toBeUndefined();
    });
  });

  describe("getByOpportunity", () => {
    it("should return activities for the given opportunityId", () => {
      const result = useActivityStore.getState().getByOpportunity("opp-1");
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("act-1");
    });

    it("should return empty array when no activities match", () => {
      const result = useActivityStore.getState().getByOpportunity("opp-999");
      expect(result).toHaveLength(0);
    });
  });

  describe("getByClient", () => {
    it("should return activities for the given clientId", () => {
      const result = useActivityStore.getState().getByClient("cli-2");
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("act-2");
    });

    it("should return empty array when no activities match", () => {
      const result = useActivityStore.getState().getByClient("cli-999");
      expect(result).toHaveLength(0);
    });
  });

  describe("getPending", () => {
    it("should return only activities with status pending", () => {
      const result = useActivityStore.getState().getPending();
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("act-1");
      expect(result[0].status).toBe("pending");
    });
  });

  describe("getOverdue", () => {
    it("should return activities with status overdue AND pending activities with past dueDate", () => {
      // act-1 is "pending" with dueDate "2025-06-15" (past) → included
      // act-2 is "overdue" with dueDate "2025-06-10" (past) → included
      const result = useActivityStore.getState().getOverdue();
      expect(result).toHaveLength(2);

      const ids = result.map((a) => a.id).sort();
      expect(ids).toEqual(["act-1", "act-2"]);
    });

    it("should not include pending activities with future dueDate", () => {
      useActivityStore.setState({
        activities: [
          { ...seedActivities[0], id: "act-future", dueDate: "2099-12-31", status: "pending" },
          { ...seedActivities[1] }, // act-2, overdue
        ],
      });

      const result = useActivityStore.getState().getOverdue();
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("act-2");
    });

    it("should not include completed or cancelled activities", () => {
      useActivityStore.setState({
        activities: [
          { ...seedActivities[0], status: "completed" as const, dueDate: "2020-01-01" },
          { ...seedActivities[1], status: "cancelled" as const, dueDate: "2020-01-01" },
        ],
      });

      const result = useActivityStore.getState().getOverdue();
      expect(result).toHaveLength(0);
    });
  });
});
