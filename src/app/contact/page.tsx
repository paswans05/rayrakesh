import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import Contact from "@/components/sections/conact";

export const metadata: Metadata = {
  title: "Contact Us | Rakesh Ray",
  description: "Rakesh Ray is a NextJS Interior Design Landing Page Template with a modern design and a premium visual experience.",
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
