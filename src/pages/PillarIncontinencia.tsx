import { useEffect } from "react";
import {
  Shield,
  Plus,
  ShieldCheck,
  BadgeCheck,
  Lock,
  Check,
  ArrowRight,
  Sparkles,
  AlertCircle,
  ChevronDown,
  Activity,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/landing/ScrollReveal";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const FUNIL = "/funil";
const CANONICAL = "https://fraldageriatrica.com/incontinencia-urinaria-idosos";
const PAGE_TITLE =
  "Incontinência Urinária em Idosos: Causas, Tratamento e Direitos 2025";
const PAGE_DESC =
  "Guia clínico sobre incontinência urinária em idosos: tipos, causas, tratamento e direito à fralda gratuita pelo SUS. Revisado por geriatra com CRM ativo.";
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
    upsertMeta("name", "keywords", "incontinência urinária idosos, tratamento incontinência urinária, tipos incontinência urinária, fralda incontinência urinária, incontinência urinária SUS");
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

    const ldId = "ld-incontinencia";
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
          name: "Incontinência urinária",
          associatedAnatomy: { "@type": "AnatomicalStructure", name: "Bexiga urinária" },
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
            { "@type": "ListItem", position: 2, name: "Incontinência Urinária em Idosos", item: CANONICAL },
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
    q: "Incontinência urinária em idoso tem cura?",
    a: "Depende do tipo e da causa. A incontinência de esforço pode ter melhora significativa com fisioterapia pélvica. A incontinência de urgência responde bem a medicamentos e treino vesical. A incontinência mista costuma exigir abordagem combinada. Em quadros de demência avançada ou dano neurológico irreversível, o manejo prático com fralda é a conduta clínica indicada.",
  },
  {
    q: "A partir de qual grau de incontinência o idoso tem direito à fralda pelo SUS?",
    a: "O programa Farmácia Popular não define 'grau mínimo' — exige laudo médico atestando a necessidade de uso contínuo. O médico avalia a situação individual: frequência de episódios, impacto na qualidade de vida, capacidade de controle e contexto clínico geral.",
  },
  {
    q: "Incontinência é parte normal do envelhecimento?",
    a: "Não. É comum, mas não é normal nem inevitável. Incontinência urinária afeta cerca de 30% dos idosos com mais de 60 anos, segundo dados da Sociedade Brasileira de Geriatria e Gerontologia — mas em muitos casos tem tratamento eficaz. Naturalizar o sintoma sem investigar a causa é um erro clínico frequente.",
  },
  {
    q: "Quais exames são necessários para investigar incontinência?",
    a: "Na maioria dos casos, a avaliação clínica e o histórico detalhado já são suficientes. Em casos selecionados, o urologista ou ginecologista pode solicitar urofluixometria ou urodinâmica. O médico de atenção primária ou geriatra faz a triagem inicial.",
  },
  {
    q: "O familiar pode retirar a fralda sem que o idoso esteja presente?",
    a: "Sim. O programa Farmácia Popular permite que familiar, cuidador ou responsável legal retire o produto mediante apresentação do laudo e documento de identidade do paciente.",
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
        <a href="/fralda-geriatrica-gratis-sus" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Fralda grátis SUS</a>
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
      <li className="text-white/60">Incontinência Urinária em Idosos</li>
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
          <Stethoscope className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-xs font-medium text-white/70">Revisado por geriatra · CRM 26.155-CE</span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-5 leading-[1.08]">
          Incontinência urinária em idosos:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">
            causas, tratamento e direitos
          </span>
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="text-lg text-white/65 mb-8 leading-relaxed font-light max-w-2xl">
          30% dos idosos com 60 anos ou mais têm incontinência urinária — e a maioria nunca recebeu tratamento adequado
          nem soube que tem direito a fralda gratuita pelo SUS. Esse guia cobre os dois lados da questão.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="rounded-full px-8 py-6 bg-sky-500 hover:bg-sky-400 text-[#070B12] font-bold shadow-xl shadow-sky-500/25 gap-2">
            <a href={FUNIL}><Sparkles className="w-5 h-5" />Emitir laudo para fralda grátis<ArrowRight className="w-5 h-5" /></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 bg-white/[0.03] border-white/15 text-white hover:bg-white/[0.06] gap-2">
            <a href="#tipos">Ver tipos de incontinência<ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const Tipos = () => (
  <section id="tipos" className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Clínica</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Tipos de incontinência urinária</h2>
        <p className="text-white/60 font-light mb-10 max-w-xl">
          O tipo define o tratamento. A maioria dos casos em idosos é mista — e tem abordagem específica.
        </p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          {
            Icon: Activity,
            title: "Incontinência de esforço",
            desc: "Perda de urina ao tossir, espirrar, rir ou fazer atividade física. Causa: fraqueza do assoalho pélvico. Mais comum em mulheres pós-menopausa. Responde bem à fisioterapia pélvica.",
          },
          {
            Icon: HeartPulse,
            title: "Incontinência de urgência (bexiga hiperativa)",
            desc: "Vontade intensa e súbita de urinar, com perda antes de chegar ao banheiro. Causa: contrações involuntárias do músculo detrusor. Tratada com medicamentos e treino vesical.",
          },
          {
            Icon: Activity,
            title: "Incontinência mista",
            desc: "Combinação de esforço e urgência. Tipo mais frequente em idosos. Exige abordagem dupla: fisioterapia + medicamento, conforme predominância dos sintomas.",
          },
          {
            Icon: Stethoscope,
            title: "Incontinência funcional",
            desc: "O trato urinário funciona, mas o idoso não consegue chegar ao banheiro a tempo — por mobilidade reduzida, demência ou barreiras ambientais. Mais comum em acamados. Fralda é a conduta primária.",
          },
        ].map((t, i) => (
          <ScrollReveal key={t.title} delay={i * 0.08}>
            <div className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-6 h-full transition-all`}>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <t.Icon className="w-5 h-5 text-sky-400" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{t.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{t.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const Causas = () => (
  <section className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Etiologia</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Causas mais comuns em idosos</h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-8">
        <ScrollReveal delay={0.05}>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Fatores predisponentes</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              {[
                "Enfraquecimento muscular do assoalho pélvico com a idade",
                "Doença de Alzheimer e outras demências",
                "Doença de Parkinson e doenças neurológicas",
                "Diabetes mellitus — dano às fibras nervosas da bexiga",
                "Hiperplasia prostática benigna em homens",
                "Pós-menopausa — redução de estrogênio afeta o trofismo uretral",
              ].map((c) => (
                <li key={c} className="flex gap-3">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Fatores precipitantes reversíveis</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              {[
                "Infecção urinária — incontinência aguda que desaparece com tratamento",
                "Medicamentos (diuréticos, sedativos, antipsicóticos)",
                "Constipação grave — compressão vesical",
                "Mobilidade reduzida por imobilismo ou fratura",
                "Desidratação ou ingestão excessiva de líquidos",
              ].map((c) => (
                <li key={c} className="flex gap-3">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const Tratamento = () => (
  <section className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Tratamento</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Abordagem clínica</h2>
        <p className="text-white/60 font-light mb-10 max-w-xl">
          Tratamento depende do tipo e da causa. Na prática geriátrica, o objetivo é reduzir episódios,
          preservar dignidade e garantir qualidade de vida — não necessariamente cura total.
        </p>
      </ScrollReveal>
      <div className="space-y-3">
        {[
          {
            label: "Fisioterapia pélvica",
            desc: "Primeira linha para incontinência de esforço. Exercícios de Kegel supervisionados por fisioterapeuta especializado. Melhora em 60–80% dos casos de esforço leve a moderado.",
          },
          {
            label: "Treino vesical",
            desc: "Para incontinência de urgência. Reeducação do comportamento miccional com horários progressivos. Reduz episódios de urgência em 75% dos pacientes.",
          },
          {
            label: "Farmacoterapia",
            desc: "Antimuscarínicos (oxibutinina, solifenacina) ou beta-3 agonistas (mirabegrona) para bexiga hiperativa. Prescrição médica obrigatória — a escolha depende do perfil clínico do idoso.",
          },
          {
            label: "Fralda geriátrica",
            desc: "Conduta primária em incontinência funcional, quadros avançados de demência ou mobilidade severamente comprometida. Não é rendição — é manejo clínico adequado à condição do paciente.",
            highlight: true,
          },
        ].map((t, i) => (
          <ScrollReveal key={t.label} delay={i * 0.07}>
            <div className={`rounded-2xl p-5 flex gap-5 transition-all ${t.highlight ? "bg-sky-500/[0.08] border border-sky-400/20" : `${SURFACE} ${SURFACE_HOVER}`}`}>
              <div className="pt-0.5">
                <p className="font-semibold text-white text-sm mb-1">{t.label}</p>
                <p className="text-sm text-white/55 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const DireitoSus = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className={`rounded-2xl bg-sky-500/[0.06] border border-sky-400/20 p-7`}>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Direito garantido por lei</p>
          <p className="text-white/80 leading-relaxed text-sm mb-4">
            Idosos com 60 anos ou mais e PCDs com indicação clínica de incontinência têm direito a fralda gratuita
            pela Farmácia Popular do SUS, conforme a{" "}
            <a href="https://www.gov.br/saude/pt-br/assuntos/farmacia-popular" target="_blank" rel="noopener" className="text-sky-400 hover:underline">
              Portaria GM/MS nº 3.073/2024
            </a>. O único documento exigido é o laudo médico com assinatura ICP-Brasil.
          </p>
          <p className="text-white/80 leading-relaxed text-sm">
            Se o idoso já tem diagnóstico de incontinência documentado —{" "}
            <a href="/laudo-medico-online" className="text-sky-400 hover:underline">obter o laudo online custa R$ 49</a>{" "}
            e leva até 24h. A economia mensal com fraldas pode chegar a R$ 350.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const QuandoNaoUsarServico = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className="rounded-2xl bg-amber-500/[0.06] border border-amber-400/20 p-7">
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" strokeWidth={1.75} />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-2">Quando não usar fralda como solução definitiva</p>
              <p className="text-sm text-white/75 leading-relaxed">
                Em casos de incontinência de esforço leve a moderada, especialmente em mulheres com menos de 75 anos
                e boa mobilidade, a fisioterapia pélvica pode eliminar ou reduzir significativamente os episódios.
                Recorrer à fralda sem tentar tratamento conservador priva o paciente de uma melhora real.
              </p>
              <p className="text-sm text-white/75 leading-relaxed mt-3">
                A fralda é a resposta correta quando: o quadro é irreversível, o tratamento conservador já foi tentado
                sem resultado suficiente, ou o paciente tem limitações que impedem treino vesical ou fisioterapia.
                O{" "}
                <a href="/cuidar-de-idoso-em-casa" className="text-sky-400 hover:underline">
                  guia de cuidados domiciliares
                </a>{" "}
                tem mais orientações sobre esse equilíbrio.
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
              href: "/fralda-geriatrica-gratis-sus",
              title: "Fralda grátis pelo SUS",
              desc: "Como retirar, documentos necessários e farmácias credenciadas.",
            },
            {
              href: "/laudo-medico-online",
              title: "Laudo médico online",
              desc: "Emita o laudo por teleconsulta em até 24h. Válido em todo o Brasil.",
            },
            {
              href: "/cuidar-de-idoso-em-casa",
              title: "Cuidar de idoso em casa",
              desc: "Guia prático de cuidados domiciliares e recursos disponíveis pelo SUS.",
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
          O diagnóstico está feito. O laudo pode sair em 24h.
        </h2>
        <p className="text-white/60 font-light mb-8 max-w-xl mx-auto">
          Se o idoso já tem incontinência documentada, o laudo para fralda gratuita pelo SUS é o próximo passo.
          R$ 49, 100% online, entregue por WhatsApp.
        </p>
        <Button asChild size="lg" className="rounded-full px-10 py-6 bg-sky-500 hover:bg-sky-400 text-[#070B12] font-bold shadow-xl shadow-sky-500/25 gap-2">
          <a href={FUNIL}><Sparkles className="w-5 h-5" />Emitir laudo médico<ArrowRight className="w-5 h-5" /></a>
        </Button>
        <div className="mt-6 flex justify-center gap-6 text-xs text-white/40">
          <span className="flex items-center gap-1.5"><BadgeCheck className="w-3.5 h-3.5 text-sky-400" />CRM 26.155-CE</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-sky-400" />ICP-Brasil</span>
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

export default function PillarIncontinencia() {
  useSeo();
  return (
    <main className={`${BG} min-h-screen text-white`}>
      <Header />
      <Breadcrumb />
      <Hero />
      <Tipos />
      <Causas />
      <Tratamento />
      <DireitoSus />
      <QuandoNaoUsarServico />
      <InternalLinks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
