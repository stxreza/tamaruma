"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const subscribeMedia = (cb: () => void) => {
  const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getHoverSnapshot = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const getHoverServerSnapshot = () => false;

/**
 * Custom cursor: halus mengikuti pointer, expand pada interactive element.
 * Aktif hanya di desktop dengan pointer halus, nonaktif di reduced motion.
 */
export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const hasFinePointer = useSyncExternalStore(
    subscribeMedia,
    getHoverSnapshot,
    getHoverServerSnapshot
  );
  const reduced = usePrefersReducedMotion();
  const enabled = hasFinePointer && !reduced;

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.setAttribute("data-custom-cursor", "on");
    return () => {
      document.documentElement.removeAttribute("data-custom-cursor");
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx;
    let dy = my;
    let rx = mx;
    let ry = my;
    let scale = 1;
    let expanded = false;

    const onMove = (e: globalThis.MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.style.opacity !== "1") dot.style.opacity = "1";
      if (ring.style.opacity !== "1") ring.style.opacity = "1";
    };

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive =
        t.closest("[data-cursor='expand']") ||
        t.closest("a, button, [role='button'], input, textarea, select, label");
      expanded = !!interactive;
    };

    const hide = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const tick = () => {
      dx += (mx - dx) * 0.5;
      dy += (my - dy) * 0.5;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      const target = expanded ? 2.4 : 1;
      scale += (target - scale) * 0.18;

      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`;
      ring.style.opacity = expanded ? "0.35" : "0.9";
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", hide);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", hide);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[100] pointer-events-none h-8 w-8 rounded-full border border-white mix-blend-difference opacity-0 transition-opacity duration-200"
        style={{ willChange: "transform, opacity" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 z-[101] pointer-events-none h-1.5 w-1.5 rounded-full bg-white mix-blend-difference opacity-0 transition-opacity duration-200"
        style={{ willChange: "transform, opacity" }}
      />
    </>
  );
}
