module.exports = [
"[project]/src/stores/sidebar-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSidebarStore",
    ()=>useSidebarStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const useSidebarStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        isExpanded: true,
        toggle: ()=>set((state)=>({
                    isExpanded: !state.isExpanded
                })),
        setExpanded: (isExpanded)=>set({
                isExpanded
            })
    }), {
    name: "flow-sidebar"
}));
}),
"[project]/src/stores/ui-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUIStore",
    ()=>useUIStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useUIStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        drawerType: null,
        drawerData: null,
        openDrawer: (drawerType, drawerData)=>set({
                drawerType,
                drawerData: drawerData ?? null
            }),
        closeDrawer: ()=>set({
                drawerType: null,
                drawerData: null
            }),
        modalType: null,
        modalData: null,
        openModal: (modalType, modalData)=>set({
                modalType,
                modalData: modalData ?? null
            }),
        closeModal: ()=>set({
                modalType: null,
                modalData: null
            }),
        isSearchOpen: false,
        setSearchOpen: (isSearchOpen)=>set({
                isSearchOpen
            }),
        isNotificationsOpen: false,
        setNotificationsOpen: (isNotificationsOpen)=>set({
                isNotificationsOpen
            })
    }));
}),
"[project]/src/stores/stage-fields-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRequiredProgress",
    ()=>useRequiredProgress,
    "useStageFieldsStore",
    ()=>useStageFieldsStore,
    "useViewStageFields",
    ()=>useViewStageFields,
    "useViewStageValues",
    ()=>useViewStageValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-stage-fields.ts [app-ssr] (ecmascript)");
