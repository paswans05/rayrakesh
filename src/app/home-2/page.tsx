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
  title: "Rakesh Ray - Home 2",
  description: "Rakesh Ray is a NextJS Interior Design Landing Page Template with a modern design and a premium visual experience.",
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
