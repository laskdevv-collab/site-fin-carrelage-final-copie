import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Some features may not work.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
