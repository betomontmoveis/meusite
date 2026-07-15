import { BAIRROS } from "./data/bairros.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const PREFIXO_ATUAL = "montador-de-moveis-";

    // Gera automaticamente: /colombo -> /montador-de-moveis-colombo
    // (um redirect 301 para cada bairro, a partir do slug antigo sem o prefixo)
    const redirectsDeBairros = BAIRROS.map((bairro) => {
      const slugAntigo = bairro.slug.startsWith(PREFIXO_ATUAL)
        ? bairro.slug.slice(PREFIXO_ATUAL.length)
        : bairro.slug;

      return {
        source: `/${slugAntigo}`,
        destination: `/${bairro.slug}`,
        permanent: true, // 301 - transfere o SEO da URL antiga para a nova
      };
    });

    return redirectsDeBairros;
  },
};

export default nextConfig;