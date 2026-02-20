import { describe, it, expect } from "vitest";
import type { Activity, Opportunity, Client } from "@/types";
import {
  getActivityDueAt,
  getEffectiveActivityStatus,
  isActivityOverdueAt,
  isActivitySlaRiskAt,
  calculateTemperature,
  calculateHealthScore,
  calculateLeadScore,
  calculateProjectedCommission,
  calculateSlaDeadline,
  formatCurrencyBRL,
} from "./business-rules";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Data fixa usada como "agora" em todos os testes */
const NOW = new Date("2024-06-15T12:00:00Z");

/** Fabrica minima de Activity para testes */
function makeActivity(overrides: Partial<Activity> = {}): Activity {
  return {
    id: "act-1",
    title: "Follow up",
    type: "task",
    status: "pending",
    dueDate: "2024-06-20",
    responsibleId: "user-1",
    responsibleName: "Joao",
    createdAt: "2024-06-01T10:00:00Z",
    ...overrides,
  };
}

/** Fabrica minima de Opportunity (Pick) para calculateTemperature */
function makeOpportunityForTemp(
  overrides: Partial<Pick<Opportunity, "updatedAt" | "value" | "stage">> = {}
): Pick<Opportunity, "updatedAt" | "value" | "stage"> {
  return {
    updatedAt: "2024-06-14T12:00:00Z",
    value: 10000,
    stage: "lead-in",
    ...overrides,
  };
}

/** Fabrica minima de Client (Pick) para calculateHealthScore */
function makeClientForHealth(
  overrides: Partial<
    Pick<Client, "lastInteraction" | "monthlyRevenue" | "contractEnd" | "stage">
  > = {}
): Pick<Client, "lastInteraction" | "monthlyRevenue" | "contractEnd" | "stage"> {
  return {
    lastInteraction: "2024-06-14T10:00:00Z",
    monthlyRevenue: 12000,
    contractEnd: "2025-06-15",
    stage: "retencao",
    ...overrides,
  };
}

/** Fabrica minima de Opportunity (Pick) para calculateLeadScore */
function makeOpportunityForLead(
  overrides: Partial<
    Pick<Opportunity, "value" | "temperature" | "stage" | "createdAt">
  > = {}
): Pick<Opportunity, "value" | "temperature" | "stage" | "createdAt"> {
  return {
    value: 10000,
    temperature: "warm",
    stage: "lead-in",
    createdAt: "2024-06-10T10:00:00Z",
    ...overrides,
  };
}

// ─── 1. getEffectiveActivityStatus ────────────────────────────────────────────

describe("getEffectiveActivityStatus", () => {
  it("retorna 'completed' quando a atividade esta completed", () => {
    const activity = makeActivity({ status: "completed" });
    expect(getEffectiveActivityStatus(activity, NOW)).toBe("completed");
  });

  it("retorna 'cancelled' quando a atividade esta cancelled", () => {
    const activity = makeActivity({ status: "cancelled" });
    expect(getEffectiveActivityStatus(activity, NOW)).toBe("cancelled");
  });

  it("retorna 'pending' quando a atividade esta pending e dueDate e futuro", () => {
    const activity = makeActivity({
      status: "pending",
      dueDate: "2024-06-20", // 5 dias no futuro
    });
    expect(getEffectiveActivityStatus(activity, NOW)).toBe("pending");
  });

  it("retorna 'overdue' quando a atividade esta pending e dueDate ja passou", () => {
    const activity = makeActivity({
      status: "pending",
      dueDate: "2024-06-10", // 5 dias atras
    });
    expect(getEffectiveActivityStatus(activity, NOW)).toBe("overdue");
  });

  it("retorna 'overdue' quando pending, dueDate e hoje mas dueTime ja passou", () => {
    const nowLocal = new Date(2024, 5, 15, 12, 0, 0, 0);
    const activity = makeActivity({
      status: "pending",
      dueDate: "2024-06-15",
      dueTime: "10:00", // 10h, e NOW e 12h
    });
    expect(getEffectiveActivityStatus(activity, nowLocal)).toBe("overdue");
  });

  it("retorna 'pending' quando pending, dueDate e amanha e dueTime e futuro", () => {
    // Usa dueDate no futuro para evitar problemas de timezone local vs UTC
    const activity = makeActivity({
      status: "pending",
      dueDate: "2024-06-16",
      dueTime: "14:00",
    });
    expect(getEffectiveActivityStatus(activity, NOW)).toBe("pending");
  });

  it("retorna 'pending' quando pending, dueDate e amanha e sem dueTime (fim do dia)", () => {
    // Usa dueDate no futuro para evitar problemas de timezone local vs UTC
    const activity = makeActivity({
      status: "pending",
      dueDate: "2024-06-16",
    });
    expect(getEffectiveActivityStatus(activity, NOW)).toBe("pending");
  });
});

