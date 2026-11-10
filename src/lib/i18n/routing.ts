import type { Language } from './translations';

export const languages: readonly Language[] = ['fr', 'en', 'de', 'tr'];

export function getLanguage(value?: string | string[]): Language {
    return typeof value === 'string' && languages.includes(value as Language) ? value as Language : 'fr';
}

// Explicit relationships: translated arrays have different lengths and orders.
export const articleTranslations: ReadonlyArray<Partial<Record<Language, string>>> = [
    { fr: 'choisir-carrelage-mulhouse-guide-complet', en: 'choosing-tiles-mulhouse-complete-guide', de: 'fliesen-waehlen-mulhouse-leitfaden', tr: 'mulhouse-fayans-secimi-rehberi' },
    { fr: 'avantages-carrelage-grand-format-riedisheim', en: 'benefits-large-format-tiles-riedisheim', de: 'vorteile-grossformatfliesen-riedisheim', tr: 'riedisheim-buyuk-format-fayans-avantajlari' },
    { fr: 'renover-salle-de-bain-kingersheim-guide', en: 'renovate-bathroom-kingersheim-guide', de: 'badezimmer-renovieren-kingersheim', tr: 'kingersheim-banyo-yenileme' },
    { fr: 'pourquoi-artisan-carreleur-local-illzach', en: 'why-local-tiler-illzach', de: 'warum-lokaler-fliesenleger-illzach', tr: 'illzach-yerel-fayans-ustasi' },
    { fr: 'entretien-carrelage-nettoyage-mulhouse', en: 'tile-maintenance-mulhouse', de: 'entretien-carrelage-nettoyage-mulhouse', tr: 'entretien-carrelage-nettoyage-mulhouse' },
    { fr: 'carrelage-exterieur-terrasse-alsace-bien-choisir', en: 'terrace-tiles-alsace', de: 'carrelage-exterieur-terrasse-alsace-bien-choisir', tr: 'carrelage-exterieur-terrasse-alsace-bien-choisir' },
    { fr: 'mosaique-douche-italienne-mulhouse-expert', en: 'mosaic-shower-mulhouse', de: 'mosaique-douche-italienne-mulhouse-expert', tr: 'mosaique-douche-italienne-mulhouse-expert' },
    { fr: 'etancheite-sous-carrelage-multitude-mulhouse', en: 'waterproofing-tiles-mulhouse', de: 'etancheite-sous-carrelage-multitude-mulhouse', tr: 'etancheite-sous-carrelage-multitude-mulhouse' },
    { tr: 'renovation-salle-de-bain-mulhouse-prix' },
    { tr: 'carrelage-piscine-mulhouse-securite-esthetique' },
];

export function getArticleTranslations(slug: string) {
    return articleTranslations.find(group => Object.values(group).includes(slug));
}

export function localizedHref(path: string, language: Language): string {
    const [pathname, hash] = path.split('#');
    const translated = pathname === '/' || pathname === '/blog' || pathname.startsWith('/blog/') || pathname === '/mentions-legales' || pathname === '/confidentialite';
    return `${pathname}${translated && language !== 'fr' ? `?lang=${language}` : ''}${hash ? `#${hash}` : ''}`;
}

export function articleHref(slug: string, language: Language): string {
    const translatedSlug = getArticleTranslations(slug)?.[language];
    return translatedSlug ? localizedHref(`/blog/${translatedSlug}`, language) : localizedHref('/blog', language);
}

export function languageSwitchHref(pathname: string, language: Language): string {
    if (pathname.startsWith('/blog/')) return articleHref(decodeURIComponent(pathname.slice(6)), language);
    if (['/carrelage-interieur', '/carrelage-exterieur', '/salle-de-bain'].includes(pathname) && language !== 'fr') return localizedHref('/#expertises', language);
    return localizedHref(pathname, language);
}
