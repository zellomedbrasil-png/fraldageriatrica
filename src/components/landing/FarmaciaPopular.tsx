import { Building2, FileCheck2, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FarmaciaPopular = () => {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-[0.18em] mb-3">
              Saiba como funciona o programa
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom mb-4">
              Programa Farmácia Popular do Brasil
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              O programa do Ministério da Saúde que disponibiliza fraldas geriátricas gratuitas
              em farmácias credenciadas — o nosso papel é apenas a avaliação médica e a emissão
              do laudo exigido pelo programa.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5">
          <ScrollReveal delay={0.05}>
            <div className="rounded-2xl bg-background border border-border p-6 h-full">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-primary" />
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
            <div className="rounded-2xl bg-background border border-border p-6 h-full">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <FileCheck2 className="w-5 h-5 text-primary" />
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
          <div className="mt-8 text-center">
            <a
              href="https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/farmacia-popular"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline"
            >
              Ver informações oficiais no gov.br
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FarmaciaPopular;