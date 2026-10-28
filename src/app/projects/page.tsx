import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import ProjectsAll from "@/components/sections/projects-all";

export const metadata: Metadata = {
  title: "Social Initiatives & Projects | Rakesh Ray",
  description: "Explore community infrastructure, public welfare programs, and youth development initiatives led by Rakesh Ray in Parsa, Madhesh Province, Nepal.",
};

export default function ProjectsPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading="Projects"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Projects" }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <ProjectsAll />
      </main>
    </React.Fragment>
  );
}
