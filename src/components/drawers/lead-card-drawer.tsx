"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  X,
  Phone,
  Mail,
  Calendar,
  Tag,
  DollarSign,
  User,
  Clock,
  Flame,
  Thermometer,
  Snowflake,
  MoreHorizontal,
  Building2,
  Plus,
  Trash2,
  Star,
  ChevronRight,
  Check,
  Pencil,
  Globe,
  MapPin,
  TrendingUp,
  FileText,
  ArrowRight,
  AlertTriangle,
  Send,
  RefreshCw,
  Loader2,
  Shield,
  ChevronDown,
  Activity,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/masked-inputs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useUIStore } from "@/stores/ui-store";
import type { Temperature, PipelineStage } from "@/types";
import { calculateLeadScore, calculateTemperature } from "@/lib/business-rules";
import { mockActivities } from "@/lib/mock-data";

// ═══════════════════════════════════════════════════════════════════
// Types & Constants
// ═══════════════════════════════════════════════════════════════════

type DealStatus = "open" | "won" | "lost";
type BannerVariant = "success" | "error" | "info" | "warning";
type TimelineFilterType = "all" | "activity" | "stage-change" | "note" | "value-change";

interface InlineBanner {
  message: string;
  variant: BannerVariant;
  action?: { label: string; onClick: () => void };
}

const referenceSetup = 15000;
const referenceMRR = 1200;
const NOTES_AUTOSAVE_MS = 800;

// ═══════════════════════════════════════════════════════════════════
// Telemetria — Frontend event tracking stub
// ═══════════════════════════════════════════════════════════════════

function trackEvent(
  event: string,
  properties?: Record<string, string | number | boolean>
) {
  // Stub: em produção, seria integrado com analytics provider
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    console.debug(`[telemetry] ${event}`, properties);
  }
}

// ═══════════════════════════════════════════════════════════════════
// Config maps
// ═══════════════════════════════════════════════════════════════════

const temperatureConfig: Record<
  Temperature,
  { label: string; icon: React.ReactNode; color: string; bg: string }
> = {
  hot: {
    label: "Quente",
    icon: <Flame className="h-4 w-4" />,
    color: "text-status-danger",
    bg: "bg-status-danger-light",
  },
  warm: {
    label: "Morna",
    icon: <Thermometer className="h-4 w-4" />,
    color: "text-status-warning",
    bg: "bg-status-warning-light",
  },
  cold: {
    label: "Fria",
    icon: <Snowflake className="h-4 w-4" />,
    color: "text-status-info",
    bg: "bg-status-info-light",
  },
};

const stageConfig: { id: PipelineStage; label: string }[] = [
  { id: "lead-in", label: "Lead-In" },
  { id: "contato-feito", label: "Contato Feito" },
  { id: "reuniao-agendada", label: "Reuniao Agendada" },
  { id: "proposta-enviada", label: "Proposta Enviada" },
  { id: "negociacao", label: "Negociacao" },
  { id: "fechamento", label: "Fechamento" },
];

const statusConfig: Record<DealStatus, { label: string; color: string; bg: string }> = {
  open: { label: "Aberto", color: "text-brand", bg: "bg-brand/10" },
  won: { label: "Ganho", color: "text-status-success", bg: "bg-status-success/10" },
  lost: { label: "Perdido", color: "text-status-danger", bg: "bg-status-danger/10" },
};

// ═══════════════════════════════════════════════════════════════════
// Mock Data
// ═══════════════════════════════════════════════════════════════════

const mockLead = {
  id: "1",
  title: "Restaurante Bela Vista",
  clientName: "Restaurante Bela Vista Ltda",
  cnpj: "12.345.678/0001-00",
  razaoSocial: "Restaurante Bela Vista Ltda ME",
  endereco: "Rua das Flores, 123 - Jardim Paulista, Sao Paulo - SP",
  telefoneEmpresa: "(11) 3456-7890",
  emailEmpresa: "contato@belavista.com",
  value: 12000,
  monthlyValue: 1000,
  stage: "contato-feito" as PipelineStage,
  temperature: "hot" as Temperature,
  score: 78,
  responsibleId: "u1",
  responsibleName: "Maria Silva",
  responsibleAvatar: "",
  tags: ["food-service", "restaurante", "premium"],
  source: "Indicacao",
  currency: "BRL",
  expectedCloseDate: "2026-03-15",
  createdAt: "2026-01-15",
  updatedAt: "2026-02-05",
  notes: "Cliente muito interessado. Agendar reuniao de apresentacao do modulo financeiro.",
  groupName: null,
};

const mockContacts = [
  { id: "c1", nome: "Joao Silva", email: "joao@belavista.com", telefone: "(11) 99999-1234", cargo: "Gerente Geral", isPrimary: true },
  { id: "c2", nome: "Ana Costa", email: "ana@belavista.com", telefone: "(11) 99999-5678", cargo: "Diretora Financeira", isPrimary: false },
  { id: "c3", nome: "Carlos Mendes", email: "carlos@belavista.com", telefone: "(11) 99999-9012", cargo: "Coordenador de TI", isPrimary: false },
];

const mockTeamMembers = [
  { id: "u1", name: "Maria Silva", avatar: "" },
  { id: "u2", name: "Pedro Santos", avatar: "" },
  { id: "u3", name: "Julia Fernandes", avatar: "" },
  { id: "u4", name: "Rafael Costa", avatar: "" },
];

const mockTimeline = [
  { id: "t1", type: "created", message: "Oportunidade criada", user: "Maria Silva", date: "15/01/2026 10:00" },
  { id: "t2", type: "activity", message: "Ligacao realizada - primeiro contato com Joao Silva", user: "Maria Silva", date: "16/01/2026 14:30" },
  { id: "t3", type: "stage-change", message: "Movido de Lead-In para Contato Feito", user: "Maria Silva", date: "16/01/2026 14:35" },
  { id: "t4", type: "note", message: "Cliente muito interessado, pedir proposta urgente", user: "Maria Silva", date: "20/01/2026 09:15" },
  { id: "t5", type: "tag-added", message: "Tag 'premium' adicionada", user: "Maria Silva", date: "22/01/2026 11:00" },
  { id: "t6", type: "value-change", message: "Valor alterado de R$ 8.000 para R$ 12.000", user: "Pedro Santos", date: "25/01/2026 16:45" },
  { id: "t7", type: "temperature-change", message: "Temperatura alterada de Morna para Quente", user: "Maria Silva", date: "28/01/2026 10:20" },
  { id: "t8", type: "activity", message: "Reuniao online com equipe do cliente", user: "Maria Silva", date: "03/02/2026 15:00" },
];

const lostReasons = [
  "Preco alto",
  "Escolheu concorrente",
  "Sem orcamento",
  "Projeto cancelado",
  "Sem resposta",
  "Outro",
];

// ═══════════════════════════════════════════════════════════════════
// Utility Functions
// ═══════════════════════════════════════════════════════════════════

