"use client";

import { useEffect, useState } from "react";

/**
 * Full-screen preloader — hijau gelap (#12352f), muncul sekali per sesi.
 * Fade out setelah halaman siap (DOMContentLoaded + minimal 800ms).
 * Setelah selesai, elemen dihapus dari DOM agar tidak memblokir interaksi.
 */
export function Preloader() {
  // 0 = visible, 1 = fading, 2 = gone
  const [phase, setPhase] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const MIN_DURATION = 900; // ms — cukup untuk animasi terlihat
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DURATION - elapsed);
      setTimeout(() => {
        setPhase(1); // mulai fade out
        setTimeout(() => setPhase(2), 600); // hapus dari DOM setelah fade
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  if (phase === 2) return null;

  return (
    <div
      aria-hidden="true"
      role="presentation"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#12352f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        opacity: phase === 1 ? 0 : 1,
        transition: phase === 1 ? "opacity 600ms cubic-bezier(0.4,0,0.2,1)" : "none",
        pointerEvents: phase === 1 ? "none" : "auto",
      }}
    >
      {/* Wordmark */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.375rem",
          animation: "pre-fade-up 700ms cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            fontWeight: 500,
            letterSpacing: "-0.025em",
            color: "#e7efe9",
            lineHeight: 1,
          }}
        >
          Tamaruma
        </span>
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(231,239,233,0.45)",
            fontFamily: "var(--font-body, system-ui)",
          }}
        >
          Sawangan
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "120px",
          height: "1px",
          background: "rgba(231,239,233,0.15)",
          borderRadius: "9999px",
          overflow: "hidden",
          animation: "pre-fade-up 700ms cubic-bezier(0.22,1,0.36,1) 120ms both",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "#b7791f",
            borderRadius: "9999px",
            animation: "pre-bar 900ms cubic-bezier(0.4,0,0.2,1) both",
          }}
        />
      </div>

      <style>{`
        @keyframes pre-fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pre-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
