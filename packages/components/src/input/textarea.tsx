"use client";

import * as React from "react";
import { cn } from "@aayurt/8848-ui-utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  label?: string;
  hint?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, hint, disabled, required, id, ...props }, ref) => {
    const textareaId = id || `textarea-${React.useId()}`;
    const hintId = hint ? `${textareaId}-hint` : undefined;
    const errorId = error ? `${textareaId}-error` : undefined;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-1.5 block text-sm font-medium text-slate-900 dark:text-slate-100"
          >
            {label}
            {required && <span className="ml-1 text-sunrise-500" aria-hidden="true">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[100px] w-full rounded-ridge border border-slate-300 bg-background px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400",
            "transition-colors duration-fast resize-y",
            "focus:border-alpine-500 focus:outline-none focus:ring-2 focus:ring-alpine-500/20",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-100 dark:disabled:bg-slate-800",
            "dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500",
            "dark:focus:border-alpine-400 dark:focus:ring-alpine-400/20",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500/20 dark:border-red-500 dark:focus:border-red-500",
            className
          )}
          ref={ref}
          disabled={disabled}
          required={required}
          aria-invalid={error}
          aria-describedby={cn(hintId, errorId)}
          {...props}
        />
        {hint && !error && (
          <p id={hintId} className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className="mt-1.5 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };