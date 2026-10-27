"use client";
import { useState, useEffect, useCallback, useRef, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";
import logo from "@/images/logo2x.png";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Overlay } from "@/components/ui/overlay";
import { useSetHeightRoot } from "@/hooks/useSetHeightRoot";
import { cn } from "@/lib/utils";

import { FacebookCircle, TwitterRound, PinterestCircle, LinkedinRound } from "@/components/icons"
import { NAV_ITEMS, CONTACT_INFO, type NavItem, type DropdownChild } from "@/data/navbar";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useNavbar } from "@/context/navbar-context";
interface NavLinkProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

const SOCIAL_LINKS: NavLinkProps[] = [
  { href: "https://facebook.com", icon: FacebookCircle },
  { href: "https://twitter.com", icon: TwitterRound },
  { href: "https://pinterest.com", icon: PinterestCircle },
  { href: "https://linkedin.com", icon: LinkedinRound },
];

const linkStyle = cva(
  "relative flex items-center px-0 py-2 gap-1.5 justify-between text-sm xl:text-base font-normal rounded-lg transition-all duration-200",
  {
    variants: {
      active: {
        true: "text-primary hover:text-primary-dark",
        false: "text-white hover:text-primary"
      }
    }
  }
);

const subLinkStyle = cva("flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-normal transition-all duration-200", {
  variants: {
    active: {
      true: "bg-white/10 text-white ps-4",
      false: "text-white/75 hover:bg-white/8 hover:text-white hover:ps-4"
    }
  }
});

/* Helper functions to check active page status */
const isLinkActive = (href: string, pathname: string) => {
  if (href === "/") {
    return pathname === "/";
  }
  if (href.startsWith("/#") || href.startsWith("#")) {
    return false; // section links are not page active triggers
  }
  return pathname === href;
};

const isDropdownActive = (items: DropdownChild[], pathname: string): boolean => {
  return items.some((item) => {
    if (item.children) {
      return isDropdownActive(item.children, pathname);
    }
    return isLinkActive(item.href || "", pathname);
  });
};

const breakpoint_lg = "992px";

