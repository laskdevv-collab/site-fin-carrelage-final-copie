'use client';

import { useState, useRef, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Language } from '@/lib/i18n/translations';
import { useRouter, usePathname } from 'next/navigation';
import { languageSwitchHref } from '@/lib/i18n/routing';

const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
];

export function LanguageSwitcher() {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const optionsId = useId();
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const pathname = usePathname();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (code: Language) => {
        setIsOpen(false);
        const url = languageSwitchHref(pathname, code);
        router.push(`${url}${url.includes('#') ? '' : window.location.hash}`, { scroll: false });
    };

    const currentLanguage = languages.find(l => l.code === language);

    return (
        <div className="relative" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all duration-300 text-white"
                aria-label="Select language"
                aria-expanded={isOpen}
                aria-controls={optionsId}
                onKeyDown={event => { if (event.key === 'Escape') setIsOpen(false); }}
            >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLanguage?.label}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={optionsId}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 py-2 rounded-xl bg-bg-dark/95 backdrop-blur-md border border-white/10 shadow-xl z-50"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className="w-full flex items-center justify-between px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors text-white/90 hover:text-white"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-lg">{lang.flag}</span>
                                    {lang.label}
                                </span>
                                {language === lang.code && (
                                    <Check className="w-4 h-4 text-accent-stone" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
