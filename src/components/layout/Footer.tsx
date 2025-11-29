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
                                    alt="MP Carrelage"
                                    fill
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
                        <div className="flex gap-4">
                            <a href="#" className="text-white/60 hover:text-accent-stone transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-white/60 hover:text-accent-stone transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">{t.footer.nav_title}</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-white/60 hover:text-accent-stone text-sm">{t.nav.home}</Link></li>
                            <li><Link href="#expertises" className="text-white/60 hover:text-accent-stone text-sm">{t.nav.expertises}</Link></li>
                            <li><Link href="#projets" className="text-white/60 hover:text-accent-stone text-sm">{t.nav.projects}</Link></li>
                            <li><Link href="#avis" className="text-white/60 hover:text-accent-stone text-sm">{t.nav.reviews}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">{t.footer.services_title}</h3>
                        <ul className="space-y-4">
                            {t.footer.services_list.map((service, index) => (
                                <li key={index} className="text-white/60 text-sm">{service}</li>
                            ))}
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
                        <Link href="/mentions-legales" className="text-white/40 hover:text-white text-xs">{t.footer.legal}</Link>
                        <Link href="/confidentialite" className="text-white/40 hover:text-white text-xs">{t.footer.privacy}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
