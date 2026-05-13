"use client";

import { useInView } from "@/hooks/useInView";
import { Reveal } from "./Reveal";
import {
  CalendarIcon,
  WhatsappIcon,
  ShieldIcon,
  KeyIcon,
} from "./Icon";
import type { ComponentType, SVGProps } from "react";

type IconCmp = ComponentType<SVGProps<SVGSVGElement>>;

const steps: { day: string; title: string; body: string; Icon: IconCmp }[] = [
  {
    day: "Hari 1",
    title: "Chat WhatsApp / jadwal visit",
    body: "Tim marketing kirim katalog, harga terbaru, dan link lokasi dalam hitungan menit.",
    Icon: WhatsappIcon,
  },
  {
    day: "Hari 2",
    title: "Visit show unit",
    body: "Tour 3 tipe, simulasi KPR personal, dan pilih unit favorit dengan denah aktual.",
    Icon: CalendarIcon,
  },
  {
    day: "Hari 3–9",
    title: "KPR & akad",
    body: "Submit ke 6 bank partner, indikasi approval 5–7 hari kerja, lanjut akad notaris.",
    Icon: ShieldIcon,
  },
  {
    day: "Hari 10+",
    title: "Serah terima kunci",
    body: "Ambil kunci, koordinasi furnished (opsional), dan siap pindah dalam 30 hari.",
    Icon: KeyIcon,
  },
];

export function ProcessSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="proses" className="section">
      <div className="container-x">
        <div className="max-w-xl">
          <Reveal>
            <div className="eyebrow">Proses</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
              Dari chat pertama sampai kunci di tangan — transparan.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-muted-2">
              Estimasi timeline realistis, bukan janji manis. Kami tahu pindah
              rumah itu keputusan besar.
            </p>
          </Reveal>
        </div>

        <div
          ref={ref}
          className="mt-12 relative grid gap-8 md:grid-cols-4 md:gap-6"
        >
          {/* Horizontal connector line (desktop) */}
          <div
            aria-hidden
            className="hidden md:block absolute top-[34px] left-8 right-8 h-[2px] bg-[var(--border-strong)] overflow-hidden"
          >
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-bronze transition-[width] duration-[1400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              style={{ width: inView ? "100%" : "0%" }}
            />
          </div>

          {steps.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 180}
              className="relative"
            >
              <div className="flex md:flex-col items-start md:items-start gap-4">
                <div className="relative shrink-0">
                  <div
                    className={`relative h-[68px] w-[68px] rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                      inView
                        ? "bg-surface border-accent text-accent"
                        : "bg-surface border-[var(--border-strong)] text-muted"
                    }`}
                  >
                    <s.Icon className="h-6 w-6" />
                    <span
                      aria-hidden
                      className={`absolute -top-1 -right-1 text-[10px] font-semibold h-6 min-w-6 px-1.5 rounded-full bg-bronze text-white inline-flex items-center justify-center transition-all duration-500 ${
                        inView ? "opacity-100 scale-100" : "opacity-0 scale-50"
                      }`}
                      style={{ transitionDelay: `${i * 180 + 400}ms` }}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="eyebrow text-bronze">{s.day}</div>
                  <h3 className="mt-1 text-[16px] font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-2 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
