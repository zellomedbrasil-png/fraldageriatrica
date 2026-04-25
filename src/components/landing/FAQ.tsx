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
  "https://wa.me/5585991275429?text=Quero%20solicitar%20a%20avalia%C3%A7%C3%A3o%20m%C3%A9dica%20para%20laudo%20de%20fralda%20geri%C3%A1trica.";

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
    a: "Sim. A emissão do laudo depende da avaliação clínica individual e do critério do médico responsável. Se a avaliação não identificar indicação para uso contínuo de fralda geriátrica, o laudo não é emitido e reembolsamos 100% do valor pago em até 5 dias úteis.",
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
    q: "E se eu nunca tiver feito uma consulta online?",
    a: "Você não precisa instalar nada, nem aprender ferramenta nova. Tudo acontece no WhatsApp que você já usa todo dia — basta responder algumas perguntas e enviar uma foto do documento. A nossa equipe guia o processo do começo ao fim.",
  },
  {
    q: "Vocês vendem fraldas?",
    a: "Não. Somos exclusivamente um serviço médico de emissão de laudos. A distribuição gratuita das fraldas é feita pelo Programa Farmácia Popular do Brasil em farmácias credenciadas.",
  },
];

const FAQ = () => {
  const half = Math.ceil(faqItems.length / 2);
  const col1 = faqItems.slice(0, half);
  const col2 = faqItems.slice(half);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-surface-soft border-t border-border">
      <div className="container-page">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.1em] mb-3">
              Dúvidas frequentes
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-ink-900 mb-4 leading-[1.15]">
              Perguntas frequentes
            </h2>
            <p className="text-[16px] text-ink-700 max-w-xl mx-auto leading-[1.6]">
              Tudo o que você precisa saber sobre o processo, regulamentação e seu direito ao
              benefício.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {[col1, col2].map((col, ci) => (
            <ScrollReveal key={ci} delay={ci * 0.1}>
              <Accordion type="single" collapsible className="space-y-3">
                {col.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${ci}-${i}`}
                    className="border border-border rounded-xl bg-white hover:border-primary/40 data-[state=open]:bg-surface-soft data-[state=open]:border-primary/30 transition-all px-5 group"
                  >
                    <AccordionTrigger className="text-left font-semibold text-ink-900 text-[15px] hover:no-underline py-5 [&>svg]:text-primary [&>svg]:transition-transform">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-ink-700 leading-[1.7] pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-14 text-center">
            <Button
              asChild
              className="rounded-[10px] h-[52px] px-7 text-[16px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                Solicitar avaliação — R$ 59
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
