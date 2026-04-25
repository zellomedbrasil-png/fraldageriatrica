import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

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
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-[11px] font-bold uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl sm:text-[36px] font-bold text-text-primary tracking-tightest">
              Perguntas frequentes
            </h2>
            <p className="mt-3 text-[16px] text-text-secondary leading-relaxed">
              Tudo o que você precisa saber antes de solicitar.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full mt-12 space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 sm:px-6 shadow-xs data-[state=open]:border-border-strong data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left text-[15px] sm:text-[16px] font-semibold text-text-primary hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-text-secondary leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
