"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  Filter,
  GitBranch,
  Plug,
  Settings,
  Tags,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/cn";

export interface SettingsSecondaryNavItem {
  key: string;
  label: string;
  icon: ReactNode;
}

export const settingsSecondaryNavItems: SettingsSecondaryNavItem[] = [
  { key: "general", label: "Geral", icon: <Settings className="h-4 w-4" /> },
  { key: "pipeline", label: "Pipeline", icon: <GitBranch className="h-4 w-4" /> },
  { key: "funnels", label: "Funis", icon: <Filter className="h-4 w-4" /> },
  { key: "reasons", label: "Motivos de Perda", icon: <XCircle className="h-4 w-4" /> },
  { key: "tags", label: "Tags", icon: <Tags className="h-4 w-4" /> },
  { key: "integrations", label: "Integrações", icon: <Plug className="h-4 w-4" /> },
];

export const settingsTitleMap: Record<string, string> = {
  general: "Configurações Gerais",
  pipeline: "Pipeline",
  funnels: "Funis de Vendas",
  sla: "Configuração de SLA",
  commissions: "Regras de Comissão",
  fields: "Campos Personalizados",
  reasons: "Motivos de Perda",
  tags: "Gestão de Tags",
  terms: "Termos de Uso",
  notifications: "Notificações",
  integrations: "Integrações",
};

export function SettingsSecondaryNav({ activeKey }: { activeKey: string }) {
  return (
    <aside className="w-[200px] shrink-0">
      <nav className="sticky top-6 space-y-1">
        {settingsSecondaryNavItems.map((item) => {
          const isActive = activeKey === item.key;
          return (
            <Link
              key={item.key}
              href={`/settings/${item.key}`}
              className={cn(
                "flex items-center gap-3 rounded-[15px] px-3 py-2.5 font-body text-sm transition-colors",
                isActive
                  ? "bg-black font-medium text-white"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-black"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
