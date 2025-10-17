import { BAIRROS } from "../../data/bairros";
// Importações do seu Layout
import FreightService from "../components/FreightService";
import Header from "../components/Header";
import Hero from "../components/Hero"; 
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";


// 1. Geração de Rotas (SSG)
export async function generateStaticParams() {
  return BAIRROS.map((bairro) => ({
    local: bairro.slug, 
  }));
}

// 2. Geração de Metadados (SEO Nativo do Next.js)
export async function generateMetadata({ params }) {
  const { local } = params;
  const bairroEncontrado = BAIRROS.find((b) => b.slug === local);

  const nomeBairro = bairroEncontrado ? bairroEncontrado.nome : "Curitiba e Região Metropolitana";
  
  const tituloSEO = `Montador de Móveis Profissional em ${nomeBairro}`;
  const descricaoSEO = `Serviço de montagem de móveis em ${nomeBairro}. Atendimento ágil, com garantia e preço justo. Chame agora o Beto Montador!`;

  // URL canônica limpa (sem parâmetros)
  const canonicalUrl = `https://www.betomontadordemoveis.com.br/${bairroEncontrado?.slug || 'curitiba'}`;

  return {
    title: tituloSEO,
    description: descricaoSEO,
    keywords: `montador de móveis ${nomeBairro}, montagem de móveis ${nomeBairro}, Beto montador ${nomeBairro}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: tituloSEO,
      description: descricaoSEO,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: 'https://www.betomontadordemoveis.com.br/og-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// 3. O Componente de Página
export default function LocalPage({ params }) {
  const { local } = params;
  const bairroEncontrado = BAIRROS.find((b) => b.slug === local);
  
  if (!bairroEncontrado) {
    return (
      <main className="text-center p-20">
        <h1 className="text-3xl font-bold">404 | Bairro Não Atendido</h1>
      </main>
    ); 
  }

  const nomeBairro = bairroEncontrado.nome;
  const whatsappLink = `https://wa.me/5541997009479?text=Olá! Preciso de um orçamento de montagem de móveis em ${nomeBairro}`; 
  
  return (
    <main>
      {/* HEADER FIXO NO TOPO */}
      <Header /> 
      
      {/* 🎯 HERO - SEM WRAPPER EXTERNO, COMEÇA DIRETO */}
      <Hero 
        id="home"
        customArea={nomeBairro}
        whatsappLinkProp={whatsappLink} 
      />
      
      {/* RESTANTE DO CONTEÚDO */}
      <WhyChooseUs />
      <Services id="servicos" />
      <FreightService id="frete" />
      <Projects id="projetos" />
      <Testimonials id="depoimentos" />
      <FAQ />
      <Contact id="contato" />
      
      {/* FOOTER E WHATSAPP */}
      <Footer />
      <WhatsAppButton whatsappLink={whatsappLink} />
    </main>
  );
}