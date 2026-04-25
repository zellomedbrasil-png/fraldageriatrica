
# Reescrita de Copy — Aplicando "$100M Offers" (Alex Hormozi)

Objetivo: tornar a oferta de R$ 59 tão óbvia e valiosa que recusar pareça irracional, usando a **Equação de Valor** do Hormozi:

> **Valor = (Sonho Realizado × Probabilidade Percebida de Sucesso) ÷ (Atraso × Esforço & Sacrifício)**

A estratégia é **maximizar** o sonho (economia real + dignidade) e a confiança, e **minimizar** atraso (24h) e esforço (tudo pelo WhatsApp, sem sair de casa).

---

## 1. HEADER — CTA mais direto (`src/components/landing/Header.tsx`)

| Antes | Depois |
|---|---|
| "Solicitar Laudo" | **"Quero meu laudo — R$ 59"** |
| Menu: "Preço" | "Quanto economizo" |

**Por quê:** ancorar preço no botão remove fricção; trocar "Preço" por "Quanto economizo" muda o frame de custo para benefício (princípio do *value stacking*).

---

## 2. HERO — Headline com Promessa de Sonho + Eliminação de Esforço (`src/components/landing/Hero.tsx`)

**Pill atual:** "Telemedicina ativa — laudo em até 24h"
**Nova pill:** **"Mais de 120 fraldas/mês grátis pelo SUS — em 24h"**

**H1 atual:** "Laudo para fralda geriátrica sem sair de casa."
**Novo H1:**
> **Pare de gastar R$ 300 por mês com fraldas.**
> *Em 24 horas, com R$ 59, sua família passa a receber até 120 fraldas grátis — todo mês.*

(A segunda linha vai no `<span>` com gradiente, ancorando o "grátis").

**Subheadline nova (substitui o parágrafo atual):**
> Um único laudo médico (válido por 6 meses) destrava o seu direito ao Programa Farmácia Popular. Tudo pelo WhatsApp, com médico CRM. Se o médico não aprovar, **você recebe 100% do dinheiro de volta**.

