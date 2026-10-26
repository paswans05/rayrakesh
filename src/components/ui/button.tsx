import type { ReactNode } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-1 border-transparent bg-clip-padding transition-all outline-none select-none cursor-pointer focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 tracking-[.5px]",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white",
        darker: "border-darker bg-darker text-white hover:bg-dark hover:text-white fill-white",
        light: "border-white bg-white text-primary hover:bg-darker hover:border-darker hover:text-white fill-primary",
        outline: "border-white/40 text-white fill-white hover:bg-white hover:text-darker hover:fill-darker",
        "outline-dark": "border-dark/20 text-dark hover:bg-dark/10 fill-dark",
        "outline-primary": "border-primary text-primary hover:bg-primary hover:text-white hover:fill-white fill-primary",
        link: "text-primary hover:text-darker",
      },
      size: {
        default: "h-10 lg:h-12 gap-4 rounded-lg px-4 lg:px-6 text-sm font-medium [&>svg]:size-4",
        md: "h-9 lg:h-10 gap-4 rounded-lg px-4 lg:px-6 text-sm font-medium [&>svg]:size-4",
        lg: "h-10.5 lg:h-14 gap-4 rounded-lg px-5 lg:px-7 text-sm font-medium [&>svg]:size-5",
        xl: "h-11 lg:h-15 gap-4 rounded-lg px-5 lg:px-7 text-base lg:text-lg font-medium [&>svg]:size-6",
        '2xl': "h-12 lg:h-16 gap-4 rounded-lg px-5 lg:px-7 text-base font-medium [&>svg]:size-6",
      },
      full: {
        true: "w-full",
      },
      block: {
        true: "w-full",
      },
      pill: {
        true: "rounded-full",
      },
      onlyIcon: {
        true: "px-0!",
      },
      iconPosition: {
        left: "",
        right: "",
      }
    },
    compoundVariants: [
      {
        variant: "link",
        className: "px-0! h-auto! gap-2.5 font-medium text-base xl:text-lg"
      },
      {
        onlyIcon: true,
        size: "default",
        className: "size-10 lg:size-12 [&>svg]:size-4",
      },
      {
        onlyIcon: true,
        size: "md",
        className: "size-9 lg:size-10 [&>svg]:size-5",
      },
      {
        onlyIcon: true,
        size: "lg",
        className: "size-12 lg:size-14 [&>svg]:size-5",
      },
      {
        onlyIcon: true,
        size: "xl",
        className: "size-13 lg:size-15 [&>svg]:size-6",
      },
      {
        onlyIcon: true,
        size: "2xl",
        className: "size-14 lg:size-16 [&>svg]:size-6",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      iconPosition: 'right'
    },
  }
)

export const buttonIconVariant = cva(
  "inline-flex shrink-0 grow-0 rounded-full items-center justify-center border border-transparent transition-all",
  {
    variants: {
      variant: {
        default: "",
        darker: "",
        light: "",
        outline: "",
        "outline-dark": "",
        "outline-primary": "",
        link: "border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker"
      },
      size: {
        default: "[&>svg]:size-4",
        md: "[&>svg]:size-3.5",
        lg: "[&>svg]:size-4",
        xl: "[&>svg]:size-5",
        '2xl': "[&>svg]:size-6",
      },
      iconPosition: {
        left: "me-auto",
        right: "ms-auto",
      },
    },
    compoundVariants: [
      {
        variant: "link",
        className: "size-5 [&>svg]:size-3"
      },
    ],
    defaultVariants: {
      size: "default",
      iconPosition: "right",
    },
  }
)

export interface ButtonProps
  extends ButtonPrimitive.Props,
  VariantProps<typeof buttonVariants> {
  icon?: ReactNode
  iconPosition?: "left" | "right"
  onlyIcon?: boolean
  iconClassName?: string
}

export function Button({
  className,
  iconClassName,
  variant,
  size,
  full,
  block,
  pill,
  onlyIcon = false,
  icon,
  iconPosition = "right",
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          full,
          block,
          pill,
          onlyIcon,
          iconPosition,
          className,
        })
      )}
      {...props}
    >
      {!onlyIcon &&
        icon &&
        iconPosition === "left" && (
          <div className={cn(buttonIconVariant({ variant, size }), iconClassName)}>
            {icon}
          </div>
        )}

      {!onlyIcon && children}

      {!onlyIcon &&
        icon &&
        iconPosition === "right" && (
          <div className={cn(buttonIconVariant({ variant, size }), iconClassName)}>
            {icon}
          </div>
        )}

      {onlyIcon && icon && icon}
    </ButtonPrimitive>
  )
}