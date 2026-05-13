"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Page intro splash.
 *
 * Hydration-safe approach:
 * - SSR always renders null (no overlay in static HTML).
 * - After client mount, check sessionStorage and decide whether to show.
 * - This avoids any SSR/client mismatch and the white-flash caused by
 *   the overlay disappearing immediately on hydration.
 */
export function PageIntro() {
  const reduced = usePrefersReducedMotion();
  // null = not yet decided (pre-mount), so render nothing during SSR & hydration
  const [stage, setStage] = useState<"enter" | "fill" | "exit" | "done" | null>(null);

  useEffect(() => {
    // Skip entirely if user prefers reduced motion
    if (reduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStage("done");
      return;
    }
    // Skip if already seen this session
    try {
      if (sessionStorage.getItem("tmr_intro_seen")) {
        setStage("done");
        return;
      }
    } catch {
      setStage("done");
      return;
    }

    // Start the sequence
    setStage("enter");
    const t1 = setTimeout(() => setStage("fill"), 120);
    const t2 = setTimeout(() => setStage("exit"), 1600);
    const t3 = setTimeout(() => {
      setStage("done");
      try { sessionStorage.setItem("tmr_intro_seen", "1"); } catch { /* ignore */ }
    }, 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lock scroll while visible
  useEffect(() => {
    if (!stage || stage === "done") return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [stage]);

  // Don't render anything until client has decided
  if (!stage || stage === "done") return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[120] flex flex-col items-center justify-center"
      style={{
        background: "var(--surface-dark, #12352f)",
        transform: stage === "exit" ? "translate3d(0,-100%,0)" : "translate3d(0,0,0)",
        transition: "transform 700ms cubic-bezier(0.77,0,0.175,1)",
      }}
    >
      {/* Grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="overflow-visible">
        <div
          className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight"
          style={{
            color: "var(--on-dark, #e7efe9)",
            transform: stage === "enter" ? "translate3d(0,100%,0)" : "translate3d(0,0,0)",
            transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          Tamaruma
        </div>
      </div>

      <div
        className="mt-4 text-[10px] tracking-[0.4em] uppercase"
        style={{ color: "var(--on-dark-muted, #9fb3ab)" }}
      >
        Sawangan · Est 2026
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-px overflow-hidden"
        style={{ background: "rgba(255,255,255,0.15)" }}
      >
        <div
          className="h-full origin-left"
          style={{
            background: "white",
            transform: stage === "fill" || stage === "exit" ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 1400ms cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>
    </div>
  );
}
