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
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 pointer-events-none"
                >
                    <div className="bg-bg-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5 md:p-6 relative overflow-hidden group pointer-events-auto">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-accent-stone/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />

                        <div className="flex items-start gap-3 relative z-10 mb-4">
                            <div className="h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-stone/10 text-accent-stone flex">
                                <Cookie className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-white font-bold text-base flex items-center gap-2">
                                    Cookies & Confidentialité
                                </h3>
                                <p className="text-white/60 text-xs leading-relaxed">
                                    {t.cookieConsent.message}{' '}
                                    <Link href="/confidentialite" className="text-accent-stone hover:underline font-medium">
                                        {t.cookieConsent.privacy}
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 relative z-10 pt-2 border-t border-white/5">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleDecline}
                                className="flex-1 border-white/10 text-white/60 hover:text-white hover:bg-white/5 text-xs py-2"
                            >
                                {t.cookieConsent.decline}
                            </Button>
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={handleAccept}
                                className="flex-1 text-xs py-2"
                            >
                                {t.cookieConsent.accept}
                            </Button>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="p-1.5 text-white/40 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                                aria-label="Fermer"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
