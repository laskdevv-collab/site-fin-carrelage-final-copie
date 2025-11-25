import { Language } from '../i18n/translations';

export const siteConfig = {
    name: 'MP Carrelage',
    url: 'https://mp-carrelage.com',
    ogImage: '/og-image.jpg',
    description: {
        fr: "Carrelage d'exception, pose millimétrée et finitions premium. Votre expert carreleur à Mulhouse et dans toute l'Alsace. Devis gratuit.",
        en: "Exceptional tiling, millimeter precision and premium finishes. Your expert tiler in Mulhouse and throughout Alsace. Free quote.",
        de: "Außergewöhnliche Fliesen, millimetergenaue Verlegung und erstklassige Oberflächen. Ihr Experten-Fliesenleger in Mulhouse und im ganzen Elsass. Kostenloses Angebot.",
        tr: "Olağanüstü fayans, milimetrik döşeme ve birinci sınıf işçilik. Mulhouse ve tüm Alsace bölgesindeki uzman fayansçınız. Ücretsiz teklif."
    },
    keywords: {
        fr: "carrelage Mulhouse, carreleur Alsace, pose carrelage, salle de bain, terrasse, carrelage intérieur, carrelage extérieur, mosaïque, pierre naturelle, rénovation carrelage",
        en: "tiling Mulhouse, tiler Alsace, tile installation, bathroom, terrace, interior tiling, exterior tiling, mosaic, natural stone, tile renovation",
        de: "Fliesen Mulhouse, Fliesenleger Elsass, Fliesenverlegung, Badezimmer, Terrasse, Innenfliesen, Außenfliesen, Mosaik, Naturstein, Fliesenrenovierung",
        tr: "fayans Mulhouse, fayansçı Alsace, fayans döşeme, banyo, teras, iç mekan fayans, dış mekan fayans, mozaik, doğal taş, fayans yenileme"
    },
    locale: {
        fr: 'fr_FR',
        en: 'en_US',
        de: 'de_DE',
        tr: 'tr_TR'
    }
};

export function generateMetadata(lang: Language = 'fr') {
    return {
        title: `MP Carrelage | ${lang === 'fr' ? 'Artisan Carreleur Mulhouse & Alsace' :
            lang === 'en' ? 'Professional Tiler Mulhouse & Alsace' :
                lang === 'de' ? 'Professioneller Fliesenleger Mulhouse & Elsass' :
                    'Profesyonel Fayansçı Mulhouse & Alsace'}`,
        description: siteConfig.description[lang],
        keywords: siteConfig.keywords[lang],
    };
}
