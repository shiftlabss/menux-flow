# Flow Audit Improvements — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Break 5 monolithic files into ~40 focused modules, add error boundaries, expand test coverage, add loading states, and create CLAUDE.md — zero breaking changes.

**Architecture:** Barrel exports (index.ts) pattern preserves all existing imports. Each large file becomes a folder with smaller modules. Error boundaries use class components at layout/page/widget level.

**Tech Stack:** Next.js 16, React 19, TypeScript 5.9, Zustand 5, Vitest 4, shadcn/ui, Tailwind v4

---

## Phase 1: File Splitting

---

### Task 1: Split mock-data.ts (2,382 lines → 12 files)

**Files:**
- Create: `src/lib/mock-data/helpers.ts`
- Create: `src/lib/mock-data/users.ts`
- Create: `src/lib/mock-data/opportunities.ts`
- Create: `src/lib/mock-data/clients.ts`
- Create: `src/lib/mock-data/activities.ts`
- Create: `src/lib/mock-data/commissions.ts`
- Create: `src/lib/mock-data/goals.ts`
- Create: `src/lib/mock-data/notifications.ts`
- Create: `src/lib/mock-data/audit-log.ts`
- Create: `src/lib/mock-data/dynamic-generator.ts`
- Create: `src/lib/mock-data/negotiations.ts`
- Create: `src/lib/mock-data/index.ts`
- Delete: `src/lib/mock-data.ts`

**Step 1: Create the folder**
```bash
mkdir -p src/lib/mock-data
```

**Step 2: Create `src/lib/mock-data/helpers.ts`**

Extract the `d()` date helper function (line 115-116 of the original). This is used by opportunities, clients, activities, commissions, goals, audit-log, and notifications.

```ts
/** Generate a YYYY-MM-DD date string. */
export const d = (year: number, month: number, day: number) =>
  `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
