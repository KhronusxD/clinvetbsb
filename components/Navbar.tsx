import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK, PHONE_LINK, PHONE_MAIN } from '../constants';
import { trackWhatsApp, trackPhone } from '../utils/tracking';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/logo-oficial.png"
              alt="Clinvet Sobradinho"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display font-bold text-gray-600 hover:text-primary transition-colors duration-200 text-sm xl:text-base"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_LINK}
              onClick={() => trackPhone('navbar')}
              className="flex items-center gap-2 text-primary border border-primary/30 hover:bg-primary-light px-4 py-2 rounded-full font-bold text-sm transition-all duration-200"
            >
              <Phone size={15} /> Ligar
            </a>
            <button
              className="bg-accent hover:bg-orange-500 text-white px-5 py-2.5 rounded-full font-display font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 duration-200 flex items-center gap-2 text-sm xl:text-base"
              onClick={() => { trackWhatsApp('navbar'); window.open(WHATSAPP_LINK, '_blank'); }}
            >
              <MessageCircle size={16} /> WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a href={PHONE_LINK} onClick={() => trackPhone('navbar')} className="bg-primary text-white p-2 rounded-full">
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-primary-light hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={PHONE_LINK}
              onClick={() => trackPhone('navbar')}
              className="w-full flex justify-center items-center gap-2 border-2 border-primary text-primary px-4 py-3 rounded-xl font-display font-bold"
            >
              📞 Ligar: {PHONE_MAIN}
            </a>
              <button
                className="w-full bg-accent text-white px-4 py-3 rounded-xl font-display font-bold shadow-md active:scale-95 transition-transform flex justify-center items-center gap-2"
                onClick={() => { trackWhatsApp('navbar'); window.open(WHATSAPP_LINK, '_blank'); }}
              >
                <MessageCircle size={18} /> WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;