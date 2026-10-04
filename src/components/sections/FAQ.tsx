'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { faqList, FAQItem } from '@/data/faq-data';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'Toutes les questions' },
    { key: 'prix', label: 'Tarifs & Devis' },
    { key: 'secteur', label: 'Zone d’intervention' },
    { key: 'technique', label: 'Technique & Formats' },
    { key: 'garantie', label: 'Garanties & Assurances' },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? faqList
      : faqList.filter((item) => item.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Structured Data for Google Rich Snippets (Schema.org FAQPage)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <Section id="faq" className="bg-bg-dark border-t border-white/5 relative overflow-hidden">
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-stone/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-12 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-stone/10 border border-accent-stone/20 text-accent-stone text-xs md:text-sm font-medium mb-4"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Foire Aux Questions</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4 tracking-tight"
        >
          Vos questions sur la pose de carrelage en Alsace
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/70 max-w-2xl mx-auto text-base md:text-lg"
        >
          Prix, délais, garanties et secteurs : tout ce que vous devez savoir avant de lancer votre projet avec MP Carrelage.
        </motion.p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 px-4 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
              activeCategory === cat.key
                ? 'bg-accent-stone text-bg-dark shadow-md font-semibold'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion Questions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openId === faq.id;
          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-white/[0.05] border-accent-stone/40 shadow-lg'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                id={`faq-question-${faq.id}`}
              >
                <span className="text-base md:text-lg font-semibold text-white font-heading">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'bg-accent-stone text-bg-dark rotate-180'
                      : 'bg-white/10 text-white/70'
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-2 text-white/80 text-sm md:text-base leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Box under FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-12 px-4 relative z-10"
      >
        <div className="bg-gradient-to-r from-accent-stone/15 via-white/[0.05] to-accent-stone/10 border border-accent-stone/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-2 flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-accent-stone" />
              Une question spécifique pour votre chantier ?
            </h3>
            <p className="text-white/70 text-sm md:text-base">
              Obtenez un devis gratuit et personnalisé sous 24h ouvrées, sans engagement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent-stone text-bg-dark font-semibold text-sm hover:bg-white transition-all shadow-md active:scale-95"
            >
              Demander mon devis
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:0667674060"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 border border-white/10 transition-all text-center"
            >
              <Phone className="w-4 h-4 text-accent-stone" />
              06 67 67 40 60
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
