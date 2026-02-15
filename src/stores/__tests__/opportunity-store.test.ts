// @vitest-environment node
import { describe, it, expect, beforeEach, vi } from "vitest";
import { useOpportunityStore } from "../opportunity-store";
import type { Opportunity, PipelineStage } from "@/types";

// ─── Seed data ──────────────────────────────────────────────────────────────

const seedOpportunities: Opportunity[] = [
  {
    id: "opp-1",
    title: "Projeto Alpha",
    clientName: "Acme Corp",
    clientId: "cli-1",
    value: 50000,
    monthlyValue: 5000,
    stage: "contato-feito",
    temperature: "warm",
    responsibleId: "usr-1",
    responsibleName: "Rafael Mendes",
    tags: ["enterprise"],
    createdAt: "2025-06-01T10:00:00.000Z",
    updatedAt: "2025-06-05T10:00:00.000Z",
    expectedCloseDate: "2025-08-01",
    status: "open",
    notes: "Nota inicial",
  },
  {
    id: "opp-2",
    title: "Projeto Beta",
    clientName: "Beta Inc",
    clientId: "cli-2",
    value: 30000,
    monthlyValue: 3000,
    stage: "lead-in",
    temperature: "cold",
    responsibleId: "usr-2",
    responsibleName: "Ana Souza",
    tags: ["startup"],
    createdAt: "2025-06-02T08:00:00.000Z",
    updatedAt: "2025-06-04T08:00:00.000Z",
    status: "open",
  },
];

describe("opportunity-store", () => {
  beforeEach(() => {
    useOpportunityStore.setState({
      opportunities: seedOpportunities.map((o) => ({ ...o })),
      isLoading: false,
    });
  });

  // ─── CRUD ─────────────────────────────────────────────────────────────

  describe("addOpportunity", () => {
    it("should generate id, timestamps, and set status to open", () => {
      const data: Omit<Opportunity, "id" | "createdAt" | "updatedAt" | "status"> = {
        title: "Novo Projeto",
        clientName: "Gamma Ltd",
        value: 20000,
        monthlyValue: 2000,
        stage: "lead-in",
        temperature: "cold",
        responsibleId: "usr-1",
        responsibleName: "Rafael Mendes",
        tags: [],
      };

      const result = useOpportunityStore.getState().addOpportunity(data);

      expect(result.id).toMatch(/^opp-\d+$/);
      expect(result.createdAt).toBeTruthy();
      expect(result.updatedAt).toBeTruthy();
      expect(result.status).toBe("open");
      expect(result.title).toBe("Novo Projeto");

      // Verify it was added to the store
      const all = useOpportunityStore.getState().opportunities;
      expect(all).toHaveLength(3);
      expect(all.find((o) => o.id === result.id)).toBeDefined();
    });
  });

  describe("updateOpportunity", () => {
    it("should merge data and update updatedAt", () => {
      const beforeUpdate = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!;
      const oldUpdatedAt = beforeUpdate.updatedAt;

      useOpportunityStore.getState().updateOpportunity("opp-1", { title: "Alpha Atualizado", value: 60000 });

      const updated = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!;
      expect(updated.title).toBe("Alpha Atualizado");
      expect(updated.value).toBe(60000);
      expect(updated.updatedAt).not.toBe(oldUpdatedAt);
      // Other fields preserved
      expect(updated.clientName).toBe("Acme Corp");
      expect(updated.stage).toBe("contato-feito");

      // Other opportunity unchanged
      const other = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-2")!;
      expect(other.title).toBe("Projeto Beta");
    });
  });

  describe("deleteOpportunity", () => {
    it("should remove the opportunity from the store", () => {
      useOpportunityStore.getState().deleteOpportunity("opp-1");

      const all = useOpportunityStore.getState().opportunities;
      expect(all).toHaveLength(1);
      expect(all.find((o) => o.id === "opp-1")).toBeUndefined();
      expect(all[0].id).toBe("opp-2");
    });
  });

  // ─── Stage management ─────────────────────────────────────────────────

  describe("moveToStage", () => {
    it("should update stage and updatedAt", () => {
      const oldUpdatedAt = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!.updatedAt;

      useOpportunityStore.getState().moveToStage("opp-1", "proposta-enviada");

      const moved = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!;
      expect(moved.stage).toBe("proposta-enviada");
      expect(moved.updatedAt).not.toBe(oldUpdatedAt);
    });

    it("should set slaDeadline when slaHours is provided", () => {
      useOpportunityStore.getState().moveToStage("opp-1", "negociacao", 48);

      const moved = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!;
      expect(moved.stage).toBe("negociacao");
      expect(moved.slaDeadline).toBeTruthy();
      // The slaDeadline should be a valid ISO string in the future
      const deadline = new Date(moved.slaDeadline!);
      expect(deadline.getTime()).toBeGreaterThan(Date.now() - 1000);
    });

    it("should keep existing slaDeadline when slaHours is not provided", () => {
      // First set an slaDeadline
      useOpportunityStore.getState().moveToStage("opp-1", "reuniao-agendada", 72);
      const afterFirst = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!;
      const firstDeadline = afterFirst.slaDeadline;

      // Move to another stage without slaHours
      useOpportunityStore.getState().moveToStage("opp-1", "proposta-enviada");
      const afterSecond = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!;
      expect(afterSecond.slaDeadline).toBe(firstDeadline);
    });
  });

  // ─── Status management ────────────────────────────────────────────────

  describe("winOpportunity", () => {
    it("should set status to won and update updatedAt", () => {
      const oldUpdatedAt = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!.updatedAt;

      useOpportunityStore.getState().winOpportunity("opp-1");

      const won = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!;
      expect(won.status).toBe("won");
      expect(won.updatedAt).not.toBe(oldUpdatedAt);
    });
  });

  describe("loseOpportunity", () => {
    it("should set status to lost and lossReason", () => {
      useOpportunityStore.getState().loseOpportunity("opp-1", "Preco alto");

      const lost = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!;
      expect(lost.status).toBe("lost");
      expect(lost.lossReason).toBe("Preco alto");
    });

    it("should set notes when provided", () => {
      useOpportunityStore.getState().loseOpportunity("opp-1", "Concorrente", "Empresa X", "Perdemos para oferta mais barata");

      const lost = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!;
      expect(lost.status).toBe("lost");
      expect(lost.lossReason).toBe("Concorrente");
      expect(lost.notes).toBe("Perdemos para oferta mais barata");
    });

    it("should keep existing notes when notes parameter is not provided", () => {
      useOpportunityStore.getState().loseOpportunity("opp-1", "Sem budget");

      const lost = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!;
      expect(lost.notes).toBe("Nota inicial"); // preserved original notes
    });

    it("should update updatedAt", () => {
      const oldUpdatedAt = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!.updatedAt;

      useOpportunityStore.getState().loseOpportunity("opp-1", "Sem budget");

      const lost = useOpportunityStore.getState().opportunities.find((o) => o.id === "opp-1")!;
      expect(lost.updatedAt).not.toBe(oldUpdatedAt);
    });
  });

  // ─── Computed getters ─────────────────────────────────────────────────

  describe("getByStage", () => {
    it("should filter by stage AND status open", () => {
      const result = useOpportunityStore.getState().getByStage("contato-feito");
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("opp-1");
    });

    it("should not return won/lost opportunities", () => {
      useOpportunityStore.getState().winOpportunity("opp-1");

      const result = useOpportunityStore.getState().getByStage("contato-feito");
      expect(result).toHaveLength(0);
    });

    it("should return empty array for a stage with no open opportunities", () => {
      const result = useOpportunityStore.getState().getByStage("fechamento");
      expect(result).toHaveLength(0);
    });
  });

  describe("getOpen", () => {
    it("should return all open opportunities", () => {
      const result = useOpportunityStore.getState().getOpen();
      expect(result).toHaveLength(2);
    });

    it("should exclude won opportunities", () => {
      useOpportunityStore.getState().winOpportunity("opp-1");

      const result = useOpportunityStore.getState().getOpen();
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("opp-2");
    });

    it("should exclude lost opportunities", () => {
      useOpportunityStore.getState().loseOpportunity("opp-2", "Motivo");

      const result = useOpportunityStore.getState().getOpen();
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("opp-1");
    });
  });

  describe("getById", () => {
    it("should return the opportunity matching the id", () => {
      const opp = useOpportunityStore.getState().getById("opp-1");
      expect(opp).toBeDefined();
      expect(opp!.title).toBe("Projeto Alpha");
    });

    it("should return undefined for a non-existent id", () => {
      const opp = useOpportunityStore.getState().getById("opp-999");
      expect(opp).toBeUndefined();
    });
  });
});
