import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.defaultTitleSuffix,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.defaultMetaDescription,
  openGraph: {
    title: siteConfig.defaultTitleSuffix,
    description: siteConfig.defaultMetaDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Polices : Cinzel (titres — évoque les sceaux gravés), Jost (texte),
            Space Mono (prix, dates, mentions techniques) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Jost:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={
          {
            "--font-display": "'Cinzel', serif",
            "--font-body": "'Jost', sans-serif",
            "--font-mono": "'Space Mono', monospace",
          } as React.CSSProperties
        }
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
        <Analytics />
      </body>
    </html>
  );
}
