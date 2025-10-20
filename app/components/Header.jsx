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
    const [isScrolled, setIsScrolled] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = element.getBoundingClientRect().top + window.scrollY - 48; 
            window.scrollTo({ top: offset, behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
            ? 'bg-[#0148B2]/80 backdrop-blur-sm shadow-xl'
            : 'bg-[#0148B2] shadow-lg'
    }`;

    return (
        <header className={headerClasses}>
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <nav className="flex items-center justify-between h-12">
                    <div 
                        className="text-base md:text-lg font-extrabold cursor-pointer" 
                        onClick={() => scrollToSection('home')}
                    >
                        <span className="text-white">Beto </span>
                        <span className="text-[#F2762E]">Montagens</span>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-white text-sm font-medium hover:text-[#F2762E] transition-colors duration-200 focus:outline-none"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Abrir Menu de Navegação"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

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