
# Kit de melhorias — fraldageriatrica.com

## Parte 1 — Remover Política de Reembolso (compliance + tom mais sóbrio)

A política de reembolso será **completamente removida** dos textos públicos, pois pode ser interpretada como vínculo entre pagamento e resultado clínico (ponto sensível no CFM e no Google YMYL). Em troca, reforçamos a transparência sobre a natureza do serviço.

**Arquivos / trechos a remover:**
- `Hero.tsx`: remover a frase em destaque *"Se o médico não identificar indicação clínica, devolvemos 100% do valor pago."* e o item *"✓ Reembolso integral se não houver indicação clínica"* da microcopy abaixo dos botões.
- `Precos.tsx`: remover o card *"Política de Reembolso"* com `ShieldCheck` e remover o item *"Reembolso integral se não houver indicação clínica para emissão"* da lista `included[]`.
- `FAQ.tsx`: na pergunta *"O laudo pode ser recusado?"*, remover a parte *"e reembolsamos 100% do valor pago em até 5 dias úteis"*. Substituir por: *"Sim. A emissão depende exclusivamente da avaliação clínica individual e do critério do médico responsável. Quando não há indicação para uso contínuo de fralda geriátrica, o laudo não é emitido."*
- `index.tsx` (SEO): revisar `DESCRIPTION` para não citar reembolso.

---

## Parte 2 — Kit de melhorias (todas as áreas)

### 🎨 A) Visual & Design System

1. **Hierarquia tipográfica do Hero**
   - Hoje o H1 quebra com `<br>` fixo e a parte em gradient ocupa metade da linha — em telas estreitas-médias fica deselegante.
   - Reescrever em 2 linhas semânticas: linha 1 forte, linha 2 com gradient curto e impactante (ex.: *"em até 24 horas"*).
   - Reduzir tamanho máx. para `text-6xl lg:text-7xl` e ajustar `leading-[1.05]`.

2. **Sticky CTA mobile** (novo componente `MobileCTA.tsx`)
   - Barra fixa inferior em mobile com botão WhatsApp + preço, aparecendo após scroll de 400px (animação fade-up).
   - Dramatiza conversão sem poluir desktop.

3. **Header refinado**
   - Adicionar sombra/borda apenas após scroll (`scroll > 8px`) com efeito mais sutil que o atual `glass-header` permanente.
   - Ícone WhatsApp dentro do botão (Lucide `MessageCircle`) para reforçar canal.
   - Mobile menu com transição (slide+fade) em vez de aparecer instantaneamente.

4. **Trust badges do Hero**
   - Substituir os 3 itens cinza por um pequeno *"trust strip"* horizontal com divisores (•) e ícones menores, mais Apple-like.
   - Adicionar um 4º item: *"Atendimento humano"*.

5. **Refinar cards de "Como Funciona"**
   - Adicionar linha conectora pontilhada entre os 3 cards no desktop (sutil, `border-dashed`).
   - Card 3 (escuro) — aumentar contraste do glow azul e melhorar legibilidade do número.

6. **Seção Preços — micro-melhorias**
   - Remover bloco de reembolso (item da Parte 1).
   - Adicionar selo *"Pagamento via Pix, cartão ou boleto"* abaixo do preço.
   - Lista `included[]` com checkmarks dentro de círculo `bg-primary/10` (mais premium que check solto).

### ✍️ B) Conteúdo & Copy

7. **Nova seção "Para quem é"** (novo componente `ParaQuem.tsx`, entre `ComoFunciona` e `Precos`)
   - 2 colunas: *"O serviço é indicado para…"* (✓ idoso 60+, ✓ pessoa com deficiência com indicação clínica, ✓ família que precisa renovar laudo) e *"Não é indicado para…"* (✗ venda de fraldas, ✗ diagnósticos novos, ✗ situações que exijam consulta presencial).
   - Aumenta clareza, melhora SEO (intent matching) e reduz solicitações fora do escopo.

8. **Nova seção "O que é o Programa Farmácia Popular"** (curta, accordion ou bloco simples antes do FAQ)
   - Explica o programa, link para a fonte oficial gov.br, deixa explícito que somos **prestadores do laudo médico**, não distribuidores. Reforça compliance e E-E-A-T para Google.

