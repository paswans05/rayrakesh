import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import RangoliSubmitForm from "@/components/sections/rangoli/rangoli-submit-form";

export const metadata: Metadata = {
  title: "Register Your Rangoli | Diwali Rangoli Festival 2026",
  description:
    "Submit your authentic handmade Rangoli photo for the Diwali Rangoli Festival. Exclusively for female artists in Parsa, Nepal. Win up to NPR 3,100 in prizes, medals for Top 10, and certificates for all!",
  keywords: [
    "Rangoli Submit",
    "Rangoli Registration",
    "Diwali Rangoli Festival",
    "रङ्गोली दर्ता",
    "रङ्गोली फाराम",
    "Parsa Rangoli Competition",
  ],
  openGraph: {
    title: "Register Your Rangoli — Diwali Festival 2026",
    description: "Upload your Rangoli photo, collect votes, and win grand cash prizes!",
    type: "website",
  },
};

export default function RangoliSubmitPage() {
  return (
    <div className="relative min-h-screen py-16 sm:py-24 px-4 bg-[#12051d] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Breadcrumb / Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/rangoli"
            className="text-xs sm:text-sm font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors"
          >
            ← Back to Rangoli Festival
          </Link>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-200">
            Diwali 2026
          </span>
        </div>

        {/* The Standalone Submit Form */}
        <RangoliSubmitForm />
      </div>
    </div>
  );
}
