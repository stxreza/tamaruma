"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a 0..1 progress value representing how far the element
 * has travelled through the viewport.
 *
 * - 0 when the element's top edge first enters the bottom of the viewport
 * - 0.5 when the element is centered in the viewport
 * - 1 when the element's bottom edge leaves the top of the viewport
 *
 * Uses requestAnimationFrame for smooth, throttled updates. Only updates
 * state when progress changes meaningfully (>= 0.003) to avoid re-render
 * churn during fast scroll.
 */
export function useElementScrollProgress<
  T extends HTMLElement = HTMLDivElement,
>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0.5);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let last = -1;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Distance traveled divided by total travel distance
      const traveled = vh - rect.top;
      const total = rect.height + vh;
      const p = Math.max(0, Math.min(1, traveled / total));
      if (Math.abs(p - last) >= 0.003) {
        last = p;
        setProgress(p);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, progress };
}

/**
 * Simple window scrollY hook with rAF throttling.
 */
export function useScrollY() {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    let last = -1;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const next = window.scrollY;
        if (Math.abs(next - last) >= 1) {
          last = next;
          setY(next);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return y;
}
