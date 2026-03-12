import React from 'react';
import { DIFERENCIAIS } from '../constants';

const Diferenciais: React.FC = () => {
  const colorVariants = [
    { bg: 'bg-primary', text: 'text-white', iconBg: 'bg-white/20' },
    { bg: 'bg-accent', text: 'text-white', iconBg: 'bg-white/20' },
    { bg: 'bg-white border border-primary/20', text: 'text-primary', iconBg: 'bg-primary-light' },
    { bg: 'bg-primary-light', text: 'text-primary', iconBg: 'bg-primary/10' },
    { bg: 'bg-accent-light border border-accent/20', text: 'text-gray-800', iconBg: 'bg-accent/10' },
    { bg: 'bg-white border border-gray-200', text: 'text-gray-800', iconBg: 'bg-primary-light' },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
            O Que Nos Torna a Escolha Certa
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            para a Família do Seu Pet
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {DIFERENCIAIS.map((item, idx) => {
            const variant = colorVariants[idx % colorVariants.length];
            return (
              <div
                key={idx}
                className={`${variant.bg} rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`${variant.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={variant.text}>
                    {item.icon}
                  </div>
                </div>
                <h3 className={`text-lg font-display font-bold mb-2 ${variant.text}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${variant.text === 'text-white' ? 'text-white/80' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
