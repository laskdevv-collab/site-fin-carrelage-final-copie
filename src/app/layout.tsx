import type { Metadata } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
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
    alternateLocale: ['en_US', 'de_DE', 'tr_TR'],
    url: 'https://mp-carrelage.com',
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
  alternates: {
    canonical: 'https://mp-carrelage.com',
    languages: {
      'fr': 'https://mp-carrelage.com',
      'en': 'https://mp-carrelage.com?lang=en',
      'de': 'https://mp-carrelage.com?lang=de',
      'tr': 'https://mp-carrelage.com?lang=tr',
    },
  },
  themeColor: '#1a1a1a',
  // Les icônes sont gérées automatiquement par Next.js via src/app/icon.ico et src/app/apple-icon.png
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
    url: 'https://mp-carrelage.com',
    logo: 'https://mp-carrelage.com/images/logo.png',
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
    description: "Artisan carreleur expert à Mulhouse (68). Spécialiste carrelage intérieur/extérieur, salle de bain et terrasse.",
    image: 'https://mp-carrelage.com/logo.png',
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

  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-bg-dark text-white`}
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
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P1PSZR3X97" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P1PSZR3X97');
          `}
        </Script>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
