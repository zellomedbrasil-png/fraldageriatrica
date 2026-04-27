import { Stethoscope, BadgeCheck, ShieldCheck, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    Icon: Stethoscope,
    title: "Médicos com CRM ativo",
    desc: "Toda avaliação é feita por médico inscrito e regular no Conselho Regional de Medicina, identificado no laudo emitido.",
  },
  {
    Icon: BadgeCheck,
    title: "Conformidade com a Resolução CFM 2.314/2022",
    desc: "Atuamos exclusivamente dentro do escopo da telemedicina previsto pelo Conselho Federal de Medicina.",
  },
  {
    Icon: ShieldCheck,
    title: "Laudo com assinatura ICP-Brasil",
    desc: "Documento médico digital com validade jurídica plena, padrão exigido pelo Programa Farmácia Popular.",
  },
  {
    Icon: Heart,
    title: "Atendimento humano pelo WhatsApp",
    desc: "Sem aplicativo novo, sem cadastro complicado. Uma equipe acompanha cada caso do início ao fim.",
  },
];

const EquipeClinica = () => {
  return (
    <section
      id="equipe-clinica"
      className="py-24 lg:py-28 border-y border-border"
      style={{ background: "var(--surface-base)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-[0.18em] mb-3">
              Compromissos clínicos
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tightest mb-4 leading-[1.1]">
              Médicos brasileiros, com CRM ativo, avaliando o seu caso.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Equipe clínica com experiência em geriatria, medicina de família e cuidados
              continuados. Cada laudo é assinado pelo médico responsável, com identificação
              completa e validade jurídica.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white border border-border p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 shadow-card-hover">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "color-mix(in oklab, var(--brand-primary) 10%, transparent)" }}
                >
                  <p.Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Faixa de regulamentação */}
        <ScrollReveal delay={0.4}>
          <div
            className="mt-10 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left"
            style={{
              background: "var(--gradient-brand-deep)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <p className="text-[11px] font-bold text-white/80 uppercase tracking-[0.18em]">
                Regulamentação aplicável
              </p>
            </div>
            <div className="flex-1 grid sm:grid-cols-2 gap-3 sm:gap-6 text-white/95">
              <p className="text-xs sm:text-sm leading-relaxed">
                <span className="font-semibold">Portaria GM/MS nº 3.073/2024</span>
                <span className="block text-white/70">Programa Farmácia Popular do Brasil</span>
              </p>
              <p className="text-xs sm:text-sm leading-relaxed">
                <span className="font-semibold">Resolução CFM nº 2.314/2022</span>
                <span className="block text-white/70">Telemedicina — Conselho Federal de Medicina</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EquipeClinica;