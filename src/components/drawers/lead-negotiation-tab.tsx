"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ChevronDown,
  ChevronUp,
  Download,
  Handshake,
  Clock3,
  Send,
  CheckCircle2,
  XCircle,
  Pencil,
  Trash2,
  GitCompareArrows,
  CalendarClock,
  Copy,
  Loader2,
  BadgeCheck,
  ArrowRight,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import type { NegotiationRound, NegotiationType } from "@/types";
import { mockNegotiationRounds } from "@/lib/mock-data";

type RoundLifecycleStatus = "draft" | "sent" | "awaiting" | "accepted" | "rejected";
type RoundVisibility = "client" | "internal";
type RoundActorRole = "team" | "client" | "system";
type BannerType = "success" | "error" | "warning" | "info";
type RowAction =
  | "send"
  | "awaiting"
  | "accept"
  | "reject"
  | "set-current"
  | "delete"
  | "save-edit"
  | "save-create";

interface NegotiationRoundItem extends NegotiationRound {
  lifecycleStatus: RoundLifecycleStatus;
  visibility: RoundVisibility;
  actorRole: RoundActorRole;
  sentAt?: string;
  acceptedAt?: string;
  rejectedAt?: string;
  rejectedReason?: string;
  updatedAt?: string;
}

interface NegotiationTermsState {
  sourceRoundId: string;
  monthlyValue: number;
  setupValue: number;
  termMonths: number;
  totalValue: number;
  updatedAt: string;
  updatedBy: string;
  sourceStatus: RoundLifecycleStatus;
  sourceVisibility: RoundVisibility;
}

interface InlineBanner {
  type: BannerType;
  message: string;
}

interface NextStepDraft {
  action: string;
  dueAt: string;
  channel: "call" | "whatsapp" | "email" | "meeting" | "visit";
  ownerId: string;
}

interface RoundFormPayload {
  type: NegotiationType;
  actorRole: RoundActorRole;
  visibility: RoundVisibility;
  lifecycleStatus: RoundLifecycleStatus;
  monthlyValue: number;
  setupValue: number;
  termMonths: number;
  notes: string;
  conditions: string[];
  rejectedReason?: string;
}

interface RoundFormSeed {
  type: NegotiationType;
  actorRole: RoundActorRole;
  visibility: RoundVisibility;
  lifecycleStatus: RoundLifecycleStatus;
  monthlyValue: string;
  setupValue: string;
  termMonths: string;
  notes: string;
  conditionsText: string;
  rejectedReason: string;
}

const LOGGED_USER = {
  id: "u1",
  name: "Maria Silva",
};

const TEAM_OWNERS = [
  { id: "u1", name: "Maria Silva" },
  { id: "u2", name: "Pedro Santos" },
  { id: "u3", name: "Julia Fernandes" },
];

const ROUND_EDIT_WINDOW_HOURS = 24;
const MIN_NOTES_LENGTH = 10;

const roundTypeMeta: Record<
  NegotiationType,
  {
    label: string;
    badgeClass: string;
    icon: typeof FileText;
  }
> = {
  proposal: {
    label: "Proposta",
    badgeClass: "border-blue-200 bg-blue-50 text-blue-700",
    icon: FileText,
  },
  counter: {
    label: "Contra proposta",
    badgeClass: "border-amber-200 bg-amber-50 text-amber-700",
    icon: ArrowRight,
  },
  internal: {
    label: "Ajuste interno",
    badgeClass: "border-zinc-200 bg-zinc-100 text-zinc-700",
    icon: Handshake,
  },
  agreement: {
    label: "Fechamento",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    icon: BadgeCheck,
  },
};

const lifecycleMeta: Record<
  RoundLifecycleStatus,
  {
    label: string;
    chipClass: string;
  }
> = {
  draft: { label: "Rascunho", chipClass: "border-zinc-200 bg-zinc-100 text-zinc-600" },
  sent: { label: "Enviada", chipClass: "border-sky-200 bg-sky-50 text-sky-700" },
  awaiting: { label: "Aguardando cliente", chipClass: "border-violet-200 bg-violet-50 text-violet-700" },
  accepted: { label: "Aceita", chipClass: "border-emerald-200 bg-emerald-50 text-emerald-700" },
  rejected: { label: "Rejeitada", chipClass: "border-red-200 bg-red-50 text-red-700" },
};

const visibilityMeta: Record<
  RoundVisibility,
  { label: string; chipClass: string }
> = {
  client: { label: "Visível ao cliente", chipClass: "border-zinc-200 bg-zinc-50 text-zinc-600" },
  internal: { label: "Interna", chipClass: "border-zinc-200 bg-zinc-100 text-zinc-500" },
};

const channelOptions: Array<{ id: NextStepDraft["channel"]; label: string }> = [
  { id: "call", label: "Ligação" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "email", label: "E-mail" },
  { id: "meeting", label: "Reunião" },
  { id: "visit", label: "Visita" },
];

const roundTypeOptions: Array<{ id: NegotiationType; label: string }> = [
  { id: "proposal", label: "Proposta do time" },
  { id: "counter", label: "Contra proposta do cliente" },
  { id: "internal", label: "Ajuste interno" },
  { id: "agreement", label: "Fechamento" },
];

