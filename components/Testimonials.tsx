import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS, GOOGLE_REVIEWS_LINK } from '../constants';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % TESTIMONIALS.length);
      }, 4000);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Show 3 visible at a time on desktop
  const visibleCount = 3;
  const visibleTestimonials = Array.from({ length: visibleCount }, (_, i) =>
    TESTIMONIALS[(current + i) % TESTIMONIALS.length]
  );

  return (
    <section id="depoimentos" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-light rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-white border-2 border-yellow-400 px-6 py-3 rounded-full shadow-md mb-8">
            <span className="text-2xl">🌟</span>
            <div className="text-left">
              <p className="font-display font-bold text-gray-800 text-sm">Mais de 600 avaliações no Google!</p>
              <p className="text-yellow-500 font-bold text-sm">⭐⭐⭐⭐⭐ 4.8 de 5 estrelas</p>
            </div>
            <a
              href={GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-3 py-1.5 rounded-full border border-blue-200 transition-colors whitespace-nowrap"
            >
              Ver no Google
            </a>
          </div>

          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
            Histórias de Amor e Confiança
          </h2>
          <p className="text-gray-500 text-lg">que Nos Inspiram</p>
        </div>

        {/* Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex text-yellow-400 gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed mb-5 text-sm">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold font-display text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-bold text-primary text-sm">— {t.name}</p>
                  {t.pet && <p className="text-xs text-gray-400">{t.pet}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mb-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === current
                  ? 'w-8 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-gray-200 hover:bg-primary/40'
              }`}
            />
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center">
          <a
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary font-bold px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Ver todas as +600 avaliações no Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;