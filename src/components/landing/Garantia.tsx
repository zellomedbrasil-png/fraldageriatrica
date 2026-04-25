import { ShieldCheck, Lock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: ShieldCheck,
    title: "Reembolso integral por critério clínico",
    desc: "Se nosso médico avaliar que não é possível emitir o laudo por critério clínico, devolvemos 100% do valor pago. Sem letras miúdas, sem burocracia.",
    primary: true,
  },
  {
    icon: Lock,
    title: "Conformidade legal e LGPD",
    desc: "Operamos conforme Resolução CFM 2.314/2022 (Telemedicina) e Portaria GM/MS nº 3.073/2024. LGPD aplicada a todos os dados pessoais.",
    primary: false,
  },
];

const Garantia = () => {
  return (
    <section className="section-padding bg-surface-elevated border-y border-border">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-[11px] font-bold uppercase tracking-wider">
              Garantia
            </span>
            <h2 className="mt-4 text-3xl sm:text-[36px] font-bold text-text-primary tracking-tightest">
              Sua segurança é nosso compromisso
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <article
                className={`rounded-2xl p-7 h-full border shadow-card ${
                  c.primary
                    ? "bg-gradient-to-br from-accent-soft to-card border-accent/25"
                    : "bg-card border-border"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    c.primary
                      ? "bg-accent text-accent-foreground shadow-accent-glow"
                      : "bg-primary/8 text-primary"
                  }`}
                >
                  <c.icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-[18px] font-bold text-text-primary tracking-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-[14px] text-text-secondary leading-relaxed">{c.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Garantia;
