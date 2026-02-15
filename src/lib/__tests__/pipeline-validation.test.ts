// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  getInitials,
  getSlaStatus,
  getSlaColors,
  validateStageTransition,
} from "@/app/(auth)/pipes/lib/pipeline-validation";
import type { Opportunity, PipelineStage } from "@/types";

// ─── Helper: build a minimal Opportunity for validation tests ────────────

function buildOpportunity(overrides: Partial<Opportunity> = {}): Opportunity {
  return {
    id: "opp-test",
    title: "Test Opp",
    clientName: "Acme Corp",
    value: 50000,
    monthlyValue: 5000,
    stage: "lead-in" as PipelineStage,
    temperature: "warm",
    responsibleId: "usr-1",
    responsibleName: "Rafael Mendes",
    tags: [],
    createdAt: "2025-06-01T10:00:00.000Z",
    updatedAt: "2025-06-05T10:00:00.000Z",
    expectedCloseDate: "2025-08-01",
    status: "open",
    ...overrides,
  };
}

// ═════════════════════════════════════════════════════════════════════════
// getInitials
// ═════════════════════════════════════════════════════════════════════════

describe("getInitials", () => {
  it('should return "RM" for "Rafael Mendes"', () => {
    expect(getInitials("Rafael Mendes")).toBe("RM");
  });

  it('should return "R" for a single word name "Rafael"', () => {
    expect(getInitials("Rafael")).toBe("R");
  });

  it('should return "RM" (max 2 chars) for "Rafael Mendes Silva"', () => {
    expect(getInitials("Rafael Mendes Silva")).toBe("RM");
  });

  it("should handle empty string", () => {
    expect(getInitials("")).toBe("");
  });

  it("should uppercase lowercase names", () => {
    expect(getInitials("ana souza")).toBe("AS");
  });
});

// ═════════════════════════════════════════════════════════════════════════
// getSlaStatus
// ═════════════════════════════════════════════════════════════════════════

describe("getSlaStatus", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-06-15T12:00:00.000Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return status "ok" with empty label when slaDeadline is undefined', () => {
    const result = getSlaStatus(undefined);
    expect(result.status).toBe("ok");
    expect(result.label).toBe("");
    expect(result.detailLabel).toBe("SLA nao definido");
  });

  it('should return status "breached" when deadline is in the past', () => {
    // 2 hours ago
    const deadline = new Date("2025-06-15T10:00:00.000Z").toISOString();
    const result = getSlaStatus(deadline);
    expect(result.status).toBe("breached");
    expect(result.label).toBe("Estourado");
    expect(result.detailLabel).toContain("SLA estourado ha");
    expect(result.detailLabel).toContain("2h");
  });

  it('should return status "near" when deadline is within 12 hours', () => {
    // 6 hours from now
    const deadline = new Date("2025-06-15T18:00:00.000Z").toISOString();
    const result = getSlaStatus(deadline);
    expect(result.status).toBe("near");
    expect(result.detailLabel).toContain("SLA vence em");
    expect(result.detailLabel).toContain("atencao!");
  });

  it('should return status "ok" when deadline is more than 12 hours away', () => {
    // 48 hours from now
    const deadline = new Date("2025-06-17T12:00:00.000Z").toISOString();
    const result = getSlaStatus(deadline);
    expect(result.status).toBe("ok");
    expect(result.detailLabel).toContain("SLA restante:");
    expect(result.detailLabel).toContain("2d");
  });
});

// ═════════════════════════════════════════════════════════════════════════
// getSlaColors
// ═════════════════════════════════════════════════════════════════════════

describe("getSlaColors", () => {
  it('should return success colors for "ok"', () => {
    const colors = getSlaColors("ok");
    expect(colors.dot).toBe("bg-status-success");
    expect(colors.border).toBe("border-l-brand");
    expect(colors.text).toBe("text-zinc-400");
  });

  it('should return warning colors for "near"', () => {
    const colors = getSlaColors("near");
    expect(colors.dot).toBe("bg-status-warning");
    expect(colors.border).toBe("border-l-status-warning");
    expect(colors.text).toBe("text-status-warning");
  });

  it('should return danger colors for "breached"', () => {
    const colors = getSlaColors("breached");
    expect(colors.dot).toBe("bg-status-danger");
    expect(colors.border).toBe("border-l-status-danger");
    expect(colors.text).toBe("text-status-danger");
  });
});

// ═════════════════════════════════════════════════════════════════════════
// validateStageTransition
// ═════════════════════════════════════════════════════════════════════════

describe("validateStageTransition", () => {
  it("should detect regression when moving backwards", () => {
    const opp = buildOpportunity({ stage: "proposta-enviada" });
    const result = validateStageTransition(opp, "contato-feito");
    expect(result.isRegression).toBe(true);
    expect(result.missing).toEqual([]);
  });

  it("should not flag regression when moving forward", () => {
    const opp = buildOpportunity({ stage: "lead-in" });
    const result = validateStageTransition(opp, "contato-feito");
    expect(result.isRegression).toBe(false);
  });

  it('should return no missing fields when moving to "lead-in"', () => {
    const opp = buildOpportunity({ stage: "lead-in" });
    const result = validateStageTransition(opp, "lead-in");
    expect(result.missing).toEqual([]);
    expect(result.isRegression).toBe(false);
  });

  it("should report missing clientName for contato-feito", () => {
    const opp = buildOpportunity({ stage: "lead-in", clientName: "" });
    const result = validateStageTransition(opp, "contato-feito");
    expect(result.isRegression).toBe(false);
    expect(result.missing).toContain("Nome do contato");
  });

  it("should report missing fields for reuniao-agendada", () => {
    const opp = buildOpportunity({
      stage: "lead-in",
      clientName: "",
      expectedCloseDate: undefined,
    });
    const result = validateStageTransition(opp, "reuniao-agendada");
    expect(result.missing).toContain("Nome do contato");
    expect(result.missing).toContain("Data prevista de fechamento");
  });

  it("should report missing fields for proposta-enviada including value", () => {
    const opp = buildOpportunity({
      stage: "lead-in",
      clientName: "Acme",
      expectedCloseDate: "2025-08-01",
      value: 0,
    });
    const result = validateStageTransition(opp, "proposta-enviada");
    expect(result.missing).toContain("Valor da proposta");
    expect(result.missing).not.toContain("Nome do contato");
    expect(result.missing).not.toContain("Data prevista de fechamento");
  });

  it("should report missing monthlyValue for negociacao", () => {
    const opp = buildOpportunity({
      stage: "lead-in",
      clientName: "Acme",
      expectedCloseDate: "2025-08-01",
      value: 50000,
      monthlyValue: 0,
    });
    const result = validateStageTransition(opp, "negociacao");
    expect(result.missing).toContain("Valor mensal");
    expect(result.missing).not.toContain("Valor da proposta");
  });

  it("should pass when all required fields are present for fechamento", () => {
    const opp = buildOpportunity({
      stage: "negociacao",
      clientName: "Acme Corp",
      expectedCloseDate: "2025-08-01",
      value: 50000,
      monthlyValue: 5000,
    });
    const result = validateStageTransition(opp, "fechamento");
    expect(result.missing).toEqual([]);
    expect(result.isRegression).toBe(false);
  });

  it("should treat value <= 0 as missing", () => {
    const opp = buildOpportunity({
      stage: "lead-in",
      value: -100,
      expectedCloseDate: "2025-08-01",
    });
    const result = validateStageTransition(opp, "proposta-enviada");
    expect(result.missing).toContain("Valor da proposta");
  });
});
