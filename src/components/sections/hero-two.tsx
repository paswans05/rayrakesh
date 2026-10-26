"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import heroBgD from "@/images/hero-bg-d.jpg";
import heroBgE from "@/images/hero-bg-e.jpg";
import heroBgF from "@/images/hero-bg-f.jpg";

type HeroTwoProps = {
  className?: string;
  wrapperClassName?: string;
};

const HERO_TWO_SLIDES = [
  {
    image: heroBgE,
    kicker: "Interior Architecture & Design — Est. 2009",
    title: "Spaces Designed to Be Lived In.",
    description: "An international studio shaping residential, hospitality and cultural interiors where light, material and proportion meet the quiet rhythm of everyday life.",
    attributes: ["Copenhagen · Milan", "Featured — Villa Lysø, 2026"],
    project: "Villa Oak & Steel",
    year: "2026",
  },
  {
    image: heroBgD,
    kicker: "Interior Architecture & Design — Est. 2009",
    title: "Spaces Designed to Be Lived In.",
    description: "An international studio shaping residential, hospitality and cultural interiors where light, material and proportion meet the quiet rhythm of everyday life.",
    attributes: ["Copenhagen · Milan", "Featured — Villa Lysø, 2026"],
    project: "Tribeca Penthouse",
    year: "2026",
  },
  {
    image: heroBgF,
    kicker: "Interior Architecture & Design — Est. 2009",
    title: "Spaces Designed to Be Lived In.",
    description: "An international studio shaping residential, hospitality and cultural interiors where light, material and proportion meet the quiet rhythm of everyday life.",
    attributes: ["Copenhagen · Milan", "Featured — Villa Lysø, 2026"],
    project: "Nordic Waterfront Villa",
    year: "2026",
  },
];

export default function HeroTwo({ className, wrapperClassName }: HeroTwoProps) {
  return (
    <header className={cn("relative overflow-hidden flex flex-col px-(--page-gap) pt-(--page-gap)", className)}>
      <Carousel
        className="rounded-(--radius) overflow-hidden relative"
        autoplay={false}
        opts={{
          loop: true,
          align: "start",
          scrollMode: "page",
        }}
      >
        <CarouselContent>
          {HERO_TWO_SLIDES.map((slide, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative flex flex-col pt-(--menubar-height) h-full pb-10 lg:min-h-[calc(100vh-var(--page-gap)*2)]">
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-darker">
                  <Image src={slide.image} priority={index === 0} width={1920} height={1053} alt="Background" className="absolute inset-0 object-cover object-top w-full h-full transition-all duration-1000 ease-out transform scale-130 md:scale-120 group-data-[direction=next]/slide:translate-x-8 group-data-[direction=prev]/slide:-translate-x-8 group-data-active/slide:translate-x-0 group-data-active/slide:scale-125 md:group-data-active/slide:scale-115 opacity-80 group-data-active/slide:opacity-100" />
                  <div className="absolute inset-0 bg-darker/40"></div>
                </div>

                <div className={cn("pt-50 mt-auto", wrapperClassName)}>
                  <div className="container">
                    <div className="pb-7 xl:pb-12">
                      <div className="row">
                        <div className="lg:column-10 xl:column-9 2xl:column-8">
                          <div className="text-base/loose uppercase tracking-[2px] text-white mb-3 sm:mb-5 transition-all duration-700 ease-out transform translate-y-12 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-200">
                            {slide.kicker}
                          </div>
                          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.15] text-balance transition-all duration-700 ease-out transform translate-y-12 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-250">
                            {slide.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 xl:pt-10 border-t border-white/27">
                      <div className="row items-center justify-between g-6 transition-all duration-700 ease-out transform translate-y-8 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-300">
                        <div className="lg:column-5 xl:column-4">
                          <p className="text-white/80 text-sm sm:text-base leading-relaxed text-pretty">
                            {slide.description}
                          </p>
                        </div>

                        <div className="hidden lg:flex lg:column-2 justify-center">
                          <a
                            href="#about-section"
                            className="group inline-flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-primary transition-colors"
                          >
                            <span className="font-medium">Scroll Down</span>
                            <span className="w-0.5 h-6 bg-white/40 group-hover:bg-primary group-hover:h-8 transition-all duration-300" />
                          </a>
                        </div>

                        <div className="lg:column-5 text-start lg:text-end">
                          {slide.attributes.map((item, index) =>
                            <span key={index} className="text-sm text-white tracking-[4px] uppercase font-normal">{item}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </header>
  );
}
