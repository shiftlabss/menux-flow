"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  Activity,
  BarChart3,
  Bot,
  Check,
  ChevronLeft,
  Clock3,
  Copy,
  DollarSign,
  FileDown,
  FileText,
  FileSpreadsheet,
  Filter,
  Heart,
  History,
  Search,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { exportToCSV, exportToExcel, exportToPDF } from "@/lib/export";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";
import { InlineFeedback } from "@/components/ui/inline-feedback";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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

type ReportCategory = "Vendas" | "Operacional" | "Financeiro" | "CS";
type CategoryFilter = "Todos" | ReportCategory;
type StatusFilter = "all" | "favorites" | "recent";
type MobileStep = "configure" | "visualize";
type FeedbackType = "success" | "error" | "info";

interface ReportDefinition {
  id: string;
  title: string;
  description: string;
  category: ReportCategory;
  tags: string[];
  icon: ReactNode;
}

interface BuilderFilters {
  period: string;
  pipeline: string;
  owner: string;
  status: string;
  segment: string;
}

interface HistoryEntry {
  reportId: string;
  generatedAt: string;
}

interface ReportKpi {
  id: string;
  label: string;
  value: string;
  subtext: string;
  tone: "neutral" | "info" | "warning" | "success";
}

interface ReportChartPoint {
  label: string;
  value: number;
}

interface ReportTableData {
  columns: string[];
  rows: Array<{ label: string; values: string[] }>;
}

interface ReportRecommendation {
  id: string;
  label: string;
  patch: Partial<BuilderFilters>;
  result: string;
}

interface ReportTemplate {
  chartTitle: string;
  chart: ReportChartPoint[];
  kpis: ReportKpi[];
  table: ReportTableData;
  sentence: string;
  findings: string[];
  anomalies: string[];
  questions: string[];
  recommendations: ReportRecommendation[];
}

interface FeedbackState {
  type: FeedbackType;
  message: string;
}

const HISTORY_TIMESTAMPS = [
  "16/02/2026 08:40",
  "16/02/2026 09:15",
  "16/02/2026 10:05",
  "16/02/2026 11:20",
  "16/02/2026 13:10",
  "16/02/2026 14:45",
];

const REPORTS: ReportDefinition[] = [
  {
    id: "pipeline-performance",
    title: "Pipeline Performance",
    description: "Conversão por etapa, velocidade do funil e gargalos de avanço.",
    category: "Vendas",
    tags: ["conversão", "velocidade", "gargalos"],
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    id: "conversion-by-seller",
    title: "Conversão por vendedor",
    description: "Comparativo de conversão, receita e ritmo de fechamento por pessoa.",
    category: "Vendas",
    tags: ["ranking", "receita", "fechamento"],
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: "activities-by-type",
    title: "Atividades por tipo",
    description: "Distribuição das atividades e impacto no SLA operacional.",
    category: "Operacional",
    tags: ["cadência", "SLA", "execução"],
    icon: <Activity className="h-5 w-5" />,
  },
  {
    id: "monthly-revenue",
    title: "Receita mensal",
    description: "Meta versus realizado e variações da curva de receita.",
    category: "Financeiro",
    tags: ["meta", "realizado", "variação"],
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    id: "health-score-overview",
    title: "Health score overview",
    description: "Saúde da carteira por faixa e tendência de risco.",
    category: "CS",
    tags: ["saúde", "churn", "risco"],
    icon: <Heart className="h-5 w-5" />,
  },
  {
    id: "sla-compliance",
    title: "SLA compliance",
    description: "Cumprimento de SLA por etapa, responsável e exceções.",
    category: "Operacional",
    tags: ["SLA", "estouro", "responsável"],
    icon: <Clock3 className="h-5 w-5" />,
  },
];

