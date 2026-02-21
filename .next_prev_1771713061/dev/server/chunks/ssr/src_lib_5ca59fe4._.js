module.exports = [
"[project]/src/lib/cn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/lib/intelligence-permissions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// Menux Intelligence — Permissions Matrix
// Ref: docs/Menux Intelligence.md — seção 9
// ============================================================================
__turbopack_context__.s([
    "canAccessIntelligence",
    ()=>canAccessIntelligence,
    "getIntelligencePermissions",
    ()=>getIntelligencePermissions
]);
/**
 * Mapa completo de permissões da Intelligence por perfil.
 * Ref: seção 9.1 — Tabela de acesso por perfil.
 */ const permissionsMatrix = {
    master: {
        canAccessIntelligence: true,
        canBriefingAllCards: true,
        canBriefingOwnCards: true,
        canViewAllFunnel: true,
        canViewOwnFunnel: true,
        canGhostwrite: true,
        canUseObjectionsAndPitch: true,
        canQueryMenuxBase: true,
        canViewOthersHistory: true,
        canReceiveProactiveSuggestions: true,
        canSelectAllClientsInPicker: true
    },
    admin: {
        canAccessIntelligence: true,
        canBriefingAllCards: true,
        canBriefingOwnCards: true,
        canViewAllFunnel: true,
        canViewOwnFunnel: true,
        canGhostwrite: true,
        canUseObjectionsAndPitch: true,
        canQueryMenuxBase: true,
        canViewOthersHistory: false,
        canReceiveProactiveSuggestions: true,
        canSelectAllClientsInPicker: true
    },
    comercial: {
        canAccessIntelligence: true,
        canBriefingAllCards: false,
        canBriefingOwnCards: true,
        canViewAllFunnel: false,
        canViewOwnFunnel: true,
        canGhostwrite: true,
        canUseObjectionsAndPitch: true,
        canQueryMenuxBase: true,
        canViewOthersHistory: false,
        canReceiveProactiveSuggestions: true,
        canSelectAllClientsInPicker: false
    },
    cs: {
        canAccessIntelligence: true,
        canBriefingAllCards: false,
        canBriefingOwnCards: true,
        canViewAllFunnel: false,
        canViewOwnFunnel: true,
        canGhostwrite: true,
        canUseObjectionsAndPitch: true,
        canQueryMenuxBase: true,
        canViewOthersHistory: false,
        canReceiveProactiveSuggestions: true,
        canSelectAllClientsInPicker: false
    },
    leitura: {
        canAccessIntelligence: false,
        canBriefingAllCards: false,
        canBriefingOwnCards: false,
        canViewAllFunnel: false,
        canViewOwnFunnel: false,
        canGhostwrite: false,
        canUseObjectionsAndPitch: false,
        canQueryMenuxBase: false,
        canViewOthersHistory: false,
        canReceiveProactiveSuggestions: false,
        canSelectAllClientsInPicker: false
    }
};
function getIntelligencePermissions(role) {
    return permissionsMatrix[role] ?? permissionsMatrix.leitura;
}
function canAccessIntelligence(role) {
    const perms = permissionsMatrix[role];
    return perms?.canAccessIntelligence ?? false;
}
}),
"[project]/src/lib/masks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// Máscaras e Validadores — Flow CRM
// Funções puras para formatação, normalização e validação de campos.
// ============================================================================
// ─── Telefone BR ────────────────────────────────────────────────────────────
/**
 * Extrai apenas dígitos de uma string.
 */ __turbopack_context__.s([
    "currencyFromNumber",
    ()=>currencyFromNumber,
    "isValidCnpj",
    ()=>isValidCnpj,
    "isValidPhone",
    ()=>isValidPhone,
    "maskCep",
    ()=>maskCep,
    "maskCnpj",
    ()=>maskCnpj,
    "maskCurrency",
    ()=>maskCurrency,
    "maskInteger",
    ()=>maskInteger,
    "maskPercent",
    ()=>maskPercent,
    "maskPhone",
    ()=>maskPhone,
    "normalizeCep",
    ()=>normalizeCep,
    "normalizeCnpj",
    ()=>normalizeCnpj,
    "normalizeCurrency",
    ()=>normalizeCurrency,
    "normalizeEmail",
    ()=>normalizeEmail,
    "normalizeInteger",
    ()=>normalizeInteger,
    "normalizePercent",
    ()=>normalizePercent,
    "normalizePhone",
    ()=>normalizePhone,
    "normalizeUrl",
    ()=>normalizeUrl,
    "onlyDigits",
    ()=>onlyDigits
]);
function onlyDigits(value) {
    return value.replace(/\D/g, "");
}
function maskPhone(value) {
    const digits = onlyDigits(value).slice(0, 11);
    if (digits.length === 0) return "";
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    // 11 dígitos — celular
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
function normalizePhone(value) {
    return onlyDigits(value).slice(0, 11);
}
function isValidPhone(value) {
    const digits = onlyDigits(value);
    if (digits.length < 10 || digits.length > 11) return false;
    const ddd = parseInt(digits.slice(0, 2), 10);
    if (ddd < 11 || ddd > 99) return false;
    // Celular deve começar com 9
    if (digits.length === 11 && digits[2] !== "9") return false;
    return true;
}
function maskCep(value) {
    const digits = onlyDigits(value).slice(0, 8);
    if (digits.length === 0) return "";
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}
function normalizeCep(value) {
    return onlyDigits(value).slice(0, 8);
}
function maskCnpj(value) {
    const digits = onlyDigits(value).slice(0, 14);
    if (digits.length === 0) return "";
    if (digits.length <= 2) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
    if (digits.length <= 8) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
    if (digits.length <= 12) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
}
function normalizeCnpj(value) {
    return onlyDigits(value).slice(0, 14);
}
function isValidCnpj(value) {
    const digits = onlyDigits(value);
    if (digits.length !== 14) return false;
    // Rejeitar todos os dígitos iguais
    if (/^(\d)\1{13}$/.test(digits)) return false;
    // Cálculo do primeiro dígito verificador
    const weights1 = [
        5,
        4,
        3,
        2,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2
    ];
    let sum = 0;
    for(let i = 0; i < 12; i++){
        sum += parseInt(digits[i], 10) * weights1[i];
    }
    let remainder = sum % 11;
    const digit1 = remainder < 2 ? 0 : 11 - remainder;
    if (parseInt(digits[12], 10) !== digit1) return false;
    // Cálculo do segundo dígito verificador
    const weights2 = [
        6,
        5,
        4,
        3,
        2,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2
    ];
    sum = 0;
    for(let i = 0; i < 13; i++){
        sum += parseInt(digits[i], 10) * weights2[i];
    }
    remainder = sum % 11;
    const digit2 = remainder < 2 ? 0 : 11 - remainder;
    if (parseInt(digits[13], 10) !== digit2) return false;
    return true;
}
function maskCurrency(value) {
    const digits = onlyDigits(value);
    if (digits.length === 0) return "";
    const numericValue = parseInt(digits, 10);
    const formatted = (numericValue / 100).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return `R$ ${formatted}`;
}
function normalizeCurrency(value) {
    const digits = onlyDigits(value);
    if (digits.length === 0) return 0;
    return parseInt(digits, 10) / 100;
}
function currencyFromNumber(value) {
    if (value === 0) return "";
    const cents = Math.round(value * 100);
    return maskCurrency(cents.toString());
}
function maskPercent(value) {
    // Permitir dígitos e vírgula
    const cleaned = value.replace(/[^\d,]/g, "");
    // Garantir apenas uma vírgula e max 2 decimais
    const parts = cleaned.split(",");
    if (parts.length > 2) return parts[0] + "," + parts[1];
    if (parts.length === 2 && parts[1].length > 2) {
        return parts[0] + "," + parts[1].slice(0, 2);
    }
    return cleaned;
}
function normalizePercent(value) {
    const cleaned = value.replace(/[^\d,]/g, "").replace(",", ".");
    const num = parseFloat(cleaned);
    if (isNaN(num)) return 0;
    return Math.min(100, Math.max(0, num));
}
function normalizeEmail(value) {
    return value.trim().toLowerCase();
}
function normalizeUrl(value) {
    const trimmed = value.trim();
    if (!trimmed) return "";
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return `https://${trimmed}`;
}
function maskInteger(value) {
    return onlyDigits(value);
}
function normalizeInteger(value) {
    const digits = onlyDigits(value);
    if (digits.length === 0) return 0;
    return parseInt(digits, 10);
}
}),
"[project]/src/lib/business-rules.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// Regras de Negocio — Flow CRM
// Funcoes puras sem dependencias de React ou stores.
// ============================================================================
__turbopack_context__.s([
    "PIPELINE_STAGE_ORDER",
    ()=>PIPELINE_STAGE_ORDER,
    "RESTAURANT_POSITIONS",
    ()=>RESTAURANT_POSITIONS,
    "calculateCardPatentScore",
    ()=>calculateCardPatentScore,
    "calculateHealthScore",
    ()=>calculateHealthScore,
    "calculateLeadScore",
    ()=>calculateLeadScore,
    "calculateProjectedCommission",
    ()=>calculateProjectedCommission,
    "calculateSlaDeadline",
    ()=>calculateSlaDeadline,
    "calculateTemperature",
    ()=>calculateTemperature,
    "formatCurrencyBRL",
    ()=>formatCurrencyBRL,
    "getActivityDueAt",
    ()=>getActivityDueAt,
    "getEffectiveActivityStatus",
    ()=>getEffectiveActivityStatus,
    "getPositionPatentScore",
    ()=>getPositionPatentScore,
    "isActivityOverdueAt",
    ()=>isActivityOverdueAt,
    "isActivitySlaRiskAt",
    ()=>isActivitySlaRiskAt
]);
// ─── Constantes ─────────────────────────────────────────────────────────────
/** Percentual padrao de comissao */ const DEFAULT_COMMISSION_PERCENTAGE = 5;
const PIPELINE_STAGE_ORDER = [
    "lead-in",
    "contato-feito",
    "reuniao-agendada",
    "proposta-enviada",
    "negociacao",
    "fechamento"
];
/** Ordem dos estagios do cliente */ const CLIENT_STAGE_ORDER = [
    "onboarding",
    "implantacao",
    "acompanhamento",
    "retencao",
    "churn"
];
const RESTAURANT_POSITIONS = [
    {
        label: "Proprietário",
        value: "proprietario",
        patentScore: 100
    },
    {
        label: "Sócio",
        value: "socio",
        patentScore: 90
    },
    {
        label: "Diretor",
        value: "diretor",
        patentScore: 80
    },
    {
        label: "Gerente Geral",
        value: "gerente-geral",
        patentScore: 70
    },
    {
        label: "Gerente",
        value: "gerente",
        patentScore: 60
    },
    {
        label: "Financeiro",
        value: "financeiro",
        patentScore: 50
    },
    {
        label: "Operacional",
        value: "operacional",
        patentScore: 40
    },
    {
        label: "Supervisor/Líder de Turno",
        value: "supervisor-lider-turno",
        patentScore: 30
    },
    {
        label: "Caixa/Recepcionista",
        value: "caixa-recepcionista",
        patentScore: 20
    },
    {
        label: "Garçom/Atendente",
        value: "garcom-atendente",
        patentScore: 10
    }
];
function getPositionPatentScore(position) {
    if (!position) return 0;
    return RESTAURANT_POSITIONS.find((item)=>item.value === position)?.patentScore ?? 0;
}
function calculateCardPatentScore(contacts) {
    if (contacts.length === 0) return 0;
    return Math.max(...contacts.map((contact)=>getPositionPatentScore(contact.cargo)));
}
function parseISODateLocal(dateStr) {
    const [yearRaw, monthRaw, dayRaw] = dateStr.split("-").map(Number);
    const year = Number.isFinite(yearRaw) ? yearRaw : 1970;
    const month = Number.isFinite(monthRaw) ? monthRaw - 1 : 0;
    const day = Number.isFinite(dayRaw) ? dayRaw : 1;
    return new Date(year, month, day);
}
function startOfDayLocal(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function getActivityDueAt(activity) {
    const dueDate = parseISODateLocal(activity.dueDate);
    if (activity.dueTime) {
        const [hoursRaw, minutesRaw] = activity.dueTime.split(":").map(Number);
        const hours = Number.isFinite(hoursRaw) ? hoursRaw : 23;
        const minutes = Number.isFinite(minutesRaw) ? minutesRaw : 59;
        dueDate.setHours(hours, minutes, 0, 0);
        return dueDate;
    }
    dueDate.setHours(23, 59, 59, 999);
    return dueDate;
}
function isActivityOverdueAt(activity, now = new Date()) {
    if (activity.status === "completed" || activity.status === "cancelled") {
        return false;
    }
    if (activity.status === "overdue") {
        return true;
    }
    if (activity.status !== "pending") {
        return false;
    }
    return getActivityDueAt(activity).getTime() < now.getTime();
}
function isActivitySlaRiskAt(activity, now = new Date()) {
    if (activity.status !== "pending" || isActivityOverdueAt(activity, now)) {
        return false;
    }
    const today = startOfDayLocal(now);
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const due = startOfDayLocal(parseISODateLocal(activity.dueDate));
    return due.getTime() >= today.getTime() && due.getTime() <= tomorrow.getTime();
}
function getEffectiveActivityStatus(activity, now = new Date()) {
    if (activity.status === "completed" || activity.status === "cancelled") {
        return activity.status;
    }
    if (activity.status === "pending" && isActivityOverdueAt(activity, now)) {
        return "overdue";
    }
    return activity.status;
}
function calculateTemperature(opportunity, averageDealValue = 10000, now = new Date()) {
    const updatedAt = new Date(opportunity.updatedAt);
    const daysSinceUpdate = Math.floor((now.getTime() - updatedAt.getTime()) / (1000 * 60 * 60 * 24));
    // Base: dias desde ultima atualizacao
    let score = 0;
    if (daysSinceUpdate < 3) {
        score = 3; // hot
    } else if (daysSinceUpdate <= 7) {
        score = 2; // warm
    } else {
        score = 1; // cold
    }
    // Bonus: valor acima da media
    if (opportunity.value > averageDealValue * 1.5) {
        score += 1;
    }
    // Bonus: estagios avancados (negociacao ou fechamento)
    const stageIndex = PIPELINE_STAGE_ORDER.indexOf(opportunity.stage);
    if (stageIndex >= 4) {
        score += 1;
    }
    // Mapear score para temperatura
    if (score >= 4) return "hot";
    if (score >= 2) return "warm";
    return "cold";
}
function calculateHealthScore(client, averageMonthlyRevenue = 10000, now = new Date()) {
    let total = 0;
    // 1. Dias desde ultima interacao (0-40 pontos)
    if (client.lastInteraction) {
        const lastInteraction = new Date(client.lastInteraction);
        const daysSince = Math.floor((now.getTime() - lastInteraction.getTime()) / (1000 * 60 * 60 * 24));
        // 0 dias = 40pts, 30+ dias = 0pts, linear
        total += Math.max(0, Math.round(40 * (1 - daysSince / 30)));
    }
    // Sem interacao registrada = 0 pontos
    // 2. Receita mensal relativa (0-20 pontos)
    if (averageMonthlyRevenue > 0) {
        const revenueRatio = client.monthlyRevenue / averageMonthlyRevenue;
        // ratio >= 1.0 = 20pts, ratio 0 = 0pts, capped at 20
        total += Math.min(20, Math.round(20 * revenueRatio));
    }
    // 3. Proximidade do vencimento do contrato (0-20 pontos)
    if (client.contractEnd) {
        const contractEnd = new Date(client.contractEnd);
        const daysUntilEnd = Math.floor((contractEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        if (daysUntilEnd <= 0) {
            total += 0; // Contrato expirado
        } else if (daysUntilEnd <= 30) {
            total += 5; // Proximo de expirar
        } else if (daysUntilEnd <= 90) {
            total += 10;
        } else if (daysUntilEnd <= 180) {
            total += 15;
        } else {
            total += 20; // Contrato seguro
        }
    } else {
        total += 15; // Sem data de fim = contrato aberto / indefinido
    }
    // 4. Progressao de estagio (0-20 pontos)
    const stageIndex = CLIENT_STAGE_ORDER.indexOf(client.stage);
    if (client.stage === "churn") {
        total += 0;
    } else {
        // onboarding=5, implantacao=10, acompanhamento=15, retencao=20
        total += (stageIndex + 1) * 5;
    }
    // Classificar
    const category = total >= 70 ? "good" : total >= 40 ? "warning" : "critical";
    return {
        numericScore: Math.min(100, total),
        category
    };
}
function calculateLeadScore(opportunity, relatedActivities, averageDealValue = 10000, now = new Date()) {
    let total = 0;
    // 1. Atividades (0-25 pontos) - 5pts por atividade, max 25
    const activityCount = relatedActivities.length;
    total += Math.min(25, activityCount * 5);
    // 2. Temperatura (0-25 pontos)
    switch(opportunity.temperature){
        case "hot":
            total += 25;
            break;
        case "warm":
            total += 15;
            break;
        case "cold":
            total += 5;
            break;
    }
    // 3. Valor relativo (0-20 pontos)
    if (averageDealValue > 0) {
        const valueRatio = opportunity.value / averageDealValue;
        total += Math.min(20, Math.round(20 * Math.min(valueRatio, 2) / 2));
    }
    // 4. Progressao de estagio (0-15 pontos)
    const stageIndex = PIPELINE_STAGE_ORDER.indexOf(opportunity.stage);
    // lead-in=0, contato-feito=3, reuniao-agendada=6, proposta-enviada=9, negociacao=12, fechamento=15
    total += stageIndex * 3;
    // 5. Dias no pipeline (0-15 pontos, decrescente — leads frescos valem mais)
    const createdAt = new Date(opportunity.createdAt);
    const daysInPipeline = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));
    total += Math.max(0, Math.round(15 * (1 - daysInPipeline / 60)));
    return Math.min(100, Math.max(0, total));
}
function calculateProjectedCommission(contractValue, commissionPercentage = DEFAULT_COMMISSION_PERCENTAGE) {
    const commissionValue = contractValue * (commissionPercentage / 100);
    return {
        commissionValue: Math.round(commissionValue * 100) / 100,
        percentage: commissionPercentage
    };
}
function calculateSlaDeadline(slaHours, now = new Date()) {
    const deadline = new Date(now.getTime() + slaHours * 60 * 60 * 1000);
    return deadline.toISOString();
}
function formatCurrencyBRL(value) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 0
    }).format(value);
}
}),
"[project]/src/lib/mock-data/helpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Generate a YYYY-MM-DD date string. */ __turbopack_context__.s([
    "d",
    ()=>d
]);
const d = (year, month, day)=>`${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}),
"[project]/src/lib/mock-data/users.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockUsers",
    ()=>mockUsers
]);
const mockUsers = [
    {
        id: "user-1",
        name: "Rafael Mendes",
        email: "rafael.mendes@flow.com.br",
        role: "master",
        isActive: true,
        phone: "(11) 99876-5432",
        unitId: "unit-1",
        unitName: "Matriz - Sao Paulo",
        createdAt: "2025-06-10",
        lastLogin: "2026-02-08"
    },
    {
        id: "user-2",
        name: "Camila Ferreira",
        email: "camila.ferreira@flow.com.br",
        role: "admin",
        isActive: true,
        phone: "(11) 98765-4321",
        unitId: "unit-1",
        unitName: "Matriz - Sao Paulo",
        createdAt: "2025-07-05",
        lastLogin: "2026-02-08"
    },
    {
        id: "user-3",
        name: "Lucas Oliveira",
        email: "lucas.oliveira@flow.com.br",
        role: "comercial",
        isActive: true,
        phone: "(21) 99654-3210",
        unitId: "unit-2",
        unitName: "Filial - Rio de Janeiro",
        createdAt: "2025-08-12",
        lastLogin: "2026-02-08"
    },
    {
        id: "user-4",
        name: "Juliana Costa",
        email: "juliana.costa@flow.com.br",
        role: "comercial",
        isActive: true,
        phone: "(11) 97654-3210",
        unitId: "unit-1",
        unitName: "Matriz - Sao Paulo",
        createdAt: "2025-08-20",
        lastLogin: "2026-02-07"
    },
    {
        id: "user-5",
        name: "Fernanda Lima",
        email: "fernanda.lima@flow.com.br",
        role: "cs",
        isActive: true,
        phone: "(11) 96543-2109",
        unitId: "unit-1",
        unitName: "Matriz - Sao Paulo",
        createdAt: "2025-09-08",
        lastLogin: "2026-02-08"
    },
    {
        id: "user-6",
        name: "Marcos Pereira",
        email: "marcos.pereira@flow.com.br",
        role: "comercial",
        isActive: true,
        phone: "(31) 95432-1098",
        unitId: "unit-3",
        unitName: "Filial - Belo Horizonte",
        createdAt: "2025-09-15",
        lastLogin: "2026-02-06"
    },
    {
        id: "user-7",
        name: "Carolina Santos",
        email: "carolina.santos@flow.com.br",
        role: "cs",
        isActive: true,
        phone: "(11) 94321-0987",
        unitId: "unit-1",
        unitName: "Matriz - Sao Paulo",
        createdAt: "2025-10-01",
        lastLogin: "2026-02-08"
    },
    {
        id: "user-8",
        name: "Pedro Almeida",
        email: "pedro.almeida@flow.com.br",
        role: "leitura",
        isActive: true,
        phone: "(21) 93210-9876",
        unitId: "unit-2",
        unitName: "Filial - Rio de Janeiro",
        createdAt: "2025-11-10",
        lastLogin: "2026-02-05"
    }
];
}),
"[project]/src/lib/mock-data/opportunities.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockOpportunities",
    ()=>mockOpportunities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/helpers.ts [app-ssr] (ecmascript)");
;
const mockOpportunities = [
    // === WON OPPORTUNITIES (40) - September 2025 to February 2026 ===
    // September 2025 (6 won)
    {
        id: "opp-w01",
        title: "Hortifruti premium - Restaurante Sabor da Terra",
        clientName: "Restaurante Sabor da Terra Ltda",
        clientId: "client-1",
        value: 84000,
        monthlyValue: 7000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "hortifruti",
            "restaurante"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 2),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 18),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 20),
        status: "won",
        source: "Indicacao",
        notes: "Contrato anual fechado"
    },
    {
        id: "opp-w02",
        title: "Proteinas congeladas - Hotel Beira Mar",
        clientName: "Hotel Beira Mar SA",
        clientId: "client-2",
        value: 180000,
        monthlyValue: 15000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "proteinas",
            "hotel"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 5),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 22),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 25),
        status: "won",
        source: "Feira Alimenta",
        notes: "Cliente premium"
    },
    {
        id: "opp-w03",
        title: "Embalagens eco - Delivery Gourmet",
        clientName: "Delivery Gourmet ME",
        clientId: "client-3",
        value: 36000,
        monthlyValue: 3000,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "embalagens",
            "delivery"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 8),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 25),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 28),
        status: "won",
        source: "Site"
    },
    {
        id: "opp-w04",
        title: "Laticinios - Padaria Trigo Dourado",
        clientName: "Padaria Trigo Dourado EIRELI",
        clientId: "client-4",
        value: 48000,
        monthlyValue: 4000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "laticinios",
            "padaria"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 10),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 26),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 28),
        status: "won",
        source: "Google Ads"
    },
    {
        id: "opp-w05",
        title: "Bebidas - Bar do Jorge",
        clientName: "Bar do Jorge Ltda",
        clientId: "client-5",
        value: 60000,
        monthlyValue: 5000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "bebidas",
            "bar"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 12),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 28),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 30),
        status: "won",
        source: "Indicacao"
    },
    {
        id: "opp-w06",
        title: "Insumos gerais - Cantina Escolar ABC",
        clientName: "Cantina Escolar ABC",
        clientId: "client-6",
        value: 72000,
        monthlyValue: 6000,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "insumos",
            "escola"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 15),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 29),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 30),
        status: "won",
        source: "Licitacao"
    },
    // October 2025 (7 won)
    {
        id: "opp-w07",
        title: "Carnes nobres - Churrascaria Fogo Alto",
        clientName: "Churrascaria Fogo Alto SA",
        clientId: "client-7",
        value: 240000,
        monthlyValue: 20000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "carnes",
            "churrascaria"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 1),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 18),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 20),
        status: "won",
        source: "Feira Alimenta"
    },
    {
        id: "opp-w08",
        title: "Hortifruti organico - Restaurante Verde Vida",
        clientName: "Restaurante Verde Vida ME",
        clientId: "client-8",
        value: 96000,
        monthlyValue: 8000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "hortifruti",
            "organico"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 3),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 20),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 22),
        status: "won",
        source: "LinkedIn"
    },
    {
        id: "opp-w09",
        title: "Utensilios - Escola Gastronomia SP",
        clientName: "Escola Gastronomia SP",
        clientId: "client-9",
        value: 85000,
        monthlyValue: 7083,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "utensilios",
            "escola"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 5),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 22),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 25),
        status: "won",
        source: "Site"
    },
    {
        id: "opp-w10",
        title: "Congelados - Rede Pousadas Sul",
        clientName: "Rede Pousadas Sul Ltda",
        clientId: "client-10",
        value: 144000,
        monthlyValue: 12000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "congelados",
            "pousada"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 8),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 25),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 28),
        status: "won",
        source: "Google Ads"
    },
    {
        id: "opp-w11",
        title: "Embalagens - Food Truck Urbano",
        clientName: "Food Truck Urbano ME",
        clientId: "client-11",
        value: 24000,
        monthlyValue: 2000,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "embalagens",
            "foodtruck"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 10),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 26),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 28),
        status: "won",
        source: "Indicacao"
    },
    {
        id: "opp-w12",
        title: "Bebidas premium - Rooftop Bar",
        clientName: "Rooftop Bar SA",
        clientId: "client-12",
        value: 120000,
        monthlyValue: 10000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "bebidas",
            "bar",
            "premium"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 12),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 28),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 30),
        status: "won",
        source: "Indicacao"
    },
    {
        id: "opp-w13",
        title: "Laticinios especiais - Confeitaria Doce Mel",
        clientName: "Confeitaria Doce Mel EIRELI",
        clientId: "client-13",
        value: 42000,
        monthlyValue: 3500,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "laticinios",
            "confeitaria"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 15),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 30),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 31),
        status: "won",
        source: "Site"
    },
    // November 2025 (7 won)
    {
        id: "opp-w14",
        title: "Proteinas - Restaurante Executivo Prime",
        clientName: "Restaurante Executivo Prime Ltda",
        clientId: "client-14",
        value: 156000,
        monthlyValue: 13000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "proteinas",
            "executivo"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 1),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 18),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 20),
        status: "won",
        source: "LinkedIn"
    },
    {
        id: "opp-w15",
        title: "Hortifruti - Buffet Casamento Real",
        clientName: "Buffet Casamento Real SA",
        clientId: "client-15",
        value: 180000,
        monthlyValue: 15000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "hortifruti",
            "buffet",
            "eventos"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 3),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 20),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 22),
        status: "won",
        source: "Feira Alimenta"
    },
    {
        id: "opp-w16",
        title: "Insumos - Hospital Santa Cruz",
        clientName: "Hospital Santa Cruz",
        clientId: "client-16",
        value: 288000,
        monthlyValue: 24000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "insumos",
            "hospital",
            "institucional"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 5),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 22),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 25),
        status: "won",
        source: "Licitacao"
    },
    {
        id: "opp-w17",
        title: "Congelados - Rede Fast Burger",
        clientName: "Rede Fast Burger Ltda",
        clientId: "client-17",
        value: 108000,
        monthlyValue: 9000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "congelados",
            "fastfood"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 8),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 25),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 28),
        status: "won",
        source: "Google Ads"
    },
    {
        id: "opp-w18",
        title: "Bebidas - Clube Recreativo Central",
        clientName: "Clube Recreativo Central",
        clientId: "client-18",
        value: 96000,
        monthlyValue: 8000,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "bebidas",
            "clube"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 10),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 26),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 28),
        status: "won",
        source: "Indicacao"
    },
    {
        id: "opp-w19",
        title: "Embalagens - Pizzaria Napoli",
        clientName: "Pizzaria Napoli ME",
        clientId: "client-19",
        value: 30000,
        monthlyValue: 2500,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "embalagens",
            "pizzaria"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 12),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 28),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 30),
        status: "won",
        source: "Site"
    },
    {
        id: "opp-w20",
        title: "Carnes - Steakhouse Premium",
        clientName: "Steakhouse Premium SA",
        clientId: "client-20",
        value: 300000,
        monthlyValue: 25000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "carnes",
            "premium"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 15),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 29),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 30),
        status: "won",
        source: "Indicacao"
    },
    // December 2025 (7 won)
    {
        id: "opp-w21",
        title: "Hortifruti - Resort Praia Azul",
        clientName: "Resort Praia Azul SA",
        clientId: "client-21",
        value: 216000,
        monthlyValue: 18000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "hortifruti",
            "resort"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 1),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 18),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 20),
        status: "won",
        source: "Feira Alimenta"
    },
    {
        id: "opp-w22",
        title: "Proteinas - Restaurante Japonês Sushi Ya",
        clientName: "Sushi Ya Ltda",
        clientId: "client-22",
        value: 132000,
        monthlyValue: 11000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "proteinas",
            "japones"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 3),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 19),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 22),
        status: "won",
        source: "LinkedIn"
    },
    {
        id: "opp-w23",
        title: "Laticinios - Rede Gelaterias Itália",
        clientName: "Rede Gelaterias Itália Ltda",
        clientId: "client-23",
        value: 72000,
        monthlyValue: 6000,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "laticinios",
            "gelateria"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 5),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 20),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 23),
        status: "won",
        source: "Site"
    },
    {
        id: "opp-w24",
        title: "Bebidas - Casa de Shows Arena",
        clientName: "Casa de Shows Arena SA",
        clientId: "client-24",
        value: 192000,
        monthlyValue: 16000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "bebidas",
            "eventos"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 8),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 22),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 26),
        status: "won",
        source: "Google Ads"
    },
    {
        id: "opp-w25",
        title: "Insumos - Catering Empresarial VIP",
        clientName: "Catering Empresarial VIP",
        clientId: "client-25",
        value: 144000,
        monthlyValue: 12000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "insumos",
            "catering"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 10),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 24),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 27),
        status: "won",
        source: "Indicacao"
    },
    {
        id: "opp-w26",
        title: "Congelados - Restaurante Mineiro Raiz",
        clientName: "Restaurante Mineiro Raiz ME",
        clientId: "client-26",
        value: 60000,
        monthlyValue: 5000,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "congelados",
            "mineiro"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 12),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 26),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 28),
        status: "won",
        source: "Site"
    },
    {
        id: "opp-w27",
        title: "Carnes - Churrascaria Gaúcha Autêntica",
        clientName: "Churrascaria Gaúcha Autêntica Ltda",
        clientId: "client-27",
        value: 204000,
        monthlyValue: 17000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "carnes",
            "churrascaria"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 15),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 28),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 30),
        status: "won",
        source: "Indicacao"
    },
    // January 2026 (7 won)
    {
        id: "opp-w28",
        title: "Hortifruti - Restaurante Fazenda Velha",
        clientName: "Restaurante Fazenda Velha SA",
        clientId: "client-28",
        value: 168000,
        monthlyValue: 14000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "hortifruti",
            "fazenda"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 2),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 18),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20),
        status: "won",
        source: "Feira Alimenta"
    },
    {
        id: "opp-w29",
        title: "Proteinas - Hotel Montanha Resort",
        clientName: "Hotel Montanha Resort SA",
        clientId: "client-29",
        value: 252000,
        monthlyValue: 21000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "proteinas",
            "hotel",
            "resort"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 5),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 23),
        status: "won",
        source: "LinkedIn"
    },
    {
        id: "opp-w30",
        title: "Embalagens - Rede Açaí Beach",
        clientName: "Rede Açaí Beach Ltda",
        clientId: "client-30",
        value: 48000,
        monthlyValue: 4000,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "embalagens",
            "acai"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 8),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 22),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25),
        status: "won",
        source: "Site"
    },
    {
        id: "opp-w31",
        title: "Bebidas - Cervejaria Artesanal Hop",
        clientName: "Cervejaria Artesanal Hop ME",
        clientId: "client-31",
        value: 84000,
        monthlyValue: 7000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "bebidas",
            "cervejaria"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 10),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28),
        status: "won",
        source: "Indicacao"
    },
    {
        id: "opp-w32",
        title: "Laticinios - Cafeteria Grão Especial",
        clientName: "Cafeteria Grão Especial EIRELI",
        clientId: "client-32",
        value: 36000,
        monthlyValue: 3000,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "laticinios",
            "cafeteria"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 12),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 27),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 29),
        status: "won",
        source: "Google Ads"
    },
    {
        id: "opp-w33",
        title: "Insumos - Restaurante Árabe Habibi",
        clientName: "Restaurante Árabe Habibi Ltda",
        clientId: "client-33",
        value: 96000,
        monthlyValue: 8000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "insumos",
            "arabe"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 15),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30),
        status: "won",
        source: "Site"
    },
    {
        id: "opp-w34",
        title: "Congelados - Rede Tapioca Express",
        clientName: "Rede Tapioca Express ME",
        clientId: "client-34",
        value: 54000,
        monthlyValue: 4500,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "congelados",
            "tapioca"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 18),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 31),
        status: "won",
        source: "Indicacao"
    },
    // February 2026 (6 won so far)
    {
        id: "opp-w35",
        title: "Carnes premium - Restaurante Paris Bistro",
        clientName: "Restaurante Paris Bistro SA",
        clientId: "client-35",
        value: 228000,
        monthlyValue: 19000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "carnes",
            "frances",
            "premium"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 1),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        status: "won",
        source: "Feira Alimenta"
    },
    {
        id: "opp-w36",
        title: "Hortifruti - Spa Wellness Center",
        clientName: "Spa Wellness Center Ltda",
        value: 108000,
        monthlyValue: 9000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "hortifruti",
            "spa",
            "saudavel"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 2),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        status: "won",
        source: "LinkedIn"
    },
    {
        id: "opp-w37",
        title: "Proteinas - Restaurante Nordestino Sertão",
        clientName: "Restaurante Nordestino Sertão ME",
        value: 72000,
        monthlyValue: 6000,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "proteinas",
            "nordestino"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 3),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        status: "won",
        source: "Site"
    },
    {
        id: "opp-w38",
        title: "Bebidas - Pub Irlandês Dublin",
        clientName: "Pub Irlandês Dublin Ltda",
        value: 120000,
        monthlyValue: 10000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "bebidas",
            "pub"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 4),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        status: "won",
        source: "Indicacao"
    },
    {
        id: "opp-w39",
        title: "Embalagens - Dark Kitchen Central",
        clientName: "Dark Kitchen Central ME",
        value: 42000,
        monthlyValue: 3500,
        stage: "fechamento",
        temperature: "warm",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "embalagens",
            "darkkitchen"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        status: "won",
        source: "Google Ads"
    },
    {
        id: "opp-w40",
        title: "Laticinios - Padaria Artesanal Fermento",
        clientName: "Padaria Artesanal Fermento EIRELI",
        value: 60000,
        monthlyValue: 5000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "laticinios",
            "padaria",
            "artesanal"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        status: "won",
        source: "Site"
    },
    // === LOST OPPORTUNITIES (15) ===
    {
        id: "opp-l01",
        title: "Hortifruti - Restaurante Sol Nascente",
        clientName: "Restaurante Sol Nascente Ltda",
        value: 96000,
        monthlyValue: 8000,
        stage: "proposta-enviada",
        temperature: "cold",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "hortifruti"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 10),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 5),
        status: "lost",
        lossReason: "Preço",
        source: "Site",
        notes: "Optou por concorrente mais barato"
    },
    {
        id: "opp-l02",
        title: "Proteinas - Hotel Centro Executivo",
        clientName: "Hotel Centro Executivo SA",
        value: 144000,
        monthlyValue: 12000,
        stage: "negociacao",
        temperature: "warm",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "proteinas",
            "hotel"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 15),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 10),
        status: "lost",
        lossReason: "Prazo",
        source: "Indicacao",
        notes: "Não conseguimos atender prazo de entrega"
    },
    {
        id: "opp-l03",
        title: "Bebidas - Bar Universitário",
        clientName: "Bar Universitário ME",
        value: 36000,
        monthlyValue: 3000,
        stage: "contato-feito",
        temperature: "cold",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "bebidas"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 1),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 20),
        status: "lost",
        lossReason: "Sem retorno",
        source: "Google Ads"
    },
    {
        id: "opp-l04",
        title: "Carnes - Restaurante Tradicional",
        clientName: "Restaurante Tradicional Ltda",
        value: 180000,
        monthlyValue: 15000,
        stage: "proposta-enviada",
        temperature: "warm",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "carnes"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 10),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 5),
        status: "lost",
        lossReason: "Concorrência",
        source: "Feira Alimenta"
    },
    {
        id: "opp-l05",
        title: "Embalagens - Delivery Express Food",
        clientName: "Delivery Express Food ME",
        value: 24000,
        monthlyValue: 2000,
        stage: "reuniao-agendada",
        temperature: "cold",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "embalagens"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 20),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 10),
        status: "lost",
        lossReason: "Sem retorno",
        source: "Site"
    },
    {
        id: "opp-l06",
        title: "Laticinios - Sorveteria Tropical",
        clientName: "Sorveteria Tropical EIRELI",
        value: 48000,
        monthlyValue: 4000,
        stage: "negociacao",
        temperature: "warm",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "laticinios"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 1),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 1),
        status: "lost",
        lossReason: "Orçamento",
        source: "LinkedIn"
    },
    {
        id: "opp-l07",
        title: "Insumos - Cantina Empresa Tech",
        clientName: "Cantina Empresa Tech",
        value: 120000,
        monthlyValue: 10000,
        stage: "proposta-enviada",
        temperature: "cold",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "insumos",
            "corporativo"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 10),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 10),
        status: "lost",
        lossReason: "Projeto cancelado",
        source: "Licitacao"
    },
    {
        id: "opp-l08",
        title: "Congelados - Restaurante Família",
        clientName: "Restaurante Família ME",
        value: 60000,
        monthlyValue: 5000,
        stage: "contato-feito",
        temperature: "cold",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "congelados"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 20),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 15),
        status: "lost",
        lossReason: "Sem retorno",
        source: "Google Ads"
    },
    {
        id: "opp-l09",
        title: "Carnes - Hamburgueria Grill",
        clientName: "Hamburgueria Grill Ltda",
        value: 84000,
        monthlyValue: 7000,
        stage: "negociacao",
        temperature: "warm",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "carnes",
            "hamburgueria"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 1),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 5),
        status: "lost",
        lossReason: "Preço",
        source: "Indicacao"
    },
    {
        id: "opp-l10",
        title: "Bebidas - Danceteria Night",
        clientName: "Danceteria Night SA",
        value: 156000,
        monthlyValue: 13000,
        stage: "proposta-enviada",
        temperature: "warm",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "bebidas",
            "eventos"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 10),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 10),
        status: "lost",
        lossReason: "Concorrência",
        source: "Feira Alimenta"
    },
    {
        id: "opp-l11",
        title: "Hortifruti - Restaurante Diet Center",
        clientName: "Restaurante Diet Center ME",
        value: 72000,
        monthlyValue: 6000,
        stage: "reuniao-agendada",
        temperature: "cold",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "hortifruti",
            "dieta"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 20),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 15),
        status: "lost",
        lossReason: "Sem retorno",
        source: "Site"
    },
    {
        id: "opp-l12",
        title: "Proteinas - Restaurante Fitness",
        clientName: "Restaurante Fitness EIRELI",
        value: 96000,
        monthlyValue: 8000,
        stage: "negociacao",
        temperature: "warm",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "proteinas",
            "fitness"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 5),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25),
        status: "lost",
        lossReason: "Orçamento",
        source: "LinkedIn"
    },
    {
        id: "opp-l13",
        title: "Embalagens - Marmitaria Popular",
        clientName: "Marmitaria Popular ME",
        value: 18000,
        monthlyValue: 1500,
        stage: "contato-feito",
        temperature: "cold",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "embalagens"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 15),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 1),
        status: "lost",
        lossReason: "Sem retorno",
        source: "Google Ads"
    },
    {
        id: "opp-l14",
        title: "Laticinios - Lanchonete Esquina",
        clientName: "Lanchonete Esquina ME",
        value: 30000,
        monthlyValue: 2500,
        stage: "proposta-enviada",
        temperature: "cold",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "laticinios"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5),
        status: "lost",
        lossReason: "Preço",
        source: "Site"
    },
    {
        id: "opp-l15",
        title: "Insumos - Cantina Faculdade ABC",
        clientName: "Cantina Faculdade ABC",
        value: 84000,
        monthlyValue: 7000,
        stage: "negociacao",
        temperature: "warm",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "insumos",
            "faculdade"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        status: "lost",
        lossReason: "Licitação não ganha",
        source: "Licitacao"
    },
    // === OPEN OPPORTUNITIES (10) - Currently in pipeline ===
    {
        id: "opp-o01",
        title: "Carnes nobres - Restaurante Mediterrâneo",
        clientName: "Restaurante Mediterrâneo SA",
        value: 192000,
        monthlyValue: 16000,
        stage: "lead-in",
        temperature: "warm",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "carnes",
            "mediterraneo"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 3, 15),
        status: "open",
        source: "Feira Alimenta",
        notes: "Primeiro contato na feira, muito interessado"
    },
    {
        id: "opp-o02",
        title: "Hortifruti premium - Hotel Fazenda Boa Vista",
        clientName: "Hotel Fazenda Boa Vista Ltda",
        value: 240000,
        monthlyValue: 20000,
        stage: "contato-feito",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "hortifruti",
            "hotel",
            "fazenda"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 3),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 3, 10),
        status: "open",
        source: "LinkedIn",
        notes: "Reunião online agendada"
    },
    {
        id: "opp-o03",
        title: "Proteinas congeladas - Rede Restaurantes Executivos",
        clientName: "Rede Restaurantes Executivos SA",
        value: 360000,
        monthlyValue: 30000,
        stage: "reuniao-agendada",
        temperature: "hot",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "proteinas",
            "rede",
            "executivo"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 1),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 3, 5),
        status: "open",
        source: "Indicacao",
        notes: "Grande oportunidade - 5 unidades"
    },
    {
        id: "opp-o04",
        title: "Bebidas importadas - Wine Bar Sommelier",
        clientName: "Wine Bar Sommelier EIRELI",
        value: 180000,
        monthlyValue: 15000,
        stage: "proposta-enviada",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "bebidas",
            "vinhos",
            "premium"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 20),
        status: "open",
        source: "Site",
        notes: "Proposta entregue, aguardando retorno"
    },
    {
        id: "opp-o05",
        title: "Laticinios especiais - Rede Padarias Artesanais",
        clientName: "Rede Padarias Artesanais Ltda",
        value: 144000,
        monthlyValue: 12000,
        stage: "negociacao",
        temperature: "hot",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "laticinios",
            "padaria",
            "rede"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 15),
        status: "open",
        source: "Google Ads",
        notes: "Negociando prazo de pagamento"
    },
    {
        id: "opp-o06",
        title: "Embalagens sustentáveis - Green Food Delivery",
        clientName: "Green Food Delivery ME",
        value: 60000,
        monthlyValue: 5000,
        stage: "fechamento",
        temperature: "hot",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "embalagens",
            "sustentavel",
            "delivery"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 10),
        status: "open",
        source: "LinkedIn",
        notes: "Contrato em revisão jurídica"
    },
    {
        id: "opp-o07",
        title: "Insumos gerais - Hospital Regional Norte",
        clientName: "Hospital Regional Norte",
        value: 480000,
        monthlyValue: 40000,
        stage: "lead-in",
        temperature: "warm",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "insumos",
            "hospital",
            "licitacao"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 4, 30),
        status: "open",
        source: "Licitacao",
        notes: "Preparando documentação para licitação"
    },
    {
        id: "opp-o08",
        title: "Congelados premium - Rede Pousadas Litoral Norte",
        clientName: "Rede Pousadas Litoral Norte SA",
        value: 216000,
        monthlyValue: 18000,
        stage: "contato-feito",
        temperature: "warm",
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        tags: [
            "congelados",
            "pousada",
            "litoral"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 4),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 3, 20),
        status: "open",
        source: "Feira Alimenta",
        notes: "Demanda alta na temporada de verão"
    },
    {
        id: "opp-o09",
        title: "Carnes - Restaurante Gaúcho Pampa",
        clientName: "Restaurante Gaúcho Pampa Ltda",
        value: 168000,
        monthlyValue: 14000,
        stage: "reuniao-agendada",
        temperature: "hot",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        tags: [
            "carnes",
            "gaucho"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 2),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 28),
        status: "open",
        source: "Indicacao",
        notes: "Reunião presencial marcada para amanhã"
    },
    {
        id: "opp-o10",
        title: "Bebidas - Beach Club Maré Alta",
        clientName: "Beach Club Maré Alta SA",
        value: 300000,
        monthlyValue: 25000,
        stage: "proposta-enviada",
        temperature: "hot",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        tags: [
            "bebidas",
            "beach",
            "premium"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 25),
        status: "open",
        source: "Google Ads",
        notes: "Proposta competitiva enviada"
    },
    // === OPEN OPPORTUNITIES (user-1) - Created for testing Pipeline ===
    {
        id: "opp-u1-01",
        title: "Vinhos Importados - Restaurante La Bella",
        clientName: "Restaurante La Bella Ltda",
        value: 85000,
        monthlyValue: 7000,
        stage: "lead-in",
        temperature: "hot",
        responsibleId: "user-1",
        responsibleName: "Rafael Mendes",
        tags: [
            "vinhos",
            "italiano"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 3, 1),
        status: "open",
        source: "Indicacao",
        notes: "Interesse em carta de vinhos exclusivos"
    },
    {
        id: "opp-u1-02",
        title: "Cervejas Artesanais - Bar do Léo",
        clientName: "Bar do Léo ME",
        value: 45000,
        monthlyValue: 3500,
        stage: "contato-feito",
        temperature: "warm",
        responsibleId: "user-1",
        responsibleName: "Rafael Mendes",
        tags: [
            "cerveja",
            "bar"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 3, 5),
        status: "open",
        source: "Site",
        notes: "Agendar visita para degustação"
    },
    {
        id: "opp-u1-03",
        title: "Insumos - Padaria Pão Dourado",
        clientName: "Padaria Pão Dourado EIRELI",
        value: 120000,
        monthlyValue: 10000,
        stage: "reuniao-agendada",
        temperature: "hot",
        responsibleId: "user-1",
        responsibleName: "Rafael Mendes",
        tags: [
            "padaria",
            "insumos"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 28),
        status: "open",
        source: "Google Ads",
        notes: "Reunião para apresentar catálogo de farinhas"
    },
    {
        id: "opp-u1-04",
        title: "Carnes Premium - Churrascaria Boi Preto",
        clientName: "Churrascaria Boi Preto SA",
        value: 350000,
        monthlyValue: 30000,
        stage: "proposta-enviada",
        temperature: "hot",
        responsibleId: "user-1",
        responsibleName: "Rafael Mendes",
        tags: [
            "churrascaria",
            "carnes"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 1),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 20),
        status: "open",
        source: "Feira Alimenta",
        notes: "Aguardando aprovação da diretoria"
    },
    {
        id: "opp-u1-05",
        title: "Hortifruti - Rede de Hotéis Sol",
        clientName: "Rede de Hotéis Sol SA",
        value: 500000,
        monthlyValue: 40000,
        stage: "negociacao",
        temperature: "hot",
        responsibleId: "user-1",
        responsibleName: "Rafael Mendes",
        tags: [
            "hotel",
            "rede",
            "hortifruti"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        expectedCloseDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 15),
        status: "open",
        source: "Linkedin",
        notes: "Negociando contrato global para a rede"
    }
];
}),
"[project]/src/lib/mock-data/clients.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockClients",
    ()=>mockClients
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/helpers.ts [app-ssr] (ecmascript)");
;
const mockClients = [
    // Onboarding (5)
    {
        id: "client-35",
        companyName: "Restaurante Paris Bistro SA",
        cnpj: "35.678.901/0001-35",
        contactName: "Jean Pierre",
        contactEmail: "jean@parisbistro.com.br",
        contactPhone: "(11) 3456-7835",
        stage: "onboarding",
        healthScore: "good",
        monthlyRevenue: 19000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "frances",
            "premium"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8)
    },
    {
        id: "client-new1",
        companyName: "Spa Wellness Center Ltda",
        cnpj: "36.789.012/0001-36",
        contactName: "Marina Wellness",
        contactEmail: "marina@wellnesscenter.com.br",
        contactPhone: "(11) 3567-8936",
        stage: "onboarding",
        healthScore: "good",
        monthlyRevenue: 9000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "spa",
            "saudavel"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8)
    },
    {
        id: "client-new2",
        companyName: "Restaurante Nordestino Sertão ME",
        cnpj: "37.890.123/0001-37",
        contactName: "José Sertão",
        contactEmail: "jose@sertaorest.com.br",
        contactPhone: "(81) 3678-9037",
        stage: "onboarding",
        healthScore: "good",
        monthlyRevenue: 6000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "nordestino"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8)
    },
    {
        id: "client-new3",
        companyName: "Pub Irlandês Dublin Ltda",
        cnpj: "38.901.234/0001-38",
        contactName: "Patrick Dublin",
        contactEmail: "patrick@dublinpub.com.br",
        contactPhone: "(11) 3789-0138",
        stage: "onboarding",
        healthScore: "good",
        monthlyRevenue: 10000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "pub",
            "irlandes"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8)
    },
    {
        id: "client-new4",
        companyName: "Dark Kitchen Central ME",
        cnpj: "39.012.345/0001-39",
        contactName: "Diego Central",
        contactEmail: "diego@darkkitchen.com.br",
        contactPhone: "(11) 3890-1239",
        stage: "onboarding",
        healthScore: "good",
        monthlyRevenue: 3500,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "darkkitchen",
            "delivery"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8)
    },
    // Implantacao (8)
    {
        id: "client-28",
        companyName: "Restaurante Fazenda Velha SA",
        cnpj: "28.901.234/0001-28",
        contactName: "Joaquim Fazenda",
        contactEmail: "joaquim@fazendavelha.com.br",
        contactPhone: "(19) 3901-2328",
        stage: "implantacao",
        healthScore: "good",
        monthlyRevenue: 14000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "fazenda",
            "rustico"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5)
    },
    {
        id: "client-29",
        companyName: "Hotel Montanha Resort SA",
        cnpj: "29.012.345/0001-29",
        contactName: "Carlos Montanha",
        contactEmail: "carlos@montanharesort.com.br",
        contactPhone: "(24) 3012-3429",
        stage: "implantacao",
        healthScore: "good",
        monthlyRevenue: 21000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 23),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "hotel",
            "resort",
            "montanha"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 23),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6)
    },
    {
        id: "client-30",
        companyName: "Rede Açaí Beach Ltda",
        cnpj: "30.123.456/0001-30",
        contactName: "Bruno Açaí",
        contactEmail: "bruno@acaibeach.com.br",
        contactPhone: "(21) 3123-4530",
        stage: "implantacao",
        healthScore: "good",
        monthlyRevenue: 4000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "acai",
            "beach"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 4),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 4)
    },
    {
        id: "client-31",
        companyName: "Cervejaria Artesanal Hop ME",
        cnpj: "31.234.567/0001-31",
        contactName: "Ricardo Hop",
        contactEmail: "ricardo@hopbeer.com.br",
        contactPhone: "(11) 3234-5631",
        stage: "implantacao",
        healthScore: "warning",
        monthlyRevenue: 7000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "cervejaria",
            "artesanal"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 3),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 3)
    },
    {
        id: "client-32",
        companyName: "Cafeteria Grão Especial EIRELI",
        cnpj: "32.345.678/0001-32",
        contactName: "Ana Grão",
        contactEmail: "ana@graoespecial.com.br",
        contactPhone: "(11) 3345-6732",
        stage: "implantacao",
        healthScore: "good",
        monthlyRevenue: 3000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 29),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "cafeteria",
            "especial"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 29),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5)
    },
    {
        id: "client-33",
        companyName: "Restaurante Árabe Habibi Ltda",
        cnpj: "33.456.789/0001-33",
        contactName: "Ahmed Habibi",
        contactEmail: "ahmed@habibi.com.br",
        contactPhone: "(11) 3456-7833",
        stage: "implantacao",
        healthScore: "good",
        monthlyRevenue: 8000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "arabe",
            "mediterraneo"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6)
    },
    {
        id: "client-34",
        companyName: "Rede Tapioca Express ME",
        cnpj: "34.567.890/0001-34",
        contactName: "Fernanda Tapioca",
        contactEmail: "fernanda@tapiocaexpress.com.br",
        contactPhone: "(81) 3567-8934",
        stage: "implantacao",
        healthScore: "good",
        monthlyRevenue: 4500,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 31),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "tapioca",
            "nordeste"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 31),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7)
    },
    {
        id: "client-new5",
        companyName: "Padaria Artesanal Fermento EIRELI",
        cnpj: "40.123.456/0001-40",
        contactName: "Marcos Fermento",
        contactEmail: "marcos@padariafermento.com.br",
        contactPhone: "(11) 4012-3540",
        stage: "implantacao",
        healthScore: "good",
        monthlyRevenue: 5000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "padaria",
            "artesanal"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8)
    },
    // Acompanhamento (12) - Clients with 2+ months
    {
        id: "client-1",
        companyName: "Restaurante Sabor da Terra Ltda",
        cnpj: "01.234.567/0001-01",
        contactName: "Maria Terra",
        contactEmail: "maria@sabordaterra.com.br",
        contactPhone: "(11) 3123-4501",
        stage: "acompanhamento",
        healthScore: "good",
        monthlyRevenue: 7000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 20),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 9, 20),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "hortifruti",
            "restaurante"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 20),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6)
    },
    {
        id: "client-2",
        companyName: "Hotel Beira Mar SA",
        cnpj: "02.345.678/0001-02",
        contactName: "Roberto Mar",
        contactEmail: "roberto@beiramar.com.br",
        contactPhone: "(21) 3234-5602",
        stage: "acompanhamento",
        healthScore: "good",
        monthlyRevenue: 15000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 25),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 9, 25),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "hotel",
            "premium"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 25),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7)
    },
    {
        id: "client-7",
        companyName: "Churrascaria Fogo Alto SA",
        cnpj: "07.890.123/0001-07",
        contactName: "Pedro Fogo",
        contactEmail: "pedro@fogoalto.com.br",
        contactPhone: "(11) 3890-1207",
        stage: "acompanhamento",
        healthScore: "good",
        monthlyRevenue: 20000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 20),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 10, 20),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "churrascaria",
            "carnes"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 20),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5)
    },
    {
        id: "client-14",
        companyName: "Restaurante Executivo Prime Ltda",
        cnpj: "14.567.890/0001-14",
        contactName: "André Prime",
        contactEmail: "andre@executivoprime.com.br",
        contactPhone: "(11) 3567-8914",
        stage: "acompanhamento",
        healthScore: "good",
        monthlyRevenue: 13000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 20),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 11, 20),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "executivo",
            "corporativo"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 20),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6)
    },
    {
        id: "client-15",
        companyName: "Buffet Casamento Real SA",
        cnpj: "15.678.901/0001-15",
        contactName: "Letícia Real",
        contactEmail: "leticia@casamentoreal.com.br",
        contactPhone: "(11) 3678-9015",
        stage: "acompanhamento",
        healthScore: "good",
        monthlyRevenue: 15000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 22),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 11, 22),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "buffet",
            "eventos",
            "casamento"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 22),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 4),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 4)
    },
    {
        id: "client-16",
        companyName: "Hospital Santa Cruz",
        cnpj: "16.789.012/0001-16",
        contactName: "Dr. Paulo Cruz",
        contactEmail: "paulo@santacruz.org.br",
        contactPhone: "(11) 3789-0116",
        stage: "acompanhamento",
        healthScore: "good",
        monthlyRevenue: 24000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 25),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 11, 25),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "hospital",
            "institucional"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 25),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7)
    },
    {
        id: "client-20",
        companyName: "Steakhouse Premium SA",
        cnpj: "20.123.456/0001-20",
        contactName: "Victor Premium",
        contactEmail: "victor@steakhousepremium.com.br",
        contactPhone: "(11) 4123-4520",
        stage: "acompanhamento",
        healthScore: "good",
        monthlyRevenue: 25000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 30),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 11, 30),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "steakhouse",
            "premium"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 30),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5)
    },
    {
        id: "client-21",
        companyName: "Resort Praia Azul SA",
        cnpj: "21.234.567/0001-21",
        contactName: "Marcela Azul",
        contactEmail: "marcela@praiaazul.com.br",
        contactPhone: "(13) 4234-5621",
        stage: "acompanhamento",
        healthScore: "warning",
        monthlyRevenue: 18000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 20),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 12, 20),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "resort",
            "litoral"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 20),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 3),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25)
    },
    {
        id: "client-24",
        companyName: "Casa de Shows Arena SA",
        cnpj: "24.567.890/0001-24",
        contactName: "Rogério Arena",
        contactEmail: "rogerio@arenashows.com.br",
        contactPhone: "(11) 4567-8924",
        stage: "acompanhamento",
        healthScore: "good",
        monthlyRevenue: 16000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 26),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 12, 26),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "eventos",
            "shows"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 26),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6)
    },
    {
        id: "client-25",
        companyName: "Catering Empresarial VIP",
        cnpj: "25.678.901/0001-25",
        contactName: "Helena VIP",
        contactEmail: "helena@cateringvip.com.br",
        contactPhone: "(11) 4678-9025",
        stage: "acompanhamento",
        healthScore: "good",
        monthlyRevenue: 12000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 27),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 12, 27),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "catering",
            "corporativo"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 27),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7)
    },
    {
        id: "client-27",
        companyName: "Churrascaria Gaúcha Autêntica Ltda",
        cnpj: "27.890.123/0001-27",
        contactName: "Beto Gaúcho",
        contactEmail: "beto@gauchaautentica.com.br",
        contactPhone: "(51) 4890-1227",
        stage: "acompanhamento",
        healthScore: "good",
        monthlyRevenue: 17000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 30),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 12, 30),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "churrascaria",
            "gaucho"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 30),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 4),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 4)
    },
    {
        id: "client-22",
        companyName: "Sushi Ya Ltda",
        cnpj: "22.345.678/0001-22",
        contactName: "Takeshi Ya",
        contactEmail: "takeshi@sushiya.com.br",
        contactPhone: "(11) 4345-5622",
        stage: "acompanhamento",
        healthScore: "warning",
        monthlyRevenue: 11000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 22),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 12, 22),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "japones",
            "sushi"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 22),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 2),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28)
    },
    // Retencao (6) - Older clients needing attention
    {
        id: "client-3",
        companyName: "Delivery Gourmet ME",
        cnpj: "03.456.789/0001-03",
        contactName: "Paula Gourmet",
        contactEmail: "paula@deliverygourmet.com.br",
        contactPhone: "(11) 3345-6703",
        stage: "retencao",
        healthScore: "warning",
        monthlyRevenue: 3000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 28),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 3, 28),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "delivery",
            "gourmet"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 28),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 1),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 15)
    },
    {
        id: "client-5",
        companyName: "Bar do Jorge Ltda",
        cnpj: "05.678.901/0001-05",
        contactName: "Jorge Silva",
        contactEmail: "jorge@bardojorge.com.br",
        contactPhone: "(11) 3567-8905",
        stage: "retencao",
        healthScore: "warning",
        monthlyRevenue: 5000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 30),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 3, 30),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "bar",
            "boteco"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 30),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 10)
    },
    {
        id: "client-8",
        companyName: "Restaurante Verde Vida ME",
        cnpj: "08.901.234/0001-08",
        contactName: "Gabriela Verde",
        contactEmail: "gabriela@verdevida.com.br",
        contactPhone: "(11) 3901-2308",
        stage: "retencao",
        healthScore: "critical",
        monthlyRevenue: 8000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 22),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 4, 22),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "organico",
            "saudavel"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 22),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 28)
    },
    {
        id: "client-10",
        companyName: "Rede Pousadas Sul Ltda",
        cnpj: "10.123.456/0001-10",
        contactName: "Fábio Sul",
        contactEmail: "fabio@pousadassul.com.br",
        contactPhone: "(48) 3123-4510",
        stage: "retencao",
        healthScore: "warning",
        monthlyRevenue: 12000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 28),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 4, 28),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "pousada",
            "litoral"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 28),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 5)
    },
    {
        id: "client-17",
        companyName: "Rede Fast Burger Ltda",
        cnpj: "17.890.123/0001-17",
        contactName: "Felipe Burger",
        contactEmail: "felipe@fastburger.com.br",
        contactPhone: "(11) 3890-1217",
        stage: "retencao",
        healthScore: "warning",
        monthlyRevenue: 9000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 28),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 5, 28),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "fastfood",
            "hamburgueria"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 28),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 12)
    },
    {
        id: "client-18",
        companyName: "Clube Recreativo Central",
        cnpj: "18.901.234/0001-18",
        contactName: "Sérgio Central",
        contactEmail: "sergio@clubecentral.com.br",
        contactPhone: "(11) 3901-2318",
        stage: "retencao",
        healthScore: "critical",
        monthlyRevenue: 8000,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 28),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 5, 28),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "clube",
            "social"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 28),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 15),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 20)
    },
    // Churn (4)
    {
        id: "client-4",
        companyName: "Padaria Trigo Dourado EIRELI",
        cnpj: "04.567.890/0001-04",
        contactName: "Antônio Trigo",
        contactEmail: "antonio@trigodourado.com.br",
        contactPhone: "(31) 3456-7804",
        stage: "churn",
        healthScore: "critical",
        monthlyRevenue: 0,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 28),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "padaria",
            "churned"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 28),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25)
    },
    {
        id: "client-6",
        companyName: "Cantina Escolar ABC",
        cnpj: "06.789.012/0001-06",
        contactName: "Cláudia ABC",
        contactEmail: "claudia@cantinabc.com.br",
        contactPhone: "(11) 3678-9006",
        stage: "churn",
        healthScore: "critical",
        monthlyRevenue: 0,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 30),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "escola",
            "churned"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 30),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 1),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28)
    },
    {
        id: "client-11",
        companyName: "Food Truck Urbano ME",
        cnpj: "11.234.567/0001-11",
        contactName: "Diego Urbano",
        contactEmail: "diego@foodtruckurbano.com.br",
        contactPhone: "(11) 3234-5611",
        stage: "churn",
        healthScore: "critical",
        monthlyRevenue: 0,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 28),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        tags: [
            "foodtruck",
            "churned"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 28),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20)
    },
    {
        id: "client-13",
        companyName: "Confeitaria Doce Mel EIRELI",
        cnpj: "13.456.789/0001-13",
        contactName: "Isabela Mel",
        contactEmail: "isabela@docemel.com.br",
        contactPhone: "(11) 3456-7813",
        stage: "churn",
        healthScore: "critical",
        monthlyRevenue: 0,
        contractStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 31),
        contractEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 31),
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        tags: [
            "confeitaria",
            "churned"
        ],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 31),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 3),
        lastInteraction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30)
    }
];
}),
"[project]/src/lib/mock-data/activities.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockActivities",
    ()=>mockActivities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/helpers.ts [app-ssr] (ecmascript)");
;
const mockActivities = [
    // Recent pending activities (February 2026)
    {
        id: "act-1",
        title: "Ligar para Jean Pierre - alinhar onboarding",
        type: "call",
        status: "pending",
        description: "Alinhar primeira entrega e processos de pedido",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 10),
        dueTime: "10:00",
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        clientId: "client-35",
        clientName: "Restaurante Paris Bistro SA",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8)
    },
    {
        id: "act-2",
        title: "Reunião de kickoff - Hotel Montanha Resort",
        type: "meeting",
        status: "pending",
        description: "Apresentar equipe e cronograma de implantação",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 9),
        dueTime: "14:00",
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        clientId: "client-29",
        clientName: "Hotel Montanha Resort SA",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7)
    },
    {
        id: "act-3",
        title: "Enviar proposta revisada - Wine Bar Sommelier",
        type: "email",
        status: "pending",
        description: "Proposta com desconto especial para contrato anual",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 9),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-o04",
        opportunityTitle: "Bebidas importadas - Wine Bar Sommelier",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8)
    },
    {
        id: "act-4",
        title: "Follow-up negociação - Rede Padarias Artesanais",
        type: "follow-up",
        status: "pending",
        description: "Retornar sobre prazo de pagamento",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 9),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-o05",
        opportunityTitle: "Laticinios especiais - Rede Padarias Artesanais",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7)
    },
    {
        id: "act-5",
        title: "WhatsApp - confirmar contrato Green Food",
        type: "whatsapp",
        status: "pending",
        description: "Confirmar recebimento do contrato assinado",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 10),
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        opportunityId: "opp-o06",
        opportunityTitle: "Embalagens sustentáveis - Green Food Delivery",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8)
    },
    {
        id: "act-6",
        title: "Reunião presencial - Restaurante Gaúcho Pampa",
        type: "meeting",
        status: "pending",
        description: "Apresentação de catálogo de carnes",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 9),
        dueTime: "15:00",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        opportunityId: "opp-o09",
        opportunityTitle: "Carnes - Restaurante Gaúcho Pampa",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6)
    },
    {
        id: "act-7",
        title: "Ligar para renovação - Delivery Gourmet",
        type: "call",
        status: "overdue",
        description: "Contrato vence em março, iniciar renovação",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5),
        dueTime: "11:00",
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        clientId: "client-3",
        clientName: "Delivery Gourmet ME",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 1)
    },
    {
        id: "act-8",
        title: "Visita técnica - Hospital Santa Cruz",
        type: "visit",
        status: "pending",
        description: "Avaliar cozinha para otimização de entregas",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 12),
        dueTime: "09:00",
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        clientId: "client-16",
        clientName: "Hospital Santa Cruz",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6)
    },
    {
        id: "act-9",
        title: "Enviar catalogo atualizado - Beach Club Maré Alta",
        type: "email",
        status: "pending",
        description: "Catálogo de bebidas para temporada",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 11),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-o10",
        opportunityTitle: "Bebidas - Beach Club Maré Alta",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8)
    },
    {
        id: "act-10",
        title: "Task - preparar licitação Hospital Regional",
        type: "task",
        status: "pending",
        description: "Reunir documentos para processo licitatório",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 15),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-o07",
        opportunityTitle: "Insumos gerais - Hospital Regional Norte",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7)
    },
    // Overdue activities
    {
        id: "act-11",
        title: "Follow-up pos-venda - Restaurante Verde Vida",
        type: "follow-up",
        status: "overdue",
        description: "Cliente com health score crítico",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28),
        responsibleId: "user-5",
        responsibleName: "Fernanda Lima",
        clientId: "client-8",
        clientName: "Restaurante Verde Vida ME",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20)
    },
    {
        id: "act-12",
        title: "Ligar - Clube Recreativo Central",
        type: "call",
        status: "overdue",
        description: "Verificar satisfação e renovação",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 1),
        dueTime: "14:00",
        responsibleId: "user-7",
        responsibleName: "Carolina Santos",
        clientId: "client-18",
        clientName: "Clube Recreativo Central",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25)
    },
    // Completed activities (recent - February 2026)
    {
        id: "act-13",
        title: "Reunião de fechamento - Paris Bistro",
        type: "meeting",
        status: "completed",
        description: "Assinatura de contrato",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w35",
        opportunityTitle: "Carnes premium - Restaurante Paris Bistro",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5)
    },
    {
        id: "act-14",
        title: "Enviar contrato - Spa Wellness",
        type: "email",
        status: "completed",
        description: "Contrato de fornecimento enviado",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w36",
        opportunityTitle: "Hortifruti premium - Spa Wellness Center",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 4)
    },
    {
        id: "act-15",
        title: "Ligar - Pub Dublin confirmação",
        type: "call",
        status: "completed",
        description: "Confirmar última entrega e satisfação",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        dueTime: "10:00",
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        clientId: "client-new3",
        clientName: "Pub Irlandês Dublin Ltda",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 8),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 6)
    },
    {
        id: "act-16",
        title: "WhatsApp - Dark Kitchen Central",
        type: "whatsapp",
        status: "completed",
        description: "Confirmar horário de entrega",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w39",
        opportunityTitle: "Embalagens - Dark Kitchen Central",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 7),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 5)
    },
    // Completed activities (January 2026)
    {
        id: "act-17",
        title: "Reunião negociação - Fazenda Velha",
        type: "meeting",
        status: "completed",
        description: "Negociação de contrato anual",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 18),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w28",
        clientId: "client-28",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 18),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 15)
    },
    {
        id: "act-18",
        title: "Proposta enviada - Hotel Montanha Resort",
        type: "email",
        status: "completed",
        description: "Proposta de fornecimento de proteínas",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 15),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w29",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 15),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 12)
    },
    {
        id: "act-19",
        title: "Follow-up - Açaí Beach",
        type: "follow-up",
        status: "completed",
        description: "Confirmar interesse após reunião",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20),
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        opportunityId: "opp-w30",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 20),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 18)
    },
    {
        id: "act-20",
        title: "Ligar - Cervejaria Hop",
        type: "call",
        status: "completed",
        description: "Alinhar primeiro pedido",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25),
        dueTime: "11:00",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w31",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 22)
    },
    {
        id: "act-21",
        title: "Visita técnica - Cafeteria Grão",
        type: "visit",
        status: "completed",
        description: "Avaliar estrutura de armazenamento",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 26),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        clientId: "client-32",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 26),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 23)
    },
    {
        id: "act-22",
        title: "Reunião fechamento - Restaurante Habibi",
        type: "meeting",
        status: "completed",
        description: "Assinatura de contrato",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28),
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        opportunityId: "opp-w33",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 25)
    },
    {
        id: "act-23",
        title: "Email confirmação - Tapioca Express",
        type: "email",
        status: "completed",
        description: "Enviar confirmação de primeiro pedido",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w34",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 30),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 28)
    },
    // Completed activities (December 2025)
    {
        id: "act-24",
        title: "Reunião kickoff - Resort Praia Azul",
        type: "meeting",
        status: "completed",
        description: "Início do projeto",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 18),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w21",
        clientId: "client-21",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 18),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 15)
    },
    {
        id: "act-25",
        title: "Degustação - Sushi Ya",
        type: "meeting",
        status: "completed",
        description: "Apresentação de produtos premium",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 19),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w22",
        clientId: "client-22",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 19),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 16)
    },
    {
        id: "act-26",
        title: "Follow-up proposta - Gelaterias Itália",
        type: "follow-up",
        status: "completed",
        description: "Retorno após proposta",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 18),
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        opportunityId: "opp-w23",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 18),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 15)
    },
    {
        id: "act-27",
        title: "Reunião comercial - Casa de Shows Arena",
        type: "meeting",
        status: "completed",
        description: "Negociação de volumes para eventos",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 20),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w24",
        clientId: "client-24",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 20),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 17)
    },
    {
        id: "act-28",
        title: "Ligar - Catering VIP confirmação",
        type: "call",
        status: "completed",
        description: "Confirmar detalhes do contrato",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 22),
        dueTime: "10:00",
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w25",
        clientId: "client-25",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 22),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 19)
    },
    {
        id: "act-29",
        title: "Visita - Restaurante Mineiro Raiz",
        type: "visit",
        status: "completed",
        description: "Conhecer operação do cliente",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 23),
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        opportunityId: "opp-w26",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 23),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 20)
    },
    {
        id: "act-30",
        title: "Fechamento - Churrascaria Gaúcha",
        type: "meeting",
        status: "completed",
        description: "Assinatura de contrato",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 26),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w27",
        clientId: "client-27",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 26),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 23)
    },
    // Completed activities (November 2025)
    {
        id: "act-31",
        title: "Reunião inicial - Executivo Prime",
        type: "meeting",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 15),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w14",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 15),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 12)
    },
    {
        id: "act-32",
        title: "Degustação - Buffet Casamento Real",
        type: "meeting",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 17),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w15",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 17),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 14)
    },
    {
        id: "act-33",
        title: "Reunião licitação - Hospital Santa Cruz",
        type: "meeting",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 18),
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        opportunityId: "opp-w16",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 18),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 15)
    },
    {
        id: "act-34",
        title: "Proposta - Fast Burger",
        type: "email",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 20),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w17",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 20),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 17)
    },
    {
        id: "act-35",
        title: "Follow-up - Clube Recreativo",
        type: "follow-up",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 22),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w18",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 22),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 19)
    },
    {
        id: "act-36",
        title: "Ligar - Pizzaria Napoli",
        type: "call",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 24),
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        opportunityId: "opp-w19",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 24),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 21)
    },
    {
        id: "act-37",
        title: "Fechamento - Steakhouse Premium",
        type: "meeting",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 27),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w20",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 27),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 24)
    },
    // Completed activities (October 2025)
    {
        id: "act-38",
        title: "Reunião - Churrascaria Fogo Alto",
        type: "meeting",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 12),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w07",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 12),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 9)
    },
    {
        id: "act-39",
        title: "Visita - Verde Vida",
        type: "visit",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 15),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w08",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 15),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 12)
    },
    {
        id: "act-40",
        title: "Proposta - Escola Gastronomia",
        type: "email",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 17),
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        opportunityId: "opp-w09",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 17),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 14)
    },
    {
        id: "act-41",
        title: "Negociação - Pousadas Sul",
        type: "meeting",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 20),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w10",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 20),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 17)
    },
    {
        id: "act-42",
        title: "Ligar - Food Truck Urbano",
        type: "call",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 22),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w11",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 22),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 19)
    },
    {
        id: "act-43",
        title: "Reunião - Rooftop Bar",
        type: "meeting",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 24),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w12",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 24),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 21)
    },
    {
        id: "act-44",
        title: "Follow-up - Doce Mel",
        type: "follow-up",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 26),
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        opportunityId: "opp-w13",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 26),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 23)
    },
    // Completed activities (September 2025)
    {
        id: "act-45",
        title: "Primeira reunião - Sabor da Terra",
        type: "meeting",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 10),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w01",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 10),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 7)
    },
    {
        id: "act-46",
        title: "Degustação - Hotel Beira Mar",
        type: "meeting",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 12),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w02",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 12),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 9)
    },
    {
        id: "act-47",
        title: "Proposta - Delivery Gourmet",
        type: "email",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 15),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w03",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 15),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 12)
    },
    {
        id: "act-48",
        title: "Ligar - Trigo Dourado",
        type: "call",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 18),
        responsibleId: "user-6",
        responsibleName: "Marcos Pereira",
        opportunityId: "opp-w04",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 18),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 15)
    },
    {
        id: "act-49",
        title: "Reunião - Bar do Jorge",
        type: "meeting",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 20),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-w05",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 20),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 17)
    },
    {
        id: "act-50",
        title: "Fechamento - Cantina ABC",
        type: "meeting",
        status: "completed",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 25),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-w06",
        completedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 25),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 9, 22)
    },
    // Cancelled activities
    {
        id: "act-51",
        title: "Reunião cancelada - Hotel Centro Executivo",
        type: "meeting",
        status: "cancelled",
        description: "Cliente desistiu da negociação",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 8),
        responsibleId: "user-4",
        responsibleName: "Juliana Costa",
        opportunityId: "opp-l02",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 5)
    },
    {
        id: "act-52",
        title: "Visita cancelada - Cantina Empresa Tech",
        type: "visit",
        status: "cancelled",
        description: "Projeto cancelado pelo cliente",
        dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 5),
        responsibleId: "user-3",
        responsibleName: "Lucas Oliveira",
        opportunityId: "opp-l07",
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 1)
    }
];
}),
"[project]/src/lib/mock-data/commissions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockCommissions",
    ()=>mockCommissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/helpers.ts [app-ssr] (ecmascript)");
;
const mockCommissions = [
    // Paid commissions (September-December 2025) - 24
    {
        id: "comm-01",
        opportunityId: "opp-w01",
        opportunityTitle: "Hortifruti premium - Restaurante Sabor da Terra",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 4200,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-09",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 10)
    },
    {
        id: "comm-02",
        opportunityId: "opp-w02",
        opportunityTitle: "Proteinas congeladas - Hotel Beira Mar",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 9000,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-09",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 10)
    },
    {
        id: "comm-03",
        opportunityId: "opp-w03",
        opportunityTitle: "Embalagens eco - Delivery Gourmet",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 1800,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-09",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 10)
    },
    {
        id: "comm-04",
        opportunityId: "opp-w04",
        opportunityTitle: "Laticinios - Padaria Trigo Dourado",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 2400,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-09",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 10)
    },
    {
        id: "comm-05",
        opportunityId: "opp-w05",
        opportunityTitle: "Bebidas - Bar do Jorge",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 3000,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-09",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 10)
    },
    {
        id: "comm-06",
        opportunityId: "opp-w06",
        opportunityTitle: "Insumos gerais - Cantina Escolar ABC",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 3600,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-09",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 10, 10)
    },
    {
        id: "comm-07",
        opportunityId: "opp-w07",
        opportunityTitle: "Carnes nobres - Churrascaria Fogo Alto",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 12000,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-10",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 10)
    },
    {
        id: "comm-08",
        opportunityId: "opp-w08",
        opportunityTitle: "Hortifruti organico - Restaurante Verde Vida",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 4800,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-10",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 10)
    },
    {
        id: "comm-09",
        opportunityId: "opp-w09",
        opportunityTitle: "Utensilios - Escola Gastronomia SP",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 4250,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-10",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 10)
    },
    {
        id: "comm-10",
        opportunityId: "opp-w10",
        opportunityTitle: "Congelados - Rede Pousadas Sul",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 7200,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-10",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 10)
    },
    {
        id: "comm-11",
        opportunityId: "opp-w11",
        opportunityTitle: "Embalagens - Food Truck Urbano",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 1200,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-10",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 10)
    },
    {
        id: "comm-12",
        opportunityId: "opp-w12",
        opportunityTitle: "Bebidas premium - Rooftop Bar",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 6000,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-10",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 10)
    },
    {
        id: "comm-13",
        opportunityId: "opp-w13",
        opportunityTitle: "Laticinios especiais - Confeitaria Doce Mel",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 2100,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-10",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 10)
    },
    {
        id: "comm-14",
        opportunityId: "opp-w14",
        opportunityTitle: "Proteinas - Restaurante Executivo Prime",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 7800,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-11",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 10)
    },
    {
        id: "comm-15",
        opportunityId: "opp-w15",
        opportunityTitle: "Hortifruti - Buffet Casamento Real",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 9000,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-11",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 10)
    },
    {
        id: "comm-16",
        opportunityId: "opp-w16",
        opportunityTitle: "Insumos - Hospital Santa Cruz",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 14400,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-11",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 10)
    },
    {
        id: "comm-17",
        opportunityId: "opp-w17",
        opportunityTitle: "Congelados - Rede Fast Burger",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 5400,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-11",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 10)
    },
    {
        id: "comm-18",
        opportunityId: "opp-w18",
        opportunityTitle: "Bebidas - Clube Recreativo Central",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 4800,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-11",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 10)
    },
    {
        id: "comm-19",
        opportunityId: "opp-w19",
        opportunityTitle: "Embalagens - Pizzaria Napoli",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 1500,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-11",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 10)
    },
    {
        id: "comm-20",
        opportunityId: "opp-w20",
        opportunityTitle: "Carnes - Steakhouse Premium",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 15000,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-11",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 10)
    },
    {
        id: "comm-21",
        opportunityId: "opp-w21",
        opportunityTitle: "Hortifruti - Resort Praia Azul",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 10800,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-12",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 10)
    },
    {
        id: "comm-22",
        opportunityId: "opp-w22",
        opportunityTitle: "Proteinas - Sushi Ya",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 6600,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-12",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 10)
    },
    {
        id: "comm-23",
        opportunityId: "opp-w23",
        opportunityTitle: "Laticinios - Rede Gelaterias",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 3600,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-12",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 10)
    },
    {
        id: "comm-24",
        opportunityId: "opp-w24",
        opportunityTitle: "Bebidas - Casa de Shows Arena",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 9600,
        percentage: 5,
        status: "paid",
        competenceMonth: "2025-12",
        paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 10)
    },
    // Confirmed commissions (January 2026) - 10
    {
        id: "comm-25",
        opportunityId: "opp-w25",
        opportunityTitle: "Insumos - Catering Empresarial VIP",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 7200,
        percentage: 5,
        status: "confirmed",
        competenceMonth: "2025-12"
    },
    {
        id: "comm-26",
        opportunityId: "opp-w26",
        opportunityTitle: "Congelados - Restaurante Mineiro Raiz",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 3000,
        percentage: 5,
        status: "confirmed",
        competenceMonth: "2025-12"
    },
    {
        id: "comm-27",
        opportunityId: "opp-w27",
        opportunityTitle: "Carnes - Churrascaria Gaúcha Autêntica",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 10200,
        percentage: 5,
        status: "confirmed",
        competenceMonth: "2025-12"
    },
    {
        id: "comm-28",
        opportunityId: "opp-w28",
        opportunityTitle: "Hortifruti - Restaurante Fazenda Velha",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 8400,
        percentage: 5,
        status: "confirmed",
        competenceMonth: "2026-01"
    },
    {
        id: "comm-29",
        opportunityId: "opp-w29",
        opportunityTitle: "Proteinas - Hotel Montanha Resort",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 12600,
        percentage: 5,
        status: "confirmed",
        competenceMonth: "2026-01"
    },
    {
        id: "comm-30",
        opportunityId: "opp-w30",
        opportunityTitle: "Embalagens - Rede Açaí Beach",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 2400,
        percentage: 5,
        status: "confirmed",
        competenceMonth: "2026-01"
    },
    {
        id: "comm-31",
        opportunityId: "opp-w31",
        opportunityTitle: "Bebidas - Cervejaria Artesanal Hop",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 4200,
        percentage: 5,
        status: "confirmed",
        competenceMonth: "2026-01"
    },
    {
        id: "comm-32",
        opportunityId: "opp-w32",
        opportunityTitle: "Laticinios - Cafeteria Grão Especial",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 1800,
        percentage: 5,
        status: "confirmed",
        competenceMonth: "2026-01"
    },
    {
        id: "comm-33",
        opportunityId: "opp-w33",
        opportunityTitle: "Insumos - Restaurante Árabe Habibi",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 4800,
        percentage: 5,
        status: "confirmed",
        competenceMonth: "2026-01"
    },
    {
        id: "comm-34",
        opportunityId: "opp-w34",
        opportunityTitle: "Congelados - Rede Tapioca Express",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 2700,
        percentage: 5,
        status: "confirmed",
        competenceMonth: "2026-01"
    },
    // Projected commissions (February 2026) - 16
    {
        id: "comm-35",
        opportunityId: "opp-w35",
        opportunityTitle: "Carnes premium - Restaurante Paris Bistro",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 11400,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-02"
    },
    {
        id: "comm-36",
        opportunityId: "opp-w36",
        opportunityTitle: "Hortifruti - Spa Wellness Center",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 5400,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-02"
    },
    {
        id: "comm-37",
        opportunityId: "opp-w37",
        opportunityTitle: "Proteinas - Restaurante Nordestino Sertão",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 3600,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-02"
    },
    {
        id: "comm-38",
        opportunityId: "opp-w38",
        opportunityTitle: "Bebidas - Pub Irlandês Dublin",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 6000,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-02"
    },
    {
        id: "comm-39",
        opportunityId: "opp-w39",
        opportunityTitle: "Embalagens - Dark Kitchen Central",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 2100,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-02"
    },
    {
        id: "comm-40",
        opportunityId: "opp-w40",
        opportunityTitle: "Laticinios - Padaria Artesanal Fermento",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 3000,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-02"
    },
    {
        id: "comm-41",
        opportunityId: "opp-o04",
        opportunityTitle: "Bebidas importadas - Wine Bar Sommelier",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 9000,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-02"
    },
    {
        id: "comm-42",
        opportunityId: "opp-o05",
        opportunityTitle: "Laticinios especiais - Rede Padarias Artesanais",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 7200,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-02"
    },
    {
        id: "comm-43",
        opportunityId: "opp-o06",
        opportunityTitle: "Embalagens sustentáveis - Green Food Delivery",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 3000,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-02"
    },
    {
        id: "comm-44",
        opportunityId: "opp-o09",
        opportunityTitle: "Carnes - Restaurante Gaúcho Pampa",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 8400,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-02"
    },
    {
        id: "comm-45",
        opportunityId: "opp-o10",
        opportunityTitle: "Bebidas - Beach Club Maré Alta",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 15000,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-02"
    },
    {
        id: "comm-46",
        opportunityId: "opp-o02",
        opportunityTitle: "Hortifruti premium - Hotel Fazenda Boa Vista",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 12000,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-03"
    },
    {
        id: "comm-47",
        opportunityId: "opp-o03",
        opportunityTitle: "Proteinas congeladas - Rede Restaurantes Executivos",
        userId: "user-6",
        userName: "Marcos Pereira",
        value: 18000,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-03"
    },
    {
        id: "comm-48",
        opportunityId: "opp-o08",
        opportunityTitle: "Congelados premium - Rede Pousadas Litoral Norte",
        userId: "user-4",
        userName: "Juliana Costa",
        value: 10800,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-03"
    },
    {
        id: "comm-49",
        opportunityId: "opp-o01",
        opportunityTitle: "Carnes nobres - Restaurante Mediterrâneo",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 9600,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-03"
    },
    {
        id: "comm-50",
        opportunityId: "opp-o07",
        opportunityTitle: "Insumos gerais - Hospital Regional Norte",
        userId: "user-3",
        userName: "Lucas Oliveira",
        value: 24000,
        percentage: 5,
        status: "projected",
        competenceMonth: "2026-04"
    }
];
}),
"[project]/src/lib/mock-data/notifications.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockDashboardMetrics",
    ()=>mockDashboardMetrics,
    "mockNotifications",
    ()=>mockNotifications
]);
const mockNotifications = [
    {
        id: "notif-1",
        type: "sla-warning",
        title: "SLA próximo do limite",
        message: "A oportunidade 'Bebidas importadas - Wine Bar Sommelier' está há 48h no estágio 'Proposta Enviada'.",
        isRead: false,
        createdAt: "2026-02-08T08:30:00",
        link: "/pipes?card=opp-o04"
    },
    {
        id: "notif-2",
        type: "activity-due",
        title: "Atividade atrasada",
        message: "A ligação para Delivery Gourmet está atrasada desde 05/02.",
        isRead: false,
        createdAt: "2026-02-08T07:00:00",
        link: "/activities?id=act-7"
    },
    {
        id: "notif-3",
        type: "opportunity-won",
        title: "Oportunidade ganha!",
        message: "Parabéns! A oportunidade 'Carnes premium - Restaurante Paris Bistro' foi marcada como ganha.",
        isRead: true,
        createdAt: "2026-02-07T16:45:00",
        link: "/pipes"
    },
    {
        id: "notif-4",
        type: "client-health-drop",
        title: "Saúde do cliente em alerta",
        message: "O Restaurante Verde Vida caiu para saúde 'crítico'. Última interação há 42 dias.",
        isRead: false,
        createdAt: "2026-02-07T10:00:00",
        link: "/clients?id=client-8"
    },
    {
        id: "notif-5",
        type: "goal-achieved",
        title: "Meta atingida!",
        message: "A equipe atingiu 100% da meta de receita em janeiro/2026.",
        isRead: true,
        createdAt: "2026-02-05T17:30:00",
        link: "/dashboard"
    },
    {
        id: "notif-6",
        type: "mention",
        title: "Você foi mencionado",
        message: "Camila Ferreira mencionou você em um comentário na oportunidade 'Bebidas - Beach Club Maré Alta'.",
        isRead: false,
        createdAt: "2026-02-07T14:20:00",
        link: "/pipes?card=opp-o10"
    },
    {
        id: "notif-7",
        type: "system",
        title: "Novo cliente em onboarding",
        message: "5 novos clientes entraram em onboarding esta semana.",
        isRead: false,
        createdAt: "2026-02-08T06:00:00",
        link: "/clients"
    },
    {
        id: "notif-8",
        type: "sla-breach",
        title: "SLA estourado",
        message: "A oportunidade 'Embalagens sustentáveis - Green Food Delivery' ultrapassou o SLA do estágio 'Fechamento'.",
        isRead: true,
        createdAt: "2026-02-06T09:15:00",
        link: "/pipes?card=opp-o06"
    },
    {
        id: "notif-9",
        type: "activity-due",
        title: "Atividade atrasada",
        message: "Follow-up pós-venda com Restaurante Verde Vida está atrasado desde 28/01.",
        isRead: false,
        createdAt: "2026-02-06T07:00:00",
        link: "/activities?id=act-11"
    },
    {
        id: "notif-10",
        type: "opportunity-won",
        title: "Oportunidade ganha!",
        message: "A oportunidade 'Embalagens - Dark Kitchen Central' foi convertida!",
        isRead: true,
        createdAt: "2026-02-08T10:00:00",
        link: "/pipes"
    }
];
const mockDashboardMetrics = {
    totalOpportunities: 65,
    totalValue: 5448000,
    conversionRate: 61.5,
    averageTicket: 136200,
    activitiesDue: 10,
    slaBreaches: 2,
    newLeadsThisMonth: 10,
    wonThisMonth: 6
};
}),
"[project]/src/lib/mock-data/audit-log.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockAuditLog",
    ()=>mockAuditLog
]);
const mockAuditLog = [
    {
        id: "audit-1",
        action: "Ganhou oportunidade",
        entity: "opportunity",
        entityId: "opp-w40",
        entityName: "Laticinios - Padaria Artesanal Fermento",
        userId: "user-6",
        userName: "Marcos Pereira",
        details: "Oportunidade marcada como ganha. Valor: R$ 60.000,00",
        timestamp: "2026-02-08T15:30:00"
    },
    {
        id: "audit-2",
        action: "Adicionou cliente",
        entity: "client",
        entityId: "client-new5",
        entityName: "Padaria Artesanal Fermento EIRELI",
        userId: "user-7",
        userName: "Carolina Santos",
        details: "Novo cliente cadastrado no estágio 'Implantação'.",
        timestamp: "2026-02-08T15:35:00"
    },
    {
        id: "audit-3",
        action: "Ganhou oportunidade",
        entity: "opportunity",
        entityId: "opp-w39",
        entityName: "Embalagens - Dark Kitchen Central",
        userId: "user-3",
        userName: "Lucas Oliveira",
        details: "Oportunidade marcada como ganha. Valor: R$ 42.000,00",
        timestamp: "2026-02-08T10:00:00"
    },
    {
        id: "audit-4",
        action: "Ganhou oportunidade",
        entity: "opportunity",
        entityId: "opp-w38",
        entityName: "Bebidas - Pub Irlandês Dublin",
        userId: "user-4",
        userName: "Juliana Costa",
        details: "Oportunidade marcada como ganha. Valor: R$ 120.000,00",
        timestamp: "2026-02-08T09:00:00"
    },
    {
        id: "audit-5",
        action: "Completou atividade",
        entity: "activity",
        entityId: "act-15",
        entityName: "Ligar - Pub Dublin confirmação",
        userId: "user-6",
        userName: "Marcos Pereira",
        details: "Atividade de ligação marcada como concluída.",
        timestamp: "2026-02-08T10:30:00"
    },
    {
        id: "audit-6",
        action: "Criou oportunidade",
        entity: "opportunity",
        entityId: "opp-o07",
        entityName: "Insumos gerais - Hospital Regional Norte",
        userId: "user-3",
        userName: "Lucas Oliveira",
        details: "Nova oportunidade criada no estágio 'Lead In' com valor de R$ 480.000,00.",
        timestamp: "2026-02-06T11:00:00"
    },
    {
        id: "audit-7",
        action: "Avançou estágio",
        entity: "opportunity",
        entityId: "opp-o06",
        entityName: "Embalagens sustentáveis - Green Food Delivery",
        userId: "user-6",
        userName: "Marcos Pereira",
        details: "Oportunidade movida de 'Negociação' para 'Fechamento'.",
        timestamp: "2026-02-05T14:00:00"
    },
    {
        id: "audit-8",
        action: "Ganhou oportunidade",
        entity: "opportunity",
        entityId: "opp-w37",
        entityName: "Proteinas - Restaurante Nordestino Sertão",
        userId: "user-6",
        userName: "Marcos Pereira",
        details: "Oportunidade marcada como ganha. Valor: R$ 72.000,00",
        timestamp: "2026-02-08T08:00:00"
    },
    {
        id: "audit-9",
        action: "Alterou saúde do cliente",
        entity: "client",
        entityId: "client-8",
        entityName: "Restaurante Verde Vida ME",
        userId: "user-5",
        userName: "Fernanda Lima",
        details: "Health score alterado de 'warning' para 'critical' devido a falta de interação.",
        timestamp: "2026-02-07T10:00:00"
    },
    {
        id: "audit-10",
        action: "Ganhou oportunidade",
        entity: "opportunity",
        entityId: "opp-w36",
        entityName: "Hortifruti - Spa Wellness Center",
        userId: "user-3",
        userName: "Lucas Oliveira",
        details: "Oportunidade marcada como ganha. Valor: R$ 108.000,00",
        timestamp: "2026-02-06T16:00:00"
    },
    {
        id: "audit-11",
        action: "Ganhou oportunidade",
        entity: "opportunity",
        entityId: "opp-w35",
        entityName: "Carnes premium - Restaurante Paris Bistro",
        userId: "user-4",
        userName: "Juliana Costa",
        details: "Oportunidade marcada como ganha. Valor: R$ 228.000,00",
        timestamp: "2026-02-07T16:45:00"
    },
    {
        id: "audit-12",
        action: "Perdeu oportunidade",
        entity: "opportunity",
        entityId: "opp-l15",
        entityName: "Insumos - Cantina Faculdade ABC",
        userId: "user-6",
        userName: "Marcos Pereira",
        details: "Oportunidade perdida. Motivo: Licitação não ganha",
        timestamp: "2026-02-06T11:30:00"
    },
    {
        id: "audit-13",
        action: "Atualizou configuração",
        entity: "settings",
        entityId: "config-sla",
        entityName: "SLA do Pipeline",
        userId: "user-2",
        userName: "Camila Ferreira",
        details: "SLA do estágio 'Proposta Enviada' alterado de 72h para 48h.",
        timestamp: "2026-02-01T09:00:00"
    },
    {
        id: "audit-14",
        action: "Criou atividade",
        entity: "activity",
        entityId: "act-1",
        entityName: "Ligar para Jean Pierre - alinhar onboarding",
        userId: "user-5",
        userName: "Fernanda Lima",
        details: "Ligação agendada para 10/02 às 10:00.",
        timestamp: "2026-02-08T08:30:00"
    },
    {
        id: "audit-15",
        action: "Avançou estágio",
        entity: "opportunity",
        entityId: "opp-o05",
        entityName: "Laticinios especiais - Rede Padarias Artesanais",
        userId: "user-4",
        userName: "Juliana Costa",
        details: "Oportunidade movida de 'Proposta Enviada' para 'Negociação'.",
        timestamp: "2026-02-04T15:00:00"
    }
];
}),
"[project]/src/lib/mock-data/goals.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockGoals",
    ()=>mockGoals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/helpers.ts [app-ssr] (ecmascript)");
;
const mockGoals = [
    // Current month goals
    {
        id: "goal-1",
        title: "Receita mensal de vendas - Fevereiro",
        type: "revenue",
        target: 600000,
        current: 630000,
        period: "monthly",
        startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 1),
        endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 28)
    },
    {
        id: "goal-2",
        title: "Oportunidades criadas - Q1 2026",
        type: "opportunities",
        target: 30,
        current: 18,
        period: "quarterly",
        startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 1),
        endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 3, 31)
    },
    {
        id: "goal-3",
        title: "Taxa de conversão - Fevereiro",
        type: "conversion",
        target: 60,
        current: 61.5,
        period: "monthly",
        startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 1),
        endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 28)
    },
    {
        id: "goal-4",
        title: "Atividades realizadas - Fevereiro",
        type: "activities",
        target: 100,
        current: 52,
        period: "monthly",
        startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 1),
        endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 2, 28),
        userId: "user-4",
        userName: "Juliana Costa"
    },
    // Past month goals (completed)
    {
        id: "goal-5",
        title: "Receita mensal - Janeiro",
        type: "revenue",
        target: 550000,
        current: 612600,
        period: "monthly",
        startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 1),
        endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 31)
    },
    {
        id: "goal-6",
        title: "Atividades realizadas - Janeiro",
        type: "activities",
        target: 90,
        current: 95,
        period: "monthly",
        startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 1),
        endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2026, 1, 31),
        userId: "user-3",
        userName: "Lucas Oliveira"
    },
    {
        id: "goal-7",
        title: "Receita mensal - Dezembro",
        type: "revenue",
        target: 500000,
        current: 624000,
        period: "monthly",
        startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 1),
        endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 12, 31)
    },
    {
        id: "goal-8",
        title: "Receita mensal - Novembro",
        type: "revenue",
        target: 480000,
        current: 564000,
        period: "monthly",
        startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 1),
        endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(2025, 11, 30)
    }
];
}),
"[project]/src/lib/mock-data/dynamic-generator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateDynamicMockData",
    ()=>generateDynamicMockData
]);
function generateDynamicMockData(ownerId = "demo-user", ownerName = "Usuário Demo") {
    const now = new Date();
    const h = (hours)=>new Date(now.getTime() + hours * 60 * 60 * 1000).toISOString();
    const daysAgo = (days)=>new Date(now.getTime() - days * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const daysFromNow = (days)=>new Date(now.getTime() + days * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const opportunities = [
        {
            id: "1",
            title: "Restaurante Bela Vista",
            clientName: "Restaurante Bela Vista Ltda",
            neighborhood: "Altiplano",
            value: 12000,
            monthlyValue: 1000,
            stage: "lead-in",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "food-service",
                "premium"
            ],
            createdAt: daysAgo(25),
            updatedAt: daysAgo(1),
            status: "open",
            slaDeadline: h(-6)
        },
        {
            id: "2",
            title: "Padaria Pao Quente",
            clientName: "Padaria Pao Quente ME",
            neighborhood: "Manaíra",
            value: 4800,
            monthlyValue: 400,
            stage: "lead-in",
            temperature: "warm",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "panificacao"
            ],
            createdAt: daysAgo(8),
            updatedAt: daysAgo(2),
            status: "open",
            slaDeadline: h(30)
        },
        {
            id: "3",
            title: "Lanchonete do Carlos",
            clientName: "Carlos Almeida ME",
            neighborhood: "Bancários",
            value: 3600,
            monthlyValue: 300,
            stage: "lead-in",
            temperature: "cold",
            responsibleId: "3",
            responsibleName: "Ana Oliveira",
            tags: [
                "fast-food"
            ],
            createdAt: daysAgo(6),
            updatedAt: daysAgo(5),
            status: "open",
            slaDeadline: h(8)
        },
        {
            id: "4",
            title: "Bar do Ze",
            clientName: "Bar do Ze Ltda",
            neighborhood: "Tambaú",
            value: 8400,
            monthlyValue: 700,
            stage: "contato-feito",
            temperature: "warm",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "bar",
                "noturno"
            ],
            createdAt: daysAgo(8),
            updatedAt: daysAgo(1),
            status: "open",
            slaDeadline: h(52)
        },
        {
            id: "5",
            title: "Pizzaria Napoli",
            clientName: "Napoli Alimentos Ltda",
            neighborhood: "Bessa",
            value: 15000,
            monthlyValue: 1250,
            stage: "contato-feito",
            temperature: "hot",
            responsibleId: "2",
            responsibleName: "Joao Santos",
            tags: [
                "pizzaria",
                "delivery"
            ],
            createdAt: daysAgo(12),
            updatedAt: daysAgo(3),
            status: "open",
            slaDeadline: h(-24)
        },
        {
            id: "6",
            title: "Hotel Sunset",
            clientName: "Hotel Sunset S.A.",
            neighborhood: "Cabo Branco",
            value: 36000,
            monthlyValue: 3000,
            stage: "reuniao-agendada",
            temperature: "warm",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "hotelaria"
            ],
            createdAt: daysAgo(20),
            updatedAt: daysAgo(2),
            status: "open",
            expectedCloseDate: daysFromNow(35),
            slaDeadline: h(96)
        },
        {
            id: "7",
            title: "Sorveteria Gelato",
            clientName: "Gelato Artesanal ME",
            neighborhood: "Jardim Oceania",
            value: 7200,
            monthlyValue: 600,
            stage: "reuniao-agendada",
            temperature: "cold",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "sorvetes"
            ],
            createdAt: daysAgo(18),
            updatedAt: daysAgo(10),
            status: "open",
            expectedCloseDate: daysFromNow(20),
            slaDeadline: h(4)
        },
        {
            id: "8",
            title: "Cafe Central",
            clientName: "Cafe Central ME",
            neighborhood: "Centro",
            value: 6000,
            monthlyValue: 500,
            stage: "proposta-enviada",
            temperature: "cold",
            responsibleId: "2",
            responsibleName: "Joao Santos",
            tags: [
                "cafeteria"
            ],
            createdAt: daysAgo(30),
            updatedAt: daysAgo(7),
            status: "open",
            expectedCloseDate: daysFromNow(19),
            slaDeadline: h(18)
        },
        {
            id: "9",
            title: "Hamburgueria Smash",
            clientName: "Smash Burger Ltda",
            neighborhood: "Brisamar",
            value: 9600,
            monthlyValue: 800,
            stage: "proposta-enviada",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "hamburgueria",
                "premium"
            ],
            createdAt: daysAgo(22),
            updatedAt: daysAgo(1),
            status: "open",
            expectedCloseDate: daysFromNow(11),
            slaDeadline: h(72)
        },
        {
            id: "10",
            title: "Pousada Mar Azul",
            clientName: "Pousada Mar Azul ME",
            neighborhood: "Tambaú",
            value: 24000,
            monthlyValue: 2000,
            stage: "negociacao",
            temperature: "hot",
            responsibleId: "2",
            responsibleName: "Joao Santos",
            tags: [
                "hotelaria"
            ],
            createdAt: daysAgo(35),
            updatedAt: daysAgo(1),
            status: "open",
            expectedCloseDate: daysFromNow(6),
            slaDeadline: h(120)
        },
        {
            id: "11",
            title: "Doceria Sabor & Arte",
            clientName: "Sabor e Arte Doces Ltda",
            neighborhood: "Torre",
            value: 10800,
            monthlyValue: 900,
            stage: "negociacao",
            temperature: "warm",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "confeitaria"
            ],
            createdAt: daysAgo(28),
            updatedAt: daysAgo(4),
            status: "open",
            expectedCloseDate: daysFromNow(16),
            slaDeadline: h(-48)
        },
        {
            id: "12",
            title: "Churrascaria Fogo Bravo",
            clientName: "Fogo Bravo Ltda",
            neighborhood: "Mangabeira",
            value: 18000,
            monthlyValue: 1500,
            stage: "fechamento",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "food-service",
                "churrascaria"
            ],
            createdAt: daysAgo(50),
            updatedAt: daysAgo(1),
            status: "open",
            expectedCloseDate: daysFromNow(2),
            slaDeadline: h(36)
        },
        {
            id: "13",
            title: "Acai da Praia",
            clientName: "Acai da Praia Franquias S.A.",
            neighborhood: "Intermares",
            value: 42000,
            monthlyValue: 3500,
            stage: "fechamento",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "acai",
                "franquia"
            ],
            createdAt: daysAgo(60),
            updatedAt: daysAgo(1),
            status: "open",
            expectedCloseDate: daysFromNow(1),
            slaDeadline: h(10)
        },
        {
            id: "14",
            title: "Cantina Bella Nonna",
            clientName: "Bella Nonna Restaurante Ltda",
            neighborhood: "Expedicionários",
            value: 14400,
            monthlyValue: 1200,
            stage: "lead-in",
            temperature: "warm",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "italiano",
                "restaurante"
            ],
            createdAt: daysAgo(5),
            updatedAt: daysAgo(1),
            status: "open",
            slaDeadline: h(40)
        },
        {
            id: "15",
            title: "Distribuidora Nordeste Bebidas",
            clientName: "Nordeste Bebidas Ltda",
            neighborhood: "Cristo Redentor",
            value: 28000,
            monthlyValue: 2333,
            stage: "lead-in",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "distribuicao",
                "bebidas"
            ],
            createdAt: daysAgo(3),
            updatedAt: daysAgo(0),
            status: "open",
            slaDeadline: h(42)
        },
        {
            id: "16",
            title: "Farmacia Vida & Saude",
            clientName: "Vida e Saude Farmacias ME",
            neighborhood: "Agua Fria",
            value: 5400,
            monthlyValue: 450,
            stage: "lead-in",
            temperature: "cold",
            responsibleId: "3",
            responsibleName: "Ana Oliveira",
            tags: [
                "farmacia",
                "saude"
            ],
            createdAt: daysAgo(2),
            updatedAt: daysAgo(1),
            status: "open",
            slaDeadline: h(20)
        },
        {
            id: "17",
            title: "Auto Pecas Joao Paulo",
            clientName: "JP Auto Pecas Ltda",
            neighborhood: "Jose Americo",
            value: 9000,
            monthlyValue: 750,
            stage: "lead-in",
            temperature: "warm",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "automotivo"
            ],
            createdAt: daysAgo(1),
            updatedAt: daysAgo(0),
            status: "open",
            slaDeadline: h(46)
        },
        {
            id: "18",
            title: "Clinica Odonto Plus",
            clientName: "Odonto Plus Servicos Medicos SS",
            neighborhood: "Manaíra",
            value: 21600,
            monthlyValue: 1800,
            stage: "contato-feito",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "saude",
                "odontologia"
            ],
            createdAt: daysAgo(10),
            updatedAt: daysAgo(1),
            status: "open",
            slaDeadline: h(60)
        },
        {
            id: "19",
            title: "Escola Infantil Pequenos Genios",
            clientName: "Pequenos Genios Educacao Ltda",
            neighborhood: "Bancários",
            value: 16800,
            monthlyValue: 1400,
            stage: "contato-feito",
            temperature: "warm",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "educacao",
                "infantil"
            ],
            createdAt: daysAgo(7),
            updatedAt: daysAgo(2),
            status: "open",
            slaDeadline: h(48)
        },
        {
            id: "20",
            title: "Petshop Amigo Fiel",
            clientName: "Amigo Fiel Petshop ME",
            neighborhood: "Tambaú",
            value: 3600,
            monthlyValue: 300,
            stage: "contato-feito",
            temperature: "cold",
            responsibleId: "2",
            responsibleName: "Joao Santos",
            tags: [
                "pet",
                "varejo"
            ],
            createdAt: daysAgo(14),
            updatedAt: daysAgo(8),
            status: "open",
            slaDeadline: h(-12)
        },
        {
            id: "21",
            title: "Construtora Horizonte",
            clientName: "Horizonte Engenharia S.A.",
            neighborhood: "Altiplano",
            value: 60000,
            monthlyValue: 5000,
            stage: "contato-feito",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "construcao",
                "premium"
            ],
            createdAt: daysAgo(9),
            updatedAt: daysAgo(0),
            status: "open",
            slaDeadline: h(36)
        },
        {
            id: "22",
            title: "Loja de Roupas Estilo",
            clientName: "Estilo Moda Ltda",
            neighborhood: "Bessa",
            value: 7200,
            monthlyValue: 600,
            stage: "reuniao-agendada",
            temperature: "warm",
            responsibleId: "2",
            responsibleName: "Joao Santos",
            tags: [
                "moda",
                "varejo"
            ],
            createdAt: daysAgo(15),
            updatedAt: daysAgo(3),
            status: "open",
            expectedCloseDate: daysFromNow(25),
            slaDeadline: h(80)
        },
        {
            id: "23",
            title: "Grafica Express Print",
            clientName: "Express Print Grafica ME",
            neighborhood: "Centro",
            value: 4800,
            monthlyValue: 400,
            stage: "reuniao-agendada",
            temperature: "cold",
            responsibleId: "3",
            responsibleName: "Ana Oliveira",
            tags: [
                "grafica",
                "servicos"
            ],
            createdAt: daysAgo(21),
            updatedAt: daysAgo(12),
            status: "open",
            expectedCloseDate: daysFromNow(18),
            slaDeadline: h(-8)
        },
        {
            id: "24",
            title: "Academia Corpo em Forma",
            clientName: "Corpo em Forma Fitness Ltda",
            neighborhood: "Jardim Oceania",
            value: 19200,
            monthlyValue: 1600,
            stage: "reuniao-agendada",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "fitness",
                "saude"
            ],
            createdAt: daysAgo(16),
            updatedAt: daysAgo(1),
            status: "open",
            expectedCloseDate: daysFromNow(14),
            slaDeadline: h(70)
        },
        {
            id: "25",
            title: "Supermercado Bom Preco",
            clientName: "Bom Preco Supermercados Ltda",
            neighborhood: "Mangabeira",
            value: 48000,
            monthlyValue: 4000,
            stage: "proposta-enviada",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "supermercado",
                "premium"
            ],
            createdAt: daysAgo(25),
            updatedAt: daysAgo(2),
            status: "open",
            expectedCloseDate: daysFromNow(10),
            slaDeadline: h(48)
        },
        {
            id: "26",
            title: "Escritorio Contabil Fiscal",
            clientName: "Fiscal Contabilidade SS",
            neighborhood: "Torre",
            value: 10800,
            monthlyValue: 900,
            stage: "proposta-enviada",
            temperature: "warm",
            responsibleId: "2",
            responsibleName: "Joao Santos",
            tags: [
                "contabilidade",
                "servicos"
            ],
            createdAt: daysAgo(19),
            updatedAt: daysAgo(5),
            status: "open",
            expectedCloseDate: daysFromNow(15),
            slaDeadline: h(24)
        },
        {
            id: "27",
            title: "Imobiliaria Casa Nova",
            clientName: "Casa Nova Imoveis Ltda",
            neighborhood: "Cabo Branco",
            value: 30000,
            monthlyValue: 2500,
            stage: "proposta-enviada",
            temperature: "cold",
            responsibleId: "3",
            responsibleName: "Ana Oliveira",
            tags: [
                "imobiliaria"
            ],
            createdAt: daysAgo(32),
            updatedAt: daysAgo(15),
            status: "open",
            expectedCloseDate: daysFromNow(22),
            slaDeadline: h(-36)
        },
        {
            id: "28",
            title: "Clinica Veterinaria PetCare",
            clientName: "PetCare Vet Ltda",
            neighborhood: "Brisamar",
            value: 8400,
            monthlyValue: 700,
            stage: "negociacao",
            temperature: "warm",
            responsibleId: "2",
            responsibleName: "Joao Santos",
            tags: [
                "veterinaria",
                "pet"
            ],
            createdAt: daysAgo(26),
            updatedAt: daysAgo(3),
            status: "open",
            expectedCloseDate: daysFromNow(8),
            slaDeadline: h(96)
        },
        {
            id: "29",
            title: "Posto de Gasolina Estrela",
            clientName: "Estrela Combustiveis Ltda",
            neighborhood: "Valentina",
            value: 36000,
            monthlyValue: 3000,
            stage: "negociacao",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "combustiveis",
                "premium"
            ],
            createdAt: daysAgo(40),
            updatedAt: daysAgo(1),
            status: "open",
            expectedCloseDate: daysFromNow(4),
            slaDeadline: h(60)
        },
        {
            id: "30",
            title: "Salao de Beleza Glamour",
            clientName: "Glamour Beauty Ltda",
            neighborhood: "Manaíra",
            value: 6000,
            monthlyValue: 500,
            stage: "negociacao",
            temperature: "cold",
            responsibleId: "3",
            responsibleName: "Ana Oliveira",
            tags: [
                "beleza",
                "estetica"
            ],
            createdAt: daysAgo(33),
            updatedAt: daysAgo(14),
            status: "open",
            expectedCloseDate: daysFromNow(12),
            slaDeadline: h(-72)
        },
        {
            id: "31",
            title: "Laboratorio de Analises BioLab",
            clientName: "BioLab Analises Clinicas Ltda",
            neighborhood: "Centro",
            value: 25200,
            monthlyValue: 2100,
            stage: "fechamento",
            temperature: "hot",
            responsibleId: "2",
            responsibleName: "Joao Santos",
            tags: [
                "saude",
                "laboratorio"
            ],
            createdAt: daysAgo(55),
            updatedAt: daysAgo(0),
            status: "open",
            expectedCloseDate: daysFromNow(3),
            slaDeadline: h(24)
        },
        {
            id: "32",
            title: "Coworking Space Hub",
            clientName: "Hub Coworking Ltda",
            neighborhood: "Altiplano",
            value: 14400,
            monthlyValue: 1200,
            stage: "fechamento",
            temperature: "warm",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "coworking",
                "tecnologia"
            ],
            createdAt: daysAgo(45),
            updatedAt: daysAgo(2),
            status: "open",
            expectedCloseDate: daysFromNow(5),
            slaDeadline: h(40)
        },
        {
            id: "33",
            title: "Agencia de Viagens TurBrasil",
            clientName: "TurBrasil Viagens e Turismo Ltda",
            neighborhood: "Tambaú",
            value: 20400,
            monthlyValue: 1700,
            stage: "lead-in",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "turismo",
                "viagens"
            ],
            createdAt: daysAgo(4),
            updatedAt: daysAgo(0),
            status: "open",
            slaDeadline: h(38)
        },
        {
            id: "34",
            title: "Oficina Mecanica TurboForce",
            clientName: "TurboForce Auto Service ME",
            neighborhood: "Jose Americo",
            value: 7800,
            monthlyValue: 650,
            stage: "contato-feito",
            temperature: "warm",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "automotivo",
                "servicos"
            ],
            createdAt: daysAgo(11),
            updatedAt: daysAgo(4),
            status: "open",
            slaDeadline: h(28)
        },
        {
            id: "35",
            title: "Restaurante Sabor do Sertao",
            clientName: "Sabor do Sertao Gastronomia Ltda",
            neighborhood: "Brisamar",
            value: 16200,
            monthlyValue: 1350,
            stage: "reuniao-agendada",
            temperature: "hot",
            responsibleId: "2",
            responsibleName: "Joao Santos",
            tags: [
                "food-service",
                "regional"
            ],
            createdAt: daysAgo(13),
            updatedAt: daysAgo(1),
            status: "open",
            expectedCloseDate: daysFromNow(22),
            slaDeadline: h(88)
        },
        {
            id: "36",
            title: "Papelaria e Presentes Art Paper",
            clientName: "Art Paper Papelaria ME",
            neighborhood: "Torre",
            value: 3000,
            monthlyValue: 250,
            stage: "proposta-enviada",
            temperature: "cold",
            responsibleId: "3",
            responsibleName: "Ana Oliveira",
            tags: [
                "papelaria",
                "varejo"
            ],
            createdAt: daysAgo(27),
            updatedAt: daysAgo(10),
            status: "open",
            expectedCloseDate: daysFromNow(20),
            slaDeadline: h(-18)
        },
        {
            id: "37",
            title: "Startup Tech Innova",
            clientName: "Innova Tecnologia S.A.",
            neighborhood: "Altiplano",
            value: 72000,
            monthlyValue: 6000,
            stage: "negociacao",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "tecnologia",
                "premium",
                "startup"
            ],
            createdAt: daysAgo(38),
            updatedAt: daysAgo(0),
            status: "open",
            expectedCloseDate: daysFromNow(7),
            slaDeadline: h(100)
        },
        {
            id: "38",
            title: "Padaria Artesanal Trigo & Mel",
            clientName: "Trigo e Mel Panificacao ME",
            neighborhood: "Agua Fria",
            value: 5400,
            monthlyValue: 450,
            stage: "fechamento",
            temperature: "warm",
            responsibleId: "3",
            responsibleName: "Ana Oliveira",
            tags: [
                "panificacao",
                "artesanal"
            ],
            createdAt: daysAgo(48),
            updatedAt: daysAgo(1),
            status: "open",
            expectedCloseDate: daysFromNow(2),
            slaDeadline: h(18)
        },
        {
            id: "39",
            title: "Centro Automotivo Premium",
            clientName: "Premium Auto Center Ltda",
            neighborhood: "Cabo Branco",
            value: 33600,
            monthlyValue: 2800,
            stage: "proposta-enviada",
            temperature: "warm",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "automotivo",
                "premium"
            ],
            createdAt: daysAgo(17),
            updatedAt: daysAgo(3),
            status: "open",
            expectedCloseDate: daysFromNow(13),
            slaDeadline: h(56)
        },
        {
            id: "40",
            title: "Consultoria RH Talentos",
            clientName: "Talentos RH Consultoria SS",
            neighborhood: "Expedicionários",
            value: 12600,
            monthlyValue: 1050,
            stage: "contato-feito",
            temperature: "hot",
            responsibleId: ownerId,
            responsibleName: ownerName,
            tags: [
                "consultoria",
                "rh"
            ],
            createdAt: daysAgo(6),
            updatedAt: daysAgo(0),
            status: "open",
            slaDeadline: h(55)
        }
    ];
    return opportunities.map((opportunity)=>({
            ...opportunity,
            responsibleId: ownerId,
            responsibleName: ownerName
        }));
}
}),
"[project]/src/lib/mock-data/negotiations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockNegotiationRounds",
    ()=>mockNegotiationRounds
]);
const mockNegotiationRounds = [
    {
        id: "round-1",
        type: "proposal",
        authorId: "user-1",
        authorName: "Rafael Mendes",
        createdAt: "2024-02-10T14:30:00",
        monthlyValue: 1500,
        totalValue: 18000,
        setupValue: 2000,
        termMonths: 12,
        conditions: [
            "Contrato padrão",
            "Pagamento mensal"
        ],
        status: "active"
    },
    {
        id: "round-2",
        type: "counter",
        authorId: "client-1",
        authorName: "Cliente",
        createdAt: "2024-02-11T10:00:00",
        monthlyValue: 1200,
        totalValue: 14400,
        setupValue: 0,
        termMonths: 12,
        conditions: [
            "Isenção de setup",
            "Desconto na mensalidade"
        ],
        details: "Cliente solicitou remoção da taxa de setup e desconto de 20% na mensalidade.",
        status: "active"
    },
    {
        id: "round-3",
        type: "internal",
        authorId: "user-2",
        authorName: "Camila Ferreira",
        createdAt: "2024-02-11T16:45:00",
        monthlyValue: 1350,
        totalValue: 16200,
        setupValue: 1000,
        termMonths: 12,
        conditions: [
            "Setup com 50% de desconto",
            "Mensalidade com 10%"
        ],
        details: "Proposta de meio termo para fechar.",
        status: "active"
    }
];
}),
"[project]/src/lib/mock-data/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/helpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/users.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$opportunities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/opportunities.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/clients.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$activities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/activities.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$commissions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/commissions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$notifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/notifications.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$audit$2d$log$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/audit-log.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$goals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/goals.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$dynamic$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/dynamic-generator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2f$negotiations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data/negotiations.ts [app-ssr] (ecmascript)");
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
}),
"[project]/src/lib/mock-stage-fields.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fieldTypeDescriptions",
    ()=>fieldTypeDescriptions,
    "fieldTypeLabels",
    ()=>fieldTypeLabels,
    "isFieldValueEmpty",
    ()=>isFieldValueEmpty,
    "mockFieldValues",
    ()=>mockFieldValues,
    "stageFieldsConfig",
    ()=>stageFieldsConfig,
    "validateFieldValue",
    ()=>validateFieldValue
]);
const fieldTypeLabels = {
    text: "Texto curto",
    textarea: "Texto longo",
    number: "Número decimal",
    integer: "Número inteiro",
    currency: "Moeda (R$)",
    percentage: "Porcentagem (%)",
    url: "URL",
    email: "E-mail",
    phone: "Telefone",
    date: "Data",
    time: "Hora",
    datetime: "Data e hora",
    select: "Seleção única",
    multiselect: "Múltipla seleção",
    boolean: "Sim/Não",
    user: "Usuário",
    contact: "Contato",
    file: "Arquivo"
};
const fieldTypeDescriptions = {
    text: "Para nomes, títulos e textos curtos",
    textarea: "Para descrições e observações longas",
    number: "Valores numéricos com decimais",
    integer: "Valores numéricos inteiros exatos",
    currency: "Valores monetários formatados em R$",
    percentage: "Valores em porcentagem (%)",
    url: "Links e endereços de sites",
    email: "Endereços de e-mail válidos",
    phone: "Números de telefone ou WhatsApp",
    date: "Para selecionar uma data específica",
    time: "Para definir um horário",
    datetime: "Data e hora combinadas",
    select: "Escolher uma única opção",
    multiselect: "Escolher múltiplas opções",
    boolean: "Verdadeiro ou Falso (Sim/Não)",
    user: "Vincular a um usuário do sistema",
    contact: "Vincular a um contato salvo",
    file: "Anexar documentos ou imagens"
};
const stageFieldsConfig = {
    "lead-in": [
        {
            id: "sf-lead-in-1",
            stageId: "lead-in",
            key: "origem_lead",
            label: "Origem do Lead",
            type: "select",
            required: true,
            order: 0,
            isActive: true,
            options: [
                {
                    label: "Google",
                    value: "google"
                },
                {
                    label: "Indicação",
                    value: "indicacao"
                },
                {
                    label: "Instagram",
                    value: "instagram"
                },
                {
                    label: "Outros",
                    value: "outros"
                }
            ]
        },
        {
            id: "sf-lead-in-2",
            stageId: "lead-in",
            key: "decisor",
            label: "Nome do Decisor",
            type: "text",
            order: 1,
            isActive: true,
            placeholder: "Quem decide a compra?"
        }
    ],
    "contato-feito": [
        {
            id: "sf-contato-feito-1",
            stageId: "contato-feito",
            key: "interesse",
            label: "Nível de Interesse",
            type: "select",
            order: 0,
            isActive: true,
            options: [
                {
                    label: "Alto",
                    value: "alto"
                },
                {
                    label: "Médio",
                    value: "medio"
                },
                {
                    label: "Baixo",
                    value: "baixo"
                }
            ]
        },
        {
            id: "sf-contato-feito-2",
            stageId: "contato-feito",
            key: "melhor_horario",
            label: "Melhor Horário para Contato",
            type: "text",
            order: 1,
            isActive: true,
            placeholder: "Ex: Manhã, após as 14h..."
        },
        {
            id: "sf-contato-feito-3",
            stageId: "contato-feito",
            key: "dores_cliente",
            label: "Principais Dores",
            type: "textarea",
            order: 2,
            isActive: true,
            placeholder: "Descreva as dificuldades atuais do cliente..."
        }
    ],
    "reuniao-agendada": [
        {
            id: "sf-reuniao-1",
            stageId: "reuniao-agendada",
            key: "data_reuniao",
            label: "Data da Reunião",
            type: "date",
            required: true,
            order: 0,
            isActive: true
        },
        {
            id: "sf-reuniao-2",
            stageId: "reuniao-agendada",
            key: "pauta",
            label: "Pauta da Reunião",
            type: "textarea",
            order: 1,
            isActive: true,
            placeholder: "O que será discutido?"
        },
        {
            id: "sf-reuniao-3",
            stageId: "reuniao-agendada",
            key: "participantes",
            label: "Participantes Esperados",
            type: "text",
            order: 2,
            isActive: true,
            helperText: "Separe por vírgulas"
        }
    ],
    "proposta-enviada": [
        {
            id: "sf-proposta-1",
            stageId: "proposta-enviada",
            key: "valor_proposta",
            label: "Valor da Proposta (R$)",
            type: "currency",
            required: true,
            order: 0,
            isActive: true
        },
        {
            id: "sf-proposta-2",
            stageId: "proposta-enviada",
            key: "link_proposta",
            label: "Link da Proposta",
            type: "url",
            order: 1,
            isActive: true,
            placeholder: "URL do documento"
        },
        {
            id: "sf-proposta-3",
            stageId: "proposta-enviada",
            key: "prazo_validade",
            label: "Validade da Proposta",
            type: "date",
            order: 2,
            isActive: true
        }
    ],
    "negociacao": [
        {
            id: "sf-negociacao-1",
            stageId: "negociacao",
            key: "objecoes",
            label: "Objeções Levantadas",
            type: "textarea",
            order: 0,
            isActive: true
        },
        {
            id: "sf-negociacao-2",
            stageId: "negociacao",
            key: "desconto_aprovado",
            label: "Desconto Aprovado (%)",
            type: "percentage",
            order: 1,
            isActive: true,
            validationRules: {
                min: 0,
                max: 100
            }
        },
        {
            id: "sf-negociacao-3",
            stageId: "negociacao",
            key: "concorrentes",
            label: "Concorrentes Envolvidos",
            type: "text",
            order: 2,
            isActive: true
        }
    ],
    "fechamento": [
        {
            id: "sf-fechamento-1",
            stageId: "fechamento",
            key: "data_assinatura",
            label: "Data de Assinatura",
            type: "date",
            required: true,
            order: 0,
            isActive: true
        },
        {
            id: "sf-fechamento-2",
            stageId: "fechamento",
            key: "contrato_anexado",
            label: "Contrato Assinado",
            type: "file",
            order: 1,
            isActive: true,
            helperText: "PDF ou Imagem"
        },
        {
            id: "sf-fechamento-3",
            stageId: "fechamento",
            key: "obs_finais",
            label: "Observações Finais",
            type: "textarea",
            order: 2,
            isActive: true
        }
    ]
};
const mockFieldValues = {
};
function isFieldValueEmpty(value) {
    if (value === null || value === undefined) return true;
    if (typeof value === "string" && value.trim() === "") return true;
    if (Array.isArray(value) && value.length === 0) return true;
    return false;
}
function validateFieldValue(field, value) {
    if (field.required && isFieldValueEmpty(value)) {
        return "Preencha este campo para avançar etapa.";
    }
    if (isFieldValueEmpty(value)) return null;
    const rules = field.validationRules;
    if (!rules) return null;
    if (typeof value === "string") {
        if (rules.minLength && value.length < rules.minLength) {
            return `Mínimo ${rules.minLength} caracteres.`;
        }
        if (rules.maxLength && value.length > rules.maxLength) {
            return `Máximo ${rules.maxLength} caracteres.`;
        }
    }
    if (typeof value === "number") {
        if (rules.min !== undefined && value < rules.min) {
            return `Valor mínimo: ${rules.min}.`;
        }
        if (rules.max !== undefined && value > rules.max) {
            return `Valor máximo: ${rules.max}.`;
        }
    }
    if (field.type === "url" && typeof value === "string") {
        try {
            new URL(value);
        } catch  {
            return "URL inválida.";
        }
    }
    if (field.type === "email" && typeof value === "string") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return "E-mail inválido.";
        }
    }
    if ((field.type === "select" || field.type === "multiselect") && field.options) {
        const validValues = field.options.map((o)=>o.value);
        if (typeof value === "string" && !validValues.includes(value)) {
            return "Opção inválida.";
        }
        if (Array.isArray(value)) {
            const invalid = value.filter((v)=>!validValues.includes(v));
            if (invalid.length > 0) return "Opção(ões) inválida(s).";
            if (rules?.minItems && value.length < rules.minItems) {
                return `Selecione no mínimo ${rules.minItems} item(ns).`;
            }
            if (rules?.maxItems && value.length > rules.maxItems) {
                return `Selecione no máximo ${rules.maxItems} item(ns).`;
            }
        }
    }
    return null;
}
}),
"[project]/src/lib/validations/visit.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "visitSchema",
    ()=>visitSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const visitSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "presencial",
        "remoto",
        "outro"
    ]),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "agendada",
        "realizada",
        "cancelada"
    ]),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    time: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    duration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // Presencial fields
    location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    accessSearch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // Remote fields
    platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "google-meet",
        "zoom",
        "whatsapp",
        "outro"
    ]).optional(),
    link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // Other fields
    typeDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // Common fields
    responsibleId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Responsável é obrigatório"),
    participants: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    objective: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(500, "Objetivo deve ter no máximo 500 caracteres").optional(),
    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    outcome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "realizada",
        "no-show",
        "remarcada"
    ]).optional(),
    cancellationReason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).superRefine((data, ctx)=>{
    // 1) Scheduling logic
    const requiresSchedule = data.status === "agendada";
    if (requiresSchedule) {
        if (!data.date) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "Data é obrigatória",
                path: [
                    "date"
                ]
            });
        }
        if (!data.time) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "Hora é obrigatória",
                path: [
                    "time"
                ]
            });
        }
        if (!data.duration) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "Duração é obrigatória",
                path: [
                    "duration"
                ]
            });
        }
    }
    if (data.status === "agendada" && data.date && data.time) {
        const now = new Date();
        const visitDateTime = new Date(`${data.date}T${data.time}`);
        if (visitDateTime < now) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "Data e hora não podem ficar no passado para visitas agendadas",
                path: [
                    "date"
                ]
            });
        }
    }
    // 2) Cancellation logic
    if (data.status === "cancelada" && !data.cancellationReason?.trim()) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
            message: "Motivo do cancelamento é obrigatório",
            path: [
                "cancellationReason"
            ]
        });
    }
    // 3) Type-specific rules
    if (data.type === "presencial") {
        if (!data.location?.trim() || data.location.trim().length < 3) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "Local é obrigatório e deve ter ao menos 3 caracteres",
                path: [
                    "location"
                ]
            });
        }
    }
    if (data.type === "remoto") {
        if (!data.platform) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "Plataforma é obrigatória para visita remota",
                path: [
                    "platform"
                ]
            });
        }
        if (!data.link?.trim()) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "Link da reunião é obrigatório",
                path: [
                    "link"
                ]
            });
        } else {
            try {
                new URL(data.link);
            } catch  {
                ctx.addIssue({
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                    message: "Informe um link válido (https://...)",
                    path: [
                        "link"
                    ]
                });
            }
        }
    }
    if (data.type === "outro") {
        if (!data.typeDescription?.trim() || data.typeDescription.trim().length < 3) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "Detalhe do tipo é obrigatório (mínimo 3 caracteres)",
                path: [
                    "typeDescription"
                ]
            });
        }
    }
    // 4) Completed visit rules
    if (data.status === "realizada" && !data.outcome) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
            message: "Selecione o resultado da visita",
            path: [
                "outcome"
            ]
        });
    }
    if (data.status === "realizada" && (!data.result?.trim() || data.result.trim().length < 10)) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
            message: "Informe uma nota de resultado com pelo menos 10 caracteres",
            path: [
                "result"
            ]
        });
    }
// 5) Responsible is always required (already validated by schema).
});
}),
"[project]/src/lib/validations/activity.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activitySchema",
    ()=>activitySchema,
    "activitySchemaWithRequiredClient",
    ()=>activitySchemaWithRequiredClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/compat.js [app-ssr] (ecmascript)");
;
const activitySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"]({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enum"]([
        "call",
        "email",
        "meeting",
        "visit",
        "task",
        "follow-up",
        "whatsapp"
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(6, "O título deve ter pelo menos 6 caracteres").max(120, "O título deve ter no máximo 120 caracteres"),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(1, "Data é obrigatória"),
    time: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().max(2000, "Descrição pode ter no máximo 2000 caracteres").optional(),
    responsible: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    // Linking fields
    clientId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    clientName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    contactId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    contactName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    opportunityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    opportunityTitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional()
}).superRefine((data, ctx)=>{
    // Time required for call, meeting, whatsapp, email
    const timeRequiredTypes = [
        "call",
        "meeting",
        "whatsapp",
        "email"
    ];
    if (timeRequiredTypes.includes(data.type) && !data.time) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].custom,
            message: "Horário é obrigatório para este tipo de atividade",
            path: [
                "time"
            ]
        });
    }
    // Contact requires client
    if (data.contactId && !data.clientId) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].custom,
            message: "Selecione um cliente antes de vincular um contato",
            path: [
                "contactId"
            ]
        });
    }
    // Opportunity requires client
    if (data.opportunityId && !data.clientId) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].custom,
            message: "Selecione um cliente antes de vincular uma oportunidade",
            path: [
                "opportunityId"
            ]
        });
    }
});
const activitySchemaWithRequiredClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"]({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enum"]([
        "call",
        "email",
        "meeting",
        "visit",
        "task",
        "follow-up",
        "whatsapp"
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(6, "O título deve ter pelo menos 6 caracteres").max(120, "O título deve ter no máximo 120 caracteres"),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(1, "Data é obrigatória"),
    time: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().max(2000, "Descrição pode ter no máximo 2000 caracteres").optional(),
    responsible: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    clientId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(1, "Cliente é obrigatório"),
    clientName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(1),
    contactId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    contactName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    opportunityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional(),
    opportunityTitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().optional()
}).superRefine((data, ctx)=>{
    const timeRequiredTypes = [
        "call",
        "meeting",
        "whatsapp",
        "email"
    ];
    if (timeRequiredTypes.includes(data.type) && !data.time) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].custom,
            message: "Horário é obrigatório para este tipo de atividade",
            path: [
                "time"
            ]
        });
    }
});
}),
"[project]/src/lib/schemas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activateAccountSchema",
    ()=>activateAccountSchema,
    "approvalSchema",
    ()=>approvalSchema,
    "cardCompanySchema",
    ()=>cardCompanySchema,
    "cardValuesSchema",
    ()=>cardValuesSchema,
    "changePasswordSchema",
    ()=>changePasswordSchema,
    "clientSchema",
    ()=>clientSchema,
    "contactSchema",
    ()=>contactSchema,
    "filterSchema",
    ()=>filterSchema,
    "forgotPasswordSchema",
    ()=>forgotPasswordSchema,
    "goalSchema",
    ()=>goalSchema,
    "inviteUserSchema",
    ()=>inviteUserSchema,
    "loginSchema",
    ()=>loginSchema,
    "loseOpportunitySchema",
    ()=>loseOpportunitySchema,
    "newActivitySchema",
    ()=>newActivitySchema,
    "newOpportunitySchema",
    ()=>newOpportunitySchema,
    "profileSchema",
    ()=>profileSchema,
    "resetPasswordSchema",
    ()=>resetPasswordSchema,
    "stageChangeSchema",
    ()=>stageChangeSchema,
    "winOpportunitySchema",
    ()=>winOpportunitySchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$masks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/masks.ts [app-ssr] (ecmascript)");
;
;
// ===== Validadores Zod customizados =====
const phoneValidator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().refine((val)=>!val || val.length === 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$masks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidPhone"])(val), {
    message: "Telefone inválido"
});
const cnpjValidator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((val)=>{
    const digits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$masks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlyDigits"])(val);
    return digits.length === 14 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$masks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidCnpj"])(digits);
}, {
    message: "CNPJ inválido"
});
const passwordStrong = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, "Senha deve ter no mínimo 8 caracteres").regex(/[A-Z]/, "Deve conter ao menos uma letra maiúscula").regex(/[a-z]/, "Deve conter ao menos uma letra minúscula").regex(/[0-9]/, "Deve conter ao menos um número").regex(/[^A-Za-z0-9]/, "Deve conter ao menos um caractere especial");
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Senha é obrigatória").min(8, "Senha deve ter no mínimo 8 caracteres")
});
const forgotPasswordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "E-mail é obrigatório").email("E-mail inválido")
});
const resetPasswordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    password: passwordStrong,
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Confirmação é obrigatória")
}).refine((data)=>data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: [
        "confirmPassword"
    ]
});
const activateAccountSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Nome é obrigatório"),
    phone: phoneValidator,
    password: passwordStrong,
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Confirmação é obrigatória")
}).refine((data)=>data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: [
        "confirmPassword"
    ]
});
const newOpportunitySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Título é obrigatório"),
    clientName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Nome do cliente é obrigatório"),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0, "Valor não pode ser negativo"),
    monthlyValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0, "Valor mensal não pode ser negativo"),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    temperature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "hot",
        "warm",
        "cold"
    ]),
    responsibleId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Responsável é obrigatório"),
    expectedCloseDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const newActivitySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Título é obrigatório"),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "call",
        "email",
        "meeting",
        "visit",
        "task",
        "follow-up",
        "whatsapp"
    ]),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    dueDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Data é obrigatória"),
    dueTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    responsibleId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Responsável é obrigatório"),
    opportunityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    clientId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const clientSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    companyName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Razão social é obrigatória"),
    cnpj: cnpjValidator,
    contactName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Nome do contato é obrigatório"),
    contactEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("E-mail inválido"),
    contactPhone: phoneValidator,
    monthlyRevenue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
});
const inviteUserSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("E-mail inválido"),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "admin",
        "comercial",
        "cs",
        "leitura"
    ]),
    unitId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Unidade é obrigatória")
});
const winOpportunitySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    contractValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0.01, "Valor do contrato é obrigatório"),
    monthlyValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0.01, "Valor mensal é obrigatório"),
    contractStart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Data de início é obrigatória"),
    contractMonths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1, "Prazo é obrigatório"),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const loseOpportunitySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Motivo da perda é obrigatório"),
    competitor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const profileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Nome é obrigatório"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("E-mail inválido"),
    phone: phoneValidator,
    avatar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const changePasswordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    currentPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Senha atual é obrigatória"),
    newPassword: passwordStrong,
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Confirmação é obrigatória")
}).refine((data)=>data.newPassword === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: [
        "confirmPassword"
    ]
});
const cardCompanySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    cnpj: cnpjValidator,
    razaoSocial: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Razão social é obrigatória"),
    fantasia: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Nome fantasia é obrigatório"),
    inscricaoEstadual: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    endereco: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    telefone: phoneValidator,
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("E-mail inválido").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")),
    site: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url("URL inválida").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(""))
});
const contactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Nome é obrigatório"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("E-mail inválido"),
    telefone: phoneValidator,
    cargo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    isDecisionMaker: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
const cardValuesSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    valorTotal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0.01, "Valor total é obrigatório"),
    valorMensal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0.01, "Valor mensal é obrigatório"),
    dataPrevistaFechamento: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Data prevista de fechamento é obrigatória")
});
const stageChangeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    toStage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "lead-in",
        "contato-feito",
        "reuniao-agendada",
        "proposta-enviada",
        "negociacao",
        "fechamento"
    ]),
    requiredFields: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        contactName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        contactEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        meetingDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        proposalValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        contractValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })
});
const goalSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "revenue",
        "opportunities",
        "conversion",
        "activities"
    ]),
    target: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1, "Meta deve ser maior que zero"),
    period: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "monthly",
        "quarterly"
    ]),
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    teamId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const approvalSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    opportunityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Oportunidade é obrigatória"),
    requestedDiscount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0.01, "Desconto deve ser maior que zero").max(100, "Desconto não pode ultrapassar 100%"),
    justification: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Justificativa deve ter no mínimo 10 caracteres")
});
const filterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    responsible: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    stage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    temperature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "hot",
        "warm",
        "cold"
    ]).optional(),
    dateRange: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        start: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        end: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    }).optional(),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
});
}),
"[project]/src/lib/intelligence-engine/helpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Helpers ──────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "buildContextBadge",
    ()=>buildContextBadge,
    "now",
    ()=>now,
    "temperatureEmoji",
    ()=>temperatureEmoji,
    "temperatureLabel",
    ()=>temperatureLabel,
    "uid",
    ()=>uid
]);
function uid() {
    return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function now() {
    return new Date().toISOString();
}
function buildContextBadge(card) {
    if (!card) return undefined;
    return {
        cardId: card.cardId,
        cardName: card.cardName,
        stage: card.stageLabel,
        temperature: card.temperature
    };
}
function temperatureEmoji(t) {
    switch(t){
        case "hot":
            return "🔥";
        case "warm":
            return "🌡️";
        case "cold":
            return "❄️";
        default:
            return "🌡️";
    }
}
function temperatureLabel(t) {
    switch(t){
        case "hot":
            return "Quente";
        case "warm":
            return "Morno";
        case "cold":
            return "Frio";
        default:
            return t;
    }
}
}),
"[project]/src/lib/intelligence-engine/greeting.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Greeting — seção 2.3.1 ──────────────────────────────────────────────
__turbopack_context__.s([
    "generateContextLoaded",
    ()=>generateContextLoaded,
    "generateGreeting",
    ()=>generateGreeting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/helpers.ts [app-ssr] (ecmascript)");
;
function generateGreeting(vendor, card, isFirstOfDay) {
    let content;
    if (card) {
        // Se o vendedor já tem um card aberto
        content = `✨ **Olá, ${vendor.name}!** Sou a Menux Intelligence, seu braço direito comercial.\n\nVi que você está com **${card.cardName}** aberto. Quer que eu te ajude com esse lead ou prefere escolher outro?`;
    } else if (isFirstOfDay) {
        // Primeira abertura do dia → resumo matinal
        content = `✨ **Bom dia, ${vendor.name}!** Sou a Menux Intelligence, seu braço direito comercial.\n\nVocê tem atividades para hoje e leads quentes esperando ação. Quer focar em algum cliente?\n\n**📋 Escolher cliente**\n\nOu pode mandar sua dúvida direto — estou aqui pra ajudar.`;
    } else {
        // Abertura genérica
        content = `✨ **Olá, ${vendor.name}!** Sou a Menux Intelligence, seu braço direito comercial.\n\nQuer falar sobre algum cliente específico? Selecione abaixo para eu carregar todo o contexto.\n\n**📋 Escolher cliente**\n\nOu pode mandar sua dúvida direto — estou aqui pra ajudar.`;
    }
    // Saudações sem card oferecem botão de seleção de cliente
    const suggestedActions = !card ? [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            type: "open-card",
            label: "📋 Escolher cliente",
            icon: "users",
            payload: {
                action: "open-client-picker"
            }
        }
    ] : [];
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "greeting",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        suggestedActions: suggestedActions.length > 0 ? suggestedActions : undefined
    };
}
function generateContextLoaded(card) {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content: `✅ Contexto carregado: **${card.cardName}** (${card.stageLabel} · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["temperatureEmoji"])(card.temperature)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["temperatureLabel"])(card.temperature)}). Como posso te ajudar com esse lead?`,
        contentType: "context-loaded",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        contextBadge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildContextBadge"])(card)
    };
}
}),
"[project]/src/lib/intelligence-engine/analysis.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Analysis Generators ────────────────────────────────────────────────
__turbopack_context__.s([
    "generateCardAnalysis",
    ()=>generateCardAnalysis,
    "generateComparison",
    ()=>generateComparison,
    "generateFunnelSummary",
    ()=>generateFunnelSummary,
    "generatePlansInfo",
    ()=>generatePlansInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/helpers.ts [app-ssr] (ecmascript)");
;
;
function generateFunnelSummary(pipeline) {
    if (!pipeline) {
        return {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            role: "assistant",
            content: "📊 Não consegui carregar os dados do funil neste momento. Tente novamente em alguns instantes.",
            contentType: "funnel-summary",
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
            sourceCommand: "/funil"
        };
    }
    const totalCards = Object.values(pipeline.cardsByStage).reduce((a, b)=>a + b, 0);
    const content = `📊 **Resumo do seu Funil**

