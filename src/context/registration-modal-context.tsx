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
        '[data-open-register-modal], a[href="#register"], a[href$="#register"]'
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

  // Open modal if page loads with #register hash
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#register") {
      openRegistrationModal();
    }
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

