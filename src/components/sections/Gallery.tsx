'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { X, ZoomIn, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase, type GalleryProject } from '@/lib/supabase';
import { localGalleryProjects, isSupabaseConfigured } from '@/lib/gallery-data';
import { useLanguage } from '@/lib/i18n/LanguageContext';

// Utiliser des clés constantes pour les catégories
const categoryKeys = ['all', 'interior', 'exterior', 'bathroom'] as const;
type CategoryKey = typeof categoryKeys[number];

// Mapper les clés vers les catégories en français de la BD
const categoryMapDB: Record<CategoryKey, string> = {
    'all': 'Tous',
    'interior': 'Intérieur',
    'exterior': 'Extérieur',
    'bathroom': 'Salle de bain'
};

export function Gallery() {
    const { t } = useLanguage();

    // Mapper les clés vers les traductions
    const getCategoryLabel = (key: CategoryKey) => {
        switch (key) {
            case 'all': return t.gallery.categories.all;
            case 'interior': return t.gallery.categories.interior;
            case 'exterior': return t.gallery.categories.exterior;
            case 'bathroom': return t.gallery.categories.bathroom;
        }
    };

    const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [projects, setProjects] = useState<GalleryProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProjects() {
            // Si Supabase n'est pas configuré, utiliser les données locales
            if (!isSupabaseConfigured()) {
                console.info('Supabase non configuré. Utilisation des images locales.');
                setProjects(localGalleryProjects);
                setLoading(false);
                return;
            }

            try {
                const { data, error: fetchError } = await supabase
                    .from('gallery_projects')
                    .select('*')
                    .eq('is_published', true)
                    .order('display_order', { ascending: true });

                if (fetchError) {
                    // Vérifier si c'est une erreur de configuration Supabase
                    if (fetchError.message?.includes('placeholder') || fetchError.code === 'PGRST116') {
                        console.warn('Erreur Supabase. La galerie utilisera des données locales.');
                        setProjects(localGalleryProjects);
                        setError(null);
                        return;
                    }
                    throw fetchError;
                }

                // Si Supabase retourne une liste vide, utiliser les données locales
                if (!data || data.length === 0) {
                    console.info('Aucun projet dans Supabase. Utilisation des images locales.');
                    setProjects(localGalleryProjects);
                } else {
                    setProjects(data);
                }
            } catch (err: any) {
                console.error('Error fetching gallery projects:', err);
                // Utiliser les données locales en cas d'erreur
                setProjects(localGalleryProjects);
                setError(null);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === categoryMapDB[activeCategory]);

    return (
        <Section id="projets" className="bg-bg-dark border-t border-white/5">
            <div className="text-center mb-12">
                <h2 className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
                    {t.gallery.subtitle}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-8">
                    {t.gallery.title}
                </h3>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                    {categoryKeys.map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={cn(
                                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                                activeCategory === key
                                    ? 'bg-accent-stone text-bg-dark'
                                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                            )}
                        >
                            {getCategoryLabel(key)}
                        </button>
                    ))}
                </div>
            </div>

            {loading && (
                <div className="flex justify-center items-center py-12">
                    <Loader2 className="h-8 w-8 text-accent-stone animate-spin" />
                </div>
            )}

            {error && (
                <div className="text-center py-12">
                    <p className="text-red-500">{error}</p>
                </div>
            )}

            {!loading && !error && filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-white/60">{t.gallery.empty}</p>
                </div>
            )}

            {!loading && !error && filteredProjects.length > 0 && (
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-white/5"
                                onClick={() => setSelectedImage(project.image_url)}
                            >
                                <Image
                                    src={project.image_url}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <ZoomIn className="h-8 w-8 text-white mx-auto mb-2" />
                                        <h4 className="text-white font-bold text-lg">{project.title}</h4>
                                        <p className="text-accent-stone text-sm">{project.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white/60 hover:text-white p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-8 w-8" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Projet agrandi"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
