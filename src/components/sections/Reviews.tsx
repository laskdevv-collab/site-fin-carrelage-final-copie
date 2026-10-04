'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { reviewsList, reviewsStats, ReviewItem } from '@/data/reviews-data';

function ClientAvatar({ name, src }: { name: string; src?: string }) {
  const [hasError, setHasError] = useState(false);

  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (!src || hasError) {
    return (
      <div
        className="w-10 h-10 rounded-full bg-accent-stone/15 border border-accent-stone/30 text-accent-stone font-heading font-semibold text-xs flex items-center justify-center shrink-0 tracking-wider shadow-inner"
        aria-hidden="true"
      >
        {initials}
      </div>
    );
  }

  return (
    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/15 shrink-0 bg-white/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`Photo de profil de ${name}`}
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

export function Reviews() {
  const { t } = useLanguage();

  return (
    <Section id="avis" className="bg-bg-dark border-t border-white/5">
      {/* Section Header — Harmonisé avec le reste du site */}
      <div className="text-center mb-16 px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm"
        >
          {t.reviews.subtitle || 'Témoignages'}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold font-heading text-white mb-4"
        >
          {t.reviews.title || 'Avis Clients Google'}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          {t.reviews.description ||
            'Découvrez les avis authentiques de nos clients déposés sur notre fiche Google Maps.'}
        </motion.p>
      </div>

      {/* Reviews Grid utilisant le composant Card du site */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between hover:border-accent-stone/30 group transition-all">
                <div>
                  {/* Top: Avatar, Nom & Étoiles */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <ClientAvatar name={review.author} src={review.avatar} />
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-accent-stone transition-colors leading-snug">
                          {review.author}
                        </h3>
                        <p className="text-white/40 text-xs">
                          {review.city} · {review.date}
                        </p>
                      </div>
                    </div>

                    {/* Étoiles couleur signature accent-stone */}
                    <div className="flex gap-0.5 shrink-0" aria-label="5 étoiles">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent-stone text-accent-stone"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Commentaire client */}
                  <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Footer de la carte : Projet & Lien Google */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
                  <span className="text-accent-stone text-xs font-medium uppercase tracking-wide truncate">
                    {review.project}
                  </span>

                  {review.googleReviewUrl && (
                    <a
                      href={review.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-white/40 hover:text-accent-stone transition-colors shrink-0"
                      title={t.reviews.view_on_google}
                    >
                      <span>Google</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Badge récapitulatif élégant sous la grille */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm">
            <div className="flex gap-1" aria-label="5 étoiles sur 5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-accent-stone text-accent-stone"
                />
              ))}
            </div>
            <span className="text-white font-bold font-heading text-lg">
              {reviewsStats.averageRating.toFixed(1)} / 5
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/70 text-sm">
              {reviewsStats.totalReviews} {t.reviews.verified_badge}
            </span>
            <span className="text-white/40 hidden sm:inline">·</span>
            <a
              href={reviewsStats.googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-stone hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              {t.reviews.leave_review}
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