const lifecycleOptions: Array<{ id: RoundLifecycleStatus; label: string }> = [
  { id: "draft", label: "Rascunho" },
  { id: "sent", label: "Enviada ao cliente" },
  { id: "awaiting", label: "Aguardando resposta" },
  { id: "accepted", label: "Aceita" },
  { id: "rejected", label: "Rejeitada" },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

const toDateTimeLabel = (dateIso?: string) => {
  if (!dateIso) return "Sem data";
  const date = new Date(dateIso);
  if (Number.isNaN(date.getTime())) return "Sem data";
  return format(date, "dd MMM, HH:mm", { locale: ptBR });
};

const toInputNumber = (raw: string) => {
  const parsed = Number(raw);
  if (Number.isNaN(parsed)) return 0;
  return parsed;
};

const calcTotalValue = (monthlyValue: number, setupValue: number, termMonths: number) =>
  monthlyValue * termMonths + setupValue;

const isTermsRequired = (type: NegotiationType) =>
  type === "proposal" || type === "counter" || type === "agreement";

const isTeamOfferCandidate = (round: NegotiationRoundItem) =>
  (round.type === "proposal" || round.type === "agreement") &&
  round.actorRole === "team" &&
  round.visibility === "client";

const isRoundEditable = (round: NegotiationRoundItem) => {
  if (round.authorId !== LOGGED_USER.id) return false;
  if (round.lifecycleStatus !== "draft") return false;
  const createdAt = new Date(round.createdAt).getTime();
  if (Number.isNaN(createdAt)) return false;
  return Date.now() - createdAt <= ROUND_EDIT_WINDOW_HOURS * 60 * 60 * 1000;
};

const isRoundDeletable = (round: NegotiationRoundItem) =>
  isRoundEditable(round) && !round.isFinal;

const createRoundId = () => `round-${Date.now()}-${Math.floor(Math.random() * 999)}`;

const nowIso = () => new Date().toISOString();

function downloadTextFile(fileName: string, content: string) {
  if (typeof window === "undefined") return;
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

function buildInitialRounds(): NegotiationRoundItem[] {
  return mockNegotiationRounds.map((round) => {
    if (round.type === "counter") {
      return {
        ...round,
        actorRole: "client",
        visibility: "client",
        lifecycleStatus: "awaiting",
        sentAt: round.createdAt,
      };
    }

    if (round.type === "internal") {
      return {
        ...round,
        actorRole: "team",
        visibility: "internal",
        lifecycleStatus: "draft",
      };
    }

    if (round.type === "agreement") {
      return {
        ...round,
        actorRole: "team",
        visibility: "client",
        lifecycleStatus: "accepted",
        sentAt: round.createdAt,
        acceptedAt: round.createdAt,
        isFinal: true,
      };
    }

    return {
      ...round,
      actorRole: "team",
      visibility: "client",
      lifecycleStatus: "sent",
      sentAt: round.createdAt,
    };
  });
}

function deriveCurrentTermsRoundId(rounds: NegotiationRoundItem[]) {
  const ordered = [...rounds].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  );
  const accepted = [...ordered].reverse().find(
    (round) => isTeamOfferCandidate(round) && round.lifecycleStatus === "accepted",
  );
  if (accepted) return accepted.id;

  const sentOrAwaiting = [...ordered].reverse().find(
    (round) =>
      isTeamOfferCandidate(round) &&
      (round.lifecycleStatus === "sent" || round.lifecycleStatus === "awaiting"),
  );
  return sentOrAwaiting?.id ?? null;
}

function deriveNegotiationStatus(
  rounds: NegotiationRoundItem[],
  currentTermsRoundId: string | null,
) {
  if (rounds.length === 0) {
    return {
      label: "Não iniciada",
      description: "Nenhuma rodada registrada até agora.",
      tone: "neutral" as const,
    };
  }

  const accepted = rounds.find((round) => round.lifecycleStatus === "accepted");
  if (accepted) {
    return {
      label: "Aceita",
      description: "Rodada aceita pelo cliente. Pronta para fechamento.",
      tone: "success" as const,
    };
  }

  const currentRound = rounds.find((round) => round.id === currentTermsRoundId);
  if (currentRound?.lifecycleStatus === "awaiting" || currentRound?.lifecycleStatus === "sent") {
    return {
      label: "Aguardando cliente",
      description: `Aguardando resposta da rodada vigente enviada em ${toDateTimeLabel(currentRound.sentAt)}.`,
      tone: "warning" as const,
    };
  }

  return {
    label: "Em negociação",
    description: "Negociação ativa com ajustes internos e respostas em andamento.",
    tone: "info" as const,
  };
}

function toRoundFormSeed(round?: NegotiationRoundItem): RoundFormSeed {
  if (!round) {
    return {
      type: "proposal",
      actorRole: "team",
      visibility: "client",
      lifecycleStatus: "draft",
      monthlyValue: "",
      setupValue: "",
      termMonths: "12",
      notes: "",
      conditionsText: "",
      rejectedReason: "",
    };
  }

  return {
    type: round.type,
    actorRole: round.actorRole,
    visibility: round.visibility,
    lifecycleStatus: round.lifecycleStatus,
    monthlyValue: String(round.monthlyValue ?? ""),
    setupValue: String(round.setupValue ?? ""),
    termMonths: String(round.termMonths ?? 12),
    notes: round.details ?? "",
    conditionsText: round.conditions.join(", "),
    rejectedReason: round.rejectedReason ?? "",
  };
}

function extractTerms(round: NegotiationRoundItem | null): NegotiationTermsState | null {
  if (!round) return null;
  if (!isTermsRequired(round.type)) return null;
  const monthlyValue = round.monthlyValue ?? 0;
  const setupValue = round.setupValue ?? 0;
  const termMonths = round.termMonths ?? 12;
  return {
    sourceRoundId: round.id,
    monthlyValue,
    setupValue,
    termMonths,
    totalValue: calcTotalValue(monthlyValue, setupValue, termMonths),
    updatedAt: round.updatedAt ?? round.createdAt,
    updatedBy: round.authorName,
    sourceStatus: round.lifecycleStatus,
    sourceVisibility: round.visibility,
  };
}

function buildSummaryText(
  dealTitle: string,
  terms: NegotiationTermsState,
  rounds: NegotiationRoundItem[],
) {
  const relevantRounds = rounds.filter(
    (round) => round.visibility === "client" && round.type !== "internal",
  );

  const lines = relevantRounds.map((round, index) => {
    const typeLabel = roundTypeMeta[round.type].label;
    const statusLabel = lifecycleMeta[round.lifecycleStatus].label;
    return `${index + 1}. ${typeLabel} | ${statusLabel} | Mensal ${formatCurrency(
      round.monthlyValue ?? 0,
    )} | Setup ${formatCurrency(round.setupValue ?? 0)} | ${round.termMonths ?? 12} meses`;
  });

  return [
    `Resumo de negociação - ${dealTitle}`,
    "",
    "Termos vigentes",
    `Mensal: ${formatCurrency(terms.monthlyValue)}`,
    `Setup: ${formatCurrency(terms.setupValue)}`,
    `Prazo: ${terms.termMonths} meses`,
    `Valor total: ${formatCurrency(terms.totalValue)}`,
    `Origem: rodada ${terms.sourceRoundId}`,
    `Atualizado por: ${terms.updatedBy} em ${toDateTimeLabel(terms.updatedAt)}`,
    "",
    "Rodadas relevantes para cliente",
    ...lines,
  ].join("\n");
}

interface NegotiationTabProps {
  dealId: string;
  dealTitle: string;
}

export function NegotiationTab({ dealId, dealTitle }: NegotiationTabProps) {
  const initialRounds = useMemo(() => buildInitialRounds(), []);
  const [rounds, setRounds] = useState<NegotiationRoundItem[]>(initialRounds);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<"create" | "edit">("create");
  const [formSeed, setFormSeed] = useState<RoundFormSeed>(toRoundFormSeed());
  const [editingRoundId, setEditingRoundId] = useState<string | null>(null);
  const [isSavingRound, setIsSavingRound] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [currentTermsRoundId, setCurrentTermsRoundId] = useState<string | null>(
    deriveCurrentTermsRoundId(initialRounds),
  );
  const [rowActionLoading, setRowActionLoading] = useState<Record<string, RowAction | null>>({});

  const [banner, setBanner] = useState<InlineBanner | null>(null);

  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);
  const [exportSummaryText, setExportSummaryText] = useState<string | null>(null);

  const [nextStep, setNextStep] = useState<NextStepDraft>({
    action: "Validar retorno do cliente sobre a proposta vigente",
    dueAt: "",
    channel: "whatsapp",
    ownerId: LOGGED_USER.id,
  });
  const [nextStepState, setNextStepState] = useState<"idle" | "saving" | "saved" | "error">(
    "idle",
  );
  const [nextStepError, setNextStepError] = useState<string | null>(null);

  const orderedRounds = useMemo(
    () =>
      [...rounds].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      ),
    [rounds],
  );

  const currentTermsRound = useMemo(
    () => orderedRounds.find((round) => round.id === currentTermsRoundId) ?? null,
    [orderedRounds, currentTermsRoundId],
  );

  const currentTerms = useMemo(() => extractTerms(currentTermsRound), [currentTermsRound]);

  const latestTeamOffer = useMemo(
    () => [...orderedRounds].reverse().find((round) => isTeamOfferCandidate(round)) ?? null,
    [orderedRounds],
  );

  const latestClientCounter = useMemo(
    () => [...orderedRounds].reverse().find((round) => round.type === "counter") ?? null,
    [orderedRounds],
  );

  const negotiationStatus = useMemo(
    () => deriveNegotiationStatus(orderedRounds, currentTermsRoundId),
    [orderedRounds, currentTermsRoundId],
  );

  const runRowAction = async (
    roundId: string,
    action: RowAction,
    callback: () => void,
    onErrorMessage: string,
  ) => {
    setRowActionLoading((prev) => ({ ...prev, [roundId]: action }));
    try {
      await new Promise((resolve) => setTimeout(resolve, 220));
      callback();
    } catch {
      setBanner({
        type: "error",
        message: onErrorMessage,
      });
    } finally {
      setRowActionLoading((prev) => ({ ...prev, [roundId]: null }));
    }
  };

  const pushBanner = (next: InlineBanner) => {
    setBanner(next);
    window.setTimeout(() => setBanner(null), 2200);
  };

  const openCreateRound = (sourceRound?: NegotiationRoundItem | null) => {
    const baseSeed = toRoundFormSeed(sourceRound ?? undefined);
    setFormMode("create");
    setEditingRoundId(null);
    setFormError(null);
    setFormSeed({
      ...baseSeed,
      type: sourceRound?.type === "counter" ? "proposal" : baseSeed.type,
      actorRole: "team",
      visibility: sourceRound?.visibility === "internal" ? "client" : baseSeed.visibility,
      lifecycleStatus: "draft",
      rejectedReason: "",
    });
    setIsFormOpen(true);
  };

  const openEditRound = (round: NegotiationRoundItem) => {
    if (!isRoundEditable(round)) {
      pushBanner({
        type: "warning",
        message: "Você só pode editar rodadas próprias em rascunho dentro da janela de 24h.",
      });
      return;
    }
    setFormMode("edit");
    setEditingRoundId(round.id);
    setFormError(null);
    setFormSeed(toRoundFormSeed(round));
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setFormError(null);
    setEditingRoundId(null);
    setFormSeed(toRoundFormSeed());
  };

  const handleSaveRound = async (payload: RoundFormPayload) => {
    setIsSavingRound(true);
    setFormError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 250));

      if (formMode === "edit" && editingRoundId) {
        setRounds((prev) =>
          prev.map((round) => {
            if (round.id !== editingRoundId) return round;
            const totalValue = calcTotalValue(
              payload.monthlyValue,
              payload.setupValue,
              payload.termMonths,
            );
            return {
              ...round,
              type: payload.type,
              actorRole: payload.actorRole,
              visibility: payload.visibility,
              lifecycleStatus: payload.lifecycleStatus,
              monthlyValue: payload.monthlyValue,
              setupValue: payload.setupValue,
              termMonths: payload.termMonths,
              totalValue,
              conditions: payload.conditions,
              details: payload.notes,
              rejectedReason: payload.lifecycleStatus === "rejected" ? payload.rejectedReason : undefined,
              sentAt:
                payload.lifecycleStatus === "sent" ||
                payload.lifecycleStatus === "awaiting" ||
                payload.lifecycleStatus === "accepted"
                  ? round.sentAt ?? nowIso()
                  : undefined,
              acceptedAt:
                payload.lifecycleStatus === "accepted"
                  ? round.acceptedAt ?? nowIso()
                  : undefined,
              rejectedAt:
                payload.lifecycleStatus === "rejected"
                  ? round.rejectedAt ?? nowIso()
                  : undefined,
              updatedAt: nowIso(),
            };
          }),
        );

        const shouldPromoteTerms =
          payload.lifecycleStatus === "accepted" &&
          payload.actorRole === "team" &&
          payload.visibility === "client" &&
          (payload.type === "proposal" || payload.type === "agreement");

        if (shouldPromoteTerms) {
          setCurrentTermsRoundId(editingRoundId);
        }

        pushBanner({
          type: "success",
          message: "Rodada atualizada com sucesso.",
        });
      } else {
        const createdAt = nowIso();
        const totalValue = calcTotalValue(
          payload.monthlyValue,
          payload.setupValue,
          payload.termMonths,
        );
        const newRound: NegotiationRoundItem = {
          id: createRoundId(),
          type: payload.type,
          authorId: payload.actorRole === "team" ? LOGGED_USER.id : "client-user",
          authorName:
            payload.actorRole === "team"
              ? `${LOGGED_USER.name} - Equipe`
              : "Cliente - Cliente",
          actorRole: payload.actorRole,
          visibility: payload.visibility,
          lifecycleStatus: payload.lifecycleStatus,
          createdAt,
          monthlyValue: payload.monthlyValue,
          setupValue: payload.setupValue,
          termMonths: payload.termMonths,
          totalValue,
          conditions: payload.conditions,
          details: payload.notes,
          rejectedReason:
            payload.lifecycleStatus === "rejected" ? payload.rejectedReason : undefined,
          sentAt:
            payload.lifecycleStatus === "sent" ||
            payload.lifecycleStatus === "awaiting" ||
            payload.lifecycleStatus === "accepted"
              ? createdAt
              : undefined,
          acceptedAt: payload.lifecycleStatus === "accepted" ? createdAt : undefined,
          rejectedAt: payload.lifecycleStatus === "rejected" ? createdAt : undefined,
          status: "active",
        };

        setRounds((prev) => [...prev, newRound]);

        if (newRound.lifecycleStatus === "accepted" && isTeamOfferCandidate(newRound)) {
          setCurrentTermsRoundId(newRound.id);
        }

        pushBanner({
          type: "success",
          message: "Rodada registrada. Histórico e resumo atualizados.",
        });
      }

      closeForm();
    } catch {
      setFormError("Não consegui salvar a rodada. Revise os campos e tente novamente.");
    } finally {
      setIsSavingRound(false);
    }
  };

  const handleMarkRoundSent = async (round: NegotiationRoundItem) => {
    if (!isTeamOfferCandidate(round)) {
      pushBanner({ type: "warning", message: "Somente propostas visíveis ao cliente podem ser enviadas." });
      return;
    }
    if (round.lifecycleStatus !== "draft") {
      pushBanner({ type: "warning", message: "Apenas rodadas em rascunho podem ser enviadas." });
      return;
    }
    if (!window.confirm("Confirmar envio desta rodada ao cliente?")) return;

    await runRowAction(
      round.id,
      "send",
      () => {
        setRounds((prev) =>
          prev.map((item) =>
            item.id === round.id
              ? {
                  ...item,
                  lifecycleStatus: "sent",
                  sentAt: nowIso(),
                  updatedAt: nowIso(),
                }
              : item,
          ),
        );
        pushBanner({
          type: "success",
          message: "Rodada enviada ao cliente e pronta para acompanhamento.",
        });
      },
      "Não consegui marcar a rodada como enviada.",
    );
  };

  const handleMarkRoundAwaiting = async (round: NegotiationRoundItem) => {
    if (round.lifecycleStatus !== "sent") return;

    await runRowAction(
      round.id,
      "awaiting",
      () => {
        setRounds((prev) =>
          prev.map((item) =>
            item.id === round.id
              ? {
                  ...item,
                  lifecycleStatus: "awaiting",
                  updatedAt: nowIso(),
                }
              : item,
          ),
        );
        pushBanner({
          type: "info",
          message: "Status atualizado para aguardando resposta do cliente.",
        });
      },
      "Não consegui atualizar o status da rodada.",
    );
  };

  const handleMarkRoundAccepted = async (round: NegotiationRoundItem) => {
    if (!window.confirm("Confirmar esta rodada como aceita?")) return;

    await runRowAction(
      round.id,
      "accept",
      () => {
        setRounds((prev) =>
          prev.map((item) =>
            item.id === round.id
              ? {
                  ...item,
                  lifecycleStatus: "accepted",
                  acceptedAt: nowIso(),
                  updatedAt: nowIso(),
                }
              : item,
          ),
        );
        if (isTeamOfferCandidate(round)) {
          setCurrentTermsRoundId(round.id);
        }
        pushBanner({
          type: "success",
          message: isTeamOfferCandidate(round)
            ? "Rodada aceita e promovida para termos vigentes."
            : "Rodada aceita com sucesso.",
        });
      },
      "Não consegui marcar a rodada como aceita.",
    );
  };

  const handleMarkRoundRejected = async (round: NegotiationRoundItem) => {
    const reason = window.prompt("Informe o motivo da rejeição (mínimo 5 caracteres):");
    if (!reason || reason.trim().length < 5) {
      pushBanner({
        type: "warning",
        message: "Motivo obrigatório para rejeitar a rodada.",
      });
      return;
    }

    await runRowAction(
      round.id,
      "reject",
      () => {
        setRounds((prev) =>
          prev.map((item) =>
            item.id === round.id
              ? {
                  ...item,
                  lifecycleStatus: "rejected",
                  rejectedAt: nowIso(),
                  rejectedReason: reason.trim(),
                  updatedAt: nowIso(),
                }
              : item,
          ),
        );
        pushBanner({
          type: "warning",
          message: "Rodada marcada como rejeitada.",
        });
      },
      "Não consegui rejeitar a rodada.",
    );
  };

  const handleSetCurrentTerms = async (round: NegotiationRoundItem) => {
    if (!isTeamOfferCandidate(round)) {
      pushBanner({
        type: "warning",
        message: "Somente proposta do time visível ao cliente pode virar termo vigente.",
      });
      return;
    }

    await runRowAction(
      round.id,
      "set-current",
      () => {
        setCurrentTermsRoundId(round.id);
        pushBanner({
          type: "success",
          message: `Rodada ${round.id} definida como fonte dos termos vigentes.`,
        });
      },
      "Não consegui definir os termos vigentes desta rodada.",
    );
  };

  const handleDeleteRound = async (round: NegotiationRoundItem) => {
    if (!isRoundDeletable(round)) {
      pushBanner({
        type: "warning",
        message: "Você só pode excluir rodadas próprias em rascunho dentro da janela permitida.",
      });
      return;
    }
    if (!window.confirm("Excluir esta rodada? Esta ação remove o item do histórico.")) return;

    await runRowAction(
      round.id,
      "delete",
      () => {
        setRounds((prev) => {
          const nextRounds = prev.filter((item) => item.id !== round.id);
          if (currentTermsRoundId === round.id) {
            setCurrentTermsRoundId(deriveCurrentTermsRoundId(nextRounds));
          }
          return nextRounds;
        });
        pushBanner({
          type: "success",
          message: "Rodada excluída com sucesso.",
        });
      },
      "Não consegui excluir a rodada.",
    );
  };

  const handleExportSummary = async () => {
    if (!currentTerms) {
      setExportError("Export bloqueado. Defina termos vigentes antes de exportar.");
      pushBanner({
        type: "warning",
        message: "Defina os termos vigentes para gerar um resumo confiável.",
      });
      return;
    }

    setIsExporting(true);
    setExportError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 260));
      const summaryText = buildSummaryText(dealTitle, currentTerms, orderedRounds);
      setExportSummaryText(summaryText);
      downloadTextFile(`negociacao-${dealId}.txt`, summaryText);
      pushBanner({
        type: "success",
        message: "Resumo exportado com base nos termos vigentes.",
      });
    } catch {
      setExportError("Não consegui gerar o resumo. Tente novamente.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopySummary = async () => {
    if (!exportSummaryText) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(exportSummaryText);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = exportSummaryText;
        document.body.append(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }
      pushBanner({
        type: "success",
        message: "Resumo copiado para a área de transferência.",
      });
    } catch {
      pushBanner({
        type: "error",
        message: "Não consegui copiar o resumo.",
      });
    }
  };

  const handleSaveNextStep = async () => {
    setNextStepState("saving");
    setNextStepError(null);

    if (nextStep.action.trim().length < 4) {
      setNextStepState("error");
      setNextStepError("Defina uma ação objetiva para o próximo passo.");
      return;
    }

    if (!nextStep.dueAt) {
      setNextStepState("error");
      setNextStepError("Defina a data para o próximo passo.");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 220));
      setNextStepState("saved");
      pushBanner({
        type: "success",
        message: "Próximo passo salvo com sucesso.",
      });
      window.setTimeout(() => setNextStepState("idle"), 1600);
    } catch {
      setNextStepState("error");
      setNextStepError("Não consegui salvar o próximo passo. Tente novamente.");
    }
  };

  const statusToneClass =
    negotiationStatus.tone === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : negotiationStatus.tone === "warning"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : negotiationStatus.tone === "info"
          ? "border-sky-200 bg-sky-50 text-sky-700"
          : "border-zinc-200 bg-zinc-100 text-zinc-600";

  return (
    <div className="space-y-5" data-deal-id={dealId}>
      <header className="space-y-4 border-b border-zinc-100 pb-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-200 bg-violet-50 text-violet-700">
                <Handshake className="h-4 w-4" />
              </div>
              <h2 className="font-heading text-lg font-semibold text-zinc-900">Negociação</h2>
            </div>
            <p className="pl-10 text-sm text-zinc-500">
              Rodadas, termos vigentes e próximo passo em uma única execução.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 rounded-full text-xs"
              onClick={handleExportSummary}
              disabled={isExporting}
            >
              {isExporting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
              {isExporting ? "Gerando..." : "Exportar resumo"}
            </Button>
            <Button
              size="sm"
              className="h-8 gap-1.5 rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800"
              onClick={() => openCreateRound(latestTeamOffer)}
            >
              <Plus className="h-3.5 w-3.5" />
              Nova rodada
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className={cn("inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-medium", statusToneClass)}>
            <Clock3 className="h-3.5 w-3.5" />
            {negotiationStatus.label}
          </div>
          <p className="text-xs text-zinc-500">{negotiationStatus.description}</p>
        </div>
      </header>

      {banner ? (
        <div
          className={cn(
            "rounded-lg border px-3 py-2 text-xs font-medium",
            banner.type === "success" && "border-emerald-200 bg-emerald-50 text-emerald-700",
            banner.type === "error" && "border-red-200 bg-red-50 text-red-700",
            banner.type === "warning" && "border-amber-200 bg-amber-50 text-amber-700",
            banner.type === "info" && "border-sky-200 bg-sky-50 text-sky-700",
          )}
          role="status"
        >
          {banner.message}
        </div>
      ) : null}

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-8">
          <AnimatePresence>
            {isFormOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.16 }}
              >
                <NegotiationRoundForm
                  mode={formMode}
                  seed={formSeed}
                  isSaving={isSavingRound}
                  errorMessage={formError}
                  onCancel={closeForm}
                  onSave={handleSaveRound}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {orderedRounds.length === 0 ? (
            <EmptyState onStart={() => openCreateRound()} />
          ) : (
            <div className="relative space-y-3">
              <div className="absolute bottom-3 left-5 top-3 w-px bg-zinc-200" />

              {orderedRounds.map((round, index) => (
                <NegotiationRoundCard
                  key={round.id}
                  round={round}
                  displayIndex={index + 1}
                  isCurrentTerms={round.id === currentTermsRoundId}
                  isLast={index === orderedRounds.length - 1}
                  loadingAction={rowActionLoading[round.id] ?? null}
                  onEdit={openEditRound}
                  onDelete={handleDeleteRound}
                  onSend={handleMarkRoundSent}
                  onAwaiting={handleMarkRoundAwaiting}
                  onAccept={handleMarkRoundAccepted}
                  onReject={handleMarkRoundRejected}
                  onSetCurrent={handleSetCurrentTerms}
                  onCreateFromRound={(item) => openCreateRound(item)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4 lg:col-span-4 lg:sticky lg:top-5">
          <CurrentTermsCard
            terms={currentTerms}
            sourceRound={currentTermsRound}
            onCreateFromCurrent={() => openCreateRound(currentTermsRound)}
          />

          <NegotiationComparisonCard
            currentOfferRound={currentTermsRound ?? latestTeamOffer}
            lastClientCounter={latestClientCounter}
          />

          <NextStepCard
            draft={nextStep}
            saveState={nextStepState}
            errorMessage={nextStepError}
            onChange={setNextStep}
            onSave={handleSaveNextStep}
          />

          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="space-y-1">
              <h3 className="font-heading text-sm font-semibold text-zinc-900">Resumo para envio</h3>
              <p className="text-xs text-zinc-500">
                O export usa os termos vigentes e ignora rodadas internas por padrão.
              </p>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-8 gap-1.5 rounded-full text-xs"
                onClick={handleExportSummary}
                disabled={isExporting}
              >
                {isExporting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
                Exportar
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 rounded-full text-xs text-zinc-600 hover:bg-zinc-100"
                onClick={handleCopySummary}
                disabled={!exportSummaryText}
              >
                <Copy className="h-3.5 w-3.5" />
                Copiar texto
              </Button>
            </div>

            {exportError ? (
              <p className="mt-2 text-xs text-red-600">{exportError}</p>
            ) : null}
            {exportSummaryText ? (
              <p className="mt-2 text-xs text-emerald-700">Resumo pronto para compartilhamento.</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function CurrentTermsCard({
  terms,
  sourceRound,
  onCreateFromCurrent,
}: {
  terms: NegotiationTermsState | null;
  sourceRound: NegotiationRoundItem | null;
  onCreateFromCurrent: () => void;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="space-y-1">
        <h3 className="font-heading text-sm font-semibold text-zinc-900">Termos vigentes</h3>
        <p className="text-xs text-zinc-500">
          Fonte de verdade para resumo e decisão de fechamento.
        </p>
      </div>

      {!terms || !sourceRound ? (
        <div className="mt-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-3">
          <p className="text-xs text-zinc-600">
            Ainda não existem termos vigentes. Defina uma rodada do time como vigente.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <StatCard label="Mensal" value={formatCurrency(terms.monthlyValue)} />
            <StatCard label="Setup" value={formatCurrency(terms.setupValue)} />
            <StatCard label="Prazo" value={`${terms.termMonths} meses`} />
            <StatCard label="Total" value={formatCurrency(terms.totalValue)} />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <Badge className="border-zinc-200 bg-zinc-100 text-zinc-700">
              Rodada fonte: {sourceRound.id}
            </Badge>
            <Badge className={cn("border", lifecycleMeta[sourceRound.lifecycleStatus].chipClass)}>
              {lifecycleMeta[sourceRound.lifecycleStatus].label}
            </Badge>
            <Badge className={cn("border", visibilityMeta[sourceRound.visibility].chipClass)}>
              {visibilityMeta[sourceRound.visibility].label}
            </Badge>
          </div>

          <p className="text-[11px] text-zinc-500">
            Atualizado por {terms.updatedBy} em {toDateTimeLabel(terms.updatedAt)}.
          </p>
        </div>
      )}

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="mt-4 h-8 w-full gap-1.5 rounded-full text-xs"
        onClick={onCreateFromCurrent}
      >
        <Plus className="h-3.5 w-3.5" />
        Nova rodada baseada na última oferta
      </Button>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-zinc-900">{value}</p>
    </div>
  );
}

function NegotiationComparisonCard({
  currentOfferRound,
  lastClientCounter,
}: {
  currentOfferRound: NegotiationRoundItem | null;
  lastClientCounter: NegotiationRoundItem | null;
}) {
  const deltaMonthly =
    (lastClientCounter?.monthlyValue ?? 0) - (currentOfferRound?.monthlyValue ?? 0);
  const deltaSetup =
    (lastClientCounter?.setupValue ?? 0) - (currentOfferRound?.setupValue ?? 0);

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="flex items-center gap-2">
        <GitCompareArrows className="h-4 w-4 text-zinc-500" />
        <h3 className="font-heading text-sm font-semibold text-zinc-900">Comparador de negociação</h3>
      </div>

      <div className="mt-3 space-y-2">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
            Nossa última oferta
          </p>
          <p className="mt-1 text-sm font-semibold text-zinc-900">
            {currentOfferRound ? formatCurrency(currentOfferRound.monthlyValue ?? 0) : "--"} /mês
          </p>
          <p className="text-[11px] text-zinc-500">
            Setup {currentOfferRound ? formatCurrency(currentOfferRound.setupValue ?? 0) : "--"}
          </p>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-700">
            Última contra proposta do cliente
          </p>
          <p className="mt-1 text-sm font-semibold text-amber-900">
            {lastClientCounter ? formatCurrency(lastClientCounter.monthlyValue ?? 0) : "--"} /mês
          </p>
          <p className="text-[11px] text-amber-700">
            Setup {lastClientCounter ? formatCurrency(lastClientCounter.setupValue ?? 0) : "--"}
          </p>
        </div>
      </div>

      {currentOfferRound && lastClientCounter ? (
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-2.5">
            <p className="text-[10px] uppercase tracking-wide text-zinc-500">Delta mensal</p>
            <p className={cn("mt-1 text-sm font-semibold", deltaMonthly <= 0 ? "text-emerald-700" : "text-amber-700")}>
              {deltaMonthly > 0 ? "+" : ""}
              {formatCurrency(deltaMonthly)}
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-2.5">
            <p className="text-[10px] uppercase tracking-wide text-zinc-500">Delta setup</p>
            <p className={cn("mt-1 text-sm font-semibold", deltaSetup <= 0 ? "text-emerald-700" : "text-amber-700")}>
              {deltaSetup > 0 ? "+" : ""}
              {formatCurrency(deltaSetup)}
            </p>
          </div>
        </div>
      ) : (
        <p className="mt-3 text-xs text-zinc-500">
          Registre ao menos uma proposta do time e uma contra proposta do cliente para comparar.
        </p>
      )}
    </div>
  );
}

function NextStepCard({
  draft,
  saveState,
  errorMessage,
  onChange,
  onSave,
}: {
  draft: NextStepDraft;
  saveState: "idle" | "saving" | "saved" | "error";
  errorMessage: string | null;
  onChange: (draft: NextStepDraft) => void;
  onSave: () => void;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="flex items-center gap-2">
        <CalendarClock className="h-4 w-4 text-zinc-500" />
        <h3 className="font-heading text-sm font-semibold text-zinc-900">Próximo passo</h3>
      </div>
      <p className="mt-1 text-xs text-zinc-500">
        Defina ação, data, canal e responsável para manter a negociação no ritmo.
      </p>

      <div className="mt-3 space-y-3">
        <div>
          <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Ação
          </Label>
          <Input
            value={draft.action}
            onChange={(event) => onChange({ ...draft, action: event.target.value })}
            className="mt-1 h-9 rounded-lg border-zinc-200 text-xs"
            placeholder="Ex.: Ligar para validar objeção de setup"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
              Data
            </Label>
            <Input
              type="date"
              value={draft.dueAt}
              onChange={(event) => onChange({ ...draft, dueAt: event.target.value })}
              className="mt-1 h-9 rounded-lg border-zinc-200 text-xs"
            />
          </div>

          <div>
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
              Canal
            </Label>
            <Select
              value={draft.channel}
              onValueChange={(value) =>
                onChange({ ...draft, channel: value as NextStepDraft["channel"] })
              }
            >
              <SelectTrigger className="mt-1 h-9 rounded-lg border-zinc-200 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {channelOptions.map((channel) => (
                  <SelectItem key={channel.id} value={channel.id}>
                    {channel.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Responsável
          </Label>
          <Select
            value={draft.ownerId}
            onValueChange={(value) => onChange({ ...draft, ownerId: value })}
          >
            <SelectTrigger className="mt-1 h-9 rounded-lg border-zinc-200 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TEAM_OWNERS.map((owner) => (
                <SelectItem key={owner.id} value={owner.id}>
                  {owner.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="button"
          size="sm"
          className="h-8 w-full rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800"
          onClick={onSave}
          disabled={saveState === "saving"}
        >
          {saveState === "saving" ? (
            <>
              <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
              Salvando...
            </>
          ) : (
            "Salvar próximo passo"
          )}
        </Button>

        {saveState === "saved" ? (
          <p className="text-xs text-emerald-700">Próximo passo salvo.</p>
        ) : null}
        {saveState === "error" && errorMessage ? (
          <p className="text-xs text-red-600">{errorMessage}</p>
        ) : null}
      </div>
    </div>
  );
}

function NegotiationRoundCard({
  round,
  displayIndex,
  isCurrentTerms,
  isLast,
  loadingAction,
  onEdit,
  onDelete,
  onSend,
  onAwaiting,
  onAccept,
  onReject,
  onSetCurrent,
  onCreateFromRound,
}: {
  round: NegotiationRoundItem;
  displayIndex: number;
  isCurrentTerms: boolean;
  isLast: boolean;
  loadingAction: RowAction | null;
  onEdit: (round: NegotiationRoundItem) => void;
  onDelete: (round: NegotiationRoundItem) => void;
  onSend: (round: NegotiationRoundItem) => void;
  onAwaiting: (round: NegotiationRoundItem) => void;
  onAccept: (round: NegotiationRoundItem) => void;
  onReject: (round: NegotiationRoundItem) => void;
  onSetCurrent: (round: NegotiationRoundItem) => void;
  onCreateFromRound: (round: NegotiationRoundItem) => void;
}) {
  const [expanded, setExpanded] = useState(isLast);
  const typeMeta = roundTypeMeta[round.type];
  const TypeIcon = typeMeta.icon;

  const canSend = isTeamOfferCandidate(round) && round.lifecycleStatus === "draft";
  const canAwaiting = round.lifecycleStatus === "sent";
  const canAccept = round.lifecycleStatus === "sent" || round.lifecycleStatus === "awaiting";
  const canReject = round.lifecycleStatus === "sent" || round.lifecycleStatus === "awaiting";
  const canSetCurrent = isTeamOfferCandidate(round) && round.lifecycleStatus !== "draft";
  const canEdit = isRoundEditable(round);
  const canDelete = isRoundDeletable(round);

  return (
    <div className="relative pl-6">
      <div
        className={cn(
          "absolute left-3 top-5 h-6 w-6 -translate-x-1/2 rounded-full border-2 bg-white",
          isCurrentTerms ? "border-brand" : "border-zinc-300",
        )}
      >
        <div
          className={cn(
            "absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full",
            isCurrentTerms ? "bg-brand" : "bg-zinc-300",
          )}
        />
      </div>

      <motion.div layout className={cn("rounded-2xl border bg-white shadow-sm", expanded && "ring-1 ring-zinc-200")}>
        <button
          type="button"
          className="flex w-full items-center gap-3 p-4 text-left"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border", typeMeta.badgeClass)}>
            <TypeIcon className="h-4 w-4" />
          </div>

          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wide text-zinc-500">
                Rodada {displayIndex}
              </span>
              <Badge className={cn("border text-[10px]", typeMeta.badgeClass)}>{typeMeta.label}</Badge>
              <Badge className={cn("border text-[10px]", lifecycleMeta[round.lifecycleStatus].chipClass)}>
                {lifecycleMeta[round.lifecycleStatus].label}
              </Badge>
              <Badge className={cn("border text-[10px]", visibilityMeta[round.visibility].chipClass)}>
                {visibilityMeta[round.visibility].label}
              </Badge>
              {isCurrentTerms ? (
                <Badge className="border-emerald-200 bg-emerald-50 text-[10px] text-emerald-700">
                  Termos vigentes
                </Badge>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600">
              <span className="font-medium text-zinc-800">{round.authorName}</span>
              <span>{formatCurrency(round.monthlyValue ?? 0)} /mês</span>
              <span>Setup {formatCurrency(round.setupValue ?? 0)}</span>
              <span className="text-zinc-500">{round.termMonths ?? 12} meses</span>
            </div>
            <div className="text-[11px] text-zinc-400">
              Criada em {toDateTimeLabel(round.createdAt)}
              {round.sentAt ? ` · Enviada em ${toDateTimeLabel(round.sentAt)}` : ""}
            </div>
          </div>

          {expanded ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.16 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 px-4 pb-4 pt-0">
                <Separator />

                {isTermsRequired(round.type) ? (
                  <div className="grid grid-cols-2 gap-2">
                    <StatCard label="Mensal" value={formatCurrency(round.monthlyValue ?? 0)} />
                    <StatCard label="Setup" value={formatCurrency(round.setupValue ?? 0)} />
                    <StatCard label="Prazo" value={`${round.termMonths ?? 12} meses`} />
                    <StatCard label="Total" value={formatCurrency(round.totalValue ?? 0)} />
                  </div>
                ) : (
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-3 text-xs text-zinc-600">
                    Ajuste interno sem alteração direta de termos vigentes.
                  </div>
                )}

                {round.conditions.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">Condições</p>
                    <div className="flex flex-wrap gap-1.5">
                      {round.conditions.map((condition) => (
                        <Badge
                          key={`${round.id}-${condition}`}
                          className="border-zinc-200 bg-zinc-100 text-[10px] font-normal text-zinc-700"
                        >
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : null}

                {round.details ? (
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">Observações</p>
                    <p className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-3 text-xs text-zinc-700">
                      {round.details}
                    </p>
                  </div>
                ) : null}

                {round.rejectedReason ? (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-2 text-xs text-red-700">
                    Motivo da rejeição: {round.rejectedReason}
                  </p>
                ) : null}

                <div className="flex flex-wrap items-center gap-1.5">
                  <ActionButton
                    label="Marcar enviada"
                    icon={Send}
                    visible={canSend}
                    loading={loadingAction === "send"}
                    onClick={() => onSend(round)}
                  />
                  <ActionButton
                    label="Aguardando"
                    icon={Clock3}
                    visible={canAwaiting}
                    loading={loadingAction === "awaiting"}
                    onClick={() => onAwaiting(round)}
                  />
                  <ActionButton
                    label="Aceita"
                    icon={CheckCircle2}
                    visible={canAccept}
                    loading={loadingAction === "accept"}
                    onClick={() => onAccept(round)}
                  />
                  <ActionButton
                    label="Rejeitar"
                    icon={XCircle}
                    visible={canReject}
                    loading={loadingAction === "reject"}
                    onClick={() => onReject(round)}
                  />
                  <ActionButton
                    label="Definir vigente"
                    icon={BadgeCheck}
                    visible={canSetCurrent && !isCurrentTerms}
                    loading={loadingAction === "set-current"}
                    onClick={() => onSetCurrent(round)}
                  />
                  <ActionButton
                    label="Nova rodada"
                    icon={Plus}
                    visible
                    loading={false}
                    onClick={() => onCreateFromRound(round)}
                  />
                  <ActionButton
                    label="Editar"
                    icon={Pencil}
                    visible={canEdit}
                    loading={loadingAction === "save-edit"}
                    onClick={() => onEdit(round)}
                  />
                  <ActionButton
                    label="Excluir"
                    icon={Trash2}
                    visible={canDelete}
                    loading={loadingAction === "delete"}
                    onClick={() => onDelete(round)}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function ActionButton({
  label,
  icon: Icon,
  visible,
  loading,
  onClick,
}: {
  label: string;
  icon: typeof Send;
  visible: boolean;
  loading: boolean;
  onClick: () => void;
}) {
  if (!visible) return null;

  return (
    <Button
      type="button"
      size="sm"
      variant="outline"
      className="h-7 gap-1.5 rounded-full px-2.5 text-[11px]"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Icon className="h-3.5 w-3.5" />}
      {label}
    </Button>
  );
}

function EmptyState({ onStart }: { onStart: () => void }) {
  return (
    <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/70 p-8 text-center">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
        <Handshake className="h-5 w-5" />
      </div>
      <h3 className="mt-3 font-heading text-base font-semibold text-zinc-900">
        Nenhuma rodada registrada
      </h3>
      <p className="mt-1 text-sm text-zinc-500">
        Registre a primeira rodada para iniciar os termos e o fluxo de decisão.
      </p>
      <Button
        type="button"
        variant="outline"
        className="mt-4 h-8 rounded-full text-xs"
        onClick={onStart}
      >
        <Plus className="mr-1.5 h-3.5 w-3.5" />
        Registrar primeira rodada
      </Button>
    </div>
  );
}

function NegotiationRoundForm({
  mode,
  seed,
  isSaving,
  errorMessage,
  onCancel,
  onSave,
}: {
  mode: "create" | "edit";
  seed: RoundFormSeed;
  isSaving: boolean;
  errorMessage: string | null;
  onCancel: () => void;
  onSave: (payload: RoundFormPayload) => Promise<void> | void;
}) {
  const [draft, setDraft] = useState<RoundFormSeed>(seed);
  const [fieldError, setFieldError] = useState<string | null>(null);

  const requiresTerms = isTermsRequired(draft.type);
  const isInternal = draft.type === "internal" || draft.visibility === "internal";

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFieldError(null);

    if (requiresTerms) {
      const monthly = toInputNumber(draft.monthlyValue);
      const setup = toInputNumber(draft.setupValue);
      const term = toInputNumber(draft.termMonths);

      if (monthly < 0 || monthly > 999999) {
        setFieldError("Valor mensal inválido.");
        return;
      }
      if (setup < 0 || setup > 999999) {
        setFieldError("Valor de setup inválido.");
        return;
      }
      if (term < 1 || term > 36) {
        setFieldError("Prazo deve estar entre 1 e 36 meses.");
        return;
      }
    }

    if (
      draft.lifecycleStatus === "rejected" &&
      draft.rejectedReason.trim().length < 5
    ) {
      setFieldError("Informe motivo de rejeição com pelo menos 5 caracteres.");
      return;
    }

    if (
      (draft.lifecycleStatus === "sent" || draft.lifecycleStatus === "awaiting") &&
      draft.visibility === "internal"
    ) {
      setFieldError("Rodadas internas não podem ser marcadas como enviadas.");
      return;
    }

    if (draft.notes.trim().length > 0 && draft.notes.trim().length < MIN_NOTES_LENGTH) {
      setFieldError(`Observações devem ter no mínimo ${MIN_NOTES_LENGTH} caracteres.`);
      return;
    }

    const payload: RoundFormPayload = {
      type: draft.type,
      actorRole: draft.actorRole,
      visibility: draft.visibility,
      lifecycleStatus: draft.lifecycleStatus,
      monthlyValue: requiresTerms ? toInputNumber(draft.monthlyValue) : 0,
      setupValue: requiresTerms ? toInputNumber(draft.setupValue) : 0,
      termMonths: requiresTerms ? toInputNumber(draft.termMonths) : 12,
      notes: draft.notes.trim(),
      conditions: draft.conditionsText
        .split(",")
        .map((condition) => condition.trim())
        .filter(Boolean),
      rejectedReason: draft.lifecycleStatus === "rejected" ? draft.rejectedReason.trim() : undefined,
    };

    await onSave(payload);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="font-heading text-sm font-semibold text-zinc-900">
            {mode === "create" ? "Nova rodada" : "Editar rodada"}
          </h3>
          <p className="text-xs text-zinc-500">
            Defina tipo, status, termos e condições com validação antes de salvar.
          </p>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-7 rounded-full px-2.5 text-xs"
          onClick={onCancel}
        >
          Cancelar
        </Button>
      </div>

      <form className="space-y-3" onSubmit={submit}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
              Tipo da rodada
            </Label>
            <Select
              value={draft.type}
              onValueChange={(value) => {
                const nextType = value as NegotiationType;
                setDraft((prev) => ({
                  ...prev,
                  type: nextType,
                  actorRole: nextType === "counter" ? "client" : "team",
                  visibility: nextType === "internal" ? "internal" : prev.visibility,
                  lifecycleStatus:
                    nextType === "internal" ? "draft" : prev.lifecycleStatus,
                }));
              }}
            >
              <SelectTrigger className="mt-1 h-9 rounded-lg border-zinc-200 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {roundTypeOptions.map((option) => (
                  <SelectItem key={option.id} value={option.id}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
              Status operacional
            </Label>
            <Select
              value={draft.lifecycleStatus}
              onValueChange={(value) =>
                setDraft((prev) => ({
                  ...prev,
                  lifecycleStatus: value as RoundLifecycleStatus,
                }))
              }
              disabled={isInternal}
            >
              <SelectTrigger className="mt-1 h-9 rounded-lg border-zinc-200 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {lifecycleOptions.map((option) => (
                  <SelectItem key={option.id} value={option.id}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
              Origem
            </Label>
            <Select
              value={draft.actorRole}
              onValueChange={(value) =>
                setDraft((prev) => ({
                  ...prev,
                  actorRole: value as RoundActorRole,
                }))
              }
              disabled={draft.type === "counter"}
            >
              <SelectTrigger className="mt-1 h-9 rounded-lg border-zinc-200 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team">Time interno</SelectItem>
                <SelectItem value="client">Cliente</SelectItem>
                <SelectItem value="system">Sistema</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
              Visibilidade
            </Label>
            <Select
              value={draft.visibility}
              onValueChange={(value) =>
                setDraft((prev) => ({
                  ...prev,
                  visibility: value as RoundVisibility,
                  lifecycleStatus:
                    value === "internal" ? "draft" : prev.lifecycleStatus,
                }))
              }
              disabled={draft.type === "internal"}
            >
              <SelectTrigger className="mt-1 h-9 rounded-lg border-zinc-200 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="client">Visível ao cliente</SelectItem>
                <SelectItem value="internal">Interna</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {requiresTerms ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div>
              <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                Mensal
              </Label>
              <Input
                type="number"
                min={0}
                max={999999}
                value={draft.monthlyValue}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, monthlyValue: event.target.value }))
                }
                className="mt-1 h-9 rounded-lg border-zinc-200 text-xs"
                placeholder="0"
              />
            </div>
            <div>
              <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                Setup
              </Label>
              <Input
                type="number"
                min={0}
                max={999999}
                value={draft.setupValue}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, setupValue: event.target.value }))
                }
                className="mt-1 h-9 rounded-lg border-zinc-200 text-xs"
                placeholder="0"
              />
            </div>
            <div>
              <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                Prazo (meses)
              </Label>
              <Input
                type="number"
                min={1}
                max={36}
                value={draft.termMonths}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, termMonths: event.target.value }))
                }
                className="mt-1 h-9 rounded-lg border-zinc-200 text-xs"
                placeholder="12"
              />
            </div>
          </div>
        ) : null}

        <div>
          <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Condições (separe por vírgula)
          </Label>
          <Input
            value={draft.conditionsText}
            onChange={(event) =>
              setDraft((prev) => ({ ...prev, conditionsText: event.target.value }))
            }
            className="mt-1 h-9 rounded-lg border-zinc-200 text-xs"
            placeholder="Ex.: Setup reduzido, carência de 15 dias"
          />
        </div>

        <div>
          <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Observações
          </Label>
          <Textarea
            value={draft.notes}
            onChange={(event) =>
              setDraft((prev) => ({ ...prev, notes: event.target.value }))
            }
            className="mt-1 min-h-[86px] resize-none rounded-lg border-zinc-200 text-xs"
            placeholder="Contexto da rodada e próximos pontos de negociação..."
          />
        </div>

        {draft.lifecycleStatus === "rejected" ? (
          <div>
            <Label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
              Motivo da rejeição
            </Label>
            <Input
              value={draft.rejectedReason}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, rejectedReason: event.target.value }))
              }
              className="mt-1 h-9 rounded-lg border-zinc-200 text-xs"
              placeholder="Ex.: Cliente não aprovou condição de setup"
            />
          </div>
        ) : null}

        {fieldError ? (
          <p className="text-xs text-red-600">{fieldError}</p>
        ) : null}
        {errorMessage ? <p className="text-xs text-red-600">{errorMessage}</p> : null}

        <div className="flex justify-end gap-2 pt-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 rounded-full px-3 text-xs"
            onClick={onCancel}
          >
            Fechar
          </Button>
          <Button
            type="submit"
            size="sm"
            className="h-8 rounded-full bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800"
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                Salvando...
              </>
            ) : mode === "create" ? (
              "Salvar rodada"
            ) : (
              "Salvar alterações"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
