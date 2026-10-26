"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { BLOG_DATA, type BlogPost } from "@/data/blog";
import { useFormatDate } from "@/hooks/useFormatDate";
import { cn } from "@/lib/utils";
import buildingLineD from "@/images/decoration/building-line-d.png";

type BlogProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Blog({ gap = "default", className }: BlogProps) {
  return (
    <Section gap={gap} className={className}>
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image src={buildingLineD} width={1920} height={986} alt="Background" className="absolute inset-0 object-cover object-bottom w-full h-full" />
      </div>
      <SectionHead>
        <div className="container">
          <div className="justify-center text-center row">
            <div className="lg:column-7 xl:column-6">
              <ScrollReveal mode="fade" direction="bottom" className="2xl:px-8 flex flex-col items-center">
                <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 before:bg-primary">NEWS & ARTICLES</span>
                <h2 className="text-darker font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-[1.17]">Our Latest Blog Posts</h2>
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
              breakpoints: {
                "(min-width: 1200px)": {
                  active: false,
                },
              },
            }}
          >
            <CarouselContent className="-ml-7.5">
              {BLOG_DATA.slice(0, 3).map((post: BlogPost, index: number) => (
                <CarouselItem key={post.id} className="pl-7.5 basis-1/1 md:basis-1/2 xl:basis-1/3 group">
                  <ScrollReveal mode="fade" direction="bottom" className={getDelayClass(index)}>
                    <Link href={`/blog/${post.id}`} className="flex flex-col">
                      <div className={cn("relative w-full overflow-hidden pb-[70%] xl:group-even:pb-[calc(70%+70px)]")}>
                        <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="pt-6 md:pt-8 px-3 flex flex-col flex-1 justify-between">
                        <div className="text-body text-base/relaxed font-normal mb-2.5 flex items-center">
                          <div>{useFormatDate(post.date)}</div>
                          <div className="mx-2.5 border-l border-body/20 h-4.5"></div>
                          <div>5 Comments</div>
                        </div>
                        <h4 className="text-lg md:text-xl lg:text-[1.75rem] leading-snug font-bold text-darker group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  </ScrollReveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="pt-10 xl:hidden" />
          </Carousel>
        </div>
      </SectionContent>
    </Section>
  );
}
