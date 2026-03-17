import React from 'react';
import { PawPrint, Phone, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK, PHONE_MAIN } from '../constants';
import { trackWhatsApp } from '../utils/tracking';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 bg-white">
      {/* Decorative teal blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-light rounded-full -translate-y-1/3 translate-x-1/3 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-light rounded-full translate-y-1/2 -translate-x-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-sm font-bold px-4 py-2 rounded-full mb-6 border border-primary/20">
            <PawPrint size={14} />
            <span>30 Anos Cuidando de Quem Você Ama</span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary leading-[1.15] mb-6">
            A tranquilidade de saber que seu{' '}
            <span className="text-accent relative inline-block">
              melhor amigo
              <svg className="absolute w-full h-3 -bottom-1 left-0 opacity-40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="#FF8C42" strokeWidth="8" fill="none" />
              </svg>
            </span>{' '}
            está em boas mãos.
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Há 30 anos, a Clinvet Sobradinho é o porto seguro para a saúde e alegria do seu melhor amigo, com medicina de ponta e um coração que entende o seu.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <button
              className="w-full sm:w-auto bg-accent hover:bg-orange-500 text-white text-lg px-8 py-4 rounded-full font-display font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              onClick={() => { trackWhatsApp('hero'); window.open(WHATSAPP_LINK, '_blank'); }}
            >
              📅 Agende a Consulta do Seu Pet Agora!
            </button>
            <button
              className="w-full sm:w-auto bg-white hover:bg-primary-light border-2 border-primary text-primary text-lg px-8 py-4 rounded-full font-display font-bold hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              onClick={() => { trackWhatsApp('hero'); window.open(WHATSAPP_LINK, '_blank'); }}
            >
              <MessageCircle size={20} />
              Fale Conosco pelo WhatsApp
            </button>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">⭐⭐⭐⭐⭐ <strong className="text-gray-700">4.8 no Google</strong></span>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></span>
            <span>+600 avaliações positivas</span>
          </div>
        </div>

        {/* Image / Visuals */}
        <div className="flex-1 relative w-full max-w-md lg:max-w-full flex items-end justify-center">
          {/* Soft teal glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-light rounded-full -z-10 blur-3xl opacity-80"></div>

          {/* Hero pets image - no border, blends with white bg */}
          <img
            src="/hero-pets.png"
            alt="Cachorro e gato felizes - Clinvet Sobradinho cuida dos seus pets"
            className="relative z-10 w-full max-w-lg drop-shadow-none select-none"
            style={{ mixBlendMode: 'multiply' }}
          />

          {/* Floating badge - 30 anos */}
          <div className="absolute top-6 -left-4 lg:-left-8 bg-accent text-white p-3 rounded-2xl shadow-xl flex items-center gap-2 animate-float z-20" style={{ animationDelay: '0.8s' }}>
            <span className="text-2xl">🏆</span>
            <div>
              <p className="font-bold font-display text-sm leading-none">30 Anos</p>
              <p className="text-xs opacity-90">Sobradinho</p>
            </div>
          </div>

          {/* Google rating badge */}
          <div className="absolute bottom-6 -right-2 lg:-right-6 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="bg-primary p-1.5 rounded-full">
              <span className="text-white text-xs font-bold px-0.5">G</span>
            </div>
            <div>
              <p className="font-bold text-primary font-display text-xs">⭐ 4.8 no Google</p>
              <p className="text-xs text-gray-500">+600 avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;