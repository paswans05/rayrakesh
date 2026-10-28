import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import TeamFeatured from "@/components/sections/team-featured";
import TeamShowcase from "@/components/sections/team-showcase";

export const metadata: Metadata = {
  title: "Our Team & Volunteers | Rakesh Ray",
  description: "Meet the organizers, community volunteers, and campaign team working alongside Rakesh Ray for social progress in Parsa, Nepal.",
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
