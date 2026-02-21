(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/drawers/lead-negotiation-tab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NegotiationTab",
    ()=>NegotiationTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$pt$2d$BR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/pt-BR.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$compare$2d$arrows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCompareArrows$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-compare-arrows.js [app-client] (ecmascript) <export default as GitCompareArrows>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-client] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$negotiations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/negotiations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const LOGGED_USER = {
    id: "u1",
    name: "Maria Silva"
};
const TEAM_OWNERS = [
    {
        id: "u1",
        name: "Maria Silva"
    },
    {
        id: "u2",
        name: "Pedro Santos"
    },
    {
        id: "u3",
        name: "Julia Fernandes"
    }
];
const ROUND_EDIT_WINDOW_HOURS = 24;
const MIN_NOTES_LENGTH = 10;
const roundTypeMeta = {
    proposal: {
        label: "Proposta",
        badgeClass: "border-blue-200 bg-blue-50 text-blue-700",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    counter: {
        label: "Contra proposta",
        badgeClass: "border-amber-200 bg-amber-50 text-amber-700",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"]
    },
    internal: {
        label: "Ajuste interno",
        badgeClass: "border-zinc-200 bg-zinc-100 text-zinc-700",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"]
    },
    agreement: {
        label: "Fechamento",
        badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"]
    }
};
const lifecycleMeta = {
    draft: {
        label: "Rascunho",
        chipClass: "border-zinc-200 bg-zinc-100 text-zinc-600"
    },
    sent: {
        label: "Enviada",
        chipClass: "border-sky-200 bg-sky-50 text-sky-700"
    },
    awaiting: {
        label: "Aguardando cliente",
        chipClass: "border-violet-200 bg-violet-50 text-violet-700"
    },
    accepted: {
        label: "Aceita",
        chipClass: "border-emerald-200 bg-emerald-50 text-emerald-700"
    },
    rejected: {
        label: "Rejeitada",
        chipClass: "border-red-200 bg-red-50 text-red-700"
    }
};
const visibilityMeta = {
    client: {
        label: "Visível ao cliente",
        chipClass: "border-zinc-200 bg-zinc-50 text-zinc-600"
    },
    internal: {
        label: "Interna",
        chipClass: "border-zinc-200 bg-zinc-100 text-zinc-500"
    }
};
const channelOptions = [
    {
        id: "call",
        label: "Ligação"
    },
    {
        id: "whatsapp",
        label: "WhatsApp"
    },
    {
        id: "email",
        label: "E-mail"
    },
    {
        id: "meeting",
        label: "Reunião"
    },
    {
        id: "visit",
        label: "Visita"
    }
];
const roundTypeOptions = [
    {
        id: "proposal",
        label: "Proposta do time"
    },
    {
        id: "counter",
        label: "Contra proposta do cliente"
    },
    {
        id: "internal",
        label: "Ajuste interno"
    },
    {
        id: "agreement",
        label: "Fechamento"
    }
];
const lifecycleOptions = [
    {
        id: "draft",
        label: "Rascunho"
    },
    {
        id: "sent",
        label: "Enviada ao cliente"
    },
    {
        id: "awaiting",
        label: "Aguardando resposta"
    },
    {
        id: "accepted",
        label: "Aceita"
    },
    {
        id: "rejected",
        label: "Rejeitada"
    }
];
const formatCurrency = (value)=>new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value);
const toDateTimeLabel = (dateIso)=>{
    if (!dateIso) return "Sem data";
    const date = new Date(dateIso);
    if (Number.isNaN(date.getTime())) return "Sem data";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "dd MMM, HH:mm", {
        locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$pt$2d$BR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ptBR"]
    });
};
const toInputNumber = (raw)=>{
    const parsed = Number(raw);
    if (Number.isNaN(parsed)) return 0;
    return parsed;
};
const calcTotalValue = (monthlyValue, setupValue, termMonths)=>monthlyValue * termMonths + setupValue;
const isTermsRequired = (type)=>type === "proposal" || type === "counter" || type === "agreement";
const isTeamOfferCandidate = (round)=>(round.type === "proposal" || round.type === "agreement") && round.actorRole === "team" && round.visibility === "client";
const isRoundEditable = (round)=>{
    if (round.authorId !== LOGGED_USER.id) return false;
    if (round.lifecycleStatus !== "draft") return false;
    const createdAt = new Date(round.createdAt).getTime();
    if (Number.isNaN(createdAt)) return false;
    return Date.now() - createdAt <= ROUND_EDIT_WINDOW_HOURS * 60 * 60 * 1000;
};
const isRoundDeletable = (round)=>isRoundEditable(round) && !round.isFinal;
const createRoundId = ()=>`round-${Date.now()}-${Math.floor(Math.random() * 999)}`;
const nowIso = ()=>new Date().toISOString();
function downloadTextFile(fileName, content) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const blob = new Blob([
        content
    ], {
        type: "text/plain;charset=utf-8"
    });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = fileName;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
}
function buildInitialRounds() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$negotiations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockNegotiationRounds"].map((round)=>{
        if (round.type === "counter") {
            return {
                ...round,
                actorRole: "client",
                visibility: "client",
                lifecycleStatus: "awaiting",
                sentAt: round.createdAt
            };
        }
        if (round.type === "internal") {
            return {
                ...round,
                actorRole: "team",
                visibility: "internal",
                lifecycleStatus: "draft"
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
                isFinal: true
            };
        }
        return {
            ...round,
            actorRole: "team",
            visibility: "client",
            lifecycleStatus: "sent",
            sentAt: round.createdAt
        };
    });
}
function deriveCurrentTermsRoundId(rounds) {
    const ordered = [
        ...rounds
    ].sort((a, b)=>new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    const accepted = [
        ...ordered
    ].reverse().find((round)=>isTeamOfferCandidate(round) && round.lifecycleStatus === "accepted");
    if (accepted) return accepted.id;
    const sentOrAwaiting = [
        ...ordered
    ].reverse().find((round)=>isTeamOfferCandidate(round) && (round.lifecycleStatus === "sent" || round.lifecycleStatus === "awaiting"));
    return sentOrAwaiting?.id ?? null;
}
function deriveNegotiationStatus(rounds, currentTermsRoundId) {
    if (rounds.length === 0) {
        return {
            label: "Não iniciada",
            description: "Nenhuma rodada registrada até agora.",
            tone: "neutral"
        };
    }
    const accepted = rounds.find((round)=>round.lifecycleStatus === "accepted");
    if (accepted) {
        return {
            label: "Aceita",
            description: "Rodada aceita pelo cliente. Pronta para fechamento.",
            tone: "success"
        };
    }
    const currentRound = rounds.find((round)=>round.id === currentTermsRoundId);
    if (currentRound?.lifecycleStatus === "awaiting" || currentRound?.lifecycleStatus === "sent") {
        return {
            label: "Aguardando cliente",
            description: `Aguardando resposta da rodada vigente enviada em ${toDateTimeLabel(currentRound.sentAt)}.`,
            tone: "warning"
        };
    }
    return {
        label: "Em negociação",
        description: "Negociação ativa com ajustes internos e respostas em andamento.",
        tone: "info"
    };
}
function toRoundFormSeed(round) {
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
            rejectedReason: ""
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
        rejectedReason: round.rejectedReason ?? ""
    };
}
function extractTerms(round) {
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
        sourceVisibility: round.visibility
    };
}
function buildSummaryText(dealTitle, terms, rounds) {
    const relevantRounds = rounds.filter((round)=>round.visibility === "client" && round.type !== "internal");
    const lines = relevantRounds.map((round, index)=>{
        const typeLabel = roundTypeMeta[round.type].label;
        const statusLabel = lifecycleMeta[round.lifecycleStatus].label;
        return `${index + 1}. ${typeLabel} | ${statusLabel} | Mensal ${formatCurrency(round.monthlyValue ?? 0)} | Setup ${formatCurrency(round.setupValue ?? 0)} | ${round.termMonths ?? 12} meses`;
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
        ...lines
    ].join("\n");
}
function NegotiationTab({ dealId, dealTitle }) {
    _s();
    const initialRounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NegotiationTab.useMemo[initialRounds]": ()=>buildInitialRounds()
    }["NegotiationTab.useMemo[initialRounds]"], []);
    const [rounds, setRounds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialRounds);
    const [isFormOpen, setIsFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formMode, setFormMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("create");
    const [formSeed, setFormSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(toRoundFormSeed());
    const [editingRoundId, setEditingRoundId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSavingRound, setIsSavingRound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentTermsRoundId, setCurrentTermsRoundId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(deriveCurrentTermsRoundId(initialRounds));
    const [rowActionLoading, setRowActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [banner, setBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exportError, setExportError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [exportSummaryText, setExportSummaryText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nextStep, setNextStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        action: "Validar retorno do cliente sobre a proposta vigente",
        dueAt: "",
        channel: "whatsapp",
        ownerId: LOGGED_USER.id
    });
    const [nextStepState, setNextStepState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [nextStepError, setNextStepError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [highlightRoundId, setHighlightRoundId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [highlightNextStep, setHighlightNextStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const orderedRounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NegotiationTab.useMemo[orderedRounds]": ()=>[
                ...rounds
            ].sort({
                "NegotiationTab.useMemo[orderedRounds]": (a, b)=>new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            }["NegotiationTab.useMemo[orderedRounds]"])
    }["NegotiationTab.useMemo[orderedRounds]"], [
        rounds
    ]);
    const currentTermsRound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NegotiationTab.useMemo[currentTermsRound]": ()=>orderedRounds.find({
                "NegotiationTab.useMemo[currentTermsRound]": (round)=>round.id === currentTermsRoundId
            }["NegotiationTab.useMemo[currentTermsRound]"]) ?? null
    }["NegotiationTab.useMemo[currentTermsRound]"], [
        orderedRounds,
        currentTermsRoundId
    ]);
    const currentTermsRoundNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NegotiationTab.useMemo[currentTermsRoundNumber]": ()=>{
            if (!currentTermsRound) return null;
            const index = orderedRounds.findIndex({
                "NegotiationTab.useMemo[currentTermsRoundNumber].index": (round)=>round.id === currentTermsRound.id
            }["NegotiationTab.useMemo[currentTermsRoundNumber].index"]);
            return index >= 0 ? index + 1 : null;
        }
    }["NegotiationTab.useMemo[currentTermsRoundNumber]"], [
        currentTermsRound,
        orderedRounds
    ]);
    const currentTerms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NegotiationTab.useMemo[currentTerms]": ()=>extractTerms(currentTermsRound)
    }["NegotiationTab.useMemo[currentTerms]"], [
        currentTermsRound
    ]);
    const latestTeamOffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NegotiationTab.useMemo[latestTeamOffer]": ()=>[
                ...orderedRounds
            ].reverse().find({
                "NegotiationTab.useMemo[latestTeamOffer]": (round)=>isTeamOfferCandidate(round)
            }["NegotiationTab.useMemo[latestTeamOffer]"]) ?? null
    }["NegotiationTab.useMemo[latestTeamOffer]"], [
        orderedRounds
    ]);
    const latestClientCounter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NegotiationTab.useMemo[latestClientCounter]": ()=>[
                ...orderedRounds
            ].reverse().find({
                "NegotiationTab.useMemo[latestClientCounter]": (round)=>round.type === "counter"
            }["NegotiationTab.useMemo[latestClientCounter]"]) ?? null
    }["NegotiationTab.useMemo[latestClientCounter]"], [
        orderedRounds
    ]);
    const negotiationStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NegotiationTab.useMemo[negotiationStatus]": ()=>deriveNegotiationStatus(orderedRounds, currentTermsRoundId)
    }["NegotiationTab.useMemo[negotiationStatus]"], [
        orderedRounds,
        currentTermsRoundId
    ]);
    const runRowAction = async (roundId, action, callback, onErrorMessage)=>{
        setRowActionLoading((prev)=>({
                ...prev,
                [roundId]: action
            }));
        try {
            await new Promise((resolve)=>setTimeout(resolve, 220));
            callback();
        } catch  {
            setBanner({
                type: "error",
                message: onErrorMessage
            });
        } finally{
            setRowActionLoading((prev)=>({
                    ...prev,
                    [roundId]: null
                }));
        }
    };
    const pushBanner = (next)=>{
        setBanner(next);
        window.setTimeout(()=>setBanner(null), 2200);
    };
    const pulseRound = (roundId)=>{
        setHighlightRoundId(roundId);
        window.setTimeout(()=>{
            setHighlightRoundId((prev)=>prev === roundId ? null : prev);
        }, 1800);
    };
    const scrollToRound = (roundId)=>{
        const target = document.querySelector(`[data-round-anchor="${roundId}"]`);
        if (target instanceof HTMLElement) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            pulseRound(roundId);
        }
    };
    const focusNextStepCard = ()=>{
        const target = document.querySelector('[data-next-step-card="true"]');
        if (target instanceof HTMLElement) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            setHighlightNextStep(true);
            window.setTimeout(()=>setHighlightNextStep(false), 1600);
        }
    };
    const openCreateRound = (sourceRound)=>{
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
            rejectedReason: ""
        });
        setIsFormOpen(true);
    };
    const openEditRound = (round)=>{
        if (!isRoundEditable(round)) {
            pushBanner({
                type: "warning",
                message: "Você só pode editar rodadas próprias em rascunho dentro da janela de 24h."
            });
            return;
        }
        setFormMode("edit");
        setEditingRoundId(round.id);
        setFormError(null);
        setFormSeed(toRoundFormSeed(round));
        setIsFormOpen(true);
    };
    const closeForm = ()=>{
        setIsFormOpen(false);
        setFormError(null);
        setEditingRoundId(null);
        setFormSeed(toRoundFormSeed());
    };
    const handleSaveRound = async (payload)=>{
        setIsSavingRound(true);
        setFormError(null);
        try {
            await new Promise((resolve)=>setTimeout(resolve, 250));
            if (formMode === "edit" && editingRoundId) {
                setRounds((prev)=>prev.map((round)=>{
                        if (round.id !== editingRoundId) return round;
                        const totalValue = calcTotalValue(payload.monthlyValue, payload.setupValue, payload.termMonths);
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
                            sentAt: payload.lifecycleStatus === "sent" || payload.lifecycleStatus === "awaiting" || payload.lifecycleStatus === "accepted" ? round.sentAt ?? nowIso() : undefined,
                            acceptedAt: payload.lifecycleStatus === "accepted" ? round.acceptedAt ?? nowIso() : undefined,
                            rejectedAt: payload.lifecycleStatus === "rejected" ? round.rejectedAt ?? nowIso() : undefined,
                            updatedAt: nowIso()
                        };
                    }));
                const shouldPromoteTerms = payload.lifecycleStatus === "accepted" && payload.actorRole === "team" && payload.visibility === "client" && (payload.type === "proposal" || payload.type === "agreement");
                if (shouldPromoteTerms) {
                    setCurrentTermsRoundId(editingRoundId);
                    pulseRound(editingRoundId);
                }
                pushBanner({
                    type: "success",
                    message: "Rodada atualizada com sucesso."
                });
            } else {
                const createdAt = nowIso();
                const totalValue = calcTotalValue(payload.monthlyValue, payload.setupValue, payload.termMonths);
                const newRound = {
                    id: createRoundId(),
                    opportunityId: dealId,
                    type: payload.type,
                    authorId: payload.actorRole === "team" ? LOGGED_USER.id : "client-user",
                    authorName: payload.actorRole === "team" ? `${LOGGED_USER.name} - Equipe` : "Cliente - Cliente",
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
                    rejectedReason: payload.lifecycleStatus === "rejected" ? payload.rejectedReason : undefined,
                    sentAt: payload.lifecycleStatus === "sent" || payload.lifecycleStatus === "awaiting" || payload.lifecycleStatus === "accepted" ? createdAt : undefined,
                    acceptedAt: payload.lifecycleStatus === "accepted" ? createdAt : undefined,
                    rejectedAt: payload.lifecycleStatus === "rejected" ? createdAt : undefined,
                    status: "active"
                };
                setRounds((prev)=>[
                        ...prev,
                        newRound
                    ]);
                if (newRound.lifecycleStatus === "accepted" && isTeamOfferCandidate(newRound)) {
                    setCurrentTermsRoundId(newRound.id);
                    pulseRound(newRound.id);
                }
                pushBanner({
                    type: "success",
                    message: "Rodada registrada. Histórico e resumo atualizados."
                });
            }
            closeForm();
        } catch  {
            setFormError("Não consegui salvar a rodada. Revise os campos e tente novamente.");
        } finally{
            setIsSavingRound(false);
        }
    };
    const handleMarkRoundSent = async (round)=>{
        if (!isTeamOfferCandidate(round)) {
            pushBanner({
                type: "warning",
                message: "Somente propostas visíveis ao cliente podem ser enviadas."
            });
            return;
        }
        if (round.lifecycleStatus !== "draft") {
            pushBanner({
                type: "warning",
                message: "Apenas rodadas em rascunho podem ser enviadas."
            });
            return;
        }
        if (!window.confirm("Confirmar envio desta rodada ao cliente?")) return;
        await runRowAction(round.id, "send", ()=>{
            setRounds((prev)=>prev.map((item)=>item.id === round.id ? {
                        ...item,
                        lifecycleStatus: "sent",
                        sentAt: nowIso(),
                        updatedAt: nowIso()
                    } : item));
            pushBanner({
                type: "success",
                message: "Rodada enviada ao cliente e pronta para acompanhamento."
            });
        }, "Não consegui marcar a rodada como enviada.");
    };
    const handleMarkRoundAwaiting = async (round)=>{
        if (round.lifecycleStatus !== "sent") return;
        await runRowAction(round.id, "awaiting", ()=>{
            setRounds((prev)=>prev.map((item)=>item.id === round.id ? {
                        ...item,
                        lifecycleStatus: "awaiting",
                        updatedAt: nowIso()
                    } : item));
            pushBanner({
                type: "info",
                message: "Status atualizado para aguardando resposta do cliente."
            });
        }, "Não consegui atualizar o status da rodada.");
    };
    const handleMarkRoundAccepted = async (round)=>{
        if (!window.confirm("Confirmar esta rodada como aceita?")) return;
        await runRowAction(round.id, "accept", ()=>{
            setRounds((prev)=>prev.map((item)=>item.id === round.id ? {
                        ...item,
                        lifecycleStatus: "accepted",
                        acceptedAt: nowIso(),
                        updatedAt: nowIso()
                    } : item));
            if (isTeamOfferCandidate(round)) {
                setCurrentTermsRoundId(round.id);
                pulseRound(round.id);
            }
            pushBanner({
                type: "success",
                message: isTeamOfferCandidate(round) ? "Rodada aceita e promovida para termos vigentes." : "Rodada aceita com sucesso."
            });
        }, "Não consegui marcar a rodada como aceita.");
    };
    const handleMarkRoundRejected = async (round)=>{
        const reason = window.prompt("Informe o motivo da rejeição (mínimo 5 caracteres):");
        if (!reason || reason.trim().length < 5) {
            pushBanner({
                type: "warning",
                message: "Motivo obrigatório para rejeitar a rodada."
            });
            return;
        }
        await runRowAction(round.id, "reject", ()=>{
            setRounds((prev)=>prev.map((item)=>item.id === round.id ? {
                        ...item,
                        lifecycleStatus: "rejected",
                        rejectedAt: nowIso(),
                        rejectedReason: reason.trim(),
                        updatedAt: nowIso()
                    } : item));
            pushBanner({
                type: "warning",
                message: "Rodada marcada como rejeitada."
            });
        }, "Não consegui rejeitar a rodada.");
    };
    const handleSetCurrentTerms = async (round)=>{
        if (!isTeamOfferCandidate(round)) {
            pushBanner({
                type: "warning",
                message: "Somente proposta do time visível ao cliente pode virar termo vigente."
            });
            return;
        }
        await runRowAction(round.id, "set-current", ()=>{
            setCurrentTermsRoundId(round.id);
            pulseRound(round.id);
            pushBanner({
                type: "success",
                message: `Rodada ${round.id} definida como fonte dos termos vigentes.`
            });
        }, "Não consegui definir os termos vigentes desta rodada.");
    };
    const handleDeleteRound = async (round)=>{
        if (!isRoundDeletable(round)) {
            pushBanner({
                type: "warning",
                message: "Você só pode excluir rodadas próprias em rascunho dentro da janela permitida."
            });
            return;
        }
        if (!window.confirm("Excluir esta rodada? Esta ação remove o item do histórico.")) return;
        await runRowAction(round.id, "delete", ()=>{
            setRounds((prev)=>{
                const nextRounds = prev.filter((item)=>item.id !== round.id);
                if (currentTermsRoundId === round.id) {
                    setCurrentTermsRoundId(deriveCurrentTermsRoundId(nextRounds));
                }
                return nextRounds;
            });
            pushBanner({
                type: "success",
                message: "Rodada excluída com sucesso."
            });
        }, "Não consegui excluir a rodada.");
    };
    const handleExportSummary = async ()=>{
        if (!currentTerms) {
            setExportError("Export bloqueado. Defina termos vigentes antes de exportar.");
            pushBanner({
                type: "warning",
                message: "Defina os termos vigentes para gerar um resumo confiável."
            });
            return;
        }
        setIsExporting(true);
        setExportError(null);
        try {
            await new Promise((resolve)=>setTimeout(resolve, 260));
            const summaryText = buildSummaryText(dealTitle, currentTerms, orderedRounds);
            setExportSummaryText(summaryText);
            downloadTextFile(`negociacao-${dealId}.txt`, summaryText);
            pushBanner({
                type: "success",
                message: "Resumo exportado com base nos termos vigentes."
            });
        } catch  {
            setExportError("Não consegui gerar o resumo. Tente novamente.");
        } finally{
            setIsExporting(false);
        }
    };
    const handleCopySummary = async ()=>{
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
                message: "Resumo copiado para a área de transferência."
            });
        } catch  {
            pushBanner({
                type: "error",
                message: "Não consegui copiar o resumo."
            });
        }
    };
    const handleSaveNextStep = async ()=>{
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
            await new Promise((resolve)=>setTimeout(resolve, 220));
            setNextStepState("saved");
            pushBanner({
                type: "success",
                message: "Próximo passo salvo com sucesso."
            });
            window.setTimeout(()=>setNextStepState("idle"), 1600);
        } catch  {
            setNextStepState("error");
            setNextStepError("Não consegui salvar o próximo passo. Tente novamente.");
        }
    };
    const handleOpenClientReturn = ()=>{
        setFormMode("create");
        setEditingRoundId(null);
        setFormError(null);
        setFormSeed({
            type: "counter",
            actorRole: "client",
            visibility: "client",
            lifecycleStatus: "awaiting",
            monthlyValue: String(latestClientCounter?.monthlyValue ?? currentTerms?.monthlyValue ?? latestTeamOffer?.monthlyValue ?? 0),
            setupValue: String(latestClientCounter?.setupValue ?? currentTerms?.setupValue ?? latestTeamOffer?.setupValue ?? 0),
            termMonths: String(latestClientCounter?.termMonths ?? currentTerms?.termMonths ?? latestTeamOffer?.termMonths ?? 12),
            notes: "",
            conditionsText: "",
            rejectedReason: ""
        });
        setIsFormOpen(true);
    };
    const statusToneClass = negotiationStatus.tone === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : negotiationStatus.tone === "warning" ? "border-amber-200 bg-amber-50 text-amber-700" : negotiationStatus.tone === "info" ? "border-sky-200 bg-sky-50 text-sky-700" : "border-zinc-200 bg-zinc-100 text-zinc-600";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        "data-deal-id": dealId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "space-y-4 border-b border-zinc-100 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-start justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-8 w-8 items-center justify-center rounded-lg border border-violet-200 bg-violet-50 text-violet-700",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                    lineNumber: 1043,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1042,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-heading text-lg font-semibold text-zinc-900",
                                                children: "Negociação"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1041,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "pl-10 text-sm text-zinc-500",
                                        children: "Rodadas, termos vigentes e próximo passo em uma única execução."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1047,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1040,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        className: "h-8 gap-1.5 rounded-full text-xs",
                                        onClick: handleExportSummary,
                                        disabled: isExporting,
                                        children: [
                                            isExporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-3.5 w-3.5 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1060,
                                                columnNumber: 30
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1060,
                                                columnNumber: 81
                                            }, this),
                                            isExporting ? "Gerando..." : "Exportar resumo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1053,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        className: "h-8 gap-1.5 rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800",
                                        onClick: ()=>openCreateRound(latestTeamOffer),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1068,
                                                columnNumber: 15
                                            }, this),
                                            "Nova rodada"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1063,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1052,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1039,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-medium", statusToneClass),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1076,
                                        columnNumber: 13
                                    }, this),
                                    negotiationStatus.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1075,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-500",
                                children: negotiationStatus.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1079,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1074,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1038,
                columnNumber: 7
            }, this),
            banner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border px-3 py-2 text-xs font-medium", banner.type === "success" && "border-emerald-200 bg-emerald-50 text-emerald-700", banner.type === "error" && "border-red-200 bg-red-50 text-red-700", banner.type === "warning" && "border-amber-200 bg-amber-50 text-amber-700", banner.type === "info" && "border-sky-200 bg-sky-50 text-sky-700"),
                role: "status",
                children: banner.message
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1084,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 items-start gap-5 lg:grid-cols-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 lg:col-span-8 lg:min-h-[calc(100vh-24rem)] lg:space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isFormOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: -8
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -6
                                    },
                                    transition: {
                                        duration: 0.16
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NegotiationRoundForm, {
                                        mode: formMode,
                                        seed: formSeed,
                                        isSaving: isSavingRound,
                                        errorMessage: formError,
                                        onCancel: closeForm,
                                        onSave: handleSaveRound
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1108,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                    lineNumber: 1102,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1100,
                                columnNumber: 11
                            }, this),
                            orderedRounds.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                                onStart: ()=>openCreateRound()
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1121,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative space-y-2.5 rounded-2xl border border-zinc-200 bg-white p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-3 left-[1.35rem] top-3 w-px bg-zinc-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1124,
                                        columnNumber: 15
                                    }, this),
                                    orderedRounds.map((round, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NegotiationRoundCard, {
                                            round: round,
                                            displayIndex: index + 1,
                                            isCurrentTerms: round.id === currentTermsRoundId,
                                            isLast: index === orderedRounds.length - 1,
                                            isHighlighted: highlightRoundId === round.id,
                                            loadingAction: rowActionLoading[round.id] ?? null,
                                            onEdit: openEditRound,
                                            onDelete: handleDeleteRound,
                                            onSend: handleMarkRoundSent,
                                            onAwaiting: handleMarkRoundAwaiting,
                                            onAccept: handleMarkRoundAccepted,
                                            onReject: handleMarkRoundRejected,
                                            onSetCurrent: handleSetCurrentTerms,
                                            onCreateFromRound: (item)=>openCreateRound(item)
                                        }, round.id, false, {
                                            fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                            lineNumber: 1127,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NegotiationExecutionCard, {
                                hasRounds: orderedRounds.length > 0,
                                hasCurrentTerms: Boolean(currentTerms),
                                sourceRound: currentTermsRound,
                                hasClientCounter: Boolean(latestClientCounter),
                                nextStep: nextStep,
                                onCreateRound: ()=>openCreateRound(latestTeamOffer ?? currentTermsRound),
                                onExport: handleExportSummary,
                                onRegisterClientReturn: handleOpenClientReturn,
                                onFocusNextStep: focusNextStepCard,
                                isExporting: isExporting
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1099,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 lg:col-span-4 lg:sticky lg:top-4 lg:self-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentTermsCard, {
                                terms: currentTerms,
                                sourceRound: currentTermsRound,
                                sourceRoundNumber: currentTermsRoundNumber,
                                onJumpToSourceRound: scrollToRound,
                                onCreateFromCurrent: ()=>openCreateRound(currentTermsRound)
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NegotiationComparisonCard, {
                                currentOfferRound: currentTermsRound ?? latestTeamOffer,
                                lastClientCounter: latestClientCounter
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NextStepCard, {
                                draft: nextStep,
                                saveState: nextStepState,
                                errorMessage: nextStepError,
                                onChange: setNextStep,
                                onSave: handleSaveNextStep,
                                highlighted: highlightNextStep
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-heading text-sm font-semibold text-zinc-900",
                                                children: "Resumo para envio"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-zinc-500",
                                                children: "O export usa os termos vigentes e ignora rodadas internas por padrão."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "outline",
                                                size: "sm",
                                                className: "h-8 gap-1.5 rounded-full text-xs",
                                                onClick: handleExportSummary,
                                                disabled: isExporting,
                                                children: [
                                                    isExporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-3.5 w-3.5 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 1202,
                                                        columnNumber: 32
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 1202,
                                                        columnNumber: 83
                                                    }, this),
                                                    "Exportar"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1194,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "ghost",
                                                size: "sm",
                                                className: "h-8 gap-1.5 rounded-full text-xs text-zinc-600 hover:bg-zinc-100",
                                                onClick: handleCopySummary,
                                                disabled: !exportSummaryText,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 1213,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Copiar texto"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1205,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1193,
                                        columnNumber: 13
                                    }, this),
                                    exportError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-red-600",
                                        children: exportError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1219,
                                        columnNumber: 15
                                    }, this) : null,
                                    exportSummaryText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-emerald-700",
                                        children: "Resumo pronto para compartilhamento."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1222,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1098,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
        lineNumber: 1037,
        columnNumber: 5
    }, this);
}
_s(NegotiationTab, "uAme3xV/HfkhvRsYuUQnOhFnm6Y=");
_c = NegotiationTab;
function CurrentTermsCard({ terms, sourceRound, sourceRoundNumber, onJumpToSourceRound, onCreateFromCurrent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-zinc-200 bg-white p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-heading text-sm font-semibold text-zinc-900",
                        children: "Termos vigentes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-500",
                        children: "Fonte de verdade para resumo e decisão de fechamento."
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1246,
                columnNumber: 7
            }, this),
            !terms || !sourceRound ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-zinc-600",
                    children: "Ainda não existem termos vigentes. Defina uma rodada do time como vigente."
                }, void 0, false, {
                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                    lineNumber: 1255,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1254,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                label: "Mensal",
                                value: formatCurrency(terms.monthlyValue)
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1262,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                label: "Setup",
                                value: formatCurrency(terms.setupValue)
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                label: "Prazo",
                                value: `${terms.termMonths} meses`
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1264,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                label: "Total",
                                value: formatCurrency(terms.totalValue)
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1265,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1261,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2 text-[11px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onJumpToSourceRound(sourceRound.id),
                                className: "inline-flex h-6 items-center rounded-full border border-zinc-200 bg-zinc-100 px-2 text-[11px] font-medium text-zinc-700 transition-colors hover:border-brand/30 hover:text-brand",
                                children: [
                                    "Rodada fonte: ",
                                    sourceRoundNumber ? `Rodada ${sourceRoundNumber}` : sourceRound.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1269,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border", lifecycleMeta[sourceRound.lifecycleStatus].chipClass),
                                children: lifecycleMeta[sourceRound.lifecycleStatus].label
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1276,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border", visibilityMeta[sourceRound.visibility].chipClass),
                                children: visibilityMeta[sourceRound.visibility].label
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1279,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1268,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-zinc-500",
                        children: [
                            "Atualizado por ",
                            terms.updatedBy,
                            " em ",
                            toDateTimeLabel(terms.updatedAt),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1284,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1260,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "outline",
                size: "sm",
                className: "mt-4 h-8 w-full gap-1.5 rounded-full text-xs",
                onClick: onCreateFromCurrent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1297,
                        columnNumber: 9
                    }, this),
                    "Nova rodada baseada na última oferta"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
        lineNumber: 1245,
        columnNumber: 5
    }, this);
}
_c1 = CurrentTermsCard;
function StatCard({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-zinc-200 bg-zinc-50/80 p-2.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-semibold uppercase tracking-wide text-zinc-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm font-semibold text-zinc-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1308,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
        lineNumber: 1306,
        columnNumber: 5
    }, this);
}
_c2 = StatCard;
function NegotiationComparisonCard({ currentOfferRound, lastClientCounter }) {
    const deltaMonthly = (lastClientCounter?.monthlyValue ?? 0) - (currentOfferRound?.monthlyValue ?? 0);
    const deltaSetup = (lastClientCounter?.setupValue ?? 0) - (currentOfferRound?.setupValue ?? 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-zinc-200 bg-white p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$compare$2d$arrows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCompareArrows$3e$__["GitCompareArrows"], {
                        className: "h-4 w-4 text-zinc-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-heading text-sm font-semibold text-zinc-900",
                        children: "Comparador de negociação"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-zinc-200 bg-zinc-50/80 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-semibold uppercase tracking-wide text-zinc-500",
                                children: "Nossa última oferta"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm font-semibold text-zinc-900",
                                children: [
                                    currentOfferRound ? formatCurrency(currentOfferRound.monthlyValue ?? 0) : "--",
                                    " /mês"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-zinc-500",
                                children: [
                                    "Setup ",
                                    currentOfferRound ? formatCurrency(currentOfferRound.setupValue ?? 0) : "--"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1340,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-amber-200 bg-amber-50/70 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-semibold uppercase tracking-wide text-amber-700",
                                children: "Última contra proposta do cliente"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm font-semibold text-amber-900",
                                children: [
                                    lastClientCounter ? formatCurrency(lastClientCounter.monthlyValue ?? 0) : "--",
                                    " /mês"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-amber-700",
                                children: [
                                    "Setup ",
                                    lastClientCounter ? formatCurrency(lastClientCounter.setupValue ?? 0) : "--"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1352,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1332,
                columnNumber: 7
            }, this),
            currentOfferRound && lastClientCounter ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 grid grid-cols-2 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-zinc-200 bg-white p-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] uppercase tracking-wide text-zinc-500",
                                children: "Delta mensal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1361,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1 text-sm font-semibold", deltaMonthly <= 0 ? "text-emerald-700" : "text-amber-700"),
                                children: [
                                    deltaMonthly > 0 ? "+" : "",
                                    formatCurrency(deltaMonthly)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1362,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1360,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-zinc-200 bg-white p-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] uppercase tracking-wide text-zinc-500",
                                children: "Delta setup"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1368,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1 text-sm font-semibold", deltaSetup <= 0 ? "text-emerald-700" : "text-amber-700"),
                                children: [
                                    deltaSetup > 0 ? "+" : "",
                                    formatCurrency(deltaSetup)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1369,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1367,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1359,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-xs text-zinc-500",
                children: "Registre ao menos uma proposta do time e uma contra proposta do cliente para comparar."
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1376,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
        lineNumber: 1326,
        columnNumber: 5
    }, this);
}
_c3 = NegotiationComparisonCard;
function NextStepCard({ draft, saveState, errorMessage, onChange, onSave, highlighted }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-200", highlighted && "ring-2 ring-brand/30"),
        "data-next-step-card": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                        className: "h-4 w-4 text-zinc-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1408,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-heading text-sm font-semibold text-zinc-900",
                        children: "Próximo passo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1409,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1407,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-zinc-500",
                children: "Defina ação, data, canal e responsável para manter a negociação no ritmo."
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1411,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                children: "Ação"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1417,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: draft.action,
                                onChange: (event)=>onChange({
                                        ...draft,
                                        action: event.target.value
                                    }),
                                className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                placeholder: "Ex.: Ligar para validar objeção de setup"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1420,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1416,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                        children: "Data"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1430,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "date",
                                        value: draft.dueAt,
                                        onChange: (event)=>onChange({
                                                ...draft,
                                                dueAt: event.target.value
                                            }),
                                        className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1433,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                        children: "Canal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1442,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: draft.channel,
                                        onValueChange: (value)=>onChange({
                                                ...draft,
                                                channel: value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                    lineNumber: 1452,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1451,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: channelOptions.map((channel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: channel.id,
                                                        children: channel.label
                                                    }, channel.id, false, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 1456,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1454,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1445,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1441,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1428,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                children: "Responsável"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1466,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: draft.ownerId,
                                onValueChange: (value)=>onChange({
                                        ...draft,
                                        ownerId: value
                                    }),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                            fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                            lineNumber: 1474,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1473,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: TEAM_OWNERS.map((owner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: owner.id,
                                                children: owner.name
                                            }, owner.id, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1478,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1476,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1469,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1465,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        size: "sm",
                        className: "h-8 w-full rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800",
                        onClick: onSave,
                        disabled: saveState === "saving",
                        children: saveState === "saving" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "mr-1.5 h-3.5 w-3.5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                    lineNumber: 1495,
                                    columnNumber: 15
                                }, this),
                                "Salvando..."
                            ]
                        }, void 0, true) : "Salvar próximo passo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1486,
                        columnNumber: 9
                    }, this),
                    saveState === "saved" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-emerald-700",
                        children: "Próximo passo salvo."
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1504,
                        columnNumber: 11
                    }, this) : null,
                    saveState === "error" && errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-600",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1507,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1415,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
        lineNumber: 1400,
        columnNumber: 5
    }, this);
}
_c4 = NextStepCard;
function NegotiationExecutionCard({ hasRounds, hasCurrentTerms, sourceRound, hasClientCounter, nextStep, onCreateRound, onExport, onRegisterClientReturn, onFocusNextStep, isExporting }) {
    const nextStepReady = nextStep.action.trim().length >= 4 && Boolean(nextStep.dueAt);
    const dueAtDate = nextStep.dueAt ? new Date(`${nextStep.dueAt}T00:00:00`) : null;
    const dueAtLabel = dueAtDate && !Number.isNaN(dueAtDate.getTime()) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dueAtDate, "dd MMM", {
        locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$pt$2d$BR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ptBR"]
    }) : "Sem data";
    const sourceSent = sourceRound?.visibility === "client" && (sourceRound.lifecycleStatus === "sent" || sourceRound.lifecycleStatus === "awaiting" || sourceRound.lifecycleStatus === "accepted");
    const checklistItems = [
        {
            id: "terms",
            label: "Termos vigentes definidos",
            done: hasCurrentTerms
        },
        {
            id: "source",
            label: "Rodada vigente enviada ao cliente",
            done: sourceSent
        },
        {
            id: "counter",
            label: "Retorno do cliente registrado",
            done: hasClientCounter
        },
        {
            id: "next-step",
            label: "Próximo passo com data",
            done: nextStepReady
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-2xl border border-zinc-200 bg-white p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-heading text-sm font-semibold text-zinc-900",
                                children: "Execução da negociação"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1576,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-zinc-500",
                                children: "Fechamento visual da timeline com checklist e ações rápidas da rodada vigente."
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1577,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1575,
                        columnNumber: 9
                    }, this),
                    !hasRounds ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        className: "border-zinc-200 bg-zinc-100 text-[10px] text-zinc-600",
                        children: "Sem rodadas"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1582,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1574,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 rounded-xl border border-zinc-200 bg-zinc-50/80 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium text-zinc-800",
                                children: "Próximo passo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1588,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-[11px] font-medium text-brand transition-colors hover:text-brand/80",
                                onClick: onFocusNextStep,
                                children: "Editar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1589,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1587,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-zinc-600",
                        children: nextStepReady ? `${nextStep.action} · ${dueAtLabel} · ${channelOptions.find((channel)=>channel.id === nextStep.channel)?.label ?? "Canal"}` : "Defina ação, data e canal para não perder o timing da negociação."
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1597,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 grid gap-2 sm:grid-cols-2",
                children: checklistItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 rounded-lg border px-2.5 py-2", item.done ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-zinc-200 bg-zinc-50 text-zinc-600"),
                        children: [
                            item.done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1618,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1620,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-medium",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1622,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1608,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1606,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        size: "sm",
                        className: "h-8 rounded-full bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800",
                        onClick: onCreateRound,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "mr-1.5 h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1634,
                                columnNumber: 11
                            }, this),
                            "Nova rodada"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1628,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        size: "sm",
                        variant: "outline",
                        className: "h-8 rounded-full px-3 text-xs",
                        onClick: onRegisterClientReturn,
                        children: "Registrar retorno do cliente"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1637,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        size: "sm",
                        variant: "outline",
                        className: "h-8 rounded-full px-3 text-xs",
                        onClick: onExport,
                        disabled: isExporting,
                        children: [
                            isExporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "mr-1.5 h-3.5 w-3.5 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1654,
                                columnNumber: 26
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "mr-1.5 h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1654,
                                columnNumber: 84
                            }, this),
                            "Exportar resumo"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1646,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1627,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
        lineNumber: 1573,
        columnNumber: 5
    }, this);
}
_c5 = NegotiationExecutionCard;
function NegotiationRoundCard({ round, displayIndex, isCurrentTerms, isLast, isHighlighted, loadingAction, onEdit, onDelete, onSend, onAwaiting, onAccept, onReject, onSetCurrent, onCreateFromRound }) {
    _s1();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isLast);
    const typeMeta = roundTypeMeta[round.type];
    const TypeIcon = typeMeta.icon;
    const canSend = isTeamOfferCandidate(round) && round.lifecycleStatus === "draft";
    const canAwaiting = round.lifecycleStatus === "sent";
    const canAccept = round.lifecycleStatus === "sent" || round.lifecycleStatus === "awaiting";
    const canReject = round.lifecycleStatus === "sent" || round.lifecycleStatus === "awaiting";
    const canSetCurrent = isTeamOfferCandidate(round) && round.lifecycleStatus !== "draft";
    const canEdit = isRoundEditable(round);
    const canDelete = isRoundDeletable(round);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative pl-6",
        "data-round-anchor": round.id,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-3 top-5 h-6 w-6 -translate-x-1/2 rounded-full border-2 bg-white", isCurrentTerms ? "border-brand" : "border-zinc-300"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full", isCurrentTerms ? "bg-brand" : "bg-zinc-300")
                }, void 0, false, {
                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                    lineNumber: 1713,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1707,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-white shadow-sm transition-all duration-200", expanded && "ring-1 ring-zinc-200", isHighlighted && "border-brand/50 ring-2 ring-brand/20"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "flex w-full items-center gap-3 p-3 text-left",
                        onClick: ()=>setExpanded((prev)=>!prev),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border", typeMeta.badgeClass),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypeIcon, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                    lineNumber: 1735,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1734,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-bold uppercase tracking-wide text-zinc-500",
                                                children: [
                                                    "Rodada ",
                                                    displayIndex
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1740,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border text-[10px]", typeMeta.badgeClass),
                                                children: typeMeta.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1743,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border text-[10px]", lifecycleMeta[round.lifecycleStatus].chipClass),
                                                children: lifecycleMeta[round.lifecycleStatus].label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1744,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border text-[10px]", visibilityMeta[round.visibility].chipClass),
                                                children: visibilityMeta[round.visibility].label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1747,
                                                columnNumber: 15
                                            }, this),
                                            isCurrentTerms ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                className: "border-emerald-200 bg-emerald-50 text-[10px] text-emerald-700",
                                                children: "Fonte dos termos vigentes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1751,
                                                columnNumber: 17
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1739,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2.5 text-xs text-zinc-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-zinc-800",
                                                children: round.authorName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1758,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    formatCurrency(round.monthlyValue ?? 0),
                                                    " /mês"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1759,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Setup ",
                                                    formatCurrency(round.setupValue ?? 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1760,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-500",
                                                children: [
                                                    round.termMonths ?? 12,
                                                    " meses"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1761,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1757,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-zinc-400",
                                        children: [
                                            "Criada em ",
                                            toDateTimeLabel(round.createdAt),
                                            round.sentAt ? ` · Enviada em ${toDateTimeLabel(round.sentAt)}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1763,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1738,
                                columnNumber: 11
                            }, this),
                            expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "h-4 w-4 text-zinc-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1769,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "h-4 w-4 text-zinc-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1769,
                                columnNumber: 73
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1729,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: "auto"
                            },
                            exit: {
                                opacity: 0,
                                height: 0
                            },
                            transition: {
                                duration: 0.16
                            },
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 px-3 pb-3 pt-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1782,
                                        columnNumber: 17
                                    }, this),
                                    isTermsRequired(round.type) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                label: "Mensal",
                                                value: formatCurrency(round.monthlyValue ?? 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1786,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                label: "Setup",
                                                value: formatCurrency(round.setupValue ?? 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1787,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                label: "Prazo",
                                                value: `${round.termMonths ?? 12} meses`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1788,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                label: "Total",
                                                value: formatCurrency(round.totalValue ?? 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1789,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1785,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-zinc-200 bg-zinc-50/80 p-3 text-xs text-zinc-600",
                                        children: "Ajuste interno sem alteração direta de termos vigentes."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1792,
                                        columnNumber: 19
                                    }, this),
                                    round.conditions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-semibold uppercase tracking-wide text-zinc-500",
                                                children: "Condições"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1799,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5",
                                                children: [
                                                    round.conditions.slice(0, 3).map((condition)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            className: "border-zinc-200 bg-zinc-100 text-[10px] font-normal text-zinc-700",
                                                            children: condition
                                                        }, `${round.id}-${condition}`, false, {
                                                            fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                            lineNumber: 1802,
                                                            columnNumber: 25
                                                        }, this)),
                                                    round.conditions.length > 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        className: "border-zinc-200 bg-zinc-100 text-[10px] font-normal text-zinc-700",
                                                        children: [
                                                            "+",
                                                            round.conditions.length - 3
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 1810,
                                                        columnNumber: 25
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1800,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1798,
                                        columnNumber: 19
                                    }, this) : null,
                                    round.details ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-semibold uppercase tracking-wide text-zinc-500",
                                                children: "Observações"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1820,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-xl border border-zinc-200 bg-zinc-50/80 p-3 text-xs text-zinc-700",
                                                children: round.details
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1821,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1819,
                                        columnNumber: 19
                                    }, this) : null,
                                    round.rejectedReason ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rounded-lg border border-red-200 bg-red-50 px-2.5 py-2 text-xs text-red-700",
                                        children: [
                                            "Motivo da rejeição: ",
                                            round.rejectedReason
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1828,
                                        columnNumber: 19
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                                label: "Marcar enviada",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"],
                                                visible: canSend,
                                                loading: loadingAction === "send",
                                                onClick: ()=>onSend(round)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1834,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                                label: "Aguardando",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"],
                                                visible: canAwaiting,
                                                loading: loadingAction === "awaiting",
                                                onClick: ()=>onAwaiting(round)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1841,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                                label: "Aceita",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
                                                visible: canAccept,
                                                loading: loadingAction === "accept",
                                                onClick: ()=>onAccept(round)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1848,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                                label: "Rejeitar",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
                                                visible: canReject,
                                                loading: loadingAction === "reject",
                                                onClick: ()=>onReject(round)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1855,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                                label: "Definir vigente",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"],
                                                visible: canSetCurrent && !isCurrentTerms,
                                                loading: loadingAction === "set-current",
                                                onClick: ()=>onSetCurrent(round)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1862,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                                label: "Nova rodada",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                                                visible: true,
                                                loading: false,
                                                onClick: ()=>onCreateFromRound(round)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1869,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                                label: "Editar",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"],
                                                visible: canEdit,
                                                loading: loadingAction === "save-edit",
                                                onClick: ()=>onEdit(round)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1876,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                                label: "Excluir",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
                                                visible: canDelete,
                                                loading: loadingAction === "delete",
                                                onClick: ()=>onDelete(round)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 1883,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 1833,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 1781,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                            lineNumber: 1774,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1772,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1721,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
        lineNumber: 1706,
        columnNumber: 5
    }, this);
}
_s1(NegotiationRoundCard, "mzMQOo/+0hv3CDktXQlEtEqOyWA=");
_c6 = NegotiationRoundCard;
function ActionButton({ label, icon: Icon, visible, loading, onClick }) {
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        type: "button",
        size: "sm",
        variant: "outline",
        className: "h-7 gap-1.5 rounded-full px-2.5 text-[11px]",
        onClick: onClick,
        disabled: loading,
        children: [
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-3.5 w-3.5 animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1924,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1924,
                columnNumber: 69
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
        lineNumber: 1916,
        columnNumber: 5
    }, this);
}
_c7 = ActionButton;
function EmptyState({ onStart }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/70 p-8 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                    lineNumber: 1934,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1933,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-3 font-heading text-base font-semibold text-zinc-900",
                children: "Nenhuma rodada registrada"
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1936,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-zinc-500",
                children: "Registre a primeira rodada para iniciar os termos e o fluxo de decisão."
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1939,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "outline",
                className: "mt-4 h-8 rounded-full text-xs",
                onClick: onStart,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "mr-1.5 h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 1948,
                        columnNumber: 9
                    }, this),
                    "Registrar primeira rodada"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 1942,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
        lineNumber: 1932,
        columnNumber: 5
    }, this);
}
_c8 = EmptyState;
function NegotiationRoundForm({ mode, seed, isSaving, errorMessage, onCancel, onSave }) {
    _s2();
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(seed);
    const [fieldError, setFieldError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const requiresTerms = isTermsRequired(draft.type);
    const isInternal = draft.type === "internal" || draft.visibility === "internal";
    const submit = async (event)=>{
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
        if (draft.lifecycleStatus === "rejected" && draft.rejectedReason.trim().length < 5) {
            setFieldError("Informe motivo de rejeição com pelo menos 5 caracteres.");
            return;
        }
        if ((draft.lifecycleStatus === "sent" || draft.lifecycleStatus === "awaiting") && draft.visibility === "internal") {
            setFieldError("Rodadas internas não podem ser marcadas como enviadas.");
            return;
        }
        if (draft.notes.trim().length > 0 && draft.notes.trim().length < MIN_NOTES_LENGTH) {
            setFieldError(`Observações devem ter no mínimo ${MIN_NOTES_LENGTH} caracteres.`);
            return;
        }
        const payload = {
            type: draft.type,
            actorRole: draft.actorRole,
            visibility: draft.visibility,
            lifecycleStatus: draft.lifecycleStatus,
            monthlyValue: requiresTerms ? toInputNumber(draft.monthlyValue) : 0,
            setupValue: requiresTerms ? toInputNumber(draft.setupValue) : 0,
            termMonths: requiresTerms ? toInputNumber(draft.termMonths) : 12,
            notes: draft.notes.trim(),
            conditions: draft.conditionsText.split(",").map((condition)=>condition.trim()).filter(Boolean),
            rejectedReason: draft.lifecycleStatus === "rejected" ? draft.rejectedReason.trim() : undefined
        };
        await onSave(payload);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-heading text-sm font-semibold text-zinc-900",
                                children: mode === "create" ? "Nova rodada" : "Editar rodada"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2043,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-500",
                                children: "Defina tipo, status, termos e condições com validação antes de salvar."
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2046,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 2042,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "ghost",
                        size: "sm",
                        className: "h-7 rounded-full px-2.5 text-xs",
                        onClick: onCancel,
                        children: "Cancelar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 2050,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 2041,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "space-y-3",
                onSubmit: submit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                        children: "Tipo da rodada"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2064,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: draft.type,
                                        onValueChange: (value)=>{
                                            const nextType = value;
                                            setDraft((prev)=>({
                                                    ...prev,
                                                    type: nextType,
                                                    actorRole: nextType === "counter" ? "client" : "team",
                                                    visibility: nextType === "internal" ? "internal" : prev.visibility,
                                                    lifecycleStatus: nextType === "internal" ? "draft" : prev.lifecycleStatus
                                                }));
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                    lineNumber: 2082,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 2081,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: roundTypeOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.id,
                                                        children: option.label
                                                    }, option.id, false, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 2086,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 2084,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2067,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2063,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                        children: "Status operacional"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2095,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: draft.lifecycleStatus,
                                        onValueChange: (value)=>setDraft((prev)=>({
                                                    ...prev,
                                                    lifecycleStatus: value
                                                })),
                                        disabled: isInternal,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                    lineNumber: 2109,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 2108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: lifecycleOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.id,
                                                        children: option.label
                                                    }, option.id, false, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 2113,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 2111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2098,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2094,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 2062,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                        children: "Origem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: draft.actorRole,
                                        onValueChange: (value)=>setDraft((prev)=>({
                                                    ...prev,
                                                    actorRole: value
                                                })),
                                        disabled: draft.type === "counter",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                    lineNumber: 2138,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 2137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "team",
                                                        children: "Time interno"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 2141,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "client",
                                                        children: "Cliente"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 2142,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "system",
                                                        children: "Sistema"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 2143,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 2140,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                        children: "Visibilidade"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: draft.visibility,
                                        onValueChange: (value)=>setDraft((prev)=>({
                                                    ...prev,
                                                    visibility: value,
                                                    lifecycleStatus: value === "internal" ? "draft" : prev.lifecycleStatus
                                                })),
                                        disabled: draft.type === "internal",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                    lineNumber: 2165,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 2164,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "client",
                                                        children: "Visível ao cliente"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 2168,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "internal",
                                                        children: "Interna"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                        lineNumber: 2169,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                                lineNumber: 2167,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 2122,
                        columnNumber: 9
                    }, this),
                    requiresTerms ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                        children: "Mensal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: 0,
                                        max: 999999,
                                        value: draft.monthlyValue,
                                        onChange: (event)=>setDraft((prev)=>({
                                                    ...prev,
                                                    monthlyValue: event.target.value
                                                })),
                                        className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                        placeholder: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                        children: "Setup"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: 0,
                                        max: 999999,
                                        value: draft.setupValue,
                                        onChange: (event)=>setDraft((prev)=>({
                                                    ...prev,
                                                    setupValue: event.target.value
                                                })),
                                        className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                        placeholder: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                        children: "Prazo (meses)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: 1,
                                        max: 36,
                                        value: draft.termMonths,
                                        onChange: (event)=>setDraft((prev)=>({
                                                    ...prev,
                                                    termMonths: event.target.value
                                                })),
                                        className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                        placeholder: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                        lineNumber: 2213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2209,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 2176,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                children: "Condições (separe por vírgula)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: draft.conditionsText,
                                onChange: (event)=>setDraft((prev)=>({
                                            ...prev,
                                            conditionsText: event.target.value
                                        })),
                                className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                placeholder: "Ex.: Setup reduzido, carência de 15 dias"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 2228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                children: "Observações"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                value: draft.notes,
                                onChange: (event)=>setDraft((prev)=>({
                                            ...prev,
                                            notes: event.target.value
                                        })),
                                className: "mt-1 min-h-[86px] resize-none rounded-lg border-zinc-200 text-xs",
                                placeholder: "Contexto da rodada e próximos pontos de negociação..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 2242,
                        columnNumber: 9
                    }, this),
                    draft.lifecycleStatus === "rejected" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
                                children: "Motivo da rejeição"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2258,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: draft.rejectedReason,
                                onChange: (event)=>setDraft((prev)=>({
                                            ...prev,
                                            rejectedReason: event.target.value
                                        })),
                                className: "mt-1 h-9 rounded-lg border-zinc-200 text-xs",
                                placeholder: "Ex.: Cliente não aprovou condição de setup"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2261,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 2257,
                        columnNumber: 11
                    }, this) : null,
                    fieldError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-600",
                        children: fieldError
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 2273,
                        columnNumber: 11
                    }, this) : null,
                    errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-600",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 2275,
                        columnNumber: 25
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-2 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "ghost",
                                size: "sm",
                                className: "h-8 rounded-full px-3 text-xs",
                                onClick: onCancel,
                                children: "Fechar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                size: "sm",
                                className: "h-8 rounded-full bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800",
                                disabled: isSaving,
                                children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "mr-1.5 h-3.5 w-3.5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                            lineNumber: 2295,
                                            columnNumber: 17
                                        }, this),
                                        "Salvando..."
                                    ]
                                }, void 0, true) : mode === "create" ? "Salvar rodada" : "Salvar alterações"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                                lineNumber: 2287,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                        lineNumber: 2277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
                lineNumber: 2061,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/lead-negotiation-tab.tsx",
        lineNumber: 2040,
        columnNumber: 5
    }, this);
}
_s2(NegotiationRoundForm, "HocCEv4G7iGidXQWzkEhWA1sv/8=");
_c9 = NegotiationRoundForm;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "NegotiationTab");
__turbopack_context__.k.register(_c1, "CurrentTermsCard");
__turbopack_context__.k.register(_c2, "StatCard");
__turbopack_context__.k.register(_c3, "NegotiationComparisonCard");
__turbopack_context__.k.register(_c4, "NextStepCard");
__turbopack_context__.k.register(_c5, "NegotiationExecutionCard");
__turbopack_context__.k.register(_c6, "NegotiationRoundCard");
__turbopack_context__.k.register(_c7, "ActionButton");
__turbopack_context__.k.register(_c8, "EmptyState");
__turbopack_context__.k.register(_c9, "NegotiationRoundForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_drawers_lead-negotiation-tab_tsx_17480cc4._.js.map