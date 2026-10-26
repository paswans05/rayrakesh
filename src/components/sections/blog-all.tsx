"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { BLOG_DATA, type BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";
import { useFormatDate } from "@/hooks/useFormatDate";

type BlogAllProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

const POSTS_PER_PAGE = 6;

export default function BlogAll({ gap = "default", className }: BlogAllProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Latest featured post (always at top)
  const featuredPost: BlogPost = BLOG_DATA.find((item: BlogPost) => item.featured) || BLOG_DATA[0];

  // Exclude featured post from the main grid list
  const otherPosts: BlogPost[] = BLOG_DATA.filter((item: BlogPost) => item.id !== featuredPost.id);

  // Pagination calculation
  const totalPages = Math.ceil(otherPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = otherPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const gridElem = document.getElementById("blog-grid");
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
          <div className="justify-center text-center row g-0">
            <div className="lg:column-7 xl:column-6">
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="2xl:px-8 flex flex-col items-center">
                <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 before:bg-primary">NEWS & ARTICLES</span>
                <h2 className="text-darker font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-[1.17]">Take a look at our latest blog & articles.</h2>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionHead>

      <SectionContent>
        <div className="container">
          <div id="blog-grid" className="row md:gy-10 xl:gy-15">
            {currentPosts.map((post: BlogPost, index: number) => (
              <ScrollReveal key={post.id + index} mode="fade" direction="bottom" className={cn("md:column-6 xl:column-4", getDelayClass(index))}>
                <Link href={`/blog/${post.id}`} className="group flex flex-col">
                  <Image src={post.image} alt={post.title} className="w-full" />
                  <div className="pt-6 md:pt-8 px-3 flex flex-col flex-1 justify-between">
                    <div className="text-body text-sm sm:text-base leading-relaxed font-normal mb-2.5 flex items-center">
                      <div>{useFormatDate(post.date)}</div>
                      <div className="mx-2.5 border-l border-body/20 h-4.5"></div>
                      <div>{post.comments || 5} Comments</div>
                    </div>
                    <h4 className="text-lg md:text-xl lg:text-[1.75rem] leading-snug font-bold text-darker group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
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