```

**Step 3: Create `src/lib/mock-data/users.ts`**

Extract lines 1-112 of the original. Contains:
- `import type { TeamUser } from "@/types";`
- `export const mockUsers: TeamUser[]` — array of 8 TeamUser objects

This file does NOT need the `d()` helper (no dates in the user objects use it).

**Step 4: Create `src/lib/mock-data/opportunities.ts`**

Extract lines 118-1377 of the original. Contains:
- `import type { Opportunity } from "@/types";`
- `import { d } from "./helpers";`
- `export const mockOpportunities: Opportunity[]` — array of 65 Opportunity objects (40 won, 15 lost, 10 open)

All date fields (`createdAt`, `updatedAt`, `expectedCloseDate`) use `d()`.

**Step 5: Create `src/lib/mock-data/clients.ts`**

Extract lines 1379-1422 of the original. Contains:
- `import type { Client } from "@/types";`
- `import { d } from "./helpers";`
- `export const mockClients: Client[]` — array of 35 Client objects

**Step 6: Create `src/lib/mock-data/activities.ts`**

Extract lines 1424-1488 of the original. Contains:
- `import type { Activity } from "@/types";`
- `import { d } from "./helpers";`
- `export const mockActivities: Activity[]` — array of ~52 Activity objects (pending, completed, overdue, cancelled)

**Step 7: Create `src/lib/mock-data/commissions.ts`**

Extract lines 1490-1546 of the original. Contains:
- `import type { Commission } from "@/types";`
- `import { d } from "./helpers";`
- `export const mockCommissions: Commission[]` — array of 50 Commission objects (paid, confirmed, projected)

**Step 8: Create `src/lib/mock-data/notifications.ts`**

Extract lines 1548-1574 of the original. Contains:
- `import type { Notification, DashboardMetrics } from "@/types";`
- `export const mockNotifications: Notification[]` — array of 10 Notification objects
- `export const mockDashboardMetrics: DashboardMetrics` — single metrics object

Note: This file does NOT use the `d()` helper — notification dates are inline ISO strings.

**Step 9: Create `src/lib/mock-data/audit-log.ts`**

Extract lines 1576-1594 of the original. Contains:
- `import type { AuditEvent } from "@/types";`
- `export const mockAuditLog: AuditEvent[]` — array of 15 AuditEvent objects

Note: This file does NOT use the `d()` helper — audit timestamps are inline ISO strings.

**Step 10: Create `src/lib/mock-data/goals.ts`**

Extract lines 1596-1609 of the original. Contains:
- `import type { Goal } from "@/types";`
- `import { d } from "./helpers";`
- `export const mockGoals: Goal[]` — array of 8 Goal objects

Goal `startDate` and `endDate` fields use `d()`.

**Step 11: Create `src/lib/mock-data/dynamic-generator.ts`**

Extract lines 1611-2334 of the original. Contains:
- `import type { Opportunity } from "@/types";`
- `export function generateDynamicMockData(): Opportunity[]`

This function has its OWN inline date helpers (`h()` for hours-from-now, `daysAgo()`, `daysFromNow()`). It does NOT import the `d()` helper. It returns an array of 40 dynamically-generated Opportunity objects with SLA deadlines relative to `new Date()`.

**Step 12: Create `src/lib/mock-data/negotiations.ts`**

Extract lines 2336-2382 of the original. Contains:
- `import { NegotiationRound } from "@/types";` (NOTE: value import, NOT type-only import)
- `export const mockNegotiationRounds: NegotiationRound[]` — array of 3 NegotiationRound objects

Dates in this file are inline ISO strings; no `d()` usage.

**Step 13: Create the barrel `src/lib/mock-data/index.ts`**

```ts
export { d } from "./helpers";
export { mockUsers } from "./users";
export { mockOpportunities } from "./opportunities";
export { mockClients } from "./clients";
export { mockActivities } from "./activities";
export { mockCommissions } from "./commissions";
export { mockNotifications, mockDashboardMetrics } from "./notifications";
export { mockAuditLog } from "./audit-log";
export { mockGoals } from "./goals";
export { generateDynamicMockData } from "./dynamic-generator";
export { mockNegotiationRounds } from "./negotiations";
```

**Step 14: Delete the original monolith**
```bash
rm src/lib/mock-data.ts
```

**Step 15: Verify no type errors**
```bash
npx tsc --noEmit
```

Fix any issues. All existing consumers import from `@/lib/mock-data` which now resolves to `@/lib/mock-data/index.ts` — zero import changes needed. Consumers:
- `src/stores/opportunity-store.ts` — `import { mockOpportunities } from "@/lib/mock-data"`
- `src/stores/activity-store.ts` — `import { mockActivities } from "@/lib/mock-data"`
- `src/stores/client-store.ts` — `import { mockClients } from "@/lib/mock-data"`
- `src/stores/goal-store.ts` — `import { mockGoals } from "@/lib/mock-data"`
- `src/stores/user-store.ts` — `import { mockUsers } from "@/lib/mock-data"`
- `src/stores/notification-store.ts` — `import { mockNotifications } from "@/lib/mock-data"`
- `src/app/(auth)/pipes/page.tsx` — `import { generateDynamicMockData } from "@/lib/mock-data"`
- `src/components/drawers/lead-card-drawer.tsx` — `import { mockActivities, mockNegotiationRounds } from "@/lib/mock-data"`
- `src/components/drawers/lead-negotiation-tab.tsx` — `import { mockNegotiationRounds } from "@/lib/mock-data"`
- `src/components/shared/notifications-dropdown.tsx` — `import { mockNotifications } from "@/lib/mock-data"`

**Step 16: Commit**
```bash
git add src/lib/mock-data/ src/lib/mock-data.ts
git commit -m "refactor: split mock-data.ts into 12 focused modules with barrel export"
```

---

### Task 2: Split proactive-engine.ts (979 lines → 8 files)

**Files:**
- Create: `src/lib/proactive-engine/types.ts`
- Create: `src/lib/proactive-engine/helpers.ts`
- Create: `src/lib/proactive-engine/analyzers.ts`
- Create: `src/lib/proactive-engine/aggregators.ts`
- Create: `src/lib/proactive-engine/insights.ts`
- Create: `src/lib/proactive-engine/alerts.ts`
- Create: `src/lib/proactive-engine/formatter.ts`
- Create: `src/lib/proactive-engine/index.ts`
- Delete: `src/lib/proactive-engine.ts`

**Step 1: Create the folder**
```bash
mkdir -p src/lib/proactive-engine
```

**Step 2: Create `src/lib/proactive-engine/types.ts`**

Extract lines 17-81 of the original. Contains all interfaces:
- `ProactiveEngineInput`
- `GeneratedSuggestion`
- `PriorityItem`
- `SmartInsight`
- `QuickWinItem`
- `RiskAlert`
- `ExecutionPanelData`

Imports needed:
```ts
import type { Opportunity, Activity, Client, Goal } from "@/types";
import type { PipelineStageConfig } from "@/stores/pipeline-store";
import type { PipelineContext, ProactiveSuggestionType, ProactiveSuggestionPriority } from "@/types/intelligence";
```

Export all interfaces.

**Step 3: Create `src/lib/proactive-engine/helpers.ts`**

Extract lines 83-132 of the original. Contains 6 helper functions:
- `daysBetween(dateA, dateB): number`
- `hoursBetween(dateA, dateB): number`
- `isToday(date): boolean`
- `relativeTime(date): string`
- `getStageName(stageId, pipelines): string`
- `filterByUser<T>(items, userId, userRole): T[]`

Import needed:
```ts
import type { PipelineStageConfig } from "@/stores/pipeline-store";
```

Export all functions (they were private in the monolith but now need to be importable by sibling files within this folder).

**Step 4: Create `src/lib/proactive-engine/analyzers.ts`**

Extract lines 134-463 of the original. Contains 10 analyzer functions:
- `analyzeOverdueActivities` (line 136)
- `analyzeHotLeadsIdle` (line 165)
- `analyzeSLAApproaching` (line 202)
- `analyzeStaleDeals` (line 231)
- `analyzeGoalRisk` (line 258)
- `analyzeContractExpiring` (line 294)
- `analyzeMissingFields` (line 323)
- `analyzeCrossSell` (line 345)
- `analyzeCompetitiveLosses` (line 377)
- `analyzeTeamPerformance` (line 420)

Imports:
```ts
import type { Opportunity, Activity, Client, Goal } from "@/types";
import type { PipelineStageConfig } from "@/stores/pipeline-store";
import type { ProactiveSuggestionType, ProactiveSuggestionPriority } from "@/types/intelligence";
import { formatCurrencyBRL } from "@/lib/business-rules";
import type { GeneratedSuggestion } from "./types";
import { daysBetween, hoursBetween, isToday, relativeTime, getStageName, filterByUser } from "./helpers";
```

Export all 10 functions.

**Step 5: Create `src/lib/proactive-engine/aggregators.ts`**

Extract lines 465-548 of the original. Contains:
- `generateAllSuggestions(input): GeneratedSuggestion[]` (line 467)
- `computePipelineContext(opportunities, activities, userId, userRole): PipelineContext` (line 495)

Imports:
```ts
import type { Opportunity, Activity } from "@/types";
import type { PipelineContext } from "@/types/intelligence";
import type { ProactiveEngineInput, GeneratedSuggestion } from "./types";
import { daysBetween, filterByUser } from "./helpers";
import {
  analyzeOverdueActivities, analyzeHotLeadsIdle, analyzeSLAApproaching,
  analyzeStaleDeals, analyzeGoalRisk, analyzeContractExpiring,
  analyzeMissingFields, analyzeCrossSell, analyzeCompetitiveLosses,
  analyzeTeamPerformance,
} from "./analyzers";
```

Export both functions.

**Step 6: Create `src/lib/proactive-engine/insights.ts`**

Extract lines 550-810 of the original. Contains:
- `computeTodaysPriorities(input): PriorityItem[]` (line 552)
- `computeSmartInsights(input): SmartInsight[]` (line 649)
- `computeQuickWins(input): QuickWinItem[]` (line 746)

Imports:
```ts
import type { Opportunity, Activity } from "@/types";
import { formatCurrencyBRL } from "@/lib/business-rules";
import type { ProactiveEngineInput, PriorityItem, SmartInsight, QuickWinItem } from "./types";
import { daysBetween, isToday, filterByUser } from "./helpers";
```

Export all 3 functions.

**Step 7: Create `src/lib/proactive-engine/alerts.ts`**

Extract lines 812-917 of the original. Contains:
- `computeRiskAlerts(input): RiskAlert[]` (line 812)

Imports:
```ts
import type { Opportunity, Activity } from "@/types";
import { formatCurrencyBRL } from "@/lib/business-rules";
import type { ProactiveEngineInput, RiskAlert } from "./types";
import { daysBetween, filterByUser } from "./helpers";
```

Export `computeRiskAlerts`.

**Step 8: Create `src/lib/proactive-engine/formatter.ts`**

Extract lines 919-979 of the original. Contains:
- `generateMorningSummaryContent(input): string` (line 921)

Imports:
```ts
import { formatCurrencyBRL } from "@/lib/business-rules";
import type { ProactiveEngineInput } from "./types";
import { computeTodaysPriorities } from "./insights";
import { computeSmartInsights } from "./insights";
import { computeQuickWins } from "./insights";
import { computeRiskAlerts } from "./alerts";
```

Export `generateMorningSummaryContent`.

**Step 9: Create the barrel `src/lib/proactive-engine/index.ts`**

```ts
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
```

**Step 10: Delete the original monolith**
```bash
rm src/lib/proactive-engine.ts
```

**Step 11: Verify no type errors**
```bash
npx tsc --noEmit
```

Consumers (no import changes needed — barrel preserves the public API):
- `src/lib/intelligence-engine.ts` — `import { generateMorningSummaryContent, computeSmartInsights, computeQuickWins, computeRiskAlerts, computeTodaysPriorities } from "@/lib/proactive-engine"` and `import type { ProactiveEngineInput } from "@/lib/proactive-engine"`
- `src/hooks/use-proactive-engine.ts` — `import { generateAllSuggestions } from "@/lib/proactive-engine"` and `import type { ProactiveEngineInput } from "@/lib/proactive-engine"`
- `src/hooks/use-execution-panel-data.ts` — imports `computeTodaysPriorities`, `computeSmartInsights`, `computeQuickWins`, `computeRiskAlerts`, and types
- `src/stores/intelligence-store.ts` — `import { computePipelineContext } from "@/lib/proactive-engine"`

**Step 12: Commit**
```bash
git add src/lib/proactive-engine/ src/lib/proactive-engine.ts
git commit -m "refactor: split proactive-engine.ts into 8 focused modules with barrel export"
```

---

### Task 3: Split intelligence-engine.ts (1,235 lines → 8 files)

**Files:**
- Create: `src/lib/intelligence-engine/helpers.ts`
- Create: `src/lib/intelligence-engine/greeting.ts`
- Create: `src/lib/intelligence-engine/sales-commands.ts`
- Create: `src/lib/intelligence-engine/analysis.ts`
- Create: `src/lib/intelligence-engine/proactive-commands.ts`
- Create: `src/lib/intelligence-engine/freeform.ts`
- Create: `src/lib/intelligence-engine/router.ts`
- Create: `src/lib/intelligence-engine/index.ts`
- Delete: `src/lib/intelligence-engine.ts`

**Step 1: Create the folder**
```bash
mkdir -p src/lib/intelligence-engine
```

**Step 2: Create `src/lib/intelligence-engine/helpers.ts`**

Extract lines 35-79 of the original. Contains 5 helper functions:
- `uid(): string` — generates unique message IDs
- `now(): string` — returns ISO timestamp
- `buildContextBadge(card): ContextBadge | undefined`
- `temperatureEmoji(t): string`
- `temperatureLabel(t): string`

Imports:
```ts
import type { CardContext, ContextBadge } from "@/types/intelligence";
```

Export all 5 functions.

**Step 3: Create `src/lib/intelligence-engine/greeting.ts`**

Extract lines 81-135 of the original. Contains:
- `generateGreeting(vendor, card, isFirstOfDay): Message` (line 83, exported in original)
- `generateContextLoaded(card): Message` (line 126, exported in original)

Imports:
```ts
import type { Message, CardContext, VendorContext, SuggestedAction, SuggestedActionType } from "@/types/intelligence";
import { uid, now, buildContextBadge, temperatureEmoji, temperatureLabel } from "./helpers";
```

Export both functions.

**Step 4: Create `src/lib/intelligence-engine/sales-commands.ts`**

Extract lines 137-667 of the original. Contains 5 command handlers:
- `generateBriefing(card): Message` (line 139)
- `generateObjectionResponse(text, card): Message` (line 231)
- `generateGhostwriting(text, card): Message` (line 309)
- `generatePitch(card): Message` (line 376)
- `generateFollowup(card): Message` (line 620)

Imports:
```ts
import type { Message, CardContext, CopyableBlock, SuggestedAction, SuggestedActionType } from "@/types/intelligence";
import { formatCurrencyBRL } from "@/lib/business-rules";
import { uid, now, buildContextBadge, temperatureEmoji, temperatureLabel } from "./helpers";
```

Export all 5 functions.

**Step 5: Create `src/lib/intelligence-engine/analysis.ts`**

Extract lines 419-617 of the original. Contains 4 analysis generators:
- `generateFunnelSummary(pipeline): Message` (line 421)
- `generateCardAnalysis(card): Message` (line 467)
- `generateComparison(competitor): Message` (line 559)
- `generatePlansInfo(): Message` (line 590)

Imports:
```ts
import type { Message, CardContext, PipelineContext, CopyableBlock, SuggestedAction, SuggestedActionType } from "@/types/intelligence";
import { formatCurrencyBRL } from "@/lib/business-rules";
import { uid, now, buildContextBadge, temperatureEmoji, temperatureLabel } from "./helpers";
```

Export all 4 functions.

**Step 6: Create `src/lib/intelligence-engine/proactive-commands.ts`**

Extract lines 710-1026 of the original. Contains:
- `getEngineInput(): ProactiveEngineInput` (line 712) — calls `.getState()` on 6 Zustand stores
- `generateMorningBriefing(): Message` (line 725)
- `generateRiskReport(): Message` (line 741)
- `generateGoalProgress(): Message` (line 791)
- `generateProgressBar(pct): string` (line 849)
- `generateCoachingInsights(): Message` (line 857)
- `generateAgenda(): Message` (line 951)
- `generateHelp(): Message` (line 671 — from the "Ajuda" section; include it here since it is a slash command handler)

Imports:
```ts
import type { Message, SuggestedAction, SuggestedActionType } from "@/types/intelligence";
import type { ProactiveEngineInput } from "@/lib/proactive-engine";
import {
  generateMorningSummaryContent,
  computeSmartInsights,
  computeQuickWins,
  computeRiskAlerts,
  computeTodaysPriorities,
} from "@/lib/proactive-engine";
import { formatCurrencyBRL } from "@/lib/business-rules";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { useActivityStore } from "@/stores/activity-store";
import { useClientStore } from "@/stores/client-store";
import { useGoalStore } from "@/stores/goal-store";
import { usePipelineStore } from "@/stores/pipeline-store";
import { useAuthStore } from "@/stores/auth-store";
import { uid, now } from "./helpers";
```

Export all functions except `getEngineInput` (keep it exported so `freeform.ts` can also call it if needed, or alternatively keep it as a file-internal and have freeform import from proactive-commands).

**Step 7: Create `src/lib/intelligence-engine/freeform.ts`**

Extract lines 1027-1143 of the original. Contains:
- `generateFreeResponse(text, card): Message` (line 1029)
- `generateErrorMessage(type): Message` (line 1120, exported in original)

`generateFreeResponse` routes keyword-based queries to other generators. It needs to import:
```ts
import type { Message, CardContext, SuggestedAction, SuggestedActionType } from "@/types/intelligence";
import { uid, now, buildContextBadge } from "./helpers";
import { generatePlansInfo } from "./analysis";
import { generateMorningBriefing, generateRiskReport, generateGoalProgress, generateCoachingInsights, generateAgenda } from "./proactive-commands";
```

Export both functions.

**Step 8: Create `src/lib/intelligence-engine/router.ts`**

Extract lines 1145-1235 of the original. Contains:
- `ProcessMessageInput` interface (line 1147-1153)
- `processMessage(input): Promise<Message>` (line 1159, exported in original)

The router imports all generate* functions and dispatches based on `input.command`:

```ts
import type { Message, CardContext, VendorContext, PipelineContext } from "@/types/intelligence";
import { generateBriefing, generateObjectionResponse, generateGhostwriting, generatePitch, generateFollowup } from "./sales-commands";
import { generateFunnelSummary, generateCardAnalysis, generateComparison, generatePlansInfo } from "./analysis";
import { generateMorningBriefing, generateRiskReport, generateGoalProgress, generateCoachingInsights, generateAgenda, generateHelp } from "./proactive-commands";
import { generateFreeResponse, generateErrorMessage } from "./freeform";
```

Export `ProcessMessageInput` interface and `processMessage` function.

**Step 9: Create the barrel `src/lib/intelligence-engine/index.ts`**

```ts
// Public API — matches original exports
export { generateGreeting, generateContextLoaded } from "./greeting";
export { generateErrorMessage } from "./freeform";
export { processMessage } from "./router";
export type { ProcessMessageInput } from "./router";
```

**Step 10: Delete the original monolith**
```bash
rm src/lib/intelligence-engine.ts
```

**Step 11: Verify no type errors**
```bash
npx tsc --noEmit
```

Consumer (no import changes needed):
- `src/stores/intelligence-store.ts` — `import { processMessage, generateGreeting, generateContextLoaded, generateErrorMessage } from "@/lib/intelligence-engine"`

**Step 12: Commit**
```bash
git add src/lib/intelligence-engine/ src/lib/intelligence-engine.ts
git commit -m "refactor: split intelligence-engine.ts into 8 focused modules with barrel export"
```

---

### Task 4: Split funnel-x-ray.tsx (784 lines → 9 files)

**Files:**
- Create: `src/components/dashboard/funnel-x-ray/funnel-config.ts`
- Create: `src/components/dashboard/funnel-x-ray/funnel-utils.ts`
- Create: `src/components/dashboard/funnel-x-ray/flow-step-card.tsx`
- Create: `src/components/dashboard/funnel-x-ray/flow-connector.tsx`
- Create: `src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx`
- Create: `src/components/dashboard/funnel-x-ray/summary-mini-card.tsx`
- Create: `src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx`
- Create: `src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx`
- Create: `src/components/dashboard/funnel-x-ray/index.ts`
- Delete: `src/components/dashboard/funnel-x-ray.tsx`

**Step 1: Create the folder**
```bash
mkdir -p src/components/dashboard/funnel-x-ray
```

**Step 2: Create `src/components/dashboard/funnel-x-ray/funnel-config.ts`**

Extract lines 28-133 of the original. Contains types and constants — NO `"use client"` needed.

Types to define and export:
- `FlowStageId` (type alias)
- `FunnelXRayState` (type alias)
- `ActionState` (type alias)
- `FlowStage` (interface)
- `FlowTransition` (interface)
- `StageInsight` (interface)

Constants to export:
- `STAGE_TO_PIPELINE: Record<FlowStageId, string>`
- `FUNNEL_STAGES: FlowStage[]`
- `STAGE_INSIGHTS: Record<FlowStageId, StageInsight>`

No imports needed (pure types and data).

**Step 3: Create `src/components/dashboard/funnel-x-ray/funnel-utils.ts`**

Extract lines 135-162 of the original. Contains utility functions — NO `"use client"` needed.

```ts
import type { FlowStage, FlowTransition } from "./funnel-config";
```

Functions to export:
- `buildTransitions(stages: FlowStage[]): FlowTransition[]`
- `formatCurrencyCompact(value: number): string`
- `formatCurrencyBRL(value: number): string`

**Step 4: Create `src/components/dashboard/funnel-x-ray/flow-step-card.tsx`**

Extract the `FlowStepCard` component (lines 588-629 of the original). Needs `"use client"` at top.

```ts
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { FlowStageId, FlowStage, ActionState } from "./funnel-config";
import { STAGE_TO_PIPELINE } from "./funnel-config";
import { formatCurrencyCompact } from "./funnel-utils";
```

Props: `stage: FlowStage`, `isActive: boolean`, `isBottleneck: boolean`, `actionState: ActionState`, `onClick()`, `onAction()`.

Export `FlowStepCard`.

**Step 5: Create `src/components/dashboard/funnel-x-ray/flow-connector.tsx`**

Extract the `FlowConnector` component (lines 631-705 of the original). Needs `"use client"` at top.

```ts
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { FlowTransition } from "./funnel-config";
```

Props: `transition: FlowTransition`, `isBottleneck: boolean`.

Export `FlowConnector`.

**Step 6: Create `src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx`**

Extract the `FlowStepsConnected` component (lines 524-587 of the original). Needs `"use client"` at top.

```ts
"use client";

