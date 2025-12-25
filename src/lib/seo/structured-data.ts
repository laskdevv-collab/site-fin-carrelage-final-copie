import { Language } from '../i18n/translations';

export function generateOrganizationSchema(lang: Language = 'fr') {
    const descriptions = {
        fr: "MP Carrelage - Expert en pose de carrelage à Mulhouse et dans toute l'Alsace. 20 ans d'expérience.",
        en: "MP Carrelage - Expert in tile installation in Mulhouse and throughout Alsace. 20 years of experience.",
        de: "MP Carrelage - Experte für Fliesenverlegung in Mulhouse und im ganzen Elsass. 20 Jahre Erfahrung.",
        tr: "MP Carrelage - Mulhouse ve tüm Alsace bölgesinde fayans döşeme uzmanı. 20 yıllık deneyim."
    };

    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'MP Carrelage',
        description: descriptions[lang],
        url: 'https://mp-carrelage.com',
        logo: 'https://mp-carrelage.com/images/logo.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+33-6-52-18-84-07',
            contactType: 'customer service',
            areaServed: 'FR',
            availableLanguage: ['French', 'English', 'German', 'Turkish']
        },
        sameAs: [
            // Ajoutez vos réseaux sociaux ici si disponibles
            // 'https://www.facebook.com/mpcarrelage',
            // 'https://www.instagram.com/mpcarrelage'
        ]
    };
}

export function generateLocalBusinessSchema(lang: Language = 'fr') {
    const names = {
        fr: 'MP Carrelage - Carreleur Mulhouse',
        en: 'MP Carrelage - Tiler Mulhouse',
        de: 'MP Carrelage - Fliesenleger Mulhouse',
        tr: 'MP Carrelage - Fayansçı Mulhouse'
    };

    const descriptions = {
        fr: "Expert en carrelage intérieur et extérieur à Mulhouse. Salles de bain, cuisines, terrasses. Devis gratuit.",
        en: "Expert in interior and exterior tiling in Mulhouse. Bathrooms, kitchens, terraces. Free quote.",
        de: "Experte für Innen- und Außenfliesen in Mulhouse. Badezimmer, Küchen, Terrassen. Kostenloses Angebot.",
        tr: "Mulhouse'da iç ve dış mekan fayans uzmanı. Banyolar, mutfaklar, teraslar. Ücretsiz teklif."
    };

    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://mp-carrelage.com',
        name: names[lang],
        description: descriptions[lang],
        image: 'https://mp-carrelage.com/og-image.jpg',
        telephone: '+33-6-52-18-84-07',
        email: 'contact@mpcarrelage.fr',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mulhouse',
            addressRegion: 'Alsace',
            addressCountry: 'FR'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 47.750839,
            longitude: 7.335888
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 47.750839,
                longitude: 7.335888
            },
            geoRadius: '50000' // 50km en mètres
        },
        priceRange: '$$',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00'
            }
        ]
    };
}

export function generateServiceSchema(lang: Language = 'fr') {
    const services = {
        fr: [
            {
                name: 'Carrelage Intérieur',
                description: 'Pose de carrelage pour tous vos espaces intérieurs'
            },
            {
                name: 'Salle de Bain',
                description: 'Création et rénovation de salles de bain complètes'
            },
            {
                name: 'Carrelage Extérieur',
                description: 'Aménagement de terrasses et espaces extérieurs'
            },
            {
                name: 'Mosaïque',
                description: 'Pose de mosaïque décorative et artistique'
            }
        ],
        en: [
            {
                name: 'Interior Tiling',
                description: 'Tile installation for all your interior spaces'
            },
            {
                name: 'Bathroom',
                description: 'Complete bathroom creation and renovation'
            },
            {
                name: 'Exterior Tiling',
                description: 'Terrace and outdoor space development'
            },
            {
                name: 'Mosaic',
                description: 'Decorative and artistic mosaic installation'
            }
        ],
        de: [
            {
                name: 'Innenfliesen',
                description: 'Fliesenverlegung für alle Ihre Innenräume'
            },
            {
                name: 'Badezimmer',
                description: 'Vollständige Badezimmergestaltung und -renovierung'
            },
            {
                name: 'Außenfliesen',
                description: 'Terrassen- und Außenraumgestaltung'
            },
            {
                name: 'Mosaik',
                description: 'Dekorative und künstlerische Mosaikverlegung'
            }
        ],
        tr: [
            {
                name: 'İç Mekan Fayans',
                description: 'Tüm iç mekanlarınız için fayans döşeme'
            },
            {
                name: 'Banyo',
                description: 'Komple banyo oluşturma ve yenileme'
            },
            {
                name: 'Dış Mekan Fayans',
                description: 'Teras ve dış mekan geliştirme'
            },
            {
                name: 'Mozaik',
                description: 'Dekoratif ve sanatsal mozaik döşeme'
            }
        ]
    };

    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Tile Installation',
        provider: {
            '@type': 'LocalBusiness',
            name: 'MP Carrelage'
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 47.750839,
                longitude: 7.335888
            },
            geoRadius: '50000'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Tile Services',
            itemListElement: services[lang].map((service, index) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.name,
                    description: service.description
                }
            }))
        }
    };
}

export function generateBreadcrumbSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://mpcarrelage.fr'
            }
        ]
    };
}
