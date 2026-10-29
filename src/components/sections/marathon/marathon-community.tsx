"use client";

import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { COMMUNITY_PILLARS, MARATHON_DETAILS } from "@/data/marathon";
import { QuoteLeft } from "@/components/icons";

export default function MarathonCommunity() {
  return (
    <Section id="community" gap="default" className="bg-darker text-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-danger/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Section Heading */}
        <SectionHead className="text-center max-w-3xl mx-auto">
          <ScrollReveal mode="fade" direction="bottom">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Community & Vision
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Run Together. Build a Better Tomorrow.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/70">
              The Rakesh Marathon is an initiative focused on encouraging grassroots athletics, positive civic participation, and healthy living across communities in Nepal.
            </p>
          </ScrollReveal>
        </SectionHead>

        <SectionContent className="mt-12">

          {/* Main Campaign Feature: Robust flex-based 2-column layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl mx-auto">

            {/* Left: Campaign Vision Statement */}
            <div className="w-full lg:w-7/12 flex flex-col">
              <ScrollReveal mode="fade" direction="bottom" className="h-full flex flex-col flex-1">
                <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md h-full flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="size-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                      <QuoteLeft className="size-6 text-primary" />
                    </div>

                    <blockquote className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
                      “A healthy community is an empowered community. When we run side by side, we break barriers, build resilience, and inspire our youth to lead with discipline and purpose.”
                    </blockquote>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">{MARATHON_DETAILS.campaignLeader}</h4>
                      <p className="text-xs text-primary font-medium tracking-wider uppercase">Community Initiative Leader</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono font-bold">
                      Parsa • Nepal
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Quick Action & Stat Summary */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between gap-4">
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="flex-1 flex flex-col">
                <div className="p-6 sm:p-8 rounded-2xl bg-linear-to-br from-primary/20 via-darker to-darker border border-primary/40 shadow-xl flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">Event Purpose</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Community Wellness & Athletic Spirit</h3>
                    <p className="text-sm text-white/75 mt-3 leading-relaxed">
                      Designed as an inclusive athletic gathering where amateur runners, aspiring youth, and veteran marathoners come together under a unified 15 KM challenge.
                    </p>
                  </div>

                  <div className="mt-6 pt-4">
                    <Button
                      size="lg"
                      variant="default"
                      data-open-register-modal="true"
                      full
                      className="font-bold text-sm shadow-lg shadow-primary/25 cursor-pointer"
                    >
                      Be Part of Rakesh Marathon
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal mode="fade" direction="bottom" delay={150}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-2xl sm:text-3xl font-black text-primary">15 KM</div>
                      <div className="text-xs text-white/60 mt-1 uppercase tracking-wider font-semibold">Single Distance</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-2xl sm:text-3xl font-black text-white">{MARATHON_DETAILS.totalPrizePool}</div>
                      <div className="text-xs text-white/60 mt-1 uppercase tracking-wider font-semibold">Prize Pool</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* 5 Core Community Pillars */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">Core Objectives</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Five Pillars of the Marathon</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {COMMUNITY_PILLARS.map((pillar, idx) => (
                <ScrollReveal key={idx} mode="fade" direction="bottom" delay={idx * 60} className="h-full">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors h-full flex flex-col justify-between group">
                    <div>
                      <div className="size-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-3 text-xs font-mono font-bold group-hover:bg-primary group-hover:text-darker transition-colors">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-white/70 mt-3 pt-3 border-t border-white/10 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Clear Call to Action Bottom Box */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-linear-to-r from-[#1f1910] via-darker to-[#1f1910] border border-primary/30 text-center max-w-4xl mx-auto shadow-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Join The Movement</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
              Be Part of Rakesh Marathon
            </h3>
            <p className="text-sm sm:text-base text-white/75 mt-3 max-w-xl mx-auto">
              Run for fitness, compete for the podium prizes, and join the community in Parsa. Every participant receives an official runner card, bib pass, certificate, and medals for the top finishers.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="xl"
                variant="default"
                data-open-register-modal="true"
                className="font-bold shadow-xl shadow-primary/25 cursor-pointer"
              >
                Register Now for 15 KM
              </Button>
              <Button
                size="xl"
                variant="outline"
                nativeButton={false}
                render={<a href="#prizes" />}
                className="border-white/20 text-white hover:bg-white/10"
              >
                View Prize Money
              </Button>
            </div>
          </div>

        </SectionContent>
      </div>
    </Section>
  );
}
