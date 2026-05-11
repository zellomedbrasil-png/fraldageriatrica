import { useEffect } from "react";
import {
  Shield,
  Plus,
  ShieldCheck,
  BadgeCheck,
  Lock,
  ScrollText,
  Check,
  ArrowRight,
  Sparkles,
  FileText,
  MapPin,
  ClipboardList,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/landing/ScrollReveal";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const FUNIL = "/funil";
const CANONICAL = "https://fraldageriatrica.com/fralda-geriatrica-gratis-sus";
const PAGE_TITLE =
  "Fralda Geriátrica Grátis pelo SUS em 2025 | Guia Completo Farmácia Popular";
const PAGE_DESC =
  "Portaria GM/MS 3.073/2024 garante fralda grátis na Farmácia Popular para idosos 60+ e PCD. Veja documentos necessários, farmácias credenciadas e passo a passo. Laudo online em 24h.";
const OG_IMAGE = "https://fraldageriatrica.com/og-fralda.jpg";

const BG = "bg-[#070B12]";
const SURFACE = "bg-white/[0.03] border border-white/[0.07]";
const SURFACE_HOVER = "hover:border-sky-400/30 hover:bg-white/[0.05]";
const SOFT_GRADIENT =
  "bg-[radial-gradient(ellipse_at_top,hsl(210_92%_55%/0.18)_0%,transparent_55%)]";

const useSeo = () => {
  useEffect(() => {
    document.title = PAGE_TITLE;
    document.documentElement.lang = "pt-BR";

    const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    upsertMeta("name", "description", PAGE_DESC);
    upsertMeta("name", "keywords", "fralda geriátrica grátis SUS, Farmácia Popular fralda, como retirar fralda SUS, documentos fralda geriátrica, Portaria 3073 fralda");
    upsertMeta("name", "theme-color", "#070B12");
    upsertMeta("property", "og:title", PAGE_TITLE);
    upsertMeta("property", "og:description", PAGE_DESC);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", CANONICAL);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("property", "og:locale", "pt_BR");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", PAGE_TITLE);
    upsertMeta("name", "twitter:description", PAGE_DESC);
    upsertMeta("name", "twitter:image", OG_IMAGE);

    let canon = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = CANONICAL;

    const ldId = "ld-sus";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: PAGE_TITLE,
        description: PAGE_DESC,
        url: CANONICAL,
        about: {
          "@type": "MedicalCondition",
          name: "Incontinência urinária em idosos",
        },
        author: {
          "@type": "Person",
          name: "Dr. Roberto Arcanjo",
          honorificPrefix: "Dr.",
          hasCredential: "CRM 26.155-CE",
          medicalSpecialty: "Geriatrics",
        },
        lastReviewed: "2025-05-10",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://fraldageriatrica.com/" },
            { "@type": "ListItem", position: 2, name: "Fralda Geriátrica Grátis pelo SUS", item: CANONICAL },
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((q) => ({
          "@type": "Question",
          name: q.q,
          acceptedAnswer: { "@type": "Answer", text: q.a },
        })),
      },
    ]);
    document.head.appendChild(ld);
  }, []);
};

const faqItems = [
  {
    q: "Quantas fraldas a Farmácia Popular entrega por mês?",
    a: "O quantitativo depende da avaliação médica documentada no laudo e dos limites estabelecidos pela Portaria GM/MS 3.073/2024. Na prática, a entrega mensal costuma variar entre 60 e 120 unidades dependendo do grau de incontinência.",
  },
  {
    q: "Qual é a validade do laudo para retirada de fralda?",
    a: "O laudo tem validade definida em portaria e precisa ser renovado periodicamente. A equipe médica avisa com antecedência quando a renovação estiver próxima.",
  },
  {
    q: "A Farmácia Popular pode recusar o laudo?",
    a: "Não pode recusar um laudo dentro das normas da Portaria. Se houver recusa indevida, o cidadão pode registrar reclamação na Ouvidoria do Ministério da Saúde (136) ou no PROCON local.",
  },
  {
    q: "O idoso precisa estar presente na retirada?",
    a: "Não obrigatoriamente. Familiar com autorização simples ou cuidador cadastrado pode retirar as fraldas apresentando o laudo e o documento de identidade do paciente.",
  },
  {
    q: "É preciso ter cadastro em uma farmácia específica?",
    a: "O programa Farmácia Popular tem rede credenciada em todo o Brasil. Qualquer unidade credenciada aceita o laudo — não há vinculação a uma farmácia específica.",
  },
];

