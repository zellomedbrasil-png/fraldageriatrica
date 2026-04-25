import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WA_LINK =
  "https://wa.me/5585991275429?text=Quero%20solicitar%20o%20laudo%20para%20fralda%20geri%C3%A1trica.";

export const faqItems = [
  {
    q: "Quem tem direito a fraldas geriátricas gratuitas pelo SUS?",
    a: "Idosos com 60 anos ou mais que apresentem condição de incontinência, e pessoas com deficiência de qualquer idade com CID-10 que justifique o uso contínuo, conforme Portaria GM/MS nº 3.073/2024.",
  },
  {
    q: "Quantas fraldas posso retirar por mês?",
    a: "Até 120 fraldas mensais (4 por dia), em retiradas com intervalo mínimo de 10 dias e máximo de 40 unidades por vez, conforme regulamentação.",
  },
  {
    q: "Quanto tempo demora para receber o laudo?",
    a: "Em até 24 horas após a triagem ser concluída e a avaliação clínica realizada pelo médico.",
  },
  {
    q: "O laudo pode ser recusado?",
    a: "Sim. Se a avaliação clínica não confirmar a indicação para fralda geriátrica, o laudo não é emitido e o valor pago é reembolsado integralmente.",
  },
  {
    q: "Por quanto tempo o laudo é válido?",
    a: "180 dias (6 meses), conforme a Portaria GM/MS nº 3.073/2024. Após esse período, é necessária nova avaliação para renovação.",
  },
  {
    q: "Quanto custa renovar o laudo?",
    a: "R$ 59 — o mesmo valor da primeira emissão. Sem reajustes, sem assinatura, sem surpresas.",
  },
  {
    q: "Preciso ir presencialmente a algum lugar?",
    a: "Para o laudo, não — todo o processo é online. Para retirar as fraldas, basta ir a uma farmácia credenciada do Programa Farmácia Popular com o laudo, documento de identidade e CPF do paciente.",
  },
  {
    q: "Vocês vendem fraldas?",
    a: "Não. Somos exclusivamente um serviço médico de emissão de laudos. A distribuição gratuita das fraldas é feita pelo Programa Farmácia Popular do Brasil em farmácias credenciadas.",
  },
];

const FAQ = () => {
  const col1 = faqItems.slice(0, 4);
  const col2 = faqItems.slice(4);

  return (
    <section id="faq" className="py-24 bg-card border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-foreground tracking-tighter-custom mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Tudo o que você precisa saber sobre o processo, regulamentação e seu direito ao
              benefício.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {[col1, col2].map((col, ci) => (
            <ScrollReveal key={ci} delay={ci * 0.15}>
              <Accordion type="single" collapsible className="space-y-4">
                {col.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${ci}-${i}`}
                    className="border border-border rounded-xl bg-card hover:border-primary/30 transition-colors px-5"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground text-sm hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-base shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all gap-2"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                Solicitar meu Laudo
                <ArrowRight className="w-[18px] h-[18px]" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
