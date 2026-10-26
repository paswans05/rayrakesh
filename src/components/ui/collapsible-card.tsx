"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "@/components/icons";
import { cn } from "@/lib/utils";

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

/* Fallback CSS breakpoint pixel values */
const FALLBACK_BREAKPOINTS: Record<Breakpoint, string> = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1400px",
};

/**
 * Hook to check if screen matches minimum width for a specified CSS breakpoint variable.
 */
export function useBreakpointCheck(breakpoint: Breakpoint = "lg"): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const getBreakpointValue = (): string => {
      if (typeof window === "undefined") return FALLBACK_BREAKPOINTS[breakpoint];

      const computedVal = getComputedStyle(document.documentElement)
        .getPropertyValue(`--breakpoint-${breakpoint}`)
        .trim();

      return computedVal || FALLBACK_BREAKPOINTS[breakpoint];
    };

    const breakpointVal = getBreakpointValue();
    const mediaQueryString = `(min-width: ${breakpointVal})`;
    const mql = window.matchMedia(mediaQueryString);

    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setMatches(e.matches);
    };

    onChange(mql);

    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } else {
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }
  }, [breakpoint]);

  return matches;
}

export interface CollapsibleCardProps {
  title: React.ReactNode;
  children: React.ReactNode;
  /**
   * Tailwind CSS breakpoint at which the card is PERMANENTLY EXPANDED (non-collapsible).
   * Below this breakpoint, the card acts as a collapsible accordion card.
   * Options: "sm" | "md" | "lg" | "xl" | "2xl" (Defaults to "lg")
   */
  expanded?: Breakpoint;
  defaultOpen?: boolean;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
}

/**
 * Reusable CollapsibleCard Component.
 * Below `expanded` breakpoint, acts as a collapsible accordion.
 * At or above `expanded` breakpoint, stays permanently open.
 */
export function CollapsibleCard({
  title,
  children,
  expanded = "lg",
  defaultOpen = false,
  className,
  headerClassName,
  contentClassName,
}: CollapsibleCardProps) {
  const isBreakpointMatched = useBreakpointCheck(expanded);
  const [toggled, setToggled] = useState(defaultOpen);

  const isExpanded = isBreakpointMatched || toggled;

  return (
    <div className={cn("bg-primary/10", className)}>
      <button type="button" className={cn("w-full bg-primary flex items-center justify-between text-left transition-all", isBreakpointMatched ? "pointer-events-none cursor-default" : "cursor-pointer", headerClassName)}
        onClick={() => {
          if (!isBreakpointMatched) {
            setToggled((prev) => !prev);
          }
        }}>
        <div className={cn("w-full  flex items-center justify-between font-medium uppercase text-darker text-base")}>
          <span>{title}</span>
          {!isBreakpointMatched && (
            <div className="p-1 rounded-full bg-primary-light text-darker transition-transform duration-300">
              <ChevronDown className={cn("size-5 transition-transform duration-300", toggled && "rotate-180")} />
            </div>
          )}
        </div>
      </button>

      {/* Content Panel */}
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden",
          isExpanded ? "block" : "hidden",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
