"use client";

import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  X,
  Calendar,
  Clock,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Users,
  CheckSquare,
  Loader2,
  CheckCircle,
  Link2,
} from "lucide-react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Combobox, type ComboboxOption } from "@/components/ui/combobox";
import {
  MultiCombobox,
  type MultiComboboxOption,
} from "@/components/ui/multi-combobox";
import {
  activitySchema,
  activitySchemaWithRequiredClient,
  type ActivityFormData,
} from "@/lib/validations/activity";
import { useClientStore } from "@/stores/client-store";
import { useContactStore } from "@/stores/contact-store";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { RESTAURANT_POSITIONS } from "@/lib/business-rules";

export interface NewActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ActivityFormData) => Promise<void> | void;
  dealId?: string;
  initialType?: ActivityFormData["type"];
  initialClientId?: string;
  initialClientName?: string;
  initialContactIds?: string[];
  initialContactNames?: string[];
  initialOpportunityId?: string;
  initialOpportunityTitle?: string;
  lockClient?: boolean;
  requireClient?: boolean;
}

const activityTypes = [
  { id: "call", label: "Ligação", icon: Phone },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { id: "email", label: "E-mail", icon: Mail },
  { id: "meeting", label: "Reunião", icon: Users },
  { id: "task", label: "Tarefa", icon: CheckSquare },
] as const;

function getCargoLabel(value: string): string {
  return (
    RESTAURANT_POSITIONS.find((p) => p.value === value)?.label ?? value
  );
}

const TIME_REQUIRED_TYPES = new Set(["call", "meeting", "whatsapp", "email"]);

