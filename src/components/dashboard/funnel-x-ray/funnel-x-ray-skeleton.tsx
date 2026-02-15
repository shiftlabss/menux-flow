"use client";

import { Fragment } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function FunnelXRaySkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-12">
      <div className="space-y-3 lg:col-span-7">
        <div className="hidden items-stretch gap-2 md:flex md:flex-wrap xl:flex-nowrap">
          {Array.from({ length: 5 }).map((_, index) => (
            <Fragment key={`sk-flow-${index}`}>
              <Skeleton className="h-[86px] flex-[1_1_148px] rounded-xl before:[animation-duration:900ms]" />
              {index < 4 && (
                <Skeleton className="h-3 min-w-[46px] flex-1 rounded-full before:[animation-duration:900ms] md:max-w-[64px]" />
              )}
            </Fragment>
          ))}
        </div>

        <div className="space-y-2 md:hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <Fragment key={`sk-flow-mobile-${index}`}>
              <Skeleton className="h-[84px] rounded-xl before:[animation-duration:900ms]" />
              {index < 4 && (
                <div className="flex justify-center">
                  <Skeleton className="h-6 w-2 rounded-full before:[animation-duration:900ms]" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={`sk-summary-${index}`}
              className="h-20 rounded-xl before:[animation-duration:900ms]"
            />
          ))}
        </div>
        <Skeleton className="h-32 rounded-xl before:[animation-duration:900ms]" />
      </div>

      <div className="space-y-3 lg:col-span-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton
            key={`sk-diagnostic-${index}`}
            className="h-32 rounded-xl before:[animation-duration:900ms]"
          />
        ))}
      </div>
    </div>
  );
}
