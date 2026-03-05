import { blogData } from '@/data/blog-data';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogIndexClient } from '@/components/blog/BlogIndexClient';
import { Metadata } from 'next';
import { Language } from '@/lib/i18n/translations';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { CookieConsent } from '@/components/ui/CookieConsent';

interface Props {
    searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const { lang: langParam } = await searchParams;
    const lang = (langParam || 'fr') as Language;

    const meta: Record<string, { title: string, desc: string }> = {
        fr: {
            title: "Blog Carrelage Mulhouse | Conseils & Tendances Artisan Carreleur",
            desc: "Découvrez notre blog dédié au carrelage en Alsace. Conseils techniques (norme R11, étanchéité), tendances déco XXL et guides de rénovation salle de bain à Mulhouse."
        },
        en: {
            title: "Tiling Blog Mulhouse | Expert Advice & Trends Artisan Tiler",
            desc: "Discover our blog dedicated to tiling in Alsace. Technical advice (R11 standard, waterproofing), XXL decor trends and bathroom renovation guides in Mulhouse."
        },
        de: {
            title: "Fliesen Blog Mulhouse | Expertenrat & Trends Fliesenleger",
            desc: "Entdecken Sie unseren Blog rund um das Fliesenlegen im Elsass. Technische Beratung (R11-Norm, Abdichtung), XXL-Dekortrends und Badrenovierungsratgeber in Mulhouse."
        },
        tr: {
            title: "Fayans Blogu Mulhouse | Uzman Tavsiyeleri ve Trendler Fayans Ustası",
            desc: "Alsace'da fayans döşemeye adanmış blogumuzu keşfedin. Teknik tavsiyeler (R11 standardı, su yalıtımı), XXL dekor trendleri ve Mulhouse banyo yenileme rehberleri."
        }
    };

    const currentMeta = meta[lang] || meta.fr;
    const baseUrl = 'https://mp-carrelage.com';

    return {
        title: currentMeta.title,
        description: currentMeta.desc,
        alternates: {
            canonical: `${baseUrl}/blog${lang === 'fr' ? '' : `?lang=${lang}`}`,
            languages: {
                'fr': `${baseUrl}/blog`,
                'en': `${baseUrl}/blog?lang=en`,
                'de': `${baseUrl}/blog?lang=de`,
                'tr': `${baseUrl}/blog?lang=tr`,
                'x-default': `${baseUrl}/blog`,
            }
        },
        openGraph: {
            title: currentMeta.title,
            description: currentMeta.desc,
            url: `${baseUrl}/blog${lang === 'fr' ? '' : `?lang=${lang}`}`,
            type: 'website',
        }
    };
}

export default async function BlogIndex({ searchParams }: Props) {
    const { lang: langParam } = await searchParams;
    const lang = (langParam || 'fr') as Language;
    const posts = blogData[lang] || blogData.fr;

    return (
        <LanguageProvider initialLanguage={lang}>
            <div className="min-h-screen bg-bg-dark flex flex-col">
                <Navbar />
                <BlogIndexClient posts={posts} />
                <Footer />
                <CookieConsent />
            </div>
        </LanguageProvider>
    );
}
