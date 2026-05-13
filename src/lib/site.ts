/**
 * Konten utama landing page Tamaruma Sawangan.
 * Semua copy & data ditempatkan di sini agar mudah di-update.
 */

export const site = {
  name: "Tamaruma",
  altName: "Tamaruma SWG",
  fullName: "Tamaruma Sawangan",
  tagline:
    "Rumah Ready Stock Sawangan — perumahan tropical modern siap huni di komplek Tamaruma Sawangan, Depok",
  location: "Sawangan, Depok",
  developer: "Ruma ID",
  url: "https://tamaruma-sawangan.id",
  whatsapp: {
    number: "628131742034",
    message:
      "Halo, saya tertarik dengan Tamaruma Sawangan (rumah ready stock Sawangan) dan ingin info tipe unit serta jadwal visit.",
  },
  address:
    "Jalan Terusan Haji Nawi, Pondok Petir, Bojongsari, Sawangan, Depok, Jawa Barat",
  addressStructured: {
    streetAddress: "Jalan Terusan Haji Nawi, Pondok Petir",
    addressLocality: "Bojongsari, Sawangan",
    addressRegion: "Depok, Jawa Barat",
    postalCode: "16518",
    addressCountry: "ID",
  },
  geo: {
    latitude: -6.369515,
    longitude: 106.728079,
  },
  phone: "0813-1742-034",
  phoneE164: "+62813174203400",
  email: "hello@tamaruma-sawangan.id",
  social: {
    instagram: "https://www.instagram.com/tamaruma.sawangan",
    whatsapp: "https://wa.me/628131742034",
  },
  // Gambar 3:4 (portrait) yang cocok untuk schema/OG — diambil dari koleksi Cloudinary
  images: [
    "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551141/Tamaruma_Tipe_58.webp",
    "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551141/Tamaruma_Tipe_85.webp",
    "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551805/Tamaruma_Tipe_144.webp",
    "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778629235/Taman_Belakang_Rumah_xrqrcb.webp",
    "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778628858/Rumah_Tipe_58_1_rkjvvk.webp",
  ],
  ogImage:
    "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778529877/Rumah_Ready_Stok_Tamaruma_Sawangan.webp",
};

export const waHref = (() => {
  const text = encodeURIComponent(site.whatsapp.message);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
})();

