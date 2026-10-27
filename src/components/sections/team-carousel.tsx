"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import { DELAY_50, ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { TEAM_MEMBERS_DATA, type TeamMember } from "@/data/team";
import { FacebookF, Twitter, Instagram, Pinterest } from "@/components/icons";

type TeamCarouselProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function TeamCarousel({
  gap = "default",
  className,
}: TeamCarouselProps) {

  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-8 xl:column-7">
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="2xl:px-8 flex flex-col items-center">
                <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 before:bg-primary">
                  Meet Our Team
                </span>
                <h2 className="text-darker font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-[1.17]">
                  Every Great Structure Begins With a Strong Foundation.
                </h2>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>

      <SectionContent>
        <div className="container">
          <Carousel
            className="w-full relative"
            autoplay={true}
            opts={{
              align: "start",
              scrollMode: "page",
            }}
          >
            <CarouselContent className="-ml-7.5">
              {TEAM_MEMBERS_DATA.map((member: TeamMember, index: number) => (
                <CarouselItem key={index} className="pl-7.5 basis-1/1 min-[440px]:basis-1/2 lg:basis-1/4 group flex flex-col">
                  <ScrollReveal key={member.id} mode="fade" direction="bottom" className={cn(getDelayClass(index, DELAY_50, [0, 3]))}>
                    <div className="relative w-full overflow-hidden">
                      <Image src={member.image} alt={member.name} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />

                      <div className="absolute inset-0 bg-darker/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                        <div className="flex flex-wrap items-center justify-center gap-4 px-5 py-2.5 text-white">
                          <Link href="#" className="flex items-center justify-center size-7.5 bg-white text-darker hover:bg-primary hover:text-white rounded-sm transition-colors" aria-label="Facebook">
                            <FacebookF className="size-4 fill-current" />
                          </Link>
                          <Link href="#" className="flex items-center justify-center size-7.5 bg-white text-darker hover:bg-primary hover:text-white rounded-sm transition-colors" aria-label="Twitter">
                            <Twitter className="size-4 fill-current" />
                          </Link>
                          <Link href="#" className="flex items-center justify-center size-7.5 bg-white text-darker hover:bg-primary hover:text-white rounded-sm transition-colors" aria-label="Instagram">
                            <Instagram className="size-4 fill-current" />
                          </Link>
                          <Link href="#" className="flex items-center justify-center size-7.5 bg-white text-darker hover:bg-primary hover:text-white rounded-sm transition-colors" aria-label="Pinterest">
                            <Pinterest className="size-4 fill-current" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="pt-6">
                      <h4 className="text-lg md:text-xl xl:text-2xl leading-snug font-semibold text-darker mb-1">
                        {member.name}
                      </h4>
                      <p className="text-darker text-base/relaxed font-normal">
                        {member.role}
                      </p>
                    </div>
                  </ScrollReveal>
                </CarouselItem>
              ))}

            </CarouselContent>
            <CarouselDots className="pt-7.5" dotClassName="bg-primary/20" />
          </Carousel>

        </div>
      </SectionContent>
    </Section>
  );
}