import { Fragment } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { FlowStageId, FlowStage, FlowTransition, ActionState } from "./funnel-config";
import { FlowStepCard } from "./flow-step-card";
import { FlowConnector } from "./flow-connector";
```

Props: `stages`, `transitions`, `bottleneck`, `activeStageId`, `actionState`, `onStageClick`, `onStageAction`.

Export `FlowStepsConnected`.

**Step 7: Create `src/components/dashboard/funnel-x-ray/summary-mini-card.tsx`**

Extract the `SummaryMiniCard` component (lines 707-733 of the original). Needs `"use client"` at top.

```ts
"use client";

import { motion } from "framer-motion";
```

Props: `icon: React.ReactNode`, `label: string`, `value: string`, `helper: string`.

Export `SummaryMiniCard`.

**Step 8: Create `src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx`**

Extract the `FunnelXRaySkeleton` component (lines 735-784 of the original). Needs `"use client"` at top.

```ts
"use client";

import { Fragment } from "react";
import { Skeleton } from "@/components/ui/skeleton";
```

Export `FunnelXRaySkeleton`.

**Step 9: Create `src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx`**

Extract the main `FunnelXRay` component (lines 164-522 of the original). Needs `"use client"` at top.

```ts
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle, ArrowUpRight, Gauge, Lightbulb, Loader2,
  Sparkles, TrendingDown,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { BentoCard } from "@/components/ui/bento-card";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";