export const unitTypes = [
  {
    slug: "t58",
    name: "Tipe 58",
    landSize: 84,
    buildingSize: 58,
    bedrooms: 2,
    bathrooms: 2,
    carport: 1,
    priceFrom: 1_075_000_000,
    installmentFrom: 6_188_574,
    badges: ["Ready Stock", "Cocok Pasangan Muda"],
    description:
      "Rumah ready stock Sawangan tipe kompak untuk pasangan muda atau keluarga kecil di komplek Tamaruma Sawangan. Desain tropical modern dengan sirkulasi udara alami yang optimal.",
    units: [
      {
        unitId: "A23", blok: "Blok A", landSize: 148, buildingSize: 58,
        price: 1_075_000_000, dp: 50_000_000,
        kpr15: 7_554_063, kpr20: 6_188_574, kpr25: 5_390_534,
      },
    ],
  },
  {
    slug: "t85",
    name: "Tipe 85",
    landSize: 84,
    buildingSize: 85,
    bedrooms: 3,
    bathrooms: 2,
    carport: 1,
    priceFrom: 1_226_000_000,
    installmentFrom: 7_057_853,
    badges: ["Ready Stock", "Opsi Full Furnished"],
    description:
      "Pilihan populer di perumahan Tamaruma Sawangan. Tiga kamar tidur, backyard luas, plafon tinggi, dan opsi full furnished siap huni dalam 30 hari — rumah ready stock Sawangan dengan ruang yang lapang.",
    units: [
      {
        unitId: "D5",  blok: "Blok D", landSize: 85,  buildingSize: 85,
        price: 1_278_000_000, dp: 50_000_000,
        kpr15: 8_980_551, kpr20: 7_357_207, kpr25: 6_408_467,
      },
      {
        unitId: "D15", blok: "Blok D", landSize: 83,  buildingSize: 85,
        price: 1_267_000_000, dp: 50_000_000,
        kpr15: 8_903_254, kpr20: 7_293_882, kpr25: 6_353_308,
      },
      {
        unitId: "D16", blok: "Blok D", landSize: 105, buildingSize: 85,
        price: 1_290_000_000, dp: 50_000_000,
        kpr15: 9_064_876, kpr20: 7_426_289, kpr25: 6_468_640,
      },
      {
        unitId: "D17", blok: "Blok D", landSize: 83,  buildingSize: 85,
        price: 1_267_000_000, dp: 50_000_000,
        kpr15: 8_903_254, kpr20: 7_293_882, kpr25: 6_353_308,
      },
      {
        unitId: "D31", blok: "Blok D", landSize: 84,  buildingSize: 85,
        price: 1_272_000_000, dp: 50_000_000,
        kpr15: 8_938_389, kpr20: 7_322_666, kpr25: 6_378_380,
      },
      {
        unitId: "D32", blok: "Blok D", landSize: 84,  buildingSize: 85,
        price: 1_272_000_000, dp: 50_000_000,
        kpr15: 8_938_389, kpr20: 7_322_666, kpr25: 6_378_380,
      },
      {
        unitId: "E3",  blok: "Blok E", landSize: 84,  buildingSize: 85,
        price: 1_226_000_000, dp: 50_000_000,
        kpr15: 8_615_145, kpr20: 7_057_853, kpr25: 6_147_716,
      },
      {
        unitId: "E9",  blok: "Blok E", landSize: 84,  buildingSize: 85,
        price: 1_226_000_000, dp: 50_000_000,
        kpr15: 8_615_145, kpr20: 7_057_853, kpr25: 6_147_716,
      },
      {
        unitId: "E11", blok: "Blok E", landSize: 84,  buildingSize: 85,
        price: 1_226_000_000, dp: 50_000_000,
        kpr15: 8_615_145, kpr20: 7_057_853, kpr25: 6_147_716,
      },
      {
        unitId: "E12", blok: "Blok E", landSize: 84,  buildingSize: 85,
        price: 1_226_000_000, dp: 50_000_000,
        kpr15: 8_615_145, kpr20: 7_057_853, kpr25: 6_147_716,
      },
      {
        unitId: "E19", blok: "Blok E", landSize: 84,  buildingSize: 85,
        price: 1_226_000_000, dp: 50_000_000,
        kpr15: 8_615_145, kpr20: 7_057_853, kpr25: 6_147_716,
      },
      {
        unitId: "E20", blok: "Blok E", landSize: 84,  buildingSize: 85,
        price: 1_226_000_000, dp: 50_000_000,
        kpr15: 8_615_145, kpr20: 7_057_853, kpr25: 6_147_716,
      },
    ],
  },
  {
    slug: "hook",
    name: "Tipe Hook",
    landSize: 150,
    buildingSize: 119,
    bedrooms: 4,
    bathrooms: 3,
    carport: 2,
    priceFrom: 2_800_000_000,
    installmentFrom: 13_700_000,
    badges: ["Posisi Hook", "Lahan Lebih Luas"],
    hookVariants: [
      {
        label: "Tipe 119",
        buildingSize: 119,
        units: [
          { unitId: "E1, E35, D7, D19", landSize: 150, bedrooms: "3+1", bathrooms: "2+1", carport: 2 },
          { unitId: "E21",              landSize: 135, bedrooms: "3",   bathrooms: "2",   carport: 2 },
        ],
      },
      {
        label: "Tipe 144",
        buildingSize: 144,
        units: [
          { unitId: "D41", landSize: 258, bedrooms: "3+1", bathrooms: "2+1", carport: 2 },
        ],
      },
      {
        label: "Tipe 146",
        buildingSize: 146,
        units: [
          { unitId: "D10", landSize: 161, bedrooms: "3+1", bathrooms: "2+1", carport: 2 },
        ],
      },
    ],
    description:
      "Unit hook di sudut cluster Tamaruma Sawangan — lahan lebih luas, dua sisi terbuka, dan privasi lebih tinggi. Tersedia tiga varian luas bangunan: 119, 144, dan 146 m². Pilihan premium rumah ready stock Sawangan.",
  },
] as const;

