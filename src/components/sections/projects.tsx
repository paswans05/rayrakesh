"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, SectionContent } from "@/components/layout/section";
import { PROJECTS_DATA, type Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import buildingLineB from "@/images/decoration/building-line-b.png";
import { cn } from "@/lib/utils";

type ProjectsProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

function ProjectCard({ project, isTall = false }: { project: Project; isTall?: boolean }) {
  return (
    <div className="group flex flex-col">
      <Link href={`/projects/${project.id}`}
        className={cn("block relative w-full overflow-hidden", isTall ? "pb-[105%] md:pb-[124.5%] mb-8" : "pb-[60%] md:pb-[76%] mb-5")} >
        <Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </Link>

      <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight font-bold text-darker mb-3 group-hover:text-primary transition-colors">
        <Link href={`/projects/${project.id}`}>{project.title}</Link>
      </h3>
      <p className="text-body text-base lg:text-lg xl:text-xl leading-relaxed text-pretty">{project.excerpt}</p>

      {isTall && (
        <div className="hidden md:block mt-5 xl:mt-8">
          <Button nativeButton={false} render={<Link href="/contact" />} variant="default" pill size="xl" icon={<ArrowRight />}>
            <span>Contact us</span>
          </Button>
        </div>
      )}
    </div>
  );
}

export default function Projects({ gap = "default", className }: ProjectsProps) {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <Section gap={gap} className={className}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src={buildingLineB} width={1920} height={1585} alt="Background" className="absolute inset-0 object-cover object-bottom w-full h-full" />
      </div>

      <SectionContent>
        <div className="container">
          <div className="row g-8 lg:g-15 items-start">
            {/* Left Column: Header + Tall Portrait Project */}
            <div className="md:column-6 flex flex-col justify-between">
              {/* Header */}
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="mb-10 lg:mb-15 xl:mb-20">
                <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 before:bg-primary">
                  Recent Works
                </span>
                <h2 className="text-darker font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-[1.17]">
                  Some of our portline made with love
                </h2>
              </ScrollReveal>

              {featuredProjects
                .filter((_, index) => index === 0)
                .map((project) => (
                  <ScrollReveal mode="fade" direction="bottom" delay={250} key={project.id}>
                    <ProjectCard project={project} isTall />
                  </ScrollReveal>
                ))}
            </div>

            {/* Right Column: Standard Project Cards */}
            <div className="md:column-6">
              <div className="flex flex-col gap-8 lg:gap-15 lg:pt-6">
                {featuredProjects
                  .filter((_, index) => index !== 0)
                  .map((project, index) => (
                    <ScrollReveal mode="fade" direction="bottom" className={getDelayClass(index)} key={project.id}>
                      <ProjectCard project={project} />
                    </ScrollReveal>
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-5 xl:mt-8 md:hidden">
            <Button nativeButton={false} render={<Link href="/contact" />} variant="default" pill size="xl" icon={<ArrowRight />}>
              <span>Contact us</span>
            </Button>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
