"use client";

import Image from "next/image";
import { Section, SectionContent } from "@/components/layout/section";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import reviewsImg from "@/images/review-bg.jpg";
import { REVIEWS_DATA } from "@/data/reviews";
import { Avatar, AvatarImage } from "../ui/avatar";

type ReviewsProps = {
  gap?: "default" | "top" | "bottom" | "none";
  boxed?: boolean;
  className?: string;
};

export default function Reviews({ gap = "default", boxed = true, className }: ReviewsProps) {
  return (
    <Section gap={gap} boxed={boxed} className={cn(boxed ? "bg-primary-lighter" : "bg-white", className)}>
      <SectionContent>
        <div className="container">
          <div className="row justify-center">
            <ScrollReveal mode="fade" direction="bottom" delay={100} className="xl:column-6 xl:order-last">
              <div className="text-block">
                <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 before:bg-primary">
                  Delux Review
                </span>
                <h2 className="text-darker font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-[1.17]">
                  Discover Why Our Guests Rave About Their Stay
                </h2>
                <div className="flex gap-4 sm:gap-7.5 before:content-[''] before:block before:w-6 sm:before:w-14 md:before:w-22 xl:before:w-37.5 before:shrink-0 before:mt-6 md:before:mt-10 xl:before:mt-12 before:h-1 before:bg-primary mt-6 xl:mt-10">
                  <p className="text-body text-base md:text-lg xl:text-xl 2xl:text-2xl leading-normal">
                    Ut posuere nisi est, sed ullamcorper nibh volutpat at. In rutrum, metus ut posuere gravida, suspendisse volutpat sagittis sapien. Curabitur quis malesuada ipsum. each trip is different and have thoughtfully balanced the scapes of
                  </p>
                </div>
                <Button className="mt-6 xl:mt-10" size="xl" pill icon={<ArrowRight />}>
                  <span>Read More</span>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal mode="fade" direction="bottom" delay={200} className="xl:column-6">
              <div className="xl:pe-7.5">
                <div className="relative sm:pe-17.5 pb-16">
                  <Image src={reviewsImg} width={822} height={822} alt="Reviews" className="max-h-100 md:max-h-130 xl:max-h-none object-cover" />
                  <div className={cn("bg-primary-dark  sm:border-t-12 sm:border-s-12 sm:absolute inset-e-0 bottom-0 inset-s-38.5", boxed ? "border-primary-lighter" : "border-white")}>
                    <Carousel autoHeight={true}>
                      <CarouselContent>
                        {REVIEWS_DATA.slice(0, 3).map((item, index) => (
                          <CarouselItem key={index} className="basis-1/1 pl-0 group">
                            <div className="p-8">
                              <p className="text-base/relaxed text-white mb-6 text-pretty">{item.message}</p>
                              <div className="flex items-center gap-4">
                                <Avatar size="2xl" className="border-2 border-white">
                                  <AvatarImage src={item.avatar} />
                                </Avatar>
                                <div>
                                  <h5 className="text-white text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.2] font-semibold mb-1">{item.name}</h5>
                                  <p className="text-base lg:text-lg leading-normal text-white">{item.title}</p>
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="absolute -bottom-13 sm:bottom-0 sm:-ms-41.5 flex gap-4">
                        <CarouselPrevious pill size="md" />
                        <CarouselNext pill size="md" />
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
