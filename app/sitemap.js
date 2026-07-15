import { BAIRROS } from '@/data/bairros';

export default function sitemap() {
  const baseUrl = 'https://www.betomontadordemoveis.com.br';

  // ✅ Data dinâmica: atualiza sozinha a cada build/deploy
  const lastModifiedDate = new Date();

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

  // ❌ Removido: /sobre, /contato, /politica-privacidade, /termos-servico
  // Essas páginas não existem como rotas — são apenas âncoras (#servicos, #contato etc)
  // dentro da própria home, então não devem aparecer no sitemap.

  return [homeUrl, ...bairrosUrls];
}