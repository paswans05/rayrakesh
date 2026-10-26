"use client";

import React from "react";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { cn } from "@/lib/utils";

/* Static Tailwind reveal-delay class arrays for JIT compiler scanning */
export const DELAY_100: string[] = [
  "reveal-delay-100",
  "reveal-delay-200",
  "reveal-delay-300",
  "reveal-delay-400",
  "reveal-delay-500",
  "reveal-delay-600",
  "reveal-delay-700",
  "reveal-delay-800",
  "reveal-delay-900",
  "reveal-delay-1000",
  "reveal-delay-1100",
  "reveal-delay-1200",
  "reveal-delay-1300",
  "reveal-delay-1400",
  "reveal-delay-1500",
  "reveal-delay-1600",
  "reveal-delay-1700",
  "reveal-delay-1800",
  "reveal-delay-1900",
  "reveal-delay-2000",
];

export const DELAY_50: string[] = [
  "reveal-delay-50",
  "reveal-delay-100",
  "reveal-delay-150",
  "reveal-delay-200",
  "reveal-delay-250",
  "reveal-delay-300",
  "reveal-delay-350",
  "reveal-delay-400",
  "reveal-delay-450",
  "reveal-delay-500",
  "reveal-delay-550",
  "reveal-delay-600",
  "reveal-delay-650",
  "reveal-delay-700",
  "reveal-delay-750",
  "reveal-delay-800",
  "reveal-delay-850",
  "reveal-delay-900",
  "reveal-delay-950",
  "reveal-delay-1000",
];

export function getDelayClass(
  index: number,
  delayArray: string[] = DELAY_50,
  range?: [number, number]
): string {
  if (!range) {
    return delayArray[index % delayArray.length];
  }

  const [start, end] = range;

  if (end !== -1) {
    const maxItems = end - start + 1;
    if (index >= maxItems) {
      return "";
    }
  }

  const targetIndex = start + index;
  return delayArray[targetIndex % delayArray.length];
}

export const DELAY_100_CLASSES = DELAY_100;
export const DELAY_50_CLASSES = DELAY_50;

export function getDelay100Class(index: number, range?: [number, number]): string {
  return getDelayClass(index, DELAY_100, range);
}

export function getDelay50Class(index: number, range?: [number, number]): string {
  return getDelayClass(index, DELAY_50, range);
}

export interface ScrollRevealProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "translate"> {
  stagger?: boolean;
  fade?: boolean;
  scale?: boolean;
  mode?: "stagger" | "item" | "fade" | "scale";
  delay?: number;
  direction?: "top" | "bottom" | "left" | "right" | "up" | "down";
  distance?: number | string;
  translate?: number | string;
  scaleFrom?: number;
  scaleTo?: number;
  scaleFromX?: number;
  scaleFromY?: number;
  scaleToX?: number;
  scaleToY?: number;
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Reusable ScrollReveal wrapper component.
 * Triggers animation specifically on this item or stagger group when it enters the viewport.
 * Supports mode="fade" | "scale", custom direction ("top" | "bottom" | "left" | "right"),
 * custom distance/translate values, dynamic scale values, and dynamic delay props.
 */
export const ScrollReveal = React.forwardRef<HTMLDivElement, ScrollRevealProps>(function ScrollReveal(
  {
    stagger = false,
    fade = false,
    scale = false,
    mode,
    delay,
    direction,
    distance,
    translate,
    scaleFrom,
    scaleTo,
    scaleFromX,
    scaleFromY,
    scaleToX,
    scaleToY,
    children,
    className,
    style,
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
    ...props
  }: ScrollRevealProps,
  forwardedRef
) {
  const { ref, isVisible } = useIntersectionReveal<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const handleRef = (node: HTMLDivElement | null) => {
    (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    if (typeof forwardedRef === "function") {
      forwardedRef(node);
    } else if (forwardedRef) {
      (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
  };

  const computedMode = mode || (scale ? "scale" : fade ? "fade" : stagger ? "stagger" : "item");
  const modeClass =
    computedMode === "stagger"
      ? "reveal-stagger"
      : computedMode === "fade"
        ? "reveal-fade"
        : computedMode === "scale"
          ? "reveal-scale"
          : "reveal-item";

  const delayClass = delay !== undefined ? `reveal-delay-${delay}` : "";
  const directionClass = direction ? `reveal-from-${direction.replace("down", "top").replace("up", "bottom")}` : "";

  const distVal = distance !== undefined ? distance : translate;
  const customStyle: React.CSSProperties = {
    ...style,
    ...(delay !== undefined ? { "--reveal-delay": `${delay}ms` } : {}),
  };

  if (distVal !== undefined) {
    const formattedVal = typeof distVal === "number" ? `${distVal}px` : distVal;
    if (direction === "top" || direction === "down") {
      (customStyle as Record<string, string>)["--reveal-translate-y"] =
        typeof distVal === "number" ? `${-Math.abs(distVal)}px` : distVal;
    } else if (direction === "bottom" || direction === "up") {
      (customStyle as Record<string, string>)["--reveal-translate-y"] = formattedVal;
    } else if (direction === "left") {
      (customStyle as Record<string, string>)["--reveal-translate-x"] = formattedVal;
    } else if (direction === "right") {
      (customStyle as Record<string, string>)["--reveal-translate-x"] =
        typeof distVal === "number" ? `${-Math.abs(distVal)}px` : distVal;
    } else {
      (customStyle as Record<string, string>)["--reveal-translate-y"] = formattedVal;
    }
  }

  if (scaleFrom !== undefined) {
    (customStyle as Record<string, string>)["--reveal-scale-x"] = `${scaleFrom / 100}`;
    (customStyle as Record<string, string>)["--reveal-scale-y"] = `${scaleFrom / 100}`;
  }
  if (scaleTo !== undefined) {
    (customStyle as Record<string, string>)["--reveal-scale-x-end"] = `${scaleTo / 100}`;
    (customStyle as Record<string, string>)["--reveal-scale-y-end"] = `${scaleTo / 100}`;
  }
  if (scaleFromX !== undefined) {
    (customStyle as Record<string, string>)["--reveal-scale-x"] = `${scaleFromX / 100}`;
  }
  if (scaleFromY !== undefined) {
    (customStyle as Record<string, string>)["--reveal-scale-y"] = `${scaleFromY / 100}`;
  }
  if (scaleToX !== undefined) {
    (customStyle as Record<string, string>)["--reveal-scale-x-end"] = `${scaleToX / 100}`;
  }
  if (scaleToY !== undefined) {
    (customStyle as Record<string, string>)["--reveal-scale-y-end"] = `${scaleToY / 100}`;
  }

  return (
    <div
      ref={handleRef}
      data-reveal={isVisible}
      className={cn(modeClass, delayClass, directionClass, className)}
      style={customStyle}
      {...props}
    >
      {children}
    </div>
  );
});
