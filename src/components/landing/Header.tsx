"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const WA_LINK =
  "https://wa.me/5585991275429?text=Quero%20solicitar%20o%20laudo%20para%20fralda%20geri%C3%A1trica.";

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
    <nav className={`fixed top-0 w-full z-50 glass-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container-page h-16 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#como-funciona"
            className="text-sm font-medium text-ink-700 hover:text-primary transition-colors"
          >
            Como funciona
          </a>
          <a
            href="#precos"
            className="text-sm font-medium text-ink-700 hover:text-primary transition-colors"
          >
            Investimento
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-ink-700 hover:text-primary transition-colors"
          >
            Dúvidas
          </a>
          <Button
            asChild
            size="sm"
            className="rounded-[10px] h-10 px-5 text-sm font-semibold shadow-md bg-primary hover:bg-primary/90 text-primary-foreground gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Solicitar avaliação · R$ 59
              <ArrowRight className="w-[18px] h-[18px]" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-5 space-y-4">
          <a
            href="#como-funciona"
            className="block text-base font-medium text-ink-700"
            onClick={() => setMobileOpen(false)}
          >
            Como funciona
          </a>
          <a
            href="#precos"
            className="block text-base font-medium text-ink-700"
            onClick={() => setMobileOpen(false)}
          >
            Investimento
          </a>
          <a
            href="#faq"
            className="block text-base font-medium text-ink-700"
            onClick={() => setMobileOpen(false)}
          >
            Dúvidas
          </a>
          <Button
            asChild
            className="w-full rounded-[10px] h-12 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-2 font-semibold shadow-md"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar avaliação · R$ 59 <ArrowRight className="w-[18px] h-[18px]" />
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Header;
