'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Ruler, FileText, Hammer, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const steps = [
    {
        number: '01',
        title: 'Visite & Prise de mesures',
        description: 'Déplacement gratuit pour évaluer votre projet et prendre les mesures précises.',
        icon: Ruler,
    },
    {
        number: '02',
        title: 'Devis détaillé',
        description: 'Proposition transparente avec détail des matériaux et du temps de réalisation.',
        icon: FileText,
    },
    {
        number: '03',
        title: 'Pose professionnelle',
        description: 'Réalisation soignée avec respect des normes et techniques de pose adaptées.',
        icon: Hammer,
    },
    {
        number: '04',
        title: 'Finition & Contrôle qualité',
        description: 'Vérification minutieuse, nettoyage complet et garantie sur les travaux réalisés.',
        icon: CheckCircle,
    },
];

export function Process() {
    const { t } = useLanguage();

    const steps = [
        {
            number: '01',
            title: t.process.steps[0].title,
            description: t.process.steps[0].description,
            icon: Ruler,
        },
        {
            number: '02',
            title: t.process.steps[1].title,
            description: t.process.steps[1].description,
            icon: FileText,
        },
        {
            number: '03',
            title: t.process.steps[2].title,
            description: t.process.steps[2].description,
            icon: Hammer,
        },
        {
            number: '04',
            title: t.process.steps[3].title,
            description: t.process.steps[3].description,
            icon: CheckCircle,
        },
    ];

    return (
        <Section id="process" className="bg-gradient-to-b from-bg-dark to-bg-dark/95 border-t border-white/5">
            <div className="text-center mb-16">
                <h2 className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
                    {t.process.subtitle}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                    {t.process.title}
                </h3>
                <p className="text-white/60 max-w-2xl mx-auto">
                    {t.process.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <Card className="h-full relative overflow-hidden group hover:border-accent-stone/30">
                            {/* Number Badge */}
                            <div className="absolute -top-4 -right-4 text-8xl font-bold text-accent-stone/5 group-hover:text-accent-stone/10 transition-colors">
                                {step.number}
                            </div>

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent-stone/10 text-accent-stone group-hover:bg-accent-stone group-hover:text-bg-dark transition-colors">
                                    <step.icon className="h-7 w-7" />
                                </div>

                                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
