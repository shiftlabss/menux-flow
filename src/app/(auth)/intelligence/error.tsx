"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntelligenceError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Menux Intelligence Page Error]", error);
  }, [error]);

  return (
    <div className="menux-intelligence-theme menux-intelligence-theme-full flex h-full min-h-0 w-full items-center justify-center">
      <div className="menux-intelligence-surface max-w-md rounded-[20px] px-6 py-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-red-300/35 bg-red-500/14">
          <AlertTriangle className="h-8 w-8 text-red-200" />
        </div>
        <h2 className="mb-2 text-lg font-bold text-slate-100">
          Erro na Menux Intelligence
        </h2>
        <p className="mb-4 text-sm text-slate-300">
          {error.message || "Ocorreu um erro inesperado ao carregar a Menux Intelligence."}
        </p>
        <Button
          onClick={reset}
          variant="outline"
          className="border-white/16 bg-white/8 text-slate-100 hover:bg-white/12"
        >
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}
