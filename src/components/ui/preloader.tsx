"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/images/logo2x.png";
import { cn } from "@/lib/utils";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 900; // 900ms progress animation

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressPercent = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(progressPercent);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsLoaded(true);
          if (typeof window !== "undefined") {
            (window as unknown as { __PRELOADER_COMPLETE__?: boolean }).__PRELOADER_COMPLETE__ = true;
          }
          document.documentElement.setAttribute("data-loaded", "true");
          window.dispatchEvent(new Event("preloaderComplete"));
        }, 150);
        setTimeout(() => setIsMounted(false), 900);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-darker transition-all duration-700 ease-out select-none",
        isLoaded ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      )}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-primary/15 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6 text-center">
        {/* Brand Logo */}
        <div className="relative mb-8 transition-transform duration-500">
          <Image
            src={logo}
            alt="Rakesh Ray Logo"
            width={180}
            height={60}
            priority
            className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(196,154,108,0.35)]"
          />
        </div>

        {/* Loading Progress Bar Container */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4 relative">
          <div
            className="h-full bg-gradient-to-r from-primary-dark via-primary to-primary rounded-full shadow-[0_0_12px_var(--color-primary)] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Counter & Tagline */}
        <div className="flex items-center justify-between w-full text-xs uppercase tracking-widest font-medium text-white/60">
          <span>Curating Space</span>
          <span className="text-primary font-semibold tabular-nums">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
