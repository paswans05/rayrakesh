import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import Contact from "@/components/sections/conact";

export const metadata: Metadata = {
  title: "Contact Rakesh Ray | Office & Community Outreach",
  description: "Get in touch with Rakesh Ray's office in Jingadawa, Birgunj, Parsa, Madhesh Province, Nepal. Reach out for public service matters, community welfare, and marathon inquiries.",
};

export default function ContactPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading="Contact Us"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Contact Us" }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Contact gap="default" />
      </main>
    </React.Fragment>
  );
}
