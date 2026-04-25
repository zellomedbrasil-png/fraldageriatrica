import { Users, HeartHandshake, AlertTriangle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: Users,
    title: "Idosos com 60 anos ou mais",
    desc: "Que apresentem condição clínica de incontinência urinária ou fecal devidamente documentada.",
  },
  {
    icon: HeartHandshake,
    title: "Pessoas com deficiência",
    desc: "De qualquer idade, com CID-10 que justifique a necessidade contínua de fralda geriátrica.",
  },
];

const QuemTemDireito = () => {
  return (
    <section id="quem-tem-direito" className="section-padding">
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
              <article className="rounded-2xl bg-card border border-border p-7 h-full shadow-card hover:border-border-strong hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 shadow-sm">
                  <c.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold text-text-primary tracking-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-[14px] text-text-secondary leading-relaxed">{c.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <aside className="mt-8 rounded-2xl bg-warning-soft border border-warning-foreground/15 p-5 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-warning-foreground/10 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4.5 h-4.5 text-warning-foreground" strokeWidth={2} />
            </div>
            <p className="text-[14px] text-warning-foreground leading-relaxed pt-1">
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