const REPORT_TEMPLATES: Record<string, ReportTemplate> = {
  "pipeline-performance": {
    chartTitle: "Funil e velocidade por etapa",
    chart: [
      { label: "Lead-In", value: 72 },
      { label: "Contato", value: 58 },
      { label: "Reunião", value: 64 },
      { label: "Proposta", value: 45 },
      { label: "Negociação", value: 38 },
      { label: "Fechamento", value: 21 },
    ],
    kpis: [
      { id: "kpi-1", label: "Conversão média", value: "31%", subtext: "pipeline total", tone: "info" },
      { id: "kpi-2", label: "Tempo médio", value: "17 dias", subtext: "lead até fechamento", tone: "warning" },
      { id: "kpi-3", label: "Em risco", value: "12", subtext: "oportunidades estagnadas", tone: "warning" },
    ],
    table: {
      columns: ["Etapa", "Qtd", "Valor", "Conversão"],
      rows: [
        { label: "Lead-In", values: ["72", "R$ 880.000", "100%"] },
        { label: "Contato Feito", values: ["58", "R$ 740.000", "80%"] },
        { label: "Reunião Agendada", values: ["64", "R$ 690.000", "74%"] },
        { label: "Proposta Enviada", values: ["45", "R$ 430.000", "52%"] },
        { label: "Negociação", values: ["38", "R$ 320.000", "44%"] },
        { label: "Fechamento", values: ["21", "R$ 205.000", "31%"] },
      ],
    },
    sentence: "O relatório indica queda de avanço entre proposta e negociação.",
    findings: [
      "Maior gargalo está na transição de proposta para negociação.",
      "Leads quentes estão acumulando 6+ dias sem próxima ação.",
      "3 responsáveis concentram 68% do volume em risco.",
    ],
    anomalies: [
      "Volume alto em reunião sem reflexo proporcional em proposta.",
      "Taxa de avanço caiu 9 pontos na última semana.",
    ],
    questions: [
      "Quais propostas estão sem follow-up há mais de 4 dias?",
      "Quais segmentos convertem melhor em menos de 7 dias?",
      "Onde vale redistribuir carteira para aumentar fechamento?",
    ],
    recommendations: [
      {
        id: "pipeline-proposal",
        label: "Ver apenas etapa Proposta",
        patch: { status: "Proposta" },
        result: "Filtro aplicado: etapa Proposta.",
      },
      {
        id: "pipeline-owner",
        label: "Filtrar por responsável Ana Souza",
        patch: { owner: "Ana Souza" },
        result: "Filtro aplicado: responsável Ana Souza.",
      },
      {
        id: "pipeline-risk",
        label: "Mostrar oportunidades em risco",
        patch: { status: "Em risco" },
        result: "Filtro aplicado: oportunidades em risco.",
      },
    ],
  },
  "conversion-by-seller": {
    chartTitle: "Conversão e receita por vendedor",
    chart: [
      { label: "Ana", value: 38 },
      { label: "Carlos", value: 31 },
      { label: "Fernanda", value: 29 },
      { label: "Pedro", value: 27 },
      { label: "Julia", value: 24 },
    ],
    kpis: [
      { id: "kpi-1", label: "Conversão líder", value: "38%", subtext: "Ana Souza", tone: "success" },
      { id: "kpi-2", label: "Média do time", value: "29%", subtext: "últimos 30 dias", tone: "info" },
      { id: "kpi-3", label: "Gap de receita", value: "R$ 84k", subtext: "top 1 vs top 5", tone: "warning" },
    ],
    table: {
      columns: ["Vendedor", "Conversão", "Receita", "Velocidade"],
      rows: [
        { label: "Ana Souza", values: ["38%", "R$ 420.000", "12 dias"] },
        { label: "Carlos Lima", values: ["31%", "R$ 360.000", "15 dias"] },
        { label: "Fernanda Reis", values: ["29%", "R$ 315.000", "16 dias"] },
        { label: "Pedro Alves", values: ["27%", "R$ 288.000", "17 dias"] },
        { label: "Julia Mendes", values: ["24%", "R$ 236.000", "19 dias"] },
      ],
    },
    sentence: "A variação de conversão entre os vendedores está ampliando o gap de receita.",
    findings: [
      "Top 2 vendedores concentram 56% da receita fechada.",
      "Closers com velocidade acima de 16 dias perdem taxa de conversão.",
      "Equipe com melhor sequência de follow-up converte 11 pontos a mais.",
    ],
    anomalies: [
      "Carlos manteve volume alto, mas caiu 5 pontos de conversão.",
      "Julia subiu receita sem aumento proporcional de oportunidades.",
    ],
    questions: [
      "Quais negociações travam acima de 14 dias?",
      "Quem precisa de coaching em proposta e fechamento?",
      "Como replicar rotina do top performer no restante do time?",
    ],
    recommendations: [
      {
        id: "conversion-owner",
        label: "Filtrar por responsável Carlos Lima",
        patch: { owner: "Carlos Lima" },
        result: "Filtro aplicado: responsável Carlos Lima.",
      },
      {
        id: "conversion-segment",
        label: "Ver segmento Enterprise",
        patch: { segment: "Enterprise" },
        result: "Filtro aplicado: segmento Enterprise.",
      },
      {
        id: "conversion-status",
        label: "Mostrar apenas negociação",
        patch: { status: "Negociação" },
        result: "Filtro aplicado: status Negociação.",
      },
    ],
  },
  "activities-by-type": {
    chartTitle: "Distribuição por tipo de atividade",
    chart: [
      { label: "Ligação", value: 142 },
      { label: "Reunião", value: 86 },
      { label: "E-mail", value: 118 },
      { label: "Follow-up", value: 96 },
      { label: "WhatsApp", value: 74 },
    ],
    kpis: [
      { id: "kpi-1", label: "Atividades totais", value: "516", subtext: "últimos 30 dias", tone: "info" },
      { id: "kpi-2", label: "SLA no prazo", value: "87%", subtext: "execução operacional", tone: "success" },
      { id: "kpi-3", label: "SLAs estourados", value: "14", subtext: "requer ação imediata", tone: "warning" },
    ],
    table: {
      columns: ["Tipo", "Executadas", "Pendentes", "SLA estourado"],
      rows: [
        { label: "Ligação", values: ["142", "18", "4"] },
        { label: "Reunião", values: ["86", "9", "2"] },
        { label: "E-mail", values: ["118", "14", "3"] },
        { label: "Follow-up", values: ["96", "11", "4"] },
        { label: "WhatsApp", values: ["74", "7", "1"] },
      ],
    },
    sentence: "A operação mantém volume alto, mas o SLA estourado se concentra em follow-ups.",
    findings: [
      "Follow-up concentra 29% dos atrasos operacionais.",
      "Ligação tem maior volume e menor taxa de cancelamento.",
      "Equipe de manhã executa 18% mais atividades no prazo.",
    ],
    anomalies: [
      "Pico de pendências às sextas após 16h.",
      "Reuniões canceladas subiram 22% na semana.",
    ],
    questions: [
      "Quais responsáveis acumulam mais follow-ups estourados?",
      "Como redistribuir agenda para reduzir gargalo do fim do dia?",
      "Quais tipos puxam mais conversão real no funil?",
    ],
    recommendations: [
      {
        id: "activities-sla",
        label: "Mostrar apenas SLAs estourados",
        patch: { status: "SLA estourado" },
        result: "Filtro aplicado: apenas SLAs estourados.",
      },
      {
        id: "activities-owner",
        label: "Filtrar responsável Fernanda Reis",
        patch: { owner: "Fernanda Reis" },
        result: "Filtro aplicado: responsável Fernanda Reis.",
      },
      {
        id: "activities-segment",
        label: "Filtrar segmento SMB",
        patch: { segment: "SMB" },
        result: "Filtro aplicado: segmento SMB.",
      },
    ],
  },
  "monthly-revenue": {
    chartTitle: "Receita mensal x meta",
    chart: [
      { label: "Set", value: 185 },
      { label: "Out", value: 210 },
      { label: "Nov", value: 198 },
      { label: "Dez", value: 265 },
      { label: "Jan", value: 240 },
      { label: "Fev", value: 215 },
    ],
    kpis: [
      { id: "kpi-1", label: "Receita atual", value: "R$ 215k", subtext: "mês corrente", tone: "info" },
      { id: "kpi-2", label: "Atingimento", value: "72%", subtext: "meta mensal", tone: "warning" },
      { id: "kpi-3", label: "Variação mês", value: "-10%", subtext: "vs mês anterior", tone: "warning" },
    ],
    table: {
      columns: ["Mês", "Receita", "Meta", "Atingimento"],
      rows: [
        { label: "Setembro", values: ["R$ 185.000", "R$ 200.000", "93%"] },
        { label: "Outubro", values: ["R$ 210.000", "R$ 220.000", "95%"] },
        { label: "Novembro", values: ["R$ 198.000", "R$ 250.000", "79%"] },
        { label: "Dezembro", values: ["R$ 265.000", "R$ 280.000", "95%"] },
        { label: "Janeiro", values: ["R$ 240.000", "R$ 300.000", "80%"] },
        { label: "Fevereiro", values: ["R$ 215.000", "R$ 300.000", "72%"] },
      ],
    },
    sentence: "A receita segue abaixo da meta no mês atual, com desaceleração na última quinzena.",
    findings: [
      "Atingimento atual está 8 pontos abaixo do ritmo necessário.",
      "Receita enterprise caiu enquanto SMB manteve volume estável.",
      "Conversão de propostas acima de R$ 20k reduziu no período.",
    ],
    anomalies: [
      "Queda abrupta de fechamento após dia 10.",
      "Ticket médio caiu 14% em contas novas.",
    ],
    questions: [
      "Quais negociações podem fechar até sexta-feira?",
      "Onde ajustar desconto para manter margem e fechar mais rápido?",
      "Como proteger receita recorrente do próximo mês?",
    ],
    recommendations: [
      {
        id: "revenue-segment",
        label: "Filtrar segmento Enterprise",
        patch: { segment: "Enterprise" },
        result: "Filtro aplicado: segmento Enterprise.",
      },
      {
        id: "revenue-status",
        label: "Ver apenas propostas abertas",
        patch: { status: "Proposta" },
        result: "Filtro aplicado: propostas abertas.",
      },
      {
        id: "revenue-owner",
        label: "Filtrar responsável Pedro Alves",
        patch: { owner: "Pedro Alves" },
        result: "Filtro aplicado: responsável Pedro Alves.",
      },
    ],
  },
  "health-score-overview": {
    chartTitle: "Distribuição de health score",
    chart: [
      { label: "Saudável", value: 42 },
      { label: "Atenção", value: 15 },
      { label: "Crítico", value: 7 },
      { label: "Churn", value: 1 },
    ],
    kpis: [
      { id: "kpi-1", label: "Saudáveis", value: "42", subtext: "65% da carteira", tone: "success" },
      { id: "kpi-2", label: "Em atenção", value: "15", subtext: "23% da carteira", tone: "warning" },
      { id: "kpi-3", label: "Críticos", value: "7", subtext: "prioridade de retenção", tone: "warning" },
    ],
    table: {
      columns: ["Categoria", "Clientes", "% da carteira", "Tendência"],
      rows: [
        { label: "Saudável", values: ["42", "65%", "+5%"] },
        { label: "Atenção", values: ["15", "23%", "-2%"] },
        { label: "Crítico", values: ["7", "11%", "-1%"] },
        { label: "Churn", values: ["1", "1%", "0%"] },
      ],
    },
    sentence: "A carteira está saudável, porém os clientes críticos exigem plano de retenção imediato.",
    findings: [
      "Clientes em atenção reduziram em comparação à semana anterior.",
      "Grupo crítico concentra contas com 20+ dias sem interação.",
      "Equipe CS com menor carga tem melhor recuperação de health score.",
    ],
    anomalies: [
      "Dois clientes premium migraram de saudável para atenção em 3 dias.",
      "Conta crítica sem atividade registrada na semana.",
    ],
    questions: [
      "Quais clientes críticos estão sem contato recente?",
      "Quais ações reduziram churn no último trimestre?",
      "Que responsáveis precisam de plano de retenção imediato?",
    ],
    recommendations: [
      {
        id: "health-critical",
        label: "Mostrar apenas clientes críticos",
        patch: { status: "Crítico" },
        result: "Filtro aplicado: clientes críticos.",
      },
      {
        id: "health-owner",
        label: "Filtrar responsável Julia Mendes",
        patch: { owner: "Julia Mendes" },
        result: "Filtro aplicado: responsável Julia Mendes.",
      },
      {
        id: "health-segment",
        label: "Filtrar segmento Mid-Market",
        patch: { segment: "Mid-Market" },
        result: "Filtro aplicado: segmento Mid-Market.",
      },
    ],
  },
  "sla-compliance": {
    chartTitle: "Compliance de SLA por etapa",
    chart: [
      { label: "Lead-In", value: 83 },
      { label: "Contato", value: 88 },
      { label: "Reunião", value: 80 },
      { label: "Proposta", value: 71 },
      { label: "Negociação", value: 67 },
      { label: "Fechamento", value: 100 },
    ],
    kpis: [
      { id: "kpi-1", label: "SLA no prazo", value: "81%", subtext: "média do funil", tone: "success" },
      { id: "kpi-2", label: "Próximo do limite", value: "11%", subtext: "itens em risco", tone: "warning" },
      { id: "kpi-3", label: "Estourados", value: "8%", subtext: "prioridade operacional", tone: "warning" },
    ],
    table: {
      columns: ["Etapa", "No prazo", "Em risco", "Estourado"],
      rows: [
        { label: "Lead-In", values: ["83%", "9%", "8%"] },
        { label: "Contato Feito", values: ["88%", "7%", "5%"] },
        { label: "Reunião Agendada", values: ["80%", "10%", "10%"] },
        { label: "Proposta Enviada", values: ["71%", "15%", "14%"] },
        { label: "Negociação", values: ["67%", "19%", "14%"] },
        { label: "Fechamento", values: ["100%", "0%", "0%"] },
      ],
    },
    sentence: "As etapas de proposta e negociação concentram maior risco de estouro de SLA.",
    findings: [
      "Negociação acumula mais itens próximos do limite.",
      "Fechamento mantém compliance total, sem exceções.",
      "Equipe com menor backlog mantém SLA 12 pontos acima da média.",
    ],
    anomalies: [
      "Aumento de estouro em proposta nas últimas 48h.",
      "SLA de negociação caiu 6 pontos na semana.",
    ],
    questions: [
      "Quais responsáveis concentram maior risco operacional?",
      "Quais etapas precisam de reforço de cadência?",
      "Como reduzir backlog sem sacrificar conversão?",
    ],
    recommendations: [
      {
        id: "sla-breached",
        label: "Mostrar apenas SLAs estourados",
        patch: { status: "SLA estourado" },
        result: "Filtro aplicado: SLAs estourados.",
      },
      {
        id: "sla-owner",
        label: "Filtrar responsável Carlos Lima",
        patch: { owner: "Carlos Lima" },
        result: "Filtro aplicado: responsável Carlos Lima.",
      },
      {
        id: "sla-stage",
        label: "Ver etapa Proposta",
        patch: { status: "Proposta" },
        result: "Filtro aplicado: etapa Proposta.",
      },
    ],
  },
};

