"use client";

import * as React from "react";
import { Reorder as FramerReorder } from "framer-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface ReorderGroupProps<T> extends Omit<React.ComponentProps<typeof FramerReorder.Group>, "values" | "onReorder"> {
  values: T[];
  onReorder: (newOrder: T[]) => void;
  className?: string;
  children: React.ReactNode;
}

export function ReorderGroup<T>({ values, onReorder, className, children, ...props }: ReorderGroupProps<T>) {
  return (
    <FramerReorder.Group
      values={values}
      onReorder={onReorder}
      className={cn(className)}
      {...props}
    >
      {children}
    </FramerReorder.Group>
  );
}

export interface ReorderItemProps extends Omit<React.ComponentProps<typeof FramerReorder.Item>, "value"> {
  value: any;
  className?: string;
  children: React.ReactNode;
}

export function ReorderItem({ value, className, children, ...props }: ReorderItemProps) {
  return (
    <FramerReorder.Item
      value={value}
      className={cn(className)}
      {...props}
    >
      {children}
    </FramerReorder.Item>
  );
}
