import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE =
  "Disclaimer Tamaruma Sawangan · Informasi Legal Cluster Rumah Ready Stock Sawangan";
const DESCRIPTION =
  "Disclaimer resmi website pemasaran Tamaruma Sawangan. Informasi penggunaan AI untuk marketing, representasi visual, harga, dan legalitas rumah ready stock Sawangan di cluster Sawangan Depok.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "disclaimer Tamaruma Sawangan",
    "disclaimer properti",
    "cluster Sawangan disclaimer",
    "legalitas rumah ready stock Sawangan",
  ],
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/disclaimer`,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerLayout({
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
        name: "Disclaimer",
        item: `${site.url}/disclaimer`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
