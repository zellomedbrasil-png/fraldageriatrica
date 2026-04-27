import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { WA_LINK, trackCtaClick } from "@/lib/constants";

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
    q: "E se eu nunca tiver feito uma consulta online?",
    a: "Você não precisa instalar nada, nem aprender ferramenta nova. Tudo acontece no WhatsApp que você já usa todo dia — basta responder algumas perguntas e enviar uma foto do documento. A nossa equipe guia o processo do começo ao fim.",
  },
  {
    q: "Vocês vendem fraldas?",
    a: "Não. Somos exclusivamente um serviço médico de emissão de laudos. A distribuição gratuita das fraldas é feita pelo Programa Farmácia Popular do Brasil em farmácias credenciadas.",
  },
  {
    q: "Vocês são uma clínica médica?",
    a: "Somos uma plataforma de telemedicina que conecta o paciente a médicos com CRM ativo, atuando conforme a Resolução CFM nº 2.314/2022. Toda avaliação clínica e emissão de laudo é de responsabilidade do médico assistente, identificado no documento.",
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
            <Button asChild variant="premium" size="xl">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp para solicitar avaliação médica"
                onClick={() => trackCtaClick("faq")}
              >
                <MessageCircle className="w-[18px] h-[18px]" />
                Solicitar avaliação — R$ 59
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
