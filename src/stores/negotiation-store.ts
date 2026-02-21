import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { NegotiationRound } from "@/types";
import { mockNegotiationRounds } from "@/lib/mock-data";

interface NegotiationState {
  rounds: NegotiationRound[];
  isLoading: boolean;

  // Queries
  getByOpportunity: (opportunityId: string) => NegotiationRound[];
  getById: (id: string) => NegotiationRound | undefined;
}

export const useNegotiationStore = create<NegotiationState>()(
  devtools(
    (_set, get) => ({
      rounds: mockNegotiationRounds,
      isLoading: false,

      getByOpportunity: (opportunityId) =>
        get().rounds.filter((r) => r.opportunityId === opportunityId),
      getById: (id) => get().rounds.find((r) => r.id === id),
    }),
    { name: "negotiation-store" }
  )
);
