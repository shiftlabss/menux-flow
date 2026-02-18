"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  X,
  MapPin,
  Video,
  HelpCircle,
  Calendar,
  Clock,
  Users,
  Target,
  CheckCircle,
  Link as LinkIcon,
  Copy,
  Sparkles,
  ChevronDown,
  Loader2,
  Check,
  Plus,
  User,
  TriangleAlert,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { visitSchema, type VisitFormData } from "@/lib/validations/visit";
import { format } from "date-fns";
import type { Contact } from "@/types";

interface NewVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: VisitFormData) => void | Promise<void>;
  dealId: string;
  contacts: Contact[];
  onAddContact?: (contact: Partial<Contact>) => void;
}

const TYPE_OPTIONS = [
  { id: "presencial" as const, label: "Presencial", icon: MapPin },
  { id: "remoto" as const, label: "Remoto", icon: Video },
  { id: "outro" as const, label: "Outro", icon: HelpCircle },
];

const STATUS_OPTIONS = [
  { id: "agendada" as const, label: "Agendada" },
  { id: "realizada" as const, label: "Realizada" },
  { id: "cancelada" as const, label: "Cancelada" },
];

const DURATION_OPTIONS = ["15", "30", "45", "60", "90", "120"];

const REMOTE_PROVIDERS = [
  { id: "google-meet", label: "Google Meet" },
  { id: "zoom", label: "Zoom" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "outro", label: "Outro" },
];

const OUTCOME_OPTIONS = [
  { id: "realizada", label: "Realizada" },
  { id: "no-show", label: "No-show" },
  { id: "remarcada", label: "Remarcada" },
];

const RESPONSIBLE_OPTIONS = [
  { id: "u1", label: "Eu (Logado)", role: "Sales Executive" },
  { id: "u2", label: "Ana Costa", role: "Closer" },
  { id: "u3", label: "Carlos Mendes", role: "SDR" },
];

const canDelegateResponsible = false;

