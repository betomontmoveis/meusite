import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.p
      className='text-xl md:text-2xl text-white max-w-2xl mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      Precisa de um montador de móveis profissional? Eu sou o **Beto** e garanto sua montagem com **qualidade, rapidez e sem dor de cabeça**.
      <span className='font-semibold text-[#F2762E]'> Orçamento grátis pelo WhatsApp!</span>
    </motion.p>
  );
};

export default WelcomeMessage;