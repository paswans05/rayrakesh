"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, SectionContent, SectionFooter } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { CountUp } from "@/hooks/useAnimatedCounter";
import { cn } from "@/lib/utils";

import aboutA from "@/images/about-a.png";
import aboutB from "@/images/about-b.png";
import buildingLineA from "@/images/decoration/building-line-a.png";
import { ABOUT_STATS_DATA, type AboutStatItem } from "@/data/about";

type AboutProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

function parseStatValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d,.]+)([^\d]*)$/);
  if (!match) return { end: 0, prefix: "", suffix: raw };
  const prefix = match[1] || "";
  const end = parseFloat(match[2].replace(/,/g, ""));
  const suffix = match[3] || "";
  return { end, prefix, suffix };
}

export default function About({ gap = "default", className }: AboutProps) {
  return (
    <Section gap={gap} className={className}>
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image src={buildingLineA} width={1920} height={900} alt="Background" className="absolute inset-0 object-cover object-bottom w-full h-full" />
      </div>

      <SectionContent>
        <div className="container">
          <div className="row gx-4 sm:gx-7">
            <div className="lg:column-4 xl:column-4 column-6">
              <ScrollReveal direction="bottom" delay={100} className="relative 2xl:-me-4 h-full">
                <Image src={aboutA} alt="Rakesh Ray campaign" className="w-full min-h-full object-cover" />
              </ScrollReveal>
            </div>

            <div className="lg:column-3 xl:column-3 column-6 lg:order-last">
              <ScrollReveal mode="fade" direction="bottom" delay={200} className="relative 2xl:-ms-10">
                <Image src={aboutB} alt="Rakesh Ray campaign" className="object-cover w-full" />
              </ScrollReveal>
            </div>

            <div className="lg:column-5 xl:column-5">
              <ScrollReveal mode="fade" direction="bottom" delay={150} className="2xl:px-10">
                <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 before:bg-primary">
                  About Rakesh
                </span>
                <h2 className="text-darker font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-[1.17] mb-4 lg:mb-6">
                  Rakesh Ray: Construction Professional
                </h2>
                <p className="text-body text-base xl:text-lg leading-loose mb-3 lg:mb-4">
                  Rakesh Ray is associated with Cloud Construction Pvt. Ltd., a construction company. His work in construction gives him a practical perspective on planning and development in local communities.
                </p>
                <p className="text-body text-base xl:text-lg leading-loose">
                  To connect with Rakesh’s campaign, call <a className="text-darker underline decoration-primary underline-offset-4" href="tel:+9779818888722">+977981-8888722</a> or email <a className="text-darker underline decoration-primary underline-offset-4" href="mailto:erakesh.ray@gmail.com">erakesh.ray@gmail.com</a>.
                </p>
                <div className="mt-6">
                  <Button nativeButton={false} render={<Link href="mailto:erakesh.ray@gmail.com" />} variant="default" pill size="xl" icon={<ArrowRight />}>
                    <span>Contact Rakesh</span>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionContent>

      <SectionFooter>
        <div className="container">
          <div className="flex items-center flex-wrap gap-5 xl:gap-0">
            {ABOUT_STATS_DATA.map((item: AboutStatItem, index: number) => {
              const { end, prefix, suffix } = parseStatValue(item.value);
              return (
                <ScrollReveal key={item.id} mode="fade" direction="bottom" className={cn("flex items-center grow", getDelayClass(index))}>
                  <div className="flex items-center gap-5 justify-center md:justify-start me-auto">
                    <span className="text-4xl lg:text-5xl 2xl:text-7xl heading font-semibold text-darker tracking-tight">
                      <CountUp end={end} prefix={prefix} suffix={suffix} duration={2000} />
                    </span>
                    <div className="text-sm md:text-base lg:text-lg uppercase font-normal text-body leading-normal tracking-wider">
                      {item.label} <br /> {item.sublabel}
                    </div>
                  </div>
                  {index < ABOUT_STATS_DATA.length - 1 && (
                    <div className="hidden xl:block h-15 w-0.75 mx-11 bg-darker/16"></div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </SectionFooter>
    </Section>
  );
}
