import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";
import { Carousel, CarouselContent, CarouselItem, CarouselNow, CarouselDots } from "@/components/ui/carousel";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import heroBgA from "@/images/hero-bg-a.png";
import heroBgB from "@/images/hero-bg-b.jpg";
import heroBgC from "@/images/hero-bg-c.jpg";

type HeroProps = {
  className?: string;
  wrapperClassName?: string;
};

export default function Hero({ className, wrapperClassName }: HeroProps) {
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
          {/* SLIDE 1 */}
          <CarouselItem className="pl-0">
            <div className="relative pt-(--menubar-height) h-full">
              <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-darker">
                <Image src={heroBgA} width={1920} height={944} alt="Background" className="absolute inset-0 object-cover object-top w-full h-full transition-all duration-1000 ease-out transform scale-130 md:scale-120 group-data-[direction=next]/slide:translate-x-8 group-data-[direction=prev]/slide:-translate-x-8 group-data-active/slide:translate-x-0 group-data-active/slide:scale-125 md:group-data-active/slide:scale-115 opacity-80 group-data-active/slide:opacity-100" />
                <div className="absolute inset-0 bg-darker/50"></div>
                <div className="absolute inset-0 bg-radial from-darker/80 to-darker/0"></div>
              </div>
              <div className={cn("flex-1 flex items-center py-16 md:py-24 xl:py-32 h-full", wrapperClassName)}>
                <div className="container">
                  <div className="row">
                    <div className="lg:column-9  2xl:column-10">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.75rem] font-bold text-white tracking-tight uppercase leading-[1.2] mb-6 lg:mb-8 xl:mb-10 transition-all duration-700 ease-out transform translate-y-12 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-100">
                        Run Together. Build a Better Tomorrow.
                      </h1>

                      <div className="flex flex-col md:flex-row items-start md:items-center gap-x-10 gap-y-6 transition-all duration-700 ease-out transform translate-y-12 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-300">
                        <div className="relative py-4 md:py-5 px-5 md:px-7 inline-flex items-center gap-5 before:w-17 before:inset-s-0 before:h-full before:absolute before:border-white/20 before:border-4 before:border-e-0 after:w-17 after:inset-e-0 after:h-full after:absolute after:border-white/20 after:border-4 after:border-s-0">
                          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl/none font-semibold text-primary tracking-tight">15 KM</span>
                          <span className="text-base lg:text-xl font-normal text-white tracking-wider leading-snug">
                            One Race.<br />One Community.
                          </span>
                        </div>
                        <p className="text-white text-base md:text-lg/relaxed max-w-120">
                          Be part of the Rakesh Marathon in Parsa, Nepal. Run for fitness, celebrate community spirit, and help inspire a healthier future.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 xl:gap-7.5 pt-8 lg:pt-12 xl:pt-17 transition-all duration-700 ease-out transform translate-y-12 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-500">
                        <Button nativeButton={false} render={<Link href="https://docs.google.com/forms/d/e/1FAIpQLSdeLXNSeAYzclsVT8_4sxq3RsUI5PQJ5h86swz-_eiSq2gvkg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer"/>} variant="default" pill size="xl" icon={<ArrowRight />}>
                          <span>Register for the Marathon</span>
                        </Button>

                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* SLIDE 2 */}
          <CarouselItem className="pl-0">
            <div className="relative pt-(--menubar-height) h-full">
              <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-darker">
                <Image src={heroBgB} width={1920} height={944} alt="Background" className="absolute inset-0 object-cover object-top w-full h-full transition-all duration-1000 ease-out transform scale-130 md:scale-120 group-data-[direction=next]/slide:translate-x-8 group-data-[direction=prev]/slide:-translate-x-8 group-data-active/slide:translate-x-0 group-data-active/slide:scale-125 md:group-data-active/slide:scale-115 opacity-80 group-data-active/slide:opacity-100" />
                <div className="absolute inset-0 bg-darker/50"></div>
                <div className="absolute inset-0 bg-radial from-darker/80 to-darker/0"></div>
              </div>
              <div className={cn("flex-1 flex items-center py-16 md:py-24 xl:py-32 h-full", wrapperClassName)}>
                <div className="container text-center">
                  <div className="row justify-center">
                    <div className="lg:column-10 xl:column-9 flex flex-col items-center">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.75rem] font-bold text-white tracking-tight uppercase leading-[1.2] mb-6 lg:mb-8 transition-all duration-700 ease-out transform translate-y-12 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-100">
                        Parsa Runs as One.
                      </h1>

                      <p className="text-white text-base md:text-lg lg:text-2xl leading-relaxed max-w-md transition-all duration-700 ease-out transform translate-y-12 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-300">
                        Join runners from across Parsa for a 15 KM community race celebrating fitness, youth, and local pride.
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-7.5 pt-8 lg:pt-12.5 transition-all duration-700 ease-out transform translate-y-12 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-500">
                        <Button nativeButton={false} render={<Link href="https://docs.google.com/forms/d/e/1FAIpQLSdeLXNSeAYzclsVT8_4sxq3RsUI5PQJ5h86swz-_eiSq2gvkg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer"/>} variant="default" pill size="xl" icon={<ArrowRight />}>
                          <span>Join the Marathon</span>
                        </Button>

                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* SLIDE 3 */}
          <CarouselItem className="pl-0">
            <div className="relative pt-(--menubar-height) h-full">
              <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-darker">
                <Image
                  src={heroBgC} width={1920} height={944} alt="Background" className="absolute inset-0 object-cover object-top w-full h-full transition-all duration-1000 ease-out transform scale-130 md:scale-120 group-data-[direction=next]/slide:translate-x-8 group-data-[direction=prev]/slide:-translate-x-8 group-data-active/slide:translate-x-0 group-data-active/slide:scale-125 md:group-data-active/slide:scale-115 opacity-80 group-data-active/slide:opacity-100" />
                <div className="absolute inset-0 bg-darker/50"></div>
                <div className="absolute inset-0 bg-radial from-darker/80 to-darker/0"></div>
              </div>
              <div className={cn("flex-1 flex items-center py-16 md:py-24 xl:py-32 h-full", wrapperClassName)}>
                <div className="container">
                  <div className="row">
                    <div className="xl:column-12 text-start">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.75rem] font-bold text-white tracking-tight uppercase leading-[1.2] mb-6 lg:mb-8 xl:mb-10 transition-all duration-700 ease-out transform translate-y-12 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-100">
                        Your Race. Your Community.
                      </h1>

                      <p className="text-white/80 text-base md:text-lg lg:text-2xl max-w-215 leading-relaxed transition-all duration-700 ease-out transform translate-y-12 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-300">
                        Lace up, take on the 15 KM challenge, and join a community campaign for healthy living and a brighter Parsa.
                      </p>

                      <div className="flex flex-wrap items-center gap-4 xl:gap-7.5 pt-8 transition-all duration-700 ease-out transform translate-y-12 opacity-0 group-data-active/slide:translate-y-0 group-data-active/slide:opacity-100 group-data-active/slide:delay-500">
                        <Button nativeButton={false} render={<Link href="https://docs.google.com/forms/d/e/1FAIpQLSdeLXNSeAYzclsVT8_4sxq3RsUI5PQJ5h86swz-_eiSq2gvkg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer"/>} variant="default" pill size="xl" icon={<ArrowRight />}>
                          <span>Register Now</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <ScrollReveal mode="fade" direction="bottom" delay={200} className="flex items-center absolute bottom-4 inset-e-4 md:bottom-8 md:inset-e-8 lg:bottom-16 lg:inset-e-16">
          <CarouselDots className="me-3" dotClassName="bg-white/60 h-0.5" activeDotClassName="bg-white " />
          <div className="text-base text-white me-1">Slide </div>
          <CarouselNow className="text-base text-white" showTotal />
        </ScrollReveal>
      </Carousel>
    </header>
  );
}
