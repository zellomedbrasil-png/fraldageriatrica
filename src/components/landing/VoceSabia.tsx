import { FileCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const VoceSabia = () => {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom mb-6">
            Você sabia que fraldas geriátricas podem ser <span className="text-accent">gratuitas</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-5 text-muted-foreground text-base lg:text-lg font-light">
            <p>
              Pelo <strong className="text-foreground font-semibold">Programa Farmácia Popular do Brasil</strong>,
              regulamentado pela Portaria GM/MS nº 3.073/2024, idosos com 60 anos ou mais e pessoas
              com deficiência têm direito a até <strong className="text-foreground font-semibold">120 fraldas
              geriátricas por mês, gratuitas</strong>, em qualquer farmácia credenciada do programa.
            </p>
            <p>
              O único requisito é apresentar um <strong className="text-foreground font-semibold">laudo
              médico válido</strong>, emitido por médico com CRM ativo. É exatamente esse laudo que
              emitimos para você.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 rounded-3xl bg-card border border-border p-6 sm:p-7 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center shrink-0">
              <FileCheck className="w-6 h-6 text-accent" strokeWidth={2} />
            </div>
            <div>
              <p className="font-semibold text-foreground tracking-tight">
                Validade do laudo: 180 dias (6 meses)
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Você renova a cada 6 meses, conforme a regulamentação vigente.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VoceSabia;