// app/[local]/page.js
import { BAIRROS } from "../../data/bairros";
import { notFound } from 'next/navigation'; 
// Importações do seu Layout
import FreightService from "../components/FreightService";
import Header from "../components/Header";
import Hero from "../components/Hero"; 
import WhyChooseUs from "../components/WhyChooseUs";
import AboutMe from "../components/AboutMe";
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

// 2. Geração de Metadados (SEO Nativo do Next.js) - OTIMIZADO
export async function generateMetadata({ params }) {
  const { local } = params;
  const bairroEncontrado = BAIRROS.find((b) => b.slug === local);

  if (!bairroEncontrado) {
    return { title: "Montador de Móveis - Área Não Encontrada" };
  }

  const nomeBairro = bairroEncontrado.nome;
  
  // 🎯 TÍTULO: Foco nas keywords mais buscadas + número de telefone (diferencial visual)
  const tituloSEO = `Montador de Móveis em ${nomeBairro} | (41) 99700-9479`; 
  
  // 🎯 DESCRIÇÃO: Otimizada para CTR + cauda longa
  const descricaoSEO = `Montador de móveis em ${nomeBairro} com montagem ágil, segura e preço justo. Orçamento grátis! Atendimento profissional.`;

  // URL canônica limpa
  const canonicalUrl = `https://www.betomontadordemoveis.com.br/${bairroEncontrado.slug}`;

  return {
    title: tituloSEO,
    description: descricaoSEO,
    // 🎯 KEYWORDS: Focar nas 4 principais buscas + variações
    keywords: `montador de móveis, montador de moveis, montador de moveis em ${nomeBairro}, montador de móveis em ${nomeBairro}, montagem de móveis ${nomeBairro}, montagem de móveis em ${nomeBairro}`,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    openGraph: {
      title: tituloSEO,
      description: descricaoSEO,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Beto Montador de Móveis',
      images: [
        {
          url: 'https://www.betomontadordemoveis.com.br/og-image.jpg', 
          width: 1200,
          height: 630,
          alt: `Montador de móveis em ${nomeBairro}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tituloSEO,
      description: descricaoSEO,
    },
  };
}

// 3. O Componente de Página
export default function LocalPage({ params }) {
  const { local } = params;
  const bairroEncontrado = BAIRROS.find((b) => b.slug === local);
  
  if (!bairroEncontrado) {
    notFound(); 
  }

  const nomeBairro = bairroEncontrado.nome;
  const whatsappLink = `https://wa.me/5541997009479?text=Olá! Preciso de um orçamento de montagem de móveis em ${nomeBairro}`; 
  const canonicalUrl = `https://www.betomontadordemoveis.com.br/${bairroEncontrado.slug}`;
  

  // 🎯 SCHEMA MARKUP OTIMIZADO - LocalBusiness + FAQPage + Breadcrumb
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Montador de Móveis em " + nomeBairro,
    "alternateName": "Beto Montador de Móveis",
    "image": "https://www.betomontadordemoveis.com.br/logo-beto-montador.png",
    "@id": "https://maps.app.goo.gl/Yw22JidL5A3JVqDd6",
    "url": canonicalUrl,
    "telephone": "+55 41 99700-9479", 
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": nomeBairro,
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [ 
      "Curitiba", "Pinhais", "Colombo", "São José dos Pinhais", "Araucária", "Campo Largo", "Campo Magro", "Almirante Tamandaré", "Fazenda Rio Grande"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "252"
    },
    "sameAs": [
      "https://maps.app.goo.gl/Yw22JidL5A3JVqDd6", 
      "https://www.instagram.com/betomontador/", 
      "https://www.facebook.com/betomontador/"
    ],
    "description": `Montador de móveis em ${nomeBairro}. Montagem ágil, segura e com preço justo. Atendimento profissional em residências e empresas.`,
    "serviceArea": {
      "@type": "City",
      "name": nomeBairro,
      "containedIn": {
        "@type": "State",
        "name": "PR"
      }
    }
  };

  // 🎯 BREADCRUMB SCHEMA - Importante para SEO Local
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.betomontadordemoveis.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `Montador de Móveis em ${nomeBairro}`,
        "item": canonicalUrl
      }
    ]
  };

  
  return (
    <main>
      {/* SCHEMA MARKUP OTIMIZADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HEADER FIXO NO TOPO */}
      <Header /> 
      
      {/* 🎯 HERO COM H1 DINÂMICO OTIMIZADO */}
      <Hero 
        id="home"
        customArea={nomeBairro}
        whatsappLinkProp={whatsappLink} 
      />
      
      {/* RESTANTE DO CONTEÚDO */}
      <WhyChooseUs />
      <AboutMe />
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