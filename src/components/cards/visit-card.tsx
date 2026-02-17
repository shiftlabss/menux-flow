
import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
    Calendar,
    CheckCircle,
    Clock,
    Copy,
    ExternalLink,
    MapPin,
    MoreHorizontal,
    Plus,
    RefreshCw,
    Trash2,
    User,
    Video,
    X,
    Globe,
    Phone,
    MessageSquare,
    AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

// --- Types (Partial, based on usage) ---
// Ideally these should be imported from @/types or similar
export type VisitType = "presencial" | "remoto" | "outro";
export type VisitStatus = "agendada" | "realizada" | "cancelada";

export interface Visit {
    id: string;
    type: VisitType;
    status: VisitStatus;
    location: string;
    responsible: string;
    startAt: string;
    createdAt: string;

    // Optional fields
    objective?: string;
    result?: string;
    durationMinutes?: number;
    link?: string;
    platform?: string;
    cancellationReason?: string;
    accessSearch?: string;
    details?: string;

    // Legacy / Helper fields (optional)
    date?: string;
    time?: string;
    title?: string;
    duration?: string;
    description?: string;
    responsibleId?: string;
    participants?: string[];
}

interface VisitCardProps {
    visit: Visit;
    isExpanded: boolean;
    isLocked?: boolean;
    onToggleDetails: () => void;
    onStatusChange: (id: string, status: "realizada" | "cancelada") => void;
    onReschedule: (id: string, days: number) => void;
    onDuplicate: (id: string) => void;
    onFollowUp: (visit: Visit) => void;
    onDelete: (id: string) => void;
}

// --- Helpers ---
const visitTypeLabel = {
    presencial: "Visita Presencial",
    remoto: "Reunião Remota",
    outro: "Outro",
};

const visitStatusLabel = {
    agendada: "Agendada",
    realizada: "Realizada",
    cancelada: "Cancelada",
};

const visitStatusClassName = {
    agendada: "bg-blue-100 text-blue-700",
    realizada: "bg-green-100 text-green-700",
    cancelada: "bg-red-100 text-red-700",
};

const getVisitTypeIcon = (type: string) => {
    switch (type) {
        case "presencial":
            return MapPin;
        case "remoto":
            return Video;
        case "outro":
        default:
            return Calendar;
    }
};

const formatVisitDateLabel = (date?: Date | string) => {
    if (!date) return "--/--";
    const d = typeof date === "string" ? new Date(date) : date;
    if (isNaN(d.getTime())) return "--/--";

    const today = new Date();
    const isToday =
        d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear();

    if (isToday) {
        return `Hoje, ${format(d, "HH:mm")}`;
    }
    return format(d, "dd/MM, HH:mm", { locale: ptBR });
};

