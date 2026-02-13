import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* Desktop Floating Button */}
      <a
        href="https://wa.me/5561999999999"
        target="_blank"
        rel="noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group items-center gap-2"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold pl-0 group-hover:pl-2">
          Agende agora
        </span>
        {/* Pulse effect ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
      </a>

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4 bg-gradient-to-t from-white via-white to-transparent pb-6">
        <a
          href="https://wa.me/5561999999999"
          target="_blank"
          rel="noreferrer"
          className="flex w-full bg-[#25D366] text-white py-4 rounded-full shadow-xl justify-center items-center gap-2 font-display font-bold text-lg animate-bounce-slight"
        >
          <MessageCircle size={24} />
          Agendar via WhatsApp
        </a>
      </div>
    </>
  );
};

export default FloatingWhatsApp;