describe("activity due/overdue/sla helpers", () => {
  it("getActivityDueAt considera fim do dia quando dueTime nao existe", () => {
    const dueAt = getActivityDueAt(
      makeActivity({
        dueDate: "2024-06-20",
        dueTime: undefined,
      })
    );

    expect(dueAt.getFullYear()).toBe(2024);
    expect(dueAt.getMonth()).toBe(5);
    expect(dueAt.getDate()).toBe(20);
    expect(dueAt.getHours()).toBe(23);
    expect(dueAt.getMinutes()).toBe(59);
  });

  it("isActivityOverdueAt considera hora quando dueTime esta preenchido", () => {
    const nowLocal = new Date(2024, 5, 15, 12, 0, 0, 0);
    const activity = makeActivity({
      status: "pending",
      dueDate: "2024-06-15",
      dueTime: "10:00",
    });

    expect(isActivityOverdueAt(activity, nowLocal)).toBe(true);
  });

  it("isActivitySlaRiskAt retorna true para pendente com prazo entre hoje e amanha", () => {
    const nowLocal = new Date(2024, 5, 15, 9, 0, 0, 0);
    const activity = makeActivity({
      status: "pending",
      dueDate: "2024-06-16",
      dueTime: "16:00",
    });

    expect(isActivitySlaRiskAt(activity, nowLocal)).toBe(true);
  });

  it("isActivitySlaRiskAt retorna false quando atividade nao esta pendente", () => {
    const nowLocal = new Date(2024, 5, 15, 9, 0, 0, 0);
    const activity = makeActivity({
      status: "completed",
      dueDate: "2024-06-16",
    });

    expect(isActivitySlaRiskAt(activity, nowLocal)).toBe(false);
  });
});

// ─── 2. calculateTemperature ──────────────────────────────────────────────────

describe("calculateTemperature", () => {
  it("retorna 'warm' quando atualizada ha <3 dias, valor normal, estagio inicial (score=3)", () => {
    // updatedAt = 1 dia atras => 3pts; valor = 10000, media = 10000 => sem bonus; lead-in => sem bonus
    // total = 3 => warm
    const opp = makeOpportunityForTemp({
      updatedAt: "2024-06-14T12:00:00Z", // 1 dia atras
      value: 10000,
      stage: "lead-in",
    });
    expect(calculateTemperature(opp, 10000, NOW)).toBe("warm");
  });

  it("retorna 'hot' quando atualizada ha <3 dias com valor alto (score=4)", () => {
    // updatedAt = 1 dia atras => 3pts; valor > 1.5 * media => +1pt
    // total = 4 => hot
    const opp = makeOpportunityForTemp({
      updatedAt: "2024-06-14T12:00:00Z",
      value: 20000,
      stage: "lead-in",
    });
    expect(calculateTemperature(opp, 10000, NOW)).toBe("hot");
  });

  it("retorna 'hot' quando atualizada ha <3 dias com estagio avancado (score=4)", () => {
    // updatedAt = 1 dia atras => 3pts; estagio negociacao (index=4) => +1pt
    // total = 4 => hot
    const opp = makeOpportunityForTemp({
      updatedAt: "2024-06-14T12:00:00Z",
      value: 5000,
      stage: "negociacao",
    });
    expect(calculateTemperature(opp, 10000, NOW)).toBe("hot");
  });

  it("retorna 'hot' quando atualizada ha <3 dias com valor alto E estagio avancado (score=5)", () => {
    const opp = makeOpportunityForTemp({
      updatedAt: "2024-06-14T12:00:00Z",
      value: 20000,
      stage: "fechamento",
    });
    expect(calculateTemperature(opp, 10000, NOW)).toBe("hot");
  });

  it("retorna 'warm' quando atualizada ha 3-7 dias (score=2)", () => {
    // updatedAt = 5 dias atras => 2pts
    const opp = makeOpportunityForTemp({
      updatedAt: "2024-06-10T12:00:00Z",
      value: 5000,
      stage: "lead-in",
    });
    expect(calculateTemperature(opp, 10000, NOW)).toBe("warm");
  });

  it("retorna 'cold' quando atualizada ha >7 dias sem bonus (score=1)", () => {
    // updatedAt = 10 dias atras => 1pt; sem bonuses
    const opp = makeOpportunityForTemp({
      updatedAt: "2024-06-05T12:00:00Z",
      value: 5000,
      stage: "lead-in",
    });
    expect(calculateTemperature(opp, 10000, NOW)).toBe("cold");
  });

  it("retorna 'warm' quando atualizada ha >7 dias mas com valor alto E estagio avancado (score=3)", () => {
    // 1pt base + 1pt valor + 1pt estagio = 3 => warm
    const opp = makeOpportunityForTemp({
      updatedAt: "2024-06-01T12:00:00Z",
      value: 20000,
      stage: "negociacao",
    });
    expect(calculateTemperature(opp, 10000, NOW)).toBe("warm");
  });
});

