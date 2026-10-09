import type { Metadata, Viewport } from "next";
import { Mulish, Frank_Ruhl_Libre, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import { ContactDialog } from "@/components/ContactDialog";
import { seo, therapist } from "@/content/site";

/*
 * Fonts: the original template uses three families. Two are licensed, so the
 * closest free equivalents are used. Each was chosen by MEASURING the original's
 * real glyph widths and headline line-breaks (see README, "Typography"):
 *
 *   Muli            -> Mulish                  (same family, renamed, identical metrics)
 *   Beaufort Pro    -> Frank Ruhl Libre Light  (reproduces all of the original's headline line-breaks
 *                                              at 97% size / -0.015em tracking)
 *   PrintedMoments  -> Mrs Saint Delafield     (hairline script; 1.92 times matches its width and height)
 *
 * To use the ORIGINAL serif exactly, add your own Adobe Fonts web project that
 * contains "Beaufort Pro" and set NEXT_PUBLIC_TYPEKIT_ID (see README).
 */
const body = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--ff-body",
  display: "swap",
});

const display = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--ff-display",
  display: "swap",
});

const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--ff-script",
  display: "swap",
});

/** Optional: your own Adobe Fonts kit that provides "beaufort-pro" (exact original serif). */
const typekitId = process.env.NEXT_PUBLIC_TYPEKIT_ID;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: therapist.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: seo.title,
    description: seo.description,
    siteName: therapist.name,
    images: [{ url: "/images/maya-reynolds.png", alt: therapist.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2f4a3c",
  width: "device-width",
  initialScale: 1,
};

/** Local-business structured data, built only from facts in the profile. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: therapist.name,
  description: seo.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: therapist.address.street,
    addressLocality: therapist.address.city,
    addressRegion: therapist.address.region,
    postalCode: therapist.address.zip,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Santa Monica" },
    { "@type": "State", name: "California" },
  ],
  employee: {
    "@type": "Person",
    name: therapist.shortName,
    jobTitle: therapist.title,
  },
  knowsAbout: [
    "Anxiety therapy",
    "Panic",
    "Trauma therapy",
    "EMDR",
    "Burnout",
    "Perfectionism",
    "Cognitive-behavioral therapy",
    "Mindfulness-based therapy",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${script.variable} ${
        typekitId ? "has-beaufort" : ""
      }`}
    >
      <head>
        {typekitId && <link rel="stylesheet" href={`https://use.typekit.net/${typekitId}.css`} />}
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ContactDialog />
      </body>
    </html>
  );
}
