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
  title: ReactNode;
  titleAccessory?: ReactNode;
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
  const isInteractive = Boolean(chip.href || chip.onClick);
  const classes = cn(
    "premium-shine inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-full border px-3 text-[12px] font-semibold tracking-tight whitespace-nowrap",
    isInteractive
      ? "cursor-pointer transition-all duration-150 ease-out hover:bg-white/75 hover:-translate-y-[1px] active:scale-[0.99] active:translate-y-0"
      : "cursor-default select-none opacity-90",
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
  titleAccessory,
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
  const hasChildrenRow = Boolean(children);
  const hasMeta = Boolean(meta);
  const hasChips = Boolean(chips.length > 0 || fallbackChip);
  const hasLowerSection = hasChildrenRow || hasMeta || hasChips;
  const hasLeftBlock = hasChildrenRow || hasMeta;

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
        <div className="absolute inset-x-0 top-0 h-14 bg-linear-to-b from-white/72 to-transparent" />
      </div>

      <div className="relative z-10 space-y-3">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0 flex-1 max-w-[600px]">
            <div className="flex min-w-0 items-center gap-2">
              <h1 className="min-w-0 font-heading text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                {title}
              </h1>
              {titleAccessory ? <div className="shrink-0">{titleAccessory}</div> : null}
            </div>
            {description ? (
              <p className="mt-1 font-body text-[13.5px] text-zinc-600/90 leading-relaxed">{description}</p>
            ) : null}
          </div>
          {actions ? (
            <div
              className={cn(
                "flex w-full min-w-0 shrink-0 flex-wrap items-center gap-2 rounded-[20px] border border-zinc-200/85 bg-white/95 px-2 py-1.5 shadow-[0_8px_16px_-16px_rgba(15,23,42,0.36)]",
                "xl:w-auto xl:max-w-full xl:justify-end",
                actionsClassName
              )}
            >
              {actions}
            </div>
          ) : null}
        </div>

        {hasLowerSection ? (
          <div className="border-t border-zinc-200/75 pt-3">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
              {hasLeftBlock ? (
                <div className="min-w-0 flex-1 space-y-2">
                  {meta ? <div className="text-xs text-zinc-500/80">{meta}</div> : null}
                  {hasChildrenRow ? <div>{children}</div> : null}
                </div>
              ) : null}

              {hasChips ? (
                <div
                  className={cn(
                    "flex flex-wrap items-center gap-2 shrink-0 max-w-full",
                    hasLeftBlock ? "xl:justify-end" : "justify-end"
                  )}
                >
                  {chips.length > 0 ? chips.map((chip) => renderChip(chip)) : null}
                  {chips.length === 0 && fallbackChip ? renderChip(fallbackChip) : null}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
