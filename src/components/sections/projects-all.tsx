"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { PROJECTS_DATA, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectsAllProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

const PROJECTS_PER_PAGE = 4;

export default function ProjectsAll({ gap = "default", className }: ProjectsAllProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(PROJECTS_DATA.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = PROJECTS_DATA.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const gridElem = document.getElementById("projects-grid");
    if (gridElem) {
      const menubarHeightStr = getComputedStyle(document.documentElement)
        .getPropertyValue("--menubar-height")
        .trim();
      const offset = parseInt(menubarHeightStr, 10) || 76;
      const elementPosition = gridElem.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset - 24;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section gap={gap} className={className}>
      <SectionHead>
        <div className="container">
          <div className="row g-0">
            <div className="lg:column-6 xl:column-5">
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="flex flex-col items-start">
                <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 before:bg-primary">RECENT WORKS</span>
                <h2 className="text-darker font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-[1.17]">Some of our Rakesh Ray made with love</h2>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>

      <SectionContent>
        <div className="container">
          <div id="projects-grid" className="row">
            {currentProjects.map((project: Project, index: number) => (
              <ScrollReveal key={project.id + index} mode="fade" direction="bottom" className={cn("md:column-6", getDelayClass(index))}>
                <Link href={`/projects/${project.id}`} className="group flex flex-col h-full">
                  <div className="relative w-full">
                    <Image src={project.image} alt={project.title} className="w-full" />
                  </div>
                  <div className="pt-6 flex flex-col flex-1 justify-between">
                    <h4 className="text-lg md:text-xl lg:text-3xl xl:text-4xl leading-tight font-bold text-darker group-hover:text-primary transition-colors line-clamp-2 mb-3">
                      {project.title}
                    </h4>
                    <p className="text-body text-base lg:text-lg xl:text-xl leading-relaxed text-pretty line-clamp-2">
                      {project.excerpt}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <ScrollReveal mode="fade" direction="bottom" delay={100} className="flex items-center justify-center gap-2 mt-12 pt-6">
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={cn(
                  "flex items-center justify-center size-10 rounded-full border transition-all cursor-pointer",
                  currentPage === 1
                    ? "border-light text-body/40 cursor-not-allowed opacity-50"
                    : "border-light text-darker hover:border-primary hover:text-primary bg-white shadow-xs"
                )}
                aria-label="Previous Page"
              >
                <ChevronLeft className="size-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  className={cn(
                    "flex items-center justify-center size-10 rounded-full text-sm font-semibold transition-all cursor-pointer",
                    currentPage === pageNum
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white border border-light text-darker hover:border-primary hover:text-primary"
                  )}
                >
                  {pageNum}
                </button>
              ))}

              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={cn(
                  "flex items-center justify-center size-10 rounded-full border transition-all cursor-pointer",
                  currentPage === totalPages
                    ? "border-light text-body/40 cursor-not-allowed opacity-50"
                    : "border-light text-darker hover:border-primary hover:text-primary bg-white shadow-xs"
                )}
                aria-label="Next Page"
              >
                <ChevronRight className="size-4" />
              </button>
            </ScrollReveal>
          )}
        </div>
      </SectionContent>
    </Section>
  );
}
