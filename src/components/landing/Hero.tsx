"use client";
import { ShieldCheck, Lock, BadgeCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const WA_LINK =
  "https://wa.me/5585991275429?text=Quero%20solicitar%20o%20laudo%20para%20fralda%20geri%C3%A1trica.";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] top-[-100px] left-1/2 -translate-x-1/2 z-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-medium text-muted-foreground tracking-tight">
                Mais de 120 fraldas/mês grátis pelo SUS — em 24h
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground tracking-tighter-custom mb-6 leading-[1.1]">
              Pare de gastar R$ 300 por mês com fraldas.{" "}
              <br className="hidden sm:block" />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              >
                Tenha até 120 grátis, todo mês.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light max-w-xl mx-auto">
              Em 24 horas, com R$ 59, um único laudo médico (válido por 6 meses) destrava o seu
              direito ao Programa Farmácia Popular. Tudo pelo WhatsApp, com médico CRM. Se o
              médico não aprovar, <strong className="text-foreground font-medium">você recebe 100% do dinheiro de volta</strong>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-base shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all gap-2"
                >
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5" />
                    Quero economizar — R$ 59
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-base bg-card hover:bg-secondary gap-2"
                >
                  <a href="#precos">Ver quanto vou economizar</a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center max-w-md">
                ✓ Pagamento único &nbsp;•&nbsp; ✓ Resposta em 24h &nbsp;•&nbsp; ✓ 100% reembolsado
                se não aprovado
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Laudo com validade jurídica
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  100% LGPD
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Médico responsável
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
