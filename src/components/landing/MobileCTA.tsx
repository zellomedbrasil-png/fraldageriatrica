"use client";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WA_LINK, PRICE_LABEL, trackCtaClick } from "@/lib/constants";

/**
 * Sticky bottom CTA, visible on mobile only, after scrolling past 400px.
 * Designed to disappear gracefully when the user is at the very top.
 */
const MobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-elegant px-3 py-2 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold text-primary uppercase tracking-wider leading-none">
            Avaliação médica
          </p>
          <p className="text-sm font-semibold text-foreground leading-tight mt-0.5">
            {PRICE_LABEL} • pagamento único
          </p>
        </div>
        <Button asChild variant="premium" size="pill" className="shrink-0">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp para solicitar avaliação médica"
            onClick={() => trackCtaClick("sticky_mobile")}
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileCTA;