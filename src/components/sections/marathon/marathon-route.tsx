"use client";

import Image from "next/image";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ROUTE_CHECKPOINTS, PREPARATION_GUIDELINES } from "@/data/marathon";
import marathonRouteMap from "@/images/marathon-route-map.jpg";
import {
  MapPinFill,
  Activity,
  Capsule,
  CheckCircleFill,
  Shield,
  FlagFill,
  InfoFill
} from "@/components/icons";

export default function MarathonRoute() {
  return (
    <Section id="route" gap="default" className="bg-lightest relative overflow-hidden">
      <div className="container">
        
        {/* Section Heading */}
        <SectionHead className="text-center max-w-3xl mx-auto">
          <ScrollReveal mode="fade" direction="bottom">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3 px-3 py-1 rounded-full bg-primary/10">
              Course & Conditioning
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-darker uppercase tracking-tight">
              15 KM Route & Preparation
            </h2>
            <p className="mt-4 text-base sm:text-lg text-body">
              The 15-kilometer Parsa course is being finalized. The official route, aid points, and checkpoints will be announced once confirmed.
            </p>
          </ScrollReveal>
        </SectionHead>

        <SectionContent className="mt-12">
          {/* Route Map Graphic Card */}
          <ScrollReveal mode="fade" direction="bottom" delay={100}>
            <div className="rounded-3xl overflow-hidden border border-lighter bg-darker shadow-2xl relative">
              <div className="relative aspect-16/9 w-full max-h-[550px] overflow-hidden">
                <Image
                  src={marathonRouteMap}
                  alt="Proposed 15 KM Rakesh Marathon route map for Parsa"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-linear-to-t from-darker via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-darker/90 backdrop-blur-md border border-white/15 text-white">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Course Map Blueprint</span>
                    <h4 className="text-lg sm:text-xl font-bold text-white">Parsa 15 KM Elevation &amp; Landmark Profile</h4>
                  </div>
                  <div className="text-xs px-3 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/40 font-mono">
                    Official Map Pending Final Traffic Clearance
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Checkpoints Timeline */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">Course Navigation</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-darker mt-1">Official Route Waypoints</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
              {ROUTE_CHECKPOINTS.map((cp, idx) => (
                <ScrollReveal key={idx} mode="fade" direction="bottom" delay={idx * 60}>
                  <div className="p-5 rounded-2xl bg-white border border-lighter shadow-xs hover:border-primary/40 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-black px-2.5 py-1 rounded bg-darker text-primary font-mono">
                          {cp.distance}
                        </span>
                        {cp.type === "start" || cp.type === "finish" ? (
                          <FlagFill className="size-4 text-primary" />
                        ) : cp.type === "medical" ? (
                          <Shield className="size-4 text-danger" />
                        ) : (
                          <MapPinFill className="size-4 text-primary" />
                        )}
                      </div>
                      <h5 className="font-bold text-darker text-base leading-snug">{cp.title}</h5>
                      <p className="text-xs text-primary font-semibold mt-1">{cp.landmark}</p>
                    </div>
                    <p className="text-xs text-body mt-3 pt-3 border-t border-lighter leading-relaxed">
                      {cp.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Race Preparation Guidelines */}
          <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-darker text-white border border-white/10">
            <div className="max-w-2xl mb-8">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">Athlete Conditioning</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Preparation & Race-Day Readiness</h3>
              <p className="text-sm text-white/70 mt-2">
                Conquering 15 KM requires thoughtful pacing, consistent hydration, and trusted gear. Follow these four key pillars for a rewarding race experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PREPARATION_GUIDELINES.map((guide, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                  <div className="size-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                    <Activity className="size-5" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-primary font-bold">
                    {guide.category}
                  </div>
                  <h4 className="text-lg font-bold text-white mt-1">{guide.title}</h4>
                  <p className="text-xs text-white/75 mt-2 leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </SectionContent>
      </div>
    </Section>
  );
}
