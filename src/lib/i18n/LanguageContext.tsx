'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
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

    // Use state to avoid hydration mismatch
    const [language, setLanguageState] = useState<Language>('fr');
    const [isClient, setIsClient] = useState(false);

    // Initialize on client side only
    useEffect(() => {
        setIsClient(true);
        const langParam = searchParams.get('lang');
        if (langParam && (langParam === 'fr' || langParam === 'en' || langParam === 'de' || langParam === 'tr')) {
            setLanguageState(langParam as Language);
        }
    }, [searchParams]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        const params = new URLSearchParams(searchParams.toString());
        if (lang === 'fr') {
            params.delete('lang');
        } else {
            params.set('lang', lang);
        }
        const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
        router.push(newUrl, { scroll: false });
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