export function NewVisitModal({
  isOpen,
  onClose,
  onSave,
  dealId,
  contacts = [],
  onAddContact,
}: NewVisitModalProps) {
  void dealId;
  const [isSaving, setIsSaving] = React.useState(false);
  const [saveSuccess, setSaveSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [showCancellationConfirm, setShowCancellationConfirm] = React.useState(false);
  const [showRealizadaConfirm, setShowRealizadaConfirm] = React.useState(false);
  const [pendingSubmitData, setPendingSubmitData] = React.useState<VisitFormData | null>(null);
  const [lastSubmittedData, setLastSubmittedData] = React.useState<VisitFormData | null>(null);

  const [openParticipantCombobox, setOpenParticipantCombobox] = React.useState(false);
  const [isAddingContact, setIsAddingContact] = React.useState(false);
  const [isOptionalOpen, setIsOptionalOpen] = React.useState(false);
  const [isContactsLoading, setIsContactsLoading] = React.useState(false);
  const [isTeamLoading, setIsTeamLoading] = React.useState(false);

  const [newContactData, setNewContactData] = React.useState({
    nome: "",
    cargo: "",
    telefone: "",
    email: "",
  });

  const form = useForm<VisitFormData>({
    resolver: zodResolver(visitSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      type: "presencial",
      status: "agendada",
      duration: "60",
      platform: "google-meet",
      responsibleId: "u1",
      participants: [],
      objective: "",
      result: "",
      outcome: undefined,
      location: "",
      accessSearch: "",
      link: "",
      typeDescription: "",
      details: "",
      cancellationReason: "",
      date: "",
      time: "",
    },
  });

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isDirty, isValid, submitCount },
  } = form;

  const visitType = watch("type");
  const visitStatus = watch("status");
  const selectedDate = watch("date");
  const selectedTime = watch("time");
  const selectedDuration = watch("duration");
  const selectedParticipants = watch("participants") || [];
  const selectedResponsibleId = watch("responsibleId");
  const selectedProvider = watch("platform");
  const selectedLocation = watch("location");
  const selectedMeetingLink = watch("link");
  const selectedTypeDescription = watch("typeDescription");

  const getContactInitials = React.useCallback((name?: string) => {
    if (!name) return "??";
    const parts = name
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (parts.length === 0) return "??";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }, []);

  const formatContactRole = React.useCallback((role?: string) => {
    if (!role) return "Sem cargo definido";
    return role
      .replace(/-/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      setSaveSuccess(false);
      setIsSaving(false);
      setSubmitError(null);
      setShowCancellationConfirm(false);
      setShowRealizadaConfirm(false);
      setPendingSubmitData(null);
      setLastSubmittedData(null);
      setIsOptionalOpen(false);
      setIsAddingContact(false);
      setOpenParticipantCombobox(false);
      form.reset();

      setIsTeamLoading(true);
      setIsContactsLoading(true);
      const timeout = setTimeout(() => {
        setIsTeamLoading(false);
        setIsContactsLoading(false);
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, form]);

  // --- Auto-select newly created contact logic ---
  const prevContactsLengthRef = React.useRef(contacts.length);

  React.useEffect(() => {
    // If contacts list grew, it means a new contact was added
    if (contacts.length > prevContactsLengthRef.current) {
      // Find the new contact (assuming it's at the end or we can diff)
      // Since we don't know the ID structure for sure, let's take the last one or diff
      const newContact = contacts[contacts.length - 1];

      if (newContact) {
        // Auto-select it
        const currentParticipants = form.getValues("participants") || [];
        if (!currentParticipants.includes(newContact.id)) {
          form.setValue("participants", [...currentParticipants, newContact.id], {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
        // Switch back to list view if we were adding
        setIsAddingContact(false);
      }
    }
    // Update ref
    prevContactsLengthRef.current = contacts.length;
  }, [contacts, form]);
  // -----------------------------------------------

  React.useEffect(() => {
    if (visitType === "presencial") {
      setValue("platform", "google-meet", { shouldValidate: false });
      setValue("link", "", { shouldValidate: false });
      setValue("typeDescription", "", { shouldValidate: false });
      setValue("details", "", { shouldValidate: false });
    }
    if (visitType === "remoto") {
      setValue("location", "", { shouldValidate: false });
      setValue("accessSearch", "", { shouldValidate: false });
      setValue("typeDescription", "", { shouldValidate: false });
      setValue("details", "", { shouldValidate: false });
      if (!watch("platform")) {
        setValue("platform", "google-meet", { shouldValidate: false });
      }
    }
    if (visitType === "outro") {
      setValue("location", "", { shouldValidate: false });
      setValue("accessSearch", "", { shouldValidate: false });
      setValue("platform", "google-meet", { shouldValidate: false });
      setValue("link", "", { shouldValidate: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visitType, setValue]);

  React.useEffect(() => {
    if (visitStatus !== "realizada") {
      setValue("outcome", undefined, { shouldValidate: false });
      setValue("result", "", { shouldValidate: false });
    }
    if (visitStatus !== "cancelada") {
      setValue("cancellationReason", "", { shouldValidate: false });
    }
  }, [visitStatus, setValue]);

  const suggestTime = React.useCallback(
    (time: string) => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const year = tomorrow.getFullYear();
      const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
      const day = String(tomorrow.getDate()).padStart(2, "0");
      setValue("date", `${year}-${month}-${day}`);
      setValue("time", time);
      void trigger(["date", "time"]);
    },
    [setValue, trigger]
  );

  const copyConfirmationMessage = React.useCallback(() => {
    const text = `Olá! Confirmando nossa ${visitType === "presencial" ? "visita" : "reunião"} para ${selectedDate ? format(new Date(selectedDate), "dd/MM") : "dia a confirmar"} às ${selectedTime || "horário a confirmar"}.`;
    void navigator.clipboard.writeText(text);
  }, [visitType, selectedDate, selectedTime]);

  const missingRequiredItems = React.useMemo(() => {
    const missing: string[] = [];

    if (!selectedResponsibleId) missing.push("Responsável");

    if (visitStatus === "agendada") {
      if (!selectedDate) missing.push("Data");
      if (!selectedTime) missing.push("Hora");
      if (!selectedDuration) missing.push("Duração");
    }

    if (visitType === "presencial" && (!selectedLocation || selectedLocation.trim().length < 3)) {
      missing.push("Local");
    }

    if (visitType === "remoto") {
      if (!selectedProvider) missing.push("Plataforma");
      if (!selectedMeetingLink?.trim()) {
        missing.push("Link da reunião");
      }
    }

    if (visitType === "outro" && (!selectedTypeDescription || selectedTypeDescription.trim().length < 3)) {
      missing.push("Detalhe do tipo");
    }

    if (visitStatus === "realizada") {
      if (!watch("outcome")) missing.push("Resultado da visita");
      if (!watch("result") || (watch("result")?.trim().length || 0) < 10) {
        missing.push("Nota do resultado");
      }
    }

    if (visitStatus === "cancelada" && !watch("cancellationReason")?.trim()) {
      missing.push("Motivo do cancelamento");
    }

    return missing;
  }, [
    selectedResponsibleId,
    visitStatus,
    selectedDate,
    selectedTime,
    selectedDuration,
    visitType,
    selectedLocation,
    selectedProvider,
    selectedMeetingLink,
    selectedTypeDescription,
    watch,
  ]);

  const hasBlockingMissing = missingRequiredItems.length > 0;
  const hasValidationBanner = submitCount > 0 && Object.keys(errors).length > 1 && !submitError;

  const executeSave = React.useCallback(
    async (data: VisitFormData) => {
      setIsSaving(true);
      setSubmitError(null);
      setLastSubmittedData(data);

      try {
        await new Promise((resolve) => setTimeout(resolve, 700));
        await Promise.resolve(onSave(data));
        setSaveSuccess(true);

        setTimeout(() => {
          onClose();
        }, 450);
      } catch {
        setSubmitError("Não consegui salvar agora. Verifique sua conexão e tente novamente.");
      } finally {
        setIsSaving(false);
      }
    },
    [onClose, onSave]
  );

  const onValidSubmit = React.useCallback(
    async (data: VisitFormData) => {
      if (data.status === "realizada") {
        setPendingSubmitData(data);
        setShowRealizadaConfirm(true);
        return;
      }
      await executeSave(data);
    },
    [executeSave]
  );

  const onInvalidSubmit = React.useCallback(() => {
    const firstErrorField = Object.keys(form.formState.errors)[0];
    if (!firstErrorField) return;

    const element = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement | null;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.focus();
    }
  }, [form.formState.errors]);

  const handlePrimarySubmit = handleSubmit(onValidSubmit, onInvalidSubmit);

  const handleRetry = React.useCallback(async () => {
    if (!lastSubmittedData) return;
    await executeSave(lastSubmittedData);
  }, [executeSave, lastSubmittedData]);

  const handleCreateContact = React.useCallback(() => {
    if (!newContactData.nome.trim()) return;

    const newContact: Partial<Contact> = {
      ...newContactData,
      isDecisionMaker: false,
    };

    onAddContact?.(newContact);
    setNewContactData({ nome: "", cargo: "", telefone: "", email: "" });
    // Note: setIsAddingContact(false) is handled by the useEffect monitoring contacts length
  }, [newContactData, onAddContact]);

  const handleClose = React.useCallback(() => {
    if (isDirty && !showCancellationConfirm && !saveSuccess) {
      setShowCancellationConfirm(true);
      return;
    }

    setShowCancellationConfirm(false);
    setShowRealizadaConfirm(false);
    setPendingSubmitData(null);
    onClose();
  }, [isDirty, onClose, saveSuccess, showCancellationConfirm]);

  const handleDiscard = React.useCallback(() => {
    setShowCancellationConfirm(false);
    setShowRealizadaConfirm(false);
    setPendingSubmitData(null);
    onClose();
  }, [onClose]);

  const summaryRows = React.useMemo(
    () => [
      {
        label: "Tipo",
        value:
          TYPE_OPTIONS.find((option) => option.id === visitType)?.label ?? "Não definido",
      },
      {
        label: "Status",
        value:
          STATUS_OPTIONS.find((option) => option.id === visitStatus)?.label ??
          "Não definido",
      },
      {
        label: "Quando",
        value:
          selectedDate && selectedTime
            ? `${format(new Date(`${selectedDate}T${selectedTime}`), "dd/MM/yyyy HH:mm")}`
            : "A definir",
      },
      {
        label: "Duração",
        value: selectedDuration ? `${selectedDuration} min` : "A definir",
      },
      {
        label: visitType === "remoto" ? "Link" : "Local",
        value:
          visitType === "remoto"
            ? selectedMeetingLink || "Não informado"
            : visitType === "presencial"
              ? selectedLocation || "Não informado"
              : selectedTypeDescription || "Não informado",
      },
      {
        label: "Responsável",
        value:
          RESPONSIBLE_OPTIONS.find((user) => user.id === selectedResponsibleId)?.label ??
          "Não definido",
      },
      {
        label: "Participantes",
        value:
          selectedParticipants.length > 0
            ? `${selectedParticipants.length} selecionado${selectedParticipants.length > 1 ? "s" : ""}`
            : "Nenhum selecionado",
      },
    ],
    [
      selectedDate,
      selectedDuration,
      selectedLocation,
      selectedMeetingLink,
      selectedParticipants.length,
      selectedResponsibleId,
      selectedTime,
      selectedTypeDescription,
      visitStatus,
      visitType,
    ]
  );

  const content = (
    <div className="flex h-full flex-col bg-white">
      <div className="sticky top-0 z-20 flex-none border-b border-zinc-100 bg-white px-8 py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-semibold text-zinc-900">
              {saveSuccess ? (
                <span className="flex items-center gap-2 text-emerald-600 animate-in fade-in slide-in-from-bottom-2">
                  <CheckCircle className="h-5 w-5" /> Visita registrada
                </span>
              ) : (
                <>
                  <Calendar className="h-5 w-5 text-brand" /> Nova Visita
                </>
              )}
            </h2>
            {!saveSuccess && (
              <p className="text-sm text-zinc-500">
                Registre uma visita ou reunião para este cliente
              </p>
            )}
          </div>
          <Button variant="ghost" size="icon" onClick={handleClose} title="Fechar">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {(hasValidationBanner || submitError) && (
          <div
            className={cn(
              "mt-3 rounded-xl border px-3 py-2 text-xs",
              submitError
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-amber-200 bg-amber-50 text-amber-700"
            )}
          >
            {submitError || "Revise os campos destacados para continuar."}
          </div>
        )}
      </div>

      <div className="flex-1 space-y-8 overflow-y-auto px-8 py-8">
        <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <Label className="text-[11px] uppercase tracking-[0.08em] text-zinc-500">Tipo da visita</Label>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <div className="inline-flex rounded-xl border border-zinc-200 bg-zinc-50 p-1">
                    {TYPE_OPTIONS.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => field.onChange(type.id)}
                        className={cn(
                          "flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium transition-all duration-[120ms]",
                          field.value === type.id
                            ? "bg-white text-brand shadow-sm ring-1 ring-black/5"
                            : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
                        )}
                      >
                        <type.icon className="h-4 w-4" />
                        {type.label}
                      </button>
                    ))}
                  </div>
                )}
              />
            </div>

            <div className="w-full max-w-[240px] space-y-1.5">
              <Label>
                Status <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className={cn(errors.status && "border-red-300 ring-red-100")}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map((status) => (
                        <SelectItem key={status.id} value={status.id}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.status && <p className="text-xs text-red-500">{errors.status.message}</p>}
            </div>
          </div>

          {visitStatus === "cancelada" && (
            <div className="mt-4 animate-in fade-in slide-in-from-top-2 space-y-1.5">
              <Label>
                Motivo do cancelamento <span className="text-red-500">*</span>
              </Label>
              <Input
                {...form.register("cancellationReason")}
                placeholder="Ex: Cliente pediu para remarcar"
                className={cn(errors.cancellationReason && "border-red-300")}
              />
              {errors.cancellationReason && (
                <p className="text-xs text-red-500">{errors.cancellationReason.message}</p>
              )}
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2 border-b border-zinc-100 pb-2">
            <Clock className="h-4 w-4 text-zinc-400" />
            <h4 className="text-sm font-semibold text-zinc-700">Quando</h4>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-1.5">
              <Label>
                Data {visitStatus === "agendada" && <span className="text-red-500">*</span>}
              </Label>
              <Input type="date" {...form.register("date")} className={cn(errors.date && "border-red-300")} />
              {errors.date && <p className="text-xs text-red-500">{errors.date.message}</p>}
            </div>

            <div className="space-y-1.5">
              <Label>
                Hora {visitStatus === "agendada" && <span className="text-red-500">*</span>}
              </Label>
              <Input type="time" {...form.register("time")} className={cn(errors.time && "border-red-300")} />
              {errors.time && <p className="text-xs text-red-500">{errors.time.message}</p>}
            </div>

            <div className="space-y-1.5">
              <Label>
                Duração {visitStatus === "agendada" && <span className="text-red-500">*</span>}
              </Label>
              <Controller
                name="duration"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className={cn(errors.duration && "border-red-300")}>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      {DURATION_OPTIONS.map((duration) => (
                        <SelectItem key={duration} value={duration}>
                          {duration} min
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.duration && <p className="text-xs text-red-500">{errors.duration.message}</p>}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2 border-b border-zinc-100 pb-2">
            <Users className="h-4 w-4 text-zinc-400" />
            <h4 className="text-sm font-semibold text-zinc-700">Quem</h4>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>
                Responsável <span className="text-red-500">*</span>
              </Label>
              {isTeamLoading ? (
                <div className="h-10 w-full animate-pulse rounded-md border border-zinc-200 bg-zinc-100" />
              ) : (
                <Controller
                  name="responsibleId"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      disabled={!canDelegateResponsible}
                    >
                      <SelectTrigger className={cn(errors.responsibleId && "border-red-300")}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {RESPONSIBLE_OPTIONS.map((member) => (
                          <SelectItem key={member.id} value={member.id}>
                            <div className="flex items-center gap-2">
                              <span>{member.label}</span>
                              <span className="text-[10px] text-zinc-500">{member.role}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              )}
              {!canDelegateResponsible && (
                <p className="text-[11px] text-zinc-500">Delegação desabilitada para seu perfil.</p>
              )}
              {errors.responsibleId && <p className="text-xs text-red-500">{errors.responsibleId.message}</p>}
            </div>

            <div className="space-y-1.5">
              <Label>Participantes (Clientes)</Label>
              {isContactsLoading ? (
                <div className="h-10 w-full animate-pulse rounded-md border border-zinc-200 bg-zinc-100" />
              ) : (
                <Controller
                  name="participants"
                  control={control}
                  render={({ field }) => (
                    <Popover open={openParticipantCombobox} onOpenChange={setOpenParticipantCombobox}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={openParticipantCombobox}
                          className="h-10 w-full justify-between px-3 font-normal text-zinc-600"
                        >
                          {field.value?.length
                            ? `${field.value.length} participante${field.value.length > 1 ? "s" : ""} selecionado${field.value.length > 1 ? "s" : ""}`
                            : "Selecionar participantes..."}
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-[calc(100vw-4rem)] sm:w-[340px] md:w-[var(--radix-popover-trigger-width)] min-w-[300px] overflow-hidden rounded-2xl border border-zinc-200/90 p-0 shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                        align="start"
                      >
                        {isAddingContact ? (
                          <div className="space-y-3 p-3 animate-in slide-in-from-right-2 duration-200">
                            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                              <h4 className="text-sm font-semibold text-zinc-900">Novo contato</h4>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0 text-zinc-500 hover:text-zinc-900"
                                onClick={() => setIsAddingContact(false)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <Input
                                placeholder="Nome *"
                                value={newContactData.nome}
                                onChange={(e) =>
                                  setNewContactData((prev) => ({ ...prev, nome: e.target.value }))
                                }
                                className="h-8 text-sm"
                              />
                              <Input
                                placeholder="Cargo"
                                value={newContactData.cargo}
                                onChange={(e) =>
                                  setNewContactData((prev) => ({ ...prev, cargo: e.target.value }))
                                }
                                className="h-8 text-sm"
                              />
                              <div className="grid grid-cols-2 gap-2">
                                <Input
                                  placeholder="Telefone"
                                  value={newContactData.telefone}
                                  onChange={(e) =>
                                    setNewContactData((prev) => ({ ...prev, telefone: e.target.value }))
                                  }
                                  className="h-8 text-sm"
                                />
                                <Input
                                  placeholder="Email"
                                  value={newContactData.email}
                                  onChange={(e) =>
                                    setNewContactData((prev) => ({ ...prev, email: e.target.value }))
                                  }
                                  className="h-8 text-sm"
                                />
                              </div>
                              <Button
                                size="sm"
                                className="mt-2 w-full"
                                disabled={!newContactData.nome.trim()}
                                onClick={handleCreateContact}
                              >
                                Cadastrar
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <Command className="bg-white">
                            <div className="border-b border-zinc-100 px-3 py-2">
                              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
                                Participantes
                              </p>
                              <p className="font-body text-xs text-zinc-500">
                                {(field.value || []).length} selecionado
                                {(field.value || []).length === 1 ? "" : "s"}
                              </p>
                            </div>

                            <div className="px-3 pb-2 pt-2">
                              <CommandInput
                                placeholder="Buscar contato..."
                                className="h-9 rounded-xl border border-zinc-200 bg-zinc-50/60 px-2 text-sm"
                              />
                            </div>

                            <CommandList className="max-h-[260px] px-2 pb-2">
                              <CommandEmpty className="py-8 text-center font-body text-xs text-zinc-500">
                                Nenhum contato encontrado.
                              </CommandEmpty>

                              <CommandGroup className="space-y-1">
                                {contacts.map((contact) => {
                                  const selected = (field.value || []).includes(contact.id);
                                  return (
                                    <CommandItem
                                      key={contact.id}
                                      value={`${contact.nome} ${contact.cargo || ""}`}
                                      className={cn(
                                        "group flex cursor-pointer items-center gap-3 rounded-xl border px-2.5 py-2.5 transition-all duration-[140ms]",
                                        selected
                                          ? "border-brand/30 bg-brand/10 shadow-[0_6px_14px_rgba(37,99,235,0.14)]"
                                          : "border-transparent hover:border-zinc-200 hover:bg-zinc-50"
                                      )}
                                      onSelect={() => {
                                        const current = field.value || [];
                                        const isSelected = current.includes(contact.id);
                                        if (isSelected) {
                                          field.onChange(current.filter((id) => id !== contact.id));
                                        } else {
                                          field.onChange([...current, contact.id]);
                                        }
                                      }}
                                    >
                                      <div
                                        className={cn(
                                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-body text-[11px] font-semibold transition-colors",
                                          selected
                                            ? "border-brand/35 bg-brand text-white"
                                            : "border-zinc-200 bg-white text-zinc-600"
                                        )}
                                      >
                                        {getContactInitials(contact.nome)}
                                      </div>

                                      <div className="min-w-0 flex-1">
                                        <p
                                          className={cn(
                                            "truncate font-body text-sm font-medium",
                                            selected ? "text-zinc-900" : "text-zinc-800"
                                          )}
                                        >
                                          {contact.nome}
                                        </p>
                                        <p className="truncate font-body text-[11px] text-zinc-500">
                                          {formatContactRole(contact.cargo)}
                                        </p>
                                      </div>

                                      <div
                                        className={cn(
                                          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all",
                                          selected
                                            ? "border-brand bg-brand text-white"
                                            : "border-zinc-300 bg-white text-zinc-400 opacity-0 group-hover:opacity-100"
                                        )}
                                      >
                                        <Check className="h-3 w-3" />
                                      </div>
                                    </CommandItem>
                                  );
                                })}
                              </CommandGroup>

                              <CommandSeparator className="mx-1 my-2" />
                              <CommandGroup>
                                <CommandItem
                                  onSelect={() => setIsAddingContact(true)}
                                  className="group flex cursor-pointer items-center gap-2.5 rounded-xl border border-dashed border-zinc-300 bg-zinc-50/50 px-2.5 py-2.5 text-zinc-600 transition-colors duration-[120ms] hover:border-brand/40 hover:bg-brand/5 hover:text-brand"
                                >
                                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-400 group-hover:border-brand/30 group-hover:text-brand">
                                    <Plus className="h-4 w-4" />
                                  </span>
                                  <div className="flex min-w-0 flex-col">
                                    <span className="font-body text-sm font-semibold">
                                      Cadastrar novo contato
                                    </span>
                                    <span className="font-body text-[11px] text-zinc-400 group-hover:text-brand/80">
                                      Adicione e selecione sem sair da visita
                                    </span>
                                  </div>
                                </CommandItem>
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        )}
                      </PopoverContent>
                    </Popover>
                  )}
                />
              )}

              {selectedParticipants.length === 0 ? (
                <p className="text-[11px] text-amber-600">
                  Nenhum participante cliente selecionado. Recomendado incluir ao menos 1 contato.
                </p>
              ) : (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedParticipants.map((participantId) => {
                    const contact = contacts.find((item) => item.id === participantId);
                    if (!contact) return null;
                    return (
                      <Badge key={participantId} variant="outline" className="h-6 rounded-full border-zinc-200 text-[11px]">
                        {contact.nome}
                      </Badge>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2 border-b border-zinc-100 pb-2">
            {visitType === "presencial" ? (
              <MapPin className="h-4 w-4 text-zinc-400" />
            ) : visitType === "remoto" ? (
              <LinkIcon className="h-4 w-4 text-zinc-400" />
            ) : (
              <HelpCircle className="h-4 w-4 text-zinc-400" />
            )}
            <h4 className="text-sm font-semibold text-zinc-700">Onde</h4>
          </div>

          {visitType === "presencial" && (
            <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
              <div className="space-y-1.5">
                <Label>
                  Local <span className="text-red-500">*</span>
                </Label>
                <Input
                  {...form.register("location")}
                  placeholder="Endereço, unidade ou ponto de referência"
                  className={cn(errors.location && "border-red-300")}
                />
                {errors.location && <p className="text-xs text-red-500">{errors.location.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label className="text-zinc-500">Observação de acesso (Opcional)</Label>
                <Textarea
                  {...form.register("accessSearch")}
                  placeholder="Instruções para portaria, estacionamento..."
                  className="h-20 resize-none"
                />
              </div>
            </div>
          )}

          {visitType === "remoto" && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 animate-in fade-in slide-in-from-top-2">
              <div className="space-y-1.5">
                <Label>
                  Plataforma <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="platform"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className={cn(errors.platform && "border-red-300")}>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        {REMOTE_PROVIDERS.map((provider) => (
                          <SelectItem key={provider.id} value={provider.id}>
                            {provider.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.platform && <p className="text-xs text-red-500">{errors.platform.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label>
                  Link da reunião <span className="text-red-500">*</span>
                </Label>
                <Input
                  {...form.register("link")}
                  placeholder="https://meet.google.com/..."
                  className={cn(errors.link && "border-red-300")}
                />
                {errors.link && <p className="text-xs text-red-500">{errors.link.message}</p>}
              </div>
            </div>
          )}

          {visitType === "outro" && (
            <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
              <div className="space-y-1.5">
                <Label>
                  Tipo <span className="text-red-500">*</span>
                </Label>
                <Input
                  {...form.register("typeDescription")}
                  placeholder="Ex: Ligação, WhatsApp, Evento"
                  className={cn(errors.typeDescription && "border-red-300")}
                />
                {errors.typeDescription && (
                  <p className="text-xs text-red-500">{errors.typeDescription.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label>Detalhe (Opcional)</Label>
                <Textarea
                  {...form.register("details")}
                  className="h-20 resize-none"
                  placeholder="Contexto adicional desta interação"
                />
              </div>
            </div>
          )}
        </section>



        {visitStatus === "realizada" && (
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-4 animate-in fade-in slide-in-from-top-2">
            <div className="mb-3 flex items-center gap-2 border-b border-zinc-100 pb-2">
              <Target className="h-4 w-4 text-zinc-400" />
              <h4 className="text-sm font-semibold text-zinc-700">Resultado</h4>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label>
                  Resultado da visita <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="outcome"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className={cn(errors.outcome && "border-red-300")}>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        {OUTCOME_OPTIONS.map((outcome) => (
                          <SelectItem key={outcome.id} value={outcome.id}>
                            {outcome.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.outcome && <p className="text-xs text-red-500">{errors.outcome.message}</p>}
              </div>

              <div className="space-y-1.5 md:col-span-1">
                <Label>
                  Nota do resultado <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  {...form.register("result")}
                  placeholder="Resuma o que aconteceu e próximos passos (mín. 10 caracteres)"
                  className={cn("h-24 resize-none", errors.result && "border-red-300")}
                />
                {errors.result && <p className="text-xs text-red-500">{errors.result.message}</p>}
              </div>
            </div>
          </section>
        )}

        <section className="rounded-2xl border border-zinc-200/80 bg-white p-4">
          <button
            type="button"
            className="flex w-full items-center justify-between"
            onClick={() => setIsOptionalOpen((prev) => !prev)}
          >
            <span className="text-sm font-semibold text-zinc-700">Observações</span>
            <span className="text-xs text-zinc-500">{isOptionalOpen ? "Ocultar" : "Mostrar"}</span>
          </button>

          {isOptionalOpen && (
            <div className="mt-3 space-y-1.5 animate-in fade-in slide-in-from-top-2">
              <Label>Notas (Opcional)</Label>
              <Textarea
                {...form.register("objective")}
                placeholder="Contexto para o time, objeções, detalhes importantes..."
                className="h-24 resize-none"
              />
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-brand/10 bg-brand/5 p-4 space-y-3">
          <div className="flex items-center gap-2 text-brand">
            <Sparkles className="h-4 w-4 fill-brand/20" />
            <h4 className="text-xs font-semibold uppercase tracking-wider">Menux Intelligence</h4>
          </div>

          {!selectedDate && (
            <div className="space-y-2">
              <p className="text-xs text-zinc-600">Sugestão de horários para esta oportunidade:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "09:00",
                  "14:30",
                  "16:00",
                ].map((time) => (
                  <Badge
                    key={time}
                    variant="outline"
                    className="cursor-pointer border-brand/20 text-zinc-600 transition-colors hover:bg-brand/10 hover:text-brand"
                    onClick={() => suggestTime(time)}
                  >
                    Amanhã, {time}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {selectedDate && selectedTime && (
            <div className="space-y-2">
              <p className="text-xs text-zinc-600">Mensagem de confirmação sugerida:</p>
              <div className="flex items-center gap-2 rounded border border-brand/10 bg-white p-2 text-xs text-zinc-500 italic">
                <span className="flex-1 truncate">
                  Olá! Confirmando nossa {visitType === "presencial" ? "visita" : "reunião"} para {format(new Date(selectedDate), "dd/MM")} às {selectedTime}...
                </span>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={copyConfirmationMessage} title="Copiar">
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4">
          <div className="mb-3 flex items-center gap-2">
            <User className="h-4 w-4 text-zinc-500" />
            <h4 className="text-sm font-semibold text-zinc-700">Resumo antes de salvar</h4>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {summaryRows.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-3 rounded-lg border border-zinc-200/80 bg-white px-3 py-2">
                <span className="text-xs text-zinc-500">{row.label}</span>
                <span className="max-w-[60%] truncate text-xs font-medium text-zinc-800">{row.value}</span>
              </div>
            ))}
          </div>

          {missingRequiredItems.length > 0 && (
            <div className="mt-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
              <div className="flex items-center gap-1.5 font-medium">
                <TriangleAlert className="h-3.5 w-3.5" />
                Faltando para salvar
              </div>
              <p className="mt-1">
                {missingRequiredItems.join(" • ")}
              </p>
            </div>
          )}
        </section>
      </div>

      <div className="flex-none border-t border-zinc-100 bg-white px-8 py-6 z-10">
        {showCancellationConfirm ? (
          <div className="flex w-full items-center justify-end gap-2 animate-in fade-in slide-in-from-right-2">
            <span className="mr-2 text-xs text-zinc-500">Alterações não salvas. Descartar?</span>
            <Button variant="outline" size="sm" onClick={() => setShowCancellationConfirm(false)}>
              Voltar
            </Button>
            <Button variant="destructive" size="sm" onClick={handleDiscard}>
              Descartar
            </Button>
          </div>
        ) : showRealizadaConfirm && pendingSubmitData ? (
          <div className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 animate-in fade-in slide-in-from-bottom-2 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-amber-700">
              Você selecionou status <strong>Realizada</strong>. Confirmar criação agora com este status?
            </p>
            <div className="flex items-center justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setShowRealizadaConfirm(false);
                  setPendingSubmitData(null);
                }}
              >
                Revisar
              </Button>
              <Button
                size="sm"
                onClick={async () => {
                  setShowRealizadaConfirm(false);
                  await executeSave(pendingSubmitData);
                  setPendingSubmitData(null);
                }}
              >
                Confirmar realizada
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {submitError && (
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2">
                <p className="text-xs text-red-700">{submitError}</p>
                <Button variant="outline" size="sm" className="h-7" onClick={handleRetry} disabled={!lastSubmittedData || isSaving}>
                  Tentar novamente
                </Button>
              </div>
            )}

            {!isValid && (
              <p className="text-xs text-zinc-500">
                Complete os campos obrigatórios para liberar o salvamento.
              </p>
            )}

            <div className="flex items-center justify-end gap-2">
              <Button variant="ghost" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                onClick={handlePrimarySubmit}
                disabled={isSaving || saveSuccess || hasBlockingMissing}
                className="min-w-[140px]"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...
                  </>
                ) : saveSuccess ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" /> Salvo
                  </>
                ) : (
                  "Salvar Visita"
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent showCloseButton={false} className="flex max-h-[90vh] w-full sm:max-w-2xl md:max-w-3xl flex-col gap-0 p-0 overflow-hidden bg-white border-zinc-200/50 shadow-2xl sm:rounded-2xl">
        {content}
      </DialogContent>
    </Dialog>
  );
}