;
;
;
// ===== Helpers =====
function valuesKey(opportunityId, stageId) {
    return `${opportunityId}:${stageId}`;
}
const useStageFieldsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devtools"])((set, get)=>({
        opportunityId: null,
        opportunityStage: null,
        fieldDefinitions: {},
        fieldValues: {},
        fieldSaveStates: {},
        fieldErrors: {},
        isSaving: false,
        isLoadingFields: false,
        isChangingStage: false,
        loadError: null,
        banner: null,
        isNewFieldModalOpen: false,
        initForOpportunity: (opportunityId, stage, initialValues)=>{
            // Load field definitions for all stages from config
            const definitions = {};
            for (const [stageId, fields] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stageFieldsConfig"])){
                definitions[stageId] = fields.filter((f)=>f.isActive);
            }
            // Initialize values for current stage
            const key = valuesKey(opportunityId, stage);
            const existingValues = get().fieldValues[key];
            const values = existingValues ?? initialValues ?? {};
            set({
                opportunityId,
                opportunityStage: stage,
                fieldDefinitions: definitions,
                fieldValues: {
                    ...get().fieldValues,
                    [key]: values
                },
                fieldSaveStates: {},
                fieldErrors: {},
                isSaving: false,
                isLoadingFields: false,
                isChangingStage: false,
                loadError: null,
                banner: null,
                isNewFieldModalOpen: false
            });
        },
        updateFieldValue: (fieldId, value)=>{
            const { opportunityId, opportunityStage, fieldValues } = get();
            if (!opportunityId || !opportunityStage) return;
            const key = valuesKey(opportunityId, opportunityStage);
            const currentValues = fieldValues[key] || {};
            const updatedValues = {
                ...currentValues,
                [fieldId]: value
            };
            // Clear error for this field
            const nextErrors = {
                ...get().fieldErrors
            };
            delete nextErrors[fieldId];
            set({
                fieldValues: {
                    ...fieldValues,
                    [key]: updatedValues
                },
                fieldErrors: nextErrors,
                banner: null,
                fieldSaveStates: {
                    ...get().fieldSaveStates,
                    [fieldId]: "saving"
                }
            });
            // Simulate auto-save with debounce feedback
            setTimeout(()=>{
                set((s)=>({
                        fieldSaveStates: {
                            ...s.fieldSaveStates,
                            [fieldId]: "saved"
                        }
                    }));
                setTimeout(()=>{
                    set((s)=>({
                            fieldSaveStates: {
                                ...s.fieldSaveStates,
                                [fieldId]: "idle"
                            }
                        }));
                }, 1400);
            }, 280);
        },
        saveAllFields: ()=>{
            const { opportunityId, opportunityStage, fieldDefinitions, fieldValues } = get();
            if (!opportunityId || !opportunityStage) return;
            const fields = fieldDefinitions[opportunityStage] || [];
            const key = valuesKey(opportunityId, opportunityStage);
            const values = fieldValues[key] || {};
            // Validate required fields
            const errors = {};
            const missingRequired = [];
            for (const field of fields){
                const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateFieldValue"])(field, values[field.id]);
                if (error) {
                    errors[field.id] = error;
                    if (field.required) missingRequired.push(field);
                }
            }
            if (missingRequired.length > 0) {
                set({
                    fieldErrors: errors,
                    banner: {
                        message: `Faltam ${missingRequired.length} campo(s) obrigatório(s) para salvar e avançar.`,
                        variant: "warning"
                    }
                });
                return;
            }
            set({
                isSaving: true
            });
            // Mark all as saving
            const savingMap = {};
            fields.forEach((f)=>{
                savingMap[f.id] = "saving";
            });
            set({
                fieldSaveStates: savingMap
            });
            // Simulate save
            setTimeout(()=>{
                const savedMap = {};
                fields.forEach((f)=>{
                    savedMap[f.id] = "saved";
                });
                const now = new Date();
                const timeString = now.toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit"
                });
                set({
                    fieldSaveStates: savedMap,
                    isSaving: false,
                    fieldErrors: {},
                    banner: {
                        message: `Salvo agora às ${timeString}`,
                        variant: "success"
                    }
                });
                setTimeout(()=>{
                    // Dismiss banner after 3 seconds, keep idle state reset
                    const idleMap = {};
                    fields.forEach((f)=>{
                        idleMap[f.id] = "idle";
                    });
                    set({
                        fieldSaveStates: idleMap
                    });
                }, 1400);
            }, 380);
        },
        updateOpportunityStage: (nextStageId, onAdvance)=>{
            const { opportunityId } = get();
            if (!opportunityId) return;
            set({
                isChangingStage: true,
                banner: null
            });
            // 1. Trigger the actual stage change
            const didAdvance = onAdvance(nextStageId);
            // Let the normal React context flow update the current stage prop.
            // We will simulate the "fetch fields for new stage" here.
            setTimeout(()=>{
                if (didAdvance === false) {
                    set({
                        isChangingStage: false,
                        banner: {
                            message: "Não consegui mudar a etapa. Tente novamente.",
                            variant: "error"
                        }
                    });
                    return;
                }
                // Fetch definitions for the new stage if we don't have them
                const { fieldDefinitions, fieldValues } = get();
                const newDefinitions = {
                    ...fieldDefinitions
                };
                if (!newDefinitions[nextStageId]) {
                    newDefinitions[nextStageId] = (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stageFieldsConfig"][nextStageId] || []).filter((f)=>f.isActive);
                }
                // Ensure values exist
                const key = valuesKey(opportunityId, nextStageId);
                const newValues = {
                    ...fieldValues
                };
                if (!newValues[key]) {
                    newValues[key] = {};
                }
                set({
                    opportunityStage: nextStageId,
                    fieldDefinitions: newDefinitions,
                    fieldValues: newValues,
                    fieldSaveStates: {},
                    fieldErrors: {},
                    isChangingStage: false,
                    banner: {
                        message: `Etapa alterada. Preencha os campos para continuar.`,
                        variant: "success"
                    }
                });
            }, 600);
        },
        advanceStage: (nextStageId, onAdvance)=>{
            const { opportunityId, opportunityStage, fieldDefinitions, fieldValues } = get();
            if (!opportunityId || !opportunityStage) return;
            const fields = fieldDefinitions[opportunityStage] || [];
            const key = valuesKey(opportunityId, opportunityStage);
            const values = fieldValues[key] || {};
            // Validate required fields
            const errors = {};
            const missing = [];
            for (const field of fields){
                if (field.required && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFieldValueEmpty"])(values[field.id])) {
                    errors[field.id] = "Preencha este campo para avançar etapa.";
                    missing.push(field);
                }
            }
            if (missing.length > 0) {
                set({
                    fieldErrors: errors,
                    banner: {
                        message: "Preencha os campos obrigatórios para avançar etapa.",
                        variant: "warning"
                    }
                });
                return;
            }
            // Advance stage via callback
            const didAdvance = onAdvance(nextStageId);
            if (didAdvance === false) {
                return;
            }
            // Update internal state to reflect new stage
            set({
                opportunityStage: nextStageId,
                fieldSaveStates: {},
                fieldErrors: {},
                banner: null
            });
        },
        addFieldDefinition: (stageId, fieldData)=>{
            const { fieldDefinitions } = get();
            const existingFields = fieldDefinitions[stageId] || [];
            const newField = {
                ...fieldData,
                id: `sf-${stageId}-${Date.now()}`,
                stageId,
                order: existingFields.length,
                isActive: true
            };
            // Also update the global config so it persists in the mock layer
            const configFields = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stageFieldsConfig"][stageId];
            if (configFields) {
                configFields.push(newField);
            }
            set({
                fieldDefinitions: {
                    ...fieldDefinitions,
                    [stageId]: [
                        ...existingFields,
                        newField
                    ]
                },
                isNewFieldModalOpen: false,
                banner: {
                    message: `Campo "${newField.label}" criado com sucesso.`,
                    variant: "success"
                }
            });
        },
        setNewFieldModalOpen: (open)=>set({
                isNewFieldModalOpen: open
            }),
        setBanner: (banner)=>set({
                banner
            }),
        reset: ()=>set({
                opportunityId: null,
                opportunityStage: null,
                fieldSaveStates: {},
                fieldErrors: {},
                isSaving: false,
                isLoadingFields: false,
                isChangingStage: false,
                loadError: null,
                banner: null,
                isNewFieldModalOpen: false
            })
    }), {
    name: "stage-fields-store"
}));
function useViewStageFields() {
    const stage = useStageFieldsStore((s)=>s.opportunityStage);
    const fieldDefinitions = useStageFieldsStore((s)=>s.fieldDefinitions);
    if (!stage) return [];
    return (fieldDefinitions[stage] || []).sort((a, b)=>a.order - b.order);
}
function useViewStageValues() {
    const opportunityId = useStageFieldsStore((s)=>s.opportunityId);
    const stage = useStageFieldsStore((s)=>s.opportunityStage);
    const fieldValues = useStageFieldsStore((s)=>s.fieldValues);
    if (!opportunityId || !stage) return {};
    return fieldValues[valuesKey(opportunityId, stage)] || {};
}
function useRequiredProgress() {
    const fields = useViewStageFields();
    const values = useViewStageValues();
    const requiredFields = fields.filter((f)=>f.required);
    const completed = requiredFields.filter((f)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFieldValueEmpty"])(values[f.id]));
    return {
        total: requiredFields.length,
        completed: completed.length,
        missing: requiredFields.length - completed.length,
        missingFields: requiredFields.filter((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$stage$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFieldValueEmpty"])(values[f.id]))
    };
}
}),
"[project]/src/stores/opportunity-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOpportunityStore",
    ()=>useOpportunityStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$opportunities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/opportunities.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-ssr] (ecmascript)");
