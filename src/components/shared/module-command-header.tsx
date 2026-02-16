"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ChipTone = "neutral" | "info" | "warning" | "danger" | "success";

export interface ModuleCommandHeaderChip {
  id: string;
  label: string;
  icon?: ReactNode;
  tone?: ChipTone;
  onClick?: () => void;
  href?: string;
}

interface ModuleCommandHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  actionsClassName?: string;
  meta?: ReactNode;
  chips?: ModuleCommandHeaderChip[];
  fallbackChip?: ModuleCommandHeaderChip;
  children?: ReactNode;
  className?: string;
  sticky?: boolean;
}

const chipToneStyles: Record<ChipTone, string> = {
  neutral: "border-zinc-200 bg-white/92 text-zinc-700",
  info: "border-sky-200 bg-sky-50/88 text-sky-700",
  warning: "border-amber-200 bg-amber-50/88 text-amber-700",
  danger: "border-red-200 bg-red-50/88 text-red-700",
  success: "border-emerald-200 bg-emerald-50/88 text-emerald-700",
};

function renderChip(chip: ModuleCommandHeaderChip) {
  const classes = cn(
    "premium-shine inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold",
    "transition-all duration-120 ease-out hover:bg-white/75 active:scale-[0.99]",
    chipToneStyles[chip.tone ?? "neutral"]
  );

  const content = (
    <>
      {chip.icon ? <span className="shrink-0">{chip.icon}</span> : null}
      <span>{chip.label}</span>
    </>
  );

  if (chip.href) {
    return (
      <Link key={chip.id} href={chip.href} className={classes}>
        {content}
      </Link>
    );
  }

  if (chip.onClick) {
    return (
      <button key={chip.id} type="button" onClick={chip.onClick} className={classes}>
        {content}
      </button>
    );
  }

  return (
    <span key={chip.id} className={classes}>
      {content}
    </span>
  );
}

export function ModuleCommandHeader({
  title,
  description,
  actions,
  actionsClassName,
  meta,
  chips = [],
  fallbackChip,
  children,
  className,
  sticky = false,
}: ModuleCommandHeaderProps) {
  const hasSecondRow = Boolean(meta || chips.length > 0 || fallbackChip);

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[20px] border border-zinc-200/85 bg-zinc-50/88 px-5 pb-4 pt-3",
        "shadow-[0_10px_24px_-20px_rgba(15,23,42,0.34)] backdrop-blur-sm",
        sticky && "sticky top-4 z-30",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white/72 to-transparent" />
      </div>

      <div className="relative z-10 space-y-3">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-1 font-body text-sm text-zinc-600">{description}</p>
            ) : null}
          </div>
          {actions ? (
            <div
              className={cn(
                "flex w-full min-w-0 flex-wrap items-center gap-2 rounded-[16px] border border-zinc-200/85 bg-white/85 px-2 py-1.5 shadow-[0_8px_16px_-16px_rgba(15,23,42,0.36)]",
                "xl:ml-auto xl:w-auto xl:max-w-full xl:justify-end",
                actionsClassName
              )}
            >
              {actions}
            </div>
          ) : null}
        </div>

        {children}

        {hasSecondRow ? (
          <div className="flex flex-col gap-2 border-t border-zinc-200/75 pt-2 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-zinc-500/80">{meta}</div>
            <div className="flex flex-wrap items-center justify-end gap-2">
              {chips.length > 0 ? chips.map((chip) => renderChip(chip)) : null}
              {chips.length === 0 && fallbackChip ? renderChip(fallbackChip) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
