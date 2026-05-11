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
  Heart,
  Home,
  Users,
  ClipboardList,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/landing/ScrollReveal";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const FUNIL = "/funil";
const CANONICAL = "https://fraldageriatrica.com/cuidar-de-idoso-em-casa";
const PAGE_TITLE =
  "Como Cuidar de Idoso em Casa: Guia Prático 2025 | Recursos do SUS";
const PAGE_DESC =
  "Guia completo de cuidados domiciliares para idosos: rotina, higiene, nutrição, mobilidade e recursos gratuitos do SUS disponíveis para famílias cuidadoras. Revisado por geriatra.";
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
    upsertMeta("name", "keywords", "cuidar de idoso em casa, cuidados domiciliares idoso, cuidador de idoso, recursos SUS idoso, guia cuidado idoso");
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

    const ldId = "ld-cuidados";
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
        about: { "@type": "MedicalCondition", name: "Cuidados geriátricos domiciliares" },
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
            { "@type": "ListItem", position: 2, name: "Cuidar de Idoso em Casa", item: CANONICAL },
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
    q: "O cuidador familiar tem direito a algum suporte do SUS?",
    a: "Sim. O Programa de Atenção Domiciliar (SAD/PADI) do SUS oferece visitas de equipe multiprofissional ao domicílio do idoso com mobilidade comprometida. Para acesso, o cadastro é feito na UBS de referência da família. Além disso, alguns municípios têm programas de apoio ao cuidador familiar com capacitação e suporte psicológico.",
  },
  {
    q: "Quando contratar um cuidador profissional?",
    a: "Quando o familiar cuidador principal está com sinais de sobrecarga — insônia, irritabilidade crônica, isolamento social, problemas de saúde próprios. Cuidadores sobrecarregados cometem mais erros de medicação e têm menor capacidade de perceber alterações clínicas no idoso. A contratação profissional não é abandono — é qualidade de cuidado.",
  },
  {
    q: "O idoso acamado tem direito a fraldas gratuitas pelo SUS?",
    a: "Sim. Idosos acamados com incontinência urinária ou fecal têm direito a fralda geriátrica gratuita pela Farmácia Popular (Portaria GM/MS 3.073/2024). O laudo médico pode ser emitido por teleconsulta sem necessidade de deslocar o paciente.",
  },
  {
    q: "Como prevenir úlceras por pressão (escaras) em idoso acamado?",
    a: "Mudança de decúbito a cada 2 horas, colchão pneumático ou de espuma viscoelástica, hidratação da pele, nutrição adequada com aporte proteico e manutenção da higiene e secura da região sacral. A presença de fralda limpa e seca é parte essencial da prevenção de escaras.",
  },
  {
    q: "Quais sinais indicam que o idoso precisa de avaliação médica urgente?",
    a: "Confusão mental de início súbito (delirium), febre acima de 38°C, recusa alimentar por mais de 48h, queda com suspeita de fratura, dificuldade respiratória, alteração importante no padrão urinário ou sinais de desidratação grave (boca seca, urina escura, sonolência). Qualquer deterioração rápida do estado geral é sinal de alerta.",
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
      <li className="text-white/60">Cuidar de Idoso em Casa</li>
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
          <Home className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-xs font-medium text-white/70">Guia clínico — revisado por geriatra</span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-5 leading-[1.08]">
          Como cuidar de idoso em casa:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">
            guia prático e recursos do SUS
          </span>
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="text-lg text-white/65 mb-8 leading-relaxed font-light max-w-2xl">
          A maioria das famílias aprende a cuidar de um idoso sozinha, sem orientação e sem saber que o SUS
          oferece suporte domiciliar gratuito. Este guia reúne o que profissionais de geriatria ensinam aos cuidadores.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="rounded-full px-8 py-6 bg-sky-500 hover:bg-sky-400 text-[#070B12] font-bold shadow-xl shadow-sky-500/25 gap-2">
            <a href={FUNIL}><Sparkles className="w-5 h-5" />Fralda grátis — emitir laudo<ArrowRight className="w-5 h-5" /></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 bg-white/[0.03] border-white/15 text-white hover:bg-white/[0.06] gap-2">
            <a href="#rotina">Ver guia de rotina<ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const RecursosSus = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">SUS disponível</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Recursos do SUS para quem cuida em casa</h2>
        <p className="text-white/60 font-light mb-10 max-w-xl">
          Benefícios que a maioria das famílias não sabe que existe — e nunca foi informada pela UBS.
        </p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          {
            Icon: Heart,
            title: "Fralda geriátrica gratuita",
            desc: (
              <>
                Idosos com incontinência têm direito a fralda gratuita na{" "}
                <a href="/fralda-geriatrica-gratis-sus" className="text-sky-400 hover:underline">Farmácia Popular do SUS</a>.
                Exige laudo médico — que pode ser emitido por teleconsulta.
              </>
            ),
          },
          {
            Icon: Home,
            title: "Atenção Domiciliar (SAD/PADI)",
            desc: "Equipe multiprofissional (médico, enfermeiro, fisioterapeuta) visita o domicílio do idoso com mobilidade comprometida. Cadastro na UBS de referência.",
          },
          {
            Icon: Users,
            title: "Centro de Referência do Idoso (CRI)",
            desc: "Presentes em capitais e grandes municípios, oferecem consultas especializadas em geriatria, fisioterapia, psicologia e assistência social. Gratuito pelo SUS.",
          },
          {
            Icon: Phone,
            title: "Disque 100 e Disque Idoso",
            desc: "Para denúncias de violência, abandono ou negligência contra idosos. Gratuito, 24h. O Ministério dos Direitos Humanos processa os casos.",
          },
        ].map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 0.08}>
            <div className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-6 h-full transition-all`}>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <r.Icon className="w-5 h-5 text-sky-400" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{r.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const Rotina = () => (
  <section id="rotina" className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Cuidados diários</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Rotina de cuidados domiciliares</h2>
        <p className="text-white/60 font-light mb-10 max-w-xl">
          Cuidados básicos que previnem complicações graves — e que muitos cuidadores nunca aprenderam formalmente.
        </p>
      </ScrollReveal>
      <div className="space-y-3">
        {[
          {
            area: "Higiene e pele",
            items: [
              "Banho diário com sabonete de pH neutro — especial atenção a dobras e região sacral",
              "Troca de fralda a cada 3–4h ou imediatamente após evacuação — prevenção de dermatite",
              "Hidratação da pele com creme sem álcool, especialmente em áreas de pressão",
              "Higiene oral após cada refeição — reduz risco de pneumonia aspirativa",
            ],
          },
          {
            area: "Alimentação e hidratação",
            items: [
              "Refeições pequenas e frequentes (5–6 por dia) para idosos com inapetência",
              "Textura modificada quando houver disfagia — orientação de fonoaudiólogo",
              "Mínimo 1,5L de água por dia — idosos frequentemente não sentem sede",
              "Proteína adequada: 1,0–1,2g/kg/dia para manter massa muscular",
            ],
          },
          {
            area: "Mobilidade e prevenção de quedas",
            items: [
              "Fisioterapia domiciliar ou supervisão de exercícios de equilíbrio",
              "Remoção de tapetes soltos, fios e obstáculos no trajeto ao banheiro",
              "Barras de apoio no banheiro e corrimão nas escadas",
              "Calçado fechado e sola antiderrapante — nunca caminhar com meia",
            ],
          },
          {
            area: "Medicação",
            items: [
              "Caixinha organizadora semanal com horários — reduz erros de omissão e duplicidade",
              "Revisão periódica da lista com geriatra — polifarmácia é risco real em idosos",
              "Nunca dobrar dose de remédio esquecido — sempre consultar prescrição",
              "Registrar reações adversas e levar à próxima consulta",
            ],
          },
        ].map((s, i) => (
          <ScrollReveal key={s.area} delay={i * 0.07}>
            <div className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-6 transition-all`}>
              <p className="text-sm font-semibold text-sky-400 mb-3 uppercase tracking-wider text-[10px]">{s.area}</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm text-white/60">
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

