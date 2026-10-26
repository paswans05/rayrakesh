"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ArrowLongRight } from "@/components/icons";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { SERVICES_TWO_DATA, type ServiceTwoItem } from "@/data/services";
import linesA from "@/images/decoration/lines-a.png";
import { cn } from "@/lib/utils";

type ServicesThreeProps = {
  gap?: "default" | "top" | "bottom" | "none";
  boxed?: boolean;
  className?: string;
};

export default function ServicesThree({ gap = "default", boxed = true, className }: ServicesThreeProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Section gap={gap} boxed={boxed} className={cn("relative bg-darkest overflow-hidden", className)}>
      <ScrollReveal mode="fade" delay={100} direction="top" className={cn("absolute inset-0 overflow-hidden pointer-events-none")}>
        <Image src={linesA} width={1920} height={1182} alt="Background" className="absolute inset-0 object-cover object-bottom w-full h-full" />
      </ScrollReveal>

      <SectionHead>
        <div className="container">
          <div className="row justify-center text-center">
            <div className="lg:column-10 xl:column-8">
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="flex flex-col items-center">
                <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-3 md:mb-5 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-20 before:h-0.5 before:bg-primary">
                  Our Services
                </span>
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-[1.17] text-white">
                  Expert Solutions for Architecture, <br className="hidden sm:inline" />
                  Interiors, and Custom Design
                </h2>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>

      <SectionContent>
        <div className="container">
          <div className="row g-8 xl:g-12">
            <div className="lg:column-6">
              <div className="flex flex-col justify-between divide-y divide-white/12 border-y border-white/12">
                {SERVICES_TWO_DATA.map((service: ServiceTwoItem, index: number) => {
                  const isActive = activeIndex === index;
                  return (
                    <ScrollReveal
                      key={service.num}
                      mode="fade"
                      direction="bottom"
                      className={cn("transition-colors duration-300 hover:z-10", isActive ? "z-10" : "z-1", getDelayClass(index))}
                    >
                      <Link href={service.href} onMouseEnter={() => setActiveIndex(index)} className={cn("group relative block py-5 sm:py-6 cursor-pointer transition-all duration-300")} >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center">
                            <span className={cn("text-sm sm:text-base w-12 md:w-20 shrink-0 font-semibold tracking-wider transition-colors", isActive ? "text-primary" : "text-white/40 group-hover:text-primary")}> {service.num} </span>
                            <h3 className={cn("text-xl lg:text-2xl xl:text-3xl font-medium text-white")}> {service.title} </h3>
                          </div>
                          <div className={cn("absolute w-44 inset-e-10 lg:hidden", isActive ? "opacity-100" : "opacity-0")}>
                            <Image
                              src={service.image}
                              alt={service.title}
                              className="object-cover object-center w-full h-full transition-all duration-700 ease-out"
                            />
                          </div>
                          <div className="ms-auto">
                            <ArrowLongRight className={cn("size-5 sm:size-6 ms-auto md:ms-0", isActive ? "fill-primary" : "fill-white/60 group-hover:fill-primary")} />
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            <div className="lg:column-6 xl:column-5 hidden lg:block">
              <>
                <ScrollReveal mode="fade" direction="bottom" delay={250} className="relative w-full h-full max-h-full overflow-hidden ">
                  <Image
                    src={SERVICES_TWO_DATA[activeIndex].image}
                    alt={SERVICES_TWO_DATA[activeIndex].title}
                    className="object-cover object-center w-full h-full transition-all duration-700 ease-out"
                  />
                </ScrollReveal>
              </>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
