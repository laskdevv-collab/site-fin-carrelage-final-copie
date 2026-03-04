import { blogData } from '@/data/blog-data';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogContentClient } from '@/components/blog/BlogContentClient';
import { Metadata } from 'next';
import { Language } from '@/lib/i18n/translations';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface Props {
    params: { slug: string };
    searchParams: { lang?: string };
}

// generateMetadata for dynamic SEO
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const lang = (searchParams.lang || 'fr') as Language;
    const posts = blogData[lang] || blogData.fr;
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Article non trouvé | MP Carrelage',
        };
    }

    const baseUrl = 'https://mp-carrelage.com';
    const canonical = `${baseUrl}/blog/${params.slug}${lang === 'fr' ? '' : `?lang=${lang}`}`;

    return {
        title: `${post.title} | MP Carrelage`,
        description: post.metaDescription,
        keywords: post.keywords,
        alternates: {
            canonical: canonical,
            languages: {
                'fr': `${baseUrl}/blog/${params.slug}`,
                'en': `${baseUrl}/blog/${params.slug}?lang=en`,
                'de': `${baseUrl}/blog/${params.slug}?lang=de`,
                'tr': `${baseUrl}/blog/${params.slug}?lang=tr`,
                'x-default': `${baseUrl}/blog/${params.slug}`,
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

export default function BlogPostPage({ params, searchParams }: Props) {
    const lang = (searchParams.lang || 'fr') as Language;
    const posts = blogData[lang] || blogData.fr;
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-bg-dark flex flex-col items-center justify-center p-4">
                <h1 className="text-3xl font-bold text-white mb-4">Article non trouvé</h1>
                <Link
                    href="/blog"
                    className="text-accent-stone hover:underline flex items-center gap-2"
                >
                    <ChevronLeft className="h-4 w-4" /> Retour au blog
                </Link>
            </div>
        );
    }

    // Structured Data (JSON-LD) for Google Rich Results
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        image: `https://mp-carrelage.com${post.image}`,
        datePublished: post.date,
        dateModified: new Date().toISOString().split('T')[0], // Use current date as modified
        author: {
            '@type': 'Organization',
            name: 'MP Carrelage',
            url: 'https://mp-carrelage.com',
            logo: 'https://mp-carrelage.com/images/logo.png'
        },
        publisher: {
            '@type': 'Organization',
            name: 'MP Carrelage',
            logo: {
                '@type': 'ImageObject',
                url: 'https://mp-carrelage.com/images/logo.png'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://mp-carrelage.com/blog/${post.slug}${lang === 'fr' ? '' : `?lang=${lang}`}`
        }
    };

    return (
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
        </div>
    );
}
