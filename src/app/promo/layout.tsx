import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE = "Promo Rumah Sawangan · DP 50 Juta All In Tamaruma";
const DESCRIPTION =
  "Promo rumah ready stock Sawangan terbaru di Tamaruma. Bayar DP 50 Juta langsung akad. Free biaya KPR, Free BPHTB, dan Free Biaya Notaris/AJB.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "promo rumah Sawangan",
    "rumah DP 50 juta Depok",
    "promo KPR Sawangan",
    "rumah free BPHTB Sawangan",
    "Tamaruma Sawangan promo",
  ],
  alternates: {
    canonical: "/promo",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/promo`,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Promo Rumah Tamaruma Sawangan DP 50 Juta All-in",
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

export default function PromoLayout({
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
        name: "Promo",
        item: `${site.url}/promo`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb),
        }}
      />
      {children}
    </>
  );
}
