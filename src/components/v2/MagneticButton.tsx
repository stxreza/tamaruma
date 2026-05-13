"use client";

import {
  useRef,
  useEffect,
  type ReactNode,
  forwardRef,
  type ForwardedRef,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  /** Kekuatan tarikan; default 0.25 */
  strength?: number;
  onClick?: () => void;
};

/**
 * Tombol magnetic — translate halus mengikuti kursor saat hover.
 * Desktop only (nonaktif di touch & reduced motion).
 */
function MagneticButtonInner(
  { children, className = "", href, target, rel, strength = 0.25, onClick }: Props,
  forwardedRef: ForwardedRef<HTMLAnchorElement & HTMLButtonElement>
) {
  const innerRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const setRef = (el: HTMLAnchorElement & HTMLButtonElement) => {
    innerRef.current = el;
    if (typeof forwardedRef === "function") forwardedRef(el);
    else if (forwardedRef) forwardedRef.current = el;
  };
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = innerRef.current;
    if (!el || reduced) return;

    const touch = window.matchMedia("(hover: none)").matches;
    if (touch) return;

    let raf = 0;
    const onMove = (e: globalThis.MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - (rect.left + rect.width / 2);
      const my = e.clientY - (rect.top + rect.height / 2);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${mx * strength}px, ${my * strength}px, 0)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "translate3d(0,0,0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength, reduced]);

  const style = {
    transition:
      "transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), background-color 200ms, color 200ms, box-shadow 200ms, border-color 200ms",
  } as const;

  if (href) {
    return (
      <a
        ref={setRef}
        href={href}
        target={target}
        rel={rel}
        className={className}
        style={style}
        onClick={onClick}
        data-cursor="expand"
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={setRef}
      className={className}
      style={style}
      onClick={onClick}
      data-cursor="expand"
    >
      {children}
    </button>
  );
}

export const MagneticButton = forwardRef(MagneticButtonInner);
