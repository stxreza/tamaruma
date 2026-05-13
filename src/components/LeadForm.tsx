"use client";

import { useState } from "react";
import { unitTypes, site, waHref } from "@/lib/site";
import { CheckIcon, WhatsappIcon } from "./Icon";
import { Reveal } from "./Reveal";

export function LeadForm() {
  const [name, setName] = useState("");
  const [wa, setWa] = useState("");
  const [unit, setUnit] = useState<string>("t75");
  const [schedule, setSchedule] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const unitName = unitTypes.find((u) => u.slug === unit)?.name ?? "";
    const text = encodeURIComponent(
      `Halo, saya ${name} (${wa}).\nTertarik ${unitName} di ${site.name}.\nJadwal kunjungan yang diinginkan: ${schedule || "fleksibel"}.`
    );
    window.open(
      `https://wa.me/${site.whatsapp.number}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  return (
    <section id="jadwal" className="section">
      <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
        <div>
          <Reveal>
            <div className="eyebrow">Jadwalkan Visit</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-foreground">
              Datang, lihat rumahnya, rasakan{" "}
              <br className="hidden md:block" />
              kenapa banyak yang pindah duluan.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-muted-2 max-w-xl">
              Isi formulir singkat — tim marketing akan konfirmasi via WhatsApp
              dalam 2 jam di jam kerja (Senin–Sabtu, 09.00–17.00).
            </p>
          </Reveal>

          <ul className="mt-7 space-y-3 text-sm text-muted-2">
            {[
              "Tour show unit 60, 75, dan 85",
              "Presentasi skema KPR & simulasi personal",
              "Cek langsung kualitas material dan finishing",
            ].map((t, i) => (
              <Reveal as="li" key={t} delay={200 + i * 60}>
                <div className="flex items-start gap-2.5">
                  <CheckIcon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{t}</span>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={380}>
            <div className="mt-8 p-4 rounded-xl bg-surface-2/70 border border-[var(--border)]">
              <div className="eyebrow">Alamat</div>
              <div className="mt-1 text-sm text-foreground">{site.address}</div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={180}>
          <form
            onSubmit={onSubmit}
            className="card p-6 md:p-7 flex flex-col gap-4"
            aria-label="Formulir jadwal kunjungan"
          >
            <Field
              id="name"
              label="Nama lengkap"
              required
              value={name}
              onChange={setName}
              placeholder="Nama Anda"
            />
            <Field
              id="wa"
              label="Nomor WhatsApp"
              required
              type="tel"
              value={wa}
              onChange={setWa}
              placeholder="0812…"
            />

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="unit"
                className="text-xs font-medium text-muted-2"
              >
                Tipe unit yang diminati
              </label>
              <div className="flex flex-wrap gap-2">
                {unitTypes.map((u) => (
                  <button
                    key={u.slug}
                    type="button"
                    onClick={() => setUnit(u.slug)}
                    className={`px-3.5 py-2 rounded-full text-sm transition-all ${
                      unit === u.slug
                        ? "bg-accent text-white shadow-[var(--shadow-sm)]"
                        : "bg-surface-2/70 text-muted-2 hover:text-foreground hover:bg-surface-2 border border-[var(--border)]"
                    }`}
                  >
                    {u.name.replace("Tipe Ruma ", "Tipe ")}
                  </button>
                ))}
              </div>
              <input type="hidden" name="unit" value={unit} />
            </div>

            <Field
              id="schedule"
              label="Rencana kunjungan (opsional)"
              value={schedule}
              onChange={setSchedule}
              placeholder="Contoh: Sabtu pagi"
            />

            <button
              type="submit"
              className="btn btn-primary shine mt-2 !w-full !justify-center"
            >
              <WhatsappIcon className="h-5 w-5" />
              Kirim lewat WhatsApp
            </button>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-muted hover:text-foreground transition-colors"
            >
              Atau klik di sini untuk chat tanpa formulir
            </a>

            {submitted ? (
              <p className="text-xs text-accent text-center" role="status">
                WhatsApp sedang terbuka — silakan lanjutkan di sana.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-muted-2">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 rounded-lg bg-background border border-[var(--border-strong)] px-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
      />
    </div>
  );
}