export function VisitCard({
    visit,
    isExpanded,
    isLocked = false,
    onToggleDetails,
    onStatusChange,
    onReschedule,
    onDuplicate,
    onFollowUp,
    onDelete,
}: VisitCardProps) {
    const VisitIcon = getVisitTypeIcon(visit.type);

    // Format metadata
    const locationText =
        visit.type === 'presencial' ? visit.location :
            visit.type === 'remoto' ? visit.platform || "Online" :
                "Outro";

    const isAgendada = visit.status === 'agendada';
    const isRealizada = visit.status === 'realizada';
    const isCancelada = visit.status === 'cancelada';

    return (
        <div
            className={cn(
                "group relative rounded-2xl border bg-white transition-all duration-200",
                isExpanded
                    ? "border-brand/30 shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-brand/10"
                    : "border-zinc-100 hover:border-zinc-200 hover:shadow-sm"
            )}
        >
            {/* Clickable Header / Body area */}
            <div
                className="flex cursor-pointer items-start gap-4 p-4"
                onClick={onToggleDetails}
            >
                {/* Icon Column */}
                <div className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-colors",
                    visit.type === "presencial"
                        ? "border-purple-100 bg-purple-50 text-purple-600"
                        : visit.type === "remoto"
                            ? "border-blue-100 bg-blue-50 text-blue-600"
                            : "border-zinc-200 bg-zinc-50 text-zinc-500"
                )}>
                    <VisitIcon className="h-6 w-6" />
                </div>

                {/* Content Column */}
                <div className="flex-1 min-w-0 space-y-1">
                    {/* Row 1: Title & Status */}
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <h4 className={cn(
                                "font-heading text-sm font-semibold transition-colors",
                                isExpanded ? "text-brand" : "text-zinc-900",
                                isCancelada && "text-zinc-500 line-through decoration-zinc-400"
                            )}>
                                {visit.title || visitTypeLabel[visit.type]}
                            </h4>
                            <p className="truncate text-xs text-zinc-500">
                                {locationText || "Sem local definido"}
                            </p>
                        </div>

                        <Badge
                            variant="secondary"
                            className={cn(
                                "shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                                visitStatusClassName[visit.status]
                            )}
                        >
                            {visitStatusLabel[visit.status]}
                        </Badge>
                    </div>

                    {/* Row 2: Metadata */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                            <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                            <span className="font-medium text-zinc-700">
                                {formatVisitDateLabel(visit.startAt || (visit.date && visit.time ? `${visit.date}T${visit.time}` : undefined))}
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                            <User className="h-3.5 w-3.5 text-zinc-400" />
                            <span className="truncate max-w-[120px]">
                                {visit.responsible || "Sem responsável"}
                            </span>
                        </div>

                        {visit.durationMinutes ? (
                            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                                <Clock className="h-3.5 w-3.5 text-zinc-400" />
                                <span>{visit.durationMinutes} min</span>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>

            {/* Actions Strip */}
            <div className="flex items-center justify-between border-t border-zinc-50 bg-zinc-50/50 px-4 py-2 rounded-b-2xl">
                <Button
                    size="sm"
                    variant="ghost"
                    className={cn(
                        "h-8 -ml-2 gap-1.5 rounded-full px-3 text-xs font-medium transition-colors hover:bg-white hover:shadow-sm",
                        isExpanded ? "text-brand bg-brand/5" : "text-zinc-600"
                    )}
                    onClick={onToggleDetails}
                >
                    {isExpanded ? (
                        <>
                            <X className="h-3.5 w-3.5" /> Fechar detalhes
                        </>
                    ) : (
                        <>
                            <Plus className="h-3.5 w-3.5" /> Ver detalhes
                        </>
                    )}
                </Button>

                <div className="flex items-center gap-1">
                    {/* Quick Actions based on Status */}
                    {isAgendada && !isLocked && (
                        <>
                            <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 gap-1.5 rounded-full px-3 text-xs font-medium text-green-700 hover:bg-green-50 hover:text-green-800"
                                onClick={() => onStatusChange(visit.id, "realizada")}
                            >
                                <CheckCircle className="h-3.5 w-3.5" />
                                Realizada
                            </Button>
                        </>
                    )}

                    {/* More Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 rounded-full p-0 text-zinc-400 hover:bg-white hover:text-zinc-600 hover:shadow-sm"
                                disabled={isLocked}
                            >
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 rounded-xl p-1">
                            {isAgendada && (
                                <>
                                    <DropdownMenuItem onClick={() => onReschedule(visit.id, 1)}>
                                        <RefreshCw className="mr-2 h-3.5 w-3.5" />
                                        Reagendar (+1 dia)
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="text-red-600 focus:text-red-700 focus:bg-red-50"
                                        onClick={() => onStatusChange(visit.id, "cancelada")}
                                    >
                                        <X className="mr-2 h-3.5 w-3.5" />
                                        Cancelar visita
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                </>
                            )}

                            <DropdownMenuItem onClick={() => onDuplicate(visit.id)}>
                                <Copy className="mr-2 h-3.5 w-3.5" />
                                Duplicar
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onFollowUp(visit)}>
                                <Plus className="mr-2 h-3.5 w-3.5" />
                                Criar follow-up
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="text-red-600 focus:text-red-700 focus:bg-red-50"
                                onClick={() => onDelete(visit.id)}
                            >
                                <Trash2 className="mr-2 h-3.5 w-3.5" />
                                Excluir
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Expanded Details Panel */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-zinc-100 bg-zinc-50/50"
                    >
                        <div className="grid gap-4 p-5 text-sm">
                            {/* Context / Objective */}
                            {visit.objective && (
                                <div className="space-y-1">
                                    <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-400">Objetivo</h5>
                                    <p className="text-zinc-700 leading-relaxed">{visit.objective}</p>
                                </div>
                            )}

                            {/* Result (if any) */}
                            {visit.result && (
                                <div className="space-y-1 rounded-lg bg-green-50/50 p-3 border border-green-100">
                                    <h5 className="flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wider text-green-700">
                                        <CheckCircle className="h-3 w-3" /> Resultado
                                    </h5>
                                    <p className="text-zinc-700 leading-relaxed">{visit.result}</p>
                                </div>
                            )}

                            {/* Cancellation Reason (if any) */}
                            {visit.cancellationReason && (
                                <div className="space-y-1 rounded-lg bg-red-50/50 p-3 border border-red-100">
                                    <h5 className="flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wider text-red-700">
                                        <AlertCircle className="h-3 w-3" /> Motivo do Cancelamento
                                    </h5>
                                    <p className="text-zinc-700 leading-relaxed">{visit.cancellationReason}</p>
                                </div>
                            )}

                            {/* Internal Details */}
                            {visit.details && (
                                <div className="space-y-1">
                                    <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-400">Detalhes Internos</h5>
                                    <p className="text-zinc-600 leading-relaxed whitespace-pre-wrap">{visit.details}</p>
                                </div>
                            )}

                            {/* Action Links (e.g. Meeting Link) */}
                            {visit.link && (visit.type === 'remoto') && (
                                <div className="pt-2">
                                    <Button
                                        variant="outline"
                                        className="h-9 gap-2 w-full justify-start text-zinc-700 hover:text-brand hover:border-brand/30"
                                        onClick={() => window.open(visit.link, '_blank')}
                                    >
                                        <Video className="h-4 w-4" />
                                        Entrar na reunião agora
                                        <ExternalLink className="ml-auto h-3 w-3 opacity-50" />
                                    </Button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