**Visão geral:**
  - 🔥 Quentes: precisa de ação imediata
  - 📊 Total no funil: **${totalCards}** oportunidades · **${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(pipeline.totalMRR)}** em MRR potencial

**Por etapa:**
${Object.entries(pipeline.cardsByStage).map(([stage, count])=>`  - **${stage}:** ${count} cards`).join("\n")}

**⚠️ Ações imediatas:**
  ${pipeline.overdueCards > 0 ? `- 🔴 **${pipeline.overdueCards}** card(s) com atividade vencida` : "- ✅ Nenhuma atividade vencida"}
  ${pipeline.hotIdleCards > 0 ? `- 🔥 **${pipeline.hotIdleCards}** lead(s) quente(s) sem atividade` : "- ✅ Leads quentes com atividade em dia"}
  ${pipeline.staleCards > 0 ? `- ⏰ **${pipeline.staleCards}** card(s) parado(s) há mais de 7 dias` : "- ✅ Nenhum card parado"}`;
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "funnel-summary",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        sourceCommand: "/funil"
    };
}
function generateCardAnalysis(card) {
    const healthScore = card.leadScore ?? Math.floor(Math.random() * 40 + 50);
    const overdueCount = card.overdueActivities.length;
    const gargalos = [];
    if (overdueCount > 0) gargalos.push(`Atividades vencidas: ${overdueCount}`);
    if (card.contacts.length === 0) gargalos.push("Nenhum contato registrado");
    if (!card.contacts.some((c)=>c.isDecisionMaker)) gargalos.push("Sem acesso ao decisor");
    if (!card.quotedPlan) gargalos.push("Plano não cotado");
    const closeProbability = card.temperature === "hot" && overdueCount === 0 ? "Alta (70-85%)" : card.temperature === "warm" ? "Média (40-60%)" : "Baixa (15-30%)";
    const content = `🔍 **Análise: ${card.cardName}**

