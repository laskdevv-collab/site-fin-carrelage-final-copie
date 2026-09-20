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
  Droplets,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  Award,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carreleur Salle de Bain Mulhouse | Douche Italienne & Rénovation 68',
  description:
    'Artisan carreleur expert en pose de carrelage de salle de bain et douche italienne à Mulhouse (68). Étanchéité garantie SPEC/SEL, mosaïque, niches et carrelage grand format. Devis gratuit.',
  alternates: {
    canonical: 'https://www.mp-carrelage.com/salle-de-bain',
  },
  openGraph: {
    title: 'Carreleur Salle de Bain Mulhouse | MP Carrelage',
    description:
      'Spécialiste de la rénovation de salle de bain et pose de douche à l’italienne à Mulhouse et dans le Haut-Rhin. 20 ans d’expertise artisanale.',
    url: 'https://www.mp-carrelage.com/salle-de-bain',
    type: 'website',
    images: [
      {
        url: '/images/projet-carrelage-01.jpeg',
        width: 1200,
        height: 800,
        alt: 'Rénovation salle de bain haut de gamme par MP Carrelage Mulhouse',
      },
    ],
  },
};

const bathroomProjects = [
  {
    title: 'Baignoire Îlot & Parement Mural',
    category: 'Salle de bain',
    src: '/images/projet-carrelage-01.jpeg',
    desc: 'Pose soignée avec carrelage grand format et mur de parement minéral.',
  },
  {
    title: 'Douche Italienne & Carreaux Déco',
    category: 'Salle de bain',
    src: '/images/projet-carrelage-06.jpeg',
    desc: 'Étanchéité sous carrelage complète, receveur encastré et niche carrelée.',
  },
  {
    title: 'Sol Galets & Baignoire Design',
    category: 'Salle de bain',
    src: '/images/projet-carrelage-08.jpeg',
    desc: 'Sol antidérapant en galets naturels avec jointoiement hydrofuge résistant.',
  },
  {
    title: 'Double Vasque & Finitions Marbre',
    category: 'Salle de bain',
    src: '/images/projet-carrelage-14.jpeg',
    desc: 'Alignement millimétré des veines pour un rendu luxueux et contemporain.',
  },
  {
    title: 'Carreaux de Ciment Décoratifs',
    category: 'Salle de bain',
    src: '/images/projet-carrelage-11.jpeg',
    desc: 'Harmonie entre motifs rétro et faïence moderne grand format.',
  },
  {
    title: 'Salle de Bain Galets & Douche XXL',
    category: 'Salle de bain',
    src: '/images/projet-carrelage-07.jpeg',
    desc: 'Création d’un espace bien-être avec matériaux naturels et étanchéité renforcée.',
  },
];

const faqItems = [
  {
    q: 'Quel est le prix pour carreler une salle de bain à Mulhouse ?',
    a: 'Le tarif varie selon l’état du support, la nécessité d’un système d’étanchéité liquide (SPEC/SEL) et le format des carreaux (faïence standard, mosaïque ou plaques XXL). Chez MP Carrelage, le déplacement et le devis détaillé à Mulhouse et ses environs sont 100 % gratuits et sans engagement.',
  },
  {
    q: 'Comment garantissez-vous l’étanchéité d’une douche à l’italienne ?',
    a: 'Nous appliquons systématiquement un Système de Protection à l’Eau sous Carrelage (SPEC) ou un Système d’Étanchéité Liquide (SEL) avec bandes de pontage dans tous les angles et autour des bondes, conformément aux Règles de l’Art et aux normes DTU 52.2.',
  },
  {
    q: 'Combien de temps durent les travaux de carrelage d’une salle de bain ?',
    a: 'Pour une salle de bain complète (dépose éventuelle, préparation des supports, étanchéité, pose des carreaux et réalisation des joints), il faut compter en moyenne entre 4 et 7 jours ouvrés selon la surface et les spécificités techniques.',
  },
  {
    q: 'Intervenez-vous en dehors de Mulhouse ?',
    a: 'Oui, nous intervenons dans tout le Haut-Rhin (68) : Riedisheim, Kingersheim, Illzach, Wittenheim, Rixheim, Saint-Louis, Altkirch, Colmar et leurs communes limitrophes.',
  },
];

