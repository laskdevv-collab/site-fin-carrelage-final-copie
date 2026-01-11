-- =============================================
-- MP CARRELAGE - Script SQL pour Supabase
-- =============================================
-- Copiez ce script dans l'éditeur SQL de Supabase
-- (Dashboard > SQL Editor > New Query)
-- =============================================

-- =============================================
-- 1. TABLE: gallery_projects (Galerie de projets)
-- =============================================
CREATE TABLE IF NOT EXISTS gallery_projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('Intérieur', 'Extérieur', 'Salle de bain')),
    image_url TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_gallery_projects_category ON gallery_projects(category);
CREATE INDEX IF NOT EXISTS idx_gallery_projects_published ON gallery_projects(is_published);
CREATE INDEX IF NOT EXISTS idx_gallery_projects_order ON gallery_projects(display_order);

-- Activer RLS (Row Level Security)
ALTER TABLE gallery_projects ENABLE ROW LEVEL SECURITY;

-- Politique de lecture publique (tout le monde peut voir les projets publiés)
CREATE POLICY "Projets publiés visibles par tous" ON gallery_projects
    FOR SELECT USING (is_published = true);

-- =============================================
-- 2. INSERTION DES IMAGES DE LA GALERIE
-- =============================================
-- CLASSEMENT PAR CATÉGORIE APRÈS ANALYSE DES IMAGES
-- Salle de bain: 10 images | Intérieur: 4 images

INSERT INTO gallery_projects (title, category, image_url, display_order, is_published) VALUES

-- =============================================
-- SALLE DE BAIN (10 images)
-- =============================================
('Baignoire Îlot & Parement', 'Salle de bain', '/images/projet-carrelage-01.jpeg', 1, true),
('WC Suspendu Moderne', 'Salle de bain', '/images/projet-carrelage-02.jpeg', 2, true),
('WC Parement Brique', 'Salle de bain', '/images/projet-carrelage-03.jpeg', 3, true),
('Douche Italienne & WC', 'Salle de bain', '/images/projet-carrelage-06.jpeg', 6, true),
('Salle de Bain Galets', 'Salle de bain', '/images/projet-carrelage-07.jpeg', 7, true),
('Baignoire Îlot & Galets', 'Salle de bain', '/images/projet-carrelage-08.jpeg', 8, true),
('Pose en Cours', 'Salle de bain', '/images/projet-carrelage-09.jpeg', 9, true),
('Carreaux de Ciment Déco', 'Salle de bain', '/images/projet-carrelage-11.jpeg', 11, true),
('Baignoire & Carreaux Ciment', 'Salle de bain', '/images/projet-carrelage-13.jpeg', 13, true),
('Double Vasque Moderne', 'Salle de bain', '/images/projet-carrelage-14.jpeg', 14, true),

-- =============================================
-- INTÉRIEUR (4 images)
-- =============================================
('Escalier Carrelé Gris', 'Intérieur', '/images/projet-carrelage-04.jpeg', 4, true),
('Escalier Vue du Haut', 'Intérieur', '/images/projet-carrelage-05.jpeg', 5, true),
('Couloir Carreaux de Ciment', 'Intérieur', '/images/projet-carrelage-12.jpeg', 12, true),
('Habillage Cheminée Parement', 'Intérieur', '/images/projet-carrelage-15.jpeg', 15, true);

-- Note: L'image 10 (floue) a été exclue pour la qualité


-- =============================================
-- 3. TABLE: reviews (Avis clients)
-- =============================================
CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    text TEXT NOT NULL,
    service VARCHAR(255),
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index
CREATE INDEX IF NOT EXISTS idx_reviews_published ON reviews(is_published);
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON reviews(rating);

-- Activer RLS
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Politique de lecture publique
CREATE POLICY "Avis publiés visibles par tous" ON reviews
    FOR SELECT USING (is_published = true);

-- =============================================
-- 4. INSERTION D'EXEMPLES D'AVIS
-- =============================================
INSERT INTO reviews (name, location, rating, text, service, is_published) VALUES
('Marie Dupont', 'Mulhouse', 5, 'Travail impeccable ! Le carrelage de notre salle de bain est magnifique. Très professionnel et ponctuel.', 'Salle de bain', true),
('Pierre Martin', 'Colmar', 5, 'Excellente prestation pour notre terrasse. Les finitions sont parfaites et les délais ont été respectés.', 'Terrasse extérieure', true),
('Sophie Bernard', 'Strasbourg', 5, 'MP Carrelage a transformé notre cuisine. Un travail soigné et des conseils précieux pour le choix des carreaux.', 'Cuisine', true),
('Jean-Paul Müller', 'Mulhouse', 5, 'Très satisfait de la pose du carrelage dans tout notre appartement. Rapport qualité-prix excellent.', 'Pose intérieure', true),
('Isabelle Schneider', 'Illzach', 5, 'La douche à l''italienne est exactement comme on l''imaginait. Merci pour ce travail remarquable !', 'Douche italienne', true);


-- =============================================
-- 5. TABLE: contact_submissions (Formulaire de contact)
-- =============================================
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at);

-- Activer RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Politique d'insertion publique (tout le monde peut soumettre un formulaire)
CREATE POLICY "Tout le monde peut soumettre un formulaire" ON contact_submissions
    FOR INSERT WITH CHECK (true);

-- Note: La lecture des soumissions nécessite une authentification admin
-- Vous pouvez ajouter une politique de lecture pour les utilisateurs authentifiés si nécessaire


-- =============================================
-- 6. VÉRIFICATION
-- =============================================
-- Afficher le nombre d'enregistrements créés par catégorie
SELECT 'gallery_projects' as table_name, category, COUNT(*) as count 
FROM gallery_projects 
GROUP BY category
ORDER BY category;

-- Afficher le total par table
SELECT 'Total gallery_projects' as info, COUNT(*) as count FROM gallery_projects
UNION ALL
SELECT 'Total reviews' as info, COUNT(*) as count FROM reviews
UNION ALL
SELECT 'Total contact_submissions' as info, COUNT(*) as count FROM contact_submissions;
