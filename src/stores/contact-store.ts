import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Contact } from "@/types";
import { mockContacts } from "@/lib/mock-data";

interface ContactState {
  contacts: Contact[];
  isLoading: boolean;

  // Queries
  getByClient: (clientId: string) => Contact[];
  getById: (id: string) => Contact | undefined;
}

export const useContactStore = create<ContactState>()(
  devtools(
    (_set, get) => ({
      contacts: mockContacts,
      isLoading: false,

      getByClient: (clientId) =>
        get().contacts.filter((c) => c.clientId === clientId),
      getById: (id) => get().contacts.find((c) => c.id === id),
    }),
    { name: "contact-store" }
  )
);
