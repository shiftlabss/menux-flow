module.exports = [
"[project]/src/hooks/use-now.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNow",
    ()=>useNow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useNow(intervalMs = 60_000) {
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = window.setInterval(()=>setNow(new Date()), intervalMs);
        return ()=>window.clearInterval(id);
    }, [
        intervalMs
    ]);
    return now;
}
}),
"[project]/src/app/(auth)/activities/components/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allActivityTypes",
    ()=>allActivityTypes,
    "statusColors",
    ()=>statusColors,
    "statusIconComponents",
    ()=>statusIconComponents,
    "statusLabels",
    ()=>statusLabels,
    "typeColors",
    ()=>typeColors,
    "typeDotColors",
    ()=>typeDotColors,
    "typeIconComponents",
    ()=>typeIconComponents,
    "typeLabels",
    ()=>typeLabels,
    "typeLabelsPt",
    ()=>typeLabelsPt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
;
const typeIconComponents = {
    call: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
    meeting: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    visit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
    task: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"],
    "follow-up": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
    whatsapp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"]
};
const typeLabels = {
    call: "Ligação",
    email: "E-mail",
    meeting: "Reunião",
    visit: "Visita",
    task: "Tarefa",
    "follow-up": "Follow-up",
    whatsapp: "WhatsApp"
};
const typeLabelsPt = {
    call: "Ligações",
    email: "E-mails",
    meeting: "Reuniões",
    visit: "Visitas",
    task: "Tarefas",
    "follow-up": "Follow-ups",
    whatsapp: "WhatsApp"
};
const typeColors = {
    call: {
        bg: "bg-blue-100",
        text: "text-blue-600"
    },
    email: {
        bg: "bg-amber-100",
        text: "text-amber-600"
    },
    meeting: {
        bg: "bg-purple-100",
        text: "text-purple-600"
    },
    visit: {
        bg: "bg-indigo-100",
        text: "text-indigo-600"
    },
    task: {
        bg: "bg-emerald-100",
        text: "text-emerald-600"
    },
    "follow-up": {
        bg: "bg-orange-100",
        text: "text-orange-600"
    },
    whatsapp: {
        bg: "bg-green-100",
        text: "text-green-600"
    }
};
const typeDotColors = {
    call: "bg-blue-500",
    email: "bg-amber-500",
    meeting: "bg-purple-500",
    visit: "bg-indigo-500",
    task: "bg-emerald-500",
    "follow-up": "bg-orange-500",
    whatsapp: "bg-green-500"
};
const allActivityTypes = [
    "call",
    "email",
    "meeting",
    "visit",
    "task",
    "follow-up",
    "whatsapp"
];
const statusIconComponents = {
    pending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
    completed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
    overdue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"],
    cancelled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"]
};
const statusLabels = {
    pending: "Pendente",
    completed: "Concluída",
    overdue: "Atrasada",
    cancelled: "Cancelada"
};
const statusColors = {
    pending: {
        color: "text-status-info",
        dotColor: "bg-status-info",
        bgColor: "bg-status-info-light"
    },
    completed: {
        color: "text-status-success",
        dotColor: "bg-status-success",
        bgColor: "bg-status-success-light"
    },
    overdue: {
        color: "text-status-danger",
        dotColor: "bg-status-danger",
        bgColor: "bg-status-danger-light"
    },
    cancelled: {
        color: "text-zinc-400",
        dotColor: "bg-zinc-400",
        bgColor: "bg-zinc-100"
    }
};
}),
"[project]/src/app/(auth)/activities/components/generated-content-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeneratedContentModal",
    ()=>GeneratedContentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function GeneratedContentModal({ open, onOpenChange, title, description, content }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copyError, setCopyError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleOpenChange = (nextOpen)=>{
        if (nextOpen) {
            setCopied(false);
            setCopyError(null);
        }
        onOpenChange(nextOpen);
    };
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(content);
            setCopied(true);
            setCopyError(null);
            setTimeout(()=>setCopied(false), 2000);
        } catch  {
            setCopyError("Não foi possível copiar agora. Tente novamente.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: handleOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[500px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                                        lineNumber: 59,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                            lineNumber: 63,
                            columnNumber: 37
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mt-2 rounded-md border border-zinc-200 bg-zinc-50 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "whitespace-pre-wrap font-sans text-sm text-zinc-700",
                            children: content
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            size: "icon",
                            variant: "ghost",
                            className: "absolute right-2 top-2 h-8 w-8 text-zinc-500 hover:text-zinc-900",
                            onClick: handleCopy,
                            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-4 w-4 text-emerald-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                                lineNumber: 77,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                                lineNumber: 79,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this),
                copyError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-xs text-red-600",
                    children: copyError
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                    lineNumber: 85,
                    columnNumber: 21
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "gap-2 sm:gap-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogClose"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                children: "Fechar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                                lineNumber: 90,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleCopy,
                            className: "gap-2",
                            children: [
                                copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 35
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 67
                                }, this),
                                copied ? "Copiado" : "Copiar conteúdo"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/activities/components/generated-content-modal.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/(auth)/activities/components/helpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DAY_MS",
    ()=>DAY_MS,
    "addDays",
    ()=>addDays,
    "endOfMonth",
    ()=>endOfMonth,
    "endOfWeek",
    ()=>endOfWeek,
    "formatCompactDateLabel",
    ()=>formatCompactDateLabel,
    "formatDateBR",
    ()=>formatDateBR,
    "formatDateFull",
    ()=>formatDateFull,
    "formatMonthTitle",
    ()=>formatMonthTitle,
    "getActivityChecklist",
    ()=>getActivityChecklist,
    "getActivityInsight",
    ()=>getActivityInsight,
    "getDelayText",
    ()=>getDelayText,
    "getRelativeTimeLabel",
    ()=>getRelativeTimeLabel,
    "getStatusChip",
    ()=>getStatusChip,
    "initials",
    ()=>initials,
    "isActivityOverdue",
    ()=>isActivityOverdue,
    "isSlaRisk",
    ()=>isSlaRisk,
    "parseDateISO",
    ()=>parseDateISO,
    "startOfDay",
    ()=>startOfDay,
    "startOfMonth",
    ()=>startOfMonth,
    "startOfWeek",
    ()=>startOfWeek,
    "toISODate",
    ()=>toISODate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-ssr] (ecmascript)");
