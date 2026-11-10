import type { MetadataRoute } from 'next';
import { blogData } from '@/data/blog-data';
import { SITE_URL } from '@/lib/seo/pages';

export default function sitemap(): MetadataRoute.Sitemap {
  // Only indexable French canonical pages. Unknown modification dates are omitted.
  const pages = ['', '/salle-de-bain', '/carrelage-interieur', '/carrelage-exterieur', '/blog'];
  return [
    ...pages.map(path => ({ url: `${SITE_URL}${path}` })),
    ...blogData.fr.map(post => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.date,
    })),
  ];
}
