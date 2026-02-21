(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(auth)/pipes/lib/pipeline-config.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STAGE_CUSTOM_STORAGE_KEY",
    ()=>STAGE_CUSTOM_STORAGE_KEY,
    "funnels",
    ()=>funnels,
    "loadStageCustomizations",
    ()=>loadStageCustomizations,
    "saveStageCustomizations",
    ()=>saveStageCustomizations,
    "stageColorPalette",
    ()=>stageColorPalette,
    "stageRequiredFields",
    ()=>stageRequiredFields,
    "temperatureConfig",
    ()=>temperatureConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/snowflake.js [app-client] (ecmascript) <export default as Snowflake>");
;
;
const funnels = [
    {
        id: "comercial",
        label: "Leads",
        stages: [
            {
                id: "lead-in",
                label: "Lead-In",
                slaHours: 48
            },
            {
                id: "contato-feito",
                label: "Contato Feito",
                slaHours: 72
            },
            {
                id: "reuniao-agendada",
                label: "Reuniao Agendada",
                slaHours: 120
            },
            {
                id: "proposta-enviada",
                label: "Proposta Enviada",
                slaHours: 96
            },
            {
                id: "negociacao",
                label: "Negociacao",
                slaHours: 168
            },
            {
                id: "fechamento",
                label: "Fechamento",
                slaHours: 48
            }
        ]
    },
    {
        id: "indicacao",
        label: "Indicacao",
        stages: [
            {
                id: "lead-in",
                label: "Lead-In",
                slaHours: 24
            },
            {
                id: "contato-feito",
                label: "Contato Feito",
                slaHours: 48
            },
            {
                id: "proposta-enviada",
                label: "Proposta Enviada",
                slaHours: 72
            },
            {
                id: "fechamento",
                label: "Fechamento",
                slaHours: 48
            }
        ]
    }
];
const stageRequiredFields = {
    "lead-in": [],
    "contato-feito": [
        {
            field: "clientName",
            label: "Nome do contato"
        }
    ],
    "reuniao-agendada": [
        {
            field: "clientName",
            label: "Nome do contato"
        },
        {
            field: "expectedCloseDate",
            label: "Data prevista de fechamento"
        }
    ],
    "proposta-enviada": [
        {
            field: "clientName",
            label: "Nome do contato"
        },
        {
            field: "expectedCloseDate",
            label: "Data prevista de fechamento"
        },
        {
            field: "value",
            label: "Valor da proposta"
        }
    ],
    negociacao: [
        {
            field: "clientName",
            label: "Nome do contato"
        },
        {
            field: "expectedCloseDate",
            label: "Data prevista de fechamento"
        },
        {
            field: "value",
            label: "Valor da proposta"
        },
        {
            field: "monthlyValue",
            label: "Valor mensal"
        }
    ],
    fechamento: [
        {
            field: "clientName",
            label: "Nome do contato"
        },
        {
            field: "expectedCloseDate",
            label: "Data prevista de fechamento"
        },
        {
            field: "value",
            label: "Valor da proposta"
        },
        {
            field: "monthlyValue",
            label: "Valor mensal"
        }
    ]
};
const temperatureConfig = {
    hot: {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/pipes/lib/pipeline-config.tsx",
            lineNumber: 81,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Quente",
        colorClass: "text-status-danger"
    },
    warm: {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/pipes/lib/pipeline-config.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Morno",
        colorClass: "text-status-warning"
    },
    cold: {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__["Snowflake"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/pipes/lib/pipeline-config.tsx",
            lineNumber: 91,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Frio",
        colorClass: "text-status-info"
    }
};
const stageColorPalette = [
    {
        id: "default",
        label: "Padrao",
        bg: "bg-brand",
        hex: "#1d4ed8"
    },
    {
        id: "blue",
        label: "Azul",
        bg: "bg-blue-500",
        hex: "#3b82f6"
    },
    {
        id: "cyan",
        label: "Ciano",
        bg: "bg-cyan-500",
        hex: "#06b6d4"
    },
    {
        id: "green",
        label: "Verde",
        bg: "bg-emerald-500",
        hex: "#10b981"
    },
    {
        id: "yellow",
        label: "Amarelo",
        bg: "bg-amber-400",
        hex: "#fbbf24"
    },
    {
        id: "orange",
        label: "Laranja",
        bg: "bg-orange-500",
        hex: "#f97316"
    },
    {
        id: "red",
        label: "Vermelho",
        bg: "bg-red-500",
        hex: "#ef4444"
    },
    {
        id: "pink",
        label: "Rosa",
        bg: "bg-pink-500",
        hex: "#ec4899"
    },
    {
        id: "gray",
        label: "Cinza",
        bg: "bg-zinc-400",
        hex: "#a1a1aa"
    }
];
const STAGE_CUSTOM_STORAGE_KEY = "flow-stage-customizations";
function loadStageCustomizations() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STAGE_CUSTOM_STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch  {
        try {
            localStorage.removeItem(STAGE_CUSTOM_STORAGE_KEY);
        } catch  {}
        return {};
    }
}
function saveStageCustomizations(data) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(STAGE_CUSTOM_STORAGE_KEY, JSON.stringify(data));
    } catch  {
    // Silently ignore quota errors
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(auth)/pipes/lib/pipeline-validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInitials",
    ()=>getInitials,
    "getSlaColors",
    ()=>getSlaColors,
    "getSlaStatus",
    ()=>getSlaStatus,
    "validateStageTransition",
    ()=>validateStageTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/pipes/lib/pipeline-config.tsx [app-client] (ecmascript)");
;
;
function getInitials(name) {
    return name.split(" ").filter(Boolean).map((w)=>w[0]).slice(0, 2).join("").toUpperCase();
}
function getSlaStatus(slaDeadline) {
    if (!slaDeadline) return {
        status: "ok",
        label: "",
        detailLabel: "SLA nao definido"
    };
    const now = new Date();
    const deadline = new Date(slaDeadline);
    const diffMs = deadline.getTime() - now.getTime();
    if (diffMs <= 0) {
        const overMs = Math.abs(diffMs);
        const overHours = Math.floor(overMs / (1000 * 60 * 60));
        const overDays = Math.floor(overHours / 24);
        const remainHours = overHours % 24;
        const overLabel = overDays > 0 ? `${overDays}d ${remainHours}h` : `${overHours}h`;
        return {
            status: "breached",
            label: "Estourado",
            detailLabel: `SLA estourado ha ${overLabel}`
        };
    }
    const totalHours = diffMs / (1000 * 60 * 60);
    const days = Math.floor(totalHours / 24);
    const hours = Math.floor(totalHours % 24);
    const label = days > 0 ? `${days}d ${hours}h` : `${hours}h`;
    if (totalHours <= 12) {
        return {
            status: "near",
            label,
            detailLabel: `SLA vence em ${label} — atencao!`
        };
    }
    return {
        status: "ok",
        label,
        detailLabel: `SLA restante: ${label}`
    };
}
function getSlaColors(status) {
    switch(status){
        case "ok":
            return {
                dot: "bg-status-success",
                border: "border-l-brand",
                text: "text-zinc-400"
            };
        case "near":
            return {
                dot: "bg-status-warning",
                border: "border-l-status-warning",
                text: "text-status-warning"
            };
        case "breached":
            return {
                dot: "bg-status-danger",
                border: "border-l-status-danger",
                text: "text-status-danger"
            };
    }
}
function validateStageTransition(opportunity, targetStage) {
    const currentIdx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIPELINE_STAGE_ORDER"].indexOf(opportunity.stage);
    const targetIdx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIPELINE_STAGE_ORDER"].indexOf(targetStage);
    if (targetIdx < currentIdx) {
        return {
            missing: [],
            isRegression: true
        };
    }
    const requiredFields = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stageRequiredFields"][targetStage] || [];
    const missing = [];
    for (const req of requiredFields){
        const val = opportunity[req.field];
        if (val === undefined || val === null || val === "") {
            missing.push(req.label);
        } else if (typeof val === "number" && val <= 0) {
            missing.push(req.label);
        }
    }
    return {
        missing,
        isRegression: false
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(auth)/pipes/hooks/use-pipeline-board.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePipelineBoard",
    ()=>usePipelineBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/pipes/lib/pipeline-validation.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AUTO_SCROLL_EDGE_PX = 96;
const AUTO_SCROLL_MAX_DELTA = 22;
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function getAutoScrollDelta(pointer, start, end) {
    if (pointer < start + AUTO_SCROLL_EDGE_PX) {
        const distance = pointer - start;
        const intensity = 1 - clamp(distance, 0, AUTO_SCROLL_EDGE_PX) / AUTO_SCROLL_EDGE_PX;
        return -Math.ceil(intensity * AUTO_SCROLL_MAX_DELTA);
    }
    if (pointer > end - AUTO_SCROLL_EDGE_PX) {
        const distance = end - pointer;
        const intensity = 1 - clamp(distance, 0, AUTO_SCROLL_EDGE_PX) / AUTO_SCROLL_EDGE_PX;
        return Math.ceil(intensity * AUTO_SCROLL_MAX_DELTA);
    }
    return 0;
}
function resolveInsertIndexForEmptyStage(opportunities, targetStage, stageOrder) {
    const targetStageIndex = stageOrder.indexOf(targetStage);
    if (targetStageIndex === -1) return opportunities.length;
    for(let idx = targetStageIndex - 1; idx >= 0; idx -= 1){
        const prevStage = stageOrder[idx];
        for(let i = opportunities.length - 1; i >= 0; i -= 1){
            if (opportunities[i].stage === prevStage) {
                return i + 1;
            }
        }
    }
    for(let idx = targetStageIndex + 1; idx < stageOrder.length; idx += 1){
        const nextStage = stageOrder[idx];
        const nextIndex = opportunities.findIndex((op)=>op.stage === nextStage);
        if (nextIndex !== -1) return nextIndex;
    }
    return opportunities.length;
}
function usePipelineBoard({ localOpportunities, setLocalOpportunities, activeFunnel, announce, canMoveCards = true }) {
    _s();
    const [draggingCardId, setDraggingCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draggingCardStage, setDraggingCardStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draggingOpportunity, setDraggingOpportunity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOverStage, setDragOverStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dropIndicator, setDropIndicator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [columnError, setColumnError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [successFeedback, setSuccessFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [updatingCardId, setUpdatingCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [recentlyMovedCardId, setRecentlyMovedCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dragCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoScrollFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeoutIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const autoScrollStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stopAutoScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePipelineBoard.useCallback[stopAutoScroll]": ()=>{
            if (autoScrollFrameRef.current !== null) {
                window.cancelAnimationFrame(autoScrollFrameRef.current);
                autoScrollFrameRef.current = null;
            }
            autoScrollStateRef.current = null;
        }
    }["usePipelineBoard.useCallback[stopAutoScroll]"], []);
    const runWithTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePipelineBoard.useCallback[runWithTimeout]": (fn, delayMs)=>{
            const timeoutId = window.setTimeout({
                "usePipelineBoard.useCallback[runWithTimeout].timeoutId": ()=>{
                    timeoutIdsRef.current = timeoutIdsRef.current.filter({
                        "usePipelineBoard.useCallback[runWithTimeout].timeoutId": (id)=>id !== timeoutId
                    }["usePipelineBoard.useCallback[runWithTimeout].timeoutId"]);
                    fn();
                }
            }["usePipelineBoard.useCallback[runWithTimeout].timeoutId"], delayMs);
            timeoutIdsRef.current.push(timeoutId);
        }
    }["usePipelineBoard.useCallback[runWithTimeout]"], []);
    const runAutoScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePipelineBoard.useCallback[runAutoScroll]": ()=>{
            const tick = {
                "usePipelineBoard.useCallback[runAutoScroll].tick": ()=>{
                    const state = autoScrollStateRef.current;
                    if (!state) {
                        autoScrollFrameRef.current = null;
                        return;
                    }
                    const { clientX, clientY, horizontalContainer, verticalContainer } = state;
                    let shouldKeepLooping = false;
                    if (verticalContainer) {
                        const rect = verticalContainer.getBoundingClientRect();
                        const deltaY = getAutoScrollDelta(clientY, rect.top, rect.bottom);
                        if (deltaY !== 0) {
                            verticalContainer.scrollTop += deltaY;
                            shouldKeepLooping = true;
                        }
                    }
                    if (horizontalContainer) {
                        const rect = horizontalContainer.getBoundingClientRect();
                        const deltaX = getAutoScrollDelta(clientX, rect.left, rect.right);
                        if (deltaX !== 0) {
                            horizontalContainer.scrollLeft += deltaX;
                            shouldKeepLooping = true;
                        }
                    }
                    if (shouldKeepLooping || autoScrollStateRef.current !== null) {
                        autoScrollFrameRef.current = window.requestAnimationFrame(tick);
                        return;
                    }
                    autoScrollFrameRef.current = null;
                }
            }["usePipelineBoard.useCallback[runAutoScroll].tick"];
            tick();
        }
    }["usePipelineBoard.useCallback[runAutoScroll]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePipelineBoard.useEffect": ()=>{
            return ({
                "usePipelineBoard.useEffect": ()=>{
                    stopAutoScroll();
                    timeoutIdsRef.current.forEach({
                        "usePipelineBoard.useEffect": (timeoutId)=>window.clearTimeout(timeoutId)
                    }["usePipelineBoard.useEffect"]);
                    timeoutIdsRef.current = [];
                }
            })["usePipelineBoard.useEffect"];
        }
    }["usePipelineBoard.useEffect"], [
        stopAutoScroll
    ]);
    const handleDragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePipelineBoard.useCallback[handleDragStart]": (e, opportunity)=>{
            if (!canMoveCards) {
                e.preventDefault();
                announce("Voce nao tem permissao para mover oportunidades.");
                return;
            }
            setDraggingCardId(opportunity.id);
            setDraggingCardStage(opportunity.stage);
            setDraggingOpportunity(opportunity);
            dragCardRef.current = opportunity;
            autoScrollStateRef.current = null;
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("text/plain", opportunity.id);
            document.body.style.cursor = "grabbing";
            announce(`Arrastando card ${opportunity.title}. Solte em uma etapa para mover.`);
        }
    }["usePipelineBoard.useCallback[handleDragStart]"], [
        announce,
        canMoveCards
    ]);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePipelineBoard.useCallback[handleDragOver]": (e, stage)=>{
            if (!canMoveCards) return;
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
            setDragOverStage(stage);
            const column = e.currentTarget;
            const cardElements = column.querySelectorAll("[data-card-index]");
            let insertIndex = cardElements.length;
            for(let i = 0; i < cardElements.length; i++){
                const rect = cardElements[i].getBoundingClientRect();
                const midY = rect.top + rect.height / 2;
                if (e.clientY < midY) {
                    insertIndex = i;
                    break;
                }
            }
            setDropIndicator({
                stage,
                index: insertIndex
            });
            const target = e.currentTarget;
            const verticalContainer = target.closest("[data-pipe-column-scroll]");
            const horizontalContainer = target.closest("[data-pipe-board-scroll]");
            autoScrollStateRef.current = {
                clientX: e.clientX,
                clientY: e.clientY,
                horizontalContainer,
                verticalContainer
            };
            if (autoScrollFrameRef.current === null) {
                autoScrollFrameRef.current = window.requestAnimationFrame(runAutoScroll);
            }
        }
    }["usePipelineBoard.useCallback[handleDragOver]"], [
        canMoveCards,
        runAutoScroll
    ]);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePipelineBoard.useCallback[handleDragLeave]": (e)=>{
            const related = e.relatedTarget;
            // relatedTarget can be null in Chrome during drag — only clear if we
            // truly left the column (related exists and is outside currentTarget)
            if (related && !e.currentTarget.contains(related)) {
                setDragOverStage(null);
                setDropIndicator(null);
            }
        }
    }["usePipelineBoard.useCallback[handleDragLeave]"], []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePipelineBoard.useCallback[handleDrop]": (e, targetStage)=>{
            if (!canMoveCards) {
                e.preventDefault();
                announce("Voce nao tem permissao para mover oportunidades.");
                return;
            }
            e.preventDefault();
            setDragOverStage(null);
            setDropIndicator(null);
            setColumnError(null);
            document.body.style.cursor = "";
            stopAutoScroll();
            const card = dragCardRef.current;
            if (!card) return;
            setUpdatingCardId(card.id);
            try {
                const stageOrder = activeFunnel.stages.map({
                    "usePipelineBoard.useCallback[handleDrop].stageOrder": (stage)=>stage.id
                }["usePipelineBoard.useCallback[handleDrop].stageOrder"]);
                const sourceStageCards = localOpportunities.filter({
                    "usePipelineBoard.useCallback[handleDrop].sourceStageCards": (opportunity)=>opportunity.stage === card.stage
                }["usePipelineBoard.useCallback[handleDrop].sourceStageCards"]);
                const sourceStageIndex = sourceStageCards.findIndex({
                    "usePipelineBoard.useCallback[handleDrop].sourceStageIndex": (opportunity)=>opportunity.id === card.id
                }["usePipelineBoard.useCallback[handleDrop].sourceStageIndex"]);
                const rawDropIndex = dropIndicator?.stage === targetStage ? dropIndicator.index : localOpportunities.filter({
                    "usePipelineBoard.useCallback[handleDrop]": (opportunity)=>opportunity.stage === targetStage
                }["usePipelineBoard.useCallback[handleDrop]"]).length;
                let normalizedDropIndex = rawDropIndex;
                if (card.stage === targetStage && sourceStageIndex > -1 && sourceStageIndex < normalizedDropIndex) {
                    normalizedDropIndex -= 1;
                }
                if (card.stage === targetStage && sourceStageIndex > -1 && normalizedDropIndex === sourceStageIndex) {
                    setDraggingCardId(null);
                    setDraggingCardStage(null);
                    dragCardRef.current = null;
                    setUpdatingCardId(null);
                    return;
                }
                const { missing, isRegression } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateStageTransition"])(card, targetStage);
                const targetStageDef = activeFunnel.stages.find({
                    "usePipelineBoard.useCallback[handleDrop].targetStageDef": (stage)=>stage.id === targetStage
                }["usePipelineBoard.useCallback[handleDrop].targetStageDef"]);
                const targetStageLabel = targetStageDef?.label ?? targetStage.replace(/-/g, " ");
                if (missing.length > 0) {
                    setColumnError({
                        stage: targetStage,
                        tone: "error",
                        cardId: card.id,
                        missingFields: missing,
                        targetStage,
                        message: `Para mover para ${targetStageLabel}, preencha: ${missing.join(", ")}.`
                    });
                    announce(`Aviso: campos pendentes — ${missing.join(", ")}`);
                    setDraggingCardId(null);
                    setDraggingCardStage(null);
                    setDraggingOpportunity(null);
                    dragCardRef.current = null;
                    setUpdatingCardId(null);
                    runWithTimeout({
                        "usePipelineBoard.useCallback[handleDrop]": ()=>setColumnError(null)
                    }["usePipelineBoard.useCallback[handleDrop]"], 4200);
                    return;
                }
                if (isRegression) {
                    const fromLabel = activeFunnel.stages.find({
                        "usePipelineBoard.useCallback[handleDrop]": (stage)=>stage.id === card.stage
                    }["usePipelineBoard.useCallback[handleDrop]"])?.label ?? card.stage;
                    const toLabel = targetStageLabel;
                    setColumnError({
                        stage: targetStage,
                        tone: "warning",
                        message: `Card retrocedido de ${fromLabel} para ${toLabel}`
                    });
                    announce(`Aviso: card retrocedido de ${fromLabel} para ${toLabel}`);
                    runWithTimeout({
                        "usePipelineBoard.useCallback[handleDrop]": ()=>setColumnError(null)
                    }["usePipelineBoard.useCallback[handleDrop]"], 4000);
                }
                const newSlaDeadline = targetStageDef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateSlaDeadline"])(targetStageDef.slaHours) : undefined;
                setLocalOpportunities({
                    "usePipelineBoard.useCallback[handleDrop]": (prev)=>{
                        const sourceIndex = prev.findIndex({
                            "usePipelineBoard.useCallback[handleDrop].sourceIndex": (opportunity)=>opportunity.id === card.id
                        }["usePipelineBoard.useCallback[handleDrop].sourceIndex"]);
                        if (sourceIndex === -1) return prev;
                        const sourceCard = prev[sourceIndex];
                        const remaining = prev.filter({
                            "usePipelineBoard.useCallback[handleDrop].remaining": (opportunity)=>opportunity.id !== sourceCard.id
                        }["usePipelineBoard.useCallback[handleDrop].remaining"]);
                        const targetStageCards = remaining.filter({
                            "usePipelineBoard.useCallback[handleDrop].targetStageCards": (opportunity)=>opportunity.stage === targetStage
                        }["usePipelineBoard.useCallback[handleDrop].targetStageCards"]);
                        const safeTargetIndex = clamp(normalizedDropIndex, 0, targetStageCards.length);
                        const updatedCard = {
                            ...sourceCard,
                            stage: targetStage,
                            updatedAt: new Date().toISOString(),
                            slaDeadline: newSlaDeadline
                        };
                        let insertIndex = remaining.length;
                        if (targetStageCards.length === 0) {
                            insertIndex = resolveInsertIndexForEmptyStage(remaining, targetStage, stageOrder);
                        } else if (safeTargetIndex >= targetStageCards.length) {
                            const anchorId = targetStageCards[targetStageCards.length - 1].id;
                            const anchorIndex = remaining.findIndex({
                                "usePipelineBoard.useCallback[handleDrop].anchorIndex": (opportunity)=>opportunity.id === anchorId
                            }["usePipelineBoard.useCallback[handleDrop].anchorIndex"]);
                            insertIndex = anchorIndex === -1 ? remaining.length : anchorIndex + 1;
                        } else {
                            const anchorId = targetStageCards[safeTargetIndex].id;
                            const anchorIndex = remaining.findIndex({
                                "usePipelineBoard.useCallback[handleDrop].anchorIndex": (opportunity)=>opportunity.id === anchorId
                            }["usePipelineBoard.useCallback[handleDrop].anchorIndex"]);
                            insertIndex = anchorIndex === -1 ? remaining.length : anchorIndex;
                        }
                        const next = [
                            ...remaining
                        ];
                        next.splice(insertIndex, 0, updatedCard);
                        return next;
                    }
                }["usePipelineBoard.useCallback[handleDrop]"]);
                if (card.stage === targetStage) {
                    setSuccessFeedback({
                        stage: targetStage,
                        message: `${card.title} reordenado na etapa.`,
                        cardId: card.id
                    });
                    announce(`Card ${card.title} reordenado dentro da etapa.`);
                    runWithTimeout({
                        "usePipelineBoard.useCallback[handleDrop]": ()=>setSuccessFeedback(null)
                    }["usePipelineBoard.useCallback[handleDrop]"], 1800);
                } else if (!isRegression) {
                    setSuccessFeedback({
                        stage: targetStage,
                        message: `${card.title} movido para ${targetStageLabel} agora.`,
                        cardId: card.id
                    });
                    announce(`Card ${card.title} movido com sucesso para ${targetStageLabel}`);
                    runWithTimeout({
                        "usePipelineBoard.useCallback[handleDrop]": ()=>setSuccessFeedback(null)
                    }["usePipelineBoard.useCallback[handleDrop]"], 2500);
                } else {
                    setSuccessFeedback({
                        stage: targetStage,
                        message: `${card.title} retrocedido para ${targetStageLabel}.`,
                        cardId: card.id
                    });
                    runWithTimeout({
                        "usePipelineBoard.useCallback[handleDrop]": ()=>setSuccessFeedback(null)
                    }["usePipelineBoard.useCallback[handleDrop]"], 2300);
                }
                setRecentlyMovedCardId(card.id);
                runWithTimeout({
                    "usePipelineBoard.useCallback[handleDrop]": ()=>setRecentlyMovedCardId({
                            "usePipelineBoard.useCallback[handleDrop]": (prev)=>prev === card.id ? null : prev
                        }["usePipelineBoard.useCallback[handleDrop]"])
                }["usePipelineBoard.useCallback[handleDrop]"], 2600);
                runWithTimeout({
                    "usePipelineBoard.useCallback[handleDrop]": ()=>setUpdatingCardId({
                            "usePipelineBoard.useCallback[handleDrop]": (prev)=>prev === card.id ? null : prev
                        }["usePipelineBoard.useCallback[handleDrop]"])
                }["usePipelineBoard.useCallback[handleDrop]"], 850);
            } finally{
                setDraggingCardId(null);
                setDraggingCardStage(null);
                setDraggingOpportunity(null);
                dragCardRef.current = null;
                document.body.style.cursor = "";
            }
        }
    }["usePipelineBoard.useCallback[handleDrop]"], [
        activeFunnel,
        announce,
        canMoveCards,
        dropIndicator,
        localOpportunities,
        runWithTimeout,
        setLocalOpportunities,
        stopAutoScroll
    ]);
    const handleDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePipelineBoard.useCallback[handleDragEnd]": ()=>{
            setDraggingCardId(null);
            setDraggingCardStage(null);
            setDraggingOpportunity(null);
            setDragOverStage(null);
            setDropIndicator(null);
            dragCardRef.current = null;
            document.body.style.cursor = "";
            stopAutoScroll();
        }
    }["usePipelineBoard.useCallback[handleDragEnd]"], [
        stopAutoScroll
    ]);
    return {
        draggingCardId,
        draggingCardStage,
        draggingOpportunity,
        dragOverStage,
        dropIndicator,
        columnError,
        setColumnError,
        successFeedback,
        updatingCardId,
        recentlyMovedCardId,
        handleDragStart,
        handleDragOver,
        handleDragLeave,
        handleDrop,
        handleDragEnd
    };
}
_s(usePipelineBoard, "lM2vtZGGf3s6Bf+iMgmT6gdEoGU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(auth)/pipes/hooks/use-stage-customization.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStageCustomization",
    ()=>useStageCustomization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/pipes/lib/pipeline-config.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const RENAME_MIN_LENGTH = 2;
const RENAME_MAX_LENGTH = 30;
function useStageCustomization() {
    _s();
    const [stageCustomizations, setStageCustomizations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useStageCustomization.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadStageCustomizations"])()
    }["useStageCustomization.useState"]);
    const [renamingStage, setRenamingStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [renameValue, setRenameValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [renameError, setRenameError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const renameInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Persist stage customizations to localStorage on every change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStageCustomization.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStageCustomizations"])(stageCustomizations);
        }
    }["useStageCustomization.useEffect"], [
        stageCustomizations
    ]);
    const startRename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStageCustomization.useCallback[startRename]": (stageId, currentLabel)=>{
            setRenamingStage(stageId);
            setRenameValue(currentLabel);
            setRenameError(null);
            setTimeout({
                "useStageCustomization.useCallback[startRename]": ()=>renameInputRef.current?.focus()
            }["useStageCustomization.useCallback[startRename]"], 50);
        }
    }["useStageCustomization.useCallback[startRename]"], []);
    const confirmRename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStageCustomization.useCallback[confirmRename]": ()=>{
            if (!renamingStage) return;
            const trimmed = renameValue.trim();
            if (trimmed.length < RENAME_MIN_LENGTH) {
                setRenameError(`Mínimo ${RENAME_MIN_LENGTH} caracteres`);
                renameInputRef.current?.focus();
                return;
            }
            if (trimmed.length > RENAME_MAX_LENGTH) {
                setRenameError(`Máximo ${RENAME_MAX_LENGTH} caracteres`);
                renameInputRef.current?.focus();
                return;
            }
            setStageCustomizations({
                "useStageCustomization.useCallback[confirmRename]": (prev)=>({
                        ...prev,
                        [renamingStage]: {
                            ...prev[renamingStage],
                            label: trimmed
                        }
                    })
            }["useStageCustomization.useCallback[confirmRename]"]);
            setRenamingStage(null);
            setRenameValue("");
            setRenameError(null);
        }
    }["useStageCustomization.useCallback[confirmRename]"], [
        renamingStage,
        renameValue
    ]);
    const cancelRename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStageCustomization.useCallback[cancelRename]": ()=>{
            setRenamingStage(null);
            setRenameValue("");
            setRenameError(null);
        }
    }["useStageCustomization.useCallback[cancelRename]"], []);
    const setStageColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStageCustomization.useCallback[setStageColor]": (stageId, colorId)=>{
            setStageCustomizations({
                "useStageCustomization.useCallback[setStageColor]": (prev)=>({
                        ...prev,
                        [stageId]: {
                            ...prev[stageId],
                            colorId
                        }
                    })
            }["useStageCustomization.useCallback[setStageColor]"]);
        }
    }["useStageCustomization.useCallback[setStageColor]"], []);
    const getStageColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStageCustomization.useCallback[getStageColor]": (stageId)=>{
            const colorId = stageCustomizations[stageId]?.colorId || "default";
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stageColorPalette"].find({
                "useStageCustomization.useCallback[getStageColor]": (c)=>c.id === colorId
            }["useStageCustomization.useCallback[getStageColor]"]) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stageColorPalette"][0];
        }
    }["useStageCustomization.useCallback[getStageColor]"], [
        stageCustomizations
    ]);
    return {
        stageCustomizations,
        renamingStage,
        renameValue,
        renameError,
        setRenameValue,
        renameInputRef,
        startRename,
        confirmRename,
        cancelRename,
        setStageColor,
        getStageColor
    };
}
_s(useStageCustomization, "hm0xoDhB85K1IfgbwkYrC13UwRU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DealCardBento",
    ()=>DealCardBento
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tags.js [app-client] (ecmascript) <export default as Tags>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-client] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/ui-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/pipes/lib/pipeline-validation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function formatElapsed(isoDate) {
    const base = new Date(isoDate);
    const now = new Date();
    const diffMs = Math.max(0, now.getTime() - base.getTime());
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours < 1) return "<1h";
    if (diffHours < 24) return `${diffHours}h`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 30) return `${diffDays}d`;
    const diffMonths = Math.floor(diffDays / 30);
    return `${Math.max(1, diffMonths)}m`;
}
function getTemperatureChipClassesByLabel(label) {
    switch(label){
        case "Quente":
            return "border-red-200 bg-red-50 text-red-700";
        case "Morno":
            return "border-amber-200 bg-amber-50 text-amber-700";
        case "Frio":
            return "border-sky-200 bg-sky-50 text-sky-700";
        default:
            return "border-zinc-200 bg-zinc-50 text-zinc-600";
    }
}
function getPriorityVisual(opportunity, slaStatus, computedTempLabel) {
    if (slaStatus === "breached") {
        return {
            label: "Critica",
            className: "border-red-200 bg-red-50 text-red-700"
        };
    }
    if (computedTempLabel === "Quente" || opportunity.value >= 20000) {
        return {
            label: "Alta",
            className: "border-amber-200 bg-amber-50 text-amber-700"
        };
    }
    return {
        label: "Normal",
        className: "border-zinc-200 bg-zinc-50 text-zinc-600"
    };
}
function DealCardBento({ opportunity, temp, isDragging, isUpdating, isHighlighted, canMove = true, canEdit = true, canCreateActivity = true, onOpen, onDragStart, onDragEnd, inlineFeedback, onTagClick }) {
    _s();
    const { openDrawer, openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIStore"])();
    const wasDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const sla = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSlaStatus"])(opportunity.slaDeadline);
    const slaColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSlaColors"])(sla.status);
    const priority = getPriorityVisual(opportunity, sla.status, temp.label);
    const primarySegment = opportunity.tags[0] ?? "Sem segmento";
    const handleDragStartInternal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DealCardBento.useCallback[handleDragStartInternal]": (e)=>{
            wasDraggingRef.current = true;
            onDragStart(e);
        }
    }["DealCardBento.useCallback[handleDragStartInternal]"], [
        onDragStart
    ]);
    const handleDragEndInternal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DealCardBento.useCallback[handleDragEndInternal]": ()=>{
            // Keep wasDragging flag set for the click event that fires after dragEnd
            setTimeout({
                "DealCardBento.useCallback[handleDragEndInternal]": ()=>{
                    wasDraggingRef.current = false;
                }
            }["DealCardBento.useCallback[handleDragEndInternal]"], 0);
            onDragEnd();
        }
    }["DealCardBento.useCallback[handleDragEndInternal]"], [
        onDragEnd
    ]);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DealCardBento.useCallback[handleClick]": ()=>{
            if (wasDraggingRef.current) return;
            onOpen();
        }
    }["DealCardBento.useCallback[handleClick]"], [
        onOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `group relative rounded-[22px] border border-zinc-200/90 border-l-[3px] ${slaColors.border} bg-white p-4 shadow-[var(--shadow-bento-sm)] transition-all duration-300 hover:-translate-y-[1.5px] hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.08)] focus-within:ring-2 focus-within:ring-brand/40 active:scale-[0.98] ${isDragging ? "cursor-grabbing shadow-[0_14px_30px_-18px_rgba(15,23,42,0.38)] scale-[1.02]" : canMove ? "cursor-grab" : "cursor-pointer"} ${isUpdating ? "opacity-60 saturate-50 pointer-events-none" : ""} ${isHighlighted ? "ring-2 ring-emerald-300/70" : ""}`,
        onClick: handleClick,
        draggable: canMove,
        onDragStart: handleDragStartInternal,
        onDragEnd: handleDragEndInternal,
        tabIndex: 0,
        role: "button",
        "aria-roledescription": "card arrastavel",
        "aria-label": `${opportunity.title}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(opportunity.value)}, prioridade ${priority.label}`,
        onKeyDown: (e)=>{
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen();
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-0 flex-1 truncate font-heading text-[17px] font-semibold text-zinc-950",
                        children: opportunity.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex h-6 shrink-0 items-center rounded-full border px-2.5 text-[11px] font-semibold ${priority.className}`,
                        children: priority.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-zinc-400 opacity-0 transition-opacity hover:bg-zinc-100 hover:text-zinc-600 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                                    onClick: (e)=>e.stopPropagation(),
                                    onPointerDown: (e)=>e.stopPropagation(),
                                    "aria-label": "Acoes da oportunidade",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "rounded-[var(--radius-bento-card)]",
                                onClick: (e)=>e.stopPropagation(),
                                onCloseAutoFocus: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        disabled: !canEdit,
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onOpen();
                                        },
                                        children: "Editar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        disabled: !canCreateActivity,
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            openDrawer("new-activity", {
                                                opportunityId: opportunity.id
                                            });
                                        },
                                        children: "Nova atividade"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        disabled: !canEdit,
                                        className: "text-status-success",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            openModal("win-opportunity", {
                                                opportunityId: opportunity.id
                                            });
                                        },
                                        children: "Marcar como Ganho"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        disabled: !canEdit,
                                        className: "text-status-danger",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            openModal("lose-opportunity", {
                                                opportunityId: opportunity.id
                                            });
                                        },
                                        children: "Marcar como Perdido"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-heading text-[20px] font-bold tracking-tight text-zinc-950",
                        children: opportunity.value > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(opportunity.value) : "Sem valor"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getTemperatureChipClassesByLabel(temp.label)}`,
                        children: [
                            temp.icon,
                            temp.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center justify-between gap-2 text-[12px] text-zinc-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex min-w-0 flex-1 items-center gap-1.5 truncate",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "h-3.5 w-3.5 shrink-0 text-zinc-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            opportunity.neighborhood || "Sem localizacao"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex shrink-0 items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-600 transition-colors", onTagClick && primarySegment !== "Sem segmento" && "cursor-pointer hover:bg-zinc-100 hover:text-zinc-900"),
                        onClick: (e)=>{
                            if (onTagClick && primarySegment !== "Sem segmento") {
                                e.stopPropagation();
                                onTagClick(primarySegment);
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__["Tags"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            primarySegment
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2.5 grid grid-cols-2 gap-2 text-[11px] text-zinc-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                className: "h-3.5 w-3.5 shrink-0 text-zinc-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            "Ultima atividade ",
                            formatElapsed(opportunity.updatedAt)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center justify-end gap-1.5 text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                className: "h-3.5 w-3.5 shrink-0 text-zinc-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            "No pipeline ha ",
                            formatElapsed(opportunity.createdAt)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2.5 flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex min-w-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${sla.status === "breached" ? "border-red-200 bg-red-50 text-red-700" : sla.status === "near" ? "border-amber-200 bg-amber-50 text-amber-700" : "border-zinc-200 bg-zinc-50 text-zinc-600"}`,
                        children: [
                            sla.status === "breached" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this),
                            sla.status === "breached" ? "Estourado" : `SLA ${sla.label || "ok"}`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 font-heading text-[10px] font-semibold text-white",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitials"])(opportunity.responsibleName)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                children: opportunity.responsibleName
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            opportunity.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-center gap-1.5",
                children: [
                    opportunity.tags.slice(0, 2).map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "secondary",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-body text-[10px] text-zinc-600 transition-colors", onTagClick && "cursor-pointer hover:bg-zinc-100 hover:text-zinc-900"),
                            onClick: (e)=>{
                                if (onTagClick) {
                                    e.stopPropagation();
                                    onTagClick(tag);
                                }
                            },
                            children: tag
                        }, idx, false, {
                            fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this)),
                    opportunity.tags.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    className: "shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-body text-[10px] text-zinc-600",
                                    children: [
                                        "+",
                                        opportunity.tags.length - 2
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                    lineNumber: 360,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 359,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                children: opportunity.tags.slice(2).join(", ")
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                lineNumber: 367,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                        lineNumber: 358,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                lineNumber: 339,
                columnNumber: 9
            }, this),
            inlineFeedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mt-3 rounded-xl border px-2.5 py-2 text-[11px] ${inlineFeedback.tone === "error" ? "border-red-200 bg-red-50 text-red-700" : inlineFeedback.tone === "warning" ? "border-amber-200 bg-amber-50 text-amber-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`,
                role: inlineFeedback.tone === "error" ? "alert" : "status",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-1.5",
                    children: [
                        inlineFeedback.tone === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "mt-0.5 h-3.5 w-3.5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                            lineNumber: 387,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "mt-0.5 h-3.5 w-3.5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                            lineNumber: 389,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: inlineFeedback.message
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this),
                                inlineFeedback.actionLabel && inlineFeedback.onAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: (event)=>{
                                        event.stopPropagation();
                                        inlineFeedback.onAction?.();
                                    },
                                    className: "mt-1 font-semibold underline underline-offset-2",
                                    children: inlineFeedback.actionLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                                    lineNumber: 394,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                    lineNumber: 385,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                lineNumber: 376,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: sla.detailLabel
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s(DealCardBento, "ZPRbsaLGzrZR2rfLStTdqD2f97I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIStore"]
    ];
});
_c = DealCardBento;
var _c;
__turbopack_context__.k.register(_c, "DealCardBento");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-md bg-slate-200/75", "before:absolute before:inset-0 before:animate-pulse", "before:bg-linear-to-r before:from-transparent before:via-white/70 before:to-transparent", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PipelineSkeleton",
    ()=>PipelineSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
"use client";
;
;
function PipelineSkeleton({ stageCount }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[calc(100vh-64px)] flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 space-y-3 pb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-start justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-7 w-52"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-72"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-9 w-[180px] rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-9 w-20 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-9 w-16 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-9 w-28 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 gap-3 overflow-hidden px-7 pb-2",
                children: Array.from({
                    length: stageCount
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-[320px] shrink-0 flex-col rounded-[var(--radius-bento-card)] bg-zinc-50/80 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-2.5 w-2.5 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-4 w-24"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-4 w-6 rounded-md"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-4 w-16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            Array.from({
                                length: 2 - i % 2
                            }).map((_, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 rounded-[var(--radius-bento-card)] border border-zinc-200 bg-white p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-4 w-32"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-4 w-4 rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-3 w-28"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-6 w-6 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-4 w-20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-3 w-12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, j, true, {
                                    fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = PipelineSkeleton;
var _c;
__turbopack_context__.k.register(_c, "PipelineSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/module-command-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModuleCommandHeader",
    ()=>ModuleCommandHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"use client";
;
;
;
const chipToneStyles = {
    neutral: "border-zinc-200 bg-white/92 text-zinc-700",
    info: "border-sky-200 bg-sky-50/88 text-sky-700",
    warning: "border-amber-200 bg-amber-50/88 text-amber-700",
    danger: "border-red-200 bg-red-50/88 text-red-700",
    success: "border-emerald-200 bg-emerald-50/88 text-emerald-700"
};
function renderChip(chip) {
    const isInteractive = Boolean(chip.href || chip.onClick);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("premium-shine inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-full border px-3 text-[12px] font-semibold tracking-tight whitespace-nowrap", isInteractive ? "cursor-pointer transition-all duration-150 ease-out hover:bg-white/75 hover:-translate-y-[1px] active:scale-[0.99] active:translate-y-0" : "cursor-default select-none opacity-90", chipToneStyles[chip.tone ?? "neutral"]);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            chip.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "shrink-0",
                children: chip.icon
            }, void 0, false, {
                fileName: "[project]/src/components/shared/module-command-header.tsx",
                lineNumber: 52,
                columnNumber: 20
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: chip.label
            }, void 0, false, {
                fileName: "[project]/src/components/shared/module-command-header.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    if (chip.href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: chip.href,
            className: classes,
            children: content
        }, chip.id, false, {
            fileName: "[project]/src/components/shared/module-command-header.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    if (chip.onClick) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: chip.onClick,
            className: classes,
            children: content
        }, chip.id, false, {
            fileName: "[project]/src/components/shared/module-command-header.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: classes,
        children: content
    }, chip.id, false, {
        fileName: "[project]/src/components/shared/module-command-header.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function ModuleCommandHeader({ title, titleAccessory, description, actions, actionsClassName, meta, chips = [], fallbackChip, children, className, sticky = false }) {
    const hasChildrenRow = Boolean(children);
    const hasMeta = Boolean(meta);
    const hasChips = Boolean(chips.length > 0 || fallbackChip);
    const hasLowerSection = hasChildrenRow || hasMeta || hasChips;
    const hasLeftBlock = hasChildrenRow || hasMeta;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-[20px] border border-zinc-200/85 bg-zinc-50/88 px-5 pb-4 pt-3", "shadow-[0_10px_24px_-20px_rgba(15,23,42,0.34)] backdrop-blur-sm", sticky && "sticky top-4 z-30", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 top-0 h-14 bg-linear-to-b from-white/72 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/module-command-header.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/module-command-header.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1 max-w-[600px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex min-w-0 items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "min-w-0 font-heading text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/module-command-header.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            titleAccessory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shrink-0",
                                                children: titleAccessory
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/module-command-header.tsx",
                                                lineNumber: 119,
                                                columnNumber: 33
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/module-command-header.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 font-body text-[13.5px] text-zinc-600/90 leading-relaxed",
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/module-command-header.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/module-command-header.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            actions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full min-w-0 shrink-0 flex-wrap items-center gap-2 rounded-[20px] border border-zinc-200/85 bg-white/95 px-2 py-1.5 shadow-[0_8px_16px_-16px_rgba(15,23,42,0.36)]", "xl:w-auto xl:max-w-full xl:justify-end", actionsClassName),
                                children: actions
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/module-command-header.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/module-command-header.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    hasLowerSection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-zinc-200/75 pt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between",
                            children: [
                                hasLeftBlock ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1 space-y-2",
                                    children: [
                                        meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-zinc-500/80",
                                            children: meta
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/module-command-header.tsx",
                                            lineNumber: 143,
                                            columnNumber: 27
                                        }, this) : null,
                                        hasChildrenRow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/module-command-header.tsx",
                                            lineNumber: 144,
                                            columnNumber: 37
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/module-command-header.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this) : null,
                                hasChips ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap items-center gap-2 shrink-0 max-w-full", hasLeftBlock ? "xl:justify-end" : "justify-end"),
                                    children: [
                                        chips.length > 0 ? chips.map((chip)=>renderChip(chip)) : null,
                                        chips.length === 0 && fallbackChip ? renderChip(fallbackChip) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/module-command-header.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/module-command-header.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/module-command-header.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/module-command-header.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/module-command-header.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c = ModuleCommandHeader;
var _c;
__turbopack_context__.k.register(_c, "ModuleCommandHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(auth)/pipes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PipesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-client] (ecmascript) <export default as CircleDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/columns-3.js [app-client] (ecmascript) <export default as Columns3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2d$reset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TimerReset$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer-reset.js [app-client] (ecmascript) <export default as TimerReset>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/ui-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/opportunity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/pipes/lib/pipeline-config.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/pipes/lib/pipeline-validation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$hooks$2f$use$2d$pipeline$2d$board$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/pipes/hooks/use-pipeline-board.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$hooks$2f$use$2d$stage$2d$customization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/pipes/hooks/use-stage-customization.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$components$2f$deal$2d$card$2d$bento$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/pipes/components/deal-card-bento.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$components$2f$pipeline$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/pipes/components/pipeline-skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$module$2d$command$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/module-command-header.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
;
;
;
const FILTERS_APPLIED_EVENT = "flow:filters-applied";
const STALE_ACTIVITY_DAYS = 5;
const SLA_RISK_WINDOW_HOURS = 24;
const WIP_LIMIT_BY_STAGE = {
    "lead-in": 9,
    "contato-feito": 8,
    "reuniao-agendada": 7,
    "proposta-enviada": 7,
    negociacao: 6,
    fechamento: 5
};
function isStaleOpportunity(opportunity) {
    const updatedAt = new Date(opportunity.updatedAt).getTime();
    const staleThreshold = Date.now() - STALE_ACTIVITY_DAYS * 24 * 60 * 60 * 1000;
    return updatedAt < staleThreshold;
}
function isSlaRiskOpportunity(opportunity) {
    if (!opportunity.slaDeadline) return false;
    const deadline = new Date(opportunity.slaDeadline).getTime();
    const hoursLeft = (deadline - Date.now()) / (1000 * 60 * 60);
    return hoursLeft > 0 && hoursLeft <= SLA_RISK_WINDOW_HOURS;
}
function createEmptyPipesFilters() {
    return {
        responsible: [],
        stage: [],
        temperature: [],
        tags: [],
        dateStart: "",
        dateEnd: "",
        valueMin: "",
        valueMax: "",
        overdue: false,
        stale: false,
        risk: false
    };
}
function getStageParamLabel(stage) {
    return stage.replace(/-/g, " ").replace(/\b\w/g, (char)=>char.toUpperCase());
}
function PipesPageContent() {
    _s();
    const { openDrawer, openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIStore"])();
    const { user, permissions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const storeOpportunities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"])({
        "PipesPageContent.useOpportunityStore[storeOpportunities]": (state)=>state.opportunities
    }["PipesPageContent.useOpportunityStore[storeOpportunities]"]);
    const replaceOpportunities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"])({
        "PipesPageContent.useOpportunityStore[replaceOpportunities]": (state)=>state.replaceOpportunities
    }["PipesPageContent.useOpportunityStore[replaceOpportunities]"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const userId = user?.id ?? null;
    const canCreateOpportunity = permissions?.canCreateOpportunity ?? false;
    const canMoveCards = permissions?.canEditOpportunity ?? false;
    const canCreateActivity = permissions?.canCreateActivity ?? false;
    const canConfigureStages = permissions?.canManageSettings ?? false;
    const canViewAllUnits = permissions?.canViewAllUnits ?? false;
    const [selectedFunnel, setSelectedFunnel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("comercial");
    const [colorPopoverStage, setColorPopoverStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filtersInlineFeedback, setFiltersInlineFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const opportunities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[opportunities]": ()=>{
            const openOpportunities = storeOpportunities.filter({
                "PipesPageContent.useMemo[opportunities].openOpportunities": (opportunity)=>opportunity.status === "open"
            }["PipesPageContent.useMemo[opportunities].openOpportunities"]);
            if (canViewAllUnits || !userId) {
                return openOpportunities;
            }
            return openOpportunities.filter({
                "PipesPageContent.useMemo[opportunities]": (opportunity)=>opportunity.responsibleId === userId
            }["PipesPageContent.useMemo[opportunities]"]);
        }
    }["PipesPageContent.useMemo[opportunities]"], [
        canViewAllUnits,
        storeOpportunities,
        userId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipesPageContent.useEffect": ()=>{
            const opportunityId = searchParams.get("opportunityId");
            if (!opportunityId) return;
            const opportunity = opportunities.find({
                "PipesPageContent.useEffect.opportunity": (candidate)=>candidate.id === opportunityId
            }["PipesPageContent.useEffect.opportunity"]);
            let feedbackTimeoutId = null;
            if (!opportunity) {
                feedbackTimeoutId = window.setTimeout({
                    "PipesPageContent.useEffect": ()=>{
                        setFiltersInlineFeedback({
                            tone: "error",
                            message: "Não foi possível abrir o card. Oportunidade não encontrada no escopo atual."
                        });
                    }
                }["PipesPageContent.useEffect"], 0);
            } else {
                openModal("lead-card", {
                    id: opportunityId,
                    opportunitySnapshot: opportunity
                });
            }
            const nextParams = new URLSearchParams(searchParams.toString());
            nextParams.delete("opportunityId");
            const serialized = nextParams.toString();
            router.replace(serialized ? `/pipes?${serialized}` : "/pipes", {
                scroll: false
            });
            return ({
                "PipesPageContent.useEffect": ()=>{
                    if (feedbackTimeoutId) {
                        window.clearTimeout(feedbackTimeoutId);
                    }
                }
            })["PipesPageContent.useEffect"];
        }
    }["PipesPageContent.useEffect"], [
        openModal,
        opportunities,
        router,
        searchParams
    ]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchInputValue, setSearchInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isMobileSearchOpen, setIsMobileSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [globalPipesFilters, setGlobalPipesFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipesPageContent.useEffect": ()=>{
            const rawFilterParam = searchParams.get("filter") ?? searchParams.get("filters");
            if (!rawFilterParam) return;
            const filterTokens = rawFilterParam.split(",").map({
                "PipesPageContent.useEffect.filterTokens": (token)=>token.trim()
            }["PipesPageContent.useEffect.filterTokens"]).filter(Boolean);
            const frameId = window.requestAnimationFrame({
                "PipesPageContent.useEffect.frameId": ()=>{
                    setGlobalPipesFilters({
                        "PipesPageContent.useEffect.frameId": (prev)=>{
                            const base = prev ?? createEmptyPipesFilters();
                            const next = {
                                ...base,
                                overdue: false,
                                stale: false,
                                risk: false
                            };
                            for (const token of filterTokens){
                                if (token === "sla_overdue") next.overdue = true;
                                if (token === "sla_risk" || token === "risk") next.risk = true;
                                if (token === "stale" || token === "stalled" || token === "no_activity") {
                                    next.stale = true;
                                }
                            }
                            if (base.overdue === next.overdue && base.stale === next.stale && Boolean(base.risk) === Boolean(next.risk)) {
                                return prev ?? next;
                            }
                            return next;
                        }
                    }["PipesPageContent.useEffect.frameId"]);
                }
            }["PipesPageContent.useEffect.frameId"]);
            return ({
                "PipesPageContent.useEffect": ()=>window.cancelAnimationFrame(frameId)
            })["PipesPageContent.useEffect"];
        }
    }["PipesPageContent.useEffect"], [
        searchParams
    ]);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileSearchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const liveRegionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeFunnel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["funnels"].find((funnel)=>funnel.id === selectedFunnel) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["funnels"][0];
    const activeStageIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[activeStageIds]": ()=>activeFunnel.stages.map({
                "PipesPageContent.useMemo[activeStageIds]": (stage)=>stage.id
            }["PipesPageContent.useMemo[activeStageIds]"])
    }["PipesPageContent.useMemo[activeStageIds]"], [
        activeFunnel
    ]);
    const stageFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[stageFilter]": ()=>{
            const raw = searchParams.get("stage") ?? searchParams.get("stageId");
            if (!raw) return null;
            const candidate = raw;
            return activeStageIds.includes(candidate) ? candidate : null;
        }
    }["PipesPageContent.useMemo[stageFilter]"], [
        searchParams,
        activeStageIds
    ]);
    const visibleStages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[visibleStages]": ()=>stageFilter ? activeFunnel.stages.filter({
                "PipesPageContent.useMemo[visibleStages]": (stage)=>stage.id === stageFilter
            }["PipesPageContent.useMemo[visibleStages]"]) : activeFunnel.stages
    }["PipesPageContent.useMemo[visibleStages]"], [
        activeFunnel,
        stageFilter
    ]);
    const effectiveStageIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[effectiveStageIds]": ()=>stageFilter ? [
                stageFilter
            ] : activeStageIds
    }["PipesPageContent.useMemo[effectiveStageIds]"], [
        stageFilter,
        activeStageIds
    ]);
    const setScopedOpportunities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PipesPageContent.useCallback[setScopedOpportunities]": (next)=>{
            const previousScoped = opportunities;
            const nextScoped = typeof next === "function" ? next(previousScoped) : next;
            const scopedIds = new Set(previousScoped.map({
                "PipesPageContent.useCallback[setScopedOpportunities]": (opportunity)=>opportunity.id
            }["PipesPageContent.useCallback[setScopedOpportunities]"]));
            const nextScopedById = new Map(nextScoped.map({
                "PipesPageContent.useCallback[setScopedOpportunities]": (opportunity)=>[
                        opportunity.id,
                        opportunity
                    ]
            }["PipesPageContent.useCallback[setScopedOpportunities]"]));
            const nextGlobal = storeOpportunities.map({
                "PipesPageContent.useCallback[setScopedOpportunities].nextGlobal": (opportunity)=>{
                    if (!scopedIds.has(opportunity.id)) return opportunity;
                    return nextScopedById.get(opportunity.id) ?? opportunity;
                }
            }["PipesPageContent.useCallback[setScopedOpportunities].nextGlobal"]);
            for (const opportunity of nextScoped){
                if (!storeOpportunities.some({
                    "PipesPageContent.useCallback[setScopedOpportunities]": (current)=>current.id === opportunity.id
                }["PipesPageContent.useCallback[setScopedOpportunities]"])) {
                    nextGlobal.push(opportunity);
                }
            }
            replaceOpportunities(nextGlobal);
        }
    }["PipesPageContent.useCallback[setScopedOpportunities]"], [
        opportunities,
        replaceOpportunities,
        storeOpportunities
    ]);
    const announce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PipesPageContent.useCallback[announce]": (message)=>{
            if (liveRegionRef.current) {
                liveRegionRef.current.textContent = message;
            }
        }
    }["PipesPageContent.useCallback[announce]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipesPageContent.useEffect": ()=>{
            const timer = window.setTimeout({
                "PipesPageContent.useEffect.timer": ()=>setIsLoading(false)
            }["PipesPageContent.useEffect.timer"], 600);
            return ({
                "PipesPageContent.useEffect": ()=>window.clearTimeout(timer)
            })["PipesPageContent.useEffect"];
        }
    }["PipesPageContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipesPageContent.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const handleFiltersApplied = {
                "PipesPageContent.useEffect.handleFiltersApplied": (event)=>{
                    const customEvent = event;
                    if (customEvent.detail?.context !== "pipes") return;
                    if (customEvent.detail?.filters) {
                        setGlobalPipesFilters(customEvent.detail.filters);
                    }
                    const count = Number(customEvent.detail?.count ?? 0);
                    if (Number.isFinite(count) && count >= 0) {
                        setFiltersInlineFeedback({
                            tone: "success",
                            message: count > 0 ? `${count} filtro(s) aplicado(s) no pipeline.` : "Filtros aplicados. Nenhum critério ativo."
                        });
                    }
                }
            }["PipesPageContent.useEffect.handleFiltersApplied"];
            window.addEventListener(FILTERS_APPLIED_EVENT, handleFiltersApplied);
            return ({
                "PipesPageContent.useEffect": ()=>window.removeEventListener(FILTERS_APPLIED_EVENT, handleFiltersApplied)
            })["PipesPageContent.useEffect"];
        }
    }["PipesPageContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipesPageContent.useEffect": ()=>{
            if (!filtersInlineFeedback) return;
            const timer = window.setTimeout({
                "PipesPageContent.useEffect.timer": ()=>setFiltersInlineFeedback(null)
            }["PipesPageContent.useEffect.timer"], 2200);
            return ({
                "PipesPageContent.useEffect": ()=>window.clearTimeout(timer)
            })["PipesPageContent.useEffect"];
        }
    }["PipesPageContent.useEffect"], [
        filtersInlineFeedback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipesPageContent.useEffect": ()=>{
            const timer = window.setTimeout({
                "PipesPageContent.useEffect.timer": ()=>{
                    setSearchQuery(searchInputValue);
                }
            }["PipesPageContent.useEffect.timer"], 250);
            return ({
                "PipesPageContent.useEffect": ()=>window.clearTimeout(timer)
            })["PipesPageContent.useEffect"];
        }
    }["PipesPageContent.useEffect"], [
        searchInputValue
    ]);
    const normalizedSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[normalizedSearch]": ()=>searchQuery.toLowerCase().trim()
    }["PipesPageContent.useMemo[normalizedSearch]"], [
        searchQuery
    ]);
    const activeCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[activeCards]": ()=>opportunities.filter({
                "PipesPageContent.useMemo[activeCards]": (opportunity)=>effectiveStageIds.includes(opportunity.stage)
            }["PipesPageContent.useMemo[activeCards]"])
    }["PipesPageContent.useMemo[activeCards]"], [
        effectiveStageIds,
        opportunities
    ]);
    const averageDealValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[averageDealValue]": ()=>{
            if (activeCards.length === 0) return 10000;
            return activeCards.reduce({
                "PipesPageContent.useMemo[averageDealValue]": (acc, opportunity)=>acc + opportunity.value
            }["PipesPageContent.useMemo[averageDealValue]"], 0) / activeCards.length;
        }
    }["PipesPageContent.useMemo[averageDealValue]"], [
        activeCards
    ]);
    const resolveTemperature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PipesPageContent.useCallback[resolveTemperature]": (opportunity)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateTemperature"])(opportunity, averageDealValue)
    }["PipesPageContent.useCallback[resolveTemperature]"], [
        averageDealValue
    ]);
    const getTemp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PipesPageContent.useCallback[getTemp]": (opportunity)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["temperatureConfig"][resolveTemperature(opportunity)]
    }["PipesPageContent.useCallback[getTemp]"], [
        resolveTemperature
    ]);
    const opportunitiesByStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[opportunitiesByStage]": ()=>{
            const grouped = {
                "lead-in": [],
                "contato-feito": [],
                "reuniao-agendada": [],
                "proposta-enviada": [],
                negociacao: [],
                fechamento: []
            };
            for (const opportunity of opportunities){
                if (!effectiveStageIds.includes(opportunity.stage)) continue;
                if (normalizedSearch) {
                    const textMatch = opportunity.title.toLowerCase().includes(normalizedSearch) || opportunity.clientName.toLowerCase().includes(normalizedSearch) || opportunity.tags.some({
                        "PipesPageContent.useMemo[opportunitiesByStage]": (tag)=>tag.toLowerCase().includes(normalizedSearch)
                    }["PipesPageContent.useMemo[opportunitiesByStage]"]);
                    const numericSearch = normalizedSearch.replace(/\D/g, "");
                    const valueMatch = numericSearch.length > 0 && String(opportunity.value).includes(numericSearch);
                    if (!textMatch && !valueMatch) {
                        continue;
                    }
                }
                const computedTemperature = resolveTemperature(opportunity);
                if (globalPipesFilters) {
                    if (globalPipesFilters.temperature?.length > 0 && !globalPipesFilters.temperature.includes(computedTemperature)) continue;
                    if (globalPipesFilters.responsible?.length > 0 && !globalPipesFilters.responsible.includes(opportunity.responsibleId)) continue;
                    if (globalPipesFilters.tags?.length > 0 && !globalPipesFilters.tags.some({
                        "PipesPageContent.useMemo[opportunitiesByStage]": (t)=>opportunity.tags.includes(t)
                    }["PipesPageContent.useMemo[opportunitiesByStage]"])) continue;
                    if (globalPipesFilters.overdue && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSlaStatus"])(opportunity.slaDeadline).status !== "breached") continue;
                    if (globalPipesFilters.risk && !isSlaRiskOpportunity(opportunity)) continue;
                    if (globalPipesFilters.stale && !isStaleOpportunity(opportunity)) continue;
                    if (globalPipesFilters.stage?.length > 0 && !globalPipesFilters.stage.includes(opportunity.stage)) continue;
                    const referenceDate = (opportunity.expectedCloseDate ?? opportunity.updatedAt).slice(0, 10);
                    if (globalPipesFilters.dateStart && referenceDate < globalPipesFilters.dateStart) continue;
                    if (globalPipesFilters.dateEnd && referenceDate > globalPipesFilters.dateEnd) continue;
                    const valueMin = Number(globalPipesFilters.valueMin || 0);
                    if (Number.isFinite(valueMin) && valueMin > 0 && opportunity.value < valueMin) continue;
                    const valueMax = Number(globalPipesFilters.valueMax || 0);
                    if (Number.isFinite(valueMax) && valueMax > 0 && opportunity.value > valueMax) continue;
                }
                grouped[opportunity.stage].push(opportunity);
            }
            return grouped;
        }
    }["PipesPageContent.useMemo[opportunitiesByStage]"], [
        opportunities,
        effectiveStageIds,
        normalizedSearch,
        resolveTemperature,
        globalPipesFilters
    ]);
    const boardMetrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[boardMetrics]": ()=>{
            const allVisibleCards = Object.values(opportunitiesByStage).flat();
            return {
                totalCards: allVisibleCards.length,
                boardTotal: allVisibleCards.reduce({
                    "PipesPageContent.useMemo[boardMetrics]": (acc, opportunity)=>acc + opportunity.value
                }["PipesPageContent.useMemo[boardMetrics]"], 0),
                overdueCards: allVisibleCards.filter({
                    "PipesPageContent.useMemo[boardMetrics]": (opportunity)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSlaStatus"])(opportunity.slaDeadline).status === "breached"
                }["PipesPageContent.useMemo[boardMetrics]"]).length,
                staleCards: allVisibleCards.filter({
                    "PipesPageContent.useMemo[boardMetrics]": (opportunity)=>isStaleOpportunity(opportunity)
                }["PipesPageContent.useMemo[boardMetrics]"]).length
            };
        }
    }["PipesPageContent.useMemo[boardMetrics]"], [
        opportunitiesByStage
    ]);
    const activeFilterCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[activeFilterCount]": ()=>{
            if (!globalPipesFilters) return stageFilter ? 1 : 0;
            return globalPipesFilters.responsible.length + globalPipesFilters.stage.length + globalPipesFilters.temperature.length + globalPipesFilters.tags.length + (globalPipesFilters.dateStart ? 1 : 0) + (globalPipesFilters.dateEnd ? 1 : 0) + (globalPipesFilters.valueMin ? 1 : 0) + (globalPipesFilters.valueMax ? 1 : 0) + (globalPipesFilters.overdue ? 1 : 0) + (globalPipesFilters.stale ? 1 : 0) + (globalPipesFilters.risk ? 1 : 0) + (stageFilter ? 1 : 0);
        }
    }["PipesPageContent.useMemo[activeFilterCount]"], [
        globalPipesFilters,
        stageFilter
    ]);
    const clearSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PipesPageContent.useCallback[clearSearch]": ()=>{
            setSearchInputValue("");
            setSearchQuery("");
            setIsMobileSearchOpen(false);
        }
    }["PipesPageContent.useCallback[clearSearch]"], []);
    const updateStageFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PipesPageContent.useCallback[updateStageFilter]": (next)=>{
            const params = new URLSearchParams(searchParams.toString());
            if (next === "all") {
                params.delete("stage");
                params.delete("stageId");
            } else {
                params.set("stage", next);
                params.delete("stageId");
            }
            const serialized = params.toString();
            router.replace(serialized ? `/pipes?${serialized}` : "/pipes", {
                scroll: false
            });
        }
    }["PipesPageContent.useCallback[updateStageFilter]"], [
        router,
        searchParams
    ]);
    const clearLocalFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PipesPageContent.useCallback[clearLocalFilters]": ()=>{
            setGlobalPipesFilters(null);
            setFiltersInlineFeedback({
                tone: "info",
                message: "Filtros do pipeline limpos."
            });
            if ("TURBOPACK compile-time truthy", 1) {
                window.dispatchEvent(new CustomEvent("flow:filters-clear", {
                    detail: {
                        context: "pipes"
                    }
                }));
            }
            setSearchInputValue("");
            setSearchQuery("");
            setIsMobileSearchOpen(false);
            const params = new URLSearchParams(searchParams.toString());
            params.delete("filter");
            params.delete("filters");
            params.delete("stage");
            params.delete("stageId");
            const serialized = params.toString();
            router.replace(serialized ? `/pipes?${serialized}` : "/pipes", {
                scroll: false
            });
        }
    }["PipesPageContent.useCallback[clearLocalFilters]"], [
        router,
        searchParams
    ]);
    const toggleQuickFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PipesPageContent.useCallback[toggleQuickFilter]": (key)=>{
            setGlobalPipesFilters({
                "PipesPageContent.useCallback[toggleQuickFilter]": (prev)=>{
                    const base = prev ?? createEmptyPipesFilters();
                    const next = {
                        ...base,
                        [key]: !base[key]
                    };
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent("flow:filters-update", {
                            detail: {
                                context: "pipes",
                                filters: next
                            }
                        }));
                    }
                    return next;
                }
            }["PipesPageContent.useCallback[toggleQuickFilter]"]);
        }
    }["PipesPageContent.useCallback[toggleQuickFilter]"], []);
    const handleFunnelChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PipesPageContent.useCallback[handleFunnelChange]": (pipelineId)=>{
            setSelectedFunnel(pipelineId);
            if (searchInputValue) {
                clearSearch();
            }
            updateStageFilter("all");
        }
    }["PipesPageContent.useCallback[handleFunnelChange]"], [
        clearSearch,
        searchInputValue,
        updateStageFilter
    ]);
    const metricChips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[metricChips]": ()=>{
            const chips = [
                {
                    id: "pipeline-total",
                    label: `Pipeline: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(boardMetrics.boardTotal)}`,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                        lineNumber: 557,
                        columnNumber: 17
                    }, this),
                    tone: "info"
                },
                {
                    id: "stages-visible",
                    label: `Etapas: ${visibleStages.length}`,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns3$3e$__["Columns3"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                        lineNumber: 563,
                        columnNumber: 17
                    }, this),
                    tone: "neutral"
                },
                {
                    id: "cards-total",
                    label: `Cards: ${boardMetrics.totalCards}`,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                        lineNumber: 569,
                        columnNumber: 17
                    }, this),
                    tone: "neutral"
                },
                {
                    id: "cards-overdue",
                    label: `Estourados: ${boardMetrics.overdueCards}`,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                        lineNumber: 575,
                        columnNumber: 17
                    }, this),
                    tone: globalPipesFilters?.overdue ? "danger" : "neutral",
                    onClick: {
                        "PipesPageContent.useMemo[metricChips]": ()=>toggleQuickFilter("overdue")
                    }["PipesPageContent.useMemo[metricChips]"]
                },
                {
                    id: "cards-stale",
                    label: `Sem atividade: ${boardMetrics.staleCards}`,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2d$reset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TimerReset$3e$__["TimerReset"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                        lineNumber: 582,
                        columnNumber: 17
                    }, this),
                    tone: globalPipesFilters?.stale ? "warning" : "neutral",
                    onClick: {
                        "PipesPageContent.useMemo[metricChips]": ()=>toggleQuickFilter("stale")
                    }["PipesPageContent.useMemo[metricChips]"]
                }
            ];
            return chips;
        }
    }["PipesPageContent.useMemo[metricChips]"], [
        boardMetrics.boardTotal,
        boardMetrics.overdueCards,
        boardMetrics.staleCards,
        boardMetrics.totalCards,
        visibleStages.length,
        globalPipesFilters,
        toggleQuickFilter
    ]);
    const activeFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipesPageContent.useMemo[activeFilters]": ()=>{
            const filters = [];
            if (globalPipesFilters) {
                const dispatchUpdate = {
                    "PipesPageContent.useMemo[activeFilters].dispatchUpdate": (newFilters)=>{
                        setGlobalPipesFilters(newFilters);
                        if ("TURBOPACK compile-time truthy", 1) {
                            window.dispatchEvent(new CustomEvent("flow:filters-update", {
                                detail: {
                                    context: "pipes",
                                    filters: newFilters
                                }
                            }));
                        }
                    }
                }["PipesPageContent.useMemo[activeFilters].dispatchUpdate"];
                if (globalPipesFilters.temperature?.length > 0) {
                    filters.push({
                        id: "temp",
                        label: `Temperatura: ${globalPipesFilters.temperature.map({
                            "PipesPageContent.useMemo[activeFilters]": (t)=>t === "hot" ? "Quente" : t === "warm" ? "Morna" : "Fria"
                        }["PipesPageContent.useMemo[activeFilters]"]).join(", ")}`,
                        onRemove: {
                            "PipesPageContent.useMemo[activeFilters]": ()=>dispatchUpdate({
                                    ...globalPipesFilters,
                                    temperature: []
                                })
                        }["PipesPageContent.useMemo[activeFilters]"]
                    });
                }
                if (globalPipesFilters.responsible?.length > 0) {
                    filters.push({
                        id: "owner",
                        label: `Donos: ${globalPipesFilters.responsible.length}`,
                        onRemove: {
                            "PipesPageContent.useMemo[activeFilters]": ()=>dispatchUpdate({
                                    ...globalPipesFilters,
                                    responsible: []
                                })
                        }["PipesPageContent.useMemo[activeFilters]"]
                    });
                }
                if (globalPipesFilters.tags?.length > 0) {
                    filters.push({
                        id: "segment",
                        label: `Tags: ${globalPipesFilters.tags.join(", ")}`,
                        onRemove: {
                            "PipesPageContent.useMemo[activeFilters]": ()=>dispatchUpdate({
                                    ...globalPipesFilters,
                                    tags: []
                                })
                        }["PipesPageContent.useMemo[activeFilters]"]
                    });
                }
                if (globalPipesFilters.stage?.length > 0) {
                    filters.push({
                        id: "stage-filters",
                        label: `Etapas: ${globalPipesFilters.stage.length}`,
                        onRemove: {
                            "PipesPageContent.useMemo[activeFilters]": ()=>dispatchUpdate({
                                    ...globalPipesFilters,
                                    stage: []
                                })
                        }["PipesPageContent.useMemo[activeFilters]"]
                    });
                }
                if (globalPipesFilters.dateStart || globalPipesFilters.dateEnd) {
                    filters.push({
                        id: "period",
                        label: `Periodo: ${globalPipesFilters.dateStart || "..."} ate ${globalPipesFilters.dateEnd || "..."}`,
                        onRemove: {
                            "PipesPageContent.useMemo[activeFilters]": ()=>dispatchUpdate({
                                    ...globalPipesFilters,
                                    dateStart: "",
                                    dateEnd: ""
                                })
                        }["PipesPageContent.useMemo[activeFilters]"]
                    });
                }
                if (globalPipesFilters.valueMin || globalPipesFilters.valueMax) {
                    const minLabel = globalPipesFilters.valueMin ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(Number(globalPipesFilters.valueMin)) : "...";
                    const maxLabel = globalPipesFilters.valueMax ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(Number(globalPipesFilters.valueMax)) : "...";
                    filters.push({
                        id: "value-range",
                        label: `Valor: ${minLabel} ate ${maxLabel}`,
                        onRemove: {
                            "PipesPageContent.useMemo[activeFilters]": ()=>dispatchUpdate({
                                    ...globalPipesFilters,
                                    valueMin: "",
                                    valueMax: ""
                                })
                        }["PipesPageContent.useMemo[activeFilters]"]
                    });
                }
                if (globalPipesFilters.overdue) {
                    filters.push({
                        id: "overdue",
                        label: "Somente estourados",
                        onRemove: {
                            "PipesPageContent.useMemo[activeFilters]": ()=>dispatchUpdate({
                                    ...globalPipesFilters,
                                    overdue: false
                                })
                        }["PipesPageContent.useMemo[activeFilters]"]
                    });
                }
                if (globalPipesFilters.risk) {
                    filters.push({
                        id: "risk",
                        label: "Somente em risco",
                        onRemove: {
                            "PipesPageContent.useMemo[activeFilters]": ()=>dispatchUpdate({
                                    ...globalPipesFilters,
                                    risk: false
                                })
                        }["PipesPageContent.useMemo[activeFilters]"]
                    });
                }
                if (globalPipesFilters.stale) {
                    filters.push({
                        id: "stale",
                        label: "Somente sem atividade",
                        onRemove: {
                            "PipesPageContent.useMemo[activeFilters]": ()=>dispatchUpdate({
                                    ...globalPipesFilters,
                                    stale: false
                                })
                        }["PipesPageContent.useMemo[activeFilters]"]
                    });
                }
            }
            if (stageFilter) {
                filters.push({
                    id: "stage",
                    label: `Etapa: ${activeFunnel.stages.find({
                        "PipesPageContent.useMemo[activeFilters]": (stage)=>stage.id === stageFilter
                    }["PipesPageContent.useMemo[activeFilters]"])?.label ?? getStageParamLabel(stageFilter)}`,
                    onRemove: {
                        "PipesPageContent.useMemo[activeFilters]": ()=>updateStageFilter("all")
                    }["PipesPageContent.useMemo[activeFilters]"]
                });
            }
            return filters;
        }
    }["PipesPageContent.useMemo[activeFilters]"], [
        globalPipesFilters,
        stageFilter,
        activeFunnel.stages,
        updateStageFilter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipesPageContent.useEffect": ()=>{
            if (!normalizedSearch) return;
            const total = Object.values(opportunitiesByStage).reduce({
                "PipesPageContent.useEffect.total": (acc, cards)=>acc + cards.length
            }["PipesPageContent.useEffect.total"], 0);
            announce(`${total} cards encontrados para "${searchQuery}"`);
        }
    }["PipesPageContent.useEffect"], [
        announce,
        normalizedSearch,
        opportunitiesByStage,
        searchQuery
    ]);
    const { draggingCardId, draggingOpportunity, dragOverStage, dropIndicator, columnError, setColumnError, successFeedback, updatingCardId, recentlyMovedCardId, handleDragStart, handleDragOver, handleDragLeave, handleDrop, handleDragEnd } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$hooks$2f$use$2d$pipeline$2d$board$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePipelineBoard"])({
        localOpportunities: opportunities,
        setLocalOpportunities: setScopedOpportunities,
        activeFunnel,
        announce,
        canMoveCards
    });
    const { stageCustomizations, renamingStage, renameValue, renameError, setRenameValue, renameInputRef, startRename, confirmRename, cancelRename, setStageColor, getStageColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$hooks$2f$use$2d$stage$2d$customization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStageCustomization"])();
    const getDropPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PipesPageContent.useCallback[getDropPreview]": (targetStage)=>{
            if (!draggingOpportunity || dragOverStage !== targetStage) return null;
            const targetLabel = activeFunnel.stages.find({
                "PipesPageContent.useCallback[getDropPreview]": (stage)=>stage.id === targetStage
            }["PipesPageContent.useCallback[getDropPreview]"])?.label ?? getStageParamLabel(targetStage);
            const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateStageTransition"])(draggingOpportunity, targetStage);
            if (validation.missing.length > 0) {
                return {
                    tone: "error",
                    message: `Bloqueado: faltam ${validation.missing.join(", ")} para mover para ${targetLabel}.`
                };
            }
            if (validation.isRegression) {
                return {
                    tone: "warning",
                    message: `Retrocesso detectado. Solte para mover para ${targetLabel}.`
                };
            }
            // WIP limit warning
            const currentCards = opportunitiesByStage[targetStage] || [];
            const wipLimit = WIP_LIMIT_BY_STAGE[targetStage] ?? 7;
            const isDifferentStage = draggingOpportunity.stage !== targetStage;
            const projectedCount = isDifferentStage ? currentCards.length + 1 : currentCards.length;
            if (projectedCount > wipLimit) {
                return {
                    tone: "warning",
                    message: `WIP excedido (${projectedCount}/${wipLimit}). Solte para mover para ${targetLabel}.`
                };
            }
            return {
                tone: "success",
                message: `Solte para mover para ${targetLabel}.`
            };
        }
    }["PipesPageContent.useCallback[getDropPreview]"], [
        activeFunnel.stages,
        dragOverStage,
        draggingOpportunity,
        opportunitiesByStage
    ]);
    const handleOpenBlockedMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PipesPageContent.useCallback[handleOpenBlockedMove]": ()=>{
            if (!columnError?.cardId) return;
            const blockedOpportunity = opportunities.find({
                "PipesPageContent.useCallback[handleOpenBlockedMove].blockedOpportunity": (opportunity)=>opportunity.id === columnError.cardId
            }["PipesPageContent.useCallback[handleOpenBlockedMove].blockedOpportunity"]);
            openModal("lead-card", {
                id: columnError.cardId,
                focusFields: columnError.missingFields,
                pendingStage: columnError.targetStage,
                initialTab: "empresa",
                opportunitySnapshot: blockedOpportunity
            });
        }
    }["PipesPageContent.useCallback[handleOpenBlockedMove]"], [
        columnError,
        openModal,
        opportunities
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipesPageContent.useEffect": ()=>{
            function handleKeyDown(event) {
                if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
                    event.preventDefault();
                    window.setTimeout({
                        "PipesPageContent.useEffect.handleKeyDown": ()=>searchInputRef.current?.focus()
                    }["PipesPageContent.useEffect.handleKeyDown"], 50);
                    return;
                }
                if (event.key === "Escape") {
                    setIsMobileSearchOpen(false);
                    searchInputRef.current?.blur();
                    mobileSearchInputRef.current?.blur();
                }
            }
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "PipesPageContent.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["PipesPageContent.useEffect"];
        }
    }["PipesPageContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipesPageContent.useEffect": ()=>{
            if (!isMobileSearchOpen) return;
            const timer = window.setTimeout({
                "PipesPageContent.useEffect.timer": ()=>{
                    mobileSearchInputRef.current?.focus();
                }
            }["PipesPageContent.useEffect.timer"], 50);
            return ({
                "PipesPageContent.useEffect": ()=>window.clearTimeout(timer)
            })["PipesPageContent.useEffect"];
        }
    }["PipesPageContent.useEffect"], [
        isMobileSearchOpen
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$components$2f$pipeline$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PipelineSkeleton"], {
            stageCount: visibleStages.length
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
            lineNumber: 823,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: liveRegionRef,
                role: "status",
                "aria-live": "polite",
                "aria-atomic": "true",
                className: "sr-only"
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                lineNumber: 828,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: "hidden",
                animate: "show",
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["screenContainer"],
                className: "flex h-[calc(100dvh-2rem)] min-h-0 w-full max-w-full flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sectionEnter"],
                        className: "shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$module$2d$command$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleCommandHeader"], {
                            title: activeFunnel.label,
                            titleAccessory: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Trocar funil",
                                            className: "premium-shine inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-500 transition-all duration-120 hover:-translate-y-px hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                lineNumber: 853,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 848,
                                            columnNumber: 19
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                        lineNumber: 847,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "start",
                                        className: "w-[270px] rounded-[16px] border-zinc-200 bg-white/95 p-1.5 shadow-[0_18px_30px_-24px_rgba(15,23,42,0.45)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-2.5 pb-2 pt-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-500",
                                                        children: "Selecionar funil"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 861,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-0.5 text-xs text-zinc-500",
                                                        children: "Troque o contexto do board e mantenha o foco operacional."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 864,
                                                        columnNumber: 21
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                lineNumber: 860,
                                                columnNumber: 19
                                            }, void 0),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["funnels"].map((funnel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                    onClick: ()=>handleFunnelChange(funnel.id),
                                                    className: "h-9 rounded-xl px-2.5 font-medium text-zinc-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: funnel.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 875,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        funnel.id === selectedFunnel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-3.5 w-3.5 text-brand"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 877,
                                                            columnNumber: 25
                                                        }, void 0) : null
                                                    ]
                                                }, funnel.id, true, {
                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                    lineNumber: 870,
                                                    columnNumber: 21
                                                }, void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                        lineNumber: 856,
                                        columnNumber: 17
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                lineNumber: 846,
                                columnNumber: 15
                            }, void 0),
                            description: "Mesa de controle do pipeline comercial com prioridade operacional clara.",
                            chips: metricChips,
                            actionsClassName: "gap-2.5 p-2",
                            actions: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative hidden w-[min(38vw,360px)] md:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 889,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            ref: searchInputRef,
                                            value: searchInputValue,
                                            onChange: (event)=>setSearchInputValue(event.target.value),
                                            placeholder: "Buscar atividade, cliente, valor ou segmento",
                                            className: "h-10 rounded-full border-zinc-200 pl-9 pr-16 font-body text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 890,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 rounded-md border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 lg:inline-flex",
                                            children: "Ctrl K"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 897,
                                            columnNumber: 17
                                        }, void 0),
                                        searchInputValue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: clearSearch,
                                            className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600",
                                            "aria-label": "Limpar busca",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                lineNumber: 907,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 901,
                                            columnNumber: 19
                                        }, void 0) : null
                                    ]
                                }, "search", true, {
                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                    lineNumber: 888,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                    open: isMobileSearchOpen,
                                    onOpenChange: setIsMobileSearchOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                className: "h-10 rounded-full px-3 md:hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                    lineNumber: 922,
                                                    columnNumber: 21
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                lineNumber: 917,
                                                columnNumber: 19
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 916,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                            align: "end",
                                            side: "bottom",
                                            sideOffset: 8,
                                            className: "w-[min(92vw,360px)] rounded-[16px] border-zinc-200 bg-white p-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        ref: mobileSearchInputRef,
                                                        value: searchInputValue,
                                                        onChange: (event)=>setSearchInputValue(event.target.value),
                                                        placeholder: "Buscar cards...",
                                                        className: "h-10 w-full rounded-full pl-8 pr-8 font-body text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 933,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    searchInputValue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: clearSearch,
                                                        className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600",
                                                        "aria-label": "Limpar busca",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 947,
                                                            columnNumber: 25
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 941,
                                                        columnNumber: 23
                                                    }, void 0) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                lineNumber: 931,
                                                columnNumber: 19
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 925,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, "mobile-search", true, {
                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                    lineNumber: 911,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    className: "h-10 rounded-full px-4",
                                    onClick: ()=>openDrawer("filters"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 960,
                                            columnNumber: 17
                                        }, void 0),
                                        "Filtros",
                                        activeFilterCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1.5 flex h-5 w-5 items-center justify-center rounded-[7px] bg-zinc-100 text-[10px] font-bold text-zinc-900 border border-zinc-200",
                                            children: activeFilterCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 963,
                                            columnNumber: 19
                                        }, void 0) : null
                                    ]
                                }, "filters", true, {
                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                    lineNumber: 953,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                className: "h-10 rounded-full px-5",
                                                disabled: !canCreateOpportunity,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 975,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    "Novo"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                lineNumber: 970,
                                                columnNumber: 19
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 969,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                            align: "end",
                                            className: "w-[220px] rounded-[16px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                    onClick: ()=>openDrawer("new-opportunity"),
                                                    disabled: !canCreateOpportunity,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 984,
                                                            columnNumber: 21
                                                        }, void 0),
                                                        "Novo card"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                    lineNumber: 980,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                    onClick: ()=>openDrawer("new-opportunity", {
                                                            source: "captura-rapida"
                                                        }),
                                                    disabled: !canCreateOpportunity,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 995,
                                                            columnNumber: 21
                                                        }, void 0),
                                                        "Capturar lead"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                    lineNumber: 987,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 979,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, "new-card", true, {
                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                    lineNumber: 968,
                                    columnNumber: 15
                                }, void 0)
                            ],
                            children: activeFilters.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                role: "group",
                                "aria-label": "Filtros ativos",
                                children: [
                                    activeFilters.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-[28px] items-center gap-1 rounded-full border border-zinc-200/80 bg-white/70 pl-2.5 pr-1 text-[11.5px] font-medium text-zinc-700 shadow-(--shadow-premium-soft)",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate max-w-[140px] sm:max-w-[200px]",
                                                    children: f.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                    lineNumber: 1009,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: f.onRemove,
                                                    className: "ml-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-200 hover:text-zinc-900 focus:outline-none",
                                                    "aria-label": `Remover filtro ${f.label}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 1016,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                    lineNumber: 1010,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, f.id, true, {
                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                            lineNumber: 1005,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: clearLocalFilters,
                                        className: "ml-2 flex h-[26px] items-center justify-center text-[11.5px] font-semibold text-zinc-500 underline decoration-zinc-300 underline-offset-2 transition-colors hover:text-zinc-900",
                                        children: "Limpar tudo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                        lineNumber: 1020,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                lineNumber: 1003,
                                columnNumber: 15
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                            lineNumber: 843,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                        lineNumber: 842,
                        columnNumber: 9
                    }, this),
                    filtersInlineFeedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 rounded-[14px] border px-3.5 py-2 text-xs font-medium", filtersInlineFeedback.tone === "error" ? "border-red-200 bg-red-50 text-red-700" : filtersInlineFeedback.tone === "info" ? "border-sky-200 bg-sky-50 text-sky-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"),
                        role: "status",
                        children: filtersInlineFeedback.message
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                        lineNumber: 1033,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "premium-ambient premium-grain relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-[22px] border border-zinc-200/70 bg-white/72 p-3 shadow-(--shadow-premium-soft) backdrop-blur-sm md:p-4",
                        role: "region",
                        "aria-label": "Pipeline de vendas arrastavel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center justify-between px-1 text-[11px] text-zinc-500 md:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Deslize para ver as etapas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                        lineNumber: 1054,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            visibleStages.length,
                                            " colunas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                        lineNumber: 1055,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                lineNumber: 1053,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-pipe-board-scroll": true,
                                className: "flex min-w-0 flex-1 gap-4 overflow-x-auto scroll-smooth px-1 pb-1 md:gap-5 md:px-2",
                                style: {
                                    scrollSnapType: "x proximity"
                                },
                                children: visibleStages.map((stageDef, index)=>{
                                    const isFiltered = Boolean(normalizedSearch) || activeFilterCount > 0;
                                    const cards = opportunitiesByStage[stageDef.id] || [];
                                    const stageLabel = stageCustomizations[stageDef.id]?.label || stageDef.label;
                                    const stageColor = getStageColor(stageDef.id);
                                    const totalValue = cards.reduce((acc, opportunity)=>acc + opportunity.value, 0);
                                    const isDropTarget = dragOverStage === stageDef.id;
                                    const stageError = columnError?.stage === stageDef.id ? columnError : null;
                                    const stageSuccess = successFeedback?.stage === stageDef.id ? successFeedback : null;
                                    const dropPreview = getDropPreview(stageDef.id);
                                    const stageBreachedCount = cards.filter((opportunity)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSlaStatus"])(opportunity.slaDeadline).status === "breached").length;
                                    const wipLimit = WIP_LIMIT_BY_STAGE[stageDef.id] ?? 7;
                                    const isWipExceeded = cards.length > wipLimit;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        custom: index,
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemReveal"],
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/col flex w-[min(88vw,372px)] shrink-0 flex-col rounded-[22px] border transition-all duration-200 sm:w-[352px]", isDropTarget ? "border-brand/70 bg-brand/5 ring-2 ring-brand/26 shadow-[0_18px_30px_-22px_rgba(37,99,235,0.52)]" : "border-zinc-200/80 bg-white/88"),
                                        style: {
                                            scrollSnapAlign: "start"
                                        },
                                        onDragOver: (event)=>handleDragOver(event, stageDef.id),
                                        onDragLeave: handleDragLeave,
                                        onDrop: (event)=>handleDrop(event, stageDef.id),
                                        role: "list",
                                        "aria-label": `Etapa ${stageLabel}, ${cards.length} cards, total ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(totalValue)}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sticky top-0 z-10 rounded-t-[22px] bg-inherit px-3.5 pb-3 pt-3 backdrop-blur-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-2 h-1 w-full rounded-full bg-zinc-200/70",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-1 rounded-full", stageColor.bg)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 1099,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 1098,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex min-w-0 items-center gap-2",
                                                                children: [
                                                                    canConfigureStages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                                                        open: colorPopoverStage === stageDef.id,
                                                                        onOpenChange: (open)=>setColorPopoverStage(open ? stageDef.id : null),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                                                asChild: true,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-400 shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                                                                                    "aria-label": `Personalizar etapa ${stageLabel}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                                        lineNumber: 1114,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                                    lineNumber: 1110,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                                lineNumber: 1109,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                                                align: "start",
                                                                                className: "w-auto rounded-[16px] p-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mb-2 flex items-center gap-1.5 text-[11px] font-medium text-zinc-600",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                                                                className: "h-3 w-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                                                lineNumber: 1119,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            "Cor da etapa"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                                        lineNumber: 1118,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "grid grid-cols-5 gap-1.5",
                                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stageColorPalette"].map((color)=>{
                                                                                            const isActive = (stageCustomizations[stageDef.id]?.colorId || "default") === color.id;
                                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>{
                                                                                                    setStageColor(stageDef.id, color.id);
                                                                                                    setColorPopoverStage(null);
                                                                                                },
                                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-6 w-6 items-center justify-center rounded-full transition-all", color.bg, isActive ? "ring-2 ring-zinc-900 ring-offset-2" : "hover:ring-2 hover:ring-zinc-300 hover:ring-offset-1"),
                                                                                                title: color.label,
                                                                                                "aria-label": color.label,
                                                                                                children: isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                    className: "h-3 w-3 text-white"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                                                    lineNumber: 1144,
                                                                                                    columnNumber: 51
                                                                                                }, this) : null
                                                                                            }, color.id, false, {
                                                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                                                lineNumber: 1128,
                                                                                                columnNumber: 37
                                                                                            }, this);
                                                                                        })
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                                        lineNumber: 1122,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                                lineNumber: 1117,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                        lineNumber: 1105,
                                                                        columnNumber: 27
                                                                    }, this) : null,
                                                                    renamingStage === stageDef.id && canConfigureStages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex min-w-0 flex-1 flex-col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                ref: renameInputRef,
                                                                                value: renameValue,
                                                                                maxLength: 30,
                                                                                onChange: (event)=>setRenameValue(event.target.value),
                                                                                onBlur: confirmRename,
                                                                                onKeyDown: (event)=>{
                                                                                    if (event.key === "Enter") confirmRename();
                                                                                    if (event.key === "Escape") cancelRename();
                                                                                },
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 w-full truncate rounded-md border bg-white px-1.5 py-0.5 font-heading text-[14px] font-semibold text-zinc-900 outline-none focus:ring-1", renameError ? "border-red-400 focus:border-red-400 focus:ring-red-300" : "border-zinc-300 focus:border-brand focus:ring-brand"),
                                                                                "aria-label": "Renomear etapa",
                                                                                "aria-invalid": Boolean(renameError)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                                lineNumber: 1155,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            renameError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mt-0.5 text-[10px] font-medium text-red-600",
                                                                                role: "alert",
                                                                                children: renameError
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                                lineNumber: 1175,
                                                                                columnNumber: 31
                                                                            }, this) : null
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                        lineNumber: 1154,
                                                                        columnNumber: 27
                                                                    }, this) : canConfigureStages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>startRename(stageDef.id, stageLabel),
                                                                        className: "truncate font-heading text-[15px] font-semibold text-zinc-900 transition-colors hover:text-brand",
                                                                        title: "Clique para renomear",
                                                                        children: stageLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                        lineNumber: 1181,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate font-heading text-[15px] font-semibold text-zinc-900",
                                                                        children: stageLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                        lineNumber: 1189,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "shrink-0 rounded-md bg-zinc-200/80 px-1.5 py-0.5 font-body text-[11px] font-semibold text-zinc-700",
                                                                        children: cards.length
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                        lineNumber: 1194,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                lineNumber: 1103,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "shrink-0 text-[11px] font-semibold text-zinc-500",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(totalValue)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                lineNumber: 1199,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 1102,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex flex-wrap items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-[10px] font-semibold text-zinc-600",
                                                                children: [
                                                                    "SLA ",
                                                                    stageDef.slaHours,
                                                                    "h"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                lineNumber: 1205,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-2 py-1 text-[10px] font-semibold", isWipExceeded ? "border-amber-200 bg-amber-50 text-amber-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"),
                                                                children: [
                                                                    "WIP ",
                                                                    cards.length,
                                                                    "/",
                                                                    wipLimit
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                lineNumber: 1208,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-2 py-1 text-[10px] font-semibold", stageBreachedCount > 0 ? "border-red-200 bg-red-50 text-red-700" : "border-zinc-200 bg-zinc-50 text-zinc-600"),
                                                                children: [
                                                                    "Estourados ",
                                                                    stageBreachedCount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                lineNumber: 1218,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 1204,
                                                        columnNumber: 21
                                                    }, this),
                                                    dropPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 rounded-[14px] border px-2.5 py-2 text-[11px] font-medium", dropPreview.tone === "error" ? "border-red-200 bg-red-50 text-red-700" : dropPreview.tone === "warning" ? "border-amber-200 bg-amber-50 text-amber-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"),
                                                        role: "status",
                                                        children: dropPreview.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 1231,
                                                        columnNumber: 23
                                                    }, this) : null,
                                                    stageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 rounded-[14px] border px-2.5 py-2", stageError.tone === "warning" ? "border-amber-200 bg-amber-50 text-amber-700" : "border-red-200 bg-red-50 text-red-700"),
                                                        role: "alert",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                    className: "mt-0.5 h-3.5 w-3.5 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                    lineNumber: 1257,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[11px] font-medium leading-relaxed",
                                                                            children: stageError.message
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                            lineNumber: 1259,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        stageError.missingFields?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: handleOpenBlockedMove,
                                                                            className: "mt-1 text-[11px] font-semibold underline underline-offset-2",
                                                                            children: "Preencher agora"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                            lineNumber: 1261,
                                                                            columnNumber: 31
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                    lineNumber: 1258,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setColumnError(null),
                                                                    className: "rounded-md p-1 transition hover:bg-black/5 focus:outline-none focus-visible:ring-2",
                                                                    "aria-label": "Fechar aviso",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                        lineNumber: 1275,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                    lineNumber: 1270,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 1256,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 1247,
                                                        columnNumber: 23
                                                    }, this) : null,
                                                    stageSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 rounded-[14px] border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-emerald-700",
                                                        role: "status",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "mt-0.5 h-3.5 w-3.5 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                    lineNumber: 1287,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-medium leading-relaxed",
                                                                    children: stageSuccess.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                    lineNumber: 1288,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 1286,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                        lineNumber: 1282,
                                                        columnNumber: 23
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                lineNumber: 1097,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-pipe-column-scroll": true,
                                                className: "flex-1 overflow-y-auto px-3.5 pb-3.5",
                                                onDragOver: (event)=>handleDragOver(event, stageDef.id),
                                                onDrop: (event)=>handleDrop(event, stageDef.id),
                                                children: cards.length > 0 || isDropTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: (()=>{
                                                        const showPlaceholder = Boolean(draggingCardId && dropIndicator?.stage === stageDef.id);
                                                        const placeholderIndex = showPlaceholder ? Math.min(dropIndicator?.index ?? 0, cards.length) : -1;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                            initial: false,
                                                            children: [
                                                                cards.flatMap((opportunity, idx)=>{
                                                                    const nodes = [];
                                                                    const isDraggingCurrentCard = draggingCardId === opportunity.id;
                                                                    const cardInlineFeedback = stageError?.cardId === opportunity.id ? {
                                                                        tone: stageError.tone === "error" ? "error" : "warning",
                                                                        message: stageError.message,
                                                                        actionLabel: stageError.missingFields?.length ? "Preencher agora" : undefined,
                                                                        onAction: stageError.missingFields?.length ? handleOpenBlockedMove : undefined
                                                                    } : stageSuccess?.cardId === opportunity.id ? {
                                                                        tone: "success",
                                                                        message: stageSuccess.message
                                                                    } : null;
                                                                    if (showPlaceholder && placeholderIndex === idx) {
                                                                        nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                            layout: true,
                                                                            initial: {
                                                                                opacity: 0,
                                                                                scaleY: 0.82,
                                                                                height: 0
                                                                            },
                                                                            animate: {
                                                                                opacity: 1,
                                                                                scaleY: 1,
                                                                                height: 190
                                                                            },
                                                                            exit: {
                                                                                opacity: 0,
                                                                                scaleY: 0.82,
                                                                                height: 0
                                                                            },
                                                                            transition: {
                                                                                duration: 0.18,
                                                                                ease: [
                                                                                    0.22,
                                                                                    1,
                                                                                    0.36,
                                                                                    1
                                                                                ]
                                                                            },
                                                                            className: "rounded-[22px] border border-dashed border-brand/45 bg-brand/5 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.16)]"
                                                                        }, `drop-placeholder-${stageDef.id}-${idx}`, false, {
                                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                            lineNumber: 1338,
                                                                            columnNumber: 37
                                                                        }, this));
                                                                    }
                                                                    nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        layout: true,
                                                                        "data-card-index": idx,
                                                                        animate: {
                                                                            x: stageError?.cardId === opportunity.id ? [
                                                                                -5,
                                                                                5,
                                                                                -4,
                                                                                4,
                                                                                -2,
                                                                                2,
                                                                                0
                                                                            ] : 0
                                                                        },
                                                                        transition: {
                                                                            x: {
                                                                                duration: 0.4,
                                                                                ease: "easeInOut"
                                                                            },
                                                                            layout: {
                                                                                duration: 0.22,
                                                                                ease: [
                                                                                    0.22,
                                                                                    1,
                                                                                    0.36,
                                                                                    1
                                                                                ]
                                                                            }
                                                                        },
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-[transform,opacity,filter] duration-180 ease-out", isDraggingCurrentCard ? "scale-[0.985] opacity-30 saturate-50" : ""),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$components$2f$deal$2d$card$2d$bento$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DealCardBento"], {
                                                                            opportunity: opportunity,
                                                                            temp: getTemp(opportunity),
                                                                            isDragging: isDraggingCurrentCard,
                                                                            isUpdating: updatingCardId === opportunity.id,
                                                                            isHighlighted: recentlyMovedCardId === opportunity.id,
                                                                            canMove: canMoveCards,
                                                                            canEdit: canMoveCards,
                                                                            canCreateActivity: canCreateActivity,
                                                                            inlineFeedback: cardInlineFeedback,
                                                                            onTagClick: (tag)=>{
                                                                                setSearchInputValue(tag);
                                                                                setSearchQuery(tag);
                                                                                window.scrollTo({
                                                                                    top: 0,
                                                                                    behavior: "smooth"
                                                                                });
                                                                                searchInputRef.current?.focus();
                                                                            },
                                                                            onOpen: ()=>openModal("lead-card", {
                                                                                    id: opportunity.id,
                                                                                    opportunitySnapshot: opportunity
                                                                                }),
                                                                            onDragStart: (event)=>handleDragStart(event, opportunity),
                                                                            onDragEnd: handleDragEnd
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                            lineNumber: 1367,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, opportunity.id, false, {
                                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                        lineNumber: 1351,
                                                                        columnNumber: 35
                                                                    }, this));
                                                                    if (idx === cards.length - 1 && showPlaceholder && placeholderIndex >= cards.length) {
                                                                        nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                            layout: true,
                                                                            initial: {
                                                                                opacity: 0,
                                                                                scaleY: 0.82,
                                                                                height: 0
                                                                            },
                                                                            animate: {
                                                                                opacity: 1,
                                                                                scaleY: 1,
                                                                                height: 190
                                                                            },
                                                                            exit: {
                                                                                opacity: 0,
                                                                                scaleY: 0.82,
                                                                                height: 0
                                                                            },
                                                                            transition: {
                                                                                duration: 0.18,
                                                                                ease: [
                                                                                    0.22,
                                                                                    1,
                                                                                    0.36,
                                                                                    1
                                                                                ]
                                                                            },
                                                                            className: "rounded-[22px] border border-dashed border-brand/45 bg-brand/5 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.16)]"
                                                                        }, `drop-placeholder-${stageDef.id}-end`, false, {
                                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                            lineNumber: 1403,
                                                                            columnNumber: 37
                                                                        }, this));
                                                                    }
                                                                    return nodes;
                                                                }),
                                                                cards.length === 0 && isDropTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    layout: true,
                                                                    initial: {
                                                                        opacity: 0,
                                                                        scaleY: 0.82,
                                                                        height: 0
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        scaleY: 1,
                                                                        height: 190
                                                                    },
                                                                    exit: {
                                                                        opacity: 0,
                                                                        scaleY: 0.82,
                                                                        height: 0
                                                                    },
                                                                    transition: {
                                                                        duration: 0.18,
                                                                        ease: [
                                                                            0.22,
                                                                            1,
                                                                            0.36,
                                                                            1
                                                                        ]
                                                                    },
                                                                    className: "rounded-[22px] border border-dashed border-brand/45 bg-brand/5 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.16)]"
                                                                }, `drop-placeholder-empty-${stageDef.id}`, false, {
                                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                    lineNumber: 1419,
                                                                    columnNumber: 33
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 1313,
                                                            columnNumber: 29
                                                        }, this);
                                                    })()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                    lineNumber: 1303,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 flex min-h-[180px] flex-col items-center justify-center rounded-[16px] border-2 border-dashed border-zinc-200 bg-zinc-50/40 px-4 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-zinc-700",
                                                            children: isFiltered ? "Zero resultados no filtro" : "Sem cards nesta etapa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 1435,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-[11px] leading-relaxed text-zinc-500",
                                                            children: isFiltered ? "Tente limpar a busca ou os filtros ativos acima." : "Crie um novo card aqui ou mova um card de outra coluna."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 1438,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 flex flex-wrap items-center justify-center gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                className: "h-8 rounded-full px-3 text-xs",
                                                                onClick: ()=>openDrawer("new-opportunity", {
                                                                        initialStage: stageDef.id
                                                                    }),
                                                                disabled: !canCreateOpportunity,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                        lineNumber: 1452,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Criar card nesta etapa"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                                lineNumber: 1442,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                            lineNumber: 1441,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                    lineNumber: 1434,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                                lineNumber: 1296,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, stageDef.id, true, {
                                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                        lineNumber: 1080,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                                lineNumber: 1058,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                        lineNumber: 1048,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/pipes/page.tsx",
                lineNumber: 836,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PipesPageContent, "k/KlkXXGIYF1s7cqcF1AM2qjB4k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$hooks$2f$use$2d$pipeline$2d$board$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePipelineBoard"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$hooks$2f$use$2d$stage$2d$customization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStageCustomization"]
    ];
});
_c = PipesPageContent;
function PipesPageFallback() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "premium-ambient min-h-[calc(100vh-72px)] p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$components$2f$pipeline$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PipelineSkeleton"], {
            stageCount: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$pipes$2f$lib$2f$pipeline$2d$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["funnels"][0].stages.length
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
            lineNumber: 1472,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
        lineNumber: 1471,
        columnNumber: 5
    }, this);
}
_c1 = PipesPageFallback;
function PipesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PipesPageFallback, {}, void 0, false, {
            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
            lineNumber: 1479,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PipesPageContent, {}, void 0, false, {
            fileName: "[project]/src/app/(auth)/pipes/page.tsx",
            lineNumber: 1480,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/pipes/page.tsx",
        lineNumber: 1479,
        columnNumber: 5
    }, this);
}
_c2 = PipesPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PipesPageContent");
__turbopack_context__.k.register(_c1, "PipesPageFallback");
__turbopack_context__.k.register(_c2, "PipesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_20801e39._.js.map