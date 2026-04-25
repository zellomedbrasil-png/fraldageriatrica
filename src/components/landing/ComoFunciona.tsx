import { ClipboardList, Stethoscope, FileCheck, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Step {
  num: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  highlight?: boolean;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Cadastro e triagem",
    desc: "Você preenche um formulário rápido com os dados do paciente, condição clínica e situação de mobilidade. Tudo pelo celular, em poucos minutos.",
    Icon: ClipboardList,
  },
  {
    num: "02",
    title: "Avaliação por médico CRM",
    desc: "Nosso médico avalia o caso por teleconsulta ou análise do prontuário, conforme a Resolução CFM 2.314/2022.",
    Icon: Stethoscope,
  },
  {
    num: "03",
    title: "Laudo no WhatsApp",
    desc: "Você recebe o laudo digital com assinatura ICP-Brasil em até 24 horas, pronto para usar em qualquer farmácia credenciada.",
    Icon: FileCheck,
    highlight: true,
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="section-padding">
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
              Da solicitação ao laudo no seu WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[16.66%] right-[16.66%] top-[68px] h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"
          />

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 relative">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <article
                  className={`relative rounded-2xl p-7 sm:p-8 h-full overflow-hidden transition-all duration-300 ${
                    step.highlight
                      ? "bg-primary text-primary-foreground shadow-elegant"
                      : "bg-card border border-border shadow-card hover:border-border-strong hover:-translate-y-0.5"
                  }`}
                >
                  {step.highlight && (
                    <div
                      aria-hidden="true"
                      className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/25 blur-3xl pointer-events-none"
                    />
                  )}
                  <div className="relative">
                    <div
                      className={`text-[44px] sm:text-[48px] font-bold tracking-tightest leading-none ${
                        step.highlight ? "text-accent" : "text-accent"
                      }`}
                    >
                      {step.num}
                    </div>

                    <div
                      className={`mt-6 w-11 h-11 rounded-xl flex items-center justify-center ${
                        step.highlight
                          ? "bg-white/15 backdrop-blur-sm"
                          : "bg-surface-soft"
                      }`}
                    >
                      <step.Icon
                        className={`w-6 h-6 ${
                          step.highlight ? "text-primary-foreground" : "text-primary"
                        }`}
                        strokeWidth={1.75}
                      />
                    </div>

                    <h3
                      className={`mt-5 text-[20px] font-bold tracking-tight ${
                        step.highlight ? "text-primary-foreground" : "text-text-primary"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-2.5 text-[14px] leading-relaxed ${
                        step.highlight ? "text-primary-foreground/85" : "text-text-secondary"
                      }`}
                    >
                      {step.desc}
                    </p>

                    {step.highlight && (
                      <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wider">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-60" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-foreground" />
                        </span>
                        Em até 24 horas
                      </div>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
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
