"use client"

import * as React from "react"
import NextImage, { type ImageProps } from "next/image"
import { cva, type VariantProps } from "class-variance-authority"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"

import { cn } from "@/lib/utils"

export interface AvatarProps
  extends React.ComponentPropsWithRef<typeof AvatarPrimitive.Root>,
  VariantProps<typeof avatarVariants> {
  className?: string,
}


const avatarVariants = cva(
  "group/avatar relative flex shrink-0 rounded-full select-none",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground",
        primary: "bg-primary text-dark fill-dark",
      },
      size: {
        default: "size-8",
        sm: "size-6",
        lg: "size-10",
        xl: "size-15",
        "2xl": "size-17.5",
      },
      centered: {
        true: "items-center justify-center",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      centered: false
    },
  }
)

function Avatar({
  className,
  size,
  variant,
  centered,
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        avatarVariants({ size, variant, centered }),
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  src,
  alt = "",
  width,
  height,
  ...props
}: Omit<ImageProps, "src" | "alt"> & {
  src: ImageProps["src"];
  alt?: string;
}) {
  return (
    <NextImage
      data-slot="avatar-image"
      src={src}
      alt={alt}
      width={width ?? 80}
      height={height ?? 80}
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