// ─── 3. calculateHealthScore ──────────────────────────────────────────────────

describe("calculateHealthScore", () => {
  it("retorna 'good' para cliente saudavel (interacao recente, receita alta, contrato longo, retencao)", () => {
    const client = makeClientForHealth({
      lastInteraction: "2024-06-14T10:00:00Z", // 1 dia atras => ~39pts
      monthlyRevenue: 15000,                   // ratio 1.5 => 20pts (capped)
      contractEnd: "2025-06-15",               // >180 dias => 20pts
      stage: "retencao",                        // index 3 => (3+1)*5 = 20pts
    });
    // Total ~= 39 + 20 + 20 + 20 = 99 => good
    const result = calculateHealthScore(client, 10000, NOW);
    expect(result.category).toBe("good");
    expect(result.numericScore).toBeGreaterThanOrEqual(70);
  });

  it("retorna 'warning' para cliente com valores medianos", () => {
    const client = makeClientForHealth({
      lastInteraction: "2024-06-01T10:00:00Z", // 14 dias atras => ~21pts
      monthlyRevenue: 5000,                    // ratio 0.5 => 10pts
      contractEnd: "2024-08-15",               // ~61 dias => 10pts
      stage: "implantacao",                     // index 1 => (1+1)*5 = 10pts
    });
    // Total ~= 21 + 10 + 10 + 10 = 51 => warning
    const result = calculateHealthScore(client, 10000, NOW);
    expect(result.category).toBe("warning");
    expect(result.numericScore).toBeGreaterThanOrEqual(40);
    expect(result.numericScore).toBeLessThan(70);
  });

  it("retorna 'critical' para cliente em estado critico (sem interacao, receita baixa, contrato expirado, churn)", () => {
    const client = makeClientForHealth({
      lastInteraction: undefined,             // 0pts
      monthlyRevenue: 0,                      // 0pts
      contractEnd: "2024-06-01",              // expirado => 0pts
      stage: "churn",                          // 0pts
    });
    // Total = 0 => critical
    const result = calculateHealthScore(client, 10000, NOW);
    expect(result.category).toBe("critical");
    expect(result.numericScore).toBeLessThan(40);
  });

  it("atribui 15pts quando contractEnd e undefined (contrato indefinido)", () => {
    const client = makeClientForHealth({
      lastInteraction: undefined,
      monthlyRevenue: 0,
      contractEnd: undefined,
      stage: "churn",
    });
    // 0 (interacao) + 0 (receita) + 15 (contrato indef) + 0 (churn) = 15
    const result = calculateHealthScore(client, 10000, NOW);
    expect(result.numericScore).toBe(15);
    expect(result.category).toBe("critical");
  });

  it("atribui 5pts para contrato com vencimento em ate 30 dias", () => {
    const client = makeClientForHealth({
      lastInteraction: undefined,
      monthlyRevenue: 0,
      contractEnd: "2024-07-10", // 25 dias => 5pts
      stage: "churn",
    });
    const result = calculateHealthScore(client, 10000, NOW);
    expect(result.numericScore).toBe(5);
  });

  it("limita o score maximo a 100", () => {
    const client = makeClientForHealth({
      lastInteraction: "2024-06-15T11:59:00Z", // ~0 dias => 40pts
      monthlyRevenue: 50000,                   // ratio 5.0 => capped 20pts
      contractEnd: "2026-06-15",               // >180 dias => 20pts
      stage: "retencao",                        // 20pts
    });
    // Total = 40 + 20 + 20 + 20 = 100
    const result = calculateHealthScore(client, 10000, NOW);
    expect(result.numericScore).toBeLessThanOrEqual(100);
  });
});

