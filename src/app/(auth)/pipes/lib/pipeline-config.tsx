import { Flame, Thermometer, Snowflake } from "lucide-react";
import type { Opportunity, PipelineStage, Temperature } from "@/types";

// ===================================================================
// Funnel Definitions
// ===================================================================

export interface FunnelDefinition {
  id: string;
  label: string;
  stages: { id: PipelineStage; label: string; slaHours: number }[];
}

export const funnels: FunnelDefinition[] = [
  {
    id: "comercial",
    label: "Leads",
    stages: [
      { id: "lead-in", label: "Lead-In", slaHours: 48 },
      { id: "contato-feito", label: "Contato Feito", slaHours: 72 },
      { id: "reuniao-agendada", label: "Reuniao Agendada", slaHours: 120 },
      { id: "proposta-enviada", label: "Proposta Enviada", slaHours: 96 },
      { id: "negociacao", label: "Negociacao", slaHours: 168 },
      { id: "fechamento", label: "Fechamento", slaHours: 48 },
    ],
  },
  {
    id: "indicacao",
    label: "Indicacao",
    stages: [
      { id: "lead-in", label: "Lead-In", slaHours: 24 },
      { id: "contato-feito", label: "Contato Feito", slaHours: 48 },
      { id: "proposta-enviada", label: "Proposta Enviada", slaHours: 72 },
      { id: "fechamento", label: "Fechamento", slaHours: 48 },
    ],
  },
];

// ===================================================================
// Stage Validation Required Fields
// ===================================================================

export const stageRequiredFields: Record<
  PipelineStage,
  { field: keyof Opportunity; label: string }[]
> = {
  "lead-in": [],
  "contato-feito": [{ field: "clientName", label: "Nome do contato" }],
  "reuniao-agendada": [
    { field: "clientName", label: "Nome do contato" },
    { field: "expectedCloseDate", label: "Data prevista de fechamento" },
  ],
  "proposta-enviada": [
    { field: "clientName", label: "Nome do contato" },
    { field: "expectedCloseDate", label: "Data prevista de fechamento" },
    { field: "value", label: "Valor da proposta" },
  ],
  negociacao: [
    { field: "clientName", label: "Nome do contato" },
    { field: "expectedCloseDate", label: "Data prevista de fechamento" },
    { field: "value", label: "Valor da proposta" },
    { field: "monthlyValue", label: "Valor mensal" },
  ],
  fechamento: [
    { field: "clientName", label: "Nome do contato" },
    { field: "expectedCloseDate", label: "Data prevista de fechamento" },
    { field: "value", label: "Valor da proposta" },
    { field: "monthlyValue", label: "Valor mensal" },
  ],
};

// ===================================================================
// Temperature Config
// ===================================================================

export const temperatureConfig: Record<
  Temperature,
  { icon: React.ReactNode; label: string; colorClass: string }
> = {
  hot: {
    icon: <Flame className="h-3.5 w-3.5" />,
    label: "Quente",
    colorClass: "text-status-danger",
  },
  warm: {
    icon: <Thermometer className="h-3.5 w-3.5" />,
    label: "Morno",
    colorClass: "text-status-warning",
  },
  cold: {
    icon: <Snowflake className="h-3.5 w-3.5" />,
    label: "Frio",
    colorClass: "text-status-info",
  },
};

// ===================================================================
// Stage Color Palette
// ===================================================================

export const stageColorPalette = [
  { id: "default", label: "Padrao", bg: "bg-brand", hex: "#1d4ed8" },
  { id: "blue", label: "Azul", bg: "bg-blue-500", hex: "#3b82f6" },
  { id: "cyan", label: "Ciano", bg: "bg-cyan-500", hex: "#06b6d4" },
  { id: "green", label: "Verde", bg: "bg-emerald-500", hex: "#10b981" },
  { id: "yellow", label: "Amarelo", bg: "bg-amber-400", hex: "#fbbf24" },
  { id: "orange", label: "Laranja", bg: "bg-orange-500", hex: "#f97316" },
  { id: "red", label: "Vermelho", bg: "bg-red-500", hex: "#ef4444" },
  { id: "pink", label: "Rosa", bg: "bg-pink-500", hex: "#ec4899" },
  { id: "gray", label: "Cinza", bg: "bg-zinc-400", hex: "#a1a1aa" },
];

// ===================================================================
// Stage Customization
// ===================================================================

export interface StageCustomization {
  label?: string;
  colorId?: string;
}

export const STAGE_CUSTOM_STORAGE_KEY = "flow-stage-customizations";

export function loadStageCustomizations(): Record<string, StageCustomization> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STAGE_CUSTOM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    try { localStorage.removeItem(STAGE_CUSTOM_STORAGE_KEY); } catch { }
    return {};
  }
}

export function saveStageCustomizations(
  data: Record<string, StageCustomization>
): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STAGE_CUSTOM_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Silently ignore quota errors
  }
}
