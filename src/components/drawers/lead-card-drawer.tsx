"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  X,
  Phone,
  MessageCircle,
  Circle,
  Mail,
  Calendar,
  Tag,
  DollarSign,
  User,
  Users,
  Store,
  Clock,
  Flame,
  Thermometer,
  Snowflake,
  MoreHorizontal,
  Building2,
  Plus,
  Trash2,
  Star,
  Shield,
  ChevronRight,
  Check,
  CheckCircle,
  Pencil,
  Globe,
  MapPin,
  TrendingUp,
  FileText,
  ArrowRight,
  AlertTriangle,
  RefreshCw,
  Loader2,
  ChevronDown,
  Activity,
  Filter,
  Instagram,
  ExternalLink,
  UtensilsCrossed,
  Copy,
  UserCircle,
  Coffee,
  Beer,
  Pizza,
  ShoppingBasket,
  Truck,
  GlassWater,
  ChefHat,
  Wine,
  Clock3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { VisitCard } from "@/components/cards/visit-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { maskCep } from "@/lib/masks";
import { PhoneInput } from "@/components/ui/masked-inputs";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
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
import type { Activity as FlowActivity, Contact, Temperature, PipelineStage, Opportunity } from "@/types";
import {
  calculateCardPatentScore,
  calculateLeadScore,
  calculateTemperature,
  getPositionPatentScore,
  RESTAURANT_POSITIONS,
} from "@/lib/business-rules";
import { mockActivities } from "@/lib/mock-data";
import { stageFieldsConfig } from "@/lib/mock-stage-fields";
import { StageFieldsPanel } from "@/components/drawers/stage-fields";
import { NegotiationTab } from "./lead-negotiation-tab";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { NewVisitModal } from "@/components/modals/new-visit-modal";
import type { VisitFormData } from "@/lib/validations/visit";
import { NewActivityModal } from "@/components/modals/new-activity-modal";
import type { ActivityFormData } from "@/lib/validations/activity";
import { useContactStore } from "@/stores/contact-store";
import { useVisitStore } from "@/stores/visit-store";
import { useNoteStore } from "@/stores/note-store";
import { mockUsers } from "@/lib/mock-data";


// ═══════════════════════════════════════════════════════════════════
// Types & Constants
// ═══════════════════════════════════════════════════════════════════

type DealStatus = "open" | "won" | "lost";
type BannerVariant = "success" | "error" | "info" | "warning";
type TimelineFilterType =
  | "all"
  | "activity"
  | "stage-change"
  | "note"
  | "value-change";

interface InlineBanner {
  message: string;
  variant: BannerVariant;
  action?: { label: string; onClick: () => void };
}

type NoteIntent =
  | "general"
  | "pedido_cliente"
  | "objecao"
  | "decisao"
  | "proximo_passo"
  | "system";
type NoteVisibility = "team" | "internal";
type NotesFilter = "all" | "cliente" | "decisao" | "proximo_passo";
type StageFieldSaveState = "idle" | "saving" | "saved" | "error";
type LeadDrawerTab =
  | "empresa"
  | "contatos"
  | "visitas"
  | "atividades"
  | "negociacao"
  | "anotacoes"
  | "linha-do-tempo";

interface OpportunityNote {
  id: string;
  body: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  intent: NoteIntent;
  visibility: NoteVisibility;
  isSystem?: boolean;
}

interface NextStepDraft {
  action: string;
  dueDate: string;
  channel: "call" | "whatsapp" | "email" | "meeting" | "visit";
  ownerId: string;
}

const NOTE_EDIT_WINDOW_MS = 15 * 60 * 1000;
const NOTE_MIN_LENGTH = 10;
const NOTE_MAX_LENGTH = 2000;
const EXECUTION_SIGNAL_WINDOW_DAYS = 7;
const MIN_CONTACTS_PER_CARD = 1;
const MAX_CONTACTS_PER_CARD = 10;
const PROPOSAL_STAGE_ID: PipelineStage = "proposta-enviada";
const LOGGED_USER = {
  id: "u1",
  name: "Maria Silva",
};

const noteIntentOptions: Array<{ id: Exclude<NoteIntent, "system">; label: string }> = [
  { id: "pedido_cliente", label: "Pedido do cliente" },
  { id: "objecao", label: "Objeção" },
  { id: "decisao", label: "Decisão" },
  { id: "proximo_passo", label: "Próximo passo" },
];

const noteFilterOptions: Array<{ id: NotesFilter; label: string }> = [
  { id: "all", label: "Todos" },
  { id: "cliente", label: "Cliente" },
  { id: "decisao", label: "Decisões" },
  { id: "proximo_passo", label: "Próximo passo" },
];

const noteIntentMeta: Record<
  NoteIntent,
  { label: string; chipClass: string }
> = {
  general: {
    label: "Registro",
    chipClass: "border-zinc-200 bg-zinc-100 text-zinc-700",
  },
  pedido_cliente: {
    label: "Pedido do cliente",
    chipClass: "border-sky-200 bg-sky-50 text-sky-700",
  },
  objecao: {
    label: "Objeção",
    chipClass: "border-amber-200 bg-amber-50 text-amber-700",
  },
  decisao: {
    label: "Decisão",
    chipClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  proximo_passo: {
    label: "Próximo passo",
    chipClass: "border-brand/20 bg-brand/10 text-brand",
  },
  system: {
    label: "Sistema",
    chipClass: "border-zinc-200 bg-zinc-100 text-zinc-500",
  },
};

function resolveLeadDrawerTab(rawTab: unknown): LeadDrawerTab {
  if (typeof rawTab !== "string") return "empresa";
  const tab = rawTab.trim().toLowerCase();

  switch (tab) {
    case "empresa":
      return "empresa";
    case "contatos":
      return "contatos";
    case "visitas":
      return "visitas";
    case "atividades":
      return "atividades";
    case "negociacao":
    case "negociação":
      return "negociacao";
    case "anotacoes":
    case "anotações":
    case "notes":
      return "anotacoes";
    case "linha-do-tempo":
    case "timeline":
      return "linha-do-tempo";
    default:
      return "empresa";
  }
}

// ═══════════════════════════════════════════════════════════════════
// Telemetria — Frontend event tracking stub
// ═══════════════════════════════════════════════════════════════════

function trackEvent(
  event: string,
  properties?: Record<string, string | number | boolean>,
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
  {
    label: string;
    icon: React.ReactNode;
    color: string;
    bg: string;
    border: string;
    chipClass: string;
  }
> = {
  hot: {
    label: "Quente",
    icon: <Flame className="h-3.5 w-3.5" />,
    color: "text-status-danger",
    bg: "bg-status-danger-light",
    border: "border-status-danger/15",
    chipClass: "bg-red-50 text-red-600 border-red-200/40 hover:bg-red-100/60",
  },
  warm: {
    label: "Morna",
    icon: <Thermometer className="h-3.5 w-3.5" />,
    color: "text-status-warning",
    bg: "bg-status-warning-light",
    border: "border-status-warning/15",
    chipClass:
      "bg-amber-50 text-amber-600 border-amber-200/40 hover:bg-amber-100/60",
  },
  cold: {
    label: "Fria",
    icon: <Snowflake className="h-3.5 w-3.5" />,
    color: "text-status-info",
    bg: "bg-status-info-light",
    border: "border-status-info/15",
    chipClass: "bg-sky-50 text-sky-600 border-sky-200/40 hover:bg-sky-100/60",
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

const statusConfig: Record<
  DealStatus,
  { label: string; color: string; bg: string }
> = {
  open: { label: "Aberto", color: "text-brand", bg: "bg-brand/10" },
  won: {
    label: "Ganho",
    color: "text-status-success",
    bg: "bg-status-success/10",
  },
  lost: {
    label: "Perdido",
    color: "text-status-danger",
    bg: "bg-status-danger/10",
  },
};

const COMPANY_TYPES = [
  { id: "restaurante", label: "Restaurante", icon: UtensilsCrossed },
  { id: "cafeteria", label: "Cafeteria", icon: Coffee },
  { id: "bar", label: "Bar / Pub", icon: Beer },
  { id: "pizzaria", label: "Pizzaria", icon: Pizza },
  { id: "hamburgueria", label: "Hamburgueria", icon: ChefHat },
  { id: "padaria", label: "Padaria", icon: ShoppingBasket },
  { id: "sorveteria", label: "Sorveteria", icon: GlassWater },
  { id: "delivery", label: "Delivery", icon: Truck },
  { id: "food-truck", label: "Food Truck", icon: Flame },
  { id: "bistro", label: "Bistrô", icon: Wine },
  { id: "buffet", label: "Buffet", icon: Users },
  { id: "adega", label: "Adega / Empório", icon: Store },
];

const DAYS_OF_WEEK = [
  { id: "seg", label: "Segunda" },
  { id: "ter", label: "Terça" },
  { id: "qua", label: "Quarta" },
  { id: "qui", label: "Quinta" },
  { id: "sex", label: "Sexta" },
  { id: "sab", label: "Sábado" },
  { id: "dom", label: "Domingo" },
];

const UF_LIST = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];


// ═══════════════════════════════════════════════════════════════════
// Mock Data
// ═══════════════════════════════════════════════════════════════════

const mockLead = {
  id: "1",
  clientId: "client-1",
  title: "Restaurante Bela Vista",
  clientName: "Restaurante Bela Vista Ltda",
  nomeFantasia: "Restaurante Bela Vista",
  segmento: "Food service premium",
  nomeInterno: "",
  fonte: "Indicação parceiro",
  cep: "01411-000",
  logradouro: "Rua das Flores",
  numero: "123",
  complemento: "",
  bairro: "Jardim Paulista",
  cidade: "Sao Paulo",
  estado: "SP",
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
  notes:
    "Cliente muito interessado. Agendar reuniao de apresentacao do modulo financeiro.",
  groupName: null,
  website: "https://belavista.com.br",
  instagram: "https://instagram.com/belavistarestaurante",
  cardapio: "https://belavista.com.br/cardapio",
  metadata: {
    stageValues: {
      origem_lead: "google",
    },
  },
};

function getCargoLabel(value: string): string {
  return RESTAURANT_POSITIONS.find((p) => p.value === value)?.label ?? value;
}

function getPatentScore(cargo: string): number {
  return getPositionPatentScore(cargo);
}

const mockTeamMembers = mockUsers.filter(u => u.isActive).map(u => ({ id: u.id, name: u.name, avatar: "" }));

interface TimelineItem {
  id: string | number;
  type: string;
  message?: string;
  user?: string;
  date: string;
  title?: string;
  description?: string;
  author?: string;
  icon?: React.ElementType;
}

function buildTimelineFromStores(opportunityId: string): TimelineItem[] {
  const visits = useVisitStore.getState().getByOpportunity(opportunityId);
  const notes = useNoteStore.getState().getByOpportunity(opportunityId);

  const items: TimelineItem[] = [];

  for (const v of visits) {
    items.push({
      id: v.id,
      type: v.status === "realizada" ? "activity" : "created",
      message: `Visita ${v.type}: ${v.objective ?? v.location}`,
      user: v.responsible,
      date: new Date(v.startAt).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }),
    });
  }

  for (const n of notes) {
    items.push({
      id: n.id,
      type: n.isSystem ? "stage-change" : "note",
      message: n.body.slice(0, 80) + (n.body.length > 80 ? "..." : ""),
      user: n.authorName,
      date: new Date(n.createdAt).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }),
    });
  }

  return items.sort((a, b) => {
    const da = new Date(a.date.split(", ").reverse().join("T") || a.date);
    const db = new Date(b.date.split(", ").reverse().join("T") || b.date);
    return db.getTime() - da.getTime();
  });
}

type VisitType = "presencial" | "remoto" | "outro";
type VisitStatus = "agendada" | "realizada" | "cancelada";

interface VisitRow {
  id: string;
  type: VisitType;
  location: string;
  status: VisitStatus;
  startAt: string;
  responsible: string;
  objective?: string;
  result?: string;
  outcome?: "realizada" | "no-show" | "remarcada";
  durationMinutes?: number;
  link?: string;
  platform?: string;
  cancellationReason?: string;
  accessSearch?: string;
  details?: string;
  createdAt: string;
}

const visitPlatformLabel: Record<string, string> = {
  "google-meet": "Google Meet",
  zoom: "Zoom",
  whatsapp: "WhatsApp",
  outro: "Outra plataforma",
};

const visitOutcomeLabel: Record<"realizada" | "no-show" | "remarcada", string> = {
  realizada: "Realizada",
  "no-show": "No-show",
  remarcada: "Remarcada",
};

const visitStatusSortOrder: Record<VisitStatus, number> = {
  agendada: 0,
  realizada: 1,
  cancelada: 2,
};

function formatVisitDateLabel(isoString: string) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "Data inválida";
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const mockVisits: VisitRow[] = [
  {
    id: "v1",
    type: "presencial",
    location: "Restaurante Bela Vista",
    status: "agendada",
    startAt: "2026-02-15T14:00:00.000Z",
    responsible: "Maria Silva",
    objective: "Validar escopo de onboarding e próximos marcos.",
    durationMinutes: 60,
    createdAt: "2026-02-10T09:00:00.000Z",
  },
  {
    id: "v2",
    type: "remoto",
    location: "Google Meet",
    status: "realizada",
    startAt: "2026-02-10T10:00:00.000Z",
    responsible: "Pedro Santos",
    result: "Cliente demonstrou interesse no módulo financeiro.",
    objective: "Apresentar proposta e mapear objeções.",
    platform: "google-meet",
    link: "https://meet.google.com/abc-defg-hij",
    durationMinutes: 60,
    createdAt: "2026-02-06T12:00:00.000Z",
  },
];

