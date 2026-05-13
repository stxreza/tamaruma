import type { Metadata } from "next";
import { NavV2 } from "@/components/v2/NavV2";
import { HeroV2 } from "@/components/v2/HeroV2";
import { IntroV2 } from "@/components/v2/IntroV2";
import { UnitShowcaseV2 } from "@/components/v2/UnitShowcaseV2";
import { HorizontalTicker } from "@/components/v2/HorizontalTicker";
import { ManifestoV2 } from "@/components/v2/ManifestoV2";
import { GalleryGridV2 } from "@/components/v2/GalleryGridV2";
import { MomentsSection } from "@/components/v2/MomentsSection";
import { CtaBlockV2 } from "@/components/v2/CtaBlockV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { SectionRail } from "@/components/v2/SectionRail";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { site, unitTypes, faqs } from "@/lib/site";

const PAGE_TITLE =
  "Tamaruma Sawangan · Rumah Ready Stock Sawangan di Cluster Tropical Modern Depok";
const PAGE_DESCRIPTION =
  "Tamaruma Sawangan — 177 rumah ready stock Sawangan siap huni dalam cluster tropical modern Depok. Tipe 58, 85, & Hook. DP flat Rp 50 juta, free BPHTB, simulasi KPR mulai Rp 5,3 juta/bulan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function Home() {
  // Harga terendah untuk schema Offer range
  const allUnits = unitTypes.flatMap((u) =>
    "units" in u
      ? u.units.map((x) => x.price)
      : [u.priceFrom]
  );
  const minPrice = Math.min(...allUnits);
  const maxPrice = Math.max(...allUnits);

  // RealEstateAgent + Residence + Product per tipe + BreadcrumbList + FAQPage + ItemList
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. RealEstateAgent — profil developer/marketing
      {
        "@type": "RealEstateAgent",
        "@id": `${site.url}/#realestateagent`,
        name: site.developer,
        alternateName: [site.name, site.altName],
        description:
          "Tim pemasaran Tamaruma Sawangan — cluster perumahan tropical modern dengan rumah ready stock Sawangan siap huni di Depok.",
        url: site.url,
        logo: site.ogImage,
        image: site.images,
        telephone: site.phoneE164,
        email: site.email,
        priceRange: `Rp ${(minPrice / 1_000_000_000).toFixed(2)} M – Rp ${(
          maxPrice / 1_000_000_000
        ).toFixed(2)} M+`,
        address: {
          "@type": "PostalAddress",
          ...site.addressStructured,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        areaServed: [
          { "@type": "City", name: "Depok" },
          { "@type": "AdministrativeArea", name: "Sawangan" },
          { "@type": "AdministrativeArea", name: "Bojongsari" },
          { "@type": "AdministrativeArea", name: "Pondok Petir" },
          { "@type": "Place", name: "Jabodetabek" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "17:00",
          },
        ],
        sameAs: [site.social.instagram, site.social.whatsapp],
      },

      // 2. Residence / Housing Complex — properti utama
      {
        "@type": ["Residence", "Place"],
        "@id": `${site.url}/#residence`,
        name: site.fullName,
        alternateName: [site.name, site.altName, "Cluster Tamaruma Sawangan"],
        description:
          "Cluster perumahan tropical modern Tamaruma Sawangan di Depok. 177 unit rumah ready stock Sawangan siap huni dalam luas kawasan 3 hektar dengan NAMU Clubhouse, kolam renang, lapangan basket, dan playground aktif.",
        url: site.url,
        image: site.images,
        telephone: site.phoneE164,
        numberOfRooms: {
          "@type": "QuantitativeValue",
          minValue: 2,
          maxValue: 4,
          unitText: "kamar tidur",
        },
        address: {
          "@type": "PostalAddress",
          ...site.addressStructured,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "NAMU Clubhouse", value: true },
          { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
          { "@type": "LocationFeatureSpecification", name: "Half Court Basketball", value: true },
          { "@type": "LocationFeatureSpecification", name: "Playground", value: true },
          { "@type": "LocationFeatureSpecification", name: "Jogging Loop", value: true },
          { "@type": "LocationFeatureSpecification", name: "One Gate System", value: true },
          { "@type": "LocationFeatureSpecification", name: "24 Jam Keamanan", value: true },
          { "@type": "LocationFeatureSpecification", name: "Taman Tropis", value: true },
        ],
        containsPlace: unitTypes.map((u) => ({
          "@type": "Accommodation",
          name: `${u.name} — Tamaruma Sawangan`,
          description: u.description,
          numberOfRooms:
            "bedrooms" in u && typeof u.bedrooms === "number"
              ? u.bedrooms
              : undefined,
          floorSize: {
            "@type": "QuantitativeValue",
            value: u.buildingSize,
            unitText: "m²",
          },
        })),
      },

      // 3. Product schema per tipe — untuk rich snippet harga
      ...unitTypes.map((u) => {
        const hasUnits = "units" in u;
        const pricesInType = hasUnits
          ? u.units.map((x) => x.price)
          : [u.priceFrom];
        const min = Math.min(...pricesInType);
        const max = Math.max(...pricesInType);

        return {
          "@type": "Product",
          "@id": `${site.url}/#tipe-${u.slug}`,
          name: `${u.name} — Rumah Ready Stock Sawangan`,
          alternateName: `${u.name} Tamaruma Sawangan`,
          description: u.description,
          image: site.images,
          brand: {
            "@type": "Brand",
            name: site.fullName,
          },
          category: "Perumahan / Cluster / Rumah Tinggal",
          sku: `TAMARUMA-${u.slug.toUpperCase()}`,
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "IDR",
            lowPrice: min,
            highPrice: max,
            offerCount: hasUnits ? u.units.length : 1,
            availability: "https://schema.org/InStock",
            url: `${site.url}/#tipe-v2`,
            seller: {
              "@id": `${site.url}/#realestateagent`,
            },
          },
        };
      }),

      // 4. BreadcrumbList — homepage breadcrumb
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: site.url,
          },
        ],
      },

      // 5. ItemList — daftar tipe rumah (membantu discovery)
      {
        "@type": "ItemList",
        "@id": `${site.url}/#units-list`,
        name: "Tipe Rumah Tamaruma Sawangan",
        description:
          "Daftar tipe rumah ready stock Sawangan di cluster Tamaruma Sawangan.",
        numberOfItems: unitTypes.length,
        itemListElement: unitTypes.map((u, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${u.name} — ${u.buildingSize} m²`,
          url: `${site.url}/#tipe-v2`,
        })),
      },

      // 6. FAQPage — sudah ada data di site.ts
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <SectionRail />
      <NavV2 />
      <main>
        <HeroV2 />
        <IntroV2 />
        <UnitShowcaseV2 />
        <HorizontalTicker />
        <ManifestoV2 />
        <GalleryGridV2 />
        <MomentsSection />
        <CtaBlockV2 />
      </main>
      <FooterV2 />
      <BackToTop />
      <FloatingChat />
    </>
  );
}
