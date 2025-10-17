import FreightService from "./components/FreightService";
import Hero from "./components/Hero"; 
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import AreasAtendimento from "./components/AreasAtendimento";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Header from "./components/Header";


// Metadados para SEO da Home
export const metadata = {
  title: "Beto Montador de Móveis - Curitiba e Região Metropolitana",
  description: "Montagem de móveis profissional com agilidade, segurança e preço justo em Curitiba e região. Serviço confiável de Beto Montador.",
  
  // 🎯 LINK CANÔNICO ADICIONADO AQUI
  alternates: {
    canonical: 'https://www.betomontadordemoveis.com.br',
  },

  openGraph: {
    title: "Beto Montador de Móveis - Curitiba e Região Metropolitana",
    description: "Montagem de móveis profissional com agilidade, segurança e preço justo.",
    url: "https://www.betomontadordemoveis.com.br",
    type: "website",
    images: [
      {
        url: "https://www.betomontadordemoveis.com.br/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  keywords: "montador de móveis Curitiba, montagem de móveis, Beto montador",
};

const NOME_HOME = "Curitiba e Região";
const WHATSAPP_HOME = `https://wa.me/5541997009479?text=Olá! Preciso de um orçamento de montagem de móveis em ${NOME_HOME}`; 

export default function HomePage() {
  return (
    <main>
      {/* HEADER FIXO */}
      <Header />
      
      {/* 🎯 HERO - COMEÇA DIRETO, SEM WRAPPER */}
      <Hero 
        id="home"
        customArea={NOME_HOME}
        whatsappLinkProp={WHATSAPP_HOME} 
      />
      
      {/* RESTANTE DO LAYOUT */}
      <WhyChooseUs />
      <Services id="servicos" />
      <FreightService id="frete" />
      <Projects id="projetos" />
      <Testimonials id="depoimentos" />
      <FAQ />
      <Contact id="contato" />
      
      {/* FOOTER E WHATSAPP */}
      <AreasAtendimento />
      <Footer />
      <WhatsAppButton whatsappLink={WHATSAPP_HOME} />
    </main>
  );
}