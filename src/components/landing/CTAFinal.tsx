import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const CTAFinal = () => {
  return (
    <section
      id="cta-final"
      className="py-24 lg:py-32 bg-slate-900 text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-glow/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter-custom mb-5 leading-tight">
            Pronto para garantir o conforto de quem você ama?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-slate-400 mb-10 font-light">
            Solicite o laudo agora e dê o próximo passo.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 py-7 text-base bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent-glow hover:-translate-y-0.5 transition-all gap-2"
            data-event="cta_click"
            data-plan="laudo"
          >
            <a
              href="https://wa.me/5585991275429?text=Quero%20solicitar%20o%20laudo%20para%20fralda%20geri%C3%A1trica."
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Laudo — R$ 79
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <p className="text-sm text-slate-400 mt-6">
            Ou conheça o{" "}
            <a href="#precos" className="text-accent hover:underline font-medium">
              Combo Praticidade →
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTAFinal;