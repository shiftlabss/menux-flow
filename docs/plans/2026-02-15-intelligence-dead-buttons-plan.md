# Intelligence Dead Buttons — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Give every button and flow in `/intelligence` a real action — no dead UI.

**Architecture:** Wire existing drawers/modals from `ui-store` into suggested actions; make mode pills filter the execution panel and adjust AI prompt tone; add a settings dialog; make risk alerts clickable; delete dead code.

**Tech Stack:** React 19, Zustand 5, shadcn/ui (Dialog, Switch, Select), TypeScript

---

### Task 1: Suggested Actions — Open real drawers

**Files:**
- Modify: `src/components/intelligence/intelligence-message.tsx:186-198`

**Step 1: Update SuggestedActionButton to open drawers**

In `intelligence-message.tsx`, the `SuggestedActionButton` component's `handleClick` function currently only calls `markActionExecuted()`. Update it to open real drawers based on `action.type`:

```tsx
import { useUIStore } from "@/stores/ui-store";

// Inside SuggestedActionButton component:
const { openDrawer } = useUIStore();

const handleClick = () => {
  if (action.executed) return;

  // Handle "Escolher cliente" action — abre o modal D11
  if (action.payload?.action === "open-client-picker") {
    openClientPicker();
    markActionExecuted(messageId, action.id);
    return;
  }

  // Handle create-activity — open new activity drawer
  if (action.type === "create-activity") {
    openDrawer("new-activity", {
      ...(action.payload ?? {}),
      fromIntelligence: true,
    });
    markActionExecuted(messageId, action.id);
    return;
  }

  // Handle schedule-followup — open new activity drawer in followup mode
  if (action.type === "schedule-followup") {
    openDrawer("new-activity", {
      type: "followup",
      ...(action.payload ?? {}),
      fromIntelligence: true,
    });
    markActionExecuted(messageId, action.id);
    return;
  }

  // Handle save-note — open new activity drawer in note mode
  if (action.type === "save-note") {
    openDrawer("new-activity", {
      type: "note",
      ...(action.payload ?? {}),
      fromIntelligence: true,
    });
    markActionExecuted(messageId, action.id);
    return;
  }

  // Fallback: just mark as executed
  markActionExecuted(messageId, action.id);
};
```

**Step 2: Verify build passes**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 3: Commit**

```bash
git add src/components/intelligence/intelligence-message.tsx
git commit -m "feat: wire suggested actions to real drawers in intelligence"
```

---

### Task 2: Risk Alerts — Make clickable

**Files:**
- Modify: `src/components/intelligence/intelligence-execution-panel.tsx:476-512`

**Step 1: Add onClick to risk alert cards**

In the risk alerts section (around line 476), the `<div>` for each alert currently has no `onClick`. Add the same client-selection pattern used by Priority Cards:

```tsx
{riskAlerts.map((alert) => (
  <div
    key={alert.id}
    onClick={() => {
      if (alert.linkedEntityId) {
        const opp = opportunities.find((o) => o.id === alert.linkedEntityId);
        if (opp) {
          useIntelligenceStore.getState().selectClient({
            id: opp.id,
            entityId: opp.id,
            entityType: "opportunity",
            companyName: opp.clientName ?? opp.title,
            stage: opp.stage,
            stageLabel: opp.stage,
            temperature: opp.temperature,
            lastContact: opp.updatedAt,
            value: opp.monthlyValue,
            tags: opp.tags,
          });
        }
      }
    }}
    className={cn(
      "rounded-lg border p-3 cursor-pointer transition-all",
      alert.severity === "critical"
        ? "border-red-300/35 bg-red-500/12 hover:border-red-300/50"
        : "border-amber-300/35 bg-amber-500/12 hover:border-amber-300/50"
    )}
  >
```

Note: add `cursor-pointer transition-all` and the `hover:border-*` classes to the className.

**Step 2: Verify build passes**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 3: Commit**

```bash
git add src/components/intelligence/intelligence-execution-panel.tsx
git commit -m "feat: make risk alerts clickable to select linked opportunity"
```

---

### Task 3: Mode Pills — Filter execution panel

**Files:**
- Modify: `src/components/intelligence/intelligence-execution-panel.tsx`

**Step 1: Read mode from store and define section visibility**

At the top of `IntelligenceExecutionPanel`, read `menuxIntelligenceMode`:

```tsx
const { contextCard, executeSlashCommand, proactiveSuggestions, dismissSuggestion, menuxIntelligenceMode } =
  useIntelligenceStore();
```

