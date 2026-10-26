import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "group/badge inline-flex text-xs/none tracking-[1px] px-3.5 py-1.25 font-medium uppercase w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap [&>svg]:pointer-events-none",
    {
        variants: {
            variant: {
                default: "bg-primary text-darker",
                dark: "bg-dark text-white",
                darker: "bg-darker text-white",
            },
            pill: {
                true: "rounded-full"
            },
            outline: {
                true: "border border-transparent bg-transparent"
            }
        },
        defaultVariants: {
            variant: "default",
            pill: false,
            outline: false
        },
        compoundVariants: [
            {
                outline: true,
                variant: "default",
                className: "border-primary text-primary",
            },
            {
                outline: true,
                variant: "dark",
                className: "border-dark text-dark",
            },
            {
                outline: true,
                variant: "darker",
                className: "border-darker text-darker",
            },
        ]
    }
)

function Badge({
    className,
    pill,
    outline,
    variant = "default",
    render,
    ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
    return useRender({
        defaultTagName: "span",
        props: mergeProps<"span">(
            {
                className: cn(badgeVariants({ variant, pill, outline }), className),
            },
            props
        ),
        render,
        state: {
            slot: "badge",
            variant,
        },
    })
}

export { Badge, badgeVariants }
