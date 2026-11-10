# Corrections MP Carrelage — 10 novembre 2026

Périmètre retenu : référencement français uniquement ; traductions accessibles aux visiteurs et exclues de l’index. Dyvase est hors de cette intervention.

## Corrections

- Les articles inexistants renvoient une vraie réponse 404 avec `notFound()` ; les métadonnées sont résolues avant l’envoi du statut HTTP.
- Les relations entre traductions sont explicites, indépendantes de l’ordre des tableaux. Les anciennes combinaisons de slug et de langue redirigent vers l’article traduit existant.
- Les traductions portent `noindex, follow` dans les métadonnées et un en-tête complémentaire. Robots.txt permet leur exploration pour que Google lise cette directive. Les versions françaises restent indexables et canoniques.
- Le sitemap contient uniquement les 13 pages françaises indexables ; les pages légales sont exclues. Aucune date de modification inconnue n’est inventée. Les dates d’édition des articles français sont fixées à cette intervention, jamais recalculées quotidiennement.
- La langue est validée côté serveur. Un paramètre invalide ou répété n’entraîne plus d’accès incorrect aux traductions. Les pages de prestations restent françaises.
- La navigation, les recommandations et les liens d’articles conservent la langue et ciblent des sections existantes. Le rendu Markdown conserve les listes et les liens qui étaient auparavant perdus.
- Le menu passe en version mobile avant de déborder ; la galerie et le menu prennent en charge le clavier, la fermeture par Échap et le retour du focus. Le bouton d’appel est plus compact sur petit écran.
- Le formulaire valide les champs côté client et serveur, échappe le contenu des e-mails, refuse les charges excessives et certaines soumissions automatisées. Il n’annonce plus un succès quand les deux canaux de réception ont échoué. Le repli client Supabase qui pouvait masquer un échec est supprimé.
- Le chargement des outils de mesure attend le consentement. Le choix peut être rouvert depuis le pied de page et retiré.
- Les dépendances ont été mises à jour dans leurs versions compatibles ; Next.js est passé à 16.4.6. Un correctif ciblé de dépendance ESLint supprime la vulnérabilité restante de minimatch. Les erreurs et avertissements de lint ont été corrigés.

## Vérifications locales

- `npm run lint` : réussi, sans erreur ni avertissement.
- `npm run typecheck` : réussi.
- `npm test` : cinq tests réussis couvrant langues invalides, toutes les relations de traduction, changements de langue, validation des demandes et échappement HTML.
- `npm run build` : compilation de production réussie.
- `python tests/check_site.py` : 13 pages indexables, 15 destinations internes, sept scénarios de redirection, vraies 404, exclusions noindex, sitemap et robots.txt conformes. Les cas de refus et d’échec du formulaire sont testés uniquement sur le serveur local sans identifiants.
- `npm audit` et `npm audit --omit=dev` : aucune vulnérabilité signalée au moment des vérifications.
- Contrôle visuel dans Opera : accueil, changement de langue, ancien lien allemand, retour au français, article, menu mobile et accès au formulaire depuis l’article.

Aucun e-mail de test réel n’a été envoyé et aucune demande fictive n’a été enregistrée dans la base de production. Les identifiants restent dans les variables Vercel existantes.

## Search Console et limites

Après publication, contrôler le sitemap canonique, les URL françaises prioritaires et l’exploration des anciennes variantes. Une redirection ou une page volontairement `noindex` doit rester exclue ; il ne faut pas chercher à indexer toutes les URL connues.

Les statuts historiques de Search Console évoluent après les prochaines explorations de Google. Aucune intervention ne garantit une indexation immédiate ou une position. Le rapport Core Web Vitals ne dispose pas encore d’un volume suffisant de données terrain pour attribuer un résultat au site.

Références : [notFound Next.js](https://nextjs.org/docs/app/api-reference/functions/not-found), [rapport d’indexation Google](https://support.google.com/webmasters/answer/7440203?hl=fr), [limites de robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro), [sitemaps et dates lastmod](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
