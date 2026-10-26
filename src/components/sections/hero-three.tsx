"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNow,
} from "@/components/ui/carousel";
import heroA from "@/images/hero-a.jpg";
import heroB from "@/images/hero-b.jpg";
import heroC from "@/images/hero-c.jpg";

type HeroThreeProps = {
  className?: string;
  wrapperClassName?: string;
};

const HERO_THREE_SLIDES = [
  {
    image: heroA,
    kicker: "Interior architecture / Est. 2012",
    title: "Spaces with \na point of view.",
    description: "We design interiors where architecture,\nmaterial and emotion exist in balance.",
  },
  {
    image: heroB,
    kicker: "Interior architecture / Est. 2012",
    title: "Crafted with intentional design.",
    description: "Modern structural solutions built with \ntuncompromising quality and lasting functionality.",
  },
  {
    image: heroC,
    kicker: "Interior architecture / Est. 2012",
    title: "Interiors of true distinction.",
    description: "Bespoke architectural concepts tailored \ntspecifically for high-end modern living spaces.",
  },
];

export default function HeroThree({ className, wrapperClassName }: HeroThreeProps) {
  return (
    <header className={cn("relative overflow-hidden flex flex-col px-(--page-gap) pt-(--page-gap)", className)}>
      <div className="relative rounded-(--radius) overflow-hidden  bg-darkest">
        <Carousel
          className="w-full relative"
          autoplay={false}
          opts={{
            loop: true,
            align: "start",
            scrollMode: "page",
          }}
        >
          {/* Active Slides Content */}
          <CarouselContent>
            {HERO_THREE_SLIDES.map((slide, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="relative flex flex-col justify-center pt-(--menubar-height) h-full xl:min-h-[calc(100vh-var(--page-gap)*2)] pb-12 sm:pb-16">
                  <div className={cn("relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-25 py-10 sm:py-16", wrapperClassName)}>
                    <div className="grid grid-cols-12 gap-y-7">
                      <div className="relative z-20 col-start-1 col-end-13 sm:col-end-10 md:col-end-8 row-start-1">
                        <div className="flex flex-col justify-center h-full">

                          <span className="text-sm sm:text-base font-normal tracking-[2px] text-primary uppercase block mb-3 sm:mb-4 md:mb-5 transition-all duration-700 ease-out transform translate-y-6 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-100">
                            {slide.kicker}
                          </span>

                          <h1 className="text-[clamp(30px,5vw,192px)] whitespace-pre-line font-semibold text-white leading-[1.15] mb-4 sm:mb-5 md:mb-8 transition-all duration-700 ease-out transform translate-y-8 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-200">
                            {slide.title}
                          </h1>

                          <p className="text-white/70 text-[clamp(14px,0.9375vw,36px)] leading-relaxed  whitespace-pre-line transition-all duration-700 ease-out transform translate-y-8 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-300">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                      <div className="col-start-1 sm:col-start-4 col-end-13 row-start-2 sm:row-start-1">
                        <div className="relative overflow-hidden transition-all  duration-1000 ease-out transform translate-y-8  sm:translate-y-14 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-300">
                          <Image src={slide.image} priority={index === 0} alt="" className="object-cover object-center w-full h-full max-h-[70vh]" />
                          <div className="absolute inset-0 bg-black/40 sm:bg-black/20 "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute inset-x-0 bottom-0 z-30 px-6 sm:px-10 md:px-14 lg:px-18 xl:px-20 pb-6 sm:pb-8 lg:pb-10 pointer-events-auto">
            <div className="flex items-center justify-between text-xs tracking-[0.25em] uppercase font-semibold text-white/50">
              <div className="inline-flex items-center gap-1.5">
                <span>SLIDE</span>
                <CarouselNow showTotal separator=" / " className="text-xs font-semibold text-white/90" />
              </div>

              <a href="#about-section-three" className="inline-flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"  >
                <span>SCROLL TO EXPLORE</span>
                <span className="text-sm leading-none">&darr;</span>
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </header>
  );
}
