"use client";

import { useInView } from "@/hooks/useInView";

export function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
}
