import {
  Building2,
  FileCheck2,
  ExternalLink,
  MessageSquare,
  Stethoscope,
  ShieldCheck,
  Pill,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const flow = [
  { Icon: MessageSquare, label: "Você solicita", sub: "Pelo WhatsApp" },
  { Icon: Stethoscope, label: "Médico avalia", sub: "Telemedicina" },
  { Icon: ShieldCheck, label: "Laudo emitido", sub: "ICP-Brasil" },
  { Icon: Pill, label: "Retira na farmácia", sub: "Gratuito" },
];

const FarmaciaPopular = () => {
  return (
    <section
      className="py-24 lg:py-28 border-t border-border"
      style={{ background: "var(--surface-soft)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-[0.18em] mb-3">
              Programa Farmácia Popular
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tightest leading-[1.1] mb-4">
              Como o seu laudo vira fralda gratuita.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O programa do Ministério da Saúde que disponibiliza fraldas geriátricas gratuitas
              em farmácias credenciadas — o nosso papel é apenas a avaliação médica e a emissão
              do laudo exigido pelo programa.
            </p>
          </div>
        </ScrollReveal>

        {/* Infográfico horizontal de 4 passos */}
        <ScrollReveal delay={0.1}>
          <div className="relative mb-12 rounded-3xl bg-white border border-border p-6 sm:p-8 shadow-card">
            {/* linha conectora desktop */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute top-[58px] left-[12.5%] right-[12.5%] h-px"
              style={{
                background:
                  "repeating-linear-gradient(to right, var(--brand-primary) 0 4px, transparent 4px 10px)",
                opacity: 0.35,
              }}
            />
            <ol className="relative grid grid-cols-2 sm:grid-cols-4 gap-6">
              {flow.map((step, i) => (
                <li key={step.label} className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform duration-300 hover:scale-105"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      <step.Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <span
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border border-border flex items-center justify-center text-[10px] font-bold text-primary"
                    >
                      {i + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground leading-tight">
                    {step.label}
                  </p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">
                    {step.sub}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5">
          <ScrollReveal delay={0.05}>
            <div className="rounded-2xl bg-white border border-border p-7 h-full shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background:
                    "color-mix(in oklab, var(--brand-primary) 10%, transparent)",
                }}
              >
                <Building2 className="w-5.5 h-5.5 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Quem distribui as fraldas
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A distribuição é feita pelo Ministério da Saúde através das farmácias credenciadas
                ao Programa Farmácia Popular do Brasil. Não vendemos, não estocamos e não
                entregamos fraldas.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl bg-white border border-border p-7 h-full shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background:
                    "color-mix(in oklab, var(--brand-primary) 10%, transparent)",
                }}
              >
                <FileCheck2 className="w-5.5 h-5.5 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Qual é o nosso papel
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Avaliação clínica por telemedicina e, em caso de indicação clínica, emissão do
                laudo médico com assinatura digital ICP-Brasil — documento que o programa exige
                para a retirada das fraldas em farmácia credenciada.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <div className="mt-8">
            <a
              href="https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/farmacia-popular"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary font-medium transition-colors group"
            >
              Informações oficiais no gov.br
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FarmaciaPopular;