"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import ctaBg from "@/images/cta-bg.jpg";

type CTAProps = {
  gap?: "default" | "top" | "bottom" | "none";
  boxed?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function CTA({ gap = "default", boxed = true, className }: CTAProps) {
  return (
    <Section gap={gap} boxed={boxed} className={className}>
      <ScrollReveal mode="fade" delay={100} direction="top" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none rounded-[inherit]">
        <Image src={ctaBg} width={1920} height={596} alt="Background" className="absolute inset-0 object-cover object-top w-full h-full" />
        <div className="absolute inset-0 bg-black/50"></div>
      </ScrollReveal>
      <SectionContent>
        <div className="container">
          <div className="row justify-center">
            <div className="xl:column-11 2xl:column-9">
              <ScrollReveal mode="fade" direction="bottom" delay={250} className="text-block text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-bold text-white leading-[1.2] mb-4 lg:mb-6 text-balance">
                  Request a Customized Solution<br className="hidden sm:inline" /> for Your Business!
                </h2>
                <p className="text-white text-base md:text-xl xl:text-2xl font-normal mb-6 lg:mb-9 xl:mb-12 leading-relaxed text-pretty lg:px-12">
                  Ipsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity
                </p>
                <Button nativeButton={false} render={<Link href="/contact" />} variant="default" pill size="xl" icon={<ArrowRight />}>
                  <span>Contact Us</span>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
