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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
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
const contextLabels = {
    me: {
        label: "Eu",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    },
    team: {
        label: "Time",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    }
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
    const { period, setPeriod, context, setContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dashboard$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStore"])();
    const { user, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [retryingIndicators, setRetryingIndicators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { filteredActivities, openOpportunities, now } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"])();
    const firstName = user?.name?.trim().split(" ")[0] ?? "Admin";
    const userRole = user?.role ?? "comercial";
    const isBroadRole = userRole === "master" || userRole === "admin";
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
                lineNumber: 169,
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
            lineNumber: 183,
            columnNumber: 11
        }, this),
        onClick: ()=>router.push("/pipes"),
        tone: "neutral"
    };
    const ContextIcon = contextLabels[context].icon;
    const actions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-wrap items-center justify-end gap-2", isLoading && "pointer-events-none opacity-60"),
        children: [
            isBroadRole && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "premium-shine h-8 gap-1.5 rounded-full border-zinc-200 bg-white/90 px-3 text-sm font-medium hover:bg-zinc-100/80 active:scale-[0.99]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextIcon, {
                                    className: "h-3.5 w-3.5 text-zinc-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/header.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this),
                                contextLabels[context].label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "h-3.5 w-3.5 text-zinc-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/header.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/header.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                        align: "end",
                        className: "w-36 rounded-xl",
                        children: Object.keys(contextLabels).map((value)=>{
                            const Ic = contextLabels[value].icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                onClick: ()=>setContext(value),
                                className: "gap-2",
                                children: [
                                    context === value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-1.5 rounded-full bg-brand"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/header.tsx",
                                        lineNumber: 220,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ic, {
                                        className: "h-3.5 w-3.5 text-zinc-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/header.tsx",
                                        lineNumber: 222,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: context === value ? "font-medium" : "",
                                        children: contextLabels[value].label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/header.tsx",
                                        lineNumber: 224,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, value, true, {
                                fileName: "[project]/src/components/dashboard/header.tsx",
                                lineNumber: 214,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/header.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
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
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                periodLabels[period],
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "h-3.5 w-3.5 text-zinc-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/header.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/header.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 236,
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
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: period === value ? "font-medium" : "",
                                        children: periodLabels[value]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/header.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, value, true, {
                                fileName: "[project]/src/components/dashboard/header.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/header.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/header.tsx",
        lineNumber: 191,
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
                    lineNumber: 275,
                    columnNumber: 11
                }, void 0),
                compactDateText
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/header.tsx",
            lineNumber: 274,
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
                        lineNumber: 285,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-8 w-[128px] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-8 w-[142px] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/header.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this) : null,
            hasIndicatorsError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/90 px-3 py-1.5 text-xs text-red-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/header.tsx",
                        lineNumber: 293,
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
                        lineNumber: 295,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/header.tsx",
                lineNumber: 292,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/header.tsx",
        lineNumber: 268,
        columnNumber: 5
    }, this);
}
_s(DashboardHeader, "ZqTaQAotEdrz4+O7KMMs2qTX53g=", false, function() {
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-[24px] max-w-full items-center rounded-full border px-2.5 text-[11px] font-semibold tracking-tight whitespace-nowrap", chip.tone === "neutral" && "border-zinc-200 bg-zinc-100 text-zinc-700", chip.tone === "info" && "border-blue-200 bg-blue-50 text-blue-700", chip.tone === "warning" && "border-amber-200 bg-amber-50 text-amber-700", chip.tone === "danger" && "border-red-200 bg-red-50 text-red-700", chip.tone === "success" && "border-emerald-200 bg-emerald-50 text-emerald-700"),
        title: chip.label,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "truncate",
            children: chip.label
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
            lineNumber: 354,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
        lineNumber: 343,
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("premium-shine group flex min-h-[178px] w-full flex-col rounded-[24px] border border-zinc-200/80 bg-white/90 p-5 text-left", "shadow-(--shadow-bento-sm) transition-[transform,box-shadow,border-color] duration-150 ease-out", isInteractive && "cursor-pointer hover:-translate-y-[2px] hover:shadow-(--shadow-bento-sm-hover)", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25"),
        children: state === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-4 w-28 rounded-md before:animation-duration-[900ms]"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 409,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-10 w-36 rounded-lg before:animation-duration-[900ms]"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 410,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
            lineNumber: 408,
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
                            lineNumber: 415,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-xs text-red-700",
                            children: "Erro ao carregar métrica."
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 416,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 414,
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
                    lineNumber: 418,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
            lineNumber: 413,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-zinc-100 text-zinc-700",
                                    children: icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-[13px] font-medium text-zinc-600",
                                    children: data.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                    lineNumber: 436,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 432,
                            columnNumber: 13
                        }, this),
                        isInteractive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 441,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 431,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 flex items-baseline gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[46px] leading-none font-bold tracking-tight text-zinc-900",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedKpiValue, {
                                value: data.value,
                                format: data.valueFormat
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                lineNumber: 447,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 446,
                            columnNumber: 13
                        }, this),
                        data.valueSuffix ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "truncate text-[13px] font-semibold text-zinc-500",
                            children: data.valueSuffix
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 450,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 445,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 truncate text-[13px] font-medium text-zinc-500",
                    children: data.subtext
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 454,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-auto pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-h-[24px] items-center gap-2 overflow-hidden",
                            children: [
                                chips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiChipBadge, {
                                        chip: chip
                                    }, chip.id, false, {
                                        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                        lineNumber: 459,
                                        columnNumber: 17
                                    }, this)),
                                chips.length === 0 && !detailAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-[12px] text-zinc-500",
                                    title: data.line4Text || "Sem alertas hoje",
                                    children: data.line4Text || "Sem alertas hoje"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                    lineNumber: 463,
                                    columnNumber: 17
                                }, this) : null,
                                detailAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: (event)=>{
                                        event.stopPropagation();
                                        onNavigate(detailAction.targetPath);
                                    },
                                    className: "inline-flex h-[24px] shrink-0 items-center text-[12px] font-semibold text-brand underline underline-offset-4 hover:text-brand/80",
                                    children: detailAction.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                                    lineNumber: 469,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 457,
                            columnNumber: 13
                        }, this),
                        data.microText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-[11px] text-zinc-500",
                            children: data.microText
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                            lineNumber: 483,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 456,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
        lineNumber: 392,
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
        className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                custom: 0,
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemReveal"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KPITemplateCard, {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                        lineNumber: 528,
                        columnNumber: 17
                    }, void 0),
                    data: kpis.pipeline,
                    onNavigate: (path)=>router.push(path),
                    onRetry: ()=>retryCard("pipeline")
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 527,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                custom: 1,
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemReveal"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KPITemplateCard, {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                        lineNumber: 537,
                        columnNumber: 17
                    }, void 0),
                    data: kpis.conversion,
                    onNavigate: (path)=>router.push(path),
                    onRetry: ()=>retryCard("conversion")
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 536,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                lineNumber: 535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                custom: 2,
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemReveal"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KPITemplateCard, {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                        lineNumber: 546,
                        columnNumber: 17
                    }, void 0),
                    data: kpis.activities,
                    onNavigate: (path)=>router.push(path),
                    onRetry: ()=>retryCard("activities")
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 545,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                lineNumber: 544,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                custom: 3,
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemReveal"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KPITemplateCard, {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                        lineNumber: 555,
                        columnNumber: 17
                    }, void 0),
                    data: kpis.sla,
                    onNavigate: (path)=>router.push(path),
                    onRetry: ()=>retryCard("sla")
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                    lineNumber: 554,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/kpi-section.tsx",
                lineNumber: 553,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/kpi-section.tsx",
        lineNumber: 520,
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
"[project]/src/components/dashboard/funnel-x-ray/summary-mini-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SummaryMiniCard",
    ()=>SummaryMiniCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function SummaryMiniCard({ icon, label, value, helper, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        type: "button",
        whileTap: {
            scale: 0.99
        },
        transition: {
            duration: 0.09,
            ease: "easeOut"
        },
        className: "rounded-xl border border-zinc-200/80 bg-white/80 px-3 py-2.5 text-left transition-colors duration-[120ms] ease-out hover:bg-zinc-100/60",
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 flex items-center gap-1.5 text-zinc-500",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/summary-mini-card.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] font-semibold uppercase tracking-[0.07em] text-zinc-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/summary-mini-card.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm font-bold text-zinc-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/summary-mini-card.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-0.5 text-[10px] text-zinc-500",
                children: helper
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/summary-mini-card.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/funnel-x-ray/summary-mini-card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = SummaryMiniCard;
var _c;
__turbopack_context__.k.register(_c, "SummaryMiniCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunnelXRaySkeleton",
    ()=>FunnelXRaySkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function FunnelXRaySkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-4 p-5 lg:grid-cols-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 lg:col-span-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-stretch gap-2 md:flex md:flex-wrap xl:flex-nowrap",
                        children: Array.from({
                            length: 5
                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-[86px] flex-[1_1_148px] rounded-xl before:[animation-duration:900ms]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                                        lineNumber: 13,
                                        columnNumber: 15
                                    }, this),
                                    index < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-3 min-w-[46px] flex-1 rounded-full before:[animation-duration:900ms] md:max-w-[64px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                                        lineNumber: 15,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `sk-flow-${index}`, true, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 md:hidden",
                        children: Array.from({
                            length: 5
                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-[84px] rounded-xl before:[animation-duration:900ms]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    index < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-6 w-2 rounded-full before:[animation-duration:900ms]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                                            lineNumber: 27,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `sk-flow-mobile-${index}`, true, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-2 sm:grid-cols-3",
                        children: Array.from({
                            length: 3
                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-20 rounded-xl before:[animation-duration:900ms]"
                            }, `sk-summary-${index}`, false, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-32 rounded-xl before:[animation-duration:900ms]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 lg:col-span-5",
                children: Array.from({
                    length: 3
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-32 rounded-xl before:[animation-duration:900ms]"
                    }, `sk-diagnostic-${index}`, false, {
                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = FunnelXRaySkeleton;
var _c;
__turbopack_context__.k.register(_c, "FunnelXRaySkeleton");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/bento-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/activity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-dashboard-filters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/funnel-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/funnel-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$flow$2d$steps$2d$connected$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/flow-steps-connected.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$summary$2d$mini$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/summary-mini-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$x$2d$ray$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray-skeleton.tsx [app-client] (ecmascript)");
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
function FunnelXRay({ state = "ready" }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const addActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "FunnelXRay.useActivityStore[addActivity]": (s)=>s.addActivity
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
    const insights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[insights]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildInsightsFromData"])(stages, filteredOpportunities, now)
    }["FunnelXRay.useMemo[insights]"], [
        stages,
        filteredOpportunities,
        now
    ]);
    const { riskValue, averageSpeedDays } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo": ()=>{
            const fiveDaysAgo = new Date(now.getTime() - STALLED_OPPORTUNITY_DAYS * DAY_MS);
            const stalledOpps = openOpportunities.filter({
                "FunnelXRay.useMemo.stalledOpps": (opportunity)=>{
                    return new Date(opportunity.updatedAt) < fiveDaysAgo;
                }
            }["FunnelXRay.useMemo.stalledOpps"]);
            const computedRiskValue = stalledOpps.reduce({
                "FunnelXRay.useMemo.computedRiskValue": (sum, opportunity)=>sum + (opportunity.value || 0)
            }["FunnelXRay.useMemo.computedRiskValue"], 0);
            const wonOpps = filteredOpportunities.filter({
                "FunnelXRay.useMemo.wonOpps": (opportunity)=>opportunity.status === "won"
            }["FunnelXRay.useMemo.wonOpps"]);
            let totalDays = 0;
            wonOpps.forEach({
                "FunnelXRay.useMemo": (opportunity)=>{
                    const created = new Date(opportunity.createdAt).getTime();
                    const closed = new Date(opportunity.updatedAt).getTime();
                    totalDays += Math.max(1, Math.round((closed - created) / DAY_MS));
                }
            }["FunnelXRay.useMemo"]);
            const computedAvgDays = wonOpps.length > 0 ? Math.round(totalDays / wonOpps.length) : 0;
            return {
                riskValue: computedRiskValue,
                averageSpeedDays: computedAvgDays
            };
        }
    }["FunnelXRay.useMemo"], [
        filteredOpportunities,
        openOpportunities,
        now
    ]);
    const transitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[transitions]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTransitions"])(stages)
    }["FunnelXRay.useMemo[transitions]"], [
        stages
    ]);
    const hasEnoughData = stages.length >= 2 && stages.some((stage)=>stage.volume > 0);
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
    const criticalStageId = bottleneck?.to.id ?? stages[0]?.id ?? null;
    const criticalStage = stages.find((stage)=>stage.id === criticalStageId) ?? null;
    const selectedStageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[selectedStageId]": ()=>parseDashboardStageParam(searchParams.get("stage"))
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
    const scopeStage = selectedStage ?? criticalStage;
    const scopeInsight = scopeStage ? insights[scopeStage.id] : null;
    const insightScopeKey = selectedStage?.id ?? "all";
    const highlightText = scopeInsight?.highlight ?? (selectedStage ? "Sem destaque para a etapa selecionada" : "Sem destaque para o funil");
    const recommendationText = scopeInsight?.recommendation ?? (selectedStage ? "Sem recomendação disponível para a etapa selecionada." : "Sem recomendação disponível para o funil.");
    const bottleneckDrop = bottleneck ? Math.max(0, 100 - bottleneck.conversion) : 0;
    const bottleneckStalledCount = bottleneck?.to.stalledCount ?? 0;
    const bottleneckStalledDays = bottleneck?.to.stalledDays ?? 0;
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
    const highlightConversion = bestStage ? bestStage.conversion : 0;
    const highlightStageName = bestStage?.from.label ?? "—";
    const riskDealEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FunnelXRay.useMemo[riskDealEntries]": ()=>{
            const stalledThreshold = now.getTime() - STALLED_OPPORTUNITY_DAYS * DAY_MS;
            const selectedPipelineStage = selectedStage ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_TO_PIPELINE"][selectedStage.id] : null;
            const stalledInScope = openOpportunities.filter({
                "FunnelXRay.useMemo[riskDealEntries].stalledInScope": (opportunity)=>{
                    if (selectedPipelineStage && opportunity.stage !== selectedPipelineStage) {
                        return false;
                    }
                    return new Date(opportunity.updatedAt).getTime() < stalledThreshold;
                }
            }["FunnelXRay.useMemo[riskDealEntries].stalledInScope"]).sort({
                "FunnelXRay.useMemo[riskDealEntries].stalledInScope": (first, second)=>new Date(first.updatedAt).getTime() - new Date(second.updatedAt).getTime()
            }["FunnelXRay.useMemo[riskDealEntries].stalledInScope"]).slice(0, 3).map({
                "FunnelXRay.useMemo[riskDealEntries].stalledInScope": (opportunity)=>({
                        id: opportunity.id,
                        label: opportunity.title || opportunity.clientName,
                        stalledDays: Math.max(1, Math.round((now.getTime() - new Date(opportunity.updatedAt).getTime()) / DAY_MS))
                    })
            }["FunnelXRay.useMemo[riskDealEntries].stalledInScope"]);
            if (stalledInScope.length > 0) {
                return stalledInScope;
            }
            if (selectedStage) {
                return (insights[selectedStage.id]?.riskDeals ?? []).slice(0, 3).map({
                    "FunnelXRay.useMemo[riskDealEntries]": (deal, index)=>({
                            id: `${selectedStage.id}-${index}-${deal}`,
                            label: deal,
                            stalledDays: selectedStage.stalledDays
                        })
                }["FunnelXRay.useMemo[riskDealEntries]"]);
            }
            if (criticalStage) {
                return (insights[criticalStage.id]?.riskDeals ?? []).slice(0, 3).map({
                    "FunnelXRay.useMemo[riskDealEntries]": (deal, index)=>({
                            id: `${criticalStage.id}-${index}-${deal}`,
                            label: deal,
                            stalledDays: criticalStage.stalledDays
                        })
                }["FunnelXRay.useMemo[riskDealEntries]"]);
            }
            return [];
        }
    }["FunnelXRay.useMemo[riskDealEntries]"], [
        openOpportunities,
        now,
        selectedStage,
        insights,
        criticalStage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FunnelXRay.useEffect": ()=>{
            setViewState(state);
        }
    }["FunnelXRay.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FunnelXRay.useEffect": ()=>{
            if (actionState !== "success") return;
            const timer = window.setTimeout({
                "FunnelXRay.useEffect.timer": ()=>setActionState("idle")
            }["FunnelXRay.useEffect.timer"], 2400);
            return ({
                "FunnelXRay.useEffect": ()=>window.clearTimeout(timer)
            })["FunnelXRay.useEffect"];
        }
    }["FunnelXRay.useEffect"], [
        actionState
    ]);
    function setStageSelection(nextStageId) {
        const currentStage = selectedStage?.id ?? null;
        if (currentStage === nextStageId) return;
        const params = new URLSearchParams(searchParams.toString());
        if (nextStageId) {
            params.set("stage", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_TO_PIPELINE"][nextStageId]);
        } else {
            params.delete("stage");
        }
        const serialized = params.toString();
        const nextUrl = serialized ? `${pathname}?${serialized}` : pathname;
        router.replace(nextUrl, {
            scroll: false
        });
    }
    function openPipeline({ stageId, filter } = {}) {
        const params = new URLSearchParams();
        if (stageId) {
            params.set("stage", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_TO_PIPELINE"][stageId]);
        }
        if (filter) {
            params.set("filter", filter);
        }
        const serialized = params.toString();
        router.push(serialized ? `/pipes?${serialized}` : "/pipes");
    }
    function handleRecommendedAction() {
        if (actionState === "loading" || !scopeStage) return;
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
        if (count === 0 && openOpportunities.some((opportunity)=>opportunity.stage === pipelineStage)) {
            const firstOpportunity = openOpportunities.find((opportunity)=>opportunity.stage === pipelineStage);
            if (firstOpportunity) {
                addActivity({
                    title: `Follow-up: ${firstOpportunity.title || firstOpportunity.clientName}`,
                    description: `Follow-up gerado automaticamente para etapa ${scopeStage.label}`,
                    type: "call",
                    status: "pending",
                    dueDate: tomorrowStr,
                    dueTime: "10:00",
                    opportunityId: firstOpportunity.id,
                    clientId: firstOpportunity.clientId || "",
                    responsibleId: userId || firstOpportunity.responsibleId,
                    responsibleName: firstOpportunity.responsibleName
                });
                count = 1;
            }
        }
        setCreatedCount(count);
        setActionState(count > 0 ? "success" : "error");
    }
    function handleRetry() {
        setViewState("loading");
        window.setTimeout(()=>{
            setViewState("ready");
        }, 220);
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
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-xs text-zinc-500",
                                    children: "Fluxo de conversão, gargalos e ação recomendada para hoje"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 327,
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
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 326,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            viewState === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-5 mt-4 rounded-xl border border-red-200/80 bg-red-50/70 px-3 py-2.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex items-center gap-1.5 text-xs font-medium text-red-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this),
                                "Não foi possível carregar o Raio X agora."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleRetry,
                            className: "text-xs font-semibold text-red-700 underline underline-offset-4 transition-colors hover:text-red-800",
                            children: "Tentar novamente"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 352,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                lineNumber: 351,
                columnNumber: 9
            }, this),
            viewState === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$x$2d$ray$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunnelXRaySkeleton"], {}, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                lineNumber: 368,
                columnNumber: 35
            }, this),
            viewState === "ready" && !hasEnoughData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-dashed border-zinc-300 bg-zinc-50/70 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-zinc-900",
                            children: "Sem dados suficientes para o Raio X"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 373,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-zinc-500",
                            children: "Cadastre oportunidades para gerar conversão e gargalos acionáveis."
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 376,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            className: "mt-3 h-8 rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800",
                            onClick: ()=>openPipeline(),
                            children: "Ver pipeline"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                            lineNumber: 379,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                    lineNumber: 372,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                lineNumber: 371,
                columnNumber: 9
            }, this),
            viewState === "ready" && hasEnoughData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full space-y-4",
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
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                lineNumber: 398,
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
                                                lineNumber: 412,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 410,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setStageSelection(null),
                                        className: "text-xs font-semibold text-brand underline underline-offset-4",
                                        children: "Limpar seleção"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 414,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                lineNumber: 409,
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
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-2 sm:grid-cols-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$summary$2d$mini$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SummaryMiniCard"], {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                                                        className: "h-3.5 w-3.5 text-brand"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 27
                                                    }, void 0),
                                                    label: "Velocidade média",
                                                    value: averageSpeedDays > 0 ? `${averageSpeedDays} dias` : "—",
                                                    helper: "Da entrada ao fechamento",
                                                    onClick: ()=>openPipeline()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$summary$2d$mini$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SummaryMiniCard"], {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        className: "h-3.5 w-3.5 text-amber-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 27
                                                    }, void 0),
                                                    label: "Valor em risco",
                                                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$funnel$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(riskValue),
                                                    helper: "Deals sem retorno > 5 dias",
                                                    onClick: ()=>openPipeline({
                                                            stageId: selectedStage?.id,
                                                            filter: "risk"
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$funnel$2d$x$2d$ray$2f$summary$2d$mini$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SummaryMiniCard"], {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                        className: "h-3.5 w-3.5 text-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 27
                                                    }, void 0),
                                                    label: "Etapa crítica hoje",
                                                    value: bottleneck?.to.label ?? "—",
                                                    helper: `${bottleneckDrop}% de queda`,
                                                    onClick: ()=>openPipeline({
                                                            stageId: bottleneck?.to.id
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-zinc-200/80 bg-white/80 p-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                            children: "Oportunidades em risco"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>selectedStage ? openPipeline({
                                                                    stageId: selectedStage.id,
                                                                    filter: "risk"
                                                                }) : openPipeline({
                                                                    filter: "risk"
                                                                }),
                                                            className: "text-[11px] font-semibold text-brand underline-offset-4 transition-colors hover:text-brand-strong hover:underline",
                                                            children: selectedStage ? "Ver etapa" : "Ver risco"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1.5",
                                                    children: riskDealEntries.length > 0 ? riskDealEntries.map((deal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between rounded-lg border border-zinc-200/70 bg-zinc-50/70 px-2.5 py-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate text-xs font-medium text-zinc-700",
                                                                    children: deal.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-3 text-[10px] text-zinc-500",
                                                                    children: [
                                                                        "+",
                                                                        deal.stalledDays,
                                                                        " dias"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, deal.id, true, {
                                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 25
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "py-2 text-center text-xs text-zinc-400",
                                                        children: "Nenhuma oportunidade em risco nesta visão"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                            lineNumber: 462,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, insightScopeKey, true, {
                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                    lineNumber: 425,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 lg:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col rounded-xl border border-red-200/75 bg-red-50/60 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex items-start justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-red-700",
                                                children: "TOP GARGALO"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                lineNumber: 508,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                className: "h-4 w-4 text-red-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                lineNumber: 511,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 507,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[1rem] font-semibold text-zinc-900",
                                        children: [
                                            "Queda de ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-600",
                                                children: [
                                                    bottleneckDrop,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                lineNumber: 514,
                                                columnNumber: 26
                                            }, this),
                                            " em",
                                            " ",
                                            bottleneck?.to.label ?? "—"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-zinc-600",
                                        children: bottleneckStalledCount > 0 ? `${bottleneckStalledCount} oportunidades paradas há +${bottleneckStalledDays} dias.` : "Sem oportunidades paradas nesta etapa."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 517,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>openPipeline({
                                                stageId: bottleneck?.to.id,
                                                filter: "risk"
                                            }),
                                        className: "mt-2 inline-flex items-center gap-1 text-xs font-semibold text-red-700 underline-offset-4 transition-colors hover:text-red-800 hover:underline",
                                        children: [
                                            "Ver lista",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                lineNumber: 533,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 522,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                lineNumber: 506,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col rounded-xl border border-emerald-200/75 bg-emerald-50/65 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex items-start justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-700",
                                                children: "DESTAQUE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                lineNumber: 539,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "h-4 w-4 text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                lineNumber: 542,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 538,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[1rem] font-semibold text-zinc-900",
                                        children: highlightConversion > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Melhor conversão:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-emerald-600",
                                                    children: [
                                                        highlightConversion,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 21
                                                }, this),
                                                " em",
                                                " ",
                                                highlightStageName
                                            ]
                                        }, void 0, true) : "Sem dados de conversão suficientes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 544,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-zinc-600",
                                        children: highlightText
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>openPipeline({
                                                stageId: bestStage?.from.id
                                            }),
                                        className: "mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 underline-offset-4 transition-colors hover:text-emerald-800 hover:underline",
                                        children: [
                                            "Ver motivo",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                lineNumber: 562,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 556,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                lineNumber: 537,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col rounded-xl border border-zinc-200/80 bg-white/85 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold text-zinc-900",
                                                children: "Ação recomendada"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                lineNumber: 568,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "h-4 w-4 text-brand"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                lineNumber: 571,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 567,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                            className: "text-xs leading-relaxed text-zinc-600",
                                            children: recommendationText
                                        }, insightScopeKey, false, {
                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                            lineNumber: 575,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 574,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: handleRecommendedAction,
                                                disabled: actionState === "loading",
                                                className: "h-9 w-full rounded-full bg-zinc-900 text-xs font-semibold text-white hover:bg-zinc-800",
                                                children: actionState === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "mr-1.5 h-3.5 w-3.5 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                            lineNumber: 595,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Criando atividades..."
                                                    ]
                                                }, void 0, true) : "Cobrar feedbacks"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                lineNumber: 588,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>router.push("/intelligence"),
                                                className: "w-full text-center text-xs font-semibold text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-800 hover:underline",
                                                children: "Gerar mensagens via IA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                lineNumber: 602,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 587,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: actionState === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                duration: 0.09
                                            },
                                            className: "mt-2 inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700",
                                            children: [
                                                createdCount,
                                                " atividade",
                                                createdCount !== 1 ? "s" : "",
                                                " criada",
                                                createdCount !== 1 ? "s" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                            lineNumber: 613,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 611,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: actionState === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                duration: 0.12
                                            },
                                            className: "mt-2 rounded-lg border border-red-200 bg-red-50 px-2.5 py-2 text-xs text-red-700",
                                            children: [
                                                "Nenhuma oportunidade parada encontrada nesta etapa.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>openPipeline({
                                                            stageId: scopeStage?.id
                                                        }),
                                                    className: "ml-1.5 font-semibold underline underline-offset-4",
                                                    children: "Ver pipeline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                            lineNumber: 627,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                        lineNumber: 625,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                                lineNumber: 566,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                        lineNumber: 505,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
                lineNumber: 391,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/funnel-x-ray/funnel-x-ray.tsx",
        lineNumber: 320,
        columnNumber: 5
    }, this);
}
_s(FunnelXRay, "5ZHH+02XbnfomfFOFR79n3O8k+M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"]
    ];
});
_c = FunnelXRay;
var _c;
__turbopack_context__.k.register(_c, "FunnelXRay");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/bento-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/activity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/opportunity-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$execution$2d$panel$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-execution-panel-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-dashboard-filters.ts [app-client] (ecmascript)");
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
function CriticalAlerts() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { riskAlerts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$execution$2d$panel$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExecutionPanelData"])();
    const { filteredActivities, openOpportunities, now, userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"])();
    const updateOpportunity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"])({
        "CriticalAlerts.useOpportunityStore[updateOpportunity]": (s)=>s.updateOpportunity
    }["CriticalAlerts.useOpportunityStore[updateOpportunity]"]);
    const addActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "CriticalAlerts.useActivityStore[addActivity]": (s)=>s.addActivity
    }["CriticalAlerts.useActivityStore[addActivity]"]);
    const completeActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "CriticalAlerts.useActivityStore[completeActivity]": (s)=>s.completeActivity
    }["CriticalAlerts.useActivityStore[completeActivity]"]);
    const dismissedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CriticalAlerts.useMemo[dismissedIds]": ()=>new Set()
    }["CriticalAlerts.useMemo[dismissedIds]"], []);
    const [resolvedIds, setResolvedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // Map proactive engine alerts to display alerts
    const alerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CriticalAlerts.useMemo[alerts]": ()=>{
            const result = [];
            // Add proactive engine risk alerts
            for (const alert of riskAlerts){
                result.push({
                    id: alert.id,
                    severity: alert.severity === "critical" ? "critical" : "warning",
                    title: alert.title,
                    consequence: alert.description,
                    type: alert.type,
                    linkedEntityId: alert.linkedEntityId
                });
            }
            // Add overdue activities alert if not already covered
            const overdueCount = filteredActivities.filter({
                "CriticalAlerts.useMemo[alerts]": (a)=>a.effectiveStatus === "overdue"
            }["CriticalAlerts.useMemo[alerts]"]).length;
            if (overdueCount > 0 && !result.some({
                "CriticalAlerts.useMemo[alerts]": (a)=>a.type === "sla-breach"
            }["CriticalAlerts.useMemo[alerts]"])) {
                result.push({
                    id: "overdue-activities",
                    severity: "info",
                    title: `${overdueCount} atividade${overdueCount > 1 ? "s" : ""} atrasada${overdueCount > 1 ? "s" : ""}`,
                    consequence: "Impacto no pipeline da semana",
                    type: "overdue-activities"
                });
            }
            return result;
        }
    }["CriticalAlerts.useMemo[alerts]"], [
        riskAlerts,
        filteredActivities
    ]);
    const visibleAlerts = alerts.filter((a)=>!dismissedIds.has(a.id) && !resolvedIds.has(a.id));
    function resolveAlert(alert) {
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split("T")[0];
        switch(alert.type){
            case "sla-breach":
            case "stale":
                {
                    // Reset the opportunity's updatedAt + create a follow-up activity
                    if (alert.linkedEntityId) {
                        updateOpportunity(alert.linkedEntityId, {});
                        const opp = openOpportunities.find((o)=>o.id === alert.linkedEntityId);
                        if (opp) {
                            addActivity({
                                title: `Follow-up urgente: ${opp.title || opp.clientName}`,
                                description: `Gerado ao resolver alerta: ${alert.title}`,
                                type: "call",
                                status: "pending",
                                dueDate: tomorrowStr,
                                dueTime: "09:00",
                                opportunityId: opp.id,
                                clientId: opp.clientId || "",
                                responsibleId: userId || opp.responsibleId,
                                responsibleName: opp.responsibleName
                            });
                        }
                    }
                    break;
                }
            case "overdue-activities":
                {
                    // Complete the first overdue activity
                    const firstOverdue = filteredActivities.find((a)=>a.effectiveStatus === "overdue");
                    if (firstOverdue) {
                        completeActivity(firstOverdue.id, "Resolvido via dashboard");
                    }
                    break;
                }
            case "contract-expiring":
                {
                    // Create a renewal task
                    if (alert.linkedEntityId) {
                        addActivity({
                            title: `Renovação de contrato`,
                            description: `Gerado ao resolver alerta: ${alert.title}`,
                            type: "meeting",
                            status: "pending",
                            dueDate: tomorrowStr,
                            dueTime: "14:00",
                            opportunityId: "",
                            clientId: alert.linkedEntityId,
                            responsibleId: userId,
                            responsibleName: ""
                        });
                    }
                    break;
                }
            case "goal-risk":
                {
                    router.push("/goals");
                    break;
                }
            case "health-drop":
                {
                    // Create follow-up activity for client health
                    if (alert.linkedEntityId) {
                        addActivity({
                            title: `Acompanhamento de saúde do cliente`,
                            description: `Gerado ao resolver alerta: ${alert.title}`,
                            type: "call",
                            status: "pending",
                            dueDate: tomorrowStr,
                            dueTime: "10:00",
                            opportunityId: "",
                            clientId: alert.linkedEntityId,
                            responsibleId: userId,
                            responsibleName: ""
                        });
                    }
                    break;
                }
        }
        setResolvedIds((prev)=>new Set(prev).add(alert.id));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoCard"], {
        className: "premium-panel flex flex-col gap-4 border-zinc-200/80 bg-white/86 p-5 shadow-[0_16px_28px_-24px_rgba(15,23,42,0.45)] md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-zinc-900",
                        children: "Alertas Críticos"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-600",
                        children: visibleAlerts.length
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: [
                        visibleAlerts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "flex flex-col items-center justify-center py-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "mb-2 h-8 w-8 text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-zinc-900",
                                    children: "Tudo limpo!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-zinc-500",
                                    children: "Sem alertas pendentes."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this),
                        visibleAlerts.map((alert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layout: true,
                                initial: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    height: 0,
                                    marginTop: 0,
                                    marginBottom: 0
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex flex-col gap-2 rounded-xl border bg-zinc-50/70 p-3 transition-all duration-140 ease-out hover:-translate-y-[1px] hover:bg-white hover:shadow-[0_14px_24px_-20px_rgba(15,23,42,0.45)]", alert.severity === "critical" ? "border-red-200/85" : alert.severity === "warning" ? "border-amber-200/85" : "border-blue-200/85"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                alert.severity === "critical" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "mt-0.5 h-4 w-4 text-red-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 21
                                                }, this) : alert.severity === "warning" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "mt-0.5 h-4 w-4 text-amber-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                    className: "mt-0.5 h-4 w-4 text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-zinc-900",
                                                            children: alert.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-xs text-zinc-500",
                                                            children: [
                                                                "Impacto: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: alert.consequence
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 32
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 flex justify-end opacity-0 transition-opacity group-hover:opacity-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "ghost",
                                            className: "h-6 text-xs hover:bg-white hover:text-emerald-600",
                                            onClick: ()=>resolveAlert(alert),
                                            children: [
                                                "Resolver ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "ml-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, alert.id, true, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/execution-section.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s(CriticalAlerts, "2/48j75AZjQ6T+bF7nbHVyBDmJQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$execution$2d$panel$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExecutionPanelData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpportunityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"]
    ];
});
_c = CriticalAlerts;
function mapActivityType(type) {
    if (type === "call" || type === "email" || type === "meeting") return type;
    return "meeting";
}
function TodayActivities() {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { filteredActivities } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"])();
    const completeStoreActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityStore"])({
        "TodayActivities.useActivityStore[completeStoreActivity]": (s)=>s.completeActivity
    }["TodayActivities.useActivityStore[completeStoreActivity]"]);
    const pendingActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TodayActivities.useMemo[pendingActivities]": ()=>{
            return filteredActivities.filter({
                "TodayActivities.useMemo[pendingActivities]": (a)=>a.effectiveStatus === "pending" || a.effectiveStatus === "overdue"
            }["TodayActivities.useMemo[pendingActivities]"]).slice(0, 5).map({
                "TodayActivities.useMemo[pendingActivities]": (a)=>({
                        id: a.id,
                        time: a.dueTime || "—",
                        title: a.title,
                        details: a.description || a.opportunityId || "—",
                        type: mapActivityType(a.type),
                        status: a.effectiveStatus === "overdue" ? "overdue" : "pending"
                    })
            }["TodayActivities.useMemo[pendingActivities]"]);
        }
    }["TodayActivities.useMemo[pendingActivities]"], [
        filteredActivities
    ]);
    const completeActivityHandler = (id)=>{
        completeStoreActivity(id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoCard"], {
        className: "premium-panel flex min-h-[300px] flex-col gap-4 border-zinc-200/80 bg-white/86 p-5 shadow-[0_16px_28px_-24px_rgba(15,23,42,0.45)] md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-zinc-900",
                        children: "Agenda de Hoje"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "h-6 w-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                        className: "h-4 w-4 text-zinc-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "w-48 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        onClick: ()=>router.push("/activities"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "mr-2 h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 314,
                                                columnNumber: 15
                                            }, this),
                                            "Ver todas atividades"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        onClick: ()=>router.push("/activities?status=overdue"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "mr-2 h-3.5 w-3.5 text-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, this),
                                            "Ver atrasadas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative space-y-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-2 left-[3.25rem] top-2 w-px bg-zinc-100"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: [
                            pendingActivities.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-8 text-center text-sm text-zinc-500",
                                children: "Agenda livre! Bom descanso."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this),
                            pendingActivities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        height: 0,
                                        marginBottom: 0
                                    },
                                    className: "group relative flex items-center gap-4 py-3 first:pt-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 text-right font-mono text-xs font-semibold text-zinc-400",
                                            children: activity.time
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-10 flex h-3 w-3 items-center justify-center rounded-full ring-4 ring-white", activity.status === "overdue" ? "bg-red-500" : "bg-zinc-300")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 rounded-lg border border-transparent p-2 transition-all group-hover:border-zinc-100 group-hover:bg-zinc-50/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium", activity.status === "overdue" ? "text-red-600" : "text-zinc-900"),
                                                                children: activity.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 text-xs text-zinc-500",
                                                                children: [
                                                                    activity.type === "meeting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        className: "h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 371,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    activity.type === "call" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                        className: "h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 373,
                                                                        columnNumber: 52
                                                                    }, this),
                                                                    activity.type === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                        className: "h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 374,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: activity.details
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                        lineNumber: 375,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 21
                                                            }, this),
                                                            activity.status === "overdue" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 inline-block rounded-sm bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-600",
                                                                children: "ATRASADO"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "icon",
                                                        variant: "ghost",
                                                        className: "h-6 w-6 text-zinc-400 opacity-0 hover:bg-emerald-50 hover:text-emerald-600 group-hover:opacity-100",
                                                        onClick: ()=>completeActivityHandler(activity.id),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, activity.id, true, {
                                    fileName: "[project]/src/components/dashboard/execution-section.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/execution-section.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/execution-section.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/execution-section.tsx",
        lineNumber: 303,
        columnNumber: 5
    }, this);
}
_s1(TodayActivities, "RzbaIztj6adJDGxhr7n36qzsVts=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboard$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardFilters"],
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
                        filter: "stalled",
                        max: maxDenominator
                    },
                    {
                        label: "Sem próxima ação",
                        value: oppsWithoutAction,
                        color: "bg-amber-500",
                        filter: "no-action",
                        max: maxDenominator
                    },
                    {
                        label: "Valor vazio",
                        value: noValueCount,
                        color: "bg-zinc-400",
                        filter: "no-value",
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
                        onClick: ()=>router.push(`/pipes?health=${metric.filter}`),
                        role: "button",
                        tabIndex: 0,
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") router.push(`/pipes?health=${metric.filter}`);
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
                            "Performance pessoal"
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

//# sourceMappingURL=src_6634c0e0._.js.map