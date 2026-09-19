import { NavV2 } from "@/components/v2/NavV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { WhatsappIcon } from "@/components/Icon";
import { waHref } from "@/lib/site";
import Link from "next/link";

const banks = [
  "Bank Syariah Indonesia (BSI)",
  "Bank Mandiri",
  "Bank BTN & BTN Syariah",
  "Bank BNI",
  "Bank BRI",
];

const requirements = {
  karyawan: [
    "Fotokopi KTP Suami & Istri",
    "Fotokopi Kartu Keluarga & Surat Nikah",
    "Fotokopi NPWP Pemohon",
    "Slip Gaji 3 Bulan Terakhir",
    "Rekening Koran 3 Bulan Terakhir",
    "Surat Keterangan Kerja (Minimal Pegawai Tetap 1 Tahun)",
  ],
  wirausaha: [
    "Fotokopi KTP Suami & Istri",
    "Fotokopi Kartu Keluarga & Surat Nikah",
    "Fotokopi NPWP Pribadi & Perusahaan",
    "SIUP, TDP, NIB, & Akta Pendirian Perusahaan",
    "Rekening Koran Perusahaan 6 Bulan Terakhir",
    "Laporan Keuangan 1 Tahun Terakhir",
  ],
};

export default function PanduanKprPage() {
  return (
    <>
      <NavV2 />
      <FloatingChat />
      <BackToTop />

      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-12 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="eyebrow">Pembiayaan Rumah</div>
            <h1 className="font-display display-xl mt-4 text-foreground leading-[1.15]">
              Panduan KPR &amp; Simulasi
            </h1>
            <p className="mt-6 text-lg text-muted max-w-[640px] leading-relaxed">
              Memiliki rumah ready stock di Tamaruma Sawangan kini lebih mudah
              dengan program DP flat Rp 50 juta All-In. Kami bekerja sama dengan
              bank-bank BUMN ternama untuk memastikan proses persetujuan (approval) 
              KPR Anda berjalan lancar.
            </p>
          </div>
        </section>

        <section className="pb-24 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            
            {/* Promo Banner */}
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 mb-12">
              <h2 className="font-display text-2xl text-foreground mb-4">
                Promo KPR Tamaruma Sawangan (Berlaku September 2026)
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center h-6 w-6 shrink-0 rounded-full bg-accent text-white text-xs mt-0.5">✓</span>
                  <div>
                    <strong>DP Flat Rp 50 Juta.</strong>
                    <p className="text-sm text-muted mt-1">Berlaku untuk semua tipe (Tipe 58, 85, dan Hook). Tidak ada penambahan DP tersembunyi selama plafon disetujui bank.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center h-6 w-6 shrink-0 rounded-full bg-accent text-white text-xs mt-0.5">✓</span>
                  <div>
                    <strong>Free Biaya Akad KPR.</strong>
                    <p className="text-sm text-muted mt-1">Biaya provisi, administrasi bank, asuransi jiwa, asuransi kebakaran, dan notaris APHT sepenuhnya ditanggung developer (S&K Berlaku).</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center h-6 w-6 shrink-0 rounded-full bg-accent text-white text-xs mt-0.5">✓</span>
                  <div>
                    <strong>Free BPHTB &amp; AJB.</strong>
                    <p className="text-sm text-muted mt-1">Pajak pembeli dan biaya Akta Jual Beli sudah termasuk dalam harga jual yang tertera di pricelist.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Bank Partners */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Bank Rekanan Kami
                </h2>
                <div className="prose-section text-[15px] text-muted leading-relaxed mb-6">
                  <p>
                    Developer Tamaruma Sawangan (Ruma ID) telah menjalin Perjanjian Kerja Sama (PKS)
                    resmi dengan berbagai bank terkemuka di Indonesia. Keuntungan KPR melalui bank rekanan:
                    suku bunga promo eksklusif, proses appraisal lebih cepat, dan kuota <em>instant approval</em>.
                  </p>
                </div>
                <div className="space-y-3">
                  {banks.map(bank => (
                    <div key={bank} className="px-4 py-3 bg-surface border border-[var(--border)] rounded-lg text-sm font-medium text-foreground">
                      🏢 {bank}
                    </div>
                  ))}
                </div>
              </div>

              {/* Persyaratan KPR */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Persyaratan KPR
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-medium text-foreground text-lg mb-3">Untuk Karyawan (Pegawai Tetap)</h3>
                    <ul className="space-y-2">
                      {requirements.karyawan.map(req => (
                        <li key={req} className="flex gap-2 text-sm text-muted">
                          <span className="text-accent">•</span> {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-foreground text-lg mb-3">Untuk Wiraswasta / Pengusaha</h3>
                    <ul className="space-y-2">
                      {requirements.wirausaha.map(req => (
                        <li key={req} className="flex gap-2 text-sm text-muted">
                          <span className="text-accent">•</span> {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-surface-dark rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl text-on-dark mb-4">
                Tidak Yakin KPR Anda Akan Disetujui?
              </h2>
              <p className="text-on-dark-muted mb-8 text-sm max-w-lg mx-auto leading-relaxed">
                Tim in-house KPR kami siap membantu melakukan BI Checking (SLIK OJK) 
                dan <strong>pre-approval gratis</strong> sebelum Anda membayar booking fee. 
                Hubungi kami sekarang untuk konsultasi profil finansial Anda secara rahasia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href={waHref} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary shine"
                >
                  <WhatsappIcon className="h-5 w-5" />
                  Konsultasi KPR Gratis
                </a>
                <Link 
                  href="/harga"
                  className="btn btn-ghost-on-dark"
                >
                  Lihat Simulasi Cicilan / Harga
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
