"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import marathonAthletes from "@/images/marathon-athletes.jpg";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MARATHON_DETAILS, MARATHON_PRIZES, MARATHON_REGISTRATION_URL } from "@/data/marathon";
import { MedalFill, MapPinFill, CalendarAlt, ClockFill, ArrowDown } from "@/components/icons";

interface MarathonHeroProps {
  className?: string;
}

export default function MarathonHero({ className }: MarathonHeroProps) {
  const { t, isNepali } = useLanguage();
  return (
    <header className={cn("relative flex flex-col pt-(--menubar-height) mx-(--page-gap) mt-(--page-gap) rounded-(--radius) overflow-hidden", className)}>
      {/* Background Banner with Depth Overlays */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-darker rounded-[inherit]">
        <Image
          src={marathonAthletes}
          alt="Rakesh Marathon 15 KM Athletes in Parsa Nepal"
          priority
          width={1920}
          height={1080}
          className="absolute inset-0 object-cover object-center w-full h-full scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        />
        {/* Darkening & Color Grading Overlays */}
        <div className="absolute inset-0 bg-darker/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-linear-to-t from-darker via-darker/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-darker/90 via-darker/50 to-transparent" />
      </div>

      <div className="relative py-12 md:py-20 lg:py-28 xl:py-32">
        <div className="container">
          <div className="row items-center">
            <div className="column-12 xl:column-10 2xl:column-9">
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="flex flex-col gap-6">
                
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-primary text-darker shadow-lg shadow-primary/20">
                    <span className="size-2 rounded-full bg-darker animate-pulse" />
                    {isNepali ? "१५ किमी दौड" : "15 KM RACE"}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white/90 backdrop-blur-md border border-white/15">
                    <MapPinFill className="size-3.5 text-primary" />
                    {MARATHON_DETAILS.location}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-danger/20 text-white border border-danger/40">
                    {isNepali ? "राकेश रायको नेतृत्वमा अभियान" : `Campaign by ${MARATHON_DETAILS.campaignLeader}`}
                  </span>
                </div>

                {/* Event Title & Headlines */}
                <div className="space-y-3">
                  <p className="text-sm md:text-base font-semibold tracking-[0.25em] text-primary uppercase">
                    {MARATHON_DETAILS.eventName} • {MARATHON_DETAILS.tagline}
                  </p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.05]">
                    15 KM. One Challenge. <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-light to-white">
                      One Community.
                    </span>
                  </h1>
                </div>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed font-normal">
                  Challenge yourself, celebrate fitness, and run toward a stronger community in Nepal. Join runners across Parsa in this 15 KM community marathon.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button
                    size="xl"
                    variant="default"
                    data-open-register-modal="true"
                    className="font-bold shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    {t("nav.register_now", "Register Now")}
                  </Button>
                  <Button
                    size="xl"
                    variant="outline"
                    nativeButton={false}
                    render={<a href="#prizes" />}
                    className="bg-white/5 border-white/25 hover:bg-white/15 text-white backdrop-blur-sm"
                  >
                    {isNepali ? "पुरस्कार हेर्नुहोस्" : "View Prizes"}
                  </Button>
                </div>

                {/* Configurable Schedule Notice */}
                <div className="mt-4 flex flex-wrap items-center gap-4 p-4 rounded-xl bg-dark/70 border border-white/10 backdrop-blur-md max-w-2xl text-xs sm:text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <CalendarAlt className="size-4 text-primary shrink-0" />
                    <span><strong>Date:</strong> {MARATHON_DETAILS.schedule.eventDate}</span>
                  </div>
                  <div className="hidden sm:block text-white/30">•</div>
                  <div className="flex items-center gap-2">
                    <ClockFill className="size-4 text-primary shrink-0" />
                    <span><strong>Start:</strong> {MARATHON_DETAILS.schedule.assemblyTime}</span>
                  </div>
                </div>

              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Prize Money Strip directly in Hero */}
        <div className="container mt-12 md:mt-16 lg:mt-20">
          <div className="p-6 md:p-8 rounded-2xl bg-darker/85 border border-white/15 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-primary font-bold">
                  {isNepali ? "आधिकारिक पुरस्कार राशि" : "Official Prize Pool"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {isNepali ? `कुल पुरस्कार राशि: ${t("marathon.prize_pool", "रु. ५०,०००")}` : `Total Prize Money: ${MARATHON_DETAILS.totalPrizePool}`}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/80">
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-white font-mono font-semibold">
                  {isNepali ? "१५ किमी दौड" : "15 KM Exclusively"}
                </span>
                <span>•</span>
                <span className="text-amber-300 font-medium">
                  {isNepali ? "शीर्ष १०: पदक 🏅" : "Top 10: Medals 🏅"}
                </span>
                <span>•</span>
                <span className="text-primary font-medium">
                  {isNepali ? "सबैलाई: प्रमाणपत्र 📜" : "All Runners: Certificates 📜"}
                </span>
              </div>
            </div>

            {/* 3 Prize Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {MARATHON_PRIZES.map((prize) => {
                const isGold = prize.tier === "gold";
                const isSilver = prize.tier === "silver";
                return (
                  <div
                    key={prize.rank}
                    className={cn(
                      "relative p-5 rounded-xl border transition-all duration-300",
                      isGold
                        ? "bg-linear-to-b from-[#caa05c]/25 via-darker to-darker border-[#caa05c] shadow-lg shadow-[#caa05c]/10"
                        : isSilver
                        ? "bg-linear-to-b from-white/15 via-darker to-darker border-white/30"
                        : "bg-linear-to-b from-[#d97706]/15 via-darker to-darker border-[#d97706]/40"
                    )}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={cn(
                        "text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full",
                        isGold ? "bg-primary text-darker" : isSilver ? "bg-white/20 text-white" : "bg-[#d97706]/30 text-[#fcd34d]"
                      )}>
                        {isNepali
                          ? (prize.rank === 1 ? "१st पुरस्कार" : prize.rank === 2 ? "२nd पुरस्कार" : "३rd पुरस्कार")
                          : prize.badge}
                      </span>
                      <MedalFill className={cn(
                        "size-5",
                        isGold ? "text-[#ffd700]" : isSilver ? "text-[#e2e8f0]" : "text-[#cd7f32]"
                      )} />
                    </div>
                    <div className="text-xs text-white/60 font-medium uppercase tracking-wider">
                      {isNepali
                        ? (prize.rank === 1 ? "विजेता (Champion)" : prize.rank === 2 ? "दोस्रो स्थान (Runner-Up)" : "तेस्रो स्थान (3rd Place)")
                        : prize.label}
                    </div>
                    <div className={cn(
                      "text-2xl sm:text-3xl font-black mt-1 tracking-tight",
                      isGold ? "text-[#fef08a]" : isSilver ? "text-white" : "text-[#fed7aa]"
                    )}>
                      {isNepali
                        ? (prize.rank === 1 ? "रु. २५,०००" : prize.rank === 2 ? "रु. १५,०००" : "रु. १०,०००")
                        : prize.amountNPR}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Summary Strip: Top 10 Medals, Participant Certificate, Safety Fleet */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/75">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-amber-400" />
                <span>
                  <strong>{isNepali ? "शीर्ष १० धावक:" : "Top 10 Finishers:"}</strong> {isNepali ? "आधिकारिक पदक 🏅 तथा सम्मान" : "Official Finisher Medal 🏅"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary" />
                <span>
                  <strong>{isNepali ? "सबै सहभागी (Every Participant):" : "Every Participant:"}</strong> {isNepali ? "आधिकारिक सहभागिता प्रमाणपत्र 📜" : "Official Certificate of Participation 📜"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-red-400" />
                <span>
                  <strong>{isNepali ? "स्वास्थ्य सुरक्षा:" : "Safety Fleet:"}</strong> {isNepali ? "१ एम्बुलेन्स, प्राथमिक उपचार किट, आपतकालीन बाइक" : "1 Ambulance, First Aid Kits, Support Bike"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
