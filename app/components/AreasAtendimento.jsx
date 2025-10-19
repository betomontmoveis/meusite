"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BAIRROS } from '@/data/bairros';

// 🎯 FUNÇÃO DE RASTREAMENTO GTM
const trackEvent = (eventName, eventData) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventData,
      timestamp: new Date().toISOString()
    });
  }
};

// Organiza bairros por cidade
const organizarPorCidade = () => {
  const cidades = {
    'Curitiba': [],
    'Região Metropolitana': [],
  };

  BAIRROS.forEach(bairro => {
    if (bairro.slug.includes('pinhais') || bairro.slug.includes('colombo') || bairro.slug.includes('sao-jose')) {
      cidades['Região Metropolitana'].push(bairro);
    } else if (bairro.nome.includes('Pinhais') || bairro.nome.includes('Colombo') || bairro.nome.includes('São José')) {
      cidades['Região Metropolitana'].push(bairro);
    } else {
      cidades['Curitiba'].push(bairro);
    }
  });

  return cidades;
};

const DESTAQUE = [
  { nome: "Atuba", slug: "atuba" },
  { nome: "Colombo", slug: "colombo" },
  { nome: "Água Verde", slug: "agua-verde" },
  { nome: "Batel", slug: "batel" },
  { nome: "Centro", slug: "centro" },
  { nome: "Santa Felicidade", slug: "santa-felicidade" },
];

export default function AreasAtendimento() {
  const [expandidos, setExpandidos] = useState({});
  const cidades = organizarPorCidade();

  const toggleCidade = (cidade) => {
    setExpandidos(prev => ({
      ...prev,
      [cidade]: !prev[cidade]
    }));
  };

  // 🎯 SCHEMA MARKUP - Lista de Bairros para Google entender melhor
  const areaServedSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Áreas de Atendimento - Montador de Móveis",
    "description": "Lista de todos os bairros onde realizamos montagem de móveis em Curitiba e região",
    "itemListElement": BAIRROS.map((bairro, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": bairro.nome,
      "url": `https://www.betomontadordemoveis.com.br/${bairro.slug}`
    }))
  };

  return (
    <section className="bg-white py-16 px-6 mb-0">
      {/* 🎯 SCHEMA MARKUP INJETADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServedSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Título com semântica melhorada */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#0148B2] mb-2">
            Áreas de Atendimento
          </h2>
          <p className="text-gray-600 text-lg">
            Atendemos montagem de móveis em {BAIRROS.length}+ bairros de Curitiba e Região Metropolitana
          </p>
        </div>

        {/* Bairros em destaque - Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-6">
            {DESTAQUE.map((bairro) => (
              <a
                key={bairro.slug}
                href={`/${bairro.slug}`}
                onClick={() => trackEvent('bairro_clicado', {
                  bairro_nome: bairro.nome,
                  tipo: 'destaque'
                })}
                title={`Montador de móveis em ${bairro.nome} - Orçamento grátis`}
                className="
                  px-4 py-3 rounded-lg text-center font-semibold
                  border-2 border-[#0148B2] text-[#0148B2]
                  hover:bg-[#0148B2] hover:text-white
                  transition-all duration-300
                  text-sm sm:text-base
                "
              >
                {bairro.nome}
              </a>
            ))}
          </div>
        </div>

        {/* Accordion por Cidade */}
        <div className="space-y-3 mb-12">
          {Object.entries(cidades).map(([cidade, bairros]) => (
            <div key={cidade} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Header do Accordion */}
              <button
                onClick={() => toggleCidade(cidade)}
                className="
                  w-full px-6 py-4 flex items-center justify-between
                  bg-gray-50 hover:bg-gray-100 transition-colors
                  font-semibold text-[#0148B2]
                "
              >
                <span className="text-lg">
                  {cidade} <span className="text-gray-500 font-normal">({bairros.length})</span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${expandidos[cidade] ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {/* Conteúdo do Accordion */}
              {expandidos[cidade] && (
                <div className="bg-white px-6 py-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {bairros.map((bairro) => (
                      <a
                        key={bairro.slug}
                        href={`/${bairro.slug}`}
                        onClick={() => trackEvent('bairro_clicado', {
                          bairro_nome: bairro.nome,
                          tipo: 'accordion',
                          cidade: cidade
                        })}
                        title={`Montador de móveis em ${bairro.nome}`}
                        className="
                          px-3 py-2 rounded text-sm font-medium
                          text-[#0148B2] hover:bg-[#0148B2] hover:text-white
                          transition-all duration-200
                          border border-transparent hover:border-[#0148B2]
                        "
                      >
                        {bairro.nome}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Texto descritivo + CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm md:text-base text-gray-600 mb-4">
            Não encontrou seu bairro? <span className="font-semibold text-[#0148B2]">Clique no WhatsApp</span> e consulte disponibilidade para montagem de móveis.
          </p>
          
          {/* Botão CTA */}
          <a
            href="https://wa.me/5541997009479?text=Olá! Preciso de um orçamento de montagem de móveis."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_clicado', {
              origem: 'areas_atendimento'
            })}
            title="Solicitar orçamento grátis de montagem de móveis pelo WhatsApp"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3 rounded-full font-bold
              bg-[#F2762E] text-white
              hover:bg-[#E8651F]
              transition-all duration-300
              text-sm md:text-base
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.38 0 .02 5.35.02 11.97c0 2.11.55 4.18 1.6 6.01L0 24l6.22-1.63a11.94 11.94 0 0 0 5.78 1.47h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.22-3.47-8.38zM12 21.49h-.01a9.43 9.43 0 0 1-4.8-1.31l-.34-.2-3.69.97.99-3.6-.22-.37a9.42 9.42 0 0 1-1.43-4.99C2.5 6.67 6.67 2.5 12 2.5a9.47 9.47 0 0 1 9.49 9.48c0 5.23-4.26 9.51-9.49 9.51zm5.44-7.11c-.3-.15-1.78-.88-2.06-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.18c-.18.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.12.3-.32.45-.48.15-.17.2-.28.3-.47.1-.2.05-.36-.02-.51-.07-.15-.68-1.63-.93-2.23-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.51.07-.78.36-.26.3-1.02.99-1.02 2.4 0 1.4 1.04 2.75 1.19 2.94.15.2 2.05 3.12 4.97 4.38 2.93 1.26 2.93.84 3.46.79.53-.05 1.78-.73 2.03-1.43.25-.7.25-1.31.17-1.43-.08-.12-.27-.2-.57-.35z" />
            </svg>
            Solicitar Orçamento via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}