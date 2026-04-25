import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const CTAFinal = () => {
  return (
    <section
      id="cta-final"
      className="section-padding bg-ink-900 text-primary-foreground relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center relative">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-[40px] lg:text-[44px] font-bold tracking-tightest leading-tight">
            Cuide de quem cuidou de você.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="mt-5 text-[17px] sm:text-lg text-ink-200/80 max-w-xl mx-auto leading-relaxed">
            Solicite o laudo agora e dê o próximo passo no cuidado da sua família.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <div className="mt-10 flex flex-col items-center gap-5">
            <Button
              asChild
              size="lg"
              className="group rounded-lg h-14 px-8 text-[15px] font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent-glow gap-2 hover:-translate-y-0.5 transition-all"
              data-event="cta_click"
              data-plan="laudo"
            >
              <a
                href="https://wa.me/5585991275429?text=Quero%20solicitar%20o%20laudo%20para%20fralda%20geri%C3%A1trica."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Laudo — R$ 59
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>
            </Button>
            <p className="text-[13px] text-ink-200/70 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <span>✓ Pagamento único</span>
              <span aria-hidden="true">•</span>
              <span>✓ Em até 24h</span>
              <span aria-hidden="true">•</span>
              <span>✓ Reembolso integral garantido</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTAFinal;
