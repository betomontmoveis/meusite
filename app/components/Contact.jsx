"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5541997009479?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp! 📱",
      description: "Você será direcionado para continuar a conversa.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-white mb-0">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#0148B2] mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solicite seu orçamento gratuito agora mesmo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0148B2] focus:ring-2 focus:ring-[#0148B2]/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0148B2] focus:ring-2 focus:ring-[#0148B2]/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0148B2] focus:ring-2 focus:ring-[#0148B2]/20 outline-none transition-all"
                  placeholder="(41) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0148B2] focus:ring-2 focus:ring-[#0148B2]/20 outline-none transition-all resize-none"
                  placeholder="Descreva o móvel que precisa montar..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#F2762E] hover:bg-[#F2762E]/90 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#0148B2] to-[#0148B2]/90 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefone / WhatsApp</p>
                    <a href="tel:5541997009479" className="text-white/90 hover:text-[#F2762E] transition-colors">
                      (41) 99700-9479
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:contato@betomontadordemoveis.com.br" className="text-white/90 hover:text-[#F2762E] transition-colors break-all">
                      contato@betomontadordemoveis.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Endereço</p>
                    <p className="text-white/90">
                      R. Epitácio Pessoa, 76<br />
                      Jardim Amélia, Pinhais - PR<br />
                      CEP: 83330-090
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl h-80">
  <iframe
    src="https://www.google.com/maps?q=R.%20Epit%C3%A1cio%20Pessoa%2C%2076%2C%20Jardim%20Am%C3%A9lia%2C%20Pinhais%20-%20PR&z=17&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    title="Localização Beto Montador de Móveis"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

{/* Link direto para abrir exatamente no Google Maps / App */}
<a
  href="https://maps.app.goo.gl/Yw22JidL5A3JVqDd6"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-3 px-4 py-2 rounded-lg shadow bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
>
  Ver no Google Maps
</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;