;
;
;
;
const useOpportunityStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devtools"])((set, get)=>({
        opportunities: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$opportunities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockOpportunities"],
        isLoading: false,
        addOpportunity: (data)=>{
            const newOpp = {
                ...data,
                id: `opp-${Date.now()}`,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                status: "open"
            };
            set((state)=>({
                    opportunities: [
                        ...state.opportunities,
                        newOpp
                    ]
                }));
            return newOpp;
        },
        updateOpportunity: (id, data)=>set((state)=>({
                    opportunities: state.opportunities.map((opp)=>opp.id === id ? {
                            ...opp,
                            ...data,
                            updatedAt: new Date().toISOString()
                        } : opp)
                })),
        deleteOpportunity: (id)=>set((state)=>({
                    opportunities: state.opportunities.filter((opp)=>opp.id !== id)
                })),
        moveToStage: (id, stage, slaHours)=>set((state)=>({
                    opportunities: state.opportunities.map((opp)=>opp.id === id ? {
                            ...opp,
                            stage,
                            updatedAt: new Date().toISOString(),
                            slaDeadline: slaHours ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSlaDeadline"])(slaHours) : opp.slaDeadline
                        } : opp)
                })),
        replaceOpportunities: (opportunities)=>set(()=>({
                    opportunities
                })),
        winOpportunity: (id)=>set((state)=>({
                    opportunities: state.opportunities.map((opp)=>opp.id === id ? {
                            ...opp,
                            status: "won",
                            updatedAt: new Date().toISOString()
                        } : opp)
                })),
        loseOpportunity: (id, reason, competitor, notes)=>set((state)=>({
                    opportunities: state.opportunities.map((opp)=>opp.id === id ? {
                            ...opp,
                            status: "lost",
                            lossReason: reason,
                            competitor: competitor || opp.competitor,
                            notes: notes || opp.notes,
                            updatedAt: new Date().toISOString()
                        } : opp)
                })),
        getByStage: (stage)=>get().opportunities.filter((o)=>o.stage === stage && o.status === "open"),
        getOpen: ()=>get().opportunities.filter((o)=>o.status === "open"),
        getById: (id)=>get().opportunities.find((o)=>o.id === id)
    }), {
    name: "opportunity-store"
}));
}),
"[project]/src/stores/client-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClientStore",
    ()=>useClientStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/clients.ts [app-ssr] (ecmascript)");
;
;
;
const useClientStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devtools"])((set, get)=>({
        clients: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockClients"],
        isLoading: false,
        addClient: (data)=>{
            const newClient = {
                ...data,
                id: `client-${Date.now()}`,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            set((state)=>({
                    clients: [
                        ...state.clients,
                        newClient
                    ]
                }));
            return newClient;
        },
        updateClient: (id, data)=>set((state)=>({
                    clients: state.clients.map((cli)=>cli.id === id ? {
                            ...cli,
                            ...data,
                            updatedAt: new Date().toISOString()
                        } : cli)
                })),
        deleteClient: (id)=>set((state)=>({
                    clients: state.clients.filter((cli)=>cli.id !== id)
                })),
        moveToStage: (id, stage)=>set((state)=>({
                    clients: state.clients.map((cli)=>cli.id === id ? {
                            ...cli,
                            stage,
                            updatedAt: new Date().toISOString()
                        } : cli)
                })),
        getById: (id)=>get().clients.find((c)=>c.id === id),
        getByStage: (stage)=>get().clients.filter((c)=>c.stage === stage)
    }), {
    name: "client-store"
}));
}),
"[project]/src/stores/contact-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useContactStore",
    ()=>useContactStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$contacts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/contacts.ts [app-ssr] (ecmascript)");
;
;
;
const useContactStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devtools"])((_set, get)=>({
        contacts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$contacts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockContacts"],
        isLoading: false,
        getByClient: (clientId)=>get().contacts.filter((c)=>c.clientId === clientId),
        getById: (id)=>get().contacts.find((c)=>c.id === id)
    }), {
    name: "contact-store"
}));
}),
"[project]/src/stores/notification-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotificationStore",
    ()=>useNotificationStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$notifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/notifications.ts [app-ssr] (ecmascript)");
;
;
;
const useNotificationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devtools"])((set, get)=>({
        notifications: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$notifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockNotifications"],
        addNotification: (data)=>set((state)=>({
                    notifications: [
                        {
                            ...data,
                            id: `notif-${Date.now()}`,
                            createdAt: new Date().toISOString(),
                            isRead: false
                        },
                        ...state.notifications
                    ]
                })),
        markAsRead: (id)=>set((state)=>({
                    notifications: state.notifications.map((n)=>n.id === id ? {
                            ...n,
                            isRead: true
                        } : n)
                })),
        markAllAsRead: ()=>set((state)=>({
                    notifications: state.notifications.map((n)=>({
                            ...n,
                            isRead: true
                        }))
                })),
        deleteNotification: (id)=>set((state)=>({
                    notifications: state.notifications.filter((n)=>n.id !== id)
                })),
        getUnread: ()=>get().notifications.filter((n)=>!n.isRead),
        getUnreadCount: ()=>get().notifications.filter((n)=>!n.isRead).length
    }), {
    name: "notification-store"
}));
}),
"[project]/src/stores/user-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserStore",
    ()=>useUserStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/users.ts [app-ssr] (ecmascript)");
