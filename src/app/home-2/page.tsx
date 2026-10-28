import React from "react";
import type { Metadata } from "next";
import HeroTwo from "@/components/sections/hero-two";
import AboutTwo from "@/components/sections/about-two";
import ServicesTwo from "@/components/sections/services-two";
import Projects from "@/components/sections/projects";
import CTA from "@/components/sections/cta";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Reviews from "@/components/sections/reviews";
import Blog from "@/components/sections/blog";

export const metadata: Metadata = {
  title: "Rakesh Ray | Public Service & Vision",
  description: "Official portal of Rakesh Ray — Politician, social worker, and community builder in Birgunj, Parsa, Madhesh Province, Nepal.",
};

export default function HomeTwo() {
  return (
    <React.Fragment>
      <HeroTwo />
      <main className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
        <AboutTwo />
        <ServicesTwo />
        <Projects />
        <CTA />
        <WhyChooseUs />
        <Reviews />
        <Blog />
      </main>
    </React.Fragment>
  );
}
