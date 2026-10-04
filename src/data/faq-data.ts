import { Language } from '@/lib/i18n/translations';

export interface FAQItem {
  id: string;
  category: 'prix' | 'secteur' | 'technique';
  question: string;
  answer: string;
}

export const faqData: Record<Language, FAQItem[]> = {
  fr: [
    {
      id: 'faq-1',
      category: 'prix',
      question: 'Quel est le prix moyen au m² pour la pose de carrelage à Mulhouse et en Alsace ?',
      answer:
        'Le prix moyen pour la pose de carrelage par un artisan qualifié à Mulhouse se situe généralement entre 35 € et 70 € HT par m² hors fournitures. Ce tarif varie selon le format des carreaux (standard ou grand format XXL 60x120 / 120x120), la complexité du calepinage (pose droite, diagonale, décalée ou chevrons) et l’état du support (nécessité d’un ragréage ou d’une natte d’étanchéité). MP Carrelage vous fournit un devis gratuit, détaillé et sans aucun engagement sous 24h à 48h.',
    },
    {
      id: 'faq-2',
      category: 'secteur',
      question: 'Dans quelles villes du Haut-Rhin et d’Alsace intervenez-vous ?',
      answer:
        'Basés à Mulhouse, nous intervenons activement dans toute l’agglomération mulhousienne (Riedisheim, Kingersheim, Illzach, Rixheim, Wittenheim, Pfastatt, Lutterbach, Brunstatt), ainsi que dans l’ensemble du département du Haut-Rhin (Colmar, Saint-Louis, Altkirch, Cernay, Guebwiller, Thann). Nous nous déplaçons également dans le Bas-Rhin et les départements limitrophes pour les projets d’envergure.',
    },
    {
      id: 'faq-3',
      category: 'technique',
      question: 'Fournissez-vous les matériaux (colles spéciales, joints, étanchéité) ?',
      answer:
        'Oui, nous travaillons exclusivement avec des marques professionnelles de haute qualité pour garantir la durabilité : colles flexibles déformables (C2S1/C2S2 certifiées CSTB), nattes de désolidarisation et d’étanchéité sous carrelage (système SPEC), ainsi que joints hydrofuges fins ou joints époxy anti-taches. Vous pouvez fournir vos carreaux ou profiter de nos remises professionnelles négociées chez nos partenaires négociants en Alsace.',
    },
    {
      id: 'faq-5',
      category: 'technique',
      question: 'Combien de temps dure un chantier de rénovation de salle de bain ou de sol ?',
      answer:
        'Pour une rénovation complète de salle de bain (dépose de l’ancien carrelage, primaire, étanchéité douche à l’italienne, pose des faïences murales et du sol), comptez en moyenne entre 4 et 7 jours ouvrés. Pour une pièce de vie de 40 à 60 m², la pose et les finitions prennent généralement 3 à 5 jours selon les temps de séchage. Nous définissons un calendrier d’intervention clair dès la signature du devis.',
    },
    {
      id: 'faq-6',
      category: 'technique',
      question: 'Réalisez-vous la pose de carrelage grand format XXL (60x120, 120x120 cm et plus) ?',
      answer:
        'Absolument ! La pose de carrelage grand format et de dalles XXL est l’une de nos spécialités majeures. Ce type de carreau exige un outillage spécialisé (système de nivellement par croisillons autonivelants, ventouses de manutention professionnelles, double encollage obligatoire) pour garantir une planéité parfaite sans aucun désaffleurement entre les dalles.',
    },
  ],
  en: [
    {
      id: 'faq-1',
      category: 'prix',
      question: 'What is the average price per m² for tile installation in Mulhouse and Alsace?',
      answer:
        'The average price for tile installation by a qualified craftsman in Mulhouse typically ranges between €35 and €70 excl. VAT per m² (excluding tiles). This rate varies depending on tile format (standard or large XXL 60x120 / 120x120), layout complexity (straight, diagonal, staggered, or herringbone), and substrate condition (need for self-leveling compound or uncoupling membrane). MP Carrelage provides a free, itemized, and no-obligation quote within 24 to 48 hours.',
    },
    {
      id: 'faq-2',
      category: 'secteur',
      question: 'Which cities in Haut-Rhin and Alsace do you serve?',
      answer:
        'Based in Mulhouse, we actively operate throughout the greater Mulhouse area (Riedisheim, Kingersheim, Illzach, Rixheim, Wittenheim, Pfastatt, Lutterbach, Brunstatt), as well as across the entire Haut-Rhin department (Colmar, Saint-Louis, Altkirch, Cernay, Guebwiller, Thann). We also travel to Bas-Rhin and adjacent regions for larger-scale projects.',
    },
    {
      id: 'faq-3',
      category: 'technique',
      question: 'Do you supply professional materials (special adhesives, grouts, waterproofing)?',
      answer:
        'Yes, we work exclusively with high-grade professional brands to guarantee maximum durability: deformable flexible tile adhesives (C2S1/C2S2 certified), uncoupling and under-tile waterproofing membranes, as well as fine hydrophobic or stain-resistant epoxy grouts. You can supply your own tiles or benefit from our negotiated artisan trade discounts with local distributors in Alsace.',
    },
    {
      id: 'faq-5',
      category: 'technique',
      question: 'How long does a bathroom or flooring renovation project take?',
      answer:
        'For a complete bathroom overhaul (removal of old tiles, primer, walk-in shower waterproofing, wall and floor tiling), expect an average of 4 to 7 business days. For a 40 to 60 m² living room, installation and grouting usually take 3 to 5 days depending on substrate curing times. We establish a clear work schedule right upon quote approval.',
    },
    {
      id: 'faq-6',
      category: 'technique',
      question: 'Do you install large format XXL tiles (60x120, 120x120 cm and larger)?',
      answer:
        'Absolutely! Installing large format XXL tiles and slabs is one of our key masteries. This format requires specialized tooling (screw or wedge self-leveling spacers, professional suction lifters, mandatory double buttering) to ensure a perfectly flat surface with zero lippage between slabs.',
    },
  ],
  de: [
    {
      id: 'faq-1',
      category: 'prix',
      question: 'Wie hoch ist der durchschnittliche m²-Preis für Fliesenverlegung in Mulhouse und im Elsass?',
      answer:
        'Der durchschnittliche Preis für professionelle Fliesenverlegung in Mulhouse liegt in der Regel zwischen 35 € und 70 € netto pro m² ohne Material. Dieser Tarif variiert je nach Fliesenformat (Standard oder XXL-Großformat 60x120 / 120x120), Verlegemuster (gerade, diagonal, versetzt oder Fischgrät) und Untergrundbeschaffenheit (Ausgleichsmasse oder Entkopplungsmatte erforderlich). MP Carrelage erstellt Ihnen innerhalb von 24 bis 48 Stunden ein kostenloses, detailliertes und unverbindliches Angebot.',
    },
    {
      id: 'faq-2',
      category: 'secteur',
      question: 'In welchen Städten im Departement Haut-Rhin und Elsass sind Sie tätig?',
      answer:
        'Mit Sitz in Mulhouse sind wir im gesamten Großraum Mulhouse (Riedisheim, Kingersheim, Illzach, Rixheim, Wittenheim, Pfastatt, Lutterbach, Brunstatt) sowie im gesamten Departement Haut-Rhin (Colmar, Saint-Louis, Altkirch, Cernay, Guebwiller, Thann) aktiv. Für größere Bauvorhaben übernehmen wir auch Aufträge im Bas-Rhin und angrenzenden Regionen.',
    },
    {
      id: 'faq-3',
      category: 'technique',
      question: 'Liefern Sie das Montagematerial (Spezialkleber, Fugen, Abdichtung)?',
      answer:
        'Ja, wir arbeiten ausschließlich mit bewährten Profi-Herstellern für höchste Beständigkeit: hochflexible Fliesenkleber (C2S1/C2S2 zertifiziert), Entkopplungs- und Verbundabdichtungsbahnen sowie feine wasserabweisende Fugenmörtel oder fleckenresistente Epoxidharzfugen. Sie können Ihre Fliesen selbst beistellen oder von unseren Handwerkerkonditionen bei elsässischen Fachhändlern profitieren.',
    },
    {
      id: 'faq-5',
      category: 'technique',
      question: 'Wie lange dauert eine Badsanierung oder eine Bodenverlegung?',
      answer:
        'Für eine komplette Badsanierung (Rückbau der Altfliesen, Grundierung, Abdichtung der ebenerdigen Dusche, Wand- und Bodenfliesen) rechnen Sie durchschnittlich mit 4 bis 7 Werktagen. Für einen Wohnbereich von 40 bis 60 m² dauert die Verlegung und Verfugung meist 3 bis 5 Tage je nach Trocknungszeiten. Bei Auftragserteilung erhalten Sie einen klaren Bauzeitenplan.',
    },
    {
      id: 'faq-6',
      category: 'technique',
      question: 'Verlegen Sie auch großformatige XXL-Fliesen (60x120, 120x120 cm und größer)?',
      answer:
        'Selbstverständlich! Die Verlegung von XXL-Großformatfliesen und Megaslabs ist eines unserer Hauptfachgebiete. Diese Fliesen erfordern Spezialausrüstung (Nivelliersysteme mit Nivellierlaschen, Profi-Saugheber, vorgeschriebenes Buttering-Floating-Verfahren), um eine vollkommen planebene Oberfläche ohne Überzähne zu garantieren.',
    },
  ],
  tr: [
    {
      id: 'faq-1',
      category: 'prix',
      question: 'Mulhouse ve Alsace genelinde fayans döşemenin m² başına ortalama fiyatı nedir?',
      answer:
        'Mulhouse’da uzman bir usta tarafından fayans döşeme işçilik fiyatı m² başına malzeme hariç genellikle 35 € ile 70 € arasında değişmektedir. Bu fiyat, fayans ebatlarına (standart veya 60x120 / 120x120 XXL büyük boy), döşeme düzenine (düz, verev, şaşırtmalı veya balıksırtı) ve zemin durumuna (şap tesviyesi veya su yalıtım membranı ihtiyacı) göre değişir. MP Carrelage 24-48 saat içinde ücretsiz, ayrıntılı ve taahhütsüz bir teklif sunar.',
    },
    {
      id: 'faq-2',
      category: 'secteur',
      question: 'Haut-Rhin ve Alsace bölgesinde hangi şehirlerde hizmet veriyorsunuz?',
      answer:
        'Mulhouse merkezli olarak tüm Mulhouse aglomerasyonunda (Riedisheim, Kingersheim, Illzach, Rixheim, Wittenheim, Pfastatt, Lutterbach, Brunstatt) ve Haut-Rhin genelinde (Colmar, Saint-Louis, Altkirch, Cernay, Guebwiller, Thann) aktif hizmet veriyoruz. Kapsamlı projeler için Bas-Rhin ve komşu bölgelere de gitmekteyiz.',
    },
    {
      id: 'faq-3',
      category: 'technique',
      question: 'Malzemeleri (özel yapıştırıcılar, derzler, su yalıtımı) siz mi temin ediyorsunuz?',
      answer:
        'Evet, uzun ömürlü kullanım için yalnızca birinci sınıf profesyonel markalarla çalışıyoruz: yüksek esneklikte yapıştırıcı harçlar (C2S1/C2S2 sertifikalı), su yalıtım ve ayırıcı membranlar, leke tutmayan epoksi veya ince su itici derzler. Fayanslarınızı kendiniz seçebilir veya Alsace’taki toptancı iş ortaklarımızdan sağladığımız usta indirimlerinden yararlanabilirsiniz.',
    },
    {
      id: 'faq-5',
      category: 'technique',
      question: 'Bir banyo tadilatı veya zemin döşeme projesi ne kadar sürer?',
      answer:
        'Komple bir banyo tadilatı (eski fayansların sökümü, astar, İtalyan duş su yalıtımı, duvar ve zemin seramikleri) ortalama 4 ila 7 iş günü sürer. 40 ila 60 m² yaşam alanı döşemesi ve derz dolgusu kuruma sürelerine bağlı olarak 3 ila 5 gün sürer. Teklif kabul edildiğinde net bir çalışma takvimi paylaşıyoruz.',
    },
    {
      id: 'faq-6',
      category: 'technique',
      question: 'XXL büyük boy fayans döşemesi yapıyor musunuz (60x120, 120x120 cm ve üzeri)?',
      answer:
        'Kesinlikle! Büyük ebatlı XXL fayans ve porselen levha uygulamaları ana uzmanlık alanlarımızdandır. Bu ebatlar, plakalar arasında en ufak bir kot farkı kalmaması ve mükemmel düzlük elde edilmesi için özel ekipmanlar (seviye tespit klips ve takozları, profesyonel vantuzlar, çift taraflı yapıştırma) gerektirir.',
    },
  ],
};

export function getFaqList(lang: Language = 'fr'): FAQItem[] {
  return faqData[lang] || faqData.fr;
}

export const faqList = faqData.fr;
