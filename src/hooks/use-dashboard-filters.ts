"use client";

// ============================================================================
// Hook centralizado de filtros do Dashboard
// Todas as sections usam este hook para receber dados filtrados por
// período (today/7d/30d/quarter) e contexto (me/team).
// ============================================================================

import { useMemo } from "react";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { useActivityStore } from "@/stores/activity-store";
import { useAuthStore } from "@/stores/auth-store";
import {
  useDashboardStore,
  getPeriodDateRange,
  type Period,
  type Context,
} from "@/stores/dashboard-store";
import { useNow } from "@/hooks/use-now";
import { getEffectiveActivityStatus } from "@/lib/business-rules";
import { filterByUser } from "@/lib/proactive-engine/helpers";
import type { Opportunity, Activity } from "@/types";

export interface DashboardFilters {
  /** Opportunities filtered by period + context */
  filteredOpportunities: Opportunity[];
  /** Activities with effective status, filtered by period + context */
  filteredActivities: (Activity & { effectiveStatus: Activity["status"] })[];
  /** All open opportunities (ignores period, respects context) */
  openOpportunities: Opportunity[];
  /** Reactive date that ticks every 60s */
  now: Date;
  period: Period;
  context: Context;
  userId: string;
  userRole: string;
}

export function useDashboardFilters(): DashboardFilters {
  const opportunities = useOpportunityStore((s) => s.opportunities);
  const activities = useActivityStore((s) => s.activities);
  const user = useAuthStore((s) => s.user);
  const period = useDashboardStore((s) => s.period);
  const context = useDashboardStore((s) => s.context);
  const now = useNow();

  const userId = user?.id ?? "";
  const userRole = user?.role ?? "comercial";

  return useMemo(() => {
    const { start, end } = getPeriodDateRange(period, now);

    // ── Context filter ──────────────────────────────────────────────
    const ctxOpps =
      context === "me"
        ? filterByUser(opportunities, userId, userRole)
        : opportunities;

    const ctxActs =
      context === "me"
        ? filterByUser(activities, userId, userRole)
        : activities;

    // ── Open opportunities (cumulative, no period filter) ───────────
    const openOpportunities = ctxOpps.filter((o) => o.status === "open");

    // ── Period filter for opportunities ─────────────────────────────
    // Pipeline Total & SLA are cumulative; won/lost are period-scoped
    const filteredOpportunities = ctxOpps.filter((o) => {
      // Open opportunities always included (they are live)
      if (o.status === "open") return true;
      // Won/lost filtered by updatedAt within period
      const ts = new Date(o.updatedAt);
      return ts >= start && ts <= end;
    });

    // ── Period filter for activities + effective status ──────────────
    const filteredActivities = ctxActs
      .map((a) => ({
        ...a,
        effectiveStatus: getEffectiveActivityStatus(a, now),
      }))
      .filter((a) => {
        // Pending/overdue always included
        if (a.effectiveStatus === "pending" || a.effectiveStatus === "overdue")
          return true;
        // Completed/cancelled filtered by dueDate within period
        const ts = new Date(a.dueDate);
        return ts >= start && ts <= end;
      });

    return {
      filteredOpportunities,
      filteredActivities,
      openOpportunities,
      now,
      period,
      context,
      userId,
      userRole,
    };
  }, [opportunities, activities, period, context, now, userId, userRole]);
}
