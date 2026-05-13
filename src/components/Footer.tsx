import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-surface-charcoal text-on-dark">
      <div className="container-x py-14 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="font-display text-2xl">{site.name}</span>
          </div>
          <p className="mt-3 text-sm text-on-dark-muted max-w-sm">
            {site.tagline}. Developed by {site.developer}.
          </p>
        </div>

        <div>
          <div className="eyebrow eyebrow-on-dark">Proyek</div>
          <ul className="mt-3 space-y-2 text-sm text-on-dark-muted">
            <li>
              <a href="#tipe" className="hover:text-on-dark">
                Tipe Unit
              </a>
            </li>
            <li>
              <a href="#fasilitas" className="hover:text-on-dark">
                Fasilitas
              </a>
            </li>
            <li>
              <a href="#lokasi" className="hover:text-on-dark">
                Lokasi
              </a>
            </li>
            <li>
              <a href="#galeri" className="hover:text-on-dark">
                Galeri
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow eyebrow-on-dark">Informasi</div>
          <ul className="mt-3 space-y-2 text-sm text-on-dark-muted">
            <li>
              <a href="#kpr" className="hover:text-on-dark">
                Simulasi KPR
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-on-dark">
                FAQ
              </a>
            </li>
            <li>
              <a href="#jadwal" className="hover:text-on-dark">
                Jadwalkan Visit
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow eyebrow-on-dark">Kontak</div>
          <ul className="mt-3 space-y-2 text-sm text-on-dark-muted">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="hover:text-on-dark">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-on-dark">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-on-dark-muted">
          <div>
            © {new Date().getFullYear()} {site.developer}. Semua hak
            dilindungi.
          </div>
          <div>
            Render, denah, dan harga bersifat ilustrasi dan dapat berubah
            sewaktu-waktu.
          </div>
        </div>
      </div>
    </footer>
  );
}
