import { BAIRROS } from "../../data/bairros";
import { notFound } from 'next/navigation'; 
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

export async function generateStaticParams() {
  return BAIRROS.map((bairro) => ({
    local: bairro.slug, 
  }));
}

export async function generateMetadata({ params }) {
  const { local } = params;
  const bairroEncontrado = BAIRROS.find((b) => b.slug === local);

  if (!bairroEncontrado) {
    return { title: "Montador de Móveis - Área Não Encontrada" };
  }

  const nomeBairro = bairroEncontrado.nome;
  
  const tituloSEO = `Montador de Móveis em ${nomeBairro} | Orçamento Grátis (41) 99700-9479`; 
  
  const descricaoSEO = `Montador de móveis em ${nomeBairro}. Montagem rápida, segura e com preço justo. Montagem de guarda-roupa, rack, cozinha planejada e mais. Atendimento em residências e empresas. Solicite orçamento grátis!`;

  const canonicalUrl = `https://www.betomontadordemoveis.com.br/${bairroEncontrado.slug}`;

  return {
    title: tituloSEO,
    description: descricaoSEO,
    keywords: `montador de móveis em ${nomeBairro}, montador de moveis em ${nomeBairro}, montador de móveis ${nomeBairro}, montador de moveis ${nomeBairro}, montagem de móveis em ${nomeBairro}, montagem de moveis ${nomeBairro}, montador profissional ${nomeBairro}, montador de móveis perto de mim, montagem de guarda-roupa ${nomeBairro}`,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    openGraph: {
      title: `Montador de Móveis em ${nomeBairro}`,
      description: descricaoSEO,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Montador de Móveis',
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
      title: `Montador de Móveis em ${nomeBairro}`,
      description: `Montagem rápida, segura e com preço justo em ${nomeBairro}`,
    },
  };
}

export default function LocalPage({ params }) {
  const { local } = params;
  const bairroEncontrado = BAIRROS.find((b) => b.slug === local);
  
  if (!bairroEncontrado) {
    notFound(); 
  }

  const nomeBairro = bairroEncontrado.nome;
  const whatsappLink = `https://wa.me/5541997009479?text=Olá! Vim pelo site. Preciso de um orçamento de montagem de móveis em ${nomeBairro}`; 
  const canonicalUrl = `https://www.betomontadordemoveis.com.br/${bairroEncontrado.slug}`;
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Montador de Móveis em ${nomeBairro}`,
    "alternateName": "Beto Montador de Móveis",
    "image": "https://www.betomontadordemoveis.com.br/favv.png",
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
      nomeBairro,
      "Curitiba", 
      "Região Metropolitana de Curitiba"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "257"
    },
    "sameAs": [
      "https://maps.app.goo.gl/Yw22JidL5A3JVqDd6", 
      "https://www.instagram.com/betomontador/", 
      "https://www.facebook.com/betomontador/"
    ],
    "description": `Montador de móveis em ${nomeBairro}. Montagem rápida, segura e com preço justo. Atendimento confiável em residências e empresas.`,
    "serviceArea": {
      "@type": "City",
      "name": nomeBairro,
      "containedIn": {
        "@type": "State",
        "name": "Paraná"
      }
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header /> 
      
      <Hero 
        id="home"
        customArea={nomeBairro}
        whatsappLinkProp={whatsappLink} 
      />
      
      <WhyChooseUs />
      <AboutMe bairro={nomeBairro} /> 
      <Services id="servicos" />
      <FreightService id="frete" />
      <Projects id="projetos" />
      <Testimonials id="depoimentos" bairro={nomeBairro} />
      <FAQ bairro={nomeBairro} />
      <Contact id="contato" />
      
      <Footer />
      <WhatsAppButton whatsappLink={whatsappLink} />
    </main>
  );
}