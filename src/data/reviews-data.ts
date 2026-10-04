export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  project: string;
  comment: string;
  verified: boolean;
}

export const reviewsStats = {
  averageRating: 5.0,
  totalReviews: 28,
  googleRating: 5.0,
  recommendationRate: '100%',
};

export const reviewsList: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Marc D.',
    city: 'Mulhouse',
    rating: 5,
    date: 'Il y a 2 semaines',
    project: 'Rénovation salle de bain & douche à l’italienne',
    comment:
      'Un travail remarquable sur notre salle de bain à Mulhouse. Musa est un véritable artisan passionné : propreté du chantier irréprochable, découpes au millimètre pour les faïences et respect scrupuleux des délais annoncés. Le résultat dépasse nos attentes, nous recommandons les yeux fermés !',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Sophie & Laurent K.',
    city: 'Riedisheim',
    rating: 5,
    date: 'Il y a 1 mois',
    project: 'Carrelage grand format XXL 120x120 (Séjour 60m²)',
    comment:
      'Pose de dalles XXL 120x120 dans tout notre rez-de-chaussée. Le rendu est spectaculaire ! Aucun défaut d’alignement ni de niveau grâce au système de nivellement professionnel. Devis clair, sans surprise, et tarif très compétitif pour un tel niveau de finition.',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Jean-Philippe M.',
    city: 'Kingersheim',
    rating: 5,
    date: 'Il y a 2 mois',
    project: 'Terrasse extérieure sur plots & margelles (45m²)',
    comment:
      'Artisan carreleur sérieux, ponctuel et de très bon conseil pour la gestion des pentes et le choix des dalles de notre terrasse extérieure. Après plusieurs intempéries, la pose reste impeccable. Travail soigné et durable.',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Céline V.',
    city: 'Illzach',
    rating: 5,
    date: 'Il y a 3 mois',
    project: 'Rénovation sol séjour, cuisine & crédence',
    comment:
      'Très satisfaite de l’intervention de MP Carrelage. Devis reçu en moins de 24h, ponctuel tous les matins et d’une grande gentillesse. Les finitions des plinthes et des joints hydrofuges sont parfaites. Un artisan de confiance comme on en trouve peu.',
    verified: true,
  },
  {
    id: 'rev-5',
    author: 'David R.',
    city: 'Saint-Louis',
    rating: 5,
    date: 'Il y a 4 mois',
    project: 'Carrelage imitation parquet & étanchéité',
    comment:
      'Pose de carrelage imitation parquet chevron dans notre appartement. Le calepinage est magnifique et les raccords entre pièces sont invisibles. Chantier laissé parfaitement propre chaque soir. Bravo pour votre savoir-faire !',
    verified: true,
  },
  {
    id: 'rev-6',
    author: 'Karim B.',
    city: 'Rixheim',
    rating: 5,
    date: 'Il y a 5 mois',
    project: 'Rénovation complète sol maison neuve (110m²)',
    comment:
      'Excellent artisan. MP Carrelage a réalisé l’ensemble du carrelage de notre construction neuve. Conseil avisé sur la colle et les joints adaptés au plancher chauffant. Chantier terminé dans les temps avec une garantie décennale rassurante.',
    verified: true,
  },
];
