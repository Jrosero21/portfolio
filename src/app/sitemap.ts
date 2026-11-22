import type { MetadataRoute } from 'next';
import { caseStudies } from '@/data/projects';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://jonnyrosero.com';
  return [
    { url: `${base}/`, changeFrequency: 'monthly', priority: 1 },
    ...caseStudies.map((p) => ({ url: `${base}/work/${p.slug}/`, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ];
}
