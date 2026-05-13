"use client";

import { useEffect, useState } from "react";

/**
 * Jam real-time zona Jakarta (WIB).
 * SSR-safe: tidak render angka sebelum client ready.
 */
export function LocalTime({ label = "WIB" }: { label?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(fmt.format(now));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 v-tabular">
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full bg-bronze animate-pulse"
      />
      {time ?? "--:--:--"} {label}
    </span>
  );
}
