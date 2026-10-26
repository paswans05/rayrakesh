"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { FacebookCircle, TwitterRound, PinterestCircle, DiscordFill, Mail, MapPin } from "@/components/icons";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";

import logo from "@/images/logo2x.png";
import footerBg from "@/images/footer-bg.jpg";

type FooterProps = {
  className?: string;
};

const FOOTER_LINKS = [
  {
    title: "Quick Menu",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact us", href: "/contact" },
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Retirement Planning ", href: "" },
      { label: "Creative Ideas ", href: "" },
      { label: "Technology Solution", href: "" },
      { label: "Market Research", href: "" },
      { label: "Investment Advisory", href: "" },
    ]
  }
];

const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: FacebookCircle },
  { href: "https://twitter.com", icon: TwitterRound },
  { href: "https://discord.com", icon: DiscordFill },
  { href: "https://linkedin.com", icon: PinterestCircle },
];

const CONTACT_INFO = [
  { icon: Mail, title: 'Email', label: 'contact@Rakesh Ray.com', href: "mailto:contact@Rakesh Ray.com" },
  { icon: MapPin, title: 'Address', label: '15h Street, Office 478 Berlin, De 81566', href: "https://maps.google.com" },
];

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("relative rounded-(--radius) mx-(--page-gap) mb-(--page-gap)", className)}>
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none rounded-[inherit]">
        <Image src={footerBg} width={1920} height={944} alt="Background" className="absolute inset-0 object-cover object-top w-full h-full" />
        <div className="absolute inset-0 bg-darker/87"></div>
      </div>

      <div className="flex flex-wrap xl:flex-nowrap">
        <div className="relative grow">
          <div className="py-12 md:py-16 lg:py-20 xl:py-25">
            <div className="container">
              <div className="row">
                {/* Brand / Intro Column */}
                <ScrollReveal mode="fade" direction="bottom" delay={100} className="xl:column-4 me-auto">
                  <div>
                    <Link href="/" className="group flex items-center gap-2.5 shrink-0" aria-label="Event home">
                      <Image src={logo} width={159} height={36} alt="Event Logo" className="h-9 w-auto" />
                    </Link>
                    <div className="my-6 max-w-sm">
                      <p className="text-lg/relaxed text-white/80">
                        We help Startup's, SMEs, and enterprises overcome challenges, streamline operations, and achieve sustainable growth. With expert insights, proven strategies, and tailored business plans.
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-4">
                      {SOCIAL_LINKS.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <li key={index}>
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center size-9 rounded-full border-2 border-white/30 hover:border-primary transition-colors">
                              <Icon className="size-5 fill-white/70 group-hover:fill-primary transition-colors" />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Footer Navigation Columns */}
                {FOOTER_LINKS.map((item, index) => (
                  <ScrollReveal mode="fade" direction="bottom" key={index} className={cn("sm:column-6 md:column xl:column-2", getDelayClass(index + 1))}>
                    <div className="text-xl/8 font-semibold text-primary mb-6">{item.title}</div>
                    <ul className="flex flex-col gap-4">
                      {item.links.map((lItem, lIndex) => (
                        <li key={lIndex}>
                          <Link className="text-base/5 text-white hover:text-primary transition-colors" href={lItem.href}>
                            {lItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                ))}

                {/* Contact Column */}
                <ScrollReveal mode="fade" direction="bottom" delay={400} className="md:column-5 lg:column-4 xl:column-4 2xl:column-3">
                  <div className="text-xl/8 font-semibold text-primary mb-6">Contact</div>
                  <ul className="flex flex-col gap-6">
                    {CONTACT_INFO.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <li key={index} className="flex gap-4">
                          <div className="shrink-0 size-13 flex items-center justify-center rounded-xl bg-darker/20 border border-primary/30">
                            <Icon className="fill-primary size-6" />
                          </div>
                          <div className="grow xl:pe-10">
                            <div className="font-normal text-base/relaxed text-white mb-0.5">{item.title}</div>
                            <Link className="text-base/relaxed text-white hover:text-primary transition-colors" href={item.href}>
                              {item.label}
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <ScrollReveal mode="fade" direction="bottom" delay={100} className="py-6 border-t border-white/10">
            <div className="container">
              <div className="text-center">
                <p className="text-white">&copy; 2026 <strong>Rakesh Ray</strong> All Rights Reserved.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
