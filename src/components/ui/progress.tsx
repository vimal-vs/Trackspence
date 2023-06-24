"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "../../lib/utils"

const progressBar = (value) => {
  if(value>=75){
    return "bg-red-500";
  }
  else if(value>=50){
    return "bg-yellow-300";
  }
  return "bg-blue-button";
}

const progressMax = (value) => {
  if(100-value <= 0){
    return 100;
  }
  return value;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-3 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={`h-full w-full flex-1 ${progressBar(value)} transition-all`}
      style={{ transform: `translateX(-${100 - (progressMax(value) || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
