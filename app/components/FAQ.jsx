"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = ({ bairro = "Curitiba e Região" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // 🎯 FAQs com bairro dinâmico
  const faqs = [
    {
      question: `Quanto tempo leva para montar um móvel em ${bairro}?`,
      answer: `Em ${bairro}, depende do tipo e tamanho do móvel. Um guarda-roupa simples leva cerca de 2-3 horas, enquanto móveis maiores podem levar um dia. Sempre trabalho com agilidade sem comprometer a qualidade!`
    },
    {
      question: `Você atende em ${bairro}?`,
      answer: `Sim! Atendo ${bairro} e toda região metropolitana de Curitiba, incluindo Pinhais, São José dos Pinhais, Colombo, Araucária e cidades vizinhas. Entre em contato para confirmar!`
    },
    {
      question: 'Como funciona o orçamento?',
      answer: 'O orçamento é totalmente gratuito! Você me envia fotos ou informações do móvel pelo WhatsApp e eu passo o valor. Sem surpresas, preço justo e transparente.'
    },
    {
      question: 'Você leva as ferramentas necessárias?',
      answer: 'Sim! Levo todas as ferramentas profissionais necessárias para a montagem. Você não precisa se preocupar com nada, só aproveitar o resultado!'
    },
    {
      question: 'E se faltar alguma peça do móvel?',
      answer: 'Verifico todas as peças antes de começar. Se faltar algo, te aviso imediatamente e podemos resolver juntos, seja solicitando à loja ou encontrando alternativas.'
    },
    {
      question: 'Você oferece garantia do serviço?',
      answer: 'Sim! Ofereço garantia de qualidade na montagem. Se houver qualquer problema relacionado ao meu trabalho, retorno para corrigir sem custo adicional.'
    },
    {
      question: 'Posso agendar para final de semana?',
      answer: 'Claro! Trabalho de segunda a sábado com horários flexíveis. Basta entrar em contato e agendarmos o melhor dia e horário para você.'
    },
    {
      question: `Você faz desmontagem para mudança em ${bairro}?`,
      answer: `Sim! Em ${bairro} e região, faço desmontagem cuidadosa, organizo e identifico as peças para facilitar a montagem no novo local. Também ofereço serviço de transporte!`
    }
  ];

  // 🎯 FAQPage SCHEMA para Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      {/* 🎯 SCHEMA MARKUP - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#0148B2] mb-6">
            Perguntas Frequentes sobre Montagem de Móveis em {bairro}
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre montagem de móveis
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#0148B2] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#F2762E] flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* 🎯 CTA após FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-4">
            Ainda tem dúvidas sobre montagem de móveis em {bairro}?
          </p>
          <a
            href={`https://wa.me/5541997009479?text=Olá! Vim pelo site. Tenho dúvidas sobre montagem de móveis em ${bairro}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2762E] text-white font-bold rounded-full hover:bg-[#E8651F] transition-all duration-300 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.38 0 .02 5.35.02 11.97c0 2.11.55 4.18 1.6 6.01L0 24l6.22-1.63a11.94 11.94 0 0 0 5.78 1.47h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.22-3.47-8.38zM12 21.49h-.01a9.43 9.43 0 0 1-4.8-1.31l-.34-.2-3.69.97.99-3.6-.22-.37a9.42 9.42 0 0 1-1.43-4.99C2.5 6.67 6.67 2.5 12 2.5a9.47 9.47 0 0 1 9.49 9.48c0 5.23-4.26 9.51-9.49 9.51zm5.44-7.11c-.3-.15-1.78-.88-2.06-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.18c-.18.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.12.3-.32.45-.48.15-.17.2-.28.3-.47.1-.2.05-.36-.02-.51-.07-.15-.68-1.63-.93-2.23-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.51.07-.78.36-.26.3-1.02.99-1.02 2.4 0 1.4 1.04 2.75 1.19 2.94.15.2 2.05 3.12 4.97 4.38 2.93 1.26 2.93.84 3.46.79.53-.05 1.78-.73 2.03-1.43.25-.7.25-1.31.17-1.43-.08-.12-.27-.2-.57-.35z" />
            </svg>
            Fale Comigo no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;