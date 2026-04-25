import { RotateCcw, ShieldCheck, Lock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: RotateCcw,
    title: "Reembolso integral",
    desc: "Se nosso médico não puder emitir o laudo por critério clínico, devolvemos 100% do valor pago, sem burocracia.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade legal",
    desc: "Operamos conforme Resolução CFM 2.314/2022, Portaria GM/MS 3.073/2024 e LGPD em todos os dados.",
  },
  {
    icon: Lock,
    title: "Dados protegidos",
    desc: "Suas informações e do paciente são tratadas com sigilo médico e criptografia em todo o processo.",
  },
];

const Garantia = () => {
  return (
    <section className="section-padding">
      <div className="container-page">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-[36px] font-bold text-text-primary tracking-tightest">
              Sua segurança vem antes de tudo.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.08}>
              <article className="rounded-2xl p-7 h-full border border-border bg-card shadow-card hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-accent-soft text-accent">
                  <c.icon className="w-6 h-6" strokeWidth={2} />
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
