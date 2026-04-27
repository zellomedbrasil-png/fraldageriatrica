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
    <section id="para-quem" className="py-24 lg:py-28 bg-background border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-[0.18em] mb-3">
              Escopo do serviço
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tightest leading-[1.1] mb-4">
              Quando o nosso serviço é a escolha certa.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Transparência sobre o que avaliamos — e o que não está no escopo da nossa
              telemedicina.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.05}>
            <div
              className="rounded-3xl bg-white border border-border p-8 h-full shadow-card shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              style={{ borderLeft: "3px solid var(--success)" }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--success) 8%, transparent), transparent 50%)" }} />
              <h3 className="relative text-base font-semibold text-foreground mb-6 flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--success)" }}
                >
                  <Check className="w-4.5 h-4.5 text-white" strokeWidth={3} />
                </span>
                <span>
                  Indicado para
                  <span className="block text-[11px] font-medium text-muted-foreground uppercase tracking-[0.12em] mt-0.5">
                    Casos no escopo
                  </span>
                </span>
              </h3>
              <ul className="relative space-y-2">
                {indicado.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed p-2 -mx-2 rounded-lg transition-colors hover:bg-success/5"
                  >
                    <Check
                      className="w-4 h-4 shrink-0 mt-0.5"
                      strokeWidth={2.5}
                      style={{ color: "var(--success)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div
              className="rounded-3xl bg-white border border-border p-8 h-full shadow-card shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              style={{ borderLeft: "3px solid var(--danger)" }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-[0.3]" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--danger) 6%, transparent), transparent 50%)" }} />
              <h3 className="relative text-base font-semibold text-foreground mb-6 flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--danger)" }}
                >
                  <X className="w-4.5 h-4.5 text-white" strokeWidth={3} />
                </span>
                <span>
                  Não é indicado para
                  <span className="block text-[11px] font-medium text-muted-foreground uppercase tracking-[0.12em] mt-0.5">
                    Fora do escopo
                  </span>
                </span>
              </h3>
              <ul className="relative space-y-2">
                {naoIndicado.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed p-2 -mx-2 rounded-lg transition-colors hover:bg-destructive/5"
                  >
                    <X
                      className="w-4 h-4 shrink-0 mt-0.5"
                      strokeWidth={2.5}
                      style={{ color: "var(--danger)" }}
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