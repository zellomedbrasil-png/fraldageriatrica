
# Plano: Minimalismo Acessível Clínico

Aplicar diretrizes UI/UX para público 60+ e cuidadores: máxima legibilidade, autoridade clínica, zero ruído visual, fluxo único óbvio.

---

## 1. Design Tokens (`src/styles.css`)

**Tipografia (acessibilidade)**
- `body`: aumentar `font-size` para `18px` e `line-height` para `1.65`.
- `h1`: reduzir tracking agressivo (`-0.025em` em vez de `-0.035em`) — letras muito espremidas prejudicam idosos.
- Definir `font-feature-settings` mais conservador (manter `cv11`, remover `ss03` que altera glyphs).

**Cores (Clinical Trust Blue)**
- `--brand-primary`: trocar para `oklch(0.55 0.12 240)` (azul clínico mais sóbrio, contraste AA contra branco).
- `--brand-accent`: igualar ao primary (remover gradientes que dificultam leitura).
- `--surface-base`: branco puro `oklch(1 0 0)` em vez de off-blue para máximo contraste.
- Manter `--text-primary` em slate escuro (já está em ~AAA).

**Remoções**
- Remover `--gradient-hero`, `--gradient-brand`, `--gradient-accent` aplicados em texto (substituir por cor sólida).
- Remover utilitários `.text-gradient-brand` / `.text-gradient-accent` dos componentes (manter classe definida, mas não usar).
- Remover `--shadow-accent-glow` agressivo do botão hero (substituir por `--shadow-md`).

**Adições**
- Classe `.trust-seal`: card branco, border azul claro, padding generoso, ícone à esquerda — base reutilizável para selos.

---

## 2. `Logo.tsx`
- Trocar ícone `Heart` por `Stethoscope` (autoridade clínica, não emocional).
- Aumentar container do logo de `w-8 h-8` para `w-9 h-9` (alvo de toque maior).

---

## 3. `Header.tsx`
- Remover `glass-header` (blur dificulta leitura para idosos) → fundo `bg-background` sólido com `border-b`.
- Reduzir links do menu desktop: manter apenas **"Como funciona"** e **"Dúvidas"** (remover "Investimento" — preço já fica no CTA).
- CTA: adicionar valor inline → `"Solicitar avaliação · R$ 59"`.
- Aumentar altura do header de `h-16` para `h-18` no mobile (alvo de toque ≥48px).

---

## 4. `Hero.tsx`
- Remover badge superior pulsante (`animate-ping`) — substituir por badge estático com ícone `ShieldCheck` e texto "Telemedicina regulamentada · CFM 2.314/2022".
- H1: remover `bg-clip-text` gradiente da segunda linha → cor sólida `text-primary`.
- Aumentar `text-muted-foreground` do parágrafo para `text-base` (18px) com `text-foreground/80` (mais contraste).
- CTA principal: já tem o preço → manter, mas remover `shadow-xl shadow-primary/20` (substituir por `shadow-md`) e `hover:-translate-y-0.5`.
- Substituir trust badges em cinza (`opacity-60 grayscale`) por **3 selos institucionais sólidos** lado a lado em cards `.trust-seal`:
  1. ShieldCheck — "Laudo com validade jurídica (ICP-Brasil)"
  2. Lock — "Dados protegidos (LGPD)"
  3. BadgeCheck — "Médico responsável com CRM ativo"
- Remover `bg-hero-glow` orb radial atrás do hero.

---

## 5. `ComoFunciona.tsx`
- Aumentar padding da seção: `py-20` → `py-24 lg:py-32`.
- Cards: padronizar todos como **claros** (remover variante dark do passo 3 — quebra consistência e cria ruído).
- Substituir o numeral pequeno em quadrado por **número grande tipográfico** (`text-5xl font-light text-primary/60`) à esquerda do título — referência tipo timeline clínico.
- Remover ícone gigante decorativo girado `-rotate-[15deg]` no canto (visual marketing, não clínico).
- Manter ícone discreto pequeno acima do número.
- Indicador "Em até 24 horas" do passo 3: mover para badge sóbrio sem `animate-pulse-dot`.

---

## 6. `Precos.tsx`
- Remover orb decorativo `bg-primary/10 blur-3xl`.
- Card de preço: aumentar padding `p-8` → `p-10`, border `border-2 border-primary/20` para destaque institucional.
- Número "59": manter destaque, mas usar `text-foreground` sólido (sem efeitos).
- Bloco "Política de Reembolso": promover de sub-card para **selo de garantia destacado** com border `border-primary/30` e fundo `bg-primary-soft` (já existe no token).
- CTA: remover `shadow-xl shadow-primary/20` → `shadow-md`.
- Aumentar tamanho de cada item da lista para `text-base` (legibilidade).

---

## 7. `FAQ.tsx`
- Texto das perguntas/respostas: subir de `text-sm` para `text-base` (18px).
- Aumentar padding interno dos itens de accordion (`px-5` → `px-6 py-2`).
- Remover hover de borda colorida (`hover:border-primary/30`) — manter borda neutra estável.
- CTA final: remover sombra agressiva.

---

## 8. `Footer.tsx`
- Reorganizar bloco de compliance em **grid 3 colunas** com 3 selos institucionais idênticos:
  1. **Stethoscope** — Responsável Técnico (CRM/UF)
  2. **Lock** — LGPD & Segurança de Dados
  3. **FileCheck** — Conformidade Regulatória (Portaria 3.073/2024 + CFM 2.314/2022)
- Cada selo em card branco com border, padding generoso, título uppercase pequeno e descrição em slate.
- Aumentar disclaimer legal final para `text-xs` (12px) em vez de `text-[10px]` (acessibilidade WCAG mínima).

---

## 9. `src/routes/index.tsx`
- Adicionar `<meta name="theme-color" content="#1d6fb8">` (azul clínico) para barra do navegador mobile.
- Adicionar `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` (manter `user-scalable=yes` por padrão — não restringir zoom de idosos).

---

## Arquivos editados
- `src/styles.css`
- `src/components/landing/Logo.tsx`
- `src/components/landing/Header.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/ComoFunciona.tsx`
- `src/components/landing/Precos.tsx`
- `src/components/landing/FAQ.tsx`
- `src/components/landing/Footer.tsx`
- `src/routes/index.tsx`

## Validação final
- `bunx tsc --noEmit` para garantir compilação limpa.
- Verificar contraste AA (texto principal ≥ 4.5:1) — paleta proposta atende.

Aprove para eu aplicar.
