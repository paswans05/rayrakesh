"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import pageHeader from "@/images/page-header-bg.jpg";

interface BreadcrumbItemData {
  label: ReactNode;
  href?: string;
}

interface PageHeaderProps {
  heading: string;
  breadcrumb?: BreadcrumbItemData[];
  className?: string;
  smallerHeading?: boolean;
}

export default function PageHeader({ heading, smallerHeading = false, breadcrumb = [], className }: PageHeaderProps) {
  return (
    <header className={cn("relative flex flex-col pt-(--menubar-height) mx-(--page-gap) mt-(--page-gap) rounded-(--radius)", className)}>
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-darker rounded-[inherit]">
        <Image src={pageHeader} width={1920} height={944} alt="Background" className="absolute inset-0 object-cover object-top w-full h-full" />
        <div className="absolute inset-0 bg-darker/40"></div>
        <div className="absolute inset-0 bg-linear-to-r from-darker/80 to-darker/0"></div>
      </div>
      <div className="relative py-12 lg:py-20 xl:py-30">
        <div className="container">
          <div className="row">
            <div className="xl:column-12">
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="flex flex-col justify-center gap-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    {breadcrumb.map((item, index) => (
                      <div key={`${item.label}-${index}`} className="contents">
                        <BreadcrumbItem>
                          {item.href ? (
                            <BreadcrumbLink render={<a href={item.href} />}>
                              {item.label}
                            </BreadcrumbLink>
                          ) : (
                            <BreadcrumbPage>{item.label}</BreadcrumbPage>
                          )}
                        </BreadcrumbItem>

                        {index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
                      </div>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
                <h2 className={cn("text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-pretty", smallerHeading ? "" : "2xl:text-[5rem]")}>{heading}</h2>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