const categoryChipStyle: Record<ReportCategory, string> = {
  Vendas: "border-blue-200 bg-blue-50 text-blue-700",
  Operacional: "border-zinc-200 bg-zinc-100 text-zinc-700",
  Financeiro: "border-emerald-200 bg-emerald-50 text-emerald-700",
  CS: "border-violet-200 bg-violet-50 text-violet-700",
};

const kpiToneClass: Record<ReportKpi["tone"], string> = {
  neutral: "border-zinc-200 bg-zinc-50 text-zinc-700",
  info: "border-blue-200 bg-blue-50 text-blue-700",
  warning: "border-amber-200 bg-amber-50 text-amber-700",
  success: "border-emerald-200 bg-emerald-50 text-emerald-700",
};

function getReportById(reportId: string | null) {
  return REPORTS.find((report) => report.id === reportId) ?? null;
}

function buildExportRows(template: ReportTemplate) {
  return template.table.rows.map((row) => {
    const rowData: Record<string, string> = {
      [template.table.columns[0]]: row.label,
    };
    row.values.forEach((value, index) => {
      rowData[template.table.columns[index + 1]] = value;
    });
    return rowData;
  });
}

function buildSummaryText(
  report: ReportDefinition,
  template: ReportTemplate,
  filters: BuilderFilters
) {
  return [
    `Relatório: ${report.title}`,
    `Período: ${filters.period}`,
    `Funil: ${filters.pipeline}`,
    `Responsável: ${filters.owner}`,
    `Status: ${filters.status}`,
    `Segmento: ${filters.segment}`,
    `Resumo: ${template.sentence}`,
  ].join("\n");
}

