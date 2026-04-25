import ScrollReveal from "./ScrollReveal";

const Economia = () => {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom">
              Quanto sua família pode economizar
            </h2>
            <p className="text-muted-foreground mt-3 font-light">
              Comparativo de custo mensal com fraldas geriátricas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Comprando direto
                </p>
                <p className="text-sm text-muted-foreground mb-2">Custo mensal médio</p>
                <p className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom">
                  R$ 200<span className="text-muted-foreground"> a </span>R$ 500
                </p>
              </div>
              <div className="p-6 sm:p-8 bg-accent-soft">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                  Pelo Farmácia Popular
                </p>
                <p className="text-sm text-muted-foreground mb-2">Custo mensal</p>
                <p className="text-3xl sm:text-4xl font-semibold text-accent tracking-tighter-custom">
                  R$ 0,00
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-sm text-muted-foreground mt-6 text-center max-w-2xl mx-auto leading-relaxed">
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