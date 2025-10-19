"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const handleScrollToSection = (e) => {
    e.preventDefault();
    const element = document.getElementById("areas-atendimento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#0148B2] text-white py-16 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start text-left">
          {/* COLUNA 1 */}
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">
              Beto Montador de Móveis
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Montagem profissional de móveis em Curitiba e região
              metropolitana. Mais de 15 anos de experiência e avaliação 5
              estrelas.
            </p>

            {/* REDES SOCIAIS */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Siga-nos</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/betomontagens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visite nossa página no Facebook"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#F2762E] transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/montagens.beto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visite nosso Instagram"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#F2762E] transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUNA 2 */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:5541997009479"
                title="Ligar para (41) 99700-9479"
                className="flex items-center gap-2 text-white/80 hover:text-[#F2762E] transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                (41) 99700-9479
              </a>
              <a
                href="mailto:contato@betomontadordemoveis.com.br"
                title="Enviar email para contato@betomontadordemoveis.com.br"
                className="flex items-center gap-2 text-white/80 hover:text-[#F2762E] transition-colors break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                contato@betomontadordemoveis.com.br
              </a>
            </div>
          </div>

          {/* COLUNA 3 */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">
              Informações Importantes
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#areas-atendimento"
                  onClick={handleScrollToSection}
                  title="Ver áreas de atendimento"
                  className="text-white/80 hover:text-[#F2762E] transition-colors font-medium cursor-pointer"
                >
                  Áreas de Atendimento (Curitiba e RMC)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVISÓRIA E COPYRIGHT */}
        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p className="text-white/70 mb-2">
            © 2025 Todos os direitos reservados. | Beto Montador de Móveis | CNPJ: 46.566.508/0001-52
          </p>
          <p className="text-white/60">
            Site Criado Por{" "}
            <a
              href="https://www.grsites.com.br"
              target="_blank"
              rel="noopener noreferrer"
              title="Visite GR Sites"
              className="text-[#F2762E] hover:text-white transition-colors font-semibold"
            >
              GR Sites
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;