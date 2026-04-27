"use client";
import { ShieldCheck, Lock, BadgeCheck, MessageCircle, Headset, ArrowDown, FileSignature } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { WA_LINK, trackCtaClick } from "@/lib/constants";
import heroHands from "@/assets/hero-hands.jpg";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna esquerda — conteúdo (60%) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border shadow-sm mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                <span className="text-xs font-semibold text-foreground tracking-tight">
                  Atendimento ativo
                </span>
                <span className="text-xs text-muted-foreground">• Resposta em até 24h</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold text-foreground tracking-tightest mb-6 leading-[1.05]">
                Laudo médico para fralda geriátrica{" "}
                <span className="relative inline-block whitespace-nowrap" style={{ color: "var(--brand-primary-dark)" }}>
                  em até 24 horas
                  <svg
                    aria-hidden="true"
                    className="draw-underline absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 220 12"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M2 8 C 50 2, 110 12, 218 5"
                      stroke="var(--brand-accent)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground mb-9 leading-relaxed max-w-xl">
                Cuidar de quem cuidou da gente exige praticidade. Avaliamos o caso por
                telemedicina e, havendo indicação clínica, emitimos o laudo aceito pelo Programa
                Farmácia Popular para retirada das fraldas em farmácia credenciada.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
                <Button
                  asChild
                  variant="premium"
                  size="xl"
                  className="w-full sm:w-auto animate-glow-pulse"
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
                    <Lock className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <a href="#como-funciona">
                    Como funciona
                    <ArrowDown className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              <p className="text-[13px] text-muted-foreground/90 max-w-lg">
                Pagamento único &nbsp;·&nbsp; Resposta em até 24h &nbsp;·&nbsp; Sem assinatura
                &nbsp;·&nbsp; Atendimento humano pelo WhatsApp
              </p>
            </ScrollReveal>
          </div>

          {/* Coluna direita — imagem (40%) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <ScrollReveal delay={0.15} direction="left">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-[32px] blur-2xl opacity-50 -z-10"
                  style={{ background: "var(--gradient-accent)" }}
                  aria-hidden="true"
                />
                <img
                  src={heroHands}
                  alt="Mão de uma pessoa jovem segurando com cuidado a mão de um idoso, simbolizando atenção familiar com luz natural quente"
                  width={1024}
                  height={1024}
                  className="relative w-full aspect-square lg:aspect-[4/5] object-cover rounded-3xl shadow-elegant border border-border"
                  style={{ filter: "saturate(0.92)" }}
                />
                {/* Floating trust badge */}
                <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 bg-white border border-border rounded-2xl shadow-card px-4 py-3 max-w-[260px]">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-accent)" }}>
                    <FileSignature className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-primary uppercase tracking-wider leading-none">
                      Assinatura ICP-Brasil
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-tight">
                      Laudo digital com validade jurídica
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Trust strip — abaixo do hero, full-width */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 lg:mt-20 rounded-2xl border border-border bg-white/70 backdrop-blur-sm px-4 sm:px-8 py-5 overflow-x-auto">
            <div className="flex items-center justify-between gap-4 sm:gap-2 min-w-max sm:min-w-0">
              {[
                { Icon: ShieldCheck, label: "Laudo com validade jurídica" },
                { Icon: BadgeCheck, label: "Médicos com CRM ativo" },
                { Icon: Lock, label: "100% LGPD" },
                { Icon: Headset, label: "Atendimento humano" },
                { Icon: FileSignature, label: "Assinatura ICP-Brasil" },
              ].map(({ Icon, label }, i, arr) => (
                <div key={label} className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  <span className="text-[11px] sm:text-xs font-semibold text-foreground/80 uppercase tracking-wider whitespace-nowrap">
                    {label}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="hidden sm:inline-block w-px h-5 bg-border ml-2 sm:ml-4" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
