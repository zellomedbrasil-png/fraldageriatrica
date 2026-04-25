"use client";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const links = [
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#quem-tem-direito", label: "Quem Tem Direito" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

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
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-page h-9 flex items-center justify-center gap-2 text-[12px] sm:text-[13px]">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
          <span className="font-medium tracking-tight truncate">
            Conforme Portaria GM/MS nº 3.073/2024 e Resolução CFM 2.314/2022
          </span>
        </div>
      </div>

      <nav
        className={`glass-header transition-shadow duration-300 ${scrolled ? "header-shadow" : ""}`}
      >
        <div className="container-page h-20 flex items-center justify-between">
          <Logo />

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors ring-focus rounded"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="rounded-lg h-11 px-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 shadow-accent-glow"
              data-event="cta_click"
              data-plan="laudo"
            >
              <a href="#precos">
                Solicitar Laudo
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-text-primary ring-focus rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" strokeWidth={1.75} /> : <Menu className="w-6 h-6" strokeWidth={1.75} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="container-page py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[15px] font-medium text-text-secondary py-3 px-2 rounded-lg hover:bg-surface-soft"
                >
                  {l.label}
                </a>
              ))}
              <Button
                asChild
                className="w-full rounded-lg h-12 mt-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2"
                data-event="cta_click"
                data-plan="laudo"
              >
                <a href="#precos" onClick={() => setMobileOpen(false)}>
                  Solicitar Laudo <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
