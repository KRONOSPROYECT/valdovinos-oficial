import type { MetadataRoute } from 'next'

const siteUrl = 'https://valdovinos-oficial.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: '2026-08-17',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/api/autor`,
      lastModified: '2026-08-17',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/api/verificar?id=KDC-KRONOS-00001258-TIMELOCK`,
      lastModified: '2026-08-17',
      priority: 0.5,
    },
  ]
}
