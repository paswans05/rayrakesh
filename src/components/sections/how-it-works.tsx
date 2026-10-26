"use client";

import Image from "next/image";
import { Section, SectionContent } from "@/components/layout/section";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { PROCESS_STEPS_DATA, type ProcessStep } from "@/data/process";
import { cn } from "@/lib/utils";

type HowItWorksProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
  boxed?: boolean;
};

export default function HowItWorks({ gap = "default", boxed = true, className }: HowItWorksProps) {
  return (
    <Section gap={gap} boxed={boxed} className={cn("bg-linear-to-b from-primary-light/8 to-transparent", className)}>
      <SectionContent>
        <div className="container">
          <div className="row g-8">
            {/* Left Header Column */}
            <ScrollReveal mode="fade" direction="bottom" delay={100} className="md:column-6 xl:column-3">
              <div className="text-block">
                <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 before:bg-primary">
                  How It Works
                </span>
                <h2 className="text-darker font-bold text-3xl lg:text-4xl leading-[1.17] mb-6">
                  3 Easy Steps to Get Interior Design
                </h2>
                <p className="text-body text-base">
                  Main architectural design concept plans create seamless, spacious environments centered around your lifestyle.
                </p>
              </div>
            </ScrollReveal>

            {/* Process Step Cards */}
            {PROCESS_STEPS_DATA.map((item: ProcessStep, index: number) => (
              <ScrollReveal key={item.step} mode="fade" direction="bottom" className={cn("md:column-6 xl:column-3", getDelayClass(index + 1))}>
                <div className="relative group h-full p-8 transition-all duration-300 flex flex-col justify-between bg-white shadow-[0_0_13px_2px] shadow-black/8">
                  {item.image && (
                    <div className="absolute pointer-events-none bg-darker inset-0 transition-opacity opacity-0 group-hover:opacity-100">
                      <Image className="opacity-20 object-cover w-full h-full" src={item.image} alt={item.title} />
                    </div>
                  )}
                  <div className="relative">
                    <div className="text-5xl lg:text-6xl xl:text-[5rem] leading-[1.1] font-bold mb-17 text-transparent [-webkit-text-stroke:1px_var(--color-primary)] opacity-50 group-hover:opacity-40 text-nowrap heading">
                      {item.step}
                    </div>
                    <h4 className="text-xl lg:text-2xl/snug font-semibold mb-4 text-darker group-hover:text-white">{item.title}</h4>
                    <p className="text-base/relaxed text-body group-hover:text-white">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
