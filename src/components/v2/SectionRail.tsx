"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Intro" },
  { id: "intro-v2", label: "01" },
  { id: "tipe-v2", label: "02" },
  { id: "manifesto", label: "03" },
  { id: "galeri-v2", label: "04" },
  { id: "momen", label: "05" },
  { id: "kontak-v2", label: "06" },
];

export function SectionRail() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigator"
      className="hidden xl:flex fixed top-1/2 -translate-y-1/2 left-5 z-30 flex-col gap-3 mix-blend-difference"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={`Ke bagian ${s.label}`}
            className="group relative flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
          >
            <span
              className={`block h-px transition-all duration-500 ${
                isActive
                  ? "w-8 bg-white"
                  : "w-4 bg-white/40 group-hover:bg-white"
              }`}
            />
            <span className="v-tabular opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