**Saúde do deal:** ${healthScore}/100 ${healthScore >= 70 ? "🟢" : healthScore >= 40 ? "🟡" : "🔴"}

**Temperatura:** ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["temperatureEmoji"])(card.temperature)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["temperatureLabel"])(card.temperature)}
  ${card.temperature === "cold" ? "→ Frio: sem atividade recente ou engajamento baixo." : card.temperature === "warm" ? "→ Morno: há engajamento mas precisa de mais ação." : "→ Quente: lead engajado, momento de avançar!"}

**Score de patente:**
  ${card.contacts.length > 0 ? card.contacts.map((c)=>`- ${c.name}: ${c.role ?? "Cargo não informado"} ${c.isDecisionMaker ? "👑 Decisor" : ""}`).join("\n  ") : "Nenhum contato mapeado. Priorize mapear o decisor."}

${gargalos.length > 0 ? `**Gargalos:**\n${gargalos.map((g)=>`  - ⚠️ ${g}`).join("\n")}` : "**Gargalos:** ✅ Nenhum gargalo identificado"}

**Próximo passo recomendado:** ${overdueCount > 0 ? "Resolva as atividades vencidas imediatamente." : !card.contacts.some((c)=>c.isDecisionMaker) ? "Mapeie e contate o decisor para acelerar o fechamento." : "Envie uma proposta personalizada e agende follow-up em 3 dias."}

