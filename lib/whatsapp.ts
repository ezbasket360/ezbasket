// TODO: replace with EZbasket's real WhatsApp business number.
// Format: country code + number, digits only (no "+", spaces or dashes). e.g. "919876543210"
export const WHATSAPP_NUMBER = "910000000000";

const WHATSAPP_MESSAGE =
  "வணக்கம்! நான் EZbasket-ல் ஆர்டர் செய்ய விரும்புகிறேன்.\n\n(உங்கள் பட்டியலை இங்கே எழுதுங்கள்)";

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
