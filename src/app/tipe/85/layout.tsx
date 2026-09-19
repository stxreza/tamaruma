import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE = "Tipe 85 Tamaruma Sawangan · Rumah Ready Stock 3 Kamar";
const DESCRIPTION =
  "Rumah ready stock Sawangan Tipe 85 terlaris. LB 85 m², LT 84 m², 3 kamar tidur, plafon tinggi, backyard luas. DP flat Rp 50 juta, free BPHTB, siap huni dalam 30 hari.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Tipe 85 Tamaruma Sawangan",
    "rumah ready stock Sawangan tipe 85",
    "rumah 3 kamar Sawangan",
    "Tamaruma Sawangan",
  ],
  alternates: {
    canonical: "/tipe/85",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/tipe/85`,
    images: [
      {
        url: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551141/Tamaruma_Tipe_85.webp",
        width: 1200,
        height: 800,
        alt: "Tipe 85 Tamaruma Sawangan — rumah ready stock 3 kamar",
      },
    ],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: ["https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551141/Tamaruma_Tipe_85.webp"],
  },
};

export default function Tipe85Layout({
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
        name: "Tipe Rumah",
        item: `${site.url}/#tipe-v2`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tipe 85",
        item: `${site.url}/tipe/85`,
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${site.url}/#tipe-85-product`,
    name: "Tipe 85 — Rumah Ready Stock Sawangan",
    description: DESCRIPTION,
    image: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551141/Tamaruma_Tipe_85.webp",
    brand: {
      "@type": "Brand",
      name: "Tamaruma Sawangan",
    },
    category: "Perumahan / Cluster / Rumah Tinggal",
    sku: "TAMARUMA-T85",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "IDR",
      lowPrice: 1226000000,
      highPrice: 1290000000,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      priceValidUntil: "2027-12-31",
      url: `${site.url}/tipe/85`,
      seller: {
        "@id": `${site.url}/#realestateagent`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, productSchema]),
        }}
      />
      {children}
    </>
  );
}
