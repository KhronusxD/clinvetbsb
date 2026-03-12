import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { trackWhatsApp } from '../utils/tracking';

const FloatingWhatsApp: React.FC = () => {
  return (
    <button
      onClick={() => { trackWhatsApp('floating_button'); window.open(WHATSAPP_LINK, '_blank'); }}
      aria-label="Contato pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
    >
      <MessageCircle size={28} fill="white" />
      <span className="absolute right-16 bg-white text-gray-800 text-xs font-bold px-3 py-2 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale pelo WhatsApp 💬
      </span>
    </button>
  );
};

export default FloatingWhatsApp;