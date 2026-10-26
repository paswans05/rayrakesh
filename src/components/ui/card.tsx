import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

interface CardProps extends React.ComponentProps<"div"> {
    size?: "default" | "sm";
    variant?: "default" | "light" | "translucent" | "bordered" | "shadow" | "shadow-sm";
}

const cardVariants = cva(
    "group/card flex flex-col border overflow-hidden rounded-xl",
    {
        variants: {
            variant: {
                default: "bg-card text-card-foreground",
                light: "bg-card-light text-card-foreground",
                translucent: "bg-white/8 border-white/12 backdrop-blur-[4px]",
                bordered: "border border-border bg-card text-card-foreground",
                shadow: "bg-card text-card-foreground shadow-md",
                "shadow-sm": "bg-card text-card-foreground shadow-sm",
            },
            size: {
                default: "p-6",
                sm: "p-4",
            },
        },
        defaultVariants: {
            size: "default",
            variant: "default"
        },
    }
)

function Card({
    className,
    size = "default",
    variant = "default",
    ...props
}: CardProps) {
    return (
        <div
            data-slot="card"
            data-size={size}
            data-variant={variant}
            className={cn(
                cardVariants({ size, variant }),
                className
            )}
            {...props}
        />
    )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
                className
            )}
            {...props}
        />
    )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={cn(
                "cn-font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
                className
            )}
            {...props}
        />
    )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className
            )}
            {...props}
        />
    )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-(--card-spacing)", className)}
            {...props}
        />
    )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn(
                "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)",
                className
            )}
            {...props}
        />
    )
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
}
