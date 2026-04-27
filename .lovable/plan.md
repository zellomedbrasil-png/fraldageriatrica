## 🐛 Diagnóstico do bug do FAQ

Olhando o `FAQ.tsx` atual (linha 100–107) descobri o problema da "cor estranha ao clicar":

```tsx
className="... [&[data-state=open]>span>svg]:rotate-45 
           [&[data-state=open]>span]:bg-primary 
           [&[data-state=open]>span>svg]:text-white"
```

A regra `[&[data-state=open]>span]:bg-primary` foi escrita pensando em pintar **só o circulinho do `+`**, mas o seletor `>span` é ambíguo: o trigger tem **dois** spans filhos diretos (o `<span>` com a pergunta e o `<span>` com o ícone). Quando aberto, o **primeiro span (o que contém a pergunta)** também ganha `bg-primary`, criando aquela barra azul sólida cobrindo o texto da pergunta — exatamente o que aparece na sua screenshot.

Além disso, o ícone `X` (na verdade um `Plus` rotacionado 45°) num círculo azul fica visualmente agressivo e descolado do design médico calmo do resto da página.

---

## 1. Refazer o FAQ (`src/components/landing/FAQ.tsx`)

### 1a. Corrigir o bug visual
- Remover o `AccordionPrimitive` cru e voltar ao componente `Accordion`/`AccordionTrigger` padrão, mas estilizado.
- Trocar os seletores ambíguos `>span` por classes específicas (`.faq-icon-wrap`) aplicadas só ao container do ícone — nunca ao texto da pergunta.
- Trocar o estado aberto para um visual mais sutil: ícone passa de `Plus` cinza-claro → `Minus` em **teal/accent** (não em azul-primary forte). Sem fundo sólido no botão. Sem círculo branco sobre fundo azul.
- Estado aberto da pergunta inteira: leve `bg-primary/[0.03]` e cor do texto em `text-primary-dark` — bem suave, sem barra colorida.
- Ícone à direita: círculo de 28px com border `border-border`, fundo `bg-white`, ícone `Plus` em `text-muted-foreground` no estado fechado, transição suave para `Minus` em `text-accent` no estado aberto. Rotação 90° para suavizar a troca.
- Animação do conteúdo: usar as keyframes `accordion-down`/`accordion-up` que já existem no design system.

### 1b. Número par de itens (você pediu "números pares")
Atualmente são **11 perguntas** (ímpar → coluna esquerda 6, direita 5, layout desbalanceado). Vou:
- **Remover 1 pergunta redundante:** "Vocês são uma clínica médica?" — sobrepõe com "Vocês vendem fraldas?" e com a explicação institucional já presente em `EquipeClinica`.
- **Total: 10 itens** (5 + 5, colunas perfeitamente balanceadas).
- Manter as 10 mais convertedoras / mais buscadas (direito, quantidade, prazo, recusa, validade, renovação, presencial, leigo digital, "vendem fraldas?", documentos).

### 1c. Refinar textos das perguntas para ficarem mais escaneáveis
Encurtar 3 perguntas longas demais para ficarem visualmente uniformes nas duas colunas:
- "Quem tem direito a fraldas geriátricas gratuitas pelo SUS?" → **"Quem tem direito ao benefício?"**
- "Quanto tempo demora para receber o laudo?" → **"Em quanto tempo recebo o laudo?"**
- "E se eu nunca tiver feito uma consulta online?" → **"Nunca fiz consulta online. E aí?"**

(Respostas mantidas iguais — apenas as perguntas/labels mudam.)

---

## 2. Desduplicar e variar os CTAs do site

### Diagnóstico atual (todos repetem quase a mesma coisa)
| Local | Texto atual | Subcopy |
|---|---|---|
| Header (desktop+mobile) | "Solicitar avaliação" | — |
| Hero | "Solicitar avaliação — R$ 59" | "Pagamento único · Resposta em até 24h · Sem assinatura · Atendimento humano" |
| Precos | "Solicitar avaliação agora" | "Pagamento seguro via Pix, cartão ou boleto" |
| FAQ | "Solicitar avaliação — R$ 59" | "Ainda tem dúvidas? Fale com a equipe pelo WhatsApp." |
| CTAFinal | "Solicitar avaliação — R$ 59" | "Pagamento único · Sem assinatura · Médicos com CRM ativo" |
| MobileCTA | "Solicitar" | — |

