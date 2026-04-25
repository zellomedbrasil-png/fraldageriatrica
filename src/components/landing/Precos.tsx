import { Check, Star } from "lucide-react";
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
  "Pacote inicial via parceiro logístico: 1 pacote de fraldas geriátricas descartáveis (tamanho à escolha) entregue em até 5 dias úteis",
  "Frete incluso para regiões com cobertura",
  "Tempo para se organizar com calma para retirada gratuita futura no PFPB",
];

const Precos = () => {
  return (
    <section id="precos" className="py-20 lg:py-24 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom">
              Escolha como prefere começar
            </h2>
            <p className="text-muted-foreground mt-3 font-light">
              Transparência total. O laudo é o produto médico — a fralda é uma conveniência opcional.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 — Laudo */}
          <ScrollReveal delay={0.1}>
            <article className="rounded-3xl bg-background border border-border p-8 h-full flex flex-col relative">
              <span className="absolute -top-3 left-8 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider">
                Serviço Médico
              </span>
              <h3 className="text-2xl font-semibold text-foreground tracking-tight mb-1">Laudo Médico</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Para quem já vai retirar fraldas no Farmácia Popular.
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-5xl font-semibold text-foreground tracking-tighter-custom">79</span>
                <span className="text-sm text-muted-foreground">,00</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {laudoFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full py-6 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                data-event="cta_click"
                data-plan="laudo"
              >
                <a href="#cta-final">Solicitar Laudo</a>
              </Button>
            </article>
          </ScrollReveal>

          {/* Card 2 — Combo */}
          <ScrollReveal delay={0.2}>
            <article className="rounded-3xl bg-slate-900 text-primary-foreground p-8 h-full flex flex-col relative shadow-elegant overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <span className="absolute -top-3 left-8 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wider">
                <Star className="w-3 h-3" /> Mais Escolhido
              </span>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-semibold tracking-tight mb-1">Combo Praticidade</h3>
                <p className="text-sm text-slate-400 mb-6">
                  Para quem precisa começar agora, sem esperar ir à farmácia.
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-sm text-slate-400">R$</span>
                  <span className="text-5xl font-semibold tracking-tighter-custom">138</span>
                  <span className="text-sm text-slate-400">,00</span>
                </div>
                <p className="text-xs text-slate-400 mb-6">R$ 79 laudo + R$ 59 pacote inicial</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {comboFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-200">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full py-6 text-base bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent-glow"
                  data-event="cta_click"
                  data-plan="combo"
                >
                  <a href="#cta-final">Quero o Combo</a>
                </Button>
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-xs text-muted-foreground italic leading-relaxed mt-8 max-w-3xl mx-auto text-center">
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