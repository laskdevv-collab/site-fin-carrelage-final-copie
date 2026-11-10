'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { translations, Language } from './translations';

type LanguageContextType = {
    language: Language;
    t: typeof translations['fr'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLanguage = 'fr' }: { children: ReactNode, initialLanguage?: Language }) {
    const language = initialLanguage;
    useEffect(() => { document.documentElement.lang = language; }, [language]);

    const value = {
        language,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            <div lang={language}>{children}</div>
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
