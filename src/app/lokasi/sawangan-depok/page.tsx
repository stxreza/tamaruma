import { NavV2 } from "@/components/v2/NavV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { site } from "@/lib/site";

const distances = {
  transportasi: [
    { name: "Gerbang Tol Pamulang (DESARI)", dist: "4,5 km", time: "10 mnt" },
    { name: "Stasiun KRL Depok Lama", dist: "8 km", time: "20 mnt" },
    { name: "Stasiun MRT Lebak Bulus", dist: "14 km", time: "25 mnt (via tol)" },
  ],
  belanja: [
    { name: "The Park Sawangan Mall", dist: "3 km", time: "7 mnt" },
    { name: "Lulu Hypermarket", dist: "3,5 km", time: "8 mnt" },
    { name: "Superindo Pamulang", dist: "4 km", time: "10 mnt" },
  ],
  pendidikan: [
    { name: "Universitas Pamulang (UNPAM)", dist: "6 km", time: "15 mnt" },
    { name: "Kharisma Bangsa School", dist: "5 km", time: "12 mnt" },
    { name: "Mutiara Harapan Islamic School", dist: "7 km", time: "15 mnt" },
  ],
  kesehatan: [
    { name: "RS Hermina Depok", dist: "5 km", time: "12 mnt" },
    { name: "RS Brawijaya Bojongsari", dist: "2 km", time: "5 mnt" },
    { name: "RSUD Tangerang Selatan", dist: "4 km", time: "10 mnt" },
  ],
};

export default function LokasiPage() {
  return (
    <>
      <NavV2 />
      <FloatingChat />
      <BackToTop />

      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-12 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="eyebrow">Panduan Kawasan</div>
            <h1 className="font-display display-xl mt-4 text-foreground leading-[1.15]">
              Sawangan, Kota Depok
            </h1>
            <p className="mt-6 text-lg text-muted max-w-[640px] leading-relaxed">
              Panduan lengkap fasilitas kawasan di sekitar Tamaruma Sawangan.
              Ketahui jarak tempuh menuju akses tol, mall, sekolah, dan rumah sakit
              terdekat.
            </p>
          </div>
        </section>

        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] mb-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1895177012434!2d106.72807967499169!3d-6.369515193620677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef007ca101f7%3A0x7447689c150293a8!2sTamaruma%20Sawangan%20Blok%20D19!5e0!3m2!1sid!2sid!4v1778635052207!5m2!1sid!2sid"
                title="Peta Lokasi Tamaruma Sawangan"
                className="w-full aspect-[2/1] md:aspect-[3/1]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <article className="prose-section space-y-4 text-[15px] text-muted leading-relaxed mb-16">
              <p>
                <strong>Tamaruma Sawangan</strong> adalah perumahan cluster yang secara administratif 
                terletak di Pondok Petir, Bojongsari, Depok. Namun secara geografis, kawasan ini 
                berada persis di perbatasan segitiga emas selatan Jakarta: Depok, Tangerang Selatan (Pamulang), 
                dan Jakarta Selatan (Lebak Bulus).
              </p>
              <p>
                Posisi perbatasan ini menjadikan Sawangan sebagai kawasan sunrise property (properti 
                yang sedang berkembang pesat). Penghuni mendapatkan harga rumah Depok yang lebih 
                terjangkau, namun bisa menikmati fasilitas dan aksesibilitas layaknya tinggal 
                di Tangerang Selatan atau Jakarta Selatan.
              </p>
            </article>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {/* Transportasi */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-surface border border-[var(--border)] text-sm">🚗</span>
                  Akses Transportasi
                </h2>
                <div className="space-y-3">
                  {distances.transportasi.map(d => (
                    <div key={d.name} className="flex justify-between items-center p-4 rounded-xl bg-surface border border-[var(--border)]">
                      <span className="text-sm font-medium text-foreground">{d.name}</span>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-accent">{d.time}</div>
                        <div className="text-[10px] text-muted">{d.dist}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Belanja */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-surface border border-[var(--border)] text-sm">🛍️</span>
                  Pusat Perbelanjaan
                </h2>
                <div className="space-y-3">
                  {distances.belanja.map(d => (
                    <div key={d.name} className="flex justify-between items-center p-4 rounded-xl bg-surface border border-[var(--border)]">
                      <span className="text-sm font-medium text-foreground">{d.name}</span>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-accent">{d.time}</div>
                        <div className="text-[10px] text-muted">{d.dist}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pendidikan */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-surface border border-[var(--border)] text-sm">🎓</span>
                  Pendidikan
                </h2>
                <div className="space-y-3">
                  {distances.pendidikan.map(d => (
                    <div key={d.name} className="flex justify-between items-center p-4 rounded-xl bg-surface border border-[var(--border)]">
                      <span className="text-sm font-medium text-foreground">{d.name}</span>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-accent">{d.time}</div>
                        <div className="text-[10px] text-muted">{d.dist}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kesehatan */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-surface border border-[var(--border)] text-sm">🏥</span>
                  Fasilitas Kesehatan
                </h2>
                <div className="space-y-3">
                  {distances.kesehatan.map(d => (
                    <div key={d.name} className="flex justify-between items-center p-4 rounded-xl bg-surface border border-[var(--border)]">
                      <span className="text-sm font-medium text-foreground">{d.name}</span>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-accent">{d.time}</div>
                        <div className="text-[10px] text-muted">{d.dist}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-surface-dark rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl text-on-dark mb-4">
                Buktikan Sendiri Aksesnya
              </h2>
              <p className="text-on-dark-muted mb-8 text-sm max-w-md mx-auto">
                Silakan gunakan Google Maps dari lokasi Anda saat ini menuju "Tamaruma Sawangan" 
                untuk melihat estimasi waktu tempuh secara real-time.
              </p>
              <a 
                href="https://maps.app.goo.gl/9P8yAHR9w3p6g2pPA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary shine"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterV2 />
    </>
  );
}
