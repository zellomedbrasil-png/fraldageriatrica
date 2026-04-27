import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { WA_LINK, trackCtaClick } from "@/lib/constants";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

export const faqItems = [
  {
    q: "Quem tem direito ao benefício?",
    a: "Idosos com 60 anos ou mais que apresentem condição de incontinência, e pessoas com deficiência de qualquer idade com CID-10 que justifique o uso contínuo, conforme Portaria GM/MS nº 3.073/2024.",
  },
  {
    q: "Quantas fraldas posso retirar por mês?",
    a: "Até 120 fraldas mensais (4 por dia), em retiradas com intervalo mínimo de 10 dias e máximo de 40 unidades por vez, conforme regulamentação.",
  },
  {
    q: "Em quanto tempo recebo o laudo?",
    a: "Em até 24 horas após a triagem ser concluída e a avaliação clínica realizada pelo médico.",
  },
  {
    q: "O laudo pode ser recusado?",
    a: "Sim. A emissão depende exclusivamente da avaliação clínica individual e do critério do médico responsável. Quando não há indicação para uso contínuo de fralda geriátrica, o laudo não é emitido.",
  },
  {
    q: "Por quanto tempo o laudo é válido?",
    a: "180 dias (6 meses), conforme a Portaria GM/MS nº 3.073/2024. Após esse período, é necessária nova avaliação para renovação.",
  },
  {
    q: "Quanto custa renovar o laudo?",
    a: "R$ 59 — o mesmo valor da primeira emissão. Não há assinatura nem cobrança automática; a renovação só ocorre quando o paciente solicita uma nova avaliação após o término da validade.",
  },
  {
    q: "Preciso ir presencialmente a algum lugar?",
    a: "Para o laudo, não — todo o processo é online. Para retirar as fraldas, basta ir a uma farmácia credenciada do Programa Farmácia Popular com o laudo, documento de identidade e CPF do paciente.",
  },
  {
    q: "Nunca fiz consulta online. E aí?",
    a: "Você não precisa instalar nada, nem aprender ferramenta nova. Tudo acontece no WhatsApp que você já usa todo dia — basta responder algumas perguntas e enviar uma foto do documento. A nossa equipe guia o processo do começo ao fim.",
  },
  {
    q: "Vocês vendem fraldas?",
    a: "Não. Somos exclusivamente um serviço médico de emissão de laudos. A distribuição gratuita das fraldas é feita pelo Programa Farmácia Popular do Brasil em farmácias credenciadas.",
  },
  {
    q: "Quais documentos preciso enviar?",
    a: "Documento de identidade com foto (RG ou CNH) do paciente, CPF e — quando houver — receitas, laudos ou relatórios médicos anteriores que ajudem na avaliação. Toda a coleta é feita pelo WhatsApp e os dados são tratados conforme a LGPD.",
  },
];

const FAQ = () => {
  const half = Math.ceil(faqItems.length / 2);
  const col1 = faqItems.slice(0, half);
  const col2 = faqItems.slice(half);

  return (
    <section
      id="faq"
      className="py-24 lg:py-28 border-t border-border"
      style={{ background: "var(--surface-elevated)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-[0.18em] mb-3">
              Dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tightest leading-[1.1] mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tudo o que você precisa saber sobre o processo, regulamentação e seu direito ao
              benefício.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-1">
          {[col1, col2].map((col, ci) => (
            <ScrollReveal key={ci} delay={ci * 0.15}>
              <Accordion
                type="single"
                collapsible
                className="divide-y divide-border"
              >
                {col.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${ci}-${i}`}
                    className="group/item border-0 transition-colors duration-200 data-[state=open]:bg-primary/[0.025] -mx-3 px-3 rounded-lg"
                  >
                    <AccordionPrimitive.Header className="flex">
                      <AccordionPrimitive.Trigger
                        className={cn(
                          "group flex flex-1 items-center justify-between py-5 text-left text-[15px] font-semibold text-foreground transition-colors hover:text-primary data-[state=open]:text-[color:var(--brand-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:rounded-lg",
                        )}
                      >
                        <span className="pr-4 leading-snug">{item.q}</span>
                        <span
                          aria-hidden="true"
                          className="faq-icon-wrap relative shrink-0 w-7 h-7 rounded-full border border-border bg-white flex items-center justify-center transition-colors duration-200 group-hover:border-primary/40 group-data-[state=open]:border-[color:var(--brand-accent)]/40 group-data-[state=open]:bg-[color:var(--accent-soft)]"
                        >
                          <Plus
                            className="absolute w-3.5 h-3.5 text-muted-foreground transition-all duration-200 ease-out group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0"
                            strokeWidth={2.5}
                          />
                          <Minus
                            className="absolute w-3.5 h-3.5 text-[color:var(--brand-accent)] opacity-0 -rotate-90 transition-all duration-200 ease-out group-data-[state=open]:rotate-0 group-data-[state=open]:opacity-100"
                            strokeWidth={2.75}
                          />
                        </span>
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pr-10 -mt-1 pb-5">
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
            <p className="text-sm text-muted-foreground mb-4">
              Tire dúvidas antes de solicitar — atendimento humano pelo WhatsApp.
            </p>
            <Button asChild variant="outline" size="xl">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp para conversar com a equipe"
                onClick={() => trackCtaClick("faq")}
              >
                <MessageCircle className="w-[18px] h-[18px]" />
                Conversar com a equipe
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
