"use client";

import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { MARATHON_DETAILS, MARATHON_FAQS } from "@/data/marathon";
import {
  CalendarAlt,
  ClockFill,
  MapPinFill,
  Activity,
  CheckCircleFill,
  Shield,
  HelpFill,
  InfoFill,
  BulletFill
} from "@/components/icons";

export default function MarathonInfo() {
  const scheduleCards = [
    {
      icon: Activity,
      label: "Official Race Distance",
      value: MARATHON_DETAILS.distance,
      subvalue: "Single-Category 15 KM Challenge",
      accent: "text-primary",
    },
    {
      icon: CalendarAlt,
      label: "Event Date",
      value: "Date Coming Soon",
      subvalue: "Official announcement pending authority sync",
      accent: "text-white",
    },
    {
      icon: ClockFill,
      label: "Assembly & Start Time",
      value: "6:00 AM Assembly",
      subvalue: "6:30 AM Official Flag-off (Estimated)",
      accent: "text-white",
    },
    {
      icon: MapPinFill,
      label: "Location",
      value: MARATHON_DETAILS.location,
      subvalue: "Official Landmark Venue TBA",
      accent: "text-primary",
    },
  ];

  return (
    <Section id="race-info" gap="default" className="bg-white relative">
      <div className="container">
        <SectionHead className="text-center max-w-3xl mx-auto">
          <ScrollReveal mode="fade" direction="bottom">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3 px-3 py-1 rounded-full bg-primary/10">
              Essential Guidelines
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-darker uppercase tracking-tight">
              Race Information & Schedule
            </h2>
            <p className="mt-4 text-base sm:text-lg text-body">
              Everything you need to know about the 15 KM Rakesh Marathon in Parsa, Nepal. Official event details will be announced when confirmed.
            </p>
          </ScrollReveal>
        </SectionHead>

        {/* 4 Essential Stats / Schedule Cards */}
        <SectionContent className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scheduleCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={idx} mode="fade" direction="bottom" delay={idx * 80}>
                  <div className="p-6 rounded-2xl bg-lightest border border-lighter hover:border-primary/40 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="size-12 rounded-xl bg-darker text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="text-xs uppercase font-bold tracking-wider text-body/70">
                        {card.label}
                      </div>
                      <div className="text-2xl font-black text-darker mt-1">
                        {card.value}
                      </div>
                    </div>
                    <div className="text-xs text-body mt-4 pt-3 border-t border-lighter">
                      {card.subvalue}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Race Day Instructions & Participant Eligibility Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            
            {/* Race-Day Instructions */}
            <ScrollReveal mode="fade" direction="bottom" delay={100}>
              <div className="p-8 rounded-2xl bg-darker text-white h-full relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <InfoFill className="size-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Race-Day Instructions</h3>
                </div>

                <ul className="space-y-4 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Bib & Timing Chip:</strong> Fasten your official bib securely to the front of your chest. Do not bend or fold the embedded timing chip.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Reporting & Warm-up:</strong> Arrive at least 45 minutes prior to flag-off (by 5:45 AM). Dedicated coaches will lead a structured warm-up.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Baggage Counter:</strong> Secure bag drop will be available at the start arena. Keep personal tags visible.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Timing Mats:</strong> Ensure you cross all timing mats (Start, 3.5KM, 7.5KM, 11.5KM, and Finish) for verified official race timing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Participant Awards:</strong> Every participant receives a certificate. Medals are awarded to the top 10 finishers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Emergency Support:</strong> The race safety plan calls for one ambulance, first-aid kits, and a support bike following the runners for emergency assistance.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Participant Eligibility & Safety */}
            <ScrollReveal mode="fade" direction="bottom" delay={150}>
              <div className="p-8 rounded-2xl bg-lightest border border-lighter h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-lg bg-darker text-primary flex items-center justify-center">
                    <Shield className="size-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-darker">Participant Eligibility</h3>
                </div>

                <div className="space-y-4 text-sm text-body">
                  <p>
                    The Rakesh Marathon is open to community members, club runners, students, and competitive athletes eager to conquer 15 KM:
                  </p>
                  
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>Minimum Age:</strong> Participants must be at least 16 years old on race day. Minors must have guardian consent.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>Medical Self-Declaration:</strong> All runners should be physically prepared and medically fit for 15 kilometers of endurance running.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>Single Distance Only:</strong> No 3 KM, 5 KM, or 10 KM sub-races are conducted. One challenge for all.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>Zero Entry Fee:</strong> Community registration is 100% complimentary.</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs text-darker leading-relaxed">
                    <strong>Notice:</strong> Official date, route, and venue details for Parsa will be shared when confirmed.
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* FAQs Accordion */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">Have Questions?</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-darker mt-1">Frequently Asked Questions</h3>
            </div>

            <Accordion className="space-y-3">
              {MARATHON_FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-xl border border-lighter overflow-hidden shadow-xs hover:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="text-base sm:text-lg font-bold text-darker py-4.5 px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-body leading-relaxed px-6 pb-5 pt-0">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </SectionContent>
      </div>
    </Section>
  );
}
