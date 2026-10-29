"use client";

import React from "react";
import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { RANGOLI_FAQS } from "@/data/rangoli";
import { useLanguage } from "@/context/language-context";

export default function RangoliFAQs() {
  const { isNepali } = useLanguage();

  return (
    <Section id="faqs" gap="default" className="bg-[#0e0417] text-white relative">
      <div className="container">
        <SectionHead className="text-center max-w-3xl mx-auto">
          <ScrollReveal mode="fade" direction="bottom">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-3 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
              {isNepali ? "जिज्ञासा र उत्तरहरू" : "Got Questions?"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              {isNepali ? "प्रायः सोधिने प्रश्नहरू (FAQ)" : "Frequently Asked Questions"}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              {isNepali
                ? "रङ्गोली प्रतियोगिता, भोटिङ प्रणाली तथा पुरस्कार सम्बन्धी सम्पूर्ण नियम र स्पष्टीकरणहरू।"
                : "Clear answers on entry submissions, online voting verification, and grand prize distributions."}
            </p>
          </ScrollReveal>
        </SectionHead>

        <SectionContent className="mt-12 max-w-4xl mx-auto">
          <Accordion className="space-y-3">
            {RANGOLI_FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-xs hover:border-amber-500/40 transition-colors"
              >
                <AccordionTrigger className="text-base sm:text-lg font-bold text-white py-4.5 px-6 hover:text-amber-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/75 leading-relaxed px-6 pb-5 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionContent>
      </div>
    </Section>
  );
}

