'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Script from 'next/script';

export function Reviews() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Section id="avis" className="bg-bg-dark border-t border-white/5">
            <div className="text-center mb-16 px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm"
                >
                    {t.reviews.subtitle}
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold font-heading text-white mb-4"
                >
                    {t.reviews.title}
                </motion.h2>
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

            <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[200px]">
                {/* Elfsight Google Reviews Widget — chargé uniquement quand visible */}
                {isVisible && (
                    <>
                        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
                        <div className="elfsight-app-3da234dc-a42b-4846-a073-f1f1b84d7eb5" data-elfsight-app-lazy></div>
                    </>
                )}
            </div>
        </Section>
    );
}
