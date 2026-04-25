import { ClipboardCheck, Stethoscope, FileCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "1",
    title: "Triagem rápida no WhatsApp",
    desc: "Você responde um questionário clínico com os dados do paciente — condição, mobilidade e histórico. Tudo pelo celular, sem exames adicionais.",
    Icon: ClipboardCheck,
  },
  {
    num: "2",
    title: "Avaliação por médico com CRM",
    desc: "O médico responsável analisa o caso por teleconsulta, conforme a Resolução CFM 2.314/2022, para verificar a indicação clínica.",
    Icon: Stethoscope,
  },
  {
    num: "3",
    title: "Laudo digital em até 24h",
    desc: "Havendo indicação clínica, o laudo é emitido com assinatura digital ICP-Brasil (validade de 180 dias) e enviado pelo WhatsApp para apresentação em farmácia credenciada do Programa Farmácia Popular, conforme estoque local.",
    Icon: FileCheck,
    highlight: true,
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-surface-soft border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.14em] mb-3">
              Processo 100% online
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              Atendimento simples, em conformidade com a regulamentação.
            </h2>
            <p className="text-foreground/70 mt-3 text-lg max-w-2xl">
              Avaliação por teleconsulta conforme a Resolução CFM 2.314/2022. Em caso de indicação
              clínica, o laudo é emitido em até 24 horas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.15}>
              <div className="rounded-3xl p-8 bg-card border border-border h-full flex flex-col">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl font-light text-primary/40 leading-none tabular-nums">
                    {step.num}
                  </span>
                  <step.Icon className="w-5 h-5 text-primary mt-2" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-foreground/70">{step.desc}</p>
                {step.highlight && (
                  <div className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-primary-soft border border-primary/15 px-3 py-1.5 text-sm font-medium text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Em até 24 horas
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
