import * as React from "react";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { cn } from "@aayurt/8848-ui-utils";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom border-collapse text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "bg-alpine-500/[0.08] dark:bg-alpine-500/10 [&_tr]:border-b [&_tr]:border-alpine-500/20 dark:[&_tr]:border-alpine-400/20",
      className
    )}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      "[&_tr:last-child]:border-0 [&_tr:nth-child(even)]:bg-slate-50/70 dark:[&_tr:nth-child(even)]:bg-white/[0.02]",
      className
    )}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t border-border bg-slate-50/50 font-medium dark:bg-slate-900/50 [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-border transition-colors hover:bg-alpine-500/[0.06] data-[state=selected]:bg-alpine-500/10 dark:hover:bg-alpine-500/10 dark:data-[state=selected]:bg-alpine-500/15",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-11 px-4 text-left align-middle font-mono text-xs font-semibold uppercase tracking-wider text-alpine-700 dark:text-alpine-300 [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("px-4 py-3 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-xs font-mono text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export type SortDirection = "asc" | "desc" | null;

export interface TableSortHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
}

const TableSortHead = React.forwardRef<HTMLTableCellElement, TableSortHeadProps>(
  ({ className, children, sortable = true, sortDirection = null, onSort, ...props }, ref) => {
    const Icon = sortDirection === "asc" ? ArrowUp : sortDirection === "desc" ? ArrowDown : ArrowUpDown;
    const resolvedAriaSort =
      props["aria-sort"] ?? (sortDirection === "asc" ? "ascending" : sortDirection === "desc" ? "descending" : undefined);

    return (
      <th
        ref={ref}
        aria-sort={resolvedAriaSort}
        className={cn(
          "h-11 px-4 text-left align-middle font-mono text-xs font-semibold uppercase tracking-wider text-alpine-700 dark:text-alpine-300 [&:has([role=checkbox])]:pr-0",
          className
        )}
        {...props}
      >
        {sortable ? (
          <button
            type="button"
            onClick={onSort}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-valley transition-colors hover:text-alpine-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:hover:text-alpine-400"
          >
            {children}
            <Icon
              aria-hidden="true"
              className={cn(
                "h-3.5 w-3.5",
                sortDirection ? "text-alpine-500 dark:text-alpine-400" : "text-slate-400 dark:text-slate-500"
              )}
            />
          </button>
        ) : (
          children
        )}
      </th>
    );
  }
);
TableSortHead.displayName = "TableSortHead";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableSortHead,
};