"use client";

import Image from "next/image";
import { Section, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import buildingLineA from "@/images/decoration/building-line-a.png";
import teamCeo from "@/images/team-ceo.jpg";
import { cn } from "@/lib/utils";

type TeamFeaturedProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
  boxed?: boolean;
};

export default function TeamFeatured({ gap = "default", boxed = true, className }: TeamFeaturedProps) {
  return (
    <Section gap={gap} className={cn("overflow-hidden", className)} boxed={boxed}>
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-linear-to-b from-transparent to-primary-dark/8">
        <Image src={buildingLineA} width={1920} height={900} alt="Background" className="absolute inset-0 object-cover object-bottom w-full h-full" />
      </div>
      <SectionContent>
        <div className="container">
          <div className="row items-center justify-between">
            {/* CEO Image Column */}
            <ScrollReveal mode="fade" direction="bottom" delay={100} className="lg:column-5 xl:column-5">
              <div className="relative w-full overflow-hidden">
                <Image src={teamCeo} alt="Christopher Martin" className="object-cover object-top max-h-120 lg:max-h-none w-full" />
              </div>
            </ScrollReveal>

            {/* CEO Bio Text Column */}
            <ScrollReveal mode="fade" direction="bottom" delay={200} className="lg:column-7 xl:column-6">
              <div className="text-block">
                <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 before:bg-primary">
                  Our Team
                </span>
                <h2 className="text-darker font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4 lg:mb-6">
                  Expert Designers, <br className="hidden md:block" /> Dedicated to Your Vision
                </h2>
                <p className="text-body text-base lg:text-lg leading-relaxed mb-4">
                  Our custom kitchen living concepts create seamless, spacious environments centered around your lifestyle.
                </p>
                <p className="text-body text-base lg:text-lg leading-relaxed mb-4">
                  Backed by extensive expertise in high-end hospitality design, our team has led and executed large scale restaurant and racecourse projects across the UK. Our portfolio showcases a versatile range of styles—from transitional and traditional to minimalist and contemporary.
                </p>

                <div className="pt-2 g:pt-6">
                  <h4 className="text-xl/normal font-semibold text-darker mb-1">Christoper Martin</h4>
                  <span className="text-base/relaxed font-normal text-darker uppercase">President / Ceo</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
