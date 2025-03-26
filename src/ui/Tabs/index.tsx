"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"

import { cn } from "../../utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md bg-seidor-gray-medium px-4 py-[7px] text-seidor-gray-carbon gap-2",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-[7px] ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=active]:bg-seidor-gray-hard/95 data-[state=active]:text-seidor-gray-flat-white data-[state=active]:shadow data-[state=active]:hover:bg-seidor-gray-hard enabled:data-[state=inactive]:hover:bg-seidor-gray-hard/55",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }



type TabsItemsProps = {
  defaultValue: string
  items: { id: string; label: React.ReactNode, disabled?: boolean }[]
  classContent?: string
  classTrigger?: string
}

export interface TabsVariantsProps
  extends React.ComponentProps<typeof TabsList> {
  tabItems: TabsItemsProps
}

export const TabsVariants = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsVariantsProps
>(({ className, tabItems, children }, ref) => {
  return (<Tabs defaultValue={tabItems.defaultValue} className="w-[400px]">
    <TabsList className={cn(className)} ref={ref}>
      {tabItems.items.map((item) => (
        <TabsTrigger key={item.id} value={item.id} disabled={item.disabled} className={tabItems.classTrigger}>
          {item.label}
        </TabsTrigger>
      ))}
    </TabsList>
    {children}
  </Tabs>
  )
}
)