export default function SalleDeBainPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pose de carrelage salle de bain et douche italienne',
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
      'Création et rénovation complète de carrelage pour salle de bain, douche à l’italienne, étanchéité sous carrelage et faïence à Mulhouse.',
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
            <span className="text-accent-stone font-medium">Salle de Bain & Douche Italienne</span>
          </nav>
        </div>

        {/* Hero Prestation */}
        <Section className="py-8 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
              Artisan Carreleur Mulhouse & Haut-Rhin (68)
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight leading-tight">
              Carrelage Salle de Bain & <br />
              <span className="text-accent-stone">Douche à l’Italienne</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Création et rénovation de salles de bains contemporaines. Maîtrise parfaite de
              l’étanchéité sous carrelage (norme DTU), pose de formats XXL, galets et faïence
              haut de gamme pour un rendu durable et élégant.
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
                <ShieldCheck className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">Garantie Décennale</p>
                <p className="text-white/60 text-xs mt-1">Travaux certifiés et assurés</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <Droplets className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">Étanchéité SPEC / SEL</p>
                <p className="text-white/60 text-xs mt-1">Zéro infiltration garanti</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <Clock className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">Devis Rapide sous 48h</p>
                <p className="text-white/60 text-xs mt-1">Déplacement gratuit dans le 68</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <Award className="h-6 w-6 text-accent-stone mb-2" />
                <p className="font-semibold text-white text-sm">20 Ans de Métier</p>
                <p className="text-white/60 text-xs mt-1">Finitions millimétrées</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Expertise Technique Spécifique */}
        <Section className="bg-bg-dark border-t border-white/5">
          <div className="text-center mb-16">
            <p className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
              Savoir-faire artisanal
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Nos Prestations Salle de Bain à Mulhouse
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Chaque détail compte dans une pièce d’eau. Nous mettons en œuvre les meilleures techniques de pose pour allier esthétique moderne et longévité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Douches à l’Italienne</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Receveurs prêts à carreler de plain-pied, caniveaux de douche intégrés, pentes d’écoulement parfaites et raccordements soignés.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Plain-pied sans rupture de seuil
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Caniveau inox design ou grille carrée
                </li>
              </ul>
            </Card>

            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Étanchéité sous Carrelage</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Application de membranes et résines liquides d’étanchéité avec bandes d’armature dans tous les angles critiques.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Système SPEC / SEL certifié
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Protection totale contre les moisissures
                </li>
              </ul>
            </Card>

            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mosaïque & Parements</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Pose artistique de mosaïques sur trame, galets au sol, crédences décoratives et habillages muraux texturés.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Joints résine époxy anti-taches
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Coupes d’angles soignées à 45°
                </li>
              </ul>
            </Card>

            <Card className="h-full hover:border-accent-stone/30">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-stone/10 text-accent-stone">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Niches & Caissons</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Création et habillage de niches encastrées de rangement dans la douche, coffrages de WC suspendus et bâtis-supports.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Profilés aluminium anodisé ou inox
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-stone shrink-0" />
                  Finitions haut de gamme sur-mesure
                </li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Galerie Réalisations Salles de Bain */}
        <Section className="bg-bg-dark border-t border-white/5">
          <div className="text-center mb-16">
            <p className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Nos Réalisations de Salles de Bains en Alsace
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Découvrez nos chantiers récents réalisés à Mulhouse, Riedisheim, Kingersheim et dans tout le Haut-Rhin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bathroomProjects.map((p, idx) => (
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
                Vos Questions sur le Carrelage de Salle de Bain
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
