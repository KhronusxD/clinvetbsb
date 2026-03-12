import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { trackWhatsApp } from '../utils/tracking';

const TopBar: React.FC = () => {
  return (
    <div className="bg-primary text-white py-2.5 px-4 text-center text-sm font-bold shadow-sm z-50 relative">
      <p className="flex flex-wrap items-center justify-center gap-1">
        ⭐ Mais de 600 avaliações 5 estrelas no Google!
        <span className="opacity-70 mx-1 hidden sm:inline">|</span>
        <span
          className="underline decoration-white/50 underline-offset-2 cursor-pointer hover:text-accent transition-colors"
          onClick={() => { trackWhatsApp('topbar'); window.open(WHATSAPP_LINK, '_blank'); }}
        >
          Agende pelo WhatsApp →
        </span>
      </p>
    </div>
  );
};

export default TopBar;