import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import BlogAll from "@/components/sections/blog-all";

export const metadata: Metadata = {
  title: "News & Community Articles | Rakesh Ray",
  description: "Read the latest updates, social welfare articles, marathon highlights, and community development stories from Rakesh Ray in Birgunj, Parsa.",
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
