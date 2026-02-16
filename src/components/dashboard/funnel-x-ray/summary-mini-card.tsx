"use client";

import { motion } from "framer-motion";

export function SummaryMiniCard({
  icon,
  label,
  value,
  helper,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  helper: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.09, ease: "easeOut" }}
      className="rounded-xl border border-zinc-200/80 bg-white/80 px-3 py-2.5 text-left transition-colors duration-[120ms] ease-out hover:bg-zinc-100/60"
      onClick={onClick}
    >
      <div className="mb-1 flex items-center gap-1.5 text-zinc-500">{icon}</div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.07em] text-zinc-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-zinc-900">{value}</p>
      <p className="mt-0.5 text-[10px] text-zinc-500">{helper}</p>
    </motion.button>
  );
}
