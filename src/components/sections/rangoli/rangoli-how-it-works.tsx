"use client";

import React from "react";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/context/language-context";
import { RANGOLI_RULES } from "@/data/rangoli";

export default function RangoliHowItWorks() {
  const { t, isNepali } = useLanguage();

  const steps = [
    {
      num: "01",
      icon: "🎨",
      title: isNepali ? "मौलिक रङ्गोली बनाउनुहोस्" : "1. Create Your Rangoli",
      desc: isNepali
        ? "दीपावलीको शुभ अवसरमा आफ्नो घरको आँगन, ढोका वा सामुदायिक स्थानमा प्राकृतिक रङ्ग तथा फूलले हस्तनिर्मित रङ्गोली बनाउनुहोस्।"
        : "Design your original handmade Rangoli at your home, courtyard, or workplace using colors, petals, or eco-friendly materials.",
    },
    {
      num: "02",
      icon: "📸",
      title: isNepali ? "नामसहित तस्बिर खिचेर पठाउनुहोस्" : "2. Snap & Submit Photo",
      desc: isNepali
        ? "रङ्गोली नजिक आफ्नो नाम वा 'Diwali 2026' लेखेको सानो पर्चा राखी स्पष्ट फोटो खिच्नुहोस् र यस वेबसाइटमा अपलोड गर्नुहोस्।"
        : "Take a clear photo with a small paper slip showing your name or 'Diwali 2026' for authentic verification, then submit online.",
    },
    {
      num: "03",
      icon: "❤️",
      title: isNepali ? "भोट सङ्कलन गर्नुहोस्" : "3. Share & Collect Votes",
      desc: isNepali
        ? "आफ्नो प्रविष्टिको लिङ्क परिवार, साथीभाइ तथा सामाजिक सञ्जालमा शेयर गरी बढीभन्दा बढी भोट सङ्कलन गर्नुहोस्।"
        : "Share your entry's direct link via WhatsApp, Facebook, or Instagram to invite friends, family, and neighbors to vote for your art.",
    },
    {
      num: "04",
      icon: "🏆",
      title: isNepali ? "भव्य पुरस्कार जित्नुहोस्" : "4. Win Grand Prizes",
      desc: isNepali
        ? "सर्वाधिक भोट पाउने शीर्ष ३ ले १st रु. २१,०००, २nd रु. ११,००० र ३rd रु. ५,१०० नगद, शीर्ष १० लाई पदक र सबैलाई प्रमाणपत्र!"
        : "The top 3 most voted win 1st (NPR 21,000), 2nd (NPR 11,000), 3rd (NPR 5,100), top 10 receive medals & hampers, and everyone gets a certificate!",
    },
  ];

  return (
    <Section id="how-it-works" gap="default" className="bg-[#160824] text-white relative">
      <div className="container">
        <SectionHead className="text-center max-w-3xl mx-auto">
          <ScrollReveal mode="fade" direction="bottom">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-3 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
              {isNepali ? "प्रक्रिया र नियमहरू" : "Simple Process"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              {t("rangoli.how_heading", "How the Rangoli Festival Works")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              {t("rangoli.how_subheading", "Four simple steps to create, submit, collect votes, and win grand Diwali prizes.")}
            </p>
          </ScrollReveal>
        </SectionHead>

        <SectionContent className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <ScrollReveal key={idx} mode="fade" direction="bottom" delay={idx * 80}>
                <div className="p-6 sm:p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="size-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {step.icon}
                      </span>
                      <span className="text-2xl font-black font-mono text-amber-400/30 group-hover:text-amber-400 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-white/70 mt-2.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 text-[11px] font-mono text-amber-300 flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-amber-400" />
                    {isNepali ? `चरण ${step.num}` : `Step ${step.num} Guide`}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </SectionContent>
      </div>
    </Section>
  );
}
