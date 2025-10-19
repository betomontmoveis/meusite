"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Início', id: 'home' },
    { name: 'Serviços', id: 'servicos' }, 
    { name: 'Projetos', id: 'projetos' }, 
    { name: 'Depoimentos', id: 'depoimentos' }, 
    { name: 'Contato', id: 'contato' }, 
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Estado para rastrear a rolagem (deixa o header translúcido)
    const [isScrolled, setIsScrolled] = useState(false); 

    // Efeito para adicionar e remover o listener de scroll
    useEffect(() => {
        const handleScroll = () => {
            // Verifica se a rolagem vertical é maior que 50px
            setIsScrolled(window.scrollY > 50);
        };

        // Adiciona o listener quando o componente monta
        window.addEventListener('scroll', handleScroll);

        // Remove o listener quando o componente desmonta (limpeza)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Função de rolagem suave para as seções
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Ajusta o scroll para compensar a altura do navbar fixo (64px)
            const offset = element.getBoundingClientRect().top + window.scrollY - 64; 
            window.scrollTo({ top: offset, behavior: 'smooth' });
            setIsMenuOpen(false); // Fecha o menu mobile após a navegação
        }
    };

    // 🌟 CORREÇÃO DO ERRO: DEFINIÇÃO DE VARIÁVEL ANTES DO RETURN 🌟
    // Define as classes de fundo dinamicamente
    const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
            ? 'bg-[#0148B2]/80 backdrop-blur-sm shadow-xl' // Fundo translúcido e desfocado ao rolar
            : 'bg-[#0148B2] shadow-lg' // Fundo opaco no topo
    }`;

    return (
        // Navbar fixa no topo com fundo azul
        <header className={headerClasses}>
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <nav className="flex items-center justify-between h-16">
                    {/* Logotipo/Marca em laranja */}
                    <div 
                        className="text-2xl font-extrabold cursor-pointer" 
                        onClick={() => scrollToSection('home')} // Rola para o topo
                    >
                        <span className="text-white">Beto </span>
                        <span className="text-[#F2762E]">Montagens</span>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-white text-base font-medium hover:text-[#F2762E] transition-colors duration-200 focus:outline-none"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Botão Hamburger (Mobile) */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Abrir Menu de Navegação"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            {/* Menu Mobile (Dropdown) - Sempre opaco para leitura fácil */}
            {isMenuOpen && (
                <div 
                    className="md:hidden bg-[#0148B2] shadow-xl transition-all duration-300 ease-in-out"
                >
                    {navItems.map((item) => (
                        <div 
                            key={item.id} 
                            onClick={() => scrollToSection(item.id)}
                            className="block px-4 py-3 text-white text-lg font-medium hover:bg-[#F2762E] transition-colors duration-200 cursor-pointer"
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;