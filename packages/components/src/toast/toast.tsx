"use client";

import * as React from "react";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group font-sans"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-900 group-[.toaster]:border-border group-[.toaster]:shadow-ridge group-[.toaster]:rounded-ridge dark:group-[.toaster]:bg-slate-950 dark:group-[.toaster]:text-slate-100",
          description: "group-[.toast]:text-slate-500 dark:group-[.toast]:text-slate-400 font-sans text-xs",
          actionButton:
            "group-[.toast]:bg-alpine-600 group-[.toast]:text-white font-sans text-xs rounded-valley",
          cancelButton:
            "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-600 font-sans text-xs rounded-valley dark:group-[.toast]:bg-slate-800 dark:group-[.toast]:text-slate-300",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };