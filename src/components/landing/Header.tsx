import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
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

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-primary text-primary-foreground text-center text-xs py-1.5 px-4 font-medium">
        Conforme Portaria GM/MS nº 3.073/2024 ✓
      </div>
      <nav className="glass-header transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />

          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-accent-glow"
              data-event="cta_click"
              data-plan="laudo"
            >
              <a href="#precos">
                Solicitar Laudo Agora
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-card border-t border-border px-6 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-muted-foreground py-1"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 mt-2"
              data-event="cta_click"
              data-plan="laudo"
            >
              <a href="#precos" onClick={() => setMobileOpen(false)}>
                Solicitar Laudo Agora <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;