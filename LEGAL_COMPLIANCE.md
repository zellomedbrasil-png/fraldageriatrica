# LEGAL_COMPLIANCE.md — fraldageriatrica.com

Este documento descreve os pontos legais sensíveis abordados na landing page e
como o copy foi construído para evitar irregularidades sanitárias, médicas e
publicitárias.

---

## 1. Portaria GM/MS nº 3.073/2024 — Programa Farmácia Popular do Brasil (PFPB)

- A distribuição **gratuita** de fraldas geriátricas é responsabilidade exclusiva
  do Programa Farmácia Popular, operado pelo Ministério da Saúde através de
  farmácias credenciadas. **fraldageriatrica.com não distribui, não estoca e
  não revende fraldas geriátricas**.
- Critérios citados na página (idosos 60+ com incontinência ou pessoas com
  deficiência com CID-10 justificador, até 120 fraldas/mês, validade do laudo
  180 dias) refletem a regulamentação vigente. Caso a Portaria sofra alteração,
  os textos devem ser revisados.
- Não é feita qualquer promessa sobre disponibilidade de estoque nas farmácias
  credenciadas — esse fluxo está fora do nosso controle.

## 2. Resolução CFM nº 2.314/2022 — Telemedicina

- O serviço médico (avaliação clínica e emissão de laudo) é prestado por médico
  com **CRM ativo**, conforme exigido pela Resolução.
- O laudo é emitido com **assinatura digital padrão ICP-Brasil**, atendendo aos
  requisitos do CFM para documentos médicos eletrônicos.
- A página apresenta o **diretor técnico médico** com CRM no rodapé, conforme
  exigência da Resolução.
- A landing **não promete diagnóstico**, **não substitui acompanhamento médico
  regular** e deixa explícito que o laudo depende de **avaliação clínica
  individual** podendo ser **recusado por critério médico**, com reembolso
  integral nesse caso.

## 3. Separação entre serviço médico e logística de fraldas

Este é o ponto mais sensível da operação. A landing page foi estruturada para
não configurar comércio de produtos para saúde sem autorização sanitária:

- A oferta principal (R$ 79) é o **laudo médico**, que é um serviço de
  telemedicina.
- A oferta secundária ("Combo Praticidade", R$ 138) inclui o laudo + um pacote
  inicial de fraldas fornecido por **parceiro logístico cadastrado**, que é o
  responsável pela comercialização e entrega das fraldas. fraldageriatrica.com
  apenas intermedia a logística como conveniência ao paciente.
- O texto deixa explícito, em ponto destacado abaixo dos cards de preço:
  > "fraldageriatrica.com não comercializa fraldas — apenas intermedia a
  > logística de entrega através de parceiro autorizado, como cortesia para
  > agilidade do paciente."
- O parceiro logístico contratado deverá possuir as autorizações sanitárias
  cabíveis (Anvisa/Vigilância Sanitária local) para distribuição de produtos
  para saúde do tipo "fralda geriátrica descartável".

## 4. Restrições publicitárias respeitadas

A landing **não usa** os seguintes elementos, expressamente proibidos pelo
CFM (Código de Ética Médica) e pelo Codecon/Conar para serviços de saúde:

- ❌ "Fraldas grátis garantidas"
- ❌ "100% de aprovação", "garantia de laudo", "todo paciente recebe"
- ❌ Timer de contagem regressiva ou urgência artificial
- ❌ Marcas comerciais de fraldas
- ❌ Antes/depois ou depoimentos fictícios
- ❌ Promessa de economia em valores totais ("economize R$ X mil/ano")
- ❌ Imagens em situação de fragilidade ou degradação do paciente

## 5. LGPD

- Dados coletados via formulário/triagem serão tratados conforme Lei 13.709/2018.
- Links para Política de Privacidade, Termos de Uso e LGPD estão no rodapé
  (placeholders `#` — devem ser preenchidos com os documentos finais antes do
  go-live em produção).

## 6. Pendências antes do go-live

- [ ] Substituir "Dr. [Nome] — CRM/[UF] [número]" pelos dados reais do diretor
      técnico responsável.
- [ ] Inserir links reais para Termos de Uso, Política de Privacidade, LGPD e
      Política de Reembolso.
- [ ] Formalizar contrato com parceiro logístico responsável pelo Combo
      Praticidade e validar suas autorizações sanitárias.
- [ ] Inserir Pixel do Meta Ads e Google Tag Manager (placeholders previstos
      no `<head>`).
- [ ] Validar copy final com assessoria jurídica especializada em saúde.