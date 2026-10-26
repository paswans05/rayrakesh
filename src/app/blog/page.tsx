import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import BlogAll from "@/components/sections/blog-all";

export const metadata: Metadata = {
  title: "Our Blog",
  description: "Rakesh Ray is a NextJS Interior Design Landing Page Template with a modern design and a premium visual experience.",
};

export default function BlogPage() {
  return (
    <React.Fragment>
      <PageHeader
        heading="Our Blog"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Blog" }]}
      />
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <BlogAll />
      </main>
    </React.Fragment>
  );
}