// ─── 4. calculateLeadScore ───────────────────────────────────────────────────

describe("calculateLeadScore", () => {
  it("retorna score alto para lead hot, muitas atividades, valor alto, estagio avancado, recente", () => {
    const opp = makeOpportunityForLead({
      value: 20000,
      temperature: "hot",
      stage: "fechamento",        // index 5 => 15pts
      createdAt: "2024-06-14T10:00:00Z", // 1 dia => 15 * (1 - 1/60) ~= 15pts
    });
    const activities = Array.from({ length: 6 }, (_, i) =>
      makeActivity({ id: `act-${i}` })
    );
    // 25 (atividades, capped) + 25 (hot) + 20 (valor 2x, capped) + 15 (estagio) + ~15 (frescura) = ~100
    const score = calculateLeadScore(opp, activities, 10000, NOW);
    expect(score).toBeGreaterThanOrEqual(80);
  });

  it("retorna score baixo para lead cold, sem atividades, valor baixo, estagio inicial, antigo", () => {
    const opp = makeOpportunityForLead({
      value: 1000,
      temperature: "cold",
      stage: "lead-in",           // index 0 => 0pts
      createdAt: "2024-04-01T10:00:00Z", // 75 dias => 15 * (1 - 75/60) < 0, capped at 0
    });
    const activities: Activity[] = [];
    // 0 (atividades) + 5 (cold) + ~2 (valor) + 0 (estagio) + 0 (frescura) = ~7
    const score = calculateLeadScore(opp, activities, 10000, NOW);
    expect(score).toBeLessThanOrEqual(20);
  });

  it("limita atividades a 25 pontos (5 atividades = max)", () => {
    const opp = makeOpportunityForLead({
      value: 0,
      temperature: "cold",
      stage: "lead-in",
      createdAt: "2024-04-01T10:00:00Z",
    });
    const fiveActivities = Array.from({ length: 5 }, (_, i) =>
      makeActivity({ id: `act-${i}` })
    );
    const tenActivities = Array.from({ length: 10 }, (_, i) =>
      makeActivity({ id: `act-${i}` })
    );
    const scoreFive = calculateLeadScore(opp, fiveActivities, 10000, NOW);
    const scoreTen = calculateLeadScore(opp, tenActivities, 10000, NOW);
    expect(scoreFive).toBe(scoreTen); // ambos deveriam ter 25pts de atividades
  });

  it("atribui pontos corretos por temperatura: hot=25, warm=15, cold=5", () => {
    const baseOpp = makeOpportunityForLead({
      value: 0,
      stage: "lead-in",
      createdAt: "2024-06-15T12:00:00Z", // 0 dias => 15pts frescura
    });
    const noActivities: Activity[] = [];

    const scoreHot = calculateLeadScore(
      { ...baseOpp, temperature: "hot" },
      noActivities,
      10000,
      NOW
    );
    const scoreWarm = calculateLeadScore(
      { ...baseOpp, temperature: "warm" },
      noActivities,
      10000,
      NOW
    );
    const scoreCold = calculateLeadScore(
      { ...baseOpp, temperature: "cold" },
      noActivities,
      10000,
      NOW
    );

    // A diferenca entre hot e warm deve ser 10 (25-15)
    expect(scoreHot - scoreWarm).toBe(10);
    // A diferenca entre warm e cold deve ser 10 (15-5)
    expect(scoreWarm - scoreCold).toBe(10);
  });

  it("nunca retorna valor acima de 100 ou abaixo de 0", () => {
    const oppMax = makeOpportunityForLead({
      value: 999999,
      temperature: "hot",
      stage: "fechamento",
      createdAt: "2024-06-15T12:00:00Z",
    });
    const manyActivities = Array.from({ length: 20 }, (_, i) =>
      makeActivity({ id: `act-${i}` })
    );
    const score = calculateLeadScore(oppMax, manyActivities, 10000, NOW);
    expect(score).toBeLessThanOrEqual(100);
    expect(score).toBeGreaterThanOrEqual(0);
  });
});

