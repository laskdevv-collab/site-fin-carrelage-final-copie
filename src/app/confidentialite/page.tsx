import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { useLanguage, LanguageProvider } from '@/lib/i18n/LanguageContext';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { Language } from '@/lib/i18n/translations';
import { Metadata } from 'next';

interface Props {
    searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const { lang: langParam } = await searchParams;
    const lang = (langParam || 'fr') as Language;

    const titles: Record<string, string> = {
        fr: "Politique de Confidentialité | MP Carrelage",
        en: "Privacy Policy | MP Carrelage",
        de: "Datenschutzerklärung | MP Carrelage",
        tr: "Gizlilik Politikası | MP Carrelage"
    };

    return {
        title: titles[lang] || titles.fr,
        robots: { index: false } // Privacy pages don't necessarily need to be indexed heavily
    };
}

function ConfidentialiteClient() {
    const { t } = useLanguage();
    const { privacyPage } = t;

    return (
        <main className="min-h-screen bg-bg-dark text-white selection:bg-accent-stone selection:text-bg-dark pt-24">
            <Navbar />
            <Section className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-white">
                    {privacyPage.title}
                </h1>

                <div className="space-y-12">
                    {privacyPage.sections.map((section, index) => (
                        <section key={index} className="space-y-4">
                            <h2 className="text-xl font-semibold text-accent-stone uppercase tracking-wider">
                                {section.title}
                            </h2>
                            <div className="text-white/70 leading-relaxed whitespace-pre-line text-lg">
                                {section.content}
                            </div>
                        </section>
                    ))}
                </div>
            </Section>
            <Footer />
            <CookieConsent />
        </main>
    );
}

export default async function Confidentialite({ searchParams }: Props) {
    const { lang: langParam } = await searchParams;
    const lang = (langParam || 'fr') as Language;

    return (
        <LanguageProvider initialLanguage={lang}>
            <ConfidentialiteClient />
        </LanguageProvider>
    );
}
