import { Check, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const indicado = [
  "Idosos com 60 anos ou mais que apresentam incontinência",
  "Pessoas com deficiência (qualquer idade) com CID-10 que justifique uso contínuo",
  "Famílias e cuidadores que precisam renovar laudo já existente",
  "Pacientes que já têm acompanhamento médico e precisam apenas do laudo formal",
];

const naoIndicado = [
  "Compra ou venda de fraldas geriátricas",
  "Diagnóstico de novas condições clínicas",
  "Casos que exijam exame físico presencial",
  "Substituir o acompanhamento médico regular do paciente",
];

const ParaQuem = () => {
  return (
    <section id="para-quem" className="py-24 bg-background border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-[0.18em] mb-3">
              Escopo do serviço
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom mb-4">
              Quando o nosso serviço é a escolha certa.
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Transparência sobre o que avaliamos — e o que não está no escopo da nossa
              telemedicina.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.05}>
            <div className="rounded-3xl bg-card border border-border p-8 h-full">
              <h3 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                </span>
                Indicado para
              </h3>
              <ul className="space-y-3">
                {indicado.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-3xl bg-card border border-border p-8 h-full">
              <h3 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <X className="w-4 h-4 text-muted-foreground" strokeWidth={2.5} />
                </span>
                Não é indicado para
              </h3>
              <ul className="space-y-3">
                {naoIndicado.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <X
                      className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ParaQuem;