import React, { useState } from 'react';
import { Menu, X, PawPrint } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-primary p-2 rounded-xl text-white">
               <PawPrint size={24} />
            </div>
            <span className="font-display font-bold text-2xl text-primary tracking-tight">
              ClinVet
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display font-bold text-gray-600 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button 
              className="bg-accent hover:bg-terracotta text-white px-6 py-2.5 rounded-full font-display font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 duration-200 flex items-center gap-2"
              onClick={() => window.open('https://wa.me/5561999999999', '_blank')}
            >
              Agendar Agora <PawPrint size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden bg-background border-t border-secondary/20 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-secondary/10 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <button 
                className="w-full bg-accent text-white px-4 py-3 rounded-xl font-display font-bold shadow-md active:scale-95 transition-transform flex justify-center items-center gap-2"
                onClick={() => window.open('https://wa.me/5561999999999', '_blank')}
              >
                Agendar Agora <PawPrint size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;