"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { unitTypes } from "@/lib/site";
import { formatIDR } from "@/lib/format";
import { Reveal } from "./Reveal";

type UnitSlug = (typeof unitTypes)[number]["slug"];

function useAnimatedNumber(target: number, duration = 500) {
  const [value, setValue] = useState(target);
  const rafRef = useRef<number | null>(null);
  const fromRef = useRef(target);

  useEffect(() => {
    const start = performance.now();
    const from = fromRef.current;
    const delta = target - from;
    if (delta === 0) return;

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + delta * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        fromRef.current = target;
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      fromRef.current = target;
    };
  }, [target, duration]);

  return value;
}

export function KprSimulator() {
  const [slug, setSlug] = useState<UnitSlug>("t58");
  const [dpPct, setDpPct] = useState(20);
  const [tenor, setTenor] = useState(20);
  const [rate, setRate] = useState(7.5);

  const unit = unitTypes.find((u) => u.slug === slug)!;
  const price = unit.priceFrom;
  const dp = (price * dpPct) / 100;
  const loan = price - dp;

  const monthly = useMemo(() => {
    const r = rate / 100 / 12;
    const n = tenor * 12;
    if (r === 0) return loan / n;
    return (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [loan, rate, tenor]);

  const animatedMonthly = useAnimatedNumber(Math.round(monthly));

  return (
    <section id="kpr" className="section bg-surface-dark text-on-dark">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
        <div>
          <Reveal>
            <div className="eyebrow eyebrow-on-dark">Simulasi KPR</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-tight">
              Hitung kasar dulu. <br className="hidden sm:block" />
              Nanti tim kami bantu submit ke 6 bank.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-on-dark-muted max-w-md">
              Estimasi ini memakai bunga fixed ilustrasi. Angka final tergantung
              program bank pilihan dan profil pemohon.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-8 space-y-3 text-sm text-on-dark-muted">
              <li>• DP 10–30% (kami bantu cari program paling ringan).</li>
              <li>• Tenor hingga 20 tahun untuk dua skenario cicilan.</li>
              <li>• Approval indikatif 5–7 hari kerja.</li>
            </ul>
          </Reveal>
        </div>

        <Reveal
          direction="left"
          delay={200}
          className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 md:p-7 backdrop-blur-sm"
        >
          <div className="flex gap-2 flex-wrap">
            {unitTypes.map((u) => (
              <button
                key={u.slug}
                onClick={() => setSlug(u.slug)}
                className={`px-3.5 py-2 rounded-full text-sm transition-all ${
                  slug === u.slug
                    ? "bg-accent text-white"
                    : "bg-white/5 text-on-dark-muted hover:text-on-dark hover:bg-white/10"
                }`}
              >
                {u.name.replace("Tipe Ruma ", "Tipe ")}
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-baseline justify-between text-on-dark-muted text-xs">
            <span>Harga unit</span>
            <span className="text-on-dark text-base font-medium">
              {formatIDR(price)}
            </span>
          </div>

          <Slider
            label="Down payment"
            value={dpPct}
            min={10}
            max={50}
            step={1}
            suffix="%"
            onChange={setDpPct}
            detail={formatIDR(dp)}
          />
          <Slider
            label="Tenor"
            value={tenor}
            min={5}
            max={20}
            step={1}
            suffix=" tahun"
            onChange={setTenor}
          />
          <Slider
            label="Bunga (fixed ilustrasi)"
            value={rate}
            min={4}
            max={12}
            step={0.25}
            suffix="%"
            onChange={setRate}
          />

          <div className="mt-7 border-t border-white/10 pt-5">
            <div className="text-xs uppercase tracking-widest text-on-dark-muted">
              Estimasi cicilan bulanan
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span
                className="font-display text-4xl md:text-5xl text-on-dark tabular-nums"
                aria-live="polite"
              >
                {formatIDR(Math.round(animatedMonthly))}
              </span>
              <span className="text-on-dark-muted text-sm">/ bulan</span>
            </div>
            <div className="mt-1 text-xs text-on-dark-muted">
              Nilai pinjaman {formatIDR(loan)} · {tenor * 12} kali cicilan
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
  detail,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (v: number) => void;
  detail?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mt-5">
      <div className="flex items-baseline justify-between text-xs text-on-dark-muted">
        <label className="text-on-dark-muted">{label}</label>
        <span className="text-on-dark font-medium text-sm">
          {value}
          {suffix}
          {detail ? (
            <span className="text-on-dark-muted ml-2 font-normal">
              ({detail})
            </span>
          ) : null}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-2 accent-accent appearance-none h-1.5 rounded-full cursor-pointer"
        style={{
          background: `linear-gradient(to right, #34D399 0%, #34D399 ${pct}%, rgba(255,255,255,0.12) ${pct}%, rgba(255,255,255,0.12) 100%)`,
        }}
      />
    </div>
  );
}