Define which sections are visible per mode. Add this after the `hasClient` declaration:

```tsx
// Mode-based section visibility
const sectionVisibility = {
  focus: { suggestions: true, priorities: true, actions: true, insights: false, quickWins: false, risks: false },
  audit: { suggestions: false, priorities: false, actions: true, insights: true, quickWins: true, risks: true },
  reply: { suggestions: true, priorities: true, actions: true, insights: false, quickWins: false, risks: false },
  proposal: { suggestions: false, priorities: false, actions: true, insights: true, quickWins: true, risks: false },
};

const visible = sectionVisibility[menuxIntelligenceMode] ?? sectionVisibility.focus;

// Mode-based quick action filtering
const quickActionFilter: Record<string, string[]> = {
  focus: ["whatsapp", "email", "agendar", "proposta", "resumo", "funil", "riscos", "planos"],
  audit: ["resumo", "funil", "riscos", "planos"],
  reply: ["whatsapp", "email", "agendar"],
  proposal: ["proposta", "planos"],
};

const allowedQuickActions = quickActionFilter[menuxIntelligenceMode] ?? quickActionFilter.focus;
```

**Step 2: Wrap each section with visibility check**

Wrap each section's `<section>` in the JSX with `{visible.suggestions && (...)}`, `{visible.priorities && (...)}`, etc.

For Quick Actions, filter which cards show:

```tsx
{visible.actions && (
  <section>
    {/* ... SectionHeader ... */}
    <AnimatePresence>
      {expandedSections.actions && (
        <motion.div ...>
          <TooltipProvider>
            <div className="mt-3 grid grid-cols-1 gap-2 [@media(min-width:1200px)]:grid-cols-2">
              {/* Only render QuickActionCards whose action key is in allowedQuickActions */}
```

Each `QuickActionCard` already has an `onClick` calling `handleQuickAction("whatsapp")` etc. Define an array of all quick action definitions and `.filter()` by `allowedQuickActions`:

```tsx
const allQuickActions = [
  { key: "whatsapp", icon: <MessageSquare className="h-3.5 w-3.5" />, label: "WhatsApp", color: "border-emerald-300/25 bg-emerald-400/12 text-emerald-100 hover:bg-emerald-400/18 hover:border-emerald-300/40", needsClient: true },
  { key: "email", icon: <Mail className="h-3.5 w-3.5" />, label: "Email", color: "border-cyan-300/25 bg-cyan-400/12 text-cyan-100 hover:bg-cyan-400/18 hover:border-cyan-300/40", needsClient: true },
  { key: "agendar", icon: <Calendar className="h-3.5 w-3.5" />, label: "Follow-up", color: "border-violet-300/25 bg-violet-400/12 text-violet-100 hover:bg-violet-400/18 hover:border-violet-300/40", needsClient: true },
  { key: "proposta", icon: <Target className="h-3.5 w-3.5" />, label: "Pitch", color: "border-amber-300/25 bg-amber-400/12 text-amber-100 hover:bg-amber-400/18 hover:border-amber-300/40", needsClient: true },
  { key: "resumo", icon: <Sunrise className="h-3.5 w-3.5" />, label: "Resumo", color: "border-indigo-300/25 bg-indigo-400/12 text-indigo-100 hover:bg-indigo-400/18 hover:border-indigo-300/40", needsClient: false },
  { key: "funil", icon: <TrendingUp className="h-3.5 w-3.5" />, label: "Funil", color: "border-blue-300/25 bg-blue-400/12 text-blue-100 hover:bg-blue-400/18 hover:border-blue-300/40", needsClient: false },
  { key: "riscos", icon: <ShieldAlert className="h-3.5 w-3.5" />, label: "Riscos", color: "border-rose-300/25 bg-rose-400/12 text-rose-100 hover:bg-rose-400/18 hover:border-rose-300/40", needsClient: false },
  { key: "planos", icon: <FileText className="h-3.5 w-3.5" />, label: "Planos", color: "border-slate-300/25 bg-slate-400/12 text-slate-100 hover:bg-slate-400/18 hover:border-slate-200/35", needsClient: false },
];

const filteredQuickActions = allQuickActions.filter((a) => allowedQuickActions.includes(a.key));
```

Then render with `.map()`:

```tsx
{filteredQuickActions.map((action) => (
  <QuickActionCard
    key={action.key}
    icon={action.icon}
    label={action.label}
    color={action.color}
    onClick={() => handleQuickAction(action.key)}
    disabled={action.needsClient && !hasClient}
    tooltip={action.needsClient && !hasClient ? "Selecione um cliente primeiro" : undefined}
  />
))}
```

