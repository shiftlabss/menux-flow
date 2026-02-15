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
          <DialogTitle className="font-heading text-lg">
            Configurações da Intelligence
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-2">
          {/* Tom da IA */}
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

          {/* Frequência de sugestões */}
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

          {/* Notificações proativas */}
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
