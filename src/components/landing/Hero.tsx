"use client";
import { Shield, Lock, Stethoscope, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const WA_LINK =
  "https://wa.me/5585991275429?text=Quero%20solicitar%20o%20laudo%20para%20fralda%20geri%C3%A1trica.";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Glow sutil atrás do título */}
      <div
        className="absolute w-[800px] h-[600px] top-[-120px] left-1/2 -translate-x-1/2 z-0 pointer-events-none opacity-60"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      {/* Gradiente sutil de Primary-soft para branco */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--primary-soft) 60%, transparent) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-[13px] font-medium text-primary tracking-tight">
                Avaliação médica online em até 24h
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-bold text-ink-900 mb-6 leading-[1.05]">
              Avaliação médica online para laudo de fralda geriátrica.{" "}
              <br className="hidden sm:block" />
              <span className="text-primary">
                Em até 24 horas, sem sair de casa.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-ink-700 mb-10 leading-[1.6] max-w-[600px] mx-auto">
              Atendimento por telemedicina com médico de CRM ativo. Em caso de indicação clínica,
              emitimos o laudo aceito pelo Programa Farmácia Popular para retirada gratuita de
              fraldas geriátricas (até 120/mês), conforme Portaria GM/MS nº 3.073/2024.{" "}
              <strong className="text-ink-900 font-semibold">
                Se o médico não identificar indicação clínica, devolvemos 100% do valor pago.
              </strong>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Button
                  asChild
                  className="w-full sm:w-auto rounded-[10px] h-[52px] px-7 text-[16px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                >
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    Solicitar avaliação — R$ 59
                    <ArrowRight className="w-[18px] h-[18px]" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto rounded-[10px] h-[52px] px-7 text-[16px] font-semibold bg-white border-[1.5px] border-border hover:border-primary hover:bg-surface-soft text-ink-900 transition-all duration-200"
                >
                  <a href="#como-funciona">Como funciona</a>
                </Button>
              </div>

              {/* Trust signals pill */}
              <div className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-2 rounded-full bg-surface-soft border border-border">
                <span className="inline-flex items-center gap-1.5 text-[13px] text-ink-500">
                  <Check className="w-3.5 h-3.5 text-success" strokeWidth={3} />
                  Pagamento único
                </span>
                <span className="inline-flex items-center gap-1.5 text-[13px] text-ink-500">
                  <Check className="w-3.5 h-3.5 text-success" strokeWidth={3} />
                  Resposta em 24h
                </span>
                <span className="inline-flex items-center gap-1.5 text-[13px] text-ink-500">
                  <Check className="w-3.5 h-3.5 text-success" strokeWidth={3} />
                  Reembolso integral
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-14 pt-8 border-t border-border w-full max-w-2xl">
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-ink-400" strokeWidth={2} />
                  <span className="text-[12px] font-semibold text-ink-500 uppercase tracking-[0.08em]">
                    Laudo com validade jurídica
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-ink-400" strokeWidth={2} />
                  <span className="text-[12px] font-semibold text-ink-500 uppercase tracking-[0.08em]">
                    100% LGPD
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-ink-400" strokeWidth={2} />
                  <span className="text-[12px] font-semibold text-ink-500 uppercase tracking-[0.08em]">
                    Médico responsável
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
