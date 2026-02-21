# Mock Seed Gaps — Plano de Implementação

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Criar dados mock faltantes (visitas, notas, negociações expandidas), conectar drawers aos stores globais, e corrigir a página de auditoria que usa dados locais estáticos.

**Architecture:** Abordagem cirúrgica — novos arquivos de mock + stores Zustand, depois substituição dos mocks inline nos drawers por consumo dos stores globais. Sem mudança na API de componentes externos.

**Tech Stack:** TypeScript, Zustand 5, Next.js 16 App Router, React 19

---

## Task 1: Adicionar tipos Visit e OpportunityNote em `types/index.ts`

**Files:**
- Modify: `src/types/index.ts:346` (final do arquivo)

**Step 1: Adicionar tipos no final de `src/types/index.ts`**

Após a interface `NegotiationSummary` (linha 354), adicionar:

```typescript
// ===== Visit Types =====

export type VisitType = "presencial" | "remoto" | "outro";
export type VisitStatus = "agendada" | "realizada" | "cancelada";
export type VisitOutcome = "realizada" | "no-show" | "remarcada";

export interface Visit {
  id: string;
  opportunityId: string;
  clientId: string;
  type: VisitType;
  location: string;
  status: VisitStatus;
  startAt: string;
  responsible: string;
  responsibleId: string;
  objective?: string;
  result?: string;
  outcome?: VisitOutcome;
  durationMinutes?: number;
  link?: string;
  platform?: string;
  cancellationReason?: string;
  createdAt: string;
}

// ===== Opportunity Note Types =====

export type NoteIntent =
  | "general"
  | "pedido_cliente"
  | "decisao"
  | "objecao"
  | "system";

export type NoteVisibility = "team" | "private";

export interface OpportunityNote {
  id: string;
  opportunityId: string;
  body: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  intent: NoteIntent;
  visibility: NoteVisibility;
  isSystem?: boolean;
}
```

**Step 2: Adicionar `opportunityId` à interface `NegotiationRound`**

Na interface `NegotiationRound` (linha 320), adicionar `opportunityId` após `id`:

```typescript
export interface NegotiationRound {
  id: string;
  opportunityId: string;  // <-- ADICIONAR
  type: NegotiationType;
  // ... rest unchanged
}
```

**Step 3: Verificar tipos**

Run: `npx tsc --noEmit 2>&1 | head -30`
Expected: Erros em `negotiations.ts` (falta `opportunityId`). Isso será corrigido na Task 2.

**Step 4: Commit**

```bash
git add src/types/index.ts
git commit -m "feat(types): add Visit, OpportunityNote types and opportunityId to NegotiationRound"
```

---

## Task 2: Expandir mock de negociações com `opportunityId`

**Files:**
- Modify: `src/lib/mock-data/negotiations.ts`
- Modify: `src/lib/mock-data/helpers.ts`

**Step 1: Adicionar helper `daysAgo` em `helpers.ts`**

Adicionar após a função `d` existente:

```typescript
/** Generate an ISO datetime string N days in the past from now. */
export const daysAgo = (n: number): string =>
  new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString();

/** Generate an ISO datetime string N days in the future from now. */
export const daysFromNow = (n: number): string =>
  new Date(Date.now() + n * 24 * 60 * 60 * 1000).toISOString();
```

**Step 2: Reescrever `negotiations.ts` com 20 rounds e `opportunityId`**

Substituir conteúdo inteiro de `src/lib/mock-data/negotiations.ts`:

```typescript
import type { NegotiationRound } from "@/types";
import { daysAgo } from "./helpers";

// ===== Negotiation Mock Data (20 rounds across open opportunities) =====

export const mockNegotiationRounds: NegotiationRound[] = [
  // opp-o01 — Carnes nobres - Restaurante Fazenda Velha (negociacao)
  {
    id: "round-1",
    opportunityId: "opp-o01",
    type: "proposal",
    authorId: "user-3",
    authorName: "Lucas Oliveira",
    createdAt: daysAgo(15),
    monthlyValue: 8000,
    totalValue: 96000,
    setupValue: 3000,
    termMonths: 12,
    conditions: ["Contrato anual", "Pagamento mensal"],
    status: "active",
  },
  {
    id: "round-2",
    opportunityId: "opp-o01",
    type: "counter",
    authorId: "client-28",
    authorName: "Joaquim Fazenda",
    createdAt: daysAgo(13),
    monthlyValue: 7000,
    totalValue: 84000,
    setupValue: 0,
    termMonths: 12,
    conditions: ["Isenção de setup", "Desconto de 12%"],
    details: "Cliente pede remoção da taxa de implantação.",
    status: "active",
  },
  {
    id: "round-3",
    opportunityId: "opp-o01",
    type: "internal",
    authorId: "user-4",
    authorName: "Juliana Costa",
    createdAt: daysAgo(12),
    monthlyValue: 7500,
    totalValue: 90000,
    setupValue: 1500,
    termMonths: 12,
    conditions: ["Setup com 50% desconto", "Mensalidade R$ 7.500"],
    details: "Proposta de meio termo para fechar rápido.",
    status: "active",
  },

  // opp-o02 — Hortifruti completo - Hotel Montanha Resort (proposta-enviada)
  {
    id: "round-4",
    opportunityId: "opp-o02",
    type: "proposal",
    authorId: "user-4",
    authorName: "Juliana Costa",
    createdAt: daysAgo(20),
    monthlyValue: 12000,
    totalValue: 144000,
    setupValue: 5000,
    termMonths: 12,
    conditions: ["Entrega diária", "Mínimo mensal R$ 10.000"],
    status: "active",
  },
  {
    id: "round-5",
    opportunityId: "opp-o02",
    type: "counter",
    authorId: "client-29",
    authorName: "Carlos Montanha",
    createdAt: daysAgo(18),
    monthlyValue: 10000,
    totalValue: 120000,
    setupValue: 0,
    termMonths: 12,
    conditions: ["Sem mínimo mensal", "Setup gratuito"],
    details: "Hotel prefere flexibilidade nos volumes mensais.",
    status: "active",
  },

  // opp-o03 — Açaí e polpas - Rede Açaí Beach (reuniao-agendada)
  {
    id: "round-6",
    opportunityId: "opp-o03",
    type: "proposal",
    authorId: "user-6",
    authorName: "Marcos Pereira",
    createdAt: daysAgo(10),
    monthlyValue: 5500,
    totalValue: 66000,
    setupValue: 2000,
    termMonths: 12,
    conditions: ["Entrega semanal", "Padrão premium"],
    status: "active",
  },

  // opp-o04 — Insumos cervejeiros - Cervejaria Artesanal Hop (contato-feito)
  {
    id: "round-7",
    opportunityId: "opp-o04",
    type: "proposal",
    authorId: "user-3",
    authorName: "Lucas Oliveira",
    createdAt: daysAgo(8),
    monthlyValue: 4000,
    totalValue: 48000,
    setupValue: 1000,
    termMonths: 12,
    conditions: ["Insumos importados", "Entrega quinzenal"],
    status: "active",
  },

  // opp-o05 — Laticínios especiais - Rede Padarias Artesanais (negociacao)
  {
    id: "round-8",
    opportunityId: "opp-o05",
    type: "proposal",
    authorId: "user-4",
    authorName: "Juliana Costa",
    createdAt: daysAgo(25),
    monthlyValue: 6000,
    totalValue: 72000,
    setupValue: 2500,
    termMonths: 12,
    conditions: ["Contrato anual", "Frete incluso"],
    status: "superseded",
  },
  {
    id: "round-9",
    opportunityId: "opp-o05",
    type: "counter",
    authorId: "client-32",
    authorName: "Ana Grão",
    createdAt: daysAgo(22),
    monthlyValue: 5000,
    totalValue: 60000,
    setupValue: 0,
    termMonths: 6,
    conditions: ["Contrato semestral", "Sem fidelidade"],
    details: "Prefere período menor para testar a parceria.",
    status: "active",
  },
  {
    id: "round-10",
    opportunityId: "opp-o05",
    type: "internal",
    authorId: "user-3",
    authorName: "Lucas Oliveira",
    createdAt: daysAgo(20),
    monthlyValue: 5500,
    totalValue: 66000,
    setupValue: 1000,
    termMonths: 6,
    conditions: ["Semestral com renovação auto", "Setup reduzido"],
    details: "Aceitar semestral com setup simbólico.",
    status: "active",
  },

  // opp-o06 — Embalagens sustentáveis - Green Food Delivery (fechamento)
  {
    id: "round-11",
    opportunityId: "opp-o06",
    type: "proposal",
    authorId: "user-6",
    authorName: "Marcos Pereira",
    createdAt: daysAgo(30),
    monthlyValue: 3500,
    totalValue: 42000,
    setupValue: 1500,
    termMonths: 12,
    conditions: ["Embalagens biodegradáveis", "Estoque mínimo"],
    status: "superseded",
  },
  {
    id: "round-12",
    opportunityId: "opp-o06",
    type: "counter",
    authorId: "client-33",
    authorName: "Ahmed Habibi",
    createdAt: daysAgo(27),
    monthlyValue: 3000,
    totalValue: 36000,
    setupValue: 0,
    termMonths: 12,
    conditions: ["Sem estoque mínimo", "Desconto volume"],
    status: "active",
  },
  {
    id: "round-13",
    opportunityId: "opp-o06",
    type: "agreement",
    authorId: "user-6",
    authorName: "Marcos Pereira",
    createdAt: daysAgo(5),
    monthlyValue: 3200,
    totalValue: 38400,
    setupValue: 500,
    termMonths: 12,
    conditions: ["Estoque flexível", "Setup simbólico"],
    isFinal: true,
    status: "active",
  },

  // opp-o07 — Insumos gerais - Hospital Regional Norte (lead-in)
  {
    id: "round-14",
    opportunityId: "opp-o07",
    type: "proposal",
    authorId: "user-3",
    authorName: "Lucas Oliveira",
    createdAt: daysAgo(5),
    monthlyValue: 40000,
    totalValue: 480000,
    setupValue: 10000,
    termMonths: 12,
    conditions: ["Licitação", "Entrega diária", "Certificações sanitárias"],
    status: "active",
  },

  // opp-o08 — Proteínas - Steakhouse Premium (proposta-enviada)
  {
    id: "round-15",
    opportunityId: "opp-o08",
    type: "proposal",
    authorId: "user-4",
    authorName: "Juliana Costa",
    createdAt: daysAgo(12),
    monthlyValue: 9000,
    totalValue: 108000,
    setupValue: 3000,
    termMonths: 12,
    conditions: ["Cortes premium importados", "Entrega 3x/semana"],
    status: "active",
  },
  {
    id: "round-16",
    opportunityId: "opp-o08",
    type: "counter",
    authorId: "client-20",
    authorName: "Victor Premium",
    createdAt: daysAgo(10),
    monthlyValue: 8000,
    totalValue: 96000,
    setupValue: 0,
    termMonths: 12,
    conditions: ["Sem setup", "Volume mínimo menor"],
    details: "Quer testar mix de produtos antes de comprometer volume.",
    status: "active",
  },

  // opp-o09 — Resort all-inclusive - Resort Praia Azul (reuniao-agendada)
  {
    id: "round-17",
    opportunityId: "opp-o09",
    type: "proposal",
    authorId: "user-3",
    authorName: "Lucas Oliveira",
    createdAt: daysAgo(7),
    monthlyValue: 15000,
    totalValue: 180000,
    setupValue: 8000,
    termMonths: 12,
    conditions: ["Fornecimento completo all-inclusive", "Logística dedicada"],
    status: "active",
  },

  // opp-o10 — Eventos - Casa de Shows Arena (negociacao)
  {
    id: "round-18",
    opportunityId: "opp-o10",
    type: "proposal",
    authorId: "user-6",
    authorName: "Marcos Pereira",
    createdAt: daysAgo(18),
    monthlyValue: 7000,
    totalValue: 84000,
    setupValue: 4000,
    termMonths: 12,
    conditions: ["Fornecimento por evento", "Cardápio variável"],
    status: "active",
  },
  {
    id: "round-19",
    opportunityId: "opp-o10",
    type: "counter",
    authorId: "client-24",
    authorName: "Rogério Arena",
    createdAt: daysAgo(15),
    monthlyValue: 6000,
    totalValue: 72000,
    setupValue: 2000,
    termMonths: 12,
    conditions: ["Setup menor", "Pagamento pós-evento"],
    details: "Prefere pagar após cada evento realizado.",
    status: "active",
  },
  {
    id: "round-20",
    opportunityId: "opp-o10",
    type: "internal",
    authorId: "user-4",
    authorName: "Juliana Costa",
    createdAt: daysAgo(14),
    monthlyValue: 6500,
    totalValue: 78000,
    setupValue: 2500,
    termMonths: 12,
    conditions: ["Setup reduzido", "Pagamento 50% antecipado"],
    details: "Encontro intermediário para viabilizar o modelo.",
    status: "active",
  },
];
```