export type UnitType = (typeof unitTypes)[number];

export const whyCards = [
  {
    pain: "Takut inden molor",
    title: "Unit sudah berdiri, bisa langsung dicek",
    body: "Semua tipe yang dirilis dalam fase ini sudah topping off. Visit show unit & cek kondisi aktual tanpa imajinasi.",
  },
  {
    pain: "Pusing urus furniture",
    title: "Opsi full furnished, tinggal bawa koper",
    body: "Paket furnished kurasi lokal: kasur, sofa, dining set, dan kitchen essentials. Tukang-spesifikasi sudah siap.",
  },
  {
    pain: "Bingung legal & KPR",
    title: "SHM, free BPHTB & partner 6 bank",
    body: "Legal bersih sertifikat hak milik, gratis biaya BPHTB, dan in-house KPR team bantu approval 5–7 hari kerja.",
  },
  {
    pain: "Bosan cluster tanpa karakter",
    title: "NAMU Clubhouse & fasilitas keluarga",
    body: "Kolam renang, playground, jogging loop, dan clubhouse NAMU untuk kopi pagi & co-working akhir pekan.",
  },
];

export const facilities = [
  {
    title: "NAMU Clubhouse",
    caption: "Co-working, kafe pagi, dan ruang komunitas warga.",
  },
  {
    title: "Kolam renang keluarga",
    caption: "Kolam dewasa 1.2m + kids pool dengan shade pergola.",
  },
  {
    title: "Playground & Jogging Loop",
    caption: "Rute 450m mengelilingi cluster, aman untuk anak & lansia.",
  },
  {
    title: "Taman tropis",
    caption: "Lanskap tropis dengan 40+ spesies tanaman lokal.",
  },
];

export const trustLogos = [
  "BCA",
  "Mandiri",
  "BSI",
  "BNI",
  "CIMB Niaga",
  "Permata",
];

export const testimonials = [
  {
    quote:
      "Kami pilih Tamaruma karena rumahnya sudah berdiri. Bisa dicek kualitasnya, bukan cuma brosur.",
    name: "Rani & Dimas",
    role: "Penghuni Tipe 75, pindah Jan 2026",
  },
  {
    quote:
      "Proses KPR lancar 6 hari kerja. Tim-nya responsif dan bantu sampai akad.",
    name: "Hendra S.",
    role: "Penghuni Tipe 85",
  },
  {
    quote:
      "Paket furnished-nya real siap huni. Kami tinggal bawa baju & barang pribadi.",
    name: "Keluarga Wijaya",
    role: "Penghuni Tipe 75 Furnished",
  },
];

export const faqs = [
  {
    q: "Apakah unit benar-benar ready stock?",
    a: "Ya. Fase 1 yang dirilis sudah dalam tahap finishing hingga siap huni. Silakan booking visit untuk langsung melihat kondisi unit.",
  },
  {
    q: "Paket full furnished isinya apa saja?",
    a: "Paket mencakup kasur + dipan seluruh kamar tidur, sofa ruang keluarga, dining set 6 kursi, kitchen set atas-bawah, kompor + hood, kulkas, mesin cuci, dan window treatment. Detail lengkap tersedia saat visit.",
  },
  {
    q: "Bagaimana skema KPR dan DP?",
    a: "Kami bekerja sama dengan 6 bank nasional. DP mulai dari 10% dengan tenor hingga 20 tahun. Tim in-house KPR akan bantu simulasi & submit.",
  },
  {
    q: "Apakah SHM langsung atas nama pembeli?",
    a: "Sertifikat sudah pecah per unit dengan status SHM, dan proses balik nama akan diselesaikan pasca akad.",
  },
  {
    q: "Berapa biaya IPL dan apa saja yang dicover?",
    a: "IPL saat ini Rp 25.000/m² per bulan, mencakup perawatan fasilitas, keamanan 24 jam, kebersihan koridor, dan pemeliharaan lanskap.",
  },
];
