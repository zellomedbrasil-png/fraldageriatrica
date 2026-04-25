import { Check, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const laudoFeatures = [
  "Avaliação clínica por médico CRM ativo",
  "Laudo digital com assinatura ICP-Brasil",
  "Validade de 180 dias",
  "Entrega em até 24 horas no WhatsApp",
  "Aceito em farmácias credenciadas do PFPB",
];

const comboFeatures = [
  "Tudo do plano Laudo Médico",
  "Pacote inicial via parceiro logístico: 1 pacote de fraldas descartáveis (tamanho à escolha) entregue em até 5 dias úteis",
  "Frete incluso para regiões com cobertura",
  "Tempo para se organizar com calma para retirada gratuita futura no PFPB",
];

const Precos = () => {
  return (
    <section id="precos" className="section-padding">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-[11px] font-bold uppercase tracking-wider">
              Preços
            </span>
            <h2 className="mt-4 text-3xl sm:text-[36px] font-bold text-text-primary tracking-tightest">
              Escolha como prefere começar
            </h2>
            <p className="mt-3 text-[16px] text-text-secondary leading-relaxed">
              Transparência total. O laudo é o produto médico — a fralda é uma conveniência opcional.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {/* Card 1 — Laudo */}
          <ScrollReveal delay={0.05}>
            <article className="relative rounded-3xl bg-card border border-border p-8 h-full flex flex-col shadow-card">
              <span className="inline-flex items-center w-fit px-2.5 py-1 rounded-md bg-primary-soft text-primary text-[10px] font-bold uppercase tracking-wider">
                Serviço Médico
              </span>
              <h3 className="mt-4 text-[22px] font-bold text-text-primary tracking-tight">
                Laudo Médico
              </h3>
              <p className="mt-1.5 text-[14px] text-text-secondary leading-relaxed">
                Para quem já vai retirar fraldas no Farmácia Popular.
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-[14px] text-text-tertiary font-medium">R$</span>
                <span className="text-[52px] font-bold text-text-primary tracking-tightest leading-none">
                  79
                </span>
                <span className="text-[14px] text-text-tertiary font-medium">,00</span>
              </div>
              <p className="text-[12px] text-text-tertiary mt-1">Pagamento único</p>

              <ul className="mt-8 space-y-3.5 flex-1">
                {laudoFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[14px] text-text-secondary leading-relaxed"
                  >
                    <span className="w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="mt-8 w-full rounded-lg h-12 text-[15px] font-semibold border-border-strong text-text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
                data-event="cta_click"
                data-plan="laudo"
              >
                <a href="#cta-final">Solicitar Laudo</a>
              </Button>
            </article>
          </ScrollReveal>

          {/* Card 2 — Combo */}
          <ScrollReveal delay={0.15}>
            <article className="relative rounded-3xl bg-ink-900 text-primary-foreground p-8 h-full flex flex-col shadow-elegant overflow-hidden border border-ink-800">
              <div
                className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-accent/30 blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative flex flex-col h-full">
                <span className="inline-flex items-center w-fit gap-1.5 px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider">
                  <Star className="w-3 h-3" strokeWidth={3} />
                  Mais Escolhido
                </span>
                <h3 className="mt-4 text-[22px] font-bold tracking-tight flex items-center gap-2">
                  Combo Praticidade
                  <Truck className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </h3>
                <p className="mt-1.5 text-[14px] text-ink-200/80 leading-relaxed">
                  Para quem precisa começar agora, sem esperar ir à farmácia.
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-[14px] text-ink-200/70 font-medium">R$</span>
                  <span className="text-[52px] font-bold tracking-tightest leading-none">138</span>
                  <span className="text-[14px] text-ink-200/70 font-medium">,00</span>
                </div>
                <p className="text-[12px] text-ink-200/60 mt-1">
                  R$ 79 laudo + R$ 59 pacote inicial
                </p>

                <ul className="mt-8 space-y-3.5 flex-1">
                  {comboFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[14px] text-ink-200/90 leading-relaxed"
                    >
                      <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent-foreground" strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 w-full rounded-lg h-12 text-[15px] font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent-glow"
                  data-event="cta_click"
                  data-plan="combo"
                >
                  <a href="#cta-final">Quero o Combo</a>
                </Button>
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <p className="text-[12px] text-text-tertiary italic leading-relaxed mt-10 max-w-3xl mx-auto text-center">
            *O Combo Praticidade inclui o serviço médico (laudo) e um pacote logístico fornecido por
            parceiro cadastrado responsável pela comercialização e entrega da fralda.
            fraldageriatrica.com não comercializa fraldas — apenas intermedia a logística de entrega
            através de parceiro autorizado, como cortesia para agilidade do paciente. O laudo
            continua sendo o produto médico principal, e permite retirada gratuita pelo Programa
            Farmácia Popular conforme Portaria GM/MS nº 3.073/2024.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Precos;
