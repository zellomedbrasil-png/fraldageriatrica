import { ClipboardList, Stethoscope, FileCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Cadastro e Triagem",
    desc: "Preencha um formulário rápido com dados do paciente, condição clínica e situação de mobilidade. Tudo pelo celular, em poucos minutos.",
    Icon: ClipboardList,
  },
  {
    num: "02",
    title: "Avaliação por Médico CRM",
    desc: "Nosso médico avalia o caso por teleconsulta ou análise clínica do prontuário, conforme Resolução CFM 2.314/2022.",
    Icon: Stethoscope,
  },
  {
    num: "03",
    title: "Laudo no WhatsApp",
    desc: "Você recebe o laudo digital com assinatura ICP-Brasil em até 24 horas. Válido em qualquer farmácia credenciada do PFPB.",
    Icon: FileCheck,
    highlight: true,
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="section-padding bg-surface-elevated border-y border-border">
      <div className="container-page">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-[11px] font-bold uppercase tracking-wider">
              Processo
            </span>
            <h2 className="mt-4 text-3xl sm:text-[36px] font-bold text-text-primary tracking-tightest">
              Em 3 passos simples
            </h2>
            <p className="mt-3 text-[16px] text-text-secondary leading-relaxed">
              Tecnologia médica a favor da sua família, sem complicações.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.1}>
              <article
                className={`relative rounded-2xl p-7 h-full overflow-hidden transition-all duration-300 ${
                  step.highlight
                    ? "bg-ink-900 text-primary-foreground border border-ink-800"
                    : "bg-card border border-border shadow-card hover:border-border-strong"
                }`}
              >
                {step.highlight && (
                  <div
                    className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-accent/30 blur-3xl"
                    aria-hidden="true"
                  />
                )}
                <div className="relative">
                  <div
                    className={`flex items-center justify-between mb-6 ${
                      step.highlight ? "" : ""
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold tracking-[0.2em] ${
                        step.highlight ? "text-accent" : "text-text-tertiary"
                      }`}
                    >
                      PASSO {step.num}
                    </span>
                    <step.Icon
                      className={`w-5 h-5 ${
                        step.highlight ? "text-accent" : "text-text-tertiary"
                      }`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3
                    className={`text-[20px] font-bold tracking-tight mb-3 ${
                      step.highlight ? "text-primary-foreground" : "text-text-primary"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[14px] leading-relaxed ${
                      step.highlight ? "text-ink-200/80" : "text-text-secondary"
                    }`}
                  >
                    {step.desc}
                  </p>
                  {step.highlight && (
                    <div className="mt-6 inline-flex items-center gap-2 text-accent text-[11px] font-bold uppercase tracking-wider">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                      </span>
                      Em até 24 horas
                    </div>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center mt-12 text-[14px] text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Após receber o laudo, basta levá-lo a uma farmácia credenciada do Programa Farmácia
            Popular com documento de identidade e CPF do paciente.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ComoFunciona;
