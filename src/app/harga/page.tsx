"use client";

import Image from "next/image";
import Link from "next/link";
import { NavV2 } from "@/components/v2/NavV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { useInView } from "@/hooks/useInView";
import { WhatsappIcon } from "@/components/Icon";
import { formatIDR } from "@/lib/format";
import { waHref } from "@/lib/site";

type Unit = {
  unitId: string;
  landSize: number;
  buildingSize: number;
  price: number;
  dp: number;
  kpr15: number;
  kpr20: number;
  kpr25: number;
  readyStock: boolean;
};

type Block = {
  name: string;
  type: string;
  units: Unit[];
};

const blocks: Block[] = [
  {
    name: "Blok A",
    type: "Tipe 58",
    units: [
      {
        unitId: "A23",
        landSize: 148,
        buildingSize: 58,
        price: 1075000000,
        dp: 50000000,
        kpr15: 7554063,
        kpr20: 6188574,
        kpr25: 5390534,
        readyStock: true,
      },
    ],
  },
  {
    name: "Blok D",
    type: "Tipe 85",
    units: [
      { unitId: "D5", landSize: 85, buildingSize: 85, price: 1278000000, dp: 50000000, kpr15: 8980551, kpr20: 7357207, kpr25: 6408467, readyStock: true },
      { unitId: "D15", landSize: 83, buildingSize: 85, price: 1267000000, dp: 50000000, kpr15: 8903254, kpr20: 7293882, kpr25: 6353308, readyStock: true },
      { unitId: "D16", landSize: 105, buildingSize: 85, price: 1290000000, dp: 50000000, kpr15: 9064876, kpr20: 7426289, kpr25: 6468640, readyStock: true },
      { unitId: "D17", landSize: 83, buildingSize: 85, price: 1267000000, dp: 50000000, kpr15: 8903254, kpr20: 7293882, kpr25: 6353308, readyStock: true },
      { unitId: "D31", landSize: 84, buildingSize: 85, price: 1272000000, dp: 50000000, kpr15: 8938389, kpr20: 7322666, kpr25: 6378380, readyStock: true },
      { unitId: "D32", landSize: 84, buildingSize: 85, price: 1272000000, dp: 50000000, kpr15: 8938389, kpr20: 7322666, kpr25: 6378380, readyStock: true },
    ],
  },
  {
    name: "Blok E",
    type: "Tipe 85",
    units: [
      { unitId: "E3", landSize: 84, buildingSize: 85, price: 1226000000, dp: 50000000, kpr15: 8615145, kpr20: 7057853, kpr25: 6147716, readyStock: true },
      { unitId: "E9", landSize: 84, buildingSize: 85, price: 1226000000, dp: 50000000, kpr15: 8615145, kpr20: 7057853, kpr25: 6147716, readyStock: true },
      { unitId: "E11", landSize: 84, buildingSize: 85, price: 1226000000, dp: 50000000, kpr15: 8615145, kpr20: 7057853, kpr25: 6147716, readyStock: true },
      { unitId: "E12", landSize: 84, buildingSize: 85, price: 1226000000, dp: 50000000, kpr15: 8615145, kpr20: 7057853, kpr25: 6147716, readyStock: true },
      { unitId: "E19", landSize: 84, buildingSize: 85, price: 1226000000, dp: 50000000, kpr15: 8615145, kpr20: 7057853, kpr25: 6147716, readyStock: true },
      { unitId: "E20", landSize: 84, buildingSize: 85, price: 1226000000, dp: 50000000, kpr15: 8615145, kpr20: 7057853, kpr25: 6147716, readyStock: true },
    ],
  },
];

const benefits = [
  { icon: "✓", label: "Free BPHTB" },
  { icon: "✓", label: "Free Biaya Notaris" },
  { icon: "✓", label: "Free Biaya Akad KPR" },
  { icon: "✓", label: "DP Flat Rp 50 juta" },
];

// Hitung summary
const allUnits = blocks.flatMap((b) => b.units);
const cheapestPrice = Math.min(...allUnits.map((u) => u.price));
const cheapestKpr25 = Math.min(...allUnits.map((u) => u.kpr25));
const totalUnits = allUnits.length;

