import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ReactNode, HTMLAttributes } from "react";

export const sectionVariants = cva(
  "relative w-full",
  {
    variants: {
      gap: {
        default: "py-15 sm:py-20 lg:py-24 xl:py-30 2xl:py-35",
        top: "pt-15 sm:pt-20 lg:pt-24 xl:pt-30 2xl:py-35",
        bottom: "pb-15 sm:pb-20 lg:pb-24 xl:pb-30 2xl:py-35",
        none: "",
      },
      boxed: {
        true: "mx-(--page-gap) rounded-(--radius) w-(calc(100%+var(--page-gap)*2)))",
      },
    },
    defaultVariants: {
      gap: "default",
      boxed: false,
    },
  }
);

type SectionProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> & {
    children?: ReactNode;
  };

export const Section = ({ gap, boxed, className, children, ...rest }: SectionProps) => (
  <section className={cn(sectionVariants({ gap, boxed }), className)} {...rest}>
    {children}
  </section>
);

export type SectionHeadProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export const SectionHead = ({ className, children, ...rest }: SectionHeadProps) => (
  <div
    className={cn(
      "section-head relative mb-10 xl:mb-15 [.section-content+&]:mt-10 xl:[.section-content+&]:mt-15 [.section-footer+&]:mt-10 xl:[.section-footer+&]:mt-15",
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export type SectionContentProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  gap?: string;
};

export const SectionContent = ({ className, children, gap, ...rest }: SectionContentProps) => (
  <div
    className={cn(
      "section-content relative",
      gap == "large" && "[.section-content+&]:mt-20 lg:[.section-content+&]:mt-24 xl:[.section-content+&]:mt-30",
      !gap && "[.section-content+&]:mt-10 xl:[.section-content+&]:mt-15",
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export type SectionFooterProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export const SectionFooter = ({ className, children, ...rest }: SectionFooterProps) => (
  <div
    className={cn(
      "section-footer relative mt-10 xl:mt-15",
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export default Section;