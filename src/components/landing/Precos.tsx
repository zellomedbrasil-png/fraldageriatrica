import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const features = [
  "Avaliação clínica por médico com CRM ativo",
  "Laudo digital com assinatura ICP-Brasil",
  "Validade de 180 dias (renovável)",
  "Entrega em até 24 horas no WhatsApp",
  "Aceito em farmácias credenciadas do PFPB",
  "Reembolso integral por critério clínico",
];

const Precos = () => {
  return (
    <section
      id="precos"
      className="section-padding bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Radial gradient atmospheric layers */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.66 0.11 175 / 0.18), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/8 blur-3xl pointer-events-none"
      />

      <div className="container-page relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-accent text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
              Investimento
            </span>
            <h2 className="mt-4 text-3xl sm:text-[40px] lg:text-[44px] font-bold text-primary-foreground tracking-tightest">
              Um preço justo, sem surpresas.
            </h2>
            <p className="mt-3 text-[16px] sm:text-[17px] text-primary-foreground/70 leading-relaxed">
              Pagamento único por laudo. Sem assinatura, sem fidelidade.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-14 max-w-[480px] mx-auto">
            <article className="relative rounded-2xl bg-card text-text-primary p-10 sm:p-12 shadow-elegant border border-white/10">
              {/* Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-soft text-accent text-[10px] font-bold uppercase tracking-wider">
                  Laudo médico
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-text-tertiary tracking-tight">
                  <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2} />
                  CFM 2.314/2022
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1.5">
                <span className="text-[18px] text-text-tertiary font-medium">R$</span>
                <span className="text-[72px] sm:text-[80px] font-bold text-text-primary tracking-tightest leading-none">
                  59
                </span>
                <span className="text-[18px] text-text-tertiary font-medium">,00</span>
              </div>
              <p className="mt-2 text-[13px] text-text-tertiary">
                Pagamento único · sem assinatura
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-3.5">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[14.5px] text-text-secondary leading-relaxed"
                  >
                    <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent-foreground" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                size="lg"
                className="group mt-9 w-full rounded-lg h-14 text-[15px] font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent-glow gap-2"
                data-event="cta_click"
                data-plan="laudo"
              >
                <a href="#cta-final">
                  Solicitar Meu Laudo
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </a>
              </Button>

              <p className="mt-4 text-center text-[12px] text-text-tertiary leading-relaxed">
                Reembolso integral se não pudermos emitir o laudo por critério clínico.
              </p>
            </article>

            {/* Trust note below card */}
            <p className="mt-8 text-center text-[13px] text-primary-foreground/60 leading-relaxed max-w-md mx-auto">
              fraldageriatrica.com não comercializa fraldas. Nosso serviço é a emissão do laudo
              médico exigido pelo Programa Farmácia Popular para retirada gratuita.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Precos;
