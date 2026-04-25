import { Shield, Lock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: Shield,
    title: "Reembolso integral por critério clínico",
    desc: "Se nosso médico avaliar que não é possível emitir o laudo por critério clínico, devolvemos 100% do valor pago. Sem letras miúdas, sem burocracia.",
    primary: true,
  },
  {
    icon: Lock,
    title: "Conformidade legal",
    desc: "Operamos conforme Resolução CFM 2.314/2022 (Telemedicina) e Portaria GM/MS nº 3.073/2024 (Programa Farmácia Popular). LGPD aplicada a todos os dados.",
    primary: false,
  },
];

const Garantia = () => {
  return (
    <section className="py-20 lg:py-24 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom">
              Sua segurança é nosso compromisso
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <article
                className={`rounded-3xl p-7 h-full border ${
                  c.primary
                    ? "bg-accent-soft border-accent/30"
                    : "bg-background border-border"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    c.primary ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
                  }`}
                >
                  <c.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Garantia;