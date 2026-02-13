import React from 'react';
import { PawPrint, Clock } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-background pb-10 px-4">
      <div className="max-w-5xl mx-auto bg-terracotta rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 transform rotate-12">
            <PawPrint size={120} />
          </div>
          <div className="absolute bottom-10 right-10 transform -rotate-12">
            <PawPrint size={150} />
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Não espere o sintoma piorar.
          </h2>
          <p className="text-xl md:text-2xl text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            A agenda dos nossos especialistas enche rápido. Garanta o horário do seu melhor amigo hoje e durma tranquilo.
          </p>

          <button 
            className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white text-xl md:text-2xl py-6 px-12 rounded-full font-display font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4 mx-auto"
            onClick={() => window.open('https://wa.me/5561999999999', '_blank')}
          >
            📅 AGENDAR AGORA PELO WHATSAPP
          </button>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-2 text-orange-100 text-sm md:text-base opacity-90">
            <ShieldCheckIcon />
            <span>Seu pet tratado com amor ou nós não ficaremos satisfeitos.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple Icon component for internal use
const ShieldCheckIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export default FinalCTA;