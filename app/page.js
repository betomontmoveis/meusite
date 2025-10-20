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


// 🎯 METADADOS HOME - OTIMIZADOS PARA TOP 4 KEYWORDS
export const metadata = {
  // Foco: keyword 1 + 2 + localização + telefone
  title: "Montador de Móveis | Montador de Moveis em Curitiba e Região | (41) 99700-9479",
  
  // Descrição otimizada para CTR + cauda longa
  description: "Montador de móveis profissional em Curitiba. Montagem ágil, segura e com preço justo. Orçamento grátis para montagem de móveis. Atendimento confiável.",
  
  // Link canônico
  alternates: {
    canonical: 'https://www.betomontadordemoveis.com.br',
  },

  // Robots otimizado (como concorrente)
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

  // 🎯 KEYWORDS: Top 4 + variações
  keywords: "montador de móveis, montador de moveis, montador de moveis em, montador de móveis em, montagem de móveis, montador profissional, montador de móveis curitiba",

  openGraph: {
    title: "Montador de Móveis em Curitiba | Beto Montador", 
    description: "Montagem de móveis profissional com agilidade, segurança e preço justo em Curitiba.",
    url: "https://www.betomontadordemoveis.com.br",
    type: "website",
    siteName: "Beto Montador de Móveis",
    images: [
      {
        url: "https://www.betomontadordemoveis.com.br/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Montador de móveis profissional em Curitiba",
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Montador de Móveis em Curitiba",
    description: "Montagem ágil e com preço justo",
  },
};

const NOME_HOME = "Curitiba e Região";
const TELEFONE_FIXO = "+55 41 99700-9479"; 
const WHATSAPP_HOME = `https://wa.me/5541997009479?text=Olá! Vim pelo site. Preciso de um orçamento de montagem de móveis em ${NOME_HOME}`; 


// 🎯 SCHEMA MARKUP OTIMIZADO DA HOME PAGE
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Montador de Móveis Curitiba",
  "alternateName": "Beto Montador de Móveis",
  "image": "https://www.betomontadordemoveis.com.br/logo-beto-montador.png", 
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
    "reviewCount": "252"
  },
  "sameAs": [
    "https://maps.app.goo.gl/Yw22JidL5A3JVqDd6",
    "https://www.instagram.com/betomontador/",
    "https://www.facebook.com/betomontador/"
  ],
  "description": "Montador de móveis profissional em Curitiba e região. Montagem ágil, segura e com preço justo. Atendimento confiável para residências e empresas."
};

// 🎯 BREADCRUMB SCHEMA
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

// 🎯 ORGANIZATION SCHEMA - Para marca
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Beto Montador de Móveis",
  "url": "https://www.betomontadordemoveis.com.br",
  "logo": "https://www.betomontadordemoveis.com.br/logo-beto-montador.png",
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
      {/* SCHEMAS MARKUP OTIMIZADOS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* HEADER FIXO */}
      <Header />
      
      {/* 🎯 HERO - H1 DINÂMICO OTIMIZADO */}
      <Hero 
        id="home"
        customArea={NOME_HOME}
        whatsappLinkProp={WHATSAPP_HOME} 
      />
      
      {/* RESTANTE DO LAYOUT */}
      <WhyChooseUs />
      {/* CORREÇÃO AQUI: PASSANDO A PROP BAIRRO DE FORMA VÁLIDA */}
      <AboutMe bairro={NOME_HOME} /> 
      <Services id="servicos" />
      <FreightService id="frete" />
      <Projects id="projetos" />
      <Testimonials id="depoimentos" bairro={NOME_HOME} />
      <FAQ />
      <Contact id="contato" />
      
      {/* FOOTER E WHATSAPP */}
      <AreasAtendimento />
      <Footer />
      <WhatsAppButton whatsappLink={WHATSAPP_HOME} />
    </main>
  );
}