**Step 3: Atualizar barrel export em `index.ts`**

Adicionar exports de helpers:

```typescript
export { d, daysAgo, daysFromNow } from "./helpers";
```

**Step 4: Verificar tipos**

Run: `npx tsc --noEmit 2>&1 | head -20`
Expected: PASS (pode haver erros pendentes em outros arquivos, verificar)

**Step 5: Commit**

```bash
git add src/lib/mock-data/negotiations.ts src/lib/mock-data/helpers.ts src/lib/mock-data/index.ts
git commit -m "feat(mock): expand negotiations to 20 rounds with opportunityId, add daysAgo/daysFromNow helpers"
```

---

## Task 3: Criar mock de visitas (`visits.ts`) e store (`visit-store.ts`)

**Files:**
- Create: `src/lib/mock-data/visits.ts`
- Create: `src/stores/visit-store.ts`
- Modify: `src/lib/mock-data/index.ts`

**Step 1: Criar `src/lib/mock-data/visits.ts`**

```typescript
import type { Visit } from "@/types";
import { daysAgo, daysFromNow } from "./helpers";

// ===== Mock Visits (25 visits across open opportunities) =====

export const mockVisits: Visit[] = [
  // opp-o01 — Carnes nobres - Restaurante Fazenda Velha
  {
    id: "visit-1",
    opportunityId: "opp-o01",
    clientId: "client-28",
    type: "presencial",
    location: "Restaurante Fazenda Velha - Campinas",
    status: "realizada",
    startAt: daysAgo(14),
    responsible: "Lucas Oliveira",
    responsibleId: "user-3",
    objective: "Apresentar cardápio de carnes e coletar requisitos.",
    result: "Cliente aprovou a linha premium. Solicita proposta formal.",
    outcome: "realizada",
    durationMinutes: 90,
    createdAt: daysAgo(16),
  },
  {
    id: "visit-2",
    opportunityId: "opp-o01",
    clientId: "client-28",
    type: "presencial",
    location: "Restaurante Fazenda Velha - Campinas",
    status: "agendada",
    startAt: daysFromNow(3),
    responsible: "Lucas Oliveira",
    responsibleId: "user-3",
    objective: "Fechar condições finais de contrato.",
    durationMinutes: 60,
    createdAt: daysAgo(2),
  },

  // opp-o02 — Hortifruti completo - Hotel Montanha Resort
  {
    id: "visit-3",
    opportunityId: "opp-o02",
    clientId: "client-29",
    type: "presencial",
    location: "Hotel Montanha Resort - Petrópolis",
    status: "realizada",
    startAt: daysAgo(21),
    responsible: "Juliana Costa",
    responsibleId: "user-4",
    objective: "Visita técnica à cozinha do hotel.",
    result: "Levantamento completo das necessidades. Volume alto.",
    outcome: "realizada",
    durationMinutes: 120,
    createdAt: daysAgo(23),
  },
  {
    id: "visit-4",
    opportunityId: "opp-o02",
    clientId: "client-29",
    type: "remoto",
    location: "Google Meet",
    status: "realizada",
    startAt: daysAgo(10),
    responsible: "Juliana Costa",
    responsibleId: "user-4",
    objective: "Alinhar contraproposta e volumes.",
    result: "Hotel aceita negociar setup. Pedir aprovação interna.",
    outcome: "realizada",
    durationMinutes: 45,
    platform: "google-meet",
    link: "https://meet.google.com/abc-hotel",
    createdAt: daysAgo(12),
  },

  // opp-o03 — Açaí e polpas - Rede Açaí Beach
  {
    id: "visit-5",
    opportunityId: "opp-o03",
    clientId: "client-30",
    type: "presencial",
    location: "Rede Açaí Beach - Barra da Tijuca",
    status: "realizada",
    startAt: daysAgo(8),
    responsible: "Marcos Pereira",
    responsibleId: "user-6",
    objective: "Degustação de polpas premium.",
    result: "Aprovaram 3 dos 5 sabores. Pedir amostras extras.",
    outcome: "realizada",
    durationMinutes: 60,
    createdAt: daysAgo(10),
  },
  {
    id: "visit-6",
    opportunityId: "opp-o03",
    clientId: "client-30",
    type: "presencial",
    location: "Rede Açaí Beach - Copacabana",
    status: "agendada",
    startAt: daysFromNow(5),
    responsible: "Marcos Pereira",
    responsibleId: "user-6",
    objective: "Apresentar proposta comercial formal.",
    durationMinutes: 45,
    createdAt: daysAgo(1),
  },

  // opp-o04 — Insumos cervejeiros - Cervejaria Artesanal Hop
  {
    id: "visit-7",
    opportunityId: "opp-o04",
    clientId: "client-31",
    type: "presencial",
    location: "Cervejaria Artesanal Hop - Pinheiros",
    status: "realizada",
    startAt: daysAgo(6),
    responsible: "Lucas Oliveira",
    responsibleId: "user-3",
    objective: "Conhecer operação e entender demanda de insumos.",
    result: "Boa receptividade. Querem catálogo completo de lúpulos.",
    outcome: "realizada",
    durationMinutes: 75,
    createdAt: daysAgo(8),
  },

  // opp-o05 — Laticínios especiais - Rede Padarias Artesanais
  {
    id: "visit-8",
    opportunityId: "opp-o05",
    clientId: "client-32",
    type: "remoto",
    location: "Zoom",
    status: "realizada",
    startAt: daysAgo(19),
    responsible: "Juliana Costa",
    responsibleId: "user-4",
    objective: "Apresentar linha de laticínios importados.",
    result: "Interesse alto. Quer amostras para teste.",
    outcome: "realizada",
    durationMinutes: 40,
    platform: "zoom",
    link: "https://zoom.us/j/padaria",
    createdAt: daysAgo(21),
  },
  {
    id: "visit-9",
    opportunityId: "opp-o05",
    clientId: "client-32",
    type: "presencial",
    location: "Cafeteria Grão Especial - Vila Madalena",
    status: "realizada",
    startAt: daysAgo(11),
    responsible: "Juliana Costa",
    responsibleId: "user-4",
    objective: "Entrega de amostras e degustação.",
    result: "Aprovaram queijos. Manteiga precisa ajuste no mix.",
    outcome: "realizada",
    durationMinutes: 50,
    createdAt: daysAgo(13),
  },

  // opp-o06 — Embalagens sustentáveis - Green Food Delivery
  {
    id: "visit-10",
    opportunityId: "opp-o06",
    clientId: "client-33",
    type: "presencial",
    location: "Restaurante Árabe Habibi - Moema",
    status: "realizada",
    startAt: daysAgo(28),
    responsible: "Marcos Pereira",
    responsibleId: "user-6",
    objective: "Levantar tipos de embalagem necessários.",
    result: "Mapeamento completo. 8 SKUs diferentes.",
    outcome: "realizada",
    durationMinutes: 60,
    createdAt: daysAgo(30),
  },
  {
    id: "visit-11",
    opportunityId: "opp-o06",
    clientId: "client-33",
    type: "remoto",
    location: "WhatsApp Vídeo",
    status: "realizada",
    startAt: daysAgo(4),
    responsible: "Marcos Pereira",
    responsibleId: "user-6",
    objective: "Alinhamento final antes do acordo.",
    result: "Acordo verbal fechado. Formalizar contrato.",
    outcome: "realizada",
    durationMinutes: 30,
    platform: "whatsapp",
    createdAt: daysAgo(5),
  },

  // opp-o07 — Insumos gerais - Hospital Regional Norte
  {
    id: "visit-12",
    opportunityId: "opp-o07",
    clientId: "client-16",
    type: "presencial",
    location: "Hospital Santa Cruz - Centro",
    status: "realizada",
    startAt: daysAgo(4),
    responsible: "Lucas Oliveira",
    responsibleId: "user-3",
    objective: "Reunião com equipe de compras do hospital.",
    result: "Entregamos documentação para licitação.",
    outcome: "realizada",
    durationMinutes: 90,
    createdAt: daysAgo(6),
  },
  {
    id: "visit-13",
    opportunityId: "opp-o07",
    clientId: "client-16",
    type: "presencial",
    location: "Hospital Santa Cruz - Centro",
    status: "agendada",
    startAt: daysFromNow(7),
    responsible: "Lucas Oliveira",
    responsibleId: "user-3",
    objective: "Apresentar amostras de produtos ao comitê técnico.",
    durationMinutes: 120,
    createdAt: daysAgo(1),
  },

  // opp-o08 — Proteínas - Steakhouse Premium
  {
    id: "visit-14",
    opportunityId: "opp-o08",
    clientId: "client-20",
    type: "presencial",
    location: "Steakhouse Premium - Itaim Bibi",
    status: "realizada",
    startAt: daysAgo(11),
    responsible: "Juliana Costa",
    responsibleId: "user-4",
    objective: "Degustação de cortes premium com chef.",
    result: "Chef aprovou wagyu e angus. Descartou cordeiro.",
    outcome: "realizada",
    durationMinutes: 90,
    createdAt: daysAgo(13),
  },

  // opp-o09 — Resort all-inclusive - Resort Praia Azul
  {
    id: "visit-15",
    opportunityId: "opp-o09",
    clientId: "client-21",
    type: "presencial",
    location: "Resort Praia Azul - Guarujá",
    status: "realizada",
    startAt: daysAgo(5),
    responsible: "Lucas Oliveira",
    responsibleId: "user-3",
    objective: "Visita técnica a cozinha e almoxarifado do resort.",
    result: "Operação complexa com 3 restaurantes internos. Alto volume.",
    outcome: "realizada",
    durationMinutes: 180,
    createdAt: daysAgo(7),
  },
  {
    id: "visit-16",
    opportunityId: "opp-o09",
    clientId: "client-21",
    type: "remoto",
    location: "Google Meet",
    status: "agendada",
    startAt: daysFromNow(4),
    responsible: "Lucas Oliveira",
    responsibleId: "user-3",
    objective: "Alinhamento de proposta com diretoria.",
    durationMinutes: 60,
    platform: "google-meet",
    link: "https://meet.google.com/resort-azul",
    createdAt: daysAgo(1),
  },

  // opp-o10 — Eventos - Casa de Shows Arena
  {
    id: "visit-17",
    opportunityId: "opp-o10",
    clientId: "client-24",
    type: "presencial",
    location: "Casa de Shows Arena - Vila Olímpia",
    status: "realizada",
    startAt: daysAgo(16),
    responsible: "Marcos Pereira",
    responsibleId: "user-6",
    objective: "Entender operação de catering para eventos.",
    result: "Modelo de fornecimento por evento. Mapeamos 4 tipos.",
    outcome: "realizada",
    durationMinutes: 90,
    createdAt: daysAgo(18),
  },
  {
    id: "visit-18",
    opportunityId: "opp-o10",
    clientId: "client-24",
    type: "presencial",
    location: "Casa de Shows Arena - Vila Olímpia",
    status: "cancelada",
    startAt: daysAgo(9),
    responsible: "Marcos Pereira",
    responsibleId: "user-6",
    objective: "Apresentar proposta revisada.",
    cancellationReason: "Evento de última hora no local. Remarcado.",
    outcome: "remarcada",
    durationMinutes: 60,
    createdAt: daysAgo(11),
  },
  {
    id: "visit-19",
    opportunityId: "opp-o10",
    clientId: "client-24",
    type: "presencial",
    location: "Casa de Shows Arena - Vila Olímpia",
    status: "agendada",
    startAt: daysFromNow(2),
    responsible: "Marcos Pereira",
    responsibleId: "user-6",
    objective: "Apresentar proposta revisada (remarcado).",
    durationMinutes: 60,
    createdAt: daysAgo(3),
  },

  // Visitas extras em oportunidades won/lost para timeline de clientes
  {
    id: "visit-20",
    opportunityId: "opp-w35",
    clientId: "client-35",
    type: "presencial",
    location: "Restaurante Paris Bistro - Jardins",
    status: "realizada",
    startAt: daysAgo(25),
    responsible: "Juliana Costa",
    responsibleId: "user-4",
    objective: "Fechamento do contrato de carnes premium.",
    result: "Contrato assinado. Início da operação em 15 dias.",
    outcome: "realizada",
    durationMinutes: 60,
    createdAt: daysAgo(27),
  },
  {
    id: "visit-21",
    opportunityId: "opp-w01",
    clientId: "client-1",
    type: "presencial",
    location: "Restaurante Sabor da Terra - Centro",
    status: "realizada",
    startAt: daysAgo(150),
    responsible: "Lucas Oliveira",
    responsibleId: "user-3",
    objective: "Apresentação inicial do portfólio de hortifruti.",
    result: "Muito receptivos. Agendaram segunda visita.",
    outcome: "realizada",
    durationMinutes: 75,
    createdAt: daysAgo(152),
  },
  {
    id: "visit-22",
    opportunityId: "opp-w02",
    clientId: "client-2",
    type: "presencial",
    location: "Hotel Beira Mar - Copacabana",
    status: "realizada",
    startAt: daysAgo(145),
    responsible: "Juliana Costa",
    responsibleId: "user-4",
    objective: "Visita à cozinha central do hotel.",
    result: "Mapeamento de necessidades completo.",
    outcome: "realizada",
    durationMinutes: 120,
    createdAt: daysAgo(147),
  },
  {
    id: "visit-23",
    opportunityId: "opp-w07",
    clientId: "client-7",
    type: "presencial",
    location: "Churrascaria Fogo Alto - Moema",
    status: "realizada",
    startAt: daysAgo(120),
    responsible: "Lucas Oliveira",
    responsibleId: "user-3",
    objective: "Degustação de cortes com o chef.",
    result: "Chef aprovou todos os cortes. Fechamento em 1 semana.",
    outcome: "realizada",
    durationMinutes: 90,
    createdAt: daysAgo(122),
  },
  {
    id: "visit-24",
    opportunityId: "opp-w10",
    clientId: "client-10",
    type: "remoto",
    location: "Zoom",
    status: "realizada",
    startAt: daysAgo(100),
    responsible: "Marcos Pereira",
    responsibleId: "user-6",
    objective: "Apresentar proposta para rede de pousadas.",
    result: "Aprovado pelo conselho. Contrato em processo.",
    outcome: "realizada",
    durationMinutes: 60,
    platform: "zoom",
    link: "https://zoom.us/j/pousadas",
    createdAt: daysAgo(102),
  },
];
```

