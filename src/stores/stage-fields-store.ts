import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { PipelineStage } from "@/types";
import {
  stageFieldsConfig,
  isFieldValueEmpty,
  validateFieldValue,
  type StageField,
  type StageFieldValue,
  type FieldType,
} from "@/lib/mock-stage-fields";

// ===== Types =====

type FieldSaveState = "idle" | "saving" | "saved" | "error";

interface StageFieldsState {
  // Current opportunity context
  opportunityId: string | null;
  opportunityStage: PipelineStage | null;

  // View stage (what the user is looking at — can differ from opportunityStage)
  viewStage: PipelineStage | null;

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
  loadError: string | null;

  // Banner messages
  banner: { message: string; variant: "success" | "error" | "warning" | "info" } | null;

  // New field modal
  isNewFieldModalOpen: boolean;

  // Actions
  initForOpportunity: (opportunityId: string, stage: PipelineStage, initialValues?: Record<string, StageFieldValue>) => void;
  setViewStage: (stage: PipelineStage) => void;
  updateFieldValue: (fieldId: string, value: StageFieldValue) => void;
  saveAllFields: () => void;
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
      viewStage: null,
      fieldDefinitions: {},
      fieldValues: {},
      fieldSaveStates: {},
      fieldErrors: {},
      isSaving: false,
      isLoadingFields: false,
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
          viewStage: stage,
          fieldDefinitions: definitions,
          fieldValues: { ...get().fieldValues, [key]: values },
          fieldSaveStates: {},
          fieldErrors: {},
          isSaving: false,
          isLoadingFields: false,
          loadError: null,
          banner: null,
          isNewFieldModalOpen: false,
        });
      },

      setViewStage: (stage) => {
        const { opportunityId, fieldValues, fieldDefinitions } = get();
        if (!opportunityId) return;

        const key = valuesKey(opportunityId, stage);
        // Ensure values exist for this stage
        if (!fieldValues[key]) {
          set({
            fieldValues: { ...fieldValues, [key]: {} },
          });
        }

        // Ensure field definitions exist
        if (!fieldDefinitions[stage]) {
          const fields = (stageFieldsConfig[stage] || []).filter((f) => f.isActive);
          set({
            fieldDefinitions: { ...get().fieldDefinitions, [stage]: fields },
          });
        }

        set({
          viewStage: stage,
          fieldSaveStates: {},
          fieldErrors: {},
          banner: null,
        });
      },

      updateFieldValue: (fieldId, value) => {
        const { opportunityId, viewStage, opportunityStage, fieldValues } = get();
        if (!opportunityId || !viewStage) return;

        // Block editing when viewing a different stage
        if (viewStage !== opportunityStage) return;

        const key = valuesKey(opportunityId, viewStage);
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
        const { opportunityId, viewStage, opportunityStage, fieldDefinitions, fieldValues } = get();
        if (!opportunityId || !viewStage) return;

        // Block saving when viewing a different stage
        if (viewStage !== opportunityStage) {
          set({
            banner: {
              message: "Volte para a etapa atual para salvar campos.",
              variant: "warning",
            },
          });
          return;
        }

        const fields = fieldDefinitions[viewStage] || [];
        const key = valuesKey(opportunityId, viewStage);
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
          set({
            fieldSaveStates: savedMap,
            isSaving: false,
            fieldErrors: {},
            banner: {
              message: "Campos da etapa salvos com sucesso.",
              variant: "success",
            },
          });

          setTimeout(() => {
            const idleMap: Record<string, FieldSaveState> = {};
            fields.forEach((f) => { idleMap[f.id] = "idle"; });
            set({ fieldSaveStates: idleMap });
          }, 1400);
        }, 380);
      },

      advanceStage: (nextStageId, onAdvance) => {
        const { opportunityId, viewStage, opportunityStage, fieldDefinitions, fieldValues } = get();
        if (!opportunityId || !viewStage || !opportunityStage) return;

        // Block advance when viewing a different stage
        if (viewStage !== opportunityStage) {
          set({
            banner: {
              message: "Volte para a etapa atual para avançar.",
              variant: "warning",
            },
          });
          return;
        }

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
          viewStage: nextStageId,
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
          viewStage: null,
          fieldSaveStates: {},
          fieldErrors: {},
          isSaving: false,
          isLoadingFields: false,
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
  const viewStage = useStageFieldsStore((s) => s.viewStage);
  const fieldDefinitions = useStageFieldsStore((s) => s.fieldDefinitions);
  if (!viewStage) return [];
  return (fieldDefinitions[viewStage] || []).sort((a, b) => a.order - b.order);
}

export function useViewStageValues() {
  const opportunityId = useStageFieldsStore((s) => s.opportunityId);
  const viewStage = useStageFieldsStore((s) => s.viewStage);
  const fieldValues = useStageFieldsStore((s) => s.fieldValues);
  if (!opportunityId || !viewStage) return {};
  return fieldValues[valuesKey(opportunityId, viewStage)] || {};
}

export function useIsViewingDifferentStage() {
  const viewStage = useStageFieldsStore((s) => s.viewStage);
  const opportunityStage = useStageFieldsStore((s) => s.opportunityStage);
  return viewStage !== null && opportunityStage !== null && viewStage !== opportunityStage;
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
