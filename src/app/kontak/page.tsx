"use client";

import { useState } from "react";
import { NavV2 } from "@/components/v2/NavV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { site } from "@/lib/site";
import { useInView } from "@/hooks/useInView";
import { WhatsappIcon } from "@/components/Icon";

const WA_NUMBER = "628131742034";

const BUDGET_OPTIONS = [
  { value: "1-1.2", label: "Rp 1 M – 1,2 M" },
  { value: "1.2-1.5", label: "Rp 1,2 M – 1,5 M" },
  { value: "1.5-2", label: "Rp 1,5 M – 2 M" },
  { value: "2-3", label: "Rp 2 M – 3 M" },
  { value: "3+", label: "Di atas Rp 3 M" },
];

const INSTALLMENT_OPTIONS = [
  { value: "<6", label: "Di bawah Rp 6 juta/bulan" },
  { value: "6-8", label: "Rp 6 – 8 juta/bulan" },
  { value: "8-10", label: "Rp 8 – 10 juta/bulan" },
  { value: "10+", label: "Di atas Rp 10 juta/bulan" },
];

const UNIT_OPTIONS = [
  { value: "belum-tahu", label: "Belum tahu / minta rekomendasi" },
  { value: "t58", label: "Tipe 58" },
  { value: "t85", label: "Tipe 85" },
  { value: "hook", label: "Tipe Hook (119 / 144 / 146)" },
];

