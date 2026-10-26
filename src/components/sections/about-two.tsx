"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

import aboutC from "@/images/about-c.png";
import buildingLineA from "@/images/decoration/building-line-a.png";

type AboutTwoProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function AboutTwo({ gap = "default", className }: AboutTwoProps) {
  return (
    <Section id="about-section" gap={gap} className={cn("relative overflow-hidden", className)}>
      {/* Background linework */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image src={buildingLineA} width={1920} height={900} alt="Architectural Blueprint" className="absolute inset-0 object-cover object-bottom w-full h-full opacity-60" />
      </div>

      <SectionContent>
        <div className="container">
          <div className="row gx-6 lg:gx-10 items-start justify-between">
            <div className="md:column-6 lg:column-4 xl:column-4 sm:column-6">
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="relative 2xl:-me-4 h-full">
                <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 before:bg-primary">
                  About Us
                </span>
                <h2 className="text-darker font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-[1.17]">
                  Art and science blend to elevate interior spaces for better living.
                </h2>
                <div className="mt-4 md:mt-10 lg:mt-10 xl:mt-16 2xl:mt-21">
                  <div className="relative py-4 md:py-5 px-5 md:px-7 inline-flex items-center gap-5 before:w-17 before:inset-s-0 before:h-full before:absolute before:border-darker/20 before:border-4 before:border-e-0 after:w-17 after:inset-e-0 after:h-full after:absolute after:border-darker/20 after:border-4 after:border-s-0">
                    <span className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl/none font-semibold text-primary tracking-tight">25</span>
                    <span className="text-base lg:text-xl font-normal text-darker tracking-wider leading-snug">
                      Years of<br />Experience
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="md:column-5 lg:column-3 xl:column-4 sm:column-6 lg:order-last hidden sm:block">
              <ScrollReveal mode="fade" direction="bottom" delay={200} className="relative 2xl:ms-10">
                <Image src={aboutC} alt="Interior Showcase 2" className="object-cover w-full max-w-100" />
              </ScrollReveal>
            </div>
            <div className="lg:column-5 xl:column-4">
              <ScrollReveal mode="fade" direction="bottom" delay={150} className="2xl:ps-10">
                <p className="text-body text-base xl:text-lg leading-loose mb-3 lg:mb-4">
                  Driven by rigorous design, our architecture studio crafts meaningful, contextual environments where form, function, and proportion unite to create timeless, enduring spatial experiences.

                </p>
                <p className="text-body text-base xl:text-lg leading-loose">
                  We are an architecture studio delivering refined spatial solutions through a rigorous process, seamlessly balancing form, function, and proportion to craft enduring environments.
                </p>
                <div className="mt-6 lg:mt-12">
                  <Button nativeButton={false} render={<Link href="/about" />} variant="default" pill size="xl" icon={<ArrowRight />}>
                    <span>Read More</span>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
