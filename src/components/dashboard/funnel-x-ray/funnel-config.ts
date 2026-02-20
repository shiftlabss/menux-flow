import type { Opportunity } from "@/types";

type FlowStageId = "lead" | "contact" | "meeting" | "proposal" | "negotiation" | "won";
type FunnelXRayState = "ready" | "loading" | "error";
type ActionState = "idle" | "loading" | "success" | "error";

interface FlowStage {
  id: FlowStageId;
  label: string;
  volume: number;
  value: number;
  stalledCount: number;
  stalledDays: number;
}

interface FlowTransition {
  from: FlowStage;
  to: FlowStage;
  conversion: number;
  advanced: number;
  base: number;
}

interface StageInsight {
  riskDeals: string[];
  highlight: string;
  recommendation: string;
}

const STAGE_TO_PIPELINE: Record<FlowStageId, string> = {
  lead: "lead-in",
  contact: "contato-feito",
  meeting: "reuniao-agendada",
  proposal: "proposta-enviada",
  negotiation: "negociacao",
  won: "fechamento",
};

const PIPELINE_TO_FLOW: Record<string, FlowStageId> = {
  "lead-in": "lead",
  "contato-feito": "contact",
  "reuniao-agendada": "meeting",
  "proposta-enviada": "proposal",
  "negociacao": "negotiation",
  "fechamento": "won",
};

const FLOW_STAGE_LABELS: Record<FlowStageId, string> = {
  lead: "Leads",
  contact: "Contato",
  meeting: "Reunião",
  proposal: "Proposta",
  negotiation: "Negociação",
  won: "Fechamento",
};

const FLOW_STAGE_ORDER: FlowStageId[] = [
  "lead",
  "contact",
  "meeting",
  "proposal",
  "negotiation",
  "won",
];

// ── Dynamic builders ────────────────────────────────────────────────

/**
 * Build FlowStage[] from real opportunity data.
 * Groups open opportunities by pipeline stage and computes volume, value,
 * stalled count & average stalled days.
 */
function buildStagesFromOpportunities(
  opportunities: Opportunity[],
  now: Date
): FlowStage[] {
  const openOpps = opportunities.filter((o) => o.status === "open");

  return FLOW_STAGE_ORDER.map((flowId) => {
    const pipelineStage = STAGE_TO_PIPELINE[flowId];
    const stageOpps = openOpps.filter((o) => o.stage === pipelineStage);

    const volume = stageOpps.length;
    const value = stageOpps.reduce((sum, o) => sum + (o.value || 0), 0);

    // Stalled = not updated in 5+ days
    const stalledThreshold = 5 * 24 * 60 * 60 * 1000;
    const stalledOpps = stageOpps.filter(
      (o) => now.getTime() - new Date(o.updatedAt).getTime() > stalledThreshold
    );
    const stalledCount = stalledOpps.length;

    let stalledDays = 0;
    if (stalledOpps.length > 0) {
      const totalDays = stalledOpps.reduce((sum, o) => {
        return sum + Math.round(
          (now.getTime() - new Date(o.updatedAt).getTime()) / (1000 * 60 * 60 * 24)
        );
      }, 0);
      stalledDays = Math.round(totalDays / stalledOpps.length);
    }

    return {
      id: flowId,
      label: FLOW_STAGE_LABELS[flowId],
      volume,
      value,
      stalledCount,
      stalledDays,
    };
  });
}

/**
 * Build contextual insights from real data.
 * riskDeals = top 3 stalled opportunity titles per stage.
 * highlight = dynamic text comparing stage performance.
 * recommendation = contextual action based on stage state.
 */
function buildInsightsFromData(
  stages: FlowStage[],
  opportunities: Opportunity[],
  now: Date
): Record<FlowStageId, StageInsight> {
  const openOpps = opportunities.filter((o) => o.status === "open");
  const stalledThreshold = 5 * 24 * 60 * 60 * 1000;

  const result = {} as Record<FlowStageId, StageInsight>;

  for (const stage of stages) {
    const pipelineStage = STAGE_TO_PIPELINE[stage.id];
    const stageOpps = openOpps.filter((o) => o.stage === pipelineStage);

    // Top 3 stalled deals by days stalled (desc)
    const stalledOpps = stageOpps
      .filter((o) => now.getTime() - new Date(o.updatedAt).getTime() > stalledThreshold)
      .sort(
        (a, b) =>
          new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
      )
      .slice(0, 3);

    const riskDeals =
      stalledOpps.length > 0
        ? stalledOpps.map((o) => o.title || o.clientName)
        : stageOpps.slice(0, 3).map((o) => o.title || o.clientName);

    // Dynamic highlight
    const stalledPct =
      stage.volume > 0
        ? Math.round((stage.stalledCount / stage.volume) * 100)
        : 0;
    const highlight =
      stage.stalledCount > 0
        ? `${stalledPct}% parados há +${stage.stalledDays} dias`
        : stage.volume > 0
          ? `${stage.volume} oportunidades ativas`
          : "Nenhuma oportunidade nesta etapa";

    // Context-aware recommendation
    let recommendation: string;
    if (stage.stalledCount > 0 && stage.stalledCount >= stage.volume * 0.5) {
      recommendation = `Atenção: ${stage.stalledCount} oportunidades paradas. Priorizar follow-up urgente.`;
    } else if (stage.id === "lead") {
      recommendation = "Priorizar contato inicial com leads das últimas 24h.";
    } else if (stage.id === "contact") {
      recommendation = "Escalar follow-up com decisores sem retorno há 3 dias.";
    } else if (stage.id === "meeting") {
      recommendation = "Fechar agenda com prova de valor em até 48h.";
    } else if (stage.id === "proposal") {
      recommendation = "Cobrar feedbacks das propostas paradas para destravar fechamento.";
    } else if (stage.id === "negotiation") {
      recommendation = "Alinhar objeções e preparar última contraproposta.";
    } else {
      recommendation = "Subir ticket com pacote premium na reta final.";
    }

    result[stage.id] = { riskDeals, highlight, recommendation };
  }

  return result;
}

export type {
  FlowStageId,
  FunnelXRayState,
  ActionState,
  FlowStage,
  FlowTransition,
  StageInsight,
};
export {
  STAGE_TO_PIPELINE,
  PIPELINE_TO_FLOW,
  FLOW_STAGE_ORDER,
  FLOW_STAGE_LABELS,
  buildStagesFromOpportunities,
  buildInsightsFromData,
};
