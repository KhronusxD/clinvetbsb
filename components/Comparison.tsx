import React from 'react';
import { COMPARISON_DATA } from '../constants';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-6">
            Por que ir ao veterinário costuma ser um pesadelo?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esqueça o que você conhece sobre clínicas veterinárias. Nós criamos uma nova experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* The Old Way */}
          <div className="bg-white rounded-3xl p-8 border-2 border-red-100 shadow-sm opacity-90 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-display font-bold text-red-500 mb-6 flex items-center gap-2">
              ⛔ {COMPARISON_DATA.oldWay.title}
            </h3>
            <ul className="space-y-4">
              {COMPARISON_DATA.oldWay.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <div className="text-red-400 mt-0.5 shrink-0">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The ClinVet Way */}
          <div className="bg-white rounded-3xl p-8 border-2 border-secondary/50 shadow-xl relative transform md:scale-105 z-10">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
               ✨ A Escolha Certa
             </div>
            <h3 className="text-xl font-display font-bold text-secondary mb-6 flex items-center gap-2">
              🥰 {COMPARISON_DATA.clinVetWay.title}
            </h3>
            <ul className="space-y-4">
              {COMPARISON_DATA.clinVetWay.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                  <div className="text-secondary mt-0.5 shrink-0">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;