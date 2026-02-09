"use client";

import { useState, useCallback, useRef, useMemo } from "react";
import {
  Plus,
  Filter,
  MoreHorizontal,
  Flame,
  Thermometer,
  Snowflake,
  GripVertical,
  Clock,
  AlertTriangle,
  Settings2,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Reorder } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Opportunity, PipelineStage, Temperature } from "@/types";
import { useUIStore } from "@/stores/ui-store";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { calculateSlaDeadline } from "@/lib/business-rules";
import { PipelineManagerDrawer } from "@/components/pipeline/pipeline-manager-drawer";

// ═══════════════════════════════════════════════════════════════════
// Funnel Definitions
// ═══════════════════════════════════════════════════════════════════

interface FunnelDefinition {
  id: string;
  label: string;
  stages: { id: PipelineStage; label: string; slaHours: number }[];
}

const funnels: FunnelDefinition[] = [
  {
    id: "comercial",
    label: "Funil Comercial",
    stages: [
      { id: "lead-in", label: "Lead-In", slaHours: 48 },
      { id: "contato-feito", label: "Contato Feito", slaHours: 72 },
      { id: "reuniao-agendada", label: "Reunião Agendada", slaHours: 120 },
      { id: "proposta-enviada", label: "Proposta Enviada", slaHours: 96 },
      { id: "negociacao", label: "Negociação", slaHours: 168 },
      { id: "fechamento", label: "Fechamento", slaHours: 48 },
    ],
  },
  {
    id: "indicacao",
    label: "Funil Indicação",
    stages: [
      { id: "lead-in", label: "Lead-In", slaHours: 24 },
      { id: "contato-feito", label: "Contato Feito", slaHours: 48 },
      { id: "proposta-enviada", label: "Proposta Enviada", slaHours: 72 },
      { id: "fechamento", label: "Fechamento", slaHours: 48 },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════
// Stage Validation
// ═══════════════════════════════════════════════════════════════════

const stageOrder: PipelineStage[] = [
  "lead-in",
  "contato-feito",
  "reuniao-agendada",
  "proposta-enviada",
  "negociacao",
  "fechamento",
];

const stageRequiredFields: Record<
  PipelineStage,
  { field: keyof Opportunity; label: string }[]
> = {
  "lead-in": [],
  "contato-feito": [{ field: "clientName", label: "Nome do contato" }],
  "reuniao-agendada": [
    { field: "clientName", label: "Nome do contato" },
    { field: "expectedCloseDate", label: "Data prevista de fechamento" },
  ],
  "proposta-enviada": [
    { field: "clientName", label: "Nome do contato" },
    { field: "expectedCloseDate", label: "Data prevista de fechamento" },
    { field: "value", label: "Valor da proposta" },
  ],
  negociacao: [
    { field: "clientName", label: "Nome do contato" },
    { field: "expectedCloseDate", label: "Data prevista de fechamento" },
    { field: "value", label: "Valor da proposta" },
    { field: "monthlyValue", label: "Valor mensal" },
  ],
  fechamento: [
    { field: "clientName", label: "Nome do contato" },
    { field: "expectedCloseDate", label: "Data prevista de fechamento" },
    { field: "value", label: "Valor da proposta" },
    { field: "monthlyValue", label: "Valor mensal" },
  ],
};

// ═══════════════════════════════════════════════════════════════════
// Temperature Config
// ═══════════════════════════════════════════════════════════════════

const temperatureConfig: Record<
  Temperature,
  { icon: React.ReactNode; label: string; colorClass: string }
> = {
  hot: {
    icon: <Flame className="h-3.5 w-3.5" />,
    label: "Quente",
    colorClass: "text-status-danger",
  },
  warm: {
    icon: <Thermometer className="h-3.5 w-3.5" />,
    label: "Morno",
    colorClass: "text-status-warning",
  },
  cold: {
    icon: <Snowflake className="h-3.5 w-3.5" />,
    label: "Frio",
    colorClass: "text-status-info",
  },
};

// ═══════════════════════════════════════════════════════════════════
// Mock Data
// ═══════════════════════════════════════════════════════════════════

const currentUserId = "user-1";

const mockOpportunities: Opportunity[] = [
  {
    id: "1",
    title: "Restaurante Bela Vista",
    clientName: "Restaurante Bela Vista Ltda",
    value: 12000,
    monthlyValue: 1000,
    stage: "lead-in",
    temperature: "hot",
    responsibleId: "1",
    responsibleName: "Maria Silva",
    tags: ["food-service", "premium"],
    createdAt: "2026-01-15",
    updatedAt: "2026-02-05",
    status: "open",
    slaDeadline: "2026-02-07T18:00:00",
  },
  {
    id: "2",
    title: "Padaria Pao Quente",
    clientName: "Padaria Pao Quente ME",
    value: 4800,
    monthlyValue: 400,
    stage: "lead-in",
    temperature: "warm",
    responsibleId: "1",
    responsibleName: "Maria Silva",
    tags: ["panificacao"],
    createdAt: "2026-02-01",
    updatedAt: "2026-02-05",
    status: "open",
    slaDeadline: "2026-02-08T10:00:00",
  },
  {
    id: "3",
    title: "Lanchonete do Carlos",
    clientName: "Carlos Almeida ME",
    value: 3600,
    monthlyValue: 300,
    stage: "lead-in",
    temperature: "cold",
    responsibleId: "3",
    responsibleName: "Ana Oliveira",
    tags: ["fast-food"],
    createdAt: "2026-02-03",
    updatedAt: "2026-02-04",
    status: "open",
    slaDeadline: "2026-02-06T08:00:00",
  },
  {
    id: "4",
    title: "Bar do Ze",
    clientName: "Bar do Ze Ltda",
    value: 8400,
    monthlyValue: 700,
    stage: "contato-feito",
    temperature: "warm",
    responsibleId: "1",
    responsibleName: "Maria Silva",
    tags: ["bar", "noturno"],
    createdAt: "2026-02-01",
    updatedAt: "2026-02-06",
    status: "open",
    slaDeadline: "2026-02-09T14:00:00",
  },
  {
    id: "5",
    title: "Pizzaria Napoli",
    clientName: "Napoli Alimentos Ltda",
    value: 15000,
    monthlyValue: 1250,
    stage: "contato-feito",
    temperature: "hot",
    responsibleId: "2",
    responsibleName: "Joao Santos",
    tags: ["pizzaria", "delivery"],
    createdAt: "2026-01-28",
    updatedAt: "2026-02-05",
    status: "open",
    slaDeadline: "2026-02-04T12:00:00",
  },
  {
    id: "6",
    title: "Hotel Sunset",
    clientName: "Hotel Sunset S.A.",
    value: 36000,
    monthlyValue: 3000,
    stage: "reuniao-agendada",
    temperature: "warm",
    responsibleId: "1",
    responsibleName: "Maria Silva",
    tags: ["hotelaria"],
    createdAt: "2026-01-20",
    updatedAt: "2026-02-04",
    status: "open",
    expectedCloseDate: "2026-03-15",
    slaDeadline: "2026-02-10T09:00:00",
  },
  {
    id: "7",
    title: "Sorveteria Gelato",
    clientName: "Gelato Artesanal ME",
    value: 7200,
    monthlyValue: 600,
    stage: "reuniao-agendada",
    temperature: "cold",
    responsibleId: "1",
    responsibleName: "Maria Silva",
    tags: ["sorvetes"],
    createdAt: "2026-01-22",
    updatedAt: "2026-02-03",
    status: "open",
    expectedCloseDate: "2026-03-01",
    slaDeadline: "2026-02-06T15:00:00",
  },
  {
    id: "8",
    title: "Cafe Central",
    clientName: "Cafe Central ME",
    value: 6000,
    monthlyValue: 500,
    stage: "proposta-enviada",
    temperature: "cold",
    responsibleId: "2",
    responsibleName: "Joao Santos",
    tags: ["cafeteria"],
    createdAt: "2026-01-10",
    updatedAt: "2026-02-03",
    status: "open",
    expectedCloseDate: "2026-02-28",
    slaDeadline: "2026-02-07T11:00:00",
  },
  {
    id: "9",
    title: "Hamburgueria Smash",
    clientName: "Smash Burger Ltda",
    value: 9600,
    monthlyValue: 800,
    stage: "proposta-enviada",
    temperature: "hot",
    responsibleId: "1",
    responsibleName: "Maria Silva",
    tags: ["hamburgueria", "premium"],
    createdAt: "2026-01-18",
    updatedAt: "2026-02-05",
    status: "open",
    expectedCloseDate: "2026-02-20",
    slaDeadline: "2026-02-09T16:00:00",
  },
  {
    id: "10",
    title: "Pousada Mar Azul",
    clientName: "Pousada Mar Azul ME",
    value: 24000,
    monthlyValue: 2000,
    stage: "negociacao",
    temperature: "hot",
    responsibleId: "2",
    responsibleName: "Joao Santos",
    tags: ["hotelaria"],
    createdAt: "2026-01-05",
    updatedAt: "2026-02-06",
    status: "open",
    expectedCloseDate: "2026-02-15",
    slaDeadline: "2026-02-12T10:00:00",
  },
  {
    id: "11",
    title: "Doceria Sabor & Arte",
    clientName: "Sabor e Arte Doces Ltda",
    value: 10800,
    monthlyValue: 900,
    stage: "negociacao",
    temperature: "warm",
    responsibleId: "1",
    responsibleName: "Maria Silva",
    tags: ["confeitaria"],
    createdAt: "2026-01-12",
    updatedAt: "2026-02-05",
    status: "open",
    expectedCloseDate: "2026-02-25",
    slaDeadline: "2026-02-05T08:00:00",
  },
  {
    id: "12",
    title: "Churrascaria Fogo Bravo",
    clientName: "Fogo Bravo Ltda",
    value: 18000,
    monthlyValue: 1500,
    stage: "fechamento",
    temperature: "hot",
    responsibleId: "1",
    responsibleName: "Maria Silva",
    tags: ["food-service", "churrascaria"],
    createdAt: "2025-12-20",
    updatedAt: "2026-02-06",
    status: "open",
    expectedCloseDate: "2026-02-10",
    slaDeadline: "2026-02-08T17:00:00",
  },
  {
    id: "13",
    title: "Acai da Praia",
    clientName: "Acai da Praia Franquias S.A.",
    value: 42000,
    monthlyValue: 3500,
    stage: "fechamento",
    temperature: "hot",
    responsibleId: "1",
    responsibleName: "Maria Silva",
    tags: ["acai", "franquia"],
    createdAt: "2025-12-10",
    updatedAt: "2026-02-06",
    status: "open",
    expectedCloseDate: "2026-02-08",
    slaDeadline: "2026-02-07T12:00:00",
  },
  {
    id: "14",
    title: "Cantina Bella Nonna",
    clientName: "Bella Nonna Restaurante Ltda",
    value: 14400,
    monthlyValue: 1200,
    stage: "lead-in",
    temperature: "warm",
    responsibleId: "2",
    responsibleName: "Joao Santos",
    tags: ["italiano", "restaurante"],
    createdAt: "2026-02-04",
    updatedAt: "2026-02-06",
    status: "open",
    slaDeadline: "2026-02-09T09:00:00",
  },
];

// ═══════════════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════════════

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(value);
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

type SlaStatus = "ok" | "near" | "breached";

function getSlaStatus(
  slaDeadline?: string
): { status: SlaStatus; label: string } {
  if (!slaDeadline) return { status: "ok", label: "" };
  const now = new Date();
  const deadline = new Date(slaDeadline);
  const diffMs = deadline.getTime() - now.getTime();

  if (diffMs <= 0) {
    return { status: "breached", label: "Estourado" };
  }

  const totalHours = diffMs / (1000 * 60 * 60);
  const days = Math.floor(totalHours / 24);
  const hours = Math.floor(totalHours % 24);
  const label = days > 0 ? `${days}d ${hours}h` : `${hours}h`;

  if (totalHours <= 12) {
    return { status: "near", label };
  }

  return { status: "ok", label };
}

function getSlaColors(status: SlaStatus) {
  switch (status) {
    case "ok":
      return {
        dot: "bg-status-success",
        border: "border-l-brand",
        text: "text-zinc-400",
      };
    case "near":
      return {
        dot: "bg-status-warning",
        border: "border-l-status-warning",
        text: "text-status-warning",
      };
    case "breached":
      return {
        dot: "bg-status-danger",
        border: "border-l-status-danger",
        text: "text-status-danger",
      };
  }
}

function validateStageTransition(
  opportunity: Opportunity,
  targetStage: PipelineStage
): string[] {
  const currentIdx = stageOrder.indexOf(opportunity.stage);
  const targetIdx = stageOrder.indexOf(targetStage);
  if (targetIdx <= currentIdx) return [];

  const requiredFields = stageRequiredFields[targetStage] || [];
  const missing: string[] = [];

  for (const req of requiredFields) {
    const val = opportunity[req.field];
    if (val === undefined || val === null || val === "") {
      missing.push(req.label);
    } else if (typeof val === "number" && val <= 0) {
      missing.push(req.label);
    }
  }

  return missing;
}

// ═══════════════════════════════════════════════════════════════════
// Main Page Component
// ═══════════════════════════════════════════════════════════════════

export default function PipesPage() {
  const { openDrawer } = useUIStore();
  const { opportunities: storeOpportunities, moveToStage } =
    useOpportunityStore();
  const [selectedFunnel, setSelectedFunnel] = useState("comercial");
  const [localOpportunities, setLocalOpportunities] =
    useState<Opportunity[]>(mockOpportunities);
  const opportunities =
    storeOpportunities.length > 0
      ? storeOpportunities.filter((o) => o.status === "open")
      : localOpportunities;
  const [draggingCardId, setDraggingCardId] = useState<string | null>(null);
  const [dragOverStage, setDragOverStage] = useState<PipelineStage | null>(
    null
  );
  const [isManageDrawerOpen, setIsManageDrawerOpen] = useState(false);
  const [columnError, setColumnError] = useState<{
    stage: PipelineStage;
    message: string;
  } | null>(null);
  const dragCardRef = useRef<Opportunity | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const activeFunnel =
    funnels.find((f) => f.id === selectedFunnel) ?? funnels[0];
  const activeStageIds = activeFunnel.stages.map((s) => s.id);

  const opportunitiesByStage = useMemo(() => {
    const grouped: Record<PipelineStage, Opportunity[]> = {
      "lead-in": [],
      "contato-feito": [],
      "reuniao-agendada": [],
      "proposta-enviada": [],
      negociacao: [],
      fechamento: [],
    };
    for (const opp of opportunities) {
      if (activeStageIds.includes(opp.stage)) {
        grouped[opp.stage].push(opp);
      }
    }
    return grouped;
  }, [opportunities, activeStageIds]);

  const boardTotal = useMemo(
    () =>
      opportunities
        .filter((o) => activeStageIds.includes(o.stage))
        .reduce((acc, o) => acc + o.value, 0),
    [opportunities, activeStageIds]
  );
  const boardCount = useMemo(
    () =>
      opportunities.filter((o) => activeStageIds.includes(o.stage)).length,
    [opportunities, activeStageIds]
  );

  // ── Drag handlers ──────────────────────────────────────────────

  const handleDragStart = useCallback(
    (e: React.DragEvent, opportunity: Opportunity) => {
      if (opportunity.responsibleId !== currentUserId) {
        e.preventDefault();
        return;
      }
      setDraggingCardId(opportunity.id);
      dragCardRef.current = opportunity;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", opportunity.id);
    },
    []
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent, stage: PipelineStage) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      setDragOverStage(stage);
    },
    []
  );

  const handleDragLeave = useCallback(() => {
    setDragOverStage(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, targetStage: PipelineStage) => {
      e.preventDefault();
      setDragOverStage(null);
      setColumnError(null);

      const card = dragCardRef.current;
      if (!card) return;

      if (card.stage === targetStage) {
        setDraggingCardId(null);
        dragCardRef.current = null;
        return;
      }

      const missingFields = validateStageTransition(card, targetStage);
      if (missingFields.length > 0) {
        setColumnError({
          stage: targetStage,
          message: `Preencha: ${missingFields.join(", ")}`,
        });
        setDraggingCardId(null);
        dragCardRef.current = null;
        setTimeout(() => setColumnError(null), 5000);
        return;
      }

      const targetStageDef = activeFunnel.stages.find(
        (s) => s.id === targetStage
      );
      const newSlaDeadline = targetStageDef
        ? calculateSlaDeadline(targetStageDef.slaHours)
        : undefined;

      const slaHours = targetStageDef?.slaHours;
      if (storeOpportunities.length > 0) {
        moveToStage(card.id, targetStage, slaHours);
      } else {
        setLocalOpportunities((prev) =>
          prev.map((o) =>
            o.id === card.id
              ? {
                  ...o,
                  stage: targetStage,
                  updatedAt: new Date().toISOString(),
                  slaDeadline: newSlaDeadline,
                }
              : o
          )
        );
      }

      setDraggingCardId(null);
      dragCardRef.current = null;
    },
    [activeFunnel, moveToStage, storeOpportunities.length]
  );

  const handleDragEnd = useCallback(() => {
    setDraggingCardId(null);
    setDragOverStage(null);
    dragCardRef.current = null;
  }, []);

  const handleReorder = useCallback(
    (stage: PipelineStage, newOrder: Opportunity[]) => {
      setLocalOpportunities((prev) => {
        const otherCards = prev.filter((o) => o.stage !== stage);
        return [...otherCards, ...newOrder];
      });
    },
    []
  );

  // ── Board scroll ───────────────────────────────────────────────

  const scrollBoard = useCallback((direction: "left" | "right") => {
    if (!boardRef.current) return;
    const amount = 350;
    boardRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  // ═════════════════════════════════════════════════════════════════
  // Render
  // ═════════════════════════════════════════════════════════════════

  return (
    <TooltipProvider>
      <div className="flex h-[calc(100vh-64px)] flex-col overflow-hidden">
        {/* ── Header & Toolbar ─────────────────────────────────── */}
        <div className="shrink-0 space-y-3 pb-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="font-heading text-2xl font-bold text-black">
                Pipeline de Vendas
              </h1>
              <p className="mt-0.5 font-body text-sm text-zinc-500">
                {boardCount} oportunidades · {formatCurrency(boardTotal)}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Select
                value={selectedFunnel}
                onValueChange={setSelectedFunnel}
              >
                <SelectTrigger className="h-9 w-[180px] rounded-full border-zinc-200 font-heading text-sm">
                  <SelectValue placeholder="Selecionar funil" />
                </SelectTrigger>
                <SelectContent className="rounded-[var(--radius-bento-card)]">
                  {funnels.map((funnel) => (
                    <SelectItem key={funnel.id} value={funnel.id}>
                      {funnel.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="sm"
                onClick={() => openDrawer("filters")}
                className="h-9 rounded-full font-heading text-sm"
              >
                <Filter className="mr-1.5 h-3.5 w-3.5" />
                Filtros
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 rounded-full font-heading text-sm"
                  >
                    <MoreHorizontal className="mr-1.5 h-3.5 w-3.5" />
                    Mais
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="rounded-[var(--radius-bento-card)]"
                >
                  <DropdownMenuItem
                    onClick={() => setIsManageDrawerOpen(true)}
                  >
                    <Settings2 className="mr-2 h-4 w-4" />
                    Gerenciar Funis
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                size="sm"
                onClick={() => openDrawer("new-opportunity")}
                className="h-9 rounded-full bg-black font-heading text-sm text-white hover:bg-zinc-800"
              >
                <Plus className="mr-1.5 h-3.5 w-3.5" />
                Novo Card
              </Button>
            </div>
          </div>
        </div>

        {/* ── Board ────────────────────────────────────────────── */}
        <div className="relative flex min-h-0 flex-1 items-stretch">
          {/* Scroll arrows */}
          <button
            onClick={() => scrollBoard("left")}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-zinc-200 bg-white p-1.5 shadow-sm transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Rolar colunas para a esquerda"
          >
            <ChevronLeft className="h-4 w-4 text-zinc-500" />
          </button>
          <button
            onClick={() => scrollBoard("right")}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-zinc-200 bg-white p-1.5 shadow-sm transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Rolar colunas para a direita"
          >
            <ChevronRight className="h-4 w-4 text-zinc-500" />
          </button>

          {/* Board scroll container */}
          <div
            ref={boardRef}
            className="flex flex-1 gap-3 overflow-x-auto scroll-smooth px-7 pb-2"
            style={{ scrollSnapType: "x proximity" }}
          >
            {activeFunnel.stages.map((stageDef) => {
              const cards = opportunitiesByStage[stageDef.id] || [];
              const totalValue = cards.reduce((acc, o) => acc + o.value, 0);
              const isDropTarget = dragOverStage === stageDef.id;
              const error =
                columnError?.stage === stageDef.id
                  ? columnError.message
                  : null;

              const worstSla = cards.reduce<SlaStatus>((worst, card) => {
                const { status } = getSlaStatus(card.slaDeadline);
                if (status === "breached") return "breached";
                if (status === "near" && worst !== "breached") return "near";
                return worst;
              }, "ok");

              return (
                <div
                  key={stageDef.id}
                  className={`flex w-[85vw] shrink-0 flex-col rounded-[var(--radius-bento-card)] border transition-all duration-150 sm:w-[320px] xl:w-[340px] ${
                    isDropTarget
                      ? "border-brand bg-brand/5 ring-2 ring-brand/30"
                      : "border-transparent bg-zinc-50/80"
                  }`}
                  style={{ scrollSnapAlign: "start" }}
                  onDragOver={(e) => handleDragOver(e, stageDef.id)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, stageDef.id)}
                >
                  {/* ── Column Header (sticky) ───────────────── */}
                  <div className="sticky top-0 z-10 rounded-t-[var(--radius-bento-card)] bg-inherit px-3 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex min-w-0 items-center gap-2">
                        <span
                          className={`inline-block h-2 w-2 shrink-0 rounded-full ${getSlaColors(worstSla).dot}`}
                        />
                        <span className="truncate font-heading text-[13px] font-semibold text-black">
                          {stageDef.label}
                        </span>
                        <span className="shrink-0 rounded-md bg-zinc-200/70 px-1.5 py-0.5 font-body text-[11px] font-medium text-zinc-600">
                          {cards.length}
                        </span>
                      </div>
                      <div className="flex shrink-0 items-center gap-1.5">
                        <span className="font-body text-[11px] font-medium text-zinc-400">
                          {formatCurrency(totalValue)}
                        </span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() =>
                                openDrawer("new-opportunity", {
                                  initialStage: stageDef.id,
                                })
                              }
                              className="flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-200/60 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                              aria-label={`Adicionar oportunidade em ${stageDef.label}`}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            Adicionar oportunidade
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    {/* Inline error feedback */}
                    {error && (
                      <div className="mt-2 flex items-start gap-1.5 rounded-[var(--radius-bento-inner)] bg-[var(--feedback-error-bg)] px-2.5 py-2 text-[var(--feedback-error-text)]">
                        <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0" />
                        <span className="font-body text-[11px] leading-tight">
                          {error}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* ── Column Cards ──────────────────────────── */}
                  <div className="flex-1 overflow-y-auto px-3 pb-3">
                    {cards.length > 0 ? (
                      <Reorder.Group
                        axis="y"
                        values={cards}
                        onReorder={(newOrder) =>
                          handleReorder(stageDef.id, newOrder)
                        }
                        className="space-y-2"
                      >
                        {cards.map((opportunity) => {
                          const isGhost =
                            opportunity.responsibleId !== currentUserId;

                          if (isGhost) {
                            return (
                              <Reorder.Item
                                key={opportunity.id}
                                value={opportunity}
                                dragListener={false}
                              >
                                <GhostDealCard opportunity={opportunity} />
                              </Reorder.Item>
                            );
                          }

                          return (
                            <Reorder.Item
                              key={opportunity.id}
                              value={opportunity}
                              className={
                                draggingCardId === opportunity.id
                                  ? "scale-[0.97] opacity-40"
                                  : ""
                              }
                            >
                              <DealCardBento
                                opportunity={opportunity}
                                onOpen={() =>
                                  openDrawer("lead-card", {
                                    id: opportunity.id,
                                  })
                                }
                                onDragStart={(e) =>
                                  handleDragStart(e, opportunity)
                                }
                                onDragEnd={handleDragEnd}
                              />
                            </Reorder.Item>
                          );
                        })}
                      </Reorder.Group>
                    ) : (
                      <div
                        className={`flex h-24 items-center justify-center rounded-[var(--radius-bento-inner)] border-2 border-dashed transition-colors ${
                          isDropTarget
                            ? "border-brand bg-brand/5"
                            : "border-zinc-200"
                        }`}
                      >
                        <p className="font-body text-xs text-zinc-400">
                          Arraste cards aqui
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pipeline Manager Drawer */}
        <PipelineManagerDrawer
          open={isManageDrawerOpen}
          onOpenChange={setIsManageDrawerOpen}
        />
      </div>
    </TooltipProvider>
  );
}

// ═══════════════════════════════════════════════════════════════════
// DealCardBento — Card Spec padronizado
// ═══════════════════════════════════════════════════════════════════
//
// Slots fixos:
//   1. Header row:  drag handle + temperature + title (ellipsis) + menu "…"
//   2. Sub row:     client name (ellipsis) + owner avatar chip
//   3. Meta row:    value (currency) + SLA countdown
//   4. Tags row:    max 2 tags + "+N" chip (conditional)
//
// Estados: default, hover, focus-visible, dragging (ghost via parent)

function DealCardBento({
  opportunity,
  onOpen,
  onDragStart,
  onDragEnd,
}: {
  opportunity: Opportunity;
  onOpen: () => void;
  onDragStart: (e: React.DragEvent) => void;
  onDragEnd: () => void;
}) {
  const { openModal, openDrawer } = useUIStore();
  const sla = getSlaStatus(opportunity.slaDeadline);
  const slaColors = getSlaColors(sla.status);
  const temp = temperatureConfig[opportunity.temperature];

  return (
    <div
      className={`group relative cursor-pointer rounded-[var(--radius-bento-card)] border border-zinc-200 border-l-[3px] ${slaColors.border} bg-white p-3 shadow-[var(--shadow-bento-sm)] transition-all duration-[var(--transition-bento-fast)] hover:shadow-[var(--shadow-bento-sm-hover)] focus-within:ring-2 focus-within:ring-brand/40 active:scale-[var(--scale-bento-active)]`}
      onClick={onOpen}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      tabIndex={0}
      role="button"
      aria-label={`Oportunidade: ${opportunity.title}, ${formatCurrency(opportunity.value)}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      {/* ── 1. Header row ──────────────────────────────────── */}
      <div className="flex items-center gap-1.5">
        <GripVertical className="h-3.5 w-3.5 shrink-0 cursor-grab text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100 active:cursor-grabbing" />

        <Tooltip>
          <TooltipTrigger asChild>
            <span className={`shrink-0 ${temp.colorClass}`}>
              {temp.icon}
            </span>
          </TooltipTrigger>
          <TooltipContent>{temp.label}</TooltipContent>
        </Tooltip>

        <span className="min-w-0 flex-1 truncate font-heading text-[13px] font-semibold text-black">
          {opportunity.title}
        </span>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-zinc-400 opacity-0 transition-opacity hover:bg-zinc-100 hover:text-zinc-600 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              onClick={(e) => e.stopPropagation()}
              aria-label="Ações da oportunidade"
            >
              <MoreHorizontal className="h-3.5 w-3.5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="rounded-[var(--radius-bento-card)]"
          >
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onOpen();
              }}
            >
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                openDrawer("new-activity", {
                  opportunityId: opportunity.id,
                });
              }}
            >
              Nova atividade
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-status-success"
              onClick={(e) => {
                e.stopPropagation();
                openModal("win-opportunity", {
                  opportunityId: opportunity.id,
                });
              }}
            >
              Marcar como Ganho
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-status-danger"
              onClick={(e) => {
                e.stopPropagation();
                openModal("lose-opportunity", {
                  opportunityId: opportunity.id,
                });
              }}
            >
              Marcar como Perdido
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* ── 2. Sub row: client + owner ─────────────────────── */}
      <div className="mt-1.5 flex items-center gap-2">
        <span className="min-w-0 flex-1 truncate font-body text-[12px] text-zinc-500">
          {opportunity.clientName}
        </span>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-800 font-heading text-[9px] font-semibold text-white">
              {getInitials(opportunity.responsibleName)}
            </span>
          </TooltipTrigger>
          <TooltipContent>{opportunity.responsibleName}</TooltipContent>
        </Tooltip>
      </div>

      {/* ── 3. Meta row: value + SLA ───────────────────────── */}
      <div className="mt-2 flex items-center justify-between">
        <span className="font-heading text-[13px] font-bold text-black">
          {opportunity.value > 0
            ? formatCurrency(opportunity.value)
            : "Sem valor"}
        </span>

        {sla.label && (
          <Tooltip>
            <TooltipTrigger asChild>
              <span
                className={`flex items-center gap-1 font-body text-[11px] font-medium ${slaColors.text}`}
              >
                {sla.status === "breached" ? (
                  <AlertTriangle className="h-3 w-3" />
                ) : (
                  <Clock className="h-3 w-3" />
                )}
                {sla.label}
              </span>
            </TooltipTrigger>
            <TooltipContent>Tempo na etapa</TooltipContent>
          </Tooltip>
        )}
      </div>

      {/* ── 4. Tags row (conditional) ──────────────────────── */}
      {opportunity.tags.length > 0 && (
        <div className="mt-2 flex items-center gap-1 overflow-hidden">
          {opportunity.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="max-w-[100px] shrink-0 truncate rounded-[var(--radius-bento-inner)] px-1.5 py-0 font-body text-[10px] leading-5"
            >
              {tag}
            </Badge>
          ))}
          {opportunity.tags.length > 2 && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge
                  variant="secondary"
                  className="shrink-0 rounded-[var(--radius-bento-inner)] px-1.5 py-0 font-body text-[10px] leading-5"
                >
                  +{opportunity.tags.length - 2}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                {opportunity.tags.slice(2).join(", ")}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// GhostDealCard — Cards de outros vendedores
// ═══════════════════════════════════════════════════════════════════

function GhostDealCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex cursor-default select-none items-center gap-2.5 rounded-[var(--radius-bento-card)] border border-zinc-100 bg-zinc-50 p-2.5 opacity-60">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-200">
            <Lock className="h-3 w-3 text-zinc-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-heading text-[12px] font-medium text-zinc-500">
              {opportunity.clientName}
            </p>
            <p className="truncate font-body text-[11px] text-zinc-400">
              {opportunity.responsibleName}
            </p>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>Card de outro vendedor</TooltipContent>
    </Tooltip>
  );
}
