'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { localizedHref } from '@/lib/i18n/routing';
import { useLanguage } from '@/lib/i18n/LanguageContext';

// navLinks moved inside component to use translations

export function Navbar() {
    const { t, language } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const previousFocus = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const controls = () => mobileMenuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        controls()?.[0]?.focus();
        const handleKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsMobileMenuOpen(false);
            if (event.key === 'Tab') {
                const elements = controls();
                if (!elements?.length) return;
                const first = elements[0];
                const last = elements[elements.length - 1];
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
                else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', handleKey); previousFocus?.focus(); };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: t.nav.home, href: localizedHref('/', language) },
        { name: t.nav.expertises, href: localizedHref('/#expertises', language) },
        { name: t.nav.projects, href: localizedHref('/#projets', language) },
        { name: t.nav.process, href: localizedHref('/#process', language) },
        { name: t.nav.reviews, href: localizedHref('/#avis', language) },
        { name: t.nav.faq, href: localizedHref('/#faq', language) },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'bg-bg-dark/90 backdrop-blur-md py-3 shadow-lg border-b border-white/5'
                        : 'bg-transparent py-6'
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <Link href={localizedHref('/', language)} className="flex items-center gap-3">
                        <div className="relative h-10 w-10 md:h-12 md:w-12">
                            <Image
                                src="/images/logo.png"
                                alt="MP Carrelage - Carreleur expert Mulhouse"
                                fill
                                sizes="48px"
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="font-heading font-bold text-xl md:text-2xl text-white whitespace-nowrap">
                            MP <span className="text-accent-stone">Carrelage</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden xl:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/80 hover:text-accent-stone transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Suspense fallback={<div className="w-24 h-9" />}>
                            <LanguageSwitcher />
                        </Suspense>
                        <Button variant="primary" size="sm" asChild>
                            <Link href={localizedHref('/#contact', language)}>{t.nav.quote}</Link>
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="xl:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
                        aria-controls="mobile-navigation"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        id="mobile-navigation"
                        ref={mobileMenuRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation"
                        className="fixed inset-0 z-40 bg-bg-dark pt-24 px-4 pb-10 overflow-y-auto xl:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-medium text-white hover:text-accent-stone"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex justify-center">
                                <Suspense fallback={<div className="w-24 h-9" />}>
                                    <LanguageSwitcher />
                                </Suspense>
                            </div>
                            <Button variant="primary" size="lg" className="w-full" asChild>
                                <Link href={localizedHref('/#contact', language)} onClick={() => setIsMobileMenuOpen(false)}>
                                    {t.nav.quote}
                                </Link>
                            </Button>
                            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
                                <a href="tel:0667674060" className="flex items-center gap-3 text-white/80">
                                    <Phone className="h-5 w-5 text-accent-stone" />
                                    06 67 67 40 60
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
