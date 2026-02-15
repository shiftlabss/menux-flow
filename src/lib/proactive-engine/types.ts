// ============================================================================
// Proactive Engine — Types
// ============================================================================

import type { Opportunity, Activity, Client, Goal } from "@/types";
import type { PipelineStageConfig } from "@/stores/pipeline-store";
import type {
  ProactiveSuggestionType,
  ProactiveSuggestionPriority,
} from "@/types/intelligence";

export interface ProactiveEngineInput {
  opportunities: Opportunity[];
  activities: Activity[];
  clients: Client[];
  goals: Goal[];
  pipelines: { stages: PipelineStageConfig[] }[];
  userId: string;
  userRole: string;
}

export interface GeneratedSuggestion {
  type: ProactiveSuggestionType;
  priority: ProactiveSuggestionPriority;
  message: string;
  cardId?: string;
  cardName?: string;
}

export interface PriorityItem {
  id: string;
  type: "overdue" | "due-today" | "sla-warning" | "hot-idle" | "follow-up";
  title: string;
  subtitle: string;
  severity: "critical" | "warning" | "info";
  linkedEntityId?: string;
  linkedEntityType?: "opportunity" | "activity" | "client";
}

export interface SmartInsight {
  id: string;
  icon: string;
  title: string;
  description: string;
  metric?: { value: string; trend: "up" | "down" | "stable" };
  actionLabel?: string;
  actionCommand?: string;
}

export interface QuickWinItem {
  id: string;
  opportunityId: string;
  clientName: string;
  stage: string;
  probability: number;
  value: number;
  reason: string;
}

export interface RiskAlert {
  id: string;
  type: "sla-breach" | "health-drop" | "stale" | "contract-expiring" | "goal-risk";
  title: string;
  description: string;
  severity: "critical" | "warning";
  linkedEntityId?: string;
}

export interface ExecutionPanelData {
  priorities: PriorityItem[];
  insights: SmartInsight[];
  quickWins: QuickWinItem[];
  riskAlerts: RiskAlert[];
}
