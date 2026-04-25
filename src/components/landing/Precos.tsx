import { Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const WA_LINK =
  "https://wa.me/5585991275429?text=Quero%20solicitar%20o%20laudo%20para%20fralda%20geri%C3%A1trica.";

interface IncludedItem {
  text: string;
  value?: string;
}

const included: IncludedItem[] = [
  { text: "Avaliação clínica com médico CRM ativo", value: "valor de mercado: R$ 150" },
  { text: "Laudo digital com assinatura ICP-Brasil", value: "validade jurídica garantida" },
  { text: "Validade de 6 meses (180 dias)", value: "não precisa pagar de novo" },
  { text: "Atendimento no WhatsApp em até 24h", value: "sem fila, sem agenda" },
  { text: "Aceito em qualquer farmácia do Programa Farmácia Popular" },
  { text: "Reembolso integral se o médico não aprovar", value: "risco zero" },
];

const Precos = () => {
  return (
    <section id="precos" className="py-24 bg-card border-y border-border">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom mb-4">
            Faça as contas com a gente.
          </h2>
          <p className="text-muted-foreground mb-10 font-light leading-relaxed">
            Em uma farmácia comum, 120 fraldas/mês custam entre{" "}
            <strong className="text-foreground font-medium">R$ 200 e R$ 400</strong>. Por{" "}
            <strong className="text-foreground font-medium">6 meses</strong>, são até{" "}
            <strong className="text-foreground font-medium">R$ 2.400</strong> do seu bolso. Com o
            laudo, esse custo vira <strong className="text-primary font-semibold">R$ 0,00</strong>.
          </p>
        </ScrollReveal>

        {/* Comparativo inline — ancoragem de valor */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-12">
            <div className="rounded-2xl border border-border bg-background p-5 text-left">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Sem laudo
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tighter-custom">
                R$ 2.400
              </p>
              <p className="text-xs text-muted-foreground mt-1">a cada 6 meses na farmácia</p>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-left">
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                Com laudo
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-primary tracking-tighter-custom">
                R$ 0,00
              </p>
              <p className="text-xs text-muted-foreground mt-1">pelo Farmácia Popular</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-background rounded-3xl border border-border p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <p className="text-[11px] text-primary font-bold mb-3 uppercase tracking-[0.18em]">
                Tudo que você recebe por R$ 59
              </p>

              <ul className="space-y-3 text-left mb-8">
                {included.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      {item.text}
                      {item.value && (
                        <span className="text-muted-foreground/70 italic">
                          {" "}— {item.value}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-muted-foreground mb-1">
                Valor real do serviço:{" "}
                <span className="line-through">R$ 200</span>
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-6xl font-semibold text-foreground tracking-tighter-custom">
                  59
                </span>
                <span className="text-sm text-muted-foreground">,00</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                Pagamento único. Sem assinatura. Sem renovação automática.
              </p>

              <Button
                asChild
                size="lg"
                className="w-full rounded-full py-6 text-base shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Quero meu laudo agora
                </a>
              </Button>

              <div className="mt-6 rounded-xl bg-primary/5 border border-primary/15 p-4 flex items-start gap-3 text-left">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Garantia de Reembolso 100%
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Se o médico, por critério clínico, não puder emitir o laudo, devolvemos
                    integralmente o seu dinheiro. Sem perguntas, sem burocracia.
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
