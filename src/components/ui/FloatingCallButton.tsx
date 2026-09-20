'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export function FloatingCallButton() {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.8 }}
      className="fixed bottom-6 right-6 z-40"
      aria-label="Contact téléphonique direct"
    >
      <a
        href="tel:0667674060"
        className="group relative flex items-center gap-3 bg-accent-stone text-bg-dark pl-3.5 pr-5 py-2.5 rounded-full shadow-2xl shadow-black/60 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95 backdrop-blur-md"
        aria-label="Joignez-nous directement au 06 67 67 40 60"
      >
        {/* Animated pulse badge */}
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-dark text-accent-stone group-hover:text-white transition-colors">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-stone/40 opacity-75" />
          <Phone className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
        </span>

        {/* Text information */}
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-bg-dark/70 group-hover:text-bg-dark/90">
            Joignez-nous directement !
          </span>
          <span className="text-sm font-bold tracking-tight font-heading text-bg-dark">
            06 67 67 40 60
          </span>
        </div>
      </a>
    </motion.aside>
  );
}
