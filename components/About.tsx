import React from 'react';
import { ABOUT_VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
            30 Anos de Paixão, Dedicação e Cuidado
          </h2>
          <p className="text-gray-500 text-lg">em Sobradinho</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Story text */}
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              Em 1995, o <strong className="text-primary">Dr. Eulélio José</strong> abriu sua modesta clínica veterinária em Sobradinho, DF, munido apenas de determinação e paixão pelos animais. Com recursos limitados, enfrentou desafios iniciais, mas sua dedicação incansável e habilidade notável rapidamente conquistaram a confiança dos moradores da região.
            </p>
            <p>
              Três décadas depois, a Clinvet evoluiu para um <strong className="text-primary">centro de referência em medicina veterinária</strong>, mantendo sempre os mesmos princípios que a fundaram: respeito, verdade, escuta ativa e cuidado humanizado. Cada membro da equipe compartilha dessa visão de tornar a saúde pet uma prioridade.
            </p>

            <div className="bg-primary-light border-l-4 border-primary p-5 rounded-r-2xl">
              <p className="font-display font-bold text-primary mb-1">Nossa Missão</p>
              <p className="text-sm text-gray-600">Ser um local seguro, que pratica escuta ativa sem qualquer pré-julgamento, com respeito e verdade como valores inegociáveis.</p>
            </div>
            <div className="bg-accent-light border-l-4 border-accent p-5 rounded-r-2xl">
              <p className="font-display font-bold text-gray-800 mb-1">Nossa Visão</p>
              <p className="text-sm text-gray-600">Ser a primeira referência em saúde pet da região norte e de Brasília.</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary-light rounded-[3rem] transform rotate-3"></div>
            <img
              src="/foto-clinvet.jpg"
              alt="Pet em frente à Clinvet Sobradinho - 30 anos de cuidado veterinário"
              className="relative z-10 w-full rounded-[2.5rem] shadow-2xl object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-5 -right-5 z-20 bg-accent text-white p-4 rounded-2xl shadow-xl font-display font-bold text-center">
              <p className="text-3xl">30</p>
              <p className="text-xs uppercase tracking-wider">Anos</p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl font-display font-bold text-center text-primary mb-8">Nossos Valores</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {ABOUT_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-primary-light rounded-2xl p-5 text-center hover:bg-primary hover:text-white transition-all duration-300 group cursor-default"
              >
                <div className="text-3xl mb-2">{val.icon}</div>
                <p className="font-display font-bold text-primary text-sm group-hover:text-white transition-colors">{val.label}</p>
                <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors mt-1 leading-tight">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
