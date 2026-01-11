import { GalleryProject } from './supabase';

// Images locales de la galerie (utilisées quand Supabase n'est pas configuré)
export const localGalleryProjects: GalleryProject[] = [
  // =============================================
  // SALLE DE BAIN (11 images)
  // =============================================
  {
    id: 'local-1',
    title: 'Baignoire Îlot & Parement',
    category: 'Salle de bain',
    image_url: '/images/projet-carrelage-01.jpeg',
    display_order: 1,
    is_published: true,
  },
  {
    id: 'local-2',
    title: 'WC Suspendu Moderne',
    category: 'Salle de bain',
    image_url: '/images/projet-carrelage-02.jpeg',
    display_order: 2,
    is_published: true,
  },
  {
    id: 'local-3',
    title: 'WC Parement Brique',
    category: 'Salle de bain',
    image_url: '/images/projet-carrelage-03.jpeg',
    display_order: 3,
    is_published: true,
  },
  {
    id: 'local-6',
    title: 'Douche Italienne & WC',
    category: 'Salle de bain',
    image_url: '/images/projet-carrelage-06.jpeg',
    display_order: 6,
    is_published: true,
  },
  {
    id: 'local-7',
    title: 'Salle de Bain Galets',
    category: 'Salle de bain',
    image_url: '/images/projet-carrelage-07.jpeg',
    display_order: 7,
    is_published: true,
  },
  {
    id: 'local-8',
    title: 'Baignoire Îlot & Galets',
    category: 'Salle de bain',
    image_url: '/images/projet-carrelage-08.jpeg',
    display_order: 8,
    is_published: true,
  },
  {
    id: 'local-9',
    title: 'Pose en Cours',
    category: 'Salle de bain',
    image_url: '/images/projet-carrelage-09.jpeg',
    display_order: 9,
    is_published: true,
  },
  {
    id: 'local-11',
    title: 'Carreaux de Ciment Déco',
    category: 'Salle de bain',
    image_url: '/images/projet-carrelage-11.jpeg',
    display_order: 11,
    is_published: true,
  },
  {
    id: 'local-13',
    title: 'Baignoire & Carreaux Ciment',
    category: 'Salle de bain',
    image_url: '/images/projet-carrelage-13.jpeg',
    display_order: 13,
    is_published: true,
  },
  {
    id: 'local-14',
    title: 'Double Vasque Moderne',
    category: 'Salle de bain',
    image_url: '/images/projet-carrelage-14.jpeg',
    display_order: 14,
    is_published: true,
  },

  // =============================================
  // INTÉRIEUR (4 images)
  // =============================================
  {
    id: 'local-4',
    title: 'Escalier Carrelé Gris',
    category: 'Intérieur',
    image_url: '/images/projet-carrelage-04.jpeg',
    display_order: 4,
    is_published: true,
  },
  {
    id: 'local-5',
    title: 'Escalier Vue du Haut',
    category: 'Intérieur',
    image_url: '/images/projet-carrelage-05.jpeg',
    display_order: 5,
    is_published: true,
  },
  {
    id: 'local-12',
    title: 'Couloir Carreaux de Ciment',
    category: 'Intérieur',
    image_url: '/images/projet-carrelage-12.jpeg',
    display_order: 12,
    is_published: true,
  },
  {
    id: 'local-15',
    title: 'Habillage Cheminée Parement',
    category: 'Intérieur',
    image_url: '/images/projet-carrelage-15.jpeg',
    display_order: 15,
    is_published: true,
  },
];

// Fonction pour vérifier si Supabase est configuré
export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  return !!(
    url && 
    key && 
    url !== '' && 
    key !== '' &&
    !url.includes('your-') &&
    !key.includes('your-') &&
    !url.includes('placeholder')
  );
}