import type { FlowStageId, FunnelXRayState, ActionState } from "./funnel-config";
import { FUNNEL_STAGES, STAGE_TO_PIPELINE, STAGE_INSIGHTS } from "./funnel-config";
import { buildTransitions, formatCurrencyBRL } from "./funnel-utils";
import { FlowStepsConnected } from "./flow-steps-connected";
import { SummaryMiniCard } from "./summary-mini-card";
import { FunnelXRaySkeleton } from "./funnel-x-ray-skeleton";
```

Export `FunnelXRay` as a named export (same as the original).

**Step 10: Create the barrel `src/components/dashboard/funnel-x-ray/index.ts`**

```ts
export { FunnelXRay } from "./funnel-x-ray";
```

**Step 11: Delete the original monolith**
```bash
rm src/components/dashboard/funnel-x-ray.tsx
```

NOTE: After deleting the file, the folder `funnel-x-ray/` takes its place in the import path. The existing consumer `src/app/(auth)/dashboard/page.tsx` uses `import { FunnelXRay } from "@/components/dashboard/funnel-x-ray"` which will now resolve to `funnel-x-ray/index.ts`. No import changes needed.

**Step 12: Verify no type errors**
```bash
npx tsc --noEmit
```

**Step 13: Commit**
```bash
git add src/components/dashboard/funnel-x-ray/ src/components/dashboard/funnel-x-ray.tsx
git commit -m "refactor: split funnel-x-ray.tsx into 9 focused modules with barrel export"
```

---

### Task 5: Split pipes/page.tsx (1,538 lines → 8 files)

**Files:**
- Create: `src/app/(auth)/pipes/lib/pipeline-config.ts`
- Create: `src/app/(auth)/pipes/lib/pipeline-validation.ts`
- Create: `src/app/(auth)/pipes/hooks/use-pipeline-board.ts`
- Create: `src/app/(auth)/pipes/hooks/use-stage-customization.ts`
- Create: `src/app/(auth)/pipes/components/deal-card-bento.tsx`
- Create: `src/app/(auth)/pipes/components/ghost-deal-card.tsx`
- Create: `src/app/(auth)/pipes/components/pipeline-skeleton.tsx`
- Modify: `src/app/(auth)/pipes/page.tsx` — reduce to ~300 lines orchestration

**Step 1: Create the folder structure**
```bash
mkdir -p src/app/\(auth\)/pipes/lib
mkdir -p src/app/\(auth\)/pipes/hooks
mkdir -p src/app/\(auth\)/pipes/components
```

**Step 2: Create `src/app/(auth)/pipes/lib/pipeline-config.ts`**

Extract lines 65-287 of the original. This file needs React imports for `temperatureConfig` which uses JSX (`<Flame />`, etc.).

```ts
import { Flame, Thermometer, Snowflake } from "lucide-react";
import type { Opportunity, PipelineStage, Temperature } from "@/types";
```

Exports:
- `FunnelDefinition` interface
- `funnels: FunnelDefinition[]` array (the comercial + indicacao pipeline definitions)
- `stageRequiredFields: Record<PipelineStage, { field: keyof Opportunity; label: string }[]>`
- `temperatureConfig: Record<Temperature, { icon: React.ReactNode; label: string; colorClass: string }>`
- `stageColorPalette` array
- `StageCustomization` interface
- `STAGE_CUSTOM_STORAGE_KEY` constant
- `loadStageCustomizations(): Record<string, StageCustomization>`
- `saveStageCustomizations(data): void`

**Step 3: Create `src/app/(auth)/pipes/lib/pipeline-validation.ts`**

Extract lines 163-263 of the original. Pure logic, NO React needed.

```ts
import type { Opportunity, PipelineStage } from "@/types";
import { PIPELINE_STAGE_ORDER } from "@/lib/business-rules";
import { stageRequiredFields } from "./pipeline-config";
```

Exports:
- `SlaStatus` type (`"ok" | "near" | "breached"`)
- `getInitials(name: string): string`
- `getSlaStatus(slaDeadline?: string): { status: SlaStatus; label: string; detailLabel: string }`
- `getSlaColors(status: SlaStatus): { dot: string; border: string; text: string }`
- `validateStageTransition(opportunity, targetStage): { missing: string[]; isRegression: boolean }`

**Step 4: Create `src/app/(auth)/pipes/hooks/use-pipeline-board.ts`**

Extract drag-and-drop + win/lose handler logic from PipesPage (approximately lines 393-401, 414-428, and the related handler functions scattered through the component). Needs `"use client"`.

```ts
"use client";

