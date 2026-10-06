import { profile } from '../data/profile';

/** Enlace directo a una conversación de WhatsApp (funciona en celular y escritorio). */
export function whatsappUrl(message: string = profile.contact.whatsappMessage): string {
  const number = profile.contact.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
