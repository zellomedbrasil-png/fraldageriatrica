import { Wallet, TrendingDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Economia = () => {
  return (
    <section className="section-padding bg-surface-elevated border-y border-border">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-[36px] font-bold text-text-primary tracking-tightest">
              O impacto no orçamento da família
            </h2>
            <p className="mt-3 text-[16px] text-text-secondary leading-relaxed">
              Comparativo de custo mensal com fraldas geriátricas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {/* SEM O LAUDO */}
            <article
              className="rounded-2xl p-8 sm:p-10 border shadow-card relative overflow-hidden"
              style={{
                backgroundColor: "oklch(0.97 0.025 25)",
                borderColor: "oklch(0.88 0.05 25)",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Wallet
                  className="w-4 h-4"
                  strokeWidth={2}
                  style={{ color: "oklch(0.55 0.18 28)" }}
                />
                <p
                  className="text-[11px] font-bold uppercase tracking-wider"
                  style={{ color: "oklch(0.5 0.18 28)" }}
                >
                  Sem o laudo
                </p>
              </div>
              <p className="text-[14px] text-text-secondary mb-3">
                Comprando direto na farmácia
              </p>
              <p
                className="text-[36px] sm:text-[44px] font-bold tracking-tightest leading-none"
                style={{ color: "oklch(0.42 0.18 28)" }}
              >
                R$ 200 — R$ 500
              </p>
              <p className="mt-3 text-[13px] text-text-secondary">Custo médio mensal em fraldas</p>
            </article>

            {/* COM O LAUDO */}
            <article
              className="rounded-2xl p-8 sm:p-10 border shadow-card relative overflow-hidden"
              style={{
                backgroundColor: "oklch(0.97 0.04 155)",
                borderColor: "oklch(0.85 0.08 155)",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <TrendingDown
                  className="w-4 h-4"
                  strokeWidth={2}
                  style={{ color: "oklch(0.5 0.14 155)" }}
                />
                <p
                  className="text-[11px] font-bold uppercase tracking-wider"
                  style={{ color: "oklch(0.45 0.14 155)" }}
                >
                  Com o laudo
                </p>
              </div>
              <p className="text-[14px] text-text-secondary mb-3">Pelo Farmácia Popular</p>
              <p
                className="text-[36px] sm:text-[44px] font-bold tracking-tightest leading-none"
                style={{ color: "oklch(0.4 0.16 155)" }}
              >
                R$ 0,00
              </p>
              <p className="mt-3 text-[13px] text-text-secondary">
                Até 120 fraldas/mês gratuitas
              </p>
            </article>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[13px] text-text-tertiary mt-8 text-center max-w-2xl mx-auto leading-relaxed">
            Cada laudo dá direito a até 120 fraldas/mês (4 unidades/dia), conforme Portaria GM/MS
            nº 3.073/2024. Disponibilidade pode variar conforme estoque da farmácia credenciada
            local.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Economia;
