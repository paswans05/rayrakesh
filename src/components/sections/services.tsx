"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionContent, SectionHead } from "@/components/layout/section";
import { ArrowUpRight, ArrowRight } from "@/components/icons";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import linesA from "@/images/decoration/lines-a.png";
import { SERVICES_DATA, type ServiceItem } from "@/data/services";

type ServicesProps = {
  gap?: "default" | "top" | "bottom" | "none";
  boxed?: boolean;
  className?: string;
  mode?: "light" | "theme";
  headAlign?: "start" | "center" | "end";
};

export default function Services({ gap = "default", boxed = true, headAlign = "center", mode = "theme", className }: ServicesProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Section gap={gap} boxed={boxed} className={cn("overflow-hidden", className)}>
      <ScrollReveal mode="fade" delay={100} direction="top" className={cn("absolute inset-0 overflow-hidden pointer-events-none", mode === "theme" && "bg-primary-dark")}>
        <Image src={linesA} width={1920} height={1182} alt="Background" className="absolute inset-0 object-cover object-bottom w-full h-full" />
      </ScrollReveal>
      <SectionHead>
        <div className="container">
          <div className={cn("row", headAlign == "center" && "justify-center text-center", headAlign == "start" && "justify-start text-start", headAlign == "end" && "justify-end text-end")}>
            <div className="lg:column-10 xl:column-9">
              <ScrollReveal mode="fade" direction="bottom" className={cn("flex flex-col items-center", headAlign == "center" && "2xl:px-8 items-center", headAlign == "start" && "items-start", headAlign == "end" && "items-end")}>
                <span className={cn("flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5", headAlign == "end" && "flex-row-reverse", mode === "theme" ? "text-white before:bg-white" : "text-primary before:bg-primary")}>Our Services</span>
                <h2 className={cn("font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-[1.17]", mode === "theme" ? "text-white" : "text-darker")}>Expert Solutions for Architecture, Interiors, and Custom Design</h2>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>

      <SectionContent>
        <div className="container">
          {/* Services List */}
          <div className="flex flex-col border-t border-white/20">
            {SERVICES_DATA.map((service: ServiceItem, index: number) => {
              const isHovered = hoveredId === service.id;
              return (
                <ScrollReveal mode="fade" direction="bottom" className={cn("hover:z-11", getDelayClass(index))} key={service.id}>
                  <Link href={service.href} onMouseEnter={() => setHoveredId(service.id)} onMouseLeave={() => setHoveredId(null)} className={cn("relative group border-b py-5 lg:py-6 xl:py-10 transition-colors duration-300 cursor-pointer  block", mode === "theme" ? "border-white/20" : "border-body/20")} >
                    <div className="row items-center g-4 md:g-6 relative z-10">
                      <div className="column-9 md:column-5 lg:column-4 xl:column-4">
                        <div className="flex items-center gap-5 2xl:gap-7.5">
                          <div className="shrink-0 size-13 md:size-17 xl:size-19 2xl:size-22.5 rounded-full bg-primary flex items-center justify-center">
                            <Image className="w-6 md:w-8 2xl:w-10.5" src={service.icon} alt={service.title} width={43} height={42} />
                          </div>
                          <h3 className={cn("text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold group-hover:text-primary transition-colors", mode === "theme" ? "text-white" : "text-darker")}>
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <div className="column-3 md:column-2 lg:column-3 xl:column-4 flex justify-end md:order-last">
                        <div className={cn("size-10 xl:size-12 rounded-full flex items-center justify-center transition-all duration-300", isHovered ? "bg-primary text-white scale-110" : `${mode === "theme" ? "bg-white" : "bg-darker"} text-primary hover:bg-primary hover:text-white`)} >
                          {isHovered ? (
                            <ArrowRight className="size-5 xl:size-5.5 fill-current" />
                          ) : (
                            <ArrowUpRight className="size-5 xl:size-5.5 fill-current" />
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="column-12 md:column-5 xl:column-4">
                        <p className={cn("text-base/relaxed text-pretty", mode === "theme" ? "text-white" : "text-darker")}>
                          {service.description}
                        </p>
                      </div>

                      {/* Floating Image Preview (Visible ONLY on hover!) */}
                      <div className={`block absolute inset-e-16 sm:inset-e-24 top-1/2 -translate-y-1/2 h-53.75 w-43.5 overflow-hidden transition-all duration-300 pointer-events-none z-20 p-0 ${isHovered ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-4"}`} >
                        <Image src={service.image} alt={service.title} className="h-full w-full" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
