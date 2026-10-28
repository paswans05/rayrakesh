"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { en, type TranslationKey } from "@/translations/en";
import { ne } from "@/translations/ne";

export type Language = "en" | "ne";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey | string, fallback?: string) => string;
  isNepali: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "rakesh_marathon_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Initialize language on client mount from localStorage or cookie
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored === "en" || stored === "ne") {
        setLanguageState(stored);
      } else {
        // Optional: auto-detect user browser preference if Nepali
        const browserLang = navigator.language?.toLowerCase();
        if (browserLang.startsWith("ne")) {
          setLanguageState("ne");
        }
      }
    } catch {
      // Ignore localStorage errors
    }
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.cookie = `${STORAGE_KEY}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // Ignore
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "ne" : "en");
  }, [language, setLanguage]);

  const t = useCallback(
    (key: TranslationKey | string, fallback?: string): string => {
      const dict = language === "ne" ? ne : en;
      const val = (dict as Record<string, string>)[key];
      if (val !== undefined && val !== "") return val;

      // Fallback to English if missing in Nepali
      const enVal = (en as Record<string, string>)[key];
      if (enVal !== undefined && enVal !== "") return enVal;

      return fallback || key;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      isNepali: language === "ne",
    }),
    [language, setLanguage, toggleLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Provide safe fallback if called outside provider
    return {
      language: "en",
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: (key: string, fallback?: string) => (en as Record<string, string>)[key] || fallback || key,
      isNepali: false,
    };
  }
  return context;
}

