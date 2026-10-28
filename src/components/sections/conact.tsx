"use client";

import { useState, useId } from "react";
import Image from "next/image";
import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CONTACT_INFO_CONFIG } from "@/data/contact";
import { CheckCircleFill, AlertCircleFill } from "@/components/icons";
import buildingLineE from "@/images/decoration/building-line-a.png";
import contactCover from "@/images/contact-cover.jpg";
import { cn } from "@/lib/utils";

type ContactProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
};

export default function Contact({ gap = "default", className }: ContactProps) {
  const formId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);

    if (!formData.name || !formData.email || !formData.message) {
      setResult({ type: "error", message: "Please fill in your name, email, and message." });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setResult({ type: "error", message: data.error || "Something went wrong." });
      } else {
        setResult({ type: "success", message: data.message || "Your message has been sent!" });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      }
    } catch {
      setResult({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "border border-light bg-white text-darker placeholder-body px-4 py-3 w-full outline-offset-0 outline-transparent focus:outline-primary focus:border-transparent transition-all text-sm";

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
                    Let's build something meaningful together by combining creativity, strategy, and innovation to create impactful digital solutions that drive growth, strengthen brands, and deliver lasting value for your business.
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
                    src="https://maps.google.com/maps?q=VMQ9%2BCXM+Jingadawa,+Madhesh+Province,+Nepal&t=&z=14&ie=UTF8&iwloc=&output=embed"
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

                {/* Result Banner */}
                {result && (
                  <div className={cn(
                    "mb-6 p-4 rounded-lg flex items-start gap-3 text-sm",
                    result.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  )}>
                    {result.type === "success"
                      ? <CheckCircleFill className="size-5 text-green-600 shrink-0 mt-0.5" />
                      : <AlertCircleFill className="size-5 text-red-600 shrink-0 mt-0.5" />
                    }
                    <span>{result.message}</span>
                  </div>
                )}

                <form className="row gy-6" onSubmit={handleSubmit}>
                  {/* Name & Email */}
                  <div className="column-12 sm:column-6">
                    <label className="block mb-2 text-sm font-semibold text-darker" htmlFor={`${formId}-name`}>
                      Your Name *
                    </label>
                    <input
                      className={inputClass}
                      type="text"
                      id={`${formId}-name`}
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="column-12 sm:column-6">
                    <label className="block mb-2 text-sm font-semibold text-darker" htmlFor={`${formId}-email`}>
                      Your Email *
                    </label>
                    <input
                      className={inputClass}
                      type="email"
                      id={`${formId}-email`}
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Phone & Service Type */}
                  <div className="column-12 sm:column-6">
                    <label className="block mb-2 text-sm font-semibold text-darker" htmlFor={`${formId}-phone`}>
                      Your Phone
                    </label>
                    <input
                      className={inputClass}
                      type="tel"
                      id={`${formId}-phone`}
                      placeholder="+977 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="column-12 sm:column-6">
                    <label className="block mb-2 text-sm font-semibold text-darker" htmlFor={`${formId}-service`}>
                      Service Type
                    </label>
                    <select
                      id={`${formId}-service`}
                      className={cn(inputClass, "appearance-none cursor-pointer")}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select Service</option>
                      <option value="Construction">Construction</option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Residential Renovation">Residential Renovation</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="column-12">
                    <label className="block mb-2 text-sm font-semibold text-darker" htmlFor={`${formId}-message`}>
                      Message *
                    </label>
                    <textarea
                      id={`${formId}-message`}
                      rows={5}
                      className={cn(inputClass, "resize-none")}
                      placeholder="Enter your message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="column-12 pt-2">
                    <Button
                      type="submit"
                      variant="default"
                      size="xl"
                      className="rounded-none"
                      disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
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
