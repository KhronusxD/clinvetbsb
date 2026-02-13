import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-6">
            Quem vai cuidar do seu amor?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Nossa equipe é formada por especialistas apaixonados que também são tutores. Entendemos exatamente o que você sente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 z-10 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative circle behind */}
                <div className="absolute top-2 -right-2 w-48 h-48 rounded-full bg-secondary/20 -z-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
              </div>
              
              <h3 className="text-xl font-display font-bold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-terracotta font-medium mb-2">{member.role}</p>
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-secondary/20">
                <p className="text-sm text-gray-500 italic">
                  "{member.funFact}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;