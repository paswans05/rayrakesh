import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import TeamFeatured from "@/components/sections/team-featured";
import TeamShowcase from "@/components/sections/team-showcase";

export const metadata: Metadata = {
  title: "Team Members - Rakesh Ray",
  description: "Rakesh Ray is a NextJS Interior Design Landing Page Template with a modern design and a premium visual experience.",
};

export default function TeamPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading="Team Members"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Team Members" }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <TeamFeatured />
        <TeamShowcase />
      </main>
    </React.Fragment>
  );
}