**Probabilidade de fechamento:** ${closeProbability}`;
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "card-analysis",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        contextBadge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildContextBadge"])(card),
        suggestedActions: [
            {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
                type: "create-activity",
                label: "📅 Criar atividade",
                icon: "calendar",
                payload: {
                    type: overdueCount > 0 ? "task" : "follow-up",
                    description: `Ação pós-análise de ${card.cardName}`,
                    opportunityId: card.cardId,
                    opportunityTitle: card.cardName
                }
            },
            {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
                type: "save-note",
                label: "📝 Salvar na timeline",
                icon: "file-text",
                payload: {
                    cardId: card.cardId,
                    entityType: card.entityType,
                    noteText: `Análise executada para ${card.cardName}: saúde ${healthScore}/100, probabilidade ${closeProbability}.`
                }
            }
        ],
        sourceCommand: "/analise"
    };
}
function generateComparison(competitor) {
    const content = `⚔️ **Menux vs ${competitor}**

| Critério | Menux | ${competitor} |
|----------|-------|${"-".repeat(competitor.length + 2)}|
| Comanda digital | ✅ Nativo, sem hardware extra | Depende de tablet proprietário |
| Gestão de mesas | ✅ Mapa interativo tempo real | Básico, sem visualização |
| Cardápio digital | ✅ QR Code + autoatendimento | Apenas PDFs |
| Suporte | ✅ Chat + telefone + CS dedicado | Apenas ticket por email |
| Setup | ✅ Onboarding em até 7 dias | 30+ dias em média |
| Preço | ✅ A partir de R$ 149/mês | Similar ou superior |

