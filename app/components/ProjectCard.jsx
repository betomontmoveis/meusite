"use client"; // 🛑 ADICIONE SEMPRE NA PRIMEIRA LINHA
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Componente para um único card de projeto com carrossel interno
const ProjectCard = ({ project, index }) => {
    const { title, description, category, images } = project;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Efeito para alternar a imagem a cada 4 segundos
    useEffect(() => {
        if (images && images.length > 1) { 
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => 
                    (prevIndex + 1) % images.length
                );
            }, 4000); // 4 segundos por imagem
            return () => clearInterval(interval); 
        }
    }, [images]);

    // Variantes para a animação de Fade da imagem
    const imageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
        exit: { opacity: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            // Animação de entrada do card (a mesma que você já tinha)
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
            <div className="relative h-80">
                
                {/* Contêiner de Animação das Imagens */}
                <AnimatePresence mode="wait">
                    <motion.img
                        // A chave deve mudar para que a AnimatePresence detecte a troca
                        key={images[currentImageIndex]} 
                        src={images[currentImageIndex]}
                        alt={`Projeto de montagem: ${title} - Foto ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    />
                </AnimatePresence>
                
                {/* Fim do Carrossel Interno */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-block px-3 py-1 bg-[#F2762E] rounded-full text-xs font-semibold mb-3">
                        {category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-white/90 text-sm">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;