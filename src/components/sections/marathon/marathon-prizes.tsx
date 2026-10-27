"use client";

import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MARATHON_DETAILS, MARATHON_PRIZES } from "@/data/marathon";
import { MedalFill, AwardFill, CheckCircleFill } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function MarathonPrizes() {
  const firstPrize = MARATHON_PRIZES.find((p) => p.rank === 1)!;
  const secondPrize = MARATHON_PRIZES.find((p) => p.rank === 2)!;
  const thirdPrize = MARATHON_PRIZES.find((p) => p.rank === 3)!;

  return (
    <Section id="prizes" gap="default" className="bg-darker relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <SectionHead className="text-center max-w-3xl mx-auto">
          <ScrollReveal mode="fade" direction="bottom">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Prize Money & Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              {MARATHON_DETAILS.prizesHeading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/70">
              Total Prize Pool: <span className="text-primary font-bold">{MARATHON_DETAILS.totalPrizePool}</span>. Cash awards for the top three, medals for the top 10, and a certificate for every participant in the 15 KM race.
            </p>
          </ScrollReveal>
        </SectionHead>

        <SectionContent className="mt-12">
          {/* Podium Layout:
              Desktop: 2nd place (left, med height), 1st place (center, tallest), 3rd place (right, lower height)
              Mobile: 1st -> 2nd -> 3rd vertically */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end max-w-6xl mx-auto">
            
            {/* 🥈 Second Prize (Desktop: Left, Mobile: 2nd in order) */}
            <div className="order-2 md:order-1">
              <ScrollReveal mode="fade" direction="bottom" delay={150}>
                <div className="relative rounded-2xl p-6 sm:p-8 bg-linear-to-b from-slate-800/80 to-slate-950 border border-slate-600/60 shadow-xl transition-all duration-300 hover:border-slate-400 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-300/20 text-slate-200 border border-slate-400/30">
                      🥈 Runner-Up
                    </span>
                    <MedalFill className="size-7 text-slate-300 drop-shadow-[0_0_10px_rgba(203,213,225,0.4)]" />
                  </div>

                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-400">2nd Place</div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1 tracking-tight">
                    {secondPrize.amountNPR}
                  </div>
                  <p className="text-sm text-slate-300/80 mt-3 pb-6 border-b border-white/10">
                    {secondPrize.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {secondPrize.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircleFill className="size-4 text-slate-400 shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Podium Base Accent */}
                  <div className="mt-8 pt-3 text-center rounded-lg bg-slate-800/50 border border-slate-700 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                    Podium Step II
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 🥇 First Prize (Desktop: Center & Elevated, Mobile: 1st in order) */}
            <div className="order-1 md:order-2 md:-translate-y-4">
              <ScrollReveal mode="fade" direction="bottom" delay={100}>
                <div className="relative rounded-3xl p-7 sm:p-10 bg-linear-to-b from-[#2e2311] via-[#1a1610] to-[#0d0c0a] border-2 border-primary shadow-2xl shadow-primary/20 transition-all duration-300 group hover:border-[#fef08a]">
                  
                  {/* Top Crown Ribbon */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-r from-primary via-[#fef08a] to-primary text-darker text-xs font-black uppercase tracking-widest shadow-lg">
                    ★ Champion Podium ★
                  </div>

                  <div className="flex items-center justify-between mb-4 mt-2">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-primary text-darker shadow-md">
                      🥇 First Prize
                    </span>
                    <MedalFill className="size-10 text-[#ffd700] drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] animate-pulse" />
                  </div>

                  <div className="text-sm font-bold uppercase tracking-wider text-primary">Overall Winner</div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#ffd700] via-[#fffbeb] to-[#caa05c] mt-1 tracking-tight">
                    {firstPrize.amountNPR}
                  </div>
                  <p className="text-sm text-white/90 mt-3 pb-6 border-b border-primary/30">
                    {firstPrize.description}
                  </p>

                  <ul className="mt-5 space-y-3 text-xs sm:text-sm text-white/95">
                    {firstPrize.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <AwardFill className="size-4.5 text-primary shrink-0" />
                        <span className="font-medium">{perk}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Podium Base Accent */}
                  <div className="mt-8 py-2 text-center rounded-xl bg-linear-to-r from-primary/30 via-primary/50 to-primary/30 border border-primary/60 text-xs font-mono font-black text-white uppercase tracking-widest shadow-inner">
                    Podium Step I • Gold Standard
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 🥉 Third Prize (Desktop: Right, Mobile: 3rd in order) */}
            <div className="order-3 md:order-3">
              <ScrollReveal mode="fade" direction="bottom" delay={200}>
                <div className="relative rounded-2xl p-6 sm:p-8 bg-linear-to-b from-[#241a14]/90 to-slate-950 border border-amber-900/60 shadow-xl transition-all duration-300 hover:border-amber-700 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-800/30 text-amber-200 border border-amber-700/40">
                      🥉 Third Place
                    </span>
                    <MedalFill className="size-7 text-[#cd7f32] drop-shadow-[0_0_10px_rgba(205,127,50,0.4)]" />
                  </div>

                  <div className="text-sm font-semibold uppercase tracking-wider text-amber-400/80">3rd Place</div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1 tracking-tight">
                    {thirdPrize.amountNPR}
                  </div>
                  <p className="text-sm text-amber-100/70 mt-3 pb-6 border-b border-white/10">
                    {thirdPrize.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-amber-100/90">
                    {thirdPrize.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircleFill className="size-4 text-[#cd7f32] shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Podium Base Accent */}
                  <div className="mt-8 pt-3 text-center rounded-lg bg-amber-950/40 border border-amber-900/50 text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Podium Step III
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Single-distance reminder */}
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-white/60 bg-white/5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10">
              <span className="size-2 rounded-full bg-primary" />
              Notice: The Rakesh Marathon features solely the <strong>15 KM</strong> distance category. Cash prizes and medals are awarded based on verified race results; every participant receives a certificate.
            </p>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
}
