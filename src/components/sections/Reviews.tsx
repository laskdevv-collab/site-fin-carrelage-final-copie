'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Star, Loader2 } from 'lucide-react';
import { supabase, type Review } from '@/lib/supabase';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Reviews() {
    const { t } = useLanguage();
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const { data, error: fetchError } = await supabase
                    .from('reviews')
                    .select('*')
                    .eq('is_published', true)
                    .order('created_at', { ascending: false });

                if (fetchError) {
                    // Vérifier si c'est une erreur de configuration Supabase
                    if (fetchError.message?.includes('placeholder') || fetchError.code === 'PGRST116') {
                        console.warn('Supabase n\'est pas configuré. Les avis utiliseront des données par défaut.');
                        setReviews([]);
                        setError(null);
                        return;
                    }
                    throw fetchError;
                }

                setReviews(data || []);
            } catch (err: any) {
                console.error('Error fetching reviews:', err);
                // Ne pas afficher d'erreur si Supabase n'est pas configuré
                if (err?.message?.includes('placeholder') || err?.code === 'PGRST116') {
                    setReviews([]);
                    setError(null);
                } else {
                    setError(t.reviews.loading);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, []);

    return (
        <Section id="avis" className="bg-bg-dark border-t border-white/5">
            <div className="text-center mb-16">
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

            {!loading && !error && reviews.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-white/60">{t.reviews.empty}</p>
                </div>
            )}

            {!loading && !error && reviews.length > 0 && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:border-accent-stone/30 group transition-all">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">
                                                {review.name}
                                            </h4>
                                            <p className="text-white/40 text-sm">{review.location}</p>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-4 w-4 fill-accent-stone text-accent-stone"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                                        "{review.text}"
                                    </p>

                                    <div className="pt-4 border-t border-white/10">
                                        <p className="text-accent-stone text-xs font-medium uppercase tracking-wide">
                                            {review.service}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-accent-stone text-accent-stone"
                                    />
                                ))}
                            </div>
                            <span className="text-white font-medium">5.0</span>
                            <span className="text-white/60">·</span>
                            <span className="text-white/60">{reviews.length} {t.reviews.count_suffix}</span>
                        </div>
                    </motion.div>
                </>
            )}
        </Section>
    );
}