import { useState, useCallback, useRef } from "react";
import type { Opportunity, PipelineStage } from "@/types";
```

Create a custom hook `usePipelineBoard` that encapsulates:

**State:**
- `draggingCardId: string | null`
- `draggingCardStage: PipelineStage | null`
- `dragOverStage: PipelineStage | null`
- `dropIndicator: { stage: PipelineStage; index: number } | null`
- `columnError: { stage: PipelineStage; message: string } | null`
- `successFeedback: { stage: PipelineStage; cardTitle: string } | null`
- `dragCardRef: React.MutableRefObject<Opportunity | null>`

**Handlers (extract from the PipesPage body):**
- `handleDragStart(e, opp)` — sets dragging state
- `handleDragOver(e, stage, index)` — updates drag-over indicators
- `handleDragLeave(e)` — clears drag-over state
- `handleDrop(e, targetStage, slaHours)` — validates transition, moves card, shows success/error
- `handleDragEnd()` — resets all drag state
- `handleWin(oppId)` — marks opportunity as won
- `handleLose(oppId, reason, competitor, notes)` — marks opportunity as lost

The hook should accept the dependencies it needs from the page: `localOpportunities`, `setLocalOpportunities`, `validateStageTransition`, `activeFunnel`, `currentUserId`.

Return an object with all state and handlers.

**Step 5: Create `src/app/(auth)/pipes/hooks/use-stage-customization.ts`**

Extract stage customization logic. Needs `"use client"`.

```ts
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { PipelineStage } from "@/types";
import { StageCustomization, loadStageCustomizations, saveStageCustomizations } from "../lib/pipeline-config";
```

Create a custom hook `useStageCustomization` that encapsulates:

**State:**
- `stageCustomizations: Record<string, StageCustomization>` — initialized from `loadStageCustomizations()`
- `renamingStage: PipelineStage | null`
- `renameValue: string`
- `renameInputRef: React.RefObject<HTMLInputElement>`

**Effects:**
- `useEffect` that persists `stageCustomizations` to localStorage via `saveStageCustomizations`

**Handlers:**
- `startRename(stageId, currentLabel)` — starts rename mode
- `confirmRename()` — saves new label
- `cancelRename()` — resets rename state
- `setStageColor(stageId, colorId)` — updates color in customizations

Return an object with all state, ref, and handlers.

**Step 6: Create `src/app/(auth)/pipes/components/deal-card-bento.tsx`**

Extract the `DealCardBento` component (lines 1312-1506 of the original). Needs `"use client"`.

```ts
"use client";

