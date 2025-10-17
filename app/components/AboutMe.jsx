import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users } from 'lucide-react';

const AboutMe = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0148B2] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F2762E] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Quem Sou Eu
            </h2>
            
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
  Sou <span className="font-bold text-[#F2762E]">Beto</span>, montador profissional de móveis com mais de <span className="font-bold text-[#F2762E]">15 anos de experiência</span> transformando <span className="font-semibold">casas e escritórios</span> em <span className="font-semibold">Curitiba e região metropolitana</span>.
</p>

<p className="text-lg text-white/80 mb-8 leading-relaxed">
  Sei como é frustrante comprar um móvel novo e não conseguir montá-lo — faltar <span className="font-semibold">ferramenta, tempo ou paciência</span>. 
  Por isso, minha missão é trazer <span className="font-bold text-[#F2762E]">tranquilidade, rapidez e qualidade</span> para cada cliente.
</p>

<p className="text-lg text-white/80 leading-relaxed">
  Cada montagem é feita com <span className="font-semibold">cuidado, responsabilidade e perfeição</span>, como se o móvel fosse meu.
</p>


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <Award className="w-10 h-10 text-[#F2762E] mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm text-white/80">Anos de Experiência</div>
              </div>
              
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <Users className="w-10 h-10 text-[#F2762E] mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">2000+</div>
                <div className="text-sm text-white/80">Clientes Satisfeitos</div>
              </div>
              
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <Heart className="w-10 h-10 text-[#F2762E] mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">5★</div>
                <div className="text-sm text-white/80">Avaliação Google</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-[500px] object-cover"
                alt="Beto montador de móveis trabalhando profissionalmente"
               src="/betofront.jpg" />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-2xl font-bold text-white">
                  "Seu móvel montado com perfeição é minha satisfação!"
                </p>
                <p className="text-[#F2762E] font-semibold mt-2">- Beto</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;