;
const DAY_MS = 24 * 60 * 60 * 1000;
function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function parseDateISO(dateStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
}
function toISODate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}
function addDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}
function startOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function startOfWeek(date) {
    const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const day = start.getDay();
    return addDays(start, -day);
}
function endOfWeek(date) {
    const end = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const day = end.getDay();
    return addDays(end, 6 - day);
}
function formatMonthTitle(date) {
    return new Intl.DateTimeFormat("pt-BR", {
        month: "long",
        year: "numeric"
    }).format(date);
}
function formatDateBR(dateStr) {
    return parseDateISO(dateStr).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit"
    });
}
function formatDateFull(dateStr) {
    return parseDateISO(dateStr).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short"
    });
}
function formatCompactDateLabel(date) {
    const parts = new Intl.DateTimeFormat("pt-BR", {
        weekday: "short",
        day: "2-digit",
        month: "short"
    }).formatToParts(date);
    const weekday = (parts.find((part)=>part.type === "weekday")?.value ?? "").replaceAll(".", "").trim();
    const day = parts.find((part)=>part.type === "day")?.value ?? "";
    const month = (parts.find((part)=>part.type === "month")?.value ?? "").replaceAll(".", "").trim();
    return `${weekday.charAt(0).toUpperCase() + weekday.slice(1)}, ${day} ${month}`;
}
function initials(name) {
    return name.split(" ").map((part)=>part[0]).join("").slice(0, 2).toUpperCase();
}
function getDelayText(daysOverdue) {
    if (daysOverdue <= 0) return "";
    if (daysOverdue === 1) return "1 dia de atraso";
    if (daysOverdue < 7) return `${daysOverdue} dias de atraso`;
    if (daysOverdue < 30) {
        const weeks = Math.floor(daysOverdue / 7);
        return weeks === 1 ? "1 semana de atraso" : `${weeks} semanas de atraso`;
    }
    const months = Math.floor(daysOverdue / 30);
    return months === 1 ? "1 mês de atraso" : `${months} meses de atraso`;
}
function isActivityOverdue(activity, now) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActivityOverdueAt"])(activity, now);
}
function isSlaRisk(activity, now) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActivitySlaRiskAt"])(activity, now);
}
function getRelativeTimeLabel(activity, now) {
    const dueDate = startOfDay(parseDateISO(activity.dueDate));
    const today = startOfDay(now);
    const diffDays = Math.floor((dueDate.getTime() - today.getTime()) / DAY_MS);
    if (isActivityOverdue(activity, now)) {
        if (diffDays === 0) {
            return activity.dueTime ? `Atrasada desde ${activity.dueTime}` : "Atrasada hoje";
        }
        return getDelayText(Math.max(1, Math.abs(diffDays)));
    }
    if (diffDays === 0) {
        return activity.dueTime ? `Hoje · ${activity.dueTime}` : "Hoje";
    }
    if (diffDays === 1) return "Amanhã";
    if (diffDays <= 7) return `Em ${diffDays} dias`;
    return formatDateFull(activity.dueDate);
}
function getStatusChip(activity, now) {
    if (activity.status === "completed") {
        return {
            label: "Concluída",
            className: "bg-status-success-light text-status-success border-status-success/20"
        };
    }
    if (activity.status === "cancelled") {
        return {
            label: "Cancelada",
            className: "bg-zinc-100 text-zinc-500 border-zinc-200"
        };
    }
    if (isActivityOverdue(activity, now)) {
        return {
            label: "Atrasada",
            className: "bg-status-danger-light text-status-danger border-status-danger/20"
        };
    }
    const due = startOfDay(parseDateISO(activity.dueDate));
    const today = startOfDay(now);
    if (due.getTime() === today.getTime()) {
        return {
            label: "Hoje",
            className: "bg-status-warning-light text-status-warning border-status-warning/25"
        };
    }
    return {
        label: "Pendente",
        className: "bg-status-info-light text-status-info border-status-info/20"
    };
}
function getActivityChecklist(activity) {
    const base = [
        "Contexto do cliente validado",
        "Objetivo da interação definido",
        "Próxima ação registrada"
    ];
    if (activity.type === "meeting") {
        return [
            "Participantes confirmados",
            "Pauta compartilhada",
            "Follow-up preparado"
        ];
    }
    if (activity.type === "call" || activity.type === "whatsapp") {
        return [
            "Script revisado",
            "Objeções mapeadas",
            "Próximo passo combinado"
        ];
    }
    return base;
}
function getActivityInsight(activity, now) {
    const label = activity.clientName || activity.opportunityTitle || "o cliente";
    const overdue = isActivityOverdue(activity, now);
    const urgency = overdue ? "urgente" : "prioritária";
    return {
        message: activity.type === "email" ? `Olá! Revendo nossa agenda, gostaria de avançar o próximo passo com ${label}. Podemos alinhar ainda hoje?` : activity.type === "meeting" ? `Perfeito, vamos alinhar os pontos críticos de ${label} e sair com decisão clara no final da reunião.` : `Oi! Passando para mantermos ${label} em ritmo ${urgency}. Você consegue me confirmar o melhor horário para avançarmos?`,
        nextStep: activity.type === "task" ? "Feche esta tarefa e transforme em contato ativo com data definida." : "Registrar compromisso com data/horário e responsável antes de encerrar.",
        risk: overdue ? `Se ignorar, ${label} pode perder prioridade e aumentar risco de churn.` : `Se ignorar, ${label} perde cadência e pode esfriar o ciclo de decisão.`
    };
}
}),
"[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarBadge",
    ()=>AvatarBadge,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarGroup",
    ()=>AvatarGroup,
    "AvatarGroupCount",
    ()=>AvatarGroupCount,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript) <export * as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Avatar({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Root, {
        "data-slot": "avatar",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Image, {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Fallback, {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground flex size-full items-center justify-center rounded-full text-sm group-data-[size=sm]/avatar:text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function AvatarBadge({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "avatar-badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function AvatarGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "avatar-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("*:data-[slot=avatar]:ring-background group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
function AvatarGroupCount({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "avatar-group-count",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground ring-background relative flex size-8 shrink-0 items-center justify-center rounded-full text-sm ring-2 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-md bg-slate-200/75", "before:absolute before:inset-0 before:animate-pulse", "before:bg-linear-to-r before:from-transparent before:via-white/70 before:to-transparent", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/shared/module-command-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModuleCommandHeader",
    ()=>ModuleCommandHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
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
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("premium-shine inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-full border px-3 text-[12px] font-semibold tracking-tight whitespace-nowrap", isInteractive ? "cursor-pointer transition-all duration-150 ease-out hover:bg-white/75 hover:-translate-y-[1px] active:scale-[0.99] active:translate-y-0" : "cursor-default select-none opacity-90", chipToneStyles[chip.tone ?? "neutral"]);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            chip.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "shrink-0",
                children: chip.icon
            }, void 0, false, {
                fileName: "[project]/src/components/shared/module-command-header.tsx",
                lineNumber: 52,
                columnNumber: 20
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: chip.label
            }, void 0, false, {
                fileName: "[project]/src/components/shared/module-command-header.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    if (chip.href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-[20px] border border-zinc-200/85 bg-zinc-50/88 px-5 pb-4 pt-3", "shadow-[0_10px_24px_-20px_rgba(15,23,42,0.34)] backdrop-blur-sm", sticky && "sticky top-4 z-30", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1 max-w-[600px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex min-w-0 items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "min-w-0 font-heading text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/module-command-header.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            titleAccessory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            actions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full min-w-0 shrink-0 flex-wrap items-center gap-2 rounded-[20px] border border-zinc-200/85 bg-white/95 px-2 py-1.5 shadow-[0_8px_16px_-16px_rgba(15,23,42,0.36)]", "xl:w-auto xl:max-w-full xl:justify-end", actionsClassName),
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
                    hasLowerSection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-zinc-200/75 pt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between",
                            children: [
                                hasLeftBlock ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1 space-y-2",
                                    children: [
                                        meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-zinc-500/80",
                                            children: meta
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/module-command-header.tsx",
                                            lineNumber: 143,
                                            columnNumber: 27
                                        }, this) : null,
                                        hasChildrenRow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                hasChips ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap items-center gap-2 shrink-0 max-w-full", hasLeftBlock ? "xl:justify-end" : "justify-end"),
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
}),
"[project]/src/app/(auth)/activities/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivitiesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$now$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-now.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-ssr] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as CircleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dashed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDashed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dashed.js [app-ssr] (ecmascript) <export default as CircleDashed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-ssr] (ecmascript) <export default as WandSparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-virtual/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/ui-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/activity-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/activities/components/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$generated$2d$content$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/activities/components/generated-content-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/activities/components/helpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$module$2d$command$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/module-command-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
const STATUS_OPTIONS = [
    {
        value: "pending",
        label: "Pendente"
    },
    {
        value: "overdue",
        label: "Atrasada"
    },
    {
        value: "completed",
        label: "Concluída"
    },
    {
        value: "cancelled",
        label: "Cancelada"
    }
];
const DEFAULT_STATUS_FILTER = new Set([
    "pending",
    "overdue"
]);
const SLA_OPTIONS = [
    {
        value: "all",
        label: "Todos"
    },
    {
        value: "breached",
        label: "Estourado"
    },
    {
        value: "risk",
        label: "Em risco"
    }
];
const STATUS_VALUES = STATUS_OPTIONS.map((status)=>status.value);
const ALL_ACTIVITY_TYPE_SET = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"]);
const DATE_PARAM_REGEX = /^\d{4}-\d{2}-\d{2}$/;
function isSameSet(left, right) {
    if (left.size !== right.size) return false;
    for (const value of left){
        if (!right.has(value)) return false;
    }
    return true;
}
function getEffectiveStatus(activity, now) {
    if (activity.status === "completed" || activity.status === "cancelled") {
        return activity.status;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActivityOverdue"])(activity, now) ? "overdue" : "pending";
}
function getExecuteChannelLabel(value) {
    if (!value) return "atividade";
    if (value === "call") return "ligação";
    if (value === "email") return "e-mail";
    if (value === "meeting") return "reunião";
    if (value === "whatsapp") return "WhatsApp";
    return "atividade";
}
function parseSetParam(rawParam, allowedValues, fallbackValues) {
    if (!rawParam) return new Set(fallbackValues);
    const allowed = new Set(allowedValues);
    const parsed = rawParam.split(",").map((value)=>value.trim()).filter((value)=>allowed.has(value));
    if (parsed.length === 0) {
        return new Set(fallbackValues);
    }
    return new Set(parsed);
}
// Utility functions are imported from ./components/helpers
function buildRecommendations(activities, now, seed) {
    const sorted = [
        ...activities
    ].sort((a, b)=>{
        const aDue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(a.dueDate).getTime();
        const bDue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(b.dueDate).getTime();
        const aScore = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActivityOverdue"])(a, now) ? 1000 : 0) + (a.type === "follow-up" ? 120 : 0) + (a.type === "call" ? 90 : 0) + (a.status === "pending" ? 40 : 0);
        const bScore = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActivityOverdue"])(b, now) ? 1000 : 0) + (b.type === "follow-up" ? 120 : 0) + (b.type === "call" ? 90 : 0) + (b.status === "pending" ? 40 : 0);
        if (aScore !== bScore) return bScore - aScore;
        if (aDue !== bDue) return aDue - bDue;
        return a.title.localeCompare(b.title);
    });
    const offset = seed % 2;
    return sorted.slice(offset, offset + 3).map((activity, index)=>{
        const context = `${activity.clientName || activity.opportunityTitle || "Sem contexto"} · ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeLabels"][activity.type]}`;
        const overdue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActivityOverdue"])(activity, now);
        return {
            id: `intelligence-rec-${activity.id}`,
            activityId: activity.id,
            title: index === 0 ? "Faça isso agora" : "Ação recomendada",
            context,
            why: overdue ? "Prazo estourado com alto impacto no ritmo do pipeline." : "Atividade com potencial de destravar avanço ainda hoje.",
            primaryActionLabel: "Ir para atividade",
            actionKind: activity.type === "call" || activity.type === "whatsapp" ? "call" : activity.type === "meeting" ? "prepare" : "message"
        };
    });
}
function buildCommandResult(commandId, data) {
    switch(commandId){
        case "bulk-messages":
            if (data.overdueCount === 0) {
                return {
                    status: "error",
                    text: "Sem atividades atrasadas para gerar mensagens no momento."
                };
            }
            return {
                status: "success",
                text: `Geradas sugestões para ${data.overdueCount} atividades atrasadas.`
            };
        case "sla-priority":
            if (data.overdueCount === 0) {
                return {
                    status: "error",
                    text: "Não há SLAs estourados agora. Tudo sob controle."
                };
            }
            return {
                status: "success",
                text: `${data.overdueCount} SLAs críticos priorizados para execução imediata.`
            };
        case "week-summary":
            return {
                status: "success",
                text: `Resumo gerado com base em ${data.totalActive} atividades ativas da semana.`
            };
        case "risk-client":
            if (data.overdueCount === 0 && data.riskCount === 0) {
                return {
                    status: "error",
                    text: "Nenhum cliente em risco crítico detectado neste momento."
                };
            }
            return {
                status: "success",
                text: "Cliente com maior risco identificado e destacado para ação imediata."
            };
        case "call-script":
            return {
                status: "success",
                text: data.selectedActivity ? `Script de ligação gerado para ${data.selectedActivity.clientName || data.selectedActivity.opportunityTitle || "atividade selecionada"}.` : "Script de ligação gerado para o bloco de maior urgência."
            };
        default:
            return {
                status: "error",
                text: "Não foi possível executar este comando agora."
            };
    }
}
const RAIL_COMMANDS = [
    {
        id: "bulk-messages",
        label: "Gerar mensagens para atrasadas"
    },
    {
        id: "sla-priority",
        label: "Priorizar SLAs estourados"
    },
    {
        id: "week-summary",
        label: "Resumir a semana"
    },
    {
        id: "risk-client",
        label: "Identificar cliente em risco"
    },
    {
        id: "call-script",
        label: "Gerar scripts de ligação"
    }
];
function ActivitiesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-[calc(100dvh-2rem)] w-full flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "shrink-0 rounded-[20px] border border-zinc-200/80 bg-zinc-50/85 px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-8 w-40"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "mt-2 h-4 w-56"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 327,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[200px] rounded-[18px]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 332,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[400px] rounded-[18px]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 331,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/activities/page.tsx",
            lineNumber: 326,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivitiesPageContent, {}, void 0, false, {
            fileName: "[project]/src/app/(auth)/activities/page.tsx",
            lineNumber: 338,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 324,
        columnNumber: 5
    }, this);
}
function ActivitiesPageContent() {
    const { openDrawer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$ui$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUIStore"])();
    const { user, permissions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { activities: storeActivities, completeActivity, cancelActivity, postponeActivity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActivityStore"])();
    const isLoading = false;
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("list");
    const [isFilterOpen, setIsFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ownerOverrideId, setOwnerOverrideId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterTypes, setFilterTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"]));
    const [filterStatuses, setFilterStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Set(DEFAULT_STATUS_FILTER));
    const [filterDateStart, setFilterDateStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterDateEnd, setFilterDateEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterSla, setFilterSla] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [collapsedSections, setCollapsedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        intelligence: false,
        overdue: false,
        today: false,
        next7: false,
        future: true
    });
    const [sectionErrors, setSectionErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        intelligence: null,
        overdue: null,
        today: null,
        next7: null,
        future: null
    });
    const [planSeed, setPlanSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlanning, setIsPlanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recommendationStates, setRecommendationStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedActivityId, setSelectedActivityId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedActivityId, setExpandedActivityId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedActivityIds, setSelectedActivityIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Set());
    const [confirmBulkCancelOpen, setConfirmBulkCancelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmBulkCompleteOpen, setConfirmBulkCompleteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bulkPostponeOpen, setBulkPostponeOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bulkPostponeCustomDate, setBulkPostponeCustomDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activityFeedback, setActivityFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [headerInlineFeedback, setHeaderInlineFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bulkInlineFeedback, setBulkInlineFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [summaryInlineFeedback, setSummaryInlineFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [highlightedPostponedId, setHighlightedPostponedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [commandLoadingId, setCommandLoadingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [commandResult, setCommandResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPageScrolled, setIsPageScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modal State
    const [generatedModalOpen, setGeneratedModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generatedContent, setGeneratedContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        content: ""
    });
    const [detailsModalActivityId, setDetailsModalActivityId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const appliedQueryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const intelligenceRailRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$now$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNow"])(60_000);
    const deferredSearchQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeferredValue"])(searchQuery);
    const [calendarMonth, setCalendarMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfMonth"])(now));
    const [selectedCalendarDate, setSelectedCalendarDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now)));
    const canViewTeamScope = Boolean(permissions?.canViewAllUnits || user?.role === "master");
    const canCreateActivity = Boolean(permissions?.canCreateActivity);
    const canExecuteActivityActions = Boolean(permissions?.canEditActivity);
    const canCancelActivity = Boolean(permissions?.canCancelActivity);
    const canExportActivities = Boolean(permissions?.canExportData);
    const { scopedOwnerId, scopeMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const preferredOwnerId = user?.id ?? null;
        if (canViewTeamScope) {
            if (ownerOverrideId && storeActivities.some((activity)=>activity.responsibleId === ownerOverrideId)) {
                return {
                    scopedOwnerId: ownerOverrideId,
                    scopeMode: "override"
                };
            }
            if (preferredOwnerId) {
                return {
                    scopedOwnerId: preferredOwnerId,
                    scopeMode: "self"
                };
            }
            return {
                scopedOwnerId: null,
                scopeMode: "team"
            };
        }
        return {
            scopedOwnerId: preferredOwnerId,
            scopeMode: "self"
        };
    }, [
        canViewTeamScope,
        ownerOverrideId,
        storeActivities,
        user?.id
    ]);
    const isTeamScope = canViewTeamScope && scopeMode === "team";
    const activities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (canViewTeamScope && scopedOwnerId === null) {
            return storeActivities;
        }
        if (!scopedOwnerId) {
            return [];
        }
        return storeActivities.filter((activity)=>activity.responsibleId === scopedOwnerId);
    }, [
        canViewTeamScope,
        scopedOwnerId,
        storeActivities
    ]);
    const hasNoScopedActivities = activities.length === 0;
    const schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((fn, ms)=>{
        const id = window.setTimeout(()=>{
            fn();
            timeoutRef.current = timeoutRef.current.filter((item)=>item !== id);
        }, ms);
        timeoutRef.current.push(id);
    }, []);
    const pushHeaderInlineFeedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((feedback)=>{
        setHeaderInlineFeedback(feedback);
        schedule(()=>setHeaderInlineFeedback(null), 2600);
    }, [
        schedule
    ]);
    const pushBulkInlineFeedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((feedback)=>{
        setBulkInlineFeedback(feedback);
        schedule(()=>setBulkInlineFeedback(null), 2600);
    }, [
        schedule
    ]);
    const pushSummaryInlineFeedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((feedback)=>{
        setSummaryInlineFeedback(feedback);
        schedule(()=>setSummaryInlineFeedback(null), 2600);
    }, [
        schedule
    ]);
    // Loading is instant since data comes from the local store (no API).
    // Auto-dismiss commandResult after 6 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!commandResult) return;
        const timer = window.setTimeout(()=>setCommandResult(null), 6000);
        return ()=>window.clearTimeout(timer);
    }, [
        commandResult
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            timeoutRef.current.forEach((id)=>window.clearTimeout(id));
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setIsPageScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    const applyStatusFromParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((statusParam)=>{
        const normalized = statusParam.trim().toLowerCase();
        setViewMode("list");
        setFilterTypes(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"]));
        setFilterDateStart("");
        setFilterDateEnd("");
        if (normalized === "overdue") {
            setFilterStatuses(new Set([
                "pending",
                "overdue"
            ]));
            setFilterSla("breached");
            return;
        }
        if (normalized === "risk") {
            setFilterStatuses(new Set([
                "pending"
            ]));
            setFilterSla("risk");
            return;
        }
        if (normalized === "pace") {
            setFilterStatuses(new Set([
                "pending",
                "overdue"
            ]));
            setFilterSla("all");
            return;
        }
        if (normalized === "achieved") {
            setFilterStatuses(new Set([
                "completed"
            ]));
            setFilterSla("all");
            return;
        }
        if (normalized === "pending" || normalized === "completed" || normalized === "cancelled") {
            setFilterStatuses(new Set([
                normalized
            ]));
            setFilterSla("all");
            return;
        }
        setFilterStatuses(new Set(DEFAULT_STATUS_FILTER));
        setFilterSla("all");
    }, []);
    const applyExplicitUrlFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((data)=>{
        setViewMode(data.viewMode);
        setSearchQuery(data.query);
        setFilterTypes(data.types);
        setFilterStatuses(data.statuses);
        setFilterSla(data.sla);
        setFilterDateStart(data.start);
        setFilterDateEnd(data.end);
    }, []);
    const resetFiltersToDefault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setViewMode("list");
        setSearchQuery("");
        setFilterTypes(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"]));
        setFilterStatuses(new Set(DEFAULT_STATUS_FILTER));
        setFilterDateStart("");
        setFilterDateEnd("");
        setFilterSla("all");
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const queryString = searchParams.toString();
        if (appliedQueryRef.current === queryString) return;
        appliedQueryRef.current = queryString;
        const sourceParam = searchParams.get("source");
        const statusParam = searchParams.get("status");
        const focusParam = searchParams.get("focus");
        const goalParam = searchParams.get("goal");
        const activityIdParam = searchParams.get("activityId") ?? searchParams.get("id");
        const executeParam = searchParams.get("execute");
        const viewParam = searchParams.get("view");
        const queryParam = searchParams.get("q");
        const typesParam = searchParams.get("types");
        const statusesParam = searchParams.get("statuses");
        const slaParam = searchParams.get("sla");
        const startParam = searchParams.get("start");
        const endParam = searchParams.get("end");
        const hasExplicitUrlFilters = viewParam !== null || queryParam !== null || typesParam !== null || statusesParam !== null || slaParam !== null || startParam !== null || endParam !== null;
        if (hasExplicitUrlFilters) {
            applyExplicitUrlFilters({
                viewMode: viewParam === "agenda" ? "agenda" : "list",
                query: queryParam ?? "",
                types: parseSetParam(typesParam, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"], new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"])),
                statuses: parseSetParam(statusesParam, STATUS_VALUES, new Set(DEFAULT_STATUS_FILTER)),
                sla: slaParam === "breached" || slaParam === "risk" ? slaParam : "all",
                start: startParam && DATE_PARAM_REGEX.test(startParam) ? startParam : "",
                end: endParam && DATE_PARAM_REGEX.test(endParam) ? endParam : ""
            });
        } else if (statusParam) {
            applyStatusFromParam(statusParam);
            setSearchQuery("");
        } else {
            resetFiltersToDefault();
        }
        if (sourceParam === "goals" && goalParam) {
            setCommandResult({
                status: "success",
                text: `Filtro aplicado para acompanhar a meta "${goalParam}".`
            });
        } else if (sourceParam === "goals" && focusParam === "metas") {
            setCommandResult({
                status: "success",
                text: "Painel ajustado para apoiar execução de metas."
            });
        }
        if (activityIdParam) {
            const linkedActivity = storeActivities.find((activity)=>activity.id === activityIdParam);
            if (!linkedActivity) {
                setOwnerOverrideId(null);
                setCommandResult({
                    status: "error",
                    text: "Atividade do link não encontrada na sua carteira atual."
                });
                return;
            }
            const canAccessLinkedActivity = canViewTeamScope || linkedActivity.responsibleId === user?.id;
            if (!canAccessLinkedActivity) {
                setOwnerOverrideId(null);
                setCommandResult({
                    status: "error",
                    text: "Essa atividade não pertence à sua carteira."
                });
                return;
            }
            setOwnerOverrideId(canViewTeamScope ? linkedActivity.responsibleId : null);
            setSelectedActivityId(linkedActivity.id);
            setExpandedActivityId(linkedActivity.id);
            schedule(()=>{
                const target = document.getElementById(`activity-card-${linkedActivity.id}`);
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
            }, 80);
            if (executeParam) {
                pushHeaderInlineFeedback({
                    tone: "info",
                    message: `Canal de ${getExecuteChannelLabel(executeParam)} pronto para execução desta atividade.`
                });
            }
        } else {
            setOwnerOverrideId(null);
        }
    }, [
        applyExplicitUrlFilters,
        canViewTeamScope,
        applyStatusFromParam,
        pushHeaderInlineFeedback,
        resetFiltersToDefault,
        schedule,
        searchParams,
        storeActivities,
        user?.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (appliedQueryRef.current === null) return;
        const params = new URLSearchParams(searchParams.toString());
        const normalizedQuery = searchQuery.trim();
        const selectedTypes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"].filter((type)=>filterTypes.has(type));
        const selectedStatuses = STATUS_VALUES.filter((status)=>filterStatuses.has(status));
        if (viewMode !== "list") params.set("view", viewMode);
        else params.delete("view");
        if (normalizedQuery) params.set("q", normalizedQuery);
        else params.delete("q");
        if (selectedTypes.length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"].length) params.delete("types");
        else params.set("types", selectedTypes.join(","));
        if (selectedStatuses.length === STATUS_VALUES.length) params.delete("statuses");
        else params.set("statuses", selectedStatuses.join(","));
        if (filterSla === "all") params.delete("sla");
        else params.set("sla", filterSla);
        if (filterDateStart) params.set("start", filterDateStart);
        else params.delete("start");
        if (filterDateEnd) params.set("end", filterDateEnd);
        else params.delete("end");
        // Legacy status param can diverge from explicit filters.
        params.delete("status");
        params.delete("id");
        params.delete("activityId");
        params.delete("execute");
        params.delete("source");
        params.delete("focus");
        params.delete("goal");
        const nextQuery = params.toString();
        const currentQuery = searchParams.toString();
        if (nextQuery === currentQuery) return;
        appliedQueryRef.current = nextQuery;
        router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, {
            scroll: false
        });
    }, [
        filterDateEnd,
        filterDateStart,
        filterSla,
        filterStatuses,
        filterTypes,
        pathname,
        router,
        searchParams,
        searchQuery,
        viewMode
    ]);
    const filteredActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const normalizedQuery = deferredSearchQuery.trim().toLowerCase();
        return activities.filter((activity)=>{
            const effectiveStatus = getEffectiveStatus(activity, now);
            if (!filterTypes.has(activity.type)) return false;
            if (!filterStatuses.has(effectiveStatus)) return false;
            if (filterDateStart && activity.dueDate < filterDateStart) return false;
            if (filterDateEnd && activity.dueDate > filterDateEnd) return false;
            if (normalizedQuery) {
                const searchableContent = [
                    activity.title,
                    activity.description || "",
                    activity.clientName || "",
                    activity.opportunityTitle || "",
                    activity.responsibleName,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeLabels"][activity.type]
                ].join(" ").toLowerCase();
                if (!searchableContent.includes(normalizedQuery)) return false;
            }
            if (filterSla === "breached" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActivityOverdue"])(activity, now)) return false;
            if (filterSla === "risk" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSlaRisk"])(activity, now)) return false;
            return true;
        });
    }, [
        activities,
        filterTypes,
        filterStatuses,
        filterDateStart,
        filterDateEnd,
        filterSla,
        deferredSearchQuery,
        now
    ]);
    const executionActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>filteredActivities.filter((activity)=>activity.status !== "completed" && activity.status !== "cancelled"), [
        filteredActivities
    ]);
    const executionActivityIdSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Set(executionActivities.map((activity)=>activity.id)), [
        executionActivities
    ]);
    const selectedExecutionIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from(selectedActivityIds).filter((activityId)=>executionActivityIdSet.has(activityId)), [
        selectedActivityIds,
        executionActivityIdSet
    ]);
    const allVisibleExecutionSelected = executionActivities.length > 0 && selectedExecutionIds.length === executionActivities.length;
    const toggleActivitySelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((activityId)=>{
        setSelectedActivityIds((prev)=>{
            const next = new Set(prev);
            if (next.has(activityId)) next.delete(activityId);
            else next.add(activityId);
            return next;
        });
    }, []);
    const handleSelectAllVisibleActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((checked)=>{
        if (!checked) {
            setSelectedActivityIds(new Set());
            return;
        }
        setSelectedActivityIds(new Set(executionActivities.map((activity)=>activity.id)));
    }, [
        executionActivities
    ]);
    const clearSelectedActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSelectedActivityIds(new Set());
    }, []);
    const calendarActivitiesByDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const byDate = new Map();
        for (const activity of executionActivities){
            const key = activity.dueDate;
            const list = byDate.get(key) || [];
            list.push(activity);
            byDate.set(key, list);
        }
        for (const [key, list] of byDate.entries()){
            list.sort((a, b)=>(a.dueTime || "99:99").localeCompare(b.dueTime || "99:99"));
            byDate.set(key, list);
        }
        return byDate;
    }, [
        executionActivities
    ]);
    const calendarDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const monthStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfMonth"])(calendarMonth);
        const monthEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfMonth"])(calendarMonth);
        const gridStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(monthStart);
        const gridEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfWeek"])(monthEnd);
        const days = [];
        let cursor = gridStart;
        while(cursor.getTime() <= gridEnd.getTime()){
            days.push(cursor);
            cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(cursor, 1);
        }
        return days;
    }, [
        calendarMonth
    ]);
    const selectedCalendarDayActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return calendarActivitiesByDate.get(selectedCalendarDate) || [];
    }, [
        calendarActivitiesByDate,
        selectedCalendarDate
    ]);
    const overdueActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>executionActivities.filter((activity)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActivityOverdue"])(activity, now)).sort((a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(a.dueDate).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(b.dueDate).getTime()), [
        executionActivities,
        now
    ]);
    const todayActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const todayDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now).getTime();
        return executionActivities.filter((activity)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActivityOverdue"])(activity, now)) return false;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(activity.dueDate)).getTime() === todayDate;
        }).sort((a, b)=>(a.dueTime || "99:99").localeCompare(b.dueTime || "99:99"));
    }, [
        executionActivities,
        now
    ]);
    const next7Activities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const todayDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now);
        const next7Date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(todayDate, 7);
        return executionActivities.filter((activity)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActivityOverdue"])(activity, now)) return false;
            const due = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(activity.dueDate));
            return due > todayDate && due <= next7Date;
        }).sort((a, b)=>{
            const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(a.dueDate).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(b.dueDate).getTime();
            if (diff !== 0) return diff;
            return (a.dueTime || "99:99").localeCompare(b.dueTime || "99:99");
        });
    }, [
        executionActivities,
        now
    ]);
    const futureActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const next7Date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now), 7);
        return executionActivities.filter((activity)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActivityOverdue"])(activity, now)) return false;
            const due = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(activity.dueDate));
            return due > next7Date;
        }).sort((a, b)=>{
            const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(a.dueDate).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(b.dueDate).getTime();
            if (diff !== 0) return diff;
            return (a.dueTime || "99:99").localeCompare(b.dueTime || "99:99");
        });
    }, [
        executionActivities,
        now
    ]);
    const completedActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>filteredActivities.filter((activity)=>activity.status === "completed").sort((a, b)=>{
            const aDate = a.completedAt || a.dueDate;
            const bDate = b.completedAt || b.dueDate;
            return bDate.localeCompare(aDate);
        }), [
        filteredActivities
    ]);
    const overdueCount = overdueActivities.length;
    const riskCount = executionActivities.filter((activity)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSlaRisk"])(activity, now)).length;
    const headerMetaText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCompactDateLabel"])(now)} · Olá, ${user?.name?.trim().split(" ")[0] ?? "Vendedor"}`, [
        now,
        user?.name
    ]);
    const typeCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const counts = {
            call: 0,
            email: 0,
            meeting: 0,
            visit: 0,
            task: 0,
            "follow-up": 0,
            whatsapp: 0
        };
        for (const activity of filteredActivities){
            counts[activity.type] += 1;
        }
        return counts;
    }, [
        filteredActivities
    ]);
    const hotspotType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Object.entries(typeCounts).sort((a, b)=>b[1] - a[1])[0];
    }, [
        typeCounts
    ]);
    const weeklyCompletionRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const todayDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now);
        const weekStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(todayDate, -7);
        const weekSlice = filteredActivities.filter((activity)=>{
            const due = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(activity.dueDate));
            return due >= weekStart && due <= todayDate;
        });
        if (weekSlice.length === 0) return 0;
        const completedCount = weekSlice.filter((activity)=>activity.status === "completed").length;
        return Math.round(completedCount / weekSlice.length * 100);
    }, [
        filteredActivities,
        now
    ]);
    const menuxIntelligenceRecommendations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildRecommendations(executionActivities, now, planSeed), [
        executionActivities,
        now,
        planSeed
    ]);
    const selectedActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>activities.find((activity)=>activity.id === selectedActivityId) || null, [
        activities,
        selectedActivityId
    ]);
    const detailsModalActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>activities.find((activity)=>activity.id === detailsModalActivityId) || null, [
        activities,
        detailsModalActivityId
    ]);
    const hasActiveFilters = !isSameSet(filterTypes, ALL_ACTIVITY_TYPE_SET) || !isSameSet(filterStatuses, DEFAULT_STATUS_FILTER) || filterDateStart !== "" || filterDateEnd !== "" || filterSla !== "all" || searchQuery.trim() !== "";
    const activeFilterChips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const chips = [];
        if (filterTypes.size < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"].length) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"].forEach((type)=>{
                if (!filterTypes.has(type)) return;
                chips.push({
                    id: `type-${type}`,
                    label: `Tipo: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeLabels"][type]}`,
                    onRemove: ()=>{
                        setFilterTypes((prev)=>{
                            const next = new Set(prev);
                            next.delete(type);
                            if (next.size === 0) return new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"]);
                            return next;
                        });
                    }
                });
            });
        }
        if (!isSameSet(filterStatuses, DEFAULT_STATUS_FILTER)) {
            STATUS_OPTIONS.forEach((option)=>{
                if (!filterStatuses.has(option.value)) return;
                chips.push({
                    id: `status-${option.value}`,
                    label: `Status: ${option.label}`,
                    onRemove: ()=>{
                        setFilterStatuses((prev)=>{
                            const next = new Set(prev);
                            next.delete(option.value);
                            if (next.size === 0) return new Set(DEFAULT_STATUS_FILTER);
                            return next;
                        });
                    }
                });
            });
        }
        if (filterDateStart) {
            chips.push({
                id: "date-start",
                label: `De: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateBR"])(filterDateStart)}`,
                onRemove: ()=>setFilterDateStart("")
            });
        }
        if (filterDateEnd) {
            chips.push({
                id: "date-end",
                label: `Até: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateBR"])(filterDateEnd)}`,
                onRemove: ()=>setFilterDateEnd("")
            });
        }
        if (filterSla !== "all") {
            chips.push({
                id: "sla",
                label: `SLA: ${filterSla === "breached" ? "Estourado" : "Em risco"}`,
                onRemove: ()=>setFilterSla("all")
            });
        }
        if (searchQuery.trim()) {
            chips.push({
                id: "search",
                label: `Busca: "${searchQuery.trim()}"`,
                onRemove: ()=>setSearchQuery("")
            });
        }
        return chips;
    }, [
        filterTypes,
        filterStatuses,
        filterDateStart,
        filterDateEnd,
        filterSla,
        searchQuery
    ]);
    const clearFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setFilterTypes(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"]));
        setFilterStatuses(new Set(DEFAULT_STATUS_FILTER));
        setFilterDateStart("");
        setFilterDateEnd("");
        setFilterSla("all");
        setSearchQuery("");
        setSelectedActivityIds(new Set());
    }, []);
    const toggleSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key)=>{
        setCollapsedSections((prev)=>({
                ...prev,
                [key]: !prev[key]
            }));
    }, []);
    const handleGeneratePlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsPlanning(true);
        setSectionErrors((prev)=>({
                ...prev,
                intelligence: null
            }));
        schedule(()=>{
            if (executionActivities.length === 0) {
                setIsPlanning(false);
                setSectionErrors((prev)=>({
                        ...prev,
                        intelligence: "Não há atividades ativas para montar um plano agora."
                    }));
                pushHeaderInlineFeedback({
                    tone: "error",
                    message: "Não há atividades ativas para montar um plano agora."
                });
                return;
            }
            setPlanSeed((prev)=>prev + 1);
            setCommandResult({
                status: "success",
                text: "Plano do dia gerado com foco em impacto e risco."
            });
            pushHeaderInlineFeedback({
                tone: "success",
                message: "Plano do dia gerado com foco em impacto e risco."
            });
            setIsPlanning(false);
        }, 260);
    }, [
        executionActivities.length,
        pushHeaderInlineFeedback,
        schedule
    ]);
    const handleQuickFilterOverdue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setViewMode("list");
        setFilterStatuses(new Set([
            "pending",
            "overdue"
        ]));
        setFilterSla("breached");
        setFilterDateStart("");
        setFilterDateEnd("");
    }, []);
    const handleQuickFilterToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const todayIso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now));
        setViewMode("list");
        setFilterStatuses(new Set([
            "pending",
            "overdue"
        ]));
        setFilterDateStart(todayIso);
        setFilterDateEnd(todayIso);
        setFilterSla("all");
    }, [
        now
    ]);
    const handleQuickFilterSlaRisk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setViewMode("list");
        setFilterStatuses(new Set([
            "pending"
        ]));
        setFilterSla("risk");
        setFilterDateStart("");
        setFilterDateEnd("");
    }, []);
    const handleExecuteRecommendation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((recommendation)=>{
        if (!canExecuteActivityActions) {
            setCommandResult({
                status: "error",
                text: "Você não tem permissão para executar ações nesta carteira."
            });
            return;
        }
        setRecommendationStates((prev)=>({
                ...prev,
                [recommendation.id]: "loading"
            }));
        schedule(()=>{
            const target = activities.find((item)=>item.id === recommendation.activityId);
            if (!target) {
                setRecommendationStates((prev)=>({
                        ...prev,
                        [recommendation.id]: "error"
                    }));
                schedule(()=>{
                    setRecommendationStates((prev)=>({
                            ...prev,
                            [recommendation.id]: "idle"
                        }));
                }, 1200);
                return;
            }
            setSelectedActivityId(target.id);
            setExpandedActivityId(target.id);
            setRecommendationStates((prev)=>({
                    ...prev,
                    [recommendation.id]: "success"
                }));
            setCommandResult({
                status: "success",
                text: recommendation.actionKind === "message" ? `Mensagem preparada para ${target.clientName || target.opportunityTitle || "atividade"}.` : recommendation.actionKind === "call" ? `Roteiro de contato acionado para ${target.clientName || target.opportunityTitle || "atividade"}.` : `Checklist de preparação gerado para ${target.clientName || target.opportunityTitle || "atividade"}.`
            });
            schedule(()=>{
                setRecommendationStates((prev)=>({
                        ...prev,
                        [recommendation.id]: "idle"
                    }));
            }, 1200);
        }, 220);
    }, [
        activities,
        canExecuteActivityActions,
        schedule
    ]);
    const handleViewActivityFromRecommendation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((activityId)=>{
        setSelectedActivityId(activityId);
        setExpandedActivityId(activityId);
        const target = document.getElementById(`activity-card-${activityId}`);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }, []);
    const clearActivityFeedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((activityId)=>{
        setActivityFeedback((prev)=>{
            const next = {
                ...prev
            };
            delete next[activityId];
            return next;
        });
    }, []);
    const handleActionDenied = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((activityId, message)=>{
        setActivityFeedback((prev)=>({
                ...prev,
                [activityId]: {
                    state: "error",
                    message
                }
            }));
        schedule(()=>{
            clearActivityFeedback(activityId);
        }, 2200);
    }, [
        clearActivityFeedback,
        schedule
    ]);
    const canRunActionOnActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((activityId)=>activities.some((activity)=>activity.id === activityId), [
        activities
    ]);
    const handleCompleteActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((activityId, notes)=>{
        if (!canExecuteActivityActions) {
            handleActionDenied(activityId, "Você não tem permissão para concluir atividades.");
            return;
        }
        if (!canRunActionOnActivity(activityId)) {
            handleActionDenied(activityId, "A atividade não pertence à sua carteira.");
            return;
        }
        setActivityFeedback((prev)=>({
                ...prev,
                [activityId]: {
                    state: "loading-complete"
                }
            }));
        schedule(()=>{
            try {
                completeActivity(activityId, notes);
                setActivityFeedback((prev)=>({
                        ...prev,
                        [activityId]: {
                            state: "complete-success",
                            message: "Concluída"
                        }
                    }));
            } catch  {
                setActivityFeedback((prev)=>({
                        ...prev,
                        [activityId]: {
                            state: "error",
                            message: "Falha ao concluir atividade."
                        }
                    }));
            }
        }, 180);
        schedule(()=>{
            clearActivityFeedback(activityId);
        }, 1500);
    }, [
        canExecuteActivityActions,
        canRunActionOnActivity,
        clearActivityFeedback,
        completeActivity,
        handleActionDenied,
        schedule
    ]);
    const handleCancelActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((activityId)=>{
        if (!canCancelActivity) {
            handleActionDenied(activityId, "Você não tem permissão para cancelar atividades.");
            return;
        }
        if (!canRunActionOnActivity(activityId)) {
            handleActionDenied(activityId, "A atividade não pertence à sua carteira.");
            return;
        }
        setActivityFeedback((prev)=>({
                ...prev,
                [activityId]: {
                    state: "loading-cancel"
                }
            }));
        schedule(()=>{
            try {
                cancelActivity(activityId);
                setActivityFeedback((prev)=>({
                        ...prev,
                        [activityId]: {
                            state: "complete-success",
                            message: "Cancelada"
                        }
                    }));
            } catch  {
                setActivityFeedback((prev)=>({
                        ...prev,
                        [activityId]: {
                            state: "error",
                            message: "Falha ao cancelar atividade."
                        }
                    }));
            }
        }, 180);
        schedule(()=>{
            clearActivityFeedback(activityId);
        }, 1500);
    }, [
        canCancelActivity,
        canRunActionOnActivity,
        cancelActivity,
        clearActivityFeedback,
        handleActionDenied,
        schedule
    ]);
    const handlePostponeActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((activityId, newDate)=>{
        if (!canExecuteActivityActions) {
            handleActionDenied(activityId, "Você não tem permissão para reagendar atividades.");
            return;
        }
        if (!canRunActionOnActivity(activityId)) {
            handleActionDenied(activityId, "A atividade não pertence à sua carteira.");
            return;
        }
        if (!DATE_PARAM_REGEX.test(newDate)) {
            handleActionDenied(activityId, "Data de reagendamento inválida.");
            return;
        }
        const todayIso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now));
        if (newDate < todayIso) {
            handleActionDenied(activityId, "Escolha uma data a partir de hoje.");
            return;
        }
        setActivityFeedback((prev)=>({
                ...prev,
                [activityId]: {
                    state: "loading-postpone"
                }
            }));
        schedule(()=>{
            try {
                postponeActivity(activityId, newDate);
                setHighlightedPostponedId(activityId);
                setActivityFeedback((prev)=>({
                        ...prev,
                        [activityId]: {
                            state: "postpone-success",
                            message: `Reagendada para ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateBR"])(newDate)}`
                        }
                    }));
            } catch  {
                setActivityFeedback((prev)=>({
                        ...prev,
                        [activityId]: {
                            state: "error",
                            message: "Falha ao reagendar atividade."
                        }
                    }));
            }
        }, 180);
        schedule(()=>{
            setHighlightedPostponedId((current)=>current === activityId ? null : current);
            clearActivityFeedback(activityId);
        }, 1500);
    }, [
        canExecuteActivityActions,
        canRunActionOnActivity,
        clearActivityFeedback,
        handleActionDenied,
        now,
        postponeActivity,
        schedule
    ]);
    const handleRequestBulkCompleteActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (selectedExecutionIds.length === 0) return;
        if (!canExecuteActivityActions) {
            setCommandResult({
                status: "error",
                text: "Você não tem permissão para concluir atividades em lote."
            });
            pushBulkInlineFeedback({
                tone: "error",
                message: "Você não tem permissão para concluir atividades em lote."
            });
            return;
        }
        setConfirmBulkCompleteOpen(true);
    }, [
        canExecuteActivityActions,
        pushBulkInlineFeedback,
        selectedExecutionIds.length
    ]);
    const handleConfirmBulkCompleteActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (selectedExecutionIds.length === 0) {
            setConfirmBulkCompleteOpen(false);
            return;
        }
        let successCount = 0;
        let deniedCount = 0;
        selectedExecutionIds.forEach((activityId)=>{
            if (!canRunActionOnActivity(activityId)) {
                deniedCount += 1;
                return;
            }
            handleCompleteActivity(activityId);
            successCount += 1;
        });
        clearSelectedActivities();
        setConfirmBulkCompleteOpen(false);
        const message = deniedCount > 0 ? `${successCount} concluída(s), ${deniedCount} sem permissão/escopo.` : `${successCount} atividade(s) concluída(s) em lote.`;
        setCommandResult({
            status: deniedCount > 0 ? "error" : "success",
            text: message
        });
        pushBulkInlineFeedback({
            tone: deniedCount > 0 ? "error" : "success",
            message
        });
    }, [
        canRunActionOnActivity,
        clearSelectedActivities,
        handleCompleteActivity,
        pushBulkInlineFeedback,
        selectedExecutionIds
    ]);
    const handleRequestBulkCancelActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (selectedExecutionIds.length === 0) return;
        if (!canCancelActivity) {
            setCommandResult({
                status: "error",
                text: "Você não tem permissão para cancelar atividades em lote."
            });
            pushBulkInlineFeedback({
                tone: "error",
                message: "Você não tem permissão para cancelar atividades em lote."
            });
            return;
        }
        setConfirmBulkCancelOpen(true);
    }, [
        canCancelActivity,
        pushBulkInlineFeedback,
        selectedExecutionIds.length
    ]);
    const handleConfirmBulkCancelActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (selectedExecutionIds.length === 0) {
            setConfirmBulkCancelOpen(false);
            return;
        }
        let successCount = 0;
        let deniedCount = 0;
        selectedExecutionIds.forEach((activityId)=>{
            if (!canRunActionOnActivity(activityId)) {
                deniedCount += 1;
                return;
            }
            handleCancelActivity(activityId);
            successCount += 1;
        });
        clearSelectedActivities();
        setConfirmBulkCancelOpen(false);
        const message = deniedCount > 0 ? `${successCount} cancelada(s), ${deniedCount} sem permissão/escopo.` : `${successCount} atividade(s) cancelada(s) em lote.`;
        setCommandResult({
            status: deniedCount > 0 ? "error" : "success",
            text: message
        });
        pushBulkInlineFeedback({
            tone: deniedCount > 0 ? "error" : "success",
            message
        });
    }, [
        canRunActionOnActivity,
        clearSelectedActivities,
        handleCancelActivity,
        pushBulkInlineFeedback,
        selectedExecutionIds
    ]);
    const handleBulkPostponeActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetDate)=>{
        if (selectedExecutionIds.length === 0) return;
        if (!canExecuteActivityActions) {
            setCommandResult({
                status: "error",
                text: "Você não tem permissão para reagendar atividades em lote."
            });
            pushBulkInlineFeedback({
                tone: "error",
                message: "Você não tem permissão para reagendar atividades em lote."
            });
            return;
        }
        if (!DATE_PARAM_REGEX.test(targetDate)) {
            pushBulkInlineFeedback({
                tone: "error",
                message: "Data de reagendamento inválida para lote."
            });
            return;
        }
        const todayIso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now));
        if (targetDate < todayIso) {
            pushBulkInlineFeedback({
                tone: "error",
                message: "Escolha uma data de lote a partir de hoje."
            });
            return;
        }
        let successCount = 0;
        let deniedCount = 0;
        selectedExecutionIds.forEach((activityId)=>{
            if (!canRunActionOnActivity(activityId)) {
                deniedCount += 1;
                return;
            }
            handlePostponeActivity(activityId, targetDate);
            successCount += 1;
        });
        clearSelectedActivities();
        setBulkPostponeOpen(false);
        setBulkPostponeCustomDate("");
        const message = deniedCount > 0 ? `${successCount} reagendada(s), ${deniedCount} sem permissão/escopo.` : `${successCount} atividade(s) reagendada(s) para ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateBR"])(targetDate)}.`;
        setCommandResult({
            status: deniedCount > 0 ? "error" : "success",
            text: message
        });
        pushBulkInlineFeedback({
            tone: deniedCount > 0 ? "error" : "success",
            message
        });
    }, [
        canExecuteActivityActions,
        canRunActionOnActivity,
        clearSelectedActivities,
        handlePostponeActivity,
        now,
        pushBulkInlineFeedback,
        selectedExecutionIds
    ]);
    const handleOpenIntelligenceFromActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((activity)=>{
        const insight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActivityInsight"])(activity, now);
        const contextLabel = activity.clientName || activity.opportunityTitle || "atividade selecionada";
        setSelectedActivityId(activity.id);
        setGeneratedContent({
            title: `Menux Intelligence · ${contextLabel}`,
            content: `Mensagem pronta:\n${insight.message}\n\nPróximo passo:\n${insight.nextStep}\n\nRisco se ignorar:\n${insight.risk}`
        });
        setGeneratedModalOpen(true);
        setCommandResult({
            status: "success",
            text: `Sugestões da Menux Intelligence abertas para ${contextLabel}.`
        });
        setActivityFeedback((prev)=>({
                ...prev,
                [activity.id]: {
                    state: "info",
                    message: "Insights gerados para esta atividade."
                }
            }));
        schedule(()=>clearActivityFeedback(activity.id), 1800);
    }, [
        clearActivityFeedback,
        now,
        schedule
    ]);
    const handleGenerateFollowup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((activity)=>{
        const insight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActivityInsight"])(activity, now);
        const contextLabel = activity.clientName || activity.opportunityTitle || "atividade selecionada";
        setSelectedActivityId(activity.id);
        setGeneratedContent({
            title: `Follow-up · ${contextLabel}`,
            content: insight.message
        });
        setGeneratedModalOpen(true);
        setCommandResult({
            status: "success",
            text: `Follow-up pronto para ${contextLabel}.`
        });
        setActivityFeedback((prev)=>({
                ...prev,
                [activity.id]: {
                    state: "info",
                    message: "Follow-up gerado e pronto para envio."
                }
            }));
        schedule(()=>clearActivityFeedback(activity.id), 1800);
    }, [
        clearActivityFeedback,
        now,
        schedule
    ]);
    const handleRunCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((commandId)=>{
        setCommandLoadingId(commandId);
        schedule(()=>{
            if (commandId === "sla-priority") {
                setFilterSla("breached");
                setViewMode("list");
                setCommandResult({
                    status: "success",
                    text: "Filtro de SLA 'Estourado' aplicado."
                });
            } else if (commandId === "risk-client") {
                setCommandLoadingId(null);
                router.push("/clients?filter=risk");
                return; // Navigation handles feedback
            } else if (commandId === "week-summary") {
                setGeneratedContent({
                    title: "Resumo da Semana",
                    content: `### Minha semana em atividades\n- Total ativas: ${executionActivities.length}\n- Atrasadas: ${overdueCount}\n- SLAs em risco: ${riskCount}\n\n**Próximo passo recomendado:** focar primeiro nas atividades atrasadas de maior impacto comercial.`
                });
                setGeneratedModalOpen(true);
                setCommandResult({
                    status: "success",
                    text: "Resumo semanal gerado com foco na sua carteira."
                });
            } else if (commandId === "bulk-messages") {
                if (overdueCount === 0) {
                    setCommandResult({
                        status: "error",
                        text: "Sem atividades atrasadas para gerar mensagens no momento."
                    });
                    setCommandLoadingId(null);
                    return;
                }
                setGeneratedContent({
                    title: "Mensagens para Atrasadas",
                    content: `Olá [Nome], vi que não conseguimos nos falar na data combinada. Como está sua agenda para retomarmos amanhã?\n\nOi [Nome], tudo bem? Gostaria de reagendar nosso papo sobre [Assunto]. Teria disponibilidade esta tarde?`
                });
                setGeneratedModalOpen(true);
                setCommandResult({
                    status: "success",
                    text: "Sugestões de mensagem geradas."
                });
            } else if (commandId === "call-script") {
                setGeneratedContent({
                    title: "Script de Ligação",
                    content: `**Abertura:** "Olá [Nome], aqui é ${user?.name || "Consultor"} da [Empresa]. Tudo bem?"\n\n**Gancho:** "Estou ligando pois vi que ficou pendente nosso alinhamento sobre [Assunto] e não gostaria de deixar passar..."\n\n**Fechamento:** "Conseguimos 5 minutinhos agora ou prefere agendar?"`
                });
                setGeneratedModalOpen(true);
                setCommandResult({
                    status: "success",
                    text: "Script de ligação gerado."
                });
            } else {
                // Fallback for others
                const result = buildCommandResult(commandId, {
                    overdueCount,
                    riskCount,
                    totalActive: executionActivities.length,
                    selectedActivity: selectedActivity || undefined
                });
                setCommandResult(result);
            }
            setCommandLoadingId(null);
        }, 500);
    }, [
        executionActivities.length,
        overdueCount,
        riskCount,
        selectedActivity,
        schedule,
        router,
        user?.name
    ]);
    const handleExportCSV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!canExportActivities) {
            setCommandResult({
                status: "error",
                text: "Você não tem permissão para exportar dados desta tela."
            });
            pushSummaryInlineFeedback({
                tone: "error",
                message: "Você não tem permissão para exportar dados desta tela."
            });
            return;
        }
        setIsExporting(true);
        pushSummaryInlineFeedback({
            tone: "info",
            message: "Exportando lista de atividades..."
        });
        const header = [
            "Título",
            "Tipo",
            "Status",
            "Cliente",
            "Oportunidade",
            "Data",
            "Horário",
            "Responsável"
        ];
        try {
            const rows = filteredActivities.map((activity)=>{
                const effectiveStatus = getEffectiveStatus(activity, now);
                return [
                    activity.title,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeLabels"][activity.type],
                    effectiveStatus === "pending" ? "Pendente" : effectiveStatus === "completed" ? "Concluída" : effectiveStatus === "overdue" ? "Atrasada" : "Cancelada",
                    activity.clientName || "",
                    activity.opportunityTitle || "",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateBR"])(activity.dueDate),
                    activity.dueTime || "",
                    activity.responsibleName
                ];
            });
            const csvContent = [
                header.join(";"),
                ...rows.map((row)=>row.map((cell)=>`"${cell.replace(/"/g, '""')}"`).join(";"))
            ].join("\n");
            const BOM = "\uFEFF";
            const blob = new Blob([
                BOM + csvContent
            ], {
                type: "text/csv;charset=utf-8"
            });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = `atividades-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])(now)}.csv`;
            link.click();
            URL.revokeObjectURL(link.href);
            setCommandResult({
                status: "success",
                text: `${filteredActivities.length} atividades exportadas em CSV.`
            });
            pushSummaryInlineFeedback({
                tone: "success",
                message: `${filteredActivities.length} atividade(s) exportada(s) em CSV.`
            });
        } catch  {
            setCommandResult({
                status: "error",
                text: "Não foi possível exportar a lista agora."
            });
            pushSummaryInlineFeedback({
                tone: "error",
                message: "Não foi possível exportar a lista agora."
            });
        } finally{
            setIsExporting(false);
        }
    }, [
        canExportActivities,
        filteredActivities,
        now,
        pushSummaryInlineFeedback
    ]);
    const renderSectionBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((items, sectionKey)=>{
        if (sectionErrors[sectionKey]) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineSectionError, {
                message: sectionErrors[sectionKey] || "Erro ao carregar seção.",
                onRetry: ()=>setSectionErrors((prev)=>({
                            ...prev,
                            [sectionKey]: null
                        }))
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 1845,
                columnNumber: 11
            }, this);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (items.length === 0) {
            if (sectionKey === "overdue") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[16px] border border-emerald-200 bg-emerald-50/70 px-4 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "h-4 w-4 text-emerald-600"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 1875,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body text-sm font-medium text-emerald-700",
                                children: "Tudo em dia. Nenhuma atividade atrasada."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 1876,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 1874,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 1873,
                    columnNumber: 13
                }, this);
            }
            if (sectionKey === "today") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[16px] border border-zinc-200 bg-zinc-50 px-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-sm text-zinc-600",
                            children: "Nenhuma atividade para hoje."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 1887,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    className: "rounded-full bg-zinc-900 text-white hover:bg-zinc-800",
                                    onClick: ()=>openDrawer("new-activity"),
                                    disabled: !canCreateActivity,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 1897,
                                            columnNumber: 19
                                        }, this),
                                        "Criar atividade"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 1891,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    className: "rounded-full",
                                    onClick: handleGeneratePlan,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__["WandSparkles"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 1906,
                                            columnNumber: 19
                                        }, this),
                                        "Pedir recomendação"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 1900,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 1890,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 1886,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[16px] border border-zinc-200 bg-zinc-50 px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body text-sm text-zinc-600",
                    children: "Nenhuma atividade nesse bloco por enquanto."
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 1916,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 1915,
                columnNumber: 11
            }, this);
        }
        if (viewMode === "agenda") {
            const groupedByDate = items.reduce((acc, activity)=>{
                if (!acc[activity.dueDate]) acc[activity.dueDate] = [];
                acc[activity.dueDate].push(activity);
                return acc;
            }, {});
            const dates = Object.keys(groupedByDate).sort((a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(a).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(b).getTime());
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: dates.map((date)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[16px] border border-zinc-200 bg-white/80 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-heading text-sm font-semibold text-zinc-900",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateFull"])(date)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 1939,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: "rounded-full bg-zinc-100 text-zinc-600",
                                        children: groupedByDate[date].length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 1942,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 1938,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    initial: false,
                                    children: groupedByDate[date].map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layout: true,
                                            initial: {
                                                opacity: 0,
                                                y: 6
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: -4
                                            },
                                            transition: {
                                                duration: 0.16,
                                                ease: "easeOut"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutionActivityCard, {
                                                activity: activity,
                                                now: now,
                                                isExpanded: expandedActivityId === activity.id,
                                                isHighlighted: highlightedPostponedId === activity.id,
                                                selected: selectedActivityIds.has(activity.id),
                                                canExecuteActions: canExecuteActivityActions,
                                                canCancelActions: canCancelActivity,
                                                feedback: activityFeedback[activity.id],
                                                onToggleExpand: ()=>{
                                                    setExpandedActivityId((prev)=>prev === activity.id ? null : activity.id);
                                                    setSelectedActivityId(activity.id);
                                                },
                                                onToggleSelect: ()=>toggleActivitySelection(activity.id),
                                                onComplete: (notes)=>handleCompleteActivity(activity.id, notes),
                                                onCancel: ()=>handleCancelActivity(activity.id),
                                                onPostpone: (newDate)=>handlePostponeActivity(activity.id, newDate),
                                                onSelectIntelligence: ()=>setSelectedActivityId(activity.id),
                                                onGenerateFollowup: ()=>handleGenerateFollowup(activity)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 1957,
                                                columnNumber: 25
                                            }, this)
                                        }, activity.id, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 1949,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 1947,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 1946,
                                columnNumber: 17
                            }, this)
                        ]
                    }, date, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 1937,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 1935,
                columnNumber: 11
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VirtualizedActivityList, {
            items: items,
            estimateSize: 214,
            renderItem: (activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutionActivityCard, {
                    activity: activity,
                    now: now,
                    isExpanded: expandedActivityId === activity.id,
                    isHighlighted: highlightedPostponedId === activity.id,
                    selected: selectedActivityIds.has(activity.id),
                    canExecuteActions: canExecuteActivityActions,
                    canCancelActions: canCancelActivity,
                    feedback: activityFeedback[activity.id],
                    onToggleExpand: ()=>{
                        setExpandedActivityId((prev)=>prev === activity.id ? null : activity.id);
                        setSelectedActivityId(activity.id);
                    },
                    onToggleSelect: ()=>toggleActivitySelection(activity.id),
                    onComplete: (notes)=>handleCompleteActivity(activity.id, notes),
                    onCancel: ()=>handleCancelActivity(activity.id),
                    onPostpone: (newDate)=>handlePostponeActivity(activity.id, newDate),
                    onSelectIntelligence: ()=>setSelectedActivityId(activity.id),
                    onGenerateFollowup: ()=>handleGenerateFollowup(activity)
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 1994,
                    columnNumber: 13
                }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/activities/page.tsx",
            lineNumber: 1990,
            columnNumber: 9
        }, this);
    }, [
        sectionErrors,
        isLoading,
        viewMode,
        now,
        expandedActivityId,
        highlightedPostponedId,
        selectedActivityIds,
        activityFeedback,
        canCreateActivity,
        canExecuteActivityActions,
        canCancelActivity,
        openDrawer,
        handleGeneratePlan,
        toggleActivitySelection,
        handleCompleteActivity,
        handleCancelActivity,
        handlePostponeActivity,
        handleGenerateFollowup
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 6
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.18,
            ease: [
                0.22,
                0.61,
                0.36,
                1
            ]
        },
        className: "space-y-7 lg:space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$module$2d$command$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModuleCommandHeader"], {
                title: "Atividades",
                description: "Execução do dia, com prioridades e próximos passos.",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-zinc-200/80 bg-zinc-50/88", isPageScrolled && "shadow-[0_14px_24px_-18px_rgba(15,23,42,0.32)]"),
                meta: headerMetaText,
                chips: [
                    {
                        id: "overdue",
                        label: `${overdueCount} atrasadas`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 2059,
                            columnNumber: 19
                        }, void 0),
                        tone: overdueCount > 0 ? "danger" : "neutral",
                        onClick: handleQuickFilterOverdue
                    },
                    {
                        id: "today",
                        label: `${todayActivities.length} para hoje`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 2066,
                            columnNumber: 19
                        }, void 0),
                        tone: todayActivities.length > 0 ? "info" : "neutral",
                        onClick: handleQuickFilterToday
                    },
                    hasActiveFilters ? {
                        id: "active-filters",
                        label: `${activeFilterChips.length} filtros ativos`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 2074,
                            columnNumber: 23
                        }, void 0),
                        tone: "warning",
                        onClick: ()=>setIsFilterOpen(true)
                    } : {
                        id: "sla-risk",
                        label: `${riskCount} SLAs em risco`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__["CircleAlert"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 2081,
                            columnNumber: 23
                        }, void 0),
                        tone: riskCount > 0 ? "warning" : "success",
                        onClick: handleQuickFilterSlaRisk
                    }
                ],
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-col gap-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col gap-2.5 min-[1180px]:flex-row min-[1180px]:items-center min-[1180px]:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full flex-col gap-2.5 sm:flex-row sm:items-center min-[1180px]:w-auto min-[1180px]:flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full sm:flex-1 min-[1180px]:max-w-[380px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2091,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: searchQuery,
                                                onChange: (event)=>setSearchQuery(event.target.value),
                                                placeholder: "Buscar atividade, cliente ou oportunidade...",
                                                className: "h-10 rounded-full border-zinc-200 bg-white/90 pl-8 text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2092,
                                                columnNumber: 19
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2090,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex w-full items-center gap-1 rounded-full border border-zinc-200/90 bg-white/90 p-1 shadow-sm sm:w-auto",
                                        children: [
                                            {
                                                key: "list",
                                                label: "Lista",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"]
                                            },
                                            {
                                                key: "agenda",
                                                label: "Agenda",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
                                            }
                                        ].map((mode)=>{
                                            const active = viewMode === mode.key;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setViewMode(mode.key),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all duration-120 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 sm:flex-none", active ? "bg-brand text-white shadow-[0_6px_14px_-8px_rgba(29,78,216,0.7)]" : "text-zinc-600 hover:bg-zinc-100/90"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(mode.icon, {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2117,
                                                        columnNumber: 25
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: mode.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2118,
                                                        columnNumber: 25
                                                    }, void 0)
                                                ]
                                            }, mode.key, true, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2107,
                                                columnNumber: 23
                                            }, void 0);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2100,
                                        columnNumber: 17
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2089,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 sm:justify-end min-[1180px]:shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                        open: isFilterOpen,
                                        onOpenChange: setIsFilterOpen,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "rounded-full border-zinc-200 bg-white/90 transition-all duration-120 ease-out hover:bg-zinc-100/90 active:scale-[0.98] focus-visible:ring-zinc-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2132,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        "Filtros"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2128,
                                                    columnNumber: 21
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2127,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                align: "end",
                                                side: "bottom",
                                                sideOffset: 8,
                                                className: "w-[min(96vw,430px)] rounded-[18px] border-zinc-200 bg-white p-4 shadow-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mb-2 font-heading text-sm font-semibold text-zinc-900",
                                                                    children: "Tipo"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2144,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"].map((type)=>{
                                                                        const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeIconComponents"][type];
                                                                        const active = filterTypes.has(type);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-pointer items-center gap-2 rounded-[12px] border px-2.5 py-2 text-xs", active ? "border-brand/35 bg-brand/8 text-brand" : "border-zinc-200 bg-white text-zinc-600"),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                    checked: active,
                                                                                    onCheckedChange: (checked)=>{
                                                                                        setFilterTypes((prev)=>{
                                                                                            const next = new Set(prev);
                                                                                            if (checked === true) next.add(type);
                                                                                            else next.delete(type);
                                                                                            return next.size === 0 ? new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allActivityTypes"]) : next;
                                                                                        });
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                                    lineNumber: 2159,
                                                                                    columnNumber: 33
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                                    lineNumber: 2170,
                                                                                    columnNumber: 33
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeLabels"][type]
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                                    lineNumber: 2171,
                                                                                    columnNumber: 33
                                                                                }, void 0)
                                                                            ]
                                                                        }, type, true, {
                                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                            lineNumber: 2150,
                                                                            columnNumber: 31
                                                                        }, void 0);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2145,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2143,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2178,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mb-2 font-heading text-sm font-semibold text-zinc-900",
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2181,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: STATUS_OPTIONS.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex cursor-pointer items-center gap-2 rounded-[12px] border border-zinc-200 px-2.5 py-2 text-xs text-zinc-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                    checked: filterStatuses.has(status.value),
                                                                                    onCheckedChange: (checked)=>{
                                                                                        setFilterStatuses((prev)=>{
                                                                                            const next = new Set(prev);
                                                                                            if (checked === true) next.add(status.value);
                                                                                            else next.delete(status.value);
                                                                                            return next.size === 0 ? new Set(DEFAULT_STATUS_FILTER) : next;
                                                                                        });
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                                    lineNumber: 2188,
                                                                                    columnNumber: 31
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: status.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                                    lineNumber: 2199,
                                                                                    columnNumber: 31
                                                                                }, void 0)
                                                                            ]
                                                                        }, status.value, true, {
                                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                            lineNumber: 2184,
                                                                            columnNumber: 29
                                                                        }, void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2182,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2180,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2205,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 gap-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                        className: "mb-1 block text-xs text-zinc-500",
                                                                        children: "SLA"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                        lineNumber: 2209,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex rounded-[12px] border border-zinc-200 p-1",
                                                                        children: SLA_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setFilterSla(option.value),
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 rounded-[9px] px-2 py-1.5 text-xs transition-colors", filterSla === option.value ? "bg-zinc-900 text-white" : "text-zinc-500 hover:bg-zinc-100"),
                                                                                children: option.label
                                                                            }, option.value, false, {
                                                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                                lineNumber: 2212,
                                                                                columnNumber: 31
                                                                            }, void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                        lineNumber: 2210,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                lineNumber: 2208,
                                                                columnNumber: 25
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2207,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                            className: "mb-1 block text-xs text-zinc-500",
                                                                            children: "Período de"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                            lineNumber: 2231,
                                                                            columnNumber: 27
                                                                        }, void 0),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                            type: "date",
                                                                            value: filterDateStart,
                                                                            onChange: (event)=>setFilterDateStart(event.target.value),
                                                                            className: "h-9 rounded-[12px]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                            lineNumber: 2232,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2230,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                            className: "mb-1 block text-xs text-zinc-500",
                                                                            children: "até"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                            lineNumber: 2240,
                                                                            columnNumber: 27
                                                                        }, void 0),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                            type: "date",
                                                                            value: filterDateEnd,
                                                                            onChange: (event)=>setFilterDateEnd(event.target.value),
                                                                            className: "h-9 rounded-[12px]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                            lineNumber: 2241,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2239,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2229,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    className: "flex-1 rounded-full",
                                                                    onClick: clearFilters,
                                                                    children: "Limpar tudo"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2251,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    className: "flex-1 rounded-full bg-zinc-900 text-white hover:bg-zinc-800",
                                                                    onClick: ()=>setIsFilterOpen(false),
                                                                    children: "Fechar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2254,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2250,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2142,
                                                    columnNumber: 21
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2136,
                                                columnNumber: 19
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2126,
                                        columnNumber: 17
                                    }, void 0),
                                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "rounded-full px-3 text-xs text-zinc-500 transition-all duration-120 ease-out hover:bg-zinc-100/90 active:scale-[0.98] focus-visible:ring-zinc-300",
                                        onClick: clearFilters,
                                        children: "Limpar tudo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2266,
                                        columnNumber: 19
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        className: "h-9 rounded-full border-zinc-200 bg-white/90 px-4 transition-all duration-120 ease-out hover:bg-zinc-100/90 active:scale-[0.98] focus-visible:ring-zinc-300",
                                        onClick: handleGeneratePlan,
                                        disabled: isPlanning,
                                        children: [
                                            isPlanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2282,
                                                columnNumber: 21
                                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__["WandSparkles"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2284,
                                                columnNumber: 21
                                            }, void 0),
                                            "Pedir plano do dia"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2275,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "h-9 rounded-full bg-zinc-900 px-4 text-white transition-all duration-120 ease-out hover:bg-zinc-800 active:scale-[0.98] focus-visible:ring-zinc-300",
                                        onClick: ()=>openDrawer("new-activity"),
                                        disabled: !canCreateActivity,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2294,
                                                columnNumber: 19
                                            }, void 0),
                                            "Nova atividade"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2289,
                                        columnNumber: 17
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2125,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 2088,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 2087,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 2047,
                columnNumber: 7
            }, this),
            headerInlineFeedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineFeedbackMessage, {
                tone: headerInlineFeedback.tone,
                message: headerInlineFeedback.message
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 2304,
                columnNumber: 9
            }, this) : null,
            hasActiveFilters && activeFilterChips.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: activeFilterChips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: chip.onRemove,
                        className: "inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-600 transition-colors hover:bg-zinc-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: chip.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2319,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-zinc-400",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2320,
                                columnNumber: 15
                            }, this)
                        ]
                    }, chip.id, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 2313,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 2311,
                columnNumber: 9
            }, this),
            isTeamScope && activities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[14px] border border-blue-200 bg-blue-50/80 px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body text-sm text-blue-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: "Visão de equipe:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 2329,
                            columnNumber: 13
                        }, this),
                        " você está navegando atividades agregadas da equipe."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 2328,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 2327,
                columnNumber: 9
            }, this),
            hasNoScopedActivities && !isTeamScope && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[14px] border border-zinc-200 bg-white px-4 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-sm text-zinc-700",
                        children: "Você não possui atividades atribuídas na sua carteira no momento."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 2336,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                className: "h-8 rounded-full bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800",
                                onClick: ()=>openDrawer("new-activity"),
                                disabled: !canCreateActivity,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2346,
                                        columnNumber: 15
                                    }, this),
                                    "Criar atividade"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "outline",
                                className: "h-8 rounded-full px-3 text-xs",
                                onClick: handleGeneratePlan,
                                disabled: isPlanning,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__["WandSparkles"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2356,
                                        columnNumber: 15
                                    }, this),
                                    "Pedir plano"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2349,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 2339,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 2335,
                columnNumber: 9
            }, this),
            viewMode === "list" && executionActivities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-[18px] border border-zinc-200 bg-white px-4 py-3.5 md:px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm text-zinc-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                        checked: allVisibleExecutionSelected,
                                        onCheckedChange: (checked)=>handleSelectAllVisibleActivities(Boolean(checked))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2367,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Selecionar todas visíveis (",
                                            executionActivities.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2373,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2366,
                                columnNumber: 13
                            }, this),
                            selectedExecutionIds.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-zinc-600",
                                children: [
                                    selectedExecutionIds.length,
                                    " selecionada(s)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2378,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-zinc-500",
                                children: "Selecione atividades para usar ações em lote."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2382,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 2365,
                        columnNumber: 11
                    }, this),
                    selectedExecutionIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                className: "h-8 rounded-full bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800",
                                onClick: handleRequestBulkCompleteActivities,
                                disabled: !canExecuteActivityActions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2396,
                                        columnNumber: 17
                                    }, this),
                                    "Concluir em lote"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2390,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                open: bulkPostponeOpen,
                                onOpenChange: setBulkPostponeOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            className: "h-8 rounded-full px-3 text-xs",
                                            disabled: !canExecuteActivityActions,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2407,
                                                    columnNumber: 21
                                                }, this),
                                                "Adiar"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2401,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2400,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                        align: "start",
                                        sideOffset: 8,
                                        className: "w-[250px] rounded-[16px] border-zinc-200 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                children: "Reagendar em lote"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2416,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    1,
                                                    3,
                                                    7
                                                ].map((days)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleBulkPostponeActivities((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now), days))),
                                                        className: "flex w-full items-center justify-between rounded-[10px] border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "+",
                                                                    days,
                                                                    " ",
                                                                    days === 1 ? "dia" : "dias"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                lineNumber: 2430,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "h-3.5 w-3.5 text-zinc-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                lineNumber: 2431,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, days, true, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2421,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2419,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs text-zinc-500",
                                                        children: "Escolher data"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2436,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "date",
                                                        value: bulkPostponeCustomDate,
                                                        min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now)),
                                                        onChange: (event)=>setBulkPostponeCustomDate(event.target.value),
                                                        className: "h-9 rounded-[10px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2437,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        className: "h-8 w-full rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800",
                                                        disabled: !bulkPostponeCustomDate,
                                                        onClick: ()=>handleBulkPostponeActivities(bulkPostponeCustomDate),
                                                        children: "Confirmar data"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2444,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2435,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2411,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2399,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "ghost",
                                className: "h-8 rounded-full px-3 text-xs text-red-600 hover:bg-red-50",
                                onClick: handleRequestBulkCancelActivities,
                                disabled: !canCancelActivity,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2464,
                                        columnNumber: 17
                                    }, this),
                                    "Cancelar em lote"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2457,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "ghost",
                                className: "h-8 rounded-full px-3 text-xs text-zinc-500",
                                onClick: clearSelectedActivities,
                                children: "Limpar seleção"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 2467,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 2389,
                        columnNumber: 13
                    }, this),
                    bulkInlineFeedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineFeedbackMessage, {
                        tone: bulkInlineFeedback.tone,
                        message: bulkInlineFeedback.message,
                        className: "mt-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 2479,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 2364,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 2xl:grid-cols-[minmax(0,7fr)_minmax(340px,3fr)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: viewMode === "agenda" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivitiesCalendarView, {
                            now: now,
                            monthDate: calendarMonth,
                            days: calendarDays,
                            selectedDate: selectedCalendarDate,
                            activitiesByDate: calendarActivitiesByDate,
                            selectedDayActivities: selectedCalendarDayActivities,
                            expandedActivityId: expandedActivityId,
                            highlightedPostponedId: highlightedPostponedId,
                            selectedActivityIds: selectedActivityIds,
                            canExecuteActions: canExecuteActivityActions,
                            canCancelActions: canCancelActivity,
                            activityFeedback: activityFeedback,
                            onPreviousMonth: ()=>setCalendarMonth((prev)=>new Date(prev.getFullYear(), prev.getMonth() - 1, 1)),
                            onNextMonth: ()=>setCalendarMonth((prev)=>new Date(prev.getFullYear(), prev.getMonth() + 1, 1)),
                            onGoToToday: ()=>{
                                const todayDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now);
                                setCalendarMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfMonth"])(todayDate));
                                setSelectedCalendarDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])(todayDate));
                            },
                            onSelectDate: (date)=>{
                                const monthStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfMonth"])(date);
                                const iso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])(date);
                                setSelectedCalendarDate(iso);
                                setCalendarMonth(monthStart);
                            },
                            onToggleExpand: (activityId)=>{
                                setExpandedActivityId((prev)=>prev === activityId ? null : activityId);
                                setSelectedActivityId(activityId);
                            },
                            onComplete: handleCompleteActivity,
                            onCancel: handleCancelActivity,
                            onPostpone: handlePostponeActivity,
                            onToggleSelectActivity: toggleActivitySelection,
                            onSelectIntelligence: setSelectedActivityId,
                            onGenerateFollowup: handleGenerateFollowup,
                            onOpenActivityDetails: (activity)=>{
                                setSelectedActivityId(activity.id);
                                setDetailsModalActivityId(activity.id);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 2491,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutionSection, {
                                    title: "O que a Menux Intelligence recomenda agora",
                                    count: menuxIntelligenceRecommendations.length,
                                    collapsed: collapsedSections.intelligence,
                                    onToggle: ()=>toggleSection("intelligence"),
                                    tone: "violet",
                                    children: sectionErrors.intelligence ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineSectionError, {
                                        message: sectionErrors.intelligence,
                                        onRetry: ()=>{
                                            setSectionErrors((prev)=>({
                                                    ...prev,
                                                    intelligence: null
                                                }));
                                            handleGeneratePlan();
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2546,
                                        columnNumber: 15
                                    }, this) : ("TURBOPACK compile-time falsy", 0) ? /*#__PURE__*/ "TURBOPACK unreachable" : menuxIntelligenceRecommendations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[18px] border border-cyan-200/20 bg-slate-900/45 px-5 py-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-body text-sm text-slate-200",
                                                children: "Sem recomendações no momento."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2561,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                className: "mt-3 rounded-full border border-cyan-300/25 bg-cyan-500/18 text-cyan-50 hover:bg-cyan-500/28",
                                                onClick: handleGeneratePlan,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2569,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Gerar plano do dia"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2564,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2560,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 lg:grid-cols-2 2xl:grid-cols-3",
                                        children: menuxIntelligenceRecommendations.map((recommendation)=>{
                                            const state = recommendationStates[recommendation.id] || "idle";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "rounded-[20px] border border-cyan-200/20 bg-slate-900/52 p-5 shadow-[0_12px_24px_-20px_rgba(2,6,23,0.75)] transition-all duration-140 hover:-translate-y-[1px] hover:border-cyan-200/35",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3 flex items-start justify-between gap-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-cyan-300/25 bg-cyan-500/16 text-cyan-100",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                        lineNumber: 2586,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2585,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-heading text-sm font-semibold text-slate-100",
                                                                            children: recommendation.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                            lineNumber: 2589,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-body text-sm leading-snug text-slate-400",
                                                                            children: recommendation.context
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                            lineNumber: 2592,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2588,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2584,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2583,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "min-h-[62px] font-body text-sm leading-relaxed text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-slate-100",
                                                                children: "Por que:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                lineNumber: 2598,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            recommendation.why
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2597,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 grid gap-2 sm:grid-cols-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                className: "h-9 rounded-full border border-cyan-300/24 bg-cyan-500/18 text-xs text-cyan-50 hover:bg-cyan-500/28",
                                                                disabled: state === "loading",
                                                                onClick: ()=>handleExecuteRecommendation(recommendation),
                                                                children: state === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                            className: "h-3.5 w-3.5 animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                            lineNumber: 2610,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        "Executando"
                                                                    ]
                                                                }, void 0, true) : state === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                            lineNumber: 2615,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        "Executado"
                                                                    ]
                                                                }, void 0, true) : recommendation.primaryActionLabel
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                lineNumber: 2602,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                variant: "outline",
                                                                className: "h-9 rounded-full border-white/16 bg-white/6 text-xs text-slate-200 hover:bg-white/10",
                                                                onClick: ()=>handleViewActivityFromRecommendation(recommendation.activityId),
                                                                children: "Ver atividade"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                lineNumber: 2622,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2601,
                                                        columnNumber: 23
                                                    }, this),
                                                    state === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-xs text-status-danger",
                                                        children: "Falha ao executar. Tentar novamente."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2635,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, recommendation.id, true, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2579,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 2574,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2538,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutionSection, {
                                    title: "Atrasadas",
                                    count: overdueActivities.length,
                                    collapsed: collapsedSections.overdue,
                                    onToggle: ()=>toggleSection("overdue"),
                                    tone: "danger",
                                    children: renderSectionBody(overdueActivities, "overdue")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2646,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutionSection, {
                                    title: "Hoje",
                                    count: todayActivities.length,
                                    collapsed: collapsedSections.today,
                                    onToggle: ()=>toggleSection("today"),
                                    tone: "warning",
                                    children: renderSectionBody(todayActivities, "today")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2656,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutionSection, {
                                    title: "Próximos 7 dias",
                                    count: next7Activities.length,
                                    collapsed: collapsedSections.next7,
                                    onToggle: ()=>toggleSection("next7"),
                                    tone: "neutral",
                                    children: renderSectionBody(next7Activities, "next7")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2666,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutionSection, {
                                    title: "Futuras",
                                    count: futureActivities.length,
                                    collapsed: collapsedSections.future,
                                    onToggle: ()=>toggleSection("future"),
                                    tone: "neutral",
                                    children: renderSectionBody(futureActivities, "future")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2676,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[20px] border border-zinc-200 bg-white p-4 shadow-sm md:p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-heading text-lg font-semibold text-zinc-900",
                                                            children: "Resumo do dia"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2689,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-body text-xs text-zinc-500",
                                                            children: "Panorama rápido de execução e produtividade."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2690,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2688,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "sm",
                                                            variant: "outline",
                                                            className: "rounded-full text-xs",
                                                            onClick: ()=>{
                                                                setGeneratedContent({
                                                                    title: "Resumo do dia",
                                                                    content: `### Execução do dia\n- Total de atividades: ${filteredActivities.length}\n- Conclusão semanal: ${weeklyCompletionRate}%\n- Atrasadas: ${overdueCount}\n\n**Próximo passo:** atacar primeiro as atividades atrasadas com maior risco de SLA.`
                                                                });
                                                                setGeneratedModalOpen(true);
                                                            },
                                                            children: "Ver resumo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2695,
                                                            columnNumber: 17
                                                        }, this),
                                                        canExportActivities ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "sm",
                                                            variant: "outline",
                                                            className: "rounded-full text-xs",
                                                            disabled: isExporting,
                                                            onClick: handleExportCSV,
                                                            children: isExporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "h-3.5 w-3.5 animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                        lineNumber: 2719,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Exportando..."
                                                                ]
                                                            }, void 0, true) : "Exportar lista"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2710,
                                                            columnNumber: 19
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2694,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2687,
                                            columnNumber: 13
                                        }, this),
                                        summaryInlineFeedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineFeedbackMessage, {
                                            tone: summaryInlineFeedback.tone,
                                            message: summaryInlineFeedback.message,
                                            className: "mt-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2731,
                                            columnNumber: 15
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryMetric, {
                                                    label: "Total de atividades",
                                                    value: String(filteredActivities.length)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2739,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryMetric, {
                                                    label: "Conclusão semanal",
                                                    value: `${weeklyCompletionRate}%`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2740,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryMetric, {
                                                    label: "Tipo dominante",
                                                    value: hotspotType ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeLabels"][hotspotType[0]] : "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2741,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryMetric, {
                                                    label: "SLA estourado",
                                                    value: String(overdueCount),
                                                    accent: overdueCount > 0 ? "danger" : "success"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2745,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2738,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid gap-3 lg:grid-cols-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[14px] border border-zinc-200 bg-zinc-50/70 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                        children: "Por tipo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2754,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1.5",
                                                        children: Object.entries(typeCounts).sort((a, b)=>b[1] - a[1]).slice(0, 4).map(([type, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-zinc-600",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeLabels"][type]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                        lineNumber: 2763,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-zinc-900",
                                                                        children: count
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                        lineNumber: 2764,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, type, true, {
                                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                lineNumber: 2762,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 2757,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2753,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2752,
                                            columnNumber: 13
                                        }, this),
                                        completedActivities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 rounded-[14px] border border-zinc-200 bg-white p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                    children: "Concluídas recentes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2773,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1.5",
                                                    children: completedActivities.slice(0, 4).map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between rounded-[10px] bg-zinc-50 px-2.5 py-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "truncate text-sm text-zinc-700",
                                                                    children: activity.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2782,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-zinc-500",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateBR"])(activity.completedAt || activity.dueDate)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                                    lineNumber: 2783,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, activity.id, true, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2778,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2776,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2772,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2686,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 2489,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        ref: intelligenceRailRef,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("self-start 2xl:sticky 2xl:top-6", "transition-shadow duration-120 ease-out", isPageScrolled && "2xl:drop-shadow-[0_8px_20px_rgba(15,23,42,0.08)]"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "menux-intelligence-theme space-y-5 rounded-[20px] border border-cyan-300/16 p-5 shadow-[0_14px_26px_-22px_rgba(2,6,23,0.8)] md:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-heading text-lg font-semibold text-slate-100",
                                                    children: "Menux Intelligence"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2807,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 flex items-center gap-2 text-xs text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-2 w-2 rounded-full bg-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2809,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Online"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2808,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2806,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            className: "rounded-full border-white/16 bg-white/8 text-slate-100 hover:bg-white/12",
                                            onClick: handleGeneratePlan,
                                            disabled: isPlanning,
                                            children: [
                                                isPlanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-3.5 w-3.5 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2821,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2823,
                                                    columnNumber: 19
                                                }, this),
                                                "Gerar plano do dia"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2813,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2805,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[16px] border border-white/14 bg-white/7 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-slate-300",
                                            children: "Diagnóstico do dia"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2830,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DiagnosticItem, {
                                                    label: "Atrasadas",
                                                    value: String(overdueCount),
                                                    tone: overdueCount > 0 ? "danger" : "success"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2834,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DiagnosticItem, {
                                                    label: "SLAs críticos",
                                                    value: String(overdueActivities.filter((a)=>{
                                                        const daysLate = Math.floor(((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(a.dueDate).getTime()) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAY_MS"]);
                                                        return daysLate >= 3;
                                                    }).length),
                                                    tone: overdueActivities.some((a)=>{
                                                        const daysLate = Math.floor(((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateISO"])(a.dueDate).getTime()) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAY_MS"]);
                                                        return daysLate >= 3;
                                                    }) ? "danger" : "success"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2835,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DiagnosticItem, {
                                                    label: "SLAs em risco",
                                                    value: String(riskCount),
                                                    tone: riskCount > 0 ? "warning" : "success"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2842,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DiagnosticItem, {
                                                    label: "Tipo mais afetado",
                                                    value: hotspotType ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeLabels"][hotspotType[0]] : "Sem dados",
                                                    tone: "neutral"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2843,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2833,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2829,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[16px] border border-white/14 bg-white/7 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-slate-300",
                                            children: "Sugestões rápidas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2852,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2 sm:grid-cols-2 xl:grid-cols-1",
                                            children: RAIL_COMMANDS.map((command)=>{
                                                const loading = commandLoadingId === command.id;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRunCommand(command.id),
                                                    disabled: loading,
                                                    className: "flex items-center justify-between rounded-[12px] border border-white/14 bg-white/8 px-3 py-2 text-left text-xs text-slate-200 transition-colors duration-120 hover:bg-white/12 disabled:opacity-70",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: command.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2865,
                                                            columnNumber: 23
                                                        }, this),
                                                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-3.5 w-3.5 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2867,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "h-3.5 w-3.5 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 2869,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, command.id, true, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 2859,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2855,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: commandResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 4
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 4
                                                },
                                                transition: {
                                                    duration: 0.14
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-3 rounded-[12px] border px-3 py-2 text-xs", commandResult.status === "success" ? "border-emerald-300/28 bg-emerald-500/14 text-emerald-100" : "border-red-300/30 bg-red-500/14 text-red-100"),
                                                children: commandResult.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 2878,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2876,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2851,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[16px] border border-white/14 bg-white/7 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-slate-300",
                                            children: "Mensagens prontas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2897,
                                            columnNumber: 15
                                        }, this),
                                        selectedActivity ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectedActivityMessages, {
                                            activity: selectedActivity,
                                            now: now
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2902,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[12px] border border-dashed border-white/20 bg-white/6 px-3 py-3 text-xs text-slate-300",
                                            children: "Selecione uma atividade para ver mensagens sugeridas aqui."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 2904,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2896,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 2804,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 2796,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 2488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: confirmBulkCompleteOpen,
                onOpenChange: setConfirmBulkCompleteOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                    className: "rounded-[20px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                    className: "font-heading text-xl",
                                    children: "Concluir atividades em lote?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2919,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                    className: "font-body text-sm text-zinc-600",
                                    children: [
                                        "Essa ação conclui ",
                                        selectedExecutionIds.length,
                                        " atividade(s) selecionada(s) e registra o status imediatamente."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2922,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 2918,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    className: "rounded-full",
                                    children: "Voltar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2928,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    className: "rounded-full bg-zinc-900 text-white hover:bg-zinc-800",
                                    onClick: handleConfirmBulkCompleteActivities,
                                    children: "Confirmar conclusão"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2931,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 2927,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 2917,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 2913,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: confirmBulkCancelOpen,
                onOpenChange: setConfirmBulkCancelOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                    className: "rounded-[20px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                    className: "font-heading text-xl",
                                    children: "Cancelar atividades em lote?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2947,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                    className: "font-body text-sm text-zinc-600",
                                    children: [
                                        "Essa ação cancela ",
                                        selectedExecutionIds.length,
                                        " atividade(s) selecionada(s) e registra o status imediatamente."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2950,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 2946,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    className: "rounded-full",
                                    children: "Voltar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2956,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    className: "rounded-full bg-red-600 text-white hover:bg-red-700",
                                    onClick: handleConfirmBulkCancelActivities,
                                    children: "Confirmar cancelamento"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 2959,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 2955,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 2945,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 2941,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$generated$2d$content$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeneratedContentModal"], {
                open: generatedModalOpen,
                onOpenChange: setGeneratedModalOpen,
                title: generatedContent.title,
                content: generatedContent.content
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 2969,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityDetailsModal, {
                open: Boolean(detailsModalActivity),
                activity: detailsModalActivity,
                now: now,
                onOpenChange: (open)=>{
                    if (!open) {
                        setDetailsModalActivityId(null);
                    }
                },
                onSelectIntelligence: (activity)=>{
                    setDetailsModalActivityId(null);
                    handleOpenIntelligenceFromActivity(activity);
                },
                onGenerateFollowup: (activity)=>{
                    setDetailsModalActivityId(null);
                    handleGenerateFollowup(activity);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 2976,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 2041,
        columnNumber: 5
    }, this);
}
function VirtualizedActivityList({ items, renderItem, estimateSize = 176 }) {
    const parentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shouldVirtualize = items.length > 14;
    // eslint-disable-next-line react-hooks/incompatible-library -- TanStack Virtual is intentional here for large lists.
    const rowVirtualizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useVirtualizer"])({
        count: items.length,
        getScrollElement: ()=>parentRef.current,
        estimateSize: ()=>estimateSize,
        overscan: 6
    });
    if (!shouldVirtualize) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: items.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        initial: {
                            opacity: 0,
                            y: 6
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -4,
                            scale: 0.995
                        },
                        transition: {
                            duration: 0.16,
                            ease: "easeOut"
                        },
                        children: renderItem(activity)
                    }, activity.id, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3023,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 3021,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/activities/page.tsx",
            lineNumber: 3020,
            columnNumber: 7
        }, this);
    }
    const viewportHeight = Math.min(720, Math.max(320, Math.round(items.length * estimateSize)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: parentRef,
        className: "overflow-auto pr-1",
        style: {
            height: viewportHeight
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative"
            },
            children: rowVirtualizer.getVirtualItems().map((virtualRow)=>{
                const activity = items[virtualRow.index];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-index": virtualRow.index,
                    ref: rowVirtualizer.measureElement,
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${virtualRow.start}px)`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pb-3",
                        children: renderItem(activity)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3070,
                        columnNumber: 15
                    }, this)
                }, activity.id, false, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 3058,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/activities/page.tsx",
            lineNumber: 3047,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 3042,
        columnNumber: 5
    }, this);
}
function ActivitiesCalendarView({ now, monthDate, days, selectedDate, activitiesByDate, selectedDayActivities, expandedActivityId, highlightedPostponedId, selectedActivityIds, canExecuteActions, canCancelActions, activityFeedback, onPreviousMonth, onNextMonth, onGoToToday, onSelectDate, onToggleExpand, onComplete, onCancel, onPostpone, onToggleSelectActivity, onSelectIntelligence, onGenerateFollowup, onOpenActivityDetails }) {
    const monthStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfMonth"])(monthDate);
    const selectedDateLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateFull"])(selectedDate);
    const weekdayLabels = [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sáb"
    ];
    const todayIso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-[20px] border border-zinc-200 bg-white p-4 shadow-sm md:p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-heading text-lg font-semibold text-zinc-900",
                                children: "Agenda em calendário"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body text-xs text-zinc-500",
                                children: "Visualização mensal para planejar a execução por dia."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "outline",
                                className: "rounded-full border-zinc-200 text-xs",
                                onClick: onGoToToday,
                                children: "Hoje"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/90 p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "icon",
                                        variant: "ghost",
                                        className: "h-8 w-8 rounded-full text-zinc-600",
                                        onClick: onPreviousMonth,
                                        "aria-label": "Mês anterior",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3162,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "min-w-[164px] text-center font-heading text-sm font-semibold text-zinc-900 capitalize",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMonthTitle"])(monthDate)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "icon",
                                        variant: "ghost",
                                        className: "h-8 w-8 rounded-full text-zinc-600",
                                        onClick: onNextMonth,
                                        "aria-label": "Próximo mês",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3174,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 3137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 overflow-hidden rounded-[16px] border border-zinc-200 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 border-b border-zinc-200 bg-zinc-50/80",
                        children: weekdayLabels.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.06em] text-zinc-500",
                                children: label
                            }, label, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3183,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 gap-px bg-zinc-200/80",
                        children: days.map((date)=>{
                            const iso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])(date);
                            const activities = activitiesByDate.get(iso) || [];
                            const inCurrentMonth = date.getMonth() === monthStart.getMonth();
                            const isSelected = iso === selectedDate;
                            const isToday = iso === todayIso;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "button",
                                tabIndex: 0,
                                onClick: ()=>onSelectDate(date),
                                onKeyDown: (event)=>{
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        onSelectDate(date);
                                    }
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("min-h-[116px] bg-white px-2 py-2 text-left transition-colors duration-120 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand/35", "hover:bg-zinc-50", !inCurrentMonth && "bg-zinc-50/70 text-zinc-400", isSelected && "bg-brand/6 ring-2 ring-inset ring-brand/35", isToday && !isSelected && "ring-1 ring-inset ring-zinc-300"),
                                "aria-label": `Dia ${date.getDate()} com ${activities.length} atividade${activities.length === 1 ? "" : "s"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs font-semibold", isSelected ? "bg-brand text-white" : isToday ? "bg-zinc-900 text-white" : "text-zinc-700"),
                                                children: date.getDate()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3222,
                                                columnNumber: 19
                                            }, this),
                                            activities.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-zinc-100 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-600",
                                                children: activities.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3236,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3221,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 space-y-1",
                                        children: [
                                            activities.slice(0, 2).map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: (event)=>{
                                                        event.stopPropagation();
                                                        onSelectDate(date);
                                                        onOpenActivityDetails(activity);
                                                    },
                                                    className: "block w-full truncate rounded-[8px] bg-zinc-100/85 px-1.5 py-1 text-left text-[10px] text-zinc-700 transition-colors duration-120 hover:bg-zinc-200/70",
                                                    children: [
                                                        activity.dueTime ? `${activity.dueTime} ` : "",
                                                        activity.title
                                                    ]
                                                }, activity.id, true, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 3244,
                                                    columnNumber: 21
                                                }, this)),
                                            activities.length > 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: (event)=>{
                                                    event.stopPropagation();
                                                    onSelectDate(date);
                                                },
                                                className: "text-[10px] font-medium text-brand hover:underline",
                                                children: [
                                                    "+",
                                                    activities.length - 2,
                                                    " atividades"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3260,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3242,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, iso, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3201,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 3180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-[16px] border border-zinc-200 bg-zinc-50/70 p-3 md:p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-heading text-sm font-semibold text-zinc-900",
                                    children: selectedDateLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3281,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-zinc-500",
                                    children: [
                                        selectedDayActivities.length,
                                        " ",
                                        selectedDayActivities.length === 1 ? "atividade" : "atividades",
                                        " no dia"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3284,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3280,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3279,
                        columnNumber: 9
                    }, this),
                    selectedDayActivities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[12px] border border-dashed border-zinc-200 bg-white px-3 py-4 text-sm text-zinc-500",
                        children: "Sem atividades para este dia."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3292,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            initial: false,
                            children: selectedDayActivities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layout: true,
                                    initial: {
                                        opacity: 0,
                                        y: 6
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -4,
                                        scale: 0.995
                                    },
                                    transition: {
                                        duration: 0.16,
                                        ease: "easeOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutionActivityCard, {
                                        activity: activity,
                                        now: now,
                                        isExpanded: expandedActivityId === activity.id,
                                        isHighlighted: highlightedPostponedId === activity.id,
                                        selected: selectedActivityIds.has(activity.id),
                                        canExecuteActions: canExecuteActions,
                                        canCancelActions: canCancelActions,
                                        feedback: activityFeedback[activity.id],
                                        onToggleExpand: ()=>onToggleExpand(activity.id),
                                        onToggleSelect: ()=>onToggleSelectActivity(activity.id),
                                        onComplete: (notes)=>onComplete(activity.id, notes),
                                        onCancel: ()=>onCancel(activity.id),
                                        onPostpone: (newDate)=>onPostpone(activity.id, newDate),
                                        onSelectIntelligence: ()=>onSelectIntelligence(activity.id),
                                        onGenerateFollowup: ()=>onGenerateFollowup(activity)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3307,
                                        columnNumber: 19
                                    }, this)
                                }, activity.id, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3299,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3297,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3296,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 3278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 3136,
        columnNumber: 5
    }, this);
}
function ActivityDetailsModal({ open, activity, now, onOpenChange, onSelectIntelligence, onGenerateFollowup }) {
    if (!activity) return null;
    const statusChip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStatusChip"])(activity, now);
    const insight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActivityInsight"])(activity, now);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-[680px] rounded-[20px] border-zinc-200 p-5 sm:p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "font-heading text-xl font-semibold text-zinc-900",
                            children: activity.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "text-sm text-zinc-500",
                            children: activity.clientName || activity.opportunityTitle || "Atividade comercial"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3361,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 3357,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-2.5 py-1 text-xs font-semibold", statusChip.className),
                                    children: statusChip.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3368,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeLabels"][activity.type]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3371,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelativeTimeLabel"])(activity, now)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3374,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3367,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[12px] border border-zinc-200 bg-zinc-50/80 px-3 py-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-semibold uppercase tracking-wide text-zinc-500",
                                            children: "Responsável"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3381,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-zinc-700",
                                            children: activity.responsibleName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3382,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3380,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[12px] border border-zinc-200 bg-zinc-50/80 px-3 py-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-semibold uppercase tracking-wide text-zinc-500",
                                            children: "Prazo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3385,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-zinc-700",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateBR"])(activity.dueDate),
                                                activity.dueTime ? ` · ${activity.dueTime}` : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3386,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3384,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3379,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[14px] border border-zinc-200 bg-white p-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                    children: "Descrição"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3394,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-zinc-700",
                                    children: activity.description || "Sem descrição detalhada para esta atividade."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3395,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3393,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[14px] border border-zinc-200 bg-zinc-50/80 p-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                    children: "Recomendação da Menux Intelligence"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3401,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-zinc-700",
                                    children: insight.nextStep
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3404,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-xs text-zinc-500",
                                    children: insight.risk
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3405,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3400,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 3366,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 flex flex-wrap items-center justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            variant: "outline",
                            className: "h-9 rounded-full",
                            onClick: ()=>onSelectIntelligence(activity),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3416,
                                    columnNumber: 13
                                }, this),
                                "Menux Intelligence"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3410,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            className: "h-9 rounded-full bg-zinc-900 text-white hover:bg-zinc-800",
                            onClick: ()=>onGenerateFollowup(activity),
                            children: "Gerar follow-up"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3419,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 3409,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/activities/page.tsx",
            lineNumber: 3356,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 3355,
        columnNumber: 5
    }, this);
}
function ExecutionSection({ title, count, collapsed, onToggle, tone, children }) {
    const toneStyles = {
        violet: {
            badge: "border border-cyan-300/25 bg-cyan-500/18 text-cyan-100",
            icon: "text-cyan-200",
            border: "border-cyan-300/20"
        },
        danger: {
            badge: "bg-red-100 text-red-700",
            icon: "text-red-600",
            border: "border-red-200/70"
        },
        warning: {
            badge: "bg-amber-100 text-amber-700",
            icon: "text-amber-600",
            border: "border-amber-200/70"
        },
        neutral: {
            badge: "bg-zinc-100 text-zinc-700",
            icon: "text-zinc-500",
            border: "border-zinc-200"
        }
    };
    const style = toneStyles[tone];
    const isIntelligenceTone = tone === "violet";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-[20px] border p-5 shadow-sm md:p-6", style.border, isIntelligenceTone ? "bg-slate-900/62 shadow-[0_12px_24px_-20px_rgba(2,6,23,0.82)]" : "bg-white"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                className: "flex w-full items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            tone === "violet" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", style.icon)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3489,
                                columnNumber: 13
                            }, this) : tone === "danger" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", style.icon)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3491,
                                columnNumber: 13
                            }, this) : tone === "warning" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__["CircleAlert"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", style.icon)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3493,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dashed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDashed$3e$__["CircleDashed"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", style.icon)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3495,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-heading text-[15px] font-semibold", isIntelligenceTone ? "text-slate-100" : "text-zinc-900"),
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3497,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-2 py-0.5 text-xs font-semibold", style.badge),
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3505,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3487,
                        columnNumber: 9
                    }, this),
                    collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", isIntelligenceTone ? "text-slate-300" : "text-zinc-500")
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3510,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", isIntelligenceTone ? "text-slate-300" : "text-zinc-500")
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3512,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 3483,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.18,
                        ease: "easeOut"
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3525,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 3518,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 3516,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 3474,
        columnNumber: 5
    }, this);
}
function InlineSectionError({ message, onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[14px] border border-red-200 bg-red-50 px-4 py-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-700",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 3543,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 rounded-full border-red-300 text-red-700",
                    onClick: onRetry,
                    children: "Tentar novamente"
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 3544,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/activities/page.tsx",
            lineNumber: 3542,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 3541,
        columnNumber: 5
    }, this);
}
function InlineFeedbackMessage({ tone, message, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-[12px] border px-3 py-2 text-xs", tone === "success" && "border-emerald-200 bg-emerald-50 text-emerald-700", tone === "error" && "border-red-200 bg-red-50 text-red-700", tone === "info" && "border-blue-200 bg-blue-50 text-blue-700", className),
        children: message
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 3567,
        columnNumber: 5
    }, this);
}
const ExecutionActivityCard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function ExecutionActivityCard({ activity, now, feedback, isExpanded, isHighlighted, selected, canExecuteActions, canCancelActions, onToggleExpand, onToggleSelect, onComplete, onCancel, onPostpone, onSelectIntelligence, onGenerateFollowup }) {
    const [postponeOpen, setPostponeOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [insightOpen, setInsightOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [completeOpen, setCompleteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmCancelOpen, setConfirmCancelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [completionNotes, setCompletionNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [customPostponeDate, setCustomPostponeDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copyError, setCopyError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const TypeIcon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeIconComponents"][activity.type];
    const chip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStatusChip"])(activity, now);
    const insight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActivityInsight"])(activity, now);
    const isBusy = feedback?.state === "loading-complete" || feedback?.state === "loading-cancel" || feedback?.state === "loading-postpone";
    const handleCopyMessage = async ()=>{
        try {
            await navigator.clipboard.writeText(insight.message);
            setCopied(true);
            setCopyError(null);
            setTimeout(()=>setCopied(false), 1200);
        } catch  {
            setCopied(false);
            setCopyError("Não foi possível copiar agora.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        id: `activity-card-${activity.id}`,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-[20px] border border-zinc-200 bg-white p-5 transition-all duration-140 md:p-6", "hover:-translate-y-[2px] hover:shadow-[0_14px_28px_-18px_rgba(15,23,42,0.48)]", isHighlighted && "ring-2 ring-brand/35", feedback?.state === "complete-success" && "border-emerald-300 bg-emerald-50/40"),
        onClick: onToggleExpand,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex items-start gap-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px]", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeColors"][activity.type].bg, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeColors"][activity.type].text),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TypeIcon, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3662,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3655,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "truncate font-heading text-[17px] font-semibold text-zinc-900",
                                                children: activity.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3667,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-2 py-0.5 text-[11px] font-medium", chip.className),
                                                children: chip.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3670,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3666,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex flex-wrap items-center gap-2 text-sm text-zinc-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate max-w-[420px]",
                                                children: activity.clientId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/clients?clientId=${activity.clientId}`,
                                                    className: "hover:text-brand hover:underline",
                                                    children: activity.clientName || "Sem nome"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 3678,
                                                    columnNumber: 19
                                                }, this) : activity.opportunityId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/pipes?opportunityId=${activity.opportunityId}`,
                                                    className: "hover:text-brand hover:underline",
                                                    children: activity.opportunityTitle || "Sem título"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 3682,
                                                    columnNumber: 19
                                                }, this) : activity.clientName || activity.opportunityTitle || "Sem contexto"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3676,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-300",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3689,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typeLabels"][activity.type]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3690,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3675,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                size: "sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    className: "bg-brand/10 text-[10px] font-semibold text-brand",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initials"])(activity.responsibleName)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 3695,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3694,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-zinc-600",
                                                children: activity.responsibleName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3699,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-300",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3700,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-zinc-500",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateBR"])(activity.dueDate),
                                                    activity.dueTime ? ` ${activity.dueTime}` : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3701,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3693,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3665,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3654,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left lg:text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium text-zinc-500",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelativeTimeLabel"])(activity, now)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3710,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3709,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 3653,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2.5",
                onClick: (event)=>event.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                checked: selected,
                                onCheckedChange: ()=>onToggleSelect(),
                                disabled: !canExecuteActions
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3719,
                                columnNumber: 11
                            }, this),
                            "Selecionar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3718,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                        open: completeOpen,
                        onOpenChange: setCompleteOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    className: "h-9 rounded-full bg-zinc-900 px-4 text-xs text-white hover:bg-zinc-800",
                                    disabled: isBusy || !canExecuteActions,
                                    children: [
                                        feedback?.state === "loading-complete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-3.5 w-3.5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3735,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3737,
                                            columnNumber: 17
                                        }, this),
                                        "Concluir"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3729,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3728,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                align: "start",
                                sideOffset: 8,
                                className: "w-[280px] rounded-[16px] border-zinc-200 p-3",
                                onClick: (event)=>event.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                        children: "Concluir atividade"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3748,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        placeholder: "Observações da conclusão (opcional)",
                                        value: completionNotes,
                                        onChange: (event)=>setCompletionNotes(event.target.value),
                                        className: "w-full resize-none rounded-[10px] border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700 placeholder:text-zinc-400 focus:border-brand/40 focus:outline-none focus:ring-2 focus:ring-brand/20",
                                        rows: 3
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3751,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                className: "h-8 flex-1 rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800",
                                                onClick: ()=>{
                                                    onComplete(completionNotes.trim() || undefined);
                                                    setCompleteOpen(false);
                                                    setCompletionNotes("");
                                                },
                                                disabled: !canExecuteActions,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 3769,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Confirmar"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3759,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "outline",
                                                className: "h-8 rounded-full text-xs",
                                                onClick: ()=>{
                                                    setCompleteOpen(false);
                                                    setCompletionNotes("");
                                                },
                                                children: "Cancelar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3772,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3758,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3742,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3727,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                        open: postponeOpen,
                        onOpenChange: setPostponeOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    className: "h-9 rounded-full px-4 text-xs",
                                    disabled: isBusy || !canExecuteActions,
                                    children: [
                                        feedback?.state === "loading-postpone" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-3.5 w-3.5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3796,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3798,
                                            columnNumber: 17
                                        }, this),
                                        "Adiar"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3789,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3788,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                align: "start",
                                sideOffset: 8,
                                className: "w-[250px] rounded-[16px] border-zinc-200 p-3",
                                onClick: (event)=>event.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                        children: "Reagendar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3809,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            1,
                                            3,
                                            7
                                        ].map((days)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    onPostpone((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now), days)));
                                                    setPostponeOpen(false);
                                                },
                                                className: "flex w-full items-center justify-between rounded-[10px] border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "+",
                                                            days,
                                                            " ",
                                                            days === 1 ? "dia" : "dias"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 3822,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-3.5 w-3.5 text-zinc-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 3823,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, days, true, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3814,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3812,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-xs text-zinc-500",
                                                children: "Escolher data"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3828,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "date",
                                                value: customPostponeDate,
                                                min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toISODate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(now)),
                                                onChange: (event)=>setCustomPostponeDate(event.target.value),
                                                className: "h-9 rounded-[10px]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3829,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                className: "h-8 w-full rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800",
                                                disabled: !customPostponeDate || !canExecuteActions,
                                                onClick: ()=>{
                                                    onPostpone(customPostponeDate);
                                                    setPostponeOpen(false);
                                                    setCustomPostponeDate("");
                                                },
                                                children: "Confirmar data"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3836,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3827,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3803,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3787,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                        open: insightOpen,
                        onOpenChange: setInsightOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    className: "menux-intelligence-btn-soft h-9 rounded-full px-4 text-xs text-slate-100",
                                    onClick: onSelectIntelligence,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "h-3.5 w-3.5 text-cyan-100"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3860,
                                            columnNumber: 15
                                        }, this),
                                        "Menux Intelligence"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3854,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3853,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                align: "start",
                                sideOffset: 8,
                                className: "w-[min(92vw,340px)] rounded-[16px] border-white/14 bg-slate-950/94 p-3 text-slate-100 shadow-2xl shadow-black/40 backdrop-blur-xl",
                                onClick: (event)=>event.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-semibold uppercase tracking-wide text-slate-300",
                                        children: "Sugestões da Menux Intelligence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3870,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 rounded-[12px] border border-white/14 bg-white/8 p-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-medium text-slate-200",
                                                children: "Mensagem pronta"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3874,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs leading-relaxed text-slate-300",
                                                children: insight.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3875,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "outline",
                                                className: "h-7 rounded-full border-white/14 bg-white/7 px-2.5 text-[11px] text-slate-100 hover:bg-white/11",
                                                onClick: handleCopyMessage,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                        lineNumber: 3882,
                                                        columnNumber: 17
                                                    }, this),
                                                    copied ? "Copiado" : "Copiar"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3876,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3873,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 rounded-[12px] border border-white/14 bg-white/8 p-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-medium text-slate-200",
                                                children: "Próximo passo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3887,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-300",
                                                children: insight.nextStep
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3888,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3886,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 rounded-[12px] border border-white/14 bg-white/8 p-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-medium text-slate-200",
                                                children: "Risco se ignorar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3891,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-300",
                                                children: insight.risk
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3892,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3890,
                                        columnNumber: 13
                                    }, this),
                                    copyError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[11px] text-red-300",
                                        children: copyError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3895,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3864,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3852,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "basis-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3900,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-wrap items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    feedback?.state === "complete-success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-medium text-emerald-700",
                                        children: feedback.message || "Concluída"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3905,
                                        columnNumber: 15
                                    }, this),
                                    feedback?.state === "postpone-success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-medium text-blue-700",
                                        children: feedback.message || "Reagendada"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3911,
                                        columnNumber: 15
                                    }, this),
                                    feedback?.state === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-red-100 px-2.5 py-1 text-[11px] font-medium text-red-700",
                                        children: feedback.message || "Falha ao executar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3917,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3903,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "ghost",
                                        className: "h-8 rounded-full px-3 text-xs text-zinc-600 hover:bg-zinc-100",
                                        onClick: onToggleExpand,
                                        children: isExpanded ? "Ocultar detalhes" : "Ver detalhes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3924,
                                        columnNumber: 13
                                    }, this),
                                    activity.status !== "completed" && activity.status !== "cancelled" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "ghost",
                                        className: "h-8 rounded-full px-3 text-xs text-red-500 hover:bg-red-50 hover:text-red-600",
                                        disabled: isBusy || !canCancelActions,
                                        onClick: ()=>setConfirmCancelOpen(true),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                lineNumber: 3941,
                                                columnNumber: 17
                                            }, this),
                                            "Cancelar"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                        lineNumber: 3934,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                lineNumber: 3923,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3902,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 3714,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: confirmCancelOpen,
                onOpenChange: setConfirmCancelOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                    className: "rounded-[20px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                    className: "font-heading text-xl",
                                    children: "Cancelar atividade?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3952,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                    className: "font-body text-sm text-zinc-600",
                                    children: "Esta ação define a atividade como cancelada e interrompe o ciclo de execução."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3955,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3951,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    className: "rounded-full",
                                    children: "Voltar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3960,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    className: "rounded-full bg-red-600 text-white hover:bg-red-700",
                                    onClick: onCancel,
                                    children: "Confirmar cancelamento"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3963,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3959,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 3950,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 3949,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.18,
                        ease: "easeOut"
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 rounded-[14px] border border-zinc-200 bg-zinc-50/80 p-3.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                            children: "Descrição"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3985,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-zinc-700",
                                            children: activity.description || "Sem descrição detalhada para esta atividade."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 3988,
                                            columnNumber: 19
                                        }, this),
                                        activity.completionNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                    children: "Notas de conclusão"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 3994,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 rounded-[8px] border border-emerald-200 bg-emerald-50/60 px-2.5 py-2 text-sm text-emerald-800",
                                                    children: activity.completionNotes
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 3997,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                            children: "Checklist de preparação"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 4003,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-1.5 space-y-1.5",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActivityChecklist"])(activity).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2 text-sm text-zinc-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 4009,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 4010,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, item, true, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 4008,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 4006,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 3984,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                            children: "Histórico curto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 4017,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1.5 space-y-2 text-sm text-zinc-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-[10px] border border-zinc-200 bg-white px-2.5 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-zinc-500",
                                                            children: "Criada em"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 4022,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateBR"])(activity.createdAt.slice(0, 10))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 4023,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 4021,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-[10px] border border-zinc-200 bg-white px-2.5 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-zinc-500",
                                                            children: "Prazo atual"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 4026,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateBR"])(activity.dueDate),
                                                                activity.dueTime ? ` · ${activity.dueTime}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                            lineNumber: 4027,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 4025,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 4020,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            className: "mt-3 h-8 w-full rounded-full border border-cyan-300/22 bg-cyan-500/18 text-xs text-cyan-50 hover:bg-cyan-500/28",
                                            onClick: onGenerateFollowup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                                    lineNumber: 4039,
                                                    columnNumber: 21
                                                }, this),
                                                "Gerar mensagem de follow-up"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                            lineNumber: 4034,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 4016,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 3983,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 3982,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 3975,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 3973,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 3643,
        columnNumber: 5
    }, this);
});
const SelectedActivityMessages = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function SelectedActivityMessages({ activity, now }) {
    const [copiedId, setCopiedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copyError, setCopyError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const insight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$activities$2f$components$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActivityInsight"])(activity, now);
    const templates = [
        {
            id: "msg-1",
            title: "Mensagem principal",
            body: insight.message
        },
        {
            id: "msg-2",
            title: "Próximo passo",
            body: insight.nextStep
        },
        {
            id: "msg-3",
            title: "Risco se ignorar",
            body: insight.risk
        }
    ];
    const handleCopy = async (id, text)=>{
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            setCopyError(null);
            setTimeout(()=>setCopiedId(null), 1200);
        } catch  {
            setCopiedId(null);
            setCopyError("Não foi possível copiar o conteúdo.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[12px] border border-white/14 bg-white/8 px-3 py-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate text-xs font-medium text-slate-100",
                        children: activity.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 4097,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-[11px] text-slate-400",
                        children: activity.clientName || activity.opportunityTitle || "Sem contexto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/activities/page.tsx",
                        lineNumber: 4098,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 4096,
                columnNumber: 7
            }, this),
            templates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[12px] border border-white/14 bg-white/8 px-3 py-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-semibold uppercase tracking-wide text-slate-300",
                            children: template.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 4105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs leading-relaxed text-slate-200",
                            children: template.body
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 4108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            variant: "outline",
                            className: "mt-2 h-7 rounded-full border-white/14 bg-white/7 px-2.5 text-[11px] text-slate-100 hover:bg-white/11",
                            onClick: ()=>handleCopy(template.id, template.body),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                                    lineNumber: 4115,
                                    columnNumber: 13
                                }, this),
                                copiedId === template.id ? "Copiado" : "Copiar"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/activities/page.tsx",
                            lineNumber: 4109,
                            columnNumber: 11
                        }, this)
                    ]
                }, template.id, true, {
                    fileName: "[project]/src/app/(auth)/activities/page.tsx",
                    lineNumber: 4104,
                    columnNumber: 9
                }, this)),
            copyError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-red-300",
                children: copyError
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 4122,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 4095,
        columnNumber: 5
    }, this);
});
function DiagnosticItem({ label, value, tone }) {
    const toneClass = {
        success: "text-emerald-100",
        warning: "text-amber-100",
        danger: "text-red-100",
        neutral: "text-slate-100"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between rounded-[10px] border border-white/10 bg-white/7 px-2.5 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-300",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 4146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-semibold", toneClass[tone]),
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 4147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 4145,
        columnNumber: 5
    }, this);
}
function SummaryMetric({ label, value, accent = "neutral" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[14px] border border-zinc-200 bg-zinc-50/70 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] font-semibold uppercase tracking-wide text-zinc-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 4163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-1 font-heading text-2xl font-semibold", accent === "danger" ? "text-red-700" : accent === "success" ? "text-emerald-700" : "text-zinc-900"),
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/activities/page.tsx",
                lineNumber: 4164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/activities/page.tsx",
        lineNumber: 4162,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_4587c71c._.js.map