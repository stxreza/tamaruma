"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface Options {
  /** 0..1 — IntersectionObserver threshold. Default 0 (any pixel visible). */
  threshold?: number;
  /** IntersectionObserver rootMargin. Default triggers slightly before entering. */
  rootMargin?: string;
  /** If true, stays inView after first reveal. Default true. */
  once?: boolean;
}

/**
 * Isomorphic layout effect — `useLayoutEffect` on the client,
 * `useEffect` on the server (to avoid the SSR warning).
 *
 * Using layout effect on the client is critical here: it lets us flip
 * the "hidden below the fold" state BEFORE the browser paints, so the
 * first painted frame already shows the correct state. Without this,
 * the element flashes visible → animates backwards → hidden, which
 * looks like a glitch on every page load and on every HMR.
 */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Observe an element's viewport visibility.
 *
 * Strategy (avoids flicker):
 * - Initial state is `true` (visible). SSR and first client render match,
 *   so above-the-fold content is readable immediately.
 * - In a layout effect, we measure the element's position. If it's BELOW
 *   the fold at mount time, we hide it (setInView(false)) and attach an
 *   IntersectionObserver that reveals it when it scrolls into view.
 * - Because we use useLayoutEffect (client) the state flip happens before
 *   the first paint, so below-fold elements never flash visible.
 * - Elements already in or above the viewport are left visible — they
 *   render immediately without any animation, which is the correct UX
 *   for above-fold content.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0,
  rootMargin = "0px 0px -5% 0px",
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(true);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;

    // If the element is already visible (or scrolled past), keep it visible.
    // We only animate elements that are BELOW the fold at mount time.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight || 0;
    const isBelowFold = rect.top > vh;

    if (!isBelowFold) return;

    setInView(false);

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
