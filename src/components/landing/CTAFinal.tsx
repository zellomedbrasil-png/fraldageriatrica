import { MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { WA_LINK, PRICE_LABEL, trackCtaClick } from "@/lib/constants";

const CTAFinal = () => {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-[32px] px-8 sm:px-14 py-14 sm:py-16 text-white shadow-elegant"
            style={{ background: "var(--gradient-brand-deep)" }}
          >
            {/* Decoração: padrão de pontos sutil */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1.5px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Glow accent */}
            <div
              aria-hidden="true"
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-40"
              style={{ background: "var(--brand-accent)" }}
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full blur-3xl opacity-25"
              style={{ background: "var(--brand-primary)" }}
            />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold text-white/80 uppercase tracking-[0.18em] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                  Vamos cuidar disso juntos
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tightest leading-[1.05] mb-4 text-white">
                  Garanta as fraldas do seu familiar — sem fila, sem burocracia.
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-2 max-w-xl">
                  Avaliação médica online por telemedicina. Resposta em até 24 horas. Tudo pelo
                  WhatsApp que você já usa.
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-[13px] text-white/70">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-accent" strokeWidth={2} />
                    Médicos com CRM ativo
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    Pagamento único
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    Sem assinatura
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-3">
                <Button
                  asChild
                  size="xl"
                  className="bg-white text-primary hover:bg-white/95 hover:-translate-y-0.5 transition-all shadow-lg font-semibold"
                >
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Solicitar avaliação pelo WhatsApp"
                    onClick={() => trackCtaClick("cta_final")}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Solicitar avaliação — {PRICE_LABEL}
                  </a>
                </Button>
                <p className="text-[12px] text-white/60 lg:text-right">
                  Tudo pelo WhatsApp · Resposta em até 24h
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTAFinal;