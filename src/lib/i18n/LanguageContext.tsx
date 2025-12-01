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
