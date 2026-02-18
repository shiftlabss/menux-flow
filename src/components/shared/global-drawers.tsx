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
import { useActivityStore } from "@/stores/activity-store";
import type { ActivityFormData } from "@/lib/validations/activity";

export function GlobalDrawers() {
  const { modalData, drawerData, drawerType, closeDrawer } = useUIStore();
  const { addActivity } = useActivityStore();
  const leadDrawerKey = `lead-${String(modalData?.id ?? "default")}`;
  const clientDrawerKey = `client-${String(drawerData?.id ?? "default")}`;

  const handleSaveActivity = (data: ActivityFormData) => {
    addActivity({
      title: data.title,
      type: data.type,
      status: "pending",
      description: data.description || "",
      dueDate: data.date,
      dueTime: data.time,
      responsibleId: data.responsible || "user-5",
      responsibleName: data.responsible || "Eu",
    });
    closeDrawer();
  };

  return (
    <>
      {/* Drawers */}
      <ClientCardDrawer key={clientDrawerKey} />
      <FiltersPanel context="pipes" />

      {/* Modals */}
      <LeadCardDrawer key={leadDrawerKey} />
      <NewOpportunityModal />
      <NewActivityModal
        isOpen={drawerType === "new-activity"}
        onClose={closeDrawer}
        onSave={handleSaveActivity}
        initialType={(drawerData?.type as "call" | "email" | "meeting" | "visit" | "task" | "follow-up" | "whatsapp") || undefined}
      />
      <WinOpportunityModal />
      <LoseOpportunityModal />
      <InviteUserModal />
      <ConfirmDeleteModal />
      <ConfirmDeactivateModal />
    </>
  );
}