**Step 2: Criar `src/stores/visit-store.ts`**

```typescript
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Visit } from "@/types";
import { mockVisits } from "@/lib/mock-data";

interface VisitState {
  visits: Visit[];
  isLoading: boolean;

  // Queries
  getByOpportunity: (opportunityId: string) => Visit[];
  getByClient: (clientId: string) => Visit[];
  getById: (id: string) => Visit | undefined;
}

export const useVisitStore = create<VisitState>()(
  devtools(
    (_set, get) => ({
      visits: mockVisits,
      isLoading: false,

      getByOpportunity: (opportunityId) =>
        get().visits.filter((v) => v.opportunityId === opportunityId),
      getByClient: (clientId) =>
        get().visits.filter((v) => v.clientId === clientId),
      getById: (id) => get().visits.find((v) => v.id === id),
    }),
    { name: "visit-store" }
  )
);
```

**Step 3: Adicionar export em barrel**

Em `src/lib/mock-data/index.ts`, adicionar:

```typescript
export { mockVisits } from "./visits";
```

**Step 4: Verificar tipos**

Run: `npx tsc --noEmit 2>&1 | head -20`
Expected: PASS

**Step 5: Commit**

```bash
git add src/lib/mock-data/visits.ts src/stores/visit-store.ts src/lib/mock-data/index.ts
git commit -m "feat(mock): add 25 visits with global store"
```

