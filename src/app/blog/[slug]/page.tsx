import { blogData } from '@/data/blog-data';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogContentClient } from '@/components/blog/BlogContentClient';
import { Metadata } from 'next';
import { Language } from '@/lib/i18n/translations';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ lang?: string }>;
}

// generateMetadata for dynamic SEO
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { slug } = await params;
    const { lang: langParam } = await searchParams;
    const lang = (langParam || 'fr') as Language;
    const posts = blogData[lang] || blogData.fr;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Article non trouvé | MP Carrelage',
        };
    }

    const baseUrl = 'https://www.mp-carrelage.com';
    const canonical = `${baseUrl}/blog/${slug}${lang === 'fr' ? '' : `?lang=${lang}`}`;

    return {
        title: `${post.title} | MP Carrelage`,
        description: post.metaDescription,
        keywords: post.keywords,
        alternates: {
            canonical: canonical,
            languages: {
                'fr': `${baseUrl}/blog/${slug}`,
                'en': `${baseUrl}/blog/${slug}?lang=en`,
                'de': `${baseUrl}/blog/${slug}?lang=de`,
                'tr': `${baseUrl}/blog/${slug}?lang=tr`,
                'x-default': `${baseUrl}/blog/${slug}`,
            }
        },
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            images: [post.image],
            type: 'article',
            publishedTime: post.date,
            url: canonical,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.metaDescription,
            images: [post.image],
        }
    };
}

import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { CookieConsent } from '@/components/ui/CookieConsent';

export default async function BlogPostPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const { lang: langParam } = await searchParams;
    const lang = (langParam || 'fr') as Language;
    const posts = blogData[lang] || blogData.fr;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <LanguageProvider initialLanguage={lang}>
                <div className="min-h-screen bg-bg-dark flex flex-col items-center justify-center p-4">
                    <h1 className="text-3xl font-bold text-white mb-4">Article non trouvé</h1>
                    <Link
                        href="/blog"
                        className="text-accent-stone hover:underline flex items-center gap-2"
                    >
                        <ChevronLeft className="h-4 w-4" /> Retour au blog
                    </Link>
                </div>
            </LanguageProvider>
        );
    }

    // Structured Data (JSON-LD) for Google Rich Results
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        image: `https://www.mp-carrelage.com${post.image}`,
        datePublished: post.date,
        dateModified: new Date().toISOString().split('T')[0], // Use current date as modified
        author: {
            '@type': 'Organization',
            name: 'MP Carrelage',
            url: 'https://www.mp-carrelage.com',
            logo: 'https://www.mp-carrelage.com/images/logo.png'
        },
        publisher: {
            '@type': 'Organization',
            name: 'MP Carrelage',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.mp-carrelage.com/images/logo.png'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.mp-carrelage.com/blog/${post.slug}${lang === 'fr' ? '' : `?lang=${lang}`}`
        }
    };

    return (
        <LanguageProvider initialLanguage={lang}>
            <div className="min-h-screen bg-bg-dark flex flex-col">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Navbar />
                <main className="flex-grow pt-32 pb-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <BlogContentClient post={post} posts={posts} />
                    </div>
                </main>
                <Footer />
                <CookieConsent />
            </div>
        </LanguageProvider>
    );
}
