"use client";

import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MARATHON_DETAILS, MARATHON_PRIZES, MARATHON_SPECIAL_AWARDS } from "@/data/marathon";
import { MedalFill, AwardFill, CheckCircleFill } from "@/components/icons";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export default function MarathonPrizes() {
  const { t, isNepali } = useLanguage();
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
              {isNepali ? "पुरस्कार तथा सम्मान" : "Prize Money & Recognition"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              {t("marathon.prizes_heading", MARATHON_DETAILS.prizesHeading)}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              {t("marathon.prizes_subheading", MARATHON_DETAILS.prizesSubheading)}
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
                      🥈 {isNepali ? "दोस्रो पुरस्कार" : "Runner-Up"}
                    </span>
                    <MedalFill className="size-7 text-slate-300 drop-shadow-[0_0_10px_rgba(203,213,225,0.4)]" />
                  </div>

                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    {isNepali ? "दोस्रो स्थान (2nd Place)" : "2nd Place"}
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1 tracking-tight">
                    {secondPrize.amountNPR}
                  </div>
                  <p className="text-sm text-slate-300/80 mt-3 pb-6 border-b border-white/10">
                    {isNepali ? "१५ किमी राकेश म्याराथनको दोस्रो स्थान (15k)।" : secondPrize.description}
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
                      🥇 {isNepali ? "प्रथम पुरस्कार" : "First Prize"}
                    </span>
                    <MedalFill className="size-10 text-[#ffd700] drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] animate-pulse" />
                  </div>

                  <div className="text-sm font-bold uppercase tracking-wider text-primary">
                    {isNepali ? "समग्र विजेता (Champion)" : "Overall Winner"}
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#ffd700] via-[#fffbeb] to-[#caa05c] mt-1 tracking-tight">
                    {firstPrize.amountNPR}
                  </div>
                  <p className="text-sm text-white/90 mt-3 pb-6 border-b border-primary/30">
                    {isNepali ? "१५ किमी राकेश म्याराथनको प्रथम स्थान विजेता।" : firstPrize.description}
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
                      🥉 {isNepali ? "तेस्रो पुरस्कार" : "Third Place"}
                    </span>
                    <MedalFill className="size-7 text-[#cd7f32] drop-shadow-[0_0_10px_rgba(205,127,50,0.4)]" />
                  </div>

                  <div className="text-sm font-semibold uppercase tracking-wider text-amber-400/80">
                    {isNepali ? "तेस्रो स्थान (3rd Place)" : "3rd Place"}
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1 tracking-tight">
                    {thirdPrize.amountNPR}
                  </div>
                  <p className="text-sm text-amber-100/70 mt-3 pb-6 border-b border-white/10">
                    {isNepali ? "१५ किमी राकेश म्याराथनको तेस्रो स्थान (10k)।" : thirdPrize.description}
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

          {/* Special Recognition Cards: Top 10 Medals 🏅 and Every Participant Certificate */}
          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Top 10 Medals Card */}
            <ScrollReveal mode="fade" direction="bottom" delay={250}>
              <div className="relative p-6 sm:p-8 rounded-2xl bg-linear-to-br from-amber-500/10 via-darker to-darker border border-amber-500/40 shadow-xl overflow-hidden group hover:border-amber-400 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      🏅 {isNepali ? "शीर्ष १० सम्मान" : "Rank 1 to 10"}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-3">
                      {isNepali ? "शीर्ष १० लाई पदक 🏅" : "Top 10 Finishers Medal 🏅"}
                    </h3>
                  </div>
                  <div className="size-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-3xl shadow-inner shrink-0">
                    🏅
                  </div>
                </div>

                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  {isNepali
                    ? "शीर्ष १० (१ देखि १० औं स्थान) सम्म आउने प्रत्येक धावकलाई आधिकारिक फिनिसर पदक र सम्मान प्रदान गरिनेछ।"
                    : "Every runner finishing in the Top 10 (Ranks 1 to 10) receives an official commemorative medal and recognition on the podium."}
                </p>

                <ul className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs sm:text-sm text-amber-100/90">
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-amber-400 shrink-0" />
                    <span>{isNepali ? "आधिकारिक शीर्ष १० फिनिसर पदक 🏅" : "Official Top 10 Finisher Medal 🏅"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-amber-400 shrink-0" />
                    <span>{isNepali ? "विशेष उपलब्धि प्रमाणपत्र" : "Certificate of High Achievement"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-amber-400 shrink-0" />
                    <span>{isNepali ? "आधिकारिक लिडरबोर्डमा सम्मान" : "Official Leaderboard Honours"}</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Every Participant Certificate Card */}
            <ScrollReveal mode="fade" direction="bottom" delay={300}>
              <div className="relative p-6 sm:p-8 rounded-2xl bg-linear-to-br from-primary/15 via-darker to-darker border border-primary/40 shadow-xl overflow-hidden group hover:border-primary transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">
                      📜 {isNepali ? "सबै सहभागी" : "Every Single Runner"}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-3">
                      {isNepali ? "सबै सहभागीलाई प्रमाणपत्र 📜" : "Certificate for Every Participant 📜"}
                    </h3>
                  </div>
                  <div className="size-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-3xl shadow-inner shrink-0">
                    📜
                  </div>
                </div>

                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  {isNepali
                    ? "१५ किमी दौडमा सहभागी हुने प्रत्येक धावक (Every Participant) लाई आधिकारिक सहभागिता प्रमाणपत्र प्रदान गरिनेछ।"
                    : "Every registered participant who runs in the 15 KM race receives an official Certificate of Participation / Finisher Certificate."}
                </p>

                <ul className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs sm:text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-primary shrink-0" />
                    <span>{isNepali ? "प्रत्येक सहभागीलाई आधिकारिक प्रमाणपत्र" : "Official Certificate for Every Participant"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-primary shrink-0" />
                    <span>{isNepali ? "राकेश म्याराथन टी-सर्ट किट" : "Rakesh Marathon Event T-Shirt Kit"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleFill className="size-4 text-primary shrink-0" />
                    <span>{isNepali ? "डिजिटल धावक पास कार्ड र रिफ्रेसमेन्ट" : "Digital Runner Pass Card & Refreshments"}</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

          </div>

          {/* Single-distance reminder */}
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-white/70 bg-white/5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10">
              <span className="size-2 rounded-full bg-primary" />
              {isNepali
                ? "१५ किमी एकल दूरी प्रतियोगिता: १st रु. २५,०००/-, २nd रु. १५,०००/-, ३rd रु. १०,०००/-, शीर्ष १० लाई पदक 🏅, र सबै सहभागीलाई प्रमाणपत्र!"
                : "15 KM Single Distance: 1st: NPR 25,000/-, 2nd: NPR 15,000/-, 3rd: NPR 10,000/-, Medals for Top 10 🏅, and Certificates for Every Participant!"}
            </p>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
}