---

## Task 4: Criar mock de notas (`notes.ts`) e store (`note-store.ts`)

**Files:**
- Create: `src/lib/mock-data/notes.ts`
- Create: `src/stores/note-store.ts`
- Modify: `src/lib/mock-data/index.ts`

**Step 1: Criar `src/lib/mock-data/notes.ts`**

```typescript
import type { OpportunityNote } from "@/types";
import { daysAgo } from "./helpers";

// ===== Mock Opportunity Notes (40 notes across opportunities) =====

export const mockNotes: OpportunityNote[] = [
  // opp-o01 — Carnes nobres - Restaurante Fazenda Velha
  { id: "note-1", opportunityId: "opp-o01", body: "Cliente solicitou nova proposta com desconto de 5% no setup para fechar ainda este mês.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(2), intent: "pedido_cliente", visibility: "team" },
  { id: "note-2", opportunityId: "opp-o01", body: "Reunião de alinhamento realizada. O cliente gostou bastante da demonstração dos cortes premium.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(5), intent: "decisao", visibility: "team" },
  { id: "note-3", opportunityId: "opp-o01", body: "Oportunidade movida para a etapa de Negociação.", authorId: "system", authorName: "Sistema", createdAt: daysAgo(12), intent: "system", visibility: "team", isSystem: true },

  // opp-o02 — Hortifruti completo - Hotel Montanha Resort
  { id: "note-4", opportunityId: "opp-o02", body: "Hotel precisa de entrega diária. Verificar viabilidade logística com operações.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(18), intent: "general", visibility: "team" },
  { id: "note-5", opportunityId: "opp-o02", body: "Contraproposta recebida. Hotel não quer mínimo mensal. Precisamos avaliar se é viável.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(15), intent: "objecao", visibility: "team" },
  { id: "note-6", opportunityId: "opp-o02", body: "Oportunidade criada a partir de visita técnica.", authorId: "system", authorName: "Sistema", createdAt: daysAgo(25), intent: "system", visibility: "team", isSystem: true },

  // opp-o03 — Açaí e polpas - Rede Açaí Beach
  { id: "note-7", opportunityId: "opp-o03", body: "Degustação de polpas realizada. Aprovaram 3 de 5 sabores. Enviar amostras de manga e goiaba.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(7), intent: "decisao", visibility: "team" },
  { id: "note-8", opportunityId: "opp-o03", body: "Bruno (proprietário) tem preferência por produtos sem conservantes. Destacar isso na proposta.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(9), intent: "general", visibility: "team" },

  // opp-o04 — Insumos cervejeiros - Cervejaria Artesanal Hop
  { id: "note-9", opportunityId: "opp-o04", body: "Ricardo quer catálogo completo de lúpulos importados. Pedir ao fornecedor lista atualizada.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(5), intent: "pedido_cliente", visibility: "team" },
  { id: "note-10", opportunityId: "opp-o04", body: "Cervejaria produz 5.000 litros/mês. Bom potencial de volume.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(7), intent: "general", visibility: "team" },

  // opp-o05 — Laticínios especiais - Rede Padarias Artesanais
  { id: "note-11", opportunityId: "opp-o05", body: "Ana prefere contrato semestral para testar parceria. Aceitar como estratégia de entrada.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(20), intent: "decisao", visibility: "team" },
  { id: "note-12", opportunityId: "opp-o05", body: "Amostras de queijo aprovadas. Manteiga precisa ajuste no mix (menos sal).", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(10), intent: "pedido_cliente", visibility: "team" },
  { id: "note-13", opportunityId: "opp-o05", body: "Proposta revisada enviada por email.", authorId: "system", authorName: "Sistema", createdAt: daysAgo(18), intent: "system", visibility: "team", isSystem: true },

  // opp-o06 — Embalagens sustentáveis - Green Food Delivery
  { id: "note-14", opportunityId: "opp-o06", body: "Mapeamento completo: 8 SKUs de embalagens biodegradáveis necessárias.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(27), intent: "general", visibility: "team" },
  { id: "note-15", opportunityId: "opp-o06", body: "Ahmed quer testar embalagem de marmita por 30 dias antes de fechar contrato completo.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(22), intent: "objecao", visibility: "team" },
  { id: "note-16", opportunityId: "opp-o06", body: "Acordo verbal fechado via WhatsApp. Formalizar contrato até sexta.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(3), intent: "decisao", visibility: "team" },
  { id: "note-17", opportunityId: "opp-o06", body: "Oportunidade movida para Fechamento.", authorId: "system", authorName: "Sistema", createdAt: daysAgo(5), intent: "system", visibility: "team", isSystem: true },

  // opp-o07 — Insumos gerais - Hospital Regional Norte
  { id: "note-18", opportunityId: "opp-o07", body: "Hospital exige certificações sanitárias ANVISA. Verificar se todos os produtos atendem.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(4), intent: "objecao", visibility: "team" },
  { id: "note-19", opportunityId: "opp-o07", body: "Reunião com equipe de compras realizada. Documentação de licitação entregue.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(3), intent: "general", visibility: "team" },
  { id: "note-20", opportunityId: "opp-o07", body: "Volume estimado: R$ 40.000/mês. Maior oportunidade do trimestre.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(5), intent: "general", visibility: "private" },

  // opp-o08 — Proteínas - Steakhouse Premium
  { id: "note-21", opportunityId: "opp-o08", body: "Chef Victor aprovou wagyu e angus, mas descartou cordeiro do mix.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(10), intent: "decisao", visibility: "team" },
  { id: "note-22", opportunityId: "opp-o08", body: "Victor quer testar 3 fornecedores antes de fechar exclusividade. Precisamos diferenciar.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(8), intent: "objecao", visibility: "team" },

  // opp-o09 — Resort all-inclusive - Resort Praia Azul
  { id: "note-23", opportunityId: "opp-o09", body: "Resort tem 3 restaurantes internos. Demanda variada: japonês, italiano e brasileiro.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(4), intent: "general", visibility: "team" },
  { id: "note-24", opportunityId: "opp-o09", body: "Logística dedicada será necessária. Verificar custo de rota Guarujá diária.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(3), intent: "general", visibility: "private" },
  { id: "note-25", opportunityId: "opp-o09", body: "Marcela (diretora) muito interessada. Quer proposta até final da semana.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(2), intent: "pedido_cliente", visibility: "team" },

  // opp-o10 — Eventos - Casa de Shows Arena
  { id: "note-26", opportunityId: "opp-o10", body: "Modelo de fornecimento por evento. 4 tipos de cardápio mapeados.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(15), intent: "general", visibility: "team" },
  { id: "note-27", opportunityId: "opp-o10", body: "Rogério prefere pagamento pós-evento. Financeiro precisa aprovar esse modelo.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(13), intent: "objecao", visibility: "team" },
  { id: "note-28", opportunityId: "opp-o10", body: "Visita cancelada por evento de última hora. Remarcada para próxima semana.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(9), intent: "general", visibility: "team" },

  // Notas em oportunidades won (para timeline de clientes)
  { id: "note-29", opportunityId: "opp-w35", body: "Jean Pierre exigente com qualidade. Só aceita produtos de primeira linha.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(30), intent: "general", visibility: "team" },
  { id: "note-30", opportunityId: "opp-w35", body: "Contrato assinado. Início da operação em 15 dias.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(20), intent: "decisao", visibility: "team" },

  { id: "note-31", opportunityId: "opp-w01", body: "Cliente muito receptivo na primeira visita. Potencial de crescimento alto.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(155), intent: "general", visibility: "team" },
  { id: "note-32", opportunityId: "opp-w01", body: "Fechamento rápido. Cliente estava insatisfeito com fornecedor anterior.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(140), intent: "decisao", visibility: "team" },

  { id: "note-33", opportunityId: "opp-w02", body: "Hotel premium. Exige entrega diária e qualidade certificada.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(148), intent: "general", visibility: "team" },

  { id: "note-34", opportunityId: "opp-w07", body: "Chef Pedro aprovou todos os cortes na degustação.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(118), intent: "decisao", visibility: "team" },

  { id: "note-35", opportunityId: "opp-w10", body: "Conselho da rede de pousadas aprovou proposta por unanimidade.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(98), intent: "decisao", visibility: "team" },

  // Extras para volume
  { id: "note-36", opportunityId: "opp-o01", body: "Joaquim mencionou que o concorrente oferece 10% mais barato. Precisamos justificar qualidade.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(8), intent: "objecao", visibility: "team" },
  { id: "note-37", opportunityId: "opp-o02", body: "Felipe (chef) é o influenciador técnico. Garantir que ele participe da próxima reunião.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(12), intent: "general", visibility: "team" },
  { id: "note-38", opportunityId: "opp-o08", body: "Amanda (gerente) cuida da parte operacional. Victor decide mas Amanda executa.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(6), intent: "general", visibility: "team" },
  { id: "note-39", opportunityId: "opp-o09", body: "Resort fecha em março para reforma. Contrato precisa começar antes.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(1), intent: "pedido_cliente", visibility: "team" },
  { id: "note-40", opportunityId: "opp-o05", body: "Bruna (operacional) reportou que o leite integral atual não atende padrão das receitas.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(7), intent: "pedido_cliente", visibility: "team" },
];
```

