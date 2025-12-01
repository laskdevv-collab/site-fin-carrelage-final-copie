'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Home, Droplets, Sun, Layers, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const services = [
    {
        title: 'Poses Intérieures',
        icon: Home,
        description: 'Un savoir-faire complet alliant élégance et précision pour tous vos espaces de vie.',
        items: ['Tous types de carreaux', 'Toutes dimensions (XXL)', 'Finitions soignées', 'Sols et murs'],
    },
    {
        title: 'Salles de Bains',
        icon: Droplets,
        description: 'Création de salles de bains modernes et fonctionnelles, du sol au plafond.',
        items: ['Douches italiennes', 'Mosaïques', 'Niches et caissons', 'Étanchéité complète'],
    },
    {
        title: 'Extérieurs',
        icon: Sun,
        description: 'Aménagement de vos espaces extérieurs avec des matériaux résistants et esthétiques.',
        items: ['Terrasses (dalles, pavés)', 'Piscines (int/ext)', 'Cuisines extérieures', 'Habillages spécifiques'],
    },
    {
        title: 'Techniques & Autres',
        icon: Layers,
        description: 'Solutions techniques avancées pour des projets complexes et durables.',
        items: ['Résine époxy', 'Poses décoratives', 'Habillage cheminée', 'Surfaces chauffantes'],
    },
];

export function Services() {
    const { t } = useLanguage();

    const services = [
        {
            title: t.services.items[0].title,
            icon: Home,
            description: t.services.items[0].description,
            items: t.services.items[0].list,
        },
        {
            title: t.services.items[1].title,
            icon: Droplets,
            description: t.services.items[1].description,
            items: t.services.items[1].list,
        },
        {
            title: t.services.items[2].title,
            icon: Sun,
            description: t.services.items[2].description,
            items: t.services.items[2].list,
        },
        {
            title: t.services.items[3].title,
            icon: Layers,
            description: t.services.items[3].description,
            items: t.services.items[3].list,
        },
    ];

    return (
        <Section id="expertises" className="bg-bg-dark">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm"
                >
                    {t.services.subtitle}
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold font-heading text-white"
                >
                    {t.services.title}
                </motion.h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full hover:border-accent-stone/30 group">
                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone group-hover:bg-accent-stone group-hover:text-bg-dark transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                            <p className="text-white/60 text-sm mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                                        <Check className="h-4 w-4 text-accent-stone mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
