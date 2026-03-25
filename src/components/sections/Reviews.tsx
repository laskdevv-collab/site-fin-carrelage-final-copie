'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Script from 'next/script';

export function Reviews() {
    const { t } = useLanguage();

    return (
        <Section id="avis" className="bg-bg-dark border-t border-white/5">
            <div className="text-center mb-16 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm"
                >
                    {t.reviews.subtitle}
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold font-heading text-white mb-4"
                >
                    {t.reviews.title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/60 max-w-2xl mx-auto"
                >
                    {t.reviews.description}
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Elfsight Google Reviews Widget */}
                <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
                <div className="elfsight-app-3da234dc-a42b-4846-a073-f1f1b84d7eb5" data-elfsight-app-lazy></div>
            </div>
        </Section>
    );
}
