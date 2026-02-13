import React from 'react';
import { PawPrint } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary leading-[1.15] mb-6">
            Seu pet atendido com a tecnologia de um <span className="text-terracotta relative inline-block">
              Hospital
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> e o colinho de Vó.
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Diagnósticos precisos, exames na hora e uma equipe apaixonada que trata seu filho de 4 patas como família. 
            <strong> Sem estresse, sem espera e sem aquele "cheiro de hospital".</strong>
          </p>
          
          <div className="flex flex-col items-center lg:items-start gap-3">
            <button 
              className="bg-accent hover:bg-terracotta text-white text-lg lg:text-xl px-10 py-5 rounded-full font-display font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group animate-pulse hover:animate-none"
              onClick={() => window.open('https://wa.me/5561999999999', '_blank')}
            >
              Quero Agendar com Carinho
              <PawPrint className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </button>
            <span className="text-sm text-gray-500 font-medium">
              Atendimento Rápido via WhatsApp
            </span>
          </div>
        </div>

        {/* Image / Visuals */}
        <div className="flex-1 relative w-full max-w-md lg:max-w-full">
          {/* Abstract blobs background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float -z-10 blur-xl opacity-60"></div>
          
          <div className="relative z-10 mx-auto">
             <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1623366302587-bca24aca2795?q=80&w=1000&auto=format&fit=crop" 
                 alt="Veterinário sorrindo com cachorro no colo" 
                 className="w-full h-full object-cover"
               />
             </div>
             
             {/* Floating badge */}
             <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white p-4 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="bg-primary/10 p-2 rounded-full">
                  <PawPrint className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-primary font-display text-sm">Fear Free</p>
                  <p className="text-xs text-gray-500">Zero Trauma</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;