"use client";

import { useMemo } from "react";
import { useInView } from "@/hooks/useInView";

type Mode = "word" | "char";

interface Props {
  text: string;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p";
  mode?: Mode;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  italic?: boolean;
  charClassName?: string;
}

/**
 * Split-text reveal per-word/per-char.
 *
 * Uses useInView with "start visible" semantics — above-fold text renders
 * without any animation (so hero is immediately readable), below-fold text
 * animates in when scrolled to.
 */
export function SplitText({
  text,
  as = "span",
  mode = "word",
  className = "",
  delay = 0,
  stagger = 40,
  duration = 900,
  italic = false,
  charClassName = "",
}: Props) {
  const { ref, inView } = useInView<HTMLElement>();

  const parts = useMemo(() => {
    if (mode === "word") return text.split(/(\s+)/);
    return Array.from(text);
  }, [text, mode]);

  const Tag = as as unknown as "span";

  return (
    <Tag
      ref={ref as React.Ref<HTMLSpanElement>}
      aria-label={text}
      className={`${italic ? "italic" : ""} ${className}`}
    >
      {parts.map((p, i) => {
        if (/^\s+$/.test(p)) return <span key={`sp-${i}`}>{p}</span>;
        const delayMs = delay + i * stagger;
        return (
          <span
            key={i}
            aria-hidden="true"
            className="inline-block overflow-visible"
            style={{ lineHeight: "inherit" }}
          >
            <span
              className={`inline-block will-change-transform ${charClassName}`}
              style={{
                transform: inView
                  ? "translate3d(0,0,0)"
                  : "translate3d(0,110%,0)",
                opacity: inView ? 1 : 0,
                transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
              }}
            >
              {p}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
