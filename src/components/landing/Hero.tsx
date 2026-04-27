"use client";
import { ShieldCheck, Lock, BadgeCheck, MessageCircle, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { WA_LINK, trackCtaClick } from "@/lib/constants";

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
                Avaliação médica online em até 24h • Portaria GM/MS 3.073/2024
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tighter-custom mb-6 leading-[1.05]">
              Laudo médico para fralda geriátrica,{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              >
                em até 24 horas.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed font-light max-w-xl mx-auto">
              Atendimento por telemedicina com médico de CRM ativo. Em caso de indicação clínica,
              emitimos o laudo aceito pelo Programa Farmácia Popular para retirada das fraldas
              geriátricas em farmácia credenciada, conforme Portaria GM/MS nº 3.073/2024.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  variant="premium"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir WhatsApp para solicitar avaliação médica por R$ 59"
                    onClick={() => trackCtaClick("hero")}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Solicitar avaliação — R$ 59
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <a href="#como-funciona">Como funciona</a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center max-w-md">
                ✓ Pagamento único &nbsp;•&nbsp; ✓ Resposta em até 24h &nbsp;•&nbsp; ✓ Sem
                assinatura
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-14 inline-flex flex-wrap justify-center items-center gap-x-5 gap-y-3 sm:gap-x-7 px-5 py-3 rounded-full border border-border bg-card/60 backdrop-blur-sm">
              {[
                { Icon: ShieldCheck, label: "Laudo com validade jurídica" },
                { Icon: BadgeCheck, label: "Médico com CRM ativo" },
                { Icon: Lock, label: "100% LGPD" },
                { Icon: Headset, label: "Atendimento humano" },
              ].map(({ Icon, label }, i, arr) => (
                <span key={label} className="flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={2.25} />
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    {label}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="hidden sm:inline ml-2 text-border" aria-hidden="true">
                      •
                    </span>
                  )}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