export default function KontakPage() {
  const { ref, inView } = useInView<HTMLDivElement>();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    unit: "",
    budget: "",
    payment: "cash" as "cash" | "kpr",
    installment: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ambil label dari options
    const budgetLabel =
      BUDGET_OPTIONS.find((o) => o.value === form.budget)?.label || "-";
    const unitLabel =
      UNIT_OPTIONS.find((o) => o.value === form.unit)?.label || "-";
    const installmentLabel =
      INSTALLMENT_OPTIONS.find((o) => o.value === form.installment)?.label || "-";

    // Format pesan WhatsApp — rapi, pakai emoji & section
    const lines = [
      "*Halo Tim Tamaruma Sawangan 👋*",
      "",
      "Saya tertarik dengan Tamaruma Sawangan dan ingin info lebih lanjut. Berikut data saya:",
      "",
      "━━━━━━━━━━━━━━━",
      "📋 *DATA PEMOHON*",
      "━━━━━━━━━━━━━━━",
      `*Nama:* ${form.name}`,
      `*No. HP:* ${form.phone}`,
      `*Alamat:* ${form.address}`,
      "",
      "━━━━━━━━━━━━━━━",
      "🏠 *PREFERENSI UNIT*",
      "━━━━━━━━━━━━━━━",
      `*Tipe rumah:* ${unitLabel}`,
      `*Range budget:* ${budgetLabel}`,
      "",
      "━━━━━━━━━━━━━━━",
      "💳 *RENCANA PEMBAYARAN*",
      "━━━━━━━━━━━━━━━",
      `*Metode:* ${form.payment === "cash" ? "Cash / Tunai" : "KPR (Kredit Pemilikan Rumah)"}`,
    ];

    if (form.payment === "kpr") {
      lines.push(`*Kesanggupan cicilan:* ${installmentLabel}`);
    }

    if (form.note.trim()) {
      lines.push(
        "",
        "━━━━━━━━━━━━━━━",
        "💬 *CATATAN TAMBAHAN*",
        "━━━━━━━━━━━━━━━",
        form.note.trim()
      );
    }

    lines.push("", "Mohon info selanjutnya ya. Terima kasih 🙏");

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WA_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const isFormValid =
    form.name.trim() &&
    form.phone.trim() &&
    form.address.trim() &&
    form.unit &&
    form.budget &&
    (form.payment === "cash" || (form.payment === "kpr" && form.installment));

  return (
    <>
      <NavV2 />
      <FloatingChat />
      <BackToTop />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-12 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div
              ref={ref}
              className="transition-all duration-1000 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="eyebrow">Kontak</div>
              <h1 className="font-display display-xl mt-4 text-foreground leading-[1.15]">
                Mari berkenalan.
              </h1>
              <p className="mt-6 text-lg text-muted max-w-[640px] leading-relaxed">
                <strong className="font-normal text-foreground">
                  Tamaruma Sawangan
                </strong>{" "}
                adalah komplek perumahan tropical modern di Sawangan, Depok
                dengan 177 unit rumah ready stock siap huni. Tiga tipe rumah
                (58, 85, Hook) — semuanya sudah berdiri, legalitas jelas,
                fasilitas aktif. Isi form di bawah, nanti kami balas langsung
                via WhatsApp dengan data spesifik yang Anda butuhkan.
              </p>
            </div>
          </div>
        </section>

        {/* Form + Info Sidebar */}
        <section className="pb-20 px-0 md:px-10">
          <div className="max-w-[1100px] mx-auto px-[10px] md:px-0">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              {/* FORM */}
              <div className="md:col-span-8">
                <div className="bg-surface rounded-2xl p-6 md:p-10 border border-[var(--border)]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-muted">
                      Formulir cepat
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                    Ceritakan sedikit tentang Anda.
                  </h2>
                  <p className="mt-3 text-sm text-muted leading-relaxed max-w-md">
                    Setelah submit, data akan terkirim ke WhatsApp tim marketing
                    kami. Balas dalam ~2 jam kerja.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* Nama */}
                    <Field label="Nama lengkap" required>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Contoh: Budi Santoso"
                        className="input"
                      />
                    </Field>

                    {/* Phone */}
                    <Field label="Nomor HP (WhatsApp aktif)" required>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="Contoh: 0812-3456-7890"
                        className="input"
                      />
                    </Field>

                    {/* Alamat */}
                    <Field label="Alamat domisili saat ini" required>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        required
                        placeholder="Kota/Kabupaten tempat Anda tinggal sekarang"
                        className="input"
                      />
                    </Field>

                    {/* Tipe unit */}
                    <Field label="Tipe rumah yang diminati" required>
                      <select
                        name="unit"
                        value={form.unit}
                        onChange={handleChange}
                        required
                        className="input"
                      >
                        <option value="" disabled>
                          Pilih tipe rumah
                        </option>
                        {UNIT_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </Field>

                    {/* Budget */}
                    <Field label="Range budget" required>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        required
                        className="input"
                      >
                        <option value="" disabled>
                          Pilih range budget Anda
                        </option>
                        {BUDGET_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </Field>

                    {/* Payment plan */}
                    <Field label="Rencana pembayaran" required>
                      <div className="grid grid-cols-2 gap-3">
                        {(["cash", "kpr"] as const).map((v) => (
                          <label
                            key={v}
                            className={`relative cursor-pointer rounded-lg border p-4 transition-all ${
                              form.payment === v
                                ? "border-accent bg-accent/5"
                                : "border-[var(--border)] hover:border-[var(--border-strong)]"
                            }`}
                          >
                            <input
                              type="radio"
                              name="payment"
                              value={v}
                              checked={form.payment === v}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className="flex items-center gap-3">
                              <span
                                className={`h-4 w-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                                  form.payment === v
                                    ? "border-accent"
                                    : "border-[var(--border-strong)]"
                                }`}
                              >
                                {form.payment === v && (
                                  <span className="h-2 w-2 rounded-full bg-accent" />
                                )}
                              </span>
                              <div>
                                <div className="text-sm font-medium text-foreground">
                                  {v === "cash" ? "Cash / Tunai" : "KPR"}
                                </div>
                                <div className="text-[11px] text-muted">
                                  {v === "cash"
                                    ? "Bayar lunas"
                                    : "Cicilan bank"}
                                </div>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </Field>

                    {/* Installment — hanya muncul kalau KPR */}
                    {form.payment === "kpr" && (
                      <Field
                        label="Range kesanggupan cicilan per bulan"
                        required
                      >
                        <select
                          name="installment"
                          value={form.installment}
                          onChange={handleChange}
                          required
                          className="input"
                        >
                          <option value="" disabled>
                            Pilih range cicilan
                          </option>
                          {INSTALLMENT_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                      </Field>
                    )}

                    {/* Catatan */}
                    <Field label="Catatan tambahan (opsional)">
                      <textarea
                        name="note"
                        value={form.note}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Contoh: rencana visit weekend, pertanyaan spesifik, dll."
                        className="input resize-none"
                      />
                    </Field>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className="btn btn-primary shine w-full !justify-center !py-4 !text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent"
                    >
                      <WhatsappIcon className="h-5 w-5" />
                      Kirim via WhatsApp
                    </button>

                    <p className="text-[11px] text-muted text-center leading-relaxed">
                      Dengan mengirim form ini, data Anda akan masuk ke chat
                      WhatsApp tim marketing. Kami tidak menyimpan data di
                      server — privasi Anda terjaga.
                    </p>
                  </form>
                </div>
              </div>

              {/* SIDEBAR INFO */}
              <aside className="md:col-span-4 space-y-6">
                <div className="bg-surface rounded-2xl p-6 border border-[var(--border)]">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
                    Kontak langsung
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-muted mb-1">Telepon</div>
                      <a
                        href={`tel:${site.phone.replace(/\D/g, "")}`}
                        className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {site.phone}
                      </a>
                    </div>
                    <div>
                      <div className="text-xs text-muted mb-1">Email</div>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-sm font-medium text-foreground hover:text-accent transition-colors break-all"
                      >
                        {site.email}
                      </a>
                    </div>
                    <div>
                      <div className="text-xs text-muted mb-1">Alamat</div>
                      <p className="text-sm text-foreground leading-relaxed">
                        {site.address}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs text-muted mb-1">
                        Jam marketing
                      </div>
                      <p className="text-sm text-foreground">
                        Senin – Sabtu · 09.00 – 17.00 WIB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center">
                      <WhatsappIcon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        Lebih suka chat cepat?
                      </div>
                      <p className="mt-1 text-xs text-muted leading-relaxed">
                        Langsung WhatsApp tim marketing tanpa mengisi form.
                      </p>
                      <a
                        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                          "Halo, saya tertarik dengan Tamaruma Sawangan dan ingin info lebih lanjut."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                      >
                        Chat WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="pb-24 px-0 md:px-10">
          <div className="max-w-[1100px] mx-auto px-[10px] md:px-0">
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <div className="eyebrow">Lokasi</div>
                <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">
                  Temukan kami di peta.
                </h2>
              </div>
              <a
                href="https://www.google.com/maps/place/Tamaruma+Sawangan+Blok+D19"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
              >
                Buka di Google Maps →
              </a>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-surface">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1895177012434!2d106.72807967499169!3d-6.369515193620677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef007ca101f7%3A0x7447689c150293a8!2sTamaruma%20Sawangan%20Blok%20D19!5e0!3m2!1sid!2sid!4v1778635052207!5m2!1sid!2sid"
                title="Lokasi Tamaruma Sawangan di Google Maps"
                className="w-full aspect-[16/10] md:aspect-[16/9]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps/place/Tamaruma+Sawangan+Blok+D19"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden mt-4 inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              Buka di Google Maps →
            </a>
          </div>
        </section>
      </main>

      <FooterV2 />

      {/* Form styling */}
      <style jsx>{`
        :global(.input) {
          width: 100%;
          padding: 0.875rem 1rem;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--foreground);
          font-size: 0.9375rem;
          transition: border-color 150ms, box-shadow 150ms;
          outline: none;
        }
        :global(.input::placeholder) {
          color: var(--muted);
          opacity: 0.6;
        }
        :global(.input:hover) {
          border-color: var(--border-strong);
        }
        :global(.input:focus) {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(var(--accent-rgb, 138 94 58) / 0.1);
        }
        :global(select.input) {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3e%3cpath fill='none' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' d='M1 1l5 5 5-5'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-2">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
