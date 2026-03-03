'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function MentionsLegales() {
    const { t } = useLanguage();
    const { legalPage } = t;

    return (
        <main className="min-h-screen bg-bg-dark text-white selection:bg-accent-stone selection:text-bg-dark pt-24">
            <Navbar />
            <Section className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-white">
                    {legalPage.title}
                </h1>

                <div className="space-y-12">
                    {legalPage.sections.map((section, index) => (
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
        </main>
    );
}
