import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Activity, ActivityStatus } from "@/types";
import { mockActivities } from "@/lib/mock-data";
import { getEffectiveActivityStatus } from "@/lib/business-rules";

interface ActivityState {
  activities: Activity[];
  isLoading: boolean;

  // CRUD
  addActivity: (data: Omit<Activity, "id" | "createdAt">) => Activity;
  updateActivity: (id: string, data: Partial<Activity>) => void;
  deleteActivity: (id: string) => void;

  // Status management
  completeActivity: (id: string, notes?: string) => void;
  cancelActivity: (id: string) => void;
  postponeActivity: (id: string, newDueDate: string, newDueTime?: string) => void;

  // Computed
  getById: (id: string) => Activity | undefined;
  getByOpportunity: (opportunityId: string) => Activity[];
  getByClient: (clientId: string) => Activity[];
  getPending: () => Activity[];
  getOverdue: () => Activity[];
}

export const useActivityStore = create<ActivityState>()(
  devtools(
    (set, get) => ({
      activities: mockActivities,
      isLoading: false,

      addActivity: (data) => {
        const newActivity: Activity = {
          ...data,
          id: `act-${Date.now()}`,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          activities: [...state.activities, newActivity],
        }));
        return newActivity;
      },

      updateActivity: (id, data) =>
        set((state) => ({
          activities: state.activities.map((act) =>
            act.id === id
              ? { ...act, ...data, updatedAt: new Date().toISOString() }
              : act
          ),
        })),

      deleteActivity: (id) =>
        set((state) => ({
          activities: state.activities.filter((act) => act.id !== id),
        })),

      completeActivity: (id, notes) =>
        set((state) => ({
          activities: state.activities.map((act) =>
            act.id === id
              ? {
                  ...act,
                  status: "completed" as ActivityStatus,
                  completedAt: new Date().toISOString().split("T")[0],
                  completionNotes: notes || undefined,
                  updatedAt: new Date().toISOString(),
                }
              : act
          ),
        })),

      cancelActivity: (id) =>
        set((state) => ({
          activities: state.activities.map((act) =>
            act.id === id
              ? { ...act, status: "cancelled" as ActivityStatus, updatedAt: new Date().toISOString() }
              : act
          ),
        })),

      postponeActivity: (id, newDueDate, newDueTime) =>
        set((state) => {
          return {
            activities: state.activities.map((act) => {
              if (act.id !== id) return act;

              const candidate = {
                ...act,
                dueDate: newDueDate,
                dueTime: newDueTime ?? act.dueTime,
                status: "pending" as ActivityStatus,
              };

              const effectiveStatus = getEffectiveActivityStatus(candidate);
              const newStatus: ActivityStatus =
                effectiveStatus === "overdue" ? "overdue" : "pending";

              return {
                ...candidate,
                status: newStatus,
              };
            }),
          };
        }),

      getById: (id) => get().activities.find((a) => a.id === id),
      getByOpportunity: (opportunityId) =>
        get().activities.filter((a) => a.opportunityId === opportunityId),
      getByClient: (clientId) =>
        get().activities.filter((a) => a.clientId === clientId),
      getPending: () =>
        get().activities.filter((a) => a.status === "pending"),
      getOverdue: () => {
        const todayStr = new Date().toISOString().split("T")[0];
        return get().activities.filter(
          (a) =>
            a.status === "overdue" ||
            (a.status === "pending" && a.dueDate < todayStr)
        );
      },
    }),
    { name: "activity-store" }
  )
);
