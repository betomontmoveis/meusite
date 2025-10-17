"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Ícone do WhatsApp em formato SVG para máxima qualidade e controle.
const WhatsAppIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 448 512"
    {...props}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .5c58.3 0 111.3 22.8 150.1 61.5l-1.5 1.5c-38.9-38.9-91.9-61.5-150.1-61.5s-111.3 22.8-150.1 61.5l-1.5-1.5c38.9-38.9 91.9-61.5 150.1-61.5zM223.9 439.7c-33.8 0-66.3-9.1-94.3-25.7l-6.7-4-69.8 18.3L72 362.2l-4.5-7c-18.9-29.7-29.9-64.2-29.9-100.3 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-184.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const WhatsAppButton = () => {
  const phoneNumber = '5541997009479';
  const message = encodeURIComponent('Olá! Vi seu site e gostaria de fazer um orçamento.');

  return (
    // Contêiner principal que agrupa o botão e o balão de texto.
    // Ele é um link <a>, que é o correto para links externos.
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
      aria-label="Fale comigo no WhatsApp!"
      // Animações de entrada do Framer Motion
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
      whileTap={{ scale: 0.95 }}
    >
      {/* O balão de texto que aparece ao passar o mouse (em telas de computador ) */}
      <div
        className="
          absolute right-full mr-4
          hidden md:block
          px-4 py-2 bg-white text-gray-800 rounded-lg shadow-lg
          font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
        "
      >
        Fale Comigo!
      </div>

      {/* O botão circular verde */}
      <motion.div
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <WhatsAppIcon className="h-8 w-8 text-white" />

        {/* A bolinha de notificação que pulsa */}
        <span className="absolute right-0 top-0 block h-4 w-4 animate-pulse rounded-full bg-red-600 ring-2 ring-white" />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
