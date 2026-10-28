"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface RegistrationModalContextType {
  isOpen: boolean;
  openRegistrationModal: () => void;
  closeRegistrationModal: () => void;
}

const RegistrationModalContext = createContext<RegistrationModalContextType | undefined>(undefined);

export function RegistrationModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openRegistrationModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeRegistrationModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Global listener: intercept clicks on any [data-open-register-modal] or href="#register"
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        '[data-open-register-modal], a[href="#register"], a[href$="#register"], a[href*="register=true"]'
      );
      if (target) {
        e.preventDefault();
        openRegistrationModal();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [openRegistrationModal]);

  // Open modal if page loads or changes with #register or ?register=true
  useEffect(() => {
    const checkUrlTrigger = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();

      const shouldOpen =
        hash === "#register" ||
        hash === "#registration" ||
        hash.includes("register") ||
        search.includes("register=true") ||
        search.includes("register=1") ||
        search.includes("modal=register") ||
        new URLSearchParams(window.location.search).has("register");

      if (shouldOpen) {
        openRegistrationModal();
      }
    };

    // Check on mount
    checkUrlTrigger();

    // Listen for hash changes & browser back/forward navigation
    window.addEventListener("hashchange", checkUrlTrigger);
    window.addEventListener("popstate", checkUrlTrigger);
    return () => {
      window.removeEventListener("hashchange", checkUrlTrigger);
      window.removeEventListener("popstate", checkUrlTrigger);
    };
  }, [openRegistrationModal]);

  return (
    <RegistrationModalContext.Provider
      value={{
        isOpen,
        openRegistrationModal,
        closeRegistrationModal,
      }}
    >
      {children}
    </RegistrationModalContext.Provider>
  );
}

export function useRegistrationModal() {
  const context = useContext(RegistrationModalContext);
  if (!context) {
    throw new Error("useRegistrationModal must be used within a RegistrationModalProvider");
  }
  return context;
}
