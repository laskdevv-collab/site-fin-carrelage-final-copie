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
  description: "L'excellence technique pour vos projets de Carrelage.Nous garantissons une pose de carrelage d'une précision absolue (grand format, faïence, extérieur)et des finitions premium qui respectent l'intégrité esthétique et la durabilité de votre investissement. Votre expert carreleur reconnu à Mulhouse, intervenant dans toute l'alsace et dans toute la France pour gros projet .",
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
  icons: [
    {
      rel: 'icon',
      url: '/images/logo.png',
      type: 'image/png',
      sizes: '32x32',
    },
    {
      rel: 'apple-touch-icon',
      url: '/images/logo.png',
      sizes: '180x180',
    },
  ],
};

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
    description: "Expert en carrelage intérieur et extérieur à Mulhouse. Salles de bain, cuisines, terrasses.",
    image: 'https://mp-carrelage.com/images/logo.png',
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
      <head>
        {/* Favicon - MP Carrelage Logo */}
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images/logo.png" sizes="180x180" />
        <meta name="theme-color" content="#1a1a1a" />
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P1PSZR3X97"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P1PSZR3X97');
            `,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PRC6ZJP');`
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-bg-dark text-white`}
      >
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
      </body>
    </html>
  );
}
