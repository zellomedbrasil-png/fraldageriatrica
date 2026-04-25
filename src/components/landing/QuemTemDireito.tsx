import { Users, Heart, AlertTriangle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: Users,
    title: "Idosos com 60 anos ou mais",
    desc: "Que apresentem condição clínica de incontinência urinária ou fecal.",
  },
  {
    icon: Heart,
    title: "Pessoas com deficiência, qualquer idade",
    desc: "Com CID-10 que justifique a necessidade contínua de fralda geriátrica.",
  },
];

const QuemTemDireito = () => {
  return (
    <section id="quem-tem-direito" className="py-20 lg:py-24 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom">
              Quem tem direito a fralda gratuita pelo Farmácia Popular
            </h2>
            <p className="text-muted-foreground mt-3 font-light">
              Critérios definidos pela Portaria GM/MS nº 3.073/2024.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <article className="rounded-3xl bg-background border border-border p-7 h-full hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <c.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-tight mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <aside className="rounded-2xl bg-warning-soft border border-warning-foreground/20 p-5 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-warning-foreground shrink-0 mt-0.5" />
            <p className="text-sm text-warning-foreground leading-relaxed">
              <strong className="font-semibold">Importante:</strong> O laudo é emitido após
              avaliação clínica individual realizada pelo nosso médico. Casos que não atendam aos
              critérios clínicos não receberão emissão, e o valor pago é integralmente reembolsado.
            </p>
          </aside>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default QuemTemDireito;