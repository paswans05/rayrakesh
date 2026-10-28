import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import FaqsAll from "@/components/sections/faqs-all";

export const metadata: Metadata = {
  title: "FAQs | Rakesh Ray & Marathon Information",
  description: "Frequently asked questions about Rakesh Ray's public service initiatives, the 15 KM Rakesh Marathon, cash prizes, registration, and community programs.",
};

export default function AboutPage() {
  return (
    <React.Fragment>
      <PageHeader heading="Faqs" breadcrumb={[{ href: '/', label: 'Home' }, { label: 'Faqs' }]} />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <FaqsAll />
      </main>
    </React.Fragment>
  );
}
