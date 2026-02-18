"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Users,
  CheckSquare,
  AlertTriangle,
  Info,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { activitySchema, type ActivityFormData } from "@/lib/validations/activity";

export interface NewActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ActivityFormData) => void;
  dealId?: string;
  initialType?: "call" | "email" | "meeting" | "visit" | "task" | "follow-up" | "whatsapp";
}

const activityTypes = [
  { id: "call", label: "Ligação", icon: Phone },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { id: "email", label: "E-mail", icon: Mail },
  { id: "meeting", label: "Reunião", icon: Users },
  { id: "task", label: "Tarefa", icon: CheckSquare },
];

export function NewActivityModal({
  isOpen,
  onClose,
  onSave,
  dealId,
  initialType = "task",
}: NewActivityModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isSaving, setIsSaving] = React.useState(false);
  const [saveSuccess, setSaveSuccess] = React.useState(false);

  const form = useForm<ActivityFormData>({
    resolver: zodResolver(activitySchema),
    defaultValues: {
      type: initialType,
      title: "",
      date: format(new Date(), "yyyy-MM-dd"),
      time: format(new Date(), "HH:mm"),
      description: "",
      responsible: "Eu (Logado)",
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = form;

  const type = watch("type");

  // Reset form when modal closes
  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        reset({
          type: initialType,
          title: "",
          date: format(new Date(), "yyyy-MM-dd"),
          time: format(new Date(), "HH:mm"),
          description: "",
          responsible: "Eu (Logado)",
        });
        setSaveSuccess(false);
      }, 300);
    }
  }, [isOpen, reset, initialType]);

  const onSubmit = async (data: ActivityFormData) => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSaveSuccess(true);

    setTimeout(() => {
      onSave(data);
      setIsSaving(false);
      onClose();
    }, 600);
  };

  const handleSmartSuggestion = () => {
    setValue("title", "Follow-up da proposta enviada");
    setValue("description", "Verificar se o cliente teve alguma dúvida sobre os valores apresentados.");
  };

  const Content = (
    <div className="flex h-full flex-col bg-white">
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <form id="activity-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* SECTION A: Activity Type */}
          <div className="space-y-3">
            <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Tipo de Atividade
            </Label>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
              {activityTypes.map((t) => {
                const Icon = t.icon;
                const isSelected = type === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setValue("type", t.id as any)}
                    className={cn(
                      "flex flex-col items-center justify-center gap-2 rounded-xl border p-2 transition-all hover:bg-zinc-50",
                      isSelected
                        ? "border-brand bg-brand/5 text-brand ring-1 ring-brand"
                        : "border-zinc-200 bg-white text-zinc-600"
                    )}
                  >
                    <Icon className={cn("h-5 w-5", isSelected ? "text-brand" : "text-zinc-400")} />
                    <span className="text-[10px] font-medium">{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION B: Title & Priority */}
          <div className="space-y-4">
            <div>
              <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Título
              </Label>
              <div className="relative">
                <Input
                  {...register("title")}
                  placeholder="Ex: Ligar para confirmar recebimento..."
                  className={cn("font-medium", errors.title && "border-red-300 ring-red-100")}
                />
                <button
                  type="button"
                  onClick={handleSmartSuggestion}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-brand hover:bg-brand/10 transition-colors"
                  title="Sugestão Menux AI"
                >
                  <Sparkles className="h-4 w-4" />
                </button>
              </div>
              {errors.title && (
                <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>
              )}
            </div>

          </div>

          {/* SECTION C: Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Data
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <Input
                  type="date"
                  {...register("date")}
                  className={cn("pl-9", errors.date && "border-red-300 ring-red-100")}
                />
              </div>
              {errors.date && (
                <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>
              )}
            </div>
            <div>
              <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Hora
              </Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <Input
                  type="time"
                  {...register("time")}
                  className={cn("pl-9", errors.time && "border-red-300 ring-red-100")}
                />
              </div>
              {errors.time && (
                <p className="mt-1 text-xs text-red-500">{errors.time.message}</p>
              )}
            </div>
          </div>


          {/* SECTION E: Description */}
          <div>
            <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Descrição (Opcional)
            </Label>
            <Textarea
              {...register("description")}
              placeholder="Detalhes adicionais sobre a atividade..."
              className="resize-none min-h-[100px]"
            />
          </div>

          {/* Menux Intelligence Banner */}
          <div className="rounded-lg border border-indigo-100 bg-indigo-50/50 p-3">
            <div className="flex items-start gap-2">
              <Sparkles className="mt-0.5 h-4 w-4 text-indigo-500" />
              <div className="space-y-1">
                <p className="text-xs font-medium text-indigo-900">Sugestão Menux</p>
                <p className="text-[11px] text-indigo-700 leading-relaxed">
                  Baseado no histórico, o melhor horário para ligar para este cliente é entre <strong>14:00 e 16:00</strong>.
                </p>
              </div>
            </div>
          </div>

        </form>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-100 bg-zinc-50/50 p-4 md:px-6 md:py-4 mt-auto">
        <div className="flex items-center justify-end gap-3">
          <Button variant="ghost" onClick={onClose} disabled={isSaving}>
            Cancelar
          </Button>
          <Button
            type="submit"
            form="activity-form"
            className="bg-brand text-white hover:bg-brand/90 min-w-[140px]"
            disabled={isSaving || saveSuccess}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Salvando...
              </>
            ) : saveSuccess ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Salvo!
              </>
            ) : (
              "Criar Atividade"
            )}
          </Button>
        </div>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md gap-0 p-0 sm:max-w-xl border-0 shadow-2xl overflow-hidden">
          <DialogHeader className="border-b border-zinc-100 px-6 py-4 bg-white">
            <DialogTitle className="font-heading text-lg font-semibold text-zinc-900 flex items-center gap-2">
              Nova Atividade
            </DialogTitle>
          </DialogHeader>
          {Content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[90vh] gap-0 p-0 rounded-t-[20px] overflow-hidden">
        <SheetHeader className="border-b border-zinc-100 px-4 py-3 text-left bg-white">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-heading text-lg font-semibold text-zinc-900">
              Nova Atividade
            </SheetTitle>
            <button onClick={onClose} className="rounded-full p-2 hover:bg-zinc-100">
              <X className="h-5 w-5 text-zinc-500" />
            </button>
          </div>
        </SheetHeader>
        {Content}
      </SheetContent>
    </Sheet>
  );
}