function formatCurrency(value: number, currency = "BRL") {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(value);
}

function getScoreColor(score: number) {
  if (score >= 70) return "bg-status-success text-white";
  if (score >= 40) return "bg-status-warning text-white";
  return "bg-status-danger text-white";
}

function getScoreLabel(score: number) {
  if (score >= 70) return "Alto";
  if (score >= 40) return "Medio";
  return "Baixo";
}

function getTimelineIcon(type: string) {
  switch (type) {
    case "created": return <Plus className="h-3.5 w-3.5" />;
    case "activity": return <Calendar className="h-3.5 w-3.5" />;
    case "stage-change": return <ArrowRight className="h-3.5 w-3.5" />;
    case "note": return <FileText className="h-3.5 w-3.5" />;
    case "tag-added": return <Tag className="h-3.5 w-3.5" />;
    case "value-change": return <DollarSign className="h-3.5 w-3.5" />;
    case "temperature-change": return <Flame className="h-3.5 w-3.5" />;
    default: return <Clock className="h-3.5 w-3.5" />;
  }
}

function getTimelineIconColor(type: string) {
  switch (type) {
    case "created": return "bg-brand/10 text-brand";
    case "activity": return "bg-status-info/10 text-status-info";
    case "stage-change": return "bg-status-success/10 text-status-success";
    case "note": return "bg-zinc-100 text-zinc-500";
    case "tag-added": return "bg-purple-50 text-purple-500";
    case "value-change": return "bg-status-warning/10 text-status-warning";
    case "temperature-change": return "bg-status-danger/10 text-status-danger";
    default: return "bg-zinc-100 text-zinc-500";
  }
}

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

// ═══════════════════════════════════════════════════════════════════
// InlineStatusBanner
// ═══════════════════════════════════════════════════════════════════

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
      {banner.action && (
        <button
          onClick={banner.action.onClick}
          className="shrink-0 underline underline-offset-2 transition-opacity hover:opacity-70"
        >
          {banner.action.label}
        </button>
      )}
      <button
        onClick={onDismiss}
        className="shrink-0 rounded p-0.5 transition-colors hover:bg-black/10"
        aria-label="Fechar"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// InlineEditable with save/cancel states
// ═══════════════════════════════════════════════════════════════════

function InlineEditable({
  value,
  onSave,
  className = "",
  inputClassName = "",
  type = "text",
  readOnly = false,
  validate,
}: {
  value: string;
  onSave: (val: string) => void;
  className?: string;
  inputClassName?: string;
  type?: string;
  readOnly?: boolean;
  validate?: (val: string) => string | null;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  function handleSave() {
    if (validate) {
      const err = validate(draft);
      if (err) {
        setError(err);
        return;
      }
    }
    setEditing(false);
    setError(null);
    if (draft !== value) onSave(draft);
  }

  function handleCancel() {
    setDraft(value);
    setEditing(false);
    setError(null);
  }

  if (readOnly) {
    return <span className={className}>{value || "--"}</span>;
  }

  if (editing) {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <Input
            ref={inputRef}
            type={type}
            value={draft}
            onChange={(e) => { setDraft(e.target.value); setError(null); }}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") handleCancel();
            }}
            className={`h-7 rounded-[10px] font-body text-sm ${inputClassName}`}
          />
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleSave}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-status-success transition-colors hover:bg-status-success/10"
            aria-label="Salvar"
          >
            <Check className="h-3.5 w-3.5" />
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleCancel}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-100"
            aria-label="Cancelar"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
        {error && (
          <p className="font-body text-[10px] text-status-danger" role="alert">{error}</p>
        )}
      </div>
    );
  }

  return (
    <span
      onClick={() => { setDraft(value); setEditing(true); }}
      className={`cursor-pointer rounded-md px-1 py-0.5 transition-colors hover:bg-zinc-100 ${className}`}
      title="Clique para editar"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setDraft(value);
          setEditing(true);
        }
      }}
    >
      {value || "--"}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════
// StageRail — Premium stage navigation
// ═══════════════════════════════════════════════════════════════════