const Logo = ({ size = 32 }: { size?: number }) => (
  <div
    className="relative bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/25"
    style={{ width: size, height: size }}
  >
    <Shield className="text-[#070B12]" style={{ width: size * 0.62, height: size * 0.62 }} strokeWidth={2.25} />
    <Plus className="absolute text-[#070B12]" style={{ width: size * 0.32, height: size * 0.32 }} strokeWidth={3} />
  </div>
);

const Header = () => (
  <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#070B12]/70 border-b border-white/[0.06]">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="/" className="flex items-center gap-2.5 group">
        <Logo size={32} />
        <span className="font-semibold text-lg tracking-tight text-white">
          fralda<span className="text-white/40 font-normal">geriátrica</span>
        </span>
      </a>
      <div className="hidden md:flex items-center gap-5">
        <a href="/#como-funciona" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Como funciona</a>
        <a href="/blog" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Blog</a>
        <Button asChild className="rounded-full bg-sky-500 hover:bg-sky-400 text-[#070B12] font-semibold gap-2">
          <a href={FUNIL}><Sparkles className="w-4 h-4" />Pedir meu laudo<ArrowRight className="w-4 h-4" /></a>
        </Button>
      </div>
      <Button asChild size="sm" className="md:hidden rounded-full bg-sky-500 hover:bg-sky-400 text-[#070B12] font-semibold gap-2">
        <a href={FUNIL}><Sparkles className="w-4 h-4" />Pedir laudo</a>
      </Button>
    </div>
  </nav>
);

const Breadcrumb = () => (
  <nav className="pt-24 pb-2 max-w-6xl mx-auto px-6" aria-label="Breadcrumb">
    <ol className="flex items-center gap-2 text-xs text-white/40">
      <li><a href="/" className="hover:text-white/70 transition-colors">Home</a></li>
      <li className="text-white/20">/</li>
      <li className="text-white/60">Fralda Geriátrica Grátis pelo SUS</li>
    </ol>
  </nav>
);

const Hero = () => (
  <section className="relative pt-8 pb-20 overflow-hidden">
    <div className={`absolute inset-0 ${SOFT_GRADIENT} pointer-events-none`} />
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-500/[0.05] rounded-full blur-[100px] pointer-events-none" />
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
          <ScrollText className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-xs font-medium text-white/70">Portaria GM/MS nº 3.073/2024</span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-5 leading-[1.08]">
          Fralda geriátrica grátis pelo SUS:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">
            quem tem direito e como retirar
          </span>
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="text-lg text-white/65 mb-8 leading-relaxed font-light max-w-2xl">
          R$ 4.200 por ano — ou zero. Idosos com 60 anos ou mais e pessoas com deficiência têm direito a fraldas
          gratuitas pela Farmácia Popular do SUS. O único documento obrigatório é o laudo médico.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="rounded-full px-8 py-6 bg-sky-500 hover:bg-sky-400 text-[#070B12] font-bold shadow-xl shadow-sky-500/25 gap-2">
            <a href={FUNIL}><Sparkles className="w-5 h-5" />Emitir laudo agora<ArrowRight className="w-5 h-5" /></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 bg-white/[0.03] border-white/15 text-white hover:bg-white/[0.06] gap-2">
            <a href="#passo-a-passo">Ver passo a passo<ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
        <p className="mt-3 text-xs text-white/40">Laudo em até 24h úteis · R$ 49 · 100% online</p>
      </ScrollReveal>
    </div>
  </section>
);

