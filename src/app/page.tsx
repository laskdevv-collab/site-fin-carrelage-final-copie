import { generateMetadata as homeMetadata, siteConfig } from '@/lib/seo/metadata';
import { frenchOnlySeo } from '@/lib/seo/pages';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Process } from '@/components/sections/Process';
import { Reviews } from '@/components/sections/Reviews';
import { FAQ } from '@/components/sections/FAQ';
import { ContactForm } from '@/components/sections/ContactForm';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { getLanguage } from '@/lib/i18n/routing';

import { CookieConsent } from '@/components/ui/CookieConsent';

import { Metadata } from 'next';

interface Props {
  searchParams: Promise<{ lang?: string | string[] }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { lang: langParam } = await searchParams;
  const lang = getLanguage(langParam);
  const metadata = homeMetadata(lang);
  const title = lang === 'fr' ? 'Carreleur à Mulhouse | Pose de carrelage – MP Carrelage' : metadata.title;
  return {
    ...metadata, title, ...frenchOnlySeo('/', lang),
    openGraph: {
      title, description: metadata.description, type: 'website', siteName: 'MP Carrelage',
      url: `https://www.mp-carrelage.com/${lang === 'fr' ? '' : `?lang=${lang}`}`,
      locale: siteConfig.locale[lang], images: ['/og-image.jpg'],
    },
  };
}

export default async function Home({ searchParams }: Props) {
  const { lang: langParam } = await searchParams;
  const lang = getLanguage(langParam);

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
        <FAQ />
        <ContactForm />
        <Footer />
        <CookieConsent />
      </main>
    </LanguageProvider>
  );
}
