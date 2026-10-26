"use client";

import { useState, useEffect, useRef, RefObject } from "react";

export interface UseIntersectionRevealOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Reusable custom hook for detecting when an element enters the viewport.
 * Useful for triggering entrance scroll animations, counters, and reveals.
 * Respects preloader state and immediately reveals elements already passed on page reload.
 */
export function useIntersectionReveal<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionRevealOptions = {}
): { ref: RefObject<T | null>; isVisible: boolean } {
  const { threshold = 0.05, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if element was already scrolled past before/during page reload
    const rect = element.getBoundingClientRect();
    if (rect.bottom <= 0 || (rect.top < 0 && window.scrollY > 0)) {
      setIsVisible(true);
      return;
    }

    let cleanupPreloaderListener: (() => void) | null = null;
    let fallbackTimeout: NodeJS.Timeout | null = null;

    const triggerReveal = (target: Element, observer: IntersectionObserver) => {
      const isPreloaded =
        typeof document !== "undefined" &&
        (document.documentElement.getAttribute("data-loaded") === "true" ||
         (window as unknown as { __PRELOADER_COMPLETE__?: boolean }).__PRELOADER_COMPLETE__ ||
         !document.querySelector("[class*='z-[999']")); // fallback if preloader not in DOM

      if (isPreloaded) {
        setIsVisible(true);
        if (triggerOnce) observer.unobserve(target);
      } else {
        const onPreloaderComplete = () => {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(target);
          window.removeEventListener("preloaderComplete", onPreloaderComplete);
        };
        window.addEventListener("preloaderComplete", onPreloaderComplete);
        cleanupPreloaderListener = () => {
          window.removeEventListener("preloaderComplete", onPreloaderComplete);
        };

        // Safety fallback: ensure element is revealed even if preloader event was missed
        fallbackTimeout = setTimeout(() => {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(target);
        }, 1200);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerReveal(entry.target, observer);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (cleanupPreloaderListener) cleanupPreloaderListener();
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}
