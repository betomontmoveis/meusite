"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { usePathname } from "next/navigation"; // <-- para capturar o slug da URL

// Ícone do Google colorido
const GoogleG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 533.5 544.3"
    {...props}
  >
    <path
      fill="#4285F4"
      d="M533.5 244.3c0-18-1.5-36-4.5-53.5H272v100h152c-8.5 48-36.5 88-79.5 115.5l.5 2.5 83 64c50-46 79-113 79-199z"
    />
    <path
      fill="#34A853"
      d="M272 544.3c74 0 137-24 182-65l-83-64c-25 17-59 28-99 28-76 0-141-52-164-126.5l-4-1.5-85 66c50 99 156 163 268 163z"
    />
    <path
      fill="#FBBC05"
      d="M108 301.8c-7-20-11-42-11-66s4-46 11-66L23 103.8l-4 1.5C12 153.3 0 207.3 0 248.3c0 48.5 14.5 95.5 41 138l71 52.5-4-1.5c-6-35-6-71-1-107z"
    />
    <path
      fill="#EA4335"
      d="M272 95.8c42 0 79 14 105.5 41l74-71c-46-44-109-71-179.5-71-112 0-218 64-268 163l78 61c23-74 88-126 164-126z"
    />
  </svg>
);

const testimonials = [
  {
    name: "Maria Silva",
    location: "Curitiba - PR",
    rating: 5,
    text: "Ótimo serviço, um profissional incrível! Trabalho com amor e dedicação.",
    service: "Montagem de Guarda-roupa",
  },
  {
    name: "João Santos",
    location: "Pinhais - PR",
    rating: 5,
    text: "Pontual, educado e muito caprichoso. Montou todos os móveis do meu escritório com perfeição.",
    service: "Montagem de Escritório",
  },
  {
    name: "Ana Paula",
    location: "São José dos Pinhais - PR",
    rating: 5,
    text: "Estava desesperada com móveis desmontados há semanas. Beto resolveu tudo em um dia! Muito obrigada!",
    service: "Montagem Residencial",
  },
  {
    name: "Carlos Eduardo",
    location: "Colombo - PR",
    rating: 5,
    text: "Preço justo e serviço de qualidade. Além de montar, ainda me ajudou com o transporte. Top!",
    service: "Montagem + Frete",
  },
  {
    name: "Fernanda Costa",
    location: "Curitiba - PR",
    rating: 5,
    text: "Profissional sério e comprometido. Montou a cozinha planejada inteira sem nenhum problema.",
    service: "Montagem de Cozinha",
  },
  {
    name: "Roberto Lima",
    location: "Araucária - PR",
    rating: 5,
    text: "Melhor montador que já contratei! Rápido, eficiente e deixou tudo impecável. Nota 10!",
    service: "Montagem Completa",
  },
];

const Testimonials = ({ id }) => {
  const pathname = usePathname();

  // 🔍 Captura o último segmento da URL (ex: "tingui" em /tingui)
  const slug = pathname?.split("/").filter(Boolean).pop() || "";

  // 🔤 Converte slug para nome bonito com acento e capitalização
  const bairro =
    slug && slug !== "curitiba"
      ? slug
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase())
      : "Curitiba";

  const googleReviewsLink = "https://g.page/r/CREM0fTtskMxEAI/review";

  return (
    <section
      id={id}
      className="py-20 md:py-32 bg-[#0148B2] text-white relative overflow-hidden"
    >
      {/* Efeito de fundo sutil (blobs) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F2762E] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Título e nota média */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            O Que Dizem Meus Clientes em {bairro}
          </h2>

          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl font-extrabold text-[#F2762E] mr-3">
              5.0
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[#F2762E] text-[#F2762E]"
                />
              ))}
            </div>
            <span className="text-xl font-medium ml-3 text-white/80">
              (252 Avaliações)
            </span>
          </div>
        </motion.div>

        {/* Grade de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 h-full flex flex-col"
            >
              <Quote className="w-10 h-10 text-[#F2762E] mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#F2762E] text-[#F2762E]"
                  />
                ))}
              </div>

              <p className="text-white/90 mb-6 leading-relaxed italic flex-grow">
                "{testimonial.text}"
              </p>

              <div className="border-t border-white/20 pt-4 mt-auto">
                <p className="font-bold text-white">{testimonial.name}</p>
                {/* Bairro dinâmico aqui 👇 */}
                <p className="text-sm text-white/70">{bairro} - PR</p>
                <p className="text-xs text-[#F2762E] mt-2">
                  {testimonial.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Qualidade e confiança comprovadas.
            <br />
            <span className="font-bold">
              Confira nossas 250 avaliações 5 estrelas diretamente no Google!
            </span>
          </p>

          <a
            href={googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xl font-bold bg-white rounded-full text-[#0148B2] hover:bg-gray-100 transition-colors duration-300 shadow-2xl transform hover:scale-[1.02]"
          >
            <GoogleG className="w-6 h-6" />
            Ver Todas as Avaliações no Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
