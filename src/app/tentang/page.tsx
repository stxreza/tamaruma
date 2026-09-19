import Image from "next/image";
import Link from "next/link";
import { NavV2 } from "@/components/v2/NavV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { site, facilities, trustLogos, faqs } from "@/lib/site";
import { WhatsappIcon } from "@/components/Icon";
import { waHref } from "@/lib/site";

const milestones = [
  { year: "2023", label: "Pembangunan infrastruktur dan gate kawasan dimulai" },
  { year: "2024", label: "Topping off Blok D dan Blok E — struktur 177 unit berdiri" },
  { year: "2025", label: "NAMU Clubhouse, kolam renang, dan fasilitas cluster beroperasi" },
  { year: "2026", label: "Fase 1 ready stock — unit mulai diserahterimakan ke pembeli" },
];

const locationHighlights = [
  { label: "Tol Pamulang (DESARI)", distance: "4,5 km — 10 menit" },
  { label: "The Park Sawangan Mall", distance: "3 km — 7 menit" },
  { label: "RS Hermina Depok", distance: "5 km — 12 menit" },
  { label: "Stasiun KRL Depok Lama", distance: "8 km — 20 menit" },
  { label: "MRT Lebak Bulus", distance: "14 km — 25 menit via tol" },
  { label: "Universitas Pamulang", distance: "6 km — 15 menit" },
];

