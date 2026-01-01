'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Hero() {
    const { t } = useLanguage();
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="MP Carrelage - Carreleur Mulhouse expert en pose de carrelage grand format"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/40 to-bg-dark/80" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 tracking-tight">
                        {t.hero.title_1} <br />
                        <span className="text-accent-stone">{t.hero.title_2}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="primary" size="lg" asChild>
                            <Link href="#contact">
                                {t.hero.cta_quote}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="#projets">
                                {t.hero.cta_projects}
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                    <ChevronDown className="h-8 w-8" />
                </motion.div>
            </motion.div>
        </section>
    );
}