import { MoreHorizontal, Clock, AlertTriangle, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import type { Opportunity, PipelineStage } from "@/types";
import { formatCurrencyBRL } from "@/lib/business-rules";
import { temperatureConfig } from "../lib/pipeline-config";
import { getInitials, getSlaStatus, getSlaColors } from "../lib/pipeline-validation";
```

Props: `opportunity`, `onDragStart`, `currentUserId`, `stageCustomizations`, `onOpen`, `onWin`, `onLose`, `successFeedback`.

Export `DealCardBento`.

**Step 7: Create `src/app/(auth)/pipes/components/ghost-deal-card.tsx`**

Extract the `GhostDealCard` component (lines 1512-1538 of the original). Needs `"use client"`.

```ts
"use client";

import { Lock } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { Opportunity } from "@/types";
```

Props: `opportunity: Opportunity`.

Export `GhostDealCard`.

**Step 8: Create `src/app/(auth)/pipes/components/pipeline-skeleton.tsx`**

Extract the `PipelineSkeleton` component (lines 315-376 of the original). Needs `"use client"`.

```ts
"use client";

import { Skeleton } from "@/components/ui/skeleton";
```

Props: `stageCount: number`.

Export `PipelineSkeleton`.

**Step 9: Rewrite `src/app/(auth)/pipes/page.tsx` as orchestration**

The page.tsx should now be ~300 lines, containing:
- Imports from the new modules
- The `PipesPage` component that:
  - Calls `usePipelineBoard()` and `useStageCustomization()` hooks
  - Manages top-level state (selectedFunnel, localOpportunities, isLoading, showOnlyMine, searchQuery, etc.)
  - Renders the pipeline board layout, column headers, and maps over stages
  - Uses `<DealCardBento>`, `<GhostDealCard>`, `<PipelineSkeleton>` components
- `export default PipesPage`

Update the imports at the top of page.tsx:
```ts
"use client";

// React
import { useState, useCallback, useRef, useMemo, useEffect } from "react";
// External
import { Plus, Search, Filter, ArrowDownToLine, X, Palette, Check, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
// UI
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { TooltipProvider } from "@/components/ui/tooltip";
// ... other UI imports
// Stores
import { useUIStore } from "@/stores/ui-store";
import { useAuthStore } from "@/stores/auth-store";
// Business logic
import { calculateSlaDeadline, calculateTemperature, formatCurrencyBRL, PIPELINE_STAGE_ORDER } from "@/lib/business-rules";
import { generateDynamicMockData } from "@/lib/mock-data";
import { screenContainer, sectionEnter, listItemReveal } from "@/lib/motion";
// Local modules
import { funnels, stageColorPalette, temperatureConfig } from "./lib/pipeline-config";
import { validateStageTransition } from "./lib/pipeline-validation";
import { usePipelineBoard } from "./hooks/use-pipeline-board";
import { useStageCustomization } from "./hooks/use-stage-customization";
import { DealCardBento } from "./components/deal-card-bento";
import { GhostDealCard } from "./components/ghost-deal-card";
import { PipelineSkeleton } from "./components/pipeline-skeleton";
// External components
import { PipelineManagerDrawer } from "@/components/pipeline/pipeline-manager-drawer";
import { PipelineSwitcher } from "@/components/pipeline/pipeline-switcher";
```

**Step 10: Verify no type errors**
```bash
npx tsc --noEmit
```

**Step 11: Commit**
```bash
git add src/app/\(auth\)/pipes/
git commit -m "refactor: split pipes/page.tsx into 8 focused modules with custom hooks"
```

---

## Phase 2: Error Boundaries

---

### Task 6: Create and apply error boundaries

**Files:**
- Create: `src/components/shared/error-boundary.tsx`
- Create: `src/components/shared/error-fallback.tsx`
- Modify: `src/app/(auth)/layout.tsx`

**Step 1: Create `src/components/shared/error-boundary.tsx`**

Create a React class component (error boundaries require class components in React 19):

```tsx
"use client";

import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  /** Key used to identify this boundary in logs */
  name?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(
      `[ErrorBoundary${this.props.name ? `: ${this.props.name}` : ""}]`,
      error,
      errorInfo
    );
    this.props.onError?.(error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback imported lazily to avoid circular deps
      const ErrorFallback =
        require("./error-fallback").ErrorFallback;
      return (
        <ErrorFallback
          error={this.state.error}
          onRetry={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}
```

**Step 2: Create `src/components/shared/error-fallback.tsx`**

```tsx
"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorFallbackProps {
  error?: Error | null;
  onRetry?: () => void;
}

export function ErrorFallback({ error, onRetry }: ErrorFallbackProps) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 rounded-xl border border-zinc-200 bg-white p-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
        <AlertTriangle className="h-6 w-6 text-red-500" />
      </div>
      <div className="space-y-1">
        <h3 className="font-heading text-sm font-semibold text-zinc-900">
          Algo deu errado
        </h3>
        <p className="max-w-sm font-body text-xs text-zinc-500">
          {error?.message || "Ocorreu um erro inesperado. Tente novamente."}
        </p>
      </div>
      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="gap-1.5"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Tentar novamente
        </Button>
      )}
    </div>
  );
}
```

**Step 3: Apply ErrorBoundary to the auth layout**

Modify `src/app/(auth)/layout.tsx`:

```tsx
import { AppShell } from "@/components/layout/app-shell";
import { GlobalDrawers } from "@/components/shared/global-drawers";
import { GlobalSearch } from "@/components/shared/global-search";
import { MobileBottomNav } from "@/components/shared/mobile-bottom-nav";
import { IntelligenceProvider } from "@/components/intelligence/intelligence-provider";
import { RouteTransition } from "@/components/layout/route-transition";
import { ErrorBoundary } from "@/components/shared/error-boundary";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary name="auth-layout">
      <AppShell>
        <RouteTransition>
          <ErrorBoundary name="page-content">{children}</ErrorBoundary>
        </RouteTransition>
        <GlobalDrawers />
        <GlobalSearch />
        <MobileBottomNav />
        <ErrorBoundary name="intelligence-panel">
          <IntelligenceProvider />
        </ErrorBoundary>
      </AppShell>
    </ErrorBoundary>
  );
}
```

**Step 4: Verify no type errors**
```bash
npx tsc --noEmit
```

**Step 5: Commit**
```bash
git add src/components/shared/error-boundary.tsx src/components/shared/error-fallback.tsx src/app/\(auth\)/layout.tsx
git commit -m "feat: add ErrorBoundary components and apply at auth layout level"
```

---

## Phase 3: Tests

---

### Task 7: auth-store tests

**Files:**
- Create: `src/stores/__tests__/auth-store.test.ts`

**Step 1: Read `src/stores/auth-store.ts` to understand the store API**

The store has:
- State: `user`, `token`, `permissions`, `isAuthenticated`, `isLoading`
- Actions: `setUser(user, token)`, `logout()`, `setLoading(loading)`
- Permission matrix: 5 roles (master, admin, comercial, cs, leitura) with 12 boolean permissions

**Step 2: Write `src/stores/__tests__/auth-store.test.ts`**

```ts
import { describe, it, expect, beforeEach } from "vitest";
import { useAuthStore } from "../auth-store";
import type { User } from "../auth-store";

// Reset store between tests
beforeEach(() => {
  useAuthStore.setState({
    user: null,
    token: null,
    permissions: null,
    isAuthenticated: false,
    isLoading: true,
  });
});

function makeUser(overrides: Partial<User> = {}): User {
  return {
    id: "user-1",
    name: "Test User",
    email: "test@flow.com.br",
    role: "comercial",
    unitId: "unit-1",
    unitName: "Matriz",
    isActive: true,
    ...overrides,
  };
}

describe("auth-store", () => {
  describe("setUser", () => {
    it("should set user, token, and mark as authenticated", () => { ... });
    it("should derive permissions from role", () => { ... });
    it("should set isLoading to false", () => { ... });
  });

  describe("logout", () => {
    it("should clear user, token, permissions and mark as unauthenticated", () => { ... });
  });

  describe("role-based permissions", () => {
    it("master should have all permissions", () => { ... });
    it("admin should have all except canViewAllUnits", () => { ... });
    it("comercial should only create/edit opportunities and view finance", () => { ... });
    it("cs should only edit opportunities", () => { ... });
    it("leitura should have no permissions", () => { ... });
  });

  describe("setLoading", () => {
    it("should update isLoading state", () => { ... });
  });
});
```

Test details: for each role, call `setUser` with a user of that role and assert that `permissions` matches the expected permission set from `rolePermissions`. For logout, first set a user, then call logout and verify everything is null/false.

NOTE: The store calls `document.cookie` in `setUser` and `logout`. In the jsdom test environment, this should work since jsdom provides a `document` object. If it errors, mock `document.cookie` with `Object.defineProperty`.

**Step 3: Run tests**
```bash
npx vitest run src/stores/__tests__/auth-store.test.ts
```

**Step 4: Commit**
```bash
git add src/stores/__tests__/auth-store.test.ts
git commit -m "test: add auth-store tests for role-based permissions"
```

---

### Task 8: activity-store tests

**Files:**
- Create: `src/stores/__tests__/activity-store.test.ts`

**Step 1: Read `src/stores/activity-store.ts` to understand the store API**

The store has:
- State: `activities` (initialized from mockActivities), `isLoading`
- CRUD: `addActivity(data)`, `updateActivity(id, data)`, `deleteActivity(id)`
- Status: `completeActivity(id, notes?)`, `cancelActivity(id)`, `postponeActivity(id, newDueDate, newDueTime?)`
- Computed: `getById(id)`, `getByOpportunity(id)`, `getByClient(id)`, `getPending()`, `getOverdue()`

**Step 2: Write `src/stores/__tests__/activity-store.test.ts`**

```ts
import { describe, it, expect, beforeEach } from "vitest";
import { useActivityStore } from "../activity-store";
import type { Activity } from "@/types";

beforeEach(() => {
  // Reset to a known small set instead of the full mock data
  useActivityStore.setState({
    activities: [
      {
        id: "test-act-1",
        title: "Test Call",
        type: "call",
        status: "pending",
        dueDate: "2026-02-20",
        responsibleId: "user-1",
        responsibleName: "Test User",
        createdAt: "2026-02-01T10:00:00Z",
        opportunityId: "opp-1",
      },
      {
        id: "test-act-2",
        title: "Test Meeting",
        type: "meeting",
        status: "overdue",
        dueDate: "2026-01-15",
        responsibleId: "user-1",
        responsibleName: "Test User",
        createdAt: "2026-01-10T10:00:00Z",
        clientId: "client-1",
      },
    ] as Activity[],
    isLoading: false,
  });
});

