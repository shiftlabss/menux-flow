"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function PipelineSkeleton({ stageCount }: { stageCount: number }) {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col overflow-hidden">
      {/* Header skeleton */}
      <div className="shrink-0 space-y-3 pb-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <Skeleton className="h-7 w-52" />
            <Skeleton className="h-4 w-72" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-[180px] rounded-full" />
            <Skeleton className="h-9 w-20 rounded-full" />
            <Skeleton className="h-9 w-16 rounded-full" />
            <Skeleton className="h-9 w-28 rounded-full" />
          </div>
        </div>
      </div>

      {/* Board skeleton */}
      <div className="flex flex-1 gap-3 overflow-hidden px-7 pb-2">
        {Array.from({ length: stageCount }).map((_, i) => (
          <div
            key={i}
            className="flex w-[320px] shrink-0 flex-col rounded-[var(--radius-bento-card)] bg-zinc-50/80 p-3"
          >
            {/* Column header skeleton */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Skeleton className="h-2.5 w-2.5 rounded-full" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-6 rounded-md" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>

            {/* Card skeletons */}
            {Array.from({ length: 2 - (i % 2) }).map((_, j) => (
              <div
                key={j}
                className="mb-2 rounded-[var(--radius-bento-card)] border border-zinc-200 bg-white p-3"
              >
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-4 rounded" />
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-3 w-12" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
