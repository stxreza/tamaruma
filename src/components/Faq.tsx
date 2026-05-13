"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { ChevronDownIcon } from "./Icon";
import { Reveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <Reveal>
            <div className="eyebrow">FAQ</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
              Pertanyaan yang sering kami dengar.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-muted-2">
              Tidak ada di sini? Silakan chat WhatsApp kami dan tim marketing
              akan balas paling lambat 2 jam di jam kerja.
            </p>
          </Reveal>
        </div>

        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={f.q} delay={i * 70}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 text-left py-5 group"
                >
                  <span className="text-[16px] md:text-[17px] font-medium text-foreground group-hover:text-accent transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 h-8 w-8 rounded-full inline-flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "bg-accent border-accent text-white rotate-180"
                        : "bg-background border-[var(--border-strong)] text-muted-2"
                    }`}
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15px] leading-relaxed text-muted-2 max-w-2xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
