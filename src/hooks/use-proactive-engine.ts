"use client";

// ============================================================================
// Hook que executa o motor proativo periodicamente e alimenta o store
// ============================================================================

import { useEffect, useRef } from "react";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { useActivityStore } from "@/stores/activity-store";
import { useClientStore } from "@/stores/client-store";
import { useGoalStore } from "@/stores/goal-store";
import { usePipelineStore } from "@/stores/pipeline-store";
import { useAuthStore } from "@/stores/auth-store";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import { generateAllSuggestions } from "@/lib/proactive-engine";
import type { ProactiveEngineInput } from "@/lib/proactive-engine";

export function useProactiveEngine() {
  const hasRun = useRef(false);

  useEffect(() => {
    function getIntervalMs(): number {
      const freq = useIntelligenceStore.getState().proactiveFrequency;
      return freq * 60 * 1000;
    }

    function gatherInput(): ProactiveEngineInput | null {
      const user = useAuthStore.getState().user;
      if (!user) return null;

      return {
        opportunities: useOpportunityStore.getState().opportunities,
        activities: useActivityStore.getState().activities,
        clients: useClientStore.getState().clients,
        goals: useGoalStore.getState().goals,
        pipelines: usePipelineStore.getState().pipelines,
        userId: user.id,
        userRole: user.role,
      };
    }

    function runEngine() {
      try {
        const { proactiveNotifications } = useIntelligenceStore.getState();
        if (!proactiveNotifications) return;

        const input = gatherInput();
        if (!input) return;

        const suggestions = generateAllSuggestions(input);
        const store = useIntelligenceStore.getState();
        const existing = store.proactiveSuggestions;

        // Dedup: don't add suggestions that match existing type + cardId/cardName
        for (const suggestion of suggestions) {
          const isDuplicate = existing.some(
            (e) =>
              e.type === suggestion.type &&
              !e.dismissed &&
              ((suggestion.cardId && e.cardId === suggestion.cardId) ||
                (suggestion.cardName && e.cardName === suggestion.cardName) ||
                (!suggestion.cardId && !suggestion.cardName && e.type === suggestion.type))
          );

          if (!isDuplicate) {
            store.addProactiveSuggestion(suggestion);
          }
        }
      } catch (err) {
        console.error("[ProactiveEngine] Erro ao rodar motor:", err);
      }
    }

    // Run immediately on first mount
    if (!hasRun.current) {
      // Small delay to let stores hydrate
      const timeout = setTimeout(() => {
        runEngine();
        hasRun.current = true;
      }, 1500);

      const interval = setInterval(runEngine, getIntervalMs());

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }

    const interval = setInterval(runEngine, getIntervalMs());
    return () => clearInterval(interval);
  }, []);
}
