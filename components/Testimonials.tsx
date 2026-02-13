import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS, AUTHORITY_BADGES } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-6">
            Quem ama, confia na ClinVet.
          </h2>
          
          {/* Authority Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {AUTHORITY_BADGES.map((badge, idx) => (
              <div key={idx} className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2 text-sm font-bold text-gray-600">
                <span className="text-terracotta">{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[2rem] shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex text-yellow-400 gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-600 italic leading-relaxed mb-6 text-lg">
                "{t.text}"
              </p>

              <div className="font-display font-bold text-primary">
                — {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;