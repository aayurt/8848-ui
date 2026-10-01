"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { cn } from "@aayurt/8848-ui-utils";
import { Button } from "../button";

export interface PaginationProps {
  /** Current page (1-indexed) */
  page: number;
  /** Total number of pages */
  pageCount: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Number of sibling pages to show on each side of current page */
  siblingCount?: number;
  /** Number of boundary pages to show (first/last) */
  boundaryCount?: number;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
  /** Show previous/next buttons */
  showPrevNext?: boolean;
  /** Max width of the pagination container */
  maxWidth?: string;
  /** Custom className */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** ARIA label for the pagination nav */
  "aria-label"?: string;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      page,
      pageCount,
      onPageChange,
      siblingCount = 1,
      boundaryCount = 1,
      showFirstLast = true,
      showPrevNext = true,
      maxWidth = "max-w-md",
      className,
      disabled = false,
      "aria-label": ariaLabel = "Pagination",
    },
    ref
  ) => {
    // Clamp page to valid range
    const currentPage = Math.max(1, Math.min(page, pageCount));

    // Generate page numbers to show (using a Set to avoid duplicates)
    const pagesSet = new Set<number>();

    if (pageCount <= 1) {
      return null;
    }

    // Always show first boundaryCount pages
    for (let i = 1; i <= Math.min(boundaryCount, pageCount); i++) {
      pagesSet.add(i);
    }

    // Show siblings around current page
    const leftSiblingStart = Math.max(boundaryCount + 1, currentPage - siblingCount);
    const leftSiblingEnd = Math.min(currentPage - 1, pageCount - boundaryCount);
    for (let i = leftSiblingStart; i <= leftSiblingEnd; i++) {
      pagesSet.add(i);
    }

    // Current page
    pagesSet.add(currentPage);

    // Show siblings after current page
    const rightSiblingStart = currentPage + 1;
    const rightSiblingEnd = Math.min(currentPage + siblingCount, pageCount - boundaryCount);
    for (let i = rightSiblingStart; i <= rightSiblingEnd; i++) {
      pagesSet.add(i);
    }

    // Always show last boundaryCount pages
    const rightBoundaryStart = pageCount - boundaryCount + 1;
    for (let i = rightBoundaryStart; i <= pageCount; i++) {
      pagesSet.add(i);
    }

    // Convert to ordered array with ellipsis markers
    const sortedPages = Array.from(pagesSet).sort((a, b) => a - b);
    const pages: (number | "ellipsis")[] = [];

    sortedPages.forEach((pageNum, index) => {
      if (index > 0 && pageNum > sortedPages[index - 1] + 1) {
        pages.push("ellipsis");
      }
      pages.push(pageNum);
    });

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label={ariaLabel}
        className={cn(
          "flex items-center justify-center gap-1",
          maxWidth && "mx-auto",
          className
        )}
      >
        {/* First page */}
        {showFirstLast && (
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => onPageChange(1)}
            disabled={disabled || currentPage === 1}
            aria-label="First page"
            aria-disabled={disabled || currentPage === 1}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
        )}

        {/* Previous page */}
        {showPrevNext && (
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={disabled || currentPage === 1}
            aria-label="Previous page"
            aria-disabled={disabled || currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}

        {/* Page numbers */}
        <div className="flex items-center gap-0.5" role="group" aria-label="Pages">
          {pages.map((pageNum, index) =>
            pageNum === "ellipsis" ? (
              <span
                key={`ellipsis-${index}`}
                className="flex items-center justify-center px-2 text-slate-500 dark:text-slate-400 text-xs"
                aria-hidden="true"
              >
                …
              </span>
            ) : (
              <Button
                key={pageNum}
                variant={pageNum === currentPage ? "climber" : "ghost"}
                size="icon-sm"
                onClick={() => onPageChange(pageNum)}
                disabled={disabled}
                aria-label={`Page ${pageNum}`}
                aria-current={pageNum === currentPage ? "page" : undefined}
                className="min-w-[36px]"
              >
                {pageNum}
              </Button>
            )
          )}
        </div>

        {/* Next page */}
        {showPrevNext && (
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={disabled || currentPage === pageCount}
            aria-label="Next page"
            aria-disabled={disabled || currentPage === pageCount}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}

        {/* Last page */}
        {showFirstLast && (
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => onPageChange(pageCount)}
            disabled={disabled || currentPage === pageCount}
            aria-label="Last page"
            aria-disabled={disabled || currentPage === pageCount}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        )}
      </nav>
    );
  }
);
Pagination.displayName = "Pagination";

export interface PaginationInfoProps {
  /** Current page (1-indexed) */
  page: number;
  /** Page size */
  pageSize: number;
  /** Total number of items */
  totalItems: number;
  /** Custom className */
  className?: string;
}

export const PaginationInfo = ({
  page,
  pageSize,
  totalItems,
  className,
}: PaginationInfoProps) => {
  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalItems);
  const pageCount = Math.ceil(totalItems / pageSize);

  if (totalItems === 0) {
    return null;
  }

  return (
    <div className={cn("text-xs text-slate-500 dark:text-slate-400", className)}>
      Showing {startItem} to {endItem} of {totalItems} results ({pageCount} page{pageCount !== 1 ? "s" : ""})
    </div>
  );
};