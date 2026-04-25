import { TrendingDown, Wallet } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Economia = () => {
  return (
    <section className="section-padding bg-surface-elevated border-y border-border">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-[11px] font-bold uppercase tracking-wider">
              Economia
            </span>
            <h2 className="mt-4 text-3xl sm:text-[36px] font-bold text-text-primary tracking-tightest">
              Quanto sua família pode economizar
            </h2>
            <p className="mt-3 text-[16px] text-text-secondary leading-relaxed">
              Comparativo de custo mensal com fraldas geriátricas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 rounded-3xl border border-border bg-card overflow-hidden shadow-card">
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Wallet className="w-4 h-4 text-text-tertiary" strokeWidth={1.75} />
                  <p className="text-[11px] font-bold text-text-tertiary uppercase tracking-wider">
                    Comprando direto
                  </p>
                </div>
                <p className="text-[13px] text-text-secondary mb-2">Custo mensal médio</p>
                <p className="text-[28px] sm:text-[32px] font-bold text-text-primary tracking-tightest leading-tight">
                  R$ 200
                  <span className="text-text-tertiary font-medium"> a </span>
                  R$ 500
                </p>
              </div>
              <div className="p-7 sm:p-8 bg-gradient-to-br from-accent-soft to-card relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown className="w-4 h-4 text-accent" strokeWidth={2} />
                  <p className="text-[11px] font-bold text-accent uppercase tracking-wider">
                    Pelo Farmácia Popular
                  </p>
                </div>
                <p className="text-[13px] text-text-secondary mb-2">Custo mensal</p>
                <p className="text-[28px] sm:text-[32px] font-bold text-accent tracking-tightest leading-tight">
                  R$ 0,00
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[14px] text-text-secondary mt-6 text-center max-w-2xl mx-auto leading-relaxed">
            Cada laudo é válido por 180 dias e dá direito a até 120 fraldas/mês (4 unidades por
            dia), conforme Portaria GM/MS nº 3.073/2024. A renovação a cada 6 meses garante o
            acesso contínuo ao benefício.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Economia;
