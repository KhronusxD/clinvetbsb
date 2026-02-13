import React from 'react';

const DreamOutcome: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
             <img 
               src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop" 
               alt="Cachorro dormindo tranquilo" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent lg:hidden"></div>
          </div>
          <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center text-white">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Imagine seu pet saudável, brincando e sem dor.
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
              Nós não cuidamos apenas de doenças. Cuidamos da alegria da sua casa. Prevenção é o maior ato de amor que você pode dar.
            </p>
            <div className="inline-block">
               <span className="bg-secondary/20 border border-secondary/50 px-4 py-2 rounded-full text-sm font-bold text-secondary-100">
                 ✨ Resultado Garantido: Tranquilidade
               </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamOutcome;