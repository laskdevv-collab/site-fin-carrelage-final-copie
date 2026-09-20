import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Process } from '@/components/sections/Process';
import { Reviews } from '@/components/sections/Reviews';
import { ContactForm } from '@/components/sections/ContactForm';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import {
  Sun,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  HelpCircle,
  Clock,
  Award,
  Umbrella,
  Snowflake,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carrelage Extérieur & Terrasse Mulhouse | Pose sur Plots & Dalles 68',
  description:
    'Artisan carreleur expert en carrelage extérieur et terrasse à Mulhouse (68). Pose collée ou sur plots réglables, dalles 20 mm, tour de piscine antidérapant R11, résistance au gel. Devis gratuit.',
  alternates: {
    canonical: 'https://www.mp-carrelage.com/carrelage-exterieur',
  },
  openGraph: {
    title: 'Carrelage Extérieur & Terrasse Mulhouse | MP Carrelage',
    description:
      'Spécialiste de l’aménagement carrelé extérieur et de terrasses en Alsace. Dalles sur plots, grès cérame 2 cm, antidérapant certifié.',
    url: 'https://www.mp-carrelage.com/carrelage-exterieur',
    type: 'website',
    images: [
      {
        url: '/images/pose-carrelage-terrasse-exterieur-alsace.jpg',
        width: 1200,
        height: 800,
        alt: 'Pose de carrelage terrasse extérieure par MP Carrelage Mulhouse',
      },
    ],
  },
};

const exteriorProjects = [
  {
    title: 'Terrasse Grès Cérame 20 mm',
    category: 'Extérieur',
    src: '/images/pose-carrelage-terrasse-exterieur-alsace.jpg',
    desc: 'Pose de grandes dalles extérieures résistantes aux intempéries et au gel alsacien.',
  },
  {
    title: 'Aménagement Extérieur & Terrasse',
    category: 'Extérieur',
    src: '/images/exterieur-terrasse-bois.jpg',
    desc: 'Intégration harmonieuse entre carrelage antidérapant et architecture contemporaine.',
  },
  {
    title: 'Cour Extérieure & Allée Carrelée',
    category: 'Extérieur',
    src: '/images/exterieur-cour-beige.jpg',
    desc: 'Dalles beiges antidérapantes faciles d’entretien et résistantes aux passages réguliers.',
  },
];

const faqItems = [
  {
    q: 'Quelle est la différence entre une pose collée et une pose sur plots ?',
    a: 'La pose sur plots réglables utilise des dalles épaisses de 20 mm (2 cm) sans colle ni joint. Elle permet une évacuation naturelle des eaux de pluie en dessous, évite les fissures dues au gel et permet de masquer facilement gaines et tuyaux. La pose collée convient aux terrasses sur dalle béton neuve avec pente d’écoulement d’au moins 1,5 % et natte de drainage.',
  },
  {
    q: 'Quel niveau d’antidérapance choisir pour une terrasse ou une piscine ?',
    a: 'Pour l’extérieur, nous recommandons a minima la norme R11 (pieds chaussés) et la norme PN18 ou PN24 (pieds nus pour les plages de piscine) afin de prévenir tout risque de glissade par temps humide ou verglacé.',
  },
  {
    q: 'Le carrelage extérieur résiste-t-il au gel rigoureux en Alsace ?',
    a: 'Absolument. Nous sélectionnons exclusivement du grès cérame pleine masse classé ingélif (norme ISO 10545-12) avec un taux d’absorption d’eau quasi-nul (< 0,5 %), garantissant une résistance totale aux cycles de gel et dégel du Haut-Rhin.',
  },
  {
    q: 'Comment obtenir un devis pour ma terrasse à Mulhouse ?',
    a: 'Il vous suffit de remplir le formulaire ci-dessous ou de nous appeler au 06 67 67 40 60. Nous convenons d’un rendez-vous sur place à Mulhouse ou dans le 68 pour mesurer la surface, évaluer le support et vous transmettre une proposition chiffrée gratuite sous 48 heures.',
  },
];

