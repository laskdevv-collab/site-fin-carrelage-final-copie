'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, MessageSquareQuote, ExternalLink } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { reviewsList, reviewsStats } from '@/data/reviews-data';

export function Reviews() {
  const { t } = useLanguage();
  const [filterCity, setFilterCity] = useState<string>('all');

  const cities = ['all', 'Mulhouse', 'Riedisheim', 'Kingersheim', 'Illzach'];

  const filteredReviews =
    filterCity === 'all'
      ? reviewsList
      : reviewsList.filter((r) => r.city.toLowerCase() === filterCity.toLowerCase());

  return (
    <Section id="avis" className="bg-bg-dark border-t border-white/5 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-stone/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent-stone font-medium mb-3 tracking-wider uppercase text-xs md:text-sm"
        >
          {t.reviews.subtitle || 'Témoignages & Confiance'}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4 tracking-tight"
        >
          {t.reviews.title || 'Avis Clients Vérifiés'}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/70 max-w-2xl mx-auto text-base md:text-lg"
        >
          {t.reviews.description ||
            'La satisfaction de nos clients à Mulhouse et dans le Haut-Rhin est notre meilleure carte de visite.'}
        </motion.p>
      </div>

      {/* Google Badge Summary Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-10 px-4 relative z-10"
      >
        <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            {/* Google Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white p-2.5 flex items-center justify-center shrink-0 shadow-md">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white font-heading">
                  {reviewsStats.averageRating.toFixed(1)}
                </span>
                <div className="flex items-center text-amber-400 gap-0.5" aria-label="5 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs md:text-sm text-white/70">
                Avis certifiés • Excellence artisanale à Mulhouse et en Alsace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-stone text-bg-dark font-medium text-sm hover:bg-white transition-all shadow-md active:scale-95 text-center"
            >
              Rejoindre nos clients satisfaits
            </a>
          </div>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setFilterCity(city)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filterCity === city
                  ? 'bg-accent-stone text-bg-dark shadow-md'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {city === 'all' ? 'Tous les secteurs' : city}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group shadow-lg hover:border-accent-stone/30"
            >
              <div>
                {/* Top: Stars + Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-white/50">{review.date}</span>
                </div>

                {/* Project Tag */}
                <div className="mb-4">
                  <span className="inline-block text-[11px] font-medium text-accent-stone bg-accent-stone/10 border border-accent-stone/20 rounded-md px-2.5 py-1">
                    {review.project}
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-stone/20 text-accent-stone font-bold font-heading flex items-center justify-center text-sm border border-accent-stone/30">
                    {review.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-accent-stone transition-colors">
                      {review.author}
                    </h4>
                    <p className="text-xs text-white/50">{review.city} (68)</p>
                  </div>
                </div>

                {review.verified && (
                  <span
                    className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20"
                    title="Avis vérifié"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Vérifié
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
