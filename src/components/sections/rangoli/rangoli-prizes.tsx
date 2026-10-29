"use client";

import React from "react";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RANGOLI_FESTIVAL_DETAILS, RANGOLI_PRIZES, RANGOLI_SPECIAL_AWARDS } from "@/data/rangoli";
import { MedalFill, AwardFill, CheckCircleFill } from "@/components/icons";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export default function RangoliPrizes() {
  const { t, isNepali } = useLanguage();
  const firstPrize = RANGOLI_PRIZES.find((p) => p.rank === 1)!;
  const secondPrize = RANGOLI_PRIZES.find((p) => p.rank === 2)!;
  const thirdPrize = RANGOLI_PRIZES.find((p) => p.rank === 3)!;

  return (
    <Section id="prizes" gap="default" className="bg-[#12051d] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        <SectionHead className="text-center max-w-3xl mx-auto">
          <ScrollReveal mode="fade" direction="bottom">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-3 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
              {isNepali ? "पुरस्कार तथा सम्मान" : "Festival Prize Structure"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              {isNepali ? RANGOLI_FESTIVAL_DETAILS.prizesHeadingNepali : RANGOLI_FESTIVAL_DETAILS.prizesHeading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              {isNepali ? RANGOLI_FESTIVAL_DETAILS.prizesSubheadingNepali : RANGOLI_FESTIVAL_DETAILS.prizesSubheading}
            </p>
          </ScrollReveal>
        </SectionHead>

        <SectionContent className="mt-12">
          {/* Podium Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end max-w-6xl mx-auto">
            
            {/* 🥈 Second Prize */}
            <div className="order-2 md:order-1">
              <ScrollReveal mode="fade" direction="bottom" delay={150}>
                <div className="relative rounded-3xl p-6 sm:p-8 bg-linear-to-b from-slate-800/90 to-slate-950 border border-slate-600/70 shadow-xl transition-all duration-300 hover:border-slate-400 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-300/20 text-slate-200 border border-slate-400/30">
                      🥈 {isNepali ? "दोस्रो स्थान" : "Runner-Up"}
                    </span>
                    <MedalFill className="size-8 text-slate-300 drop-shadow-[0_0_10px_rgba(203,213,225,0.4)]" />
                  </div>

                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    {isNepali ? "दोस्रो पुरस्कार (2nd Place)" : "2nd Place (Most Voted)"}
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1 tracking-tight">
                    {isNepali ? "रु. २,१००" : secondPrize.amountNPR}
                  </div>
                  <p className="text-sm text-slate-300/80 mt-3 pb-6 border-b border-white/10">
                    {secondPrize.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-200">
                    {secondPrize.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircleFill className="size-4 text-slate-400 shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-3 text-center rounded-xl bg-slate-800/60 border border-slate-700 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                    Podium II • Runner-Up
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 🥇 First Prize (Elevated Center) */}
            <div className="order-1 md:order-2 md:-translate-y-4">
              <ScrollReveal mode="fade" direction="bottom" delay={100}>
                <div className="relative rounded-3xl p-7 sm:p-10 bg-linear-to-b from-[#3a1d08] via-[#241108] to-[#120603] border-2 border-amber-400 shadow-2xl shadow-amber-500/20 transition-all duration-300 group hover:border-yellow-200">
                  
                  {/* Top Crown Ribbon */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-r from-amber-400 via-yellow-200 to-amber-400 text-darker text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <span>👑</span> Grand Champion • Most Voted <span>👑</span>
                  </div>

                  <div className="flex items-center justify-between mb-4 mt-2">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-darker shadow-md">
                      🥇 {isNepali ? "प्रथम पुरस्कार" : "1st Prize"}
                    </span>
                    <MedalFill className="size-10 text-[#ffd700] drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] animate-pulse" />
                  </div>

                  <div className="text-sm font-bold uppercase tracking-wider text-amber-400">
                    {isNepali ? "सर्वोत्कृष्ट रङ्गोली विजेता" : "Grand Champion (Highest Votes)"}
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#ffd700] via-[#fffbeb] to-[#f59e0b] mt-1 tracking-tight">
                    {isNepali ? "रु. ३,१००" : firstPrize.amountNPR}
                  </div>
                  <p className="text-sm text-white/90 mt-3 pb-6 border-b border-amber-400/30">
                    {firstPrize.description}
                  </p>

                  <ul className="mt-5 space-y-3 text-xs sm:text-sm text-white/95">
                    {firstPrize.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <AwardFill className="size-4.5 text-amber-400 shrink-0" />
                        <span className="font-medium">{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 py-2.5 text-center rounded-xl bg-linear-to-r from-amber-500/40 via-amber-500/60 to-amber-500/40 border border-amber-400 text-xs font-mono font-black text-white uppercase tracking-widest shadow-inner">
                    Podium I • Diwali Grand Champion
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 🥉 Third Prize */}
            <div className="order-3 md:order-3">
              <ScrollReveal mode="fade" direction="bottom" delay={200}>
                <div className="relative rounded-3xl p-6 sm:p-8 bg-linear-to-b from-[#2a170e]/95 to-slate-950 border border-amber-800/70 shadow-xl transition-all duration-300 hover:border-amber-600 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-800/30 text-amber-200 border border-amber-700/40">
                      🥉 {isNepali ? "तेस्रो स्थान" : "3rd Place"}
                    </span>
                    <MedalFill className="size-8 text-[#cd7f32] drop-shadow-[0_0_10px_rgba(205,127,50,0.4)]" />
                  </div>

                  <div className="text-sm font-semibold uppercase tracking-wider text-amber-400/80">
                    {isNepali ? "तेस्रो पुरस्कार (3rd Place)" : "3rd Place (Most Voted)"}
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1 tracking-tight">
                    {isNepali ? "रु. १,१००" : thirdPrize.amountNPR}
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

                  <div className="mt-8 pt-3 text-center rounded-xl bg-amber-950/50 border border-amber-900/60 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    Podium III • Second Runner-Up
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Special Awards for Top 10 & Every Participant */}
          <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Top 10 Medals & Hampers */}
            <ScrollReveal mode="fade" direction="bottom" delay={250}>
              <div className="relative p-6 sm:p-8 rounded-3xl bg-linear-to-br from-amber-500/15 via-[#230d35] to-[#12051d] border border-amber-500/40 shadow-xl overflow-hidden group hover:border-amber-400 transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      🏅 {isNepali ? "शीर्ष १० सम्मान" : "Rank 1 to 10 Honors"}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-3">
                      {isNepali ? RANGOLI_SPECIAL_AWARDS.topTen.titleNepali : RANGOLI_SPECIAL_AWARDS.topTen.title} 🏅
                    </h3>
                  </div>
                  <div className="size-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-3xl shadow-inner shrink-0">
                    🏅
                  </div>
                </div>

                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  {isNepali
                    ? "सर्वाधिक भोट प्राप्त गर्ने शीर्ष १० रङ्गोलीका रचनाकारलाई विशेष दीपावली पदक, उपहार ह्याम्पर र सम्मान प्रमाणपत्र प्रदान गरिनेछ।"
                    : RANGOLI_SPECIAL_AWARDS.topTen.description}
                </p>

                <ul className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs sm:text-sm text-amber-100/90">
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-amber-400 shrink-0" />
                    <span>{isNepali ? "आधिकारिक शीर्ष १० दीपावली पदक 🏅" : "Official Top 10 Festival Medals 🏅"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-amber-400 shrink-0" />
                    <span>{isNepali ? "विशेष दीपावली मिठाई तथा उपहार ह्याम्पर" : "Festive Sweets & Gift Hampers"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-amber-400 shrink-0" />
                    <span>{isNepali ? "आधिकारिक सम्मान पत्र तथा लिडरबोर्ड फिचर" : "Certificate of Honor & Leaderboard Feature"}</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Every Participant Certificate */}
            <ScrollReveal mode="fade" direction="bottom" delay={300}>
              <div className="relative p-6 sm:p-8 rounded-3xl bg-linear-to-br from-rose-500/15 via-[#230d35] to-[#12051d] border border-rose-500/40 shadow-xl overflow-hidden group hover:border-rose-400 transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      📜 {isNepali ? "प्रत्येक सहभागी कलाकार" : "Every Single Participant"}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-3">
                      {isNepali ? "सबैलाई आधिकारिक प्रमाणपत्र 📜" : "Certificate for Every Participant 📜"}
                    </h3>
                  </div>
                  <div className="size-14 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-3xl shadow-inner shrink-0">
                    📜
                  </div>
                </div>

                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  {isNepali
                    ? "आफ्नो मौलिक रङ्गोली प्रविष्टि पठाउने प्रत्येक सहभागीलाई आधिकारिक डिजिटल सहभागिता प्रमाणपत्र प्रदान गरिनेछ।"
                    : RANGOLI_SPECIAL_AWARDS.allParticipants.description}
                </p>

                <ul className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs sm:text-sm text-rose-100/90">
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-rose-400 shrink-0" />
                    <span>{isNepali ? "प्रत्येक सहभागीलाई आधिकारिक डिजिटल प्रमाणपत्र" : "Official Digital Certificate of Participation"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-rose-400 shrink-0" />
                    <span>{isNepali ? "अनलाइन प्रदर्शनी ग्यालरीमा स्थायी स्थान" : "Permanent Showcase in Online Gallery"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-rose-400 shrink-0" />
                    <span>{isNepali ? "सांस्कृतिक संरक्षणमा योगदानको कदर" : "Appreciation for Preserving Cultural Heritage"}</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </SectionContent>
      </div>
    </Section>
  );
}

