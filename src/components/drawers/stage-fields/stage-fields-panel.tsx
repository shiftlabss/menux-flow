"use client";

import { useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutList,
  Check,
  Loader2,
  AlertTriangle,
  Plus,
  Eye,
  Activity,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import type { PipelineStage } from "@/types";
import {
  useStageFieldsStore,
  useViewStageFields,
  useViewStageValues,
  useIsViewingDifferentStage,
  useRequiredProgress,
} from "@/stores/stage-fields-store";
import { DynamicFieldRenderer } from "./dynamic-field-renderer";
import { NewFieldModal } from "./new-field-modal";

// ===== Types =====

type BannerVariant = "success" | "error" | "info" | "warning";

interface InlineBanner {
  message: string;
  variant: BannerVariant;
}

interface StageFieldsPanelProps {
  opportunityId: string;
  currentStage: PipelineStage;
  stages: { id: string; label: string }[];
  initialValues?: Record<string, string | number | boolean | string[] | null | undefined>;
  isLocked: boolean;
  onStageChange: (newStage: PipelineStage) => boolean | void;
  nextStage: { id: string; label: string } | null;
  canCreateFields?: boolean;
  advanceBlockedReason?: string | null;
}

// ===== InlineStatusBanner (local) =====

function InlineStatusBanner({
  banner,
  onDismiss,
}: {
  banner: InlineBanner;
  onDismiss: () => void;
}) {
  useEffect(() => {
    if (banner.variant === "success" || banner.variant === "info") {
      const timer = setTimeout(onDismiss, 3000);
      return () => clearTimeout(timer);
    }
  }, [banner, onDismiss]);

  const variantStyles: Record<BannerVariant, string> = {
    success: "bg-status-success/10 text-status-success border-status-success/20",
    error: "bg-status-danger/10 text-status-danger border-status-danger/20",
    info: "bg-brand/10 text-brand border-brand/20",
    warning: "bg-status-warning/10 text-status-warning border-status-warning/20",
  };

  const icons: Record<BannerVariant, React.ReactNode> = {
    success: <Check className="h-3.5 w-3.5 shrink-0" />,
    error: <AlertTriangle className="h-3.5 w-3.5 shrink-0" />,
    info: <Activity className="h-3.5 w-3.5 shrink-0" />,
    warning: <AlertTriangle className="h-3.5 w-3.5 shrink-0" />,
  };

  return (
    <div
      className={`flex items-center gap-2 rounded-[10px] border px-3 py-2 font-body text-xs font-medium animate-in fade-in slide-in-from-top-1 duration-200 ${variantStyles[banner.variant]}`}
      role={banner.variant === "error" ? "alert" : "status"}
      aria-live={banner.variant === "error" ? "assertive" : "polite"}
    >
      {icons[banner.variant]}
      <span className="flex-1">{banner.message}</span>
      <button
        onClick={onDismiss}
        className="ml-auto shrink-0 opacity-70 hover:opacity-100"
        aria-label="Fechar"
      >
        ×
      </button>
    </div>
  );
}

// ===== PremiumCard (local lightweight version) =====

function PanelCard({
  title,
  description,
  headerAction,
  children,
}: {
  title: string;
  description: string;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.1 }}
      className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm"
    >
      <div className="mb-4 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600">
            <LayoutList className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-zinc-900">{title}</h3>
            <p className="text-[11px] text-zinc-500">{description}</p>
          </div>
        </div>
        {headerAction}
      </div>
      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}

// ===== Main Component =====

