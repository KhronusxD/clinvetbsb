import React from 'react';
import { PawPrint, Phone, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK, PHONE_MAIN } from '../constants';
import { trackWhatsApp, trackPhone } from '../utils/tracking';

const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="bg-white pb-10 px-4">
      <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 transform rotate-12">
            <PawPrint size={120} />
          </div>
          <div className="absolute bottom-10 right-10 transform -rotate-12">
            <PawPrint size={150} />
          </div>
        </div>

        {/* Orange accent circle top-right */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            🐾 Sua família merece o melhor cuidado
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Não Espere. Garanta a Saúde e a Felicidade do Seu Pet Hoje Mesmo.
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende uma consulta e deixe que nossos especialistas cuidem do seu melhor amigo com a dedicação que ele merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={PHONE_LINK}
              onClick={() => trackPhone('final_cta')}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-primary text-lg py-5 px-10 rounded-full font-display font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} /> 📞 Ligar: {PHONE_MAIN}
            </a>

            <button
              className="w-full sm:w-auto bg-accent hover:bg-orange-500 text-white text-lg py-5 px-10 rounded-full font-display font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
              onClick={() => { trackWhatsApp('final_cta'); window.open(WHATSAPP_LINK, '_blank'); }}
            >
              <MessageCircle size={20} /> 💬 Agende pelo WhatsApp
            </button>
          </div>

          <p className="mt-6 text-sm text-white/60">
            ⭐⭐⭐⭐⭐ Mais de 600 famílias satisfeitas em Sobradinho
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;