// ─── 5. calculateProjectedCommission ──────────────────────────────────────────

describe("calculateProjectedCommission", () => {
  it("calcula comissao com percentual padrao de 5%", () => {
    const result = calculateProjectedCommission(100000);
    expect(result.commissionValue).toBe(5000);
    expect(result.percentage).toBe(5);
  });

  it("calcula comissao com percentual customizado", () => {
    const result = calculateProjectedCommission(100000, 10);
    expect(result.commissionValue).toBe(10000);
    expect(result.percentage).toBe(10);
  });

  it("arredonda para 2 casas decimais", () => {
    const result = calculateProjectedCommission(33333, 7);
    // 33333 * 0.07 = 2333.31
    expect(result.commissionValue).toBe(2333.31);
  });

  it("retorna 0 para valor de contrato 0", () => {
    const result = calculateProjectedCommission(0, 5);
    expect(result.commissionValue).toBe(0);
    expect(result.percentage).toBe(5);
  });
});

// ─── 6. calculateSlaDeadline ──────────────────────────────────────────────────

describe("calculateSlaDeadline", () => {
  it("retorna uma string ISO no futuro", () => {
    const deadline = calculateSlaDeadline(24, NOW);
    const deadlineDate = new Date(deadline);
    expect(deadlineDate.getTime()).toBeGreaterThan(NOW.getTime());
  });

  it("adiciona as horas corretas a data atual", () => {
    const deadline = calculateSlaDeadline(48, NOW);
    const deadlineDate = new Date(deadline);
    const expectedMs = NOW.getTime() + 48 * 60 * 60 * 1000;
    expect(deadlineDate.getTime()).toBe(expectedMs);
  });

  it("retorna ISO string valida para 0 horas (deadline = now)", () => {
    const deadline = calculateSlaDeadline(0, NOW);
    expect(deadline).toBe(NOW.toISOString());
  });

  it("calcula corretamente para SLA de 72 horas", () => {
    const deadline = calculateSlaDeadline(72, NOW);
    // NOW = 2024-06-15T12:00:00Z + 72h = 2024-06-18T12:00:00Z
    expect(deadline).toBe("2024-06-18T12:00:00.000Z");
  });
});

// ─── 7. formatCurrencyBRL ─────────────────────────────────────────────────────

describe("formatCurrencyBRL", () => {
  it("formata valor inteiro corretamente em BRL", () => {
    const result = formatCurrencyBRL(1500);
    // O formato esperado e "R$ 1.500" (sem centavos pois minimumFractionDigits=0)
    expect(result).toContain("R$");
    expect(result).toContain("1.500");
  });

  it("formata valor com decimais", () => {
    const result = formatCurrencyBRL(1234.56);
    expect(result).toContain("R$");
    expect(result).toContain("1.234");
  });

  it("formata zero", () => {
    const result = formatCurrencyBRL(0);
    expect(result).toContain("R$");
    expect(result).toContain("0");
  });

  it("formata valores grandes", () => {
    const result = formatCurrencyBRL(1000000);
    expect(result).toContain("R$");
    expect(result).toContain("1.000.000");
  });

  it("formata valores negativos", () => {
    const result = formatCurrencyBRL(-500);
    expect(result).toContain("R$");
    expect(result).toContain("500");
  });
});
