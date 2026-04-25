import { Users, Heart, AlertTriangle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: Users,
    title: "Idosos com 60 anos ou mais",
    desc: "Que apresentem condição clínica de incontinência urinária ou fecal comprovável.",
  },
  {
    icon: Heart,
    title: "Pessoas com deficiência",
    desc: "De qualquer idade, com CID-10 que justifique a necessidade contínua do uso de fralda.",
  },
];

const QuemTemDireito = () => {
  return (
    <section id="quem-tem-direito" className="section-padding bg-surface-elevated border-y border-border">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-[11px] font-bold uppercase tracking-wider">
              Elegibilidade
            </span>
            <h2 className="mt-4 text-3xl sm:text-[36px] font-bold text-text-primary tracking-tightest">
              Quem tem direito ao benefício
            </h2>
            <p className="mt-3 text-[16px] text-text-secondary leading-relaxed">
              Critérios definidos pela Portaria GM/MS nº 3.073/2024.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.08}>
              <article className="rounded-2xl bg-card border border-border p-8 h-full shadow-card hover:border-border-strong hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center mb-6">
                  <c.icon className="w-8 h-8 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-[20px] font-bold text-text-primary tracking-tight mb-2.5">
                  {c.title}
                </h3>
                <p className="text-[15px] text-text-secondary leading-relaxed">{c.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <aside className="mt-8 rounded-2xl bg-warning-soft border-l-4 border-l-warning-foreground/70 border-y border-r border-warning-foreground/15 p-6 flex items-start gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-warning-foreground/15 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-warning-foreground" strokeWidth={2} />
            </div>
            <p className="text-[14px] text-warning-foreground leading-relaxed pt-1.5">
              <strong className="font-bold">Importante:</strong> O laudo é emitido após avaliação
              clínica individual realizada pelo nosso médico. Casos que não atendam aos critérios
              clínicos não receberão emissão, e o valor pago é integralmente reembolsado.
            </p>
          </aside>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default QuemTemDireito;
