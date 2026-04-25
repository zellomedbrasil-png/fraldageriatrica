import { Check, ShieldCheck, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const WA_LINK =
  "https://wa.me/5585991275429?text=Quero%20solicitar%20a%20avalia%C3%A7%C3%A3o%20m%C3%A9dica%20para%20laudo%20de%20fralda%20geri%C3%A1trica.";

const included: string[] = [
  "Avaliação clínica com médico inscrito no CRM",
  "Emissão do laudo digital com assinatura ICP-Brasil (em caso de indicação clínica)",
  "Validade do laudo: 180 dias, conforme Portaria GM/MS nº 3.073/2024",
  "Atendimento integralmente pelo WhatsApp",
  "Resposta da equipe médica em até 24 horas úteis",
  "Reembolso integral se não houver indicação clínica para emissão",
];

const Precos = () => {
  return (
    <section id="precos" className="py-24 lg:py-32 bg-background border-y border-border">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Investimento único, sem assinatura.
          </h2>
          <p className="text-foreground/70 text-lg mb-10 leading-relaxed">
            Pagamento único pela avaliação médica. Sem mensalidade, sem fidelidade, sem renovação
            automática.
          </p>
        </ScrollReveal>

        {/* Bloco informativo neutro — substitui o comparativo de preços */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface-soft p-5 sm:p-6 mb-12 flex items-start gap-3 text-left">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-base text-foreground/75 leading-relaxed">
              O <strong className="text-foreground font-semibold">Programa Farmácia Popular do Brasil</strong>{" "}
              disponibiliza gratuitamente até 120 fraldas geriátricas por mês para beneficiários
              elegíveis (idosos com 60+ ou pessoas com deficiência), conforme{" "}
              <strong className="text-foreground font-semibold">Portaria GM/MS nº 3.073/2024</strong>.
              Para acessar, é necessário apresentar laudo médico válido em farmácia credenciada do
              programa — esse é o documento que avaliamos emitir. A disponibilidade nas farmácias
              depende do estoque local.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card rounded-3xl border-2 border-primary/20 p-8 sm:p-10 shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs text-primary font-semibold mb-4 uppercase tracking-[0.14em]">
                Avaliação médica online
              </p>

              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-base text-foreground/60">R$</span>
                <span className="text-7xl font-semibold text-foreground">
                  59
                </span>
                <span className="text-base text-foreground/60">,00</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                Pagamento único. Sem assinatura. Sem renovação automática.
              </p>

              <ul className="space-y-3 text-left mb-8">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-foreground/80"
                  >
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.25} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="w-full rounded-full py-7 text-base font-semibold shadow-md"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Solicitar avaliação médica
                </a>
              </Button>

              <div className="mt-6 rounded-2xl bg-primary-soft border border-primary/30 p-5 flex items-start gap-3 text-left">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <p className="text-base font-semibold text-foreground">
                    Garantia de Reembolso Integral
                  </p>
                  <p className="text-sm text-foreground/75 mt-1 leading-relaxed">
                    Caso a avaliação clínica não identifique indicação para uso contínuo de fralda
                    geriátrica, o laudo não é emitido e o valor pago é reembolsado integralmente em
                    até 5 dias úteis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Precos;
