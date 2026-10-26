"use client";

import { useState, useEffect } from "react";
import { useIntersectionReveal } from "./useIntersectionReveal";
import { cn } from "@/lib/utils";

export interface UseAnimatedCounterOptions {
  duration?: number;
  trigger?: boolean;
  decimals?: number;
}

/**
 * Reusable custom hook to animate a numeric counter from 0 to endValue.
 * Uses requestAnimationFrame with cubic ease-out interpolation.
 */
export function useAnimatedCounter(
  endValue: number,
  options: UseAnimatedCounterOptions = {}
): string {
  const { duration = 1800, trigger = true, decimals = 0 } = options;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Cubic ease-out formula for natural deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * endValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration, trigger]);

  if (decimals > 0) {
    return count.toFixed(decimals);
  }
  return Math.floor(count).toLocaleString();
}

export interface CountUpProps extends UseAnimatedCounterOptions {
  end: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * Inline CountUp component for rendering animated numbers directly in JSX.
 * Automatically triggers counting when scrolled into view if trigger is omitted.
 * Uses tabular-nums to prevent horizontal wiggling during counting animation.
 */
export function CountUp({ end, prefix = "", suffix = "", className, trigger, ...options }: CountUpProps) {
  const { ref, isVisible } = useIntersectionReveal<HTMLSpanElement>();
  const activeTrigger = trigger !== undefined ? trigger : isVisible;
  const value = useAnimatedCounter(end, { ...options, trigger: activeTrigger });

  return (
    <span ref={ref} className={cn("tabular-nums inline-block", className)}>
      {prefix}{value}{suffix}
    </span>
  );
}