**Pontos-chave para usar na conversa:**
1. O Menux não exige hardware proprietário — funciona em qualquer dispositivo
2. Suporte humanizado com CS dedicado (não é só chatbot)
3. Setup rápido: cliente operando em até 7 dias

⚠️ *Dados baseados apenas em informações oficiais documentadas. Não faça promessas sobre o concorrente — foque nas vantagens Menux.*`;
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "comparison",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        sourceCommand: "/comparar"
    };
}
function generatePlansInfo() {
    const content = `💰 **Planos Menux**

| Plano | Ideal para | Funcionalidades-chave | A partir de |
|-------|-----------|----------------------|------------|
| **Assist** | Operações simples | Comanda digital, cardápio QR, PDV básico | R$ 149/mês |
| **Sales** | Restaurantes em crescimento | Tudo do Assist + gestão de mesas, relatórios avançados, integrações delivery | R$ 299/mês |
| **Control** | Operações completas | Tudo do Sales + multi-unidades, CMV, fiscal, API aberta | R$ 499/mês |

**Setup:** Taxa única a partir de R$ 500 (inclui configuração + treinamento da equipe)

**Dúvidas frequentes:**
- ✅ Sem fidelidade — cancele quando quiser
- ✅ 7 dias para onboarding completo
- ✅ Suporte incluído em todos os planos

