"use client";

import * as React from "react";
import { ShieldAlert, ShieldCheck, Terminal, AlertTriangle } from "lucide-react";
import { cn } from "@aayurt/8848-ui-utils";
import { Button } from "../button";
import { TelemetryChip } from "./telemetry-chip";

export type ApprovalSeverity = "critical" | "warning" | "standard";

export interface ApprovalPromptProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  severity?: ApprovalSeverity;
  commandSnippet?: string;
  altitude?: string;
  onApprove?: () => void;
  onReject?: () => void;
  isApproving?: boolean;
}

export const ApprovalPrompt = React.forwardRef<HTMLDivElement, ApprovalPromptProps>(
  (
    {
      className,
      title,
      description,
      severity = "critical",
      commandSnippet,
      altitude = "8,480m",
      onApprove,
      onReject,
      isApproving = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full rounded-ridge border bg-white p-5 shadow-ridge dark:bg-slate-950 transition-all",
          severity === "critical"
            ? "border-red-200 dark:border-red-950/60"
            : severity === "warning"
            ? "border-amber-200 dark:border-amber-950/60"
            : "border-border",
          className
        )}
        {...props}
      >
        {/* Header with Severity Chip and Altitude */}
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div className="flex items-center gap-2">
            {severity === "critical" && (
              <span className="inline-flex items-center gap-1 rounded-valley bg-red-50 dark:bg-red-950/40 px-2 py-0.5 text-xs font-mono font-semibold text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900">
                <ShieldAlert className="h-3.5 w-3.5" />
                PERMISSION REQUIRED
              </span>
            )}
            {severity === "warning" && (
              <span className="inline-flex items-center gap-1 rounded-valley bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                <AlertTriangle className="h-3.5 w-3.5" />
                CONFIRM ACTION
              </span>
            )}
            {severity === "standard" && (
              <span className="inline-flex items-center gap-1 rounded-valley bg-alpine-50 dark:bg-alpine-950/40 px-2 py-0.5 text-xs font-mono font-semibold text-alpine-600 dark:text-alpine-400 border border-alpine-200 dark:border-alpine-900">
                <ShieldCheck className="h-3.5 w-3.5" />
                REVIEW
              </span>
            )}
          </div>

          <TelemetryChip variant="summit" size="sm">
            {altitude}
          </TelemetryChip>
        </div>

        {/* Content Body */}
        <div className="py-3 space-y-1.5">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h4>
          {description && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {description}
            </p>
          )}
        </div>

        {/* Code / Command Snippet */}
        {commandSnippet && (
          <div className="my-2.5">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-t-valley bg-slate-900 text-slate-400 text-[11px] font-mono border-b border-slate-800">
              <Terminal className="h-3 w-3" />
              <span>Proposed execution</span>
            </div>
            <pre className="p-3 rounded-b-valley bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-900">
              {commandSnippet}
            </pre>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-border">
          <Button
            type="button"
            variant="trail"
            size="sm"
            onClick={onReject}
            disabled={isApproving}
          >
            Reject
          </Button>

          <Button
            type="button"
            variant="summit"
            size="sm"
            onClick={onApprove}
            loading={isApproving}
          >
            Authorize & Continue
          </Button>
        </div>
      </div>
    );
  }
);
ApprovalPrompt.displayName = "ApprovalPrompt";