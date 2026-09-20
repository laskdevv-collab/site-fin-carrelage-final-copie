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
  Home,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Maximize2,
  HelpCircle,
  Clock,
  Award,
  Flame,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carrelage Intérieur Mulhouse | Pose Grand Format XXL & Finitions 68',
  description:
    'Artisan carreleur expert en carrelage intérieur à Mulhouse (68). Pose de carrelage grand format XXL (120x120), sols chauffants, carreaux de ciment, escaliers et crédences. Devis gratuit.',
  alternates: {
    canonical: 'https://www.mp-carrelage.com/carrelage-interieur',
  },
  openGraph: {
    title: 'Carrelage Intérieur & Grand Format Mulhouse | MP Carrelage',
    description:
      'Pose millimétrée de carrelage intérieur tous formats à Mulhouse et dans toute l’Alsace. Spécialiste des grands formats et sols chauffants.',
    url: 'https://www.mp-carrelage.com/carrelage-interieur',
    type: 'website',
    images: [
      {
        url: '/images/carrelage-grand-format-riedisheim-mulhouse.jpg',
        width: 1200,
        height: 800,
        alt: 'Pose de carrelage intérieur grand format par MP Carrelage Mulhouse',
      },
    ],
  },
};

const interiorProjects = [
  {
    title: 'Carrelage Grand Format Salon',
    category: 'Intérieur',
    src: '/images/carrelage-grand-format-riedisheim-mulhouse.jpg',
    desc: 'Dalles grand format avec joints réduits pour un effet d’espace agrandi et lumineux.',
  },
  {
    title: 'Escalier Carrelé Moderne',
    category: 'Intérieur',
    src: '/images/projet-carrelage-04.jpeg',
    desc: 'Habillage complet marches et contremarches avec nez de marche profilés alu.',
  },
  {
    title: 'Couloir & Carreaux de Ciment',
    category: 'Intérieur',
    src: '/images/projet-carrelage-12.jpeg',
    desc: 'Association élégante entre parquet et tapis de carreaux de ciment décoratifs.',
  },
  {
    title: 'Habillage Cheminée en Parement',
    category: 'Intérieur',
    src: '/images/projet-carrelage-15.jpeg',
    desc: 'Pose de plaquettes de parement réfractaires sur conduit de cheminée contemporain.',
  },
  {
    title: 'Escalier Carrelé Vue Plongeante',
    category: 'Intérieur',
    src: '/images/projet-carrelage-05.jpeg',
    desc: 'Alignement rigoureux des découpes et régularité exemplaire des joints.',
  },
  {
    title: 'Crédence Cuisine Métro & Marbre',
    category: 'Intérieur',
    src: '/images/credence-cuisine-carrelage-mulhouse.jpg',
    desc: 'Protection murale et esthétique raffinée pour cuisine ouverte sur salon.',
  },
];

const faqItems = [
  {
    q: 'Quelle est la particularité de la pose de carrelage grand format (XXL) ?',
    a: 'La pose de dalles grand format (80x80, 120x120 ou plus) exige une planéité absolue du sol (ragréage fibré souvent obligatoire), un double encollage systématique avec colle déformable haute performance (C2S1 ou C2S2) et l’utilisation de croisillons autonivelants pour éviter tout désaffleurement.',
  },
  {
    q: 'Peut-on poser du carrelage sur un plancher chauffant ?',
    a: 'Oui, le carrelage en grès cérame est le meilleur revêtement pour le chauffage au sol grâce à son excellente conductivité thermique. Nous respectons un protocole rigoureux : respect des joints de dilatation et de fractionnement, primaire d’adhérence et mortier-colle spécial sols chauffants.',
  },
  {
    q: 'Comment entretenez-vous les joints de carrelage au quotidien ?',
    a: 'Pour les pièces de vie, nous utilisons des mortiers de jointoiement hydrofuges et anti-taches. Pour les zones très sollicitées ou sujettes aux graisses (cuisine), nous pouvons réaliser les joints à la résine époxy, totalement imperméable et lavable d’un simple coup d’éponge.',
  },
  {
    q: 'Proposez-vous la dépose de l’ancien carrelage ?',
    a: 'Tout à fait. Nous prenons en charge la dépose complète de votre ancien carrelage, l’évacuation des gravats en déchetterie agréée et la remise à niveau des sols avant la nouvelle pose.',
  },
];

export default function CarrelageInterieurPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pose de carrelage intérieur et grand format XXL',
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
      'Artisan carreleur expert en pose de carrelage intérieur, grand format XXL, sols chauffants et carreaux décoratifs à Mulhouse et ses environs.',
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
            <span className="text-accent-stone font-medium">Carrelage Intérieur & Grand Format</span>
          </nav>
        </div>

        {/* Hero Prestation */}
        <Section className="py-8 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
              Artisan Carreleur Mulhouse & Haut-Rhin (68)
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight leading-tight">
              Carrelage Intérieur & <br />
              <span className="text-accent-stone">Grands Formats XXL</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Donnez du cachet et de l’ampleur à vos espaces de vie. Spécialiste de la pose
              millimétrée de carrelage au sol et au mur, dalles XXL, imitation parquet, carreaux
              de ciment et parements en Alsace depuis 20 ans.
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
                <Maximize2 className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">Spécialiste XXL</p>
                <p className="text-white/60 text-xs mt-1">Carreaux jusqu’à 120x120</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">Garantie Décennale</p>
                <p className="text-white/60 text-xs mt-1">Pose conforme DTU 52.2</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <Flame className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">Sols Chauffants</p>
                <p className="text-white/60 text-xs mt-1">Colles flex haute performance</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <Clock className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">Devis sous 48h</p>
                <p className="text-white/60 text-xs mt-1">Déplacement gratuit dans le 68</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Expertise Technique Spécifique */}
        <Section className="bg-bg-dark border-t border-white/5">
          <div className="text-center mb-16">
            <p className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
              Technique & Précision
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Notre Savoir-faire en Pose Intérieure
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Chaque sol présente ses contraintes. Nous maîtrisons les protocoles les plus stricts pour garantir des joints fins, des surfaces sans défaut et une excellente tenue dans le temps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <Maximize2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Grands Formats XXL</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Pose de carreaux rectifiés grand format (60x120, 80x80, 120x120) avec système de cales autonivelantes pour une planéité sans compromis.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Joints fins et discrets (2 mm)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Double encollage systématique
                </li>
              </ul>
            </Card>

            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ragréage & Préparation</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Remise à niveau parfaite des chapes et planchers anciens par ragréage fibré autolissant pour éliminer toute bosse ou creux.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Primaire d’accrochage spécifique
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Tolérance de planéité millimétrique
                </li>
              </ul>
            </Card>

            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Planchers Chauffants</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Pose adaptée sur plancher chauffant basse température (eau ou électrique) avec colles souples C2S1 et respect des joints de dilatation.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Conductivité thermique optimale
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Résistance aux dilatations thermiques
                </li>
              </ul>
            </Card>

            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Escaliers & Parements</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Carrelage soigné d’escaliers droits ou tournants, pose de crédences de cuisine et habillage mural en pierre de parement.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Nez de marche et finitions alu
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Coupes d’onglets précises à 45°
                </li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Galerie Réalisations Intérieures */}
        <Section className="bg-bg-dark border-t border-white/5">
          <div className="text-center mb-16">
            <p className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Nos Chantiers Carrelage Intérieur à Mulhouse
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Quelques exemples de nos réalisations dans des maisons et appartements du Haut-Rhin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorProjects.map((p, idx) => (
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
                Vos Questions sur le Carrelage Intérieur
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
