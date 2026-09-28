"use client";

import * as React from "react";
import { cn } from "@aayurt/8848-ui-utils";

const TypographyH1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "scroll-m-20 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white",
        className
      )}
      {...props}
    />
  )
);
TypographyH1.displayName = "TypographyH1";

const TypographyH2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "scroll-m-20 text-2xl font-bold tracking-tight text-slate-900 dark:text-white",
        className
      )}
      {...props}
    />
  )
);
TypographyH2.displayName = "TypographyH2";

const TypographyH3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight text-slate-900 dark:text-white",
        className
      )}
      {...props}
    />
  )
);
TypographyH3.displayName = "TypographyH3";

const TypographyH4 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight text-slate-900 dark:text-white",
        className
      )}
      {...props}
    />
  )
);
TypographyH4.displayName = "TypographyH4";

const TypographyP = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm leading-relaxed text-slate-600 dark:text-slate-300", className)} {...props} />
  )
);
TypographyP.displayName = "TypographyP";

const TypographyLead = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-lg leading-relaxed text-slate-700 dark:text-slate-200", className)} {...props} />
  )
);
TypographyLead.displayName = "TypographyLead";

const TypographyMuted = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-xs font-mono text-slate-500 dark:text-slate-400", className)} {...props} />
  )
);
TypographyMuted.displayName = "TypographyMuted";

const TypographyBlockquote = React.forwardRef<HTMLQuoteElement, React.HTMLAttributes<HTMLQuoteElement>>(
  ({ className, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn(
        "border-l-2 border-alpine-500 pl-4 text-sm italic text-slate-600 dark:border-alpine-400 dark:text-slate-300",
        className
      )}
      {...props}
    />
  )
);
TypographyBlockquote.displayName = "TypographyBlockquote";

const TypographyInlineCode = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "relative rounded-valley bg-slate-100 px-1.5 py-0.5 font-mono text-xs font-semibold text-alpine-700 dark:bg-slate-800 dark:text-alpine-300",
        className
      )}
      {...props}
    />
  )
);
TypographyInlineCode.displayName = "TypographyInlineCode";

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyLead,
  TypographyMuted,
  TypographyBlockquote,
  TypographyInlineCode,
};
