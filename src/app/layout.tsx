import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Preloader } from "@/components/v2/Preloader";
import { site } from "@/lib/site";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const SITE_TITLE =
  "Tamaruma Sawangan · Rumah Ready Stock Sawangan di Cluster Tropical Modern";
const SITE_DESCRIPTION =
  "Tamaruma Sawangan — cluster perumahan tropical modern di Depok dengan 177 rumah ready stock Sawangan siap huni. DP flat Rp 50 juta, free BPHTB, notaris, dan akad KPR. Visit show unit hari ini.";

export const viewport: Viewport = {
  themeColor: "#12352f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: SITE_TITLE,
    template: "%s · Tamaruma Sawangan",
  },
  description: SITE_DESCRIPTION,
  applicationName: site.fullName,
  authors: [{ name: site.developer, url: site.url }],
  creator: site.developer,
  publisher: site.developer,
  generator: "Next.js",
  keywords: [
    "Tamaruma Sawangan",
    "Tamaruma SWG",
    "Rumah Ready Stock Sawangan",
    "Cluster Sawangan",
    "Cluster Sawangan Depok",
    "perumahan Sawangan",
    "perumahan Sawangan Depok",
    "komplek Sawangan",
    "komplek Sawangan Depok",
    "rumah siap huni Sawangan",
    "rumah siap huni Depok",
    "perumahan tropical modern Sawangan",
    "rumah baru Sawangan",
    "rumah ready stock Depok",
    "rumah dijual Sawangan",
    "rumah dijual Depok",
    "KPR rumah Sawangan",
    "Pondok Petir Depok",
    "Bojongsari Depok",
  ],
  category: "real estate",
  classification: "Real Estate · Residential",
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.fullName,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Tamaruma Sawangan — rumah ready stock Sawangan di cluster tropical modern Depok",
      },
      ...site.images.map((src, i) => ({
        url: src,
        width: 900,
        height: 1200,
        alt: `Tamaruma Sawangan preview ${i + 1} — rumah ready stock Sawangan`,
      })),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    google: "uKfDVEBdBRsVTTEcdPk1KCwztx1Pet8FHZGv4E8kYA0",
    // other: { "msvalidate.01": "..." },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Global Organization + WebSite schema (muncul di semua halaman)
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.fullName,
        alternateName: [site.name, site.altName, "Tamaruma Sawangan Depok"],
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: site.ogImage,
          width: 1200,
          height: 630,
        },
        image: site.images,
        telephone: site.phoneE164,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          ...site.addressStructured,
        },
        sameAs: [site.social.instagram, site.social.whatsapp],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.fullName,
        alternateName: site.altName,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <html
      lang="id"
      className={`${body.variable} ${display.variable} antialiased`}
    >
      <head>
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Sawangan, Depok, Jawa Barat" />
        <meta
          name="geo.position"
          content={`${site.geo.latitude};${site.geo.longitude}`}
        />
        <meta
          name="ICBM"
          content={`${site.geo.latitude}, ${site.geo.longitude}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body
        className="text-foreground"
        style={{ margin: 0, background: "#12352f" }}
      >
        <ScrollProgress />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
