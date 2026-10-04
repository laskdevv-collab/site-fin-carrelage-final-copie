export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'prix' | 'secteur' | 'technique' | 'garantie';
}

export const faqList: FAQItem[] = [
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
];
