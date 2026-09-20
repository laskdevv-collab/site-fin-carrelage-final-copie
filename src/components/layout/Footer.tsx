'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="bg-bg-dark border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative h-12 w-12">
                                <Image
                                    src="/images/logo.png"
                                    alt="MP Carrelage - Carreleur expert Mulhouse"
                                    fill
                                    sizes="48px"
                                    loading="lazy"
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-heading font-bold text-2xl text-white">
                                MP <span className="text-accent-stone">Carrelage</span>
                            </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            {t.footer.desc}
                        </p>
                        {/* Les liens sociaux seront ajoutés quand les profils seront créés */}
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">{t.footer.nav_title}</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-white/60 hover:text-accent-stone text-sm">{t.nav.home}</Link></li>
                            <li><Link href="#expertises" className="text-white/60 hover:text-accent-stone text-sm">{t.nav.expertises}</Link></li>
                            <li><Link href="#projets" className="text-white/60 hover:text-accent-stone text-sm">{t.nav.projects}</Link></li>
                            <li><Link href="#avis" className="text-white/60 hover:text-accent-stone text-sm">{t.nav.reviews}</Link></li>
                            <li><Link href="/blog" className="text-white/60 hover:text-accent-stone text-sm">{t.nav.blog}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">{t.footer.services_title}</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/carrelage-interieur" className="text-white/60 hover:text-accent-stone transition-colors text-sm">
                                    {t.footer.services_list[0] || 'Carrelage intérieur'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/carrelage-exterieur" className="text-white/60 hover:text-accent-stone transition-colors text-sm">
                                    {t.footer.services_list[1] || 'Terrasse & Extérieur'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/salle-de-bain" className="text-white/60 hover:text-accent-stone transition-colors text-sm">
                                    {t.footer.services_list[2] || 'Salle de bain & Douche'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/carrelage-interieur" className="text-white/60 hover:text-accent-stone transition-colors text-sm">
                                    {t.footer.services_list[3] || 'Grands Formats & Mosaïque'}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">{t.footer.contact_title}</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:0667674060" className="flex items-center gap-3 text-white/60 hover:text-accent-stone text-sm">
                                    <Phone className="h-4 w-4" /> 06 67 67 40 60
                                </a>
                            </li>
                            <li>
                                <a href="tel:0749277212" className="flex items-center gap-3 text-white/60 hover:text-accent-stone text-sm">
                                    <Phone className="h-4 w-4" /> 07 49 27 72 12
                                </a>
                            </li>
                            <li>
                                <a href="mailto:mpcarrelage68@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-accent-stone text-sm">
                                    <Mail className="h-4 w-4" /> mpcarrelage68@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-white/60 text-sm">
                                <MapPin className="h-4 w-4 mt-1" />
                                <span className="whitespace-pre-line">{t.footer.location}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs">{t.footer.rights}</p>
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="text-white/40 hover:text-white text-xs whitespace-nowrap">{t.footer.legal}</Link>
                        <Link href="/confidentialite" className="text-white/40 hover:text-white text-xs whitespace-nowrap">{t.footer.privacy}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
