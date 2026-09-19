import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE = "Panduan Kawasan Sawangan Depok · Lokasi Tamaruma Sawangan";
const DESCRIPTION =
  "Panduan lengkap kawasan Sawangan Depok. Cari tahu jarak tempuh dari Tamaruma Sawangan ke tol, mall, sekolah, dan stasiun KRL terdekat.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "lokasi Tamaruma Sawangan",
    "perumahan Sawangan Depok",
    "cluster Sawangan Depok",
    "rumah dijual Sawangan",
    "akses tol Sawangan",
  ],
  alternates: {
    canonical: "/lokasi/sawangan-depok",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/lokasi/sawangan-depok`,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Lokasi perumahan Tamaruma Sawangan Depok",
      },
    ],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: [site.ogImage],
  },
};

export default function LokasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lokasi",
        item: `${site.url}/lokasi/sawangan-depok`,
      },
    ],
  };

  // LocalBusiness + GeoCircle schema untuk menargetkan local queries
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${site.url}/lokasi/sawangan-depok#localbusiness`,
    name: "Tamaruma Sawangan",
    description: "Cluster perumahan tropical modern di Sawangan, Depok.",
    image: site.ogImage,
    url: `${site.url}/lokasi/sawangan-depok`,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      ...site.addressStructured,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      geoRadius: "15000", // 15 km coverage radius
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, localBusinessSchema]),
        }}
      />
      {children}
    </>
  );
}
