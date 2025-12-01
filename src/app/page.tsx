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
import { Metadata } from 'next';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { searchParams }: Props
): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang || 'fr';
  const baseUrl = 'https://mp-carrelage.com';

  // Construct canonical URL
  let canonical = baseUrl;
  if (lang !== 'fr') {
    canonical = `${baseUrl}?lang=${lang}`;
  }

  return {
    alternates: {
      canonical: canonical,
      languages: {
        'fr': baseUrl,
        'en': `${baseUrl}?lang=en`,
        'de': `${baseUrl}?lang=de`,
        'tr': `${baseUrl}?lang=tr`,
      },
    },
  }
}

export default function Home() {
  return (
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
    </main>
  );
}
