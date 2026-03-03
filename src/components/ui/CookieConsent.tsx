'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function CookieConsent() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                >
                    <div className="container mx-auto max-w-5xl">
                        <div className="bg-bg-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-stone/5 rounded-full blur-3xl -mr-32 -mt-32 transition-colors duration-500 group-hover:bg-accent-stone/10" />

                            <div className="flex items-start gap-4 relative z-10">
                                <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-xl bg-accent-stone/10 text-accent-stone shrink-0">
                                    <Cookie className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                        <Cookie className="h-5 w-5 md:hidden text-accent-stone" />
                                        Cookies & Confidentialité
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
                                        {t.cookieConsent.message}{' '}
                                        <Link href="/confidentialite" className="text-accent-stone hover:underline font-medium">
                                            {t.cookieConsent.privacy}
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto relative z-10">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleDecline}
                                    className="w-full sm:w-auto border-white/10 text-white/60 hover:text-white hover:bg-white/5"
                                >
                                    {t.cookieConsent.decline}
                                </Button>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={handleAccept}
                                    className="w-full sm:w-auto px-8"
                                >
                                    {t.cookieConsent.accept}
                                </Button>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="absolute -top-4 -right-4 md:static p-2 text-white/40 hover:text-white transition-colors"
                                    aria-label="Fermer"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
