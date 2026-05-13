/**
 * Sumber gambar (placeholder sementara).
 *
 * Saat ini memakai Unsplash sebagai stock photo untuk setiap konteks
 * (hero, fasilitas, interior, dll). Nanti, saat beralih ke Cloudinary:
 * cukup ganti URL di sini. Struktur key tetap sama, jadi komponen
 * tidak perlu dirombak.
 */

// Helper untuk bentuk URL Unsplash yang deterministik agar build konsisten.
const unsplash = (id: string, opts: { w?: number; q?: number } = {}) => {
  const w = opts.w ?? 1600;
  const q = opts.q ?? 80;
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
};

export const images = {
  hero: {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778529877/Rumah_Ready_Stok_Tamaruma_Sawangan.webp",
    alt: "Fasad rumah ready stock Sawangan di komplek Tamaruma Sawangan — perumahan tropical modern Depok",
  },
  heroAccent: {
    src: unsplash("photo-1505691938895-1758d7feb511", { w: 900 }),
    alt: "Detail arsitektur kayu & batu alam",
  },

  facilities: [
    {
      key: "clubhouse",
      src: unsplash("photo-1600607687939-ce8a6c25118c", { w: 1400 }),
      alt: "NAMU Clubhouse Tamaruma Sawangan",
    },
    {
      key: "pool",
      src: unsplash("photo-1540541338287-41700207dee6", { w: 1400 }),
      alt: "Kolam renang keluarga",
    },
    {
      key: "playground",
      src: unsplash("photo-1597843797221-e34b4a320b97", { w: 1400 }),
      alt: "Playground dan jogging loop",
    },
    {
      key: "garden",
      src: unsplash("photo-1416879595882-3373a0480b5b", { w: 1400 }),
      alt: "Taman tropis dengan tanaman lokal",
    },
  ],

  interiors: [
    {
      src: unsplash("photo-1600585154526-990dced4db0d", { w: 1400 }),
      alt: "Living room tropical modern",
    },
    {
      src: unsplash("photo-1600566753190-17f0baa2a6c3", { w: 1400 }),
      alt: "Dapur bersih dengan kitchen set full",
    },
    {
      src: unsplash("photo-1600210492486-724fe5c67fb0", { w: 1400 }),
      alt: "Master bedroom dengan walk-in closet",
    },
    {
      src: unsplash("photo-1600566753376-12c8ab7fb75b", { w: 1400 }),
      alt: "Backyard untuk dining outdoor",
    },
    {
      src: unsplash("photo-1505691938895-1758d7feb511", { w: 1400 }),
      alt: "Fasad dengan aksen kayu & batu alam",
    },
    {
      src: unsplash("photo-1600047509807-ba8f99d2cdde", { w: 1400 }),
      alt: "Koridor dengan pencahayaan alami",
    },
  ],

  location: {
    src: unsplash("photo-1486325212027-8081e485255e", { w: 1600 }),
    alt: "Peta area Sawangan Depok",
  },

  units: {
    t58: [
      {
        src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551141/Tamaruma_Tipe_58.webp",
        alt: "Rumah Tipe 58 Tamaruma Sawangan — fasad rumah ready stock Sawangan 2 kamar tidur",
      },
      {
        src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778621019/Layout_Tipe_58_juzbrz.webp",
        alt: "Denah lantai Tipe 58 Tamaruma Sawangan — layout 2 kamar tidur 2 kamar mandi",
      },
    ],
    t85: [
      {
        src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551141/Tamaruma_Tipe_85.webp",
        alt: "Rumah Tipe 85 Tamaruma Sawangan — fasad rumah ready stock Sawangan 3 kamar tidur",
      },
      {
        src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778621019/Layout_Tipe_85_sopk8m.webp",
        alt: "Denah lantai Tipe 85 Tamaruma Sawangan — layout 3 kamar tidur 2 kamar mandi",
      },
    ],
    hook: [
      {
        src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551805/Tamaruma_Tipe_144.webp",
        alt: "Rumah Tipe Hook 144 Tamaruma Sawangan — unit hook posisi sudut cluster Sawangan",
      },
      {
        src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778621019/Layout_Tipe_119_lkamvc.webp",
        alt: "Denah lantai Tipe Hook 119 Tamaruma Sawangan — layout 3+1 kamar tidur 2 carport",
      },
      {
        src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778621019/Layout_Tipe_144_tkode4.webp",
        alt: "Denah lantai Tipe Hook 144 Tamaruma Sawangan — layout 3+1 kamar tidur 2 carport",
      },
      {
        src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778621019/Layout_Type_146_ml9gw8.webp",
        alt: "Denah lantai Tipe Hook 146 Tamaruma Sawangan — layout 3+1 kamar tidur 2 carport",
      },
    ],
  },
} as const;
