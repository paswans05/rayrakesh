import React from "react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import CTA from "@/components/sections/cta";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Blog from "@/components/sections/blog";
import Reviews from "@/components/sections/reviews";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <main className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
        <About />
        <Services />
        <Projects />
        <CTA />
        <WhyChooseUs />
        <Reviews />
        <Blog />
      </main>
    </React.Fragment>
  );
}
