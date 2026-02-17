
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
    User,
    Users,
    Target,
    CheckCircle,
    AlertCircle,
    Link as LinkIcon,
    Copy,
    Sparkles,
    ChevronDown,

    Loader2,
    Check,
    Plus,
    Briefcase,
    Phone,
    Mail,
} from "lucide-react";
import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
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
    onSave: (data: VisitFormData) => void;
    dealId: string;
    contacts: Contact[];
    onAddContact?: (contact: Partial<Contact>) => void;
}

export function NewVisitModal({
    isOpen,
    onClose,
    onSave,
    dealId,
    contacts = [],
    onAddContact,
}: NewVisitModalProps) {
    const [isSaving, setIsSaving] = React.useState(false);
    const [saveSuccess, setSaveSuccess] = React.useState(false);
    const [showCancellationConfirm, setShowCancellationConfirm] = React.useState(false);

    // Participant Select State
    const [openParticipantCombobox, setOpenParticipantCombobox] = React.useState(false);
    const [isAddingContact, setIsAddingContact] = React.useState(false);
    const [newContactData, setNewContactData] = React.useState({
        nome: "",
        cargo: "",
        telefone: "",
        email: "",
    });

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

    const form = useForm<VisitFormData>({
        resolver: zodResolver(visitSchema),
        defaultValues: {
            type: "presencial",
            status: "agendada",
            duration: "60",
            responsibleId: "u1", // Todo: get from auth context
            participants: [],
            createLinkLater: false,
            alreadyHappened: false,
        },
    });

    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isDirty },
        trigger,
    } = form;

    const visitType = watch("type");
    const visitStatus = watch("status");
    const alreadyHappened = watch("alreadyHappened");
    const selectedDate = watch("date");
    const selectedTime = watch("time");

    // Reset state when opening
    React.useEffect(() => {
        if (isOpen) {
            setSaveSuccess(false);
            setIsSaving(false);
            form.reset();
        }
    }, [isOpen, form]);

    // Status auto-update based on "Already Happened"
    React.useEffect(() => {
        if (alreadyHappened) {
            setValue("status", "realizada");
        } else if (visitStatus === "realizada" && !alreadyHappened) {
            // If user manually selected "Realizada", we might want to toggle this back?
            // Leaving flexible for now.
        }
    }, [alreadyHappened, setValue, visitStatus]);

    // Menux Intelligence Suggestions
    const suggestTime = (time: string) => {
        const today = new Date().toISOString().split('T')[0];
        setValue("date", today);
        setValue("time", time);
        trigger(["date", "time"]);
    };

    const copyConfirmationMessage = () => {
        const text = `Olá! Confirmando nossa reunião de ${visitType === 'remoto' ? 'videoconferência' : 'visita'} para ${selectedDate ? format(new Date(selectedDate), 'dd/MM') : 'dia tal'} às ${selectedTime || 'hora tal'}.`;
        navigator.clipboard.writeText(text);
        // Could show a toast here or small inline badge
    };


    const onSubmit = async (data: VisitFormData) => {
        setIsSaving(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Success feedback
        setSaveSuccess(true);

        setTimeout(() => {
            onSave(data);
            onClose();
        }, 600);
    };

    const handleCreateContact = () => {
        if (!newContactData.nome) return;

        const newContact: Partial<Contact> = {
            ...newContactData,
            isDecisionMaker: false,
        };

        onAddContact?.(newContact);

        // Reset and close specific modes
        setNewContactData({ nome: "", cargo: "", telefone: "", email: "" });
        setIsAddingContact(false);
        // Note: The new contact should be added to 'contacts' prop by parent, 
        // triggering re-render. We might want to auto-select it here if we could get its ID back.
        // For now, simpler flow.
    };

    const handleClose = () => {
        if (isDirty && !showCancellationConfirm && !saveSuccess) {
            setShowCancellationConfirm(true);
        } else {
            setShowCancellationConfirm(false);
            onClose();
        }
    };

    const handleDiscard = () => {
        setShowCancellationConfirm(false);
        onClose();
    }


    const Content = (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex-none px-6 py-4 border-b border-zinc-100 flex items-center justify-between sticky top-0 bg-white z-10">
                <div>
                    <h2 className="text-lg font-semibold text-zinc-900 flex items-center gap-2">
                        {saveSuccess ? (
                            <span className="flex items-center gap-2 text-emerald-600 animate-in fade-in slide-in-from-bottom-2">
                                <CheckCircle className="w-5 h-5" /> Visita Registrada
                            </span>
                        ) : (
                            <>
                                <Calendar className="w-5 h-5 text-brand" /> Nova Visita
                            </>
                        )}
                    </h2>
                    {!saveSuccess && <p className="text-sm text-zinc-500">Registre uma visita ou reunião para este cliente</p>}
                </div>
                <Button variant="ghost" size="icon" onClick={handleClose}>
                    <X className="w-5 h-5" />
                </Button>
            </div>

            {/* Body - Scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">

                {/* SECTION A: Type & Status */}
                <section className="space-y-4">
                    <Controller
                        name="type"
                        control={control}
                        render={({ field }) => (
                            <div className="grid grid-cols-3 gap-2 bg-zinc-50 p-1 rounded-lg border border-zinc-200">
                                {[
                                    { id: "presencial", label: "Presencial", icon: MapPin },
                                    { id: "remoto", label: "Remoto", icon: Video },
                                    { id: "outro", label: "Outro", icon: HelpCircle },
                                ].map((type) => (
                                    <button
                                        key={type.id}
                                        type="button"
                                        onClick={() => field.onChange(type.id)}
                                        className={cn(
                                            "flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all",
                                            field.value === type.id
                                                ? "bg-white text-brand shadow-sm ring-1 ring-black/5"
                                                : "text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100"
                                        )}
                                    >
                                        <type.icon className="w-4 h-4" />
                                        {type.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label>Status</Label>
                            <Controller
                                name="status"
                                control={control}
                                render={({ field }) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className={cn(errors.status && "border-red-300 ring-red-100")}>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="agendada">Agendada</SelectItem>
                                            <SelectItem value="realizada">Realizada</SelectItem>
                                            <SelectItem value="cancelada">Cancelada</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.status && <p className="text-xs text-red-500">{errors.status.message}</p>}
                        </div>

                        {visitStatus === "cancelada" && (
                            <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                                <Label>Motivo do Cancelamento</Label>
                                <Input
                                    {...form.register("cancellationReason")}
                                    placeholder="Ex: Cliente desmarcou"
                                    className={cn(errors.cancellationReason && "border-red-300")}
                                />
                                {errors.cancellationReason && <p className="text-xs text-red-500">{errors.cancellationReason.message}</p>}
                            </div>
                        )}
                    </div>
                </section>

                {/* SECTION B: Date & Time */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                        <Clock className="w-4 h-4 text-zinc-400" />
                        <h4 className="text-sm font-semibold text-zinc-700">Data e Hora</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                            <Label>Data</Label>
                            <Input
                                type="date"
                                {...form.register("date")}
                                className={cn(errors.date && "border-red-300")}
                            />
                            {errors.date && <p className="text-xs text-red-500">{errors.date.message}</p>}
                        </div>
                        <div className="space-y-1.5">
                            <Label>Hora</Label>
                            <Input
                                type="time"
                                {...form.register("time")}
                                className={cn(errors.time && "border-red-300")}
                            />
                            {errors.time && <p className="text-xs text-red-500">{errors.time.message}</p>}
                        </div>
                        <div className="space-y-1.5">
                            <Label>Duração</Label>
                            <Controller
                                name="duration"
                                control={control}
                                render={({ field }) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="15">15 min</SelectItem>
                                            <SelectItem value="30">30 min</SelectItem>
                                            <SelectItem value="45">45 min</SelectItem>
                                            <SelectItem value="60">60 min</SelectItem>
                                            <SelectItem value="90">90 min</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>
                    </div>
                </section>

                {/* SECTION C: Location / Link */}
                <section className="space-y-4">
                    {visitType === 'presencial' && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                            <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                                <MapPin className="w-4 h-4 text-zinc-400" />
                                <h4 className="text-sm font-semibold text-zinc-700">Localização</h4>
                            </div>
                            <div className="space-y-1.5">
                                <Label>Local</Label>
                                <Input
                                    {...form.register("location")}
                                    placeholder="Endereço, unidade ou ponto de referência"
                                    className={cn(errors.location && "border-red-300")}
                                />
                                {errors.location && <p className="text-xs text-red-500">{errors.location.message}</p>}
                            </div>
                            <div className="space-y-1.5">
                                <Label className="text-zinc-500">Observação de acesso <span className="text-xs font-normal">(Opcional)</span></Label>
                                <Textarea
                                    {...form.register("accessSearch")}
                                    placeholder="Instruções para portaria, estacionamento..."
                                    className="h-20 resize-none"
                                />
                            </div>
                        </div>
                    )}

                    {visitType === 'remoto' && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                            <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                                <LinkIcon className="w-4 h-4 text-zinc-400" />
                                <h4 className="text-sm font-semibold text-zinc-700">Conferência</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label>Plataforma</Label>
                                    <Controller
                                        name="platform"
                                        control={control}
                                        render={({ field }) => (
                                            <Select value={field.value} onValueChange={field.onChange}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecione..." />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="google-meet">Google Meet</SelectItem>
                                                    <SelectItem value="zoom">Zoom</SelectItem>
                                                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                                    <SelectItem value="outro">Outro</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label>Link da Reunião</Label>
                                    <Input
                                        {...form.register("link")}
                                        placeholder="https://..."
                                        disabled={watch("createLinkLater")}
                                        className={cn(errors.link && "border-red-300")}
                                    />
                                    {errors.link && <p className="text-xs text-red-500">{errors.link.message}</p>}
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Controller
                                    name="createLinkLater"
                                    control={control}
                                    render={({ field }) => (
                                        <Switch
                                            id="create-link-later"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                                <Label htmlFor="create-link-later" className="font-normal text-zinc-600">Criar link depois</Label>
                            </div>
                        </div>
                    )}

                    {visitType === 'outro' && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                            <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                                <HelpCircle className="w-4 h-4 text-zinc-400" />
                                <h4 className="text-sm font-semibold text-zinc-700">Detalhes</h4>
                            </div>
                            <div className="space-y-1.5">
                                <Label>Descrição do Tipo</Label>
                                <Input
                                    {...form.register("typeDescription")}
                                    placeholder="Ex: Almoço de negócios"
                                    className={cn(errors.typeDescription && "border-red-300")}
                                />
                                {errors.typeDescription && <p className="text-xs text-red-500">{errors.typeDescription.message}</p>}
                            </div>
                            <div className="space-y-1.5">
                                <Label>Detalhes</Label>
                                <Textarea {...form.register("details")} className="h-20 resize-none" />
                            </div>
                        </div>
                    )}
                </section>

                {/* SECTION D: Responsible & Participants */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-zinc-400" />
                            <h4 className="text-sm font-semibold text-zinc-700">Participantes</h4>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label>Responsável</Label>
                            <Select defaultValue="u1" disabled>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="u1">Eu (Logado)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1.5 flex flex-col">
                            <Label>Participantes (Clientes)</Label>
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
                                                className="w-full justify-between font-normal text-zinc-600 h-10 px-3"
                                            >
                                                {field.value?.length && field.value.length > 0
                                                    ? `${field.value.length} participante${field.value.length > 1 ? 's' : ''} selecionado${field.value.length > 1 ? 's' : ''}`
                                                    : "Selecionar participantes..."}
                                                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className="w-[340px] overflow-hidden rounded-2xl border border-zinc-200/90 p-0 shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
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
                                                            onChange={(e) => setNewContactData(prev => ({ ...prev, nome: e.target.value }))}
                                                            className="h-8 text-sm"
                                                        />
                                                        <Input
                                                            placeholder="Cargo"
                                                            value={newContactData.cargo}
                                                            onChange={(e) => setNewContactData(prev => ({ ...prev, cargo: e.target.value }))}
                                                            className="h-8 text-sm"
                                                        />
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <Input
                                                                placeholder="Telefone"
                                                                value={newContactData.telefone}
                                                                onChange={(e) => setNewContactData(prev => ({ ...prev, telefone: e.target.value }))}
                                                                className="h-8 text-sm"
                                                            />
                                                            <Input
                                                                placeholder="Email"
                                                                value={newContactData.email}
                                                                onChange={(e) => setNewContactData(prev => ({ ...prev, email: e.target.value }))}
                                                                className="h-8 text-sm"
                                                            />
                                                        </div>
                                                        <Button
                                                            size="sm"
                                                            className="mt-2 w-full"
                                                            disabled={!newContactData.nome}
                                                            onClick={handleCreateContact}
                                                        >
                                                            Cadastrar
                                                        </Button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <Command className="bg-white">
                                                    <div className="border-b border-zinc-100 px-3 py-2">
                                                        <p className="font-body text-[10px] font-semibold tracking-[0.08em] text-zinc-500 uppercase">
                                                            Participantes
                                                        </p>
                                                        <p className="font-body text-xs text-zinc-500">
                                                            {(field.value || []).length} selecionado{(field.value || []).length === 1 ? "" : "s"}
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
                                                                className="group flex cursor-pointer items-center gap-2.5 rounded-xl border border-brand/20 bg-gradient-to-r from-brand/5 to-brand/10 px-2.5 py-2.5 text-brand transition-colors duration-[120ms] hover:from-brand/10 hover:to-brand/15"
                                                            >
                                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/15 text-brand">
                                                                    <Plus className="h-4 w-4" />
                                                                </span>
                                                                <div className="flex min-w-0 flex-col">
                                                                    <span className="font-body text-sm font-semibold text-brand">Cadastrar novo contato</span>
                                                                    <span className="font-body text-[11px] text-zinc-600">
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
                        </div>
                    </div>
                </section>

                {/* SECTION E: Objective & Result */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                        <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-zinc-400" />
                            <h4 className="text-sm font-semibold text-zinc-700">Objetivo</h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <Label htmlFor="already-happened" className="text-xs text-zinc-500 font-normal">Já aconteceu?</Label>
                            <Controller
                                name="alreadyHappened"
                                control={control}
                                render={({ field }) => (
                                    <Switch
                                        id="already-happened"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <Textarea
                            {...form.register("objective")}
                            placeholder="Qual o objetivo principal desta visita?"
                            className="h-20 resize-none"
                        />
                    </div>

                    {/* Result appears if status is Realizada OR Already Happened */}
                    {(visitStatus === 'realizada' || alreadyHappened) && (
                        <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                            <Label>Resultado <span className="text-red-500">*</span></Label>
                            <Textarea
                                {...form.register("result")}
                                placeholder="Resuma o que aconteceu e os próximos passos..."
                                className={cn("h-24 resize-none", errors.result && "border-red-300")}
                            />
                            {errors.result && <p className="text-xs text-red-500">{errors.result.message}</p>}
                        </div>
                    )}
                </section>

                {/* SECTION F: Menux Intelligence */}
                <section className="bg-brand/5 border border-brand/10 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center gap-2 text-brand">
                        <Sparkles className="w-4 h-4 fill-brand/20" />
                        <h4 className="text-xs font-semibold uppercase tracking-wider">Menux Intelligence</h4>
                    </div>

                    {!selectedDate && (
                        <div className="space-y-2">
                            <p className="text-xs text-zinc-600">Sugestão de horários para {visitType === 'presencial' ? 'visitar' : 'falar com'} este cliente:</p>
                            <div className="flex flex-wrap gap-2">
                                {["09:00", "14:30", "16:00"].map(time => (
                                    <Badge
                                        key={time}
                                        variant="outline"
                                        className="cursor-pointer hover:bg-brand/10 hover:text-brand border-brand/20 text-zinc-600 transition-colors"
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
                            <div className="flex items-center gap-2 p-2 bg-white rounded border border-brand/10 text-xs text-zinc-500 italic">
                                <span className="flex-1 truncate">
                                    Olá! Confirmando nossa {visitType === 'presencial' ? 'visita' : 'reunião'} para {format(new Date(selectedDate), 'dd/MM')} às {selectedTime}...
                                </span>
                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={copyConfirmationMessage} title="Copiar">
                                    <Copy className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    )}

                </section>

            </div>

            {/* Footer - Sticky */}
            <div className="flex-none px-6 py-4 border-t border-zinc-100 bg-white flex items-center justify-between z-10">
                {showCancellationConfirm ? (
                    <div className="flex items-center justify-end w-full gap-2 animate-in fade-in slide-in-from-right-2">
                        <span className="text-xs text-zinc-500 mr-2">Alterações não salvas. Descartar?</span>
                        <Button variant="outline" size="sm" onClick={() => setShowCancellationConfirm(false)}>Voltar</Button>
                        <Button variant="destructive" size="sm" onClick={handleDiscard}>Descartar</Button>
                    </div>
                ) : (
                    <div className="flex items-center justify-end w-full gap-2">
                        <Button variant="ghost" onClick={handleClose}>Cancelar</Button>
                        <Button
                            onClick={handleSubmit(onSubmit)}
                            disabled={isSaving || saveSuccess}
                            className="min-w-[120px]"
                        >
                            {isSaving ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Salvando...
                                </>
                            ) : saveSuccess ? (
                                <>
                                    <CheckCircle className="w-4 h-4 mr-2" /> Salvo
                                </>
                            ) : (
                                "Salvar Visita"
                            )}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <Sheet open={isOpen} onOpenChange={(open) => !open && handleClose()}>
            <SheetContent
                side="right"
                className="h-screen w-full max-w-[920px] p-0 flex flex-col gap-0 border-l border-zinc-200 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.22)]"
            >
                {Content}
            </SheetContent>
        </Sheet>
    );
}