describe("activity-store", () => {
  describe("addActivity", () => {
    it("should add a new activity with generated id and createdAt", () => { ... });
    it("should return the newly created activity", () => { ... });
  });

  describe("updateActivity", () => {
    it("should update specific fields of an existing activity", () => { ... });
    it("should not affect other activities", () => { ... });
  });

  describe("deleteActivity", () => {
    it("should remove the activity from the list", () => { ... });
  });

  describe("completeActivity", () => {
    it("should set status to completed and add completedAt", () => { ... });
    it("should append notes when provided", () => { ... });
  });

  describe("cancelActivity", () => {
    it("should set status to cancelled", () => { ... });
  });

  describe("postponeActivity", () => {
    it("should update dueDate and optionally dueTime", () => { ... });
    it("should change overdue status back to pending", () => { ... });
  });

  describe("computed getters", () => {
    it("getById should return the correct activity", () => { ... });
    it("getByOpportunity should filter by opportunityId", () => { ... });
    it("getByClient should filter by clientId", () => { ... });
    it("getPending should return only pending activities", () => { ... });
    it("getOverdue should return only overdue activities", () => { ... });
  });
});
```

**Step 3: Run tests**
```bash
npx vitest run src/stores/__tests__/activity-store.test.ts
```

**Step 4: Commit**
```bash
git add src/stores/__tests__/activity-store.test.ts
git commit -m "test: add activity-store tests for CRUD, status transitions, and computed getters"
```

---

### Task 9: opportunity-store tests

**Files:**
- Create: `src/stores/__tests__/opportunity-store.test.ts`

**Step 1: Read `src/stores/opportunity-store.ts` to understand the store API**

The store has:
- State: `opportunities` (initialized from mockOpportunities), `isLoading`
- CRUD: `addOpportunity(data)`, `updateOpportunity(id, data)`, `deleteOpportunity(id)`
- Stage: `moveToStage(id, stage, slaHours?)`
- Status: `winOpportunity(id)`, `loseOpportunity(id, reason, competitor?, notes?)`
- Computed: `getByStage(stage)`, `getOpen()`, `getById(id)`

**Step 2: Write `src/stores/__tests__/opportunity-store.test.ts`**

```ts
import { describe, it, expect, beforeEach } from "vitest";
import { useOpportunityStore } from "../opportunity-store";
import type { Opportunity } from "@/types";

beforeEach(() => {
  useOpportunityStore.setState({
    opportunities: [
      {
        id: "test-opp-1",
        title: "Test Opportunity",
        clientName: "Test Client",
        clientId: "client-1",
        value: 50000,
        monthlyValue: 5000,
        stage: "lead-in",
        temperature: "hot",
        responsibleId: "user-1",
        responsibleName: "Test User",
        tags: ["food"],
        createdAt: "2026-02-01",
        updatedAt: "2026-02-01",
        status: "open",
      },
      {
        id: "test-opp-2",
        title: "Another Opportunity",
        clientName: "Another Client",
        clientId: "client-2",
        value: 30000,
        monthlyValue: 2500,
        stage: "proposta-enviada",
        temperature: "warm",
        responsibleId: "user-2",
        responsibleName: "User Two",
        tags: [],
        createdAt: "2026-01-15",
        updatedAt: "2026-01-20",
        status: "open",
      },
    ] as Opportunity[],
    isLoading: false,
  });
});

describe("opportunity-store", () => {
  describe("addOpportunity", () => {
    it("should add with generated id, timestamps, and status open", () => { ... });
  });

  describe("updateOpportunity", () => {
    it("should merge partial data and update updatedAt", () => { ... });
  });

  describe("deleteOpportunity", () => {
    it("should remove the opportunity", () => { ... });
  });

  describe("moveToStage", () => {
    it("should update the stage and updatedAt", () => { ... });
    it("should set slaDeadline when slaHours provided", () => { ... });
    it("should keep existing slaDeadline when slaHours not provided", () => { ... });
  });

  describe("winOpportunity", () => {
    it("should set status to won and update updatedAt", () => { ... });
  });

  describe("loseOpportunity", () => {
    it("should set status to lost with reason", () => { ... });
    it("should store competitor and notes when provided", () => { ... });
  });

  describe("computed getters", () => {
    it("getByStage should return open opportunities in that stage", () => { ... });
    it("getOpen should return all open opportunities", () => { ... });
    it("getById should return the correct opportunity", () => { ... });
  });
});
```

**Step 3: Run tests**
```bash
npx vitest run src/stores/__tests__/opportunity-store.test.ts
```

**Step 4: Commit**
```bash
git add src/stores/__tests__/opportunity-store.test.ts
git commit -m "test: add opportunity-store tests for CRUD, stage transitions, and status changes"
```

---

### Task 10: pipeline-validation tests

**Files:**
- Create: `src/lib/__tests__/pipeline-validation.test.ts`

NOTE: This test file targets the pipeline-validation module extracted in Task 5. Run this task AFTER Task 5 is complete.

**Step 1: Read `src/app/(auth)/pipes/lib/pipeline-validation.ts` to understand the module**

Functions to test:
- `getInitials(name)` — returns uppercase initials (max 2 characters)
- `getSlaStatus(slaDeadline?)` — returns status object based on deadline proximity
- `getSlaColors(status)` — returns CSS class names for each status
- `validateStageTransition(opportunity, targetStage)` — checks required fields and detects regression

**Step 2: Write `src/lib/__tests__/pipeline-validation.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import {
  getInitials,
  getSlaStatus,
  getSlaColors,
  validateStageTransition,
} from "@/app/(auth)/pipes/lib/pipeline-validation";
import type { Opportunity } from "@/types";