**CTAs:**
- Primário: **"Quero economizar — R$ 59"** (em vez de "Solicitar meu Laudo")
- Secundário: **"Ver quanto vou economizar"** (linka para #precos em vez de #como-funciona)

**Microcopy abaixo dos CTAs (NOVO — bloco de risk reversal):**
> ✓ Pagamento único  •  ✓ Resposta em 24h  •  ✓ 100% reembolsado se não aprovado

**Trust bar (mantém ícones, troca textos):**
- "ICP-Brasil" → "Laudo com validade jurídica"
- "Dados Seguros" → "100% LGPD"
- "CRM Ativo" → "Médico responsável"

**Por quê (Hormozi):** o headline antigo descreve o produto (laudo). O novo vende o **sonho** (parar de gastar) com **prova específica** (R$ 300, 120 fraldas, 24h, R$ 59) — números concretos > adjetivos.

---

## 3. COMO FUNCIONA — Reduzir esforço percebido (`src/components/landing/ComoFunciona.tsx`)

**Eyebrow novo (acima do H2):** "MAIS FÁCIL QUE PEDIR DELIVERY"

**H2 atual:** "Em 3 passos simples"
**Novo H2:** **"3 passos. 24 horas. Zero burocracia."**

**Subtítulo:**
> Você não precisa sair de casa, marcar consulta no SUS, nem enfrentar fila. Resolve tudo pelo WhatsApp.

**Passos — reescrever foco em ESFORÇO MÍNIMO:**

| # | Título atual | Novo título | Nova descrição |
|---|---|---|---|
| 1 | Cadastro e Triagem | **"3 minutos no celular"** | Você responde um formulário rápido com os dados do paciente. Não precisa de exames, nem documentos complicados. |
| 2 | Avaliação por médico CRM | **"Médico avalia seu caso"** | Nosso médico (CRM ativo) analisa o caso por teleconsulta, conforme Resolução CFM 2.314/2022. Você não faz nada nessa etapa. |
| 3 | Laudo no WhatsApp | **"Laudo no seu WhatsApp em 24h"** | Você recebe o laudo digital com assinatura ICP-Brasil. Leva na farmácia credenciada e sai com as fraldas grátis no mesmo dia. |

**Mini-tag do passo 3:** mantém "Em até 24 horas" (já está bom).

---

## 4. PREÇOS — Reformular como Grand Slam Offer (`src/components/landing/Precos.tsx`)

Esta é a seção mais importante. Aplicar **Value Stacking** + **Price Anchoring** + **Risk Reversal**.

**H2 atual:** "Transparência total"
**Novo H2:** **"Faça as contas com a gente."**

**Subtítulo (novo — ancoragem de valor antes do preço):**
> Em uma farmácia comum, 120 fraldas/mês custam entre **R$ 200 e R$ 400**. Por **6 meses**, são até **R$ 2.400** do seu bolso. Com o laudo, esse custo vira **R$ 0,00**.

**Bloco novo ANTES do card de preço — "Comparativo" (inline, simples):**
```
SEM LAUDO          COM LAUDO
R$ 2.400 / 6 meses  →  R$ 0,00
       (na farmácia)        (Farmácia Popular)
```

**Card de preço — adicionar "value stack" antes do preço:**

Eyebrow: "TUDO QUE VOCÊ RECEBE POR R$ 59"

Lista (expandir para mostrar valor percebido item a item — cada item com "valor de mercado" tachado):

- ✓ Avaliação clínica com médico CRM ativo *— normalmente R$ 150*
- ✓ Laudo digital com assinatura ICP-Brasil *— validade jurídica garantida*
- ✓ Validade de 6 meses (180 dias) *— não precisa pagar de novo*
- ✓ Atendimento no WhatsApp em até 24h *— sem fila, sem agenda*
- ✓ Aceito em qualquer farmácia do Programa Farmácia Popular
- ✓ Reembolso integral se o médico não aprovar *— risco zero*

Linha de ancoragem (acima do preço):
> Valor real do serviço: ~~R$ 200~~

Preço grande: **R$ 59** (mantém)

Microcopy abaixo do preço (NOVO):
> Pagamento único. Sem assinatura. Sem renovação automática.

CTA: **"Quero meu laudo agora"** (em vez de "Solicitar meu Laudo")

**Garantia (logo abaixo do CTA — fortalecer):**
> 🛡️ **Garantia de Reembolso 100%** — Se o médico, por critério clínico, não puder emitir o laudo, devolvemos integralmente o seu dinheiro. Sem perguntas, sem burocracia.

**Por quê (Hormozi):** O preço só faz sentido depois que o cliente já enxergou o valor empilhado. Mostrar R$ 2.400 em economia transforma R$ 59 em "no-brainer". A garantia reverte 100% do risco para nós.

---

## 5. FAQ — Reescrever 2 perguntas-chave (`src/components/landing/FAQ.tsx`)

Adicionar/reescrever para atacar **objeções implícitas** (técnica do Hormozi):

**Reescrever Q4 ("O laudo pode ser recusado?"):**
> **R:** Sim — e se isso acontecer, **você recebe 100% do dinheiro de volta no mesmo dia**, sem precisar justificar. O risco é todo nosso. Cobramos R$ 59 só quando entregamos.

**Reescrever Q6 ("Quanto custa renovar o laudo?"):**
> **R:** R$ 59 — o mesmo valor. Sem reajuste, sem assinatura, sem cobrança automática. Você só paga quando precisa. E sim, considerando que você economiza até R$ 2.400 a cada 6 meses, renovar é a decisão mais óbvia do mundo.

**Adicionar nova Q (antes da última) — ataca objeção "é confiável?":**
> **"E se eu nunca tiver feito uma consulta online?"**
> Você não precisa instalar nada, nem aprender ferramenta nova. Tudo acontece no WhatsApp que você já usa todo dia. Mais de [X] famílias brasileiras já usaram esse caminho desde a Portaria 3.073/2024.

---

## 6. SEO/META — Atualizar título e description (`src/routes/index.tsx`)

**Title atual:** "Laudo Médico para Fralda Geriátrica Online | fraldageriatrica.com"
**Novo title:** **"Pare de gastar R$ 300/mês com fraldas — Laudo por R$ 59 em 24h"**

**Description atual:** descritiva do serviço.
**Nova description:**
> Receba o laudo médico (R$ 59, em 24h) que destrava até 120 fraldas geriátricas grátis por mês pelo Farmácia Popular. Médico CRM, 100% online, reembolso garantido se não aprovado.

---

## Princípios do Hormozi aplicados (resumo)

1. **Especificidade > Generalidade** — "120 fraldas", "R$ 300/mês", "R$ 2.400/6 meses", "24h" em todos os pontos de decisão.
2. **Sonho concreto** — "Pare de gastar" > "Tenha acesso ao benefício".
3. **Eliminação de esforço** — "Mais fácil que pedir delivery", "WhatsApp que você já usa".
4. **Eliminação de atraso** — "24h" repetido como âncora.
5. **Risk reversal radical** — Garantia explícita 3x na página (Hero, Preços, FAQ).
6. **Value stacking** — Lista de benefícios com valor de mercado tachado para ancorar R$ 59 como pechincha.
7. **Price anchoring** — Comparativo R$ 2.400 vs R$ 0 ANTES do preço de R$ 59.
8. **CTA orientado a benefício, não a ação** — "Quero economizar" > "Solicitar laudo".

---

## Arquivos que serão alterados

- `src/components/landing/Header.tsx` — texto do CTA e link de menu
- `src/components/landing/Hero.tsx` — pill, H1, subheadline, CTAs, microcopy, trust bar
- `src/components/landing/ComoFunciona.tsx` — eyebrow, H2, subtítulo, títulos/descrições dos 3 passos
- `src/components/landing/Precos.tsx` — H2, subtítulo, bloco comparativo novo, value stack, ancoragem, CTA, garantia reforçada
- `src/components/landing/FAQ.tsx` — reescrever 2 perguntas e adicionar 1 nova
- `src/routes/index.tsx` — meta title e description

**Sem mudanças visuais/estruturais** — apenas copy. Layout, cores, componentes e seções permanecem intactos.
