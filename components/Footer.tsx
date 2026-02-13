import React from 'react';
import { FACILITIES } from '../constants';
import { PawPrint, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Left: Location & Info */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Pertinho de você em Brasília</h2>
            <div className="flex flex-col gap-4 mb-8 text-gray-200">
               <div className="flex items-start gap-3">
                 <MapPin className="mt-1 text-secondary" />
                 <p>SHIN CA 5 Bloco J - Lago Norte, Brasília - DF</p>
               </div>
               <div className="flex items-center gap-3">
                 <Phone className="text-secondary" />
                 <p>(61) 99999-9999</p>
               </div>
               <div className="flex items-center gap-3">
                 <Mail className="text-secondary" />
                 <p>contato@clinvet.com.br</p>
               </div>
            </div>

            <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm">
              <h3 className="font-display font-bold mb-4 text-lg">Comodidades:</h3>
              <ul className="space-y-3">
                {FACILITIES.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-100">
                    <div className="text-accent">{f.icon}</div>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Map Placeholder & Final CTA */}
          <div className="flex flex-col h-full">
            <div className="bg-gray-200 rounded-3xl h-64 w-full mb-8 overflow-hidden relative shadow-inner">
               {/* Mock Map */}
               <div className="absolute inset-0 bg-blue-100 opacity-50"></div>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                 <MapPin size={48} className="text-terracotta animate-bounce" />
               </div>
               <div className="absolute bottom-4 right-4 bg-white text-gray-800 text-xs px-2 py-1 rounded shadow">
                 Mapa Ilustrativo
               </div>
            </div>
            
            <button 
              className="w-full bg-accent hover:bg-terracotta text-white text-xl py-5 rounded-2xl font-display font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              onClick={() => window.open('https://wa.me/5561999999999', '_blank')}
            >
              Agendar Consulta pelo WhatsApp
              <PawPrint />
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <PawPrint size={16} />
            <span className="font-display font-bold">ClinVet</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <p>Feito com amor para pets.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;