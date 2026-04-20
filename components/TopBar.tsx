import React from 'react';
import { trackWhatsApp } from '../utils/tracking';
import { getWhatsAppLink } from '../utils/whatsapp';

const TopBar: React.FC = () => {
  return (
    <div className="bg-primary text-white py-2.5 px-4 text-center text-sm font-bold shadow-sm z-50 relative">
      <p className="flex flex-wrap items-center justify-center gap-1">
        ⭐ Mais de 600 avaliações 5 estrelas no Google!
        <span className="opacity-70 mx-1 hidden sm:inline">|</span>
        <span
          className="underline decoration-white/50 underline-offset-2 cursor-pointer hover:text-accent transition-colors"
          onClick={() => { trackWhatsApp('topbar'); window.open(getWhatsAppLink(), '_blank'); }}
        >
          Agende pelo WhatsApp →
        </span>
      </p>
    </div>
  );
};

export default TopBar;