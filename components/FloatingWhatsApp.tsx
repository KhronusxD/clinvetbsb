import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { trackWhatsApp } from '../utils/tracking';
import { WHATSAPP_NUMBER } from '../constants';

/**
 * Chat widget flutuante estilo WhatsApp.
 * Ao clicar no FAB: abre janela com bolha de boas-vindas "vinda" da Clinvet,
 * input pra mensagem e botão de envio. O envio abre o WhatsApp já com o
 * texto digitado pelo usuário pré-preenchido via wa.me/<numero>?text=...
 *
 * Tracking via GTM/dataLayer continua intacto (trackWhatsApp).
 */

const WELCOME_MESSAGE =
  'Olá! Aqui é da Clinvet 🐾\nComo a gente pode cuidar do seu pet hoje?';

const PLACEHOLDER = 'Conta pra gente sobre seu pet…';

const DEFAULT_MSG_HOME =
  'Olá! Vim pelo site da Clinvet e gostaria de mais informações.';
const DEFAULT_MSG_CIRURGIA =
  'Olá! Vi a página de cirurgias da Clinvet e gostaria de saber mais.';

function getDefaultMessage(): string {
  if (typeof window === 'undefined') return DEFAULT_MSG_HOME;
  const path = window.location.pathname.replace(/\/$/, '');
  return path === '/cirurgias' ? DEFAULT_MSG_CIRURGIA : DEFAULT_MSG_HOME;
}

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');
  const [showTyping, setShowTyping] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Quando abre pela primeira vez, simula "digitando" e depois mostra a mensagem
  useEffect(() => {
    if (!isOpen || showMessage) return;
    setShowTyping(true);
    const t = setTimeout(() => {
      setShowTyping(false);
      setShowMessage(true);
      setCurrentTime(
        new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'America/Sao_Paulo',
        })
      );
    }, 1100);
    return () => clearTimeout(t);
  }, [isOpen, showMessage]);

  // Foco no input depois que a mensagem aparece
  useEffect(() => {
    if (isOpen && showMessage) {
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [isOpen, showMessage]);

  // ESC fecha a janela
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    trackWhatsApp('floating_button');
  };

  const handleSend = () => {
    const msg = text.trim() || getDefaultMessage();
    trackWhatsApp('floating_button');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener');
    setText('');
    setIsOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Botão flutuante (FAB) */}
      <button
        onClick={handleOpen}
        aria-label="Abrir conversa pelo WhatsApp"
        aria-expanded={isOpen}
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 flex items-center justify-center group ${
          isOpen
            ? 'scale-0 opacity-0 pointer-events-none'
            : 'scale-100 opacity-100'
        }`}
      >
        <MessageCircle size={28} fill="white" />
        <span className="absolute right-16 bg-white text-gray-800 text-xs font-bold px-3 py-2 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale pelo WhatsApp
        </span>
      </button>

      {/* Backdrop mobile */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/30 z-40 sm:hidden transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Janela do chat */}
      <div
        role="dialog"
        aria-label="Chat com a Clinvet pelo WhatsApp"
        aria-modal="true"
        className={`fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6
          w-[calc(100vw-2rem)] max-w-sm
          h-[480px] max-h-[calc(100vh-2rem)]
          rounded-3xl shadow-2xl overflow-hidden
          flex flex-col bg-[#ECE5DD]
          transition-all duration-300 ease-out
          ${
            isOpen
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
          }
        `}
      >
        {/* Header */}
        <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3 shadow-md">
          <div className="relative shrink-0">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Clinvet"
                className="w-9 h-9 object-contain"
              />
            </div>
            <span
              className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#075E54]"
              aria-label="Online"
            ></span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-base leading-tight truncate">
              Clinvet Sobradinho
            </p>
            <p className="text-xs text-white/80 leading-tight">
              online · responde em minutos
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fechar chat"
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mensagens */}
        <div
          className="flex-1 overflow-y-auto px-4 py-5 space-y-3"
          style={{
            // Pattern simples WhatsApp (pontinhos sutis) opcional. Mantenho cor lisa.
            backgroundColor: '#ECE5DD',
          }}
        >
          {showTyping && (
            <div className="inline-block bg-white rounded-2xl rounded-tl-sm shadow-sm px-4 py-3 animate-pulse">
              <div className="flex gap-1.5 items-center">
                <span
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0ms' }}
                />
                <span
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '150ms' }}
                />
                <span
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '300ms' }}
                />
              </div>
            </div>
          )}

          {showMessage && (
            <div className="max-w-[88%] animate-fade-in-up">
              <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm px-4 py-3 relative">
                <p className="text-sm text-gray-800 whitespace-pre-line leading-relaxed">
                  {WELCOME_MESSAGE}
                </p>
                <p className="text-[10px] text-gray-400 text-right mt-1">
                  {currentTime}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="bg-[#F0F0F0] px-3 py-3 flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={PLACEHOLDER}
            aria-label="Sua mensagem"
            className="flex-1 bg-white rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 placeholder:text-gray-400"
          />
          <button
            onClick={handleSend}
            aria-label="Enviar mensagem pelo WhatsApp"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white p-2.5 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center shrink-0 shadow-md"
            disabled={!showMessage}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