The context card insights section at the bottom should always show when a card is selected regardless of mode (keep unchanged).

**Step 3: Verify build passes**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 4: Commit**

```bash
git add src/components/intelligence/intelligence-execution-panel.tsx
git commit -m "feat: mode pills filter execution panel sections and quick actions"
```

---

### Task 4: Mode Pills — Adjust AI prompt tone

**Files:**
- Modify: `src/lib/intelligence-engine/router.ts`
- Modify: `src/stores/intelligence-store.ts`

**Step 1: Add mode to ProcessMessageInput**

In `router.ts`, add `mode` to the `ProcessMessageInput` interface:

```tsx
import type { MenuxIntelligenceMode } from "@/types/intelligence";

export interface ProcessMessageInput {
  text: string;
  command?: SlashCommand;
  card: CardContext | null;
  vendor: VendorContext;
  pipeline: PipelineContext | null;
  mode?: MenuxIntelligenceMode;
}
```

**Step 2: Create mode prompt prefix map**

Add this constant at the top of `router.ts`:

```tsx
const MODE_PROMPT_PREFIX: Record<MenuxIntelligenceMode, string> = {
  focus: "Foque na situação específica deste cliente e sugira próximos passos práticos e diretos.",
  audit: "Analise métricas, identifique gargalos e sugira otimizações. Seja analítico e use dados.",
  reply: "Gere mensagens prontas para envio ao cliente. Seja direto, prático e use tom adequado ao canal.",
  proposal: "Foque em argumentos de venda, diferenciação competitiva e proposta de valor. Seja persuasivo.",
};
```

**Step 3: Apply mode prefix to free responses**

In `processMessage()`, pass mode to `generateFreeResponse`:

```tsx
// Sem comando → resposta livre (with mode context)
return generateFreeResponse(input.text, input.card, input.mode);
```

Update `generateFreeResponse` in `freeform.ts` to accept and use mode:

```tsx
export function generateFreeResponse(
  text: string,
  card: CardContext | null,
  mode?: MenuxIntelligenceMode
): Message {
```

In the generic response at the bottom, prepend mode context when available:

```tsx
const modeHint = mode && mode !== "focus"
  ? `\n\n*Modo ${mode === "audit" ? "Auditoria" : mode === "reply" ? "Responder" : "Proposta"} ativo — respostas otimizadas para este contexto.*`
  : "";

// Append modeHint to the content string
```

**Step 4: Pass mode from store to processMessage**

In `intelligence-store.ts`, in both `sendMessage` and `executeSlashCommand`, pass the current mode:

```tsx
const response = await processMessage({
  text,
  card: state.contextCard,
  vendor,
  pipeline: getPipelineContext(),
  mode: state.menuxIntelligenceMode,
});
```

And:

```tsx
const response = await processMessage({
  text: payload ?? "",
  command,
  card: state.contextCard,
  vendor,
  pipeline: getPipelineContext(),
  mode: state.menuxIntelligenceMode,
});
```

**Step 5: Verify build passes**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 6: Commit**

```bash
git add src/lib/intelligence-engine/router.ts src/lib/intelligence-engine/freeform.ts src/stores/intelligence-store.ts
git commit -m "feat: mode pills adjust AI prompt tone in intelligence engine"
```

---

### Task 5: Settings Dialog — Create and wire

**Files:**
- Create: `src/components/intelligence/intelligence-settings-dialog.tsx`
- Modify: `src/stores/intelligence-store.ts`
- Modify: `src/types/intelligence.ts`
- Modify: `src/components/intelligence/menux-intelligence-header.tsx`
- Modify: `src/components/intelligence/menux-intelligence-full-header.tsx`
- Modify: `src/hooks/use-proactive-engine.ts`

**Step 1: Add settings types to intelligence.ts**

In `src/types/intelligence.ts`, add:

```tsx
export type AiTone = "formal" | "casual" | "neutral";
export type ProactiveFrequency = 5 | 15 | 30;
```

Add to `IntelligenceState`:

```tsx
/** Tom da IA */
aiTone: AiTone;
/** Frequência do motor proativo em minutos */
proactiveFrequency: ProactiveFrequency;
/** Notificações proativas habilitadas */
proactiveNotifications: boolean;
/** Settings dialog aberto */
isSettingsOpen: boolean;
```

Add to `IntelligenceActions`:

