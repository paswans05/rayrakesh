"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "@/lib/utils"
import { MinusCircleFill, PlusCircleFill } from "../icons"

function Accordion(props: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      {...props}
    />
  )
}

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.Item.Props
>(({ className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      data-slot="accordion-item"
      className={cn(
        "border border-lighter bg-white transition-all duration-300",
        className
      )}
      {...props}
    />
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionPrimitive.Trigger.Props
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header render={<div />} className="group heading flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between w-full p-5 lg:p-6 lg:group-data-open:pb-4 text-start font-medium text-darker text-lg lg:text-xl cursor-pointer transition-all group ",
          className
        )}
        {...props}
      >
        {children}

        <div className="items-center justify-center size-9 shrink-0 hidden fill-primary group-data-open:flex">
          <MinusCircleFill className="size-6" />
        </div>
        <div className="flex items-center justify-center size-9 shrink-0  fill-body group-data-open:hidden">
          <PlusCircleFill className="size-6" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.Panel.Props
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Panel
      ref={ref}
      data-slot="accordion-content"
      className={cn("overflow-hidden", className)}
      {...props}
    >
      <div className="px-5 pb-5 text-base leading-relaxed lg:px-6 lg:pb-6 text-body">
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