function StageRail({
  currentStage,
  onStageChange,
  disabled = false,
  statusBanner,
  onBannerDismiss,
}: {
  currentStage: PipelineStage;
  onStageChange: (stage: PipelineStage) => void;
  disabled?: boolean;
  statusBanner: InlineBanner | null;
  onBannerDismiss: () => void;
}) {
  const currentIndex = stageConfig.findIndex((s) => s.id === currentStage);

  return (
    <div className="space-y-2">
      <div
        className={`flex items-center gap-1 overflow-x-auto pb-1 ${disabled ? "pointer-events-none opacity-50" : ""}`}
        role="group"
        aria-label="Etapas do funil"
      >
        {stageConfig.map((stage, i) => {
          const isActive = stage.id === currentStage;
          const isPast = i < currentIndex;

          return (
            <button
              key={stage.id}
              onClick={() => onStageChange(stage.id)}
              disabled={disabled}
              className={`flex min-h-[44px] items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 font-body text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-1 ${
                isActive
                  ? "bg-brand text-white shadow-sm"
                  : isPast
                    ? "bg-brand/10 text-brand"
                    : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600"
              }`}
              aria-label={`${stage.label}${isActive ? " (atual)" : isPast ? " (concluida)" : ""}`}
              aria-current={isActive ? "step" : undefined}
            >
              {isPast && <Check className="h-3 w-3" />}
              {stage.label}
            </button>
          );
        })}
      </div>
      {statusBanner && (
        <InlineStatusBanner banner={statusBanner} onDismiss={onBannerDismiss} />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// SummaryBento Cards
// ═══════════════════════════════════════════════════════════════════

function BentoCard({
  icon,
  label,
  children,
  className = "",
  banner,
  onBannerDismiss,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  className?: string;
  banner?: InlineBanner | null;
  onBannerDismiss?: () => void;
}) {
  return (
    <div className={`rounded-[14px] border border-zinc-100 p-3.5 transition-all hover:border-zinc-200 hover:shadow-sm ${className}`}>
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-50 text-zinc-400">
          {icon}
        </div>
        <span className="font-body text-[11px] font-medium uppercase tracking-wider text-zinc-400">
          {label}
        </span>
      </div>
      <div className="mt-2">{children}</div>
      {banner && onBannerDismiss && (
        <div className="mt-2">
          <InlineStatusBanner banner={banner} onDismiss={onBannerDismiss} />
        </div>
      )}
    </div>
  );
}

function ForecastCard({
  value,
  monthlyValue,
  expectedCloseDate,
  onValueChange,
  onMonthlyChange,
  onDateChange,
  dealStatus,
}: {
  value: number;
  monthlyValue: number;
  expectedCloseDate: string;
  onValueChange: (v: number) => void;
  onMonthlyChange: (v: number) => void;
  onDateChange: (d: string) => void;
  dealStatus: DealStatus;
}) {
  const [banner, setBanner] = useState<InlineBanner | null>(null);
  const isLocked = dealStatus !== "open";

  const handleValueSave = (v: string) => {
    const num = Number(v.replace(/\D/g, ""));
    if (isNaN(num) || num < 0) {
      setBanner({ message: "Valor invalido", variant: "error" });
      return;
    }
    if (num > 999999999) {
      setBanner({ message: "Valor maximo: R$ 999.999.999", variant: "error" });
      return;
    }
    onValueChange(num);
    setBanner({ message: "Valor atualizado", variant: "success" });
    trackEvent("forecast_updated_succeeded", { field: "value", value: num });
  };

  const handleMonthlySave = (v: string) => {
    const num = Number(v.replace(/\D/g, ""));
    if (isNaN(num) || num < 0) {
      setBanner({ message: "Valor invalido", variant: "error" });
      trackEvent("validation_failed", { field: "monthly_value", reason: "invalid" });
      return;
    }
    onMonthlyChange(num);
    setBanner({ message: "Valor mensal atualizado", variant: "success" });
    trackEvent("forecast_updated_succeeded", { field: "monthly_value", value: num });
  };

  return (
    <BentoCard
      icon={<DollarSign className="h-3.5 w-3.5" />}
      label="Forecast"
      banner={banner}
      onBannerDismiss={() => setBanner(null)}
    >
      <div className="space-y-2.5">
        <div>
          <p className="font-body text-[10px] text-zinc-400">Valor Total</p>
          <InlineEditable
            value={formatCurrency(value)}
            onSave={handleValueSave}
            className="font-heading text-lg font-bold text-black"
            readOnly={isLocked}
            validate={(v) => {
              const num = Number(v.replace(/\D/g, ""));
              if (isNaN(num) || num < 0) return "Valor invalido";
              return null;
            }}
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="font-body text-[10px] text-zinc-400">Mensal</p>
            <InlineEditable
              value={formatCurrency(monthlyValue)}
              onSave={handleMonthlySave}
              className="font-body text-sm font-medium text-black"
              readOnly={isLocked}
            />
          </div>
          <div className="flex-1">
            <p className="font-body text-[10px] text-zinc-400">Previsao</p>
            <InlineEditable
              value={expectedCloseDate ? new Date(expectedCloseDate).toLocaleDateString("pt-BR") : "--"}
              onSave={onDateChange}
              className="font-body text-sm font-medium text-black"
              readOnly={isLocked}
              type="date"
            />
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

function OwnerCard({
  currentId,
  currentName,
  teamMembers,
  onReassign,
}: {
  currentId: string;
  currentName: string;
  teamMembers: { id: string; name: string; avatar: string }[];
  onReassign: (id: string, name: string) => void;
}) {
  return (
    <BentoCard icon={<User className="h-3.5 w-3.5" />} label="Responsavel">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex w-full items-center gap-2.5 rounded-lg px-1 py-1 transition-colors hover:bg-zinc-50">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
              {getInitials(currentName)}
            </div>
            <div className="min-w-0 flex-1 text-left">
              <p className="truncate font-heading text-sm font-semibold text-black">{currentName}</p>
              <p className="font-body text-[10px] text-zinc-400">Clique para alterar</p>
            </div>
            <Pencil className="h-3 w-3 shrink-0 text-zinc-300" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="rounded-[12px]">
          {teamMembers.map((member) => (
            <DropdownMenuItem key={member.id} onClick={() => onReassign(member.id, member.name)} className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200 text-[10px] font-bold text-zinc-600">
                {getInitials(member.name)}
              </div>
              <span className="font-body text-sm">{member.name}</span>
              {member.id === currentId && <Check className="ml-auto h-4 w-4 text-brand" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </BentoCard>
  );
}

function SourceMetaCard({
  source,
  createdAt,
  tags,
}: {
  source: string;
  createdAt: string;
  tags: string[];
}) {
  return (
    <BentoCard icon={<Globe className="h-3.5 w-3.5" />} label="Origem & Meta">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-body text-xs text-zinc-400">Fonte</span>
          <span className="font-body text-sm font-medium text-black">{source}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-body text-xs text-zinc-400">Criado em</span>
          <span className="font-body text-sm font-medium text-black">
            {new Date(createdAt).toLocaleDateString("pt-BR")}
          </span>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="rounded-[8px] font-body text-[10px]">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="rounded-[8px] font-body text-[10px]">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </div>
    </BentoCard>
  );
}

// ═══════════════════════════════════════════════════════════════════
// NotesCard with autosave
// ═══════════════════════════════════════════════════════════════════

function NotesCard({
  initialNotes,
  onNotesChange,
}: {
  initialNotes: string;
  onNotesChange: (notes: string) => void;
}) {
  const [notes, setNotes] = useState(initialNotes);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSavedRef = useRef(initialNotes);

  const handleChange = useCallback(
    (val: string) => {
      setNotes(val);
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setSaveState("saving");
        // Simulate async save
        setTimeout(() => {
          onNotesChange(val);
          lastSavedRef.current = val;
          setSaveState("saved");
          trackEvent("notes_saved_succeeded");
          setTimeout(() => setSaveState("idle"), 2000);
        }, 300);
      }, NOTES_AUTOSAVE_MS);
    },
    [onNotesChange]
  );

  const handleManualSave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setSaveState("saving");
    setTimeout(() => {
      onNotesChange(notes);
      lastSavedRef.current = notes;
      setSaveState("saved");
      setTimeout(() => setSaveState("idle"), 2000);
    }, 300);
  };

  const hasUnsaved = notes !== lastSavedRef.current;

  return (
    <div className="rounded-[14px] border border-zinc-100 p-3.5 transition-all hover:border-zinc-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-50 text-zinc-400">
            <FileText className="h-3.5 w-3.5" />
          </div>
          <span className="font-body text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            Anotacoes
          </span>
        </div>
        <div className="flex items-center gap-2">
          {saveState === "saving" && (
            <span className="flex items-center gap-1 font-body text-[10px] text-zinc-400">
              <Loader2 className="h-3 w-3 animate-spin" />
              Salvando...
            </span>
          )}
          {saveState === "saved" && (
            <span className="flex items-center gap-1 font-body text-[10px] text-status-success" role="status">
              <Check className="h-3 w-3" />
              Salvo
            </span>
          )}
          {saveState === "error" && (
            <button
              onClick={handleManualSave}
              className="flex items-center gap-1 font-body text-[10px] text-status-danger hover:underline"
            >
              <RefreshCw className="h-3 w-3" />
              Salvar agora
            </button>
          )}
          {hasUnsaved && saveState === "idle" && (
            <span className="font-body text-[10px] text-zinc-300">Nao salvo</span>
          )}
        </div>
      </div>
      <Textarea
        value={notes}
        onChange={(e) => handleChange(e.target.value)}
        className="mt-2 min-h-[80px] resize-none rounded-[10px] border-zinc-100 font-body text-sm focus:border-brand/30"
        placeholder="Contexto rapido do que ja foi conversado..."
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Timeline Premium with filter
// ═══════════════════════════════════════════════════════════════════

function TimelinePremium({ events }: { events: typeof mockTimeline }) {
  const [filter, setFilter] = useState<TimelineFilterType>("all");

  const filterOptions: { value: TimelineFilterType; label: string }[] = [
    { value: "all", label: "Todos" },
    { value: "activity", label: "Atividades" },
    { value: "stage-change", label: "Etapas" },
    { value: "note", label: "Notas" },
    { value: "value-change", label: "Valores" },
  ];

  const filteredEvents = filter === "all" ? events : events.filter((e) => e.type === filter);

  return (
    <div className="space-y-4">
      {/* Filter chips */}
      <div className="flex items-center gap-2">
        <Filter className="h-3.5 w-3.5 text-zinc-300" />
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`rounded-full px-2.5 py-1 font-body text-[11px] font-medium transition-all ${
              filter === opt.value
                ? "bg-brand/10 text-brand"
                : "bg-zinc-50 text-zinc-400 hover:bg-zinc-100"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Timeline entries */}
      {filteredEvents.length === 0 ? (
        <div className="flex flex-col items-center py-8 text-center">
          <Activity className="h-8 w-8 text-zinc-200" />
          <p className="mt-2 font-body text-sm text-zinc-400">Sem atividades encontradas</p>
          <Button
            size="sm"
            variant="ghost"
            className="mt-2 rounded-full font-body text-xs text-brand"
            onClick={() => setFilter("all")}
          >
            Limpar filtro
          </Button>
        </div>
      ) : (
        <div className="relative space-y-0">
          {filteredEvents.map((event, i) => (
            <div key={event.id} className="group relative flex gap-3 pb-5">
              {i < filteredEvents.length - 1 && (
                <div className="absolute left-[13px] top-7 h-full w-px bg-zinc-100" />
              )}
              <div className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${getTimelineIconColor(event.type)}`}>
                {getTimelineIcon(event.type)}
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="font-body text-sm text-black">{event.message}</p>
                <p className="mt-0.5 font-body text-[11px] text-zinc-400">
                  {event.user} &middot; {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Contact Card
// ═══════════════════════════════════════════════════════════════════

function ContactCard({
  contact,
  onEdit,
  onDelete,
}: {
  contact: (typeof mockContacts)[0];
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="group flex items-start justify-between rounded-[14px] border border-zinc-100 p-3.5 transition-all hover:border-zinc-200 hover:shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50">
          <User className="h-4 w-4 text-zinc-400" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-heading text-sm font-semibold text-black">{contact.nome}</p>
            {contact.isPrimary && (
              <Badge className="gap-0.5 rounded-[6px] bg-brand/10 px-1.5 py-0.5 font-body text-[9px] text-brand">
                <Star className="h-2.5 w-2.5" /> Principal
              </Badge>
            )}
          </div>
          <p className="font-body text-[11px] text-zinc-400">{contact.cargo}</p>
          <div className="mt-1.5 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1 font-body text-[11px] text-zinc-500">
              <Mail className="h-3 w-3" /> {contact.email}
            </span>
            <span className="flex items-center gap-1 font-body text-[11px] text-zinc-500">
              <Phone className="h-3 w-3" /> {contact.telefone}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
        <button onClick={onEdit} className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600" aria-label="Editar contato">
          <Pencil className="h-3.5 w-3.5" />
        </button>
        <button onClick={onDelete} className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-status-danger/10 hover:text-status-danger" aria-label="Remover contato">
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// EditableField (for tab content)
// ═══════════════════════════════════════════════════════════════════

function EditableField({
  icon,
  label,
  value,
  onSave,
  type = "text",
  readOnly = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onSave: (val: string) => void;
  type?: string;
  readOnly?: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  function handleSave() {
    setEditing(false);
    if (draft !== value) onSave(draft);
  }

  return (
    <div className="flex items-center gap-3 rounded-[14px] border border-zinc-100 p-3 transition-colors hover:border-zinc-200">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-50 text-zinc-400">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-body text-[10px] font-medium uppercase tracking-wider text-zinc-400">{label}</p>
        {editing && !readOnly ? (
          <div className="mt-0.5 flex items-center gap-1">
            <Input
              ref={inputRef}
              type={type}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={handleSave}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSave();
                if (e.key === "Escape") { setDraft(value); setEditing(false); }
              }}
              className="h-7 rounded-[8px] border-zinc-200 font-body text-sm"
            />
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={handleSave}
              className="flex h-6 w-6 items-center justify-center rounded-md text-status-success hover:bg-status-success/10"
            >
              <Check className="h-3.5 w-3.5" />
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => { setDraft(value); setEditing(false); }}
              className="flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-100"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <p
            onClick={() => { if (!readOnly) { setDraft(value); setEditing(true); } }}
            className={`mt-0.5 truncate font-body text-sm font-medium text-black ${!readOnly ? "cursor-pointer rounded-md px-1 py-0.5 transition-colors hover:bg-zinc-50" : ""}`}
            title={readOnly ? undefined : "Clique para editar"}
          >
            {value || "--"}
          </p>
        )}
      </div>
      {!editing && !readOnly && (
        <button
          onClick={() => { setDraft(value); setEditing(true); }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-300 transition-colors hover:bg-zinc-100 hover:text-zinc-500"
          aria-label={`Editar ${label}`}
        >
          <Pencil className="h-3.5 w-3.5" />
        </button>
      )}
      {readOnly && (
        <div className="flex items-center gap-1 text-zinc-300" title="Somente leitura">
          <Shield className="h-3.5 w-3.5" />
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Temperature Selector (compact)
// ═══════════════════════════════════════════════════════════════════

function TemperatureChips({
  current,
  onChange,
  suggested,
  disabled = false,
}: {
  current: Temperature;
  onChange: (t: Temperature) => void;
  suggested?: Temperature;
  disabled?: boolean;
}) {
  return (
    <div className={`flex items-center gap-1.5 ${disabled ? "pointer-events-none opacity-50" : ""}`}>
      {(["hot", "warm", "cold"] as Temperature[]).map((temp) => {
        const cfg = temperatureConfig[temp];
        const isSelected = current === temp;
        return (
          <button
            key={temp}
            onClick={() => onChange(temp)}
            className={`flex min-h-[32px] items-center gap-1 rounded-full px-2.5 py-1 font-body text-[11px] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 ${
              isSelected
                ? `${cfg.bg} ${cfg.color}`
                : "bg-zinc-50 text-zinc-400 hover:bg-zinc-100"
            }`}
            title={cfg.label}
            aria-label={`Temperatura ${cfg.label}`}
            aria-pressed={isSelected}
          >
            {cfg.icon}
            <span className="max-sm:hidden">{cfg.label}</span>
          </button>
        );
      })}
      {suggested && suggested !== current && (
        <button
          onClick={() => onChange(suggested)}
          className="font-body text-[10px] text-zinc-400 transition-colors hover:text-brand"
          title="Aplicar sugestao"
        >
          Sugestao: {temperatureConfig[suggested].label}
        </button>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// LostReasonDrawer (inline panel)
// ═══════════════════════════════════════════════════════════════════

function LostReasonPanel({
  onConfirm,
  onCancel,
  isLoading,
}: {
  onConfirm: (reason: string) => void;
  onCancel: () => void;
  isLoading: boolean;
}) {
  const [reason, setReason] = useState("");

  return (
    <div className="animate-in slide-in-from-right-2 space-y-4 rounded-[14px] border border-status-danger/20 bg-status-danger/5 p-4 duration-200">
      <div>
        <h4 className="font-heading text-sm font-semibold text-status-danger">Motivo da perda</h4>
        <p className="mt-0.5 font-body text-xs text-zinc-500">
          Marcar como perdido encerra a oportunidade. Voce quer continuar?
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {lostReasons.map((r) => (
          <button
            key={r}
            onClick={() => setReason(r)}
            className={`rounded-full border px-3 py-1.5 font-body text-xs transition-all ${
              reason === r
                ? "border-status-danger bg-status-danger text-white"
                : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button variant="ghost" size="sm" className="rounded-full font-heading text-xs" onClick={onCancel} disabled={isLoading}>
          Cancelar
        </Button>
        <Button
          size="sm"
          className="rounded-full bg-status-danger font-heading text-xs text-white hover:bg-status-danger/90"
          onClick={() => { if (reason) onConfirm(reason); }}
          disabled={!reason || isLoading}
        >
          {isLoading ? <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" /> : null}
          Confirmar perda
        </Button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// SummaryBento — Mobile accordion wrapper
// ═══════════════════════════════════════════════════════════════════

function MobileAccordion({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg px-1 py-2 font-heading text-sm font-semibold text-black"
      >
        Visao geral
        <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="mt-1">{children}</div>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Main Component — LeadCardDrawer (Premium)
// ═══════════════════════════════════════════════════════════════════

export function LeadCardDrawer() {
  const { modalType, closeModal } = useUIStore();
  const isOpen = modalType === "lead-card";

  // ── Deal state ───────────────────────────────────────────────
  const [title, setTitle] = useState(mockLead.title);
  const [value, setValue] = useState(mockLead.value);
  const [monthlyValue, setMonthlyValue] = useState(mockLead.monthlyValue);
  const [stage, setStage] = useState<PipelineStage>(mockLead.stage);
  const [temperature, setTemperature] = useState<Temperature>(mockLead.temperature);
  const [responsibleId, setResponsibleId] = useState(mockLead.responsibleId);
  const [responsibleName, setResponsibleName] = useState(mockLead.responsibleName);
  const [notes, setNotes] = useState(mockLead.notes);
  const [tags, setTags] = useState(mockLead.tags);
  const [newTag, setNewTag] = useState("");
  const [contacts, setContacts] = useState(mockContacts);
  const [dealStatus, setDealStatus] = useState<DealStatus>("open");
  const [expectedCloseDate, setExpectedCloseDate] = useState(mockLead.expectedCloseDate);
  const [source] = useState(mockLead.source);

  // Company fields
  const [cnpj, setCnpj] = useState(mockLead.cnpj);
  const [razaoSocial, setRazaoSocial] = useState(mockLead.razaoSocial);
  const [endereco, setEndereco] = useState(mockLead.endereco);
  const [telefoneEmpresa, setTelefoneEmpresa] = useState(mockLead.telefoneEmpresa);
  const [emailEmpresa, setEmailEmpresa] = useState(mockLead.emailEmpresa);

  // UI state
  const [headerBanner, setHeaderBanner] = useState<InlineBanner | null>(null);
  const [stageBanner, setStageBanner] = useState<InlineBanner | null>(null);
  const [showWinConfirm, setShowWinConfirm] = useState(false);
  const [showLostPanel, setShowLostPanel] = useState(false);
  const [isWinLoading, setIsWinLoading] = useState(false);
  const [isLostLoading, setIsLostLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Contact forms
  const [showAddContact, setShowAddContact] = useState(false);
  const [newContact, setNewContact] = useState({ nome: "", email: "", telefone: "", cargo: "" });
  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [editContact, setEditContact] = useState({ nome: "", email: "", telefone: "", cargo: "" });

  // Computed
  const relatedActivities = useMemo(() => mockActivities.filter((a) => a.opportunityId === mockLead.id), []);
  const leadScore = useMemo(() => calculateLeadScore(mockLead, relatedActivities), [relatedActivities]);
  const suggestedTemperature = useMemo(() => calculateTemperature(mockLead), []);

  const isLocked = dealStatus !== "open";

  // Telemetry: view_opened
  useEffect(() => {
    if (isOpen) {
      trackEvent("view_opened", {
        entity_type: "deal",
        entity_id: mockLead.id,
      });
    }
  }, [isOpen]);

  // ── Handlers ─────────────────────────────────────────────────

  const handleStageChange = useCallback(
    (newStage: PipelineStage) => {
      if (isLocked) return;
      const prevStage = stage;
      trackEvent("stage_changed", {
        from_stage_id: prevStage,
        to_stage_id: newStage,
        entity_id: mockLead.id,
      });
      setStage(newStage);
      setStageBanner({ message: "Etapa atualizada", variant: "success" });
    },
    [stage, isLocked]
  );

  const handleMarkWon = useCallback(() => {
    trackEvent("mark_won_clicked", { entity_id: mockLead.id });
    setIsWinLoading(true);
    setTimeout(() => {
      setDealStatus("won");
      setShowWinConfirm(false);
      setIsWinLoading(false);
      setHeaderBanner({ message: "Oportunidade marcada como ganho", variant: "success" });
      trackEvent("mark_won_succeeded", { entity_id: mockLead.id });
    }, 600);
  }, []);

  const handleMarkLost = useCallback(
    (reason: string) => {
      trackEvent("mark_lost_clicked", { entity_id: mockLead.id, reason });
      setIsLostLoading(true);
      setTimeout(() => {
        setDealStatus("lost");
        setShowLostPanel(false);
        setIsLostLoading(false);
        setHeaderBanner({ message: `Oportunidade marcada como perdida — ${reason}`, variant: "info" });
        trackEvent("mark_lost_succeeded", { entity_id: mockLead.id, reason });
      }, 600);
    },
    []
  );

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim().toLowerCase())) {
      setTags([...tags, newTag.trim().toLowerCase()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag: string) => setTags(tags.filter((t) => t !== tag));

  const handleAddContact = () => {
    if (newContact.nome.trim()) {
      setContacts([...contacts, { id: `c${Date.now()}`, ...newContact, isPrimary: false }]);
      setNewContact({ nome: "", email: "", telefone: "", cargo: "" });
      setShowAddContact(false);
    }
  };

  const handleDeleteContact = (id: string) => setContacts(contacts.filter((c) => c.id !== id));

  const handleStartEditContact = (contact: (typeof mockContacts)[0]) => {
    setEditingContactId(contact.id);
    setEditContact({ nome: contact.nome, email: contact.email, telefone: contact.telefone, cargo: contact.cargo });
  };

  const handleSaveEditContact = () => {
    if (editingContactId && editContact.nome.trim()) {
      setContacts(contacts.map((c) => (c.id === editingContactId ? { ...c, ...editContact } : c)));
      setEditingContactId(null);
      setEditContact({ nome: "", email: "", telefone: "", cargo: "" });
    }
  };

  // Status pill
  const statusCfg = statusConfig[dealStatus];

  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => closeModal()}>
        <DialogContent
          className="flex h-[90vh] !max-h-[90vh] w-[90vw] !max-w-[90vw] flex-col overflow-hidden rounded-[var(--radius-bento-card)] !gap-0 !p-0"
          showCloseButton={false}
        >
          {/* ═══════════════════════════════════════════════════════════
              HeaderStickyDeal
              ═══════════════════════════════════════════════════════════ */}
          <div className="sticky top-0 z-10 border-b border-zinc-100 bg-white">
            <div className="px-6 py-4">
              {/* Breadcrumb leve */}
              <nav className="mb-1 flex items-center gap-1 font-body text-[11px] text-zinc-400" aria-label="Breadcrumb">
                <span>Pipes</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-zinc-600">{mockLead.clientName}</span>
              </nav>

              {/* Row 1: Identity + Actions */}
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <DialogTitle className="font-heading text-xl font-semibold text-black">
                      <InlineEditable
                        value={title}
                        onSave={setTitle}
                        className="font-heading text-xl font-semibold"
                        readOnly={isLocked}
                      />
                    </DialogTitle>
                    {/* Score badge with tooltip */}
                    <div
                      className={`inline-flex items-center gap-1 rounded-[8px] px-2 py-1 font-heading text-xs font-bold ${getScoreColor(leadScore)}`}
                      title={`Lead Score: ${leadScore} (${getScoreLabel(leadScore)}) — Baseado em atividades, valor e engajamento`}
                    >
                      <TrendingUp className="h-3 w-3" />
                      {leadScore}
                    </div>
                    {/* Status pill */}
                    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-body text-[11px] font-semibold ${statusCfg.color} ${statusCfg.bg}`}>
                      {dealStatus === "won" && <Check className="h-3 w-3" />}
                      {dealStatus === "lost" && <X className="h-3 w-3" />}
                      {statusCfg.label}
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-sm text-zinc-500">
                    {mockLead.clientName || <span className="italic text-zinc-300">Sem empresa vinculada</span>}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex shrink-0 items-center gap-2">
                  {dealStatus === "open" && (
                    <>
                      <Button
                        onClick={() => setShowWinConfirm(true)}
                        disabled={isWinLoading}
                        className="min-h-[44px] rounded-full bg-status-success px-5 font-heading text-sm text-white hover:bg-status-success/90 focus-visible:ring-2 focus-visible:ring-status-success/50"
                      >
                        {isWinLoading ? <Loader2 className="mr-1.5 h-4 w-4 animate-spin" /> : <Check className="mr-1.5 h-4 w-4" />}
                        Ganho
                      </Button>
                      <Button
                        onClick={() => setShowLostPanel(true)}
                        disabled={isLostLoading}
                        className="min-h-[44px] rounded-full bg-status-danger px-5 font-heading text-sm text-white hover:bg-status-danger/90 focus-visible:ring-2 focus-visible:ring-status-danger/50"
                      >
                        {isLostLoading ? <Loader2 className="mr-1.5 h-4 w-4 animate-spin" /> : <X className="mr-1.5 h-4 w-4" />}
                        Perdido
                      </Button>
                    </>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px] text-zinc-400">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-[12px]">
                      <DropdownMenuItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        Nova atividade
                      </DropdownMenuItem>
                      {dealStatus !== "open" && (
                        <DropdownMenuItem onClick={() => { setDealStatus("open"); setHeaderBanner({ message: "Oportunidade reaberta", variant: "info" }); }}>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Reabrir oportunidade
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-status-danger focus:text-status-danger" onClick={() => setShowDeleteConfirm(true)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px] text-zinc-400" onClick={() => closeModal()}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Row 2: StageRail */}
              <div className="mt-3">
                <StageRail
                  currentStage={stage}
                  onStageChange={handleStageChange}
                  disabled={isLocked}
                  statusBanner={stageBanner}
                  onBannerDismiss={() => setStageBanner(null)}
                />
              </div>

              {/* Row 3: Temperature + Owner inline */}
              <div className="mt-3 flex items-center justify-between">
                <TemperatureChips
                  current={temperature}
                  onChange={setTemperature}
                  suggested={suggestedTemperature}
                  disabled={isLocked}
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex min-h-[44px] items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:bg-zinc-50">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                        {getInitials(responsibleName)}
                      </div>
                      <span className="font-body text-sm font-medium text-black max-sm:hidden">{responsibleName}</span>
                      <Pencil className="h-3 w-3 text-zinc-300" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-[12px]">
                    {mockTeamMembers.map((member) => (
                      <DropdownMenuItem key={member.id} onClick={() => { setResponsibleId(member.id); setResponsibleName(member.name); }} className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200 text-[10px] font-bold text-zinc-600">
                          {getInitials(member.name)}
                        </div>
                        <span className="font-body text-sm">{member.name}</span>
                        {member.id === responsibleId && <Check className="ml-auto h-4 w-4 text-brand" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Header-level banners */}
              {headerBanner && (
                <div className="mt-3">
                  <InlineStatusBanner banner={headerBanner} onDismiss={() => setHeaderBanner(null)} />
                </div>
              )}

              {/* Lost reason panel */}
              {showLostPanel && dealStatus === "open" && (
                <div className="mt-3">
                  <LostReasonPanel
                    onConfirm={handleMarkLost}
                    onCancel={() => setShowLostPanel(false)}
                    isLoading={isLostLoading}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              Body — Split View (Desktop) / Stack (Mobile)
              ═══════════════════════════════════════════════════════════ */}
          <div className="flex min-h-0 flex-1">
            {/* ── Left Column: Summary Bento ────────────────────────── */}
            <div className="hidden w-[360px] shrink-0 border-r border-zinc-50 md:block lg:w-[380px]">
              <ScrollArea className="h-full">
                <div className="space-y-3 p-4">
                  <ForecastCard
                    value={value}
                    monthlyValue={monthlyValue}
                    expectedCloseDate={expectedCloseDate}
                    onValueChange={setValue}
                    onMonthlyChange={setMonthlyValue}
                    onDateChange={setExpectedCloseDate}
                    dealStatus={dealStatus}
                  />
                  <OwnerCard
                    currentId={responsibleId}
                    currentName={responsibleName}
                    teamMembers={mockTeamMembers}
                    onReassign={(id, name) => { setResponsibleId(id); setResponsibleName(name); }}
                  />
                  <SourceMetaCard source={source} createdAt={mockLead.createdAt} tags={tags} />
                  <NotesCard initialNotes={notes} onNotesChange={setNotes} />
                </div>
              </ScrollArea>
            </div>

            {/* ── Right Column: Tabs ────────────────────────────────── */}
            <div className="min-h-0 flex-1">
              <ScrollArea className="h-full">
                <div className="p-5">
                  {/* Mobile-only: Summary Accordion */}
                  <MobileAccordion>
                    <div className="mb-4 space-y-3">
                      <ForecastCard
                        value={value}
                        monthlyValue={monthlyValue}
                        expectedCloseDate={expectedCloseDate}
                        onValueChange={setValue}
                        onMonthlyChange={setMonthlyValue}
                        onDateChange={setExpectedCloseDate}
                        dealStatus={dealStatus}
                      />
                      <SourceMetaCard source={source} createdAt={mockLead.createdAt} tags={tags} />
                      <NotesCard initialNotes={notes} onNotesChange={setNotes} />
                    </div>
                  </MobileAccordion>

                  <Tabs defaultValue="empresa">
                    <TabsList className="w-full overflow-x-auto border-b border-zinc-100 bg-transparent p-0">
                      {[
                        { value: "empresa", label: "Empresa" },
                        { value: "contatos", label: "Contatos" },
                        { value: "valores", label: "Valores" },
                        { value: "tags", label: "Tags" },
                        { value: "historico", label: "Historico" },
                      ].map((tab) => (
                        <TabsTrigger
                          key={tab.value}
                          value={tab.value}
                          className="min-h-[40px] whitespace-nowrap rounded-none border-b-2 border-transparent px-4 py-2.5 font-body text-sm data-[state=active]:border-brand data-[state=active]:text-brand"
                        >
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {/* ── Tab: Empresa ──────────────────────────────── */}
                    <TabsContent value="empresa" className="mt-5">
                      <div className="space-y-3">
                        <EditableField icon={<Building2 className="h-4 w-4" />} label="CNPJ" value={cnpj} onSave={setCnpj} readOnly={isLocked} />
                        <EditableField icon={<FileText className="h-4 w-4" />} label="Razao Social" value={razaoSocial} onSave={setRazaoSocial} readOnly={isLocked} />
                        <EditableField icon={<MapPin className="h-4 w-4" />} label="Endereco" value={endereco} onSave={setEndereco} readOnly={isLocked} />
                        <EditableField icon={<Phone className="h-4 w-4" />} label="Telefone" value={telefoneEmpresa} onSave={setTelefoneEmpresa} readOnly={isLocked} />
                        <EditableField icon={<Mail className="h-4 w-4" />} label="E-mail" value={emailEmpresa} onSave={setEmailEmpresa} readOnly={isLocked} />
                      </div>
                    </TabsContent>

                    {/* ── Tab: Contatos ─────────────────────────────── */}
                    <TabsContent value="contatos" className="mt-5">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="font-heading text-sm font-semibold text-black">
                          Contatos ({contacts.length})
                        </h3>
                        {!isLocked && (
                          <Button onClick={() => setShowAddContact(true)} className="rounded-full bg-brand font-heading text-xs text-white hover:bg-brand/90" size="sm">
                            <Plus className="mr-1 h-3.5 w-3.5" /> Adicionar
                          </Button>
                        )}
                      </div>

                      {showAddContact && (
                        <div className="mb-4 space-y-3 rounded-[14px] border border-zinc-200 p-4">
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">Nome</Label>
                              <Input value={newContact.nome} onChange={(e) => setNewContact({ ...newContact, nome: e.target.value })} className="mt-1 h-8 rounded-[10px] font-body text-sm" placeholder="Nome" />
                            </div>
                            <div>
                              <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">Cargo</Label>
                              <Input value={newContact.cargo} onChange={(e) => setNewContact({ ...newContact, cargo: e.target.value })} className="mt-1 h-8 rounded-[10px] font-body text-sm" placeholder="Cargo" />
                            </div>
                            <div>
                              <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">E-mail</Label>
                              <Input type="email" value={newContact.email} onChange={(e) => setNewContact({ ...newContact, email: e.target.value })} className="mt-1 h-8 rounded-[10px] font-body text-sm" placeholder="email@empresa.com" />
                            </div>
                            <div>
                              <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">Telefone</Label>
                              <PhoneInput value={newContact.telefone} onValueChange={(raw) => setNewContact({ ...newContact, telefone: raw })} className="mt-1 h-8 rounded-[10px] font-body text-sm" />
                            </div>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm" className="rounded-full font-heading text-xs" onClick={() => setShowAddContact(false)}>Cancelar</Button>
                            <Button size="sm" className="rounded-full bg-brand font-heading text-xs text-white hover:bg-brand/90" onClick={handleAddContact}>Salvar</Button>
                          </div>
                        </div>
                      )}

                      {contacts.length === 0 ? (
                        <div className="flex flex-col items-center py-8 text-center">
                          <User className="h-8 w-8 text-zinc-200" />
                          <p className="mt-2 font-body text-sm text-zinc-400">Sem contatos vinculados</p>
                          {!isLocked && (
                            <Button size="sm" variant="ghost" className="mt-2 rounded-full font-body text-xs text-brand" onClick={() => setShowAddContact(true)}>
                              <Plus className="mr-1 h-3.5 w-3.5" /> Vincular contato
                            </Button>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {contacts.map((contact) =>
                            editingContactId === contact.id ? (
                              <div key={contact.id} className="space-y-3 rounded-[14px] border border-brand/20 bg-brand/5 p-4">
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">Nome</Label>
                                    <Input value={editContact.nome} onChange={(e) => setEditContact({ ...editContact, nome: e.target.value })} className="mt-1 h-8 rounded-[10px] font-body text-sm" />
                                  </div>
                                  <div>
                                    <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">Cargo</Label>
                                    <Input value={editContact.cargo} onChange={(e) => setEditContact({ ...editContact, cargo: e.target.value })} className="mt-1 h-8 rounded-[10px] font-body text-sm" />
                                  </div>
                                  <div>
                                    <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">E-mail</Label>
                                    <Input type="email" value={editContact.email} onChange={(e) => setEditContact({ ...editContact, email: e.target.value })} className="mt-1 h-8 rounded-[10px] font-body text-sm" />
                                  </div>
                                  <div>
                                    <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">Telefone</Label>
                                    <PhoneInput value={editContact.telefone} onValueChange={(raw) => setEditContact({ ...editContact, telefone: raw })} className="mt-1 h-8 rounded-[10px] font-body text-sm" />
                                  </div>
                                </div>
                                <div className="flex justify-end gap-2">
                                  <Button variant="ghost" size="sm" className="rounded-full font-heading text-xs" onClick={() => { setEditingContactId(null); setEditContact({ nome: "", email: "", telefone: "", cargo: "" }); }}>Cancelar</Button>
                                  <Button size="sm" className="rounded-full bg-brand font-heading text-xs text-white hover:bg-brand/90" onClick={handleSaveEditContact}>Salvar</Button>
                                </div>
                              </div>
                            ) : (
                              <ContactCard
                                key={contact.id}
                                contact={contact}
                                onEdit={() => handleStartEditContact(contact)}
                                onDelete={() => handleDeleteContact(contact.id)}
                              />
                            )
                          )}
                        </div>
                      )}
                    </TabsContent>

                    {/* ── Tab: Valores ──────────────────────────────── */}
                    <TabsContent value="valores" className="mt-5">
                      <div className="space-y-3">
                        <EditableField
                          icon={<DollarSign className="h-4 w-4" />}
                          label="Valor Total"
                          value={formatCurrency(value)}
                          onSave={(v) => { const num = Number(v.replace(/\D/g, "")); if (!isNaN(num)) setValue(num); }}
                          readOnly={isLocked}
                        />
                        <EditableField
                          icon={<DollarSign className="h-4 w-4" />}
                          label="Valor Mensal"
                          value={formatCurrency(monthlyValue)}
                          onSave={(v) => { const num = Number(v.replace(/\D/g, "")); if (!isNaN(num)) setMonthlyValue(num); }}
                          readOnly={isLocked}
                        />

                        {/* Discount detection */}
                        {dealStatus === "open" && (value < referenceSetup * 0.8 || monthlyValue < referenceMRR * 0.9) && (
                          <div className="flex items-start gap-3 rounded-[14px] border border-status-warning/20 bg-status-warning/5 p-4">
                            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-status-warning" />
                            <div className="flex-1">
                              <p className="font-heading text-sm font-semibold text-status-warning">Desconto detectado</p>
                              <div className="mt-1 space-y-0.5">
                                {value < referenceSetup * 0.8 && (
                                  <p className="font-body text-xs text-status-warning">
                                    Setup ({formatCurrency(value)}) abaixo de 80% da referencia ({formatCurrency(referenceSetup)})
                                  </p>
                                )}
                                {monthlyValue < referenceMRR * 0.9 && (
                                  <p className="font-body text-xs text-status-warning">
                                    MRR ({formatCurrency(monthlyValue)}) abaixo de 90% da referencia ({formatCurrency(referenceMRR)})
                                  </p>
                                )}
                              </div>
                              <Button size="sm" className="mt-2 rounded-full bg-status-warning font-heading text-xs text-white hover:bg-status-warning/90">
                                <Send className="mr-1 h-3.5 w-3.5" /> Solicitar Aprovacao
                              </Button>
                            </div>
                          </div>
                        )}

                        <EditableField icon={<Calendar className="h-4 w-4" />} label="Previsao de Fechamento" value={expectedCloseDate} onSave={setExpectedCloseDate} type="date" readOnly={isLocked} />
                        <EditableField icon={<Globe className="h-4 w-4" />} label="Fonte" value={source} onSave={() => {}} readOnly />
                      </div>
                    </TabsContent>

                    {/* ── Tab: Tags ─────────────────────────────────── */}
                    <TabsContent value="tags" className="mt-5">
                      <div className="space-y-4">
                        {!isLocked && (
                          <div className="flex items-center gap-2">
                            <Input
                              value={newTag}
                              onChange={(e) => setNewTag(e.target.value)}
                              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddTag(); } }}
                              placeholder="Digite uma nova tag..."
                              className="h-8 flex-1 rounded-[10px] font-body text-sm"
                            />
                            <Button onClick={handleAddTag} className="rounded-full bg-brand font-heading text-xs text-white hover:bg-brand/90" size="sm">
                              <Plus className="mr-1 h-3.5 w-3.5" /> Adicionar
                            </Button>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="gap-1.5 rounded-[8px] py-1.5 pr-1.5 font-body text-sm">
                              {tag}
                              {!isLocked && (
                                <button onClick={() => handleRemoveTag(tag)} className="rounded-full p-0.5 transition-colors hover:bg-zinc-200" aria-label={`Remover tag ${tag}`}>
                                  <X className="h-3 w-3 text-zinc-400" />
                                </button>
                              )}
                            </Badge>
                          ))}
                        </div>
                        {tags.length === 0 && (
                          <div className="flex flex-col items-center py-8 text-center">
                            <Tag className="h-8 w-8 text-zinc-200" />
                            <p className="mt-2 font-body text-sm text-zinc-400">Sem tags ainda</p>
                            {!isLocked && (
                              <p className="mt-1 font-body text-xs text-zinc-300">Adicione tags para categorizar esta oportunidade</p>
                            )}
                          </div>
                        )}
                      </div>
                    </TabsContent>

                    {/* ── Tab: Historico ─────────────────────────────── */}
                    <TabsContent value="historico" className="mt-5">
                      <TimelinePremium events={mockTimeline} />
                    </TabsContent>
                  </Tabs>
                </div>
              </ScrollArea>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ═══════════════════════════════════════════════════════════
          Win Confirmation
          ═══════════════════════════════════════════════════════════ */}
      <AlertDialog open={showWinConfirm} onOpenChange={setShowWinConfirm}>
        <AlertDialogContent className="rounded-[20px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-heading text-xl">
              Marcar como ganho?
            </AlertDialogTitle>
            <AlertDialogDescription className="font-body text-sm text-zinc-600">
              Marcar como ganho encerra a oportunidade. Edicoes sensiveis serao bloqueadas. Voce quer continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full" disabled={isWinLoading}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleMarkWon}
              disabled={isWinLoading}
              className="rounded-full bg-status-success text-white hover:bg-status-success/90"
            >
              {isWinLoading ? <Loader2 className="mr-1.5 h-4 w-4 animate-spin" /> : <Check className="mr-1.5 h-4 w-4" />}
              Sim, marcar como ganho
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* ═══════════════════════════════════════════════════════════
          Delete Confirmation
          ═══════════════════════════════════════════════════════════ */}
      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent className="rounded-[20px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-heading text-xl">
              Excluir oportunidade?
            </AlertDialogTitle>
            <AlertDialogDescription className="font-body text-sm text-zinc-600">
              Esta acao nao pode ser desfeita. Todos os dados desta oportunidade serao removidos permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full">Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => { setShowDeleteConfirm(false); closeModal(); }}
              className="rounded-full bg-status-danger text-white hover:bg-status-danger/90"
            >
              Sim, excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
