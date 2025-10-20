import { BAIRROS } from '@/data/bairros';

export default function sitemap() {
  const baseUrl = 'https://www.betomontadordemoveis.com.br';
  const lastModifiedDate = new Date('2025-10-20');

  const homeUrl = {
    url: `${baseUrl}`,
    lastModified: lastModifiedDate,
    changeFrequency: 'weekly',
    priority: 1.0,
  };

  const bairrosUrls = BAIRROS.map((bairro) => ({
    url: `${baseUrl}/${bairro.slug}`,
    lastModified: lastModifiedDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const staticPages = [
    {
      url: `${baseUrl}/sobre`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/politica-privacidade`,
      lastModified: lastModifiedDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos-servico`,
      lastModified: lastModifiedDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [homeUrl, ...bairrosUrls, ...staticPages];
}
