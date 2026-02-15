type FlowStageId = "lead" | "contact" | "meeting" | "proposal" | "won";
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
  won: "fechamento",
};

const FUNNEL_STAGES: FlowStage[] = [
  {
    id: "lead",
    label: "Leads",
    volume: 150,
    value: 2460000,
    stalledCount: 6,
    stalledDays: 3,
  },
  {
    id: "contact",
    label: "Contato",
    volume: 68,
    value: 1840000,
    stalledCount: 7,
    stalledDays: 4,
  },
  {
    id: "meeting",
    label: "Reunião",
    volume: 44,
    value: 1260000,
    stalledCount: 8,
    stalledDays: 4,
  },
  {
    id: "proposal",
    label: "Proposta",
    volume: 11,
    value: 850000,
    stalledCount: 11,
    stalledDays: 5,
  },
  {
    id: "won",
    label: "Fechamento",
    volume: 3,
    value: 120000,
    stalledCount: 2,
    stalledDays: 2,
  },
];

const STAGE_INSIGHTS: Record<FlowStageId, StageInsight> = {
  lead: {
    riskDeals: ["Blue Horizon Foods", "Mercado Vale Norte", "Bistrô Veneza"],
    highlight: "Lead subiu +12% na semana",
    recommendation: "Priorizar contato inicial em leads quentes das últimas 24h.",
  },
  contact: {
    riskDeals: ["Hotel Mirante Sul", "Rede Sabor Urbano", "Alpha Distribuição"],
    highlight: "Contato com decisor caiu 9%",
    recommendation: "Escalar follow-up com decisores sem retorno há 3 dias.",
  },
  meeting: {
    riskDeals: ["Grupo Matriz", "Restaurante Villa", "Bom Pão Atacado"],
    highlight: "Reuniões com melhor fit subiram 7%",
    recommendation: "Fechar agenda com agenda de prova de valor em até 48h.",
  },
  proposal: {
    riskDeals: ["Café Aurora", "Rede Solaris", "Empório Central"],
    highlight: "Queda de 75% da reunião para proposta",
    recommendation:
      "Cobrar feedbacks das propostas paradas para destravar fechamento.",
  },
  won: {
    riskDeals: ["Núcleo Gourmet", "Casa da Serra", "Pousada Atlântica"],
    highlight: "Fechamento estável, porém com ticket menor",
    recommendation: "Subir ticket com pacote premium na reta final.",
  },
};

export type { FlowStageId, FunnelXRayState, ActionState, FlowStage, FlowTransition, StageInsight };
export { STAGE_TO_PIPELINE, FUNNEL_STAGES, STAGE_INSIGHTS };
