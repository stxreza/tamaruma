import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kebijakan Privasi · Tamaruma Sawangan",
  description:
    "Kebijakan privasi Tamaruma Sawangan — bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
  alternates: { canonical: "/kebijakan-privasi" },
};

const sections = [
  {
    n: "01",
    title: "Informasi yang Kami Kumpulkan",
    body: [
      "Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, nomor telepon, dan alamat email saat Anda mengisi formulir kontak atau menghubungi tim marketing kami melalui WhatsApp.",
      "Kami juga mengumpulkan data teknis secara otomatis, termasuk alamat IP, jenis perangkat, browser, dan halaman yang Anda kunjungi — semata-mata untuk meningkatkan pengalaman pengguna di situs ini.",
    ],
  },
  {
    n: "02",
    title: "Cara Kami Menggunakan Informasi",
    body: [
      "Informasi Anda digunakan untuk merespons pertanyaan, menjadwalkan kunjungan show unit, mengirimkan informasi properti yang relevan, dan memproses pengajuan KPR.",
      "Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran tanpa persetujuan eksplisit Anda.",
    ],
  },
  {
    n: "03",
    title: "Berbagi Data dengan Pihak Ketiga",
    body: [
      "Data Anda hanya dibagikan kepada mitra bank KPR yang Anda pilih secara sukarela dalam proses pengajuan kredit, dan kepada penyedia layanan teknis yang membantu operasional situs ini (hosting, analitik).",
      "Semua mitra terikat perjanjian kerahasiaan dan hanya diizinkan menggunakan data sesuai instruksi kami.",
    ],
  },
  {
    n: "04",
    title: "Keamanan Data",
    body: [
      "Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang wajar untuk melindungi data Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran.",
      "Namun, tidak ada metode transmisi data melalui internet yang 100% aman. Kami tidak dapat menjamin keamanan absolut.",
    ],
  },
  {
    n: "05",
    title: "Cookie & Teknologi Pelacakan",
    body: [
      "Situs ini menggunakan cookie untuk mengingat preferensi Anda dan menganalisis lalu lintas situs. Anda dapat menonaktifkan cookie melalui pengaturan browser, namun beberapa fitur situs mungkin tidak berfungsi optimal.",
    ],
  },
  {
    n: "06",
    title: "Hak Anda",
    body: [
      "Anda berhak mengakses, memperbaiki, atau meminta penghapusan data pribadi Anda yang kami simpan. Untuk mengajukan permintaan, hubungi kami melalui email atau WhatsApp yang tercantum di halaman utama.",
      "Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.",
    ],
  },
  {
    n: "07",
    title: "Perubahan Kebijakan",
    body: [
      "Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu. Perubahan signifikan akan diberitahukan melalui situs ini. Tanggal pembaruan terakhir tercantum di bagian bawah halaman ini.",
    ],
  },
  {
    n: "08",
    title: "Hubungi Kami",
    body: [
      `Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di ${site.email} atau melalui WhatsApp tim marketing Tamaruma Sawangan.`,
    ],
  },
];

export default function KebijakanPrivasi() {
  return (
    <div className="bg-background min-h-screen">
      {/* Nav minimal */}
      <header className="fixed top-0 inset-x-0 z-40 bg-background/90 backdrop-blur-lg border-b border-[var(--border)]">
        <div className="px-[15px] md:px-10 h-20 flex items-center justify-between max-w-[1400px] mx-auto">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Kembali ke Tamaruma Sawangan"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <span className="font-display text-2xl tracking-tight text-foreground">
              Tamaruma
            </span>
            <span className="hidden sm:inline text-[11px] tracking-[0.3em] uppercase text-muted">
              Sawangan
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            ← Kembali
          </Link>
        </div>
      </header>

      {/* Hero section */}
      <section className="pt-40 pb-16 px-[15px] md:px-10 max-w-[1400px] mx-auto">
        <div className="eyebrow mb-4">Legal · Privasi</div>
        <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[-0.025em] leading-[1.1] text-foreground">
          Kebijakan
          <br />
          <span className="italic text-accent">Privasi.</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-2 max-w-xl leading-relaxed">
          Kami menghargai kepercayaan Anda. Halaman ini menjelaskan bagaimana{" "}
          <strong className="font-normal text-foreground">
            Tamaruma Sawangan
          </strong>{" "}
          mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
        </p>
        <div className="mt-6 text-xs text-muted">
          Terakhir diperbarui: Mei 2026
        </div>
      </section>

      {/* Divider */}
      <div className="px-[15px] md:px-10 max-w-[1400px] mx-auto">
        <div className="h-px bg-[var(--border-strong)]" />
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 px-[15px] md:px-10 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Sticky sidebar — desktop */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-28">
              <div className="eyebrow mb-4">Daftar isi</div>
              <nav className="flex flex-col gap-2">
                {sections.map((s) => (
                  <a
                    key={s.n}
                    href={`#section-${s.n}`}
                    className="text-sm text-muted hover:text-foreground transition-colors flex items-baseline gap-3 group"
                  >
                    <span className="v-tabular text-[11px] text-muted/60 group-hover:text-muted transition-colors">
                      {s.n}
                    </span>
                    <span>{s.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="md:col-span-9 flex flex-col gap-14 md:gap-16">
            {sections.map((s) => (
              <article
                key={s.n}
                id={`section-${s.n}`}
                className="group relative border-t border-[var(--border)] pt-8"
              >
                {/* Hover accent line */}
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-16"
                />
                <div className="flex items-baseline gap-5 mb-4">
                  <span className="v-tabular text-xs text-muted">{s.n}</span>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground leading-tight">
                    {s.title}
                  </h2>
                </div>
                <div className="flex flex-col gap-4 pl-0 md:pl-10">
                  {s.body.map((para, i) => (
                    <p
                      key={i}
                      className="text-base text-muted-2 leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="dark-canvas py-10 px-[15px] md:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-on-dark-muted">
          <div>
            © {new Date().getFullYear()} {site.developer}. Semua hak
            dilindungi.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-on-dark transition-colors">
              Beranda
            </Link>
            <Link
              href="/kebijakan-privasi"
              className="text-on-dark transition-colors"
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
