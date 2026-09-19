import Image from "next/image";
import { NavV2 } from "@/components/v2/NavV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { WhatsappIcon } from "@/components/Icon";
import { waHref } from "@/lib/site";
import { formatIDR } from "@/lib/format";

const specs = [
  { label: "Luas Bangunan", value: "119 - 146 m²" },
  { label: "Luas Tanah", value: "135 - 258 m²" },
  { label: "Kamar Tidur", value: "4" },
  { label: "Kamar Mandi", value: "3" },
  { label: "Carport", value: "2 Mobil" },
  { label: "Posisi", value: "Sudut / Hook" },
];

export default function TipeHookPage() {
  return (
    <>
      <NavV2 />
      <FloatingChat />
      <BackToTop />

      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-12 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="eyebrow">Tipe Premium</div>
            <h1 className="font-display display-xl mt-4 text-foreground leading-[1.15]">
              Tipe Hook Tamaruma Sawangan
            </h1>
            <p className="mt-6 text-lg text-muted max-w-[640px] leading-relaxed">
              Unit premium dengan lahan paling luas, sirkulasi paling bebas, dan
              privasi tertinggi. Tersedia eksklusif di posisi sudut (hook)
              cluster Tamaruma.
            </p>
          </div>
        </section>

        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-surface aspect-[4/3]">
                  <Image
                    src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551805/Tamaruma_Tipe_144.webp"
                    alt="Fasad rumah Tipe Hook Tamaruma Sawangan"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-surface aspect-[4/3]">
                    <Image
                      src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778629235/Taman_Belakang_Rumah_xrqrcb.webp"
                      alt="Taman samping Tipe Hook"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-surface aspect-[4/3]">
                    <Image
                      src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778534747/Deatail_Ruang_Tamu.webp"
                      alt="Ruang keluarga luas Tipe Hook"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Spesifikasi & Harga
                </h2>
                <div className="bg-surface border border-[var(--border)] rounded-2xl p-6 md:p-8 mb-8">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted mb-2">
                    Mulai dari
                  </div>
                  <div className="font-display text-3xl md:text-4xl text-foreground v-tabular">
                    {formatIDR(2800000000)}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--border)] flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="text-muted block text-xs">DP Flat</span>
                      <span className="font-medium text-foreground">{formatIDR(50000000)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {specs.map((s) => (
                    <div key={s.label} className="flex justify-between items-center py-3 border-b border-[var(--border)] last:border-0">
                      <span className="text-sm text-muted">{s.label}</span>
                      <span className="text-sm font-medium text-foreground">{s.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary shine w-full justify-center !py-4"
                  >
                    <WhatsappIcon className="h-5 w-5" />
                    Cek Ketersediaan Unit Hook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              Detail Tipe Hook (Sudut)
            </h2>
            <div className="prose-section space-y-4 text-[15px] text-muted leading-relaxed">
              <p>
                <strong>Tipe Hook Tamaruma Sawangan</strong> adalah representasi dari kemewahan dan privasi. 
                Unit-unit ini terletak di posisi sudut jalan cluster, memberikan sirkulasi udara 
                dan pencahayaan alami ekstra dari dua sisi (depan dan samping).
              </p>
              <p>
                Dengan tanah ekstra luas (135 hingga 258 m²), pemilik rumah hook mendapatkan
                halaman samping dan belakang yang bisa dikustomisasi secara mandiri. Lahan ini
                ideal untuk dibangun taman tropis yang rimbun, kolam renang pribadi ukuran full, 
                atau ruang komunal ekstensif bagi keluarga besar.
              </p>
              <p>
                Sebagai unit premium yang sangat terbatas, properti hook merupakan bentuk
                investasi hunian yang memiliki apresiasi nilai (capital gain) tercepat
                dibandingkan unit standar. Ditambah statusnya yang sudah <strong>ready stock</strong>,
                pembeli premium bisa segera memindahkan keluarga mereka tanpa harus
                menunggu masa konstruksi bertahun-tahun.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FooterV2 />
    </>
  );
}
