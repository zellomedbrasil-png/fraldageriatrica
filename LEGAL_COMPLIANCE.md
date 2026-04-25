# LEGAL_COMPLIANCE.md — fraldageriatrica.com

Este documento descreve os pontos legais sensíveis abordados na landing page e
como o copy foi construído para evitar irregularidades sanitárias, médicas e
publicitárias.

Última auditoria: abril/2026 — alinhamento com CFM e políticas Google Ads/Search.

---

## 1. Portaria GM/MS nº 3.073/2024 — Programa Farmácia Popular do Brasil (PFPB)

- A distribuição **gratuita** de fraldas geriátricas é responsabilidade exclusiva
  do Programa Farmácia Popular, operado pelo Ministério da Saúde por meio de
  farmácias credenciadas. **fraldageriatrica.com não distribui, não estoca e
  não revende fraldas geriátricas**.
- Critérios citados na página (idosos 60+ com incontinência ou pessoas com
  deficiência com CID-10 justificador, até 120 fraldas/mês, validade do laudo
  de 180 dias) refletem a regulamentação vigente. Caso a Portaria sofra
  alteração, os textos devem ser revisados.
- A página **não promete** disponibilidade de estoque nas farmácias credenciadas
  — esse fluxo está fora do nosso controle e está explicitado no texto.

## 2. Resolução CFM nº 2.314/2022 — Telemedicina

- O serviço médico (avaliação clínica e eventual emissão de laudo) é prestado
  por médico com **CRM ativo**, conforme exigido pela Resolução.
- O laudo, quando emitido, possui **assinatura digital padrão ICP-Brasil**,
  atendendo aos requisitos do CFM para documentos médicos eletrônicos.
- A página apresenta o **diretor técnico médico** com CRM no rodapé, em bloco
  destacado, conforme exigência da Resolução e do Manual de Publicidade Médica
  do CFM.
- A landing **não promete diagnóstico**, **não substitui acompanhamento médico
  regular** e deixa explícito que o laudo depende de **avaliação clínica
  individual**, podendo não ser emitido por critério médico, com reembolso
  integral nesse caso.

## 3. Auditoria CFM — termos removidos da copy

A landing **NÃO contém** os seguintes elementos, que foram removidos durante a
auditoria por configurarem mercantilização do ato médico, promessa de resultado
ou indução comercial — vedados pelo Código de Ética Médica (Cap. XIII) e pelo
Manual de Publicidade Médica do CFM:

- ❌ "Pare de gastar R$ X/mês" (mercantilização do ato médico)
- ❌ "Tenha 120 fraldas grátis todo mês" (promessa de resultado)
- ❌ "Quero meu laudo" como CTA (vende laudo, não consulta) — substituído por
      "Solicitar avaliação"
- ❌ "Destrava o seu direito" (promessa de resultado)
- ❌ Tabela comparativa de preços R$ 200–500 vs R$ 0,00 (proibida pelo CEM
      art. 113)
- ❌ Preço riscado "R$ 200" e "valor de mercado: R$ 150" (concorrência desleal,
      proibida pelo CEM)
- ❌ "Mais fácil que pedir delivery" (banalização do ato médico)
- ❌ "O risco é todo nosso" (linguagem comercial agressiva sobre serviço médico)
- ❌ "A decisão mais óbvia do mundo" (indução comercial à renovação)
- ❌ "Sai com fraldas grátis no mesmo dia" (promessa fora do nosso controle)
- ❌ Timer de contagem regressiva ou urgência artificial
- ❌ Marcas comerciais de fraldas
- ❌ Antes/depois ou depoimentos fictícios
- ❌ "100% de aprovação", "garantia de laudo", "todo paciente recebe"
- ❌ Imagens em situação de fragilidade ou degradação do paciente

## 4. Política Google Ads/Search (YMYL — Healthcare)

A copy foi adequada às políticas do Google para conteúdo de saúde:

- ✅ Sem **claims financeiros absolutos** ("economize R$ X garantido")
- ✅ Sem **claims de resultado em saúde**
- ✅ **Identificação clara do responsável técnico** com CRM (E-E-A-T)
- ✅ Disclaimer no rodapé sobre o escopo do serviço
- ✅ Política de reembolso explícita
- ✅ Citação da regulamentação aplicável (Portaria 3.073/2024 e Resolução CFM
      2.314/2022) sempre que mencionado o benefício

> Atenção: telemedicina é serviço médico restrito no Google Ads. Para anúncios
> pagos, pode ser exigida certificação **LegitScript Telemedicine Certification**
> ou validação manual via formulário do Google. Verificar antes do go-live.

## 5. Política de oferta — Avaliação x Laudo

A oferta única apresentada é **R$ 59 pela avaliação médica por telemedicina**.
O laudo é o produto resultante da avaliação **se houver indicação clínica**.
Caso o médico, por critério clínico, conclua que não há indicação para uso
contínuo de fralda geriátrica, o valor pago é reembolsado integralmente em
até 5 dias úteis.

> Importante: a versão anterior incluía um "Combo Praticidade" (R$ 138 com
> pacote de fraldas via parceiro logístico). **Esse combo foi removido**. A
> oferta atual é exclusivamente o serviço médico (avaliação + eventual laudo)
> por R$ 59. Se no futuro um pacote logístico for oferecido, exigirá:
> - Contrato com parceiro logístico autorizado (Anvisa/VISA local) para
>   distribuição de produtos para saúde
> - Separação visual e textual entre serviço médico e produto
> - Atualização deste documento

## 6. LGPD

- Dados coletados via WhatsApp/triagem serão tratados conforme Lei 13.709/2018.
- Links para Política de Privacidade, Termos de Uso e LGPD estão no rodapé
  (placeholders `#` — devem ser preenchidos com os documentos finais antes do
  go-live em produção).

## 7. Pendências antes do go-live

- [ ] Substituir `Dr. [Nome] — CRM/[UF] [número]` no rodapé pelos dados reais
      do diretor técnico responsável.
- [ ] Substituir `[Razão Social]` e `CNPJ [00.000.000/0000-00]` no rodapé.
- [ ] Inserir links reais para Termos de Uso, Política de Privacidade, LGPD e
      Política de Reembolso.
- [ ] Verificar necessidade de certificação LegitScript para Google Ads.
- [ ] Inserir Pixel do Meta Ads e Google Tag Manager (placeholders previstos
      no `<head>`).
- [ ] Validar copy final com assessoria jurídica especializada em saúde
      (recomendado: revisão por advogado com OAB e atuação em direito médico).
