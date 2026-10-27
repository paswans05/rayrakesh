"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import ctaBg from "@/images/cta-bg.png";

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
        <Image src={ctaBg} width={1920} height={596} alt="Parsa community background" className="absolute inset-0 object-cover object-top w-full h-full" />
        <div className="absolute inset-0 bg-black/50"></div>
      </ScrollReveal>
      <SectionContent>
        <div className="container">
          <div className="row justify-center">
            <div className="xl:column-11 2xl:column-9">
              <ScrollReveal mode="fade" direction="bottom" delay={250} className="text-block text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-bold text-white leading-[1.2] mb-4 lg:mb-6 text-balance">
                  Let&apos;s Talk About Parsa&apos;s<br className="hidden sm:inline" /> Future Together
                </h2>
                <p className="text-white text-base md:text-xl xl:text-2xl font-normal mb-6 lg:mb-9 xl:mb-12 leading-relaxed text-pretty lg:px-12">
                  Connect with Rakesh Ray to discuss construction, community priorities, or the Rakesh Marathon in Parsa, Nepal.
                </p>
                <Button nativeButton={false} render={<Link href="mailto:erakesh.ray@gmail.com" />} variant="default" pill size="xl" icon={<ArrowRight />}>
                  <span>Contact Rakesh</span>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
