"use client";
import React from 'react';
import * as fmMotion from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ id = "home", customArea = "Curitiba e Região Metropolitana", whatsappLinkProp }) => {
  const whatsappNumber = '41997009479';
  const predefinedMessage = customArea
    ? `Olá, Beto! Gostaria de um orçamento para montagem de móveis no bairro ${customArea}.`
    : 'Olá, Beto! Gostaria de um orçamento para montagem de móveis.';

  const defaultWhatsappLink = `https://api.whatsapp.com/send?phone=55${whatsappNumber}&text=${encodeURIComponent(predefinedMessage)}`;
  const finalWhatsappLink = whatsappLinkProp || defaultWhatsappLink;

  const scrollToContact = () => {
    document.getElementById('servicos')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  // 🎨 CONTROLE DE TIPOGRAFIA E ESPAÇAMENTO
  const typography = {
    // Subtítulo
    subtitleMobile: '14px',    // Ajuste aqui para mobile
    subtitleTablet: '18px',    // Tablet
    subtitleDesktop: '22px',   // Desktop
    subtitleMarginBottom: '12px', // Espaço após subtítulo

    // Título Principal
    titleMobile: '32px',       // Mobile
    titleTablet: '48px',       // Tablet  
    titleDesktop: '64px',      // Desktop
    titleLineHeight: 1.1,      // Altura das linhas (1-1.5)
    titleMarginBottom: '20px', // Espaço após título

    // Descrição
    descriptionMobile: '16px',
    descriptionTablet: '18px',
    descriptionDesktop: '20px',
    descriptionLineHeight: 1.6,
    descriptionMarginBottom: '24px',

    // Espaçamento geral
    containerPaddingMobile: '20px',    // Espaço lateral mobile
    containerPaddingTablet: '32px',    // Espaço lateral tablet
    containerPaddingDesktop: '40px',   // Espaço lateral desktop
    containerPaddingTop: 'clamp(0px, 0px, -20px)',  // Mobile: 0px (sem subir) | Desktop: -20px (sobe)
  };

  return (
    <section
      id={id}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* 📸 Imagem de Fundo */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-[40%_40%] lg:object-[70%_60%]"
        alt="Montador de móveis profissional sorrindo com um ambiente de montagem de móveis."
        src="/assemb01.png"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0148B2]/95 via-[#0148B2]/90 to-transparent" />

      {/* 🧱 Conteúdo Principal */}
      <div
        className="relative w-full flex items-center"
        style={{
          minHeight: '100vh',
          marginTop: typography.containerPaddingTop,
        }}
      >
        <div
          className="container mx-auto max-w-6xl"
          style={{
            paddingLeft: `clamp(${typography.containerPaddingMobile}, 5vw, ${typography.containerPaddingDesktop})`,
            paddingRight: `clamp(${typography.containerPaddingMobile}, 5vw, ${typography.containerPaddingDesktop})`,
            marginLeft: '-10px',  // Mobile: -10px | Desktop: ajuste clamp se quiser
            marginRight: '60px',  // Desktop: 60px | Altere aqui para 0px, 20px, 40px, 60px, etc
          }}
        >
          <fmMotion.motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '700px' }}
            suppressHydrationWarning
          >
            {/* 🧩 Subtítulo com Localização */}
            {customArea && (
              <fmMotion.motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{
                  marginBottom: typography.subtitleMarginBottom,
                }}
              >
                <span
                  className="inline-block text-[#F2762E] font-bold drop-shadow-lg"
                  style={{
                    fontSize: `clamp(${typography.subtitleMobile}, 4vw, ${typography.subtitleDesktop})`,
                  }}
                >
                  Beto, Montador de Móveis em{' '}
                  <span
                    className="inline-block px-3 py-1 rounded-full border-2 border-[#F2762E] mt-2"
                    style={{
                      borderColor: '#F2762E',
                    }}
                  >
                    {customArea}
                  </span>
                </span>
              </fmMotion.motion.div>
            )}

            {/* 🎯 Título Principal */}
            <fmMotion.motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-black text-white tracking-tight"
              style={{
                fontSize: `clamp(${typography.titleMobile}, 8vw, ${typography.titleDesktop})`,
                lineHeight: typography.titleLineHeight,
                marginBottom: typography.titleMarginBottom,
              }}
              suppressHydrationWarning
            >
              Chega de se estressar com parafusos e manuais confusos.
            </fmMotion.motion.h1>

            {/* 💬 Texto Descritivo */}
            <fmMotion.motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white"
              style={{
                fontSize: `clamp(${typography.descriptionMobile}, 3.5vw, ${typography.descriptionDesktop})`,
                lineHeight: typography.descriptionLineHeight,
                marginBottom: typography.descriptionMarginBottom,
                maxWidth: '90%',
              }}
            >
              Montar móveis não precisa ser um{' '}
              <span className="text-[#F2762E] font-bold">Quebra-Cabeça.</span>
              {' '}Eu monto seus móveis com: agilidade, segurança e preço justo!
            </fmMotion.motion.p>

            {/* 🟠 Botão WhatsApp */}
            <fmMotion.motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-start"
            >
              <a
                href={finalWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  font-bold rounded-full
                  bg-[#F2762E] text-white
                  transition-all duration-300 shadow-xl
                  hover:bg-[#E8651F] hover:shadow-2xl transform hover:scale-105
                  active:scale-95
                  text-center
                  whitespace-nowrap
                "
                style={{
                  padding: `clamp(12px, 2.5vw, 16px) clamp(24px, 4vw, 40px)`,
                  fontSize: `clamp(14px, 2.5vw, 18px)`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{
                    width: `clamp(18px, 2vw, 24px)`,
                    height: `clamp(18px, 2vw, 24px)`,
                  }}
                >
                  <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.38 0 .02 5.35.02 11.97c0 2.11.55 4.18 1.6 6.01L0 24l6.22-1.63a11.94 11.94 0 0 0 5.78 1.47h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.22-3.47-8.38zM12 21.49h-.01a9.43 9.43 0 0 1-4.8-1.31l-.34-.2-3.69.97.99-3.6-.22-.37a9.42 9.42 0 0 1-1.43-4.99C2.5 6.67 6.67 2.5 12 2.5a9.47 9.47 0 0 1 9.49 9.48c0 5.23-4.26 9.51-9.49 9.51zm5.44-7.11c-.3-.15-1.78-.88-2.06-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.18c-.18.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.12.3-.32.45-.48.15-.17.2-.28.3-.47.1-.2.05-.36-.02-.51-.07-.15-.68-1.63-.93-2.23-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.51.07-.78.36-.26.3-1.02.99-1.02 2.4 0 1.4 1.04 2.75 1.19 2.94.15.2 2.05 3.12 4.97 4.38 2.93 1.26 2.93.84 3.46.79.53-.05 1.78-.73 2.03-1.43.25-.7.25-1.31.17-1.43-.08-.12-.27-.2-.57-.35z" />
                </svg>
                Solicitar Orçamento
              </a>
            </fmMotion.motion.div>
          </fmMotion.motion.div>
        </div>
      </div>

      {/* ⬇️ Indicador de Rolagem */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <fmMotion.motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          onClick={scrollToContact}
          className="cursor-pointer p-2 rounded-full border-2 border-white text-white hover:bg-white/20 transition-colors"
        >
          <ChevronDown className="h-6 w-6" />
        </fmMotion.motion.div>
      </div>
    </section>
  );
};

export default Hero;