'use client';

import { BlogCard } from '@/components/ui/BlogCard';
import { BlogPost } from '@/data/blog-data';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface BlogIndexClientProps {
    posts: BlogPost[];
}

export function BlogIndexClient({ posts }: BlogIndexClientProps) {
    const { language } = useLanguage();

    const headers: Record<string, { title: string, span: string, desc: string }> = {
        fr: { title: "Notre", span: "Blog", desc: "Conseils techniques, tendances déco et guides pratiques pour vos projets de carrelage en Alsace. Découvrez l'avis d'un expert pour réussir vos travaux à Mulhouse et ses environs." },
        en: { title: "Our", span: "Blog", desc: "Technical advice, decor trends, and practical guides for your tiling projects in Alsace. Discover expert insights to succeed in your work in Mulhouse and surroundings." },
        de: { title: "Unser", span: "Blog", desc: "Technische Beratung, Dekortrends und praktische Leitfäden für Ihre Fliesenprojekte im Elsass. Entdecken Sie Expertenwissen für Ihre Arbeiten in Mulhouse und Umgebung." },
        tr: { title: "Bizim", span: "Blogumuz", desc: "Alsace'daki fayans projeleriniz için teknik tavsiyeler, dekor trendleri ve pratik rehberler. Mulhouse ve çevresindeki çalışmalarınızda başarı için uzman görüşlerini keşfedin." }
    };

    const header = headers[language] || headers.fr;

    return (
        <main className="flex-grow pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        {header.title} <span className="text-accent-stone">{header.span}</span> Expertise
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed">
                        {header.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </main>
    );
}
