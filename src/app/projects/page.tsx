import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import ProjectsAll from "@/components/sections/projects-all";

export const metadata: Metadata = {
  title: "Our Projects - Rakesh Ray",
  description: "Rakesh Ray is a NextJS Interior Design Landing Page Template with a modern design and a premium visual experience.",
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
