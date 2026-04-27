"use client";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { WA_LINK, trackCtaClick } from "@/lib/constants";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 glass-header transition-all duration-300 ${
        scrolled ? "header-shadow" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#como-funciona"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Como funciona
          </a>
          <a
            href="#precos"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Valor
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Dúvidas
          </a>
          <Button asChild variant="premium" size="pill">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para solicitar avaliação médica"
              onClick={() => trackCtaClick("header")}
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar avaliação
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-card border-t border-border px-6 py-4 space-y-3">
          <a
            href="#como-funciona"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Como funciona
          </a>
          <a
            href="#precos"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Valor
          </a>
          <a
            href="#faq"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Dúvidas
          </a>
          <Button asChild variant="premium" size="pill" className="w-full mt-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para solicitar avaliação médica"
              onClick={() => {
                trackCtaClick("header_mobile");
                setMobileOpen(false);
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar avaliação
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
