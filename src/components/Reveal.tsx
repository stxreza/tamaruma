"use client";

import { type CSSProperties, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "figure" | "span" | "ul";
}

const offsetMap: Record<Direction, string> = {
  up: "translate-y-6",
  down: "-translate-y-6",
  left: "translate-x-6",
  right: "-translate-x-6",
  none: "",
};

/**
 * Scroll-reveal wrapper.
 *
 * Safe-by-default: above-fold content never animates in (useInView returns
 * `true` immediately). Only below-fold content gets hidden initially and
 * fades up when scrolled into view. No mount flicker, no hydration mismatch.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 700,
  direction = "up",
  className = "",
  as = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };

  const Tag = as as unknown as "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      style={style}
      className={`transition-[transform,opacity] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform ${
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${offsetMap[direction]}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
