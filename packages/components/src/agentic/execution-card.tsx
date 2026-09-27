"use client";

import * as React from "react";
import { Check, Circle, Loader2 } from "lucide-react";
import { cn } from "@aayurt/8848-ui-utils";
import { TelemetryChip } from "./telemetry-chip";

export type ExecutionStepStatus = "completed" | "in_progress" | "pending" | "failed";

export interface ExecutionStep {
  id: string;
  label: string;
  status: ExecutionStepStatus;
  elevation?: string;
  detail?: string;
}

export interface ExecutionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  status?: "planning" | "executing" | "completed" | "failed";
  altitude?: string;
  steps?: ExecutionStep[];
  tokens?: string;
  latency?: string;
}

export const ExecutionCard = React.forwardRef<HTMLDivElement, ExecutionCardProps>(
  (
    {
      className,
      title,
      subtitle,
      status = "executing",
      altitude = "8,240m",
      steps = [],
      tokens,
      latency,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-ridge border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 p-5 shadow-trail transition-shadow hover:shadow-ridge",
          className
        )}
        {...props}
      >
        {/* Top Header with Status and Altitude */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              {status === "executing" && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alpine-400 opacity-75" />
              )}
              <span
                className={cn(
                  "relative inline-flex rounded-full h-2 w-2",
                  status === "executing" && "bg-alpine-500",
                  status === "completed" && "bg-emerald-500",
                  status === "failed" && "bg-red-500",
                  status === "planning" && "bg-amber-500"
                )}
              />
            </span>
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300">
              {status}
            </span>
          </div>

          <TelemetryChip variant="summit" size="sm">
            {altitude}
          </TelemetryChip>
        </div>

        {/* Agent Info */}
        <div className="pt-3 pb-4">
          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
            {title}
          </h4>
          {subtitle && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Pipeline Execution Steps */}
        {steps.length > 0 && (
          <div className="space-y-2 py-2">
            {steps.map((step) => {
              return (
                <div
                  key={step.id}
                  className="flex items-center justify-between text-xs py-1 px-2 rounded-valley bg-slate-50/70 dark:bg-slate-900/50"
                >
                  <div className="flex items-center gap-2">
                    {step.status === "completed" && (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    )}
                    {step.status === "in_progress" && (
                      <Loader2 className="h-3.5 w-3.5 text-alpine-500 animate-spin" />
                    )}
                    {step.status === "pending" && (
                      <Circle className="h-3 w-3 text-slate-400 opacity-40" />
                    )}
                    <span
                      className={cn(
                        "font-medium",
                        step.status === "completed" && "text-slate-700 dark:text-slate-300",
                        step.status === "in_progress" && "text-alpine-600 dark:text-alpine-400 font-semibold",
                        step.status === "pending" && "text-slate-400"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>

                  {step.elevation && (
                    <span className="font-mono text-[10px] text-slate-400">
                      {step.elevation}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {children}

        {/* Telemetry Footer */}
        {(tokens || latency) && (
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-400">
            {latency && <span>LATENCY: {latency}</span>}
            {tokens && <span>TOKENS: {tokens}</span>}
          </div>
        )}
      </div>
    );
  }
);
ExecutionCard.displayName = "ExecutionCard";