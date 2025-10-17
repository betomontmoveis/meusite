"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto tempo leva para montar um móvel?',
    answer: 'Depende do tipo e tamanho do móvel. Um guarda-roupa simples leva cerca de 2-3 horas, enquanto móveis maiores podem levar um dia. Sempre trabalho com agilidade sem comprometer a qualidade!'
  },
  {
    question: 'Você atende em quais regiões?',
    answer: 'Atendo Curitiba e toda região metropolitana, incluindo Pinhais, São José dos Pinhais, Colombo, Araucária e cidades vizinhas. Entre em contato para confirmar!'
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
    question: 'Você também faz desmontagem para mudança?',
    answer: 'Sim! Faço desmontagem cuidadosa, organizo e identifico as peças para facilitar a montagem no novo local. Também ofereço serviço de transporte!'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#0148B2] mb-6">
            Perguntas Frequentes
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
      </div>
    </section>
  );
};

export default FAQ;