9. **FAQ — 2 perguntas adicionais**
   - *"Vocês são uma clínica médica?"* → resposta clarificando natureza da plataforma de telemedicina.
   - *"Quais documentos preciso enviar?"* → RG/CNH, CPF, comprovante de residência (se aplicável), e dados clínicos do paciente.

10. **Header — renomear menu**
    - "Investimento" → **"Valor"** (mais direto, menos "vendedor").

### 🚀 C) Performance & Build

11. **Preconnect / dns-prefetch**
    - Em `__root.tsx` adicionar `<link rel="preconnect" href="https://wa.me">` e `dns-prefetch` para domínios externos usados.

12. **Reduzir CLS no Hero**
    - Reservar `min-h` para o badge animado e o H1 para evitar saltos de layout durante o `ScrollReveal`.

13. **Lazy-load do `ScrollReveal` em seções abaixo da dobra** já está, mas garantir `prefers-reduced-motion` desliga animações.

### 🔍 D) SEO

14. **Routes separadas (preparação)**
    - Mesmo mantendo a homepage longa, criar 2 routes adicionais a partir das novas seções para indexação:
      - `/como-funciona` (rota standalone com conteúdo expandido)
      - `/perguntas-frequentes` (FAQ standalone)
    - Cada uma com `head()` próprio (title, description, og). Hoje tudo é hash anchor — penaliza SEO.

15. **Sitemap.xml e robots.txt**
    - Criar `public/sitemap.xml` listando `/`, `/como-funciona`, `/perguntas-frequentes`.
    - Atualizar `public/robots.txt` com `Sitemap: https://fraldageriatrica.com/sitemap.xml`.

16. **JSON-LD ampliado**
    - Adicionar schema `BreadcrumbList` na homepage.
    - Adicionar `MedicalProcedure` ou `MedicalCondition` (urinary incontinence, CID-10 R32) com cuidado para não se confundir com diagnóstico.
    - Adicionar `Organization` com `sameAs` (WhatsApp, e-mail).

17. **og:image dedicada**
    - Hoje não há `og:image`. Criar uma imagem 1200×630 estática (em `public/og-image.png`) com logo + título do serviço e adicionar nas meta tags de `index.tsx`.

### ♿ E) Acessibilidade

18. **Contraste**
    - `text-muted-foreground` em alguns lugares (ex.: footer disclaimer 10px) está abaixo de WCAG AA. Subir para 12px com cor mais forte.

19. **Skip-link**
    - Adicionar `<a href="#main">Pular para conteúdo</a>` no topo (visualmente oculto, visível em focus).

20. **Aria & semantics**
    - Adicionar `aria-label` descritivo em todos os links de WhatsApp (ex.: *"Abrir WhatsApp para solicitar avaliação médica"*).
    - `<main id="main">` na composição em `index.tsx` (já tem `<main>`, falta `id`).

### 📊 F) Analytics & Conversão

21. **Eventos básicos** (sem instalar SDK pesado, apenas via `window.dataLayer.push` se houver GTM, ou logs leves)
    - `cta_click` (com `location: hero|header|precos|faq|sticky`)
    - `whatsapp_open`
    - Estrutura preparada para plug futuro de GA4/GTM.

### 🔧 G) Tech debt

22. **Remover `// reload` no fim do `index.tsx`** (vestígio de hot reload).
23. **Padronizar `WA_LINK`**: hoje cada componente declara a constante. Mover para `src/lib/constants.ts` exportando `WA_LINK`, `WA_MESSAGE`, `PRICE_BRL`.
24. **`LEGAL_COMPLIANCE.md`** — atualizar removendo menções a reembolso e adicionando registro das novas alterações.

---

## Ordem sugerida de implementação

**Fase 1 (essencial, alto impacto):** Itens 1 (remoção reembolso), 2 (sticky CTA mobile), 6 (preços), 7 (Para quem é), 17 (og:image), 22-23 (tech debt).

**Fase 2 (refinamentos UX):** Itens 3, 4, 5, 9, 10, 18, 19, 20.

**Fase 3 (SEO/perf estrutural):** Itens 8, 11, 12, 14, 15, 16, 21, 24.

---

## Pergunta antes de aplicar

Posso seguir com **todas as fases de uma vez**, ou prefere que eu faça apenas a **Fase 1** primeiro (mais rápido de revisar) e depois as demais em sequência?
