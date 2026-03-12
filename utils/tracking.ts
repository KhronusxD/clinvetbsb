// Centralized DataLayer tracking utility
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

type ButtonLocation =
  | 'topbar'
  | 'navbar'
  | 'hero'
  | 'final_cta'
  | 'footer'
  | 'floating_button'
  | 'footer_maps';

function pushToDataLayer(event: string, buttonType: string, buttonLocation?: ButtonLocation) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    button_type: buttonType,
    ...(buttonLocation ? { button_location: buttonLocation } : {}),
  });
}

export function trackWhatsApp(location: ButtonLocation) {
  pushToDataLayer('click_whatsapp', 'whatsapp', location);
}

export function trackPhone(location: ButtonLocation) {
  pushToDataLayer('click_call', 'phone', location);
}

export function trackMaps() {
  pushToDataLayer('click_maps', 'maps', 'footer_maps');
}
