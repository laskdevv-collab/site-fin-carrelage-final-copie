-- =============================================
-- MP CARRELAGE - MISE À JOUR DE LA GALERIE
-- =============================================
-- Exécutez ce script dans Supabase SQL Editor
-- pour corriger les images qui ne s'affichent pas
-- =============================================

-- 1. Supprimer toutes les anciennes données de la galerie
DELETE FROM gallery_projects;

-- 2. Insérer les nouvelles images avec les bons chemins
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

-- 3. Vérifier les données insérées
SELECT title, category, image_url FROM gallery_projects ORDER BY display_order;