**Step 2: Criar `src/stores/note-store.ts`**

```typescript
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { OpportunityNote } from "@/types";
import { mockNotes } from "@/lib/mock-data";

interface NoteState {
  notes: OpportunityNote[];
  isLoading: boolean;

  // Queries
  getByOpportunity: (opportunityId: string) => OpportunityNote[];
  getById: (id: string) => OpportunityNote | undefined;
}

export const useNoteStore = create<NoteState>()(
  devtools(
    (_set, get) => ({
      notes: mockNotes,
      isLoading: false,

      getByOpportunity: (opportunityId) =>
        get().notes.filter((n) => n.opportunityId === opportunityId),
      getById: (id) => get().notes.find((n) => n.id === id),
    }),
    { name: "note-store" }
  )
);
```

**Step 3: Criar `src/stores/negotiation-store.ts`**

```typescript
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { NegotiationRound } from "@/types";
import { mockNegotiationRounds } from "@/lib/mock-data";

interface NegotiationState {
  rounds: NegotiationRound[];
  isLoading: boolean;

  // Queries
  getByOpportunity: (opportunityId: string) => NegotiationRound[];
  getById: (id: string) => NegotiationRound | undefined;
}

export const useNegotiationStore = create<NegotiationState>()(
  devtools(
    (_set, get) => ({
      rounds: mockNegotiationRounds,
      isLoading: false,

      getByOpportunity: (opportunityId) =>
        get().rounds.filter((r) => r.opportunityId === opportunityId),
      getById: (id) => get().rounds.find((r) => r.id === id),
    }),
    { name: "negotiation-store" }
  )
);
```

