"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
  pauseOnHover?: boolean;
}

/**
 * Infinite horizontal marquee. Renders its children twice so the
 * -50% translate loops seamlessly.
 */
export function Marquee({
  children,
  reverse = false,
  duration = 40,
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={cn("marquee-mask group flex overflow-hidden", className)}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
          className={cn(
            "flex shrink-0 items-center",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
