import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5585991275429?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20laudo%20para%20fralda%20geri%C3%A1trica."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-accent-glow hover:scale-105 transition-transform"
      data-event="cta_click"
      data-plan="whatsapp"
    >
      <MessageCircle className="w-7 h-7" strokeWidth={2} />
    </a>
  );
};

export default WhatsAppFloat;