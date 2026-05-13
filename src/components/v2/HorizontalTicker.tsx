"use client";

import { Marquee } from "../Marquee";

/**
 * Single-line editorial ticker — transisi clean antar section.
 */
export function HorizontalTicker() {
  const words = [
    "Ready Stock",
    "Siap Huni",
    "Legalitas Jelas",
    "Full Furnished*",
    "Kolam Renang",
    "Half Court Basketball",
    "Playground",
    "NAMU Clubhouse",
    "Entrance Gate",
    "10 Menit Tol Pamulang",
    "5 Menit Mall The Park Sawangan",
    "10 Menit Universitas Pamulang",
    "10 Menit RS Permata Pamulang",
  ];

  return (
    <div className="dark-canvas py-10 md:py-14 overflow-hidden border-y border-white/10">
      <Marquee speed={50}>
        {words.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="flex items-center gap-10 md:gap-14 shrink-0"
          >
            <span className="font-display text-5xl md:text-7xl leading-none tracking-tight text-on-dark">
              {w}
            </span>
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-bronze shrink-0"
            />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
