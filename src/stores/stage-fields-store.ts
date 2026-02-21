import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { PipelineStage } from "@/types";
import {
  stageFieldsConfig,
  isFieldValueEmpty,
  validateFieldValue,
  type StageField,
  type StageFieldValue,
} from "@/lib/mock-stage-fields";

// ===== Types =====

type FieldSaveState = "idle" | "saving" | "saved" | "error";

interface StageFieldsState {
  // Current opportunity context
  opportunityId: string | null;
  opportunityStage: PipelineStage | null;

  // Field definitions per stage (keyed by stageId)
  fieldDefinitions: Record<string, StageField[]>;

  // Field values per opportunity+stage (keyed by `${opportunityId}:${stageId}`)
  fieldValues: Record<string, Record<string, StageFieldValue>>;

  // Per-field save state
  fieldSaveStates: Record<string, FieldSaveState>;

  // Per-field validation errors
  fieldErrors: Record<string, string>;

  // Global save/loading states
  isSaving: boolean;
  isLoadingFields: boolean;
  isChangingStage: boolean;
  loadError: string | null;

  // Banner messages
  banner: { message: string; variant: "success" | "error" | "warning" | "info" } | null;

  // New field modal
  isNewFieldModalOpen: boolean;

  // Actions
  initForOpportunity: (opportunityId: string, stage: PipelineStage, initialValues?: Record<string, StageFieldValue>) => void;
  updateFieldValue: (fieldId: string, value: StageFieldValue) => void;
  saveAllFields: () => void;
  updateOpportunityStage: (
    nextStageId: PipelineStage,
    onAdvance: (nextStage: PipelineStage) => boolean | void
  ) => void;
  advanceStage: (
    nextStageId: PipelineStage,
    onAdvance: (nextStage: PipelineStage) => boolean | void
  ) => void;
  addFieldDefinition: (stageId: string, field: Omit<StageField, "id" | "order" | "isActive" | "stageId">) => void;
  setNewFieldModalOpen: (open: boolean) => void;
  setBanner: (banner: StageFieldsState["banner"]) => void;
  reset: () => void;
}

// ===== Helpers =====

function valuesKey(opportunityId: string, stageId: string) {
  return `${opportunityId}:${stageId}`;
}

// ===== Store =====

