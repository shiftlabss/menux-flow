"use client";

import LeadCardDrawer from "@/components/drawers/lead-card-drawer";
import { ClientCardDrawer } from "@/components/drawers/client-card-drawer";
import { FiltersPanel } from "@/components/shared/filters-panel";
import { NewOpportunityModal } from "@/components/modals/new-opportunity-modal";
import { NewActivityModal } from "@/components/modals/new-activity-modal";
import { WinOpportunityModal } from "@/components/modals/win-opportunity-modal";
import { LoseOpportunityModal } from "@/components/modals/lose-opportunity-modal";
import { InviteUserModal } from "@/components/modals/invite-user-modal";
import { ConfirmDeleteModal } from "@/components/modals/confirm-delete-modal";
import { ConfirmDeactivateModal } from "@/components/modals/confirm-deactivate-modal";
import { useUIStore } from "@/stores/ui-store";

export function GlobalDrawers() {
  const { modalData, drawerData } = useUIStore();
  const leadDrawerKey = `lead-${String(modalData?.id ?? "default")}`;
  const clientDrawerKey = `client-${String(drawerData?.id ?? "default")}`;

  return (
    <>
      {/* Drawers */}
      <ClientCardDrawer key={clientDrawerKey} />
      <FiltersPanel context="pipes" />

      {/* Modals */}
      <LeadCardDrawer key={leadDrawerKey} />
      <NewOpportunityModal />
      <NewActivityModal />
      <WinOpportunityModal />
      <LoseOpportunityModal />
      <InviteUserModal />
      <ConfirmDeleteModal />
      <ConfirmDeactivateModal />
    </>
  );
}
