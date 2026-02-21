(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicFieldRenderer",
    ()=>DynamicFieldRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
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
function DynamicFieldRenderer({ field, value, onChange, disabled = false, error, saveState = "idle" }) {
    const handleChange = (val)=>{
        onChange(field.id, val);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1.5 flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        className: "font-heading text-[10px] font-bold uppercase tracking-wider text-zinc-400",
                        children: [
                            field.label,
                            " ",
                            field.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                                lineNumber: 46,
                                columnNumber: 44
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    saveState === "saving" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1 text-[10px] text-zinc-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-3 w-3 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            "Salvando..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    saveState === "saved" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1 text-[10px] text-emerald-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            "Salvo"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    saveState === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-red-600",
                        children: "Falha ao salvar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1.5",
                children: renderFieldInput(field, value, handleChange, disabled, error)
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[10px] text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 69,
                columnNumber: 17
            }, this),
            !error && field.helperText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[9px] text-zinc-400",
                children: field.helperText
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            !error && field.description && !field.helperText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[9px] text-zinc-400",
                children: field.description
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = DynamicFieldRenderer;
function renderFieldInput(field, value, onChange, disabled, error) {
    const errorClasses = error ? "border-red-300 focus:ring-red-200 focus-visible:ring-red-200" : "";
    const baseInputClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 rounded-lg border-zinc-200 font-body text-xs focus:ring-brand/10", errorClasses);
    switch(field.type){
        case "select":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                value: typeof value === "string" ? value : "",
                onValueChange: (val)=>onChange(val),
                disabled: disabled,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 w-full rounded-lg border-zinc-200 font-body text-xs focus:ring-brand/10", errorClasses),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                            placeholder: "Selecione..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                        children: field.options?.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                value: opt.value,
                                className: "text-xs",
                                children: opt.label
                            }, opt.value, false, {
                                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this);
        case "multiselect":
            {
                const selectedValues = Array.isArray(value) ? value : [];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1",
                            children: selectedValues.map((val)=>{
                                const opt = field.options?.find((o)=>o.value === val);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    className: "gap-1 rounded-full px-2 py-0.5 text-[10px]",
                                    children: [
                                        opt?.label || val,
                                        !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onChange(selectedValues.filter((v)=>v !== val)),
                                            className: "ml-0.5 hover:text-red-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-2.5 w-2.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                                                lineNumber: 134,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                                            lineNumber: 129,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, val, true, {
                                    fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: "",
                            onValueChange: (val)=>{
                                if (!selectedValues.includes(val)) {
                                    onChange([
                                        ...selectedValues,
                                        val
                                    ]);
                                }
                            },
                            disabled: disabled,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 w-full rounded-lg border-zinc-200 font-body text-xs focus:ring-brand/10", errorClasses),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                        placeholder: "Adicionar..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: field.options?.filter((opt)=>!selectedValues.includes(opt.value)).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: opt.value,
                                            className: "text-xs",
                                            children: opt.label
                                        }, opt.value, false, {
                                            fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this);
            }
        case "textarea":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                value: typeof value === "string" ? value : "",
                onChange: (e)=>onChange(e.target.value),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-h-[86px] resize-none rounded-lg border border-zinc-200 px-3 py-2 text-xs placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-brand/10", errorClasses),
                placeholder: field.placeholder,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this);
        case "boolean":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                        checked: !!value,
                        onCheckedChange: (checked)=>onChange(checked),
                        disabled: disabled
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-zinc-600",
                        children: value ? "Sim" : "Não"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this);
        case "currency":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400",
                        children: "R$"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "text",
                        inputMode: "decimal",
                        value: value != null ? String(value) : "",
                        onChange: (e)=>{
                            const raw = e.target.value.replace(/[^\d.,]/g, "");
                            onChange(raw);
                        },
                        placeholder: field.placeholder || "0,00",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseInputClasses, "pl-9"),
                        disabled: disabled
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, this);
        case "percentage":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "number",
                        inputMode: "decimal",
                        value: value != null ? String(value) : "",
                        onChange: (e)=>onChange(e.target.value ? Number(e.target.value) : null),
                        placeholder: field.placeholder || "0",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseInputClasses, "pr-8"),
                        disabled: disabled,
                        min: field.validationRules?.min,
                        max: field.validationRules?.max
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400",
                        children: "%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this);
        case "url":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "url",
                value: typeof value === "string" ? value : "",
                onChange: (e)=>onChange(e.target.value),
                placeholder: field.placeholder || "https://...",
                className: baseInputClasses,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this);
        case "email":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "email",
                value: typeof value === "string" ? value : "",
                onChange: (e)=>onChange(e.target.value),
                placeholder: field.placeholder || "email@exemplo.com",
                className: baseInputClasses,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this);
        case "phone":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "tel",
                value: typeof value === "string" ? value : "",
                onChange: (e)=>onChange(e.target.value),
                placeholder: field.placeholder || "(00) 00000-0000",
                className: baseInputClasses,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 256,
                columnNumber: 9
            }, this);
        case "date":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "date",
                value: typeof value === "string" ? value : "",
                onChange: (e)=>onChange(e.target.value),
                className: baseInputClasses,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this);
        case "time":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "time",
                value: typeof value === "string" ? value : "",
                onChange: (e)=>onChange(e.target.value),
                className: baseInputClasses,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 279,
                columnNumber: 9
            }, this);
        case "datetime":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "datetime-local",
                value: typeof value === "string" ? value : "",
                onChange: (e)=>onChange(e.target.value),
                className: baseInputClasses,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 290,
                columnNumber: 9
            }, this);
        case "integer":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "number",
                inputMode: "numeric",
                step: "1",
                value: value != null ? String(value) : "",
                onChange: (e)=>onChange(e.target.value ? parseInt(e.target.value, 10) : null),
                placeholder: field.placeholder,
                className: baseInputClasses,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 301,
                columnNumber: 9
            }, this);
        case "number":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "number",
                inputMode: "decimal",
                value: value != null ? String(value) : "",
                onChange: (e)=>onChange(e.target.value ? Number(e.target.value) : null),
                placeholder: field.placeholder,
                className: baseInputClasses,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 315,
                columnNumber: 9
            }, this);
        case "file":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    type: "file",
                    onChange: ()=>onChange("arquivo_anexado"),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseInputClasses, "cursor-pointer file:mr-2 file:rounded-md file:border-0 file:bg-zinc-100 file:px-2 file:py-1 file:text-[10px] file:font-medium file:text-zinc-700"),
                    disabled: disabled
                }, void 0, false, {
                    fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                    lineNumber: 329,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 328,
                columnNumber: 9
            }, this);
        case "user":
        case "contact":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "text",
                value: typeof value === "string" ? value : "",
                onChange: (e)=>onChange(e.target.value),
                placeholder: field.placeholder || (field.type === "user" ? "Nome do usuário" : "Nome do contato"),
                className: baseInputClasses,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 341,
                columnNumber: 9
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "text",
                value: typeof value === "string" ? value : value != null ? String(value) : "",
                onChange: (e)=>onChange(e.target.value),
                placeholder: field.placeholder,
                className: baseInputClasses,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx",
                lineNumber: 353,
                columnNumber: 9
            }, this);
    }
}
var _c;
__turbopack_context__.k.register(_c, "DynamicFieldRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/drawers/stage-fields/new-field-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewFieldModal",
    ()=>NewFieldModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/command.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-start.js [app-client] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/percent.js [app-client] (ecmascript) <export default as Percent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/toggle-left.js [app-client] (ecmascript) <export default as ToggleLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-stage-fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drawers$2f$stage$2d$fields$2f$dynamic$2d$field$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
const typesRequiringOptions = [
    "select",
    "multiselect"
];
const fieldTypeIcons = {
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"],
    textarea: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"],
    number: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"],
    integer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"],
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
    percentage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"],
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"],
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    datetime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    time: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
    select: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"],
    multiselect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"],
    boolean: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleLeft$3e$__["ToggleLeft"],
    user: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    contact: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    file: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
};
function NewFieldModal({ open, onOpenChange, stageId, stageName, onSave }) {
    _s();
    const [label, setLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("text");
    const [openTypePopover, setOpenTypePopover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [required, setRequired] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [placeholder, setPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [options, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newOptionLabel, setNewOptionLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [validationRules, setValidationRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const needsOptions = typesRequiringOptions.includes(type);
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewFieldModal.useMemo[key]": ()=>{
            return label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
        }
    }["NewFieldModal.useMemo[key]"], [
        label
    ]);
    const previewField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewFieldModal.useMemo[previewField]": ()=>({
                id: "preview",
                stageId,
                key: key || "preview",
                label: label || "Nome do campo",
                type,
                required,
                order: 0,
                description,
                placeholder,
                options: needsOptions ? options : undefined,
                validationRules: Object.keys(validationRules).length > 0 ? validationRules : undefined,
                isActive: true
            })
    }["NewFieldModal.useMemo[previewField]"], [
        label,
        type,
        required,
        description,
        placeholder,
        options,
        validationRules,
        stageId,
        key,
        needsOptions
    ]);
    const handleAddOption = ()=>{
        const trimmed = newOptionLabel.trim();
        if (!trimmed) return;
        const value = trimmed.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "_");
        if (options.some((o)=>o.value === value)) return;
        setOptions([
            ...options,
            {
                label: trimmed,
                value
            }
        ]);
        setNewOptionLabel("");
    };
    const handleRemoveOption = (value)=>{
        setOptions(options.filter((o)=>o.value !== value));
    };
    const validate = ()=>{
        const nextErrors = {};
        if (!label.trim()) nextErrors.label = "Nome do campo é obrigatório.";
        if (!type) nextErrors.type = "Tipo é obrigatório.";
        if (needsOptions && options.length === 0) {
            nextErrors.options = "Adicione pelo menos uma opção.";
        }
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };
    const handleSave = ()=>{
        if (!validate()) return;
        setIsSaving(true);
        // Simulate async save
        setTimeout(()=>{
            onSave({
                key,
                label: label.trim(),
                type,
                required,
                description: description.trim() || undefined,
                placeholder: placeholder.trim() || undefined,
                helperText: description.trim() || undefined,
                options: needsOptions ? options : undefined
            });
            resetForm();
            setIsSaving(false);
        }, 500);
    };
    const resetForm = ()=>{
        setLabel("");
        setType("text");
        setRequired(false);
        setDescription("");
        setPlaceholder("");
        setOptions([]);
        setNewOptionLabel("");
        setValidationRules({});
        setErrors({});
    };
    const handleClose = (open)=>{
        if (!open) resetForm();
        onOpenChange(open);
    };
    const TypeIcon = fieldTypeIcons[type] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-h-[90vh] w-full sm:max-w-4xl flex-col gap-0 p-0 overflow-hidden bg-white border-zinc-200/50 shadow-2xl sm:rounded-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-zinc-100 bg-white/50 px-6 py-4 backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-10 w-10 items-center justify-center rounded-xl bg-brand/5 border border-brand/10 text-brand shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                            className: "text-base font-semibold text-zinc-900",
                                            children: "Novo Campo Personalizado"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-zinc-500",
                                            children: [
                                                "Adicionando em ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-zinc-700",
                                                    children: stageName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-8 w-8 text-zinc-400 hover:text-zinc-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-10 max-w-2xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-semibold text-zinc-900",
                                                        children: "Informações Básicas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-zinc-500 mt-0.5",
                                                        children: "Defina o nome principal e o formato de dados que este campo irá receber no card."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "text-sm font-semibold text-zinc-900 flex items-center gap-1.5",
                                                                children: [
                                                                    "Nome do Campo ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500 text-xs",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 248,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 247,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                value: label,
                                                                onChange: (e)=>{
                                                                    setLabel(e.target.value);
                                                                    if (errors.label) setErrors((prev)=>{
                                                                        const n = {
                                                                            ...prev
                                                                        };
                                                                        delete n.label;
                                                                        return n;
                                                                    });
                                                                },
                                                                placeholder: "Ex: Data de follow-up",
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-10 bg-white transition-all hover:bg-zinc-50 focus:bg-white text-sm shadow-sm", errors.label ? "border-red-300 focus-visible:ring-red-100" : "border-zinc-200 focus-visible:ring-brand/15")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 21
                                                            }, this),
                                                            errors.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "flex items-center gap-1.5 text-[11px] font-medium text-red-600 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    errors.label
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 23
                                                            }, this) : key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-zinc-400 font-mono mt-1",
                                                                children: [
                                                                    "ID interno: ",
                                                                    key
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 30
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "text-sm font-semibold text-zinc-900 flex items-center gap-1.5",
                                                                children: [
                                                                    "Tipo de Dado ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500 text-xs",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 274,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                                                open: openTypePopover,
                                                                onOpenChange: setOpenTypePopover,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            role: "combobox",
                                                                            "aria-expanded": openTypePopover,
                                                                            className: "w-full justify-between h-auto py-2.5 px-3.5 bg-white border-zinc-200 focus:ring-brand/15 transition-all hover:bg-zinc-50 hover:border-zinc-300 font-normal shadow-sm group",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-3 text-left",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-50 border border-zinc-200 shadow-xs text-zinc-600 group-hover:text-brand transition-colors",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypeIcon, {
                                                                                                className: "h-4 w-4"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                lineNumber: 286,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                            lineNumber: 285,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex flex-col",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-sm font-semibold text-zinc-900",
                                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeLabels"][type]
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                    lineNumber: 289,
                                                                                                    columnNumber: 31
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-xs text-zinc-500 truncate",
                                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeDescriptions"][type]
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                    lineNumber: 290,
                                                                                                    columnNumber: 31
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                            lineNumber: 288,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                    lineNumber: 284,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                                                                                    className: "ml-2 h-4 w-4 shrink-0 opacity-50 text-zinc-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                    lineNumber: 293,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 277,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                                        className: "w-(--radix-popover-trigger-width) p-0 shadow-xl border-zinc-200/80 rounded-xl",
                                                                        align: "start",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
                                                                            className: "max-h-[380px]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandInput"], {
                                                                                    placeholder: "Buscar tipo de campo...",
                                                                                    className: "h-10 text-sm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                    lineNumber: 298,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandList"], {
                                                                                    className: "max-h-[330px] scrollbar-thin scrollbar-thumb-zinc-200",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                                                                                            className: "py-6 text-center text-sm text-zinc-500",
                                                                                            children: "Nenhum tipo encontrado."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                            lineNumber: 300,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                                                            heading: "Texto e Números",
                                                                                            className: "px-1.5 pt-1.5 pb-0",
                                                                                            children: [
                                                                                                "text",
                                                                                                "textarea",
                                                                                                "number",
                                                                                                "currency",
                                                                                                "percentage",
                                                                                                "integer"
                                                                                            ].map((t)=>{
                                                                                                const Icon = fieldTypeIcons[t];
                                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                                                                    value: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeLabels"][t]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeDescriptions"][t]}`,
                                                                                                    onSelect: ()=>{
                                                                                                        setType(t);
                                                                                                        setOptions([]);
                                                                                                        setValidationRules({});
                                                                                                        setOpenTypePopover(false);
                                                                                                    },
                                                                                                    className: "flex items-start gap-3 rounded-md px-2 py-2 cursor-pointer mb-1 data-[selected=true]:bg-zinc-100/80",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-zinc-200/60 shadow-xs text-zinc-500 mt-0.5",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                                                className: "h-4 w-4"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                                lineNumber: 318,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                            lineNumber: 317,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "flex flex-col flex-1",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "text-sm font-semibold text-zinc-900",
                                                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeLabels"][t]
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                                    lineNumber: 321,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "text-xs text-zinc-500 leading-tight",
                                                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeDescriptions"][t]
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                                    lineNumber: 322,
                                                                                                                    columnNumber: 39
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                            lineNumber: 320,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        type === t && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                            className: "ml-auto h-4 w-4 text-brand mt-2"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                            lineNumber: 325,
                                                                                                            columnNumber: 39
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, t, true, {
                                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                    lineNumber: 306,
                                                                                                    columnNumber: 35
                                                                                                }, this);
                                                                                            })
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                            lineNumber: 302,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                                                            heading: "Seleção",
                                                                                            className: "px-1.5 py-0",
                                                                                            children: [
                                                                                                "select",
                                                                                                "multiselect",
                                                                                                "boolean",
                                                                                                "date",
                                                                                                "datetime"
                                                                                            ].map((t)=>{
                                                                                                const Icon = fieldTypeIcons[t];
                                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                                                                    value: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeLabels"][t]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeDescriptions"][t]}`,
                                                                                                    onSelect: ()=>{
                                                                                                        setType(t);
                                                                                                        setOptions([]);
                                                                                                        setValidationRules({});
                                                                                                        setOpenTypePopover(false);
                                                                                                    },
                                                                                                    className: "flex items-start gap-3 rounded-md px-2 py-2 cursor-pointer mb-1 data-[selected=true]:bg-zinc-100/80",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-zinc-200/60 shadow-xs text-zinc-500 mt-0.5",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                                                className: "h-4 w-4"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                                lineNumber: 348,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                            lineNumber: 347,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "flex flex-col flex-1",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "text-sm font-semibold text-zinc-900",
                                                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeLabels"][t]
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                                    lineNumber: 351,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "text-xs text-zinc-500 leading-tight",
                                                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeDescriptions"][t]
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                                    lineNumber: 352,
                                                                                                                    columnNumber: 39
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                            lineNumber: 350,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        type === t && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                            className: "ml-auto h-4 w-4 text-brand mt-2"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                            lineNumber: 355,
                                                                                                            columnNumber: 39
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, t, true, {
                                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                    lineNumber: 336,
                                                                                                    columnNumber: 35
                                                                                                }, this);
                                                                                            })
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                            lineNumber: 332,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                                                            heading: "Contato e Especial",
                                                                                            className: "px-1.5 pb-1.5 pt-0",
                                                                                            children: [
                                                                                                "email",
                                                                                                "phone",
                                                                                                "url",
                                                                                                "file"
                                                                                            ].map((t)=>{
                                                                                                const Icon = fieldTypeIcons[t];
                                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                                                                    value: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeLabels"][t]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeDescriptions"][t]}`,
                                                                                                    onSelect: ()=>{
                                                                                                        setType(t);
                                                                                                        setOptions([]);
                                                                                                        setValidationRules({});
                                                                                                        setOpenTypePopover(false);
                                                                                                    },
                                                                                                    className: "flex items-start gap-3 rounded-md px-2 py-2 cursor-pointer mb-1 data-[selected=true]:bg-zinc-100/80",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-zinc-200/60 shadow-xs text-zinc-500 mt-0.5",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                                                className: "h-4 w-4"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                                lineNumber: 378,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                            lineNumber: 377,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "flex flex-col flex-1",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "text-sm font-semibold text-zinc-900",
                                                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeLabels"][t]
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                                    lineNumber: 381,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "text-xs text-zinc-500 leading-tight",
                                                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldTypeDescriptions"][t]
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                                    lineNumber: 382,
                                                                                                                    columnNumber: 39
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                            lineNumber: 380,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        type === t && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                            className: "ml-auto h-4 w-4 text-brand mt-2"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                            lineNumber: 385,
                                                                                                            columnNumber: 39
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, t, true, {
                                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                                    lineNumber: 366,
                                                                                                    columnNumber: 35
                                                                                                }, this);
                                                                                            })
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                            lineNumber: 362,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                    lineNumber: 299,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                            lineNumber: 297,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 296,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-0.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                className: "text-sm font-semibold text-zinc-900 cursor-pointer",
                                                                                htmlFor: "required-switch",
                                                                                children: "Campo Obrigatório"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                lineNumber: 402,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: "secondary",
                                                                                className: "h-5 px-1.5 text-[10px] font-semibold text-brand bg-brand/5 border-brand/20 uppercase tracking-wider hidden sm:inline-flex",
                                                                                children: "Required"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                lineNumber: 403,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 401,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-zinc-500",
                                                                        children: "O card não avançará para a próxima etapa se este campo estiver vazio."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 405,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 400,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                                id: "required-switch",
                                                                checked: required,
                                                                onCheckedChange: setRequired,
                                                                className: "data-[state=checked]:bg-brand"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                        className: "border-t border-zinc-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-semibold text-zinc-900",
                                                        children: "Aparência e Configuração"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-zinc-500 mt-0.5",
                                                        children: "Ajuste como o campo será exibido e preenchido pela equipe."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    needsOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4 pb-6 border-b border-zinc-100/80",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "text-sm font-semibold text-zinc-900 flex items-center gap-1.5",
                                                                children: [
                                                                    "Opções de seleção ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500 text-xs",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 426,
                                                                        columnNumber: 43
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        value: newOptionLabel,
                                                                        onChange: (e)=>setNewOptionLabel(e.target.value),
                                                                        placeholder: "Digite uma opção e pressione Enter",
                                                                        className: "h-10 flex-1 bg-white border-zinc-200 focus:ring-brand/15 text-sm shadow-sm transition-all",
                                                                        onKeyDown: (e)=>{
                                                                            if (e.key === "Enter") {
                                                                                e.preventDefault();
                                                                                handleAddOption();
                                                                            }
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 430,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        type: "button",
                                                                        size: "sm",
                                                                        variant: "secondary",
                                                                        onClick: handleAddOption,
                                                                        disabled: !newOptionLabel.trim(),
                                                                        className: "h-10 px-4 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 shadow-sm transition-all",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "mr-1.5 h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                lineNumber: 445,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            " Adicionar"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 437,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-h-[60px] rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-3 transition-colors",
                                                                children: options.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-2",
                                                                    children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: "gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold border-zinc-200/80 bg-white text-zinc-700 shadow-sm hover:border-zinc-300 transition-colors",
                                                                            children: [
                                                                                opt.label,
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>handleRemoveOption(opt.value),
                                                                                    className: "ml-1 rounded-full p-0.5 text-zinc-400 hover:bg-red-50 hover:text-red-600 transition-colors",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                        lineNumber: 464,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                                    lineNumber: 459,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, opt.value, true, {
                                                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                            lineNumber: 453,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex h-full items-center justify-center py-4 text-sm font-medium text-zinc-400",
                                                                    children: "Nenhuma opção adicionada ainda."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 23
                                                            }, this),
                                                            errors.options && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] font-medium text-red-600 mt-1",
                                                                children: errors.options
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 42
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid gap-6 sm:grid-cols-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        className: "text-sm font-semibold text-zinc-900",
                                                                        children: "Placeholder"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 481,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        value: placeholder,
                                                                        onChange: (e)=>setPlaceholder(e.target.value),
                                                                        placeholder: "Texto de fundo vazio",
                                                                        className: "h-10 bg-white border-zinc-200 focus:ring-brand/15 text-sm shadow-sm transition-all"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 482,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        className: "text-sm font-semibold text-zinc-900",
                                                                        children: "Texto de Ajuda"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 490,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        value: description,
                                                                        onChange: (e)=>setDescription(e.target.value),
                                                                        placeholder: "Dica exibida abaixo do campo",
                                                                        className: "h-10 bg-white border-zinc-200 focus:ring-brand/15 text-sm shadow-sm transition-all"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                        lineNumber: 491,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-80 border-l border-zinc-100 bg-zinc-50/50 hidden md:flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-b border-zinc-100 bg-white/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-zinc-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                lineNumber: 508,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold uppercase tracking-wider",
                                                children: "Pré-visualização"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                lineNumber: 509,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                        lineNumber: 507,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 p-6 flex flex-col items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full space-y-2 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-zinc-400 font-medium",
                                                        children: "Como aparecerá no card"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drawers$2f$stage$2d$fields$2f$dynamic$2d$field$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicFieldRenderer"], {
                                                    field: previewField,
                                                    value: null,
                                                    onChange: ()=>{},
                                                    disabled: false
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                            lineNumber: 513,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-center text-[10px] text-zinc-400 max-w-[200px]",
                                            children: "Esta é uma representação visual de como o campo será exibido para sua equipe."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                    lineNumber: 512,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-t border-zinc-100 bg-white px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            type: "button",
                            onClick: ()=>handleClose(false),
                            className: "text-zinc-500 hover:text-zinc-900",
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                            lineNumber: 533,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleSave,
                            disabled: isSaving,
                            className: "bg-zinc-900 text-white hover:bg-black shadow-lg shadow-zinc-900/10 min-w-[140px]",
                            children: [
                                isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                    lineNumber: 547,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "mr-2 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this),
                                "Criar campo"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                            lineNumber: 541,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
                    lineNumber: 532,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
            lineNumber: 209,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/drawers/stage-fields/new-field-modal.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_s(NewFieldModal, "W0+Xq8uzxHRr4O5V4o5OnrHW+Ag=");
_c = NewFieldModal;
var _c;
__turbopack_context__.k.register(_c, "NewFieldModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StageFieldsPanel",
    ()=>StageFieldsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-list.js [app-client] (ecmascript) <export default as LayoutList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/command.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$stage$2d$fields$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/stage-fields-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drawers$2f$stage$2d$fields$2f$dynamic$2d$field$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drawers$2f$stage$2d$fields$2f$new$2d$field$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/drawers/stage-fields/new-field-modal.tsx [app-client] (ecmascript)");
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
// ===== InlineStatusBanner (local) =====
function InlineStatusBanner({ banner, onDismiss }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InlineStatusBanner.useEffect": ()=>{
            if (banner.variant === "success" || banner.variant === "info") {
                const timer = setTimeout(onDismiss, 3000);
                return ({
                    "InlineStatusBanner.useEffect": ()=>clearTimeout(timer)
                })["InlineStatusBanner.useEffect"];
            }
        }
    }["InlineStatusBanner.useEffect"], [
        banner,
        onDismiss
    ]);
    const variantStyles = {
        success: "bg-status-success/10 text-status-success border-status-success/20",
        error: "bg-status-danger/10 text-status-danger border-status-danger/20",
        info: "bg-brand/10 text-brand border-brand/20",
        warning: "bg-status-warning/10 text-status-warning border-status-warning/20"
    };
    const icons = {
        success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "h-3.5 w-3.5 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
            lineNumber: 84,
            columnNumber: 14
        }, this),
        error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
            className: "h-3.5 w-3.5 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
            lineNumber: 85,
            columnNumber: 12
        }, this),
        info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
            className: "h-3.5 w-3.5 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, this),
        warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
            className: "h-3.5 w-3.5 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
            lineNumber: 87,
            columnNumber: 14
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-2 rounded-[10px] border px-3 py-2 font-body text-xs font-medium animate-in fade-in slide-in-from-top-1 duration-200 ${variantStyles[banner.variant]}`,
        role: banner.variant === "error" ? "alert" : "status",
        "aria-live": banner.variant === "error" ? "assertive" : "polite",
        children: [
            icons[banner.variant],
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-1",
                children: banner.message
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onDismiss,
                className: "ml-auto shrink-0 opacity-70 hover:opacity-100",
                "aria-label": "Fechar",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(InlineStatusBanner, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = InlineStatusBanner;
// ===== PremiumCard (local lightweight version) =====
function PanelCard({ title, description, headerAction, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 8
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.25,
            delay: 0.1
        },
        className: "rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-heading text-sm font-semibold text-zinc-900",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-zinc-500",
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    headerAction
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c1 = PanelCard;
function StageFieldsPanel({ opportunityId, currentStage, stages, initialValues, isLocked, onStageChange, canCreateFields = false, advanceBlockedReason = null }) {
    _s1();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$stage$2d$fields$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStageFieldsStore"])();
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$stage$2d$fields$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewStageFields"])();
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$stage$2d$fields$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewStageValues"])();
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$stage$2d$fields$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequiredProgress"])();
    // Initialize store when opportunity opens/changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StageFieldsPanel.useEffect": ()=>{
            store.initForOpportunity(opportunityId, currentStage, initialValues);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StageFieldsPanel.useEffect"], [
        opportunityId,
        currentStage
    ]);
    // Sync when external stage changes (e.g. from stage bar)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StageFieldsPanel.useEffect": ()=>{
            if (store.opportunityStage !== currentStage) {
                store.initForOpportunity(opportunityId, currentStage, initialValues);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StageFieldsPanel.useEffect"], [
        currentStage
    ]);
    const handleFieldChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StageFieldsPanel.useCallback[handleFieldChange]": (fieldId, value)=>{
            if (isLocked || store.isChangingStage) return;
            store.updateFieldValue(fieldId, value);
        }
    }["StageFieldsPanel.useCallback[handleFieldChange]"], [
        isLocked,
        store
    ]);
    const handleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StageFieldsPanel.useCallback[handleSave]": ()=>{
            if (isLocked) return;
            store.saveAllFields();
        }
    }["StageFieldsPanel.useCallback[handleSave]"], [
        isLocked,
        store
    ]);
    const handleCreateField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StageFieldsPanel.useCallback[handleCreateField]": (fieldData)=>{
            if (!store.opportunityStage) return;
            store.addFieldDefinition(store.opportunityStage, fieldData);
        }
    }["StageFieldsPanel.useCallback[handleCreateField]"], [
        store
    ]);
    const currentStageName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StageFieldsPanel.useMemo[currentStageName]": ()=>{
            return stages.find({
                "StageFieldsPanel.useMemo[currentStageName]": (s)=>s.id === store.opportunityStage
            }["StageFieldsPanel.useMemo[currentStageName]"])?.label ?? "Etapa";
        }
    }["StageFieldsPanel.useMemo[currentStageName]"], [
        stages,
        store.opportunityStage
    ]);
    // Split fields: required first, then optional
    const requiredFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StageFieldsPanel.useMemo[requiredFields]": ()=>fields.filter({
                "StageFieldsPanel.useMemo[requiredFields]": (f)=>f.required
            }["StageFieldsPanel.useMemo[requiredFields]"])
    }["StageFieldsPanel.useMemo[requiredFields]"], [
        fields
    ]);
    const optionalFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StageFieldsPanel.useMemo[optionalFields]": ()=>fields.filter({
                "StageFieldsPanel.useMemo[optionalFields]": (f)=>!f.required
            }["StageFieldsPanel.useMemo[optionalFields]"])
    }["StageFieldsPanel.useMemo[optionalFields]"], [
        fields
    ]);
    const isEditable = !isLocked && !store.isChangingStage;
    const hasAdvanceBlockedReason = Boolean(advanceBlockedReason && advanceBlockedReason.trim().length > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelCard, {
                    title: "Campos da etapa",
                    description: "Preencha para destravar avanço e fechamento.",
                    headerAction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "outline",
                        className: "rounded-full border-zinc-200 bg-zinc-50 text-[11px] text-zinc-700",
                        children: currentStageName
                    }, void 0, false, {
                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, void 0),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group relative w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -top-2 left-2 z-10 bg-white px-1 text-[10px] font-semibold tracking-wide text-zinc-500",
                                                        children: "Etapa atual"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            role: "combobox",
                                                            className: "h-11 w-full justify-between rounded-xl border-zinc-200 bg-white px-3 font-normal text-zinc-900 shadow-sm transition-all hover:border-brand/40 hover:bg-zinc-50 focus:border-brand/40 focus:ring-2 focus:ring-brand/10 disabled:opacity-70",
                                                            disabled: store.isChangingStage,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        store.isChangingStage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                            className: "h-4 w-4 animate-spin text-brand"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                            lineNumber: 241,
                                                                            columnNumber: 27
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                                className: "h-3 w-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                                lineNumber: 244,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                            lineNumber: 243,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-semibold",
                                                                            children: store.isChangingStage ? "Alterando etapa..." : currentStageName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                            lineNumber: 247,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "h-4 w-4 opacity-50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                className: "w-[280px] p-0 rounded-2xl shadow-xl border-zinc-100",
                                                align: "start",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandList"], {
                                                        className: "max-h-[300px] p-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
                                                                children: "Alterar etapa da oportunidade"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                                children: stages.map((s, index)=>{
                                                                    const isCurrent = s.id === store.opportunityStage;
                                                                    const currentIndex = stages.findIndex((st)=>st.id === store.opportunityStage);
                                                                    const isPassed = index < currentIndex;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                                        value: s.label,
                                                                        onSelect: ()=>{
                                                                            if (isCurrent) return;
                                                                            store.updateOpportunityStage(s.id, onStageChange);
                                                                        },
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs transition-colors cursor-pointer", isCurrent ? "bg-zinc-50" : "hover:bg-zinc-50"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-2 w-2 shrink-0 rounded-full", isPassed ? "bg-brand/40" : isCurrent ? "bg-brand ring-2 ring-brand/20" : "bg-zinc-200")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                                lineNumber: 281,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 truncate font-medium", isCurrent ? "text-zinc-900" : "text-zinc-600"),
                                                                                children: s.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                                lineNumber: 288,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: "secondary",
                                                                                className: "ml-auto h-5 rounded-full bg-brand/10 px-1.5 text-[9px] font-semibold text-brand",
                                                                                children: "Atual"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                                lineNumber: 296,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, s.id, true, {
                                                                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                        lineNumber: 268,
                                                                        columnNumber: 29
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                canCreateFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    className: "h-11 rounded-xl bg-zinc-900 px-4 text-sm font-medium text-white shadow-sm transition-all hover:bg-black hover:shadow-md",
                                    onClick: ()=>store.setNewFieldModalOpen(true),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "mr-1.5 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this),
                                        "Novo campo"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: store.banner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineStatusBanner, {
                                    banner: store.banner,
                                    onDismiss: ()=>store.setBanner(null)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 333,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                lineNumber: 327,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this),
                        progress.missingFields.length > 0 && !store.isChangingStage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-amber-200 bg-amber-50 px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-semibold text-amber-700",
                                    children: "Pendências para avanço"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-1 space-y-1 text-[11px] text-amber-700",
                                    children: progress.missingFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• ",
                                                field.label
                                            ]
                                        }, field.id, true, {
                                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                            lineNumber: 349,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this),
                        hasAdvanceBlockedReason && !store.isChangingStage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-amber-200 bg-amber-50 px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-semibold text-amber-700",
                                    children: "Avanço bloqueado"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[11px] text-amber-700",
                                    children: advanceBlockedReason
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                            lineNumber: 356,
                            columnNumber: 13
                        }, this),
                        fields.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                requiredFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drawers$2f$stage$2d$fields$2f$dynamic$2d$field$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicFieldRenderer"], {
                                        field: field,
                                        value: values[field.id],
                                        onChange: handleFieldChange,
                                        disabled: !isEditable,
                                        error: store.fieldErrors[field.id],
                                        saveState: store.fieldSaveStates[field.id] || "idle"
                                    }, field.id, false, {
                                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                        lineNumber: 367,
                                        columnNumber: 17
                                    }, this)),
                                optionalFields.length > 0 && requiredFields.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px flex-1 bg-zinc-100"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                            lineNumber: 381,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-medium uppercase tracking-wider text-zinc-400",
                                            children: "Opcionais"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                            lineNumber: 382,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px flex-1 bg-zinc-100"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                            lineNumber: 385,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 380,
                                    columnNumber: 17
                                }, this),
                                optionalFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drawers$2f$stage$2d$fields$2f$dynamic$2d$field$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicFieldRenderer"], {
                                        field: field,
                                        value: values[field.id],
                                        onChange: handleFieldChange,
                                        disabled: !isEditable,
                                        error: store.fieldErrors[field.id],
                                        saveState: store.fieldSaveStates[field.id] || "idle"
                                    }, field.id, false, {
                                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                        lineNumber: 390,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                            lineNumber: 364,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 py-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"], {
                                    className: "mb-2 h-8 w-8 text-zinc-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 403,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-heading text-xs font-medium text-zinc-400",
                                    children: "Esta etapa não possui campos configurados"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this),
                                canCreateFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    className: "mt-3 h-7 rounded-full px-3 text-[10px]",
                                    onClick: ()=>store.setNewFieldModalOpen(true),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "mr-1 h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                            lineNumber: 414,
                                            columnNumber: 19
                                        }, this),
                                        "Criar primeiro campo"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                    lineNumber: 408,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                            lineNumber: 402,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "outline",
                                className: "h-9 rounded-xl px-4 text-xs font-semibold shadow-sm hover:bg-zinc-50 hover:text-zinc-900",
                                onClick: handleSave,
                                disabled: isLocked || store.isSaving || store.isChangingStage || fields.length === 0,
                                children: [
                                    store.isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "mr-1.5 h-3.5 w-3.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                        lineNumber: 431,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "mr-1.5 h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                        lineNumber: 433,
                                        columnNumber: 17
                                    }, this),
                                    store.isSaving ? "Salvando..." : "Salvar campos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drawers$2f$stage$2d$fields$2f$new$2d$field$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewFieldModal"], {
                open: store.isNewFieldModalOpen,
                onOpenChange: store.setNewFieldModalOpen,
                stageId: store.opportunityStage || "",
                stageName: currentStageName,
                onSave: handleCreateField
            }, void 0, false, {
                fileName: "[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(StageFieldsPanel, "IdgeML2pgfX5gjNMoM8bzot4AxM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$stage$2d$fields$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStageFieldsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$stage$2d$fields$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewStageFields"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$stage$2d$fields$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewStageValues"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$stage$2d$fields$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequiredProgress"]
    ];
});
_c2 = StageFieldsPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "InlineStatusBanner");
__turbopack_context__.k.register(_c1, "PanelCard");
__turbopack_context__.k.register(_c2, "StageFieldsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/drawers/stage-fields/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drawers$2f$stage$2d$fields$2f$stage$2d$fields$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/drawers/stage-fields/stage-fields-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drawers$2f$stage$2d$fields$2f$dynamic$2d$field$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/drawers/stage-fields/dynamic-field-renderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drawers$2f$stage$2d$fields$2f$new$2d$field$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/drawers/stage-fields/new-field-modal.tsx [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_drawers_stage-fields_e3d06144._.js.map