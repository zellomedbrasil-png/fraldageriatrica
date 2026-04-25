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
    <nav className="fixed top-0 w-full z-50 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#como-funciona"
            className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Como funciona
          </a>
          <a
            href="#faq"
            className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Dúvidas
          </a>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-5"
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Solicitar avaliação · R$ 59
              <ArrowRight className="w-4 h-4" />
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
            className="block text-base font-medium text-foreground py-2"
            onClick={() => setMobileOpen(false)}
          >
            Como funciona
          </a>
          <a
            href="#faq"
            className="block text-base font-medium text-foreground py-2"
            onClick={() => setMobileOpen(false)}
          >
            Dúvidas
          </a>
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-2 py-6 text-base"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar avaliação · R$ 59 <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Header;
