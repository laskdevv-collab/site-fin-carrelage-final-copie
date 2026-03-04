'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blog-data';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const { language } = useLanguage();

    // Mapping for "Read more" in different languages
    const readMoreText: Record<string, string> = {
        fr: 'Lire la suite',
        en: 'Read more',
        de: 'Weiterlesen',
        tr: 'Devamını oku'
    };

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent-stone/50 transition-all duration-300 flex flex-col h-full"
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-accent-stone text-bg-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        {post.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-white/40 text-xs mb-3">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : language === 'tr' ? 'tr-TR' : 'fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-stone transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-accent-stone font-semibold text-sm">
                    {readMoreText[language] || readMoreText.fr}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}
