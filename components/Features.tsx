import React from 'react';
import { VALUE_STACK } from '../constants';
import { PawPrint } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="value-stack" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4 leading-tight">
            Mais do que uma simples consulta.<br />
            Veja o que seu Pet recebe:
          </h2>
          <div className="w-24 h-2 bg-secondary rounded-full mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {VALUE_STACK.map((item, index) => (
            <div 
              key={index} 
              className="bg-background rounded-[2rem] p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
            >
              <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-secondary/10 rounded-3xl p-8 text-center max-w-3xl mx-auto border border-secondary/20">
          <p className="text-xl lg:text-2xl font-display font-bold text-primary mb-2">
            "Quanto custa a tranquilidade de saber que ele está sendo bem cuidado?"
          </p>
          <p className="text-gray-600">
             Muito menos do que tratar uma emergência grave depois.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;