export const useStageFieldsStore = create<StageFieldsState>()(
  devtools(
    (set, get) => ({
      opportunityId: null,
      opportunityStage: null,
      fieldDefinitions: {},
      fieldValues: {},
      fieldSaveStates: {},
      fieldErrors: {},
      isSaving: false,
      isLoadingFields: false,
      isChangingStage: false,
      loadError: null,
      banner: null,
      isNewFieldModalOpen: false,

      initForOpportunity: (opportunityId, stage, initialValues) => {
        // Load field definitions for all stages from config
        const definitions: Record<string, StageField[]> = {};
        for (const [stageId, fields] of Object.entries(stageFieldsConfig)) {
          definitions[stageId] = fields.filter((f) => f.isActive);
        }

        // Initialize values for current stage
        const key = valuesKey(opportunityId, stage);
        const existingValues = get().fieldValues[key];
        const values = existingValues ?? initialValues ?? {};

        set({
          opportunityId,
          opportunityStage: stage,
          fieldDefinitions: definitions,
          fieldValues: { ...get().fieldValues, [key]: values },
          fieldSaveStates: {},
          fieldErrors: {},
          isSaving: false,
          isLoadingFields: false,
          isChangingStage: false,
          loadError: null,
          banner: null,
          isNewFieldModalOpen: false,
        });
      },

      updateFieldValue: (fieldId, value) => {
        const { opportunityId, opportunityStage, fieldValues } = get();
        if (!opportunityId || !opportunityStage) return;

        const key = valuesKey(opportunityId, opportunityStage);
        const currentValues = fieldValues[key] || {};
        const updatedValues = { ...currentValues, [fieldId]: value };

        // Clear error for this field
        const nextErrors = { ...get().fieldErrors };
        delete nextErrors[fieldId];

        set({
          fieldValues: { ...fieldValues, [key]: updatedValues },
          fieldErrors: nextErrors,
          banner: null,
          fieldSaveStates: { ...get().fieldSaveStates, [fieldId]: "saving" },
        });

        // Simulate auto-save with debounce feedback
        setTimeout(() => {
          set((s) => ({
            fieldSaveStates: { ...s.fieldSaveStates, [fieldId]: "saved" },
          }));
          setTimeout(() => {
            set((s) => ({
              fieldSaveStates: { ...s.fieldSaveStates, [fieldId]: "idle" },
            }));
          }, 1400);
        }, 280);
      },

      saveAllFields: () => {
        const { opportunityId, opportunityStage, fieldDefinitions, fieldValues } = get();
        if (!opportunityId || !opportunityStage) return;

        const fields = fieldDefinitions[opportunityStage] || [];
        const key = valuesKey(opportunityId, opportunityStage);
        const values = fieldValues[key] || {};

        // Validate required fields
        const errors: Record<string, string> = {};
        const missingRequired: StageField[] = [];
        for (const field of fields) {
          const error = validateFieldValue(field, values[field.id]);
          if (error) {
            errors[field.id] = error;
            if (field.required) missingRequired.push(field);
          }
        }

        if (missingRequired.length > 0) {
          set({
            fieldErrors: errors,
            banner: {
              message: `Faltam ${missingRequired.length} campo(s) obrigatório(s) para salvar e avançar.`,
              variant: "warning",
            },
          });
          return;
        }

        set({ isSaving: true });

        // Mark all as saving
        const savingMap: Record<string, FieldSaveState> = {};
        fields.forEach((f) => { savingMap[f.id] = "saving"; });
        set({ fieldSaveStates: savingMap });

        // Simulate save
        setTimeout(() => {
          const savedMap: Record<string, FieldSaveState> = {};
          fields.forEach((f) => { savedMap[f.id] = "saved"; });

          const now = new Date();
          const timeString = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

          set({
            fieldSaveStates: savedMap,
            isSaving: false,
            fieldErrors: {},
            banner: {
              message: `Salvo agora às ${timeString}`,
              variant: "success",
            },
          });

          setTimeout(() => {
            // Dismiss banner after 3 seconds, keep idle state reset
            const idleMap: Record<string, FieldSaveState> = {};
            fields.forEach((f) => { idleMap[f.id] = "idle"; });
            set({ fieldSaveStates: idleMap });
          }, 1400);
        }, 380);
      },

      updateOpportunityStage: (nextStageId, onAdvance) => {
        const { opportunityId } = get();
        if (!opportunityId) return;

        set({ isChangingStage: true, banner: null });

        // 1. Trigger the actual stage change
        const didAdvance = onAdvance(nextStageId);

        // Let the normal React context flow update the current stage prop.
        // We will simulate the "fetch fields for new stage" here.
        setTimeout(() => {
          if (didAdvance === false) {
            set({
              isChangingStage: false,
              banner: {
                message: "Não consegui mudar a etapa. Tente novamente.",
                variant: "error",
              }
            });
            return;
          }

          // Fetch definitions for the new stage if we don't have them
          const { fieldDefinitions, fieldValues } = get();
          const newDefinitions = { ...fieldDefinitions };
          if (!newDefinitions[nextStageId]) {
            newDefinitions[nextStageId] = (stageFieldsConfig[nextStageId as PipelineStage] || []).filter((f) => f.isActive);
          }

          // Ensure values exist
          const key = valuesKey(opportunityId, nextStageId);
          const newValues = { ...fieldValues };
          if (!newValues[key]) {
            newValues[key] = {};
          }

          set({
            opportunityStage: nextStageId,
            fieldDefinitions: newDefinitions,
            fieldValues: newValues,
            fieldSaveStates: {},
            fieldErrors: {},
            isChangingStage: false,
            banner: {
              message: `Etapa alterada. Preencha os campos para continuar.`, // The stage label is inserted in the UI
              variant: "success"
            }
          });
        }, 600);
      },

      advanceStage: (nextStageId, onAdvance) => {
        const { opportunityId, opportunityStage, fieldDefinitions, fieldValues } = get();
        if (!opportunityId || !opportunityStage) return;

        const fields = fieldDefinitions[opportunityStage] || [];
        const key = valuesKey(opportunityId, opportunityStage);
        const values = fieldValues[key] || {};

        // Validate required fields
        const errors: Record<string, string> = {};
        const missing: StageField[] = [];
        for (const field of fields) {
          if (field.required && isFieldValueEmpty(values[field.id])) {
            errors[field.id] = "Preencha este campo para avançar etapa.";
            missing.push(field);
          }
        }

        if (missing.length > 0) {
          set({
            fieldErrors: errors,
            banner: {
              message: "Preencha os campos obrigatórios para avançar etapa.",
              variant: "warning",
            },
          });
          return;
        }

        // Advance stage via callback
        const didAdvance = onAdvance(nextStageId);
        if (didAdvance === false) {
          return;
        }

        // Update internal state to reflect new stage
        set({
          opportunityStage: nextStageId,
          fieldSaveStates: {},
          fieldErrors: {},
          banner: null,
        });
      },

      addFieldDefinition: (stageId, fieldData) => {
        const { fieldDefinitions } = get();
        const existingFields = fieldDefinitions[stageId] || [];
        const newField: StageField = {
          ...fieldData,
          id: `sf-${stageId}-${Date.now()}`,
          stageId,
          order: existingFields.length,
          isActive: true,
        };

        // Also update the global config so it persists in the mock layer
        const configFields = stageFieldsConfig[stageId as PipelineStage];
        if (configFields) {
          configFields.push(newField);
        }

        set({
          fieldDefinitions: {
            ...fieldDefinitions,
            [stageId]: [...existingFields, newField],
          },
          isNewFieldModalOpen: false,
          banner: {
            message: `Campo "${newField.label}" criado com sucesso.`,
            variant: "success",
          },
        });
      },

      setNewFieldModalOpen: (open) => set({ isNewFieldModalOpen: open }),

      setBanner: (banner) => set({ banner }),

      reset: () =>
        set({
          opportunityId: null,
          opportunityStage: null,
          fieldSaveStates: {},
          fieldErrors: {},
          isSaving: false,
          isLoadingFields: false,
          isChangingStage: false,
          loadError: null,
          banner: null,
          isNewFieldModalOpen: false,
        }),
    }),
    { name: "stage-fields-store" },
  ),
);

// ===== Selectors =====

export function useViewStageFields() {
  const stage = useStageFieldsStore((s) => s.opportunityStage);
  const fieldDefinitions = useStageFieldsStore((s) => s.fieldDefinitions);
  if (!stage) return [];
  return (fieldDefinitions[stage] || []).sort((a, b) => a.order - b.order);
}

export function useViewStageValues() {
  const opportunityId = useStageFieldsStore((s) => s.opportunityId);
  const stage = useStageFieldsStore((s) => s.opportunityStage);
  const fieldValues = useStageFieldsStore((s) => s.fieldValues);
  if (!opportunityId || !stage) return {};
  return fieldValues[valuesKey(opportunityId, stage)] || {};
}

export function useRequiredProgress() {
  const fields = useViewStageFields();
  const values = useViewStageValues();
  const requiredFields = fields.filter((f) => f.required);
  const completed = requiredFields.filter((f) => !isFieldValueEmpty(values[f.id]));
  return {
    total: requiredFields.length,
    completed: completed.length,
    missing: requiredFields.length - completed.length,
    missingFields: requiredFields.filter((f) => isFieldValueEmpty(values[f.id])),
  };
}
