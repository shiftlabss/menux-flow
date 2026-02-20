// ============================================================================
// Regras de Negocio — Flow CRM
// Funcoes puras sem dependencias de React ou stores.
// ============================================================================

import type {
  Activity,
  ActivityStatus,
  Client,
  ClientStage,
  HealthScore,
  Opportunity,
  PipelineStage,
  Temperature,
} from "@/types";

// ─── Constantes ─────────────────────────────────────────────────────────────

/** Percentual padrao de comissao */
const DEFAULT_COMMISSION_PERCENTAGE = 5;

/** Ordem dos estagios do pipeline de vendas */
export const PIPELINE_STAGE_ORDER: PipelineStage[] = [
  "lead-in",
  "contato-feito",
  "reuniao-agendada",
  "proposta-enviada",
  "negociacao",
  "fechamento",
];

/** Ordem dos estagios do cliente */
const CLIENT_STAGE_ORDER: ClientStage[] = [
  "onboarding",
  "implantacao",
  "acompanhamento",
  "retencao",
  "churn",
];

/** Cargos oficiais com score de patente fixo e imutável (0-100). */
export const RESTAURANT_POSITIONS = [
  { label: "Proprietário", value: "proprietario", patentScore: 100 },
  { label: "Sócio", value: "socio", patentScore: 90 },
  { label: "Diretor", value: "diretor", patentScore: 80 },
  { label: "Gerente Geral", value: "gerente-geral", patentScore: 70 },
  { label: "Gerente", value: "gerente", patentScore: 60 },
  { label: "Financeiro", value: "financeiro", patentScore: 50 },
  { label: "Operacional", value: "operacional", patentScore: 40 },
  {
    label: "Supervisor/Líder de Turno",
    value: "supervisor-lider-turno",
    patentScore: 30,
  },
  {
    label: "Caixa/Recepcionista",
    value: "caixa-recepcionista",
    patentScore: 20,
  },
  { label: "Garçom/Atendente", value: "garcom-atendente", patentScore: 10 },
] as const;

export type RestaurantPosition = (typeof RESTAURANT_POSITIONS)[number]["value"];

type PatentContactLike = {
  cargo?: string | null;
};

/**
 * Score individual de patente por cargo.
 * Valores ausentes ou desconhecidos retornam 0.
 */
export function getPositionPatentScore(position: string | null | undefined): number {
  if (!position) return 0;
  return RESTAURANT_POSITIONS.find((item) => item.value === position)?.patentScore ?? 0;
}

/**
 * Score de Patente do card: maior score individual entre os contatos.
 * Regra: MAX sem soma/média/ponderação.
 */
export function calculateCardPatentScore<T extends PatentContactLike>(contacts: T[]): number {
  if (contacts.length === 0) return 0;
  return Math.max(...contacts.map((contact) => getPositionPatentScore(contact.cargo)));
}

function parseISODateLocal(dateStr: string): Date {
  const [yearRaw, monthRaw, dayRaw] = dateStr.split("-").map(Number);
  const year = Number.isFinite(yearRaw) ? yearRaw : 1970;
  const month = Number.isFinite(monthRaw) ? monthRaw - 1 : 0;
  const day = Number.isFinite(dayRaw) ? dayRaw : 1;
  return new Date(year, month, day);
}

