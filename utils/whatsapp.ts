import { WHATSAPP_LINK, WHATSAPP_LINK_CIRURGIA } from '../constants';

export function getWhatsAppLink(): string {
  if (typeof window === 'undefined') return WHATSAPP_LINK;
  const path = window.location.pathname.replace(/\/$/, '');
  return path === '/cirurgias' ? WHATSAPP_LINK_CIRURGIA : WHATSAPP_LINK;
}