describe("pipeline-validation", () => {
  describe("getInitials", () => {
    it("should return first two initials uppercase", () => {
      expect(getInitials("Rafael Mendes")).toBe("RM");
    });
    it("should handle single name", () => {
      expect(getInitials("Rafael")).toBe("R");
    });
    it("should handle three+ names (only first two)", () => {
      expect(getInitials("Rafael Mendes Silva")).toBe("RM");
    });
  });

  describe("getSlaStatus", () => {
    it("should return ok with no slaDeadline", () => {
      const result = getSlaStatus(undefined);
      expect(result.status).toBe("ok");
    });
    it("should return breached for past deadline", () => {
      const past = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(); // 2h ago
      const result = getSlaStatus(past);
      expect(result.status).toBe("breached");
    });
    it("should return near for deadline within 12 hours", () => {
      const soon = new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(); // 6h from now
      const result = getSlaStatus(soon);
      expect(result.status).toBe("near");
    });
    it("should return ok for deadline far in future", () => {
      const far = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(); // 48h from now
      const result = getSlaStatus(far);
      expect(result.status).toBe("ok");
    });
  });

  describe("getSlaColors", () => {
    it("should return success colors for ok", () => {
      expect(getSlaColors("ok").dot).toBe("bg-status-success");
    });
    it("should return warning colors for near", () => {
      expect(getSlaColors("near").dot).toBe("bg-status-warning");
    });
    it("should return danger colors for breached", () => {
      expect(getSlaColors("breached").dot).toBe("bg-status-danger");
    });
  });

  describe("validateStageTransition", () => {
    const baseOpp: Opportunity = {
      id: "opp-1",
      title: "Test",
      clientName: "Client",
      clientId: "c-1",
      value: 50000,
      monthlyValue: 5000,
      stage: "lead-in",
      temperature: "hot",
      responsibleId: "u-1",
      responsibleName: "User",
      tags: [],
      createdAt: "2026-01-01",
      updatedAt: "2026-01-01",
      status: "open",
    } as Opportunity;

    it("should detect regression when moving backwards", () => {
      const opp = { ...baseOpp, stage: "proposta-enviada" as const };
      const result = validateStageTransition(opp, "lead-in");
      expect(result.isRegression).toBe(true);
    });

    it("should detect missing required fields for advanced stages", () => {
      const opp = { ...baseOpp, expectedCloseDate: undefined };
      const result = validateStageTransition(opp, "reuniao-agendada");
      expect(result.missing).toContain("Data prevista de fechamento");
    });

    it("should pass when all required fields are present", () => {
      const opp = {
        ...baseOpp,
        expectedCloseDate: "2026-03-01",
      };
      const result = validateStageTransition(opp, "reuniao-agendada");
      expect(result.missing).toHaveLength(0);
      expect(result.isRegression).toBe(false);
    });
  });
});
```

**Step 3: Run tests**
```bash
npx vitest run src/lib/__tests__/pipeline-validation.test.ts
```

**Step 4: Commit**
```bash
git add src/lib/__tests__/pipeline-validation.test.ts
git commit -m "test: add pipeline-validation tests for SLA status, initials, and stage transitions"
```

---

## Phase 4: Loading States

---

### Task 11: Add missing loading states

**Files:**
- Modify: Pages that are missing skeleton loading (check `src/app/(auth)/dashboard/page.tsx`, `src/app/(auth)/activities/page.tsx`, and any other auth pages)

**Step 1: Identify pages missing skeleton loading**

Read each page under `src/app/(auth)/` and check for loading state patterns. The pipes page already has `PipelineSkeleton`. Look at dashboard and activities pages.

**Step 2: Add loading skeleton to pages that need it**

For each page that lacks a loading skeleton:

1. Add `const [isLoading, setIsLoading] = useState(true);` state
2. Add `useEffect(() => { const t = setTimeout(() => setIsLoading(false), 800); return () => clearTimeout(t); }, []);`
3. Add early return with skeleton when `isLoading` is true
4. Use the existing `Skeleton` component from `@/components/ui/skeleton` to build a skeleton that matches the page layout

Pattern to follow (Bento SkeletonBlock style):
```tsx
if (isLoading) {
  return (
    <div className="space-y-4 p-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-9 w-32 rounded-full" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
```

**Step 3: Verify no type errors**
```bash
npx tsc --noEmit
```

**Step 4: Commit**
```bash
git add src/app/\(auth\)/
git commit -m "feat: add skeleton loading states to pages missing them"
```

---

## Phase 5: CLAUDE.md

---

### Task 12: Create CLAUDE.md

**Files:**
- Create: `CLAUDE.md` (project root)

**Step 1: Create `CLAUDE.md`**

Write the file at the project root with the following content covering stack, architecture, conventions, commands, and design system:

```markdown
# CLAUDE.md — Flow CRM

## Stack
- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, TypeScript 5.9
- **State:** Zustand 5 (no providers needed)
- **Styling:** Tailwind CSS v4, shadcn/ui components
- **Animation:** Framer Motion 12
- **Testing:** Vitest 4, jsdom environment

## Architecture

### Directory layout
```
src/
  app/(auth)/          # Authenticated pages (pipes, dashboard, activities, ...)
  components/          # Shared + feature components
    ui/                # shadcn/ui primitives
    shared/            # Error boundaries, global drawers, search
    dashboard/         # Dashboard widgets (funnel-x-ray, etc.)
    intelligence/      # AI chat panel
    pipeline/          # Pipeline management components
  stores/              # Zustand stores (auth, opportunity, activity, client, goal, pipeline, ui, ...)
  lib/                 # Business logic, mock data, engines
    mock-data/         # Split mock data modules
    proactive-engine/  # Proactive intelligence engine
    intelligence-engine/ # AI response engine
    business-rules.ts  # Core business calculations
  hooks/               # Custom React hooks
  types/               # TypeScript type definitions
```

### Path alias
`@/` maps to `src/` (configured in tsconfig.json and vitest.config.ts).

### State management
All stores use Zustand 5 with `create()`. Access state outside React with `useStore.getState()`. Stores are in `src/stores/`.

### Mock data
Currently using mock data (no backend). All mock data is in `src/lib/mock-data/` as a barrel-exported module.

### Barrel export pattern
Large files are split into folders with an `index.ts` that re-exports the public API. Consumers import from the folder path (e.g., `@/lib/mock-data`), which resolves to `index.ts`.

## Conventions

### File naming
- Components: `kebab-case.tsx`
- Hooks: `use-kebab-case.ts`
- Stores: `kebab-case-store.ts`
- Tests: `__tests__/kebab-case.test.ts`
- Config/utils: `kebab-case.ts`

### Component patterns
- `"use client"` directive required for any file using React hooks, browser APIs, or event handlers
- Server components are the default in Next.js App Router
- Error boundaries use class components (`src/components/shared/error-boundary.tsx`)

### Styling
- Tailwind v4 utility classes, NO custom CSS files
- Design tokens via CSS variables: `--radius-bento-card`, `--radius-bento-inner`
- Font classes: `font-heading` (display), `font-body` (text)
- Color tokens: `text-brand`, `bg-brand`, `text-status-success`, `text-status-warning`, `text-status-danger`, `text-status-info`

### Language
- UI text is in Brazilian Portuguese (pt-BR)
- Code (variables, functions, comments) is in English
- Currency: BRL, formatted with `formatCurrencyBRL()` from `@/lib/business-rules`

## Commands

```bash
# Development
npm run dev              # Start dev server

# Type checking
npx tsc --noEmit         # Check types without emitting

# Testing
npx vitest run           # Run all tests once
npx vitest run <path>    # Run specific test file
npx vitest               # Watch mode

# Build
npm run build            # Production build
```

## Design system reference

### Bento card pattern
Use `<BentoCard>` from `@/components/ui/bento-card` for dashboard widgets. Skeleton loading uses `<Skeleton>` from `@/components/ui/skeleton`.

### Motion
Import animation variants from `@/lib/motion`: `screenContainer`, `sectionEnter`, `listItemReveal`.

### Icons
Use `lucide-react` for all icons. Import individual icons, not the full library.
```

**Step 2: Commit**
```bash
git add CLAUDE.md
git commit -m "docs: create CLAUDE.md with project conventions and architecture guide"
```

---

## Execution Order Summary

| Task | Phase | Description | Depends On |
|------|-------|-------------|------------|
| 1 | File Splitting | Split mock-data.ts → 12 files | None |
| 2 | File Splitting | Split proactive-engine.ts → 8 files | None |
| 3 | File Splitting | Split intelligence-engine.ts → 8 files | Task 2 (proactive-engine barrel must exist) |
| 4 | File Splitting | Split funnel-x-ray.tsx → 9 files | None |
| 5 | File Splitting | Split pipes/page.tsx → 8 files | None |
| 6 | Error Boundaries | Create + apply error boundaries | None |
| 7 | Tests | auth-store tests | None |
| 8 | Tests | activity-store tests | Task 1 (mock-data barrel) |
| 9 | Tests | opportunity-store tests | Task 1 (mock-data barrel) |
| 10 | Tests | pipeline-validation tests | Task 5 (validation module extracted) |
| 11 | Loading States | Add skeletons to pages missing them | None |
| 12 | CLAUDE.md | Create project guide | None |

**Total commits:** 12 (one per task)
**Estimated time:** 3-5 hours
