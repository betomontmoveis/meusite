// src/components/Cobertura.jsx (VERSÃO FINAL LIMPA PARA UX)

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import bairrosECidades from '../data/coberturaData'; 

// Função auxiliar para transformar o nome em slug (usada no 'to')
const toSlug = (name) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/\(|\)/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const Cobertura = () => {
  return (
    <>
      <Helmet>
        <title>Áreas de Atendimento Completo | Montador de Móveis em Curitiba e RMC</title>
        <meta 
          name="description" 
          content="Veja a lista completa dos mais de 70 bairros de Curitiba e todas as cidades da Região Metropolitana atendidas pelo Beto Montador de Móveis. Serviço de montagem profissional e garantido." 
        />
        <link rel="canonical" href="https://www.betomontadordemoveis.com.br/cobertura" />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-6xl pt-32">
        <h1 className="text-4xl font-extrabold text-center text-[#0148B2] mb-10">
          Área de Atendimento: Curitiba e RMC (Serviço Completo)
        </h1>
        
        {/* CIDADES DA REGIÃO METROPOLITANA */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Cidades da Região Metropolitana
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
          {bairrosECidades.regiaoMetropolitana.map((cidade) => (
            <Link 
              key={cidade} 
              to={`/${toSlug(cidade)}`} 
              className="p-3 bg-white/70 border border-gray-300 rounded-lg text-center font-medium shadow-md text-sm hover:bg-blue-100 hover:border-blue-500 transition duration-300 block"
            >
              {cidade} {/* 🛑 APENAS O NOME DA CIDADE/LOCALIDADE */}
            </Link>
          ))}
        </div>

        {/* BAIRROS DE CURITIBA */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Bairros de Curitiba
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {bairrosECidades.curitiba.map((bairro) => (
            <Link 
              key={bairro} 
              to={`/${toSlug(bairro)}`} 
              className="p-3 bg-white/70 border border-gray-300 rounded-lg text-center text-sm hover:bg-blue-100 hover:border-blue-500 transition duration-300 shadow-md font-medium"
            >
              {bairro} {/* 🛑 APENAS O NOME DO BAIRRO */}
            </Link>
          ))}
        </div>
        
        <p className="mt-10 text-center text-gray-600 text-lg font-semibold">
          Clique no seu bairro ou cidade para ver o serviço otimizado e pedir seu orçamento rápido.
        </p>
      </div>
    </>
  );
};

export default Cobertura;