**Step 4: Adicionar export em barrel**

Em `src/lib/mock-data/index.ts`, adicionar:

```typescript
export { mockNotes } from "./notes";
```

**Step 5: Verificar tipos**

Run: `npx tsc --noEmit 2>&1 | head -20`
Expected: PASS

**Step 6: Commit**

```bash
git add src/lib/mock-data/notes.ts src/stores/note-store.ts src/stores/negotiation-store.ts src/lib/mock-data/index.ts
git commit -m "feat(mock): add 40 opportunity notes, note store, and negotiation store"
```

---

## Task 5: Conectar Lead Card Drawer aos stores globais

**Files:**
- Modify: `src/components/drawers/lead-card-drawer.tsx`

Este é o passo mais complexo. Substituir dados inline por consumo dos stores.

**Step 1: Adicionar imports dos novos stores**

No topo do arquivo, após os imports existentes (~linha 119), adicionar:

```typescript
import { useContactStore } from "@/stores/contact-store";
import { useVisitStore } from "@/stores/visit-store";
import { useNoteStore } from "@/stores/note-store";
import { useNegotiationStore } from "@/stores/negotiation-store";
```

**Step 2: Remover `mockContacts` inline (linhas 420-451)**

Apagar a const `mockContacts` local. O componente vai buscar do `contactStore`.

**Step 3: Substituir inicialização de contatos**

Encontrar onde `mockContacts` é usado como estado inicial (por volta da linha 1864):
```typescript
// ANTES:
setContacts(mockContacts);
// DEPOIS: (será dentro de useEffect, usando o clientId do lead)
const clientContacts = useContactStore.getState().getByClient(resolvedLead.clientId ?? "");
setContacts(clientContacts.length > 0 ? clientContacts : []);
```

**Step 4: Remover `mockVisits` inline (linhas 567-593)**

Apagar a const `mockVisits` local. Substituir pela busca do store dentro do componente:

```typescript
const storeVisits = useVisitStore((s) => s.getByOpportunity)(resolvedLead.id);
```

Converter `Visit[]` do store para `VisitRow[]` local usando um `useMemo`:

```typescript
const visitRowsFromStore = useMemo(() => {
  return storeVisits.map((v): VisitRow => ({
    id: v.id,
    type: v.type,
    location: v.location,
    status: v.status,
    startAt: v.startAt,
    responsible: v.responsible,
    objective: v.objective,
    result: v.result,
    outcome: v.outcome,
    durationMinutes: v.durationMinutes,
    link: v.link,
    platform: v.platform,
    cancellationReason: v.cancellationReason,
    createdAt: v.createdAt,
  }));
}, [storeVisits]);
```

E substituir a inicialização de `visitRows` com o state do store.

**Step 5: Remover `mockNotesSeed` inline (linhas 595-624)**

Apagar a const `mockNotesSeed` local. Substituir pela busca do store:

```typescript
const storeNotes = useNoteStore((s) => s.getByOpportunity)(resolvedLead.id);
```

Converter `OpportunityNote` do store para o formato local `OpportunityNote` do drawer (são compatíveis, apenas mapear campos).

**Step 6: Remover `mockTimeline` inline (linhas 468-512)**

No lugar, criar timeline computada a partir dos stores. A lógica combina atividades, visitas, notas e negociações do opportunity em um array ordenado por data.

**Step 7: Remover `mockTeamMembers` inline (linhas 461-466)**