function ChevronDown({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg className={`transition-transform duration-300 ${open ? "rotate-180" : ""} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

interface NestedSubmenuProps {
  label: string;
  icon?: string;
  items: DropdownChild[];
  onNavigate: () => void;
  align?: "left" | "right";
}

function NestedSubmenu({ label, icon, items, onNavigate, align = "right" }: NestedSubmenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  /* close on outside click (desktop) */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (typeof window !== "undefined" && window.innerWidth < parseInt(breakpoint_lg)) return;
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth >= parseInt(breakpoint_lg)) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= parseInt(breakpoint_lg)) {
      setOpen(false);
    }
  };

  const active = isDropdownActive(items, pathname);

  /* pre-open mobile accordion if child is active, collapse when inactive */
  useEffect(() => {
    setOpen(active);
  }, [active]);


  const desktopStyle = cva("hidden lg:block absolute top-0 w-48 transition-all duration-250", {
    variants: {
      open: {
        true: "opacity-100 scale-100 translate-x-0 pointer-events-auto",
        false: "opacity-0 scale-95 pointer-events-none"
      },
      align: {
        left: "left-full ps-3 origin-left",
        right: "right-full pe-3 origin-right"
      }
    },
    compoundVariants: [
      {
        open: false,
        align: "left",
        class: "-translate-x-2"
      },
      {
        open: false,
        align: "right",
        class: "translate-x-2"
      }
    ]
  });

  const mobileStyle = cva("lg:hidden overflow-hidden transition-all duration-300 ease-in-out", {
    variants: {
      open: {
        true: "max-h-125 opacity-100",
        false: "max-h-0 opacity-0"
      }
    }
  });

  return (
    <li ref={ref} className="relative w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="#" type="button" onClick={() => setOpen((v) => !v)} className={linkStyle({ active: active || open })} aria-expanded={open} aria-haspopup="true" >
        <span className="flex items-center gap-3">
          {label}
        </span>
        <ChevronDown open={open} className={`h-3.5 w-3.5 ${open ? "rotate-180 lg:rotate-90" : "rotate-0 " + (align === "right" ? "lg:rotate-90" : "lg:-rotate-90")}`} />
      </a>

      <div className={desktopStyle({ open, align })}>
        <div className="w-full rounded-xl border border-white/10 bg-dark/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,.5)]" role="menu" >
          <ul className="p-1.5 flex flex-col gap-0.5">
            {items.map((item) => {
              const childActive = isLinkActive(item.href || "", pathname);
              return (
                <li key={item.label}>
                  <Link href={item.href || "#"} role="menuitem" onClick={() => { setOpen(false); onNavigate(); }} className={subLinkStyle({ active: childActive })} >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={mobileStyle({ open })} >
        <ul className="flex flex-col gap-0.5 ps-3 pb-1 pt-1">
          {items.map((item) => {
            const childActive = isLinkActive(item.href || "", pathname);
            return (
              <li key={item.label}>
                <Link href={item.href || "#"} onClick={() => { setOpen(false); onNavigate(); }} className={subLinkStyle({ active: childActive })} >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

interface DropdownItemProps {
  label: string;
  items: DropdownChild[];
  onNavigate: () => void;
  align?: "left" | "right";
}

function DropdownItem({ label, items, onNavigate, align = "left" }: DropdownItemProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  /* close on outside click (desktop) */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // Only close on outside click in desktop view
      if (typeof window !== "undefined" && window.innerWidth < parseInt(breakpoint_lg)) {
        return;
      }
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth >= parseInt(breakpoint_lg)) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= parseInt(breakpoint_lg)) {
      setOpen(false);
    }
  };

  const active = isDropdownActive(items, pathname);

  /* pre-open mobile accordion if child is active, collapse when inactive */
  useEffect(() => {
    setOpen(active);
  }, [active]);

  const desktopStyle = cva("hidden lg:block absolute top-full w-50 pt-3 transition-all duration-250", {
    variants: {
      open: {
        true: "opacity-100 scale-100 translate-y-0 pointer-events-auto",
        false: "opacity-0 scale-95 -translate-y-2 pointer-events-none"
      },
      align: {
        left: "start-0 origin-top-left",
        right: "end-0 origin-top-right"
      }
    },
  });

  const mobileStyle = cva("lg:hidden overflow-hidden transition-all duration-300 ease-in-out", {
    variants: {
      open: {
        true: "max-h-125 opacity-100",
        false: "max-h-0 opacity-0"
      }
    }
  });

  return (
    <li ref={ref} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="#" type="button" onClick={() => setOpen((v) => !v)} className={linkStyle({ active: active || open })} aria-expanded={open} aria-haspopup="true" >
        <span className="flex-1 text-start lg:text-center">{label}</span>
        <ChevronDown open={open} className="h-4 w-4 lg:h-3.5 lg:w-3.5" />
      </a>

      <div className={desktopStyle({ open, align })} >
        <div className="w-full rounded-xl border border-white/10 bg-dark/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,.5)]" role="menu" >
          <ul className="p-1.5 flex flex-col gap-0.5">
            {items.map((item) => {
              if (item.children) {
                return (
                  <NestedSubmenu key={item.label} label={item.label} icon={item.icon} items={item.children} onNavigate={onNavigate} align={align} />
                );
              }
              const childActive = isLinkActive(item.href || "", pathname);
              return (
                <li key={item.label}>
                  <Link href={item.href || "#"} role="menuitem" onClick={() => { setOpen(false); onNavigate(); }} className={subLinkStyle({ active: childActive })} >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={mobileStyle({ open })}>
        <ul className="flex flex-col gap-0.5 ps-3 pb-1 pt-1">
          {items.map((item) => {
            if (item.children) {
              return (
                <NestedSubmenu key={item.label} label={item.label} icon={item.icon} items={item.children} onNavigate={onNavigate} align={align} />
              );
            }
            const childActive = isLinkActive(item.href || "", pathname);
            return (
              <li key={item.label}>
                <Link href={item.href || "#"} onClick={() => { setOpen(false); onNavigate(); }} className={subLinkStyle({ active: childActive })}  >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

function NavContent({ onNavigate, className }: { onNavigate: () => void; className?: string; }) {
  const pathname = usePathname();
  return (
    <ul className={className}>
      {NAV_ITEMS.map((item, index) => {
        if (item.children) {
          const isLast = index === NAV_ITEMS.length - 1;
          return (
            <DropdownItem key={item.label} label={item.label} items={item.children} onNavigate={onNavigate} align={isLast ? "right" : "left"} />
          );
        }

        const active = isLinkActive(item.href || "#", pathname);

        return (
          <li className="relative" key={item.label}>
            <Link href={item.href || "#"} onClick={onNavigate} className={linkStyle({ active })} >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function HamBurgerIcon({ open, setOpen, className }: { open: boolean; setOpen: (v: boolean) => void; className?: string }) {
  return (
    <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}
      className={cn("relative z-50 flex lg:hidden h-10 w-10 flex-col items-center justify-center gap-1.25 rounded-lg transition-colors duration-200 bg-white/10", className)} >
      <span className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 origin-center ${open ? "translate-y-1.75 rotate-45" : ""}`} />
      <span className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`} />
      <span className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 origin-center ${open ? "-translate-y-1.75 -rotate-45" : ""}`} />
    </button>
  );
}

