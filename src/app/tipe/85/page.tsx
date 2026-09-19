import Image from "next/image";
import { NavV2 } from "@/components/v2/NavV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { WhatsappIcon } from "@/components/Icon";
import { waHref } from "@/lib/site";
import { formatIDR } from "@/lib/format";

const specs = [
  { label: "Luas Bangunan", value: "85 m² (2 Lantai)" },
  { label: "Luas Tanah", value: "84 m² (6x14)" },
  { label: "Kamar Tidur", value: "3" },
  { label: "Kamar Mandi", value: "2" },
  { label: "Carport", value: "1 Mobil" },
  { label: "Opsi Furnished", value: "Tersedia" },
];

export default function Tipe85Page() {
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
              Tipe 85 Tamaruma Sawangan
            </h1>
            <p className="mt-6 text-lg text-muted max-w-[640px] leading-relaxed">
              Tipe terlaris di cluster Tamaruma. Menawarkan 3 kamar tidur dan backyard
              yang lapang dengan plafon tinggi. Tersedia dalam kondisi kosong atau
              opsi full furnished (siap huni 30 hari).
            </p>
          </div>
        </section>

        <section className="pb-16 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-surface aspect-[4/3]">
                  <Image
                    src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551141/Tamaruma_Tipe_85.webp"
                    alt="Fasad rumah Tipe 85 Tamaruma Sawangan"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-surface aspect-[4/3]">
                    <Image
                      src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778534747/Lingkungan.webp"
                      alt="Lingkungan Tipe 85 Tamaruma Sawangan"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-surface aspect-[4/3]">
                    <Image
                      src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778534747/Bakcyard_Rumah.webp"
                      alt="Taman belakang (backyard) Tipe 85"
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
                    {formatIDR(1226000000)}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--border)] flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="text-muted block text-xs">DP Flat</span>
                      <span className="font-medium text-foreground">{formatIDR(50000000)}</span>
                    </div>
                    <div>
                      <span className="text-muted block text-xs">KPR 25 Th (Est)</span>
                      <span className="font-medium text-accent">{formatIDR(6147716)}/bln</span>
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
                    Minta Price List Tipe 85
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              Detail Tipe 85
            </h2>
            <div className="prose-section space-y-4 text-[15px] text-muted leading-relaxed">
              <p>
                <strong>Tipe 85 Tamaruma Sawangan</strong> adalah tipe unit paling laris di perumahan ini.
                Dengan luas bangunan 85 m² yang terdistribusi ke dalam dua lantai, rumah ini menghadirkan 
                ruang yang ideal bagi keluarga yang membutuhkan privasi lebih (3 kamar tidur) dan 
                sirkulasi yang lega.
              </p>
              <p>
                Sama seperti tipe lainnya, Tipe 85 merupakan <strong>rumah ready stock Sawangan</strong>.
                Bagi pembeli yang mengambil opsi full furnished, tim interior kami hanya membutuhkan waktu
                sekitar 30 hari untuk mengisi unit dari kondisi kosong menjadi siap huni seutuhnya. 
                Pilihan ini sangat diminati oleh keluarga yang tidak ingin pusing mengurus vendor interior.
              </p>
              <p>
                Highlight utama dari Tipe 85 adalah area backyard (taman belakang) yang luas.
                Area ini seringkali dimodifikasi oleh pembeli menjadi ruang bersantai terbuka, area BBQ,
                atau bahkan small private pool (kolam renang kecil privat). Plafon yang tinggi pada area 
                living room juga menambah kesan mewah dan menjaga temperatur ruangan tetap sejuk.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FooterV2 />
    </>
  );
}