;
;
;
const useUserStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devtools"])((set, get)=>({
        users: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"],
        addUser: (data)=>{
            const newUser = {
                ...data,
                id: `user-${Date.now()}`,
                createdAt: new Date().toISOString()
            };
            set((state)=>({
                    users: [
                        ...state.users,
                        newUser
                    ]
                }));
            return newUser;
        },
        updateUser: (id, data)=>set((state)=>({
                    users: state.users.map((u)=>u.id === id ? {
                            ...u,
                            ...data
                        } : u)
                })),
        deactivateUser: (id)=>set((state)=>({
                    users: state.users.map((u)=>u.id === id ? {
                            ...u,
                            isActive: false
                        } : u)
                })),
        activateUser: (id)=>set((state)=>({
                    users: state.users.map((u)=>u.id === id ? {
                            ...u,
                            isActive: true
                        } : u)
                })),
        getById: (id)=>get().users.find((u)=>u.id === id),
        getActive: ()=>get().users.filter((u)=>u.isActive)
    }), {
    name: "user-store"
}));
}),
"[project]/src/stores/activity-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActivityStore",
    ()=>useActivityStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$activities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/activities.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-ssr] (ecmascript)");
;
;
;
;
const useActivityStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devtools"])((set, get)=>({
        activities: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$activities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockActivities"],
        isLoading: false,
        addActivity: (data)=>{
            const newActivity = {
                ...data,
                id: `act-${Date.now()}`,
                createdAt: new Date().toISOString()
            };
            set((state)=>({
                    activities: [
                        ...state.activities,
                        newActivity
                    ]
                }));
            return newActivity;
        },
        updateActivity: (id, data)=>set((state)=>({
                    activities: state.activities.map((act)=>act.id === id ? {
                            ...act,
                            ...data,
                            updatedAt: new Date().toISOString()
                        } : act)
                })),
        deleteActivity: (id)=>set((state)=>({
                    activities: state.activities.filter((act)=>act.id !== id)
                })),
        completeActivity: (id, notes)=>set((state)=>({
                    activities: state.activities.map((act)=>act.id === id ? {
                            ...act,
                            status: "completed",
                            completedAt: new Date().toISOString().split("T")[0],
                            completionNotes: notes || undefined,
                            updatedAt: new Date().toISOString()
                        } : act)
                })),
        cancelActivity: (id)=>set((state)=>({
                    activities: state.activities.map((act)=>act.id === id ? {
                            ...act,
                            status: "cancelled",
                            updatedAt: new Date().toISOString()
                        } : act)
                })),
        postponeActivity: (id, newDueDate, newDueTime)=>set((state)=>{
                return {
                    activities: state.activities.map((act)=>{
                        if (act.id !== id) return act;
                        const candidate = {
                            ...act,
                            dueDate: newDueDate,
                            dueTime: newDueTime ?? act.dueTime,
                            status: "pending"
                        };
                        const effectiveStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEffectiveActivityStatus"])(candidate);
                        const newStatus = effectiveStatus === "overdue" ? "overdue" : "pending";
                        return {
                            ...candidate,
                            status: newStatus
                        };
                    })
                };
            }),
        getById: (id)=>get().activities.find((a)=>a.id === id),
        getByOpportunity: (opportunityId)=>get().activities.filter((a)=>a.opportunityId === opportunityId),
        getByClient: (clientId)=>get().activities.filter((a)=>a.clientId === clientId),
        getPending: ()=>get().activities.filter((a)=>a.status === "pending"),
        getOverdue: ()=>{
            const todayStr = new Date().toISOString().split("T")[0];
            return get().activities.filter((a)=>a.status === "overdue" || a.status === "pending" && a.dueDate < todayStr);
        }
    }), {
    name: "activity-store"
}));
}),
"[project]/src/stores/goal-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGoalStore",
    ()=>useGoalStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/mock-data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$goals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/goals.ts [app-ssr] (ecmascript)");
;
;
;
const useGoalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devtools"])((set)=>({
        goals: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$goals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockGoals"],
        addGoal: (data)=>{
            const newGoal = {
                ...data,
                id: `goal-${Date.now()}`
            };
            set((state)=>({
                    goals: [
                        ...state.goals,
                        newGoal
                    ]
                }));
            return newGoal;
        },
        updateGoal: (id, data)=>set((state)=>({
                    goals: state.goals.map((g)=>g.id === id ? {
                            ...g,
                            ...data
                        } : g)
                })),
        deleteGoal: (id)=>set((state)=>({
                    goals: state.goals.filter((g)=>g.id !== id)
                }))
    }), {
    name: "goal-store"
}));
}),
"[project]/src/stores/pipeline-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePipelineStore",
    ()=>usePipelineStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
