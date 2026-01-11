'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function About() {
    const { t } = useLanguage();

    const stats = [
        { value: t.about.stats.exp.value, label: t.about.stats.exp.label },
        { value: t.about.stats.clients.value, label: t.about.stats.clients.label },
        { value: t.about.stats.quality.value, label: t.about.stats.quality.label },
    ];

    return (
        <Section className="bg-bg-dark relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/images/concrete-texture.png')] bg-cover bg-center mix-blend-overlay" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
                        {t.about.subtitle}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                        {t.about.title}
                    </h3>
                    <div className="space-y-6 text-white/80 leading-relaxed">
                        <p>{t.about.p1}</p>
                        <p>{t.about.p2}</p>
                        <p>{t.about.p3}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-10 border-t border-white/10 pt-10">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-2xl md:text-3xl font-bold text-accent-stone mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/60">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                        <Image
                            src="/images/photo-1471880504582-cf7e63045303.jpg"
                            alt="MP Carrelage - Artisan carreleur à Mulhouse en plein travail de pose"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />

                        {/* Floating Card */}
                        <Card className="absolute bottom-6 left-6 right-6 border-white/20 bg-bg-dark/80 backdrop-blur-md">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="h-6 w-6 text-accent-stone shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white mb-1">{t.about.card.title}</h4>
                                    <p className="text-sm text-white/70">
                                        {t.about.card.desc}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-stone/10 rounded-full blur-2xl -z-10" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-stone/10 rounded-full blur-2xl -z-10" />
                </motion.div>
            </div>
        </Section>
    );
}
