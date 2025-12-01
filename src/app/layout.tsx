import type { Metadata } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mp-carrelage.com'),
  title: "MP Carrelage | Artisan Carreleur Mulhouse & Alsace",
  description: "MP Carrelage : Artisan carreleur expert à Mulhouse et en Alsace. Spécialiste de la pose de carrelage intérieur, extérieur, salle de bain et terrasse. Finitions haut de gamme et devis gratuit.",
  applicationName: 'MP Carrelage',
  keywords: "carrelage Mulhouse, carreleur Alsace, pose carrelage, salle de bain, terrasse, carrelage intérieur, carrelage extérieur, mosaïque, pierre naturelle, rénovation carrelage",
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
    alternateLocale: ['en_US', 'de_DE', 'tr_TR'],
    url: 'https://mp-carrelage.com',
    title: "MP Carrelage | Artisan Carreleur Mulhouse & Alsace",
    description: "Carrelage d'exception, pose millimétrée et finitions premium. Votre expert carreleur à Mulhouse et dans toute l'Alsace.",
    siteName: 'MP Carrelage',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'MP Carrelage - Expert Carreleur Mulhouse',
      },
    ],
  },
  alternates: {
    canonical: 'https://mp-carrelage.com',
    languages: {
      'fr': 'https://mp-carrelage.com',
      'en': 'https://mp-carrelage.com?lang=en',
      'de': 'https://mp-carrelage.com?lang=de',
      'tr': 'https://mp-carrelage.com?lang=tr',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/logo.png',
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MP Carrelage',
    description: "Expert en pose de carrelage à Mulhouse et dans toute l'Alsace. 20 ans d'expérience.",
    url: 'https://mp-carrelage.com',
    logo: 'https://mp-carrelage.com/images/favicon1.ico',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-6-52-18-84-07',
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: ['French', 'English', 'German', 'Turkish']
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mp-carrelage.com',
    name: 'MP Carrelage - Carreleur Mulhouse',
    description: "Expert en carrelage intérieur et extérieur à Mulhouse. Salles de bain, cuisines, terrasses.",
    image: 'https://mp-carrelage.com/images/favicon1.ico',
    telephone: '+33-6-52-18-84-07',
    email: 'mpcarrelage68@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mulhouse',
      addressRegion: 'Alsace',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.750839,
      longitude: 7.335888
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 47.750839,
        longitude: 7.335888
      },
      geoRadius: '50000'
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MP Carrelage',
    alternateName: ['MPCarrelage', 'MP Carrelage Mulhouse'],
    url: 'https://mp-carrelage.com'
  };

  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-bg-dark text-white`}
      >
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P1PSZR3X97"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P1PSZR3X97');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5PRC6ZJP');
          `}
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
        {/* End Google Tag Manager (noscript) */}

        <LanguageProvider>
          {children}
        </LanguageProvider>

        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
