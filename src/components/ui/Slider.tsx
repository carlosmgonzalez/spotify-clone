import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider"
import styles from './slider.module.css';

import {cn} from "../../lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className, styles.slider
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-neutral-500">
      <SliderPrimitive.Range className="absolute h-full bg-neutral-300" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn("hidden hover:block h-3 w-3 rounded-full bg-neutral-300 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-transparent", styles.circle)} />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
