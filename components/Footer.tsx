import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER, PHONE_LINK, PHONE_MAIN, EMAIL, ADDRESS, GOOGLE_MAPS_LINK, SERVICES } from '../constants';
import { trackWhatsApp, trackPhone, trackMaps } from '../utils/tracking';

const Footer: React.FC = () => {
  // Real Google Maps embed URL obtained from Google Maps > Share > Embed a map
  const mapsEmbedSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.019786022881!2d-47.80196499999999!3d-15.643934799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a407e75283f2d%3A0x3b7a6cb88231e1d6!2sClinvet%20Veterin%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1773329316288!5m2!1spt-BR!2sbr`;

  return (
    <footer id="contato-footer" className="bg-primary text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 mb-16">

          {/* Column 1: Brand + Contato */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo-branco.png"
                alt="Clinvet Sobradinho"
                className="h-16 w-auto object-contain"
              />
            </div>

            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 text-accent shrink-0" size={18} />
                <p className="text-sm leading-relaxed">{ADDRESS}</p>
              </li>
              <li>
                <a href={PHONE_LINK} onClick={() => trackPhone('footer')} className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="text-accent shrink-0" size={18} />
                  <p className="text-sm">{PHONE_MAIN}</p>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('footer')} className="flex items-center gap-3 hover:text-accent transition-colors">
                  <MessageCircle className="text-accent shrink-0" size={18} />
                  <p className="text-sm">(61) 98157-9676 – WhatsApp</p>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail className="text-accent shrink-0" size={18} />
                  <p className="text-sm">{EMAIL}</p>
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-accent p-2.5 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="bg-white/10 hover:bg-accent p-2.5 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('footer')} aria-label="WhatsApp" className="bg-white/10 hover:bg-accent p-2.5 rounded-full transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Specialties */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Especialidades</h3>
            <ul className="space-y-2">
              {SERVICES.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-200 text-sm hover:text-accent transition-colors cursor-default">
                  <span className="text-accent text-base">›</span>
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Map */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">📍 Nossa Localização</h3>
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 mb-4 h-52">
              <iframe
                title="Localização Clinvet Sobradinho"
                src={mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <button
              onClick={() => { trackMaps(); window.open('https://maps.app.goo.gl/mumMYF72Py2X519g9', '_blank'); }}
              className="block w-full text-center bg-accent hover:bg-orange-500 text-white py-3 rounded-xl font-display font-bold transition-colors text-sm cursor-pointer"
            >
              🗺 Ver Rota no Google Maps
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 Clinvet - Clínica Veterinária em Sobradinho. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ para a saúde e bem-estar do seu pet.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;