```tsx
/** Abre settings dialog */
openSettings: () => void;
/** Fecha settings dialog */
closeSettings: () => void;
/** Atualiza tom da IA */
setAiTone: (tone: AiTone) => void;
/** Atualiza frequência proativa */
setProactiveFrequency: (freq: ProactiveFrequency) => void;
/** Atualiza notificações proativas */
setProactiveNotifications: (enabled: boolean) => void;
```

**Step 2: Add settings state to store**

In `intelligence-store.ts`, add default state values:

```tsx
aiTone: "neutral" as const,
proactiveFrequency: 5 as const,
proactiveNotifications: true,
isSettingsOpen: false,
```

Add actions:

```tsx
openSettings: () => set({ isSettingsOpen: true }),
closeSettings: () => set({ isSettingsOpen: false }),
setAiTone: (aiTone) => set({ aiTone }),
setProactiveFrequency: (proactiveFrequency) => set({ proactiveFrequency }),
setProactiveNotifications: (proactiveNotifications) => set({ proactiveNotifications }),
```

Import the new types:

```tsx
import type { AiTone, ProactiveFrequency } from "@/types/intelligence";
```

**Step 3: Create the settings dialog component**

Create `src/components/intelligence/intelligence-settings-dialog.tsx`:

```tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import type { AiTone, ProactiveFrequency } from "@/types/intelligence";

const TONE_OPTIONS: { value: AiTone; label: string }[] = [
  { value: "formal", label: "Formal" },
  { value: "neutral", label: "Neutro" },
  { value: "casual", label: "Casual" },
];

const FREQUENCY_OPTIONS: { value: ProactiveFrequency; label: string }[] = [
  { value: 5, label: "A cada 5 minutos" },
  { value: 15, label: "A cada 15 minutos" },
  { value: 30, label: "A cada 30 minutos" },
];

export function IntelligenceSettingsDialog() {
  const {
    isSettingsOpen,
    closeSettings,
    aiTone,
    setAiTone,
    proactiveFrequency,
    setProactiveFrequency,
    proactiveNotifications,
    setProactiveNotifications,
  } = useIntelligenceStore();

  return (
    <Dialog open={isSettingsOpen} onOpenChange={(open) => !open && closeSettings()}>
      <DialogContent className="border-white/12 bg-slate-950 text-slate-100 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-lg">Configurações da Intelligence</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-2">
          {/* AI Tone */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200">
              Tom da IA
            </label>
            <Select value={aiTone} onValueChange={(v) => setAiTone(v as AiTone)}>
              <SelectTrigger className="border-white/12 bg-white/7">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-white/12 bg-slate-900">
                {TONE_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-slate-400">
              Define o estilo de comunicação nas respostas.
            </p>
          </div>

          {/* Proactive Frequency */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200">
              Frequência de sugestões
            </label>
            <Select
              value={String(proactiveFrequency)}
              onValueChange={(v) => setProactiveFrequency(Number(v) as ProactiveFrequency)}
            >
              <SelectTrigger className="border-white/12 bg-white/7">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-white/12 bg-slate-900">
                {FREQUENCY_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={String(opt.value)}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-slate-400">
              Com que frequência o motor proativo verifica novas oportunidades.
            </p>
          </div>

          {/* Proactive Notifications */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium text-slate-200">
                Notificações proativas
              </label>
              <p className="text-xs text-slate-400">
                Receber alertas sobre oportunidades e riscos.
              </p>
            </div>
            <Switch
              checked={proactiveNotifications}
              onCheckedChange={setProactiveNotifications}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

**Step 4: Wire settings button in menux-intelligence-header.tsx**

Replace line 76:

```tsx
// Before:
<ActionButton disabled tooltip="Em breve" icon={Settings} title="Configurações" />

// After:
<ActionButton onClick={() => useIntelligenceStore.getState().openSettings()} icon={Settings} title="Configurações" />
```

**Step 5: Add settings button to menux-intelligence-full-header.tsx**

Import `Settings` from lucide-react. After the Commands button tooltip (around line 132), add:

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 text-slate-400 hover:bg-white/8 hover:text-slate-100"
      onClick={() => useIntelligenceStore.getState().openSettings()}
    >
      <Settings className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Configurações</TooltipContent>
</Tooltip>
```

**Step 6: Render dialog in the full console**

In `menux-intelligence-full-console.tsx`, import and render the dialog alongside the existing modals:

```tsx
import { IntelligenceSettingsDialog } from "./intelligence-settings-dialog";

// In JSX, after <ClientPickerModal />:
<IntelligenceSettingsDialog />
```

**Step 7: Use proactiveFrequency in use-proactive-engine.ts**

