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
    <section
      id="como-funciona"
      className="py-24 lg:py-28 border-y border-border"
      style={{ background: "var(--surface-elevated)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 max-w-2xl">
            <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-[0.18em] mb-3">
              Processo 100% online
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tightest leading-[1.1] mb-4">
              Atendimento simples, em conformidade com a regulamentação.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Avaliação por teleconsulta conforme a Resolução CFM 2.314/2022. Em caso de indicação
              clínica, o laudo é emitido em até 24 horas.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative grid md:grid-cols-3 gap-6">
          {/* Linha conectora desenhada (desktop) */}
          <svg
            aria-hidden="true"
            className="hidden md:block absolute top-[60px] left-[18%] right-[18%] z-0 h-[2px] w-[64%] overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 100 2"
          >
            <line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="var(--brand-primary)"
              strokeWidth="1"
              strokeDasharray="3 4"
              opacity="0.35"
            />
          </svg>
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.15}>
              <div
                className={`rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 h-full z-10 hover:-translate-y-1 ${
                  step.dark
                    ? "border border-white/5 shadow-elegant"
                    : "bg-white border border-border shadow-card shadow-card-hover hover:border-primary/30"
                }`}
                style={
                  step.dark
                    ? { background: "var(--gradient-card-premium)" }
                    : undefined
                }
              >
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-105 ${
                      step.dark
                        ? "bg-white/10 border border-white/10 text-white backdrop-blur-md"
                        : "text-white"
                    }`}
                    style={
                      step.dark
                        ? undefined
                        : { background: "var(--gradient-brand)" }
                    }
                  >
                    <span className="font-bold font-display text-lg tabular-nums">{step.num}</span>
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-3 tracking-tight ${
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
                    <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] font-bold uppercase tracking-[0.14em]">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                      Em até 24 horas
                    </div>
                  )}
                </div>
                <step.Icon
                  className={`absolute -bottom-4 -right-4 w-[140px] h-[140px] -rotate-[15deg] transition-all duration-500 group-hover:rotate-[-10deg] ${
                    step.dark ? "text-white/5" : "text-ink-200 group-hover:text-primary/15"
                  }`}
                  strokeWidth={0.5}
                />
                {step.dark && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
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
