import { MessageCircle, Stethoscope, FileCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "1",
    title: "Triagem rápida no WhatsApp",
    desc: "Você responde um questionário clínico com os dados do paciente — condição, mobilidade e histórico. Tudo pelo celular, sem exames adicionais.",
    Icon: MessageCircle,
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
    <section id="como-funciona" className="py-16 lg:py-24 bg-surface-soft border-y border-border">
      <div className="container-page">
        <ScrollReveal>
          <div className="mb-12 lg:mb-16 max-w-2xl">
            <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.1em] mb-3">
              Processo 100% online
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-ink-900 leading-[1.15]">
              Atendimento simples, em conformidade com a regulamentação.
            </h2>
            <p className="text-[16px] text-ink-700 mt-4 leading-[1.6]">
              Avaliação por teleconsulta conforme a Resolução CFM 2.314/2022. Em caso de indicação
              clínica, o laudo é emitido em até 24 horas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.12}>
              <div
                className={`rounded-2xl p-8 relative overflow-hidden group h-full transition-all duration-300 hover:-translate-y-1 ${
                  step.dark
                    ? "bg-ink-900 border border-ink-800 shadow-elegant"
                    : "bg-white border border-border shadow-sm hover:shadow-md"
                }`}
              >
                <div className="relative z-10">
                  {/* Numeração: círculo branco com número em primary */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center mb-6 ${
                      step.dark
                        ? "bg-white/10 backdrop-blur-md border border-white/15"
                        : "bg-primary-soft border border-primary/15"
                    }`}
                  >
                    <span
                      className={`text-[18px] font-bold ${
                        step.dark ? "text-white" : "text-primary"
                      }`}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className={`text-[20px] font-semibold mb-3 leading-snug ${
                      step.dark ? "text-white" : "text-ink-900"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[15px] leading-[1.6] ${
                      step.dark ? "text-ink-200" : "text-ink-700"
                    }`}
                  >
                    {step.desc}
                  </p>
                  {step.dark && (
                    <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/15 border border-success/25 text-success text-[12px] font-semibold uppercase tracking-[0.08em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
                      Em até 24 horas
                    </div>
                  )}
                </div>
                <step.Icon
                  className={`absolute -bottom-6 -right-6 w-[140px] h-[140px] transition-colors duration-500 ${
                    step.dark ? "text-white/[0.06]" : "text-primary/[0.08] group-hover:text-primary/[0.12]"
                  }`}
                  strokeWidth={1.25}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
