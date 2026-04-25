"use client";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const WA_LINK =
  "https://wa.me/5585991275429?text=Quero%20solicitar%20o%20laudo%20para%20fralda%20geri%C3%A1trica.";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-header transition-all duration-300">
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
            Quanto economizo
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Dúvidas
          </a>
          <Button
            asChild
            className="rounded-full shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Quero meu laudo — R$ 59
              <ArrowRight className="w-4 h-4" />
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

      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 space-y-3">
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
            Quanto economizo
          </a>
          <a
            href="#faq"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Dúvidas
          </a>
          <Button
            asChild
            className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-2"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              Quero meu laudo — R$ 59 <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Header;
