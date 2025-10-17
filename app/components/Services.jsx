"use client";
import React from "react";
import { motion } from "framer-motion";
import { Package, Truck, Wrench, Home } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Montagem Profissional",
    description:
      "Montagem completa de todos os tipos de móveis: guarda-roupas, camas, estantes, mesas, cadeiras, racks e muito mais.",
    features: [
      "Ferramentas profissionais",
      "Montagem segura",
      "Acabamento perfeito",
    ],
  },
  {
    icon: Truck,
    title: "Frete e Transporte",
    description:
      "Além de montar, também faço o transporte do seu móvel com segurança até o local desejado.",
    features: [
      "Transporte de móveis",
      "Pequenas mudanças",
      "Descarte de móveis",
    ],
  },
  {
    icon: Package,
    title: "Desmontagem",
    description:
      "Precisa desmontar móveis para mudança ou reorganização? Faço com cuidado para não danificar as peças.",
    features: [
      "Organização das peças",
      "Identificação correta",
      "Embalagem segura",
    ],
  },
  {
    icon: Home,
    title: "Instalação Completa",
    description:
      "Instalação de painéis, prateleiras, suportes e outros itens para deixar seu ambiente perfeito.",
    features: [
      "Nivelamento preciso",
      "Fixação segura",
      "Acabamento impecável",
    ],
  },
];

const Services = ({ id }) => {
  return (
    <section id={id} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#0148B2] mb-6">
            Serviços que realizo:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Muito mais do que montagem: cuidado, agilidade e soluções completas
            para deixar seus móveis prontos e sua casa em ordem —{" "}
            <span className="font-bold">sem dor de cabeça!</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2762E]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0148B2] to-[#0148B2]/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#0148B2] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-[#F2762E] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