const BaseLegal = () => (
  <section className="py-10 border-y border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className={`rounded-2xl ${SURFACE} p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-5`}>
          <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
            <ScrollText className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-2">Base legal</p>
            <p className="text-sm text-white/80 leading-relaxed">
              O direito à fralda geriátrica gratuita é garantido pela{" "}
              <strong className="text-white">Portaria GM/MS nº 3.073/2024</strong> e pela{" "}
              <strong className="text-white">Portaria nº 937/2017</strong> do Ministério da Saúde, dentro do programa Farmácia Popular.
              Qualquer cidadão pode consultar o texto integral no{" "}
              <a href="https://www.gov.br/saude/pt-br/assuntos/farmacia-popular" target="_blank" rel="noopener" className="text-sky-400 hover:underline">
                portal do Ministério da Saúde
              </a>.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const QuemTemDireito = () => (
  <section className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Elegibilidade</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Quem tem direito</h2>
        <p className="text-white/60 font-light mb-10 max-w-xl">
          Dois perfis cobertos pela lei. A regra é mais abrangente do que a maioria das farmácias informa.
        </p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          {
            title: "Idosos a partir de 60 anos",
            items: [
              "Com incontinência urinária ou fecal documentada",
              "Em situação de acamamento ou mobilidade reduzida",
              "Com demência ou doença neurodegenerativa",
              "Avaliados por médico com CRM ativo",
            ],
          },
          {
            title: "Pessoas com deficiência (PCD)",
            items: [
              "Qualquer faixa etária — crianças, adultos, idosos",
              "Deficiência física, neurológica ou intelectual",
              "Necessidade de fralda documentada em laudo",
              "Familiar ou responsável legal pode representar o paciente",
            ],
          },
        ].map((b, i) => (
          <ScrollReveal key={b.title} delay={i * 0.1}>
            <div className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-7 h-full transition-all`}>
              <h3 className="text-lg font-semibold text-white mb-4">{b.title}</h3>
              <ul className="space-y-3 text-sm text-white/60">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const Documentos = () => (
  <section className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Documentação</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Documentos necessários</h2>
        <p className="text-white/60 font-light mb-10 max-w-xl">
          A lista oficial é mais curta do que o atendente da farmácia costuma exigir.
        </p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          {
            Icon: FileText,
            title: "Laudo médico",
            desc: "Emitido por médico com CRM ativo, com diagnóstico de incontinência e indicação de uso contínuo. Obrigatório — sem isso a farmácia não pode entregar.",
            required: true,
          },
          {
            Icon: ClipboardList,
            title: "Documentos do paciente",
            desc: "RG ou CPF do paciente. Em caso de retirada por terceiro, documento de identidade do responsável também é necessário.",
            required: true,
          },
          {
            Icon: MapPin,
            title: "Comprovante de residência",
            desc: "Exigido por algumas unidades para confirmar o vínculo com o programa. Conta de luz, água ou telefone recente.",
            required: false,
          },
        ].map((d, i) => (
          <ScrollReveal key={d.title} delay={i * 0.1}>
            <div className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-6 h-full transition-all`}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <d.Icon className="w-5 h-5 text-sky-400" strokeWidth={1.75} />
                </div>
                {d.required ? (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded-full">Obrigatório</span>
                ) : (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40 bg-white/[0.04] px-2 py-0.5 rounded-full">Geralmente</span>
                )}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{d.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{d.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const PassoAPasso = () => (
  <section id="passo-a-passo" className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Processo</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Passo a passo para retirar</h2>
        <p className="text-white/60 font-light mb-10 max-w-xl">
          Cinco etapas. A que mais trava a família é a segunda — e é justamente o que a gente resolve.
        </p>
      </ScrollReveal>
      <div className="space-y-3">
        {[
          {
            num: "01",
            title: "Confirmar elegibilidade",
            desc: "Idoso com 60 anos ou mais ou PCD com incontinência. Familiar, cuidador ou procurador legal pode representar o paciente.",
          },
          {
            num: "02",
            title: "Obter o laudo médico",
            desc: (
              <>
                O único documento que a maioria das famílias não tem. Um médico com CRM ativo avalia a indicação clínica e emite o laudo com assinatura ICP-Brasil.{" "}
                <a href="/laudo-medico-online" className="text-sky-400 hover:underline">Saiba como obter o laudo online em 24h</a>.
              </>
            ),
            highlight: true,
          },
          {
            num: "03",
            title: "Localizar farmácia credenciada",
            desc: (
              <>
                Qualquer unidade da rede Farmácia Popular aceita o laudo. Consulte a farmácia mais próxima no{" "}
                <a href="https://www.gov.br/saude/pt-br/assuntos/farmacia-popular/localizacao-de-farmacias" target="_blank" rel="noopener" className="text-sky-400 hover:underline">
                  localizador oficial
                </a>.
              </>
            ),
          },
          {
            num: "04",
            title: "Apresentar documentação",
            desc: "Laudo médico + documento de identidade do paciente. Apresentar ao atendente e solicitar o cadastro no programa.",
          },
          {
            num: "05",
            title: "Retirar mensalmente",
            desc: "Após o primeiro cadastro, a retirada é mensal. O laudo tem validade e precisa ser renovado no prazo indicado pelo médico.",
          },
        ].map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 0.07}>
            <div className={`rounded-2xl p-5 flex gap-5 transition-all ${s.highlight ? "bg-sky-500/[0.08] border border-sky-400/20" : `${SURFACE} ${SURFACE_HOVER}`}`}>
              <span className="text-xs font-mono font-semibold text-white/30 tracking-widest w-8 shrink-0 mt-0.5">{s.num}</span>
              <div>
                <p className="font-semibold text-white mb-1">{s.title}</p>
                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const QuandoNaoPrecisa = () => (
  <section className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className={`rounded-2xl bg-amber-500/[0.06] border border-amber-400/20 p-7`}>
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" strokeWidth={1.75} />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-2">Quando você não precisa do nosso serviço</p>
              <p className="text-sm text-white/75 leading-relaxed mb-4">
                Se o idoso já tem acompanhamento regular em UBS (Unidade Básica de Saúde) ou com médico de família pelo SUS,
                o laudo pode ser solicitado gratuitamente durante a consulta. Muitas UBSs emitem o laudo sem custo — basta pedir.
              </p>
              <p className="text-sm text-white/75 leading-relaxed">
                O serviço de{" "}
                <a href="/laudo-medico-online" className="text-sky-400 hover:underline">laudo online por R$ 49</a>{" "}
                é útil quando: a família não tem médico de referência, o idoso não consegue sair de casa para consulta,
                ou a UBS da região tem fila de espera que compromete o acesso imediato ao benefício.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const InternalLinks = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-6">Conteúdo relacionado</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              href: "/laudo-medico-online",
              title: "Laudo médico online",
              desc: "Como obter o laudo por teleconsulta em até 24h, sem sair de casa.",
            },
            {
              href: "/incontinencia-urinaria-idosos",
              title: "Incontinência urinária em idosos",
              desc: "Causas, tipos e tratamento. Quando a fralda é a resposta clínica correta.",
            },
            {
              href: "/blog",
              title: "Blog — mais artigos",
              desc: "Guias sobre direitos do idoso, cuidados domiciliares e Farmácia Popular.",
            },
          ].map((l) => (
            <a key={l.href} href={l.href} className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-5 block transition-all group`}>
              <p className="font-semibold text-white mb-1 group-hover:text-sky-300 transition-colors">{l.title}</p>
              <p className="text-xs text-white/50 leading-relaxed">{l.desc}</p>
            </a>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const FAQ = () => (
  <section id="faq" className="py-20 border-b border-white/[0.06]">
    <div className="max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Dúvidas</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-10">Perguntas frequentes</h2>
      </ScrollReveal>
      <div className="space-y-3">
        {faqItems.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <Collapsible className={`rounded-2xl ${SURFACE} overflow-hidden transition-all`}>
              <CollapsibleTrigger className="w-full flex items-center justify-between p-5 text-left group hover:bg-white/[0.02] transition-colors">
                <span className="text-sm font-medium text-white/85 pr-4">{item.q}</span>
                <ChevronDown className="w-4 h-4 text-white/40 shrink-0 group-data-[state=open]:rotate-180 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p className="px-5 pb-5 text-sm text-white/60 leading-relaxed">{item.a}</p>
              </CollapsibleContent>
            </Collapsible>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
          Pronto para retirar a fralda grátis?
        </h2>
        <p className="text-white/60 font-light mb-8 max-w-xl mx-auto">
          O único obstáculo é o laudo médico. A gente resolve isso online em até 24h úteis por R$ 49.
          Pagamento único. Sem mensalidade.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-10 py-6 bg-sky-500 hover:bg-sky-400 text-[#070B12] font-bold shadow-xl shadow-sky-500/25 gap-2">
            <a href={FUNIL}><Sparkles className="w-5 h-5" />Quero meu laudo agora<ArrowRight className="w-5 h-5" /></a>
          </Button>
        </div>
        <div className="mt-6 flex justify-center gap-6 text-xs text-white/40">
          <span className="flex items-center gap-1.5"><BadgeCheck className="w-3.5 h-3.5 text-sky-400" />CRM Ativo</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-sky-400" />Laudo ICP-Brasil</span>
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-sky-400" />LGPD</span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/[0.06] py-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <a href="/" className="flex items-center gap-2.5">
        <Logo size={24} />
        <span className="font-semibold text-sm text-white">fralda<span className="text-white/40 font-normal">geriátrica</span></span>
      </a>
      <p className="text-xs text-white/30 text-center">
        © 2025 fraldageriatrica.com · Revisado por Dr. Roberto Arcanjo CRM 26.155-CE · Geriatria
      </p>
    </div>
  </footer>
);

export default function PillarSus() {
  useSeo();
  return (
    <main className={`${BG} min-h-screen text-white`}>
      <Header />
      <Breadcrumb />
      <Hero />
      <BaseLegal />
      <QuemTemDireito />
      <Documentos />
      <PassoAPasso />
      <QuandoNaoPrecisa />
      <InternalLinks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