Quer que eu detalhe algum plano específico?`;
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "plans-info",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        sourceCommand: "/planos"
    };
}
}),
"[project]/src/lib/proactive-engine/helpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// Proactive Engine — Helpers
// ============================================================================
__turbopack_context__.s([
    "daysBetween",
    ()=>daysBetween,
    "filterByUser",
    ()=>filterByUser,
    "getStageName",
    ()=>getStageName,
    "hoursBetween",
    ()=>hoursBetween,
    "isToday",
    ()=>isToday,
    "relativeTime",
    ()=>relativeTime
]);
function daysBetween(dateA, dateB) {
    const a = new Date(dateA);
    const b = new Date(dateB);
    return Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}
function hoursBetween(dateA, dateB) {
    const a = new Date(dateA);
    const b = new Date(dateB);
    return (b.getTime() - a.getTime()) / (1000 * 60 * 60);
}
function isToday(date) {
    const d = new Date(date);
    const now = new Date();
    return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
}
function relativeTime(date) {
    const days = daysBetween(date, new Date().toISOString());
    if (days === 0) return "hoje";
    if (days === 1) return "ontem";
    return `ha ${days} dias`;
}
function getStageName(stageId, pipelines) {
    for (const p of pipelines){
        const found = p.stages.find((s)=>s.id === stageId);
        if (found) return found.name;
    }
    return stageId;
}
function filterByUser(items, userId, userRole) {
    if (userRole === "master" || userRole === "admin") return items;
    return items.filter((i)=>i.responsibleId === userId);
}
}),
"[project]/src/lib/proactive-engine/analyzers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// Proactive Engine — Individual Analyzers
// ============================================================================
__turbopack_context__.s([
    "analyzeCompetitiveLosses",
    ()=>analyzeCompetitiveLosses,
    "analyzeContractExpiring",
    ()=>analyzeContractExpiring,
    "analyzeCrossSell",
    ()=>analyzeCrossSell,
    "analyzeGoalRisk",
    ()=>analyzeGoalRisk,
    "analyzeHotLeadsIdle",
    ()=>analyzeHotLeadsIdle,
    "analyzeMissingFields",
    ()=>analyzeMissingFields,
    "analyzeOverdueActivities",
    ()=>analyzeOverdueActivities,
    "analyzeSLAApproaching",
    ()=>analyzeSLAApproaching,
    "analyzeStaleDeals",
    ()=>analyzeStaleDeals,
    "analyzeTeamPerformance",
    ()=>analyzeTeamPerformance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/helpers.ts [app-ssr] (ecmascript)");
;
;
function analyzeOverdueActivities(activities, opportunities, userId, userRole) {
    const userActs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(activities, userId, userRole);
    const overdue = userActs.filter((a)=>{
        if (a.status === "completed" || a.status === "cancelled") return false;
        const dueDate = new Date(a.dueDate);
        return dueDate < new Date();
    });
    return overdue.slice(0, 3).map((act)=>{
        const opp = act.opportunityId ? opportunities.find((o)=>o.id === act.opportunityId) : null;
        const daysOverdue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(act.dueDate, new Date().toISOString());
        return {
            type: "overdue-activity",
            priority: daysOverdue >= 3 ? "high" : "medium",
            message: `Atividade "${act.title}" vencida ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relativeTime"])(act.dueDate)}.${opp ? ` Lead: ${opp.clientName}.` : ""} Resolva para manter o pipeline saudavel.`,
            cardId: opp?.id,
            cardName: opp?.clientName
        };
    });
}
function analyzeHotLeadsIdle(opportunities, activities, userId, userRole, thresholdDays = 3) {
    const userOpps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole).filter((o)=>o.status === "open" && o.temperature === "hot");
    return userOpps.map((opp)=>{
        const oppActivities = activities.filter((a)=>a.opportunityId === opp.id && a.status !== "cancelled").sort((a, b)=>new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());
        const lastDate = oppActivities[0]?.dueDate ?? opp.updatedAt;
        const daysSince = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(lastDate, new Date().toISOString());
        if (daysSince >= thresholdDays) {
            return {
                type: "hot-lead-idle",
                priority: "high",
                message: `Lead quente "${opp.clientName}" sem atividade ha ${daysSince} dias. Na etapa ${opp.stage}. Momento de agir!`,
                cardId: opp.id,
                cardName: opp.clientName
            };
        }
        return null;
    }).filter(Boolean);
}
function analyzeSLAApproaching(opportunities, pipelines, userId, userRole) {
    const now = new Date();
    const userOpps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole).filter((o)=>o.status === "open" && o.slaDeadline);
    return userOpps.map((opp)=>{
        const hoursLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hoursBetween"])(now.toISOString(), opp.slaDeadline);
        if (hoursLeft > 0 && hoursLeft <= 6) {
            const stageName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStageName"])(opp.stage, pipelines);
            return {
                type: "sla-approaching",
                priority: "high",
                message: `"${opp.clientName}" esta a ${Math.round(hoursLeft)}h do SLA na etapa ${stageName}. Priorize esta oportunidade!`,
                cardId: opp.id,
                cardName: opp.clientName
            };
        }
        return null;
    }).filter(Boolean);
}
function analyzeStaleDeals(opportunities, userId, userRole, thresholdDays = 7) {
    const userOpps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole).filter((o)=>o.status === "open");
    return userOpps.map((opp)=>{
        const daysSince = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(opp.updatedAt, new Date().toISOString());
        if (daysSince >= thresholdDays) {
            return {
                type: "stale-deal",
                priority: daysSince >= 14 ? "high" : "medium",
                message: `Negociacao "${opp.clientName}" parada ha ${daysSince} dias sem movimentacao. Considere reengajar ou reavaliar.`,
                cardId: opp.id,
                cardName: opp.clientName
            };
        }
        return null;
    }).filter(Boolean);
}
function analyzeGoalRisk(goals) {
    const now = new Date();
    return goals.map((goal)=>{
        const endDate = new Date(goal.endDate);
        const startDate = new Date(goal.startDate);
        if (endDate < now) return null; // past goal
        const totalDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(startDate.toISOString(), endDate.toISOString());
        const elapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(startDate.toISOString(), now.toISOString());
        const daysRemaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(now.toISOString(), endDate.toISOString());
        const expectedProgress = totalDuration > 0 ? elapsed / totalDuration : 1;
        const actualProgress = goal.target > 0 ? goal.current / goal.target : 0;
        // Only alert if behind schedule AND within 15 days of deadline
        if (actualProgress < expectedProgress * 0.85 && daysRemaining <= 15) {
            const deficit = goal.target - goal.current;
            const deficitStr = goal.type === "revenue" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(deficit) : `${deficit} ${goal.type === "conversion" ? "%" : ""}`;
            return {
                type: "goal-risk",
                priority: daysRemaining <= 7 ? "high" : "medium",
                message: `Meta "${goal.title}" em risco. Faltam ${deficitStr} nos proximos ${daysRemaining} dias. Progresso: ${Math.round(actualProgress * 100)}%.`
            };
        }
        return null;
    }).filter(Boolean);
}
function analyzeContractExpiring(clients, userId, userRole, thresholdDays = 30) {
    const now = new Date();
    const userClients = userRole === "master" || userRole === "admin" ? clients : clients.filter((c)=>c.responsibleId === userId);
    return userClients.map((client)=>{
        if (!client.contractEnd) return null;
        const daysUntil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(now.toISOString(), client.contractEnd);
        if (daysUntil > 0 && daysUntil <= thresholdDays) {
            return {
                type: "contract-expiring",
                priority: daysUntil <= 15 ? "high" : "medium",
                message: `Contrato de "${client.companyName}" expira em ${daysUntil} dias. Inicie a renovacao agora.`,
                cardName: client.companyName
            };
        }
        return null;
    }).filter(Boolean);
}
function analyzeMissingFields(opportunities, userId, userRole) {
    const userOpps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole).filter((o)=>o.status === "open");
    const noCloseDate = userOpps.filter((o)=>!o.expectedCloseDate);
    if (noCloseDate.length >= 3) {
        return [
            {
                type: "missing-fields",
                priority: "low",
                message: `${noCloseDate.length} oportunidades abertas sem data de fechamento prevista. Preencha para melhorar previsibilidade.`
            }
        ];
    }
    return [];
}
function analyzeCrossSell(clients, userId, userRole) {
    const userClients = userRole === "master" || userRole === "admin" ? clients : clients.filter((c)=>c.responsibleId === userId);
    const activeClients = userClients.filter((c)=>c.stage !== "churn" && c.monthlyRevenue > 0);
    if (activeClients.length === 0) return [];
    const avgRevenue = activeClients.reduce((sum, c)=>sum + c.monthlyRevenue, 0) / activeClients.length;
    return activeClients.filter((c)=>c.healthScore === "good" && c.monthlyRevenue < avgRevenue * 0.7).slice(0, 2).map((c)=>({
            type: "cross-sell-opportunity",
            priority: "low",
            message: `"${c.companyName}" com saude boa e ticket ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(c.monthlyRevenue)} (media: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(avgRevenue)}). Oportunidade de upsell!`,
            cardName: c.companyName
        }));
}
function analyzeCompetitiveLosses(opportunities, userId, userRole) {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentLosses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole).filter((o)=>o.status === "lost" && new Date(o.updatedAt) > thirtyDaysAgo && o.lossReason);
    if (recentLosses.length === 0) return [];
    // Group by loss reason
    const reasonCounts = recentLosses.reduce((acc, o)=>{
        const reason = o.lossReason ?? "outro";
        acc[reason] = (acc[reason] ?? 0) + 1;
        return acc;
    }, {});
    const topReason = Object.entries(reasonCounts).sort(([, a], [, b])=>b - a)[0];
    if (topReason && topReason[1] >= 2) {
        return [
            {
                type: "competitive-intelligence",
                priority: "medium",
                message: `${recentLosses.length} deals perdidos nos ultimos 30 dias. Principal motivo: "${topReason[0]}" (${topReason[1]}x). Ajuste sua abordagem.`
            }
        ];
    }
    return [];
}
function analyzeTeamPerformance(opportunities, userId) {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentOpps = opportunities.filter((o)=>new Date(o.updatedAt) > thirtyDaysAgo);
    if (recentOpps.length < 5) return [];
    // Calculate user conversion vs team average
    const userOpps = recentOpps.filter((o)=>o.responsibleId === userId);
    const userWon = userOpps.filter((o)=>o.status === "won").length;
    const userTotal = userOpps.filter((o)=>o.status === "won" || o.status === "lost").length;
    const userRate = userTotal > 0 ? userWon / userTotal * 100 : 0;
    const teamWon = recentOpps.filter((o)=>o.status === "won").length;
    const teamTotal = recentOpps.filter((o)=>o.status === "won" || o.status === "lost").length;
    const teamRate = teamTotal > 0 ? teamWon / teamTotal * 100 : 0;
    if (userTotal < 3) return [];
    const diff = userRate - teamRate;
    if (Math.abs(diff) >= 10) {
        return [
            {
                type: "team-performance",
                priority: "low",
                message: diff > 0 ? `Sua taxa de conversao (${Math.round(userRate)}%) esta ${Math.round(diff)}% acima da media do time. Excelente trabalho!` : `Sua taxa de conversao (${Math.round(userRate)}%) esta ${Math.round(Math.abs(diff))}% abaixo da media. Use /coaching para dicas.`
            }
        ];
    }
    return [];
}
}),
"[project]/src/lib/proactive-engine/aggregators.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// Proactive Engine — Aggregators
// ============================================================================
__turbopack_context__.s([
    "computePipelineContext",
    ()=>computePipelineContext,
    "generateAllSuggestions",
    ()=>generateAllSuggestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/helpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$analyzers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/analyzers.ts [app-ssr] (ecmascript)");
;
;
function generateAllSuggestions(input) {
    const { opportunities, activities, clients, goals, pipelines, userId, userRole } = input;
    const suggestions = [
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$analyzers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeOverdueActivities"])(activities, opportunities, userId, userRole),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$analyzers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeSLAApproaching"])(opportunities, pipelines, userId, userRole),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$analyzers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeHotLeadsIdle"])(opportunities, activities, userId, userRole),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$analyzers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeStaleDeals"])(opportunities, userId, userRole),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$analyzers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeGoalRisk"])(goals),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$analyzers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeContractExpiring"])(clients, userId, userRole),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$analyzers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeMissingFields"])(opportunities, userId, userRole),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$analyzers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeCrossSell"])(clients, userId, userRole),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$analyzers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeCompetitiveLosses"])(opportunities, userId, userRole),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$analyzers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeTeamPerformance"])(opportunities, userId)
    ];
    // Sort: high > medium > low
    const priorityOrder = {
        high: 0,
        medium: 1,
        low: 2
    };
    return suggestions.sort((a, b)=>priorityOrder[a.priority] - priorityOrder[b.priority]);
}
function computePipelineContext(opportunities, activities, userId, userRole) {
    const userOpps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole).filter((o)=>o.status === "open");
    const cardsByStage = {};
    let totalMRR = 0;
    let overdueCards = 0;
    let hotIdleCards = 0;
    let staleCards = 0;
    for (const opp of userOpps){
        // Count by stage
        cardsByStage[opp.stage] = (cardsByStage[opp.stage] ?? 0) + 1;
        // Total MRR
        totalMRR += opp.monthlyValue;
        // Overdue check
        const oppActs = activities.filter((a)=>a.opportunityId === opp.id && a.status !== "cancelled");
        const hasOverdue = oppActs.some((a)=>a.status !== "completed" && new Date(a.dueDate) < new Date());
        if (hasOverdue) overdueCards++;
        // Hot idle check
        if (opp.temperature === "hot") {
            const lastDate = oppActs.length ? Math.max(...oppActs.map((a)=>new Date(a.dueDate).getTime())) : new Date(opp.updatedAt).getTime();
            const daysSince = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(new Date(lastDate).toISOString(), new Date().toISOString());
            if (daysSince >= 3) hotIdleCards++;
        }
        // Stale check
        const daysSinceUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(opp.updatedAt, new Date().toISOString());
        if (daysSinceUpdate >= 7) staleCards++;
    }
    return {
        cardsByStage,
        totalMRR,
        overdueCards,
        hotIdleCards,
        staleCards
    };
}
}),
"[project]/src/lib/proactive-engine/insights.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeQuickWins",
    ()=>computeQuickWins,
    "computeSmartInsights",
    ()=>computeSmartInsights,
    "computeTodaysPriorities",
    ()=>computeTodaysPriorities
]);
// ============================================================================
// Proactive Engine — Insights (Priorities, Smart Insights, Quick Wins)
// ============================================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/helpers.ts [app-ssr] (ecmascript)");
;
;
function computeTodaysPriorities(input) {
    const { opportunities, activities, userId, userRole, pipelines } = input;
    const items = [];
    const now = new Date();
    // 1. Overdue activities
    const userActs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(activities, userId, userRole);
    const overdueActs = userActs.filter((a)=>{
        if (a.status === "completed" || a.status === "cancelled") return false;
        return new Date(a.dueDate) < now;
    });
    for (const act of overdueActs.slice(0, 3)){
        items.push({
            id: `pri-${act.id}`,
            type: "overdue",
            title: act.title,
            subtitle: `Vencida ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relativeTime"])(act.dueDate)}${act.clientName ? ` · ${act.clientName}` : ""}`,
            severity: "critical",
            linkedEntityId: act.opportunityId,
            linkedEntityType: "opportunity"
        });
    }
    // 2. Today's pending activities
    const todayActs = userActs.filter((a)=>a.status === "pending" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isToday"])(a.dueDate));
    for (const act of todayActs.slice(0, 3)){
        items.push({
            id: `pri-${act.id}`,
            type: "due-today",
            title: act.title,
            subtitle: `Hoje${act.dueTime ? ` as ${act.dueTime}` : ""}${act.clientName ? ` · ${act.clientName}` : ""}`,
            severity: "warning",
            linkedEntityId: act.opportunityId,
            linkedEntityType: "opportunity"
        });
    }
    // 3. SLA approaching
    const userOpps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole).filter((o)=>o.status === "open" && o.slaDeadline);
    for (const opp of userOpps){
        const hoursLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hoursBetween"])(now.toISOString(), opp.slaDeadline);
        if (hoursLeft > 0 && hoursLeft <= 8) {
            const stageName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStageName"])(opp.stage, pipelines);
            items.push({
                id: `pri-sla-${opp.id}`,
                type: "sla-warning",
                title: opp.clientName,
                subtitle: `${Math.round(hoursLeft)}h para SLA · ${stageName}`,
                severity: "critical",
                linkedEntityId: opp.id,
                linkedEntityType: "opportunity"
            });
        }
    }
    // 4. Hot leads idle
    const hotIdle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole).filter((o)=>o.status === "open" && o.temperature === "hot");
    for (const opp of hotIdle.slice(0, 2)){
        const oppActs = activities.filter((a)=>a.opportunityId === opp.id && a.status !== "cancelled");
        const lastDate = oppActs.length ? Math.max(...oppActs.map((a)=>new Date(a.dueDate).getTime())) : new Date(opp.updatedAt).getTime();
        const daysSince = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(new Date(lastDate).toISOString(), now.toISOString());
        if (daysSince >= 3) {
            items.push({
                id: `pri-hot-${opp.id}`,
                type: "hot-idle",
                title: opp.clientName,
                subtitle: `Lead quente sem atividade ha ${daysSince}d`,
                severity: "warning",
                linkedEntityId: opp.id,
                linkedEntityType: "opportunity"
            });
        }
    }
    // Sort by severity then return top 8
    const severityOrder = {
        critical: 0,
        warning: 1,
        info: 2
    };
    return items.sort((a, b)=>severityOrder[a.severity] - severityOrder[b.severity]).slice(0, 8);
}
function computeSmartInsights(input) {
    const { opportunities, goals, userId, userRole } = input;
    const insights = [];
    const now = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const userOpps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole);
    // 1. Pipeline velocity (avg days to close won deals)
    const recentWins = userOpps.filter((o)=>o.status === "won" && new Date(o.updatedAt) > thirtyDaysAgo);
    if (recentWins.length >= 2) {
        const avgDays = Math.round(recentWins.reduce((sum, o)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(o.createdAt, o.updatedAt), 0) / recentWins.length);
        insights.push({
            id: "insight-velocity",
            icon: "zap",
            title: "Velocidade do Pipeline",
            description: `Ciclo medio de fechamento: ${avgDays} dias (${recentWins.length} deals fechados nos ultimos 30 dias).`,
            metric: {
                value: `${avgDays}d`,
                trend: avgDays <= 21 ? "up" : "down"
            }
        });
    }
    // 2. Conversion rate
    const closed = userOpps.filter((o)=>(o.status === "won" || o.status === "lost") && new Date(o.updatedAt) > thirtyDaysAgo);
    const won = closed.filter((o)=>o.status === "won");
    if (closed.length >= 3) {
        const rate = Math.round(won.length / closed.length * 100);
        insights.push({
            id: "insight-conversion",
            icon: "trending-up",
            title: "Taxa de Conversao",
            description: `${rate}% de conversao (${won.length} ganhos de ${closed.length} finalizados) nos ultimos 30 dias.`,
            metric: {
                value: `${rate}%`,
                trend: rate >= 50 ? "up" : rate >= 35 ? "stable" : "down"
            }
        });
    }
    // 3. Goal progress
    const activeGoals = goals.filter((g)=>new Date(g.endDate) > now);
    if (activeGoals.length > 0) {
        const mainGoal = activeGoals[0];
        const progress = Math.round(mainGoal.current / mainGoal.target * 100);
        const remaining = mainGoal.target - mainGoal.current;
        const remainingStr = mainGoal.type === "revenue" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(remaining) : `${remaining}`;
        const daysLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(now.toISOString(), mainGoal.endDate);
        insights.push({
            id: "insight-goal",
            icon: "target",
            title: `Meta: ${mainGoal.title}`,
            description: `${progress}% concluido. Faltam ${remainingStr} em ${daysLeft} dias.`,
            metric: {
                value: `${progress}%`,
                trend: progress >= 80 ? "up" : progress >= 50 ? "stable" : "down"
            },
            actionLabel: "Detalhes",
            actionCommand: "/meta"
        });
    }
    // 4. Total pipeline value
    const openOpps = userOpps.filter((o)=>o.status === "open");
    if (openOpps.length > 0) {
        const totalMRR = openOpps.reduce((sum, o)=>sum + o.monthlyValue, 0);
        const totalValue = openOpps.reduce((sum, o)=>sum + o.value, 0);
        insights.push({
            id: "insight-pipeline-value",
            icon: "bar-chart",
            title: "Pipeline Ativo",
            description: `${openOpps.length} oportunidades abertas. MRR potencial: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(totalMRR)}. Valor total: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(totalValue)}.`,
            metric: {
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(totalMRR),
                trend: "stable"
            },
            actionLabel: "Ver funil",
            actionCommand: "/funil"
        });
    }
    return insights;
}
function computeQuickWins(input) {
    const { opportunities, activities, userId, userRole } = input;
    const userOpps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole).filter((o)=>o.status === "open");
    return userOpps.map((opp)=>{
        // Calculate probability based on stage, temperature, recent activity
        let probability = 0;
        // Stage advancement (later stages = higher probability)
        const stageScores = {
            "lead-in": 10,
            "contato-feito": 20,
            "reuniao-agendada": 40,
            "proposta-enviada": 60,
            "negociacao": 75,
            "fechamento": 90
        };
        probability += stageScores[opp.stage] ?? 15;
        // Temperature bonus
        if (opp.temperature === "hot") probability += 15;
        else if (opp.temperature === "warm") probability += 5;
        // Recent activity bonus
        const oppActs = activities.filter((a)=>a.opportunityId === opp.id && a.status !== "cancelled");
        const hasRecentActivity = oppActs.some((a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(a.dueDate, new Date().toISOString()) <= 3);
        if (hasRecentActivity) probability += 10;
        // Cap at 95
        probability = Math.min(95, probability);
        // Reason text
        const reasons = [];
        if (opp.temperature === "hot") reasons.push("Lead quente");
        if (opp.stage === "negociacao" || opp.stage === "fechamento" || opp.stage === "proposta-enviada") reasons.push(opp.stage.replace(/-/g, " "));
        if (hasRecentActivity) reasons.push("Atividade recente");
        return {
            id: opp.id,
            opportunityId: opp.id,
            clientName: opp.clientName,
            stage: opp.stage,
            probability,
            value: opp.monthlyValue,
            reason: reasons.join(" + ") || opp.stage
        };
    }).sort((a, b)=>b.probability - a.probability).slice(0, 5);
}
}),
"[project]/src/lib/proactive-engine/alerts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// Proactive Engine — Risk Alerts
// ============================================================================
__turbopack_context__.s([
    "computeRiskAlerts",
    ()=>computeRiskAlerts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/helpers.ts [app-ssr] (ecmascript)");
;
function computeRiskAlerts(input) {
    const { opportunities, clients, goals, userId, userRole } = input;
    const alerts = [];
    const now = new Date();
    // 1. SLA breaches
    const userOpps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole).filter((o)=>o.status === "open" && o.slaDeadline);
    for (const opp of userOpps){
        const hoursLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hoursBetween"])(now.toISOString(), opp.slaDeadline);
        if (hoursLeft < 0) {
            alerts.push({
                id: `risk-sla-${opp.id}`,
                type: "sla-breach",
                title: `SLA estourado: ${opp.clientName}`,
                description: `SLA vencido ha ${Math.abs(Math.round(hoursLeft))}h na etapa ${opp.stage}.`,
                severity: "critical",
                linkedEntityId: opp.id
            });
        }
    }
    // 2. Client health drops
    const userClients = userRole === "master" || userRole === "admin" ? clients : clients.filter((c)=>c.responsibleId === userId);
    const atRiskClients = userClients.filter((c)=>c.healthScore === "critical" && c.stage !== "churn");
    for (const client of atRiskClients.slice(0, 3)){
        alerts.push({
            id: `risk-health-${client.id}`,
            type: "health-drop",
            title: `Saude critica: ${client.companyName}`,
            description: `Cliente com health score critico. Risco de churn iminente.`,
            severity: "critical",
            linkedEntityId: client.id
        });
    }
    // 3. Stale deals
    const staleOpps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterByUser"])(opportunities, userId, userRole).filter((o)=>o.status === "open" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(o.updatedAt, now.toISOString()) >= 14);
    for (const opp of staleOpps.slice(0, 2)){
        const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(opp.updatedAt, now.toISOString());
        alerts.push({
            id: `risk-stale-${opp.id}`,
            type: "stale",
            title: `Parado ha ${days}d: ${opp.clientName}`,
            description: `Sem movimentacao ha ${days} dias. Reengaje ou reavalie.`,
            severity: "warning",
            linkedEntityId: opp.id
        });
    }
    // 4. Contract expiring
    for (const client of userClients){
        if (!client.contractEnd) continue;
        const daysUntil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(now.toISOString(), client.contractEnd);
        if (daysUntil > 0 && daysUntil <= 30) {
            alerts.push({
                id: `risk-contract-${client.id}`,
                type: "contract-expiring",
                title: `Contrato expirando: ${client.companyName}`,
                description: `Expira em ${daysUntil} dias. Inicie renovacao.`,
                severity: daysUntil <= 15 ? "critical" : "warning",
                linkedEntityId: client.id
            });
        }
    }
    // 5. Goal risk
    const activeGoals = goals.filter((g)=>new Date(g.endDate) > now);
    for (const goal of activeGoals){
        const progress = goal.target > 0 ? goal.current / goal.target : 0;
        const daysLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(now.toISOString(), goal.endDate);
        const totalDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(goal.startDate, goal.endDate);
        const expectedProgress = totalDays > 0 ? (totalDays - daysLeft) / totalDays : 1;
        if (progress < expectedProgress * 0.7 && daysLeft <= 10) {
            alerts.push({
                id: `risk-goal-${goal.id}`,
                type: "goal-risk",
                title: `Meta em risco: ${goal.title}`,
                description: `${Math.round(progress * 100)}% concluido com ${daysLeft} dias restantes.`,
                severity: "critical"
            });
        }
    }
    // Sort by severity
    const severityOrder = {
        critical: 0,
        warning: 1
    };
    return alerts.sort((a, b)=>severityOrder[a.severity] - severityOrder[b.severity]).slice(0, 8);
}
}),
"[project]/src/lib/proactive-engine/formatter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateMorningSummaryContent",
    ()=>generateMorningSummaryContent
]);
// ============================================================================
// Proactive Engine — Morning Briefing Formatter
// ============================================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/insights.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$alerts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/alerts.ts [app-ssr] (ecmascript)");
;
;
;
function generateMorningSummaryContent(input) {
    const priorities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeTodaysPriorities"])(input);
    const insights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeSmartInsights"])(input);
    const quickWins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeQuickWins"])(input);
    const risks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$alerts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeRiskAlerts"])(input);
    const sections = [];
    sections.push("\u{1F305} **Briefing Matinal**\n");
    // Priorities
    if (priorities.length > 0) {
        sections.push("**Prioridades de hoje:**");
        for (const p of priorities.slice(0, 5)){
            const icon = p.severity === "critical" ? "\u{1F534}" : p.severity === "warning" ? "\u{1F7E1}" : "\u{1F535}";
            sections.push(`  ${icon} **${p.title}** \u2014 ${p.subtitle}`);
        }
        sections.push("");
    } else {
        sections.push("**Prioridades:** \u2705 Nenhuma urgencia. Dia tranquilo!\n");
    }
    // Quick wins
    if (quickWins.length > 0) {
        sections.push("**Ganhos rapidos (maior probabilidade):**");
        for (const qw of quickWins.slice(0, 3)){
            sections.push(`  \u{1F3AF} **${qw.clientName}** \u2014 ${qw.probability}% de probabilidade \u00B7 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(qw.value)}/mes \u00B7 ${qw.reason}`);
        }
        sections.push("");
    }
    // Risks
    if (risks.length > 0) {
        sections.push("**Alertas de risco:**");
        for (const r of risks.slice(0, 3)){
            const icon = r.severity === "critical" ? "\u{1F6A8}" : "\u26A0\uFE0F";
            sections.push(`  ${icon} ${r.title} \u2014 ${r.description}`);
        }
        sections.push("");
    }
    // Key metric
    const conversionInsight = insights.find((i)=>i.id === "insight-conversion");
    if (conversionInsight?.metric) {
        sections.push(`**Metrica do dia:** Taxa de conversao: ${conversionInsight.metric.value} ${conversionInsight.metric.trend === "up" ? "\u{1F4C8}" : conversionInsight.metric.trend === "down" ? "\u{1F4C9}" : "\u27A1\uFE0F"}`);
    }
    sections.push("\n\u{1F4A1} Use `/riscos` para detalhes ou `/meta` para progresso das metas.");
    return sections.join("\n");
}
}),
"[project]/src/lib/proactive-engine/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// Proactive Engine — Barrel Export
// Re-exports the public API for backward-compatible imports.
// ============================================================================
// Types
__turbopack_context__.s([]);
// Public API
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$aggregators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/aggregators.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/insights.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$alerts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/alerts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$formatter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/formatter.ts [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/src/lib/intelligence-engine/proactive-commands.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Proactive Command Handlers ─────────────────────────────────────────
__turbopack_context__.s([
    "generateAgenda",
    ()=>generateAgenda,
    "generateCoachingInsights",
    ()=>generateCoachingInsights,
    "generateGoalProgress",
    ()=>generateGoalProgress,
    "generateHelp",
    ()=>generateHelp,
    "generateMorningBriefing",
    ()=>generateMorningBriefing,
    "generateProgressBar",
    ()=>generateProgressBar,
    "generateRiskReport",
    ()=>generateRiskReport,
    "getEngineInput",
    ()=>getEngineInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$formatter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/formatter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/insights.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$alerts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proactive-engine/alerts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/opportunity-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/activity-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$client$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/client-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$goal$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/goal-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$pipeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/pipeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/helpers.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function getEngineInput() {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
    return {
        opportunities: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$opportunity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpportunityStore"].getState().opportunities,
        activities: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$activity$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActivityStore"].getState().activities,
        clients: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$client$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClientStore"].getState().clients,
        goals: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$goal$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGoalStore"].getState().goals,
        pipelines: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$pipeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePipelineStore"].getState().pipelines,
        userId: user?.id ?? "unknown",
        userRole: user?.role ?? "comercial"
    };
}
function generateMorningBriefing() {
    const input = getEngineInput();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$formatter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateMorningSummaryContent"])(input);
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "morning-briefing",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        sourceCommand: "/resumo"
    };
}
function generateRiskReport() {
    const input = getEngineInput();
    const risks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$alerts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeRiskAlerts"])(input);
    if (risks.length === 0) {
        return {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            role: "assistant",
            content: "🚨 **Relatorio de Riscos**\n\n✅ Nenhum alerta de risco no momento. Seu pipeline esta saudavel!",
            contentType: "risk-report",
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
            sourceCommand: "/riscos"
        };
    }
    const sections = [
        "🚨 **Relatorio de Riscos**\n"
    ];
    const critical = risks.filter((r)=>r.severity === "critical");
    const warning = risks.filter((r)=>r.severity === "warning");
    if (critical.length > 0) {
        sections.push(`**Criticos (${critical.length}):**`);
        for (const r of critical){
            sections.push(`  🔴 **${r.title}** — ${r.description}`);
        }
        sections.push("");
    }
    if (warning.length > 0) {
        sections.push(`**Atencao (${warning.length}):**`);
        for (const r of warning){
            sections.push(`  🟡 **${r.title}** — ${r.description}`);
        }
        sections.push("");
    }
    sections.push(`\n📊 Total: **${risks.length}** alertas. Resolva os criticos primeiro.`);
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content: sections.join("\n"),
        contentType: "risk-report",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        sourceCommand: "/riscos"
    };
}
function generateGoalProgress() {
    const input = getEngineInput();
    const now_ = new Date();
    const activeGoals = input.goals.filter((g)=>new Date(g.endDate) > now_);
    if (activeGoals.length === 0) {
        return {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            role: "assistant",
            content: "🎯 **Progresso das Metas**\n\nNenhuma meta ativa no momento. Configure suas metas em Configuracoes > Metas.",
            contentType: "goal-progress",
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
            sourceCommand: "/meta"
        };
    }
    const sections = [
        "🎯 **Progresso das Metas**\n"
    ];
    for (const goal of activeGoals){
        const progress = Math.round(goal.current / goal.target * 100);
        const remaining = goal.target - goal.current;
        const daysLeft = Math.max(0, Math.floor((new Date(goal.endDate).getTime() - now_.getTime()) / (1000 * 60 * 60 * 24)));
        const remainingStr = goal.type === "revenue" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(remaining) : `${remaining}`;
        const currentStr = goal.type === "revenue" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(goal.current) : `${goal.current}`;
        const targetStr = goal.type === "revenue" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(goal.target) : `${goal.target}`;
        const progressBar = generateProgressBar(progress);
        const statusIcon = progress >= 100 ? "✅" : progress >= 70 ? "🟢" : progress >= 40 ? "🟡" : "🔴";
        sections.push(`**${goal.title}** ${statusIcon}`);
        sections.push(`  ${progressBar} ${progress}%`);
        sections.push(`  Atual: **${currentStr}** / Meta: **${targetStr}**`);
        if (remaining > 0) {
            sections.push(`  Faltam: **${remainingStr}** em **${daysLeft}** dias`);
            // Daily target to hit goal
            if (daysLeft > 0 && goal.type === "revenue") {
                const dailyNeeded = remaining / daysLeft;
                sections.push(`  Ritmo necessario: **${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(dailyNeeded)}/dia**`);
            }
        } else {
            sections.push(`  🏆 **Meta atingida!**`);
        }
        sections.push("");
    }
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content: sections.join("\n"),
        contentType: "goal-progress",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        sourceCommand: "/meta"
    };
}
function generateProgressBar(pct) {
    const filled = Math.round(pct / 10);
    const empty = 10 - filled;
    return `[${"█".repeat(Math.min(filled, 10))}${"░".repeat(Math.max(empty, 0))}]`;
}
function generateCoachingInsights() {
    const input = getEngineInput();
    const insights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeSmartInsights"])(input);
    const quickWins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeQuickWins"])(input);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const sections = [
        "📈 **Coaching de Vendas**\n"
    ];
    // Conversion insight
    const conversion = insights.find((i)=>i.id === "insight-conversion");
    if (conversion?.metric) {
        sections.push(`**Taxa de conversao:** ${conversion.metric.value} ${conversion.metric.trend === "up" ? "📈 Acima da media!" : conversion.metric.trend === "down" ? "📉 Abaixo da media." : "➡️ Na media."}`);
        sections.push("");
    }
    // Velocity insight
    const velocity = insights.find((i)=>i.id === "insight-velocity");
    if (velocity?.metric) {
        sections.push(`**Velocidade de fechamento:** ${velocity.metric.value} por deal`);
        sections.push("");
    }
    // Activity analysis
    const userActs = input.activities.filter((a)=>a.responsibleId === input.userId && new Date(a.dueDate) > thirtyDaysAgo);
    const completed = userActs.filter((a)=>a.status === "completed");
    const completionRate = userActs.length > 0 ? Math.round(completed.length / userActs.length * 100) : 0;
    sections.push(`**Atividades (30 dias):** ${completed.length} concluidas de ${userActs.length} (${completionRate}% de conclusao)`);
    // Activity mix
    const activityTypes = completed.reduce((acc, a)=>{
        acc[a.type] = (acc[a.type] ?? 0) + 1;
        return acc;
    }, {});
    const topTypes = Object.entries(activityTypes).sort(([, a], [, b])=>b - a).slice(0, 3);
    if (topTypes.length > 0) {
        sections.push(`  Canais mais usados: ${topTypes.map(([t, c])=>`${t} (${c}x)`).join(", ")}`);
    }
    sections.push("");
    // Loss analysis
    const recentLosses = input.opportunities.filter((o)=>o.status === "lost" && o.responsibleId === input.userId && new Date(o.updatedAt) > thirtyDaysAgo);
    if (recentLosses.length > 0) {
        const reasons = recentLosses.reduce((acc, o)=>{
            const reason = o.lossReason ?? "outro";
            acc[reason] = (acc[reason] ?? 0) + 1;
            return acc;
        }, {});
        sections.push(`**Analise de perdas (${recentLosses.length} perdidos):**`);
        for (const [reason, count] of Object.entries(reasons).sort(([, a], [, b])=>b - a)){
            sections.push(`  - ${reason}: ${count}x`);
        }
        sections.push("");
    }
    // Tips
    sections.push("**Dicas personalizadas:**");
    if (completionRate < 80) {
        sections.push("  💡 Sua taxa de conclusao de atividades esta abaixo de 80%. Priorize fechar as pendentes antes de criar novas.");
    }
    if (conversion?.metric?.trend === "down") {
        sections.push("  💡 Sua conversao caiu. Revise a qualidade dos leads na entrada do funil e use `/objecao` para preparar contra-argumentos.");
    }
    if (quickWins.length > 0) {
        sections.push(`  💡 Voce tem ${quickWins.length} ganhos rapidos (deals com alta probabilidade). Foque neles primeiro!`);
    }
    const hasCallActivity = topTypes.some(([t])=>t === "call" || t === "meeting");
    if (!hasCallActivity) {
        sections.push("  💡 Pouca atividade de ligacao/reuniao. Contato direto aumenta a taxa de conversao em media 30%.");
    }
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content: sections.join("\n"),
        contentType: "coaching",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        sourceCommand: "/coaching"
    };
}
function generateAgenda() {
    const input = getEngineInput();
    const priorities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proactive$2d$engine$2f$insights$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeTodaysPriorities"])(input);
    const now_ = new Date();
    const todayStr = now_.toISOString().split("T")[0];
    const todayActivities = input.activities.filter((a)=>a.responsibleId === input.userId && a.dueDate === todayStr && a.status !== "cancelled" && a.status !== "completed").sort((a, b)=>{
        if (a.dueTime && b.dueTime) return a.dueTime.localeCompare(b.dueTime);
        if (a.dueTime) return -1;
        if (b.dueTime) return 1;
        return 0;
    });
    const overdueActivities = input.activities.filter((a)=>a.responsibleId === input.userId && a.status !== "completed" && a.status !== "cancelled" && new Date(a.dueDate) < now_ && a.dueDate !== todayStr);
    const sections = [
        "📅 **Agenda do Dia**\n"
    ];
    // Overdue first
    if (overdueActivities.length > 0) {
        sections.push(`**🔴 Atrasadas (${overdueActivities.length}):**`);
        for (const act of overdueActivities.slice(0, 5)){
            sections.push(`  - **${act.title}** — vencida em ${act.dueDate}${act.clientName ? ` · ${act.clientName}` : ""}`);
        }
        sections.push("");
    }
    // Today's activities
    if (todayActivities.length > 0) {
        sections.push(`**📋 Hoje (${todayActivities.length}):**`);
        for (const act of todayActivities){
            const timeStr = act.dueTime ? `${act.dueTime} — ` : "";
            const typeIcon = act.type === "call" ? "📞" : act.type === "email" ? "📧" : act.type === "meeting" ? "🤝" : act.type === "whatsapp" ? "💬" : act.type === "visit" ? "🏢" : "📌";
            sections.push(`  ${typeIcon} ${timeStr}**${act.title}**${act.clientName ? ` · ${act.clientName}` : ""}`);
        }
        sections.push("");
    } else if (overdueActivities.length === 0) {
        sections.push("Nenhuma atividade agendada para hoje.\n");
    }
    // Suggested priority order
    if (priorities.length > 0) {
        sections.push("**Sugestao de prioridade:**");
        for(let i = 0; i < Math.min(priorities.length, 5); i++){
            const p = priorities[i];
            sections.push(`  ${i === 0 ? "1️⃣" : i === 1 ? "2️⃣" : i === 2 ? "3️⃣" : i === 3 ? "4️⃣" : "5️⃣"} **${p.title}** — ${p.subtitle}`);
        }
        sections.push("");
    }
    sections.push(`\nTotal: **${overdueActivities.length}** atrasadas + **${todayActivities.length}** para hoje.`);
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content: sections.join("\n"),
        contentType: "agenda",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        sourceCommand: "/agenda"
    };
}
function generateHelp() {
    const content = `❓ **O que posso fazer por você?**

Sou a Menux Intelligence — seu braço direito comercial. Aqui está o que sei fazer:

| Comando | O que faz |
|---------|----------|
| \`/briefing\` | 📋 Resumo completo do lead antes de uma ligação ou reunião |
| \`/objecao\` | 🛡️ Contra-argumentos para objeções + mensagem pronta |
| \`/mensagem\` | 💬 Escrevo mensagens para WhatsApp, email ou ligação |
| \`/pitch\` | 🎯 Argumentos de venda personalizados pro perfil do lead |
| \`/funil\` | 📊 Visão geral do seu pipeline com ações prioritárias |
| \`/analise\` | 🔍 Diagnóstico completo de um card com probabilidade de fechamento |
| \`/comparar\` | ⚔️ Comparativo Menux vs concorrente |
| \`/planos\` | 💰 Info sobre planos, preços e funcionalidades |
| \`/followup\` | 🔄 Gero follow-up baseado na última interação |
| \`/resumo\` | 🌅 Briefing matinal com prioridades, ganhos rapidos e alertas |
| \`/riscos\` | 🚨 Todos os alertas de risco do seu pipeline |
| \`/meta\` | 🎯 Progresso das metas com projecoes |
| \`/coaching\` | 📈 Coaching de vendas com dicas personalizadas |
| \`/agenda\` | 📅 Atividades do dia + sugestao de prioridade |

💡 **Dicas:**
- Abra o card de um lead e me pergunte — uso todo o contexto automaticamente
- Use os botões de ação para criar atividades e salvar notas direto no CRM
- Copie mensagens prontas com 1 clique

Quer experimentar algum comando?`;
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "help",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        sourceCommand: "/ajuda"
    };
}
}),
"[project]/src/lib/intelligence-engine/freeform.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Free-form response ─────────────────────────────────────────────────
__turbopack_context__.s([
    "generateErrorMessage",
    ()=>generateErrorMessage,
    "generateFreeResponse",
    ()=>generateFreeResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/helpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$analysis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/analysis.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/proactive-commands.ts [app-ssr] (ecmascript)");
;
;
;
const MODE_LABELS = {
    focus: "Foco Cliente",
    audit: "Auditoria",
    reply: "Responder",
    proposal: "Proposta"
};
const MODE_HINTS = {
    focus: "Focando na situação específica deste cliente e próximos passos práticos.",
    audit: "Analisando métricas, gargalos e oportunidades de otimização.",
    reply: "Gerando mensagens prontas para envio. Direto e prático.",
    proposal: "Focando em argumentos de venda, diferenciação e proposta de valor."
};
function generateFreeResponse(text, card, mode, tone) {
    const txtLower = text.toLowerCase();
    // Detectar intenção e responder contextualmente
    if (txtLower.includes("preço") || txtLower.includes("plano") || txtLower.includes("quanto custa")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$analysis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatePlansInfo"])();
    }
    if (txtLower.includes("bom dia") || txtLower.includes("resumo do dia") || txtLower.includes("meu dia") || txtLower.includes("briefing matinal")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateMorningBriefing"])();
    }
    if (txtLower.includes("risco") || txtLower.includes("alerta") || txtLower.includes("perigo") || txtLower.includes("problema")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRiskReport"])();
    }
    if (txtLower.includes("meta") || txtLower.includes("objetivo") || txtLower.includes("target")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateGoalProgress"])();
    }
    if (txtLower.includes("coaching") || txtLower.includes("performance") || txtLower.includes("desempenho") || txtLower.includes("como estou")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCoachingInsights"])();
    }
    if (txtLower.includes("agenda") || txtLower.includes("atividades de hoje") || txtLower.includes("o que tenho")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateAgenda"])();
    }
    if (txtLower.includes("mover") || txtLower.includes("mova") || txtLower.includes("avançar card")) {
        // Edge case: seção 11 — IA não executa ações diretas
        return {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            role: "assistant",
            content: `Não consigo mover cards diretamente, mas posso te ajudar a preparar tudo para o avanço. ${card ? `O card **${card.cardName}** está na etapa **${card.stageLabel}**. Quer que eu verifique o que falta para avançar?` : "Abra o card que deseja avançar e eu te ajudo!"}`,
            contentType: "text",
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
            contextBadge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildContextBadge"])(card)
        };
    }
    // Resposta genérica contextual
    const toneHint = tone === "formal" ? " Responderei de forma executiva e profissional." : tone === "casual" ? " Responderei de forma descontraída e direta." : "";
    const modeHint = mode && mode !== "focus" ? `\n\n*Modo ${MODE_LABELS[mode]} ativo — ${MODE_HINTS[mode]}*` : "";
    const content = card ? `Entendi sua pergunta sobre **${card.cardName}**! ${card.temperature === "hot" ? "🔥 Esse lead está quente — " : ""}Como posso te ajudar com isso? Posso gerar um \`/briefing\`, preparar uma \`/mensagem\` ou analisar o card com \`/analise\`.${toneHint}${modeHint}` : `Entendi! Posso te ajudar de várias formas. Use os comandos rápidos (/) para ações específicas, ou me pergunte sobre planos, objeções, ou estratégias de venda.${toneHint}\n\n💡 Dica: selecione um cliente com 📋 para eu carregar todo o contexto e personalizar minhas respostas.${modeHint}`;
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "text",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        contextBadge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildContextBadge"])(card)
    };
}
function generateErrorMessage(type, extra) {
    const messages = {
        "no-card": "Para usar este comando, abra o card do lead primeiro ou selecione um cliente com 📋. Posso te ajudar com outra coisa?",
        "rate-limit": `Você atingiu o limite de consultas nesta hora. O limite será resetado às ${extra?.resetTime ?? "--:--"}. Enquanto isso, suas conversas e histórico continuam disponíveis.`,
        "api-error": "Ops, tive um problema ao processar sua mensagem. Tente novamente em alguns instantes.",
        "max-messages": "Atingimos o limite desta conversa (100 mensagens). Inicie uma nova conversa para continuar.",
        "media-unsupported": "Por enquanto, consigo processar apenas texto. Descreva sua dúvida por escrito que eu te ajudo!",
        "forbidden-command": `Você não tem permissão para usar o comando ${extra?.command ?? "solicitado"} neste perfil.`,
        "invalid-command": "Comando inválido. Use /ajuda para ver os comandos disponíveis.",
        "missing-command-input": `Faltou informar o conteúdo para ${extra?.command ?? "este comando"}. ${extra?.hint ?? "Preencha o campo e tente novamente."}`
    };
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content: messages[type] ?? messages["api-error"],
        contentType: "error",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])()
    };
}
}),
"[project]/src/lib/intelligence-engine/sales-commands.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Sales Command Handlers ─────────────────────────────────────────────
__turbopack_context__.s([
    "generateBriefing",
    ()=>generateBriefing,
    "generateFollowup",
    ()=>generateFollowup,
    "generateGhostwriting",
    ()=>generateGhostwriting,
    "generateObjectionResponse",
    ()=>generateObjectionResponse,
    "generatePitch",
    ()=>generatePitch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/intelligence.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-rules.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/helpers.ts [app-ssr] (ecmascript)");
;
;
;
function generateBriefing(card) {
    const overdueCount = card.overdueActivities.length;
    const contactList = card.contacts.length ? card.contacts.map((c)=>`  - **${c.name}** ${c.role ? `(${c.role})` : ""} ${c.isDecisionMaker ? "👑 Decisor" : ""}`).join("\n") : "  - Nenhum contato registrado";
    const riskItems = [];
    if (overdueCount > 0) riskItems.push(`⚠️ ${overdueCount} atividade(s) vencida(s)`);
    if (card.temperature === "cold") riskItems.push("❄️ Lead frio — pode estar esfriando");
    if (card.registeredObjections.length > 0) riskItems.push(`🛡️ ${card.registeredObjections.length} objeção(ões) registrada(s)`);
    const content = `📋 **Briefing: ${card.cardName}**

**Contexto rápido:**
  - Etapa: **${card.stageLabel}** · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["temperatureEmoji"])(card.temperature)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["temperatureLabel"])(card.temperature)}
  ${card.cnpj ? `- CNPJ: ${card.cnpj}` : ""}
  ${card.tags.length ? `- Tags: ${card.tags.join(", ")}` : ""}

**Contatos:**
${contactList}

**Valor:**
  ${card.quotedPlan ? `- Plano cotado: **${card.quotedPlan}**` : "- Plano: não cotado ainda"}
  ${card.setupValue ? `- Setup: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(card.setupValue)}` : ""}
  ${card.mrrValue ? `- MRR: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrencyBRL"])(card.mrrValue)}` : ""}

${card.timelineNotes.length > 0 ? `**Últimas interações:**\n${card.timelineNotes.slice(0, 5).map((n, i)=>`  ${i + 1}. ${n}`).join("\n")}` : "**Histórico:** Sem notas registradas"}

${riskItems.length > 0 ? `**Riscos:**\n${riskItems.map((r)=>`  ${r}`).join("\n")}` : "**Riscos:** ✅ Nenhum risco identificado"}

**Próximo passo sugerido:** ${overdueCount > 0 ? "Priorize as atividades vencidas antes de avançar." : card.temperature === "hot" ? "Lead quente! Agende uma reunião o mais rápido possível." : "Faça um follow-up personalizado para manter o engajamento."}`;
    const suggestedActions = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            type: "create-activity",
            label: "📅 Criar atividade",
            icon: "calendar",
            payload: {
                type: "follow-up",
                description: `Follow-up do briefing de ${card.cardName}`,
                opportunityId: card.cardId,
                opportunityTitle: card.cardName
            }
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            type: "save-note",
            label: "📝 Salvar na timeline",
            icon: "file-text",
            payload: {
                cardId: card.cardId,
                entityType: card.entityType,
                noteText: `Briefing gerado para ${card.cardName} (${card.stageLabel} · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["temperatureLabel"])(card.temperature)}).`
            }
        }
    ];
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "briefing",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        contextBadge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildContextBadge"])(card),
        suggestedActions,
        sourceCommand: "/briefing"
    };
}
function generateObjectionResponse(objection, card) {
    // Classificar a objeção automaticamente
    const objLower = objection.toLowerCase();
    let category = "Geral";
    if (objLower.includes("preço") || objLower.includes("caro") || objLower.includes("custo")) category = "Preço";
    else if (objLower.includes("concorrent") || objLower.includes("outro sistema")) category = "Concorrente";
    else if (objLower.includes("momento") || objLower.includes("agora não") || objLower.includes("depois")) category = "Timing";
    else if (objLower.includes("preciso") || objLower.includes("necessidade")) category = "Falta de necessidade";
    else if (objLower.includes("confia") || objLower.includes("garantia")) category = "Desconfiança";
    else if (objLower.includes("técnic") || objLower.includes("integra")) category = "Técnica";
    const cardContext = card ? `\n\n💡 *Contexto de ${card.cardName}: ${card.stageLabel} · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["temperatureEmoji"])(card.temperature)}*` : "";
    const whatsappResponse = category === "Preço" ? `Entendo a preocupação com investimento! O legal é que o retorno vem rápido: clientes como você geralmente recuperam o valor em 2-3 meses. Posso te mostrar como?` : category === "Timing" ? `Faz total sentido! Só pra te ajudar a planejar: quando seria o melhor momento pra gente retomar? Assim garanto que você não perde as condições atuais.` : `Ótimo ponto! Muitos clientes tinham a mesma dúvida. Posso te mostrar como resolvemos isso na prática?`;
    const content = `🛡️ **Análise da objeção**

