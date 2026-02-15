"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorFallbackProps {
  error?: Error | null;
  onRetry?: () => void;
}

export function ErrorFallback({ error, onRetry }: ErrorFallbackProps) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 rounded-xl border border-zinc-200 bg-white p-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
        <AlertTriangle className="h-6 w-6 text-red-500" />
      </div>
      <div className="space-y-1">
        <h3 className="font-heading text-sm font-semibold text-zinc-900">Algo deu errado</h3>
        <p className="max-w-sm font-body text-xs text-zinc-500">
          {error?.message || "Ocorreu um erro inesperado. Tente novamente."}
        </p>
      </div>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry} className="gap-1.5">
          <RotateCcw className="h-3.5 w-3.5" />
          Tentar novamente
        </Button>
      )}
    </div>
  );
}