export default function ReportsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("Todos");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);
  const [favoriteReportIds, setFavoriteReportIds] = useState<Set<string>>(
    () => new Set(["pipeline-performance", "monthly-revenue"])
  );
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [builderFilters, setBuilderFilters] = useState<BuilderFilters>({
    period: "Últimos 30 dias",
    pipeline: "Leads",
    owner: "Todos",
    status: "Todos",
    segment: "Todos",
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedReportId, setGeneratedReportId] = useState<string | null>(null);
  const [generatedCycle, setGeneratedCycle] = useState(0);
  const [pageFeedback, setPageFeedback] = useState<FeedbackState | null>(null);
  const [exportFeedback, setExportFeedback] = useState<FeedbackState | null>(null);
  const [exportLoading, setExportLoading] = useState<"csv" | "pdf" | "excel" | "copy" | null>(null);
  const [runningRecommendationId, setRunningRecommendationId] = useState<string | null>(null);
  const [recommendationResult, setRecommendationResult] = useState<string | null>(null);
  const [isIntelligenceOpen, setIsIntelligenceOpen] = useState(false);
  const [runningIntelCommand, setRunningIntelCommand] = useState<string | null>(null);
  const [intelCommandResult, setIntelCommandResult] = useState<string | null>(null);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [mobileStep, setMobileStep] = useState<MobileStep>("configure");
  const [isDesktopLibrary, setIsDesktopLibrary] = useState(false);
  const [isDesktopXL, setIsDesktopXL] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [libraryError, setLibraryError] = useState(false);
  const [builderError, setBuilderError] = useState(false);
  const [highlightCardId, setHighlightCardId] = useState<string | null>(null);

  const autoOpenRailRef = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 720);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setSearchQuery(searchInput.trim()), 250);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const xlQuery = window.matchMedia("(min-width: 1280px)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const syncMedia = () => {
      setIsDesktopLibrary(desktopQuery.matches);
      setIsDesktopXL(xlQuery.matches);
      setIsMobile(mobileQuery.matches);

      if (desktopQuery.matches) {
        setIsLibraryOpen(false);
      }

      if (mobileQuery.matches) {
        setMobileStep("configure");
      }

      if (xlQuery.matches && !autoOpenRailRef.current) {
        setIsIntelligenceOpen(true);
        autoOpenRailRef.current = true;
      }

      if (!xlQuery.matches) {
        setIsIntelligenceOpen(false);
      }
    };

    syncMedia();
    desktopQuery.addEventListener("change", syncMedia);
    xlQuery.addEventListener("change", syncMedia);
    mobileQuery.addEventListener("change", syncMedia);

    return () => {
      desktopQuery.removeEventListener("change", syncMedia);
      xlQuery.removeEventListener("change", syncMedia);
      mobileQuery.removeEventListener("change", syncMedia);
    };
  }, []);

  useEffect(() => {
    if (!pageFeedback) return;
    const timer = window.setTimeout(() => setPageFeedback(null), 2200);
    return () => window.clearTimeout(timer);
  }, [pageFeedback]);

  useEffect(() => {
    if (!exportFeedback) return;
    const timer = window.setTimeout(() => setExportFeedback(null), 2200);
    return () => window.clearTimeout(timer);
  }, [exportFeedback]);

  useEffect(() => {
    if (!recommendationResult) return;
    const timer = window.setTimeout(() => setRecommendationResult(null), 1200);
    return () => window.clearTimeout(timer);
  }, [recommendationResult]);

  useEffect(() => {
    if (!intelCommandResult) return;
    const timer = window.setTimeout(() => setIntelCommandResult(null), 1200);
    return () => window.clearTimeout(timer);
  }, [intelCommandResult]);

  useEffect(() => {
    if (!highlightCardId) return;
    const timer = window.setTimeout(() => setHighlightCardId(null), 1200);
    return () => window.clearTimeout(timer);
  }, [highlightCardId]);

  const selectedReport = useMemo(
    () => getReportById(selectedReportId),
    [selectedReportId]
  );

  const selectedTemplate = useMemo(
    () => (selectedReportId ? REPORT_TEMPLATES[selectedReportId] : null),
    [selectedReportId]
  );

  const uniqueRecentIds = useMemo(() => {
    const ids: string[] = [];
    for (const item of history) {
      if (!ids.includes(item.reportId)) ids.push(item.reportId);
      if (ids.length === 6) break;
    }
    return ids;
  }, [history]);

  const recentReports = useMemo(
    () =>
      uniqueRecentIds
        .map((id) => REPORTS.find((report) => report.id === id))
        .filter((report): report is ReportDefinition => Boolean(report)),
    [uniqueRecentIds]
  );

  const filteredReports = useMemo(() => {
    return REPORTS.filter((report) => {
      if (categoryFilter !== "Todos" && report.category !== categoryFilter) return false;
      if (statusFilter === "favorites" && !favoriteReportIds.has(report.id)) return false;
      if (statusFilter === "recent" && !uniqueRecentIds.includes(report.id)) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const inTitle = report.title.toLowerCase().includes(q);
        const inDescription = report.description.toLowerCase().includes(q);
        const inTags = report.tags.some((tag) => tag.toLowerCase().includes(q));
        if (!inTitle && !inDescription && !inTags) return false;
      }
      return true;
    });
  }, [categoryFilter, favoriteReportIds, searchQuery, statusFilter, uniqueRecentIds]);

  const historyEntries = useMemo(() => {
    return history
      .map((entry) => {
        const report = REPORTS.find((item) => item.id === entry.reportId);
        if (!report) return null;
        return {
          ...entry,
          title: report.title,
        };
      })
      .filter((entry): entry is HistoryEntry & { title: string } => Boolean(entry));
  }, [history]);

  const hasDataForCurrentFilters = useMemo(() => {
    if (!selectedReportId) return true;
    if (selectedReportId === "monthly-revenue" && builderFilters.segment === "Inativo") {
      return false;
    }
    if (selectedReportId === "sla-compliance" && builderFilters.status === "Sem dados") {
      return false;
    }
    return true;
  }, [builderFilters.segment, builderFilters.status, selectedReportId]);

  const activeFilterChips = useMemo(() => {
    const chips: Array<{ id: string; label: string; onClear?: () => void }> = [];
    if (categoryFilter !== "Todos") {
      chips.push({
        id: "category",
        label: `Categoria: ${categoryFilter}`,
        onClear: () => setCategoryFilter("Todos"),
      });
    }
    if (statusFilter === "favorites") {
      chips.push({
        id: "status-favorites",
        label: "Favoritos",
        onClear: () => setStatusFilter("all"),
      });
    }
    if (statusFilter === "recent") {
      chips.push({
        id: "status-recent",
        label: "Recentes",
        onClear: () => setStatusFilter("all"),
      });
    }
    if (searchQuery) {
      chips.push({
        id: "search",
        label: `Busca: ${searchQuery}`,
        onClear: () => {
          setSearchInput("");
          setSearchQuery("");
        },
      });
    }
    return chips;
  }, [categoryFilter, searchQuery, statusFilter]);

  const selectReport = useCallback((reportId: string) => {
    setSelectedReportId(reportId);
    setHighlightCardId(reportId);
    if (isMobile) setMobileStep("configure");
    if (!isDesktopLibrary) setIsLibraryOpen(false);
  }, [isDesktopLibrary, isMobile]);

  const toggleFavorite = useCallback((reportId: string) => {
    setFavoriteReportIds((prev) => {
      const next = new Set(prev);
      if (next.has(reportId)) next.delete(reportId);
      else next.add(reportId);
      return next;
    });
  }, []);

  const generateReport = useCallback((reportId?: string) => {
    const targetReportId = reportId ?? selectedReportId;
    if (!targetReportId) return;

    if (reportId) {
      selectReport(reportId);
    }

    setGeneratedReportId(null);
    setIsGenerating(true);
    setBuilderError(false);

    window.setTimeout(() => {
      const nextIndex = (history.length + generatedCycle) % HISTORY_TIMESTAMPS.length;
      setIsGenerating(false);
      setGeneratedReportId(targetReportId);
      setGeneratedCycle((current) => current + 1);
      setHistory((prev) => [
        { reportId: targetReportId, generatedAt: HISTORY_TIMESTAMPS[nextIndex] },
        ...prev,
      ]);
      setPageFeedback({
        type: "success",
        message: "Relatório gerado com sucesso.",
      });
      if (isMobile) setMobileStep("visualize");
    }, 900);
  }, [generatedCycle, history.length, isMobile, selectReport, selectedReportId]);

  const runExport = useCallback(
    async (type: "csv" | "pdf" | "excel" | "copy") => {
      if (!selectedReport || !selectedTemplate) return;

      setExportLoading(type);
      window.setTimeout(async () => {
        try {
          if (type === "copy") {
            if (typeof navigator === "undefined" || !navigator.clipboard) {
              throw new Error("clipboard unavailable");
            }
            await navigator.clipboard.writeText(
              buildSummaryText(selectedReport, selectedTemplate, builderFilters)
            );
            setExportFeedback({ type: "success", message: "Resumo copiado." });
            setExportLoading(null);
            return;
          }

          const rows = buildExportRows(selectedTemplate);
          const fileName = `relatorio-${selectedReport.id}`;
          if (type === "csv") exportToCSV(rows, fileName);
          if (type === "pdf") exportToPDF(rows, fileName, selectedReport.title);
          if (type === "excel") exportToExcel(rows, fileName);

          setExportFeedback({
            type: "success",
            message: `Exportado em ${type.toUpperCase()}.`,
          });
        } catch {
          setExportFeedback({
            type: "error",
            message: "Falha ao exportar. Tente novamente.",
          });
        } finally {
          setExportLoading(null);
        }
      }, 180);
    },
    [builderFilters, selectedReport, selectedTemplate]
  );

  const applyRecommendation = useCallback((recommendation: ReportRecommendation) => {
    setRunningRecommendationId(recommendation.id);
    window.setTimeout(() => {
      setBuilderFilters((current) => ({ ...current, ...recommendation.patch }));
      setRunningRecommendationId(null);
      setRecommendationResult(recommendation.result);
    }, 180);
  }, []);

  const runIntelCommand = useCallback(
    (commandId: string, result: string, callback?: () => void) => {
      setRunningIntelCommand(commandId);
      window.setTimeout(() => {
        callback?.();
        setRunningIntelCommand(null);
        setIntelCommandResult(result);
      }, 220);
    },
    []
  );

  const openQuickReport = useCallback(
    (reportId: string) => {
      selectReport(reportId);
      setGeneratedReportId(null);
    },
    [selectReport]
  );

  const openHistoryEntry = useCallback((reportId: string) => {
    selectReport(reportId);
    setGeneratedReportId(reportId);
    if (isMobile) setMobileStep("visualize");
  }, [isMobile, selectReport]);

  const clearAllFilters = useCallback(() => {
    setCategoryFilter("Todos");
    setStatusFilter("all");
    setSearchInput("");
    setSearchQuery("");
  }, []);

  const openReportsLibrary = useCallback(() => {
    clearAllFilters();
    setSelectedReportId(null);
    setGeneratedReportId(null);
    setHighlightCardId(null);
    if (!isDesktopLibrary) setIsLibraryOpen(true);
  }, [clearAllFilters, isDesktopLibrary]);

  if (isLoading) {
    return <ReportsPageSkeleton />;
  }

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex h-[calc(100dvh-2rem)] min-h-0 w-full max-w-full flex-col gap-4"
      >
        {pageFeedback ? (
          <InlineFeedback
            type={pageFeedback.type}
            message={pageFeedback.message}
            compact
            onClose={() => setPageFeedback(null)}
          />
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16, delay: 0.02, ease: "easeOut" }}
          className="shrink-0"
        >
          <ModuleCommandHeader
            title="Relatórios"
            description="Gere, exporte e interprete dados do CRM"
            chips={activeFilterChips.map((chip) => ({
              id: chip.id,
              label: chip.label,
              tone: "info" as const,
              onClick: chip.onClear,
            }))}
            actions={
              <div className="flex w-full min-w-0 flex-wrap items-center gap-2 xl:justify-end">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9 rounded-full">
                      <History className="h-3.5 w-3.5" />
                      Histórico
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-[min(92vw,340px)] rounded-[14px] border-zinc-200 bg-white p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                      Últimos relatórios
                    </p>
                    <div className="mt-2 space-y-2">
                      {historyEntries.length > 0 ? (
                        historyEntries.slice(0, 8).map((entry, index) => (
                          <button
                            key={`${entry.reportId}-${entry.generatedAt}-${index}`}
                            type="button"
                            onClick={() => openHistoryEntry(entry.reportId)}
                            className="flex w-full items-center justify-between rounded-[10px] border border-zinc-200 bg-zinc-50/80 px-2.5 py-2 text-left text-xs transition-colors hover:bg-zinc-100"
                          >
                            <span className="truncate pr-2 text-zinc-700">{entry.title}</span>
                            <span className="text-zinc-500">{entry.generatedAt}</span>
                          </button>
                        ))
                      ) : (
                        <div className="rounded-[10px] border border-dashed border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-500">
                          Ainda não há relatórios gerados.
                        </div>
                      )}
                    </div>
                  </PopoverContent>
                </Popover>

                <Button
                  size="sm"
                  onClick={() => setIsIntelligenceOpen((prev) => !prev)}
                  className="menux-intelligence-btn premium-shine h-9 rounded-full px-3.5 text-sm transition-transform duration-120 ease-out hover:-translate-y-px active:scale-[0.99]"
                >
                  <Sparkles className="h-3.5 w-3.5 text-cyan-100" />
                  Menux Intelligence
                </Button>
              </div>
            }
          >
            <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                {(["Todos", "Vendas", "Operacional", "Financeiro", "CS"] as CategoryFilter[]).map(
                  (category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setCategoryFilter(category)}
                      className={cn(
                        "inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors duration-120",
                        categoryFilter === category
                          ? "border-zinc-300 bg-white text-zinc-900"
                          : "border-zinc-200 bg-white/90 text-zinc-600 hover:bg-zinc-50"
                      )}
                    >
                      {category}
                    </button>
                  )
                )}

                <span className="ml-1 text-xs font-medium text-zinc-500">Status:</span>
                <button
                  type="button"
                  onClick={() =>
                    setStatusFilter((current) => (current === "favorites" ? "all" : "favorites"))
                  }
                  className={cn(
                    "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors duration-120",
                    statusFilter === "favorites"
                      ? "border-amber-300 bg-amber-50 text-amber-700"
                      : "border-zinc-200 bg-white/90 text-zinc-600 hover:bg-zinc-50"
                  )}
                >
                  <Star className="h-3.5 w-3.5" />
                  Favoritos
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setStatusFilter((current) => (current === "recent" ? "all" : "recent"))
                  }
                  className={cn(
                    "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors duration-120",
                    statusFilter === "recent"
                      ? "border-blue-300 bg-blue-50 text-blue-700"
                      : "border-zinc-200 bg-white/90 text-zinc-600 hover:bg-zinc-50"
                  )}
                >
                  <History className="h-3.5 w-3.5" />
                  Recentes
                </button>
              </div>

              <div className="flex min-w-0 flex-wrap items-center gap-2 lg:justify-end">
                <div className="group relative min-w-[220px] flex-1 max-w-[360px]">
                  <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                  <Input
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    placeholder="Buscar relatórios"
                    className="h-9 rounded-full pl-8 pr-8 text-sm"
                  />
                  {searchInput ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchInput("");
                        setSearchQuery("");
                      }}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 transition-opacity hover:text-zinc-700 sm:opacity-0 sm:group-hover:opacity-100"
                      aria-label="Limpar busca"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  ) : null}
                </div>

                {!isDesktopLibrary ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 rounded-full"
                    onClick={() => setIsLibraryOpen(true)}
                  >
                    <Filter className="h-3.5 w-3.5" />
                    Biblioteca
                  </Button>
                ) : null}

                {activeFilterChips.length > 0 ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 rounded-full text-xs text-zinc-500 hover:text-zinc-900"
                    onClick={clearAllFilters}
                  >
                    Limpar filtros
                  </Button>
                ) : null}
              </div>
            </div>
          </ModuleCommandHeader>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16, delay: 0.05, ease: "easeOut" }}
          className="min-h-0 flex-1"
        >
          <div
            className={cn(
              "grid h-full min-h-0 gap-4",
              isDesktopLibrary
                ? "grid-cols-[minmax(320px,0.4fr)_minmax(0,0.6fr)]"
                : "grid-cols-1"
            )}
          >
            {isDesktopLibrary ? (
              <ReportsLibraryPanel
                reports={filteredReports}
                selectedReportId={selectedReportId}
                favoriteReportIds={favoriteReportIds}
                recentReports={recentReports}
                libraryError={libraryError}
                onRetry={() => setLibraryError(false)}
                onSelect={selectReport}
                onToggleFavorite={toggleFavorite}
                onGenerate={(reportId) => generateReport(reportId)}
                onPreview={selectReport}
                highlightCardId={highlightCardId}
              />
            ) : null}

            <div className="min-h-0 min-w-0 overflow-hidden rounded-[20px] border border-zinc-200/80 bg-white/82 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.45)]">
              <div className="flex h-full min-h-0 min-w-0 gap-3 p-3">
                <div className="min-h-0 min-w-0 flex-1 overflow-y-auto pr-1">
                  {!selectedReport || !selectedTemplate ? (
                    <ReportBuilderEmptyState
                      onOpenQuickReport={openQuickReport}
                      onOpenLibrary={openReportsLibrary}
                    />
                  ) : (
                    <div className="space-y-3 pb-3">
                      {builderError ? (
                        <SectionError
                          message="Falha ao gerar visualização do relatório."
                          onRetry={() => setBuilderError(false)}
                        />
                      ) : null}

                      {isMobile ? (
                        <div className="inline-flex h-9 items-center rounded-full border border-zinc-200 bg-zinc-50/90 p-1">
                          <button
                            type="button"
                            onClick={() => setMobileStep("configure")}
                            className={cn(
                              "h-7 rounded-full px-3 text-xs font-medium transition-colors duration-120",
                              mobileStep === "configure"
                                ? "bg-white text-zinc-900 shadow-sm"
                                : "text-zinc-500 hover:text-zinc-900"
                            )}
                          >
                            Configurar
                          </button>
                          <button
                            type="button"
                            onClick={() => setMobileStep("visualize")}
                            className={cn(
                              "h-7 rounded-full px-3 text-xs font-medium transition-colors duration-120",
                              mobileStep === "visualize"
                                ? "bg-white text-zinc-900 shadow-sm"
                                : "text-zinc-500 hover:text-zinc-900"
                            )}
                          >
                            Visualizar
                          </button>
                        </div>
                      ) : null}

                      {!isMobile || mobileStep === "configure" ? (
                        <section className="rounded-[16px] border border-zinc-200 bg-zinc-50/80 p-3">
                          <div className="mb-2 flex items-start justify-between gap-2">
                            <div>
                              <h3 className="font-heading text-base font-semibold text-zinc-900">
                                Configurações do relatório
                              </h3>
                              <p className="text-xs text-zinc-500">{selectedReport.title}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full text-zinc-500"
                              onClick={() => setSelectedReportId(null)}
                              aria-label="Fechar relatório selecionado"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
                            <Select
                              value={builderFilters.period}
                              onValueChange={(value) =>
                                setBuilderFilters((current) => ({ ...current, period: value }))
                              }
                            >
                              <SelectTrigger className="h-9 rounded-[12px] bg-white">
                                <SelectValue placeholder="Período" />
                              </SelectTrigger>
                              <SelectContent className="rounded-[12px]">
                                <SelectItem value="Últimos 7 dias">Últimos 7 dias</SelectItem>
                                <SelectItem value="Últimos 30 dias">Últimos 30 dias</SelectItem>
                                <SelectItem value="Este mês">Este mês</SelectItem>
                                <SelectItem value="Trimestre atual">Trimestre atual</SelectItem>
                                <SelectItem value="Ano atual">Ano atual</SelectItem>
                              </SelectContent>
                            </Select>
                            <Select
                              value={builderFilters.pipeline}
                              onValueChange={(value) =>
                                setBuilderFilters((current) => ({ ...current, pipeline: value }))
                              }
                            >
                              <SelectTrigger className="h-9 rounded-[12px] bg-white">
                                <SelectValue placeholder="Funil" />
                              </SelectTrigger>
                              <SelectContent className="rounded-[12px]">
                                <SelectItem value="Leads">Leads</SelectItem>
                                <SelectItem value="Enterprise">Enterprise</SelectItem>
                                <SelectItem value="Inside Sales">Inside Sales</SelectItem>
                              </SelectContent>
                            </Select>
                            <Select
                              value={builderFilters.owner}
                              onValueChange={(value) =>
                                setBuilderFilters((current) => ({ ...current, owner: value }))
                              }
                            >
                              <SelectTrigger className="h-9 rounded-[12px] bg-white">
                                <SelectValue placeholder="Responsável" />
                              </SelectTrigger>
                              <SelectContent className="rounded-[12px]">
                                <SelectItem value="Todos">Todos</SelectItem>
                                <SelectItem value="Ana Souza">Ana Souza</SelectItem>
                                <SelectItem value="Carlos Lima">Carlos Lima</SelectItem>
                                <SelectItem value="Fernanda Reis">Fernanda Reis</SelectItem>
                                <SelectItem value="Pedro Alves">Pedro Alves</SelectItem>
                                <SelectItem value="Julia Mendes">Julia Mendes</SelectItem>
                              </SelectContent>
                            </Select>
                            <Select
                              value={builderFilters.status}
                              onValueChange={(value) =>
                                setBuilderFilters((current) => ({ ...current, status: value }))
                              }
                            >
                              <SelectTrigger className="h-9 rounded-[12px] bg-white">
                                <SelectValue placeholder="Status" />
                              </SelectTrigger>
                              <SelectContent className="rounded-[12px]">
                                <SelectItem value="Todos">Todos</SelectItem>
                                <SelectItem value="Proposta">Proposta</SelectItem>
                                <SelectItem value="Negociação">Negociação</SelectItem>
                                <SelectItem value="Fechado">Fechado</SelectItem>
                                <SelectItem value="Em risco">Em risco</SelectItem>
                                <SelectItem value="SLA estourado">SLA estourado</SelectItem>
                                <SelectItem value="Sem dados">Sem dados</SelectItem>
                              </SelectContent>
                            </Select>
                            <Select
                              value={builderFilters.segment}
                              onValueChange={(value) =>
                                setBuilderFilters((current) => ({ ...current, segment: value }))
                              }
                            >
                              <SelectTrigger className="h-9 rounded-[12px] bg-white">
                                <SelectValue placeholder="Segmento" />
                              </SelectTrigger>
                              <SelectContent className="rounded-[12px]">
                                <SelectItem value="Todos">Todos</SelectItem>
                                <SelectItem value="SMB">SMB</SelectItem>
                                <SelectItem value="Mid-Market">Mid-Market</SelectItem>
                                <SelectItem value="Enterprise">Enterprise</SelectItem>
                                <SelectItem value="Inativo">Inativo</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="mt-3 flex items-center justify-between gap-2">
                            <div className="text-xs text-zinc-500">
                              Ajuste os filtros e gere o relatório com preview.
                            </div>
                            <Button
                              className="h-8 rounded-full bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800"
                              onClick={() => generateReport()}
                              disabled={isGenerating}
                            >
                              {isGenerating ? (
                                <span className="mr-1 h-3 w-3 animate-spin rounded-full border border-white border-t-transparent" />
                              ) : (
                                <BarChart3 className="mr-1 h-3.5 w-3.5" />
                              )}
                              Gerar relatório
                            </Button>
                          </div>
                        </section>
                      ) : null}

                      {!isMobile || mobileStep === "visualize" ? (
                        <>
                          <section className="rounded-[16px] border border-zinc-200 bg-zinc-50/80 p-3">
                            <div className="mb-2">
                              <h3 className="font-heading text-base font-semibold text-zinc-900">
                                Preview do resultado
                              </h3>
                              <p className="text-xs text-zinc-500">
                                Gráfico principal, KPIs e tabela de suporte.
                              </p>
                            </div>

                            {isGenerating ? (
                              <ReportPreviewSkeleton />
                            ) : generatedReportId === selectedReport.id ? (
                              hasDataForCurrentFilters ? (
                                <motion.div
                                  key={`${selectedReport.id}-${generatedCycle}`}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.16, ease: "easeOut" }}
                                  className="space-y-3"
                                >
                                  <div className="rounded-[14px] border border-zinc-200 bg-white p-3">
                                    <div className="mb-2 flex items-center justify-between">
                                      <h4 className="text-sm font-semibold text-zinc-900">
                                        {selectedTemplate.chartTitle}
                                      </h4>
                                      <span className="text-[11px] text-zinc-500">
                                        {builderFilters.period}
                                      </span>
                                    </div>
                                    <div className="space-y-2">
                                      {selectedTemplate.chart.map((point) => {
                                        const max = Math.max(
                                          ...selectedTemplate.chart.map((item) => item.value)
                                        );
                                        const width = max > 0 ? (point.value / max) * 100 : 0;
                                        return (
                                          <div key={point.label} className="space-y-1">
                                            <div className="flex items-center justify-between text-xs text-zinc-600">
                                              <span>{point.label}</span>
                                              <span className="font-medium text-zinc-900">
                                                {point.value}
                                              </span>
                                            </div>
                                            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                                              <div
                                                className="h-full rounded-full bg-zinc-700 transition-[width] duration-240"
                                                style={{ width: `${width}%` }}
                                              />
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                    {selectedTemplate.kpis.map((kpi) => (
                                      <div
                                        key={kpi.id}
                                        className="rounded-[12px] border border-zinc-200 bg-white p-2.5"
                                      >
                                        <p className="text-[11px] uppercase tracking-[0.08em] text-zinc-500">
                                          {kpi.label}
                                        </p>
                                        <p className="mt-1 text-lg font-semibold text-zinc-900">
                                          {kpi.value}
                                        </p>
                                        <Badge
                                          className={cn(
                                            "mt-1 rounded-full border px-2 py-0 text-[10px]",
                                            kpiToneClass[kpi.tone]
                                          )}
                                        >
                                          {kpi.subtext}
                                        </Badge>
                                      </div>
                                    ))}
                                  </div>

                                  <div className="max-h-[260px] overflow-auto rounded-[14px] border border-zinc-200 bg-white">
                                    <table className="w-full border-collapse">
                                      <thead className="sticky top-0 z-10 bg-zinc-50">
                                        <tr className="border-b border-zinc-200">
                                          {selectedTemplate.table.columns.map((column, index) => (
                                            <th
                                              key={column}
                                              className={cn(
                                                "px-3 py-2 text-xs font-medium uppercase tracking-[0.05em] text-zinc-500",
                                                index === 0 ? "text-left" : "text-right"
                                              )}
                                            >
                                              {column}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {selectedTemplate.table.rows.map((row) => (
                                          <tr key={row.label} className="border-b border-zinc-100 hover:bg-zinc-50/70">
                                            <td className="px-3 py-2 text-sm font-medium text-zinc-900">
                                              {row.label}
                                            </td>
                                            {row.values.map((value, index) => (
                                              <td
                                                key={`${row.label}-${index}`}
                                                className="px-3 py-2 text-right text-sm text-zinc-600"
                                              >
                                                {value}
                                              </td>
                                            ))}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>

                                  <div className="rounded-[14px] border border-zinc-200 bg-white p-3">
                                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                                      Insights da Menux Intelligence
                                    </p>
                                    <p className="mt-1 text-sm text-zinc-700">
                                      {selectedTemplate.sentence}
                                    </p>
                                    <div className="mt-2 grid gap-2 md:grid-cols-2">
                                      <div className="rounded-[10px] border border-zinc-200 bg-zinc-50 p-2.5">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
                                          Achados
                                        </p>
                                        <ul className="mt-1 space-y-1 text-xs text-zinc-600">
                                          {selectedTemplate.findings.map((finding, index) => (
                                            <li key={index} className="flex gap-1.5">
                                              <Check className="mt-0.5 h-3.5 w-3.5 text-zinc-500" />
                                              <span>{finding}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div className="rounded-[10px] border border-zinc-200 bg-zinc-50 p-2.5">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
                                          Ações recomendadas
                                        </p>
                                        <div className="mt-1 space-y-1.5">
                                          {selectedTemplate.recommendations.map((recommendation) => (
                                            <Button
                                              key={recommendation.id}
                                              size="sm"
                                              variant="outline"
                                              className="h-7 w-full justify-start rounded-full text-[11px]"
                                              onClick={() => applyRecommendation(recommendation)}
                                              disabled={runningRecommendationId === recommendation.id}
                                            >
                                              {runningRecommendationId === recommendation.id ? (
                                                <span className="mr-1 h-3 w-3 animate-spin rounded-full border border-zinc-500 border-t-transparent" />
                                              ) : (
                                                <Sparkles className="mr-1 h-3.5 w-3.5 text-zinc-500" />
                                              )}
                                              {recommendation.label}
                                            </Button>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    {recommendationResult ? (
                                      <div className="mt-2 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700">
                                        {recommendationResult}
                                      </div>
                                    ) : null}
                                  </div>
                                </motion.div>
                              ) : (
                                <div className="flex min-h-[240px] flex-col items-center justify-center rounded-[14px] border border-dashed border-zinc-200 bg-white p-4 text-center">
                                  <p className="font-medium text-zinc-900">Sem dados no período</p>
                                  <p className="mt-1 text-sm text-zinc-500">
                                    Ajuste filtros e gere novamente o relatório.
                                  </p>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-3 rounded-full"
                                    onClick={() =>
                                      setBuilderFilters((current) => ({
                                        ...current,
                                        segment: "Todos",
                                        status: "Todos",
                                      }))
                                    }
                                  >
                                    Voltar para configurações
                                  </Button>
                                </div>
                              )
                            ) : (
                              <div className="flex min-h-[240px] flex-col items-center justify-center rounded-[14px] border border-dashed border-zinc-200 bg-white p-4 text-center">
                                <p className="font-medium text-zinc-900">
                                  Gere o relatório para visualizar o preview
                                </p>
                                <p className="mt-1 text-sm text-zinc-500">
                                  Defina os filtros e clique em “Gerar relatório”.
                                </p>
                              </div>
                            )}
                          </section>

                          <section className="rounded-[16px] border border-zinc-200 bg-zinc-50/80 p-3">
                            <h3 className="font-heading text-base font-semibold text-zinc-900">
                              Exportação
                            </h3>
                            <p className="text-xs text-zinc-500">
                              Exporte o resultado ou copie um resumo pronto.
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 rounded-full"
                                onClick={() => void runExport("csv")}
                                disabled={
                                  !selectedTemplate ||
                                  generatedReportId !== selectedReport.id ||
                                  exportLoading === "csv"
                                }
                              >
                                {exportLoading === "csv" ? (
                                  <span className="mr-1 h-3 w-3 animate-spin rounded-full border border-zinc-500 border-t-transparent" />
                                ) : (
                                  <FileDown className="mr-1 h-3.5 w-3.5" />
                                )}
                                Exportar CSV
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 rounded-full"
                                onClick={() => void runExport("pdf")}
                                disabled={
                                  !selectedTemplate ||
                                  generatedReportId !== selectedReport.id ||
                                  exportLoading === "pdf"
                                }
                              >
                                {exportLoading === "pdf" ? (
                                  <span className="mr-1 h-3 w-3 animate-spin rounded-full border border-zinc-500 border-t-transparent" />
                                ) : (
                                  <FileText className="mr-1 h-3.5 w-3.5" />
                                )}
                                Exportar PDF
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 rounded-full"
                                onClick={() => void runExport("excel")}
                                disabled={
                                  !selectedTemplate ||
                                  generatedReportId !== selectedReport.id ||
                                  exportLoading === "excel"
                                }
                              >
                                {exportLoading === "excel" ? (
                                  <span className="mr-1 h-3 w-3 animate-spin rounded-full border border-zinc-500 border-t-transparent" />
                                ) : (
                                  <FileSpreadsheet className="mr-1 h-3.5 w-3.5" />
                                )}
                                Exportar Excel
                              </Button>
                              <Button
                                size="sm"
                                className="h-8 rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
                                onClick={() => void runExport("copy")}
                                disabled={
                                  !selectedTemplate ||
                                  generatedReportId !== selectedReport.id ||
                                  exportLoading === "copy"
                                }
                              >
                                {exportLoading === "copy" ? (
                                  <span className="mr-1 h-3 w-3 animate-spin rounded-full border border-white border-t-transparent" />
                                ) : (
                                  <Copy className="mr-1 h-3.5 w-3.5" />
                                )}
                                Copiar resumo
                              </Button>
                            </div>
                            {exportFeedback ? (
                              <div className="mt-2">
                                <InlineFeedback
                                  type={exportFeedback.type}
                                  message={exportFeedback.message}
                                  compact
                                  onClose={() => setExportFeedback(null)}
                                />
                              </div>
                            ) : null}
                          </section>
                        </>
                      ) : null}
                    </div>
                  )}
                </div>

                <aside
                  className={cn(
                    "hidden xl:block shrink-0 transition-[width,opacity] duration-[220ms] ease-out",
                    isIntelligenceOpen ? "w-[320px] opacity-100" : "pointer-events-none w-0 opacity-0"
                  )}
                >
                  <ReportsIntelligenceRail
                    selectedReport={selectedReport}
                    template={selectedTemplate}
                    runningCommand={runningIntelCommand}
                    commandResult={intelCommandResult}
                    onRunCommand={runIntelCommand}
                    onClose={() => setIsIntelligenceOpen(false)}
                    onApplyRiskFilter={() =>
                      setBuilderFilters((current) => ({ ...current, status: "Em risco" }))
                    }
                    onApplySlaFilter={() =>
                      setBuilderFilters((current) => ({ ...current, status: "SLA estourado" }))
                    }
                    onApplyOwnerFilter={() =>
                      setBuilderFilters((current) => ({ ...current, owner: "Ana Souza" }))
                    }
                    onGenerateSummary={() =>
                      setPageFeedback({
                        type: "success",
                        message: "Resumo executivo do relatório gerado.",
                      })
                    }
                  />
                </aside>
              </div>
            </div>
          </div>
        </motion.div>

        {!isDesktopXL ? (
          <>
            <div
              onClick={() => setIsIntelligenceOpen(false)}
              className={cn(
                "fixed inset-0 z-40 bg-black/25 transition-opacity duration-200 xl:hidden",
                isIntelligenceOpen ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            />
            <aside
              className={cn(
                "fixed right-0 top-0 z-50 h-full w-[min(92vw,340px)] p-2 transition-transform duration-[220ms] ease-out xl:hidden",
                isIntelligenceOpen ? "translate-x-0" : "translate-x-full"
              )}
            >
              <ReportsIntelligenceRail
                selectedReport={selectedReport}
                template={selectedTemplate}
                runningCommand={runningIntelCommand}
                commandResult={intelCommandResult}
                onRunCommand={runIntelCommand}
                onClose={() => setIsIntelligenceOpen(false)}
                onApplyRiskFilter={() => {
                  setBuilderFilters((current) => ({ ...current, status: "Em risco" }));
                  setIsIntelligenceOpen(false);
                }}
                onApplySlaFilter={() => {
                  setBuilderFilters((current) => ({ ...current, status: "SLA estourado" }));
                  setIsIntelligenceOpen(false);
                }}
                onApplyOwnerFilter={() => {
                  setBuilderFilters((current) => ({ ...current, owner: "Ana Souza" }));
                  setIsIntelligenceOpen(false);
                }}
                onGenerateSummary={() => {
                  setPageFeedback({
                    type: "success",
                    message: "Resumo executivo do relatório gerado.",
                  });
                  setIsIntelligenceOpen(false);
                }}
              />
            </aside>
          </>
        ) : null}

        {!isDesktopLibrary ? (
          <>
            <div
              onClick={() => setIsLibraryOpen(false)}
              className={cn(
                "fixed inset-0 z-40 bg-black/25 transition-opacity duration-200",
                isLibraryOpen ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            />
            <aside
              className={cn(
                "fixed left-0 top-0 z-50 h-full w-[min(92vw,420px)] p-2 transition-transform duration-[220ms] ease-out",
                isLibraryOpen ? "translate-x-0" : "-translate-x-full"
              )}
            >
              <ReportsLibraryPanel
                reports={filteredReports}
                selectedReportId={selectedReportId}
                favoriteReportIds={favoriteReportIds}
                recentReports={recentReports}
                libraryError={libraryError}
                onRetry={() => setLibraryError(false)}
                onSelect={selectReport}
                onToggleFavorite={toggleFavorite}
                onGenerate={(reportId) => generateReport(reportId)}
                onPreview={selectReport}
                highlightCardId={highlightCardId}
                onClose={() => setIsLibraryOpen(false)}
              />
            </aside>
          </>
        ) : null}
      </motion.div>
    </TooltipProvider>
  );
}

function ReportsLibraryPanel({
  reports,
  selectedReportId,
  favoriteReportIds,
  recentReports,
  libraryError,
  onRetry,
  onSelect,
  onToggleFavorite,
  onGenerate,
  onPreview,
  highlightCardId,
  onClose,
}: {
  reports: ReportDefinition[];
  selectedReportId: string | null;
  favoriteReportIds: Set<string>;
  recentReports: ReportDefinition[];
  libraryError: boolean;
  onRetry: () => void;
  onSelect: (reportId: string) => void;
  onToggleFavorite: (reportId: string) => void;
  onGenerate: (reportId: string) => void;
  onPreview: (reportId: string) => void;
  highlightCardId: string | null;
  onClose?: () => void;
}) {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[20px] border border-zinc-200/80 bg-white/82 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.45)]">
      <div className="flex items-center justify-between border-b border-zinc-200 px-3 py-2.5">
        <div>
          <h3 className="font-heading text-base font-semibold text-zinc-900">Biblioteca</h3>
          <p className="text-xs text-zinc-500">Relatórios disponíveis no Flow</p>
        </div>
        {onClose ? (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full text-zinc-500"
            onClick={onClose}
            aria-label="Fechar biblioteca"
          >
            <X className="h-4 w-4" />
          </Button>
        ) : null}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        {libraryError ? (
          <SectionError
            message="Falha ao carregar biblioteca de relatórios."
            onRetry={onRetry}
          />
        ) : (
          <div className="space-y-3">
            {recentReports.length > 0 ? (
              <section className="rounded-[14px] border border-zinc-200 bg-zinc-50/80 p-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                  Recentes
                </h4>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {recentReports.slice(0, 3).map((report) => (
                    <button
                      key={`recent-${report.id}`}
                      type="button"
                      onClick={() => onSelect(report.id)}
                      className={cn(
                        "rounded-[10px] border px-2.5 py-2 text-left transition-colors duration-120",
                        selectedReportId === report.id
                          ? "border-zinc-300 bg-white"
                          : "border-zinc-200 bg-white/90 hover:bg-zinc-100"
                      )}
                    >
                      <p className="truncate text-xs font-semibold text-zinc-900">
                        {report.title}
                      </p>
                      <p className="mt-1 text-[11px] text-zinc-500">{report.category}</p>
                    </button>
                  ))}
                </div>
              </section>
            ) : null}

            {reports.length > 0 ? (
              <motion.div
                layout
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="grid grid-cols-1 gap-3 xl:grid-cols-2"
              >
                {reports.map((report) => (
                  <motion.div
                    key={report.id}
                    layout
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <ReportLibraryCard
                      report={report}
                      isSelected={selectedReportId === report.id}
                      isFavorite={favoriteReportIds.has(report.id)}
                      highlighted={highlightCardId === report.id}
                      onSelect={() => onSelect(report.id)}
                      onToggleFavorite={() => onToggleFavorite(report.id)}
                      onGenerate={() => onGenerate(report.id)}
                      onPreview={() => onPreview(report.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="rounded-[14px] border border-dashed border-zinc-200 bg-zinc-50/80 p-4 text-sm text-zinc-500">
                Nenhum relatório encontrado para os filtros atuais.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ReportLibraryCard({
  report,
  isSelected,
  isFavorite,
  highlighted,
  onSelect,
  onToggleFavorite,
  onGenerate,
  onPreview,
}: {
  report: ReportDefinition;
  isSelected: boolean;
  isFavorite: boolean;
  highlighted: boolean;
  onSelect: () => void;
  onToggleFavorite: () => void;
  onGenerate: () => void;
  onPreview: () => void;
}) {
  return (
    <article
      className={cn(
        "group premium-lift relative overflow-hidden rounded-[16px] border bg-white p-3 shadow-[0_10px_20px_-18px_rgba(15,23,42,0.55)] transition-colors duration-140",
        isSelected ? "border-zinc-300 bg-zinc-50/80" : "border-zinc-200/85",
        highlighted && "ring-1 ring-zinc-300"
      )}
    >
      {isSelected ? (
        <span className="absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-zinc-800" />
      ) : null}

      <div className="flex items-start justify-between gap-2">
        <button
          type="button"
          onClick={onSelect}
          className="flex min-w-0 items-start gap-2 text-left"
        >
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-zinc-100 text-zinc-700">
            {report.icon}
          </span>
          <div className="min-w-0">
            <Badge
              className={cn(
                "rounded-full border px-2 py-0 text-[10px]",
                categoryChipStyle[report.category]
              )}
            >
              {report.category}
            </Badge>
            <h4 className="mt-1 truncate text-sm font-semibold text-zinc-900">
              {report.title}
            </h4>
          </div>
        </button>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={onToggleFavorite}
              className={cn(
                "rounded-full border p-1 transition-all duration-120",
                isFavorite
                  ? "border-amber-300 bg-amber-50 text-amber-700"
                  : "border-zinc-200 bg-white text-zinc-400 opacity-0 group-hover:opacity-100"
              )}
              aria-label="Favoritar relatório"
            >
              <Star className={cn("h-3.5 w-3.5", isFavorite && "fill-current")} />
            </button>
          </TooltipTrigger>
          <TooltipContent className="bg-zinc-900 text-zinc-50">
            {isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          </TooltipContent>
        </Tooltip>
      </div>

      <button type="button" onClick={onSelect} className="mt-2 text-left">
        <p className="line-clamp-2 text-sm text-zinc-600">{report.description}</p>
      </button>

      <div className="mt-2 flex flex-wrap gap-1">
        {report.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0 text-[10px] text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          className="h-8 flex-1 rounded-full text-xs"
          onClick={onPreview}
        >
          Preview
        </Button>
        <Button
          size="sm"
          className="h-8 flex-1 rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800"
          onClick={onGenerate}
        >
          <BarChart3 className="mr-1 h-3.5 w-3.5" />
          Gerar
        </Button>
      </div>
    </article>
  );
}

function ReportBuilderEmptyState({
  onOpenQuickReport,
  onOpenLibrary,
}: {
  onOpenQuickReport: (reportId: string) => void;
  onOpenLibrary: () => void;
}) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center rounded-[16px] border border-dashed border-zinc-200 bg-zinc-50/70 p-6 text-center">
      <p className="font-heading text-2xl font-semibold text-zinc-900">
        Selecione um relatório para começar
      </p>
      <p className="mt-2 max-w-[460px] text-sm text-zinc-500">
        Escolha um relatório na biblioteca para configurar filtros, gerar preview e exportar resultados.
      </p>
      <div className="mt-4 grid w-full max-w-[620px] grid-cols-1 gap-2 md:grid-cols-3">
        <button
          type="button"
          onClick={() => onOpenQuickReport("pipeline-performance")}
          className="rounded-[12px] border border-zinc-200 bg-white p-3 text-left transition-colors duration-120 hover:bg-zinc-50"
        >
          <p className="text-sm font-semibold text-zinc-900">Pipeline Performance</p>
          <p className="mt-1 text-xs text-zinc-500">Funil, conversão e gargalos</p>
        </button>
        <button
          type="button"
          onClick={() => onOpenQuickReport("sla-compliance")}
          className="rounded-[12px] border border-zinc-200 bg-white p-3 text-left transition-colors duration-120 hover:bg-zinc-50"
        >
          <p className="text-sm font-semibold text-zinc-900">SLA Compliance</p>
          <p className="mt-1 text-xs text-zinc-500">Cumprimento por etapa</p>
        </button>
        <button
          type="button"
          onClick={() => onOpenQuickReport("monthly-revenue")}
          className="rounded-[12px] border border-zinc-200 bg-white p-3 text-left transition-colors duration-120 hover:bg-zinc-50"
        >
          <p className="text-sm font-semibold text-zinc-900">Receita Mensal</p>
          <p className="mt-1 text-xs text-zinc-500">Meta vs realizado</p>
        </button>
      </div>
      <Button
        variant="outline"
        className="mt-4 rounded-full"
        onClick={onOpenLibrary}
      >
        Ver todos os relatórios
      </Button>
    </div>
  );
}

function ReportPreviewSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-[220px] rounded-[14px]" />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        <Skeleton className="h-[94px] rounded-[12px]" />
        <Skeleton className="h-[94px] rounded-[12px]" />
        <Skeleton className="h-[94px] rounded-[12px]" />
      </div>
      <Skeleton className="h-[220px] rounded-[14px]" />
      <Skeleton className="h-[170px] rounded-[14px]" />
    </div>
  );
}

function ReportsIntelligenceRail({
  selectedReport,
  template,
  runningCommand,
  commandResult,
  onRunCommand,
  onClose,
  onApplyRiskFilter,
  onApplySlaFilter,
  onApplyOwnerFilter,
  onGenerateSummary,
}: {
  selectedReport: ReportDefinition | null;
  template: ReportTemplate | null;
  runningCommand: string | null;
  commandResult: string | null;
  onRunCommand: (commandId: string, result: string, callback?: () => void) => void;
  onClose?: () => void;
  onApplyRiskFilter: () => void;
  onApplySlaFilter: () => void;
  onApplyOwnerFilter: () => void;
  onGenerateSummary: () => void;
}) {
  return (
    <div className="menux-intelligence-theme flex h-full min-h-0 flex-col overflow-hidden rounded-[20px] border border-slate-700/70 bg-[linear-gradient(145deg,#020817_0%,#03132b_56%,#0a2340_100%)] text-slate-100 shadow-[0_34px_52px_-36px_rgba(15,23,42,0.92)]">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-lg font-semibold">Menux Intelligence</h3>
            <p className="mt-0.5 text-xs text-cyan-100/80">
              {selectedReport ? `Análise de ${selectedReport.title}` : "Copiloto de interpretação"}
            </p>
          </div>
          {onClose ? (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-slate-300 hover:bg-white/10 hover:text-white"
              onClick={onClose}
              aria-label="Fechar Menux Intelligence"
            >
              <X className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
        <Button
          className="mt-3 h-8 w-full rounded-full border border-white/15 bg-white/10 text-xs text-slate-100 hover:bg-white/15"
          onClick={() =>
            onRunCommand("weekly-diagnosis", "Diagnóstico executivo gerado.", onGenerateSummary)
          }
          disabled={runningCommand === "weekly-diagnosis"}
        >
          {runningCommand === "weekly-diagnosis" ? (
            <span className="mr-2 h-3 w-3 animate-spin rounded-full border border-cyan-100 border-t-transparent" />
          ) : (
            <Bot className="mr-1.5 h-3.5 w-3.5" />
          )}
          Diagnóstico do relatório
        </Button>
      </div>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Interpretação
          </p>
          <p className="mt-1 text-xs text-slate-200">
            {template
              ? template.sentence
              : "Selecione e gere um relatório para receber interpretação acionável."}
          </p>
        </section>

        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Achados principais
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-200">
            {(template?.findings ?? ["Nenhum achado ainda. Gere o relatório para analisar dados."]).map(
              (finding, index) => (
                <li key={index} className="flex gap-1.5">
                  <Check className="mt-0.5 h-3.5 w-3.5 text-cyan-200" />
                  <span>{finding}</span>
                </li>
              )
            )}
          </ul>
        </section>

        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Comandos rápidos
          </p>
          <div className="mt-2 space-y-2">
            <IntelCommandButton
              label="Ver apenas etapa em risco"
              loading={runningCommand === "risk-only"}
              onClick={() =>
                onRunCommand(
                  "risk-only",
                  "Filtro aplicado: etapa em risco.",
                  onApplyRiskFilter
                )
              }
            />
            <IntelCommandButton
              label="Mostrar SLAs estourados"
              loading={runningCommand === "sla-breached"}
              onClick={() =>
                onRunCommand(
                  "sla-breached",
                  "Filtro aplicado: SLAs estourados.",
                  onApplySlaFilter
                )
              }
            />
            <IntelCommandButton
              label="Filtrar por responsável principal"
              loading={runningCommand === "owner-focus"}
              onClick={() =>
                onRunCommand(
                  "owner-focus",
                  "Filtro aplicado: responsável principal.",
                  onApplyOwnerFilter
                )
              }
            />
            <IntelCommandButton
              label="Exportar resumo executivo"
              loading={runningCommand === "executive-summary"}
              onClick={() =>
                onRunCommand(
                  "executive-summary",
                  "Resumo executivo exportado.",
                  onGenerateSummary
                )
              }
            />
          </div>
        </section>

        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Anomalias e perguntas
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-200">
            {(template?.anomalies ?? ["Sem anomalias detectadas até o momento."]).map(
              (anomaly, index) => (
                <li key={index}>• {anomaly}</li>
              )
            )}
          </ul>
          <div className="mt-2 border-t border-white/10 pt-2">
            <ul className="space-y-1 text-xs text-slate-300">
              {(template?.questions ?? ["Gere o relatório para destravar perguntas de investigação."]).map(
                (question, index) => (
                  <li key={index}>• {question}</li>
                )
              )}
            </ul>
          </div>
        </section>

        {commandResult ? (
          <div className="rounded-[12px] border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-100">
            {commandResult}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function IntelCommandButton({
  label,
  loading,
  onClick,
}: {
  label: string;
  loading: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="flex w-full items-center justify-between rounded-[10px] border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-slate-100 transition-colors duration-120 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
    >
      <span>{label}</span>
      {loading ? (
        <span className="h-3 w-3 animate-spin rounded-full border border-cyan-100 border-t-transparent" />
      ) : (
        <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
      )}
    </button>
  );
}

function SectionError({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="rounded-[14px] border border-red-200 bg-red-50/85 p-3 text-sm text-red-700">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <X className="h-4 w-4" />
          <span>{message}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-7 rounded-full border-red-200 bg-white text-red-700 hover:bg-red-50"
          onClick={onRetry}
        >
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}

function ReportsPageSkeleton() {
  return (
    <div className="flex h-[calc(100dvh-2rem)] min-h-0 w-full max-w-full flex-col gap-4">
      <div className="shrink-0 rounded-[20px] border border-zinc-200/80 bg-zinc-50/85 px-5 py-4">
        <Skeleton className="h-8 w-36" />
        <Skeleton className="mt-2 h-4 w-72" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Skeleton className="h-9 w-56 rounded-full" />
          <Skeleton className="h-9 w-44 rounded-full" />
          <Skeleton className="h-9 w-40 rounded-full" />
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(320px,0.4fr)_minmax(0,0.6fr)]">
        <div className="hidden min-h-0 overflow-hidden rounded-[20px] border border-zinc-200/80 bg-zinc-50/75 p-3 lg:block">
          <Skeleton className="h-full rounded-[16px]" />
        </div>
        <div className="min-h-0 overflow-hidden rounded-[20px] border border-zinc-200/80 bg-zinc-50/75 p-3">
          <Skeleton className="h-full rounded-[16px]" />
        </div>
      </div>
    </div>
  );
}
