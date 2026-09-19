import Image from "next/image";
import Link from "next/link";
import { NavV2 } from "@/components/v2/NavV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { WhatsappIcon } from "@/components/Icon";
import { waHref } from "@/lib/site";
import { formatIDR } from "@/lib/format";

const specs = [
  { label: "Luas Bangunan", value: "58 m²" },
  { label: "Luas Tanah", value: "84 m² (6x14)" },
  { label: "Kamar Tidur", value: "2" },
  { label: "Kamar Mandi", value: "2" },
  { label: "Carport", value: "1 Mobil" },
  { label: "Status", value: "Ready Stock (Siap Huni)" },
];

export default function Tipe58Page() {
  return (
    <>
      <NavV2 />
      <FloatingChat />
      <BackToTop />

      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-12 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="eyebrow">Tipe Rumah</div>
            <h1 className="font-display display-xl mt-4 text-foreground leading-[1.15]">
              Tipe 58 Tamaruma Sawangan
            </h1>
            <p className="mt-6 text-lg text-muted max-w-[640px] leading-relaxed">
              Rumah ready stock Sawangan desain tropical modern dengan 2 kamar tidur. 
              Cocok untuk pasangan muda atau keluarga kecil yang mencari hunian siap huni 
              tanpa perlu inden.
            </p>
          </div>
        </section>

        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-surface aspect-[4/3]">
                  <Image
                    src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551141/Tamaruma_Tipe_58.webp"
                    alt="Fasad rumah Tipe 58 Tamaruma Sawangan"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-surface aspect-[4/3]">
                    <Image
                      src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778534747/Deatail_Ruang_Tamu.webp"
                      alt="Ruang keluarga Tipe 58 Tamaruma Sawangan"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-surface aspect-[4/3]">
                    <Image
                      src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778534747/Kamar_Tidur_Utama.webp"
                      alt="Kamar tidur Tipe 58 Tamaruma Sawangan"
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
                    {formatIDR(1075000000)}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--border)] flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="text-muted block text-xs">DP Flat</span>
                      <span className="font-medium text-foreground">{formatIDR(50000000)}</span>
                    </div>
                    <div>
                      <span className="text-muted block text-xs">KPR 25 Th (Est)</span>
                      <span className="font-medium text-accent">{formatIDR(5390534)}/bln</span>
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
                    Minta Simulasi KPR Tipe 58
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              Detail Tipe 58
            </h2>
            <div className="prose-section space-y-4 text-[15px] text-muted leading-relaxed">
              <p>
                <strong>Tipe 58 Tamaruma Sawangan</strong> dirancang khusus untuk memenuhi kebutuhan
                pasangan muda atau keluarga kecil. Dengan tata letak (layout) yang fungsional, 
                setiap sentimeter ruang dimanfaatkan secara maksimal tanpa mengorbankan estetika
                dan sirkulasi udara.
              </p>
              <p>
                Berbeda dengan perumahan lain yang masih tahap inden, seluruh unit Tipe 58 di cluster ini
                berstatus <strong>rumah ready stock Sawangan</strong>. Artinya, bangunan fisik sudah berdiri 100%,
                infrastruktur jalan sudah rapi, dan fasilitas cluster seperti NAMU Clubhouse sudah 
                beroperasi penuh. Anda bisa langsung pindah setelah proses akad KPR selesai.
              </p>
              <p>
                Fasad Tipe 58 mengusung arsitektur tropical modern. Penggunaan material alami,
                jendela kaca berukuran besar, dan atap dengan insulasi panas memastikan suhu di dalam
                rumah tetap sejuk meskipun cuaca terik. Selain itu, terdapat backyard yang cukup luas 
                untuk area cuci-jemur atau taman kecil privat.
              </p>
              <p>
                Setiap pembelian Tipe 58 bulan ini sudah termasuk benefit <strong>Free BPHTB, Free Biaya Notaris, 
                dan Free Biaya Akad KPR</strong>. Dengan DP flat Rp 50 juta all-in, Anda hanya perlu 
                menyiapkan dana angsuran pertama saat akad.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FooterV2 />
    </>
  );
}
