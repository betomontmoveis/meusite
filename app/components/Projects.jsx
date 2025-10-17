"use client";
import React from 'react';
import { motion } from 'framer-motion'; 
import ProjectCard from './ProjectCard.jsx'; // 💡 Certifique-se que o caminho está correto!


// 1. ESTRUTURA DE DADOS: AGORA COM ARRAY DE IMAGENS
const projects = [
  {
    title: 'Quarto',
    description: 'Montagem de guarda-roupa, cama box e criados-mudos.',
    category: 'Residencial',
    // 🚨 COLOQUE SUAS 3 FOTOS AQUI! Use AVIF para leveza.
    images: [
        '/quarto1.avif', 
        '/quarto2.avif', 
        '/quarto3.avif'
    ] 
  },
  {
    title: 'Escritório',
    description: 'Montagem de estações de trabalho, armários...',
    category: 'Comercial',
    images: [
        '/escritorio1.avif', 
        '/escritorio2.avif', 
        '/escritorio3.avif'
    ]
  },
  {
    title: 'Sala de Estar',
    description: 'Rack, estante, painel para TV...',
    category: 'Residencial',
    images: [
        '/hack1.avif', 
        '/hack2.avif', 
        '/hack3.avif'
    ]
  },
  {
    title: 'Cozinha',
    description: 'Montagem completa de armários, bancadas...',
    category: 'Residencial',
    images: [
        '/cozinha1.avif', 
        '/cozinha2.avif', 
        '/cozinha3.avif'
    ]
  },
  {
    title: 'Lavanderia',
    description: 'Prateleiras, Armários, Varais, Gabinetes para tanque e máquina de lavar...',
    category: 'Residencial',
    images: [
        '/lavanderia1.avif', 
        '/lavanderia2.avif', 
        '/lavanderia3.avif'
    ]
  },
  {
    title: 'Home Office',
    description: 'Mesa, cadeira e estante organizadora.',
    category: 'Residencial',
    images: [
        '/home1.avif', 
        '/home2.avif', 
        '/home3.avif'
    ]
  }
];


// O componente Projects agora utiliza o ProjectCard
const Projects = ({ id }) => {
  return (
    <section id={id} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#0148B2] mb-6">
            Projetos Realizados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 2.000 clientes satisfeitos com móveis montados com perfeição.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // USO DO NOVO COMPONENTE DE CARD
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;