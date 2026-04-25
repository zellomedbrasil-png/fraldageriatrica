"use client";
import { ShieldCheck, Lock, BadgeCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const WA_LINK =
  "https://wa.me/5585991275429?text=Quero%20solicitar%20o%20laudo%20para%20fralda%20geri%C3%A1trica.";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-soft border border-primary/15 mb-8">
              <ShieldCheck className="w-4 h-4 text-primary" strokeWidth={2.25} />
              <span className="text-sm font-medium text-primary">
                Telemedicina regulamentada · CFM 2.314/2022
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-[1.1]">
              Avaliação médica online para laudo de fralda geriátrica.{" "}
              <br className="hidden sm:block" />
              <span className="text-primary">Em até 24 horas, sem sair de casa.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Atendimento por telemedicina com médico de CRM ativo. Em caso de indicação clínica,
              emitimos o laudo aceito pelo Programa Farmácia Popular para retirada gratuita de
              fraldas geriátricas (até 120/mês), conforme Portaria GM/MS nº 3.073/2024.{" "}
              <strong className="text-foreground font-semibold">
                Se o médico não identificar indicação clínica, devolvemos 100% do valor pago.
              </strong>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 py-7 text-base font-semibold shadow-md gap-2"
                >
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5" />
                    Solicitar avaliação — R$ 59
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 py-7 text-base bg-card hover:bg-secondary gap-2"
                >
                  <a href="#como-funciona">Como funciona</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                ✓ Pagamento único &nbsp;•&nbsp; ✓ Resposta em até 24h &nbsp;•&nbsp; ✓ Reembolso
                integral se não houver indicação clínica
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-14 grid sm:grid-cols-3 gap-3 w-full max-w-3xl">
              <div className="trust-seal">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">Validade jurídica</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Assinatura ICP-Brasil</p>
                </div>
              </div>
              <div className="trust-seal">
                <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">Dados protegidos</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Conformidade LGPD</p>
                </div>
              </div>
              <div className="trust-seal">
                <BadgeCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">Médico responsável</p>
                  <p className="text-xs text-muted-foreground mt-0.5">CRM ativo verificado</p>
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
