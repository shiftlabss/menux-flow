// ============================================================================
// Proactive Engine — Barrel Export
// Re-exports the public API for backward-compatible imports.
// ============================================================================

// Types
export type {
  ProactiveEngineInput,
  GeneratedSuggestion,
  PriorityItem,
  SmartInsight,
  QuickWinItem,
  RiskAlert,
  ExecutionPanelData,
} from "./types";

// Public API
export { generateAllSuggestions, computePipelineContext } from "./aggregators";
export { computeTodaysPriorities, computeSmartInsights, computeQuickWins } from "./insights";
export { computeRiskAlerts } from "./alerts";
export { generateMorningSummaryContent } from "./formatter";
