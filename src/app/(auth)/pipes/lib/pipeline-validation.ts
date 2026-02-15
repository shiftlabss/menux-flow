import type { Opportunity, PipelineStage } from "@/types";
import { PIPELINE_STAGE_ORDER } from "@/lib/business-rules";
import { stageRequiredFields } from "./pipeline-config";

// ===================================================================
// Helpers
// ===================================================================

export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// ===================================================================
// SLA Status
// ===================================================================

export type SlaStatus = "ok" | "near" | "breached";

export function getSlaStatus(
  slaDeadline?: string
): { status: SlaStatus; label: string; detailLabel: string } {
  if (!slaDeadline)
    return { status: "ok", label: "", detailLabel: "SLA nao definido" };
  const now = new Date();
  const deadline = new Date(slaDeadline);
  const diffMs = deadline.getTime() - now.getTime();

  if (diffMs <= 0) {
    const overMs = Math.abs(diffMs);
    const overHours = Math.floor(overMs / (1000 * 60 * 60));
    const overDays = Math.floor(overHours / 24);
    const remainHours = overHours % 24;
    const overLabel =
      overDays > 0 ? `${overDays}d ${remainHours}h` : `${overHours}h`;
    return {
      status: "breached",
      label: "Estourado",
      detailLabel: `SLA estourado ha ${overLabel}`,
    };
  }

  const totalHours = diffMs / (1000 * 60 * 60);
  const days = Math.floor(totalHours / 24);
  const hours = Math.floor(totalHours % 24);
  const label = days > 0 ? `${days}d ${hours}h` : `${hours}h`;

  if (totalHours <= 12) {
    return {
      status: "near",
      label,
      detailLabel: `SLA vence em ${label} — atencao!`,
    };
  }

  return { status: "ok", label, detailLabel: `SLA restante: ${label}` };
}

export function getSlaColors(status: SlaStatus) {
  switch (status) {
    case "ok":
      return {
        dot: "bg-status-success",
        border: "border-l-brand",
        text: "text-zinc-400",
      };
    case "near":
      return {
        dot: "bg-status-warning",
        border: "border-l-status-warning",
        text: "text-status-warning",
      };
    case "breached":
      return {
        dot: "bg-status-danger",
        border: "border-l-status-danger",
        text: "text-status-danger",
      };
  }
}

// ===================================================================
// Stage Transition Validation
// ===================================================================

export function validateStageTransition(
  opportunity: Opportunity,
  targetStage: PipelineStage
): { missing: string[]; isRegression: boolean } {
  const currentIdx = PIPELINE_STAGE_ORDER.indexOf(opportunity.stage);
  const targetIdx = PIPELINE_STAGE_ORDER.indexOf(targetStage);

  if (targetIdx < currentIdx) {
    return { missing: [], isRegression: true };
  }

  const requiredFields = stageRequiredFields[targetStage] || [];
  const missing: string[] = [];

  for (const req of requiredFields) {
    const val = opportunity[req.field];
    if (val === undefined || val === null || val === "") {
      missing.push(req.label);
    } else if (typeof val === "number" && val <= 0) {
      missing.push(req.label);
    }
  }

  return { missing, isRegression: false };
}
