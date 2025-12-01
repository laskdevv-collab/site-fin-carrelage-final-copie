'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { translations, Language } from './translations';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations['fr'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // Initialize from URL or default to 'fr'
    const langParam = searchParams.get('lang');
    const language: Language = (langParam && (langParam === 'fr' || langParam === 'en' || langParam === 'de' || langParam === 'tr'))
        ? (langParam as Language)
        : 'fr';

    const setLanguage = (lang: Language) => {
        const params = new URLSearchParams(searchParams.toString());
        if (lang === 'fr') {
            params.delete('lang');
        } else {
            params.set('lang', lang);
        }
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
