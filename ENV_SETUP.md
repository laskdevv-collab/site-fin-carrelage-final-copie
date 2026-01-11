# Configuration des variables d'environnement

## Problème résolu

L'erreur "supabaseUrl is required" a été corrigée. L'application peut maintenant démarrer même sans configuration Supabase, mais certaines fonctionnalités (galerie, formulaires) ne fonctionneront pas.

## Configuration Supabase (optionnel)

Pour activer toutes les fonctionnalités, vous devez configurer Supabase :

### 1. Créer un fichier `.env.local`

Créez un fichier `.env.local` à la racine du projet avec le contenu suivant :

```
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-clé-anon-ici
```

### 2. Obtenir vos clés Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un projet ou ouvrez un projet existant
3. Allez dans **Settings** > **API**
4. Copiez :
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Redémarrer le serveur

Après avoir créé le fichier `.env.local`, redémarrez le serveur de développement :

```bash
npm run dev
```

## Note

Le fichier `.env.local` est ignoré par Git (déjà configuré dans `.gitignore`) pour des raisons de sécurité.
