import { ClipboardList, Stethoscope, FileCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "1",
    title: "Cadastro e Triagem",
    desc: "Você preenche um formulário rápido com dados do paciente, condição clínica e situação de mobilidade. Tudo pelo celular.",
    Icon: ClipboardList,
    dark: false,
  },
  {
    num: "2",
    title: "Avaliação por Médico CRM",
    desc: "Nosso médico avalia o caso por teleconsulta ou análise clínica do prontuário, conforme Resolução CFM 2.314/2022.",
    Icon: Stethoscope,
    dark: false,
  },
  {
    num: "3",
    title: "Laudo no WhatsApp",
    desc: "Você recebe o laudo digital com assinatura ICP-Brasil em até 24 horas. Válido em qualquer farmácia credenciada do PFPB.",
    Icon: FileCheck,
    dark: true,
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom">
              Em 3 passos simples
            </h2>
            <p className="text-muted-foreground mt-3 font-light">
              Tecnologia a favor da sua família, sem complicações.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.12}>
              <article
                className={`rounded-3xl p-8 relative overflow-hidden h-full transition-colors duration-300 ${
                  step.dark
                    ? "bg-slate-900 border border-slate-800 text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/30"
                }`}
              >
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${
                      step.dark
                        ? "bg-white/10 border-white/10 text-primary-foreground backdrop-blur-md"
                        : "bg-secondary border-border text-foreground"
                    }`}
                  >
                    <span className="font-bold font-mono text-sm">{step.num}</span>
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-3 tracking-tight ${
                      step.dark ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      step.dark ? "text-slate-400" : "text-muted-foreground"
                    }`}
                  >
                    {step.desc}
                  </p>
                  {step.dark && (
                    <div className="mt-6 inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Em até 24 horas
                    </div>
                  )}
                </div>
                <step.Icon
                  className={`absolute -bottom-4 -right-4 w-[140px] h-[140px] -rotate-[15deg] ${
                    step.dark ? "text-white/5" : "text-slate-200"
                  }`}
                  strokeWidth={0.5}
                />
                {step.dark && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center mt-10 text-sm text-muted-foreground max-w-2xl mx-auto">
            Após receber o laudo, basta levá-lo a uma farmácia credenciada do Programa Farmácia
            Popular com documento de identidade e CPF do paciente.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ComoFunciona;