"use client";

import Image from "next/image";
import { Section, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import whyA from "@/images/why-a.jpg";
import buildingLineC from "@/images/decoration/building-line-c.png";
import { WHY_CHOOSE_US_DATA, type WhyChooseUsItem } from "@/data/why-choose-us";

type WhyChooseUsProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function WhyChooseUs({ gap = "default", className }: WhyChooseUsProps) {
  return (
    <Section gap={gap} className={className}>
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image src={buildingLineC} width={1920} height={1023} alt="Background" className="absolute inset-0 object-cover object-bottom w-full h-full" />
      </div>

      <SectionContent>
        <div className="container">
          {/* Whole Card Reveal (Image + Features together) */}
          <ScrollReveal mode="fade" direction="bottom">
            <div className="row justify-center g-0">
              {/* Left Image */}
              <div className="lg:column-6">
                <div className="relative w-full h-full">
                  <Image src={whyA} alt="Designing with Quality and care" className="w-full h-full object-cover max-h-130 lg:max-h-none" />
                </div>
              </div>

              {/* Right Features Content */}
              <div className="lg:column-6">
                <div className="w-full bg-primary-dark text-white p-8 md:p-12 xl:p-20 2xl:px-25 2xl:py-30 flex flex-col justify-center h-full">
                  <div className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 text-white before:bg-white">
                    Why Choose Us
                  </div>
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-[1.17] text-white mb-5 lg:mb-10">
                    Designing with Quality and care.
                  </h2>

                  <div className="flex flex-col gap-4 lg:gap-6">
                    {WHY_CHOOSE_US_DATA.map((item: WhyChooseUsItem) => (
                      <div key={item.id} className="relative ps-10 before:absolute before:inset-s-0 before:shrink-0 before:size-4 before:mt-1.25 lg:before:mt-2.5 before:rounded-full before:border-4 before:border-white before:bg-primary">
                        <h4 className="text-lg md:text-xl lg:text-[1.75rem] font-extrabold text-white mb-3 xl:mb-4">{item.title}</h4>
                        <p className="text-white text-base lg:text-lg xl:text-xl leading-relaxed text-pretty">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionContent>
    </Section>
  );
}
