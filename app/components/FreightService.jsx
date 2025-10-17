'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, CheckCircle, MessageSquare } from 'lucide-react'; 

// Array de Benefícios
const benefits = [
    { text: "Logística Completa: Coleta e entrega no endereço desejado.", Icon: Package },
    { text: "Segurança Total: Móveis transportados com o máximo de cuidado e proteção.", Icon: CheckCircle },
    { text: "Economia de Tempo: Você contrata um único profissional para tudo, do frete à montagem.", Icon: Truck },
];

// DADOS DE CONTATO
const whatsappNumber = '5541997009479';
const predefinedMessage = 'Olá, Beto! Vim pela seção de Frete + Montagem e gostaria de solicitar um orçamento para o serviço completo.';
const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(predefinedMessage)}`;


const FreightService = ({ id }) => {
    // Array para as fotos do carro. Use AVIF!
    const carPhotos = [
        '/transp1.avif', // 🚨 FOTO PRINCIPAL EM DESTAQUE (Carro inteiro)
        '/transp2.avif', // Miniatura (Carro com logo)
        '/transp3.avif', // Miniatura (Detalhe da amarração)
    ];
    
    return (
        <section id={id} className="py-20 md:py-32 bg-white mb-0">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                
                {/* Título e Subtítulo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-[#0148B2] mb-4">
                        Montagem + Frete: Solução Completa!
                    </h2>
                    {/* AQUI ESTÁ A MUDANÇA: max-w-md para o mobile e lg:max-w-3xl para o desktop */}
                    <p className="text-xl text-gray-600 max-w-md lg:max-w-3xl mx-auto">
    Móvel comprado? <br className="lg:hidden" /> Deixe a logística e a montagem por nossa conta.
    <br /> 
    Coletamos, transportamos e instalamos para você.
</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    
                    {/* Bloco de Fotos (Galeria Simples) - Onde a animação de hover é aplicada */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2 flex flex-col gap-3 rounded-xl overflow-hidden"
                    >
                        {/* 1. Foto Principal (Maior) */}
                        <motion.img 
                            src={carPhotos[0]}
                            alt="Veículo de frete Beto Montagens em destaque"
                            className="w-full h-80 object-cover rounded-xl shadow-xl cursor-pointer"
                            loading="lazy"
                            whileHover={{ scale: 1.05 }} 
                            transition={{ duration: 0.3 }}
                        />
                        
                        {/* 2. Miniaturas (Fotos adicionais) */}
                        <div className="grid grid-cols-2 gap-3">
                            {carPhotos.slice(1).map((src, idx) => (
                                <motion.img 
                                    key={idx}
                                    src={src}
                                    alt={`Detalhe do serviço de frete Beto Montagens - ${idx + 2}`}
                                    className="w-full h-32 object-cover rounded-lg shadow-md cursor-pointer"
                                    loading="lazy"
                                    whileHover={{ scale: 1.05 }} 
                                    transition={{ duration: 0.3 }}
                                />
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* Bloco de Benefícios/Texto (Mantido sem alteração) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2 p-6"
                    >
                        <h3 className="text-4xl font-bold text-[#F2762E] mb-6">
                            Sua única preocupação é escolher o móvel.
                        </h3>
                        
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <benefit.Icon className="w-6 h-6 text-[#0148B2] flex-shrink-0 mt-1" />
                                    <p className="text-lg text-gray-700">
                                        <span className="font-semibold">{benefit.text.split(':')[0]}:</span>
                                        {benefit.text.split(':')[1]}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        {/* CTA Final para o Frete/Orçamento */}
                        <a
                            href={whatsappLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-[#F2762E] text-white transition-all duration-300 shadow-2xl hover:bg-[#F2762E]/
                            90 transform hover:scale-[1.03]"
                        >
                            <MessageSquare className="h-5 w-5" />
                            Solicitar Orçamento
                        </a>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default FreightService;