export default function CarrelageExterieurPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pose de carrelage extérieur et terrasse',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'MP Carrelage',
      telephone: '+33667674060',
      url: 'https://www.mp-carrelage.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mulhouse',
        postalCode: '68100',
        addressRegion: 'Grand Est',
        addressCountry: 'FR',
      },
    },
    areaServed: ['Mulhouse', 'Riedisheim', 'Kingersheim', 'Illzach', 'Haut-Rhin', 'Alsace'],
    description:
      'Artisan carreleur expert en carrelage extérieur, dalles sur plots, terrasses et tours de piscine antidérapants à Mulhouse et dans le Haut-Rhin.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <LanguageProvider initialLanguage="fr">
      <div className="min-h-screen bg-bg-dark text-white selection:bg-accent-stone selection:text-bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main className="pt-28 md:pt-36">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 md:px-6 mb-6">
          <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
            <Link href="/" className="hover:text-accent-stone transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-accent-stone font-medium">Carrelage Extérieur & Terrasse</span>
          </nav>
        </div>

        {/* Hero Prestation */}
        <Section className="py-8 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
              Artisan Carreleur Mulhouse & Haut-Rhin (68)
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight leading-tight">
              Carrelage Extérieur & <br />
              <span className="text-accent-stone">Terrasses sur Plots</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Valorisez vos extérieurs avec des aménagements durables, esthétiques et sécurisés.
              Pose de dalles épaisses 20 mm sur plots réglables, terrasses collées avec nattes de
              drainage et tours de piscine antidérapants R11 conçus pour durer en Alsace.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Button variant="primary" size="lg" asChild>
                <Link href="#contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:0667674060">
                  <Phone className="mr-2 h-5 w-5 text-accent-stone" />
                  06 67 67 40 60
                </a>
              </Button>
            </div>

            {/* Badges de Réassurance */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <Snowflake className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">100% Ingélif</p>
                <p className="text-white/60 text-xs mt-1">Résistant aux hivers froids</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">Antidérapant R11</p>
                <p className="text-white/60 text-xs mt-1">Sécurité pieds nus / chaussés</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <Layers className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">Dalles 20 mm</p>
                <p className="text-white/60 text-xs mt-1">Sur plots réglables ou collées</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <Clock className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">Devis sous 48h</p>
                <p className="text-white/60 text-xs mt-1">Visite gratuite sur chantier</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Expertise Technique Spécifique */}
        <Section className="bg-bg-dark border-t border-white/5">
          <div className="text-center mb-16">
            <p className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
              Solutions Techniques Extérieures
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Techniques de Pose Adaptées au Climat d’Alsace
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Les écarts de température en Alsace (-15°C l’hiver à +35°C l’été) imposent une mise en œuvre irréprochable pour éviter tout décollement ou fissure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Terrasse sur Plots</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Pose à sec sur plots réglables autonivelants avec dalles en grès cérame 2 cm. Évacuation instantanée des eaux et démontabilité totale.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Zéro risque de fissuration au gel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Passage discret de câbles / tuyaux
                </li>
              </ul>
            </Card>

            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <Umbrella className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pose Collée Drainante</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Pose scellée ou collée sur dalle béton avec intégration d’une natte de désolidarisation et de drainage sous carrelage.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Gestion parfaite des pentes d’eau
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Colle flex C2S2 haute déformabilité
                </li>
              </ul>
            </Card>

            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <Sun className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plages de Piscine</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Carrelage de pourtour de piscine avec margelles sur-mesure, traitement antidérapant PN24 et résistance absolue au chlore et au sel.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Sécurité antidérapante pieds mouillés
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Margelles arrondies assorties
                </li>
              </ul>
            </Card>

            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Murs & Cuisines d’Été</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Habillage de murets extérieurs, piliers de portail, crédences de cuisine d’été et barbecues avec plaquettes de parement pierre.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Pierre naturelle ou grès cérame
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Résistant aux UV et aux intempéries
                </li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Galerie Réalisations Extérieures */}
        <Section className="bg-bg-dark border-t border-white/5">
          <div className="text-center mb-16">
            <p className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Nos Réalisations Extérieures en Alsace
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Terrasses et aménagements carrelés réalisés avec soin pour nos clients du Haut-Rhin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exteriorProjects.map((p, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-white/5 border border-white/10"
              >
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent opacity-90 p-6 flex flex-col justify-end">
                  <span className="text-accent-stone text-xs font-semibold uppercase tracking-wider mb-1">
                    {p.category}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-1">{p.title}</h3>
                  <p className="text-white/70 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ Spécifique */}
        <Section className="bg-bg-dark border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
                Questions Fréquentes
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                Vos Questions sur le Carrelage de Terrasse
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="p-6 border-white/10">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-accent-stone shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Processus */}
        <Process />

        {/* Avis Google */}
        <Reviews />

        {/* Formulaire de Contact */}
        <ContactForm />
      </main>

        <Footer />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}
