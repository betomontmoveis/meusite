import FreightService from "./components/FreightService";
import Hero from "./components/Hero"; 
import WhyChooseUs from "./components/WhyChooseUs";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import AreasAtendimento from "./components/AreasAtendimento";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Header from "./components/Header";


export const metadata = {
  title: "Montador de Móveis Curitiba e Região | Orçamento Grátis (41) 99700-9479",
  description: "Serviço de montagem de móveis em Curitiba e região metropolitana. Montagem rápida, segura e com preço justo. Guarda-roupa, rack, cozinha planejada e mais. Atendimento em residências e empresas. Solicite orçamento grátis!",
  alternates: {
    canonical: 'https://www.betomontadordemoveis.com.br',
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  keywords: "montador de móveis, montador de moveis, montador de móveis curitiba, montador de moveis curitiba, montagem de móveis curitiba, montador, montador de móveis perto de mim, montagem de guarda-roupa, montador de móveis região metropolitana",
  openGraph: {
    title: "Montador de Móveis Curitiba e Região Metropolitana", 
    description: "Montagem de móveis com rapidez, segurança e preço justo em Curitiba e região.",
    url: "https://www.betomontadordemoveis.com.br",
    type: "website",
    siteName: "Montador de Móveis Curitiba",
    images: [
      {
        url: "https://www.betomontadordemoveis.com.br/favv.png", 
        width: 1200,
        height: 630,
        alt: "Montador de móveis em Curitiba e região metropolitana",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Montador de Móveis Curitiba e Região",
    description: "Montagem rápida, segura e com preço justo",
  },
};

const NOME_HOME = "Curitiba e Região";
const TELEFONE_FIXO = "+55 41 99700-9479"; 
const WHATSAPP_HOME = `https://wa.me/5541997009479?text=Olá! Vim pelo site. Preciso de um orçamento de montagem de móveis em ${NOME_HOME}`; 

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Montador de Móveis Curitiba",
  "alternateName": "Beto Montador de Móveis",
  "image": "https://www.betomontadordemoveis.com.br/favv.png", 
  "@id": "https://maps.app.goo.gl/Yw22JidL5A3JVqDd6",
  "url": "https://www.betomontadordemoveis.com.br",
  "telephone": TELEFONE_FIXO, 
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Epitácio Pessoa, 76 - Jardim Amélia",
    "addressLocality": "Pinhais",
    "addressRegion": "PR",
    "postalCode": "83330-090",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -25.426215203497453,
    "longitude": -49.15454611480604
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
    "Curitiba",
    "Pinhais",
    "Colombo",
    "São José dos Pinhais",
    "Araucária",
    "Campo Largo",
    "Campo Magro",
    "Almirante Tamandaré",
    "Fazenda Rio Grande"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "262"
  },
  "sameAs": [
    "https://maps.app.goo.gl/Yw22JidL5A3JVqDd6",
    "https://www.instagram.com/betomontador/",
    "https://www.facebook.com/betomontador/"
  ],
  "description": "Montador de móveis em Curitiba e região metropolitana. Montagem rápida, segura e com preço justo. Atendimento confiável para residências e empresas."
};

// ✅ NOVO: Schema de Service com Reviews (para estrelas no Google)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Montagem de Móveis Curitiba e Região",
  "image": "https://www.betomontadordemoveis.com.br/favv.png",
  "description": "Serviço profissional de montagem de móveis em Curitiba e região metropolitana. Guarda-roupas, racks, cozinhas planejadas e mais.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Beto Montador de Móveis",
    "telephone": "+55 41 99700-9479",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "262",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Everton Luiz"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Muito boa a montagem final do móvel"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Ângela Nunes"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Gostaria de parabenizar o Beto pelo trabalho realizado no meu apartamento, cheguei em casa estava tudo perfeito conforme solicitado, minha cozinha está linda, ele caprichou em cada detalhe, empresa de confiança, estava o tempo todo me posicionando de como iria ficar o móvel. Super indico nota 1000"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Márcia Regina Silva"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Trabalho perfeito"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jhenifer Vanessa"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Excelente trabalho vieram montar o guarda roupa da minha neném ficou perfeito são muito caprichoso limpam tudo não deixa um lixinho pra trás. Minha tv que ninguém tava conseguindo instalar pq o parafuso do suporte não dava ele veio e instalou, eles tem material deles caso não dá eles tem a solução. Super indico mesmo."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Douglas Souza"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Super recomendado um trabalho excelente"
    }
  ]
};

// ✅ NOVO: Schema de ImageObject
const imageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "url": "https://www.betomontadordemoveis.com.br/favv.png",
  "width": "1200",
  "height": "630",
  "caption": "Montador de móveis profissional em Curitiba e região metropolitana",
  "description": "Serviço de montagem de móveis em Curitiba - Beto Montador"
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
    }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Beto Montador de Móveis",
  "url": "https://www.betomontadordemoveis.com.br",
  "logo": "https://www.betomontadordemoveis.com.br/favv.png",
  "sameAs": [
    "https://www.instagram.com/betomontador/",
    "https://www.facebook.com/betomontador/",
    "https://maps.app.goo.gl/Yw22JidL5A3JVqDd6"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "telephone": TELEFONE_FIXO
  }
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Header />
      
      <Hero 
        id="home"
        customArea={NOME_HOME}
        whatsappLinkProp={WHATSAPP_HOME} 
      />
      
      <WhyChooseUs />
      <AboutMe bairro={NOME_HOME} /> 
      <Services id="servicos" />
      <FreightService id="frete" />
      <Projects id="projetos" />
      <Testimonials id="depoimentos" bairro={NOME_HOME} />
      <FAQ bairro={NOME_HOME} />
      <Contact id="contato" />
      
      <AreasAtendimento />
      <Footer />
      <WhatsAppButton whatsappLink={WHATSAPP_HOME} />
    </main>
  );
}