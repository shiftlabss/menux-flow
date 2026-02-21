import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Visit } from "@/types";
import { mockVisits } from "@/lib/mock-data";

interface VisitState {
  visits: Visit[];
  isLoading: boolean;

  // Queries
  getByOpportunity: (opportunityId: string) => Visit[];
  getByClient: (clientId: string) => Visit[];
  getById: (id: string) => Visit | undefined;
}

export const useVisitStore = create<VisitState>()(
  devtools(
    (_set, get) => ({
      visits: mockVisits,
      isLoading: false,

      getByOpportunity: (opportunityId) =>
        get().visits.filter((v) => v.opportunityId === opportunityId),
      getByClient: (clientId) =>
        get().visits.filter((v) => v.clientId === clientId),
      getById: (id) => get().visits.find((v) => v.id === id),
    }),
    { name: "visit-store" }
  )
);
