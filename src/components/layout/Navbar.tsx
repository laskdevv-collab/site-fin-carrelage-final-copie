'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageContext';

// navLinks moved inside component to use translations

export function Navbar() {
    const { t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: t.nav.home, href: '/' },
        { name: t.nav.expertises, href: '#expertises' },
        { name: t.nav.projects, href: '#projets' },
        { name: t.nav.process, href: '#process' },
        { name: t.nav.reviews, href: '#avis' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
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
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative h-10 w-10 md:h-12 md:w-12">
                            <Image
                                src="/images/logo.png"
                                alt="MP Carrelage"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="font-heading font-bold text-xl md:text-2xl text-white">
                            MP <span className="text-accent-stone">Carrelage</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/80 hover:text-accent-stone transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <LanguageSwitcher />
                        <Button variant="primary" size="sm" asChild>
                            <Link href="#contact">{t.nav.quote}</Link>
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                        className="fixed inset-0 z-40 bg-bg-dark pt-24 px-4 md:hidden"
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
                                <LanguageSwitcher />
                            </div>
                            <Button variant="primary" size="lg" className="w-full" asChild>
                                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
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
