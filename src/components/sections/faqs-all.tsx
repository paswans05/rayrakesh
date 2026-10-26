"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout/section";
import { ArrowRight } from "@/components/icons";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { FAQ_DATA } from "@/data/faqs";
import faqCover from "@/images/faq-cover.jpg";

type FaqsAllProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function FaqsAll({ gap = "default", className }: FaqsAllProps) {
  return (
    <Section gap={gap} className={className}>
      <div className="container">
        <div className={cn("row g-12 2xl:g-19 items-start lg:flex-row-reverse justify-between")}>
          {/* Right Accordions Column */}
          <div className="lg:column-7">
            <div className="flex flex-col gap-12.5">
              {FAQ_DATA.map((item, index) => (
                <ScrollReveal mode="fade" direction="bottom" className={getDelayClass(index + 1)} key={index}>
                  <div>
                    <h4 className="text-3xl/none font-bold text-darker mb-3">{item.title}</h4>
                    <p className="mb-8 text-base/relaxed text-body">{item.description}</p>
                    <Accordion defaultValue={[`faq-${index}-0`]} className="flex flex-col gap-4">
                      {item.questions.map((qItem, qIndex) => (
                        <AccordionItem key={index + qIndex} value={`faq-${index}-${qIndex}`}>
                          <AccordionTrigger>
                            <span className="text-lg font-medium lg:text-xl text-darker pe-4">
                              {qItem.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            {qItem.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Left Cover & Support Column */}
          <div className="lg:column-5">
            <div className="text-block">
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="pb-8 lg:pb-10 xl:pb-14">
                <Image src={faqCover} alt="FAQ Cover" className="w-full max-h-100 md:max-h-130 lg:max-h-none object-cover object-center" />
              </ScrollReveal>
              <ScrollReveal mode="fade" direction="bottom" delay={150}>
                <Badge variant="darker" pill outline className="mb-2 hidden xl:flex">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl xl:text-5xl leading-tight font-bold text-darker text-pretty mb-4">Frequently asked questions from support</h2>
                <p className="text-lg/relaxed text-body text-pretty mb-8">We believe in providing our clients with personalized and efficient logistics solutions. Et et id laoreet ultricies elementum venenatis ornare. </p>
                <h5 className="text-2xl text-darker font-bold mb-3">Have a question?</h5>
                <p className="text-base/relaxed text-body text-pretty mb-8">Need help with something? Our team is here to make things easy. Don’t hesitate to reach out.</p>
                <Button nativeButton={false} size="xl" pill render={<Link href="/contact" />} icon={<ArrowRight />}>
                  <span>Contact Us</span>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
