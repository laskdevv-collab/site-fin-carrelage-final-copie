import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

import { CookieConsent } from "@/components/ui/CookieConsent";
import { FloatingCallButton } from "@/components/ui/FloatingCallButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mp-carrelage.com'),
  title: "Carreleur Mulhouse | MP Carrelage - Artisan Expert en Alsace",
  description: "MP Carrelage, votre carreleur à Mulhouse (68). Expert en pose de carrelage grand format, salle de bain et terrasse en Alsace. Précision artisanale et finitions premium.",
  keywords: "carreleur mulhouse, mp carrelage, carrelage mulhouse, artisan carreleur alsace, pose carrelage 68, salle de bain mulhouse, terrasse alsace, carrelage grand format",
  authors: [{ name: "MP Carrelage" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.mp-carrelage.com',
    title: "Carreleur Mulhouse | MP Carrelage - Artisan Expert",
    description: "MP Carrelage : Artisan carreleur expert à Mulhouse. Pose millimétrée, grand format et finitions d'exception pour vos projets en Alsace.",
    siteName: 'MP Carrelage',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MP Carrelage - Expert Carreleur Mulhouse',
      },
    ],
  },
};

export const viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // Structured data for SEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MP Carrelage',
    description: "Expert en pose de carrelage à Mulhouse et dans toute l'Alsace. 20 ans d'expérience.",
    url: 'https://www.mp-carrelage.com',
    logo: 'https://www.mp-carrelage.com/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33667674060',
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: ['French', 'German', 'Turkish']
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://www.mp-carrelage.com/#business',
    name: 'MP Carrelage',
    alternateName: 'MP Carrelage Mulhouse',
    description: "Artisan carreleur expert à Mulhouse (68). Spécialiste pose de carrelage intérieur, extérieur, salle de bain, terrasse et mosaïque en Alsace depuis 20 ans.",
    url: 'https://www.mp-carrelage.com',
    image: 'https://www.mp-carrelage.com/images/logo.png',
    logo: 'https://www.mp-carrelage.com/images/logo.png',
    telephone: '+33667674060',
    email: 'mpcarrelage68@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mulhouse',
      postalCode: '68100',
      addressRegion: 'Grand Est',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.750839,
      longitude: 7.335888
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Mulhouse',
        sameAs: 'https://fr.wikipedia.org/wiki/Mulhouse'
      },
      {
        '@type': 'City',
        name: 'Riedisheim'
      },
      {
        '@type': 'City',
        name: 'Kingersheim'
      },
      {
        '@type': 'City',
        name: 'Illzach'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Haut-Rhin (68)'
      },
      {
        '@type': 'State',
        name: 'Alsace'
      }
    ],
    knowsAbout: [
      'Pose de carrelage',
      'Carrelage grand format',
      'Salle de bain',
      'Douche italienne',
      'Terrasse carrelée',
      'Mosaïque',
      'Étanchéité carrelage',
      'Résine époxy'
    ],
    priceRange: '$$',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Check, Bank Transfer',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de carrelage',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carrelage intérieur',
            description: 'Pose de carrelage pour sols et murs, tous formats dont XXL'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Salle de bain complète',
            description: 'Douche italienne, mosaïque, étanchéité, niches encastrées'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carrelage extérieur',
            description: 'Terrasses, piscines, cuisines extérieures'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Techniques spéciales',
            description: 'Résine époxy, poses décoratives, habillage cheminée, chauffage au sol'
          }
        }
      ]
    }
  };

  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased bg-bg-dark text-white`}
      >
        {/* Structured Data - JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PRC6ZJP');`}
        </Script>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PRC6ZJP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* GA4 (G-P1PSZR3X97) est chargé via GTM — ne pas charger en double */}
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}
