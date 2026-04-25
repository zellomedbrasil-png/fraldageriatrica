
# Auditoria CFM + Google — Reescrita de Copy

## 🎯 Objetivo
Manter os **benefícios reais** do serviço (clareza, economia, prazo de 24h, reembolso) sem violar:
- **Resolução CFM 2.314/2022** (telemedicina) e **Código de Ética Médica** (mercantilização, promessa de resultado, sensacionalismo)
- **Manifesto CFM sobre publicidade médica** (Res. 1.974/2011)
- **Políticas Google Ads/Search** para YMYL — Healthcare e Restricted Medical Services
- **CDC** e **Lei 9.294/96** (publicidade enganosa)

## 🚨 Riscos identificados na copy atual

| Local | Trecho atual | Risco |
|---|---|---|
| Hero H1 | *"Pare de gastar R$ 300 por mês com fraldas"* | Mercantilização do ato médico (CFM): o serviço médico é instrumentalizado como meio para economia. Google: claim financeiro absoluto. |
| Hero subtítulo | *"R$ 59 destrava o seu direito"* | "Destrava" implica garantia de resultado. CFM proíbe promessa de resultado. |
| Hero CTA | *"Quero economizar — R$ 59"* | Reforça mercantilização. |
| Hero badge | *"Mais de 120 fraldas/mês grátis pelo SUS — em 24h"* | Sugere garantia de quantidade independente de avaliação clínica. |
| Hero gradient | *"Tenha até 120 grátis, todo mês"* | Promessa absoluta — depende do critério clínico **e** da disponibilidade da farmácia. |
| Header | *"Quanto economizo"* + CTA *"Quero meu laudo — R$ 59"* | "Quero meu laudo" antes da avaliação clínica = vende laudo, não consulta. CFM grave. |
| ComoFunciona | *"Mais fácil que pedir delivery"* / *"sai com as fraldas grátis no mesmo dia"* | Banaliza ato médico + promessa absoluta de retirada (depende de estoque). |
| Precos H2 | *"Faça as contas com a gente"* + comparativo R$ 2.400 vs R$ 0,00 | Mercantilização explícita. Google considera publicidade enganosa de saúde. |
| Precos | *"Valor real do serviço: ~~R$ 200~~"* + *"valor de mercado: R$ 150"* | Tabela de preços comparativos é vedada pelo CEM (Cap. XIII, Art. 113). |
| Precos CTA | *"Quero meu laudo agora"* | Mesmo problema: vende laudo. |
| FAQ #6 | *"renovar é a decisão mais óbvia do mundo"* + *"R$ 2.400"* | Indução comercial. |
| FAQ #4 | *"O risco é todo nosso"* | Linguagem de oferta comercial agressiva — inadequada para serviço médico. |

---

## ✅ Princípios da reescrita

1. **O serviço é avaliação médica por telemedicina** que pode resultar em laudo — não venda de laudo.
2. **Benefícios mantidos** com linguagem sóbria: prazo (24h), modalidade (online), valor (R$ 59), política de reembolso, validade (180 dias).
3. **Economia mencionada de forma indireta e factual**, sempre com a fonte (Portaria GM/MS 3.073/2024) e ressalvas (depende de critério clínico e disponibilidade).
4. **CTAs reformulados** para "Solicitar avaliação" / "Iniciar atendimento", não "Quero meu laudo".
5. **Disclaimers visíveis**: emissão condicionada à indicação clínica.

---

## 📝 Alterações por arquivo

### `src/components/landing/Hero.tsx`
- **Badge**: → *"Avaliação médica online em até 24h • Conforme Portaria GM/MS 3.073/2024"*
- **H1**: → *"Avaliação médica online para laudo de fralda geriátrica."*
- **Gradient line**: → *"Em até 24 horas, sem sair de casa."*
- **Subtítulo**: → *"Atendimento por telemedicina com médico de CRM ativo. Em caso de indicação clínica, emitimos o laudo aceito pelo Programa Farmácia Popular para retirada gratuita de fraldas geriátricas (até 120/mês), conforme Portaria GM/MS nº 3.073/2024. Se o médico não identificar indicação, devolvemos 100% do valor."*
- **CTA principal**: → *"Solicitar avaliação — R$ 59"*
- **CTA secundário**: → *"Como funciona"*
- **Microcopy**: → *"✓ Pagamento único • ✓ Resposta em até 24h • ✓ Reembolso integral se não houver indicação clínica"*

### `src/components/landing/Header.tsx`
- Link *"Quanto economizo"* → *"Investimento"*
- CTA → *"Solicitar avaliação"*