/* ─────────────────────────────────────────────
   Menubar – top-level shell
   ───────────────────────────────────────────── */
interface MenubarProps {
  fullWidth?: boolean;
  hideTopBar?: boolean;
}

export default function Menubar({
  fullWidth: propFullWidth,
  hideTopBar: propHideTopBar,
}: MenubarProps = {}) {
  const navContext = useNavbar();
  const isFullWidth = propFullWidth ?? (navContext ? navContext.fullWidth : false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const menubarRef = useRef<HTMLDivElement>(null);
  const menubarInnerRef = useRef<HTMLDivElement>(null);

  /* scroll listener to trigger floating when menubarInnerRef touches top of screen */
  useEffect(() => {
    const handleScroll = () => {
      if (!menubarRef.current) return;

      const menubarRect = menubarRef.current.getBoundingClientRect();
      const menubarTopInDoc = window.scrollY + menubarRect.top;

      const topBar = menubarRef.current.firstElementChild as HTMLElement | null;
      const topBarHeight = topBar?.offsetHeight ?? 0;

      // triggerPoint is the exact scroll position where menubarInnerRef touches top of viewport
      const triggerPoint = menubarTopInDoc + topBarHeight;

      setScrolled(window.scrollY >= triggerPoint);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /* Keep placeholder height updated when unscrolled */
  useEffect(() => {
    if (!scrolled && menubarInnerRef.current) {
      setPlaceholderHeight(menubarInnerRef.current.offsetHeight);
    }
  }, [scrolled]);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  useSetHeightRoot(menubarRef, '--menubar-height');

  const menuBarStyle = cva(
    "absolute top-(--page-gap) left-0 w-[calc(100%-(var(--page-gap)*2))] z-50 transition-all duration-300 mx-(--page-gap)",
  )

  const menuBarInnerStyle = cva(
    "z-50 transition-all duration-300",
    {
      variants: {
        scrolled: {
          true: "fixed top-0 left-0 right-0 w-full bg-darker/90 backdrop-blur-xl shadow-xl",
          false: "relative bg-transparent w-full"
        }
      }
    }
  )

  const drawerStyle = cva(
    "fixed top-0 start-0 z-60 flex h-full w-70 max-w-[85vw] flex-col bg-darker/90 backdrop-blur-2xl transition-transform duration-300 ease-in-out lg:hidden",
    {
      variants: {
        open: {
          true: "translate-x-0",
          false: "-translate-x-full"
        }
      }
    }
  )

  const containerStyle = cva(
    "menubar-container",
    {
      variants: {
        fullWidth: {
          false: "container",
          true: "w-full px-4 xl:px-16 2xl:px-25"
        }
      },
      defaultVariants: {
        fullWidth: false,
      },
    }
  )

  return (
    <>
      <div ref={menubarRef} className={menuBarStyle()}>
        <ScrollReveal mode="fade">
          <div className="bg-primary-dark py-3.75 rounded-t-(--radius)">
            <div className={containerStyle({ fullWidth: isFullWidth })}>
              <div className="flex items-center gap-x-5 sm:gap-x-10 gap-y-1.5">
                <ul className="flex items-center -mx-2.5 lg:-mx-5 grow">
                  {CONTACT_INFO.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Fragment key={index}>
                        <li className={cn("hidden lg:flex items-center justify-center gap-2.5 px-5", index === 0 ? "lg:me-auto" : "lg:border-e border-white/40")}>
                          <Icon className="h-4 w-4 fill-white" />
                          <span className="text-base/4.5 text-white">{info.text}</span>
                        </li>
                        <li className={cn("flex lg:hidden items-center justify-center gap-2.5 px-2.5")}>
                          <Tooltip>
                            <TooltipTrigger><Icon className="h-4 w-4 fill-white" /></TooltipTrigger>
                            <TooltipContent className="bg-darker text-white">
                              <p>{info.text}</p>
                            </TooltipContent>
                          </Tooltip>
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
                <ul className="flex items-center justify-center gap-4">
                  {SOCIAL_LINKS.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <li key={index}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center">
                          <Icon className="size-4.5 sm:size-6 transition-colors fill-white group-hover:fill-primary" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <div ref={menubarInnerRef} className={menuBarInnerStyle({ scrolled })}>
          <ScrollReveal mode="fade" delay={100}>
            <div className={containerStyle({ fullWidth: isFullWidth })}>
              <div className="flex w-full">
                <Link href="/" className="group flex items-center self-center gap-2.5 shrink-0 my-4" aria-label="home">
                  <Image src={logo} alt="Logo" width={159} height={36} className="h-7 md:h-8 xl:h-9 w-auto" />
                </Link>
                <nav className="hidden lg:flex items-center self-center w-full py-5.5" >
                  <NavContent className="flex items-center mx-auto gap-3 lg:gap-6 xl:gap-10" onNavigate={closeMobile} />
                  <Button nativeButton={false} render={<Link href="https://docs.google.com/forms/d/e/1FAIpQLSdeLXNSeAYzclsVT8_4sxq3RsUI5PQJ5h86swz-_eiSq2gvkg/viewform?usp=dialog"  target="_blank" rel="noopener noreferrer"/>}      className="capitalize" variant="default">
                    Register Now
                  </Button>
                </nav>
                <div className="ml-auto self-center my-4">
                  <HamBurgerIcon className="" open={mobileOpen} setOpen={setMobileOpen} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>{/* ── .container ── */}
        {scrolled && <div style={{ height: placeholderHeight }} aria-hidden="true" />}
      </div>
      <Overlay className="lg:hidden z-51" open={mobileOpen} onClose={closeMobile} />
      <aside className={drawerStyle({ open: mobileOpen })} aria-hidden={!mobileOpen} >
        <nav className="px-6 pb-10 pt-10 flex flex-1 flex-col">
          <NavContent className="flex flex-1 flex-col gap-1" onNavigate={closeMobile} />
          <Button nativeButton={false} render={<Link href="https://docs.google.com/forms/d/e/1FAIpQLSdeLXNSeAYzclsVT8_4sxq3RsUI5PQJ5h86swz-_eiSq2gvkg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer"/>}   className="capitalize" variant="default">
            Register Now
          </Button>
        </nav>
      </aside>
    </>
  );
}
