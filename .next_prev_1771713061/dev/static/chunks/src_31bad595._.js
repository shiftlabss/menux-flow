(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/stores/dashboard-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPeriodDateRange",
    ()=>getPeriodDateRange,
    "useDashboardStore",
    ()=>useDashboardStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useDashboardStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        period: 'today',
        context: 'me',
        setPeriod: (period)=>set({
                period
            }),
        setContext: (context)=>set({
                context
            })
    }));
function getPeriodDateRange(period, now) {
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    let start;
    switch(period){
        case "today":
            start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            break;
        case "7d":
            start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
            break;
        case "30d":
            start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 30);
            break;
        case "quarter":
            {
                const quarterMonth = Math.floor(now.getMonth() / 3) * 3;
                start = new Date(now.getFullYear(), quarterMonth, 1);
                break;
            }
    }
    return {
        start,
        end
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-now.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNow",
    ()=>useNow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useNow(intervalMs = 60_000) {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useNow.useState": ()=>new Date()
    }["useNow.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNow.useEffect": ()=>{
            const id = window.setInterval({
                "useNow.useEffect.id": ()=>setNow(new Date())
            }["useNow.useEffect.id"], intervalMs);
            return ({
                "useNow.useEffect": ()=>window.clearInterval(id)
            })["useNow.useEffect"];
        }
    }["useNow.useEffect"], [
        intervalMs
    ]);
    return now;
}
_s(useNow, "aIQ63u2pSAvMwtVQMX73MhWGFJ4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-dashboard-filters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDashboardFilters",
    ()=>useDashboardFilters
]);
// ============================================================================
// Hook centralizado de filtros do Dashboard
// Todas as sections usam este hook para receber dados filtrados por
// período (today/7d/30d/quarter) e contexto (me/team).
// ============================================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/opportunity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/activity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/dashboard-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$now$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-now.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/helpers.ts [app-client] (ecmascript)");
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
function useDashboardFilters() {
    _s();
    const opportunities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"])({
        "useDashboardFilters.useOpportunityStore[opportunities]": (s)=>s.opportunities
    }["useDashboardFilters.useOpportunityStore[opportunities]"]);
    const activities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "useDashboardFilters.useActivityStore[activities]": (s)=>s.activities
    }["useDashboardFilters.useActivityStore[activities]"]);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "useDashboardFilters.useAuthStore[user]": (s)=>s.user
    }["useDashboardFilters.useAuthStore[user]"]);
    const period = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStore"])({
        "useDashboardFilters.useDashboardStore[period]": (s)=>s.period
    }["useDashboardFilters.useDashboardStore[period]"]);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStore"])({
        "useDashboardFilters.useDashboardStore[context]": (s)=>s.context
    }["useDashboardFilters.useDashboardStore[context]"]);
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$now$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNow"])();
    const userId = user?.id ?? "";
    const userRole = user?.role ?? "comercial";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDashboardFilters.useMemo": ()=>{
            const { start, end } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPeriodDateRange"])(period, now);
            // ── Context filter ──────────────────────────────────────────────
            const ctxOpps = context === "me" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole) : opportunities;
            const ctxActs = context === "me" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterByUser"])(activities, userId, userRole) : activities;
            // ── Open opportunities (cumulative, no period filter) ───────────
            const openOpportunities = ctxOpps.filter({
                "useDashboardFilters.useMemo.openOpportunities": (o)=>o.status === "open"
            }["useDashboardFilters.useMemo.openOpportunities"]);
            // ── Period filter for opportunities ─────────────────────────────
            // Pipeline Total & SLA are cumulative; won/lost are period-scoped
            const filteredOpportunities = ctxOpps.filter({
                "useDashboardFilters.useMemo.filteredOpportunities": (o)=>{
                    // Open opportunities always included (they are live)
                    if (o.status === "open") return true;
                    // Won/lost filtered by updatedAt within period
                    const ts = new Date(o.updatedAt);
                    return ts >= start && ts <= end;
                }
            }["useDashboardFilters.useMemo.filteredOpportunities"]);
            // ── Period filter for activities + effective status ──────────────
            const filteredActivities = ctxActs.map({
                "useDashboardFilters.useMemo.filteredActivities": (a)=>({
                        ...a,
                        effectiveStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffectiveActivityStatus"])(a, now)
                    })
            }["useDashboardFilters.useMemo.filteredActivities"]).filter({
                "useDashboardFilters.useMemo.filteredActivities": (a)=>{
                    // Pending/overdue always included
                    if (a.effectiveStatus === "pending" || a.effectiveStatus === "overdue") return true;
                    // Completed/cancelled filtered by dueDate within period
                    const ts = new Date(a.dueDate);
                    return ts >= start && ts <= end;
                }
            }["useDashboardFilters.useMemo.filteredActivities"]);
            return {
                filteredOpportunities,
                filteredActivities,
                openOpportunities,
                now,
                period,
                context,
                userId,
                userRole
            };
        }
    }["useDashboardFilters.useMemo"], [
        opportunities,
        activities,
        period,
        context,
        now,
        userId,
        userRole
    ]);
}
_s(useDashboardFilters, "6FBTuRajZQ8oZp5j1hkbvsvS8rk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$now$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNow"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardHeader",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$module$2d$command$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/module-command-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/dashboard-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-dashboard-filters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
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
const periodLabels = {
    today: "Hoje",
    "7d": "7 dias",
    "30d": "30 dias",
    quarter: "Trimestre"
};
function toPtBrCompactDate(date) {
    const formatter = new Intl.DateTimeFormat("pt-BR", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        timeZone: "America/Sao_Paulo"
    });
    const parts = formatter.formatToParts(date);
    const weekdayRaw = parts.find((part)=>part.type === "weekday")?.value ?? "";
    const day = parts.find((part)=>part.type === "day")?.value ?? "";
    const monthRaw = parts.find((part)=>part.type === "month")?.value ?? "";
    const weekday = weekdayRaw.replaceAll(".", "").trim();
    const month = monthRaw.replaceAll(".", "").trim();
    const weekdayCapitalized = weekday.charAt(0).toUpperCase() + weekday.slice(1);
    return `${weekdayCapitalized}, ${day} ${month}`;
}
function DashboardHeader() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { period, setPeriod } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStore"])();
    const { user, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [retryingIndicators, setRetryingIndicators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { filteredActivities, openOpportunities, now } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"])();
    const firstName = user?.name?.trim().split(" ")[0] ?? "Admin";
    // ── Compute indicators from real store data ─────────────────────
    const overdueCount = filteredActivities.filter((a)=>a.effectiveStatus === "overdue").length;
    const slaBreachedOpps = openOpportunities.filter((o)=>o.slaDeadline && new Date(o.slaDeadline) < now);
    const slaBreaches = slaBreachedOpps.length;
    const riskValue = slaBreachedOpps.reduce((sum, o)=>sum + (o.value || 0), 0);
    const hasIndicatorsError = !Number.isFinite(overdueCount) || !Number.isFinite(slaBreaches) || !Number.isFinite(riskValue);
    const indicators = [
        overdueCount > 0 ? {
            id: "overdue",
            value: `${overdueCount}`,
            label: "atrasadas",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
            tone: "danger"
        } : null,
        slaBreaches > 0 ? {
            id: "sla",
            value: `${slaBreaches}`,
            label: "SLAs estourados",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"],
            tone: "warning"
        } : null,
        riskValue > 0 ? {
            id: "risk",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(riskValue),
            label: "valor em risco",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
            tone: "info"
        } : null
    ].filter((chip)=>Boolean(chip)).slice(0, 3);
    const compactDateText = `${toPtBrCompactDate(now)} · Olá, ${firstName}`;
    const handleIndicatorClick = (id)=>{
        if (id === "overdue") {
            router.push("/activities?status=overdue");
            return;
        }
        const targetId = id === "sla" ? "dashboard-execution" : "dashboard-funnel";
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            return;
        }
        if (pathname !== "/dashboard") {
            router.push(`/dashboard#${targetId}`);
        }
    };
    const handleRetryIndicators = ()=>{
        setRetryingIndicators(true);
        router.refresh();
        window.setTimeout(()=>setRetryingIndicators(false), 220);
    };
    const indicatorChips = hasIndicatorsError ? [] : indicators.map((chip)=>{
        const Icon = chip.icon;
        return {
            id: chip.id,
            label: `${chip.value} ${chip.label}`,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/header.tsx",
                lineNumber: 160,
                columnNumber: 17
            }, this),
            tone: chip.tone === "danger" ? "danger" : chip.tone === "warning" ? "warning" : "info",
            onClick: ()=>handleIndicatorClick(chip.id)
        };
    });
    const fallbackChip = {
        id: "dashboard-empty",
        label: "Sem dados do dia · Ver pipeline",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
            className: "h-3.5 w-3.5 text-zinc-500"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/header.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this),
        onClick: ()=>router.push("/pipes"),
        tone: "neutral"
    };
    const actions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-wrap items-center justify-end gap-2", isLoading && "pointer-events-none opacity-60"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "premium-shine h-8 gap-1.5 rounded-full border-zinc-200 bg-white/90 px-3 text-sm font-medium hover:bg-zinc-100/80 active:scale-[0.99]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                className: "h-3.5 w-3.5 text-zinc-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/header.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            periodLabels[period],
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "h-3.5 w-3.5 text-zinc-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/header.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/header.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                    align: "end",
                    className: "w-40 rounded-xl",
                    children: Object.keys(periodLabels).map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                            onClick: ()=>setPeriod(value),
                            className: "gap-2",
                            children: [
                                period === value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1.5 w-1.5 rounded-full bg-brand"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/header.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: period === value ? "font-medium" : "",
                                    children: periodLabels[value]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/header.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, value, true, {
                            fileName: "[project]/src/components/dashboard/header.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/header.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/header.tsx",
            lineNumber: 187,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/header.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$module$2d$command$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleCommandHeader"], {
        title: "Dashboard",
        description: "Raio X do comercial",
        sticky: true,
        actions: actions,
        meta: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/header.tsx",
                    lineNumber: 227,
                    columnNumber: 11
                }, void 0),
                compactDateText
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/header.tsx",
            lineNumber: 226,
            columnNumber: 9
        }, void 0),
        chips: indicatorChips,
        fallbackChip: fallbackChip,
        className: "premium-panel",
        children: [
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-8 w-[110px] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-8 w-[128px] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-8 w-[142px] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/header.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this) : null,
            hasIndicatorsError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/90 px-3 py-1.5 text-xs text-red-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this),
                    "Falha ao carregar indicadores.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleRetryIndicators,
                        className: "font-semibold underline underline-offset-4",
                        children: retryingIndicators ? "Tentando..." : "Tentar novamente"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/header.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/header.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_s(DashboardHeader, "8cyFvvD5kU00zo3SJ7W/1JhCw1E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"]
    ];
});
_c = DashboardHeader;
var _c;
__turbopack_context__.k.register(_c, "DashboardHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/kpi-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KpiSection",
    ()=>KpiSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-dashboard-filters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/dashboard-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/opportunity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion.ts [app-client] (ecmascript)");
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
const STALE_ACTIVITY_DAYS = 5;
const SLA_RISK_WINDOW_HOURS = 24;
const DAY_MS = 24 * 60 * 60 * 1000;
function isSlaBreached(slaDeadline, now) {
    return Boolean(slaDeadline) && new Date(slaDeadline) < now;
}
function isSlaAtRisk(slaDeadline, now) {
    if (!slaDeadline) return false;
    const deadline = new Date(slaDeadline);
    const hoursLeft = (deadline.getTime() - now.getTime()) / (1000 * 60 * 60);
    return hoursLeft > 0 && hoursLeft <= SLA_RISK_WINDOW_HOURS;
}
function calculateConversionInRange(opportunities, start, end) {
    const closed = opportunities.filter((opportunity)=>{
        if (opportunity.status !== "won" && opportunity.status !== "lost") return false;
        const updatedAt = new Date(opportunity.updatedAt);
        return updatedAt >= start && updatedAt <= end;
    });
    const won = closed.filter((opportunity)=>opportunity.status === "won").length;
    const total = closed.length;
    const rate = total > 0 ? won / total * 100 : 0;
    return {
        won,
        total,
        rate
    };
}
function useKpiData() {
    _s();
    const { filteredActivities, openOpportunities, now, period, context, userId, userRole } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"])();
    const opportunities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"])({
        "useKpiData.useOpportunityStore[opportunities]": (state)=>state.opportunities
    }["useKpiData.useOpportunityStore[opportunities]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useKpiData.useMemo": ()=>{
            const openOpps = openOpportunities;
            const scopedOpportunities = context === "me" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole) : opportunities;
            const { start, end } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPeriodDateRange"])(period, now);
            const rangeSizeMs = end.getTime() - start.getTime() + 1;
            const previousEnd = new Date(start.getTime() - 1);
            const previousStart = new Date(previousEnd.getTime() - rangeSizeMs + 1);
            const currentConversion = calculateConversionInRange(scopedOpportunities, start, end);
            const previousConversion = calculateConversionInRange(scopedOpportunities, previousStart, previousEnd);
            const hasCurrentConversionData = currentConversion.total > 0;
            const hasPreviousBase = previousConversion.total > 0;
            const conversionDelta = hasPreviousBase ? currentConversion.rate - previousConversion.rate : null;
            const pipelineTotal = openOpps.reduce({
                "useKpiData.useMemo.pipelineTotal": (sum, o)=>sum + (o.value || 0)
            }["useKpiData.useMemo.pipelineTotal"], 0);
            const pendingActivities = filteredActivities.filter({
                "useKpiData.useMemo.pendingActivities": (a)=>a.effectiveStatus === "pending" || a.effectiveStatus === "overdue"
            }["useKpiData.useMemo.pendingActivities"]);
            const overdueActivityCount = filteredActivities.filter({
                "useKpiData.useMemo": (a)=>a.effectiveStatus === "overdue"
            }["useKpiData.useMemo"]).length;
            const todayIso = now.toISOString().slice(0, 10);
            const todayPendingCount = filteredActivities.filter({
                "useKpiData.useMemo": (a)=>a.effectiveStatus === "pending" && a.dueDate === todayIso
            }["useKpiData.useMemo"]).length;
            const staleThreshold = now.getTime() - STALE_ACTIVITY_DAYS * DAY_MS;
            const staleCount = openOpps.filter({
                "useKpiData.useMemo": (opportunity)=>new Date(opportunity.updatedAt).getTime() < staleThreshold
            }["useKpiData.useMemo"]).length;
            const slaBreachedCount = openOpps.filter({
                "useKpiData.useMemo": (o)=>isSlaBreached(o.slaDeadline, now)
            }["useKpiData.useMemo"]).length;
            const slaRiskCount = openOpps.filter({
                "useKpiData.useMemo": (o)=>isSlaAtRisk(o.slaDeadline, now)
            }["useKpiData.useMemo"]).length;
            const riskPct = openOpps.length > 0 ? Math.round((slaBreachedCount + slaRiskCount) / openOpps.length * 100) : 0;
            const conversionChips = [];
            if (hasCurrentConversionData && conversionDelta !== null) {
                if (conversionDelta > 0) {
                    conversionChips.push({
                        id: "conversion-up",
                        label: `Alta +${conversionDelta.toFixed(1)} p.p.`,
                        tone: "success"
                    });
                } else if (conversionDelta < 0) {
                    conversionChips.push({
                        id: "conversion-down",
                        label: `Queda ${Math.abs(conversionDelta).toFixed(1)} p.p.`,
                        tone: "danger"
                    });
                } else {
                    conversionChips.push({
                        id: "conversion-flat",
                        label: "Estavel 0.0 p.p.",
                        tone: "neutral"
                    });
                }
            }
            const activityChips = [];
            if (overdueActivityCount > 0) {
                activityChips.push({
                    id: "activities-overdue",
                    label: `Atrasadas: ${overdueActivityCount}`,
                    tone: "danger"
                });
            }
            if (todayPendingCount > 0) {
                activityChips.push({
                    id: "activities-today",
                    label: `Hoje: ${todayPendingCount}`,
                    tone: "warning"
                });
            }
            if (activityChips.length === 0) {
                activityChips.push({
                    id: "activities-ok",
                    label: "OK",
                    tone: "success"
                });
            }
            const slaChips = [];
            if (slaBreachedCount > 0) {
                slaChips.push({
                    id: "sla-overdue",
                    label: `Estourados: ${slaBreachedCount}`,
                    tone: "danger"
                });
            }
            if (slaRiskCount > 0) {
                slaChips.push({
                    id: "sla-risk",
                    label: `Em risco: ${slaRiskCount}`,
                    tone: "warning"
                });
            }
            if (slaChips.length === 0) {
                slaChips.push({
                    id: "sla-ok",
                    label: "OK",
                    tone: "success"
                });
            }
            const pipelineChips = [];
            if (slaBreachedCount > 0) {
                pipelineChips.push({
                    id: "pipeline-overdue",
                    label: `Estourados: ${slaBreachedCount}`,
                    tone: "danger"
                });
            }
            const slaTargetPath = slaBreachedCount > 0 ? "/pipes?filter=sla_overdue" : "/pipes?filter=sla_risk";
            return {
                pipeline: {
                    label: "Pipeline Total",
                    value: pipelineTotal,
                    valueFormat: "currency",
                    subtext: `${openOpps.length} oportunidades abertas`,
                    chips: pipelineChips,
                    line4Text: pipelineChips.length === 0 && staleCount === 0 ? "Sem alertas hoje" : undefined,
                    detailAction: staleCount > 0 ? {
                        label: "Ver sem atividade",
                        targetPath: "/pipes?filter=stale"
                    } : undefined,
                    targetPath: "/pipes",
                    state: "default"
                },
                conversion: {
                    label: "Conversão Global",
                    value: currentConversion.rate,
                    valueFormat: "percent",
                    subtext: hasCurrentConversionData ? `Ganhos no período: ${currentConversion.won}` : "Sem dados no período",
                    chips: conversionChips,
                    line4Text: hasCurrentConversionData ? hasPreviousBase ? undefined : "Sem base comparável" : "Ajuste o período para comparar.",
                    disabled: !hasCurrentConversionData,
                    targetPath: "/dashboard?view=conversion",
                    state: "default"
                },
                activities: {
                    label: "Atividades",
                    value: pendingActivities.length,
                    valueFormat: "integer",
                    subtext: `${overdueActivityCount} atrasadas · ${todayPendingCount} para hoje`,
                    chips: activityChips.slice(0, 2),
                    targetPath: "/activities?statuses=pending,overdue",
                    state: "default"
                },
                sla: {
                    label: "SLA Crítico",
                    value: slaBreachedCount,
                    valueFormat: "integer",
                    valueSuffix: "estourados",
                    subtext: `${slaRiskCount} em risco`,
                    chips: slaChips.slice(0, 2),
                    detailAction: slaBreachedCount > 0 || slaRiskCount > 0 ? {
                        label: "Ver deals",
                        targetPath: slaTargetPath
                    } : undefined,
                    microText: `${riskPct}% da carteira em risco`,
                    targetPath: slaTargetPath,
                    state: "default"
                }
            };
        }
    }["useKpiData.useMemo"], [
        filteredActivities,
        openOpportunities,
        now,
        period,
        context,
        userId,
        userRole,
        opportunities
    ]);
}
_s(useKpiData, "xjZFkpCsk1mhvD/J3c1XP5oUtTk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"]
    ];
});
function formatKpiValue(value, format) {
    if (format === "currency") {
        const absValue = Math.abs(value);
        if (absValue >= 1_000) {
            return new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                notation: "compact",
                maximumFractionDigits: absValue >= 1_000_000 ? 2 : 1
            }).format(value);
        }
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 0
        }).format(value);
    }
    if (format === "percent") {
        return `${value.toFixed(1)}%`;
    }
    return Math.round(value).toString();
}
function AnimatedKpiValue({ value, format }) {
    _s1();
    const motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(value);
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedKpiValue.useEffect": ()=>{
            const unsubscribe = motionValue.on("change", {
                "AnimatedKpiValue.useEffect.unsubscribe": (latest)=>{
                    setDisplayValue(latest);
                }
            }["AnimatedKpiValue.useEffect.unsubscribe"]);
            return unsubscribe;
        }
    }["AnimatedKpiValue.useEffect"], [
        motionValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedKpiValue.useEffect": ()=>{
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(motionValue, value, {
                duration: 0.22,
                ease: [
                    0.22,
                    0.61,
                    0.36,
                    1
                ]
            });
            return controls.stop;
        }
    }["AnimatedKpiValue.useEffect"], [
        motionValue,
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: formatKpiValue(displayValue, format)
    }, void 0, false);
}
_s1(AnimatedKpiValue, "lxZh1fwtodni8y4jkPpsRmyu28o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = AnimatedKpiValue;
function KpiChipBadge({ chip }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-[24px] max-w-full items-center rounded-full border px-2.5 text-[11px] font-semibold tracking-tight whitespace-nowrap", chip.tone === "neutral" && "border-zinc-200/85 bg-zinc-100/80 text-zinc-700", chip.tone === "info" && "border-sky-200/80 bg-sky-50/80 text-sky-700", chip.tone === "warning" && "border-amber-200/80 bg-amber-50/80 text-amber-700", chip.tone === "danger" && "border-rose-200/80 bg-rose-50/80 text-rose-700", chip.tone === "success" && "border-emerald-200/80 bg-emerald-50/80 text-emerald-700"),
        title: chip.label,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "truncate",
            children: chip.label
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
            lineNumber: 364,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
        lineNumber: 353,
        columnNumber: 5
    }, this);
}
_c1 = KpiChipBadge;
function KPITemplateCard({ icon, data, onNavigate, onRetry }) {
    const state = data.state ?? "default";
    const isInteractive = state === "default" && !data.disabled;
    const chips = data.chips.slice(0, 2);
    const hasOverflow = data.chips.length > 2;
    const detailAction = hasOverflow ? {
        label: "Ver detalhes",
        targetPath: data.targetPath
    } : data.detailAction;
    function handleCardAction() {
        if (!isInteractive) return;
        onNavigate(data.targetPath);
    }
    function handleCardKeyDown(event) {
        if (!isInteractive) return;
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onNavigate(data.targetPath);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        onClick: handleCardAction,
        onKeyDown: handleCardKeyDown,
        role: isInteractive ? "button" : undefined,
        tabIndex: isInteractive ? 0 : -1,
        "aria-disabled": !isInteractive,
        whileTap: isInteractive ? {
            scale: 0.99
        } : undefined,
        transition: {
            duration: 0.09,
            ease: "easeInOut"
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("premium-shine group flex h-[222px] w-full flex-col overflow-hidden rounded-[24px] border border-zinc-200/80 bg-white/90 p-5 text-left", "shadow-(--shadow-bento-sm) transition-[box-shadow,border-color,background-color] duration-150 ease-out", isInteractive && "cursor-pointer hover:shadow-(--shadow-bento-sm-hover)", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25"),
        children: state === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-4 w-28 rounded-md before:animation-duration-[900ms]"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 419,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-10 w-36 rounded-lg before:animation-duration-[900ms]"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 420,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
            lineNumber: 418,
            columnNumber: 9
        }, this) : state === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] font-semibold text-zinc-900",
                            children: data.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-xs text-red-700",
                            children: "Erro ao carregar métrica."
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 424,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: (event)=>{
                        event.stopPropagation();
                        onRetry();
                    },
                    className: "w-fit text-xs font-semibold text-brand underline underline-offset-4",
                    children: "Tentar novamente"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 428,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
            lineNumber: 423,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex h-8 items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-zinc-100 text-zinc-700",
                                    children: icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                    lineNumber: 443,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-[13px] font-medium text-zinc-600",
                                    children: data.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 442,
                            columnNumber: 13
                        }, this),
                        isInteractive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-4 w-4 shrink-0 text-zinc-400 transition-[color,transform] duration-150 group-hover:translate-x-[1px] group-hover:text-zinc-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 451,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 441,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 flex h-[66px] min-w-0 items-end gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "tabular-nums whitespace-nowrap text-[clamp(1.9rem,2.35vw,2.85rem)] leading-[0.92] font-bold tracking-tight text-zinc-900",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedKpiValue, {
                                value: data.value,
                                format: data.valueFormat
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                lineNumber: 457,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 456,
                            columnNumber: 13
                        }, this),
                        data.valueSuffix ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "tabular-nums shrink-0 truncate pb-1 text-[13px] font-semibold text-zinc-500",
                            children: data.valueSuffix
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 460,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 455,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 h-6 truncate text-[13px] font-medium text-zinc-500",
                    children: data.subtext
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 464,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-auto flex h-[58px] flex-col justify-end pt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-h-[24px] items-center gap-2 overflow-hidden",
                            children: [
                                chips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiChipBadge, {
                                        chip: chip
                                    }, chip.id, false, {
                                        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                        lineNumber: 469,
                                        columnNumber: 17
                                    }, this)),
                                chips.length === 0 && !detailAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-[12px] text-zinc-500",
                                    title: data.line4Text || "Sem alertas hoje",
                                    children: data.line4Text || "Sem alertas hoje"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                    lineNumber: 473,
                                    columnNumber: 17
                                }, this) : null,
                                detailAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: (event)=>{
                                        event.stopPropagation();
                                        onNavigate(detailAction.targetPath);
                                    },
                                    className: "inline-flex h-[24px] shrink-0 items-center text-[12px] font-semibold text-brand underline underline-offset-4 transition-[color,transform,opacity] duration-150 hover:translate-x-[1px] hover:text-brand/80",
                                    children: detailAction.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                    lineNumber: 479,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 467,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "tabular-nums mt-1.5 h-[16px] truncate text-[11px] text-zinc-500",
                            children: data.microText ?? ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 492,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 466,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
        lineNumber: 402,
        columnNumber: 5
    }, this);
}
_c2 = KPITemplateCard;
function KpiSection() {
    _s2();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const baseData = useKpiData();
    const [cardState, setCardState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        pipeline: "default",
        conversion: "default",
        activities: "default",
        sla: "default"
    });
    const kpis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KpiSection.useMemo[kpis]": ()=>({
                pipeline: {
                    ...baseData.pipeline,
                    state: cardState.pipeline
                },
                conversion: {
                    ...baseData.conversion,
                    state: cardState.conversion
                },
                activities: {
                    ...baseData.activities,
                    state: cardState.activities
                },
                sla: {
                    ...baseData.sla,
                    state: cardState.sla
                }
            })
    }["KpiSection.useMemo[kpis]"], [
        baseData,
        cardState
    ]);
    function retryCard(card) {
        setCardState((prev)=>({
                ...prev,
                [card]: "loading"
            }));
        window.setTimeout(()=>{
            setCardState((prev)=>({
                    ...prev,
                    [card]: "default"
                }));
        }, 240);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardStaggerContainer"],
        initial: "hidden",
        animate: "show",
        className: "grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                custom: 0,
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemReveal"],
                className: "h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KPITemplateCard, {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                        lineNumber: 538,
                        columnNumber: 17
                    }, void 0),
                    data: kpis.pipeline,
                    onNavigate: (path)=>router.push(path),
                    onRetry: ()=>retryCard("pipeline")
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 537,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                lineNumber: 536,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                custom: 1,
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemReveal"],
                className: "h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KPITemplateCard, {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                        lineNumber: 547,
                        columnNumber: 17
                    }, void 0),
                    data: kpis.conversion,
                    onNavigate: (path)=>router.push(path),
                    onRetry: ()=>retryCard("conversion")
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 546,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                lineNumber: 545,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                custom: 2,
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemReveal"],
                className: "h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KPITemplateCard, {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                        lineNumber: 556,
                        columnNumber: 17
                    }, void 0),
                    data: kpis.activities,
                    onNavigate: (path)=>router.push(path),
                    onRetry: ()=>retryCard("activities")
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 555,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                lineNumber: 554,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                custom: 3,
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemReveal"],
                className: "h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KPITemplateCard, {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                        lineNumber: 565,
                        columnNumber: 17
                    }, void 0),
                    data: kpis.sla,
                    onNavigate: (path)=>router.push(path),
                    onRetry: ()=>retryCard("sla")
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 564,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                lineNumber: 563,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
        lineNumber: 530,
        columnNumber: 5
    }, this);
}
_s2(KpiSection, "V42PXjLkl/ZkjPCwvu656z8OwuA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        useKpiData
    ];
});
_c3 = KpiSection;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "AnimatedKpiValue");
__turbopack_context__.k.register(_c1, "KpiChipBadge");
__turbopack_context__.k.register(_c2, "KPITemplateCard");
__turbopack_context__.k.register(_c3, "KpiSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/bento-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BentoCard",
    ()=>BentoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion.ts [app-client] (ecmascript)");
;
;
;
;
;
const BentoCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ title, description, actions, children, size = "md", state = "default", className, noPadding = false, elevated = false, hoverable = false, shine = true, ...props }, ref)=>{
    const hasHeader = title || description || actions;
    const sizeClass = size === "sm" ? "min-h-[140px]" : size === "lg" ? "min-h-[260px]" : size === "tall" ? "min-h-[340px]" : size === "wide" ? "min-h-[200px]" : "min-h-[180px]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        whileHover: hoverable ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["premiumPressMotion"].whileHover : undefined,
        whileTap: hoverable ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["premiumPressMotion"].whileTap : undefined,
        transition: hoverable ? {
            duration: 0.22,
            ease: [
                0.22,
                0.61,
                0.36,
                1
            ]
        } : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Base styles
        "group/card relative overflow-hidden", "bento-card-base premium-panel", "rounded-[var(--radius-bento-card)]", "border border-[var(--border-bento-default)]", "focus-within:ring-2 focus-within:ring-brand/20", // Shadow elevation
        elevated && "bento-card-elevated", !elevated && "shadow-[var(--shadow-bento-sm)]", // Hover state
        hoverable && elevated && "bento-card-elevated-hover", hoverable && !elevated && "bento-card-hover", hoverable && "premium-lift", hoverable && shine && "premium-shine", // Size
        sizeClass, // State-specific styles
        state === "error" && "border-[var(--border-bento-error)]", state === "loading" && "pointer-events-none opacity-80", className),
        ...props,
        children: [
            shine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover/card:opacity-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-16 right-[-12%] h-40 w-40 rounded-full bg-brand/15 blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bento-card.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-16 left-[-10%] h-36 w-36 rounded-full bg-cyan-300/15 blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bento-card.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/bento-card.tsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/90 to-transparent opacity-70"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/bento-card.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            hasHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-start justify-between gap-4", noPadding ? "px-6 pt-6" : "px-6 pt-6 pb-4"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-heading text-lg font-semibold text-black",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bento-card.tsx",
                                lineNumber: 115,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 font-body text-sm text-zinc-500",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bento-card.tsx",
                                lineNumber: 120,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/bento-card.tsx",
                        lineNumber: 113,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 gap-2",
                        children: actions
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/bento-card.tsx",
                        lineNumber: 125,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/bento-card.tsx",
                lineNumber: 107,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(!noPadding && (hasHeader ? "px-6 pb-6" : "p-6")),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/bento-card.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/bento-card.tsx",
        lineNumber: 51,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = BentoCard;
BentoCard.displayName = "BentoCard";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "BentoCard$React.forwardRef");
__turbopack_context__.k.register(_c1, "BentoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/funnel-x-ray/funnel-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FLOW_STAGE_LABELS",
    ()=>FLOW_STAGE_LABELS,
    "FLOW_STAGE_ORDER",
    ()=>FLOW_STAGE_ORDER,
    "PIPELINE_TO_FLOW",
    ()=>PIPELINE_TO_FLOW,
    "STAGE_TO_PIPELINE",
    ()=>STAGE_TO_PIPELINE,
    "buildInsightsFromData",
    ()=>buildInsightsFromData,
    "buildStagesFromOpportunities",
    ()=>buildStagesFromOpportunities
]);
const STAGE_TO_PIPELINE = {
    lead: "lead-in",
    contact: "contato-feito",
    meeting: "reuniao-agendada",
    proposal: "proposta-enviada",
    negotiation: "negociacao",
    won: "fechamento"
};
const PIPELINE_TO_FLOW = {
    "lead-in": "lead",
    "contato-feito": "contact",
    "reuniao-agendada": "meeting",
    "proposta-enviada": "proposal",
    "negociacao": "negotiation",
    "fechamento": "won"
};
const FLOW_STAGE_LABELS = {
    lead: "Leads",
    contact: "Contato",
    meeting: "Reunião",
    proposal: "Proposta",
    negotiation: "Negociação",
    won: "Fechamento"
};
const FLOW_STAGE_ORDER = [
    "lead",
    "contact",
    "meeting",
    "proposal",
    "negotiation",
    "won"
];
// ── Dynamic builders ────────────────────────────────────────────────
/**
 * Build FlowStage[] from real opportunity data.
 * Groups open opportunities by pipeline stage and computes volume, value,
 * stalled count & average stalled days.
 */ function buildStagesFromOpportunities(opportunities, now) {
    const openOpps = opportunities.filter((o)=>o.status === "open");
    return FLOW_STAGE_ORDER.map((flowId)=>{
        const pipelineStage = STAGE_TO_PIPELINE[flowId];
        const stageOpps = openOpps.filter((o)=>o.stage === pipelineStage);
        const volume = stageOpps.length;
        const value = stageOpps.reduce((sum, o)=>sum + (o.value || 0), 0);
        // Stalled = not updated in 5+ days
        const stalledThreshold = 5 * 24 * 60 * 60 * 1000;
        const stalledOpps = stageOpps.filter((o)=>now.getTime() - new Date(o.updatedAt).getTime() > stalledThreshold);
        const stalledCount = stalledOpps.length;
        let stalledDays = 0;
        if (stalledOpps.length > 0) {
            const totalDays = stalledOpps.reduce((sum, o)=>{
                return sum + Math.round((now.getTime() - new Date(o.updatedAt).getTime()) / (1000 * 60 * 60 * 24));
            }, 0);
            stalledDays = Math.round(totalDays / stalledOpps.length);
        }
        return {
            id: flowId,
            label: FLOW_STAGE_LABELS[flowId],
            volume,
            value,
            stalledCount,
            stalledDays
        };
    });
}
/**
 * Build contextual insights from real data.
 * riskDeals = top 3 stalled opportunity titles per stage.
 * highlight = dynamic text comparing stage performance.
 * recommendation = contextual action based on stage state.
 */ function buildInsightsFromData(stages, opportunities, now) {
    const openOpps = opportunities.filter((o)=>o.status === "open");
    const stalledThreshold = 5 * 24 * 60 * 60 * 1000;
    const result = {};
    for (const stage of stages){
        const pipelineStage = STAGE_TO_PIPELINE[stage.id];
        const stageOpps = openOpps.filter((o)=>o.stage === pipelineStage);
        // Top 3 stalled deals by days stalled (desc)
        const stalledOpps = stageOpps.filter((o)=>now.getTime() - new Date(o.updatedAt).getTime() > stalledThreshold).sort((a, b)=>new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()).slice(0, 3);
        const riskDeals = stalledOpps.length > 0 ? stalledOpps.map((o)=>o.title || o.clientName) : stageOpps.slice(0, 3).map((o)=>o.title || o.clientName);
        // Dynamic highlight
        const stalledPct = stage.volume > 0 ? Math.round(stage.stalledCount / stage.volume * 100) : 0;
        const highlight = stage.stalledCount > 0 ? `${stalledPct}% parados há +${stage.stalledDays} dias` : stage.volume > 0 ? `${stage.volume} oportunidades ativas` : "Nenhuma oportunidade nesta etapa";
        // Context-aware recommendation
        let recommendation;
        if (stage.stalledCount > 0 && stage.stalledCount >= stage.volume * 0.5) {
            recommendation = `Atenção: ${stage.stalledCount} oportunidades paradas. Priorizar follow-up urgente.`;
        } else if (stage.id === "lead") {
            recommendation = "Priorizar contato inicial com leads das últimas 24h.";
        } else if (stage.id === "contact") {
            recommendation = "Escalar follow-up com decisores sem retorno há 3 dias.";
        } else if (stage.id === "meeting") {
            recommendation = "Fechar agenda com prova de valor em até 48h.";
        } else if (stage.id === "proposal") {
            recommendation = "Cobrar feedbacks das propostas paradas para destravar fechamento.";
        } else if (stage.id === "negotiation") {
            recommendation = "Alinhar objeções e preparar última contraproposta.";
        } else {
            recommendation = "Subir ticket com pacote premium na reta final.";
        }
        result[stage.id] = {
            riskDeals,
            highlight,
            recommendation
        };
    }
    return result;
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/funnel-x-ray/funnel-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildTransitions",
    ()=>buildTransitions,
    "formatCurrencyBRL",
    ()=>formatCurrencyBRL,
    "formatCurrencyCompact",
    ()=>formatCurrencyCompact
]);
function buildTransitions(stages) {
    return stages.slice(0, -1).map((from, index)=>{
        const to = stages[index + 1];
        const conversion = from.volume > 0 ? Math.round(to.volume / from.volume * 100) : 0;
        return {
            from,
            to,
            conversion,
            advanced: to.volume,
            base: from.volume
        };
    });
}
function formatCurrencyCompact(value) {
    if (value >= 1_000_000) return `R$ ${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `R$ ${(value / 1_000).toFixed(0)}k`;
    return `R$ ${value}`;
}
function formatCurrencyBRL(value) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0
    }).format(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/funnel-x-ray/flow-step-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowStepCard",
    ()=>FlowStepCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/funnel-utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function FlowStepCard({ stage, selected, onSelectStage, compact }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        type: "button",
        onClick: ()=>onSelectStage(stage.id),
        whileTap: {
            scale: 0.99
        },
        transition: {
            duration: 0.14,
            ease: "easeOut"
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/step min-w-0 rounded-xl border px-3 py-3 text-left transition-[background-color,border-color,box-shadow,opacity] duration-[140ms] ease-out", "shadow-[0_8px_22px_-18px_rgba(15,23,42,0.45)] hover:shadow-[0_10px_26px_-16px_rgba(15,23,42,0.5)]", compact ? "w-full" : "flex-[1_1_148px]", selected ? "border-brand/40 bg-brand/10 shadow-[0_0_0_1px_rgba(29,78,216,0.14),0_10px_26px_-16px_rgba(29,78,216,0.55)]" : "border-zinc-200/85 bg-white/90 hover:border-zinc-300/90"),
        "aria-pressed": selected,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "truncate text-[11px] font-semibold uppercase tracking-[0.07em] text-zinc-500",
                children: stage.label
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-step-card.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xl font-bold leading-none text-zinc-900",
                children: stage.volume
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-step-card.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[11px] text-zinc-500",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyCompact"])(stage.value)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-step-card.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-step-card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = FlowStepCard;
var _c;
__turbopack_context__.k.register(_c, "FlowStepCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/funnel-x-ray/flow-connector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowConnector",
    ()=>FlowConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function FlowConnector({ transition, isBottleneck, orientation, delay }) {
    const lineClass = isBottleneck ? "bg-amber-300/80" : "bg-zinc-300/85";
    const pillClass = isBottleneck ? "border-amber-300/80 bg-amber-50 text-amber-700" : "border-zinc-200 bg-white text-zinc-600";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/connector relative flex shrink-0 items-center justify-center", orientation === "horizontal" ? "min-w-[46px] flex-1 md:max-w-[64px]" : "h-6 w-full"),
                    children: [
                        orientation === "horizontal" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scaleX: 0
                                    },
                                    animate: {
                                        scaleX: 1
                                    },
                                    transition: {
                                        duration: 0.22,
                                        delay,
                                        ease: "easeOut"
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-px w-full origin-left transition-opacity duration-[120ms] group-hover/connector:opacity-100", lineClass, isBottleneck ? "opacity-95" : "opacity-70")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-connector.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "ml-1 h-3 w-3 text-zinc-400 transition-opacity duration-[120ms] group-hover/connector:opacity-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-connector.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scaleY: 0
                                    },
                                    animate: {
                                        scaleY: 1
                                    },
                                    transition: {
                                        duration: 0.22,
                                        delay,
                                        ease: "easeOut"
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-px origin-top transition-opacity duration-[120ms] group-hover/connector:opacity-100", lineClass, isBottleneck ? "opacity-95" : "opacity-70")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-connector.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                    className: "absolute bottom-[-3px] h-3 w-3 text-zinc-400 transition-opacity duration-[120ms] group-hover/connector:opacity-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-connector.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute rounded-full border px-1.5 py-0.5 text-[10px] font-semibold shadow-sm transition-opacity duration-[120ms] group-hover/connector:opacity-100", orientation === "horizontal" ? "top-[-11px]" : "right-2 top-[2px]", pillClass, isBottleneck ? "opacity-100" : "opacity-85"),
                            children: [
                                transition.conversion,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-connector.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-connector.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-connector.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                side: "top",
                className: "text-[11px]",
                children: [
                    transition.advanced,
                    " de ",
                    transition.base,
                    " avançaram"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-connector.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-connector.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = FlowConnector;
var _c;
__turbopack_context__.k.register(_c, "FlowConnector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowStepsConnected",
    ()=>FlowStepsConnected
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$flow$2d$step$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/flow-step-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$flow$2d$connector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/flow-connector.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function FlowStepsConnected({ stages, transitions, selectedStageId, bottleneckToStageId, onSelectStage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden items-stretch gap-2 md:flex md:flex-wrap xl:flex-nowrap",
                children: stages.map((stage, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$flow$2d$step$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlowStepCard"], {
                                stage: stage,
                                selected: selectedStageId === stage.id,
                                onSelectStage: onSelectStage,
                                compact: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            index < transitions.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$flow$2d$connector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlowConnector"], {
                                transition: transitions[index],
                                isBottleneck: bottleneckToStageId === transitions[index].to.id,
                                orientation: "horizontal",
                                delay: index * 0.03
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this)
                        ]
                    }, stage.id, true, {
                        fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 md:hidden",
                children: stages.map((stage, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$flow$2d$step$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlowStepCard"], {
                                stage: stage,
                                selected: selectedStageId === stage.id,
                                onSelectStage: onSelectStage,
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            index < transitions.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$flow$2d$connector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlowConnector"], {
                                transition: transitions[index],
                                isBottleneck: bottleneckToStageId === transitions[index].to.id,
                                orientation: "vertical",
                                delay: index * 0.03
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `mobile-${stage.id}`, true, {
                        fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = FlowStepsConnected;
var _c;
__turbopack_context__.k.register(_c, "FlowStepsConnected");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunnelXRay",
    ()=>FunnelXRay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/bento-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/activity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-dashboard-filters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/funnel-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/funnel-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$flow$2d$steps$2d$connected$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx [app-client] (ecmascript)");
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
const STALLED_OPPORTUNITY_DAYS = 5;
const DAY_MS = 24 * 60 * 60 * 1000;
function parseDashboardStageParam(stageParam) {
    if (!stageParam) return null;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOW_STAGE_ORDER"].includes(stageParam)) {
        return stageParam;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIPELINE_TO_FLOW"][stageParam] ?? null;
}
function InsightLineCard({ tag, headline, description, meta, primaryAction, secondaryAction, onRetry, status = "default", tone = "neutral", icon, feedback }) {
    const isInteractive = status === "default";
    const toneClass = tone === "danger" ? "border-red-200/80 bg-red-50/55 hover:border-red-300/90" : tone === "success" ? "border-emerald-200/80 bg-emerald-50/55 hover:border-emerald-300/90" : "border-zinc-200/80 bg-white/85 hover:border-zinc-300/90";
    function handleCardAction() {
        if (!isInteractive || primaryAction.disabled || primaryAction.loading) return;
        primaryAction.onAction();
    }
    function handleCardKeyDown(event) {
        if (!isInteractive || primaryAction.disabled || primaryAction.loading) return;
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            primaryAction.onAction();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        onClick: handleCardAction,
        onKeyDown: handleCardKeyDown,
        role: isInteractive ? "button" : undefined,
        tabIndex: isInteractive ? 0 : -1,
        "aria-disabled": !isInteractive,
        whileTap: isInteractive ? {
            scale: 0.99
        } : undefined,
        transition: {
            duration: 0.1,
            ease: "easeOut"
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[186px] flex-col rounded-[20px] border p-4", "shadow-[0_10px_20px_-18px_rgba(15,23,42,0.5)]", "transition-[background-color,border-color,box-shadow,opacity,color] duration-140 ease-out", toneClass, isInteractive && "cursor-pointer hover:shadow-[0_14px_24px_-18px_rgba(15,23,42,0.55)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25"),
        children: status === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-5 w-28 rounded-md"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-8 w-4/5 rounded-md"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-4 w-3/4 rounded-md"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-4 w-20 rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
            lineNumber: 127,
            columnNumber: 9
        }, this) : status === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500",
                    children: tag
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm font-semibold text-zinc-900",
                    children: "Erro ao carregar este insight."
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-xs text-zinc-500",
                    children: "Os dados não puderam ser processados agora."
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: (event)=>{
                        event.stopPropagation();
                        onRetry();
                    },
                    className: "mt-auto w-fit text-xs font-semibold text-brand underline underline-offset-4",
                    children: "Tentar novamente"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
            lineNumber: 136,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500",
                            children: tag
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this),
                        icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 159,
                            columnNumber: 21
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 truncate text-[1.18rem] font-bold leading-tight text-zinc-900",
                    children: headline
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "truncate text-[13px] text-zinc-600",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this),
                        meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 text-[11px] text-zinc-500",
                            children: meta
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 168,
                            columnNumber: 21
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-auto pt-3",
                    children: [
                        feedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 text-[11px]",
                            children: feedback
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 172,
                            columnNumber: 25
                        }, this) : null,
                        primaryAction.asButton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: Boolean(primaryAction.disabled || primaryAction.loading),
                            onClick: (event)=>{
                                event.stopPropagation();
                                if (primaryAction.disabled || primaryAction.loading) return;
                                primaryAction.onAction();
                            },
                            className: "h-9 w-full rounded-full bg-zinc-900 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-65",
                            children: primaryAction.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 175,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: (event)=>{
                                event.stopPropagation();
                                primaryAction.onAction();
                            },
                            className: "inline-flex items-center gap-1 text-xs font-semibold text-brand underline-offset-4 transition-colors hover:text-brand-strong hover:underline",
                            children: [
                                primaryAction.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 188,
                            columnNumber: 15
                        }, this),
                        secondaryAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: (event)=>{
                                event.stopPropagation();
                                secondaryAction.onAction();
                            },
                            disabled: Boolean(secondaryAction.loading),
                            className: "mt-2 w-full text-center text-xs font-semibold text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-800 hover:underline disabled:cursor-not-allowed disabled:opacity-65",
                            children: secondaryAction.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 202,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c = InsightLineCard;
function FunnelXRay({ state = "ready" }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const addActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "FunnelXRay.useActivityStore[addActivity]": (store)=>store.addActivity
    }["FunnelXRay.useActivityStore[addActivity]"]);
    const [viewState, setViewState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(state);
    const [actionState, setActionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [createdCount, setCreatedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { filteredOpportunities, openOpportunities, now, userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"])();
    const stages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[stages]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildStagesFromOpportunities"])(filteredOpportunities, now)
    }["FunnelXRay.useMemo[stages]"], [
        filteredOpportunities,
        now
    ]);
    const transitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[transitions]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTransitions"])(stages)
    }["FunnelXRay.useMemo[transitions]"], [
        stages
    ]);
    const hasEnoughData = stages.length >= 2 && stages.some((stage)=>stage.volume > 0);
    const selectedStageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[selectedStageId]": ()=>parseDashboardStageParam(searchParams.get("stage") ?? searchParams.get("stageId"))
    }["FunnelXRay.useMemo[selectedStageId]"], [
        searchParams
    ]);
    const selectedStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[selectedStage]": ()=>{
            if (!selectedStageId) return null;
            return stages.find({
                "FunnelXRay.useMemo[selectedStage]": (stage)=>stage.id === selectedStageId
            }["FunnelXRay.useMemo[selectedStage]"]) ?? null;
        }
    }["FunnelXRay.useMemo[selectedStage]"], [
        selectedStageId,
        stages
    ]);
    const bottleneck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[bottleneck]": ()=>{
            if (transitions.length === 0) return null;
            return transitions.reduce({
                "FunnelXRay.useMemo[bottleneck]": (min, current)=>current.conversion < min.conversion ? current : min
            }["FunnelXRay.useMemo[bottleneck]"]);
        }
    }["FunnelXRay.useMemo[bottleneck]"], [
        transitions
    ]);
    const criticalStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[criticalStage]": ()=>{
            const criticalStageId = bottleneck?.to.id ?? stages[0]?.id ?? null;
            if (!criticalStageId) return null;
            return stages.find({
                "FunnelXRay.useMemo[criticalStage]": (stage)=>stage.id === criticalStageId
            }["FunnelXRay.useMemo[criticalStage]"]) ?? null;
        }
    }["FunnelXRay.useMemo[criticalStage]"], [
        bottleneck,
        stages
    ]);
    const scopeStage = selectedStage ?? criticalStage;
    const insightScopeKey = selectedStage?.id ?? "all";
    const bestStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[bestStage]": ()=>{
            if (transitions.length === 0) return null;
            return transitions.reduce({
                "FunnelXRay.useMemo[bestStage]": (best, current)=>current.conversion > best.conversion ? current : best
            }["FunnelXRay.useMemo[bestStage]"]);
        }
    }["FunnelXRay.useMemo[bestStage]"], [
        transitions
    ]);
    const highlightConversion = bestStage?.conversion ?? 0;
    const highlightStageName = bestStage?.from.label ?? "—";
    const highlightReason = bestStage ? `${bestStage.advanced} de ${bestStage.base} oportunidades avançaram no período.` : "Sem base comparável no período.";
    const riskData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[riskData]": ()=>{
            const threshold = now.getTime() - STALLED_OPPORTUNITY_DAYS * DAY_MS;
            const selectedPipelineStage = selectedStage ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_TO_PIPELINE"][selectedStage.id] : null;
            const scopedOpps = openOpportunities.filter({
                "FunnelXRay.useMemo[riskData].scopedOpps": (opportunity)=>{
                    if (!selectedPipelineStage) return true;
                    return opportunity.stage === selectedPipelineStage;
                }
            }["FunnelXRay.useMemo[riskData].scopedOpps"]);
            const stalledOpps = scopedOpps.filter({
                "FunnelXRay.useMemo[riskData].stalledOpps": (opportunity)=>new Date(opportunity.updatedAt).getTime() < threshold
            }["FunnelXRay.useMemo[riskData].stalledOpps"]).sort({
                "FunnelXRay.useMemo[riskData].stalledOpps": (first, second)=>new Date(first.updatedAt).getTime() - new Date(second.updatedAt).getTime()
            }["FunnelXRay.useMemo[riskData].stalledOpps"]);
            const topDeal = stalledOpps[0] ?? null;
            const total = stalledOpps.length;
            if (!topDeal) {
                const fallbackFlowId = selectedStage?.id ?? criticalStage?.id ?? null;
                return {
                    topDealLabel: "Sem oportunidades em risco hoje",
                    description: selectedStage ? `Etapa ${selectedStage.label} sem alertas críticos.` : "Sua carteira está sem riscos críticos no momento.",
                    meta: "Total em risco: 0",
                    total,
                    stageId: fallbackFlowId
                };
            }
            const topDealFlowId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIPELINE_TO_FLOW"][topDeal.stage] ?? selectedStage?.id ?? null;
            const stageLabel = topDealFlowId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOW_STAGE_LABELS"][topDealFlowId] : "Etapa atual";
            const stalledDays = Math.max(1, Math.round((now.getTime() - new Date(topDeal.updatedAt).getTime()) / DAY_MS));
            return {
                topDealLabel: topDeal.title || topDeal.clientName,
                description: `${stalledDays} dias sem retorno · ${stageLabel}`,
                meta: `Total em risco: ${total}`,
                total,
                stageId: topDealFlowId
            };
        }
    }["FunnelXRay.useMemo[riskData]"], [
        openOpportunities,
        now,
        selectedStage,
        criticalStage
    ]);
    const bottleneckDrop = bottleneck ? Math.max(0, 100 - bottleneck.conversion) : 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FunnelXRay.useEffect": ()=>{
            setViewState(state);
        }
    }["FunnelXRay.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FunnelXRay.useEffect": ()=>{
            setActionState("idle");
            setCreatedCount(0);
        }
    }["FunnelXRay.useEffect"], [
        selectedStage?.id
    ]);
    // Auto-dismiss action feedback after 6 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FunnelXRay.useEffect": ()=>{
            if (actionState !== "success" && actionState !== "error") return;
            const t = setTimeout({
                "FunnelXRay.useEffect.t": ()=>setActionState("idle")
            }["FunnelXRay.useEffect.t"], 6000);
            return ({
                "FunnelXRay.useEffect": ()=>clearTimeout(t)
            })["FunnelXRay.useEffect"];
        }
    }["FunnelXRay.useEffect"], [
        actionState
    ]);
    function setStageSelection(nextStageId) {
        const current = selectedStage?.id ?? null;
        if (current === nextStageId) return;
        const params = new URLSearchParams(searchParams.toString());
        if (nextStageId) {
            params.set("stage", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_TO_PIPELINE"][nextStageId]);
        } else {
            params.delete("stage");
            params.delete("stageId");
        }
        const serialized = params.toString();
        router.replace(serialized ? `${pathname}?${serialized}` : pathname, {
            scroll: false
        });
    }
    function openPipeline({ stageId, filters } = {}) {
        const params = new URLSearchParams();
        if (stageId) {
            params.set("stageId", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_TO_PIPELINE"][stageId]);
        }
        if (filters) {
            params.set("filters", filters);
        }
        const serialized = params.toString();
        router.push(serialized ? `/pipes?${serialized}` : "/pipes");
    }
    function openHighlightReason() {
        if (bestStage?.from.id) {
            setStageSelection(bestStage.from.id);
        }
    }
    function openActivitiesFromAction() {
        router.push("/activities?statuses=pending,overdue&q=Follow-up");
    }
    function handleRecommendedAction() {
        if (actionState === "loading") return;
        if (!scopeStage) {
            setActionState("error");
            return;
        }
        setActionState("loading");
        const pipelineStage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_TO_PIPELINE"][scopeStage.id];
        const stalledThreshold = STALLED_OPPORTUNITY_DAYS * DAY_MS;
        const stalledOpps = openOpportunities.filter((opportunity)=>opportunity.stage === pipelineStage && now.getTime() - new Date(opportunity.updatedAt).getTime() > stalledThreshold).slice(0, 3);
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split("T")[0];
        let count = 0;
        for (const opportunity of stalledOpps){
            addActivity({
                title: `Follow-up: ${opportunity.title || opportunity.clientName}`,
                description: `Cobrar feedback — oportunidade parada há +${Math.round((now.getTime() - new Date(opportunity.updatedAt).getTime()) / DAY_MS)} dias`,
                type: "call",
                status: "pending",
                dueDate: tomorrowStr,
                dueTime: "10:00",
                opportunityId: opportunity.id,
                clientId: opportunity.clientId || "",
                responsibleId: userId || opportunity.responsibleId,
                responsibleName: opportunity.responsibleName
            });
            count += 1;
        }
        if (count === 0) {
            setCreatedCount(0);
            setActionState("error");
            return;
        }
        setCreatedCount(count);
        setActionState("success");
    }
    function handleRetry() {
        setViewState("loading");
        window.setTimeout(()=>{
            setViewState("ready");
        }, 260);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoCard"], {
        noPadding: true,
        elevated: true,
        className: "premium-panel min-h-0 overflow-hidden border-zinc-200/80 bg-white/86 shadow-[0_20px_32px_-28px_rgba(15,23,42,0.45)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-zinc-200/75 bg-white/85 px-3.5 py-3 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-heading text-[1.02rem] font-semibold text-zinc-900",
                                    children: "Raio X do Funil"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                    lineNumber: 477,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-xs text-zinc-500",
                                    children: "Fluxo de conversão, gargalos e ação recomendada para hoje"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 476,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            type: "button",
                            onClick: ()=>openPipeline({
                                    stageId: selectedStage?.id
                                }),
                            whileTap: {
                                scale: 0.99
                            },
                            transition: {
                                duration: 0.09,
                                ease: "easeOut"
                            },
                            className: "group inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold text-zinc-700 transition-[background-color,color,border-color,opacity] duration-120 ease-out hover:bg-zinc-100 hover:text-zinc-900",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "underline-offset-4 transition-colors duration-120 group-hover:underline",
                                    children: "Ver Pipeline"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                    lineNumber: 491,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 484,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 475,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, this),
            viewState === "ready" && !hasEnoughData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-dashed border-zinc-300 bg-zinc-50/70 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-zinc-900",
                            children: "Sem dados suficientes para o Raio X"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 502,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-zinc-500",
                            children: "Cadastre oportunidades para gerar conversão e gargalos acionáveis."
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 505,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            className: "mt-3 h-8 rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800",
                            onClick: ()=>openPipeline(),
                            children: "Ver pipeline"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 508,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 501,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                lineNumber: 500,
                columnNumber: 9
            }, this) : null,
            viewState === "loading" || viewState === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightLineCard, {
                            tag: "Oportunidades em risco",
                            headline: "",
                            description: "",
                            primaryAction: {
                                label: "Ver etapa",
                                onAction: ()=>{}
                            },
                            onRetry: handleRetry,
                            status: viewState === "loading" ? "loading" : "error"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 522,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightLineCard, {
                            tag: "Top gargalo",
                            headline: "",
                            description: "",
                            primaryAction: {
                                label: "Ver lista",
                                onAction: ()=>{}
                            },
                            onRetry: handleRetry,
                            status: viewState === "loading" ? "loading" : "error"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 530,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightLineCard, {
                            tag: "Destaque",
                            headline: "",
                            description: "",
                            primaryAction: {
                                label: "Ver motivo",
                                onAction: ()=>{}
                            },
                            onRetry: handleRetry,
                            status: viewState === "loading" ? "loading" : "error"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 538,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightLineCard, {
                            tag: "Ação recomendada",
                            headline: "",
                            description: "",
                            primaryAction: {
                                label: "Cobrar feedbacks",
                                onAction: ()=>{},
                                asButton: true
                            },
                            onRetry: handleRetry,
                            status: viewState === "loading" ? "loading" : "error"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 546,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 521,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                lineNumber: 520,
                columnNumber: 9
            }, this) : null,
            viewState === "ready" && hasEnoughData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    ease: "easeOut"
                },
                className: "flex flex-col gap-5 p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                            delayDuration: 80,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$flow$2d$steps$2d$connected$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlowStepsConnected"], {
                                stages: stages,
                                transitions: transitions,
                                selectedStageId: selectedStage?.id ?? null,
                                bottleneckToStageId: bottleneck?.to.id ?? null,
                                onSelectStage: setStageSelection
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                lineNumber: 567,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 566,
                            columnNumber: 13
                        }, this),
                        selectedStage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/70 px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-zinc-600",
                                    children: [
                                        "Exibindo insights da etapa:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-zinc-900",
                                            children: selectedStage.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                            lineNumber: 580,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                    lineNumber: 578,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setStageSelection(null),
                                    className: "text-xs font-semibold text-brand underline underline-offset-4",
                                    children: "Limpar seleção"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                    lineNumber: 582,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 577,
                            columnNumber: 15
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.14
                                },
                                className: "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightLineCard, {
                                        tag: "Oportunidades em risco",
                                        headline: riskData.topDealLabel,
                                        description: riskData.description,
                                        meta: riskData.meta,
                                        primaryAction: {
                                            label: riskData.total > 0 ? "Ver etapa" : "Ver pipeline",
                                            onAction: ()=>riskData.total > 0 ? openPipeline({
                                                    stageId: riskData.stageId ?? undefined,
                                                    filters: "risk"
                                                }) : openPipeline({
                                                    stageId: selectedStage?.id
                                                })
                                        },
                                        onRetry: handleRetry,
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "h-4 w-4 text-amber-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                            lineNumber: 614,
                                            columnNumber: 25
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 601,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightLineCard, {
                                        tag: "Top gargalo",
                                        headline: bottleneck ? `Queda de ${bottleneckDrop}% em ${bottleneck.to.label}` : "Sem gargalos relevantes no período",
                                        description: bottleneck ? `${bottleneck.to.stalledCount} oportunidades paradas há +${bottleneck.to.stalledDays} dias` : "Nenhuma etapa com queda crítica no período atual.",
                                        primaryAction: {
                                            label: bottleneck ? "Ver lista" : "Ver pipeline",
                                            onAction: ()=>bottleneck ? openPipeline({
                                                    stageId: bottleneck.to.id,
                                                    filters: "stalled"
                                                }) : openPipeline()
                                        },
                                        onRetry: handleRetry,
                                        tone: bottleneck ? "danger" : "neutral",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                            className: "h-4 w-4 text-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                            lineNumber: 638,
                                            columnNumber: 25
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 617,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightLineCard, {
                                        tag: "Destaque",
                                        headline: bestStage && bestStage.base > 0 ? `Melhor conversão: ${highlightConversion}% em ${highlightStageName}` : "Sem base comparável no período",
                                        description: highlightReason,
                                        primaryAction: {
                                            label: bestStage && bestStage.base > 0 ? "Ver motivo" : "Ver pipeline",
                                            onAction: ()=>bestStage && bestStage.base > 0 ? openHighlightReason() : openPipeline()
                                        },
                                        onRetry: handleRetry,
                                        tone: bestStage && bestStage.base > 0 ? "success" : "neutral",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            className: "h-4 w-4 text-emerald-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                            lineNumber: 656,
                                            columnNumber: 25
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 641,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightLineCard, {
                                        tag: "Ação recomendada",
                                        headline: scopeStage ? "Cobrar feedbacks" : "Nenhuma ação recomendada agora",
                                        description: scopeStage ? `Atenção: ${riskData.total} oportunidades paradas. Priorizar follow-up hoje.` : "Sem oportunidades paradas críticas neste momento.",
                                        primaryAction: {
                                            label: actionState === "loading" ? "Criando ações..." : scopeStage ? "Cobrar feedbacks" : "Ver pipeline",
                                            onAction: ()=>scopeStage ? handleRecommendedAction() : openPipeline(),
                                            asButton: true,
                                            disabled: actionState === "loading",
                                            loading: actionState === "loading"
                                        },
                                        feedback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                actionState === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-emerald-700",
                                                    children: [
                                                        "Ações criadas (",
                                                        createdCount,
                                                        ").",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: (event)=>{
                                                                event.stopPropagation();
                                                                openActivitiesFromAction();
                                                            },
                                                            className: "font-semibold underline underline-offset-4",
                                                            children: "Ver atividades"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 27
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                    lineNumber: 683,
                                                    columnNumber: 25
                                                }, void 0) : null,
                                                actionState === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rounded-md border border-red-200 bg-red-50 px-2 py-1 text-red-700",
                                                    children: [
                                                        "Não foi possível criar ações agora.",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: (event)=>{
                                                                event.stopPropagation();
                                                                handleRecommendedAction();
                                                            },
                                                            className: "font-semibold underline underline-offset-4",
                                                            children: "Tentar novamente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                            lineNumber: 701,
                                                            columnNumber: 27
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 25
                                                }, void 0) : null
                                            ]
                                        }, void 0, true),
                                        onRetry: handleRetry,
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "h-4 w-4 text-brand"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                            lineNumber: 717,
                                            columnNumber: 25
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 659,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, insightScopeKey, true, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                lineNumber: 593,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 592,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 565,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                lineNumber: 559,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
        lineNumber: 469,
        columnNumber: 5
    }, this);
}
_s(FunnelXRay, "mO8/CjSLWEVewKuNtfB0C1a09HI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"]
    ];
});
_c1 = FunnelXRay;
var _c, _c1;
__turbopack_context__.k.register(_c, "InsightLineCard");
__turbopack_context__.k.register(_c1, "FunnelXRay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/funnel-x-ray/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$x$2d$ray$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-execution-panel-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExecutionPanelData",
    ()=>useExecutionPanelData
]);
// ============================================================================
// Hook que computa dados em tempo real para o Execution Panel
// ============================================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/opportunity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/activity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$client$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/client-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$goal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/goal-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$pipeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/pipeline-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/insights.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/alerts.ts [app-client] (ecmascript)");
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
function useExecutionPanelData() {
    _s();
    const opportunities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"])({
        "useExecutionPanelData.useOpportunityStore[opportunities]": (s)=>s.opportunities
    }["useExecutionPanelData.useOpportunityStore[opportunities]"]);
    const activities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "useExecutionPanelData.useActivityStore[activities]": (s)=>s.activities
    }["useExecutionPanelData.useActivityStore[activities]"]);
    const clients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$client$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientStore"])({
        "useExecutionPanelData.useClientStore[clients]": (s)=>s.clients
    }["useExecutionPanelData.useClientStore[clients]"]);
    const goals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$goal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGoalStore"])({
        "useExecutionPanelData.useGoalStore[goals]": (s)=>s.goals
    }["useExecutionPanelData.useGoalStore[goals]"]);
    const pipelines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$pipeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePipelineStore"])({
        "useExecutionPanelData.usePipelineStore[pipelines]": (s)=>s.pipelines
    }["useExecutionPanelData.usePipelineStore[pipelines]"]);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "useExecutionPanelData.useAuthStore[user]": (s)=>s.user
    }["useExecutionPanelData.useAuthStore[user]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useExecutionPanelData.useMemo": ()=>{
            const empty = {
                priorities: [],
                insights: [],
                quickWins: [],
                riskAlerts: []
            };
            if (!user) return empty;
            try {
                const input = {
                    opportunities,
                    activities,
                    clients,
                    goals,
                    pipelines,
                    userId: user.id,
                    userRole: user.role
                };
                return {
                    priorities: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeTodaysPriorities"])(input),
                    insights: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeSmartInsights"])(input),
                    quickWins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeQuickWins"])(input),
                    riskAlerts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeRiskAlerts"])(input)
                };
            } catch (err) {
                console.error("[ExecutionPanelData] Erro ao computar dados:", err);
                return empty;
            }
        }
    }["useExecutionPanelData.useMemo"], [
        opportunities,
        activities,
        clients,
        goals,
        pipelines,
        user
    ]);
}
_s(useExecutionPanelData, "UKEFr054+NCw+gMwb9GZ6WH/Tq8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$client$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$goal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGoalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$pipeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePipelineStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/execution-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CriticalAlerts",
    ()=>CriticalAlerts,
    "TodayActivities",
    ()=>TodayActivities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-client] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/bento-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/activity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/opportunity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$client$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/client-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$execution$2d$panel$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-execution-panel-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-dashboard-filters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const STAGE_LABELS = {
    "lead-in": "Leads",
    "contato-feito": "Contato",
    "reuniao-agendada": "Reunião",
    "proposta-enviada": "Proposta",
    negociacao: "Negociação",
    fechamento: "Fechamento"
};
const ALERT_FILTER_OPTIONS = [
    {
        id: "all",
        label: "Todos"
    },
    {
        id: "critical",
        label: "Críticos"
    },
    {
        id: "churn",
        label: "Risco de churn"
    },
    {
        id: "pipeline",
        label: "Pipeline parado"
    },
    {
        id: "activities",
        label: "Atividades"
    },
    {
        id: "goals",
        label: "Metas"
    }
];
const SNOOZE_OPTIONS = [
    {
        label: "1h",
        hours: 1
    },
    {
        label: "Amanhã",
        hours: 24
    },
    {
        label: "1 semana",
        hours: 24 * 7
    }
];
const ALERT_SEVERITY_ORDER = {
    critical: 0,
    high: 1,
    medium: 2
};
const ALERT_STATUS_ORDER = {
    in_progress: 0,
    open: 1,
    resolved: 2,
    snoozed: 3
};
const FALLBACK_RETRY_MESSAGE = "Não consegui resolver agora.";
function toDateOnly(date) {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
}
function addDays(baseDate, days) {
    const next = new Date(baseDate);
    next.setDate(next.getDate() + days);
    return next;
}
function formatStage(stage) {
    if (!stage) return "Sem etapa";
    return STAGE_LABELS[stage] ?? "Sem etapa";
}
function mapRiskSeverity(severity) {
    return severity === "critical" ? "critical" : "high";
}
function formatDelay(ms) {
    if (!Number.isFinite(ms) || ms <= 0) return "0min";
    const totalMinutes = Math.max(1, Math.round(ms / (1000 * 60)));
    if (totalMinutes < 60) return `${totalMinutes}min`;
    const totalHours = Math.round(totalMinutes / 60);
    if (totalHours < 24) return `${totalHours}h`;
    const days = Math.round(totalHours / 24);
    return `${days}d`;
}
function formatSnoozeUntil(baseDate, hours) {
    const until = new Date(baseDate.getTime() + hours * 60 * 60 * 1000);
    return until.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });
}
function formatRescheduleLabel(dueDate, dueTime) {
    const parsed = new Date(`${dueDate}T${dueTime || "09:00"}:00`);
    if (Number.isNaN(parsed.getTime())) {
        return dueTime ? `${dueDate} ${dueTime}` : dueDate;
    }
    return parsed.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });
}
function getAlertBadgeClass(severity) {
    if (severity === "critical") {
        return "border-red-200 bg-red-50 text-red-700";
    }
    if (severity === "high") {
        return "border-amber-200 bg-amber-50 text-amber-700";
    }
    return "border-sky-200 bg-sky-50 text-sky-700";
}
function getSeverityLabel(severity) {
    if (severity === "critical") return "Crítico";
    if (severity === "high") return "Alto";
    return "Médio";
}
function getAlertIcon(alert) {
    if (alert.kind === "sla_risk") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
            className: "h-4 w-4 text-red-600"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/execution-section.tsx",
            lineNumber: 264,
            columnNumber: 12
        }, this);
    }
    if (alert.kind === "goal_risk") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
            className: "h-4 w-4 text-amber-600"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/execution-section.tsx",
            lineNumber: 268,
            columnNumber: 12
        }, this);
    }
    if (alert.severity === "critical") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
            className: "h-4 w-4 text-red-600"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/execution-section.tsx",
            lineNumber: 272,
            columnNumber: 12
        }, this);
    }
    if (alert.severity === "high") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
            className: "h-4 w-4 text-amber-600"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/execution-section.tsx",
            lineNumber: 276,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
        className: "h-4 w-4 text-sky-600"
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/execution-section.tsx",
        lineNumber: 279,
        columnNumber: 10
    }, this);
}
function matchesAlertFilter(alert, filter) {
    if (filter === "all") return true;
    if (filter === "critical") return alert.severity === "critical";
    return alert.group === filter;
}
function getExecuteLabel(type) {
    if (type === "call") return "Ligar";
    if (type === "whatsapp") return "WhatsApp";
    if (type === "email") return "Email";
    if (type === "meeting") return "Entrar";
    return "Executar";
}
function getExecutePath(activityId, type) {
    return `/activities?activityId=${activityId}&execute=${type}`;
}
function getActivityTypeIcon(type) {
    if (type === "call") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"];
    if (type === "email") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"];
    if (type === "whatsapp") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"];
}
function isActionableAlert(status) {
    return status === "open" || status === "in_progress";
}
function sleep(ms) {
    return new Promise((resolve)=>{
        window.setTimeout(resolve, ms);
    });
}
function CriticalAlerts() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { riskAlerts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$execution$2d$panel$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExecutionPanelData"])();
    const { filteredActivities, openOpportunities, now, userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"])();
    const userName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "CriticalAlerts.useAuthStore[userName]": (s)=>s.user?.name ?? "Sales Executive"
    }["CriticalAlerts.useAuthStore[userName]"]);
    const clients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$client$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientStore"])({
        "CriticalAlerts.useClientStore[clients]": (s)=>s.clients
    }["CriticalAlerts.useClientStore[clients]"]);
    const allActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "CriticalAlerts.useActivityStore[allActivities]": (s)=>s.activities
    }["CriticalAlerts.useActivityStore[allActivities]"]);
    const activityLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "CriticalAlerts.useActivityStore[activityLoading]": (s)=>s.isLoading
    }["CriticalAlerts.useActivityStore[activityLoading]"]);
    const opportunityLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"])({
        "CriticalAlerts.useOpportunityStore[opportunityLoading]": (s)=>s.isLoading
    }["CriticalAlerts.useOpportunityStore[opportunityLoading]"]);
    const addActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "CriticalAlerts.useActivityStore[addActivity]": (s)=>s.addActivity
    }["CriticalAlerts.useActivityStore[addActivity]"]);
    const updateOpportunity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"])({
        "CriticalAlerts.useOpportunityStore[updateOpportunity]": (s)=>s.updateOpportunity
    }["CriticalAlerts.useOpportunityStore[updateOpportunity]"]);
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [runtimeById, setRuntimeById] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [dismissedIds, setDismissedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [snoozePopoverId, setSnoozePopoverId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [snoozeReasonById, setSnoozeReasonById] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [snoozedAlerts, setSnoozedAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [confirmBatchResolveOpen, setConfirmBatchResolveOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const alerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CriticalAlerts.useMemo[alerts]": ()=>{
            const opportunityById = new Map(openOpportunities.map({
                "CriticalAlerts.useMemo[alerts]": (opportunity)=>[
                        opportunity.id,
                        opportunity
                    ]
            }["CriticalAlerts.useMemo[alerts]"]));
            const clientById = new Map(clients.map({
                "CriticalAlerts.useMemo[alerts]": (client)=>[
                        client.id,
                        client
                    ]
            }["CriticalAlerts.useMemo[alerts]"]));
            const map = new Map();
            const pushAlert = {
                "CriticalAlerts.useMemo[alerts].pushAlert": (candidate)=>{
                    const dedupeKey = `${candidate.kind}:${candidate.entityId ?? "global"}:${candidate.reasonCode}`;
                    const existing = map.get(dedupeKey);
                    if (!existing) {
                        map.set(dedupeKey, {
                            ...candidate,
                            duplicateCount: 1
                        });
                        return;
                    }
                    map.set(dedupeKey, {
                        ...existing,
                        impactScore: Math.max(existing.impactScore, candidate.impactScore),
                        severity: ALERT_SEVERITY_ORDER[candidate.severity] < ALERT_SEVERITY_ORDER[existing.severity] ? candidate.severity : existing.severity,
                        duplicateCount: existing.duplicateCount + 1
                    });
                }
            }["CriticalAlerts.useMemo[alerts].pushAlert"];
            for (const alert of riskAlerts){
                if (alert.type === "health-drop") {
                    const client = alert.linkedEntityId ? clientById.get(alert.linkedEntityId) : null;
                    pushAlert({
                        id: alert.id,
                        title: "Saúde crítica",
                        context: client?.companyName ?? alert.title,
                        impact: alert.description,
                        recommendation: "Reengajar cliente com follow-up imediato.",
                        consequence: "Vai criar atividade de WhatsApp para hoje.",
                        severity: mapRiskSeverity(alert.severity),
                        kind: "health_critical",
                        group: "churn",
                        reasonCode: "health_drop",
                        viewPath: alert.linkedEntityId ? `/clients/${alert.linkedEntityId}` : "/clients?health=critical",
                        entityId: alert.linkedEntityId,
                        impactScore: client?.monthlyRevenue ?? 0
                    });
                    continue;
                }
                if (alert.type === "stale") {
                    const opportunity = alert.linkedEntityId ? opportunityById.get(alert.linkedEntityId) : null;
                    const staleDays = opportunity ? Math.max(1, Math.round((now.getTime() - new Date(opportunity.updatedAt).getTime()) / (1000 * 60 * 60 * 24))) : null;
                    pushAlert({
                        id: alert.id,
                        title: staleDays ? `Parado há ${staleDays}d` : "Pipeline parado",
                        context: opportunity ? `${opportunity.clientName} - ${formatStage(opportunity.stage)}` : alert.title,
                        impact: alert.description,
                        recommendation: "Cobrar resposta e registrar próxima ação.",
                        consequence: "Vai criar follow-up para hoje e abrir a oportunidade filtrada.",
                        severity: mapRiskSeverity(alert.severity),
                        kind: "stalled_deal",
                        group: "pipeline",
                        reasonCode: "stalled_deal",
                        viewPath: alert.linkedEntityId ? `/pipes?opportunityId=${alert.linkedEntityId}&tab=activities` : "/pipes?filter=stale",
                        entityId: alert.linkedEntityId,
                        impactScore: opportunity?.value ?? 0
                    });
                    continue;
                }
                if (alert.type === "sla-breach") {
                    const opportunity = alert.linkedEntityId ? opportunityById.get(alert.linkedEntityId) : null;
                    pushAlert({
                        id: alert.id,
                        title: "SLA estourado",
                        context: opportunity ? `${opportunity.clientName} - ${formatStage(opportunity.stage)}` : alert.title,
                        impact: alert.description,
                        recommendation: "Tratar SLA imediatamente e formalizar próxima ação.",
                        consequence: "Vai criar atividade crítica de follow-up para hoje.",
                        severity: "critical",
                        kind: "sla_risk",
                        group: "pipeline",
                        reasonCode: "sla_breach",
                        viewPath: alert.linkedEntityId ? `/pipes?opportunityId=${alert.linkedEntityId}&filter=sla_overdue` : "/pipes?filter=sla_overdue",
                        entityId: alert.linkedEntityId,
                        impactScore: (opportunity?.value ?? 0) + 200000
                    });
                    continue;
                }
                if (alert.type === "goal-risk") {
                    pushAlert({
                        id: alert.id,
                        title: "Meta em risco",
                        context: alert.title,
                        impact: alert.description,
                        recommendation: "Ajustar plano de recuperação da meta agora.",
                        consequence: "Vai criar tarefa de recuperação e abrir metas em risco.",
                        severity: "critical",
                        kind: "goal_risk",
                        group: "goals",
                        reasonCode: "goal_risk",
                        viewPath: "/goals",
                        entityId: alert.linkedEntityId,
                        impactScore: 120000
                    });
                    continue;
                }
                if (alert.type === "contract-expiring") {
                    const client = alert.linkedEntityId ? clientById.get(alert.linkedEntityId) : null;
                    pushAlert({
                        id: alert.id,
                        title: "Contrato expirando",
                        context: client?.companyName ?? alert.title,
                        impact: alert.description,
                        recommendation: "Iniciar renovação com proposta de valor objetiva.",
                        consequence: "Vai criar atividade de renovação para hoje.",
                        severity: mapRiskSeverity(alert.severity),
                        kind: "contract_risk",
                        group: "churn",
                        reasonCode: "contract_expiring",
                        viewPath: alert.linkedEntityId ? `/clients/${alert.linkedEntityId}` : "/clients",
                        entityId: alert.linkedEntityId,
                        impactScore: client?.monthlyRevenue ?? 0
                    });
                }
            }
            const overdueActivities = filteredActivities.filter({
                "CriticalAlerts.useMemo[alerts].overdueActivities": (activity)=>activity.effectiveStatus === "overdue"
            }["CriticalAlerts.useMemo[alerts].overdueActivities"]);
            if (overdueActivities.length > 0) {
                const maxDelayMs = overdueActivities.reduce({
                    "CriticalAlerts.useMemo[alerts].maxDelayMs": (maxDelay, activity)=>{
                        const dueAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivityDueAt"])(activity);
                        return Math.max(maxDelay, now.getTime() - dueAt.getTime());
                    }
                }["CriticalAlerts.useMemo[alerts].maxDelayMs"], 0);
                const severity = overdueActivities.length >= 8 ? "critical" : overdueActivities.length >= 3 ? "high" : "medium";
                pushAlert({
                    id: "overdue-activities",
                    title: "Atividades atrasadas",
                    context: `${overdueActivities.length} item(ns) aguardando execução`,
                    impact: `Maior atraso acumulado: ${formatDelay(maxDelayMs)}.`,
                    recommendation: "Priorizar backlog atrasado para proteger o SLA.",
                    consequence: "Vai abrir a lista de atrasadas e criar tarefa de mutirão.",
                    severity,
                    kind: "overdue_activities",
                    group: "activities",
                    reasonCode: "overdue_activities",
                    viewPath: "/activities?status=overdue",
                    impactScore: overdueActivities.length * 10000
                });
            }
            return Array.from(map.values()).sort({
                "CriticalAlerts.useMemo[alerts]": (a, b)=>{
                    const bySeverity = ALERT_SEVERITY_ORDER[a.severity] - ALERT_SEVERITY_ORDER[b.severity];
                    if (bySeverity !== 0) return bySeverity;
                    return b.impactScore - a.impactScore;
                }
            }["CriticalAlerts.useMemo[alerts]"]);
        }
    }["CriticalAlerts.useMemo[alerts]"], [
        riskAlerts,
        filteredActivities,
        openOpportunities,
        clients,
        now
    ]);
    const visibleAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CriticalAlerts.useMemo[visibleAlerts]": ()=>{
            return alerts.filter({
                "CriticalAlerts.useMemo[visibleAlerts]": (alert)=>!dismissedIds.has(alert.id)
            }["CriticalAlerts.useMemo[visibleAlerts]"]).filter({
                "CriticalAlerts.useMemo[visibleAlerts]": (alert)=>(runtimeById[alert.id]?.status ?? "open") !== "snoozed"
            }["CriticalAlerts.useMemo[visibleAlerts]"]).filter({
                "CriticalAlerts.useMemo[visibleAlerts]": (alert)=>matchesAlertFilter(alert, activeFilter)
            }["CriticalAlerts.useMemo[visibleAlerts]"]).sort({
                "CriticalAlerts.useMemo[visibleAlerts]": (a, b)=>{
                    const statusA = runtimeById[a.id]?.status ?? "open";
                    const statusB = runtimeById[b.id]?.status ?? "open";
                    const statusOrder = ALERT_STATUS_ORDER[statusA] - ALERT_STATUS_ORDER[statusB];
                    if (statusOrder !== 0) return statusOrder;
                    return ALERT_SEVERITY_ORDER[a.severity] - ALERT_SEVERITY_ORDER[b.severity];
                }
            }["CriticalAlerts.useMemo[visibleAlerts]"]);
        }
    }["CriticalAlerts.useMemo[visibleAlerts]"], [
        alerts,
        dismissedIds,
        runtimeById,
        activeFilter
    ]);
    const actionableVisible = visibleAlerts.filter((alert)=>{
        const status = runtimeById[alert.id]?.status ?? "open";
        return isActionableAlert(status);
    });
    const counterByFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CriticalAlerts.useMemo[counterByFilter]": ()=>{
            const next = {
                all: 0,
                critical: 0,
                churn: 0,
                pipeline: 0,
                activities: 0,
                goals: 0
            };
            for (const alert of alerts){
                if (dismissedIds.has(alert.id)) continue;
                const status = runtimeById[alert.id]?.status ?? "open";
                if (!isActionableAlert(status)) continue;
                next.all += 1;
                if (alert.severity === "critical") next.critical += 1;
                next[alert.group] += 1;
            }
            return next;
        }
    }["CriticalAlerts.useMemo[counterByFilter]"], [
        alerts,
        dismissedIds,
        runtimeById
    ]);
    const isLoading = activityLoading || opportunityLoading;
    const setAlertRuntime = (alertId, runtime)=>{
        setRuntimeById((prev)=>({
                ...prev,
                [alertId]: runtime
            }));
    };
    const scheduleDismiss = (alertId)=>{
        window.setTimeout(()=>{
            setDismissedIds((prev)=>{
                const next = new Set(prev);
                next.add(alertId);
                return next;
            });
        }, 1800);
    };
    // Auto-dismiss info feedback on alerts after 5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CriticalAlerts.useEffect": ()=>{
            const infoAlertIds = Object.entries(runtimeById).filter({
                "CriticalAlerts.useEffect.infoAlertIds": ([, r])=>r.feedback?.tone === "info" && r.status !== "resolved"
            }["CriticalAlerts.useEffect.infoAlertIds"]).map({
                "CriticalAlerts.useEffect.infoAlertIds": ([id])=>id
            }["CriticalAlerts.useEffect.infoAlertIds"]);
            if (infoAlertIds.length === 0) return;
            const t = setTimeout({
                "CriticalAlerts.useEffect.t": ()=>{
                    setRuntimeById({
                        "CriticalAlerts.useEffect.t": (prev)=>{
                            const next = {
                                ...prev
                            };
                            for (const id of infoAlertIds){
                                const current = next[id];
                                if (current?.feedback?.tone === "info") {
                                    const { feedback: _, ...rest } = current;
                                    next[id] = rest;
                                }
                            }
                            return next;
                        }
                    }["CriticalAlerts.useEffect.t"]);
                }
            }["CriticalAlerts.useEffect.t"], 5000);
            return ({
                "CriticalAlerts.useEffect": ()=>clearTimeout(t)
            })["CriticalAlerts.useEffect"];
        }
    }["CriticalAlerts.useEffect"], [
        runtimeById
    ]);
    const ensureFollowUpActivity = (opts)=>{
        const openActivity = allActivities.find((activity)=>{
            if (activity.status === "completed" || activity.status === "cancelled") return false;
            const lowerTitle = activity.title.toLowerCase();
            const linkedToOpportunity = opts.opportunityId && activity.opportunityId === opts.opportunityId;
            const linkedToClient = opts.clientId && activity.clientId === opts.clientId;
            return (Boolean(linkedToOpportunity) || Boolean(linkedToClient)) && lowerTitle.includes(opts.searchTerm);
        });
        if (openActivity) {
            return openActivity.id;
        }
        const created = addActivity({
            title: opts.title,
            description: opts.description,
            type: opts.type,
            status: "pending",
            dueDate: toDateOnly(now),
            dueTime: opts.dueTime,
            opportunityId: opts.opportunityId,
            clientId: opts.clientId,
            responsibleId: userId,
            responsibleName: userName
        });
        return created.id;
    };
    const resolveAlertByType = async (alert)=>{
        if (alert.kind === "health_critical") {
            const activityId = ensureFollowUpActivity({
                title: `Follow-up de saúde: ${alert.context}`,
                description: `Gerado a partir de alerta: ${alert.title}`,
                type: "whatsapp",
                dueTime: "16:00",
                clientId: alert.entityId,
                searchTerm: "saúde"
            });
            return {
                message: "Resolvido, atividade criada para hoje.",
                linkLabel: "Ver atividade",
                linkPath: `/activities?activityId=${activityId}`
            };
        }
        if (alert.kind === "contract_risk") {
            const activityId = ensureFollowUpActivity({
                title: `Renovacao de contrato: ${alert.context}`,
                description: `Gerado a partir de alerta: ${alert.title}`,
                type: "meeting",
                dueTime: "15:00",
                clientId: alert.entityId,
                searchTerm: "renovação"
            });
            return {
                message: "Resolvido, atividade de renovação criada.",
                linkLabel: "Ver atividade",
                linkPath: `/activities?activityId=${activityId}`
            };
        }
        if (alert.kind === "stalled_deal") {
            const opportunity = alert.entityId ? openOpportunities.find((item)=>item.id === alert.entityId) : null;
            const activityId = ensureFollowUpActivity({
                title: `Follow-up urgente: ${opportunity?.clientName ?? alert.context}`,
                description: `Gerado a partir de alerta: ${alert.title}`,
                type: "follow-up",
                dueTime: "11:00",
                opportunityId: opportunity?.id,
                clientId: opportunity?.clientId,
                searchTerm: "follow-up"
            });
            if (opportunity?.id) {
                updateOpportunity(opportunity.id, {
                    updatedAt: new Date().toISOString()
                });
            }
            return {
                message: "Resolvido, follow-up registrado e deal atualizado.",
                linkLabel: "Ver atividade",
                linkPath: `/activities?activityId=${activityId}`
            };
        }
        if (alert.kind === "sla_risk") {
            const opportunity = alert.entityId ? openOpportunities.find((item)=>item.id === alert.entityId) : null;
            const activityId = ensureFollowUpActivity({
                title: `SLA crítico: ${opportunity?.clientName ?? alert.context}`,
                description: `Gerado a partir de alerta: ${alert.title}`,
                type: "call",
                dueTime: "10:00",
                opportunityId: opportunity?.id,
                clientId: opportunity?.clientId,
                searchTerm: "sla"
            });
            if (opportunity?.id) {
                updateOpportunity(opportunity.id, {
                    updatedAt: new Date().toISOString()
                });
            }
            return {
                message: "Resolvido, plano de SLA registrado para hoje.",
                linkLabel: "Ver atividade",
                linkPath: `/activities?activityId=${activityId}`
            };
        }
        if (alert.kind === "goal_risk") {
            const activityId = ensureFollowUpActivity({
                title: "Plano de recuperação da meta",
                description: `Gerado a partir de alerta: ${alert.context}`,
                type: "task",
                dueTime: "09:00",
                searchTerm: "recuperação da meta"
            });
            return {
                message: "Resolvido, plano de recuperação criado.",
                linkLabel: "Ver plano",
                linkPath: `/activities?activityId=${activityId}`
            };
        }
        if (alert.kind === "overdue_activities") {
            const activityId = ensureFollowUpActivity({
                title: "Mutirão de atividades atrasadas",
                description: "Priorizar backlog atrasado e concluir itens críticos.",
                type: "task",
                dueTime: "09:30",
                searchTerm: "mutirão"
            });
            return {
                message: "Resolvido, mutirão criado para limpar atrasos.",
                linkLabel: "Ver mutirão",
                linkPath: `/activities?activityId=${activityId}`
            };
        }
        return {
            message: "Alerta tratado com sucesso.",
            linkLabel: "Ver detalhes",
            linkPath: alert.viewPath
        };
    };
    const handleResolve = async (alert)=>{
        setAlertRuntime(alert.id, {
            status: "in_progress"
        });
        try {
            await sleep(180);
            const result = await resolveAlertByType(alert);
            setAlertRuntime(alert.id, {
                status: "resolved",
                feedback: {
                    tone: "success",
                    message: result.message,
                    linkLabel: result.linkLabel,
                    linkPath: result.linkPath
                }
            });
            scheduleDismiss(alert.id);
        } catch  {
            setAlertRuntime(alert.id, {
                status: "open",
                feedback: {
                    tone: "error",
                    message: FALLBACK_RETRY_MESSAGE
                }
            });
        }
    };
    const handleMarkAsTreated = (alert)=>{
        setAlertRuntime(alert.id, {
            status: "resolved",
            feedback: {
                tone: "success",
                message: "Marcado como tratado.",
                linkLabel: "Ver entidade",
                linkPath: alert.viewPath
            }
        });
        scheduleDismiss(alert.id);
    };
    const handleCopySummary = async (alert)=>{
        try {
            await navigator.clipboard.writeText(`${alert.title} | ${alert.context} | ${alert.impact} | Ação: ${alert.recommendation}`);
            setAlertRuntime(alert.id, {
                status: runtimeById[alert.id]?.status ?? "open",
                feedback: {
                    tone: "info",
                    message: "Resumo copiado."
                }
            });
        } catch  {
            setAlertRuntime(alert.id, {
                status: runtimeById[alert.id]?.status ?? "open",
                feedback: {
                    tone: "error",
                    message: "Não consegui copiar o resumo."
                }
            });
        }
    };
    const handleSnooze = (alert, hours)=>{
        const reason = (snoozeReasonById[alert.id] ?? "").trim();
        const untilLabel = formatSnoozeUntil(now, hours);
        setAlertRuntime(alert.id, {
            status: "snoozed",
            feedback: {
                tone: "info",
                message: reason ? `Adiado ate ${untilLabel}. Motivo: ${reason}.` : `Adiado ate ${untilLabel}.`
            }
        });
        setSnoozedAlerts((prev)=>[
                ...prev,
                {
                    id: alert.id,
                    label: alert.title
                }
            ]);
        setSnoozePopoverId(null);
    };
    const handleUndoLastSnooze = ()=>{
        setSnoozedAlerts((prev)=>{
            if (prev.length === 0) return prev;
            const next = [
                ...prev
            ];
            const last = next.pop();
            if (last) {
                setAlertRuntime(last.id, {
                    status: "open",
                    feedback: {
                        tone: "info",
                        message: "Adiamento desfeito."
                    }
                });
            }
            return next;
        });
    };
    const handleRequestBatchResolve = ()=>{
        if (actionableVisible.length < 2) return;
        setConfirmBatchResolveOpen(true);
    };
    const handleConfirmBatchResolve = async ()=>{
        setConfirmBatchResolveOpen(false);
        for (const alert of actionableVisible){
            await handleResolve(alert);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoCard"], {
        className: "premium-panel flex flex-col gap-4 border-zinc-200/80 bg-white/88 p-5 shadow-[0_18px_32px_-24px_rgba(15,23,42,0.45)] md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-semibold text-zinc-900",
                                children: "Alertas Críticos"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 885,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-red-200 bg-red-50 px-2 text-xs font-semibold text-red-700",
                                children: counterByFilter.all
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 886,
                                columnNumber: 11
                            }, this),
                            snoozedAlerts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700",
                                children: [
                                    "Adiados ",
                                    snoozedAlerts.length,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "underline underline-offset-4",
                                        onClick: handleUndoLastSnooze,
                                        children: "Desfazer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 892,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 890,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 884,
                        columnNumber: 9
                    }, this),
                    actionableVisible.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "xs",
                        variant: "outline",
                        className: "h-7 rounded-full border-zinc-200 px-3 text-xs",
                        onClick: handleRequestBatchResolve,
                        children: "Resolver todos do tipo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 904,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                        open: confirmBatchResolveOpen,
                        onOpenChange: setConfirmBatchResolveOpen,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                            children: [
                                                "Resolver ",
                                                actionableVisible.length,
                                                " alerta(s)?"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 917,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                            children: "Isso vai criar atividades de follow-up para cada alerta acionável visível."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 918,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                    lineNumber: 916,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                            children: "Cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 923,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                            onClick: handleConfirmBatchResolve,
                                            children: "Resolver todos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 924,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                    lineNumber: 922,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                            lineNumber: 915,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 914,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 883,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5",
                children: ALERT_FILTER_OPTIONS.map((option)=>{
                    const active = activeFilter === option.id;
                    const count = counterByFilter[option.id];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActiveFilter(option.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-7 items-center gap-1 rounded-full border px-2.5 text-[11px] font-medium transition-[border-color,background-color,color] duration-150", active ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"),
                        children: [
                            option.label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px]", active ? "text-white/80" : "text-zinc-400"),
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 947,
                                columnNumber: 15
                            }, this)
                        ]
                    }, option.id, true, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 935,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 930,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: Array.from({
                    length: 3
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-zinc-200/80 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-4 w-44"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 957,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "mt-2 h-3 w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 958,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "mt-2 h-3 w-[82%]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 959,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 956,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 954,
                columnNumber: 9
            }, this) : null,
            !isLoading && visibleAlerts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-zinc-200/80 bg-zinc-50/40 p-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "mx-auto h-7 w-7 text-emerald-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 967,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm font-medium text-zinc-900",
                        children: "Sem alertas ativos no seu escopo."
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 968,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-zinc-500",
                        children: "Tudo estável por enquanto."
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 969,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 966,
                columnNumber: 9
            }, this) : null,
            !isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2.5",
                children: visibleAlerts.map((alert)=>{
                    const runtime = runtimeById[alert.id];
                    const status = runtime?.status ?? "open";
                    const isProcessing = status === "in_progress";
                    const isResolved = status === "resolved";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-white p-3 transition-[border-color,box-shadow,background-color] duration-150", "hover:border-zinc-300 hover:bg-zinc-50/40 hover:shadow-[0_14px_24px_-24px_rgba(15,23,42,0.45)]", isResolved && "border-emerald-200 bg-emerald-50/30", !isResolved && alert.severity === "critical" && "border-red-200/85", !isResolved && alert.severity === "high" && "border-amber-200/85", !isResolved && alert.severity === "medium" && "border-sky-200/85"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-0.5 shrink-0",
                                                        children: getAlertIcon(alert)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 996,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-zinc-900",
                                                                        children: alert.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 999,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold", getAlertBadgeClass(alert.severity)),
                                                                        children: getSeverityLabel(alert.severity)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1000,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    alert.duplicateCount > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-600",
                                                                        children: [
                                                                            "+",
                                                                            alert.duplicateCount - 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1004,
                                                                        columnNumber: 29
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 998,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 truncate text-sm text-zinc-700",
                                                                children: alert.context
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1010,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-0.5 text-xs text-zinc-500",
                                                                children: [
                                                                    "Impacto: ",
                                                                    alert.impact
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1011,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 997,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 995,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 rounded-lg border border-zinc-200/80 bg-zinc-50/70 p-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-zinc-700",
                                                        children: [
                                                            "Ação recomendada: ",
                                                            alert.recommendation
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1016,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-0.5 text-xs text-zinc-500",
                                                        children: alert.consequence
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 994,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex shrink-0 flex-col items-end gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "xs",
                                                className: "h-7 rounded-md bg-zinc-900 px-3 text-xs font-semibold text-white hover:bg-zinc-800",
                                                disabled: isProcessing || isResolved,
                                                onClick: ()=>handleResolve(alert),
                                                children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                            className: "h-3.5 w-3.5 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                            lineNumber: 1030,
                                                            columnNumber: 27
                                                        }, this),
                                                        "Executando..."
                                                    ]
                                                }, void 0, true) : "Resolver"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1022,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "xs",
                                                variant: "outline",
                                                className: "h-7 rounded-md border-zinc-200 px-3 text-xs",
                                                onClick: ()=>router.push(alert.viewPath),
                                                children: "Ver"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1038,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                                        open: snoozePopoverId === alert.id,
                                                        onOpenChange: (open)=>setSnoozePopoverId(open ? alert.id : null),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                                asChild: true,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "xs",
                                                                    variant: "ghost",
                                                                    className: "h-7 px-2 text-xs text-zinc-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                            lineNumber: 1054,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Adiar"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                    lineNumber: 1053,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1052,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                                align: "end",
                                                                className: "w-64 rounded-xl border-zinc-200 p-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverHeader"], {
                                                                        className: "gap-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTitle"], {
                                                                                children: "Adiar alerta"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                                lineNumber: 1060,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverDescription"], {
                                                                                children: "Escolha o tempo e informe o motivo."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                                lineNumber: 1061,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1059,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        className: "mt-2 h-8",
                                                                        placeholder: "Motivo (opcional)",
                                                                        value: snoozeReasonById[alert.id] ?? "",
                                                                        onChange: (event)=>setSnoozeReasonById((prev)=>({
                                                                                    ...prev,
                                                                                    [alert.id]: event.target.value
                                                                                }))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1063,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 grid grid-cols-3 gap-1.5",
                                                                        children: SNOOZE_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                size: "xs",
                                                                                variant: "outline",
                                                                                className: "h-7 rounded-md border-zinc-200 text-[11px]",
                                                                                onClick: ()=>handleSnooze(alert, option.hours),
                                                                                children: option.label
                                                                            }, option.label, false, {
                                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                                lineNumber: 1076,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1074,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1058,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                                asChild: true,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "icon-xs",
                                                                    variant: "ghost",
                                                                    className: "h-7 w-7 text-zinc-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1093,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                    lineNumber: 1092,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1091,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                                align: "end",
                                                                className: "w-52 rounded-xl",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                        onClick: ()=>handleMarkAsTreated(alert),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                className: "h-3.5 w-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                                lineNumber: 1098,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            "Marcar como tratado"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1097,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                        onClick: ()=>handleCopySummary(alert),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                className: "h-3.5 w-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                                lineNumber: 1102,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            "Copiar resumo"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1101,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1105,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                        onClick: ()=>router.push(alert.viewPath),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                className: "h-3.5 w-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                                lineNumber: 1107,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            "Abrir entidade"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1106,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1096,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1090,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1047,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1021,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 993,
                                columnNumber: 17
                            }, this),
                            runtime?.feedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 flex flex-wrap items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs", runtime.feedback.tone === "success" && "border-emerald-200 bg-emerald-50/70 text-emerald-700", runtime.feedback.tone === "info" && "border-sky-200 bg-sky-50/70 text-sky-700", runtime.feedback.tone === "error" && "border-red-200 bg-red-50/70 text-red-700"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: runtime.feedback.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1125,
                                        columnNumber: 21
                                    }, this),
                                    runtime.feedback.linkPath && runtime.feedback.linkLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "font-semibold underline underline-offset-4",
                                        onClick: ()=>router.push(runtime.feedback?.linkPath ?? alert.viewPath),
                                        children: runtime.feedback.linkLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1127,
                                        columnNumber: 23
                                    }, this) : null,
                                    runtime.feedback.tone === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "font-semibold underline underline-offset-4",
                                        onClick: ()=>handleResolve(alert),
                                        children: "Tentar novamente"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1136,
                                        columnNumber: 23
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1117,
                                columnNumber: 19
                            }, this) : null
                        ]
                    }, alert.id, true, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 982,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 974,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/execution-section.tsx",
        lineNumber: 882,
        columnNumber: 5
    }, this);
}
_s(CriticalAlerts, "o3xpVg/y4kr9NIcLP0V3umDBIgw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$execution$2d$panel$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExecutionPanelData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$client$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"]
    ];
});
_c = CriticalAlerts;
function TodayActivities() {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { filteredActivities, now } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"])();
    const completeActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "TodayActivities.useActivityStore[completeActivity]": (s)=>s.completeActivity
    }["TodayActivities.useActivityStore[completeActivity]"]);
    const postponeActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "TodayActivities.useActivityStore[postponeActivity]": (s)=>s.postponeActivity
    }["TodayActivities.useActivityStore[postponeActivity]"]);
    const cancelActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "TodayActivities.useActivityStore[cancelActivity]": (s)=>s.cancelActivity
    }["TodayActivities.useActivityStore[cancelActivity]"]);
    const activityLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "TodayActivities.useActivityStore[activityLoading]": (s)=>s.isLoading
    }["TodayActivities.useActivityStore[activityLoading]"]);
    const [executedIds, setExecutedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rescheduleDraftById, setRescheduleDraftById] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [runtimeById, setRuntimeById] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [confirmCancelId, setConfirmCancelId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Auto-dismiss notice after 6 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TodayActivities.useEffect": ()=>{
            if (!notice) return;
            const t = setTimeout({
                "TodayActivities.useEffect.t": ()=>setNotice(null)
            }["TodayActivities.useEffect.t"], 6000);
            return ({
                "TodayActivities.useEffect": ()=>clearTimeout(t)
            })["TodayActivities.useEffect"];
        }
    }["TodayActivities.useEffect"], [
        notice
    ]);
    const todayIso = toDateOnly(now);
    const agendaItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TodayActivities.useMemo[agendaItems]": ()=>{
            return filteredActivities.filter({
                "TodayActivities.useMemo[agendaItems]": (activity)=>activity.effectiveStatus === "pending" || activity.effectiveStatus === "overdue"
            }["TodayActivities.useMemo[agendaItems]"]).filter({
                "TodayActivities.useMemo[agendaItems]": (activity)=>activity.dueDate <= todayIso
            }["TodayActivities.useMemo[agendaItems]"]).map({
                "TodayActivities.useMemo[agendaItems]": (activity)=>{
                    const dueAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivityDueAt"])(activity);
                    const isOverdue = activity.effectiveStatus === "overdue";
                    const status = isOverdue ? "overdue" : "pending";
                    return {
                        id: activity.id,
                        title: activity.title,
                        clientLine: activity.clientName || activity.opportunityTitle || "Sem cliente associado",
                        description: activity.description || "Sem descrição registrada.",
                        type: activity.type,
                        status,
                        dueDate: activity.dueDate,
                        dueTime: activity.dueTime,
                        dueAt,
                        hasTime: Boolean(activity.dueTime),
                        delayLabel: isOverdue ? `Atrasada ${formatDelay(now.getTime() - dueAt.getTime())}` : null
                    };
                }
            }["TodayActivities.useMemo[agendaItems]"]).sort({
                "TodayActivities.useMemo[agendaItems]": (a, b)=>a.dueAt.getTime() - b.dueAt.getTime()
            }["TodayActivities.useMemo[agendaItems]"]).slice(0, 10);
        }
    }["TodayActivities.useMemo[agendaItems]"], [
        filteredActivities,
        now,
        todayIso
    ]);
    const timedItems = agendaItems.filter((item)=>item.hasTime);
    const unscheduledItems = agendaItems.filter((item)=>!item.hasTime);
    const overdueCount = agendaItems.filter((item)=>item.status === "overdue").length;
    const todayCount = agendaItems.filter((item)=>item.dueDate === todayIso).length;
    const setItemRuntime = (activityId, runtime)=>{
        setRuntimeById((prev)=>({
                ...prev,
                [activityId]: runtime
            }));
    };
    const openReschedule = (item)=>{
        const fallbackDate = toDateOnly(addDays(now, 1));
        setEditingId(item.id);
        setRescheduleDraftById((prev)=>({
                ...prev,
                [item.id]: {
                    dueDate: item.dueDate || fallbackDate,
                    dueTime: item.dueTime || "09:00"
                }
            }));
    };
    const handleExecute = (item)=>{
        setExecutedIds((prev)=>{
            const next = new Set(prev);
            next.add(item.id);
            return next;
        });
        setNotice({
            tone: "info",
            message: `${getExecuteLabel(item.type)} iniciado. Ao voltar, conclua ou registre nota.`,
            linkLabel: "Abrir atividade",
            linkPath: `/activities?activityId=${item.id}`
        });
        router.push(getExecutePath(item.id, item.type));
    };
    const handleComplete = (item)=>{
        setItemRuntime(item.id, {
            loading: true
        });
        try {
            completeActivity(item.id, "Concluída pela Agenda de Hoje");
            setNotice({
                tone: "success",
                message: "Atividade concluída com sucesso.",
                linkLabel: "Ver historico",
                linkPath: "/activities?status=completed"
            });
            setExecutedIds((prev)=>{
                const next = new Set(prev);
                next.delete(item.id);
                return next;
            });
            setItemRuntime(item.id, {});
        } catch  {
            setItemRuntime(item.id, {
                error: "Não consegui concluir agora."
            });
        }
    };
    const handleSaveReschedule = (item)=>{
        const draft = rescheduleDraftById[item.id];
        if (!draft?.dueDate) {
            setItemRuntime(item.id, {
                error: "Escolha uma data válida."
            });
            return;
        }
        setItemRuntime(item.id, {
            loading: true
        });
        try {
            postponeActivity(item.id, draft.dueDate, draft.dueTime || undefined);
            setEditingId(null);
            setNotice({
                tone: "success",
                message: `Reagendado para ${formatRescheduleLabel(draft.dueDate, draft.dueTime)}.`
            });
            setExecutedIds((prev)=>{
                const next = new Set(prev);
                next.delete(item.id);
                return next;
            });
            setItemRuntime(item.id, {});
        } catch  {
            setItemRuntime(item.id, {
                error: "Não consegui reagendar agora."
            });
        }
    };
    const handleRequestCancel = (item)=>{
        setConfirmCancelId(item.id);
    };
    const handleConfirmCancel = ()=>{
        const targetId = confirmCancelId;
        setConfirmCancelId(null);
        if (!targetId) return;
        setItemRuntime(targetId, {
            loading: true
        });
        try {
            cancelActivity(targetId);
            setNotice({
                tone: "info",
                message: "Atividade cancelada."
            });
            setItemRuntime(targetId, {});
        } catch  {
            setItemRuntime(targetId, {
                error: "Não consegui cancelar agora."
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoCard"], {
        className: "premium-panel flex min-h-[320px] flex-col gap-4 border-zinc-200/80 bg-white/88 p-5 shadow-[0_18px_32px_-24px_rgba(15,23,42,0.45)] md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-semibold text-zinc-900",
                                children: "Agenda de Hoje"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex h-6 items-center rounded-full border border-red-200 bg-red-50 px-2 text-[11px] font-semibold text-red-700",
                                children: [
                                    "Atrasadas ",
                                    overdueCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex h-6 items-center rounded-full border border-zinc-200 bg-zinc-100 px-2 text-[11px] font-semibold text-zinc-700",
                                children: [
                                    "Hoje ",
                                    todayCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 1326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "xs",
                                variant: "outline",
                                className: "h-7 rounded-full border-zinc-200 px-3 text-xs",
                                onClick: ()=>router.push("/activities?view=agenda"),
                                children: [
                                    "Ver tudo",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1344,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "icon-xs",
                                            variant: "ghost",
                                            className: "h-7 w-7 text-zinc-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1350,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 1349,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1348,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "end",
                                        className: "w-52 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            onClick: ()=>router.push("/activities?status=overdue"),
                                            children: "Ver apenas atrasadas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 1354,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1353,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1347,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 1336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 1325,
                columnNumber: 7
            }, this),
            notice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap items-center gap-2 rounded-lg border px-3 py-2 text-xs", notice.tone === "success" && "border-emerald-200 bg-emerald-50/70 text-emerald-700", notice.tone === "info" && "border-sky-200 bg-sky-50/70 text-sky-700", notice.tone === "error" && "border-red-200 bg-red-50/70 text-red-700"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: notice.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 1369,
                        columnNumber: 11
                    }, this),
                    notice.linkPath && notice.linkLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "font-semibold underline underline-offset-4",
                        onClick: ()=>router.push(notice.linkPath ?? "/activities"),
                        children: notice.linkLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 1371,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 1361,
                columnNumber: 9
            }, this) : null,
            activityLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: Array.from({
                    length: 4
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-zinc-200/80 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-4 w-32"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1386,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "mt-2 h-3 w-[88%]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1387,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "mt-2 h-8 w-40"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1388,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 1385,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 1383,
                columnNumber: 9
            }, this) : null,
            !activityLoading && agendaItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-zinc-200/80 bg-zinc-50/40 p-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "mx-auto h-7 w-7 text-emerald-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 1396,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm font-medium text-zinc-900",
                        children: "Sem atividades pendentes para hoje."
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 1397,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-zinc-500",
                        children: "A agenda está limpa no seu escopo."
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 1398,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "xs",
                        variant: "outline",
                        className: "mt-3 h-7 rounded-full border-zinc-200 px-3 text-xs",
                        onClick: ()=>router.push("/activities?view=agenda"),
                        children: "Abrir agenda completa"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 1399,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 1395,
                columnNumber: 9
            }, this) : null,
            !activityLoading && agendaItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    timedItems.map((item)=>{
                        const Icon = getActivityTypeIcon(item.type);
                        const runtime = runtimeById[item.id];
                        const draft = rescheduleDraftById[item.id];
                        const isEditing = editingId === item.id;
                        const wasExecuted = executedIds.has(item.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-zinc-200/85 bg-white p-3 transition-[border-color,box-shadow,background-color] duration-150", "hover:border-zinc-300 hover:bg-zinc-50/40 hover:shadow-[0_12px_24px_-24px_rgba(15,23,42,0.45)]", item.status === "overdue" && "border-red-200/90"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 md:grid-cols-[96px_minmax(0,1fr)_auto] md:items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl font-semibold tabular-nums text-zinc-900",
                                                children: item.dueTime || "--:--"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1430,
                                                columnNumber: 21
                                            }, this),
                                            item.delayLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-red-600",
                                                children: item.delayLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1431,
                                                columnNumber: 40
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-zinc-500",
                                                children: "No prazo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1431,
                                                columnNumber: 112
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1429,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "mt-0.5 h-4 w-4 text-zinc-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1436,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "truncate text-sm font-semibold text-zinc-900",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1438,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "truncate text-xs text-zinc-600",
                                                                children: item.clientLine
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1439,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-0.5 truncate text-xs text-zinc-500",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1440,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1437,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1435,
                                                columnNumber: 21
                                            }, this),
                                            wasExecuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex flex-wrap items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50/80 p-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-zinc-600",
                                                        children: "Execução iniciada:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1446,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "xs",
                                                        className: "h-7 rounded-md bg-zinc-900 px-2.5 text-xs text-white hover:bg-zinc-800",
                                                        onClick: ()=>handleComplete(item),
                                                        children: "Marcar concluída"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1447,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "xs",
                                                        variant: "outline",
                                                        className: "h-7 rounded-md border-zinc-200 px-2.5 text-xs",
                                                        onClick: ()=>router.push(`/activities?activityId=${item.id}`),
                                                        children: "Registrar nota"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1454,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1445,
                                                columnNumber: 23
                                            }, this) : null,
                                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 grid gap-1.5 rounded-md border border-zinc-200 bg-zinc-50/80 p-2 md:grid-cols-[1fr_110px_auto] md:items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "date",
                                                        className: "h-8",
                                                        value: draft?.dueDate ?? "",
                                                        onChange: (event)=>setRescheduleDraftById((prev)=>({
                                                                    ...prev,
                                                                    [item.id]: {
                                                                        dueDate: event.target.value,
                                                                        dueTime: prev[item.id]?.dueTime ?? item.dueTime ?? "09:00"
                                                                    }
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1467,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "time",
                                                        className: "h-8",
                                                        value: draft?.dueTime ?? "",
                                                        onChange: (event)=>setRescheduleDraftById((prev)=>({
                                                                    ...prev,
                                                                    [item.id]: {
                                                                        dueDate: prev[item.id]?.dueDate ?? item.dueDate,
                                                                        dueTime: event.target.value
                                                                    }
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1481,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "xs",
                                                                className: "h-8 rounded-md bg-zinc-900 px-2.5 text-xs text-white hover:bg-zinc-800",
                                                                onClick: ()=>handleSaveReschedule(item),
                                                                children: "Salvar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1496,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "xs",
                                                                variant: "ghost",
                                                                className: "h-8 rounded-md px-2.5 text-xs",
                                                                onClick: ()=>setEditingId(null),
                                                                children: "Cancelar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1503,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1495,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1466,
                                                columnNumber: 23
                                            }, this) : null,
                                            runtime?.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 rounded-md border border-red-200 bg-red-50/70 px-2.5 py-1.5 text-xs text-red-700",
                                                children: [
                                                    runtime.error,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "ml-2 font-semibold underline underline-offset-4",
                                                        onClick: ()=>setItemRuntime(item.id, {}),
                                                        children: "Tentar novamente"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1518,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1516,
                                                columnNumber: 23
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1434,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-1.5 md:flex-col md:items-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "xs",
                                                className: "h-7 rounded-md bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800",
                                                disabled: runtime?.loading,
                                                onClick: ()=>handleExecute(item),
                                                children: runtime?.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "h-3.5 w-3.5 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                    lineNumber: 1537,
                                                    columnNumber: 25
                                                }, this) : getExecuteLabel(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1530,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "xs",
                                                variant: "outline",
                                                className: "h-7 rounded-md border-zinc-200 px-3 text-xs",
                                                disabled: runtime?.loading,
                                                onClick: ()=>openReschedule(item),
                                                children: "Reagendar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1543,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "icon-xs",
                                                            variant: "ghost",
                                                            className: "h-7 w-7 text-zinc-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1556,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                            lineNumber: 1555,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1554,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                        align: "end",
                                                        className: "w-44 rounded-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>handleComplete(item),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1561,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Concluir"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1560,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>router.push(`/activities?activityId=${item.id}`),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 1565,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Ver detalhes"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1564,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1568,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>handleRequestCancel(item),
                                                                children: "Cancelar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 1569,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 1559,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 1553,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1529,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1428,
                                columnNumber: 17
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                            lineNumber: 1420,
                            columnNumber: 15
                        }, this);
                    }),
                    unscheduledItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-zinc-200/85 bg-zinc-50/30 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                        children: "Sem horário"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1583,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "xs",
                                        variant: "ghost",
                                        className: "h-7 px-2 text-xs text-zinc-600",
                                        onClick: ()=>{
                                            const first = unscheduledItems[0];
                                            if (first) openReschedule(first);
                                        },
                                        children: "Definir horário"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1584,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1582,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: unscheduledItems.map((item)=>{
                                    const Icon = getActivityTypeIcon(item.type);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border border-zinc-200/85 bg-white p-2.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex min-w-0 items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            className: "mt-0.5 h-4 w-4 text-zinc-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                            lineNumber: 1607,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "truncate text-sm font-medium text-zinc-900",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                    lineNumber: 1609,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "truncate text-xs text-zinc-600",
                                                                    children: item.clientLine
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                    lineNumber: 1610,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                            lineNumber: 1608,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                    lineNumber: 1606,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "xs",
                                                    variant: "outline",
                                                    className: "h-7 rounded-md border-zinc-200 px-2.5 text-xs",
                                                    onClick: ()=>openReschedule(item),
                                                    children: "Definir horário"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                    lineNumber: 1613,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 1605,
                                            columnNumber: 23
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 1601,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 1597,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 1581,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 1411,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: confirmCancelId !== null,
                onOpenChange: (open)=>{
                    if (!open) setConfirmCancelId(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                    children: "Cancelar atividade?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                    lineNumber: 1634,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                    children: "A atividade será cancelada permanentemente."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                    lineNumber: 1635,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                            lineNumber: 1633,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    children: "Manter"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                    lineNumber: 1640,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    onClick: handleConfirmCancel,
                                    children: "Cancelar atividade"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                    lineNumber: 1641,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                            lineNumber: 1639,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                    lineNumber: 1632,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 1631,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/execution-section.tsx",
        lineNumber: 1324,
        columnNumber: 5
    }, this);
}
_s1(TodayActivities, "TXALmeuCNtd5iEmOGV5tsMzvZ/8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"]
    ];
});
_c1 = TodayActivities;
var _c, _c1;
__turbopack_context__.k.register(_c, "CriticalAlerts");
__turbopack_context__.k.register(_c1, "TodayActivities");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript) <export * as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Avatar({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Root, {
        "data-slot": "avatar",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Avatar;
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Image, {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c1 = AvatarImage;
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Fallback, {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground flex size-full items-center justify-center rounded-full text-sm group-data-[size=sm]/avatar:text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c2 = AvatarFallback;
function AvatarBadge({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "avatar-badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c3 = AvatarBadge;
function AvatarGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "avatar-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("*:data-[slot=avatar]:ring-background group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c4 = AvatarGroup;
function AvatarGroupCount({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "avatar-group-count",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground ring-background relative flex size-8 shrink-0 items-center justify-center rounded-full text-sm ring-2 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c5 = AvatarGroupCount;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "AvatarImage");
__turbopack_context__.k.register(_c2, "AvatarFallback");
__turbopack_context__.k.register(_c3, "AvatarBadge");
__turbopack_context__.k.register(_c4, "AvatarGroup");
__turbopack_context__.k.register(_c5, "AvatarGroupCount");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/performance-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PipelineHealth",
    ()=>PipelineHealth,
    "TeamPerformance",
    ()=>TeamPerformance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2d$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThermometerSun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thermometer-sun.js [app-client] (ecmascript) <export default as ThermometerSun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/bento-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/activity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-dashboard-filters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/users.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
function PipelineHealth() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { openOpportunities, filteredOpportunities, now } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"])();
    const { healthMetrics, temperature, avgDays } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PipelineHealth.useMemo": ()=>{
            const openOpps = openOpportunities;
            const stalledCount = openOpps.filter({
                "PipelineHealth.useMemo": (o)=>{
                    const daysSinceUpdate = Math.round((now.getTime() - new Date(o.updatedAt).getTime()) / (1000 * 60 * 60 * 24));
                    return daysSinceUpdate > 30;
                }
            }["PipelineHealth.useMemo"]).length;
            const activities = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"].getState().activities;
            const oppsWithoutAction = openOpps.filter({
                "PipelineHealth.useMemo": (o)=>{
                    const oppActivities = activities.filter({
                        "PipelineHealth.useMemo.oppActivities": (a)=>a.opportunityId === o.id && (a.status === "pending" || a.status === "overdue")
                    }["PipelineHealth.useMemo.oppActivities"]);
                    return oppActivities.length === 0;
                }
            }["PipelineHealth.useMemo"]).length;
            const noValueCount = openOpps.filter({
                "PipelineHealth.useMemo": (o)=>!o.value || o.value === 0
            }["PipelineHealth.useMemo"]).length;
            const maxDenominator = Math.max(openOpps.length, 1);
            // Calculate temperature using business rules
            const avgValue = openOpps.length > 0 ? openOpps.reduce({
                "PipelineHealth.useMemo": (sum, o)=>sum + (o.value || 0)
            }["PipelineHealth.useMemo"], 0) / openOpps.length : 10000;
            let hotCount = 0;
            let coldCount = 0;
            for (const opp of openOpps){
                const temp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateTemperature"])(opp, avgValue, now);
                if (temp === "hot") hotCount++;
                else if (temp === "cold") coldCount++;
            }
            const computedTemp = hotCount > coldCount ? "Quente" : coldCount > hotCount ? "Frio" : "Morno";
            const wonOpps = filteredOpportunities.filter({
                "PipelineHealth.useMemo.wonOpps": (o)=>o.status === "won"
            }["PipelineHealth.useMemo.wonOpps"]);
            let totalDays = 0;
            wonOpps.forEach({
                "PipelineHealth.useMemo": (o)=>{
                    const created = new Date(o.createdAt).getTime();
                    const closed = new Date(o.updatedAt).getTime();
                    totalDays += Math.max(1, Math.round((closed - created) / (1000 * 60 * 60 * 24)));
                }
            }["PipelineHealth.useMemo"]);
            const computedAvgDays = wonOpps.length > 0 ? Math.round(totalDays / wonOpps.length) : 0;
            return {
                healthMetrics: [
                    {
                        label: "Estagnados (+30 dias)",
                        value: stalledCount,
                        color: "bg-red-500",
                        filter: "stale",
                        max: maxDenominator
                    },
                    {
                        label: "Sem próxima ação",
                        value: oppsWithoutAction,
                        color: "bg-amber-500",
                        filter: "no_activity",
                        max: maxDenominator
                    },
                    {
                        label: "Valor vazio",
                        value: noValueCount,
                        color: "bg-zinc-400",
                        filter: "stale",
                        max: maxDenominator
                    }
                ],
                temperature: computedTemp,
                avgDays: computedAvgDays
            };
        }
    }["PipelineHealth.useMemo"], [
        openOpportunities,
        filteredOpportunities,
        now
    ]);
    const tempColor = temperature === "Quente" ? "text-emerald-600" : temperature === "Frio" ? "text-red-600" : "text-amber-600";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoCard"], {
        className: "premium-panel flex flex-col gap-4 border-zinc-200/80 bg-white/86 p-5 shadow-[0_16px_28px_-24px_rgba(15,23,42,0.45)] md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "flex items-center gap-2 font-semibold text-zinc-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2d$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThermometerSun$3e$__["ThermometerSun"], {
                            className: "h-4 w-4 text-orange-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/performance-section.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        "Saúde do Pipeline"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/performance-section.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: healthMetrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group cursor-pointer",
                        onClick: ()=>router.push(`/pipes?filter=${metric.filter}`),
                        role: "button",
                        tabIndex: 0,
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") router.push(`/pipes?filter=${metric.filter}`);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1.5 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-zinc-600 transition-colors group-hover:text-zinc-900",
                                        children: metric.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-zinc-900",
                                        children: [
                                            metric.value,
                                            " deals"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-full overflow-hidden rounded-full bg-zinc-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: `${Math.min(metric.value / Math.max(metric.max, 1) * 100, 100)}%`
                                    },
                                    transition: {
                                        duration: 0.24,
                                        ease: "easeOut"
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full rounded-full transition-all group-hover:brightness-110", metric.color)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, metric.label, true, {
                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto border-t border-zinc-100 pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
                                    children: "Temperatura"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-bold", tempColor),
                                    children: temperature
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/performance-section.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 w-px bg-zinc-100"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/performance-section.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
                                    children: "Velocidade"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-bold text-zinc-900",
                                    children: avgDays > 0 ? `${avgDays} dias` : "—"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/performance-section.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/performance-section.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/performance-section.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(PipelineHealth, "1TB0KvvR964LHCe62ydcitEVOpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"]
    ];
});
_c = PipelineHealth;
function TeamPerformance() {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { filteredOpportunities, context, userId, userRole } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"])();
    const isBroadRole = userRole === "master" || userRole === "admin";
    const teamData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TeamPerformance.useMemo[teamData]": ()=>{
            // filteredOpportunities already respects context via useDashboardFilters:
            // - context "me" + role master/admin → returns ALL items
            // - context "me" + role comercial → returns only own items
            // So we only need the extra responsibleId filter for non-admin roles
            const allOpps = filteredOpportunities.filter({
                "TeamPerformance.useMemo[teamData].allOpps": (o)=>o.status === "won" || o.status === "lost"
            }["TeamPerformance.useMemo[teamData].allOpps"]);
            const byUser = {};
            for (const opp of allOpps){
                if (!opp.responsibleId) continue;
                // When context is "me" for non-admin roles, only show own data
                if (context === "me" && !isBroadRole && opp.responsibleId !== userId) continue;
                if (!byUser[opp.responsibleId]) {
                    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].find({
                        "TeamPerformance.useMemo[teamData].user": (u)=>u.id === opp.responsibleId
                    }["TeamPerformance.useMemo[teamData].user"]);
                    byUser[opp.responsibleId] = {
                        name: user?.name ?? opp.responsibleName ?? "—",
                        role: user?.role ?? "comercial",
                        revenue: 0,
                        won: 0,
                        total: 0
                    };
                }
                byUser[opp.responsibleId].total += 1;
                if (opp.status === "won") {
                    byUser[opp.responsibleId].revenue += opp.value || 0;
                    byUser[opp.responsibleId].won += 1;
                }
            }
            return Object.entries(byUser).map({
                "TeamPerformance.useMemo[teamData]": ([id, data])=>{
                    const commission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateProjectedCommission"])(data.revenue);
                    return {
                        id,
                        name: data.name,
                        role: data.role,
                        revenue: data.revenue,
                        commission: commission.commissionValue,
                        conversion: data.total > 0 ? Math.round(data.won / data.total * 100) : 0,
                        won: data.won,
                        isMe: id === userId
                    };
                }
            }["TeamPerformance.useMemo[teamData]"]).sort({
                "TeamPerformance.useMemo[teamData]": (a, b)=>b.revenue - a.revenue
            }["TeamPerformance.useMemo[teamData]"]).slice(0, 3);
        }
    }["TeamPerformance.useMemo[teamData]"], [
        filteredOpportunities,
        context,
        userId,
        isBroadRole
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoCard"], {
        className: "premium-panel flex flex-col gap-4 border-zinc-200/80 bg-white/86 p-5 shadow-[0_16px_28px_-24px_rgba(15,23,42,0.45)] md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "flex items-center gap-2 font-semibold text-zinc-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "h-4 w-4 text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            isBroadRole ? "Performance do time" : "Performance pessoal"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900",
                        onClick: ()=>router.push("/goals"),
                        children: "Ver metas"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            teamData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-6 text-center text-sm text-zinc-500",
                children: "Sem dados de performance ainda."
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                lineNumber: 274,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: teamData.map((member, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex cursor-pointer items-center justify-between rounded-lg p-2 transition-colors hover:bg-zinc-50",
                        onClick: ()=>router.push("/goals"),
                        role: "button",
                        tabIndex: 0,
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") router.push("/goals");
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold", i === 0 ? "bg-amber-100 text-amber-700" : i === 1 ? "bg-zinc-100 text-zinc-600" : "bg-zinc-100 text-zinc-400"),
                                        children: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                        className: "h-8 w-8 border border-zinc-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            className: "bg-zinc-100 text-[10px]",
                                            children: member.name.substring(0, 2)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                            lineNumber: 304,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-zinc-900",
                                                children: member.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                                lineNumber: 309,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-zinc-500",
                                                children: member.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                lineNumber: 290,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-zinc-900",
                                        children: member.isMe || isBroadRole ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(member.revenue) : `${member.won} ganhos`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                        lineNumber: 315,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-end gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-zinc-500",
                                                children: [
                                                    member.conversion,
                                                    "% conv."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                                lineNumber: 321,
                                                columnNumber: 19
                                            }, this),
                                            (member.isMe || isBroadRole) && member.commission > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-medium text-emerald-600",
                                                children: [
                                                    "+",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(member.commission)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                                lineNumber: 325,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                        lineNumber: 320,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                                lineNumber: 314,
                                columnNumber: 15
                            }, this)
                        ]
                    }, member.id, true, {
                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                        lineNumber: 280,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                lineNumber: 278,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "mt-auto flex w-full items-center justify-center gap-1 rounded-lg border border-zinc-100 py-2 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-50",
                onClick: ()=>router.push("/finance"),
                children: [
                    "Ver relatório de comissão ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/performance-section.tsx",
                        lineNumber: 340,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/performance-section.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/performance-section.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
_s1(TeamPerformance, "KKCNhO4yBKqba6gav/0loB2pvWk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"]
    ];
});
_c1 = TeamPerformance;
var _c, _c1;
__turbopack_context__.k.register(_c, "PipelineHealth");
__turbopack_context__.k.register(_c1, "TeamPerformance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(auth)/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$kpi$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/kpi-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$x$2d$ray$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$execution$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/execution-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$performance$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/performance-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$proactive$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-proactive-engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion.ts [app-client] (ecmascript)");
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
function DashboardLoadingSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-8 w-56"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-9 w-36 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 md:grid-cols-4",
                children: Array.from({
                    length: 4
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-24 rounded-xl"
                    }, i, false, {
                        fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-64 rounded-xl"
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-48 rounded-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-48 rounded-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 flex flex-col gap-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-48 rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = DashboardLoadingSkeleton;
function DashboardContent() {
    _s();
    // Activate proactive engine in background — feeds alerts & suggestions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$proactive$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProactiveEngine"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const viewParam = searchParams.get("view");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardContent.useEffect": ()=>{
            const t = setTimeout({
                "DashboardContent.useEffect.t": ()=>setIsLoading(false)
            }["DashboardContent.useEffect.t"], 800);
            return ({
                "DashboardContent.useEffect": ()=>clearTimeout(t)
            })["DashboardContent.useEffect"];
        }
    }["DashboardContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardContent.useEffect": ()=>{
            if (viewParam !== "conversion") return;
            const target = document.getElementById("dashboard-funnel");
            if (!target) return;
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }["DashboardContent.useEffect"], [
        viewParam
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLoadingSkeleton, {}, void 0, false, {
            fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
            lineNumber: 58,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["screenContainer"],
        initial: "hidden",
        animate: "show",
        className: "w-full max-w-full space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sectionEnter"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardHeader"], {}, void 0, false, {
                    fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                id: "dashboard-kpis",
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sectionEnter"],
                className: "scroll-mt-44",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$kpi$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiSection"], {}, void 0, false, {
                    fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                id: "dashboard-funnel",
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sectionEnter"],
                className: "scroll-mt-44",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$x$2d$ray$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunnelXRay"], {}, void 0, false, {
                    fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                id: "dashboard-execution",
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sectionEnter"],
                className: "grid grid-cols-1 gap-6 scroll-mt-44 lg:grid-cols-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$execution$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CriticalAlerts"], {}, void 0, false, {
                                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$execution$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TodayActivities"], {}, void 0, false, {
                                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                        lineNumber: 90,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$performance$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PipelineHealth"], {}, void 0, false, {
                                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$performance$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamPerformance"], {}, void 0, false, {
                                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                        lineNumber: 96,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(DashboardContent, "Ou71/oZm3jIWE/i0CpTtN03Fk/I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$proactive$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProactiveEngine"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c1 = DashboardContent;
function Dashboard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLoadingSkeleton, {}, void 0, false, {
            fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
            lineNumber: 107,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardContent, {}, void 0, false, {
            fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/dashboard/page.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c2 = Dashboard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DashboardLoadingSkeleton");
__turbopack_context__.k.register(_c1, "DashboardContent");
__turbopack_context__.k.register(_c2, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_31bad595._.js.map