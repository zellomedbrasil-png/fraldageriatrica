import { ClipboardCheck, Stethoscope, FileCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "1",
    title: "Triagem rápida no WhatsApp",
    desc: "Você responde um questionário clínico com os dados do paciente — condição, mobilidade e histórico. Tudo pelo celular, sem exames adicionais.",
    Icon: ClipboardCheck,
    dark: false,
  },
  {
    num: "2",
    title: "Avaliação por médico com CRM",
    desc: "O médico responsável analisa o caso por teleconsulta, conforme a Resolução CFM 2.314/2022, para verificar a indicação clínica.",
    Icon: Stethoscope,
    dark: false,
  },
  {
    num: "3",
    title: "Laudo digital em até 24h",
    desc: "Havendo indicação clínica, o laudo é emitido com assinatura digital ICP-Brasil (validade de 180 dias) e enviado pelo WhatsApp para apresentação em farmácia credenciada do Programa Farmácia Popular, conforme estoque local.",
    Icon: FileCheck,
    dark: true,
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-20 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-[0.18em] mb-3">
              Processo 100% online
            </span>
            <h2 className="text-3xl font-semibold text-foreground tracking-tighter-custom">
              Atendimento simples, em conformidade com a regulamentação.
            </h2>
            <p className="text-muted-foreground mt-2 font-light">
              Avaliação por teleconsulta conforme a Resolução CFM 2.314/2022. Em caso de indicação
              clínica, o laudo é emitido em até 24 horas.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative grid md:grid-cols-3 gap-6">
          {/* Linha conectora pontilhada (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-14 left-[16.66%] right-[16.66%] border-t border-dashed border-border z-0"
          />
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.15}>
              <div
                className={`rounded-3xl p-8 relative overflow-hidden group transition-colors duration-300 h-full z-10 ${
                  step.dark
                    ? "bg-ink-900 border border-ink-800"
                    : "bg-secondary border border-border hover:border-primary/30"
                }`}
              >
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 shadow-sm ${
                      step.dark
                        ? "bg-white/10 border-white/10 text-white backdrop-blur-md"
                        : "bg-card border-border text-foreground"
                    }`}
                  >
                    <span className="font-bold font-mono">{step.num}</span>
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-2 tracking-tight ${
                      step.dark ? "text-white" : "text-foreground"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      step.dark ? "text-ink-400" : "text-muted-foreground"
                    }`}
                  >
                    {step.desc}
                  </p>
                  {step.dark && (
                    <div className="mt-8 inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
                      Em até 24 horas
                    </div>
                  )}
                </div>
                <step.Icon
                  className={`absolute -bottom-4 -right-4 w-[140px] h-[140px] -rotate-[15deg] transition-colors duration-500 ${
                    step.dark ? "text-white/5" : "text-ink-200 group-hover:text-primary/10"
                  }`}
                  strokeWidth={0.5}
                />
                {step.dark && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
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
