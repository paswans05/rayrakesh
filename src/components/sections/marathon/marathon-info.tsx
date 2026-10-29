"use client";

import { Section, SectionHead, SectionContent } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { MARATHON_DETAILS, MARATHON_FAQS, MARATHON_SAFETY_FLEET } from "@/data/marathon";
import { useLanguage } from "@/context/language-context";
import {
  CalendarAlt,
  ClockFill,
  MapPinFill,
  Activity,
  CheckCircleFill,
  Shield,
  InfoFill,
} from "@/components/icons";

export default function MarathonInfo() {
  const { t, isNepali } = useLanguage();

  const scheduleCards = [
    {
      icon: Activity,
      label: isNepali ? "आधिकारिक दौड दूरी" : "Official Race Distance",
      value: MARATHON_DETAILS.distance,
      subvalue: isNepali ? "१५ किमी एकल दूरी चुनौती" : "Single-Category 15 KM Challenge",
      accent: "text-primary",
    },
    {
      icon: CalendarAlt,
      label: isNepali ? "प्रतियोगिता मिति" : "Event Date",
      value: isNepali ? "मिति छिट्टै तोकिनेछ" : "Date Coming Soon",
      subvalue: isNepali ? "स्थान र मितिको आधिकारिक घोषणा बाँकी" : "Official announcement pending authority sync",
      accent: "text-white",
    },
    {
      icon: ClockFill,
      label: isNepali ? "उपस्थिति र सुरु समय" : "Assembly & Start Time",
      value: isNepali ? "बिहान ६:०० बजे उपस्थिति" : "6:00 AM Assembly",
      subvalue: isNepali ? "बिहान ६:३० बजे दौड सुरु (अनुमानित)" : "6:30 AM Official Flag-off (Estimated)",
      accent: "text-white",
    },
    {
      icon: MapPinFill,
      label: isNepali ? "स्थान" : "Location",
      value: MARATHON_DETAILS.location,
      subvalue: isNepali ? "पर्सा, मधेश प्रदेश (स्थान छिट्टै)" : "Official Landmark Venue TBA",
      accent: "text-primary",
    },
  ];

  return (
    <Section id="race-info" gap="default" className="bg-white relative">
      <div className="container">
        <SectionHead className="text-center max-w-3xl mx-auto">
          <ScrollReveal mode="fade" direction="bottom">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3 px-3 py-1 rounded-full bg-primary/10">
              {isNepali ? "महत्वपूर्ण मार्गनिर्देशन" : "Essential Guidelines"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-darker uppercase tracking-tight">
              {isNepali ? "दौड सम्बन्धी जानकारी तथा तालिका" : "Race Information & Schedule"}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-body">
              {isNepali
                ? "पर्सा, नेपालमा आयोजना हुने १५ किमी राकेश म्याराथन सम्बन्धी आवश्यक सम्पूर्ण जानकारी र नियमहरू।"
                : "Everything you need to know about the 15 KM Rakesh Marathon in Parsa, Nepal. Official event details will be announced when confirmed."}
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

          {/* Emergency Medical & Safety Fleet Section */}
          <div className="mt-14">
            <ScrollReveal mode="fade" direction="bottom">
              <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-br from-red-950/15 via-darker to-darker border-2 border-red-500/30 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30">
                      <span className="size-2 rounded-full bg-red-500 animate-ping" />
                      {isNepali ? "आपतकालीन स्वास्थ्य तथा सुरक्षा" : "Emergency & Medical Safety System"}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-3">
                      {isNepali ? "धावक सुरक्षा: एम्बुलेन्स, प्राथमिक उपचार र आपतकालीन बाइक" : "Complete Runner Safety & Medical Fleet"}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 max-w-md">
                    {isNepali
                      ? "कुनै पनि स्वास्थ्य आपतकालिन अवस्थाका लागि १ समर्पित एम्बुलेन्स, प्राथमिक उपचार किट र धावकको पछाडि आपतकालीन बाइकको अनिवार्य व्यवस्था।"
                      : "Strict emergency protocols with 1 standby ambulance, on-course first aid kits, and a support bike escort trailing runners."}
                  </p>
                </div>

                {/* 3 Safety Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  {/* 1. Ambulance */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-red-500/30 hover:border-red-400/60 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">🚑</span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/30">
                          {isNepali ? "अनिवार्य आपतकालीन व्यवस्था" : "Required for Emergency"}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        {isNepali ? "१ आपतकालीन एम्बुलेन्स" : "1 Dedicated Emergency Ambulance"}
                      </h4>
                      <p className="text-xs text-red-200/80 mt-1 font-medium">
                        {isNepali ? "दौड मार्गमा निरन्तर सक्रिय मोबाइल युनिट" : "Active mobile standby throughout 15 KM"}
                      </p>
                      <p className="text-xs text-white/70 mt-3 leading-relaxed">
                        {isNepali
                          ? "अक्सिजन तथा जीवनरक्षक उपकरणसहितको १ समर्पित एम्बुलेन्स दौड अवधिभर जुनसुकै आकस्मिक उद्धारका लागि पूर्णतया तयार रहनेछ।"
                          : "A fully equipped emergency ambulance with oxygen and vital life-support gear stationed along the route to respond immediately to any medical emergency."}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-red-300 font-mono flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-red-400" />
                      {isNepali ? "तत्काल उद्धार तथा अस्पताल पहुँच" : "Immediate Rapid Hospital Access"}
                    </div>
                  </div>

                  {/* 2. First Aid Kits */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-amber-500/30 hover:border-amber-400/60 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">🧰</span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {isNepali ? "प्राथमिक उपचार किट" : "First Aid Stations"}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        {isNepali ? "प्राथमिक उपचार किट तथा स्वास्थ्य केन्द्र" : "First Aid Kits & Paramedic Hubs"}
                      </h4>
                      <p className="text-xs text-amber-200/80 mt-1 font-medium">
                        {isNepali ? "सुरु, मध्य र अन्तिम बिन्दुमा उपलब्ध" : "At Start, Finish & Midway Hubs"}
                      </p>
                      <p className="text-xs text-white/70 mt-3 leading-relaxed">
                        {isNepali
                          ? "पूर्ण प्राथमिक उपचार किट, मांसपेशी दुखाइ कम गर्ने फिजियो स्प्रे, ग्लुकोज/इलेक्ट्रोलाइट र तालिमप्राप्त स्वास्थ्य स्वयंसेवकहरू तयार रहनेछन्।"
                          : "Complete first aid kits, emergency muscle sprays, electrolyte rehydration, and trained paramedic volunteers ready at all route checkpoints."}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-amber-300 font-mono flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-amber-400" />
                      {isNepali ? "दौडभर फिजियो तथा प्राथमिक सहायता" : "On-Course Physio & Hydration Care"}
                    </div>
                  </div>

                  {/* 3. Emergency Bike Escort */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-primary/30 hover:border-primary/60 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">🏍️</span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">
                          {isNepali ? "धावकको पछाडि बाइक" : "Mobile Sweeper Escort"}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        {isNepali ? "धावकको पछाडि आपतकालीन बाइक" : "Support Bike Behind Runners"}
                      </h4>
                      <p className="text-xs text-primary/80 mt-1 font-medium">
                        {isNepali ? "तत्काल उद्धार र सहयोगका लागि निरन्तर साथमा" : "Trailing escort for instant on-course rescue"}
                      </p>
                      <p className="text-xs text-white/70 mt-3 leading-relaxed">
                        {isNepali
                          ? "दौडिरहेका धावकहरूको सुरक्षा र आकस्मिक सहयोगका लागि विशेष आपतकालीन बाइक धावकहरूको ठिक पछाडि निरन्तर गुडिरहनेछ।"
                          : "A designated emergency motorcycle/bike rides directly behind the pack of runners throughout the 15 KM course to give instant on-course help."}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-primary font-mono flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {isNepali ? "प्रत्येक धावकको सुरक्षा निगरानी" : "Zero-Delay On-Trail Incident Support"}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
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
                  <h3 className="text-2xl font-bold text-white">
                    {isNepali ? "दौड दिनका निर्देशनहरू" : "Race-Day Instructions"}
                  </h3>
                </div>

                <ul className="space-y-4 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>{isNepali ? "बीआईबी र चिप:" : "Bib & Timing:"}</strong> {isNepali ? "आफ्नो छातीमा बीआईबी स्पष्ट देखिने गरी टाँस्नुहोस्। यसमा रहेको चिपलाई नमोड्नुहोस्।" : "Fasten your official bib securely to the front of your chest. Do not bend or fold the embedded timing chip."}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>{isNepali ? "उपस्थिति र वार्मअप:" : "Reporting & Warm-up:"}</strong> {isNepali ? "दौड सुरु हुनुभन्दा ४५ मिनेट अगावै (बिहान ५:४५ सम्म) उपस्थित हुनुहोस्।" : "Arrive at least 45 minutes prior to flag-off (by 5:45 AM). Dedicated coaches will lead a structured warm-up."}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>{isNepali ? "सबैलाई प्रमाणपत्र:" : "Certificates for All:"}</strong> {isNepali ? "दौडमा सहभागी हुने प्रत्येक धावक (Every Participant) लाई आधिकारिक सहभागिता प्रमाणपत्र प्रदान गरिन्छ।" : "Every participant receives an official Certificate of Participation / Finisher Certificate."}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>{isNepali ? "शीर्ष १० लाई पदक 🏅:" : "Top 10 Medals 🏅:"}</strong> {isNepali ? "शीर्ष १० स्थान हासिल गर्ने सबै धावकहरूलाई विशेष पदक तथा प्रथम ३ लाई नगद (१st रु. २५,०००/-, २nd रु. १५,०००/-, ३rd रु. १०,०००/-) प्रदान गरिन्छ।" : "Top 10 finishers receive medals 🏅, with cash awards for 1st (25,000/-), 2nd (15,000/-), and 3rd (10,000/-)."}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>{isNepali ? "आपतकालीन स्वास्थ्य सुरक्षा:" : "Emergency Medical Support:"}</strong> {isNepali ? "१ एम्बुलेन्स, प्राथमिक उपचार किट (First Aid Kit) र धावकको पछाडि आपतकालीन बाइकको पूर्ण व्यवस्था गरिएको छ।" : "1 dedicated ambulance on standby, first aid kits at hubs, and a support bike trailing behind runners for emergency help."}</span>
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
                  <h3 className="text-2xl font-bold text-darker">
                    {isNepali ? "सहभागी योग्यता तथा नियम" : "Participant Eligibility"}
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-body">
                  <p>
                    {isNepali
                      ? "राकेश म्याराथन १५ किमी चुनौतीमा भाग लिन सबै समुदायका धावक, युवा, विद्यार्थी तथा खेलाडीहरूलाई स्वागत छ:"
                      : "The Rakesh Marathon is open to community members, club runners, students, and competitive athletes eager to conquer 15 KM:"}
                  </p>
                  
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>{isNepali ? "न्यूनतम उमेर:" : "Minimum Age:"}</strong> {isNepali ? "प्रतियोगीको उमेर कम्तिमा १६ वर्ष पुरा भएको हुनुपर्नेछ।" : "Participants must be at least 16 years old on race day. Minors must have guardian consent."}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>{isNepali ? "स्वास्थ्य स्वघोषणा:" : "Medical Readiness:"}</strong> {isNepali ? "१५ किमी दौड पुरा गर्न धावक शारीरिक तथा मानसिक रूपमा तयार हुनुपर्नेछ।" : "All runners should be physically prepared and medically fit for 15 kilometers of endurance running."}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>{isNepali ? "एकल १५ किमी दूरी:" : "Single Distance Only:"}</strong> {isNepali ? "कुनै ३ किमी, ५ किमी वा १० किमी उप-दौड छैन। सबैका लागि एउटै १५ किमीको चुनौती।" : "No 3 KM, 5 KM, or 10 KM sub-races are conducted. One challenge for all."}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>{isNepali ? "शून्य दर्ता शुल्क:" : "Zero Entry Fee:"}</strong> {isNepali ? "म्याराथनमा सहभागिता १००% पूर्णतया निःशुल्क छ।" : "Community registration is 100% complimentary."}</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs text-darker leading-relaxed">
                    <strong>{isNepali ? "सूचना:" : "Notice:"}</strong> {isNepali ? "पर्साको आधिकारिक मिति, दौड मार्ग र सुरु हुने ठाउँ सम्बन्धित निकायसँग समन्वय गरी छिट्टै सार्वजनिक गरिनेछ।" : "Official date, route, and venue details for Parsa will be shared when confirmed."}
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* FAQs Accordion */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">
                {isNepali ? "जिज्ञासाहरू छन्?" : "Have Questions?"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-darker mt-1">
                {isNepali ? "प्रायः सोधिने प्रश्नहरू (FAQ)" : "Frequently Asked Questions"}
              </h3>
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
