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
    <section id="precos" className="py-24 bg-card border-y border-border">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom mb-4">
            Investimento único, sem assinatura.
          </h2>
          <p className="text-muted-foreground mb-10 font-light leading-relaxed">
            Pagamento único pela avaliação médica. Sem mensalidade, sem fidelidade, sem renovação
            automática.
          </p>
        </ScrollReveal>

        {/* Bloco informativo neutro — substitui o comparativo de preços */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 mb-12 flex items-start gap-3 text-left">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-sm text-muted-foreground leading-relaxed">
              O <strong className="text-foreground font-medium">Programa Farmácia Popular do Brasil</strong>{" "}
              disponibiliza gratuitamente até 120 fraldas geriátricas por mês para beneficiários
              elegíveis (idosos com 60+ ou pessoas com deficiência), conforme{" "}
              <strong className="text-foreground font-medium">Portaria GM/MS nº 3.073/2024</strong>.
              Para acessar, é necessário apresentar laudo médico válido em farmácia credenciada do
              programa — esse é o documento que avaliamos emitir. A disponibilidade nas farmácias
              depende do estoque local.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-background rounded-3xl border border-border p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <p className="text-[11px] text-primary font-bold mb-3 uppercase tracking-[0.18em]">
                Avaliação médica online
              </p>

              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-6xl font-semibold text-foreground tracking-tighter-custom">
                  59
                </span>
                <span className="text-sm text-muted-foreground">,00</span>
              </div>
              <p className="text-xs text-muted-foreground mb-8">
                Pagamento único. Sem assinatura. Sem renovação automática.
              </p>

              <ul className="space-y-3 text-left mb-8">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="w-full rounded-full py-6 text-base shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Solicitar avaliação médica
                </a>
              </Button>

              <div className="mt-6 rounded-xl bg-primary/5 border border-primary/15 p-4 flex items-start gap-3 text-left">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Política de Reembolso
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
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