const mockNotesSeed: OpportunityNote[] = [
  {
    id: "n1",
    authorId: "u1",
    authorName: "Maria Silva",
    createdAt: "2026-02-14T09:30:00.000Z",
    body: "Cliente solicitou nova proposta com desconto de 5% para fechar ainda este mês.",
    intent: "pedido_cliente",
    visibility: "team",
  },
  {
    id: "n2",
    authorId: "u2",
    authorName: "Pedro Santos",
    createdAt: "2026-02-10T16:15:00.000Z",
    body: "Reunião de alinhamento realizada. O cliente gostou bastante da demonstração do painel financeiro.",
    intent: "decisao",
    visibility: "team",
  },
  {
    id: "n3",
    authorId: "system",
    authorName: "Sistema",
    createdAt: "2026-02-05T10:00:00.000Z",
    body: "Oportunidade movida para a etapa de Negociação.",
    intent: "system",
    visibility: "team",
    isSystem: true,
  },
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

function getScoreColor(score: number) {
  if (score >= 70)
    return "bg-emerald-50 text-emerald-700 border border-emerald-200/50";
  if (score >= 40)
    return "bg-amber-50 text-amber-700 border border-amber-200/50";
  return "bg-red-50 text-red-700 border border-red-200/50";
}

function getScoreLabel(score: number) {
  if (score >= 70) return "Alto";
  if (score >= 40) return "Medio";
  return "Baixo";
}


function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function isFieldValueEmpty(value: string | number | boolean | null | undefined) {
  if (value === null || value === undefined) return true;
  if (typeof value === "boolean") return false;
  if (typeof value === "number") return Number.isNaN(value) || value === 0;
  return value.toString().trim().length === 0;
}

function formatNoteDateTime(dateIso: string) {
  const date = new Date(dateIso);
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatNoteDayLabel(dateIso: string) {
  const date = new Date(dateIso);
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
  });
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
    success:
      "bg-status-success/10 text-status-success border-status-success/20",
    error: "bg-status-danger/10 text-status-danger border-status-danger/20",
    info: "bg-brand/10 text-brand border-brand/20",
    warning:
      "bg-status-warning/10 text-status-warning border-status-warning/20",
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
            onChange={(e) => {
              setDraft(e.target.value);
              setError(null);
            }}
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
          <p className="font-body text-[10px] text-status-danger" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <span
      onClick={() => {
        setDraft(value);
        setEditing(true);
      }}
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
  const currentLabel = stageConfig[currentIndex]?.label ?? "Etapa";

  return (
    <div className="space-y-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            disabled={disabled}
            className={`inline-flex h-8 items-center gap-1.5 rounded-full border border-brand/20 bg-brand/10 px-3 py-1.5 font-body text-xs font-semibold text-brand transition-all duration-150 ease-out hover:bg-brand/15 hover:border-brand/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-1 ${disabled ? "pointer-events-none opacity-50" : ""}`}
            aria-label={`Etapa atual: ${currentLabel}`}
          >
            <span className="font-body text-[10px] font-medium text-brand/60">
              Etapa
            </span>
            <span className="font-body text-[11px]">{currentLabel}</span>
            <ChevronDown className="h-3 w-3 opacity-60" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="rounded-[var(--radius-bento-card)] min-w-[200px]"
        >
          {stageConfig.map((stage, i) => {
            const isActive = stage.id === currentStage;
            const isPast = i < currentIndex;

            return (
              <DropdownMenuItem
                key={stage.id}
                onClick={() => onStageChange(stage.id)}
                className={`flex items-center gap-2 font-body text-sm ${isActive
                  ? "font-semibold text-brand"
                  : isPast
                    ? "text-brand/70"
                    : "text-zinc-500"
                  }`}
              >
                {isPast && <Check className="h-3.5 w-3.5 text-brand" />}
                {isActive && (
                  <ChevronRight className="h-3.5 w-3.5 text-brand" />
                )}
                {!isPast && !isActive && <span className="h-3.5 w-3.5" />}
                {stage.label}
                {isActive && (
                  <span className="ml-auto rounded-full bg-brand/10 px-1.5 py-0.5 font-body text-[9px] font-medium text-brand">
                    Atual
                  </span>
                )}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
      {statusBanner && (
        <InlineStatusBanner banner={statusBanner} onDismiss={onBannerDismiss} />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Timeline Premium with filter
// ═══════════════════════════════════════════════════════════════════


function getTimelineIcon(type: string, CustomIcon?: React.ElementType) {
  if (CustomIcon) return <CustomIcon className="h-3.5 w-3.5" />;
  switch (type) {
    case "activity":
      return <CheckCircle className="h-3.5 w-3.5" />;
    case "stage-change":
      return <ArrowRight className="h-3.5 w-3.5" />;
    case "note":
      return <FileText className="h-3.5 w-3.5" />;
    case "value-change":
      return <DollarSign className="h-3.5 w-3.5" />;
    case "tag-added":
      return <Tag className="h-3.5 w-3.5" />;
    default:
      return <Clock className="h-3.5 w-3.5" />;
  }
}

function getTimelineIconColor(type: string) {
  switch (type) {
    case "activity":
      return "bg-brand/10 text-brand";
    case "stage-change":
      return "bg-purple-50 text-purple-600";
    case "note":
      return "bg-yellow-50 text-yellow-600";
    case "value-change":
      return "bg-green-50 text-green-600";
    case "tag-added":
      return "bg-zinc-100 text-zinc-500";
    default:
      return "bg-zinc-100 text-zinc-500";
  }
}

function TimelinePremium({ events }: { events: TimelineItem[] }) {
  const [filter, setFilter] = useState<TimelineFilterType>("all");

  const filterOptions: { value: TimelineFilterType; label: string }[] = [
    { value: "all", label: "Todos" },
    { value: "activity", label: "Atividades" },
    { value: "stage-change", label: "Etapas" },
    { value: "note", label: "Notas" },
    { value: "value-change", label: "Valores" },
  ];

  const filteredEvents =
    filter === "all" ? events : events.filter((e: TimelineItem) => e.type === filter);

  return (
    <div className="space-y-4">
      {/* Filter chips */}
      <div className="flex items-center gap-2">
        <Filter className="h-3.5 w-3.5 text-zinc-300" />
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={cn(
              "rounded-full px-2.5 py-1 font-body text-[11px] font-medium transition-all",
              filter === opt.value
                ? "bg-brand/10 text-brand"
                : "bg-zinc-50 text-zinc-400 hover:bg-zinc-100"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Timeline entries */}
      {filteredEvents.length === 0 ? (
        <div className="flex flex-col items-center py-8 text-center">
          <Activity className="h-8 w-8 text-zinc-200" />
          <p className="mt-2 font-body text-sm text-zinc-400">
            Sem atividades encontradas
          </p>
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
          {filteredEvents.map((event: TimelineItem, i: number) => (
            <div key={event.id} className="group relative flex gap-3 pb-5">
              {i < filteredEvents.length - 1 && (
                <div className="absolute left-[13px] top-7 h-full w-px bg-zinc-100" />
              )}
              <div
                className={cn(
                  "relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ring-4 ring-white",
                  getTimelineIconColor(event.type)
                )}
              >
                {getTimelineIcon(event.type, event.icon)}
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex flex-col">
                  <span className="font-heading text-xs font-semibold text-zinc-900">
                    {event.title || "Evento"}
                  </span>
                  <p className="font-body text-sm text-zinc-600">
                    {event.description || event.message}
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  {/* Tiny avatar placeholder or name */}
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-zinc-100 text-[9px] font-bold text-zinc-500">
                    {(event.author || event.user || "?").charAt(0)}
                  </div>
                  <p className="font-body text-[10px] text-zinc-400">
                    {event.author || event.user} &middot; {event.date}
                  </p>
                </div>
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
  patentScore,
  isPrimary,
  onEdit,
  onDelete,
  onToggleDecisionMaker,
}: {
  contact: Contact;
  patentScore: number;
  isPrimary: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onToggleDecisionMaker: () => void;
}) {
  return (
    <div className="group flex items-stretch rounded-[14px] border border-zinc-100 transition-all hover:border-zinc-200 hover:shadow-sm">
      {/* Decision-maker toggle — left side */}
      <button
        type="button"
        onClick={onToggleDecisionMaker}
        className={`flex w-9 shrink-0 items-center justify-center rounded-l-[14px] border-r transition-colors ${contact.isDecisionMaker
          ? "border-brand/20 bg-brand/10 text-brand"
          : "border-zinc-100 bg-zinc-50/50 text-zinc-300 hover:bg-zinc-100 hover:text-zinc-400"
          }`}
        aria-label={contact.isDecisionMaker ? "Remover como decisor" : "Marcar como decisor"}
        title={contact.isDecisionMaker ? "Decisor (clique para remover)" : "Marcar como decisor"}
      >
        <Shield className="h-3.5 w-3.5" />
      </button>

      {/* Card content */}
      <div className="flex flex-1 items-start justify-between p-3.5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50">
            <User className="h-4 w-4 text-zinc-400" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-heading text-sm font-semibold text-black">
                {contact.nome}
              </p>
              {isPrimary && (
                <Badge className="rounded-[6px] bg-zinc-100 px-1.5 py-0.5 font-body text-[9px] text-zinc-700">
                  Principal
                </Badge>
              )}
              {contact.isDecisionMaker && (
                <Badge className="gap-0.5 rounded-[6px] bg-brand/10 px-1.5 py-0.5 font-body text-[9px] text-brand">
                  <Shield className="h-2.5 w-2.5" /> Decisor
                </Badge>
              )}
              <Badge className="gap-0.5 rounded-[6px] bg-indigo-50 px-1.5 py-0.5 font-body text-[9px] text-indigo-700">
                Patente {patentScore}
              </Badge>
            </div>
            <p className="font-body text-[11px] text-zinc-400">{getCargoLabel(contact.cargo)}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1 font-body text-[11px] text-zinc-500">
                <Mail className="h-3 w-3" /> {contact.email}
              </span>
              <span className="flex items-center gap-1 font-body text-[11px] text-zinc-500">
                <Phone className="h-3 w-3" /> {contact.telefone}
              </span>
            </div>
            {contact.personalidade && (
              <p className="mt-1.5 font-body text-[11px] italic text-zinc-400">
                &ldquo;{contact.personalidade}&rdquo;
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={onEdit}
            className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600"
            aria-label="Editar contato"
          >
            <Pencil className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={onDelete}
            className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-status-danger/10 hover:text-status-danger"
            aria-label="Remover contato"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Temperature Selector (compact)
// ═══════════════════════════════════════════════════════════════════

function TemperatureSelect({
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
  const cfg = temperatureConfig[current];

  return (
    <div
      className={`flex items-center gap-2 ${disabled ? "pointer-events-none opacity-50" : ""}`}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            disabled={disabled}
            className={`inline-flex h-8 items-center gap-1.5 rounded-full border px-3 py-1.5 font-body text-[11px] font-semibold transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-1 ${cfg.chipClass}`}
            aria-label={`Temperatura: ${cfg.label}`}
          >
            {cfg.icon}
            {cfg.label}
            <ChevronDown className="h-3 w-3 opacity-50" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="rounded-[var(--radius-bento-card)] min-w-[180px]"
        >
          {(["hot", "warm", "cold"] as Temperature[]).map((temp) => {
            const tempCfg = temperatureConfig[temp];
            const isSelected = current === temp;

            return (
              <DropdownMenuItem
                key={temp}
                onClick={() => onChange(temp)}
                className={`flex items-center gap-2 font-body text-sm ${isSelected ? "font-semibold" : ""}`}
              >
                <span className={tempCfg.color}>{tempCfg.icon}</span>
                <span className={isSelected ? tempCfg.color : "text-zinc-600"}>
                  {tempCfg.label}
                </span>
                {isSelected && (
                  <Check className="ml-auto h-3.5 w-3.5 text-brand" />
                )}
              </DropdownMenuItem>
            );
          })}
          {suggested && suggested !== current && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => onChange(suggested)}
                className="flex items-center gap-2 font-body text-xs text-brand"
              >
                <Star className="h-3 w-3" />
                Sugestao: {temperatureConfig[suggested].label}
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
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
        <h4 className="font-heading text-sm font-semibold text-status-danger">
          Motivo da perda
        </h4>
        <p className="mt-0.5 font-body text-xs text-zinc-500">
          Marcar como perdido encerra a oportunidade. Voce quer continuar?
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {lostReasons.map((r) => (
          <button
            key={r}
            onClick={() => setReason(r)}
            className={`rounded-full border px-3 py-1.5 font-body text-xs transition-all ${reason === r
              ? "border-status-danger bg-status-danger text-white"
              : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
              }`}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full font-heading text-xs"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancelar
        </Button>
        <Button
          size="sm"
          className="rounded-full bg-status-danger font-heading text-xs text-white hover:bg-status-danger/90"
          onClick={() => {
            if (reason) onConfirm(reason);
          }}
          disabled={!reason || isLoading}
        >
          {isLoading ? (
            <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
          ) : null}
          Confirmar perda
        </Button>
      </div>
    </div>
  );
}



// ═══════════════════════════════════════════════════════════════════
// CopyButton — Inline copy-to-clipboard with fade feedback
// ═══════════════════════════════════════════════════════════════════

function CopyButton({
  value,
  children,
  className = "",
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }, [value]);

  return (
    <button
      onClick={handleCopy}
      className={`group/copy relative inline-flex items-center gap-1.5 transition-all duration-120 ease-out hover:scale-[1.03] hover:bg-black/[0.04] active:scale-[0.97] rounded-md px-1 py-0.5 ${className}`}
      title={`Copiar: ${value}`}
    >
      {children}
      {copied ? (
        <span className="inline-flex items-center gap-0.5 font-body text-[9px] font-semibold text-status-success animate-in fade-in duration-[90ms]">
          <Check className="h-2.5 w-2.5" />
          Copiado
        </span>
      ) : (
        <Copy className="h-2.5 w-2.5 text-zinc-300 opacity-0 transition-opacity duration-120 group-hover/copy:opacity-100" />
      )}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════════════
// ExecutiveCompanyStrip — Faixa C (3 blocos: Empresa, Contato, Deal)
// ═══════════════════════════════════════════════════════════════════

function ExecutiveCompanyStrip({
  nomeFantasia,
  segmento,
  enderecoFormatado,
  telefoneEmpresa,
  emailEmpresa,
  website,
  instagramUrl,
  cardapioUrl,
  primaryContact,
  stage,
  temperature,
  responsibleName,
  responsibleId,
  suggestedTemperature,
  onStageChange,
  onTemperatureChange,
  onResponsibleChange,
  onOpenPrimaryContact,
  onCreatePrimaryContact,
  teamMembers,
  isLocked,
  stageBanner,
  onStageBannerDismiss,
}: {
  nomeFantasia: string;
  segmento: string;
  enderecoFormatado: string;
  telefoneEmpresa: string;
  emailEmpresa: string;
  website: string;
  instagramUrl: string;
  cardapioUrl: string;
  primaryContact: {
    nome: string;
    cargo: string;
    email: string;
    telefone: string;
  } | null;
  stage: PipelineStage;
  temperature: Temperature;
  responsibleName: string;
  responsibleId: string;
  suggestedTemperature?: Temperature;
  onStageChange: (s: PipelineStage) => void;
  onTemperatureChange: (t: Temperature) => void;
  onResponsibleChange: (id: string, name: string) => void;
  onOpenPrimaryContact: () => void;
  onCreatePrimaryContact: () => void;
  teamMembers: { id: string; name: string; avatar: string }[];
  isLocked: boolean;
  stageBanner: InlineBanner | null;
  onStageBannerDismiss: () => void;
}) {
  const [stripUpdatedLabel, setStripUpdatedLabel] = useState<string | null>(
    null,
  );
  const hasAnyLink = website || instagramUrl || cardapioUrl;
  const hasAnyContact = telefoneEmpresa || emailEmpresa || hasAnyLink;

  const showStripUpdate = useCallback((msg: string) => {
    setStripUpdatedLabel(msg);
    setTimeout(() => setStripUpdatedLabel(null), 1200);
  }, []);

  return (
    <div className="mt-4 pb-2 animate-in fade-in slide-in-from-bottom-1 duration-[180ms] ease-out">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {/* ─── Bloco A: Empresa & Links (5 cols) ─────────────────── */}
        <div className="md:col-span-5 min-w-0">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/8">
              <Building2 className="h-3.5 w-3.5 text-brand" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-heading text-[13px] font-bold text-black leading-tight">
                {nomeFantasia || "Sem empresa vinculada"}
              </p>
              {segmento && (
                <p className="truncate font-body text-[10px] text-zinc-400 leading-tight">
                  {segmento}
                </p>
              )}
            </div>
          </div>

          {/* Endereço */}
          <div className="mt-1.5 pl-[38px]">
            {enderecoFormatado ? (
              <p
                className="truncate font-body text-[10px] text-zinc-400 leading-tight"
                title={enderecoFormatado}
              >
                <MapPin className="mr-0.5 inline h-2.5 w-2.5 text-zinc-300 align-[-1px]" />
                {enderecoFormatado}
              </p>
            ) : (
              <p className="font-body text-[10px] text-zinc-300 italic leading-tight">
                <MapPin className="mr-0.5 inline h-2.5 w-2.5 text-zinc-200 align-[-1px]" />
                Endereco nao informado
              </p>
            )}

            {/* Contact icons & links row */}
            {hasAnyContact ? (
              <div className="mt-1.5 flex flex-wrap items-center gap-0.5">
                {telefoneEmpresa && (
                  <CopyButton
                    value={telefoneEmpresa}
                    className="!px-1 !py-0.5"
                  >
                    <Phone className="h-2.5 w-2.5 text-zinc-400" />
                    <span className="font-body text-[10px] text-zinc-500">
                      {telefoneEmpresa}
                    </span>
                  </CopyButton>
                )}
                {emailEmpresa && (
                  <CopyButton value={emailEmpresa} className="!px-1 !py-0.5">
                    <Mail className="h-2.5 w-2.5 text-zinc-400" />
                    <span className="truncate max-w-[120px] font-body text-[10px] text-zinc-500">
                      {emailEmpresa}
                    </span>
                  </CopyButton>
                )}
                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 rounded px-1 py-0.5 font-body text-[10px] text-brand/70 transition-all duration-[120ms] hover:bg-brand/5 hover:text-brand hover:scale-[1.05] active:scale-[0.97]"
                  >
                    <ExternalLink className="h-2.5 w-2.5" />
                    Site
                  </a>
                )}
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 rounded px-1 py-0.5 font-body text-[10px] text-brand/70 transition-all duration-[120ms] hover:bg-brand/5 hover:text-brand hover:scale-[1.05] active:scale-[0.97]"
                  >
                    <Instagram className="h-2.5 w-2.5" />
                    IG
                  </a>
                )}
                {cardapioUrl && (
                  <a
                    href={cardapioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 rounded px-1 py-0.5 font-body text-[10px] text-brand/70 transition-all duration-[120ms] hover:bg-brand/5 hover:text-brand hover:scale-[1.05] active:scale-[0.97]"
                  >
                    <UtensilsCrossed className="h-2.5 w-2.5" />
                    Menu
                  </a>
                )}
              </div>
            ) : (
              <p className="mt-1.5 font-body text-[10px] text-zinc-300 italic">
                Sem links cadastrados
              </p>
            )}
          </div>
        </div>

        {/* ─── Bloco B: Decisor (4 cols) ───────────────── */}
        <div className="md:col-span-4 md:border-l md:border-zinc-200/30 md:pl-4 min-w-0">
          {primaryContact ? (
            <div className="group/contact relative">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100">
                  <User className="h-3.5 w-3.5 text-zinc-500" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-heading text-[13px] font-semibold text-black leading-tight">
                    {primaryContact.nome}
                  </p>
                  <p className="truncate font-body text-[10px] text-zinc-400 leading-tight">
                    {getCargoLabel(primaryContact.cargo)}
                  </p>
                  <p className="truncate font-body text-[10px] text-zinc-500 leading-tight">
                    Patente {getPatentScore(primaryContact.cargo)}
                  </p>
                </div>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-0.5 pl-[36px]">
                {primaryContact.email && (
                  <CopyButton
                    value={primaryContact.email}
                    className="!px-1 !py-0.5"
                  >
                    <Mail className="h-2.5 w-2.5 text-zinc-400" />
                    <span className="truncate max-w-[110px] font-body text-[10px] text-zinc-500">
                      {primaryContact.email}
                    </span>
                  </CopyButton>
                )}
                {primaryContact.telefone && (
                  <CopyButton
                    value={primaryContact.telefone}
                    className="!px-1 !py-0.5"
                  >
                    <Phone className="h-2.5 w-2.5 text-zinc-400" />
                    <span className="font-body text-[10px] text-zinc-500">
                      {primaryContact.telefone}
                    </span>
                  </CopyButton>
                )}
              </div>
              <button
                type="button"
                onClick={onOpenPrimaryContact}
                className="absolute top-0 right-0 inline-flex items-center gap-0.5 rounded-md border border-zinc-200/50 bg-white px-1.5 py-0.5 font-body text-[9px] font-medium text-zinc-400 shadow-sm opacity-0 transition-all duration-[120ms] group-hover/contact:opacity-100 hover:text-brand hover:border-brand/20 active:scale-[0.98]"
              >
                <ChevronRight className="h-2 w-2" />
                Abrir
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100">
                <User className="h-3.5 w-3.5 text-zinc-300" />
              </div>
              <div>
                <p className="font-body text-[10px] text-zinc-400">
                  Sem decisor definido
                </p>
                <button
                  type="button"
                  onClick={onCreatePrimaryContact}
                  className="mt-0.5 inline-flex items-center gap-0.5 font-body text-[10px] font-medium text-brand transition-colors hover:text-brand/80"
                >
                  <Plus className="h-2.5 w-2.5" />
                  Definir contato
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ─── Bloco C: Operação do Deal (3 cols) ────────────────── */}
        <div className="md:col-span-3 md:border-l md:border-zinc-200/30 md:pl-4 min-w-0">
          <div className="relative space-y-1.5">
            <div className="flex flex-wrap items-center gap-1.5">
              <StageRail
                currentStage={stage}
                onStageChange={(s) => {
                  onStageChange(s);
                  showStripUpdate("Atualizado");
                }}
                disabled={isLocked}
                statusBanner={stageBanner}
                onBannerDismiss={onStageBannerDismiss}
              />
              <TemperatureSelect
                current={temperature}
                onChange={(t) => {
                  onTemperatureChange(t);
                  showStripUpdate("Atualizado");
                }}
                suggested={suggestedTemperature}
                disabled={isLocked}
              />
            </div>
            <div className="flex items-center justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="group/owner flex items-center gap-1.5 rounded-full py-0.5 pl-0.5 pr-2 transition-colors duration-[140ms] hover:bg-white/80 active:scale-[0.98]">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[8px] font-bold text-white">
                      {getInitials(responsibleName)}
                    </div>
                    <span className="font-body text-[10px] text-zinc-500">
                      {responsibleName}
                    </span>
                    <Pencil className="h-2 w-2 text-zinc-300 opacity-0 transition-opacity duration-[140ms] group-hover/owner:opacity-100" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="rounded-xl min-w-[180px]"
                >
                  {teamMembers.map((member) => (
                    <DropdownMenuItem
                      key={member.id}
                      onClick={() => {
                        onResponsibleChange(member.id, member.name);
                        showStripUpdate("Atualizado");
                      }}
                      className="flex items-center gap-2"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-200 text-[9px] font-bold text-zinc-600">
                        {getInitials(member.name)}
                      </div>
                      <span className="font-body text-xs">{member.name}</span>
                      {member.id === responsibleId && (
                        <Check className="ml-auto h-3.5 w-3.5 text-brand" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {stripUpdatedLabel && (
              <div className="absolute -top-1.5 right-0 inline-flex items-center gap-0.5 rounded-full bg-status-success/10 px-1.5 py-0.5 font-body text-[8px] font-semibold text-status-success animate-in fade-in duration-90">
                <Check className="h-2 w-2" />
                {stripUpdatedLabel}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// UI Helpers for Company Tab Refactor
// ═══════════════════════════════════════════════════════════════════

function PremiumCard({
  children,
  title,
  description,
  icon: Icon,
  delay = 0,
  successMessage,
  headerAction,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
  successMessage?: string | null;
  headerAction?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, delay: delay, ease: "easeOut" }}
      className="relative rounded-[20px] border border-zinc-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md group"
    >
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -top-3 right-5 z-20 flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 font-heading text-[11px] font-bold text-emerald-600 shadow-sm border border-emerald-100"
          >
            <Check className="h-3 w-3" />
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-5 flex items-start justify-between">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-zinc-50 text-zinc-400 group-hover:bg-brand/5 group-hover:text-brand transition-colors">
            <Icon className="h-5.5 w-5.5" />
          </div>
          <div>
            <h3 className="font-heading text-[15px] font-semibold tracking-tight text-zinc-900">
              {title}
            </h3>
            <p className="font-body text-[11px] text-zinc-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        {headerAction && <div>{headerAction}</div>}
      </div>
      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'call':
      return Phone;
    case 'meeting':
      return Users;
    case 'email':
      return Mail;
    case 'whatsapp':
      return MessageCircle;
    default:
      return Circle;
  }
};


// ═══════════════════════════════════════════════════════════════════
// Main Component — LeadCardDrawer (Premium)
// ═══════════════════════════════════════════════════════════════════

export default function LeadCardDrawer() {
  const { modalType, modalData, closeModal } = useUIStore();
  const isOpen = modalType === "lead-card";
  const selectedLeadId = modalData?.id as string | undefined;
  const opportunitySnapshot = useMemo(() => {
    const raw = modalData?.opportunitySnapshot;
    if (!raw || typeof raw !== "object") return null;
    const candidate = raw as Partial<Opportunity>;
    if (typeof candidate.id !== "string") return null;
    return candidate as Opportunity;
  }, [modalData?.opportunitySnapshot]);
  const blockedFocusFields = useMemo(() => {
    const raw = modalData?.focusFields;
    if (!Array.isArray(raw)) return [] as string[];
    return raw.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
  }, [modalData?.focusFields]);
  const pendingStageFromModal = useMemo(() => {
    if (typeof modalData?.pendingStage !== "string") return null;
    return modalData.pendingStage as PipelineStage;
  }, [modalData?.pendingStage]);
  const initialTabFromModal = useMemo(
    () => resolveLeadDrawerTab(modalData?.initialTab),
    [modalData?.initialTab]
  );
  const prefillNoteFromModal = useMemo(() => {
    const raw = modalData?.prefillNote;
    return typeof raw === "string" ? raw.trim() : "";
  }, [modalData?.prefillNote]);
  const opportunities = useOpportunityStore((state) => state.opportunities);
  const selectedLead = useMemo(() => {
    const found = opportunities.find((opportunity) => opportunity.id === selectedLeadId);
    if (found) return found;
    if (opportunitySnapshot?.id === selectedLeadId) return opportunitySnapshot;
    return null;
  }, [opportunities, opportunitySnapshot, selectedLeadId]);
  const resolvedLead = useMemo(
    () =>
      selectedLead
        ? {
          ...mockLead,
          id: selectedLead.id,
          title: selectedLead.title,
          clientName: selectedLead.clientName,
          nomeFantasia: selectedLead.clientName || selectedLead.title,
          value: selectedLead.value,
          monthlyValue: selectedLead.monthlyValue,
          stage: selectedLead.stage,
          temperature: selectedLead.temperature,
          responsibleId: selectedLead.responsibleId,
          responsibleName: selectedLead.responsibleName,
          tags: selectedLead.tags,
          source: selectedLead.source ?? mockLead.source,
          expectedCloseDate:
            selectedLead.expectedCloseDate ?? mockLead.expectedCloseDate,
          createdAt: selectedLead.createdAt,
          updatedAt: selectedLead.updatedAt,
          notes: selectedLead.notes ?? mockLead.notes,
        }
        : mockLead,
    [selectedLead]
  );
  const initialStageValuesForLead = useMemo(
    () =>
      (resolvedLead.metadata?.stageValues as Record<
        string,
        string | number | boolean | null | undefined
      >) || {},
    [resolvedLead.metadata?.stageValues],
  );
  const initialLeadNote = useMemo(
    () => resolvedLead.notes?.trim() || "",
    [resolvedLead.notes],
  );
  const initialLeadOwnerId = useMemo(
    () => resolvedLead.responsibleId ?? LOGGED_USER.id,
    [resolvedLead.responsibleId],
  );
  const initialLeadStage = useMemo(
    () => resolvedLead.stage,
    [resolvedLead.stage],
  );

  // ── Deal state ───────────────────────────────────────────────
  const [title, setTitle] = useState(resolvedLead.title);
  const [stage, setStage] = useState<PipelineStage>(initialLeadStage);
  const [temperature, setTemperature] = useState<Temperature>(
    resolvedLead.temperature,
  );
  const [responsibleId, setResponsibleId] = useState(resolvedLead.responsibleId);
  const [responsibleName, setResponsibleName] = useState(
    resolvedLead.responsibleName,
  );
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const storeContacts = useContactStore.getState().getByClient(resolvedLead.clientId ?? "");
    return storeContacts.length > 0 ? storeContacts : [];
  });
  const sortedContacts = useMemo(
    () => [...contacts].sort((a, b) => getPatentScore(b.cargo) - getPatentScore(a.cargo)),
    [contacts],
  );
  const [dealStatus, setDealStatus] = useState<DealStatus>("open");
  const isLocked = dealStatus !== "open";
  const [source] = useState(resolvedLead.source);

  // Company fields — neste funil, sem CNPJ e sem Razão Social
  const [nomeFantasia] = useState(resolvedLead.nomeFantasia);
  const [segmento] = useState(resolvedLead.segmento);
  const [cep, setCep] = useState(resolvedLead.cep);
  const [logradouro, setLogradouro] = useState(resolvedLead.logradouro);
  const [numero, setNumero] = useState(resolvedLead.numero);
  const [complemento, setComplemento] = useState(resolvedLead.complemento);
  const [bairro, setBairro] = useState(resolvedLead.bairro);
  const [cidade, setCidade] = useState(resolvedLead.cidade);
  const [estado, setEstado] = useState(resolvedLead.estado);
  const [cepLoading, setCepLoading] = useState(false);
  const [cepError, setCepError] = useState<string | null>(null);
  const [telefoneEmpresa] = useState(resolvedLead.telefoneEmpresa);
  const [emailEmpresa] = useState(resolvedLead.emailEmpresa);
  const [website, setWebsite] = useState(resolvedLead.website);
  const [instagramUrl, setInstagramUrl] = useState(resolvedLead.instagram);
  const [cardapioUrl, setCardapioUrl] = useState(resolvedLead.cardapio);

  // --- Company Refactor State ---
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [hoursMode, setHoursMode] = useState<"standard" | "daily">("daily");
  const [standardHours, setStandardHours] = useState({
    open: "08:00",
    close: "18:00",
  });
  const [dailyHours, setDailyHours] = useState<
    Record<string, { active: boolean; open: string; close: string; isClosed: boolean }>
  >(
    DAYS_OF_WEEK.reduce(
      (acc, day) => ({
        ...acc,
        [day.id]: {
          active: true,
          open: "08:00",
          close: "19:00",
          isClosed: false,
        },
      }),
      {},
    ),
  );
  const [sectionSuccess] = useState<
    Record<string, string | null>
  >({
    localizacao: null,
    tipo: null,
    horario: null,
    online: null,
  });

  // --- Stage Fields State ---
  const [stageValues, setStageValues] = useState<Record<string, string | number | boolean | null | undefined>>(
    initialStageValuesForLead
  );
  const [, setStageFieldSaveState] = useState<Record<string, StageFieldSaveState>>({});
  const [, setStageFieldErrors] = useState<Record<string, string>>({});
  const [, setStageFieldsBanner] = useState<InlineBanner | null>(null);
  const [, setIsSavingStageFields] = useState(false);
  const stageSaveTimerRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  const [noteDraft, setNoteDraft] = useState("");
  const [noteIntent, setNoteIntent] = useState<Exclude<NoteIntent, "system">>("general");
  const [noteVisibility, setNoteVisibility] = useState<NoteVisibility>("team");
  const [noteSaveState, setNoteSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [noteError, setNoteError] = useState<string | null>(null);
  const [notesFilter, setNotesFilter] = useState<NotesFilter>("all");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingNoteDraft, setEditingNoteDraft] = useState("");
  const [editingNoteSaveState, setEditingNoteSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [editingNoteError, setEditingNoteError] = useState<string | null>(null);
  const [nextStepDraft, setNextStepDraft] = useState<NextStepDraft>({
    action: "",
    dueDate: "",
    channel: "call",
    ownerId: initialLeadOwnerId,
  });
  const [nextStepState, setNextStepState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [nextStepError, setNextStepError] = useState<string | null>(null);
  const [notesHistory, setNotesHistory] = useState<OpportunityNote[]>(() => {
    const seed = [...mockNotesSeed];
    if (initialLeadNote) {
      seed.unshift({
        id: `n-init-${resolvedLead.id}`,
        authorId: LOGGED_USER.id,
        authorName: LOGGED_USER.name,
        createdAt: new Date().toISOString(),
        body: initialLeadNote,
        intent: "general",
        visibility: "team",
      });
    }
    return seed;
  });

  // --- Company Refactor State ---

  const handleCepChange = async (val: string) => {
    const masked = maskCep(val);
    setCep(masked);
    setCepError(null);

    const newVal = val.replace(/\D/g, "").slice(0, 8);

    if (newVal.length === 8) {
      setCepLoading(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${newVal}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setLogradouro(data.logradouro || "");
          setBairro(data.bairro || "");
          setCidade(data.localidade || "");
          setEstado(data.uf || "");
          if (data.complemento) setComplemento(data.complemento);
          trackEvent("cep_lookup_success", { cep: newVal });
        } else {
          setCepError("CEP não encontrado.");
        }
      } catch {
        setCepError("Erro ao buscar CEP. Verifique sua conexão.");
      } finally {
        setCepLoading(false);
      }
    }
  };

  const enderecoFormatado = useMemo(() => {
    const parts: string[] = [];
    if (logradouro) {
      parts.push(numero ? `${logradouro}, ${numero}` : logradouro);
    }
    if (complemento) parts.push(complemento);
    if (bairro) parts.push(bairro);
    if (cidade && estado) {
      parts.push(`${cidade} - ${estado}`);
    } else if (cidade) {
      parts.push(cidade);
    }
    return parts.join(", ");
  }, [logradouro, numero, complemento, bairro, cidade, estado]);

  // UI state
  const [headerBanner, setHeaderBanner] = useState<InlineBanner | null>(null);
  const [stageBanner, setStageBanner] = useState<InlineBanner | null>(null);
  const [showWinConfirm, setShowWinConfirm] = useState(false);

  // --- Removed dirty state handlers (moved down) ---

  const [showLostPanel, setShowLostPanel] = useState(false);
  const [isWinLoading, setIsWinLoading] = useState(false);
  const [isLostLoading, setIsLostLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Contact forms
  const [showAddContact, setShowAddContact] = useState(false);
  const [contactsBanner, setContactsBanner] = useState<InlineBanner | null>(null);
  const [newContactError, setNewContactError] = useState<string | null>(null);
  const [newContact, setNewContact] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    personalidade: "",
  });
  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [editContact, setEditContact] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    personalidade: "",
  });
  const [activeTab, setActiveTab] = useState<LeadDrawerTab>(initialTabFromModal);

  // --- Dirty State & Tab Navigation ---
  const isDirty = useMemo(() => {
    return noteDraft.trim().length > 0 || (editingNoteId !== null && editingNoteDraft.trim().length > 0) || nextStepDraft.action.trim().length > 0;
  }, [noteDraft, editingNoteId, editingNoteDraft, nextStepDraft.action]);

  const [pendingTab, setPendingTab] = useState<LeadDrawerTab | null>(null);
  const [showDirtyConfirm, setShowDirtyConfirm] = useState(false);
  const [pendingAction, setPendingAction] = useState<"tab" | "close" | null>(null);

  const handleTabChange = useCallback((newTab: string) => {
    const resolvedTab = resolveLeadDrawerTab(newTab);
    if (resolvedTab === activeTab) return;
    if (isDirty) {
      setPendingTab(resolvedTab);
      setPendingAction("tab");
      setShowDirtyConfirm(true);
    } else {
      setActiveTab(resolvedTab);
    }
  }, [activeTab, isDirty]);

  const handleCloseDrawer = useCallback(() => {
    if (isDirty) {
      setPendingAction("close");
      setShowDirtyConfirm(true);
    } else {
      closeModal();
    }
  }, [isDirty, closeModal]);

  const confirmDiscardChanges = useCallback(() => {
    setShowDirtyConfirm(false);
    // Clear dirty fields
    setNoteDraft("");
    setEditingNoteDraft("");
    setEditingNoteId(null);
    setNextStepDraft({ action: "", dueDate: "", channel: "call", ownerId: initialLeadOwnerId });

    if (pendingAction === "tab" && pendingTab) {
      setActiveTab(pendingTab);
    } else if (pendingAction === "close") {
      closeModal();
    }
    setPendingAction(null);
    setPendingTab(null);
  }, [pendingAction, pendingTab, closeModal, initialLeadOwnerId]);

  const cancelDiscardChanges = useCallback(() => {
    setShowDirtyConfirm(false);
    setPendingAction(null);
    setPendingTab(null);
  }, []);

  const [isNewVisitModalOpen, setIsNewVisitModalOpen] = useState(false);
  const [isNewActivityModalOpen, setIsNewActivityModalOpen] = useState(false);
  const [newActivityType, setNewActivityType] = useState<"task" | "call" | "email" | "meeting" | "whatsapp">("task");

  const handleOpenActivityModal = useCallback(
    (type: "task" | "call" | "email" | "meeting" | "whatsapp" = "task") => {
      if (isLocked) return;
      setNewActivityType(type);
      setIsNewActivityModalOpen(true);
    },
    [isLocked],
  );

  const [visitFilter, setVisitFilter] = useState<VisitStatus | "all">("all");
  const [expandedVisitId, setExpandedVisitId] = useState<string | null>(null);

  // State for Visits
  const [visitRows, setVisitRows] = useState<VisitRow[]>(mockVisits);

  const handleSaveVisit = (data: VisitFormData) => {
    if (isLocked) return;
    const type = data.type as VisitType;
    const hasDateTime = Boolean(data.date && data.time);
    const startAt = hasDateTime
      ? new Date(`${data.date}T${data.time}:00`)
      : new Date();
    const location =
      type === "presencial"
        ? data.location || "Local a confirmar"
        : type === "remoto"
          ? visitPlatformLabel[data.platform ?? "outro"] ?? "Reunião remota"
          : data.typeDescription || "Encontro comercial";

    const responsibleLabel =
      data.responsibleId === "u1"
        ? "Eu (Logado)"
        : data.responsibleId === "u2"
          ? "Ana Costa"
          : data.responsibleId === "u3"
            ? "Carlos Mendes"
            : "Responsável do time";

    const resultWithOutcome =
      data.status === "realizada" && data.result
        ? `${data.outcome ? `${visitOutcomeLabel[data.outcome]}: ` : ""}${data.result}`
        : data.result || undefined;

    const newVisit: VisitRow = {
      id: `visit-${Date.now()}`,
      type,
      location,
      status: data.status as VisitStatus,
      startAt:
        Number.isNaN(startAt.getTime())
          ? new Date().toISOString()
          : startAt.toISOString(),
      responsible: responsibleLabel,
      objective: data.objective || undefined,
      result: resultWithOutcome,
      outcome: data.outcome || undefined,
      durationMinutes: Number(data.duration || 60),
      link: data.link || undefined,
      platform: data.platform || undefined,
      cancellationReason: data.cancellationReason || undefined,
      accessSearch: data.accessSearch || undefined,
      details: data.details || undefined,
      createdAt: new Date().toISOString(),
    };

    setVisitRows((prev) => [newVisit, ...prev]);
    setVisitFilter(newVisit.status);
    setExpandedVisitId(newVisit.id);
    setHeaderBanner({
      message: "Visita salva com sucesso",
      variant: "success",
    });
  };

  const visitSummary = useMemo(() => {
    const summary = {
      all: visitRows.length,
      agendada: 0,
      realizada: 0,
      cancelada: 0,
    };
    for (const visit of visitRows) {
      summary[visit.status] += 1;
    }
    return summary;
  }, [visitRows]);

  const visibleVisitRows = useMemo(() => {
    const filtered =
      visitFilter === "all"
        ? visitRows
        : visitRows.filter((visit) => visit.status === visitFilter);

    return [...filtered].sort((a, b) => {
      if (visitFilter === "all") {
        if (a.status !== b.status) {
          return visitStatusSortOrder[a.status] - visitStatusSortOrder[b.status];
        }
      }

      const aTime = new Date(a.startAt).getTime();
      const bTime = new Date(b.startAt).getTime();
      if (visitFilter === "agendada") return aTime - bTime;
      if (a.status === "agendada" && b.status === "agendada") return aTime - bTime;
      return bTime - aTime;
    });
  }, [visitFilter, visitRows]);

  const handleVisitStatusChange = useCallback(
    (visitId: string, status: VisitStatus) => {
      if (isLocked) return;
      const target = visitRows.find((visit) => visit.id === visitId);
      if (!target) return;

      setVisitRows((prev) =>
        prev.map((visit) =>
          visit.id === visitId
            ? {
              ...visit,
              status,
              result:
                status === "realizada" && !visit.result
                  ? "Visita concluída. Próximos passos registrados."
                  : visit.result,
              cancellationReason:
                status === "cancelada"
                  ? visit.cancellationReason || "Cancelada pelo responsável"
                  : undefined,
            }
            : visit
        )
      );

      setHeaderBanner({
        message: `Visita marcada como ${status}.`,
        variant: status === "cancelada" ? "warning" : "success",
      });
    },
    [isLocked, visitRows]
  );

  const handleDuplicateVisit = useCallback((visitId: string) => {
    if (isLocked) return;
    const visit = visitRows.find((item) => item.id === visitId);
    if (!visit) return;

    const originalDate = new Date(visit.startAt);
    const nextDate = Number.isNaN(originalDate.getTime())
      ? new Date()
      : new Date(originalDate.getTime() + 7 * 24 * 60 * 60 * 1000);

    const duplicated: VisitRow = {
      ...visit,
      id: `visit-${Date.now()}`,
      status: "agendada",
      result: undefined,
      cancellationReason: undefined,
      startAt: nextDate.toISOString(),
      createdAt: new Date().toISOString(),
    };

    setVisitRows((prev) => [duplicated, ...prev]);
    setVisitFilter("agendada");
    setExpandedVisitId(duplicated.id);
    setHeaderBanner({
      message: "Visita duplicada e reagendada para a próxima semana",
      variant: "success",
    });
  }, [isLocked, visitRows]);

  const handleRescheduleVisit = useCallback((visitId: string, plusDays: number) => {
    if (isLocked) return;
    const visit = visitRows.find((item) => item.id === visitId);
    if (!visit) return;

    const date = new Date(visit.startAt);
    if (Number.isNaN(date.getTime())) return;
    date.setDate(date.getDate() + plusDays);

    setVisitRows((prev) =>
      prev.map((item) =>
        item.id === visitId
          ? {
            ...item,
            startAt: date.toISOString(),
            status: "agendada",
            cancellationReason: undefined,
          }
          : item
      )
    );
    setHeaderBanner({
      message: `Visita reagendada em ${plusDays} dia${plusDays > 1 ? "s" : ""}.`,
      variant: "info",
    });
  }, [isLocked, visitRows]);

  const handleDeleteVisit = useCallback((visitId: string) => {
    if (isLocked) return;
    setVisitRows((prev) => prev.filter((visit) => visit.id !== visitId));
    if (expandedVisitId === visitId) {
      setExpandedVisitId(null);
    }
    setHeaderBanner({
      message: "Visita removida da agenda",
      variant: "info",
    });
  }, [expandedVisitId, isLocked]);

  const toggleVisitDetails = useCallback((visitId: string) => {
    setExpandedVisitId((prev) => (prev === visitId ? null : visitId));
  }, []);

  const [activityFilter, setActivityFilter] = useState<"all" | "pending" | "completed">("all");
  const [dealActivities, setDealActivities] = useState<FlowActivity[]>(() =>
    mockActivities.filter((activity) => activity.opportunityId === resolvedLead.id)
  );

  // Computed
  const currentStageIndex = useMemo(
    () => stageConfig.findIndex((item) => item.id === stage),
    [stage],
  );
  const hasDecisionMaker = useMemo(
    () => contacts.some((contact) => contact.isDecisionMaker),
    [contacts],
  );
  const cardPatentScore = useMemo(
    () => calculateCardPatentScore(contacts),
    [contacts],
  );
  const nextStage = useMemo(
    () => stageConfig[currentStageIndex + 1] ?? null,
    [currentStageIndex],
  );
  const primaryContact = useMemo(
    () => contacts.find((contact) => contact.isDecisionMaker) ?? sortedContacts[0] ?? null,
    [contacts, sortedContacts],
  );
  const relatedActivities = useMemo(() => dealActivities, [dealActivities]);
  const visibleDealActivities = useMemo(() => {
    if (activityFilter === "pending") {
      return dealActivities.filter((activity) => activity.status !== "completed");
    }
    if (activityFilter === "completed") {
      return dealActivities.filter((activity) => activity.status === "completed");
    }
    return dealActivities;
  }, [activityFilter, dealActivities]);
  const leadScore = useMemo(
    () => calculateLeadScore(resolvedLead, relatedActivities),
    [resolvedLead, relatedActivities],
  );
  const suggestedTemperature = useMemo(
    () => calculateTemperature(resolvedLead),
    [resolvedLead],
  );
  const filteredNotes = useMemo(() => {
    if (notesFilter === "all") return notesHistory;
    if (notesFilter === "cliente") {
      return notesHistory.filter((note) => note.intent === "pedido_cliente");
    }
    if (notesFilter === "decisao") {
      return notesHistory.filter((note) => note.intent === "decisao");
    }
    return notesHistory.filter((note) => note.intent === "proximo_passo");
  }, [notesFilter, notesHistory]);
  const groupedNotes = useMemo(() => {
    const map = new Map<string, { dayLabel: string; items: OpportunityNote[] }>();
    const sorted = [...filteredNotes].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
    sorted.forEach((note) => {
      const dayKey = note.createdAt.slice(0, 10);
      if (!map.has(dayKey)) {
        map.set(dayKey, {
          dayLabel: formatNoteDayLabel(note.createdAt),
          items: [],
        });
      }
      map.get(dayKey)?.items.push(note);
    });
    return Array.from(map.values());
  }, [filteredNotes]);
  const hasRecentExecutionSignal = useMemo(() => {
    const cutoff = Date.now() - EXECUTION_SIGNAL_WINDOW_DAYS * 24 * 60 * 60 * 1000;
    const hasRecentNote = notesHistory.some((note) => {
      if (note.isSystem) return false;
      const ts = new Date(note.createdAt).getTime();
      return !Number.isNaN(ts) && ts >= cutoff;
    });
    const hasRecentActivity = dealActivities.some((activity) => {
      const ts = new Date(activity.createdAt).getTime();
      return !Number.isNaN(ts) && ts >= cutoff;
    });
    return hasRecentNote || hasRecentActivity;
  }, [dealActivities, notesHistory]);

  const validateRequiredFieldsForStage = useCallback(
    (stageToValidate: PipelineStage) => {
      const fields = (stageFieldsConfig[stageToValidate] || []).filter(
        (field) => field.required,
      );
      const nextErrors: Record<string, string> = {};
      const missingFields = fields.filter((field) => {
        const isMissing = isFieldValueEmpty(stageValues[field.id]);
        if (isMissing) {
          nextErrors[field.id] = "Preencha este campo para avançar etapa.";
        }
        return isMissing;
      });
      setStageFieldErrors((prev) => ({ ...prev, ...nextErrors }));
      return missingFields;
    },
    [stageValues],
  );

  // Telemetry: view_opened
  useEffect(() => {
    if (isOpen) {
      trackEvent("view_opened", {
        entity_type: "deal",
        entity_id: resolvedLead.id,
      });
    }
  }, [isOpen, resolvedLead.id]);

  useEffect(() => {
    const timers = stageSaveTimerRef.current;
    return () => {
      Object.values(timers).forEach((timer) =>
        clearTimeout(timer),
      );
    };
  }, []);

  useEffect(() => {
    setActiveTab(initialTabFromModal);
    setVisitRows([...mockVisits]);
    setVisitFilter("all");
    setExpandedVisitId(null);
    setIsNewVisitModalOpen(false);
    setActivityFilter("all");
    setDealActivities(
      mockActivities.filter((activity) => activity.opportunityId === resolvedLead.id)
    );
    setStage(initialLeadStage);
    setShowAddContact(false);
    setStageValues(initialStageValuesForLead);
    setStageFieldErrors({});
    setStageFieldSaveState({});
    setStageFieldsBanner(null);
    setContactsBanner(null);
    setNewContactError(null);
    setIsSavingStageFields(false);
    setNoteDraft(prefillNoteFromModal);
    setNoteIntent("general");
    setNoteVisibility("team");
    setNoteSaveState("idle");
    setNoteError(null);
    setNotesFilter("all");
    setEditingNoteId(null);
    setEditingNoteDraft("");
    setEditingNoteSaveState("idle");
    setEditingNoteError(null);
    setNextStepDraft({
      action: "",
      dueDate: "",
      channel: "call",
      ownerId: initialLeadOwnerId,
    });
    setNextStepState("idle");
    setNextStepError(null);
    setHeaderBanner(null);
    setStageBanner(null);
    const seed = [...mockNotesSeed];
    if (initialLeadNote) {
      seed.unshift({
        id: `n-init-${resolvedLead.id}`,
        authorId: LOGGED_USER.id,
        authorName: LOGGED_USER.name,
        createdAt: new Date().toISOString(),
        body: initialLeadNote,
        intent: "general",
        visibility: "team",
      });
    }
    setNotesHistory(seed);
  }, [
    initialLeadNote,
    initialLeadOwnerId,
    initialLeadStage,
    initialStageValuesForLead,
    initialTabFromModal,
    prefillNoteFromModal,
    resolvedLead.id,
  ]);

  useEffect(() => {
    if (!isOpen || blockedFocusFields.length === 0) return;
    const stageLabel = pendingStageFromModal
      ? stageConfig.find((stageItem) => stageItem.id === pendingStageFromModal)?.label
      : null;

    setActiveTab("empresa");
    setHeaderBanner({
      message: stageLabel
        ? `Movimento bloqueado para ${stageLabel}. Preencha os campos obrigatórios.`
        : "Movimento bloqueado. Preencha os campos obrigatórios para avançar etapa.",
      variant: "warning",
      action: {
        label: "Ir para campos",
        onClick: () => setActiveTab("empresa"),
      },
    });
  }, [blockedFocusFields.length, isOpen, pendingStageFromModal]);

  // ── Handlers ─────────────────────────────────────────────────

  const handleStageChange = useCallback(
    (newStage: PipelineStage): boolean => {
      if (isLocked) return false;
      if (newStage === stage) return false;
      const prevStage = stage;
      const prevIndex = stageConfig.findIndex((stageItem) => stageItem.id === prevStage);
      const nextIndex = stageConfig.findIndex((stageItem) => stageItem.id === newStage);
      const isForwardTransition = nextIndex > prevIndex;
      if (isForwardTransition) {
        if (contacts.length < MIN_CONTACTS_PER_CARD) {
          setActiveTab("contatos");
          setContactsBanner({
            message: "Adicione pelo menos 1 contato para avançar no funil.",
            variant: "warning",
          });
          setStageBanner({
            message: "Etapa bloqueada. O card precisa ter ao menos 1 contato.",
            variant: "warning",
          });
          trackEvent("stage_change_blocked_missing_contact", {
            from_stage_id: prevStage,
            to_stage_id: newStage,
            entity_id: resolvedLead.id,
          });
          return false;
        }
        if (newStage === PROPOSAL_STAGE_ID && !hasDecisionMaker) {
          setActiveTab("contatos");
          setContactsBanner({
            message: "Defina ao menos 1 decisor para avançar para Proposta.",
            variant: "warning",
          });
          setStageBanner({
            message: "Etapa bloqueada. É obrigatório ter um decisor para avançar para Proposta.",
            variant: "warning",
          });
          trackEvent("stage_change_blocked_missing_decision_maker", {
            from_stage_id: prevStage,
            to_stage_id: newStage,
            entity_id: resolvedLead.id,
          });
          return false;
        }
        const missingRequired = validateRequiredFieldsForStage(prevStage);
        if (missingRequired.length > 0) {
          const missingLabels = missingRequired.map((field) => field.label).join(", ");
          setStageBanner({
            message: `Etapa bloqueada. Preencha: ${missingLabels}`,
            variant: "warning",
          });
          setStageFieldsBanner({
            message: `${missingRequired.length} campo(s) obrigatório(s) pendente(s) para avançar.`,
            variant: "warning",
          });
          trackEvent("stage_change_blocked_missing_required", {
            from_stage_id: prevStage,
            to_stage_id: newStage,
            missing_count: missingRequired.length,
            entity_id: resolvedLead.id,
          });
          return false;
        }
      }
      trackEvent("stage_changed", {
        from_stage_id: prevStage,
        to_stage_id: newStage,
        entity_id: resolvedLead.id,
      });
      setStage(newStage);
      setStageBanner({ message: "Etapa atualizada", variant: "success" });
      setStageFieldsBanner({
        message: `Checklist atualizado para ${stageConfig.find((stageItem) => stageItem.id === newStage)?.label ?? "nova etapa"}.`,
        variant: "info",
      });
      return true;
    },
    [contacts.length, hasDecisionMaker, isLocked, resolvedLead.id, stage, validateRequiredFieldsForStage],
  );

  // Stage change from StageFieldsPanel still passes through the same business rules.
  const handleStageChangeFromPanel = useCallback(
    (newStage: PipelineStage) => handleStageChange(newStage),
    [handleStageChange],
  );

  const handleMarkWon = useCallback(() => {
    if (stage !== "fechamento") {
      setShowWinConfirm(false);
      setHeaderBanner({
        message: "Para marcar como ganho, mova a oportunidade para a etapa Fechamento.",
        variant: "warning",
      });
      return;
    }
    const missingRequired = validateRequiredFieldsForStage(stage);
    if (missingRequired.length > 0) {
      setShowWinConfirm(false);
      setActiveTab("anotacoes");
      setStageFieldsBanner({
        message: "Checklist incompleto. Preencha os campos obrigatórios antes de fechar.",
        variant: "warning",
      });
      setHeaderBanner({
        message: "Fechamento bloqueado por pendências nos campos da etapa.",
        variant: "warning",
      });
      return;
    }
    if (!hasRecentExecutionSignal) {
      setShowWinConfirm(false);
      setActiveTab("anotacoes");
      setHeaderBanner({
        message: "Registre ao menos uma nota ou atividade recente antes de encerrar como ganho.",
        variant: "warning",
      });
      return;
    }
    trackEvent("mark_won_clicked", { entity_id: resolvedLead.id });
    setIsWinLoading(true);
    setTimeout(() => {
      setDealStatus("won");
      setShowWinConfirm(false);
      setIsWinLoading(false);
      setHeaderBanner({
        message: "Oportunidade marcada como ganho",
        variant: "success",
      });
      trackEvent("mark_won_succeeded", { entity_id: resolvedLead.id });
    }, 600);
  }, [hasRecentExecutionSignal, resolvedLead.id, stage, validateRequiredFieldsForStage]);

  const handleMarkLost = useCallback((reason: string) => {
    if (stage !== "fechamento") {
      setShowLostPanel(false);
      setHeaderBanner({
        message: "Para marcar como perdido, mova a oportunidade para a etapa Fechamento.",
        variant: "warning",
      });
      return;
    }
    if (!reason?.trim()) {
      setHeaderBanner({
        message: "Selecione um motivo de perda para continuar.",
        variant: "warning",
      });
      return;
    }
    if (!hasRecentExecutionSignal) {
      setShowLostPanel(false);
      setActiveTab("anotacoes");
      setHeaderBanner({
        message: "Adicione uma nota de contexto antes de encerrar como perdido.",
        variant: "warning",
      });
      return;
    }
    trackEvent("mark_lost_clicked", { entity_id: resolvedLead.id, reason });
    setIsLostLoading(true);
    setTimeout(() => {
      setDealStatus("lost");
      setShowLostPanel(false);
      setIsLostLoading(false);
      setHeaderBanner({
        message: `Oportunidade marcada como perdida — ${reason}`,
        variant: "info",
      });
      trackEvent("mark_lost_succeeded", { entity_id: resolvedLead.id, reason });
    }, 600);
  }, [hasRecentExecutionSignal, resolvedLead.id, stage]);

  const handleAddContact = () => {
    if (contacts.length >= MAX_CONTACTS_PER_CARD) {
      const message = `Limite atingido: no máximo ${MAX_CONTACTS_PER_CARD} contatos por card.`;
      setContactsBanner({
        message,
        variant: "warning",
      });
      setNewContactError(message);
      return;
    }
    if (!newContact.nome.trim()) {
      setNewContactError("Informe o nome do contato para continuar.");
      return;
    }
    if (!newContact.cargo) {
      setNewContactError("Selecione o cargo do contato para calcular o score de patente.");
      return;
    }
    setContacts([
      ...contacts,
      { id: `c${Date.now()}`, clientId: selectedLead?.clientId ?? "1", ...newContact, isDecisionMaker: false },
    ]);
    setNewContact({ nome: "", email: "", telefone: "", cargo: "", personalidade: "" });
    setShowAddContact(false);
    setNewContactError(null);
    setContactsBanner({
      message: "Contato adicionado. O score de patente do card foi recalculado.",
      variant: "success",
    });
  };

  const handleDeleteContact = (id: string) => {
    if (contacts.length <= MIN_CONTACTS_PER_CARD) {
      setContactsBanner({
        message: "O card precisa manter pelo menos 1 contato.",
        variant: "warning",
      });
      return;
    }
    const removedContact = contacts.find((contact) => contact.id === id);
    const nextContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(nextContacts);
    if (removedContact?.isDecisionMaker && !nextContacts.some((contact) => contact.isDecisionMaker)) {
      setContactsBanner({
        message: "Contato removido. Defina outro decisor para manter avanço até Proposta.",
        variant: "warning",
      });
      return;
    }
    setContactsBanner({
      message: "Contato removido com sucesso.",
      variant: "info",
    });
  };

  const handleToggleDecisionMaker = (id: string) => {
    const nextContacts = contacts.map((contact) =>
      contact.id === id
        ? { ...contact, isDecisionMaker: !contact.isDecisionMaker }
        : contact,
    );
    setContacts(nextContacts);
    if (nextContacts.some((contact) => contact.isDecisionMaker)) {
      setContactsBanner({
        message: "Decisor atualizado. Regras de avanço para Proposta atendidas.",
        variant: "success",
      });
      return;
    }
    setContactsBanner({
      message: "Sem decisor definido. A etapa Proposta ficará bloqueada.",
      variant: "warning",
    });
  };

  const handleStartEditContact = (contact: Contact) => {
    setEditingContactId(contact.id);
    setEditContact({
      nome: contact.nome,
      email: contact.email,
      telefone: contact.telefone,
      cargo: contact.cargo,
      personalidade: contact.personalidade ?? "",
    });
  };

  const handleSaveEditContact = () => {
    if (!editingContactId) return;
    if (!editContact.nome.trim()) {
      setContactsBanner({
        message: "O nome do contato é obrigatório.",
        variant: "warning",
      });
      return;
    }
    if (!editContact.cargo) {
      setContactsBanner({
        message: "Selecione o cargo para manter o score de patente correto.",
        variant: "warning",
      });
      return;
    }
    setContacts(
      contacts.map((contact) =>
        contact.id === editingContactId ? { ...contact, ...editContact } : contact,
      ),
    );
    setEditingContactId(null);
    setEditContact({ nome: "", email: "", telefone: "", cargo: "", personalidade: "" });
    setContactsBanner({
      message: "Contato atualizado. Score de patente recalculado.",
      variant: "success",
    });
  };

  const appendActivity = useCallback(
    (activityTitle: string, type: FlowActivity["type"] = "follow-up") => {
      const dueAt = new Date(Date.now() + 60 * 60 * 1000);
      const dueDate = `${dueAt.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      })} ${dueAt.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;

      const newActivity: FlowActivity = {
        id: `activity-${Date.now()}`,
        title: activityTitle,
        type,
        status: "pending",
        dueDate,
        responsibleId,
        responsibleName,
        opportunityId: resolvedLead.id,
        opportunityTitle: title,
        clientId: resolvedLead.id,
        clientName: resolvedLead.clientName ?? nomeFantasia,
        createdAt: new Date().toISOString(),
      };

      setDealActivities((prev) => [newActivity, ...prev]);
      setHeaderBanner({
        message: "Atividade criada com sucesso",
        variant: "success",
      });
    },
    [
      nomeFantasia,
      resolvedLead.clientName,
      resolvedLead.id,
      responsibleId,
      responsibleName,
      title,
    ],
  );

  const canEditNote = useCallback((note: OpportunityNote) => {
    if (note.isSystem) return false;
    if (note.authorId !== LOGGED_USER.id) return false;
    const elapsed = Date.now() - new Date(note.createdAt).getTime();
    return elapsed <= NOTE_EDIT_WINDOW_MS;
  }, []);

  const handleSaveNote = useCallback(() => {
    if (isLocked) return;
    const body = noteDraft.trim();
    if (body.length < NOTE_MIN_LENGTH) {
      setNoteError(`A nota precisa ter pelo menos ${NOTE_MIN_LENGTH} caracteres.`);
      setNoteSaveState("error");
      trackEvent("validation_failed", { field: "noteDraft" });
      return;
    }
    if (body.length > NOTE_MAX_LENGTH) {
      setNoteError(`A nota excedeu o limite de ${NOTE_MAX_LENGTH} caracteres.`);
      setNoteSaveState("error");
      trackEvent("validation_failed", { field: "noteDraft_max" });
      return;
    }
    setNoteError(null);
    setNoteSaveState("saving");
    setTimeout(() => {
      const newNote: OpportunityNote = {
        id: `note-${Date.now()}`,
        body,
        authorId: LOGGED_USER.id,
        authorName: LOGGED_USER.name,
        createdAt: new Date().toISOString(),
        intent: noteIntent,
        visibility: noteVisibility,
      };
      setNotesHistory((prev) => [newNote, ...prev]);
      setNoteDraft("");
      setNoteIntent("general");
      setNoteVisibility("team");
      setNoteSaveState("saved");
      setHeaderBanner({
        message: "Nota salva e adicionada ao histórico.",
        variant: "success",
      });
      trackEvent("note_created", {
        entity_id: resolvedLead.id,
      });
      setTimeout(() => setNoteSaveState("idle"), 1600);
    }, 320);
  }, [isLocked, noteDraft, noteIntent, noteVisibility, resolvedLead.id]);

  const handleCreateNextStep = useCallback(() => {
    if (isLocked) return;
    const action = nextStepDraft.action.trim() || noteDraft.trim();
    if (action.length < 3) {
      setNextStepError("Defina uma ação para criar o próximo passo.");
      setNextStepState("error");
      return;
    }
    if (noteIntent === "proximo_passo" && !nextStepDraft.dueDate) {
      setNextStepError("Defina a data do próximo passo.");
      setNextStepState("error");
      return;
    }

    setNextStepError(null);
    setNextStepState("saving");
    const typeMap: Record<NextStepDraft["channel"], FlowActivity["type"]> = {
      call: "call",
      whatsapp: "whatsapp",
      email: "email",
      meeting: "meeting",
      visit: "visit",
    };
    setTimeout(() => {
      const ownerName =
        mockTeamMembers.find((member) => member.id === nextStepDraft.ownerId)
          ?.name ?? responsibleName;
      const dueLabel = nextStepDraft.dueDate
        ? ` até ${new Date(nextStepDraft.dueDate).toLocaleDateString("pt-BR")}`
        : "";
      appendActivity(`${action}${dueLabel} • ${ownerName}`, typeMap[nextStepDraft.channel]);
      setNextStepState("saved");
      setHeaderBanner({
        message: "Próximo passo criado na aba Atividades.",
        variant: "success",
      });
      setTimeout(() => setNextStepState("idle"), 1600);
    }, 280);
  }, [appendActivity, isLocked, nextStepDraft, noteDraft, noteIntent, responsibleName]);

  const handleStartEditNote = useCallback(
    (note: OpportunityNote) => {
      if (!canEditNote(note)) return;
      setEditingNoteId(note.id);
      setEditingNoteDraft(note.body);
      setEditingNoteError(null);
      setEditingNoteSaveState("idle");
    },
    [canEditNote],
  );

  const handleSaveEditedNote = useCallback(() => {
    if (!editingNoteId) return;
    const body = editingNoteDraft.trim();
    if (body.length < NOTE_MIN_LENGTH) {
      setEditingNoteError(`A nota precisa ter pelo menos ${NOTE_MIN_LENGTH} caracteres.`);
      setEditingNoteSaveState("error");
      return;
    }
    setEditingNoteError(null);
    setEditingNoteSaveState("saving");
    setTimeout(() => {
      setNotesHistory((prev) =>
        prev.map((note) =>
          note.id === editingNoteId ? { ...note, body } : note,
        ),
      );
      setEditingNoteSaveState("saved");
      setEditingNoteId(null);
      setEditingNoteDraft("");
      setHeaderBanner({
        message: "Nota atualizada.",
        variant: "success",
      });
      setTimeout(() => setEditingNoteSaveState("idle"), 1400);
      trackEvent("note_edited", { entity_id: resolvedLead.id });
    }, 280);
  }, [editingNoteDraft, editingNoteId, resolvedLead.id]);

  const handleDuplicateNote = useCallback((note: OpportunityNote) => {
    if (note.isSystem) return;
    setNoteDraft(note.body);
    setNoteIntent(note.intent === "system" ? "general" : note.intent);
    setNotesFilter("all");
    setHeaderBanner({
      message: "Conteúdo duplicado no registro rápido.",
      variant: "info",
    });
  }, []);

  const handleSaveActivity = useCallback((data: ActivityFormData) => {
    const newActivity: FlowActivity = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.title,
      type: data.type,
      status: "pending",
      dueDate: `${new Date(data.date).toLocaleDateString('pt-BR')} ${data.time || ""}`.trim(),
      responsibleName: "Eu (Logado)",
      responsibleId: "u1",
      opportunityId: data.opportunityId || resolvedLead.id,
      clientId: data.clientId,
      clientName: data.clientName,
      contactIds: data.contactIds?.length ? data.contactIds : undefined,
      contactNames: data.contactNames?.length ? data.contactNames : undefined,
      createdAt: new Date().toISOString(),
    };

    setDealActivities((prev) => [newActivity, ...prev]);

    setHeaderBanner({
      message: "Atividade criada com sucesso",
      variant: "success",
    });
  }, [resolvedLead.id]);

  const handleCreateQuickActivity = useCallback(() => {
    if (isLocked) return;
    setActiveTab("atividades");
    handleOpenActivityModal("task");
  }, [handleOpenActivityModal, isLocked]);

  const handleCreateVisitFollowUp = useCallback(
    (visit: VisitRow) => {
      const scheduleLabel = formatVisitDateLabel(visit.startAt);
      appendActivity(`Follow-up da visita (${scheduleLabel})`, "follow-up");
      setActiveTab("atividades");
    },
    [appendActivity]
  );

  const handleCompleteDealActivity = useCallback((activityId: string) => {
    setDealActivities((prev) =>
      prev.map((activity) =>
        activity.id === activityId
          ? {
            ...activity,
            status: "completed",
            completedAt: new Date().toISOString(),
          }
          : activity,
      ),
    );
    setHeaderBanner({
      message: "Atividade concluída",
      variant: "success",
    });
  }, []);

  const handleToggleActivityFilter = useCallback(() => {
    const nextFilter =
      activityFilter === "all"
        ? "pending"
        : activityFilter === "pending"
          ? "completed"
          : "all";

    setActivityFilter(nextFilter);
    const label =
      nextFilter === "all"
        ? "Todos"
        : nextFilter === "pending"
          ? "Pendentes"
          : "Concluídas";
    setHeaderBanner({
      message: `Filtro de atividades: ${label}`,
      variant: "info",
    });
  }, [activityFilter]);

  // --- Company Refactor Handlers ---
  const toggleType = (id: string) => {
    if (isLocked) return;
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  };

  const handleUpdateDailyHour = (
    dayId: string,
    field: string,
    value: string | boolean,
  ) => {
    if (isLocked) return;
    setDailyHours((prev) => ({
      ...prev,
      [dayId]: { ...prev[dayId], [field]: value },
    }));
  };

  // Status pill
  const statusCfg = statusConfig[dealStatus];

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => {
        if (!open) handleCloseDrawer();
      }}>
        <DialogContent
          className="flex h-[90vh] !max-h-[90vh] w-[90vw] !max-w-[90vw] flex-col overflow-hidden rounded-[var(--radius-bento-card)] !gap-0 !p-0 bg-zinc-50/50"
          showCloseButton={false}
        >
          {/* ═══════════════════════════════════════════════════════════
              HeaderStickyDeal — Premium Glassmorphism layout
              ═══════════════════════════════════════════════════════════ */}
          <div className="sticky top-0 z-10 border-b border-zinc-200/50 bg-white/85 backdrop-blur-xl transition-shadow duration-[120ms] shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
            <div className="px-5 pt-3 pb-0 md:px-6">
              {/* ─── Camada 1: Top Bar Compacta ────────────────────── */}
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  {/* Breadcrumb — minimal */}
                  <nav
                    className="mb-1 flex items-center gap-1 font-body text-[10px] text-zinc-400"
                    aria-label="Breadcrumb"
                  >
                    <span>Pipes</span>
                    <ChevronRight className="h-2.5 w-2.5" aria-hidden="true" />
                    <span className="text-zinc-500">Pipeline Comercial</span>
                  </nav>

                  {/* Title row: Name + Score + Status */}
                  <div className="flex flex-wrap items-center gap-2">
                    <DialogTitle className="font-heading text-xl font-bold tracking-tight text-black sm:text-[22px] leading-tight">
                      <InlineEditable
                        value={title}
                        onSave={setTitle}
                        className="font-heading text-xl font-bold tracking-tight sm:text-[22px] leading-tight"
                        readOnly={isLocked}
                      />
                    </DialogTitle>

                    {leadScore > 0 && (
                      <div
                        className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-heading text-[10px] font-bold leading-none ${getScoreColor(leadScore)}`}
                        title={`Lead Score: ${leadScore} (${getScoreLabel(leadScore)})`}
                      >
                        <TrendingUp className="h-2 w-2" aria-hidden="true" />
                        {leadScore}
                      </div>
                    )}
                    <div
                      className="inline-flex items-center gap-0.5 rounded-md border border-indigo-200 bg-indigo-50 px-1.5 py-0.5 font-heading text-[10px] font-bold leading-none text-indigo-700"
                      title={`Score de Patente: ${cardPatentScore}`}
                    >
                      <Shield className="h-2 w-2" aria-hidden="true" />
                      {cardPatentScore}
                    </div>

                    <span
                      className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 font-body text-[10px] font-medium transition-all duration-[140ms] ${statusCfg.color} ${statusCfg.bg}`}
                    >
                      {dealStatus === "won" && (
                        <Check className="h-2 w-2" aria-hidden="true" />
                      )}
                      {dealStatus === "lost" && (
                        <X className="h-2 w-2" aria-hidden="true" />
                      )}
                      {statusCfg.label}
                    </span>

                    {source && (
                      <span className="font-body text-[10px] text-zinc-400">
                        via {source}
                      </span>
                    )}
                  </div>
                </div>

                {/* ─── Actions: compact ──────────────────────────────── */}
                <div className="flex shrink-0 items-center gap-1">
                  {dealStatus === "open" && (
                    <>
                      <button
                        onClick={() => setShowWinConfirm(true)}
                        disabled={isWinLoading}
                        className="group/won inline-flex h-[34px] items-center gap-1 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 font-heading text-[11px] font-semibold text-emerald-700 transition-all duration-300 ease-out hover:-translate-y-[1px] hover:border-emerald-500 hover:bg-emerald-600 hover:text-white hover:shadow-[0_4px_12px_rgba(16,185,129,0.2)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30 disabled:pointer-events-none disabled:opacity-50"
                      >
                        {isWinLoading ? (
                          <Loader2 className="h-3 w-3 animate-spin" />
                        ) : (
                          <Check className="h-3 w-3" aria-hidden="true" />
                        )}
                        <span className="max-sm:hidden">Ganho</span>
                      </button>
                      <button
                        onClick={() => setShowLostPanel(true)}
                        disabled={isLostLoading}
                        className="group/lost inline-flex h-[34px] items-center gap-1 rounded-full border border-zinc-200/80 bg-white px-3 font-heading text-[11px] font-semibold text-zinc-500 transition-all duration-300 ease-out hover:-translate-y-[1px] hover:border-red-400 hover:bg-red-500 hover:text-white hover:shadow-[0_4px_12px_rgba(248,113,113,0.2)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/30 disabled:pointer-events-none disabled:opacity-50"
                      >
                        {isLostLoading ? (
                          <Loader2 className="h-3 w-3 animate-spin" />
                        ) : (
                          <X className="h-3 w-3" aria-hidden="true" />
                        )}
                        <span className="max-sm:hidden">Perdido</span>
                      </button>
                    </>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-400 transition-all duration-[140ms] hover:bg-zinc-100 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30">
                        <MoreHorizontal className="h-3.5 w-3.5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-[12px]">
                      <DropdownMenuItem
                        onClick={() => {
                          handleCreateQuickActivity();
                        }}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Nova atividade
                      </DropdownMenuItem>
                      {dealStatus !== "open" && (
                        <DropdownMenuItem
                          onClick={() => {
                            setDealStatus("open");
                            setHeaderBanner({
                              message: "Oportunidade reaberta",
                              variant: "info",
                            });
                          }}
                        >
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Reabrir oportunidade
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-status-danger focus:text-status-danger"
                        onClick={() => setShowDeleteConfirm(true)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <button
                    onClick={handleCloseDrawer}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-400 transition-all duration-[140ms] hover:bg-zinc-100 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
                    aria-label="Fechar"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Header banners */}
              {headerBanner && (
                <div className="mt-2">
                  <InlineStatusBanner
                    banner={headerBanner}
                    onDismiss={() => setHeaderBanner(null)}
                  />
                </div>
              )}

              {showLostPanel && dealStatus === "open" && (
                <div className="mt-2">
                  <LostReasonPanel
                    onConfirm={handleMarkLost}
                    onCancel={() => setShowLostPanel(false)}
                    isLoading={isLostLoading}
                  />
                </div>
              )}

              {/* ─── Faixa C: Executive Company Strip ─────────────────── */}
              <ExecutiveCompanyStrip
                nomeFantasia={nomeFantasia}
                segmento={segmento}
                enderecoFormatado={enderecoFormatado}
                telefoneEmpresa={telefoneEmpresa}
                emailEmpresa={emailEmpresa}
                website={website}
                instagramUrl={instagramUrl}
                cardapioUrl={cardapioUrl}
                primaryContact={primaryContact}
                stage={stage}
                temperature={temperature}
                responsibleName={responsibleName}
                responsibleId={responsibleId}
                suggestedTemperature={suggestedTemperature}
                onStageChange={handleStageChange}
                onTemperatureChange={setTemperature}
                onResponsibleChange={(id, name) => {
                  setResponsibleId(id);
                  setResponsibleName(name);
                }}
                onOpenPrimaryContact={() => setActiveTab("contatos")}
                onCreatePrimaryContact={() => {
                  setActiveTab("contatos");
                  setShowAddContact(true);
                }}
                teamMembers={mockTeamMembers}
                isLocked={isLocked}
                stageBanner={stageBanner}
                onStageBannerDismiss={() => setStageBanner(null)}
              />
            </div>

            {/* NEW Native Tabs Row integrated into Header with Framer Motion */}
            <div className="flex w-full items-end overflow-x-auto px-5 md:px-6 scrollbar-hide">
              {[
                { value: "empresa", label: "Empresa" },
                { value: "contatos", label: "Contatos" },
                { value: "visitas", label: "Visitas" },
                { value: "atividades", label: "Atividades" },
                { value: "negociacao", label: "Negociação" },
                { value: "anotacoes", label: "Anotações" },
                { value: "linha-do-tempo", label: "Linha do Tempo" },
              ].map((tab) => {
                const isActive = activeTab === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => handleTabChange(tab.value)}
                    className={cn(
                      "relative whitespace-nowrap px-1 py-3 font-heading text-[11px] font-semibold tracking-wide uppercase transition-colors outline-none mr-6",
                      isActive
                        ? "text-brand"
                        : "text-zinc-500 hover:text-zinc-800 focus-visible:ring-2 focus-visible:ring-brand/30"
                    )}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeDrawerTab"
                        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full bg-brand"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              Body — Split View (Desktop) / Stack (Mobile)
              ═══════════════════════════════════════════════════════════ */}
          <div className="flex min-h-0 flex-1">
            {/* ── Full-width content: Tabs ─────────────────────────── */}
            <div className="min-h-0 flex-1">
              <ScrollArea className="h-full">
                <div className="p-5 md:px-8 lg:px-10">
                  <Tabs
                    value={activeTab}
                    onValueChange={(value) => handleTabChange(value)}
                  >



                    <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-6 pb-10">
                      {/* ── Left Column: Tab Content (Span 7) ── */}
                      <div className="md:col-span-12 lg:col-span-7 space-y-4">

                        {/* ── Tab: Empresa ──────────────────────────────── */}
                        <TabsContent value="empresa" className="mt-0 space-y-4">


                          <PremiumCard
                            title="Localização"
                            description=""
                            icon={MapPin}
                            delay={0}
                            successMessage={sectionSuccess.localizacao}
                          >
                            <div className="space-y-4">
                              {/* Row 1: CEP | Endereço | Número */}
                              <div className="flex gap-2">
                                <div className="w-[140px] flex-none">
                                  <Label className="mb-1.5 block font-heading text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                    CEP
                                  </Label>
                                  <div className="relative">
                                    <Input
                                      value={cep}
                                      onChange={(e) => handleCepChange(e.target.value)}
                                      placeholder="00000-000"
                                      className="h-9 rounded-lg border-zinc-200 bg-white font-body text-xs transition-all focus:border-brand focus:ring-2 focus:ring-brand/10"
                                      readOnly={isLocked}
                                      maxLength={9}
                                    />
                                    {cepLoading && (
                                      <Loader2 className="absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 animate-spin text-brand" />
                                    )}
                                  </div>
                                  {cepError && (
                                    <p className="mt-1 font-body text-[10px] text-status-danger">{cepError}</p>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <Label className="mb-1.5 block font-heading text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                    Endereço
                                  </Label>
                                  <Input
                                    value={logradouro}
                                    onChange={(e) => setLogradouro(e.target.value)}
                                    placeholder="Logradouro"
                                    className="h-9 rounded-lg border-zinc-200 bg-white font-body text-xs"
                                    readOnly={isLocked}
                                  />
                                </div>
                                <div className="w-[70px] flex-none">
                                  <Label className="mb-1.5 block font-heading text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                    Nº
                                  </Label>
                                  <Input
                                    value={numero}
                                    onChange={(e) =>
                                      setNumero(e.target.value.replace(/\D/g, ""))
                                    }
                                    placeholder="123"
                                    className="h-9 rounded-lg border-zinc-200 bg-white font-body text-xs"
                                    readOnly={isLocked}
                                  />
                                </div>
                              </div>

                              {/* Row 2: Bairro | Cidade | UF */}
                              <div className="flex gap-2">
                                <div className="flex-1 min-w-0">
                                  <Label className="mb-1.5 block font-heading text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                    Bairro
                                  </Label>
                                  <Input
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                    placeholder="Bairro"
                                    className="h-9 rounded-lg border-zinc-200 bg-white font-body text-xs"
                                    readOnly={isLocked}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <Label className="mb-1.5 block font-heading text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                    Cidade
                                  </Label>
                                  <Input
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                    placeholder="Cidade"
                                    className="h-9 rounded-lg border-zinc-200 bg-white font-body text-xs"
                                    readOnly={isLocked}
                                  />
                                </div>
                                <div className="w-[70px] flex-none">
                                  <Label className="mb-1.5 block font-heading text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                    UF
                                  </Label>
                                  <Select
                                    value={estado}
                                    onValueChange={setEstado}
                                    disabled={isLocked}
                                  >
                                    <SelectTrigger className="h-9 rounded-lg border-zinc-200 bg-white px-2 font-body text-xs font-medium focus:ring-brand/10">
                                      <SelectValue placeholder="UF" />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-[220px]">
                                      {UF_LIST.map((uf) => (
                                        <SelectItem
                                          key={uf}
                                          value={uf}
                                          className="font-body text-xs"
                                        >
                                          {uf}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                            </div>
                          </PremiumCard>

                          {/* ── Section 2: Tipo ── */}
                          <PremiumCard
                            title="Tipo"
                            description=""
                            icon={Tag}
                            delay={0.06}
                            successMessage={sectionSuccess.tipo}
                          >
                            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                              {COMPANY_TYPES.map((type) => (
                                <button
                                  key={type.id}
                                  disabled={isLocked}
                                  onClick={() => toggleType(type.id)}
                                  className={cn(
                                    "group flex flex-col items-center gap-1.5 rounded-[12px] p-2.5 text-center transition-all duration-200",
                                    selectedTypes.includes(type.id)
                                      ? "bg-brand/5 border border-brand/20 text-brand shadow-sm"
                                      : "bg-zinc-50/50 border border-transparent text-zinc-400 hover:bg-zinc-100/80 hover:text-zinc-500",
                                    !isLocked && "active:scale-[0.96] hover:scale-[1.02]",
                                  )}
                                >
                                  <div
                                    className={cn(
                                      "flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200",
                                      selectedTypes.includes(type.id)
                                        ? "bg-brand/10 text-brand"
                                        : "bg-white text-zinc-300 group-hover:text-zinc-400 shadow-sm",
                                    )}
                                  >
                                    <type.icon className="h-4 w-4" />
                                  </div>
                                  <span className="font-heading text-[9px] font-bold tracking-tight uppercase line-clamp-2">
                                    {type.label}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </PremiumCard>

                          {/* ── Section 3: Horário + Presença Online (1x2) ── */}
                          <PremiumCard
                            title="Horário e Online"
                            description=""
                            icon={Clock3}
                            delay={0.12}
                            successMessage={sectionSuccess.horario ?? sectionSuccess.online}
                          >
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <div className="space-y-4 rounded-[14px] border border-zinc-100 bg-zinc-50/45 p-3.5">
                                <div className="mb-1 flex items-center justify-between">
                                  <Label className="font-heading text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                    Configuração
                                  </Label>
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={cn(
                                        "font-heading text-[10px] font-bold transition-colors",
                                        hoursMode === "standard" ? "text-brand" : "text-zinc-300"
                                      )}
                                    >
                                      PADRÃO
                                    </span>
                                    <Switch
                                      checked={hoursMode === "daily"}
                                      onCheckedChange={(v) =>
                                        setHoursMode(v ? "daily" : "standard")
                                      }
                                      className="scale-75 data-[state=checked]:bg-brand"
                                      disabled={isLocked}
                                    />
                                    <span
                                      className={cn(
                                        "font-heading text-[10px] font-bold transition-colors",
                                        hoursMode === "daily" ? "text-brand" : "text-zinc-300"
                                      )}
                                    >
                                      DIÁRIO
                                    </span>
                                  </div>
                                </div>

                                {hoursMode === "standard" ? (
                                  <div className="grid grid-cols-2 gap-3">
                                    <div>
                                      <Label className="mb-1.5 block font-heading text-[9px] font-bold uppercase text-zinc-400">
                                        Abertura
                                      </Label>
                                      <Input
                                        type="time"
                                        value={standardHours.open}
                                        onChange={(e) =>
                                          setStandardHours((prev) => ({
                                            ...prev,
                                            open: e.target.value,
                                          }))
                                        }
                                        className="h-9 rounded-lg border-zinc-200 bg-white font-body text-xs"
                                        disabled={isLocked}
                                      />
                                    </div>
                                    <div>
                                      <Label className="mb-1.5 block font-heading text-[9px] font-bold uppercase text-zinc-400">
                                        Fechamento
                                      </Label>
                                      <Input
                                        type="time"
                                        value={standardHours.close}
                                        onChange={(e) =>
                                          setStandardHours((prev) => ({
                                            ...prev,
                                            close: e.target.value,
                                          }))
                                        }
                                        className="h-9 rounded-lg border-zinc-200 bg-white font-body text-xs"
                                        disabled={isLocked}
                                      />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="space-y-1">
                                    {DAYS_OF_WEEK.map((day) => (
                                      <div key={day.id} className="flex items-center justify-between py-1">
                                        <div className="flex items-center gap-2">
                                          <Switch
                                            checked={dailyHours[day.id].active}
                                            onCheckedChange={(v) =>
                                              handleUpdateDailyHour(day.id, "active", v)
                                            }
                                            className="scale-75 data-[state=checked]:bg-brand"
                                            disabled={isLocked}
                                          />
                                          <span className="w-8 font-heading text-[10px] font-bold uppercase text-zinc-500">
                                            {day.label.slice(0, 3)}
                                          </span>
                                        </div>
                                        {dailyHours[day.id].active ? (
                                          <div className="flex items-center gap-1.5">
                                            <Input
                                              type="time"
                                              value={dailyHours[day.id].open}
                                              onChange={(e) =>
                                                handleUpdateDailyHour(day.id, "open", e.target.value)
                                              }
                                              className="h-7 w-[60px] rounded-md border-zinc-200 p-1 text-center font-body text-[10px]"
                                              disabled={isLocked}
                                            />
                                            <span className="text-zinc-300">-</span>
                                            <Input
                                              type="time"
                                              value={dailyHours[day.id].close}
                                              onChange={(e) =>
                                                handleUpdateDailyHour(day.id, "close", e.target.value)
                                              }
                                              className="h-7 w-[60px] rounded-md border-zinc-200 p-1 text-center font-body text-[10px]"
                                              disabled={isLocked}
                                            />
                                          </div>
                                        ) : (
                                          <span className="font-heading text-[9px] font-bold uppercase text-zinc-300">
                                            Fechado
                                          </span>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>

                              <div className="space-y-3 rounded-[14px] border border-zinc-100 bg-zinc-50/45 p-3.5">
                                {[
                                  {
                                    id: "site",
                                    label: "Site",
                                    icon: Globe,
                                    value: website,
                                    setter: setWebsite,
                                  },
                                  {
                                    id: "ig",
                                    label: "Instagram",
                                    icon: Instagram,
                                    value: instagramUrl,
                                    setter: setInstagramUrl,
                                  },
                                  {
                                    id: "menu",
                                    label: "Cardápio",
                                    icon: UtensilsCrossed,
                                    value: cardapioUrl,
                                    setter: setCardapioUrl,
                                  },
                                ].map((channel) => (
                                  <div key={channel.id} className="group/field relative">
                                    <Label className="font-heading text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                      {channel.label}
                                    </Label>
                                    <div className="relative mt-1.5 flex items-center">
                                      <div className="absolute left-3 flex items-center gap-1.5 text-zinc-300">
                                        <channel.icon className="h-3.5 w-3.5" />
                                      </div>
                                      <Input
                                        value={channel.value}
                                        onChange={(e) => channel.setter(e.target.value)}
                                        placeholder={channel.id === "menu" ? "URL" : "URL"}
                                        className="h-9 rounded-lg border-zinc-200 pl-9 pr-8 font-body text-xs transition-all focus:border-brand focus:ring-2 focus:ring-brand/10"
                                        disabled={isLocked}
                                      />
                                      <AnimatePresence>
                                        {channel.value && (
                                          <motion.button
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            onClick={() =>
                                              window.open(
                                                channel.value.startsWith("http")
                                                  ? channel.value
                                                  : `https://${channel.value}`,
                                                "_blank"
                                              )
                                            }
                                            className="absolute right-2 h-6 rounded-md bg-zinc-900 px-2 font-heading text-[9px] font-bold text-white shadow-sm transition-all hover:bg-black active:scale-[0.97]"
                                          >
                                            Visitar
                                          </motion.button>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </PremiumCard>

                        </TabsContent>

                        {/* ── Tab: Contatos ─────────────────────────────── */}
                        <TabsContent value="contatos" className="mt-0">
                          <div className="mb-4 flex items-center justify-between">
                            <div>
                              <h3 className="font-heading text-sm font-semibold text-black">
                                Contatos ({sortedContacts.length})
                              </h3>
                              <p className="mt-1 font-body text-[11px] text-zinc-500">
                                Score de Patente do card: <span className="font-semibold text-zinc-800">{cardPatentScore}</span> ·
                                limite {MIN_CONTACTS_PER_CARD}-{MAX_CONTACTS_PER_CARD} contatos
                              </p>
                            </div>
                            {!isLocked && (
                              <Button
                                onClick={() => {
                                  setNewContactError(null);
                                  setShowAddContact(true);
                                }}
                                disabled={contacts.length >= MAX_CONTACTS_PER_CARD}
                                className="rounded-full bg-brand font-heading text-xs text-white hover:bg-brand/90"
                                size="sm"
                              >
                                <Plus className="mr-1 h-3.5 w-3.5" /> Adicionar
                              </Button>
                            )}
                          </div>

                          {contactsBanner && (
                            <div className="mb-3">
                              <InlineStatusBanner
                                banner={contactsBanner}
                                onDismiss={() => setContactsBanner(null)}
                              />
                            </div>
                          )}

                          {sortedContacts.length === 0 ? (
                            <div className="flex flex-col items-center py-8 text-center">
                              <User className="h-8 w-8 text-zinc-200" />
                              <p className="mt-2 font-body text-sm text-zinc-400">
                                Sem contatos vinculados
                              </p>
                              {!isLocked && (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="mt-2 rounded-full font-body text-xs text-brand"
                                  onClick={() => {
                                    setNewContactError(null);
                                    setShowAddContact(true);
                                  }}
                                >
                                  <Plus className="mr-1 h-3.5 w-3.5" /> Vincular
                                  contato
                                </Button>
                              )}
                            </div>
                          ) : (
                            <div className="space-y-2">
                              {sortedContacts.map((contact) =>
                                editingContactId === contact.id ? (
                                  <div
                                    key={contact.id}
                                    className="space-y-3 rounded-[14px] border border-brand/20 bg-brand/5 p-4"
                                  >
                                    <div className="grid grid-cols-2 gap-3">
                                      <div>
                                        <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">
                                          Nome
                                        </Label>
                                        <Input
                                          value={editContact.nome}
                                          onChange={(e) =>
                                            setEditContact({
                                              ...editContact,
                                              nome: e.target.value,
                                            })
                                          }
                                          className="mt-1 h-8 rounded-[10px] font-body text-sm"
                                        />
                                      </div>
                                      <div>
                                        <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">
                                          Cargo
                                        </Label>
                                        <Select
                                          value={editContact.cargo}
                                          onValueChange={(value) =>
                                            setEditContact({
                                              ...editContact,
                                              cargo: value,
                                            })
                                          }
                                        >
                                          <SelectTrigger className="mt-1 h-8 w-full rounded-[10px] border-zinc-200 font-body text-sm">
                                            <SelectValue placeholder="Selecione o cargo" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            {RESTAURANT_POSITIONS.map((pos) => (
                                              <SelectItem key={pos.value} value={pos.value}>
                                                {pos.label}
                                              </SelectItem>
                                            ))}
                                          </SelectContent>
                                        </Select>
                                      </div>
                                      <div>
                                        <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">
                                          E-mail
                                        </Label>
                                        <Input
                                          type="email"
                                          value={editContact.email}
                                          onChange={(e) =>
                                            setEditContact({
                                              ...editContact,
                                              email: e.target.value,
                                            })
                                          }
                                          className="mt-1 h-8 rounded-[10px] font-body text-sm"
                                        />
                                      </div>
                                      <div>
                                        <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">
                                          Telefone
                                        </Label>
                                        <PhoneInput
                                          value={editContact.telefone}
                                          onValueChange={(raw) =>
                                            setEditContact({
                                              ...editContact,
                                              telefone: raw,
                                            })
                                          }
                                          className="mt-1 h-8 rounded-[10px] font-body text-sm"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">
                                        Personalidade
                                      </Label>
                                      <Textarea
                                        value={editContact.personalidade}
                                        onChange={(e) =>
                                          setEditContact({
                                            ...editContact,
                                            personalidade: e.target.value,
                                          })
                                        }
                                        className="mt-1 min-h-[60px] rounded-[10px] font-body text-sm"
                                        placeholder="Ex: Direto e objetivo, prefere reuniões curtas..."
                                      />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="rounded-full font-heading text-xs"
                                        onClick={() => {
                                          setEditingContactId(null);
                                          setEditContact({ nome: "", email: "", telefone: "", cargo: "", personalidade: "" });
                                        }}
                                      >
                                        Cancelar
                                      </Button>
                                      <Button
                                        size="sm"
                                        className="rounded-full bg-brand font-heading text-xs text-white hover:bg-brand/90"
                                        onClick={handleSaveEditContact}
                                      >
                                        Salvar
                                      </Button>
                                    </div>
                                  </div>
                                ) : (
                                  <ContactCard
                                    key={contact.id}
                                    contact={contact}
                                    patentScore={getPatentScore(contact.cargo)}
                                    isPrimary={primaryContact?.id === contact.id}
                                    onEdit={() => handleStartEditContact(contact)}
                                    onDelete={() => handleDeleteContact(contact.id)}
                                    onToggleDecisionMaker={() => handleToggleDecisionMaker(contact.id)}
                                  />
                                ),
                              )}
                            </div>
                          )}
                        </TabsContent>



                        {/* ── Tab: Visitas ──────────────────────────────── */}
                        <TabsContent value="visitas" className="mt-0 space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <h3 className="font-heading text-sm font-semibold text-zinc-700">Visitas</h3>
                              <p className="mt-0.5 text-xs text-zinc-500">
                                Agenda comercial, resultados e próximos passos.
                              </p>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 gap-1.5 rounded-full text-xs"
                              onClick={() => setIsNewVisitModalOpen(true)}
                              disabled={isLocked}
                            >
                              <Plus className="h-3.5 w-3.5" />
                              Nova Visita
                            </Button>
                          </div>

                          <div className="flex flex-wrap items-center gap-2">
                            {[
                              { id: "all" as const, label: "Todas", count: visitSummary.all },
                              {
                                id: "agendada" as const,
                                label: "Agendadas",
                                count: visitSummary.agendada,
                              },
                              {
                                id: "realizada" as const,
                                label: "Realizadas",
                                count: visitSummary.realizada,
                              },
                              {
                                id: "cancelada" as const,
                                label: "Canceladas",
                                count: visitSummary.cancelada,
                              },
                            ].map((filter) => (
                              <button
                                key={filter.id}
                                type="button"
                                onClick={() => setVisitFilter(filter.id)}
                                className={cn(
                                  "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 font-body text-[11px] font-medium transition-all duration-150",
                                  visitFilter === filter.id
                                    ? "border-zinc-300 bg-zinc-100 text-zinc-900"
                                    : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:text-zinc-700"
                                )}
                              >
                                {filter.label}
                                <span className="rounded-full bg-zinc-200/80 px-1.5 py-0 text-[10px] font-semibold text-zinc-600">
                                  {filter.count}
                                </span>
                              </button>
                            ))}
                          </div>

                          {visibleVisitRows.length === 0 && (
                            <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/80 p-4">
                              <p className="font-heading text-sm font-medium text-zinc-700">
                                Nenhuma visita neste filtro
                              </p>
                              <p className="mt-1 text-xs text-zinc-500">
                                Agende uma nova visita para manter o follow-up ativo.
                              </p>
                              <Button
                                size="sm"
                                variant="outline"
                                className="mt-3 h-8 gap-1.5 rounded-full text-xs"
                                onClick={() => setIsNewVisitModalOpen(true)}
                                disabled={isLocked}
                              >
                                <Plus className="h-3.5 w-3.5" />
                                Nova Visita
                              </Button>
                            </div>
                          )}

                          <div className="space-y-3">
                            {visibleVisitRows.map((visit) => (
                              <VisitCard
                                key={visit.id}
                                visit={visit}
                                isExpanded={expandedVisitId === visit.id}
                                isLocked={isLocked}
                                onToggleDetails={() => toggleVisitDetails(visit.id)}
                                onStatusChange={handleVisitStatusChange}
                                onReschedule={handleRescheduleVisit}
                                onDuplicate={handleDuplicateVisit}
                                onFollowUp={handleCreateVisitFollowUp}
                                onDelete={handleDeleteVisit}
                              />
                            ))}
                          </div>
                        </TabsContent>

                        {/* ── Tab: Atividades ───────────────────────────── */}
                        <TabsContent value="atividades" className="mt-0 space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-heading text-sm font-semibold text-zinc-700">Atividades</h3>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 w-8 rounded-full p-0"
                                onClick={handleToggleActivityFilter}
                                title="Alternar filtro de atividades"
                              >
                                <Filter className="h-3.5 w-3.5" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 gap-1.5 rounded-full text-xs"
                                onClick={handleCreateQuickActivity}
                              >
                                <Plus className="h-3.5 w-3.5" />
                                Nova
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {visibleDealActivities.map((activity) => (
                              <div key={activity.id} className="flex items-start gap-3 rounded-2xl border border-zinc-100 bg-white p-3 transition-all hover:border-zinc-200">
                                <div className={cn(
                                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
                                  activity.status === 'completed' ? "border-zinc-100 bg-zinc-50 text-zinc-400" : "border-brand/10 bg-brand/5 text-brand"
                                )}>
                                  {(() => {
                                    const Icon = getActivityIcon(activity.type);
                                    return <Icon className="h-4 w-4" />;
                                  })()}
                                </div>
                                <div className="flex-1 space-y-1">
                                  <div className="flex items-start justify-between">
                                    <p className={cn("font-heading text-sm font-medium", activity.status === 'completed' ? "text-zinc-500 line-through" : "text-zinc-900")}>
                                      {activity.title}
                                    </p>
                                    <div className="flex gap-1">
                                      <button
                                        type="button"
                                        onClick={() => handleCompleteDealActivity(activity.id)}
                                        disabled={activity.status === "completed"}
                                        className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-300 transition-colors hover:bg-zinc-100 hover:text-zinc-600 disabled:cursor-not-allowed disabled:opacity-50"
                                        aria-label="Concluir atividade"
                                      >
                                        <CheckCircle className="h-4 w-4" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                                    <span className={cn(
                                      "flex items-center gap-1",
                                      activity.status === 'overdue' && "text-red-500 font-medium"
                                    )}>
                                      <Clock className="h-3 w-3" />
                                      {activity.dueDate}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <UserCircle className="h-3 w-3" />
                                      {activity.responsibleName}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                            {visibleDealActivities.length === 0 && (
                              <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-500">
                                Nenhuma atividade para o filtro atual.
                              </div>
                            )}
                          </div>
                        </TabsContent>

                        {/* ── Tab: Negociação ───────────────────────────── */}
                        <TabsContent value="negociacao" className="mt-0 space-y-4">
                          <NegotiationTab dealId={resolvedLead.id} dealTitle={title} />
                        </TabsContent>

                        {/* ── Tab: Anotações ────────────────────────────── */}
                        <TabsContent value="anotacoes" className="mt-0 space-y-6">
                          <div className="space-y-3 rounded-[18px] border border-zinc-200 bg-white p-4">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div>
                                <p className="font-heading text-sm font-semibold text-zinc-900">
                                  Registro rápido
                                </p>
                                <p className="mt-1 text-xs text-zinc-500">
                                  Escreva o que aconteceu e registre o próximo passo sem perder o contexto.
                                </p>
                              </div>
                              <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1">
                                <button
                                  type="button"
                                  onClick={() => setNoteVisibility("team")}
                                  className={cn(
                                    "rounded-full px-2.5 py-1 text-[11px] font-medium transition-all",
                                    noteVisibility === "team"
                                      ? "bg-white text-zinc-900 shadow-sm"
                                      : "text-zinc-500 hover:text-zinc-700",
                                  )}
                                >
                                  Time
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setNoteVisibility("internal")}
                                  className={cn(
                                    "rounded-full px-2.5 py-1 text-[11px] font-medium transition-all",
                                    noteVisibility === "internal"
                                      ? "bg-white text-zinc-900 shadow-sm"
                                      : "text-zinc-500 hover:text-zinc-700",
                                  )}
                                >
                                  Interna
                                </button>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Textarea
                                value={noteDraft}
                                onChange={(event) => {
                                  if (noteError) setNoteError(null);
                                  setNoteSaveState("idle");
                                  setNoteDraft(event.target.value);
                                }}
                                className={cn(
                                  "min-h-[110px] resize-none rounded-[14px] border-zinc-200 text-sm",
                                  noteError && "border-red-300 focus-visible:ring-red-200",
                                )}
                                placeholder="Escreva o que aconteceu e qual é o próximo passo..."
                              />
                              <div className="flex items-center justify-between text-[11px]">
                                <span className={cn(noteError ? "text-red-600" : "text-zinc-400")}>
                                  {noteError ?? `Mínimo de ${NOTE_MIN_LENGTH} caracteres.`}
                                </span>
                                <span className="text-zinc-400">
                                  {noteDraft.trim().length}/{NOTE_MAX_LENGTH}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[11px] font-medium text-zinc-500">Intenção:</span>
                              <button
                                type="button"
                                onClick={() => setNoteIntent("general")}
                                className={cn(
                                  "rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all",
                                  noteIntent === "general"
                                    ? "border-zinc-300 bg-zinc-900 text-white"
                                    : "border-zinc-200 bg-zinc-50 text-zinc-500 hover:bg-zinc-100",
                                )}
                              >
                                Registro
                              </button>
                              {noteIntentOptions.map((intent) => (
                                <button
                                  key={intent.id}
                                  type="button"
                                  onClick={() => setNoteIntent(intent.id)}
                                  className={cn(
                                    "rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all",
                                    noteIntent === intent.id
                                      ? "border-brand/20 bg-brand/10 text-brand"
                                      : "border-zinc-200 bg-zinc-50 text-zinc-500 hover:bg-zinc-100",
                                  )}
                                >
                                  {intent.label}
                                </button>
                              ))}
                            </div>

                            <AnimatePresence initial={false}>
                              {noteIntent === "proximo_passo" && (
                                <motion.div
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 4 }}
                                  transition={{ duration: 0.18, ease: "easeOut" }}
                                  className="grid gap-3 rounded-[14px] border border-brand/15 bg-brand/5 p-3 md:grid-cols-2"
                                >
                                  <div className="md:col-span-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                                      Ação
                                    </Label>
                                    <Input
                                      value={nextStepDraft.action}
                                      onChange={(event) =>
                                        setNextStepDraft((prev) => ({
                                          ...prev,
                                          action: event.target.value,
                                        }))
                                      }
                                      className="mt-1 h-9 rounded-lg border-zinc-200 text-xs"
                                      placeholder="Ex.: Confirmar disponibilidade para reunião de proposta"
                                    />
                                  </div>
                                  <div>
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                                      Data limite
                                    </Label>
                                    <Input
                                      type="date"
                                      value={nextStepDraft.dueDate}
                                      onChange={(event) =>
                                        setNextStepDraft((prev) => ({
                                          ...prev,
                                          dueDate: event.target.value,
                                        }))
                                      }
                                      className="mt-1 h-9 rounded-lg border-zinc-200 text-xs"
                                    />
                                  </div>
                                  <div>
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                                      Canal
                                    </Label>
                                    <Select
                                      value={nextStepDraft.channel}
                                      onValueChange={(value) =>
                                        setNextStepDraft((prev) => ({
                                          ...prev,
                                          channel: value as NextStepDraft["channel"],
                                        }))
                                      }
                                    >
                                      <SelectTrigger className="mt-1 h-9 rounded-lg border-zinc-200 text-xs">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="call">Ligação</SelectItem>
                                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                        <SelectItem value="email">E-mail</SelectItem>
                                        <SelectItem value="meeting">Reunião</SelectItem>
                                        <SelectItem value="visit">Visita</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="md:col-span-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                                      Responsável
                                    </Label>
                                    <Select
                                      value={nextStepDraft.ownerId}
                                      onValueChange={(value) =>
                                        setNextStepDraft((prev) => ({
                                          ...prev,
                                          ownerId: value,
                                        }))
                                      }
                                      disabled={isLocked}
                                    >
                                      <SelectTrigger className="mt-1 h-9 rounded-lg border-zinc-200 text-xs">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {mockTeamMembers.map((member) => (
                                          <SelectItem key={member.id} value={member.id}>
                                            {member.name}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {nextStepError && (
                              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
                                {nextStepError}
                              </div>
                            )}

                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                                {noteSaveState === "saving" && (
                                  <span className="inline-flex items-center gap-1">
                                    <Loader2 className="h-3 w-3 animate-spin" />
                                    Salvando nota...
                                  </span>
                                )}
                                {noteSaveState === "saved" && (
                                  <span className="inline-flex items-center gap-1 text-emerald-600">
                                    <Check className="h-3 w-3" />
                                    Nota salva agora.
                                  </span>
                                )}
                                {nextStepState === "saving" && (
                                  <span className="inline-flex items-center gap-1">
                                    <Loader2 className="h-3 w-3 animate-spin" />
                                    Criando próximo passo...
                                  </span>
                                )}
                                {nextStepState === "saved" && (
                                  <span className="inline-flex items-center gap-1 text-emerald-600">
                                    <Check className="h-3 w-3" />
                                    Próximo passo criado.
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-8 rounded-full px-3 text-xs"
                                  onClick={handleCreateNextStep}
                                  disabled={isLocked || nextStepState === "saving"}
                                >
                                  {nextStepState === "saving" ? (
                                    <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                                  ) : (
                                    <ArrowRight className="mr-1.5 h-3.5 w-3.5" />
                                  )}
                                  Criar próximo passo
                                </Button>
                                <Button
                                  size="sm"
                                  className="h-8 rounded-full bg-zinc-900 px-3 text-xs text-white hover:bg-black"
                                  onClick={handleSaveNote}
                                  disabled={isLocked || noteSaveState === "saving"}
                                >
                                  {noteSaveState === "saving" ? (
                                    <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                                  ) : (
                                    <Check className="mr-1.5 h-3.5 w-3.5" />
                                  )}
                                  Salvar nota
                                </Button>
                              </div>
                            </div>
                          </div>

                          <Separator />

                          <div className="space-y-4">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                Histórico
                              </label>
                              <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1">
                                {noteFilterOptions.map((filterOption) => (
                                  <button
                                    key={filterOption.id}
                                    type="button"
                                    onClick={() => setNotesFilter(filterOption.id)}
                                    className={cn(
                                      "rounded-full px-2.5 py-1 text-[11px] font-medium transition-all",
                                      notesFilter === filterOption.id
                                        ? "bg-zinc-900 text-white"
                                        : "text-zinc-500 hover:text-zinc-700",
                                    )}
                                  >
                                    {filterOption.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                            {groupedNotes.length === 0 ? (
                              <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-500">
                                Nenhuma nota para este filtro.
                              </div>
                            ) : (
                              <div className="space-y-5">
                                {groupedNotes.map((group) => (
                                  <div key={group.dayLabel} className="space-y-3">
                                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                                      {group.dayLabel}
                                    </p>
                                    <div className="space-y-3">
                                      {group.items.map((note) => (
                                        <div
                                          key={note.id}
                                          className="rounded-[14px] border border-zinc-200 bg-white p-3"
                                        >
                                          <div className="flex items-start justify-between gap-3">
                                            <div className="space-y-1">
                                              <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-heading text-xs font-semibold text-zinc-700">
                                                  {note.authorName}
                                                </span>
                                                <span className="text-[10px] text-zinc-400">
                                                  {formatNoteDateTime(note.createdAt)}
                                                </span>
                                                <span
                                                  className={cn(
                                                    "rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                                                    noteIntentMeta[note.intent].chipClass,
                                                  )}
                                                >
                                                  {noteIntentMeta[note.intent].label}
                                                </span>
                                                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] text-zinc-500">
                                                  {note.visibility === "internal"
                                                    ? "Interna"
                                                    : "Time"}
                                                </span>
                                              </div>
                                              {editingNoteId === note.id ? (
                                                <div className="space-y-2">
                                                  <Textarea
                                                    value={editingNoteDraft}
                                                    onChange={(event) =>
                                                      setEditingNoteDraft(event.target.value)
                                                    }
                                                    className="min-h-[86px] rounded-lg border-zinc-200 text-sm"
                                                  />
                                                  {editingNoteError && (
                                                    <p className="text-xs text-red-600">
                                                      {editingNoteError}
                                                    </p>
                                                  )}
                                                  <div className="flex items-center gap-2">
                                                    <Button
                                                      size="sm"
                                                      className="h-7 rounded-full bg-zinc-900 px-3 text-[11px] text-white hover:bg-black"
                                                      onClick={handleSaveEditedNote}
                                                      disabled={editingNoteSaveState === "saving"}
                                                    >
                                                      {editingNoteSaveState === "saving" && (
                                                        <Loader2 className="mr-1.5 h-3 w-3 animate-spin" />
                                                      )}
                                                      Salvar edição
                                                    </Button>
                                                    <Button
                                                      size="sm"
                                                      variant="ghost"
                                                      className="h-7 rounded-full px-3 text-[11px]"
                                                      onClick={() => {
                                                        setEditingNoteId(null);
                                                        setEditingNoteDraft("");
                                                        setEditingNoteError(null);
                                                      }}
                                                    >
                                                      Cancelar
                                                    </Button>
                                                  </div>
                                                </div>
                                              ) : (
                                                <p className="font-body text-sm leading-relaxed text-zinc-700">
                                                  {note.body}
                                                </p>
                                              )}
                                            </div>
                                            <div className="flex items-center gap-1">
                                              {canEditNote(note) && (
                                                <Button
                                                  size="sm"
                                                  variant="ghost"
                                                  className="h-7 rounded-full px-2 text-[11px]"
                                                  onClick={() => handleStartEditNote(note)}
                                                >
                                                  <Pencil className="mr-1 h-3 w-3" />
                                                  Editar
                                                </Button>
                                              )}
                                              {!note.isSystem && (
                                                <Button
                                                  size="sm"
                                                  variant="ghost"
                                                  className="h-7 rounded-full px-2 text-[11px]"
                                                  onClick={() => handleDuplicateNote(note)}
                                                >
                                                  <Copy className="mr-1 h-3 w-3" />
                                                  Duplicar
                                                </Button>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </TabsContent>

                        {/* ── Tab: Linha do Tempo (NEW - replaced Historico) ── */}
                        <TabsContent value="linha-do-tempo" className="mt-0 space-y-4">
                          <TimelinePremium events={buildTimelineFromStores(resolvedLead.id)} />
                        </TabsContent>
                      </div>

                      {/* ── Right Column: Persistent Sidebar (Span 5) ── */}
                      <div className="md:col-span-12 lg:col-span-5 space-y-4">
                        <StageFieldsPanel
                          opportunityId={resolvedLead.id}
                          currentStage={stage}
                          stages={stageConfig}
                          initialValues={initialStageValuesForLead as Record<string, string | number | boolean | string[] | null | undefined>}
                          isLocked={isLocked}
                          onStageChange={(newStage) => handleStageChangeFromPanel(newStage)}
                          nextStage={nextStage}
                          canCreateFields={false}
                          advanceBlockedReason={
                            contacts.length < MIN_CONTACTS_PER_CARD
                              ? "Adicione pelo menos 1 contato para avançar no funil."
                              : nextStage?.id === PROPOSAL_STAGE_ID && !hasDecisionMaker
                                ? "Defina ao menos 1 decisor na aba Contatos para avançar para Proposta."
                                : null
                          }
                        />
                      </div>
                    </div>
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
              Marcar como ganho encerra a oportunidade. Edicoes sensiveis serao
              bloqueadas. Voce quer continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full" disabled={isWinLoading}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleMarkWon}
              disabled={isWinLoading}
              className="rounded-full bg-status-success text-white hover:bg-status-success/90"
            >
              {isWinLoading ? (
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
              ) : (
                <Check className="mr-1.5 h-4 w-4" />
              )}
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
              Esta acao nao pode ser desfeita. Todos os dados desta oportunidade
              serao removidos permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setShowDeleteConfirm(false);
                closeModal();
              }}
              className="rounded-full bg-status-danger text-white hover:bg-status-danger/90"
            >
              Sim, excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog
        open={showAddContact}
        onOpenChange={(open) => {
          setShowAddContact(open);
          if (!open) {
            setNewContactError(null);
            setNewContact({
              nome: "",
              email: "",
              telefone: "",
              cargo: "",
              personalidade: "",
            });
          }
        }}
      >
        <DialogContent className="max-w-3xl gap-0 overflow-hidden rounded-[20px] p-0">
          <div className="border-b border-zinc-100 px-5 py-4">
            <DialogTitle className="font-heading text-lg font-semibold text-zinc-900">
              Adicionar contato
            </DialogTitle>
            <DialogDescription className="mt-1 text-sm text-zinc-500">
              Cadastre um novo contato para este card. Nome e cargo são obrigatórios.
            </DialogDescription>
          </div>

          <div className="space-y-4 px-5 py-4">
            {newContactError && (
              <InlineStatusBanner
                banner={{ message: newContactError, variant: "warning" }}
                onDismiss={() => setNewContactError(null)}
              />
            )}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">
                  Nome
                </Label>
                <Input
                  value={newContact.nome}
                  onChange={(e) =>
                    setNewContact({
                      ...newContact,
                      nome: e.target.value,
                    })
                  }
                  className="mt-1 h-9 rounded-[10px] font-body text-sm"
                  placeholder="Nome"
                />
              </div>
              <div>
                <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">
                  Cargo
                </Label>
                <Select
                  value={newContact.cargo}
                  onValueChange={(value) =>
                    setNewContact({
                      ...newContact,
                      cargo: value,
                    })
                  }
                >
                  <SelectTrigger className="mt-1 h-9 w-full rounded-[10px] border-zinc-200 font-body text-sm">
                    <SelectValue placeholder="Selecione o cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    {RESTAURANT_POSITIONS.map((pos) => (
                      <SelectItem key={pos.value} value={pos.value}>
                        {pos.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">
                  E-mail
                </Label>
                <Input
                  type="email"
                  value={newContact.email}
                  onChange={(e) =>
                    setNewContact({
                      ...newContact,
                      email: e.target.value,
                    })
                  }
                  className="mt-1 h-9 rounded-[10px] font-body text-sm"
                  placeholder="email@empresa.com"
                />
              </div>
              <div>
                <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">
                  Telefone
                </Label>
                <PhoneInput
                  value={newContact.telefone}
                  onValueChange={(raw) =>
                    setNewContact({
                      ...newContact,
                      telefone: raw,
                    })
                  }
                  className="mt-1 h-9 rounded-[10px] font-body text-sm"
                />
              </div>
            </div>

            <div>
              <Label className="font-body text-[10px] uppercase tracking-wider text-zinc-400">
                Personalidade
              </Label>
              <Textarea
                value={newContact.personalidade}
                onChange={(e) =>
                  setNewContact({
                    ...newContact,
                    personalidade: e.target.value,
                  })
                }
                className="mt-1 min-h-[86px] rounded-[10px] font-body text-sm"
                placeholder="Ex: Direto e objetivo, prefere reuniões curtas..."
              />
            </div>
          </div>

          <DialogFooter className="border-t border-zinc-100 bg-zinc-50/50 px-5 py-3 sm:justify-end">
            <Button
              variant="ghost"
              className="rounded-full font-heading text-xs"
              onClick={() => {
                setShowAddContact(false);
                setNewContactError(null);
                setNewContact({
                  nome: "",
                  email: "",
                  telefone: "",
                  cargo: "",
                  personalidade: "",
                });
              }}
            >
              Cancelar
            </Button>
            <Button
              className="rounded-full bg-brand font-heading text-xs text-white hover:bg-brand/90"
              onClick={handleAddContact}
            >
              Salvar contato
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <NewVisitModal
        isOpen={isNewVisitModalOpen}
        onClose={() => setIsNewVisitModalOpen(false)}
        onSave={handleSaveVisit}
        dealId={resolvedLead.id}
        contacts={contacts}
        onAddContact={(newContact) => {
          if (contacts.length >= MAX_CONTACTS_PER_CARD) {
            setContactsBanner({
              message: `Limite atingido: no máximo ${MAX_CONTACTS_PER_CARD} contatos por card.`,
              variant: "warning",
            });
            return;
          }
          // Adapt to the existing handleSaveContact which expects full QuickContactData but we only have partial
          // Creating a minimal valid contact object
          const contactToAdd: Contact = {
            id: `c${Date.now()}`,
            clientId: selectedLead?.clientId ?? "1",
            nome: newContact.nome || "Sem Nome",
            email: newContact.email || "",
            telefone: newContact.telefone || "",
            cargo: newContact.cargo || "operacional",
            personalidade: "",
            isDecisionMaker: false,
          };
          setContacts((prev) => [...prev, contactToAdd]);
          setContactsBanner({
            message: "Contato criado a partir de Visitas.",
            variant: "success",
          });
        }}
      />
      <NewActivityModal
        isOpen={isNewActivityModalOpen}
        onClose={() => setIsNewActivityModalOpen(false)}
        onSave={handleSaveActivity}
        dealId={resolvedLead.id}
        initialType={newActivityType}
        initialClientId={selectedLead?.clientId}
        initialClientName={resolvedLead.clientName}
        initialContactIds={primaryContact?.id ? [primaryContact.id] : undefined}
        initialContactNames={primaryContact?.nome ? [primaryContact.nome] : undefined}
        initialOpportunityId={resolvedLead.id}
        initialOpportunityTitle={resolvedLead.title}
        lockClient={!!selectedLead?.clientId}
        requireClient={!!selectedLead?.clientId}
      />

      <Dialog open={showDirtyConfirm} onOpenChange={(open) => {
        if (!open) cancelDiscardChanges();
      }}>
        <DialogContent className="sm:max-w-md p-6">
          <DialogHeader>
            <DialogTitle className="font-heading text-lg font-bold">Alterações não salvas</DialogTitle>
            <DialogDescription className="font-body text-sm text-zinc-500 mt-2">
              Você tem alterações não salvas. Quer descartar as alterações e sair?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6 flex sm:justify-end gap-3">
            <Button variant="outline" onClick={cancelDiscardChanges}>
              Cancelar
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={confirmDiscardChanges}
            >
              Sair sem salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
