import { MessageCircle } from "lucide-react";

const WA_NUMBER = "5585991275429";
const MSG = encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre o laudo para fralda geriátrica.");

export const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:-translate-y-1 hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};
