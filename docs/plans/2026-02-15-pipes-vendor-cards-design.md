# Design: Cards do vendedor logado no Pipeline

**Data:** 2026-02-15
**Status:** Aprovado

## Problema

`generateDynamicMockData()` retorna 40 cards com `responsibleId: "demo-user"`, `"2"` ou `"3"`. Nenhum desses IDs bate com o ID real do vendedor logado (ex: `user-comercial-flow-demo`). Resultado: o vendedor não tem cards próprios no Kanban.

## Solução

Abordagem dinâmica: `generateDynamicMockData(currentUserId, currentUserName)` distribui ~60% dos cards para o vendedor logado e ~40% para colegas.

### Mudanças

1. **`src/lib/mock-data/dynamic-generator.ts`**
   - Assinatura: `generateDynamicMockData(ownerId?: string, ownerName?: string)`
   - ~24 cards recebem `responsibleId: ownerId` e `responsibleName: ownerName`
   - ~16 cards ficam com IDs de colegas ("2"/"Joao Santos", "3"/"Ana Oliveira")
   - Cada estágio tem pelo menos 1 card do vendedor logado
   - Fallback: sem parâmetros, mantém comportamento atual (backwards-compatible)

2. **`src/app/(auth)/pipes/page.tsx`**
   - Passa `currentUserId` e `user.name` para `generateDynamicMockData()`

### Distribuição por estágio

| Estágio | Total | Vendedor (~60%) | Colegas (~40%) |
|---------|-------|-----------------|----------------|
| lead-in | 8 | 5 | 3 |
| contato-feito | 7 | 4 | 3 |
| reuniao-agendada | 5 | 3 | 2 |
| proposta-enviada | 6 | 4 | 2 |
| negociacao | 6 | 4 | 2 |
| fechamento | 8 | 4 | 4 |
| **Total** | **40** | **24** | **16** |

### Compatibilidade

- Parâmetros opcionais com fallback para `"demo-user"` / `"Usuário Demo"`
- Qualquer email de login funciona automaticamente
- Ghost cards de colegas continuam aparecendo normalmente
