'use client';

import Markdown from 'react-markdown';
import { articleHref, localizedHref } from '@/lib/i18n/routing';
import Image from 'next/image';
import { Calendar, ChevronLeft, Quote } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { BlogPost } from '@/data/blog-data';

interface BlogContentClientProps {
    post: BlogPost;
    posts: BlogPost[];
}

export function BlogContentClient({ post, posts }: BlogContentClientProps) {
    const { language } = useLanguage();

    // Localized UI Labels
    const labels = {
        fr: { notFound: "Article non trouvé", back: "Retour au blog", project: "Un projet en tête ?", estimate: "Obtenez une estimation gratuite pour vos travaux à Mulhouse, Riedisheim ou Illzach.", getQuote: "Demander mon devis", recommended: "Articles recommandés", contactUs: "Discuter de votre projet →", mission: "Chaque projet est unique. Notre mission est de transformer votre habitat avec précision et passion, partout dans le Haut-Rhin." },
        en: { notFound: "Article not found", back: "Back to blog", project: "A project in mind?", estimate: "Get a free estimate for your work in Mulhouse, Riedisheim, or Illzach.", getQuote: "Request my quote", recommended: "Recommended articles", contactUs: "Discuss your project →", mission: "Each project is unique. Our mission is to transform your home with precision and passion, throughout the Haut-Rhin." },
        de: { notFound: "Artikel nicht gefunden", back: "Zurück zum Blog", project: "Ein Projekt im Sinn?", estimate: "Erhalten Sie eine kostenlose Schätzung für Ihre Arbeiten in Mulhouse, Riedisheim oder Illzach.", getQuote: "Angebot anfordern", recommended: "Empfohlene Artikel", contactUs: "Ihr Projekt besprechen →", mission: "Jedes Projekt ist einzigartig. Unsere Mission ist es, Ihr Zuhause mit Präzision und Leidenschaft im gesamten Haut-Rhin zu transformieren." },
        tr: { notFound: "Makale bulunamadı", back: "Blog'a dön", project: "Aklınızda bir proje mi var?", estimate: "Mulhouse, Riedisheim veya Illzach'daki çalışmalarınız için ücretsiz bir tahmin alın.", getQuote: "Teklif iste", recommended: "Önerilen makaleler", contactUs: "Projenizi tartışın →", mission: "Her proje benzersizdir. Misyonumuz, Haut-Rhin genelinde evinizi hassasiyet ve tutkuyla dönüştürmektir." }
    };

    const l = labels[language] || labels.fr;

    const renderContent = (content: string) => (
        <Markdown components={{
            h1: () => null,
            h2: ({ children }) => <h2 className="text-2xl font-bold text-white mt-10 mb-6">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-bold text-white mt-8 mb-4">{children}</h3>,
            p: ({ children }) => <p className="text-white/70 leading-relaxed mb-6 text-lg">{children}</p>,
            ul: ({ children }) => <ul className="list-disc pl-6 text-white/70 space-y-3 mb-6">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-6 text-white/70 space-y-3 mb-6">{children}</ol>,
            a: ({ href, children }) => <Link className="text-accent-stone underline underline-offset-4 hover:text-white" href={href?.startsWith('#') ? localizedHref(`/${href}`, language) : href ?? localizedHref('/blog', language)}>{children}</Link>,
        }}>{content}</Markdown>
    );

    return (
        <div className="max-w-4xl mx-auto">
            <Link
                href={localizedHref('/blog', language)}
                className="inline-flex items-center gap-2 text-white/40 hover:text-accent-stone transition-colors mb-12 group"
            >
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {l.back}
            </Link>

            <div className="mb-12">
                <div className="flex items-center gap-4 text-accent-stone text-sm font-bold uppercase tracking-widest mb-6">
                    <span className="bg-accent-stone/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="flex items-center gap-2 text-white/40">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : language === 'tr' ? 'tr-TR' : 'fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
                    {post.title}
                </h1>
            </div>

            <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 896px"
                    className="object-cover"
                    priority
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <article className="lg:col-span-8">
                    <div className="prose prose-invert prose-lg max-w-none">
                        {renderContent(post.content)}
                        <nav aria-label="Prestations MP Carrelage" className="mt-10 border-t border-white/10 pt-6 flex flex-wrap gap-4 text-accent-stone">
                            <Link href="/carrelage-interieur">Carrelage intérieur à Mulhouse</Link>
                            <Link href="/salle-de-bain">Salle de bain et douche à l’italienne</Link>
                            <Link href="/carrelage-exterieur">Terrasses et carrelage extérieur</Link>
                        </nav>
                    </div>

                    <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center gap-8">
                        <div className="relative h-24 w-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent-stone">
                            <Image
                                src="/images/logo.png"
                                alt="MP Carrelage"
                                fill
                    sizes="(max-width: 1023px) 100vw, 896px"
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">Expertise MP Carrelage</h4>
                            <p className="text-white/60 mb-4 italic flex gap-2">
                                <Quote className="h-4 w-4 text-accent-stone" />
                                {l.mission}
                            </p>
                            <Link href={localizedHref('/#contact', language)} className="text-accent-stone font-bold hover:underline">
                                {l.contactUs}
                            </Link>
                        </div>
                    </div>
                </article>

                <aside className="lg:col-span-4 self-start space-y-8">
                    <div className="p-8 rounded-3xl border border-accent-stone bg-accent-stone text-bg-dark">
                        <h3 className="text-2xl font-bold mb-4">{l.project}</h3>
                        <p className="mb-6 font-medium text-bg-dark/80">
                            {l.estimate}
                        </p>
                        <Link
                            href={localizedHref('/#contact', language)}
                            className="block w-full py-4 bg-bg-dark text-white text-center rounded-xl font-bold hover:bg-black transition-colors"
                        >
                            {l.getQuote}
                        </Link>
                    </div>

                    <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                        <h3 className="text-xl font-bold text-white mb-6">{l.recommended}</h3>
                        <div className="space-y-6">
                            {posts
                                .filter(p => p.slug !== post.slug)
                                .slice(0, 3)
                                .map(p => (
                                    <Link key={p.slug} href={articleHref(p.slug, language)} className="group block">
                                        <p className="text-xs text-accent-stone uppercase font-bold mb-1">{p.category}</p>
                                        <h4 className="text-white font-bold group-hover:text-accent-stone transition-colors line-clamp-2">
                                            {p.title}
                                        </h4>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
