# Flow Audit Improvements Design

**Date:** 2026-02-15
**Scope:** Frontend only (mock data, no backend)

## 1. Break Large Files

### Approach
Barrel exports (index.ts) pattern. Each large file becomes a folder with smaller modules and an index.ts re-exporting everything. Zero breaking changes — existing imports continue working.

### 1.1 pipes/page.tsx (1538 → ~7 files)
- `page.tsx` — orchestration only (~300 lines)
- `components/deal-card-bento.tsx` — deal card component
- `components/ghost-deal-card.tsx` — ghost card for other users
- `components/pipeline-skeleton.tsx` — loading skeleton
- `hooks/use-pipeline-board.ts` — drag-drop, win/lose handlers
- `hooks/use-stage-customization.ts` — localStorage stage colors
- `lib/pipeline-config.ts` — funnels, temperature, colors constants
- `lib/pipeline-validation.ts` — SLA, stage validation

### 1.2 intelligence-engine.ts (1235 → ~7 files)
- `index.ts` — re-exports
- `helpers.ts` — uid, now, buildContextBadge, emojis
- `greeting.ts` — generateGreeting, generateContextLoaded
- `sales-commands.ts` — briefing, objection, ghostwriting, pitch, followup
- `analysis.ts` — funnel, cardAnalysis, comparison, plans
- `proactive-commands.ts` — morning, risks, goals, coaching, agenda
- `freeform.ts` — generateFreeResponse, generateErrorMessage
- `router.ts` — processMessage entry point

### 1.3 proactive-engine.ts (979 → ~7 files)
- `index.ts` — re-exports
- `helpers.ts` — daysBetween, isToday, relativeTime, etc.
- `analyzers.ts` — 10 analyzer functions
- `aggregators.ts` — generateAllSuggestions
- `insights.ts` — computeSmartInsights, computeQuickWins, computeTodaysPriorities
- `alerts.ts` — computeRiskAlerts, computePipelineContext
- `formatter.ts` — generateMorningSummaryContent

### 1.4 funnel-x-ray.tsx (784 → ~8 files)
- `index.ts` — re-export default
- `funnel-x-ray.tsx` — main component
- `flow-steps-connected.tsx`
- `flow-step-card.tsx`
- `flow-connector.tsx`
- `summary-mini-card.tsx`
- `funnel-x-ray-skeleton.tsx`
- `funnel-config.ts` — stages, insights, mappings
- `funnel-utils.ts` — buildTransitions, formatters

### 1.5 mock-data.ts (2382 → ~11 files)
- `index.ts` — re-exports
- `users.ts`, `opportunities.ts`, `clients.ts`, `activities.ts`
- `commissions.ts`, `goals.ts`, `notifications.ts`
- `metrics.ts`, `audit-log.ts`, `dynamic-generator.ts`, `negotiations.ts`

## 2. Error Boundaries

- Generic `ErrorBoundary` class component at `src/components/shared/error-boundary.tsx`
- `ErrorFallback` UI component at `src/components/shared/error-fallback.tsx`
- Apply at auth layout level, page level (pipes, activities, dashboard), widget level (funnel-x-ray, intelligence)

## 3. Tests

Focus on Zustand stores and business logic:
- `src/stores/__tests__/auth-store.test.ts` — permissions by role
- `src/stores/__tests__/activity-store.test.ts` — CRUD, filters, status
- `src/stores/__tests__/opportunity-store.test.ts` — stage transitions
- `src/stores/__tests__/pipeline-store.test.ts` — reordering, config
- Expand existing `business-rules.test.ts`
- `src/lib/__tests__/pipeline-validation.test.ts` — new extracted module

## 4. Consistent Loading/Error States

Pages missing skeleton states get them using existing Bento SkeletonBlock pattern. Simulated 800ms loading delay.

## 5. CLAUDE.md

Project-level AI assistant instructions covering stack, architecture, conventions, commands, design system reference.
