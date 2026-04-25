import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

export const faqItems = [
  {
    q: "Quem tem direito a receber fraldas geriátricas gratuitamente pelo SUS?",
    a: "Idosos com 60 anos ou mais que apresentem condição de incontinência, e pessoas com deficiência de qualquer idade com CID-10 que justifique o uso contínuo, conforme Portaria GM/MS nº 3.073/2024.",
  },
  {
    q: "Quantas fraldas posso retirar por mês?",
    a: "Até 120 fraldas mensais, equivalente a 4 unidades por dia, com retiradas em intervalos de no mínimo 10 dias e máximo de 40 unidades por retirada.",
  },
  {
    q: "Quanto tempo demora para receber o laudo?",
    a: "O laudo é emitido em até 24 horas após a triagem, mediante avaliação clínica individual pelo médico com CRM ativo.",
  },
  {
    q: "O laudo pode ser recusado?",
    a: "Sim. Casos em que a avaliação clínica não confirme a indicação para fralda geriátrica não recebem o laudo. Nesses casos, o valor pago é reembolsado integralmente.",
  },
  {
    q: "Por quanto tempo o laudo é válido?",
    a: "180 dias (6 meses), conforme regulamentação. Após esse prazo, é necessária nova avaliação para renovação.",
  },
  {
    q: "Preciso ir presencialmente a algum lugar?",
    a: "Não para o laudo — todo o processo é online via telemedicina. Para retirar as fraldas, você precisa ir a uma farmácia credenciada do Programa Farmácia Popular com o laudo, documento de identidade e CPF do paciente.",
  },
  {
    q: "O laudo é o mesmo aceito em todas as farmácias do Farmácia Popular?",
    a: "Sim. O laudo é emitido com assinatura digital ICP-Brasil, o mesmo padrão exigido para documentos médicos pelo Conselho Federal de Medicina, e é aceito em todas as farmácias credenciadas ao Programa Farmácia Popular.",
  },
  {
    q: "Vocês vendem fraldas?",
    a: "Não. fraldageriatrica.com é um serviço médico de emissão de laudos. O Combo Praticidade oferece, opcionalmente, um pacote inicial de fraldas fornecido e entregue por parceiro logístico cadastrado, como conveniência ao paciente enquanto se organiza para retirada gratuita pelo PFPB.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tighter-custom">
              Perguntas frequentes
            </h2>
            <p className="text-muted-foreground mt-3 font-light">
              Tudo o que você precisa saber antes de solicitar.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 data-[state=open]:border-primary/30 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
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