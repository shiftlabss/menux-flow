# Design: Correção cirúrgica de gaps de dados mock

**Data:** 2026-02-21
**Abordagem:** A (Cirúrgica) — criar dados faltantes, conectar drawers aos stores globais, corrigir datas estáticas

---

## Problema

Vários componentes usam dados mock inline (hardcoded) em vez de consumir stores globais. Isso causa:

1. **Drawers desconectados** — Lead Card e Client Card definem dados locais que não refletem o estado global
2. **Entidades sem FK** — `NegotiationRound` não tem `opportunityId`, impossibilitando associação
3. **Datas estáticas** — dados criados com datas absolutas envelhecem com o tempo
4. **Audit page duplicada** — usa mock local estático (Jan 2025) em vez do `mockAuditLog` global (Fev 2026)

### Gaps identificados (11 total)

| # | Gap | Severidade |
|---|-----|-----------|
| 1 | NegotiationRound sem `opportunityId` | Crítico |
| 2 | Visitas hardcoded no lead drawer | Alto |
| 3 | Notas hardcoded no lead drawer | Alto |
| 4 | Timeline hardcoded no lead drawer | Alto |
| 5 | Contatos do lead drawer não usam store | Médio |
| 6 | Client drawer contatos/métricas inline | Médio |
| 7 | Client drawer timeline inline | Médio |
| 8 | Client drawer MRR history inline | Médio |
| 9 | Audit page usa mock local estático | Médio |
| 10 | Datas absolutas envelhecem | Baixo |
| 11 | Dynamic generator existe mas não é usado | Baixo |

---

## Seção 1: Novas entidades e stores

### Tipo `Visit`

```typescript
interface Visit {
  id: string;
  opportunityId: string;
  clientId: string;
  userId: string;
  date: string;        // ISO date
  summary: string;
  outcome: "positive" | "neutral" | "negative";
  createdAt: string;
}
```

- **Mock:** `src/lib/mock-data/visits.ts` — 25 registros vinculados a oportunidades abertas
- **Store:** `src/stores/visit-store.ts` — `getByOpportunity(id)`, `getByClient(id)`

### Tipo `OpportunityNote`

```typescript
interface OpportunityNote {
  id: string;
  opportunityId: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: string;
}
```

- **Mock:** `src/lib/mock-data/notes.ts` — 40 registros distribuídos entre oportunidades
- **Store:** `src/stores/note-store.ts` — `getByOpportunity(id)`

### Expansão de `NegotiationRound`

- Adicionar `opportunityId: string` ao tipo existente
- Expandir de 3 para 20 registros em `src/lib/mock-data/negotiations.ts`
- **Store:** `src/stores/negotiation-store.ts` — `getByOpportunity(id)`

### Timeline computada

Função pura `generateTimeline(opportunityId)` em `src/lib/mock-data/timeline.ts`:
- Consulta stores de atividades, visitas, notas e negociações
- Retorna array ordenado por data decrescente
- Cada item: `{ type, date, title, description }`
- Não é store — é derivação sob demanda

### Datas relativas

Helpers `daysAgo(n)` e `daysFromNow(n)` no `dynamic-generator.ts` (já existe parcialmente).
Todos os novos mocks usam datas relativas para não envelhecer.

---

## Seção 2: Conexão dos drawers aos stores globais

### Lead Card Drawer (6 tabs)

| Tab | Antes | Depois |
|-----|-------|--------|
| Resumo | OK (usa `opportunityStore`) | Sem mudança |
| Atividades | OK (usa `activityStore`) | Sem mudança |
| Contatos | `mockContacts` inline | `contactStore.getByClient(clientId)` |
| Visitas | `mockVisits` inline (3 itens) | `visitStore.getByOpportunity(oppId)` |
| Notas | `mockNotesSeed` inline (2 itens) | `noteStore.getByOpportunity(oppId)` |
| Timeline | `mockTimeline` inline | `generateTimeline(oppId)` |

Negociações no resumo: `negotiationStore.getByOpportunity(oppId)`

### Client Card Drawer (3 tabs afetados)

| Tab | Antes | Depois |
|-----|-------|--------|
| Contatos | `mockContacts` inline | `contactStore.getByClient(clientId)` |
| Timeline | `mockTimeline` inline | Agregar timelines de todas as opps do cliente |
| Métricas | `mockMrrHistory` inline | Manter inline (dados de MRR não são entidades) |

---

## Seção 3: Audit e datas

### Audit page

`src/app/(auth)/audit/page.tsx`:
- Remover mock local (`mockEvents` de Jan 2025)
- Importar `mockAuditLog` de `@/lib/mock-data`
- Mapear campos para a interface esperada pelo componente

### Datas relativas

- Novos mocks: usar `daysAgo(n)` para `createdAt`, `updatedAt`
- Mocks existentes: NÃO alterar (escopo cirúrgico)

---

## Verificação

1. `npx tsc --noEmit` — sem erros de tipo
2. `npm run build` — build bem-sucedido
3. Testes manuais:
   - Lead drawer: todas 6 tabs com dados reais dos stores
   - Client drawer: contatos e timeline vindos dos stores
   - Audit page: eventos atuais (Fev 2026)
   - Datas nos novos mocks: relativas ao dia atual
