import { ClipboardCheck, Stethoscope, FileCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "1",
    title: "Cadastro e Triagem",
    desc: "Você preenche um formulário rápido com os dados do paciente, condição clínica e mobilidade — pelo celular, em poucos minutos.",
    Icon: ClipboardCheck,
    dark: false,
  },
  {
    num: "2",
    title: "Avaliação por médico CRM",
    desc: "Nosso médico avalia o caso por teleconsulta ou análise do prontuário, conforme a Resolução CFM 2.314/2022.",
    Icon: Stethoscope,
    dark: false,
  },
  {
    num: "3",
    title: "Laudo no WhatsApp",
    desc: "Você recebe o laudo digital com assinatura ICP-Brasil em até 24 horas, pronto para usar em qualquer farmácia credenciada.",
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
            <h2 className="text-3xl font-semibold text-foreground tracking-tighter-custom">
              Em 3 passos simples
            </h2>
            <p className="text-muted-foreground mt-2 font-light">
              Da solicitação ao laudo no seu WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.15}>
              <div
                className={`rounded-3xl p-8 relative overflow-hidden group transition-colors duration-300 h-full ${
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