**Categoria:** ${category}
**Objeção recebida:** "${objection}"${cardContext}

**Contra-argumento:**
${category === "Preço" ? "Foque no ROI, não no custo. O Menux se paga em 2-3 meses com ganho de eficiência operacional. Destaque o impacto financeiro de NÃO ter o sistema." : category === "Timing" ? "Respeite o momento, mas crie urgência suave. Pergunte o que acontece se continuarem sem solução até lá. Plante a semente de que resolver antes gera vantagem." : category === "Concorrente" ? "Não fale mal do concorrente. Foque nas diferenças de entrega, suporte e resultados comprovados do Menux. Peça para compararem funcionalidades lado a lado." : "Valide a preocupação e redirecione com uma pergunta que traga o lead de volta ao valor."}

**Pergunta de avanço:**
"${category === "Preço" ? "Se eu te mostrasse que o investimento se paga em 3 meses, faria sentido avançarmos?" : "O que precisaria acontecer para você se sentir seguro(a) pra avançar?"}"`;
    const copyableBlocks = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            content: whatsappResponse,
            channel: "whatsapp",
            charLimit: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTELLIGENCE_LIMITS"].WHATSAPP_CHAR_LIMIT,
            label: "Mensagem WhatsApp"
        }
    ];
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "objection-response",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        contextBadge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildContextBadge"])(card),
        copyableBlocks,
        sourceCommand: "/objecao"
    };
}
function generateGhostwriting(input, card) {
    const inputLower = input.toLowerCase();
    let channel = "whatsapp";
    if (inputLower.includes("email")) channel = "email";
    else if (inputLower.includes("ligação") || inputLower.includes("call")) channel = "call";
    const clientName = card?.cardName ?? "cliente";
    const contactName = card?.contacts?.[0]?.name ?? "";
    const copyableBlocks = [];
    if (channel === "whatsapp") {
        const msg = contactName ? `Oi ${contactName}! Tudo bem? Aqui é da Menux. Vi que você demonstrou interesse no nosso sistema. Teria uns minutinhos pra gente bater um papo sobre como otimizar a operação aí? 😊` : `Olá! Aqui é da Menux. Gostaria de conversar sobre como podemos ajudar a otimizar a operação do seu restaurante. Teria uns minutinhos? 😊`;
        copyableBlocks.push({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            content: msg,
            channel: "whatsapp",
            charLimit: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTELLIGENCE_LIMITS"].WHATSAPP_CHAR_LIMIT,
            label: "Mensagem WhatsApp"
        });
    } else if (channel === "email") {
        copyableBlocks.push({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            content: `Otimize a operação do ${clientName} com a Menux`,
            channel: "email",
            label: "Assunto"
        }, {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            content: `${contactName ? `Olá ${contactName},` : "Olá,"}\n\nEspero que esteja tudo bem! Sou da Menux e gostaria de mostrar como nosso sistema pode transformar a gestão do seu restaurante.\n\nPodemos agendar uma conversa rápida de 15 minutos esta semana?\n\nAbraço!`,
            channel: "email",
            charLimit: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTELLIGENCE_LIMITS"].EMAIL_BODY_CHAR_LIMIT,
            label: "Corpo do email"
        });
    } else {
        copyableBlocks.push({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
            content: `• Abertura: Apresentar-se e confirmar se é bom momento\n• Contexto: Mencionar como conhecemos o restaurante\n• Dor: Perguntar sobre principais desafios da operação\n• Valor: Conectar dores com soluções Menux\n• Próximo passo: Propor demonstração ou reunião`,
            channel: "call",
            label: "Roteiro de ligação"
        });
    }
    const content = `💬 **Mensagem gerada para ${channel === "whatsapp" ? "WhatsApp" : channel === "email" ? "Email" : "Ligação"}**${card ? `\n\n📋 *Baseado em: ${card.cardName}*` : ""}`;
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "ghostwriting",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        contextBadge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildContextBadge"])(card),
        copyableBlocks,
        sourceCommand: "/mensagem"
    };
}
function generatePitch(card) {
    const content = `🎯 **Pitch Personalizado: ${card.cardName}**

