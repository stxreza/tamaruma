"use client";

import { useEffect, useState } from "react";
import { waHref } from "@/lib/site";
import { WhatsappIcon, CalendarIcon } from "./Icon";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`lg:hidden fixed inset-x-0 bottom-0 z-30 sticky-cta px-3 pt-2 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-md grid grid-cols-[1.3fr_1fr] gap-2 bg-background/95 backdrop-blur-md rounded-2xl p-2 border border-[var(--border-strong)] shadow-[var(--shadow-lg)]">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary !py-3 !px-4 !text-sm"
        >
          <WhatsappIcon className="h-5 w-5" />
          Chat WhatsApp
        </a>
        <a
          href="#jadwal"
          className="btn btn-secondary !py-3 !px-3 !text-sm bg-surface"
        >
          <CalendarIcon className="h-5 w-5" />
          Visit
        </a>
      </div>
    </div>
  );
}
