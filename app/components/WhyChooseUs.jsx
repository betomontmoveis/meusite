"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Star, ThumbsUp, Wrench, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description: 'Agendamento flexível e montagem no prazo. Sem esperar semanas!',
    color: '#0148B2'
  },
  {
    icon: Star,
    title: '5 Estrelas no Google',
    description: 'Avaliação máxima de clientes satisfeitos. Qualidade comprovada!',
    color: '#F2762E'
  },
  {
    icon: Wrench,
    title: '+15 Anos de Experiência',
    description: 'Expertise em todos os tipos de móveis. Do simples ao complexo.',
    color: '#0148B2'
  },
  {
    icon: Shield,
    title: 'Garantia de Qualidade',
    description: 'Montagem segura e profissional. Seus móveis em boas mãos.',
    color: '#F2762E'
  },
  {
    icon: ThumbsUp,
    title: 'Preço Justo',
    description: 'Orçamento transparente sem surpresas. Melhor custo-benefício.',
    color: '#0148B2'
  },
  {
    icon: TrendingUp,
    title: 'Confiança Total',
    description: 'Profissional comprometido e pontual. Sua tranquilidade garantida.',
    color: '#F2762E'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#0148B2] mb-6">
            Por Que Me Escolher?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Montar móveis exige técnica, paciência e ferramentas certas e eu tenho tudo isso.
Evite dor de cabeça e perca de tempo: deixe que o especialista cuida dos seus móveis, com perfeição e no prazo certo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4"
              style={{ borderColor: reason.color }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg"
                style={{ backgroundColor: `${reason.color}15` }}
              >
                <reason.icon className="w-8 h-8" style={{ color: reason.color }} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4" style={{ color: reason.color }}>
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;