import { BAIRROS } from '@/data/bairros';

export default function sitemap() {
  const baseUrl = 'https://www.betomontadordemoveis.com.br';

  // URL da home
  const homeUrl = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  };

  // URLs de todos os bairros
  const bairrosUrls = BAIRROS.map((bairro) => ({
    url: `${baseUrl}/${bairro.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // URLs de páginas estáticas (se tiver)
  const staticPages = [
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/politica-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos-servico`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [homeUrl, ...bairrosUrls, ...staticPages];
}