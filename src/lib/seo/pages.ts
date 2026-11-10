import type { Metadata } from 'next';
import type { Language } from '../i18n/translations';

export const SITE_URL = 'https://www.mp-carrelage.com';

export function frenchOnlySeo(path: string, language: Language = 'fr'): Metadata {
    return {
        alternates: { canonical: `${SITE_URL}${path}` },
        robots: {
            index: language === 'fr', follow: true,
            googleBot: { index: language === 'fr', follow: true, 'max-image-preview': 'large' },
        },
    };
}
