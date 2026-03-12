import React from 'react';
import { SOCIAL_PROOF_STATS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/80 font-bold text-sm uppercase tracking-widest mb-8">
          A Confiança de Quem Mais Importa: Nossos Clientes e Seus Pets Felizes
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {SOCIAL_PROOF_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 ${
                stat.highlight
                  ? 'bg-accent text-white shadow-xl scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-3xl mb-2">{stat.icon}</span>
              <span className={`text-2xl lg:text-3xl font-display font-bold ${stat.highlight ? 'text-white' : 'text-white'}`}>
                {stat.value}
              </span>
              <span className={`text-xs mt-1 leading-tight ${stat.highlight ? 'text-white/90' : 'text-white/70'}`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