// ===== Initial Data (mock) =====
const initialPipelines = [
    {
        id: "pipeline-leads",
        name: "Leads",
        description: "Funil padrão de vendas",
        isDefault: true,
        cardCount: 42,
        createdAt: "2026-01-01T00:00:00Z",
        updatedAt: "2026-01-01T00:00:00Z",
        stages: [
            {
                id: "lead-in",
                name: "Lead-In",
                order: 0,
                slaHours: 48
            },
            {
                id: "contato-feito",
                name: "Contato Feito",
                order: 1,
                slaHours: 72
            },
            {
                id: "reuniao-agendada",
                name: "Reuniao Agendada",
                order: 2,
                slaHours: 120
            },
            {
                id: "proposta-enviada",
                name: "Proposta Enviada",
                order: 3,
                slaHours: 96
            },
            {
                id: "negociacao",
                name: "Negociacao",
                order: 4,
                slaHours: 168
            },
            {
                id: "fechamento",
                name: "Fechamento",
                order: 5,
                slaHours: 48
            }
        ]
    },
    {
        id: "pipeline-indicacao",
        name: "Indicação",
        description: "Funil para leads vindos de indicação",
        isDefault: false,
        cardCount: 8,
        createdAt: "2026-01-15T00:00:00Z",
        updatedAt: "2026-01-15T00:00:00Z",
        stages: [
            {
                id: "lead-in-ind",
                name: "Lead-In",
                order: 0,
                slaHours: 24
            },
            {
                id: "contato-feito-ind",
                name: "Contato Feito",
                order: 1,
                slaHours: 48
            },
            {
                id: "proposta-enviada-ind",
                name: "Proposta Enviada",
                order: 2,
                slaHours: 72
            },
            {
                id: "fechamento-ind",
                name: "Fechamento",
                order: 3,
                slaHours: 48
            }
        ]
    }
];
const usePipelineStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devtools"])((set)=>({
        // Initial state
        pipelines: initialPipelines,
        isLoading: false,
        // Actions
        setPipelines: (pipelines)=>set({
                pipelines
            }),
        addPipeline: (pipelineData)=>set((state)=>{
                const newPipeline = {
                    ...pipelineData,
                    id: `pipeline-${Date.now()}`,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                };
                return {
                    pipelines: [
                        ...state.pipelines,
                        newPipeline
                    ]
                };
            }),
        updatePipeline: (id, data)=>set((state)=>({
                    pipelines: state.pipelines.map((pipeline)=>pipeline.id === id ? {
                            ...pipeline,
                            ...data,
                            updatedAt: new Date().toISOString()
                        } : pipeline)
                })),
        deletePipeline: (id)=>set((state)=>({
                    pipelines: state.pipelines.filter((p)=>p.id !== id)
                })),
        reorderPipelines: (pipelines)=>set({
                pipelines
            }),
        addStage: (pipelineId, stageData)=>set((state)=>({
                    pipelines: state.pipelines.map((pipeline)=>{
                        if (pipeline.id !== pipelineId) return pipeline;
                        const newStage = {
                            ...stageData,
                            order: pipeline.stages.length
                        };
                        return {
                            ...pipeline,
                            stages: [
                                ...pipeline.stages,
                                newStage
                            ],
                            updatedAt: new Date().toISOString()
                        };
                    })
                })),
        updateStage: (pipelineId, stageId, data)=>set((state)=>({
                    pipelines: state.pipelines.map((pipeline)=>{
                        if (pipeline.id !== pipelineId) return pipeline;
                        return {
                            ...pipeline,
                            stages: pipeline.stages.map((stage)=>stage.id === stageId ? {
                                    ...stage,
                                    ...data
                                } : stage),
                            updatedAt: new Date().toISOString()
                        };
                    })
                })),
        deleteStage: (pipelineId, stageId)=>set((state)=>({
                    pipelines: state.pipelines.map((pipeline)=>{
                        if (pipeline.id !== pipelineId) return pipeline;
                        const filteredStages = pipeline.stages.filter((s)=>s.id !== stageId);
                        const reorderedStages = filteredStages.map((stage, index)=>({
                                ...stage,
                                order: index
                            }));
                        return {
                            ...pipeline,
                            stages: reorderedStages,
                            updatedAt: new Date().toISOString()
                        };
                    })
                })),
        reorderStages: (pipelineId, stages)=>set((state)=>({
                    pipelines: state.pipelines.map((pipeline)=>{
                        if (pipeline.id !== pipelineId) return pipeline;
                        const reorderedStages = stages.map((stage, index)=>({
                                ...stage,
                                order: index
                            }));
                        return {
                            ...pipeline,
                            stages: reorderedStages,
                            updatedAt: new Date().toISOString()
                        };
                    })
                }))
    }), {
    name: "pipeline-store"
}));
}),
"[project]/src/stores/intelligence-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIntelligenceStore",
    ()=>useIntelligenceStore
]);
// ============================================================================
// Menux Intelligence — Zustand Store
// Ref: docs/Menux Intelligence.md — seção 14
// ============================================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/intelligence.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/router.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$greeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/greeting.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/freeform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-commands.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/opportunity-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/activity-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$aggregators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/aggregators.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// ─── Helpers ──────────────────────────────────────────────────────────────
function uid() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function now() {
    return new Date().toISOString();
}
function isIntelligenceRole(role) {
    return role === "master" || role === "admin" || role === "comercial" || role === "cs";
}
function createConversation(messages = []) {
    return {
        id: uid(),
        preview: messages[0]?.content?.slice(0, 80) ?? "",
        messages,
        createdAt: now(),
        updatedAt: now(),
        messageCount: messages.length
    };
}
function getVendorContext() {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
    const opportunities = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpportunityStore"].getState().opportunities;
    const userOpps = opportunities.filter((o)=>o.responsibleId === user?.id);
    const closed = userOpps.filter((o)=>o.status === "won" || o.status === "lost");
    const won = closed.filter((o)=>o.status === "won");
    const conversionRate = closed.length >= 3 ? Math.round(won.length / closed.length * 100) : undefined;
    return {
        id: user?.id ?? "unknown",
        name: user?.name ?? "Vendedor",
        role: user?.role ?? "comercial",
        assignedCardCount: userOpps.filter((o)=>o.status === "open").length,
        conversionRate
    };
}
function getPipelineContext() {
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
        if (!user) return null;
        const opportunities = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpportunityStore"].getState().opportunities;
        const activities = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActivityStore"].getState().activities;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$aggregators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computePipelineContext"])(opportunities, activities, user.id, user.role);
    } catch (err) {
        console.error("[Menux Intelligence] Erro ao computar pipeline context:", err);
        return null;
    }
}
const useIntelligenceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // ── State ──────────────────────────────────────────────────────────────
        isOpen: false,
        activeConversation: null,
        messages: [],
        isTyping: false,
        greetingSent: false,
        contextCard: null,
        isClientPickerOpen: false,
        clientPickerSearch: "",
        clientPickerFilters: {},
        proactiveSuggestions: [],
        history: [],
        isHistoryOpen: false,
        viewingHistoryConversation: null,
        activeScreen: "other",
        remainingQueries: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTELLIGENCE_LIMITS"].MAX_QUERIES_PER_HOUR,
        rateLimitResetAt: null,
        menuxIntelligenceMode: "focus",
        aiTone: "neutral",
        proactiveFrequency: 5,
        proactiveNotifications: true,
        isSettingsOpen: false,
        isThinking: false,
        // ── Actions ────────────────────────────────────────────────────────────
        open: ()=>{
            const state = get();
            // Se já tem conversa ativa com saudação enviada, apenas abre
            if (state.greetingSent && state.messages.length > 0) {
                set({
                    isOpen: true
                });
                return;
            }
            // Nova sessão → gerar saudação
            const vendor = getVendorContext();
            const greeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$greeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateGreeting"])(vendor, state.contextCard, true);
            set({
                isOpen: true,
                greetingSent: true,
                messages: [
                    greeting
                ],
                activeConversation: createConversation([
                    greeting
                ])
            });
        },
        close: ()=>set({
                isOpen: false
            }),
        toggle: ()=>{
            const state = get();
            if (state.isOpen) {
                state.close();
            } else {
                state.open();
            }
        },
        sendMessage: async (text)=>{
            const state = get();
            // Validações — seção 10 e 11
            if (!text.trim()) return;
            if (text.length > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTELLIGENCE_LIMITS"].MAX_USER_MESSAGE_LENGTH) {
                return; // Silenciosamente ignora — o UI deve já travar no limite
            }
            if (state.messages.length >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTELLIGENCE_LIMITS"].MAX_MESSAGES_PER_CONVERSATION) {
                const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("max-messages");
                set((s)=>({
                        messages: [
                            ...s.messages,
                            errorMsg
                        ]
                    }));
                return;
            }
            if (state.remainingQueries <= 0) {
                const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("rate-limit", {
                    resetTime: state.rateLimitResetAt ? new Date(state.rateLimitResetAt).toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit"
                    }) : "--:--"
                });
                set((s)=>({
                        messages: [
                            ...s.messages,
                            errorMsg
                        ]
                    }));
                return;
            }
            // Criar mensagem do vendedor
            const userMessage = {
                id: uid(),
                role: "user",
                content: text,
                contentType: "text",
                timestamp: now()
            };
            set((s)=>({
                    messages: [
                        ...s.messages,
                        userMessage
                    ],
                    isTyping: true
                }));
            // Processar resposta da IA
            try {
                const vendor = getVendorContext();
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processMessage"])({
                    text,
                    card: state.contextCard,
                    vendor,
                    pipeline: getPipelineContext(),
                    mode: state.menuxIntelligenceMode,
                    tone: state.aiTone
                });
                set((s)=>({
                        messages: [
                            ...s.messages,
                            response
                        ],
                        isTyping: false,
                        remainingQueries: s.remainingQueries - 1,
                        activeConversation: s.activeConversation ? {
                            ...s.activeConversation,
                            messages: [
                                ...s.messages,
                                response
                            ],
                            messageCount: s.messages.length + 1,
                            updatedAt: now()
                        } : null
                    }));
            } catch  {
                const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("api-error");
                set((s)=>({
                        messages: [
                            ...s.messages,
                            errorMsg
                        ],
                        isTyping: false
                    }));
            }
        },
        executeSlashCommand: async (command, payload)=>{
            const state = get();
            const rawRole = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.role;
            const role = isIntelligenceRole(rawRole) ? rawRole : null;
            const definition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCommandDefinition"])(command);
            if (!definition) {
                const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("invalid-command");
                set((s)=>({
                        messages: [
                            ...s.messages,
                            errorMsg
                        ]
                    }));
                return;
            }
            if (!role || !definition.availableFor.includes(role)) {
                const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("forbidden-command", {
                    command: definition.command
                });
                set((s)=>({
                        messages: [
                            ...s.messages,
                            errorMsg
                        ]
                    }));
                return;
            }
            if (definition.requiresCard && !state.contextCard) {
                const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("no-card");
                set((s)=>({
                        messages: [
                            ...s.messages,
                            errorMsg
                        ]
                    }));
                return;
            }
            if (definition.requiresInput && !(payload ?? "").trim()) {
                const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("missing-command-input", {
                    command: definition.command,
                    hint: definition.inputPlaceholder ?? ""
                });
                set((s)=>({
                        messages: [
                            ...s.messages,
                            errorMsg
                        ]
                    }));
                return;
            }
            if (state.remainingQueries <= 0) {
                const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("rate-limit");
                set((s)=>({
                        messages: [
                            ...s.messages,
                            errorMsg
                        ]
                    }));
                return;
            }
            if (state.messages.length >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTELLIGENCE_LIMITS"].MAX_MESSAGES_PER_CONVERSATION) {
                const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("max-messages");
                set((s)=>({
                        messages: [
                            ...s.messages,
                            errorMsg
                        ]
                    }));
                return;
            }
            // Criar mensagem do vendedor mostrando o comando
            const userMessage = {
                id: uid(),
                role: "user",
                content: payload ? `${command} ${payload}` : command,
                contentType: "text",
                timestamp: now(),
                sourceCommand: command
            };
            set((s)=>({
                    messages: [
                        ...s.messages,
                        userMessage
                    ],
                    isTyping: true
                }));
            try {
                const vendor = getVendorContext();
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processMessage"])({
                    text: payload ?? "",
                    command,
                    card: state.contextCard,
                    vendor,
                    pipeline: getPipelineContext(),
                    mode: state.menuxIntelligenceMode,
                    tone: state.aiTone
                });
                set((s)=>({
                        messages: [
                            ...s.messages,
                            response
                        ],
                        isTyping: false,
                        remainingQueries: s.remainingQueries - 1,
                        activeConversation: s.activeConversation ? {
                            ...s.activeConversation,
                            messages: [
                                ...s.messages,
                                response
                            ],
                            messageCount: s.messages.length + 1,
                            updatedAt: now()
                        } : null
                    }));
            } catch  {
                const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("api-error");
                set((s)=>({
                        messages: [
                            ...s.messages,
                            errorMsg
                        ],
                        isTyping: false
                    }));
            }
        },
        setContextCard: (card)=>{
            set({
                contextCard: card
            });
        },
        openClientPicker: ()=>{
            set({
                isClientPickerOpen: true,
                clientPickerSearch: "",
                clientPickerFilters: {}
            });
        },
        closeClientPicker: ()=>{
            set({
                isClientPickerOpen: false
            });
        },
        setClientPickerSearch: (search)=>{
            set({
                clientPickerSearch: search
            });
        },
        setClientPickerFilters: (filters)=>{
            set({
                clientPickerFilters: filters
            });
        },
        selectClient: (item)=>{
            const cardContext = {
                cardId: item.entityId,
                cardName: item.companyName,
                stage: item.stage,
                stageLabel: item.stageLabel,
                temperature: item.temperature,
                contacts: [],
                tags: item.tags ?? [],
                overdueActivities: [],
                timelineNotes: [],
                registeredObjections: [],
                entityType: item.entityType
            };
            // Gerar mensagem de confirmação
            const confirmMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$greeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateContextLoaded"])(cardContext);
            set((s)=>({
                    contextCard: cardContext,
                    isClientPickerOpen: false,
                    messages: [
                        ...s.messages,
                        confirmMsg
                    ]
                }));
        },
        dismissSuggestion: (id)=>{
            set((s)=>({
                    proactiveSuggestions: s.proactiveSuggestions.map((sug)=>sug.id === id ? {
                            ...sug,
                            dismissed: true
                        } : sug)
                }));
        },
        startNewConversation: ()=>{
            const state = get();
            // Salvar conversa atual no histórico (se tiver mensagens)
            if (state.activeConversation && state.messages.length > 1) {
                const history = [
                    {
                        ...state.activeConversation,
                        messages: state.messages,
                        messageCount: state.messages.length,
                        updatedAt: now()
                    },
                    ...state.history
                ].slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTELLIGENCE_LIMITS"].MAX_STORED_CONVERSATIONS);
                set({
                    history
                });
            }
            // Gerar nova saudação
            const vendor = getVendorContext();
            const greeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$greeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateGreeting"])(vendor, null, false);
            set({
                messages: [
                    greeting
                ],
                greetingSent: true,
                activeConversation: createConversation([
                    greeting
                ]),
                contextCard: null,
                viewingHistoryConversation: null,
                isHistoryOpen: false
            });
        },
        loadConversation: (id)=>{
            const state = get();
            const convo = state.history.find((c)=>c.id === id);
            if (convo) {
                set({
                    viewingHistoryConversation: convo,
                    isHistoryOpen: false
                });
            }
        },
        exitHistoryView: ()=>{
            set({
                viewingHistoryConversation: null
            });
        },
        toggleHistory: ()=>{
            set((s)=>({
                    isHistoryOpen: !s.isHistoryOpen
                }));
        },
        setActiveScreen: (screen)=>{
            set({
                activeScreen: screen
            });
        },
        addProactiveSuggestion: (suggestion)=>{
            const state = get();
            const todaySuggestions = state.proactiveSuggestions.filter((s)=>{
                const created = new Date(s.createdAt);
                const today = new Date();
                return created.getDate() === today.getDate() && created.getMonth() === today.getMonth() && created.getFullYear() === today.getFullYear() && !s.dismissed;
            });
            // Limite de 3 sugestões proativas por dia — seção 5.2
            if (todaySuggestions.length >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTELLIGENCE_LIMITS"].MAX_PROACTIVE_SUGGESTIONS_PER_DAY) {
                return;
            }
            set((s)=>({
                    proactiveSuggestions: [
                        ...s.proactiveSuggestions,
                        {
                            ...suggestion,
                            id: uid(),
                            dismissed: false,
                            createdAt: now()
                        }
                    ]
                }));
        },
        markActionExecuted: (messageId, actionId)=>{
            set((s)=>({
                    messages: s.messages.map((msg)=>msg.id === messageId ? {
                            ...msg,
                            suggestedActions: msg.suggestedActions?.map((action)=>action.id === actionId ? {
                                    ...action,
                                    executed: true
                                } : action)
                        } : msg)
                }));
        },
        addAssistantMessage: (message)=>{
            const fullMessage = {
                ...message,
                id: uid(),
                timestamp: now(),
                role: "assistant"
            };
            set((s)=>({
                    messages: [
                        ...s.messages,
                        fullMessage
                    ]
                }));
        },
        decrementRateLimit: ()=>{
            set((s)=>{
                const remaining = s.remainingQueries - 1;
                return {
                    remainingQueries: Math.max(0, remaining),
                    rateLimitResetAt: remaining <= 0 && !s.rateLimitResetAt ? new Date(Date.now() + 60 * 60 * 1000).toISOString() : s.rateLimitResetAt
                };
            });
        },
        resetRateLimit: ()=>{
            set({
                remainingQueries: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTELLIGENCE_LIMITS"].MAX_QUERIES_PER_HOUR,
                rateLimitResetAt: null
            });
        },
        setMenuxIntelligenceMode: (mode)=>set({
                menuxIntelligenceMode: mode
            }),
        openSettings: ()=>set({
                isSettingsOpen: true
            }),
        closeSettings: ()=>set({
                isSettingsOpen: false
            }),
        setAiTone: (aiTone)=>set({
                aiTone
            }),
        setProactiveFrequency: (proactiveFrequency)=>set({
                proactiveFrequency
            }),
        setProactiveNotifications: (proactiveNotifications)=>set({
                proactiveNotifications
            })
    }));
}),
"[project]/src/hooks/use-media-query.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useMediaQuery(query) {
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        function onChange(event) {
            setValue(event.matches);
        }
        const result = window.matchMedia(query);
        result.addEventListener("change", onChange);
        setValue(result.matches);
        return ()=>result.removeEventListener("change", onChange);
    }, [
        query
    ]);
    return value;
}
}),
"[project]/src/hooks/use-proactive-engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProactiveEngine",
    ()=>useProactiveEngine
]);
// ============================================================================
// Hook que executa o motor proativo periodicamente e alimenta o store
// ============================================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/opportunity-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/activity-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$client$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/client-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$goal$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/goal-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$pipeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/pipeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$intelligence$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/intelligence-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$aggregators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/aggregators.ts [app-ssr] (ecmascript)");
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
function useProactiveEngine() {
    const hasRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function getIntervalMs() {
            const freq = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$intelligence$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIntelligenceStore"].getState().proactiveFrequency;
            return freq * 60 * 1000;
        }
        function gatherInput() {
            const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
            if (!user) return null;
            return {
                opportunities: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpportunityStore"].getState().opportunities,
                activities: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActivityStore"].getState().activities,
                clients: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$client$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClientStore"].getState().clients,
                goals: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$goal$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGoalStore"].getState().goals,
                pipelines: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$pipeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePipelineStore"].getState().pipelines,
                userId: user.id,
                userRole: user.role
            };
        }
        function runEngine() {
            try {
                const { proactiveNotifications } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$intelligence$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIntelligenceStore"].getState();
                if (!proactiveNotifications) return;
                const input = gatherInput();
                if (!input) return;
                const suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$aggregators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateAllSuggestions"])(input);
                const store = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$intelligence$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIntelligenceStore"].getState();
                const existing = store.proactiveSuggestions;
                // Dedup: don't add suggestions that match existing type + cardId/cardName
                for (const suggestion of suggestions){
                    const isDuplicate = existing.some((e)=>e.type === suggestion.type && !e.dismissed && (suggestion.cardId && e.cardId === suggestion.cardId || suggestion.cardName && e.cardName === suggestion.cardName || !suggestion.cardId && !suggestion.cardName && e.type === suggestion.type));
                    if (!isDuplicate) {
                        store.addProactiveSuggestion(suggestion);
                    }
                }
            } catch (err) {
                console.error("[ProactiveEngine] Erro ao rodar motor:", err);
            }
        }
        // Run immediately on first mount
        if (!hasRun.current) {
            // Small delay to let stores hydrate
            const timeout = setTimeout(()=>{
                runEngine();
                hasRun.current = true;
            }, 1500);
            const interval = setInterval(runEngine, getIntervalMs());
            return ()=>{
                clearTimeout(timeout);
                clearInterval(interval);
            };
        }
        const interval = setInterval(runEngine, getIntervalMs());
        return ()=>clearInterval(interval);
    }, []);
}
}),
"[project]/src/types/intelligence.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// Menux Intelligence — Types & Interfaces
// Ref: docs/Menux Intelligence.md (v1.1)
// ============================================================================
__turbopack_context__.s([
    "INTELLIGENCE_LIMITS",
    ()=>INTELLIGENCE_LIMITS,
    "INTELLIGENCE_SLA",
    ()=>INTELLIGENCE_SLA
]);
const INTELLIGENCE_LIMITS = {
    /** Máx mensagens por conversa */ MAX_MESSAGES_PER_CONVERSATION: 100,
    /** Máx conversas armazenadas por vendedor */ MAX_STORED_CONVERSATIONS: 50,
    /** Máx caracteres por mensagem do vendedor */ MAX_USER_MESSAGE_LENGTH: 2000,
    /** Máx caracteres por resposta da IA */ MAX_AI_RESPONSE_LENGTH: 6000,
    /** Sugestões proativas por dia */ MAX_PROACTIVE_SUGGESTIONS_PER_DAY: 15,
    /** Consultas por hora */ MAX_QUERIES_PER_HOUR: 60,
    /** Janela de contexto (mensagens) */ CONTEXT_WINDOW_MESSAGES: 20,
    /** Retenção de histórico em dias */ HISTORY_RETENTION_DAYS: 30,
    /** Limite de caracteres para WhatsApp */ WHATSAPP_CHAR_LIMIT: 280,
    /** Limite de caracteres para email (corpo) */ EMAIL_BODY_CHAR_LIMIT: 500
};
const INTELLIGENCE_SLA = {
    SIMPLE_RESPONSE_MS: 5000,
    COMPLEX_RESPONSE_MS: 15000
};
}),
];

//# sourceMappingURL=src_b44a6ab4._.js.map