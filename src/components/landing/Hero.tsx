import { Stethoscope, CalendarCheck, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import heroImg from "@/assets/hero-cuidado.jpg";

const bullets = [
  { icon: Stethoscope, label: "Médico com CRM ativo" },
  { icon: CalendarCheck, label: "Laudo válido por 180 dias" },
  { icon: MapPin, label: "Aceito em farmácias credenciadas" },
];

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-hero-glow">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border shadow-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-xs font-medium text-muted-foreground tracking-tight">
                  Telemedicina ativa — atendimento em até 24h
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tighter-custom mb-6 leading-[1.08]">
                Laudo médico para fralda geriátrica,{" "}
                <span className="text-gradient-primary">em até 24 horas</span>, sem sair de casa.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8 font-light max-w-xl mx-auto lg:mx-0">
                Acesse fraldas geriátricas gratuitamente pelo Programa Farmácia Popular com o
                laudo emitido pelo nosso médico via telemedicina.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 justify-center lg:justify-start mb-10">
                {bullets.map((b) => (
                  <li key={b.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="w-7 h-7 rounded-full bg-accent-soft flex items-center justify-center">
                      <b.icon className="w-4 h-4 text-accent" strokeWidth={2.5} />
                    </span>
                    {b.label}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-base bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent-glow hover:-translate-y-0.5 transition-all"
                  data-event="cta_click"
                  data-plan="laudo"
                >
                  <a href="#precos">Solicitar Meu Laudo — R$ 79</a>
                </Button>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ver como funciona
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent rounded-[2rem] blur-2xl" />
              <img
                src={heroImg}
                alt="Filha cuidando carinhosamente da mãe idosa em casa"
                width={1280}
                height={1024}
                className="relative rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[5/4]"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;