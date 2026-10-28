import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/sections/page-header";
import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CollapsibleCard } from "@/components/ui/collapsible-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  ArrowRight,
  ChevronsRight,
  CallAlt,
  Mail,
  Check,
} from "@/components/icons";
import { SERVICES_TWO_DATA, type ServiceTwoItem } from "@/data/services";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return SERVICES_TWO_DATA.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service =
    SERVICES_TWO_DATA.find((item) => item.id === id || item.href === `/services/${id}`) ||
    SERVICES_TWO_DATA[0];

  return {
    title: `${service.title} - Rakesh Ray Services`,
    description: `Learn more about "${service.title}" - Public service and community empowerment initiative by Rakesh Ray in Parsa, Nepal.`,
  };
}

interface CtaCardProps {
  className?: string;
}

function CtaCard({ className }: CtaCardProps) {
  return (
    <div className={cn("bg-darker text-white p-6 sm:p-7 flex flex-col gap-4 shadow-xl relative overflow-hidden", className)}>
      <h4 className="text-lg sm:text-lg font-semibold text-white">
        Need Custom Architectural Planning?
      </h4>
      <p className="text-white/70 text-sm leading-relaxed">
        Speak directly with our principal interior architects to evaluate space potential and calculate project estimates.
      </p>
      <div className="flex flex-col gap-3 pt-2 text-sm">
        <a href="tel:+18005552724" className="flex items-center gap-3 text-white/90 hover:text-primary transition-colors">
          <CallAlt className="size-4 text-primary fill-current shrink-0" />
          <span>+1 (800) 555-ARCHITECT</span>
        </a>
        <a href="mailto:erakesh.ray@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-primary transition-colors">
          <Mail className="size-4 text-primary fill-current shrink-0" />
          <span>erakesh.ray@gmail.com</span>
        </a>
      </div>

      <div className="pt-2">
        <Button nativeButton={false} render={<Link href="/contact" />} variant="default" pill size="lg" icon={<ArrowRight />}>
          <span>Request Consultation</span>
        </Button>
      </div>
    </div>
  );
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;

  // Find service from SERVICES_TWO_DATA to extract the image and title
  const service: ServiceTwoItem | undefined =
    SERVICES_TWO_DATA.find((item) => item.id === id || item.href === `/services/${id}`) ||
    (id === "service-1" ? SERVICES_TWO_DATA[0] : undefined) ||
    (id === "service-2" ? SERVICES_TWO_DATA[1] : undefined) ||
    (id === "service-3" ? SERVICES_TWO_DATA[2] : undefined) ||
    (id === "service-4" ? SERVICES_TWO_DATA[3] : undefined) ||
    (id === "service-5" ? SERVICES_TWO_DATA[4] : undefined) ||
    (id === "service-6" ? SERVICES_TWO_DATA[5] : undefined) ||
    SERVICES_TWO_DATA[0];

  if (!service) {
    notFound();
  }

  return (
    <React.Fragment>
      <PageHeader
        heading={service.title}
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Service" },
          { label: service.title },
        ]}
      />

      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Section gap="default">
          <SectionContent>
            <div className="container">
              <div className="row g-8 lg:g-12 items-start">
                {/* -------------------- LEFT SIDEBAR -------------------- */}
                <div className="lg:column-4">
                  <div className="sticky top-28 space-y-8">
                    <ScrollReveal delay={100}>
                      <CollapsibleCard title="Our Services" expanded="lg" headerClassName="px-5 py-4">
                        <div className="flex flex-col">
                          {SERVICES_TWO_DATA.map((navItem) => {
                            const isActive = navItem.id === service.id;

                            return (
                              <Link
                                key={navItem.id}
                                href={navItem.href}
                                className={cn(
                                  "flex items-center justify-between py-4 px-5 text-sm/normal font-normal transition-all",
                                  isActive
                                    ? "bg-darker text-white font-semibold"
                                    : "text-darker border-b border-x border-darkest/8 hover:bg-primary-lighter"
                                )}
                              >
                                <span>{navItem.title}</span>
                                <ChevronsRight
                                  className={cn(
                                    "size-4 shrink-0 transition-transform",
                                    isActive ? "fill-primary translate-x-1" : "opacity-0"
                                  )}
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </CollapsibleCard>
                    </ScrollReveal>

                    <ScrollReveal delay={200} className="hidden lg:block">
                      <CtaCard />
                    </ScrollReveal>
                  </div>
                </div>

                {/* -------------------- RIGHT CONTENT -------------------- */}
                <div className="lg:column-8">
                  {/* Main Featured Hero Image */}
                  <ScrollReveal delay={100} className="mb-8 md:mb-10">
                    <div className="relative w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        priority
                        className="object-cover object-center w-full h-full max-h-80 md:max-h-100 lg:max-h-114"
                      />
                    </div>
                  </ScrollReveal>

                  {/* Intro Narrative */}
                  <ScrollReveal delay={150} className="mb-10 sm:mb-12">
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase block mb-2.5">
                      Comprehensive Architectural Solutions
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darker tracking-tight leading-[1.18] mb-5">
                      Structural Integrity Meets Aesthetic Excellence
                    </h2>
                    <p className="text-body text-base sm:text-lg leading-relaxed text-pretty">
                      We deliver end-to-end interior architecture for spaces where structure and design carry equal weight — from luxury residential renovations to full-scale corporate fitouts. Every engagement begins with spatial diagnostics: how a floor plate breathes, where load-bearing constraints meet design ambition, and how daylight, acoustics, and circulation interact across the finished volume. The result is space that performs structurally and reads as considered architecture, not applied decoration.
                    </p>
                  </ScrollReveal>

                  {/* Key Engineering Features */}
                  <ScrollReveal delay={200} className="mb-10 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-darker mb-5">
                      Key Engineering Features
                    </h3>
                    <div className="bg-primary/10 p-6 sm:p-8">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3.5">
                          <div className="size-6 shrink-0 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-0.5">
                            <Check className="size-4 fill-current" />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="text-base font-bold text-darker leading-snug mb-1">
                              3D Photorealistic Rendering &amp; Walkthrough
                            </h4>
                            <p className="text-sm text-body leading-relaxed">
                              Immersive spatial visualization before a single wall moves.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                          <div className="size-6 shrink-0 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-0.5">
                            <Check className="size-4 fill-current" />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="text-base font-bold text-darker leading-snug mb-1">
                              Structural Space Optimization &amp; Ergonomics
                            </h4>
                            <p className="text-sm text-body leading-relaxed">
                              Layouts engineered for flow, light, and human scale.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                          <div className="size-6 shrink-0 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-0.5">
                            <Check className="size-4 fill-current" />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="text-base font-bold text-darker leading-snug mb-1">
                              Custom Joinery &amp; Architectural Millwork
                            </h4>
                            <p className="text-sm text-body leading-relaxed">
                              Bespoke fabrication detailed to the millimeter.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                          <div className="size-6 shrink-0 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-0.5">
                            <Check className="size-4 fill-current" />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="text-base font-bold text-darker leading-snug mb-1">
                              Acoustic &amp; Environmental Lighting Integration
                            </h4>
                            <p className="text-sm text-body leading-relaxed">
                              Sound and light tuned as structural elements, not add-ons.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3.5 sm:col-span-2">
                          <div className="size-6 shrink-0 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-0.5">
                            <Check className="size-4 fill-current" />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="text-base font-bold text-darker leading-snug mb-1">
                              HVAC &amp; Utility Layout Alignment
                            </h4>
                            <p className="text-sm text-body leading-relaxed">
                              Mechanical systems coordinated into the architecture from the first schematic.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Core Benefits Grid */}
                  <div className="mb-10 sm:mb-12">
                    <ScrollReveal delay={100} className="mb-5">
                      <h3 className="text-xl sm:text-2xl font-bold text-darker">
                        Core Benefits
                      </h3>
                    </ScrollReveal>
                    <div className="grid min-[480px]:grid-cols-3 gap-4 md:gap-5">
                      <ScrollReveal delay={100} className="p-5 sm:p-6 border border-darker/10 bg-white shadow-xs flex flex-col justify-between h-full">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
                          FIG. 01
                        </span>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-darker mb-2 leading-snug">
                            Maximized Structural Efficiency
                          </h4>
                          <p className="text-xs sm:text-sm text-body leading-relaxed">
                            Every square foot engineered to serve its place in the plan.
                          </p>
                        </div>
                      </ScrollReveal>

                      <ScrollReveal delay={200} className="p-5 sm:p-6 border border-darker/10 bg-white shadow-xs flex flex-col justify-between h-full">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
                          FIG. 02
                        </span>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-darker mb-2 leading-snug">
                            Enhanced Commercial &amp; Property Value
                          </h4>
                          <p className="text-xs sm:text-sm text-body leading-relaxed">
                            Design decisions that compound into long-term asset value.
                          </p>
                        </div>
                      </ScrollReveal>

                      <ScrollReveal delay={300} className="p-5 sm:p-6 border border-darker/10 bg-white shadow-xs flex flex-col justify-between h-full">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
                          FIG. 03
                        </span>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-darker mb-2 leading-snug">
                            End-to-End Turnkey Execution
                          </h4>
                          <p className="text-xs sm:text-sm text-body leading-relaxed">
                            One team accountable from concept sketch to move-in day.
                          </p>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>

                  {/* Technical Specifications Table */}
                  <div className="mb-10 sm:mb-12">
                    <ScrollReveal delay={100} className="mb-5">
                      <h3 className="text-xl sm:text-2xl font-bold text-darker">
                        Technical Specifications
                      </h3>
                    </ScrollReveal>
                    <ScrollReveal delay={150} className="overflow-hidden border border-darker/12 bg-white shadow-xs">
                      <div className="divide-y divide-darker/10">
                        <div className="row items-center g-0 p-4 sm:p-5 odd:bg-white even:bg-primary/10">
                          <div className="column-12 sm:column-4 font-bold text-xs sm:text-sm uppercase tracking-wider text-darker mb-1 sm:mb-0">
                            ARCHITECTURAL SCOPE
                          </div>
                          <div className="column-12 sm:column-8 text-sm sm:text-base text-body">
                            Concept Design, Structural Layout, 3D Rendering &amp; On-Site Engineering
                          </div>
                        </div>

                        <div className="row items-center g-0 p-4 sm:p-5 odd:bg-white even:bg-primary/10">
                          <div className="column-12 sm:column-4 font-bold text-xs sm:text-sm uppercase tracking-wider text-darker mb-1 sm:mb-0">
                            PROJECT TYPES
                          </div>
                          <div className="column-12 sm:column-8 text-sm sm:text-base text-body">
                            High-End Residential, Corporate Office, Retail &amp; Hospitality
                          </div>
                        </div>

                        <div className="row items-center g-0 p-4 sm:p-5 odd:bg-white even:bg-primary/10">
                          <div className="column-12 sm:column-4 font-bold text-xs sm:text-sm uppercase tracking-wider text-darker mb-1 sm:mb-0">
                            MATERIAL STANDARDS
                          </div>
                          <div className="column-12 sm:column-8 text-sm sm:text-base text-body">
                            Fire-Rated Panels, Acoustic Drywalls, Sustainable Timber
                          </div>
                        </div>

                        <div className="row items-center g-0 p-4 sm:p-5 odd:bg-white even:bg-primary/10">
                          <div className="column-12 sm:column-4 font-bold text-xs sm:text-sm uppercase tracking-wider text-darker mb-1 sm:mb-0">
                            COMPLIANCE
                          </div>
                          <div className="column-12 sm:column-8 text-sm sm:text-base text-body">
                            Local Building Code &amp; Safety Compliant
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Frequently Asked Questions */}
                  <div className="mb-8">
                    <ScrollReveal delay={100} className="mb-5">
                      <h3 className="text-xl sm:text-2xl font-bold text-darker">
                        Frequently Asked Questions
                      </h3>
                    </ScrollReveal>
                    <ScrollReveal delay={150}>
                      <Accordion defaultValue={["item-0"]} className="flex flex-col">
                        <AccordionItem value="item-0" className="not-first:-mt-px">
                          <AccordionTrigger className="text-base sm:text-lg font-bold">
                            What is the difference between Interior Architecture and Interior Design?
                          </AccordionTrigger>
                          <AccordionContent className="text-sm sm:text-base text-body leading-relaxed">
                            Interior architecture deals with the structural and spatial framework of a space – load-bearing changes, layout, circulation, and building systems. Interior design works within that framework to shape finishes, furnishings, and atmosphere. Our team handles both, so structural ideals and aesthetic choices are made together, not in sequence.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-1" className="not-first:-mt-px">
                          <AccordionTrigger className="text-base sm:text-lg font-bold">
                            Do you handle site supervision and full execution?
                          </AccordionTrigger>
                          <AccordionContent className="text-sm sm:text-base text-body leading-relaxed">
                            Yes, we provide end-to-end site supervision, vendor coordination, and architectural oversight to ensure execution matches specifications.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </ScrollReveal>
                  </div>

                  {/* Mobile Consultation CTA */}
                  <ScrollReveal delay={100} className="lg:hidden mt-8">
                    <CtaCard />
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </SectionContent>
        </Section>
      </main>
    </React.Fragment>
  );
}
