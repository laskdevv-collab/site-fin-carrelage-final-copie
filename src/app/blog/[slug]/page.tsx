import { blogData } from '@/data/blog-data';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogContentClient } from '@/components/blog/BlogContentClient';
import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { getArticleTranslations, getLanguage, languages, localizedHref } from '@/lib/i18n/routing';
import { frenchOnlySeo, SITE_URL } from '@/lib/seo/pages';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { CookieConsent } from '@/components/ui/CookieConsent';

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ lang?: string | string[] }>;
}

async function resolveArticle({ params, searchParams }: Props) {
    const { slug } = await params;
    const { lang: requestedLanguage } = await searchParams;
    const group = getArticleTranslations(slug);
    if (!group) notFound();
    const inferredLanguage = languages.find(language => group[language] === slug) ?? 'fr';
    const language = requestedLanguage === undefined ? inferredLanguage : getLanguage(requestedLanguage);
    // A Turkish-only article remains Turkish; never invent a French equivalent.
    const resolvedLanguage = group[language] ? language : inferredLanguage;
    const translatedSlug = group[resolvedLanguage];
    const post = blogData[resolvedLanguage].find(candidate => candidate.slug === translatedSlug);
    if (!post) notFound();
    const path = localizedHref(`/blog/${post.slug}`, resolvedLanguage);
    if (slug !== post.slug || (requestedLanguage === undefined && resolvedLanguage !== 'fr')) permanentRedirect(path);
    const canonical = group.fr ? `/blog/${group.fr}` : path;
    return { post, language: resolvedLanguage, canonical, path };
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const { post, language, canonical, path } = await resolveArticle(props);
    return {
        ...frenchOnlySeo(canonical, language),
        title: `${post.title} | MP Carrelage`,
        description: post.metaDescription,
        openGraph: {
            title: post.title, description: post.metaDescription,
            images: [post.image], type: 'article',
            publishedTime: post.date, modifiedTime: post.updatedAt ?? post.date,
            url: `${SITE_URL}${path}`,
        },
        twitter: { card: 'summary_large_image', title: post.title, description: post.metaDescription, images: [post.image] },
    };
}

export default async function BlogPostPage(props: Props) {
    const { post, language, path } = await resolveArticle(props);
    const jsonLd = {
        '@context': 'https://schema.org', '@type': 'BlogPosting',
        headline: post.title, description: post.metaDescription,
        image: `${SITE_URL}${post.image}`, datePublished: post.date,
        dateModified: post.updatedAt ?? post.date, inLanguage: language,
        author: { '@type': 'Organization', name: 'MP Carrelage', url: SITE_URL },
        publisher: { '@type': 'Organization', name: 'MP Carrelage', logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` } },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
    };
    return (
        <LanguageProvider initialLanguage={language}>
            <div className="min-h-screen bg-bg-dark flex flex-col">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
                <Navbar />
                <main className="flex-grow pt-32 pb-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <BlogContentClient post={post} posts={blogData[language]} />
                    </div>
                </main>
                <Footer />
                <CookieConsent />
            </div>
        </LanguageProvider>
    );
}
