import React from "react";
import type { Metadata } from "next";
import HeroThree from "@/components/sections/hero-three";
import AboutThree from "@/components/sections/about-three";
import ServicesThree from "@/components/sections/services-three";
import Projects from "@/components/sections/projects";
import CTA from "@/components/sections/cta";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Reviews from "@/components/sections/reviews";
import Blog from "@/components/sections/blog";
import { NavbarConfig } from "@/context/navbar-context";

export const metadata: Metadata = {
  title: "Rakesh Ray - Home 3",
  description: "Rakesh Ray is a NextJS Interior Design Landing Page Template with a modern design and a premium visual experience.",
};

export default function HomeThree() {
  return (
    <React.Fragment>
      <NavbarConfig fullWidth={true} />
      <HeroThree />
      <main className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
        <AboutThree />
        <ServicesThree />
        <Projects />
        <CTA />
        <WhyChooseUs />
        <Reviews />
        <Blog />
      </main>
    </React.Fragment>
  );
}