Replace the hardcoded interval:

```tsx
// Before:
const ENGINE_INTERVAL_MS = 5 * 60 * 1000;

// After: read from store dynamically inside the effect
useEffect(() => {
  const getIntervalMs = () => {
    const freq = useIntelligenceStore.getState().proactiveFrequency;
    return freq * 60 * 1000;
  };
```

Update the interval creation to use the dynamic value. Also check `proactiveNotifications` before running:

```tsx
function runEngine() {
  try {
    const { proactiveNotifications } = useIntelligenceStore.getState();
    if (!proactiveNotifications) return;

    // ... rest of function unchanged
  }
}
```

For the interval, use the store value:

```tsx
const interval = setInterval(runEngine, getIntervalMs());
```

**Step 8: Verify build passes**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 9: Commit**

```bash
git add src/components/intelligence/intelligence-settings-dialog.tsx src/stores/intelligence-store.ts src/types/intelligence.ts src/components/intelligence/menux-intelligence-header.tsx src/components/intelligence/menux-intelligence-full-header.tsx src/components/intelligence/menux-intelligence-full-console.tsx src/hooks/use-proactive-engine.ts
git commit -m "feat: add intelligence settings dialog with tone, frequency, notifications"
```

---

### Task 6: Integrate aiTone into AI responses

**Files:**
- Modify: `src/lib/intelligence-engine/router.ts`
- Modify: `src/lib/intelligence-engine/freeform.ts`
- Modify: `src/stores/intelligence-store.ts`

**Step 1: Add aiTone to ProcessMessageInput**

In `router.ts`:

```tsx
import type { MenuxIntelligenceMode, AiTone } from "@/types/intelligence";

export interface ProcessMessageInput {
  text: string;
  command?: SlashCommand;
  card: CardContext | null;
  vendor: VendorContext;
  pipeline: PipelineContext | null;
  mode?: MenuxIntelligenceMode;
  tone?: AiTone;
}
```

**Step 2: Pass tone from store**

In `intelligence-store.ts`, in both `sendMessage` and `executeSlashCommand`:

```tsx
const response = await processMessage({
  // ... existing fields
  mode: state.menuxIntelligenceMode,
  tone: state.aiTone,
});
```

**Step 3: Use tone in freeform responses**

In `freeform.ts`, update `generateFreeResponse`:

```tsx
export function generateFreeResponse(
  text: string,
  card: CardContext | null,
  mode?: MenuxIntelligenceMode,
  tone?: AiTone,
): Message {
```

Add tone hint to generic response:

```tsx
const toneHint = tone === "formal"
  ? " Responderei de forma executiva e profissional."
  : tone === "casual"
    ? " Responderei de forma descontraída e direta."
    : "";
```

Append `toneHint` to the content variable before returning.

Pass tone through in `router.ts`:

```tsx
return generateFreeResponse(input.text, input.card, input.mode, input.tone);
```

**Step 4: Verify build passes**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 5: Commit**

```bash
git add src/lib/intelligence-engine/router.ts src/lib/intelligence-engine/freeform.ts src/stores/intelligence-store.ts
git commit -m "feat: integrate aiTone setting into intelligence responses"
```

---

### Task 7: Delete dead code

**Files:**
- Delete: `src/components/intelligence/menux-intelligence-chat.tsx`
- Delete: `src/components/intelligence/menux-intelligence-console.tsx`

**Step 1: Verify no imports exist**

Search for any remaining imports of these files. There should be none (already verified in audit).

Run: `grep -r "menux-intelligence-chat\|menux-intelligence-console" src/ --include="*.tsx" --include="*.ts"`
Expected: only the files themselves (no importers)

**Step 2: Delete the files**

```bash
rm src/components/intelligence/menux-intelligence-chat.tsx
rm src/components/intelligence/menux-intelligence-console.tsx
```

**Step 3: Verify build passes**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 4: Commit**

```bash
git add -u src/components/intelligence/menux-intelligence-chat.tsx src/components/intelligence/menux-intelligence-console.tsx
git commit -m "chore: remove dead legacy intelligence components"
```

---

### Task 8: Final verification

**Step 1: Full type check**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 2: Run tests**

Run: `npx vitest run`
Expected: all tests pass

**Step 3: Dev server smoke test**

Run: `npm run dev`
Navigate to `http://127.0.0.1:3000/intelligence` and verify:
- Mode pills change execution panel sections
- Settings button opens dialog
- Risk alerts are clickable
- Suggested actions open drawers
- No console errors

**Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: address any issues from final verification"
```
