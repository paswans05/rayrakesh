"use client";

import Image from "next/image";
import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CONTACT_INFO_CONFIG } from "@/data/contact";
import buildingLineE from "@/images/decoration/building-line-a.png";
import contactCover from "@/images/contact-cover.jpg";

type ContactProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Contact({ gap = "default", className }: ContactProps) {
  return (
    <div className={className}>
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image src={buildingLineE} width={1920} height={1122} alt="Background" className="absolute inset-0 object-cover object-bottom w-full h-full" />
      </div>
      <Section gap={gap} className="relative">
        <SectionContent>
          <div className="container">
            <div className="row g-12 items-center justify-between">
              {/* Left Contact Info Column */}
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="lg:column-6 xl:column-5">
                <div className="text-block mb-10">
                  <span className="flex items-center gap-5 text-sm lg:text-base uppercase tracking-widest text-primary font-semibold mb-2.5 md:mb-4 lg:mb-5 xl:mb-6 pt-0.5 before:content-[''] before:block before:w-14 md:before:w-22 before:h-0.5 before:bg-primary">
                    Our Contacts
                  </span>
                  <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-darker leading-tight mb-4">
                    Get in touch with us
                  </h2>
                  <p className="text-base/relaxed text-body">
                    Let’s build something meaningful together by combining creativity, strategy, and innovation to create impactful digital solutions that drive growth, strengthen brands, and deliver lasting value for your business.
                  </p>
                </div>

                <div className="flex flex-col">
                  {CONTACT_INFO_CONFIG.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 py-5 border-b border-body/16 first:pt-0">
                      <div className="shrink-0 mt-1">
                        <item.icon className="size-7 fill-primary" />
                      </div>
                      <div>
                        <h4 className="text-darker text-lg lg:text-xl leading-snug font-medium mb-1">{item.title}</h4>
                        <p className="text-body text-sm md:text-base lg:text-lg leading-normal">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Right Office Location Map */}
              <ScrollReveal mode="fade" direction="bottom" delay={200} className="lg:column-6 xl:column-6">
                <div className="relative w-full h-100 lg:h-137.5 overflow-hidden">
                  <iframe
                    title="Office Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002633!2d-0.24168144921176767!3d51.528558241761614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="size-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </SectionContent>
      </Section>

      {/* 2. LOWER SECTION: Image Showcase + Leave a Message Form */}
      <Section gap={gap} className="relative pt-0!">
        <SectionContent>
          <div className="container">
            <div className="row justify-between">
              {/* Left Column: Interior Photo Showcase */}
              <ScrollReveal mode="fade" direction="bottom" delay={100} className="lg:column-6">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={contactCover}
                    alt="Interior Lounge Lighting Showcase"
                    className="object-cover min-h-full max-h-100 lg:max-h-none"
                  />
                </div>
              </ScrollReveal>

              {/* Right Column: Contact Form */}
              <ScrollReveal mode="fade" direction="bottom" delay={200} className="lg:column-6 xl:column-5 self-center">
                <div className="text-block mb-8">
                  <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-darker leading-tight mb-4">
                    Leave a Message or Question
                  </h2>
                  <p className="text-base/relaxed text-body">
                    Have a question about our services or want to share your feedback? Drop us a line below and we will reply soon!
                  </p>
                </div>

                <form className="row gy-6" onSubmit={(e) => e.preventDefault()}>
                  {/* Name & Email */}
                  <div className="column-12 sm:column-6">
                    <label className="block mb-2 text-sm font-semibold text-darker" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input className="border border-light bg-white text-darker placeholder-body px-4 py-3 w-full outline-offset-0 outline-transparent focus:outline-primary focus:border-transparent transition-all text-sm" type="text" id="contact-name" placeholder="Enter your name" required />
                  </div>

                  <div className="column-12 sm:column-6">
                    <label className="block mb-2 text-sm font-semibold text-darker" htmlFor="contact-email">
                      Your Email
                    </label>
                    <input className="border border-light bg-white text-darker placeholder-body px-4 py-3 w-full outline-offset-0 outline-transparent focus:outline-primary focus:border-transparent transition-all text-sm" type="email" id="contact-email" placeholder="Enter your email" required />
                  </div>

                  {/* Phone & Service Type */}
                  <div className="column-12 sm:column-6">
                    <label className="block mb-2 text-sm font-semibold text-darker" htmlFor="contact-phone">
                      Your Phone
                    </label>
                    <input className="border border-light bg-white text-darker placeholder-body px-4 py-3 w-full outline-offset-0 outline-transparent focus:outline-primary focus:border-transparent transition-all text-sm" type="tel" id="contact-phone" placeholder="+12 345 6758 29" required />
                  </div>

                  <div className="column-12 sm:column-6">
                    <label className="block mb-2 text-sm font-semibold text-darker" htmlFor="contact-service">
                      Service Type
                    </label>
                    <select id="contact-service" className="border border-light bg-white text-darker px-4 py-3 w-full outline-offset-0 outline-transparent focus:outline-primary focus:border-transparent transition-all text-sm appearance-none cursor-pointer" defaultValue="" required>
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option value="architectural">Architectural Design</option>
                      <option value="interior">Interior Design</option>
                      <option value="renovation">Residential Renovation</option>
                      <option value="execution">Design & Execution</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="column-12">
                    <label className="block mb-2 text-sm font-semibold text-darker" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea id="contact-message" rows={5} className="border border-light bg-white text-darker placeholder-secondary px-4 py-3 w-full outline-offset-0 outline-transparent focus:outline-primary focus:border-transparent transition-all resize-none text-sm" placeholder="Enter your message" required />
                  </div>

                  {/* Submit Button */}
                  <div className="column-12 pt-2">
                    <Button variant="default" size="xl" className="rounded-none">
                      <span>Send Message</span>
                    </Button>
                  </div>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </SectionContent>
      </Section>
    </div>
  );
}
