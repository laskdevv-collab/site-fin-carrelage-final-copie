import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import Link from 'next/link';
import { Suspense } from 'react';

export default function NotFound() {
    return (
        <LanguageProvider initialLanguage="fr">
            <div className="min-h-screen bg-bg-dark flex flex-col">
                <Suspense fallback={<div className="h-20" />}>
                    <Navbar />
                </Suspense>
                <main className="flex-grow flex flex-col items-center justify-center p-4">
                    <h1 className="text-6xl font-heading font-bold text-white mb-4">404</h1>
                    <p className="text-xl text-white/60 mb-8 text-center max-w-md">
                        Oups ! La page que vous recherchez semble s'être volatilisée.
                    </p>
                    <Link
                        href="/"
                        className="px-8 py-3 bg-accent-stone text-bg-dark font-bold rounded-full hover:bg-white transition-colors"
                    >
                        Retour à l'accueil
                    </Link>
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}
