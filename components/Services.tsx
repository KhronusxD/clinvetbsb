import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
            O que podemos fazer pelo seu filho de 4 patas hoje?
          </h2>
          <p className="text-gray-600 text-lg">Cuidados completos em um só lugar.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group cursor-default border border-transparent hover:border-secondary/30"
            >
              <div className="bg-background w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-1 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-medium inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
            Não achou o que precisa? 
            <a href="https://wa.me/5561999999999" className="text-accent font-bold hover:underline flex items-center gap-1">
              Chame no Zap! <MessageCircle size={16} />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;