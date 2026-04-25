import { ExternalLink, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const redes = [
  "Drogasil",
  "Drogaria São Paulo",
  "Pague Menos",
  "Pacheco",
  "Drogaria Araujo",
  "Drogaria Globo",
  "Extrafarma",
  "Panvel",
];

const OndeRetirar = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-[11px] font-bold uppercase tracking-wider">
              Onde retirar
            </span>
            <h2 className="mt-4 text-3xl sm:text-[36px] font-bold text-text-primary tracking-tightest">
              Retire em qualquer farmácia credenciada
            </h2>
            <p className="mt-3 text-[16px] text-text-secondary leading-relaxed">
              Após receber seu laudo, basta levá-lo a qualquer farmácia credenciada do Programa
              Farmácia Popular do Brasil, identificada pela logomarca oficial.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12">
            {redes.map((r) => (
              <div
                key={r}
                className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl bg-card border border-border shadow-xs"
              >
                <Store className="w-4 h-4 text-primary shrink-0" strokeWidth={1.75} />
                <span className="text-[14px] font-medium text-text-primary truncate">{r}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="rounded-lg h-11 px-5 gap-2 border-border-strong text-text-primary hover:bg-surface-soft"
            >
              <a
                href="https://www.gov.br/saude/pt-br/composicao/sectics/farmacia-popular"
                target="_blank"
                rel="noopener noreferrer"
              >
                Encontrar farmácia credenciada
                <ExternalLink className="w-4 h-4" strokeWidth={1.75} />
              </a>
            </Button>
            <p className="text-[12px] text-text-tertiary mt-3">
              Lista oficial do Programa Farmácia Popular — Ministério da Saúde.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OndeRetirar;
