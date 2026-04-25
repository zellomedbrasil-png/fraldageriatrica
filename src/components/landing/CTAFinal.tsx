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
          <h2 className="text-3xl sm:text-[44px] lg:text-5xl font-bold tracking-tightest leading-tight">
            Pronto para garantir o conforto de quem você ama?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="mt-5 text-[17px] sm:text-lg text-ink-200/80 max-w-xl mx-auto leading-relaxed">
            Solicite o laudo agora e dê o próximo passo com tranquilidade.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-lg h-14 px-8 text-[15px] font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent-glow gap-2 hover:-translate-y-0.5 transition-all"
              data-event="cta_click"
              data-plan="laudo"
            >
              <a
                href="https://wa.me/5585991275429?text=Quero%20solicitar%20o%20laudo%20para%20fralda%20geri%C3%A1trica."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Laudo — R$ 59
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </Button>
            <p className="text-[14px] text-ink-200/70">
              Pagamento único · sem assinatura · reembolso integral
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTAFinal;