→ A palavra "avaliação" aparece literalmente **5x**. Os mesmos 3 selos ("Pagamento único / Sem assinatura / Resposta em até 24h") se repetem em 4 seções. Fica robótico.

### Nova estratégia: cada CTA com **intenção diferente** baseada no estágio do funil

| Local | Texto novo | Intenção/contexto |
|---|---|---|
| **Header** | "Falar no WhatsApp" | Persistente, neutro, baixo compromisso. |
| **Hero** | "Solicitar avaliação — R$ 59" | Único lugar onde o preço aparece no CTA (primeiro contato). Subcopy enxuta: "Pagamento único · Sem assinatura". |
| **ComoFunciona** *(novo CTA discreto no fim)* | "Começar pelo WhatsApp →" | Após explicar o passo a passo. Texto-link, sem botão grande. |
| **Precos** | "Quero solicitar agora" | Após ver o preço — ação direta, urgência leve. Subcopy: "Você é redirecionado para o WhatsApp." |
| **FAQ** | "Conversar com a equipe" | Posição contextual: usuário ainda tem dúvidas. CTA mais consultivo. Subcopy: "Tire dúvidas antes de solicitar — atendimento humano." |
| **CTAFinal** | "Solicitar avaliação — R$ 59" | Reforço final do CTA principal. Subcopy: "Tudo pelo WhatsApp · Resposta em até 24h." |
| **MobileCTA (sticky)** | "Solicitar" | Mantém compacto. Mas mudo a label de cima de "Avaliação médica" → "Laudo geriátrico" pra não duplicar o "Avaliação" do botão Hero quando ambos aparecem. |

### Resultado
- Palavra "avaliação" cai de 5 → 3 ocorrências, em momentos justificados.
- Cada subcopy traz um detalhe diferente em vez de listar os mesmos 3 selos.
- O CTA do FAQ deixa de ser duplicata visual do CTAFinal — vira um convite de conversa, mais coerente com o contexto "ainda tem dúvidas".

---

## 3. Pequenos ajustes de copy correlatos (sem mudar layout)

- **Header (mobile menu):** trocar item "Solicitar avaliação" no menu hamburguer por "Falar no WhatsApp" pra não bater 1:1 com o botão do header desktop fora do menu.
- **CTAFinal:** trocar a tagline secundária da decoração "Pronto para começar?" por **"Vamos cuidar disso juntos"** — mais quente, menos "landing page de SaaS".
- **MobileCTA:** alterar `Avaliação médica` → `Laudo geriátrico` (label superior) para reduzir repetição com o botão Hero quando ambos coexistem na tela.

---

## 📁 Arquivos afetados

- `src/components/landing/FAQ.tsx` — refazer lista (10 itens) + corrigir bug visual + novo CTA "Conversar com a equipe"
- `src/components/landing/Header.tsx` — CTA "Falar no WhatsApp" (desktop + mobile menu)
- `src/components/landing/Precos.tsx` — CTA "Quero solicitar agora" + subcopy enxuta
- `src/components/landing/CTAFinal.tsx` — eyebrow "Vamos cuidar disso juntos"
- `src/components/landing/MobileCTA.tsx` — label "Laudo geriátrico"
- `src/components/landing/Hero.tsx` — subcopy enxuta (remove redundância com outros blocos)
- `src/components/landing/ComoFunciona.tsx` — adicionar link discreto "Começar pelo WhatsApp →" no final da seção

## ✅ Fora de escopo (não toco)
- Paleta, tipografia, layout geral.
- Conteúdo das respostas do FAQ (apenas as labels das perguntas são suavizadas).
- Footer, EquipeClinica, FarmaciaPopular, ParaQuem.
- A pergunta sobre renovação (R$ 59) — fica, é legítima e útil.