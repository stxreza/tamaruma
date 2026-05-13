"use client";

import type { ReactNode } from "react";

/**
 * Horizontal marquee yang looping mulus dengan dua track duplikat.
 * Pause saat hover untuk memberi kontrol baca ke user.
 */
export function Marquee({
  children,
  speed = 40, // detik per satu loop
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden [--marquee-mask:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] [mask-image:var(--marquee-mask)] [-webkit-mask-image:var(--marquee-mask)] ${className}`}
    >
      <div
        className="flex min-w-max gap-12 animate-[marquee_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex items-center gap-12 shrink-0">{children}</div>
        <div aria-hidden className="flex items-center gap-12 shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}
