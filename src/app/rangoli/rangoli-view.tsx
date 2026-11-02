"use client";

import React, { useState, useEffect } from "react";
import RangoliHero from "@/components/sections/rangoli/rangoli-hero";
import RangoliPrizes from "@/components/sections/rangoli/rangoli-prizes";
import RangoliGallery from "@/components/sections/rangoli/rangoli-gallery";
import RangoliHowItWorks from "@/components/sections/rangoli/rangoli-how-it-works";
import RangoliFAQs from "@/components/sections/rangoli/rangoli-faqs";
import RangoliSubmitModal from "@/components/sections/rangoli/rangoli-submit-modal";

interface RangoliViewProps {
  initialOpenSubmitModal?: boolean;
}

export default function RangoliView({ initialOpenSubmitModal = false }: RangoliViewProps) {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(initialOpenSubmitModal);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Auto-open registration modal if user lands via URL param/hash or direct /rangoli/register path
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const isRegisterPath = window.location.pathname.endsWith("/rangoli/register") || window.location.pathname.endsWith("/rangoli/register/");
      const isRegisterParam = url.searchParams.get("register") === "1" || url.searchParams.get("submit") === "1";
      const isRegisterHash = window.location.hash === "#register" || window.location.hash === "#submit";

      if (initialOpenSubmitModal || isRegisterPath || isRegisterParam || isRegisterHash) {
        setIsSubmitModalOpen(true);
      }
    }
  }, [initialOpenSubmitModal]);

  return (
    <React.Fragment>
      <RangoliHero onOpenSubmitModal={() => setIsSubmitModalOpen(true)} />
      <main className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
        <RangoliPrizes />
        <RangoliGallery
          onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          refreshTrigger={refreshTrigger}
        />
        <RangoliHowItWorks />
        <RangoliFAQs />
      </main>

      {/* Rangoli Submission Modal */}
      <RangoliSubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmittedSuccess={() => {
          setRefreshTrigger((n) => n + 1);
        }}
      />
    </React.Fragment>
  );
}
