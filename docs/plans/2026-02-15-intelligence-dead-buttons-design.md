# Intelligence Page — Dead Buttons Audit & Fix Design

**Date:** 2026-02-15
**Scope:** `/intelligence` page — give life to all dead buttons, flows, and unused code

---

## Problem

5 dead spots identified in the intelligence page:

1. **Settings button** — disabled with "Em breve" tooltip, no functionality
2. **Mode Pills** — change store state but nothing consumes it (no component reads `menuxIntelligenceMode`)
3. **Risk Alerts** — rendered without onClick, purely informational with no action
4. **Suggested Actions** — `markActionExecuted()` only sets a checkmark, doesn't open any drawer/form
5. **Legacy components** — `menux-intelligence-chat.tsx` and `menux-intelligence-console.tsx` are dead code (not imported anywhere)

---

## Solution

### 1. Suggested Actions → Open real drawers

Map each `SuggestedActionType` to a real UI action using the existing `ui-store` drawers:

| SuggestedActionType | Action |
|---|---|
| `create-activity` | `openDrawer("new-activity", { opportunityId, ...payload })` |
| `schedule-followup` | `openDrawer("new-activity", { opportunityId, type: "followup", ...payload })` |
| `save-note` | `openDrawer("new-activity", { opportunityId, type: "note", ...payload })` |
| `open-card` | `openClientPicker()` (already works) |

**File:** `src/components/intelligence/intelligence-message.tsx` — `SuggestedActionButton.handleClick()`

After opening the drawer, still call `markActionExecuted()` so the button shows a checkmark.

### 2. Mode Pills → Change execution panel + chat prompt

**A) Execution Panel** (`intelligence-execution-panel.tsx`):

Read `menuxIntelligenceMode` from store and filter/reorder sections:

| Mode | Visible sections (in order) |
|---|---|
| `focus` | Proactive Suggestions, Priorities, Quick Actions (all), Context Card Insights |
| `audit` | Insights, Risk Alerts, Quick Wins, Quick Actions (Resumo, Funil, Riscos, Planos only) |
| `reply` | Quick Actions (WhatsApp, Email, Follow-up only), Proactive Suggestions, Priorities |
| `proposal` | Quick Actions (Pitch, Planos only), Context Card Insights, Insights, Quick Wins |

**B) Chat prompt** (`src/lib/intelligence-engine/router.ts`):

Pass `menuxIntelligenceMode` to `processMessage()`. Each mode adds a system-level prefix that adjusts AI tone:

- `focus`: "Foque na situação específica deste cliente e próximos passos práticos."
- `audit`: "Analise métricas, identifique gargalos e sugira otimizações do funil."
- `reply`: "Gere mensagens prontas para envio. Seja direto e prático."
- `proposal`: "Foque em argumentos de venda, diferenciação e proposta de valor."

### 3. Risk Alerts → Clickable

Add `onClick` to risk alert cards that selects the linked opportunity (same pattern as Priority Cards and Quick Wins). The `computeRiskAlerts()` function already returns `linkedEntityId`.

**File:** `src/components/intelligence/intelligence-execution-panel.tsx` lines 476-512

### 4. Settings → Dialog

Create `src/components/intelligence/intelligence-settings-dialog.tsx`:

Settings stored in `intelligence-store`:
- `aiTone`: `"formal" | "casual" | "neutral"` (default: `"neutral"`)
- `proactiveFrequency`: `5 | 15 | 30` (minutes, default: `5`)
- `proactiveNotifications`: `boolean` (default: `true`)

Dialog UI: simple shadcn Dialog with Radio groups and Switch.

Enable the Settings button in both headers (`menux-intelligence-header.tsx:76` and add to `menux-intelligence-full-header.tsx`).

### 5. Cleanup — Remove dead code

Delete:
- `src/components/intelligence/menux-intelligence-chat.tsx`
- `src/components/intelligence/menux-intelligence-console.tsx`

---

## Files to modify

| File | Change |
|---|---|
| `src/components/intelligence/intelligence-message.tsx` | SuggestedActionButton opens real drawers |
| `src/components/intelligence/intelligence-execution-panel.tsx` | Read mode, filter sections; risk alerts clickable |
| `src/components/intelligence/menux-intelligence-header.tsx` | Enable settings button, open dialog |
| `src/components/intelligence/menux-intelligence-full-header.tsx` | Add settings button, open dialog |
| `src/stores/intelligence-store.ts` | Add settings state (aiTone, proactiveFrequency, proactiveNotifications), add openSettings/closeSettings |
| `src/lib/intelligence-engine/router.ts` | Accept mode param, prepend mode-specific prompt |
| `src/hooks/use-proactive-engine.ts` | Read proactiveFrequency from store |
| NEW: `src/components/intelligence/intelligence-settings-dialog.tsx` | Settings dialog component |
| DELETE: `src/components/intelligence/menux-intelligence-chat.tsx` | Dead code |
| DELETE: `src/components/intelligence/menux-intelligence-console.tsx` | Dead code |

## Files NOT modified

All other intelligence components are functional and don't need changes.