### `src/components/landing/ComoFunciona.tsx`
- Eyebrow *"Mais fácil que pedir delivery"* → *"Processo 100% online"*
- H2 → *"Atendimento simples, em conformidade com a regulamentação."*
- Subtítulo → *"Avaliação por teleconsulta conforme Resolução CFM 2.314/2022. Em caso de indicação clínica, o laudo é emitido em até 24 horas."*
- Step 1 título → *"Triagem rápida no WhatsApp"* | desc reforçando dados clínicos
- Step 2 desc: manter referência CFM, remover "você não faz nada"
- Step 3 título → *"Laudo digital em até 24h"* | desc: *"Recebe o laudo com assinatura digital ICP-Brasil, válido por 180 dias. Apresente em uma farmácia credenciada do Programa Farmácia Popular para retirada do benefício, conforme estoque local."* (remove "no mesmo dia")

### `src/components/landing/Precos.tsx`
- H2 → *"Investimento único, sem assinatura."*
- **Remover** parágrafo de comparativo "Faça as contas" e os 2 cards (R$ 2.400 vs R$ 0,00).
- **Substituir** por bloco informativo neutro: *"O Programa Farmácia Popular do Brasil disponibiliza gratuitamente até 120 fraldas geriátricas/mês para beneficiários elegíveis. Para acessar, é necessário apresentar laudo médico válido (180 dias) — esse é o documento que avaliamos emitir."*
- **Remover** `valor de mercado: R$ 150` e similares de cada item.
- **Remover** `Valor real do serviço: ~~R$ 200~~`.
- Lista mantida com benefícios factuais (sem comparações de preço).
- CTA → *"Solicitar avaliação médica"*
- Reembolso: manter, reformular como *"Política de Reembolso"*: *"Caso a avaliação clínica não identifique indicação para uso contínuo de fralda geriátrica, o laudo não é emitido e o valor pago é reembolsado integralmente, em até 5 dias úteis."*

### `src/components/landing/FAQ.tsx`
- **#4**: remover *"o risco é todo nosso"*. → *"Sim. A emissão depende de critério clínico do médico responsável. Se a avaliação não confirmar indicação, o laudo não é emitido e reembolsamos 100% do valor pago."*
- **#6**: remover *"economiza R$ 2.400"* e *"decisão mais óbvia do mundo"*. → *"R$ 59 — o mesmo valor da primeira emissão. Não há assinatura nem cobrança automática; você solicita a renovação somente quando precisar."*
- CTA do FAQ → *"Solicitar avaliação — R$ 59"*

### `src/components/landing/Footer.tsx`
- Adicionar bloco do **Responsável Técnico** com placeholders explícitos:
  - *"Dr. [Nome] — CRM/[UF] [número]"*
  - *"Diretor Técnico Médico — Resolução CFM 2.314/2022"*
- Adicionar **CNPJ placeholder** e endereço da pessoa jurídica.
- Reforçar disclaimer já existente (já está bom — manter).

### `src/routes/index.tsx` (SEO)
- **TITLE** → *"Laudo Médico para Fralda Geriátrica Online — Avaliação em 24h | fraldageriatrica.com"*
- **DESCRIPTION** → *"Avaliação médica por telemedicina para emissão de laudo de fralda geriátrica, em até 24h, com médico de CRM ativo. Conforme Portaria GM/MS 3.073/2024 e Resolução CFM 2.314/2022."*
- Remover keyword *"farmácia popular fralda"* de posição de destaque (manter apenas no `keywords`).

---

## ⚖️ O que **continua** sendo dito (benefícios mantidos)
- ✅ R$ 59, pagamento único, sem assinatura
- ✅ Avaliação em até 24h
- ✅ Médico com CRM ativo
- ✅ 100% online via WhatsApp
- ✅ Laudo válido por 180 dias
- ✅ Aceito no Programa Farmácia Popular (até 120 fraldas/mês conforme Portaria 3.073/2024)
- ✅ Reembolso integral se não houver indicação clínica
- ✅ Assinatura ICP-Brasil

## 🚫 O que **sai** da página
- ❌ Comparativos R$ 200–500 vs R$ 0 e R$ 2.400 vs R$ 0
- ❌ "Valor real R$ 200" riscado e "valor de mercado R$ 150"
- ❌ "Pare de gastar", "destrava", "decisão mais óbvia", "o risco é todo nosso"
- ❌ "Mais fácil que pedir delivery", "sai com fraldas no mesmo dia"
- ❌ CTAs "Quero meu laudo" → trocados por "Solicitar avaliação"

Após aprovação, vou aplicar todas as edições em uma única passada e rodar `tsc --noEmit` para validar.
