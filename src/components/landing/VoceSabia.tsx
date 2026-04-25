import { FileCheck, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const VoceSabia = () => {
  return (
    <section className="section-padding bg-surface-elevated border-y border-border">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-accent text-[11px] font-bold uppercase tracking-wider">
            <BookOpen className="w-3 h-3" strokeWidth={2.5} />
            Você sabia?
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="mt-5 text-3xl sm:text-[36px] font-bold text-text-primary tracking-tightest">
            Fraldas geriátricas podem ser{" "}
            <span className="text-gradient-brand">100% gratuitas</span>.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-6 space-y-5 text-text-secondary text-[16px] lg:text-[17px] leading-relaxed">
            <p>
              Pelo{" "}
              <strong className="text-text-primary font-semibold">
                Programa Farmácia Popular do Brasil
              </strong>
              , regulamentado pela Portaria GM/MS nº 3.073/2024, idosos com 60 anos ou mais e
              pessoas com deficiência têm direito a até{" "}
              <strong className="text-text-primary font-semibold">
                120 fraldas geriátricas por mês, gratuitas
              </strong>
              , em qualquer farmácia credenciada do programa.
            </p>
            <p>
              O único requisito é apresentar um{" "}
              <strong className="text-text-primary font-semibold">laudo médico válido</strong>,
              emitido por médico com CRM ativo. É exatamente esse laudo que emitimos para você.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 rounded-2xl bg-card border border-border p-6 flex items-start gap-4 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
              <FileCheck className="w-6 h-6 text-primary" strokeWidth={1.75} />
            </div>
            <div>
              <p className="font-semibold text-text-primary tracking-tight text-[15px]">
                Validade do laudo: 180 dias (6 meses)
              </p>
              <p className="text-[14px] text-text-secondary mt-1 leading-relaxed">
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
