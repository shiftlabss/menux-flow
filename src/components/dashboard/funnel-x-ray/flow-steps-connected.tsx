"use client";

import { Fragment } from "react";
import type { FlowStageId, FlowStage, FlowTransition } from "./funnel-config";
import { FlowStepCard } from "./flow-step-card";
import { FlowConnector } from "./flow-connector";

export function FlowStepsConnected({
  stages,
  transitions,
  activeStageId,
  bottleneckToStageId,
  onHoverStage,
  onOpenStage,
}: {
  stages: FlowStage[];
  transitions: FlowTransition[];
  activeStageId: FlowStageId;
  bottleneckToStageId: FlowStageId | null;
  onHoverStage: (stageId: FlowStageId) => void;
  onOpenStage: (stageId: FlowStageId) => void;
}) {
  return (
    <>
      <div className="hidden items-stretch gap-2 md:flex md:flex-wrap xl:flex-nowrap">
        {stages.map((stage, index) => (
          <Fragment key={stage.id}>
            <FlowStepCard
              stage={stage}
              active={activeStageId === stage.id}
              onHoverStage={onHoverStage}
              onOpenStage={onOpenStage}
              compact={false}
            />
            {index < transitions.length && (
              <FlowConnector
                transition={transitions[index]}
                isBottleneck={bottleneckToStageId === transitions[index].to.id}
                orientation="horizontal"
                delay={index * 0.03}
              />
            )}
          </Fragment>
        ))}
      </div>

      <div className="space-y-2 md:hidden">
        {stages.map((stage, index) => (
          <Fragment key={`mobile-${stage.id}`}>
            <FlowStepCard
              stage={stage}
              active={activeStageId === stage.id}
              onHoverStage={onHoverStage}
              onOpenStage={onOpenStage}
              compact
            />
            {index < transitions.length && (
              <FlowConnector
                transition={transitions[index]}
                isBottleneck={bottleneckToStageId === transitions[index].to.id}
                orientation="vertical"
                delay={index * 0.03}
              />
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
}