**Perfil:** ${card.stageLabel} · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["temperatureEmoji"])(card.temperature)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["temperatureLabel"])(card.temperature)}${card.tags.length ? ` · ${card.tags.join(", ")}` : ""}

**Ponto de valor 1 — Eficiência operacional:**
  - 🔴 Dor: Perda de tempo com processos manuais no salão
  - ✅ Menux: Automação completa de comanda digital e gestão de mesas
  - 📊 Case: Restaurantes similares reduziram 40% do tempo de atendimento

**Ponto de valor 2 — Controle financeiro:**
  - 🔴 Dor: Falta de visibilidade sobre custos e margem por prato
  - ✅ Menux: Dashboard em tempo real com CMV, ticket médio e faturamento
  - 📊 Case: Aumento de 25% na margem após 3 meses de uso

**Ponto de valor 3 — Experiência do cliente:**
  - 🔴 Dor: Filas, erros de pedido, demora no atendimento
  - ✅ Menux: Cardápio digital + autoatendimento + integração com delivery

**Pergunta de abertura:** "Qual o maior gargalo da operação hoje — atendimento, controle financeiro ou gestão do cardápio?"

**Frase de fechamento:** "Com base no que conversamos, faz sentido agendarmos uma demonstração personalizada para a semana que vem?"`;
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "pitch",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        contextBadge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildContextBadge"])(card),
        suggestedActions: [
            {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
                type: "create-activity",
                label: "📅 Agendar demonstração",
                icon: "calendar",
                payload: {
                    type: "meeting",
                    description: `Demo ${card.cardName}`,
                    opportunityId: card.cardId,
                    opportunityTitle: card.cardName
                }
            }
        ],
        sourceCommand: "/pitch"
    };
}
function generateFollowup(card) {
    const contactName = card.contacts?.[0]?.name ?? "";
    const lastNote = card.timelineNotes.length > 0 ? card.timelineNotes[0] : "sem interação recente";
    const whatsappMsg = contactName ? `Oi ${contactName}! Tudo bem? Estou passando pra retomar nossa conversa sobre o Menux. Vi que ficou de analisar internamente — teve alguma novidade? Fico à disposição! 😊` : `Olá! Passando pra retomar nossa conversa sobre o Menux. Conseguiu avaliar as informações que enviamos? Estou à disposição pra qualquer dúvida!`;
    const content = `🔄 **Follow-up: ${card.cardName}**

📋 *Última interação: ${lastNote}*

**Estratégia:** Retomada gentil com abertura para atualização do lead.`;
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        role: "assistant",
        content,
        contentType: "followup",
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(),
        contextBadge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildContextBadge"])(card),
        copyableBlocks: [
            {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
                content: whatsappMsg,
                channel: "whatsapp",
                charLimit: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$intelligence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTELLIGENCE_LIMITS"].WHATSAPP_CHAR_LIMIT,
                label: "Mensagem WhatsApp"
            }
        ],
        suggestedActions: [
            {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
                type: "schedule-followup",
                label: "🔄 Agendar follow-up",
                icon: "refresh-cw",
                payload: {
                    type: "follow-up",
                    description: `Follow-up ${card.cardName}`,
                    opportunityId: card.cardId,
                    opportunityTitle: card.cardName
                }
            }
        ],
        sourceCommand: "/followup"
    };
}
}),
"[project]/src/lib/intelligence-engine/router.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Main Engine — Process ──────────────────────────────────────────────
__turbopack_context__.s([
    "processMessage",
    ()=>processMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$sales$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/sales-commands.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$analysis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/analysis.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/proactive-commands.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/freeform.ts [app-ssr] (ecmascript)");
;
;
;
;
async function processMessage(input) {
    // Simular tempo de resposta (1-3s para simples, 2-5s para complexo)
    const isComplex = [
        "/briefing",
        "/analise",
        "/funil",
        "/pitch"
    ].includes(input.command ?? "");
    const delay = isComplex ? 1500 + Math.random() * 2000 : 800 + Math.random() * 1200;
    await new Promise((resolve)=>setTimeout(resolve, delay));
    // Se há um slash command, usar o handler correspondente
    if (input.command) {
        switch(input.command){
            case "/briefing":
                if (!input.card) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("no-card");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$sales$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateBriefing"])(input.card);
            case "/objecao":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$sales$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateObjectionResponse"])(input.text, input.card);
            case "/mensagem":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$sales$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateGhostwriting"])(input.text, input.card);
            case "/pitch":
                if (!input.card) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("no-card");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$sales$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatePitch"])(input.card);
            case "/funil":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$analysis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateFunnelSummary"])(input.pipeline);
            case "/analise":
                if (!input.card) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("no-card");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$analysis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCardAnalysis"])(input.card);
            case "/comparar":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$analysis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateComparison"])(input.text || "Concorrente");
            case "/planos":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$analysis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatePlansInfo"])();
            case "/followup":
                if (!input.card) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateErrorMessage"])("no-card");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$sales$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateFollowup"])(input.card);
            case "/ajuda":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateHelp"])();
            case "/resumo":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateMorningBriefing"])();
            case "/riscos":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRiskReport"])();
            case "/meta":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateGoalProgress"])();
            case "/coaching":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCoachingInsights"])();
            case "/agenda":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$proactive$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateAgenda"])();
            default:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateFreeResponse"])(input.text, input.card, input.mode, input.tone);
        }
    }
    // Sem comando → resposta livre (com contexto de modo e tom)
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateFreeResponse"])(input.text, input.card, input.mode, input.tone);
}
}),
"[project]/src/lib/intelligence-engine/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Public API — matches original exports
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$greeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/greeting.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$freeform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/freeform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intelligence$2d$engine$2f$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intelligence-engine/router.ts [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/src/lib/intelligence-commands.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// Menux Intelligence — Slash Commands Registry
// Ref: docs/Menux Intelligence.md — seção 3.1
// ============================================================================
__turbopack_context__.s([
    "SLASH_COMMANDS",
    ()=>SLASH_COMMANDS,
    "filterCommands",
    ()=>filterCommands,
    "getAvailableCommands",
    ()=>getAvailableCommands,
    "getCommandDefinition",
    ()=>getCommandDefinition,
    "getInputPlaceholder",
    ()=>getInputPlaceholder
]);
const SLASH_COMMANDS = [
    {
        command: "/briefing",
        label: "Briefing do Lead",
        icon: "📋",
        description: "Gera resumo completo do card: contexto, objeções, histórico, próximo passo sugerido",
        requiresCard: true,
        availableFor: [
            "comercial",
            "cs",
            "admin",
            "master"
        ],
        requiresInput: false
    },
    {
        command: "/objecao",
        label: "Quebrar Objeção",
        icon: "🛡️",
        description: "Solicita a objeção recebida e retorna contra-argumento + mensagem pronta para WhatsApp",
        requiresCard: false,
        availableFor: [
            "comercial",
            "cs"
        ],
        requiresInput: true,
        inputPlaceholder: "Qual objeção você recebeu?"
    },
    {
        command: "/mensagem",
        label: "Escrever Mensagem",
        icon: "💬",
        description: "Ghostwriting de mensagem para WhatsApp/email com tom e contexto do lead",
        requiresCard: false,
        availableFor: [
            "comercial",
            "cs"
        ],
        requiresInput: true,
        inputPlaceholder: "Qual o canal (WhatsApp/Email/Ligação) e objetivo da mensagem?"
    },
    {
        command: "/pitch",
        label: "Pitch Personalizado",
        icon: "🎯",
        description: "Gera 2-3 argumentos matadores baseados no perfil do lead (segmento, mesas, dores)",
        requiresCard: true,
        availableFor: [
            "comercial"
        ],
        requiresInput: false
    },
    {
        command: "/funil",
        label: "Resumo do Funil",
        icon: "📊",
        description: "Visão consolidada do pipeline: quentes, parados, em risco, próximas ações",
        requiresCard: false,
        availableFor: [
            "comercial",
            "admin",
            "master"
        ],
        requiresInput: false
    },
    {
        command: "/analise",
        label: "Analisar Card",
        icon: "🔍",
        description: "Diagnóstico completo: temperatura, score, risco, sugestão de próximo passo",
        requiresCard: true,
        availableFor: [
            "comercial",
            "cs",
            "admin",
            "master"
        ],
        requiresInput: false
    },
    {
        command: "/comparar",
        label: "Comparativo",
        icon: "⚔️",
        description: "Menux vs concorrente citado — apenas pontos oficiais e documentados",
        requiresCard: false,
        availableFor: [
            "comercial"
        ],
        requiresInput: true,
        inputPlaceholder: "Qual concorrente você quer comparar?"
    },
    {
        command: "/planos",
        label: "Planos e Preços",
        icon: "💰",
        description: "Consulta rápida sobre Assist, Sales, Control — preços, features, setup",
        requiresCard: false,
        availableFor: [
            "comercial",
            "cs",
            "admin",
            "master"
        ],
        requiresInput: false
    },
    {
        command: "/followup",
        label: "Gerar Follow-up",
        icon: "🔄",
        description: "Cria mensagem de follow-up baseada na última interação do card",
        requiresCard: true,
        availableFor: [
            "comercial",
            "cs"
        ],
        requiresInput: false
    },
    {
        command: "/ajuda",
        label: "O que você pode fazer?",
        icon: "❓",
        description: "Lista capacidades da Menux Intelligence com exemplos",
        requiresCard: false,
        availableFor: [
            "comercial",
            "cs",
            "admin",
            "master"
        ],
        requiresInput: false
    },
    {
        command: "/resumo",
        label: "Briefing Matinal",
        icon: "🌅",
        description: "Resumo do dia: prioridades, ganhos rápidos, alertas e métricas",
        requiresCard: false,
        availableFor: [
            "comercial",
            "cs",
            "admin",
            "master"
        ],
        requiresInput: false
    },
    {
        command: "/riscos",
        label: "Alertas de Risco",
        icon: "🚨",
        description: "Todos os alertas de risco: SLA, deals parados, contratos expirando, saúde de clientes",
        requiresCard: false,
        availableFor: [
            "comercial",
            "admin",
            "master"
        ],
        requiresInput: false
    },
    {
        command: "/meta",
        label: "Progresso da Meta",
        icon: "🎯",
        description: "Progresso das suas metas com projeções e o que falta para bater",
        requiresCard: false,
        availableFor: [
            "comercial",
            "cs",
            "admin",
            "master"
        ],
        requiresInput: false
    },
    {
        command: "/coaching",
        label: "Coaching de Vendas",
        icon: "📈",
        description: "Insights de performance, taxa de conversão, dicas personalizadas de melhoria",
        requiresCard: false,
        availableFor: [
            "comercial",
            "admin",
            "master"
        ],
        requiresInput: false
    },
    {
        command: "/agenda",
        label: "Agenda do Dia",
        icon: "📅",
        description: "Atividades de hoje + sugestão de ordem de prioridade",
        requiresCard: false,
        availableFor: [
            "comercial",
            "cs",
            "admin",
            "master"
        ],
        requiresInput: false
    }
];
function getAvailableCommands(role) {
    return SLASH_COMMANDS.filter((cmd)=>{
        const roleAllowed = cmd.availableFor.includes(role);
        // Se o comando requer card e não há card → ainda mostra, mas será disabled
        return roleAllowed;
    });
}
function getCommandDefinition(command) {
    return SLASH_COMMANDS.find((cmd)=>cmd.command === command);
}
function filterCommands(commands, search) {
    if (!search || search === "/") return commands;
    const normalizedSearch = search.toLowerCase().replace("/", "").trim();
    return commands.filter((cmd)=>cmd.command.toLowerCase().includes(normalizedSearch) || cmd.label.toLowerCase().includes(normalizedSearch) || cmd.description.toLowerCase().includes(normalizedSearch));
}
function getInputPlaceholder(activeScreen, cardName) {
    if (cardName) return `Pergunte sobre ${cardName}...`;
    switch(activeScreen){
        case "pipes":
            return "Pergunte sobre seus leads...";
        case "dashboard":
            return "Como posso te ajudar hoje?";
        default:
            return "Fale com a Menux Intelligence...";
    }
}
}),
"[project]/src/lib/motion.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cardStaggerContainer",
    ()=>cardStaggerContainer,
    "collapseToggle",
    ()=>collapseToggle,
    "collapseToggleTransition",
    ()=>collapseToggleTransition,
    "drawerEnter",
    ()=>drawerEnter,
    "duration",
    ()=>duration,
    "easingDefault",
    ()=>easingDefault,
    "easingIn",
    ()=>easingIn,
    "easingOut",
    ()=>easingOut,
    "easingPremium",
    ()=>easingPremium,
    "easingSpringOut",
    ()=>easingSpringOut,
    "exitFade",
    ()=>exitFade,
    "exitFadeTransition",
    ()=>exitFadeTransition,
    "fadeIn",
    ()=>fadeIn,
    "fadeInTransition",
    ()=>fadeInTransition,
    "hoverLiftMotion",
    ()=>hoverLiftMotion,
    "listItemReveal",
    ()=>listItemReveal,
    "modalEnter",
    ()=>modalEnter,
    "pageSlideFade",
    ()=>pageSlideFade,
    "premiumPressMotion",
    ()=>premiumPressMotion,
    "reducedMotionVariants",
    ()=>reducedMotionVariants,
    "reorderItemTransition",
    ()=>reorderItemTransition,
    "scaleIn",
    ()=>scaleIn,
    "scaleInTransition",
    ()=>scaleInTransition,
    "screenContainer",
    ()=>screenContainer,
    "sectionEnter",
    ()=>sectionEnter,
    "slideInBottom",
    ()=>slideInBottom,
    "slideInBottomTransition",
    ()=>slideInBottomTransition,
    "slideInRight",
    ()=>slideInRight,
    "slideInRightTransition",
    ()=>slideInRightTransition,
    "staggerContainer",
    ()=>staggerContainer,
    "transition",
    ()=>transition,
    "useReducedMotion",
    ()=>useReducedMotion
]);
const duration = {
    instant: 0.1,
    micro: 0.12,
    fast: 0.15,
    normal: 0.2,
    moderate: 0.3,
    slow: 0.5,
    dramatic: 0.75
};
const easingDefault = [
    0.4,
    0,
    0.2,
    1
];
const easingIn = [
    0.4,
    0,
    1,
    1
];
const easingOut = [
    0,
    0,
    0.2,
    1
];
const easingPremium = [
    0.22,
    0.61,
    0.36,
    1
];
const easingSpringOut = [
    0.16,
    1,
    0.3,
    1
];
const transition = {
    quick: {
        duration: duration.micro,
        ease: easingPremium
    },
    smooth: {
        duration: duration.normal,
        ease: easingPremium
    },
    panel: {
        duration: duration.moderate,
        ease: easingSpringOut
    },
    screen: {
        duration: duration.slow,
        ease: easingPremium
    }
};
const fadeIn = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};
const fadeInTransition = {
    duration: duration.normal,
    ease: easingPremium
};
const slideInRight = {
    initial: {
        x: "100%",
        opacity: 0.8
    },
    animate: {
        x: 0
    },
    exit: {
        x: "100%",
        opacity: 0.8
    }
};
const slideInRightTransition = {
    duration: duration.slow,
    ease: easingSpringOut
};
const slideInBottom = {
    initial: {
        y: 24,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: 24,
        opacity: 0
    }
};
const slideInBottomTransition = {
    duration: duration.moderate,
    ease: easingSpringOut
};
const scaleIn = {
    initial: {
        scale: 0.96,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1
    },
    exit: {
        scale: 0.96,
        opacity: 0
    }
};
const scaleInTransition = {
    duration: duration.moderate,
    ease: easingSpringOut
};
const collapseToggle = {
    initial: {
        height: 0,
        opacity: 0,
        y: -4
    },
    animate: {
        height: "auto",
        opacity: 1
    },
    exit: {
        height: 0,
        opacity: 0,
        y: -4
    }
};
const collapseToggleTransition = {
    duration: duration.moderate,
    ease: easingPremium
};
const exitFade = {
    exit: {
        opacity: 0
    }
};
const exitFadeTransition = {
    duration: duration.fast
};
const reorderItemTransition = {
    type: "spring",
    stiffness: 360,
    damping: 28
};
const staggerContainer = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.08
        }
    }
};
const screenContainer = {
    hidden: {
        opacity: 0,
        y: 10
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: duration.slow,
            ease: easingPremium,
            staggerChildren: 0.07,
            delayChildren: 0.06
        }
    }
};
const cardStaggerContainer = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.09,
            delayChildren: 0.08
        }
    }
};
const listItemReveal = {
    hidden: {
        opacity: 0,
        y: 18,
        scale: 0.985,
        filter: "blur(3px)"
    },
    show: (index = 0)=>({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: duration.moderate,
                ease: easingSpringOut,
                delay: index * 0.045
            }
        })
};
const pageSlideFade = {
    hidden: {
        opacity: 0,
        y: 14,
        filter: "blur(5px)"
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: duration.slow,
            ease: easingPremium
        }
    },
    exit: {
        opacity: 0,
        y: -8,
        filter: "blur(4px)",
        transition: {
            duration: duration.moderate,
            ease: easingIn
        }
    }
};
const sectionEnter = {
    hidden: {
        opacity: 0,
        y: 18,
        filter: "blur(6px)"
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: duration.moderate,
            ease: easingSpringOut
        }
    }
};
const drawerEnter = {
    hidden: {
        opacity: 0,
        x: 32,
        scale: 0.995
    },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: duration.slow,
            ease: easingSpringOut
        }
    },
    exit: {
        opacity: 0,
        x: 24,
        scale: 0.995,
        transition: {
            duration: duration.moderate,
            ease: easingPremium
        }
    }
};
const modalEnter = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: duration.moderate,
            ease: easingSpringOut
        }
    },
    exit: {
        opacity: 0,
        y: 16,
        scale: 0.985,
        transition: {
            duration: duration.fast,
            ease: easingPremium
        }
    }
};
const hoverLiftMotion = {
    whileHover: {
        y: -2,
        scale: 1.003
    },
    whileTap: {
        y: 0,
        scale: 0.997
    }
};
const premiumPressMotion = {
    whileHover: {
        y: -2,
        scale: 1.005
    },
    whileTap: {
        y: 0,
        scale: 0.992
    }
};
function useReducedMotion() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
    const mql = undefined;
}
const reducedMotionVariants = {
    initial: {},
    animate: {},
    exit: {}
};
}),
];

//# sourceMappingURL=src_lib_5ca59fe4._.js.map