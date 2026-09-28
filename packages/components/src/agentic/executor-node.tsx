"use client";

import * as React from "react";
import { Cpu } from "lucide-react";
import { cn } from "@aayurt/8848-ui-utils";
import { TelemetryChip } from "./telemetry-chip";

export interface ExecutorNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  slotId: string;
  status: "idle" | "running" | "verifying" | "offline";
  model?: string;
  taskId?: string;
  progress?: number; // 0 to 100
}

export const ExecutorNode = React.forwardRef<HTMLDivElement, ExecutorNodeProps>(
  (
    {
      className,
      slotId,
      status = "running",
      model = "opencode/nemotron",
      taskId,
      progress = 65,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col justify-between rounded-ridge border border-border bg-white p-4 shadow-trail transition-all hover:border-input dark:bg-slate-950 w-full max-w-xs",
          className
        )}
        {...props}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 tracking-wider uppercase">
            <Cpu className="h-3.5 w-3.5 text-alpine-500" />
            <span>{slotId}</span>
          </div>

          <TelemetryChip
            variant={status === "running" ? "live" : status === "verifying" ? "summit" : "muted"}
            size="sm"
          >
            {status}
          </TelemetryChip>
        </div>

        {/* Task Details */}
        <div className="py-2 space-y-1">
          {taskId && (
            <div className="text-xs font-mono font-medium text-slate-900 dark:text-slate-100">
              Task #{taskId}
            </div>
          )}
          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
            {model}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="pt-2">
          <div className="h-1.5 w-full overflow-hidden rounded-summit bg-slate-100 dark:bg-slate-900">
            <div
              className={cn(
                "h-full rounded-summit transition-all duration-slow",
                status === "running" && "bg-alpine-500",
                status === "verifying" && "bg-amber-500",
                status === "idle" && "bg-slate-400",
                status === "offline" && "bg-slate-300"
              )}
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        </div>
      </div>
    );
  }
);
ExecutorNode.displayName = "ExecutorNode";