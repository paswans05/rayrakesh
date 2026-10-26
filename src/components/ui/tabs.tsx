"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "vertical",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2",
        "data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list  min-w-full relative flex w-full items-center gap-4 after:absolute after:bg-primary/10 after:transition-opacity after:h-1 after:inset-x-0 after:bottom-0 w-fit",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <div className="overflow-auto [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden min-w-full">
        <TabsPrimitive.List
          data-slot="tabs-list"
          data-variant={variant}
          className={cn(tabsListVariants({ variant }), className)}
          {...props}
        />
    </div>
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "group/tabs-trigger cursor-pointer relative inline-flex border border-transparent text-sm transition-all grow group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start disabled:pointer-events-none disabled:opacity-50",
        "data-active:after:opacity-100",
        "after:absolute after:bg-primary after:opacity-0 after:transition-opacity after:h-1 after:inset-x-0 after:bottom-0",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