function startOfDayLocal(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getActivityDueAt(
  activity: Pick<Activity, "dueDate" | "dueTime">
): Date {
  const dueDate = parseISODateLocal(activity.dueDate);

  if (activity.dueTime) {
    const [hoursRaw, minutesRaw] = activity.dueTime.split(":").map(Number);
    const hours = Number.isFinite(hoursRaw) ? hoursRaw : 23;
    const minutes = Number.isFinite(minutesRaw) ? minutesRaw : 59;
    dueDate.setHours(hours, minutes, 0, 0);
    return dueDate;
  }

  dueDate.setHours(23, 59, 59, 999);
  return dueDate;
}

export function isActivityOverdueAt(
  activity: Activity,
  now: Date = new Date()
): boolean {
  if (activity.status === "completed" || activity.status === "cancelled") {
    return false;
  }

  if (activity.status === "overdue") {
    return true;
  }

  if (activity.status !== "pending") {
    return false;
  }

  return getActivityDueAt(activity).getTime() < now.getTime();
}

export function isActivitySlaRiskAt(
  activity: Activity,
  now: Date = new Date()
): boolean {
  if (activity.status !== "pending" || isActivityOverdueAt(activity, now)) {
    return false;
  }

  const today = startOfDayLocal(now);
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  const due = startOfDayLocal(parseISODateLocal(activity.dueDate));

  return due.getTime() >= today.getTime() && due.getTime() <= tomorrow.getTime();
}

// ─── 1. Status Efetivo de Atividade ────────────────────────────────────────

/**
 * Retorna o status efetivo de uma atividade.
 * Se a atividade esta "pending" e o dueDate ja passou, retorna "overdue".
 */
export function getEffectiveActivityStatus(
  activity: Activity,
  now: Date = new Date()
): ActivityStatus {
  if (activity.status === "completed" || activity.status === "cancelled") {
    return activity.status;
  }

  if (activity.status === "pending" && isActivityOverdueAt(activity, now)) {
    return "overdue";
  }

  return activity.status;
}

// ─── 2. Calculo de Temperatura ─────────────────────────────────────────────

/**
 * Calcula a temperatura automatica de uma oportunidade.
 *
 * Fatores:
 * - Dias desde ultima atualizacao: <3d = 3pts, 3-7d = 2pts, >7d = 1pt
 * - Bonus por valor acima da media (+1pt)
 * - Bonus por estagio avancado (negociacao/fechamento) (+1pt)
 *
 * Score >= 4 = hot, >= 2 = warm, else cold
 */
export function calculateTemperature(
  opportunity: Pick<Opportunity, "updatedAt" | "value" | "stage">,
  averageDealValue: number = 10000,
  now: Date = new Date()
): Temperature {
  const updatedAt = new Date(opportunity.updatedAt);
  const daysSinceUpdate = Math.floor(
    (now.getTime() - updatedAt.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Base: dias desde ultima atualizacao
  let score = 0;
  if (daysSinceUpdate < 3) {
    score = 3; // hot
  } else if (daysSinceUpdate <= 7) {
    score = 2; // warm
  } else {
    score = 1; // cold
  }

  // Bonus: valor acima da media
  if (opportunity.value > averageDealValue * 1.5) {
    score += 1;
  }

  // Bonus: estagios avancados (negociacao ou fechamento)
  const stageIndex = PIPELINE_STAGE_ORDER.indexOf(opportunity.stage);
  if (stageIndex >= 4) {
    score += 1;
  }

  // Mapear score para temperatura
  if (score >= 4) return "hot";
  if (score >= 2) return "warm";
  return "cold";
}

// ─── 3. Calculo de Health Score ────────────────────────────────────────────

/**
 * Calcula o Health Score numerico de um cliente (0-100).
 *
 * Componentes:
 * - Dias desde ultima interacao (0-40 pontos)
 * - Receita mensal relativa a media (0-20 pontos)
 * - Proximidade do vencimento do contrato (0-20 pontos)
 * - Progressao de estagio (0-20 pontos)
 */
export function calculateHealthScore(
  client: Pick<Client, "lastInteraction" | "monthlyRevenue" | "contractEnd" | "stage">,
  averageMonthlyRevenue: number = 10000,
  now: Date = new Date()
): { numericScore: number; category: HealthScore } {
  let total = 0;

  // 1. Dias desde ultima interacao (0-40 pontos)
  if (client.lastInteraction) {
    const lastInteraction = new Date(client.lastInteraction);
    const daysSince = Math.floor(
      (now.getTime() - lastInteraction.getTime()) / (1000 * 60 * 60 * 24)
    );
    // 0 dias = 40pts, 30+ dias = 0pts, linear
    total += Math.max(0, Math.round(40 * (1 - daysSince / 30)));
  }
  // Sem interacao registrada = 0 pontos

  // 2. Receita mensal relativa (0-20 pontos)
  if (averageMonthlyRevenue > 0) {
    const revenueRatio = client.monthlyRevenue / averageMonthlyRevenue;
    // ratio >= 1.0 = 20pts, ratio 0 = 0pts, capped at 20
    total += Math.min(20, Math.round(20 * revenueRatio));
  }

  // 3. Proximidade do vencimento do contrato (0-20 pontos)
  if (client.contractEnd) {
    const contractEnd = new Date(client.contractEnd);
    const daysUntilEnd = Math.floor(
      (contractEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (daysUntilEnd <= 0) {
      total += 0; // Contrato expirado
    } else if (daysUntilEnd <= 30) {
      total += 5; // Proximo de expirar
    } else if (daysUntilEnd <= 90) {
      total += 10;
    } else if (daysUntilEnd <= 180) {
      total += 15;
    } else {
      total += 20; // Contrato seguro
    }
  } else {
    total += 15; // Sem data de fim = contrato aberto / indefinido
  }

  // 4. Progressao de estagio (0-20 pontos)
  const stageIndex = CLIENT_STAGE_ORDER.indexOf(client.stage);
  if (client.stage === "churn") {
    total += 0;
  } else {
    // onboarding=5, implantacao=10, acompanhamento=15, retencao=20
    total += (stageIndex + 1) * 5;
  }

  // Classificar
  const category: HealthScore =
    total >= 70 ? "good" : total >= 40 ? "warning" : "critical";

  return { numericScore: Math.min(100, total), category };
}

// ─── 4. Calculo de Lead Score ──────────────────────────────────────────────

/**
 * Calcula o Lead Score de uma oportunidade (0-100).
 *
 * Componentes:
 * - Numero de atividades relacionadas (0-25 pontos)
 * - Temperatura (hot=25, warm=15, cold=5)
 * - Valor do deal relativo a media (0-20 pontos)
 * - Progressao de estagio (0-15 pontos)
 * - Dias no pipeline / frescura (0-15 pontos, decrescente)
 */
export function calculateLeadScore(
  opportunity: Pick<Opportunity, "value" | "temperature" | "stage" | "createdAt">,
  relatedActivities: Activity[],
  averageDealValue: number = 10000,
  now: Date = new Date()
): number {
  let total = 0;

  // 1. Atividades (0-25 pontos) - 5pts por atividade, max 25
  const activityCount = relatedActivities.length;
  total += Math.min(25, activityCount * 5);

  // 2. Temperatura (0-25 pontos)
  switch (opportunity.temperature) {
    case "hot":
      total += 25;
      break;
    case "warm":
      total += 15;
      break;
    case "cold":
      total += 5;
      break;
  }

  // 3. Valor relativo (0-20 pontos)
  if (averageDealValue > 0) {
    const valueRatio = opportunity.value / averageDealValue;
    total += Math.min(20, Math.round((20 * Math.min(valueRatio, 2)) / 2));
  }

  // 4. Progressao de estagio (0-15 pontos)
  const stageIndex = PIPELINE_STAGE_ORDER.indexOf(opportunity.stage);
  // lead-in=0, contato-feito=3, reuniao-agendada=6, proposta-enviada=9, negociacao=12, fechamento=15
  total += stageIndex * 3;

  // 5. Dias no pipeline (0-15 pontos, decrescente — leads frescos valem mais)
  const createdAt = new Date(opportunity.createdAt);
  const daysInPipeline = Math.floor(
    (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
  );
  total += Math.max(0, Math.round(15 * (1 - daysInPipeline / 60)));

  return Math.min(100, Math.max(0, total));
}

// ─── 5. Comissao Projetada ─────────────────────────────────────────────────

/**
 * Calcula a comissao projetada para um contrato ganho.
 */
export function calculateProjectedCommission(
  contractValue: number,
  commissionPercentage: number = DEFAULT_COMMISSION_PERCENTAGE
): { commissionValue: number; percentage: number } {
  const commissionValue = contractValue * (commissionPercentage / 100);
  return {
    commissionValue: Math.round(commissionValue * 100) / 100,
    percentage: commissionPercentage,
  };
}

// ─── 6. SLA Deadline ───────────────────────────────────────────────────────

/**
 * Calcula a nova deadline de SLA ao mover para um novo estagio.
 */
export function calculateSlaDeadline(
  slaHours: number,
  now: Date = new Date()
): string {
  const deadline = new Date(now.getTime() + slaHours * 60 * 60 * 1000);
  return deadline.toISOString();
}

// ─── 7. Formatacao de Moeda ────────────────────────────────────────────────

/**
 * Formata valor monetario em Real Brasileiro.
 */
export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(value);
}
