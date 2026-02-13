import React from 'react';
import { FAQ_ITEMS } from '../constants';
import { MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600">
            Tiramos suas dúvidas para você não perder tempo.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                {item.question}
              </h3>
              <p className="text-gray-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;