"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/context/language-context";
import { RANGOLI_FESTIVAL_DETAILS, RANGOLI_PRIZES } from "@/data/rangoli";
import { MedalFill, AwardFill, MapPinFill, CalendarAlt, Sparkles } from "@/components/icons";

interface RangoliHeroProps {
  onOpenSubmitModal: () => void;
  className?: string;
}

export default function RangoliHero({ onOpenSubmitModal, className }: RangoliHeroProps) {
  const { t, isNepali } = useLanguage();

  return (
    <header
      className={cn(
        "relative flex flex-col pt-(--menubar-height) mx-(--page-gap) mt-(--page-gap) rounded-(--radius) overflow-hidden bg-[#180824]",
        className
      )}
    >
      {/* Background Diwali & Warm Radial Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Festive Golden/Crimson Gradients */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] bg-rose-600/15 rounded-full blur-[160px]" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[130px]" />

        {/* Ambient Diya Light Motif Vignette */}
        <div className="absolute inset-0 bg-radial from-amber-500/5 via-darker/60 to-[#0e0417]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffd700_1px,transparent_1px)] [background-size:28px_28px] opacity-10" />
      </div>

      <div className="relative py-12 md:py-20 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
            <ScrollReveal mode="fade" direction="bottom" delay={100} className="flex flex-col items-center gap-5">
              
              {/* Festive Diya Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase bg-linear-to-r from-amber-500 via-primary to-rose-500 text-darker shadow-lg shadow-amber-500/25">
                  <span className="text-base">🪔</span>
                  {isNepali ? "शुभ दीपावली २०८३ विशेष" : "HAPPY DIWALI 2026 SPECIAL"}
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white/90 backdrop-blur-md border border-white/15">
                  <MapPinFill className="size-3.5 text-amber-400" />
                  {RANGOLI_FESTIVAL_DETAILS.location}
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-rose-500/20 text-rose-200 border border-rose-500/40">
                  {isNepali ? "राकेश रायको नेतृत्वमा अभियान" : `Initiative by ${RANGOLI_FESTIVAL_DETAILS.campaignLeader}`}
                </span>
              </div>

              {/* Event Title & Headlines */}
              <div className="space-y-3 mt-2">
                <p className="text-sm md:text-base font-bold tracking-[0.3em] text-amber-400 uppercase">
                  {isNepali ? "कला • संस्कृति • प्रकाश महोत्सव" : "ART • TRADITION • FESTIVAL OF LIGHTS"}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
                  {isNepali ? (
                    <>
                      रङ्गोली महोत्सव <br />
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-yellow-200 to-rose-400">
                        सर्वाधिक भोट पाउनेले जित्नेछन् पुरस्कार!
                      </span>
                    </>
                  ) : (
                    <>
                      Diwali Rangoli Festival <br />
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-yellow-200 to-rose-400">
                        Most Voted Rangolis Win Grand Prizes!
                      </span>
                    </>
                  )}
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed font-normal">
                {isNepali
                  ? "यस दीपावलीमा आफ्नो सुन्दर रङ्गोली बनाउनुहोस्, तस्बिर पठाउनुहोस् र भोट सङ्कलन गर्नुहोस्! सर्वाधिक भोट पाउने शीर्ष ३ रङ्गोलीले नगद पुरस्कार जित्नेछन्, शीर्ष १० लाई पदक र सबै सहभागीलाई प्रमाणपत्र!"
                  : "Create your festive Diwali Rangoli, submit your photo, and collect public votes! The entries with the most votes win grand cash awards (1st, 2nd & 3rd), top 10 receive medals & gift hampers, and every participant gets a certificate!"}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
                <Button
                  size="xl"
                  variant="default"
                  onClick={onOpenSubmitModal}
                  className="font-black text-base shadow-xl shadow-amber-500/25 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-darker border-0 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span className="text-lg">🪔</span>
                  {t("rangoli.hero_cta_submit", "Submit Your Rangoli")}
                </Button>

                <Button
                  size="xl"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#gallery" />}
                  className="bg-white/10 border-white/25 hover:bg-white/20 text-white backdrop-blur-sm font-bold"
                >
                  <span className="text-lg">❤️</span>
                  {t("rangoli.hero_cta_vote", "Browse & Vote (Live)")}
                </Button>
              </div>

              {/* Schedule Info Box */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-300 font-bold">
                    {isNepali ? "भोटिङ र प्रविष्टि खुला छ" : "Submissions & Voting Live Now"}
                  </span>
                </div>
                <span className="hidden sm:inline text-white/30">•</span>
                <div className="flex items-center gap-2">
                  <CalendarAlt className="size-4 text-amber-400 shrink-0" />
                  <span>
                    <strong>{isNepali ? "नतिजा:" : "Results:"}</strong> {isNepali ? "दीपावली / भाइटीका विशेष कार्यक्रम" : "Diwali Celebration Night"}
                  </span>
                </div>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="text-amber-300 font-semibold">
                  {isNepali ? "१००% निःशुल्क सहभागिता" : "100% Free Entry"}
                </span>
              </div>

            </ScrollReveal>
          </div>
        </div>

        {/* Prize Money Strip directly in Hero */}
        <div className="container mt-12 md:mt-16">
          <div className="max-w-5xl mx-auto p-6 md:p-8 rounded-3xl bg-[#230d35]/90 border border-amber-500/30 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
                  <AwardFill className="size-4 text-amber-400" />
                  {isNepali ? "प्रतियोगिता पुरस्कार तथा सम्मान" : "Official Diwali Competition Prizes"}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {isNepali ? "सर्वाधिक भोट पाउने शीर्ष ३ विजेतालाई नगद तथा ट्रफी" : "Top 3 Most Voted Entries Win Grand Cash Prizes"}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/80">
                <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                  {isNepali ? "शीर्ष १०: पदक र उपहार 🏅" : "Top 10: Medals & Hampers 🏅"}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-primary/20 text-primary border border-primary/30 font-semibold">
                  {isNepali ? "सबैलाई: प्रमाणपत्र 📜" : "All Participants: Certificates 📜"}
                </span>
              </div>
            </div>

            {/* 3 Prize Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {RANGOLI_PRIZES.map((prize) => {
                const isGold = prize.tier === "gold";
                const isSilver = prize.tier === "silver";
                return (
                  <div
                    key={prize.rank}
                    className={cn(
                      "relative p-5 rounded-2xl border transition-all duration-300",
                      isGold
                        ? "bg-linear-to-b from-amber-500/20 via-amber-950/40 to-darker border-amber-400 shadow-xl shadow-amber-500/10"
                        : isSilver
                        ? "bg-linear-to-b from-slate-300/15 via-slate-900/40 to-darker border-slate-400/50"
                        : "bg-linear-to-b from-amber-700/15 via-amber-950/30 to-darker border-amber-700/50"
                    )}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={cn(
                          "text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full",
                          isGold
                            ? "bg-amber-400 text-darker shadow-sm"
                            : isSilver
                            ? "bg-slate-200 text-darker"
                            : "bg-amber-600 text-white"
                        )}
                      >
                        {isNepali
                          ? prize.rank === 1
                            ? "🥇 प्रथम (Most Voted)"
                            : prize.rank === 2
                            ? "🥈 दोस्रो पुरस्कार"
                            : "🥉 तेस्रो पुरस्कार"
                          : prize.badge}
                      </span>
                      <MedalFill
                        className={cn(
                          "size-5",
                          isGold ? "text-[#ffd700]" : isSilver ? "text-[#e2e8f0]" : "text-[#cd7f32]"
                        )}
                      />
                    </div>
                    <div className="text-xs text-white/60 font-medium uppercase tracking-wider">
                      {isNepali
                        ? prize.rank === 1
                          ? "सर्वोत्कृष्ट रङ्गोली (Grand Champion)"
                          : prize.rank === 2
                          ? "दोस्रो स्थान (Runner-Up)"
                          : "तेस्रो स्थान (3rd Place)"
                        : prize.label}
                    </div>
                    <div
                      className={cn(
                        "text-2xl sm:text-3xl font-black mt-1 tracking-tight",
                        isGold ? "text-amber-300" : isSilver ? "text-slate-100" : "text-amber-200"
                      )}
                    >
                      {isNepali
                        ? prize.rank === 1
                          ? "रु. २१,०००"
                          : prize.rank === 2
                          ? "रु. ११,०००"
                          : "रु. ५,१००"
                        : prize.amountNPR}
                    </div>
                    <p className="text-xs text-white/70 mt-2 line-clamp-2">
                      {prize.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
