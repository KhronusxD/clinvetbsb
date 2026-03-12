import React, { useState } from 'react';
import { PAIN_SOLUTIONS } from '../constants';

const PainsSolutions: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
            Entendemos Suas Preocupações.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Oferecemos soluções que transformam medos em confiança.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {PAIN_SOLUTIONS.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 border-2 cursor-pointer transition-all duration-300 ${
                expanded === idx
                  ? 'border-primary bg-primary-light shadow-xl'
                  : 'border-gray-100 bg-white hover:border-primary/30 hover:shadow-md'
              }`}
              onClick={() => setExpanded(expanded === idx ? null : idx)}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">
                {item.problem_title}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">O problema:</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.problem}</p>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${expanded === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="border-t border-primary/20 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Nossa Solução:</p>
                    <p className="text-primary font-medium leading-relaxed text-sm">{item.solution}</p>
                  </div>
                </div>

                <button className={`text-sm font-bold transition-colors ${expanded === idx ? 'text-primary' : 'text-accent'}`}>
                  {expanded === idx ? '▲ Fechar' : '▼ Ver Nossa Solução'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainsSolutions;