export function NewActivityModal({
  isOpen,
  onClose,
  onSave,
  dealId,
  initialType = "task",
  initialClientId,
  initialClientName,
  initialContactIds,
  initialContactNames,
  initialOpportunityId,
  initialOpportunityTitle,
  lockClient = false,
  requireClient = false,
}: NewActivityModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isSaving, setIsSaving] = React.useState(false);
  const [saveSuccess, setSaveSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  // Stores
  const clients = useClientStore((s) => s.clients);
  const getContactsByClient = useContactStore((s) => s.getByClient);
  const opportunities = useOpportunityStore((s) => s.opportunities);

  const schema = requireClient
    ? activitySchemaWithRequiredClient
    : activitySchema;

  const form = useForm<ActivityFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      type: initialType,
      title: "",
      date: format(new Date(), "yyyy-MM-dd"),
      time: format(new Date(), "HH:mm"),
      description: "",
      clientId: initialClientId ?? "",
      clientName: initialClientName ?? "",
      contactIds: initialContactIds ?? [],
      contactNames: initialContactNames ?? [],
      opportunityId: initialOpportunityId ?? "",
      opportunityTitle: initialOpportunityTitle ?? "",
    },
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid },
    reset,
  } = form;

  const type = useWatch({ control, name: "type" });
  const selectedClientId = useWatch({ control, name: "clientId" });
  const watchedDescription = useWatch({ control, name: "description" });
  const watchedContactIds = useWatch({ control, name: "contactIds" });
  const watchedOpportunityId = useWatch({ control, name: "opportunityId" });

  // Client options
  const clientOptions: ComboboxOption[] = React.useMemo(
    () =>
      clients.map((c) => ({
        value: c.id,
        label: c.companyName,
        subtitle: c.city ?? undefined,
      })),
    [clients]
  );

  // Contact options (filtered by selected client)
  const contactOptions: ComboboxOption[] = React.useMemo(() => {
    if (!selectedClientId) return [];
    return getContactsByClient(selectedClientId).map((c) => ({
      value: c.id,
      label: c.nome,
      subtitle: getCargoLabel(c.cargo),
    }));
  }, [selectedClientId, getContactsByClient]);

  // Opportunity options (filtered by selected client, open only)
  const opportunityOptions: ComboboxOption[] = React.useMemo(() => {
    if (!selectedClientId) return [];
    return opportunities
      .filter((o) => o.clientId === selectedClientId && o.status === "open")
      .map((o) => ({
        value: o.id,
        label: o.title,
      }));
  }, [selectedClientId, opportunities]);

  // Cascade: when client changes, clear contact and opportunity
  const handleClientChange = React.useCallback(
    (value: string | null, option: ComboboxOption | null) => {
      setValue("clientId", value ?? "", { shouldValidate: true });
      setValue("clientName", option?.label ?? "");
      setValue("contactIds", []);
      setValue("contactNames", []);
      setValue("opportunityId", "");
      setValue("opportunityTitle", "");
    },
    [setValue]
  );

  const handleContactsChange = React.useCallback(
    (nextValues: string[], nextOptions: MultiComboboxOption[]) => {
      setValue("contactIds", nextValues);
      setValue(
        "contactNames",
        nextOptions.map((o) => o.label)
      );
    },
    [setValue]
  );

  const handleOpportunityChange = React.useCallback(
    (value: string | null, option: ComboboxOption | null) => {
      setValue("opportunityId", value ?? "");
      setValue("opportunityTitle", option?.label ?? "");
    },
    [setValue]
  );

  // Auto-select most recent open opportunity when client changes
  const prevClientRef = React.useRef(selectedClientId);
  React.useEffect(() => {
    if (selectedClientId && selectedClientId !== prevClientRef.current && !lockClient) {
      const openOpps = opportunities
        .filter((o) => o.clientId === selectedClientId && o.status === "open")
        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
      if (openOpps.length > 0) {
        setValue("opportunityId", openOpps[0].id);
        setValue("opportunityTitle", openOpps[0].title);
      }
    }
    prevClientRef.current = selectedClientId;
  }, [selectedClientId, lockClient, opportunities, setValue]);

  // Reset form when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        reset({
          type: initialType,
          title: "",
          date: format(new Date(), "yyyy-MM-dd"),
          time: format(new Date(), "HH:mm"),
          description: "",
          clientId: initialClientId ?? "",
          clientName: initialClientName ?? "",
          contactIds: initialContactIds ?? [],
          contactNames: initialContactNames ?? [],
          opportunityId: initialOpportunityId ?? "",
          opportunityTitle: initialOpportunityTitle ?? "",
        });
        prevClientRef.current = initialClientId ?? "";
        setSaveSuccess(false);
        setSubmitError(null);
      }, 50);
    }
  }, [
    isOpen,
    reset,
    initialType,
    initialClientId,
    initialClientName,
    initialContactIds,
    initialContactNames,
    initialOpportunityId,
    initialOpportunityTitle,
  ]);

  const onSubmit = async (data: ActivityFormData) => {
    setIsSaving(true);
    setSubmitError(null);

    try {
      await Promise.resolve(onSave(data));
      setSaveSuccess(true);
      setTimeout(() => {
        setIsSaving(false);
        onClose();
      }, 320);
    } catch {
      setIsSaving(false);
      setSaveSuccess(false);
      setSubmitError("Não foi possível criar a atividade. Tente novamente.");
    }
  };

  const handleSmartSuggestion = () => {
    const clientName =
      form.getValues("clientName") || "";
    const typeLabel =
      activityTypes.find((t) => t.id === type)?.label ?? "Follow-up";
    const suggestion = clientName
      ? `${typeLabel} com ${clientName}`
      : `Follow-up da proposta enviada`;
    setValue("title", suggestion, { shouldValidate: true });
    const reference = dealId ? ` para a negociação` : "";
    setValue(
      "description",
      `Verificar se o cliente teve alguma dúvida sobre os valores apresentados${reference}.`
    );
  };

  const isTimeRequired = TIME_REQUIRED_TYPES.has(type);

  const Content = (
    <div className="flex h-full flex-col bg-white">
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <form
          id="activity-form"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* SECTION 1: Activity Type */}
          <div className="space-y-3">
            <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Tipo de Atividade
            </Label>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
              {activityTypes.map((t) => {
                const Icon = t.icon;
                const isSelected = type === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() =>
                      setValue("type", t.id as ActivityFormData["type"], {
                        shouldValidate: true,
                      })
                    }
                    className={cn(
                      "flex h-[72px] flex-col items-center justify-center gap-2 rounded-xl border p-2 transition-all hover:bg-zinc-50",
                      isSelected
                        ? "border-brand bg-brand/5 text-brand ring-1 ring-brand"
                        : "border-zinc-200 bg-white text-zinc-600"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5",
                        isSelected ? "text-brand" : "text-zinc-400"
                      )}
                    />
                    <span className="text-[10px] font-medium">{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: Vincular a */}
          <div className="space-y-3">
            <Label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <Link2 className="h-3.5 w-3.5" />
              Vincular a
            </Label>

            {/* Client */}
            <div>
              <Label className="mb-1.5 block text-xs text-zinc-500">
                Cliente (restaurante)
                {requireClient && (
                  <span className="ml-0.5 text-red-500">*</span>
                )}
              </Label>
              <Combobox
                options={clientOptions}
                value={selectedClientId || null}
                onValueChange={handleClientChange}
                placeholder="Buscar cliente..."
                searchPlaceholder="Digite o nome do cliente..."
                emptyMessage="Nenhum cliente encontrado."
                locked={lockClient}
                aria-label="Cliente"
              />
              {errors.clientId && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.clientId.message}
                </p>
              )}
              {!requireClient && !selectedClientId && (
                <p className="mt-1 text-[11px] text-amber-600">
                  Vincular a um cliente melhora a rastreabilidade da atividade
                </p>
              )}
            </div>

            {/* Contacts (multi-select) */}
            <div>
              <Label className="mb-1.5 block text-xs text-zinc-500">
                Contatos (pessoas)
              </Label>
              <MultiCombobox
                options={contactOptions}
                values={watchedContactIds ?? []}
                onValuesChange={handleContactsChange}
                placeholder={
                  selectedClientId
                    ? "Selecionar contatos..."
                    : "Selecione um restaurante primeiro"
                }
                searchPlaceholder="Buscar contato..."
                emptyMessage="Nenhum contato encontrado."
                disabled={!selectedClientId}
                aria-label="Contatos"
              />
            </div>

            {/* Opportunity (only when client selected and there are open opportunities) */}
            {selectedClientId && opportunityOptions.length > 0 && (
              <div>
                <Label className="mb-1.5 block text-xs text-zinc-500">
                  Oportunidade (opcional)
                </Label>
                <Combobox
                  options={opportunityOptions}
                  value={watchedOpportunityId || null}
                  onValueChange={handleOpportunityChange}
                  placeholder="Selecionar oportunidade..."
                  searchPlaceholder="Buscar oportunidade..."
                  emptyMessage="Nenhuma oportunidade aberta."
                  aria-label="Oportunidade"
                />
              </div>
            )}
          </div>

          {/* SECTION 3: Title */}
          <div>
            <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Título
            </Label>
            <div className="relative">
              <Input
                {...register("title")}
                placeholder="Ex: Ligar para confirmar recebimento..."
                className={cn(
                  "pr-10 font-medium",
                  errors.title && "border-red-300 ring-red-100"
                )}
              />
              <button
                type="button"
                onClick={handleSmartSuggestion}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-brand transition-colors hover:bg-brand/10"
                title="Sugestão Menux AI"
              >
                <Sparkles className="h-4 w-4" />
              </button>
            </div>
            {errors.title && (
              <p className="mt-1 text-xs text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* SECTION 4: Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Data
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <Input
                  type="date"
                  {...register("date")}
                  className={cn(
                    "pl-9",
                    errors.date && "border-red-300 ring-red-100"
                  )}
                />
              </div>
              {errors.date && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.date.message}
                </p>
              )}
            </div>
            <div>
              <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Hora{" "}
                {isTimeRequired ? (
                  <span className="text-red-500">*</span>
                ) : (
                  <span className="font-normal normal-case text-zinc-400">
                    (opcional)
                  </span>
                )}
              </Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <Input
                  type="time"
                  {...register("time")}
                  className={cn(
                    "pl-9",
                    errors.time && "border-red-300 ring-red-100"
                  )}
                />
              </div>
              {errors.time && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.time.message}
                </p>
              )}
            </div>
          </div>

          {/* SECTION 5: Description */}
          <div>
            <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Descrição (Opcional)
            </Label>
            <Textarea
              {...register("description")}
              placeholder="Detalhes adicionais sobre a atividade..."
              className="min-h-[100px] resize-none"
              maxLength={2000}
            />
            <div className="mt-1 flex items-center justify-between">
              {errors.description ? (
                <p className="text-xs text-red-500">
                  {errors.description.message}
                </p>
              ) : (
                <span />
              )}
              <span className="text-[11px] text-zinc-400">
                {watchedDescription?.length ?? 0}/2000
              </span>
            </div>
          </div>

          {/* SECTION 6: Menux Intelligence Banner (conditional) */}
          {selectedClientId && type && (
            <div className="rounded-lg border border-indigo-100 bg-indigo-50/50 p-3">
              <div className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 text-indigo-500" />
                <div className="space-y-1">
                  <p className="text-xs font-medium text-indigo-900">
                    Sugestão Menux
                  </p>
                  <p className="text-[11px] leading-relaxed text-indigo-700">
                    Baseado no histórico, o melhor horário para ligar para este
                    cliente é entre <strong>14:00 e 16:00</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Submit error */}
          {submitError && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2">
              <p className="text-xs text-red-700">{submitError}</p>
            </div>
          )}
        </form>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-zinc-100 bg-zinc-50/50 p-4 md:px-6 md:py-4">
        <div className="flex items-center justify-end gap-3">
          <Button variant="ghost" onClick={onClose} disabled={isSaving}>
            Cancelar
          </Button>
          <Button
            type="submit"
            form="activity-form"
            className="min-w-[160px] bg-brand text-white hover:bg-brand/90"
            disabled={isSaving || saveSuccess || !isValid}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Criando...
              </>
            ) : saveSuccess ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Criado!
              </>
            ) : (
              "Criar Atividade"
            )}
          </Button>
        </div>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md gap-0 overflow-hidden border-0 p-0 shadow-2xl sm:max-w-xl">
          <DialogHeader className="border-b border-zinc-100 bg-white px-6 py-4">
            <DialogTitle className="flex items-center gap-2 font-heading text-lg font-semibold text-zinc-900">
              Nova Atividade
            </DialogTitle>
          </DialogHeader>
          {Content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="bottom"
        className="h-[90vh] gap-0 overflow-hidden rounded-t-[20px] p-0"
      >
        <SheetHeader className="border-b border-zinc-100 bg-white px-4 py-3 text-left">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-heading text-lg font-semibold text-zinc-900">
              Nova Atividade
            </SheetTitle>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-zinc-100"
            >
              <X className="h-5 w-5 text-zinc-500" />
            </button>
          </div>
        </SheetHeader>
        {Content}
      </SheetContent>
    </Sheet>
  );
}
