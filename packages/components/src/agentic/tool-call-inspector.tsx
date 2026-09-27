"use client";

import * as React from "react";
import { ChevronRight, Wrench, Check, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@aayurt/8848-ui-utils";
import { TelemetryChip } from "./telemetry-chip";

export type ToolCallStatus = "calling" | "success" | "failed";

export interface ToolCallInspectorProps extends React.HTMLAttributes<HTMLDivElement> {
  toolName: string;
  duration?: string;
  elevation?: string;
  status?: ToolCallStatus;
  args?: Record<string, unknown> | string;
  result?: Record<string, unknown> | string;
  defaultOpen?: boolean;
}

export const ToolCallInspector = React.forwardRef<HTMLDivElement, ToolCallInspectorProps>(
  (
    {
      className,
      toolName,
      duration = "120ms",
      elevation = "7,120m",
      status = "success",
      args,
      result,
      defaultOpen = false,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    const formatContent = (val: Record<string, unknown> | string | undefined) => {
      if (!val) return "";
      if (typeof val === "string") return val;
      return JSON.stringify(val, null, 2);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full rounded-ridge border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 overflow-hidden shadow-basecamp transition-all",
          className
        )}
        {...props}
      >
        {/* Clickable Header Bar */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-3 py-2.5 text-left text-xs hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <ChevronRight
              className={cn(
                "h-3.5 w-3.5 text-slate-400 transition-transform duration-normal",
                isOpen && "rotate-90"
              )}
            />
            <div className="flex items-center gap-1.5 font-mono font-semibold text-slate-800 dark:text-slate-200">
              <Wrench className="h-3.5 w-3.5 text-slate-500" />
              <span>{toolName}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {elevation && (
              <TelemetryChip variant="altitude" size="sm">
                {elevation}
              </TelemetryChip>
            )}

            {duration && (
              <span className="font-mono text-[11px] text-slate-400">
                {duration}
              </span>
            )}

            <div className="flex items-center">
              {status === "calling" && (
                <Loader2 className="h-3.5 w-3.5 text-alpine-500 animate-spin" />
              )}
              {status === "success" && (
                <Check className="h-3.5 w-3.5 text-emerald-500" />
              )}
              {status === "failed" && (
                <AlertCircle className="h-3.5 w-3.5 text-red-500" />
              )}
            </div>
          </div>
        </button>

        {/* Collapsible Details Body */}
        {isOpen && (
          <div className="border-t border-slate-100 p-3 text-xs dark:border-slate-800 space-y-2.5 bg-slate-50/40 dark:bg-slate-900/20">
            {args && (
              <div>
                <div className="text-[10px] uppercase font-mono font-semibold tracking-wider text-slate-400 pb-1">
                  Parameters
                </div>
                <pre className="overflow-x-auto rounded-valley bg-slate-100 dark:bg-slate-900 p-2.5 font-mono text-[11px] text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-800">
                  {formatContent(args)}
                </pre>
              </div>
            )}

            {result && (
              <div>
                <div className="text-[10px] uppercase font-mono font-semibold tracking-wider text-slate-400 pb-1">
                  Result
                </div>
                <pre className="max-h-48 overflow-auto rounded-valley bg-slate-100 dark:bg-slate-900 p-2.5 font-mono text-[11px] text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-800">
                  {formatContent(result)}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);
ToolCallInspector.displayName = "ToolCallInspector";