const Cuidador = () => (
  <section className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Cuidador</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-6">O cuidador também precisa de cuidado</h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-8">
        <ScrollReveal delay={0.05}>
          <p className="text-white/70 leading-relaxed text-sm">
            Síndrome do cuidador — exaustão física e emocional de quem cuida sem suporte — é subdiagnosticada e
            frequentemente ignorada. Cuidadores que não descansam cometem mais erros de medicação, têm mais
            acidentes domésticos e desenvolvem depressão em taxas significativamente maiores que a população geral.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="space-y-3">
            {[
              "Revezamento familiar — nenhuma pessoa deve cuidar 24h sem descanso",
              "Grupos de apoio ao cuidador (disponíveis em muitas UBS e CAPS)",
              "Quando há sinais de esgotamento, considerar cuidador profissional",
              "Férias do cuidador: internação de respiro em alguns municípios é uma opção",
            ].map((c) => (
              <div key={c} className="flex gap-3 text-sm text-white/60">
                <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const QuandoNaoPrecisaServico = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className="rounded-2xl bg-amber-500/[0.06] border border-amber-400/20 p-7">
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" strokeWidth={1.75} />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-2">Quando procurar suporte profissional antes de qualquer produto</p>
              <p className="text-sm text-white/75 leading-relaxed">
                Se o idoso está perdendo peso rapidamente, tem confusão mental nova, febre frequente ou recusa alimentar
                persistente — isso é sinal clínico que precisa de avaliação médica, não de melhor fralda ou suplemento.
                Nesses casos, o serviço de{" "}
                <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/atencao-domiciliar" target="_blank" rel="noopener" className="text-sky-400 hover:underline">
                  atenção domiciliar do SUS
                </a>{" "}
                ou um geriatra são o próximo passo correto.
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
              desc: "Como retirar, documentos e farmácias credenciadas.",
            },
            {
              href: "/incontinencia-urinaria-idosos",
              title: "Incontinência urinária em idosos",
              desc: "Tipos, causas e tratamento clínico da incontinência.",
            },
            {
              href: "/laudo-medico-online",
              title: "Laudo médico online",
              desc: "Emita o laudo por teleconsulta. Entregue em 24h por R$ 49.",
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
          Fralda grátis é um dos benefícios que você ainda não usou
        </h2>
        <p className="text-white/60 font-light mb-8 max-w-xl mx-auto">
          Quem cuida de um idoso em casa com incontinência tem direito ao benefício. O laudo sai em até 24h úteis,
          sem sair de casa, por R$ 49. Manda esse link pro grupo da família agora.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-10 py-6 bg-sky-500 hover:bg-sky-400 text-[#070B12] font-bold shadow-xl shadow-sky-500/25 gap-2">
            <a href={FUNIL}><Sparkles className="w-5 h-5" />Emitir laudo — R$ 49<ArrowRight className="w-5 h-5" /></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 bg-white/[0.03] border-white/15 text-white hover:bg-white/[0.06] gap-2">
            <a href="/fralda-geriatrica-gratis-sus">Saber mais sobre o benefício<ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
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

export default function PillarCuidados() {
  useSeo();
  return (
    <main className={`${BG} min-h-screen text-white`}>
      <Header />
      <Breadcrumb />
      <Hero />
      <RecursosSus />
      <Rotina />
      <Cuidador />
      <QuandoNaoPrecisaServico />
      <InternalLinks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