export default function TentangPage() {
  return (
    <>
      <NavV2 />
      <FloatingChat />
      <BackToTop />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="pt-32 pb-12 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="eyebrow">Tentang</div>
            <h1 className="font-display display-xl mt-4 text-foreground leading-[1.15]">
              Tamaruma Sawangan
            </h1>
            <p className="mt-6 text-lg text-muted max-w-[640px] leading-relaxed">
              Cluster perumahan tropical modern seluas 3 hektar di Sawangan, Depok.
              177 unit rumah ready stock dengan NAMU Clubhouse, kolam renang, playground,
              dan keamanan 24 jam. Dikembangkan oleh Ruma ID.
            </p>
          </div>
        </section>

        {/* OVERVIEW — answer-first format for AI citability */}
        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <article className="prose-section">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                    Apa itu Tamaruma Sawangan?
                  </h2>
                  <div className="space-y-4 text-[15px] text-muted leading-relaxed">
                    <p>
                      <strong className="text-foreground">Tamaruma Sawangan</strong> adalah
                      kawasan perumahan cluster tropical modern yang berlokasi di Jalan Terusan
                      Haji Nawi, Pondok Petir, Bojongsari, Kecamatan Sawangan, Kota Depok,
                      Jawa Barat 16518.
                    </p>
                    <p>
                      Dibangun di atas lahan seluas 3 hektar, cluster ini terdiri dari 177 unit
                      rumah yang seluruhnya sudah berdiri dan berstatus ready stock — bukan inden
                      atau pre-launching. Calon pembeli bisa langsung visit dan melihat kondisi
                      fisik unit sebelum memutuskan.
                    </p>
                    <p>
                      Konsep arsitektur tropical modern mengedepankan sirkulasi udara alami,
                      pencahayaan maksimal, dan material tahan iklim tropis. Setiap unit
                      dirancang dengan plafon tinggi dan orientasi yang memaksimalkan ventilasi
                      silang.
                    </p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778621765/Main_Gate_Tamaruma_Sawangan_v2yabu.webp"
                    alt="Main gate cluster Tamaruma Sawangan di Pondok Petir, Sawangan, Depok"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* STATS */}
        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "177", label: "Total Unit", suffix: "unit" },
                { value: "3", label: "Luas Kawasan", suffix: "hektar" },
                { value: "3", label: "Tipe Rumah", suffix: "tipe" },
                { value: "6", label: "Bank Partner", suffix: "bank" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-surface rounded-2xl p-6 border border-[var(--border)] text-center"
                >
                  <div className="font-display text-4xl md:text-5xl text-foreground">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted mt-1">{s.suffix}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted mt-3">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPER */}
        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="bg-surface rounded-2xl p-8 md:p-12 border border-[var(--border)]">
              <div className="eyebrow mb-4">Developer</div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Dikembangkan oleh Ruma ID
              </h2>
              <div className="space-y-4 text-[15px] text-muted leading-relaxed max-w-2xl">
                <p>
                  Ruma ID adalah tim pengembang dan pemasaran properti yang menangani
                  Tamaruma Sawangan. Fokus utama Ruma ID adalah menyediakan hunian yang
                  sudah berdiri (ready stock) dengan transparansi harga, legalitas bersih
                  (SHM per unit), dan proses KPR yang dibantu dari awal hingga akad.
                </p>
                <p>
                  Tim pemasaran Tamaruma Sawangan beroperasi setiap Senin sampai Sabtu
                  pukul 09.00–17.00 WIB dan bisa dihubungi via WhatsApp
                  di {site.phone} untuk jadwal visit, simulasi KPR, atau pertanyaan
                  lainnya.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--border)]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted mb-4">
                  Bank Partner KPR
                </div>
                <div className="flex flex-wrap gap-3">
                  {trustLogos.map((bank) => (
                    <span
                      key={bank}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-background border border-[var(--border)] text-sm font-medium text-foreground"
                    >
                      {bank}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="eyebrow mb-4">Timeline</div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
              Perjalanan Tamaruma Sawangan
            </h2>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className="flex gap-6 md:gap-8 relative"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="h-3 w-3 rounded-full bg-accent border-2 border-accent/30" />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-[var(--border)]" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="font-display text-xl text-foreground">{m.year}</div>
                    <div className="text-sm text-muted mt-1">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITIES */}
        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="eyebrow mb-4">Fasilitas Cluster</div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
              Fasilitas di dalam kawasan
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {facilities.map((f) => (
                <div
                  key={f.title}
                  className="bg-surface rounded-xl p-6 border border-[var(--border)]"
                >
                  <h3 className="font-display text-lg text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{f.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="eyebrow mb-4">Lokasi</div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Aksesibilitas dari Tamaruma Sawangan
            </h2>
            <p className="text-[15px] text-muted leading-relaxed mb-8 max-w-2xl">
              Tamaruma Sawangan terletak di persimpangan strategis antara Depok,
              Tangerang Selatan, dan Jakarta Selatan. Berikut jarak dan waktu tempuh
              ke fasilitas publik terdekat:
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {locationHighlights.map((l) => (
                <div
                  key={l.label}
                  className="flex items-center justify-between bg-surface rounded-xl px-6 py-4 border border-[var(--border)]"
                >
                  <span className="text-sm font-medium text-foreground">{l.label}</span>
                  <span className="text-xs text-muted">{l.distance}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 relative rounded-2xl overflow-hidden border border-[var(--border)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1895177012434!2d106.72807967499169!3d-6.369515193620677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef007ca101f7%3A0x7447689c150293a8!2sTamaruma%20Sawangan%20Blok%20D19!5e0!3m2!1sid!2sid!4v1778635052207!5m2!1sid!2sid"
                title="Lokasi Tamaruma Sawangan di Google Maps"
                className="w-full aspect-[16/9]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="bg-surface-dark rounded-2xl p-8 md:p-12 text-center">
              <div className="eyebrow eyebrow-on-dark mb-4">
                Tertarik?
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-on-dark leading-tight max-w-2xl mx-auto">
                Jadwalkan visit ke{" "}
                <span className="italic text-bronze">
                  Tamaruma Sawangan
                </span>{" "}
                hari ini.
              </h2>
              <p className="mt-5 text-on-dark-muted max-w-lg mx-auto text-sm leading-relaxed">
                Tim marketing kami balas WhatsApp dalam ~2 jam kerja.
                Visit langsung tanpa appointment juga diterima di jam kerja.
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
