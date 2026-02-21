import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { OpportunityNote } from "@/types";
import { mockNotes } from "@/lib/mock-data";

interface NoteState {
  notes: OpportunityNote[];
  isLoading: boolean;

  // Queries
  getByOpportunity: (opportunityId: string) => OpportunityNote[];
  getById: (id: string) => OpportunityNote | undefined;
}

export const useNoteStore = create<NoteState>()(
  devtools(
    (_set, get) => ({
      notes: mockNotes,
      isLoading: false,

      getByOpportunity: (opportunityId) =>
        get().notes.filter((n) => n.opportunityId === opportunityId),
      getById: (id) => get().notes.find((n) => n.id === id),
    }),
    { name: "note-store" }
  )
);
