'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function BeforeAfter() {
    const { t } = useLanguage();
    return (
        <Section className="bg-bg-dark border-t border-white/5">
            <div className="text-center mb-12">
                <p className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
                    {t.beforeAfter.subtitle}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                    {t.beforeAfter.title}
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                    {t.beforeAfter.description}
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10">
                    <ReactCompareSlider
                        itemOne={
                            <ReactCompareSliderImage
                                src="/images/avant-1.webp"
                                alt="Avant travaux de carrelage - sol brut à Mulhouse"
                                loading="lazy"
                            />
                        }
                        itemTwo={
                            <ReactCompareSliderImage
                                src="/images/apres-1.webp"
                                alt="Après travaux de carrelage - sol fini par MP Carrelage Mulhouse"
                                loading="lazy"
                            />
                        }
                        style={{
                            height: '500px',
                        }}
                        position={50}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-white/60 text-sm mb-1">{t.beforeAfter.before_label}</p>
                        <p className="text-white font-medium">{t.beforeAfter.before_desc}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-white/60 text-sm mb-1">{t.beforeAfter.after_label}</p>
                        <p className="text-white font-medium">{t.beforeAfter.after_desc}</p>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
