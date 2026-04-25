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
];

const OndeRetirar = () => {
  return (
    <section className="py-20 lg:py-24 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom">
              Onde retirar as fraldas com seu laudo
            </h2>
            <p className="text-muted-foreground mt-3 font-light">
              Após receber seu laudo, basta levá-lo a qualquer farmácia credenciada do Programa
              Farmácia Popular do Brasil, identificada pela logomarca oficial do programa.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {redes.map((r) => (
              <div
                key={r}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-background border border-border"
              >
                <Store className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground truncate">{r}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full gap-2">
              <a
                href="https://www.gov.br/saude/pt-br/composicao/sectics/farmacia-popular"
                target="_blank"
                rel="noopener noreferrer"
              >
                Encontrar farmácia credenciada
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              Lista oficial do Programa Farmácia Popular — Ministério da Saúde.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OndeRetirar;