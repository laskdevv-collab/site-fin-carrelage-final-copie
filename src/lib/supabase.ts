import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Vérifier que les variables d'environnement sont définies
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== '' && 
  supabaseAnonKey !== '' &&
  !supabaseUrl.includes('your-') &&
  !supabaseAnonKey.includes('your-');

// Créer un client Supabase seulement si les variables sont correctement configurées
let supabase: SupabaseClient;

if (!isSupabaseConfigured) {
  console.warn('⚠️ Supabase environment variables are not set. Some features may not work.');
  console.warn('Please create a .env.local file with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
  
  // Créer un client avec des valeurs valides mais factices pour éviter l'erreur au démarrage
  // Les requêtes échoueront silencieusement mais l'application ne plantera pas
  supabase = createClient(
    'https://placeholder.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIwMDAsImV4cCI6MTk2MDc2ODAwMH0.placeholder'
  );
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

// Types for database tables
export interface ContactSubmission {
    id?: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
    created_at?: string;
    status?: 'new' | 'read' | 'replied';
}

export interface Review {
    id?: string;
    name: string;
    location: string;
    rating: number;
    text: string;
    service: string;
    created_at?: string;
    is_published?: boolean;
}

export interface GalleryProject {
    id?: string;
    title: string;
    category: 'Intérieur' | 'Extérieur' | 'Salle de bain';
    image_url: string;
    display_order?: number;
    is_published?: boolean;
    created_at?: string;
}