export default function HargaPage() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <>
      <NavV2 />
      <FloatingChat />
      <BackToTop />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="pt-32 pb-10 px-0 md:px-10">
          <div className="max-w-[1200px] mx-auto px-[10px] md:px-0">
            <div
              ref={ref}
              className="transition-all duration-1000 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="flex items-center gap-2">
                <div className="eyebrow">Pricelist</div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted">
                  · Update Februari 2026
                </span>
              </div>
              <h1 className="font-display display-xl mt-4 text-foreground leading-[1.15]">
                Harga &amp; simulasi KPR.
              </h1>
              <p className="mt-6 text-lg text-muted max-w-[640px] leading-relaxed">
                Daftar harga lengkap rumah ready stock Sawangan di komplek
                Tamaruma Sawangan. Semua unit siap huni, DP flat Rp 50 juta,
                dan sudah termasuk free biaya BPHTB, notaris, serta akad KPR.
              </p>

              {/* Summary stats */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-[var(--border)]">
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase text-muted mb-2">
                    Mulai dari
                  </div>
                  <div className="font-display text-3xl md:text-4xl text-foreground v-tabular">
                    {formatIDR(cheapestPrice)}
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase text-muted mb-2">
                    Cicilan mulai
                  </div>
                  <div className="font-display text-3xl md:text-4xl text-foreground v-tabular">
                    {formatIDR(cheapestKpr25)}
                    <span className="text-sm text-muted ml-1">/bln</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase text-muted mb-2">
                    Unit ready stock
                  </div>
                  <div className="font-display text-3xl md:text-4xl text-foreground v-tabular">
                    {totalUnits}
                    <span className="text-sm text-muted ml-1">unit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICELIST IMAGE PREVIEW */}
        <section className="pb-12 px-0 md:px-10">
          <div className="max-w-[1200px] mx-auto px-[10px] md:px-0">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-surface">
              <Image
                src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778635716/Pricelist_Tamaruma-1_pmyhys.webp"
                alt="Pricelist resmi Tamaruma Sawangan — daftar harga rumah ready stock Sawangan Blok A, D, dan E"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* BENEFITS BAR */}
        <section className="pb-12 px-0 md:px-10">
          <div className="max-w-[1200px] mx-auto px-[10px] md:px-0">
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                    Benefit semua unit
                  </div>
                  <div className="font-display text-xl md:text-2xl text-foreground">
                    Hemat hingga ratusan juta di biaya tambahan.
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:shrink-0">
                  {benefits.map((b) => (
                    <div
                      key={b.label}
                      className="flex items-center gap-2 bg-background rounded-lg px-3 py-2.5 border border-[var(--border)]"
                    >
                      <span className="shrink-0 h-5 w-5 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                        {b.icon}
                      </span>
                      <span className="text-xs md:text-sm font-medium text-foreground">
                        {b.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICE TABLES PER BLOCK */}
        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1200px] mx-auto px-[10px] md:px-0 space-y-10">
            {blocks.map((block, bi) => (
              <div
                key={block.name}
                className="bg-surface rounded-2xl border border-[var(--border)] overflow-hidden"
              >
                {/* Block header */}
                <div className="px-6 md:px-8 py-5 border-b border-[var(--border)] bg-surface-2 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-1">
                      0{bi + 1} · {block.units.length} unit tersedia
                    </div>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h2 className="font-display text-2xl md:text-3xl text-foreground">
                        {block.name}
                      </h2>
                      <span className="text-sm text-muted">— {block.type}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Ready Stock
                  </span>
                </div>

                {/* Desktop table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-[10px] uppercase tracking-[0.15em] text-muted border-b border-[var(--border)]">
                        <th className="text-left px-8 py-3 font-medium">Unit</th>
                        <th className="text-left px-4 py-3 font-medium">LT</th>
                        <th className="text-left px-4 py-3 font-medium">LB</th>
                        <th className="text-right px-4 py-3 font-medium">Harga</th>
                        <th className="text-right px-4 py-3 font-medium">DP</th>
                        <th className="text-right px-4 py-3 font-medium">KPR 15 th</th>
                        <th className="text-right px-4 py-3 font-medium">KPR 20 th</th>
                        <th className="text-right px-8 py-3 font-medium">KPR 25 th</th>
                      </tr>
                    </thead>
                    <tbody>
                      {block.units.map((u, i) => (
                        <tr
                          key={u.unitId}
                          className={`group transition-colors hover:bg-surface-2/50 ${
                            i < block.units.length - 1
                              ? "border-b border-[var(--border)]"
                              : ""
                          }`}
                        >
                          <td className="px-8 py-4">
                            <div className="inline-flex items-center gap-2">
                              <span className="font-display text-lg text-foreground v-tabular">
                                {u.unitId}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-muted">
                            {u.landSize} m²
                          </td>
                          <td className="px-4 py-4 text-muted">
                            {u.buildingSize} m²
                          </td>
                          <td className="px-4 py-4 text-right font-semibold text-foreground v-tabular">
                            {formatIDR(u.price)}
                          </td>
                          <td className="px-4 py-4 text-right text-muted v-tabular">
                            {formatIDR(u.dp)}
                          </td>
                          <td className="px-4 py-4 text-right text-muted v-tabular">
                            {formatIDR(u.kpr15)}
                          </td>
                          <td className="px-4 py-4 text-right text-muted v-tabular">
                            {formatIDR(u.kpr20)}
                          </td>
                          <td className="px-8 py-4 text-right font-medium text-accent v-tabular">
                            {formatIDR(u.kpr25)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="md:hidden divide-y divide-[var(--border)]">
                  {block.units.map((u) => (
                    <div key={u.unitId} className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-display text-2xl text-foreground v-tabular">
                            {u.unitId}
                          </div>
                          <div className="text-xs text-muted mt-0.5">
                            LT {u.landSize} m² · LB {u.buildingSize} m²
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase tracking-[0.15em] text-muted">
                            Harga
                          </div>
                          <div className="font-semibold text-foreground v-tabular">
                            {formatIDR(u.price)}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[var(--border)]">
                        {[
                          { k: "KPR 15 th", v: u.kpr15 },
                          { k: "KPR 20 th", v: u.kpr20 },
                          { k: "KPR 25 th", v: u.kpr25 },
                        ].map((row, i) => (
                          <div key={row.k} className="text-center">
                            <div className="text-[9px] uppercase tracking-[0.1em] text-muted mb-0.5">
                              {row.k}
                            </div>
                            <div
                              className={`text-xs font-medium v-tabular ${
                                i === 2 ? "text-accent" : "text-foreground"
                              }`}
                            >
                              {formatIDR(row.v)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NOTES */}
        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1200px] mx-auto px-[10px] md:px-0">
            <div className="border-t border-[var(--border)] pt-8 grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
                  Catatan penting
                </div>
                <ul className="space-y-2 text-sm text-muted leading-relaxed">
                  <li className="flex gap-2">
                    <span className="shrink-0 text-accent mt-0.5">→</span>
                    <span>Simulasi KPR menggunakan bunga 5,88% per tahun.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-accent mt-0.5">→</span>
                    <span>Kav D1 &amp; D2 sudah include interior (harga terpisah, hubungi tim untuk info detail).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-accent mt-0.5">→</span>
                    <span>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-accent mt-0.5">→</span>
                    <span>Cicilan final tergantung program bank &amp; profil pemohon KPR.</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
                  Disclaimer
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Semua angka di halaman ini bersifat indikatif untuk kebutuhan
                  simulasi. Harga final, skema pembayaran, dan perjanjian
                  mengikat hanya berlaku pada dokumen resmi yang diterbitkan
                  oleh developer. Baca{" "}
                  <Link
                    href="/disclaimer"
                    className="text-accent hover:underline"
                  >
                    disclaimer lengkap
                  </Link>{" "}
                  untuk detail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 px-0 md:px-10">
          <div className="max-w-[1200px] mx-auto px-[10px] md:px-0">
            <div className="bg-surface-dark rounded-2xl p-8 md:p-12 text-center">
              <div className="eyebrow eyebrow-on-dark mb-4">
                Tertarik unit tertentu?
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-on-dark leading-tight max-w-3xl mx-auto">
                Hubungi tim kami untuk{" "}
                <span className="italic text-bronze">
                  simulasi KPR personal
                </span>{" "}
                &amp; jadwal visit.
              </h2>
              <p className="mt-5 text-on-dark-muted max-w-xl mx-auto">
                Kami balas WhatsApp dalam ~2 jam kerja. Visit langsung tanpa
                appointment juga diterima di jam marketing.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary shine !py-4 !px-7"
                >
                  <WhatsappIcon className="h-5 w-5" />
                  Chat WhatsApp
                </a>
                <Link
                  href="/kontak"
                  className="btn btn-ghost-on-dark !py-4 !px-7"
                >
                  Isi formulir kontak
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterV2 />
    </>
  );
}
