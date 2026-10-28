"use client";

import React from "react";
import { useLanguage, type Language } from "@/context/language-context";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "topbar" | "navbar" | "drawer";
}

export function LanguageSwitcher({ className, variant = "navbar" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "topbar") {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-full p-0.5 bg-black/25 border border-white/20 backdrop-blur-sm text-[11px] font-bold tracking-wide",
          className
        )}
      >
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-label="Switch to English"
          className={cn(
            "px-2.5 py-0.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1",
            language === "en"
              ? "bg-white text-darker shadow-sm font-black"
              : "text-white/80 hover:text-white"
          )}
        >
          <span>EN</span>
        </button>

        <button
          type="button"
          onClick={() => setLanguage("ne")}
          aria-label="नेपाली भाषामा बदल्नुहोस्"
          className={cn(
            "px-2.5 py-0.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1",
            language === "ne"
              ? "bg-primary text-darker shadow-sm font-black"
              : "text-white/80 hover:text-white"
          )}
        >
          <span>नेपाली</span>
        </button>
      </div>
    );
  }

  if (variant === "drawer") {
    return (
      <div className={cn("flex flex-col gap-2 p-3 rounded-2xl bg-white/5 border border-white/10 my-3", className)}>
        <span className="text-[11px] uppercase tracking-wider text-white/50 font-bold px-1">
          {language === "ne" ? "भाषा छनोट (Language)" : "Choose Language"}
        </span>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={cn(
              "py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer",
              language === "en"
                ? "bg-white text-darker shadow-md"
                : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
            )}
          >
            <span>🇬🇧 English</span>
          </button>
          <button
            type="button"
            onClick={() => setLanguage("ne")}
            className={cn(
              "py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer",
              language === "ne"
                ? "bg-primary text-darker shadow-md"
                : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
            )}
          >
            <span>🇳🇵 नेपाली</span>
          </button>
        </div>
      </div>
    );
  }

  // Default navbar variant
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-xl p-1 bg-white/10 border border-white/15 backdrop-blur-md text-xs font-bold",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="English"
        className={cn(
          "px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer text-xs",
          language === "en"
            ? "bg-white text-darker shadow-sm font-black"
            : "text-white/80 hover:text-white hover:bg-white/10"
        )}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("ne")}
        aria-label="नेपाली"
        className={cn(
          "px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer text-xs font-medium",
          language === "ne"
            ? "bg-primary text-darker shadow-sm font-black"
            : "text-white/80 hover:text-white hover:bg-white/10"
        )}
      >
        नेपाली
      </button>
    </div>
  );
}

export default LanguageSwitcher;

