import { MetadataRoute } from 'next';
import { blogData } from '@/data/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mp-carrelage.com';
    const languages = ['fr', 'en', 'de', 'tr'];

    // Homepage and Blog Index routes
    const baseRoutes = ['', '/blog'].flatMap((route) =>
        languages.map((lang) => {
            const url = `${baseUrl}${route}${lang === 'fr' ? '' : `?lang=${lang}`}`;
            return {
                url,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: route === '' ? 1.0 : 0.8,
            };
        })
    );

    // Dynamic Blog Post routes
    const blogPosts = languages.flatMap((lang) =>
        blogData[lang as keyof typeof blogData].map((post) => {
            const url = `${baseUrl}/blog/${post.slug}${lang === 'fr' ? '' : `?lang=${lang}`}`;
            return {
                url,
                lastModified: new Date(post.date),
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            };
        })
    );

    return [...baseRoutes, ...blogPosts];
}
