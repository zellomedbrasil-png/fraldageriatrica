import { Check, Shield, Info, ArrowRight } from "lucide-react";
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
    <section id="precos" className="py-16 lg:py-24 bg-white border-y border-border">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.1em] mb-3">
              Investimento
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-ink-900 mb-4 leading-[1.15]">
              Pagamento único, sem assinatura.
            </h2>
            <p className="text-[16px] text-ink-700 mb-10 leading-[1.6]">
              Você paga uma única vez pela avaliação médica. Sem mensalidade, sem fidelidade,
              sem renovação automática.
            </p>
          </ScrollReveal>

          {/* Caixa de info — Programa Farmácia Popular */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl bg-primary-soft border-l-4 border-primary p-6 mb-10 flex items-start gap-3 text-left">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
              <p className="text-[15px] text-ink-700 leading-[1.6]">
                O <strong className="text-ink-900 font-semibold">Programa Farmácia Popular do Brasil</strong>{" "}
                disponibiliza gratuitamente até 120 fraldas geriátricas por mês para beneficiários
                elegíveis (idosos com 60+ ou pessoas com deficiência), conforme{" "}
                <strong className="text-ink-900 font-semibold">Portaria GM/MS nº 3.073/2024</strong>.
                Para acessar, é necessário apresentar laudo médico válido em farmácia credenciada do
                programa — esse é o documento que avaliamos emitir. A disponibilidade depende do
                estoque local.
              </p>
            </div>
          </ScrollReveal>

          {/* Card de preço */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-2xl border border-border p-8 sm:p-10 shadow-md text-left">
              <p className="text-[12px] text-primary font-semibold mb-4 uppercase tracking-[0.1em] text-center">
                Avaliação médica online
              </p>

              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-[24px] font-semibold text-ink-500">R$</span>
                <span className="text-[72px] font-bold text-ink-900 leading-none tracking-[-0.025em]">
                  59
                </span>
                <span className="text-[24px] font-semibold text-ink-500">,00</span>
              </div>
              <p className="text-[13px] text-ink-500 mb-8 text-center">
                Pagamento único · Sem assinatura · Sem renovação automática
              </p>

              <ul className="space-y-3.5 mb-8">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-ink-700 leading-[1.55]"
                  >
                    <span className="w-5 h-5 rounded-full bg-success/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" strokeWidth={3.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full rounded-[10px] h-[52px] text-[16px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Solicitar avaliação médica
                  <ArrowRight className="w-[18px] h-[18px]" />
                </a>
              </Button>

              <div className="mt-6 rounded-xl bg-surface-soft border border-border p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-soft flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-ink-900">
                    Política de reembolso
                  </p>
                  <p className="text-[13px] text-ink-500 mt-1 leading-[1.55]">
                    Caso a avaliação clínica não identifique indicação para uso contínuo de fralda
                    geriátrica, o laudo não é emitido e o valor pago é reembolsado integralmente em
                    até 5 dias úteis.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Precos;