export function StageFieldsPanel({
  opportunityId,
  currentStage,
  stages,
  initialValues,
  isLocked,
  onStageChange,
  nextStage,
  canCreateFields = false,
  advanceBlockedReason = null,
}: StageFieldsPanelProps) {
  const store = useStageFieldsStore();
  const fields = useViewStageFields();
  const values = useViewStageValues();
  const isViewingDifferent = useIsViewingDifferentStage();
  const progress = useRequiredProgress();

  // Initialize store when opportunity opens/changes
  useEffect(() => {
    store.initForOpportunity(opportunityId, currentStage, initialValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opportunityId, currentStage]);

  // Sync when external stage changes (e.g. from stage bar)
  useEffect(() => {
    if (store.opportunityStage !== currentStage) {
      store.initForOpportunity(opportunityId, currentStage, initialValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStage]);

  const handleFieldChange = useCallback(
    (fieldId: string, value: string | number | boolean | string[] | null | undefined) => {
      if (isLocked || isViewingDifferent) return;
      store.updateFieldValue(fieldId, value);
    },
    [isLocked, isViewingDifferent, store],
  );

  const handleSave = useCallback(() => {
    if (isLocked) return;
    store.saveAllFields();
  }, [isLocked, store]);

  const handleCreateField = useCallback(
    (fieldData: Parameters<typeof store.addFieldDefinition>[1]) => {
      if (!store.viewStage) return;
      store.addFieldDefinition(store.viewStage, fieldData);
    },
    [store],
  );

  const currentStageName = useMemo(() => {
    return stages.find((s) => s.id === store.opportunityStage)?.label ?? "Etapa";
  }, [stages, store.opportunityStage]);

  const viewStageName = useMemo(() => {
    return stages.find((s) => s.id === store.viewStage)?.label ?? "Etapa";
  }, [stages, store.viewStage]);

  // Split fields: required first, then optional
  const requiredFields = useMemo(() => fields.filter((f) => f.required), [fields]);
  const optionalFields = useMemo(() => fields.filter((f) => !f.required), [fields]);

  const isEditable = !isLocked && !isViewingDifferent;
  const hasPendingSave = Object.values(store.fieldSaveStates).some((s) => s === "saving");
  const hasAdvanceBlockedReason = Boolean(advanceBlockedReason && advanceBlockedReason.trim().length > 0);

  return (
    <>
      <div className="sticky top-4">
        <PanelCard
          title="Campos da etapa"
          description="Preencha para destravar avanço e fechamento."
          headerAction={
            <Badge
              variant="outline"
              className="rounded-full border-zinc-200 bg-zinc-50 text-[11px] text-zinc-700"
            >
              {currentStageName}
            </Badge>
          }
        >
          {/* ── Controls row: Ver etapa + Novo campo ── */}
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="h-9 w-full justify-between rounded-xl border-zinc-200 bg-white px-3 font-normal text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 focus:ring-2 focus:ring-brand/10 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
                        <Eye className="h-3 w-3" />
                      </span>
                      <span className="text-xs font-semibold text-zinc-700">
                        {store.viewStage ? stages.find(s => s.id === store.viewStage)?.label : "Selecionar etapa..."}
                      </span>
                    </div>
                    <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[280px] p-0 rounded-2xl shadow-xl border-zinc-100" align="start">
                  <Command>
                    <CommandList className="max-h-[300px] p-1.5">
                      <div className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                        Navegar etapas
                      </div>
                      <CommandGroup>
                        {stages.map((s, index) => {
                          const isCurrent = s.id === store.opportunityStage;
                          const isSelected = s.id === store.viewStage;
                          const currentIndex = stages.findIndex(st => st.id === store.opportunityStage);
                          const isPassed = index < currentIndex;

                          return (
                            <CommandItem
                              key={s.id}
                              value={s.label}
                              onSelect={() => {
                                store.setViewStage(s.id as PipelineStage);
                              }}
                              className={cn(
                                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs transition-colors cursor-pointer",
                                isSelected ? "bg-zinc-50" : "hover:bg-zinc-50"
                              )}
                            >
                              {/* Status Indicator */}
                              <div className={cn(
                                "flex h-2 w-2 shrink-0 rounded-full",
                                isPassed ? "bg-brand/40" :
                                  isCurrent ? "bg-brand ring-2 ring-brand/20" :
                                    "bg-zinc-200"
                              )} />

                              <span className={cn(
                                "flex-1 truncate font-medium",
                                isSelected ? "text-zinc-900" : "text-zinc-600"
                              )}>
                                {s.label}
                              </span>

                              {isCurrent && (
                                <Badge
                                  variant="secondary"
                                  className="ml-auto h-5 rounded-full bg-brand/10 px-1.5 text-[9px] font-semibold text-brand hover:bg-brand/20"
                                >
                                  Atual
                                </Badge>
                              )}

                              {isSelected && !isCurrent && (
                                <Check className="h-3.5 w-3.5 text-zinc-900" />
                              )}
                            </CommandItem>
                          );
                        })}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            {canCreateFields && (
              <Button
                size="sm"
                className="h-9 rounded-xl bg-zinc-900 px-3 text-xs text-white hover:bg-black shadow-sm transition-all hover:shadow-md"
                onClick={() => store.setNewFieldModalOpen(true)}
              >
                <Plus className="mr-1.5 h-3.5 w-3.5" />
                Novo campo
              </Button>
            )}
          </div>

          {/* ── Banner: viewing different stage ── */}
          <AnimatePresence>
            {isViewingDifferent && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-2 rounded-[10px] border border-sky-200 bg-sky-50 px-3 py-2 text-xs text-sky-700">
                  <Eye className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    Visualizando <strong>{viewStageName}</strong>. Para editar, volte para{" "}
                    <button
                      type="button"
                      className="font-semibold underline hover:no-underline"
                      onClick={() => store.setViewStage(store.opportunityStage!)}
                    >
                      {currentStageName}
                    </button>.
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Store banner ── */}
          <AnimatePresence>
            {store.banner && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <InlineStatusBanner
                  banner={store.banner}
                  onDismiss={() => store.setBanner(null)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Checklist progress ── */}
          <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-medium text-zinc-600">Progresso obrigatório</span>
              <span className="font-semibold text-zinc-900">
                {progress.completed}/{progress.total || 0}
              </span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-zinc-200">
              <div
                className="h-full rounded-full bg-brand transition-all duration-200"
                style={{
                  width: `${progress.total === 0
                      ? 100
                      : Math.max(8, (progress.completed / progress.total) * 100)
                    }%`,
                }}
              />
            </div>
            <p className="mt-2 text-[11px] text-zinc-500">
              {progress.total === 0
                ? "Nenhum campo obrigatório nesta etapa."
                : progress.missing === 0
                  ? "Checklist completo. Você já pode avançar."
                  : `Faltam ${progress.missing} item(ns) para avançar etapa.`}
            </p>
          </div>

          {/* ── Missing required fields warning ── */}
          {progress.missingFields.length > 0 && store.viewStage === store.opportunityStage && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
              <p className="text-[11px] font-semibold text-amber-700">Pendências para avanço</p>
              <ul className="mt-1 space-y-1 text-[11px] text-amber-700">
                {progress.missingFields.map((field) => (
                  <li key={field.id}>• {field.label}</li>
                ))}
              </ul>
            </div>
          )}

          {hasAdvanceBlockedReason && store.viewStage === store.opportunityStage && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
              <p className="text-[11px] font-semibold text-amber-700">Avanço bloqueado</p>
              <p className="mt-1 text-[11px] text-amber-700">{advanceBlockedReason}</p>
            </div>
          )}

          {/* ── Fields ── */}
          {fields.length > 0 ? (
            <div className="space-y-4">
              {/* Required fields first */}
              {requiredFields.map((field) => (
                <DynamicFieldRenderer
                  key={field.id}
                  field={field}
                  value={values[field.id]}
                  onChange={handleFieldChange}
                  disabled={!isEditable}
                  error={store.fieldErrors[field.id]}
                  saveState={store.fieldSaveStates[field.id] || "idle"}
                />
              ))}

              {/* Optional fields */}
              {optionalFields.length > 0 && requiredFields.length > 0 && (
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-zinc-100" />
                  <span className="text-[9px] font-medium uppercase tracking-wider text-zinc-400">
                    Opcionais
                  </span>
                  <div className="h-px flex-1 bg-zinc-100" />
                </div>
              )}

              {optionalFields.map((field) => (
                <DynamicFieldRenderer
                  key={field.id}
                  field={field}
                  value={values[field.id]}
                  onChange={handleFieldChange}
                  disabled={!isEditable}
                  error={store.fieldErrors[field.id]}
                  saveState={store.fieldSaveStates[field.id] || "idle"}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 py-8 text-center">
              <LayoutList className="mb-2 h-8 w-8 text-zinc-200" />
              <p className="font-heading text-xs font-medium text-zinc-400">
                Esta etapa não possui campos configurados
              </p>
              {canCreateFields && (
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-3 h-7 rounded-full px-3 text-[10px]"
                  onClick={() => store.setNewFieldModalOpen(true)}
                >
                  <Plus className="mr-1 h-3 w-3" />
                  Criar primeiro campo
                </Button>
              )}
            </div>
          )}

          {/* ── Action buttons ── */}
          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="h-8 rounded-full px-3 text-xs"
              onClick={handleSave}
              disabled={isLocked || store.isSaving || isViewingDifferent}
            >
              {store.isSaving ? (
                <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
              ) : (
                <Check className="mr-1.5 h-3.5 w-3.5" />
              )}
              Salvar campos
            </Button>
          </div>
        </PanelCard>
      </div>

      {/* ── New Field Modal ── */}
      <NewFieldModal
        open={store.isNewFieldModalOpen}
        onOpenChange={store.setNewFieldModalOpen}
        stageId={store.viewStage || ""}
        stageName={viewStageName}
        onSave={handleCreateField}
      />
    </>
  );
}
