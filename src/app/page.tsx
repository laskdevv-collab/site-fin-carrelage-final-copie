import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Process } from '@/components/sections/Process';
import { Reviews } from '@/components/sections/Reviews';
import { ContactForm } from '@/components/sections/ContactForm';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { Language } from '@/lib/i18n/translations';

import { CookieConsent } from '@/components/ui/CookieConsent';

import { Metadata } from 'next';

interface Props {
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { lang: langParam } = await searchParams;
  const lang = (langParam || 'fr') as Language;
  const baseUrl = 'https://www.mp-carrelage.com';
  const path = lang === 'fr' ? '' : `?lang=${lang}`;

  return {
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        'fr': `${baseUrl}`,
        'en': `${baseUrl}?lang=en`,
        'de': `${baseUrl}?lang=de`,
        'tr': `${baseUrl}?lang=tr`,
        'x-default': `${baseUrl}`,
      },
    },
  };
}

export default async function Home({ searchParams }: Props) {
  const { lang: langParam } = await searchParams;
  const lang = (langParam || 'fr') as Language;

  return (
    <LanguageProvider initialLanguage={lang}>
      <main className="min-h-screen bg-bg-dark text-white selection:bg-accent-stone selection:text-bg-dark">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <BeforeAfter />
        <Process />
        <Reviews />
        <ContactForm />
        <Footer />
        <CookieConsent />
      </main>
    </LanguageProvider>
  );
}
