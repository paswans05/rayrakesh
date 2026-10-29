"use client";

import React, { useState } from "react";
import RangoliHero from "@/components/sections/rangoli/rangoli-hero";
import RangoliPrizes from "@/components/sections/rangoli/rangoli-prizes";
import RangoliGallery from "@/components/sections/rangoli/rangoli-gallery";
import RangoliHowItWorks from "@/components/sections/rangoli/rangoli-how-it-works";
import RangoliFAQs from "@/components/sections/rangoli/rangoli-faqs";
import RangoliSubmitModal from "@/components/sections/rangoli/rangoli-submit-modal";

export default function RangoliView() {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  return (
    <React.Fragment>
      <RangoliHero onOpenSubmitModal={() => setIsSubmitModalOpen(true)} />
      <main className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
        <RangoliPrizes />
        <RangoliGallery onOpenSubmitModal={() => setIsSubmitModalOpen(true)} />
        <RangoliHowItWorks />
        <RangoliFAQs />
      </main>

      {/* Rangoli Submission Modal */}
      <RangoliSubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmittedSuccess={() => {
          // Can refresh or let gallery re-fetch
        }}
      />
    </React.Fragment>
  );
}
