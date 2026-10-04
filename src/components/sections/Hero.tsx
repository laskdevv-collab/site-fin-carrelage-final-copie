'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Hero() {
    const { t } = useLanguage();
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.webp"
                    alt="MP Carrelage - Carreleur Mulhouse expert en pose de carrelage grand format"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                    quality={75}
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

                    {/* Trust Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mt-8 pt-6 border-t border-white/10 max-w-2xl mx-auto text-left">
                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                            <Clock className="h-4 w-4 text-accent-stone shrink-0" />
                            <div className="text-xs">
                                <p className="font-semibold text-white leading-tight">{t.hero.badges.quote_title}</p>
                                <p className="text-[10px] text-white/60">{t.hero.badges.quote_desc}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                            <MapPin className="h-4 w-4 text-accent-stone shrink-0" />
                            <div className="text-xs">
                                <p className="font-semibold text-white leading-tight">{t.hero.badges.location_title}</p>
                                <p className="text-[10px] text-white/60">{t.hero.badges.location_desc}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                            <Star className="h-4 w-4 text-accent-stone fill-accent-stone shrink-0" />
                            <div className="text-xs">
                                <p className="font-semibold text-white leading-tight">{t.hero.badges.reviews_title}</p>
                                <p className="text-[10px] text-white/60">{t.hero.badges.reviews_desc}</p>
                            </div>
                        </div>
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