Substituir pela busca do `mockUsers`:
```typescript
import { mockUsers } from "@/lib/mock-data";
// ...
const teamMembers = mockUsers.filter(u => u.isActive).map(u => ({ id: u.id, name: u.name, avatar: "" }));
```

**Step 8: Verificar tipos**

Run: `npx tsc --noEmit 2>&1 | head -30`
Expected: PASS

**Step 9: Commit**

```bash
git add src/components/drawers/lead-card-drawer.tsx
git commit -m "refactor(lead-drawer): connect contacts, visits, notes, timeline to global stores"
```

---

## Task 6: Conectar Client Card Drawer aos stores globais

**Files:**
- Modify: `src/components/drawers/client-card-drawer.tsx`

**Step 1: Adicionar imports**

```typescript
import { useContactStore } from "@/stores/contact-store";
import { useVisitStore } from "@/stores/visit-store";
import { useNoteStore } from "@/stores/note-store";
```

**Step 2: Remover `mockContacts` inline (linhas 132-153)**

Substituir pela busca do `contactStore`:
```typescript
const clientContacts = useContactStore.getState().getByClient(resolvedClient.id);
setContacts(clientContacts.length > 0 ? clientContacts : []);
```

**Step 3: Remover `mockTimeline` inline (linhas 185-228)**

Substituir por timeline computada a partir dos stores para todas as oportunidades do cliente.

**Step 4: Manter `mockMrrHistory` e `mockMetrics` inline**

Estes dados não são entidades de negócio — são métricas computadas. Manter inline conforme design aprovado.

**Step 5: Remover `mockTeamMembers` inline (linhas 163-168)**

Substituir por `mockUsers` importado.

**Step 6: Verificar tipos**

Run: `npx tsc --noEmit 2>&1 | head -30`
Expected: PASS

**Step 7: Commit**

```bash
git add src/components/drawers/client-card-drawer.tsx
git commit -m "refactor(client-drawer): connect contacts and timeline to global stores"
```

---

## Task 7: Corrigir página de Auditoria

**Files:**
- Modify: `src/app/(auth)/audit/page.tsx`

**Step 1: Importar `mockAuditLog` do store global**

```typescript
import { mockAuditLog } from "@/lib/mock-data";
```

**Step 2: Remover `mockAuditEvents` local (a partir da linha 146)**

Apagar o array inteiro `mockAuditEvents` que tem dados de Jan 2025.

**Step 3: Criar adapter de mapeamento**

O componente espera `AuditEvent` local (com `user.name`, `user.initials`, `user.color`), mas o `mockAuditLog` global tem formato diferente (campos flat). Criar uma função de mapeamento:

```typescript
function mapAuditLogToEvents(events: typeof mockAuditLog): AuditEvent[] {
  const userColors: Record<string, string> = {
    "Rafael Mendes": "bg-brand-light text-brand",
    "Camila Ferreira": "bg-status-info-light text-status-info",
    "Lucas Oliveira": "bg-status-success-light text-status-success",
    "Juliana Costa": "bg-status-warning-light text-status-warning",
    "Fernanda Lima": "bg-purple-100 text-purple-700",
    "Marcos Pereira": "bg-amber-100 text-amber-700",
    "Carolina Santos": "bg-pink-100 text-pink-700",
  };

  const actionMap: Record<string, AuditAction> = {
    "Ganhou oportunidade": "created",
    "Perdeu oportunidade": "deleted",
    "Criou oportunidade": "created",
    "Adicionou cliente": "created",
    "Completou atividade": "updated",
    "Avançou estágio": "moved",
    "Alterou saúde do cliente": "updated",
    "Atualizou configuração": "updated",
    "Criou atividade": "created",
  };

  return events.map((e) => {
    const initials = e.userName
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return {
      id: e.id,
      timestamp: e.timestamp,
      user: {
        name: e.userName,
        initials,
        color: userColors[e.userName] ?? "bg-zinc-100 text-zinc-600",
      },
      action: actionMap[e.action] ?? "updated",
      entityType: e.entity,
      entityName: e.entityName,
      details: e.details,
    };
  });
}
```

**Step 4: Substituir referência**

Onde o componente usava `mockAuditEvents`, substituir por:
```typescript
const auditEvents = mapAuditLogToEvents(mockAuditLog);
```

**Step 5: Atualizar `userFilterOptions`**

Substituir os nomes hardcoded pelos nomes dos `mockUsers`:
```typescript
import { mockUsers } from "@/lib/mock-data";

const userFilterOptions = [
  { value: "all", label: "Todos os usuários" },
  ...mockUsers.filter(u => u.isActive).map(u => ({ value: u.name, label: u.name })),
];
```

**Step 6: Verificar tipos**

Run: `npx tsc --noEmit 2>&1 | head -30`
Expected: PASS

**Step 7: Commit**

```bash
git add src/app/(auth)/audit/page.tsx
git commit -m "fix(audit): replace stale local mock with global mockAuditLog"
```

---

## Task 8: Build final e verificação

**Files:** Nenhum novo. Apenas verificação.

**Step 1: Type check completo**

Run: `npx tsc --noEmit`
Expected: 0 erros

**Step 2: Build de produção**

Run: `npm run build`
Expected: Build bem-sucedido, 0 erros

**Step 3: Commit final (se houver ajustes)**

```bash
git add -A
git commit -m "chore: fix any remaining type errors from mock data migration"
```

---

## Resumo de arquivos

| Ação | Arquivo |
|------|---------|
| Modify | `src/types/index.ts` |
| Modify | `src/lib/mock-data/helpers.ts` |
| Modify | `src/lib/mock-data/negotiations.ts` |
| Modify | `src/lib/mock-data/index.ts` |
| Create | `src/lib/mock-data/visits.ts` |
| Create | `src/lib/mock-data/notes.ts` |
| Create | `src/stores/visit-store.ts` |
| Create | `src/stores/note-store.ts` |
| Create | `src/stores/negotiation-store.ts` |
| Modify | `src/components/drawers/lead-card-drawer.tsx` |
| Modify | `src/components/drawers/client-card-drawer.tsx` |
| Modify | `src/app/(auth)/audit/page.tsx` |
