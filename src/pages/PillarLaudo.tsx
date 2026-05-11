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
  Video,
  FileSignature,
  Clock,
  AlertCircle,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/landing/ScrollReveal";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const FUNIL = "/funil";
const CANONICAL = "https://fraldageriatrica.com/laudo-medico-online";
const PAGE_TITLE =
  "Laudo Médico Online para Fralda Geriátrica 2025 | Em 24h, R$ 49";
const PAGE_DESC =
  "Laudo médico para fralda geriátrica pela Farmácia Popular via teleconsulta. Médico com CRM ativo, assinatura ICP-Brasil, entregue em até 24h por R$ 49. 100% online.";
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
    upsertMeta("name", "keywords", "laudo médico online fralda, como obter laudo médico fralda, laudo fralda geriátrica telemedicina, laudo médico para Farmácia Popular, renovar laudo fralda");
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

    const ldId = "ld-laudo";
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
        about: { "@type": "MedicalProcedure", name: "Teleconsulta para emissão de laudo médico" },
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
            { "@type": "ListItem", position: 2, name: "Laudo Médico Online", item: CANONICAL },
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
    q: "O laudo online tem a mesma validade jurídica que o presencial?",
    a: "Sim. A Resolução CFM 2.314/2022 regulamenta a telemedicina e garante que laudos emitidos por teleconsulta têm validade jurídica idêntica aos emitidos presencialmente. A assinatura digital ICP-Brasil tem força probatória equivalente à assinatura física.",
  },
  {
    q: "A Farmácia Popular aceita laudo emitido por telemedicina?",
    a: "Aceita. O programa Farmácia Popular exige laudo médico com CRM ativo e assinatura reconhecida — não exige que a consulta tenha sido presencial. Desde 2022, laudos por telemedicina são legalmente válidos em todo o território nacional.",
  },
  {
    q: "Qual é a validade do laudo emitido?",
    a: "A validade é definida pelo médico conforme o quadro clínico do paciente e os prazos estabelecidos pela portaria do programa. Você será avisado com antecedência quando a renovação estiver próxima.",
  },
  {
    q: "Preciso instalar algum aplicativo para a teleconsulta?",
    a: "Não. A consulta é feita por videochamada pelo próprio navegador do celular ou computador. Não é necessário instalar aplicativo.",
  },
  {
    q: "E se o idoso não conseguir participar da consulta?",
    a: "Familiar, cuidador ou procurador legal pode participar da teleconsulta em lugar do paciente. Em casos de impossibilidade total, o médico avalia a situação com base na documentação clínica enviada previamente.",
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
      <li className="text-white/60">Laudo Médico Online</li>
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
          <Video className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-xs font-medium text-white/70">Resolução CFM 2.314/2022 — Telemedicina</span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-5 leading-[1.08]">
          Laudo médico online para{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">
            fralda geriátrica grátis
          </span>
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="text-lg text-white/65 mb-8 leading-relaxed font-light max-w-2xl">
          Sua mãe não retira a fralda pelo SUS porque nenhum médico disse que podia. O laudo é o único documento
          que a Farmácia Popular exige — e a gente emite em até 24h úteis, 100% por videochamada.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="rounded-full px-8 py-6 bg-sky-500 hover:bg-sky-400 text-[#070B12] font-bold shadow-xl shadow-sky-500/25 gap-2">
            <a href={FUNIL}><Sparkles className="w-5 h-5" />Emitir laudo agora<ArrowRight className="w-5 h-5" /></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 bg-white/[0.03] border-white/15 text-white hover:bg-white/[0.06] gap-2">
            <a href="#como-funciona">Ver como funciona<ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
        <p className="mt-3 text-xs text-white/40">R$ 49 · pagamento único · sem mensalidade · sem fila</p>
      </ScrollReveal>
    </div>
  </section>
);

const OQueE = () => (
  <section className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">O que é</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-6">O que é o laudo médico para fralda</h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-8">
        <ScrollReveal delay={0.05}>
          <p className="text-white/70 leading-relaxed text-sm">
            O laudo médico é um documento clínico emitido por médico com{" "}
            <a href="https://portal.cfm.org.br" target="_blank" rel="noopener" className="text-sky-400 hover:underline">CRM ativo no CFM</a>{" "}
            que atesta a necessidade de uso contínuo de fralda por incontinência urinária, fecal ou por condição de
            mobilidade. Sem esse documento, a Farmácia Popular não pode entregar o produto — por mais óbvio que seja
            o diagnóstico.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-white/70 leading-relaxed text-sm">
            A boa notícia é que a{" "}
            <strong className="text-white">Resolução CFM 2.314/2022</strong> permite que o laudo seja emitido por teleconsulta.
            Não é necessário deslocar o paciente, enfrentar fila em UBS ou aguardar consulta presencial. O médico avalia por
            videochamada e entrega o documento com assinatura digital ICP-Brasil, válido em qualquer farmácia do programa.
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const ComoFunciona = () => (
  <section id="como-funciona" className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Processo</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Como funciona</h2>
        <p className="text-white/60 font-light mb-10 max-w-xl">Três passos. Do preenchimento ao laudo no WhatsApp.</p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            num: "01",
            Icon: FileSignature,
            title: "Preencher os dados",
            desc: "Dados do paciente + documentos básicos (RG, CPF). O processo leva menos de 5 minutos pelo celular.",
          },
          {
            num: "02",
            Icon: Video,
            title: "Teleconsulta com médico",
            desc: "Videochamada rápida com o Dr. Roberto Arcanjo (CRM 26.155-CE). Familiar pode participar no lugar do paciente.",
            highlight: true,
          },
          {
            num: "03",
            Icon: MessageCircle,
            title: "Laudo no WhatsApp",
            desc: "Laudo digital com assinatura ICP-Brasil entregue em até 24h úteis. Pronto para apresentar na Farmácia Popular.",
          },
        ].map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 0.1}>
            <div className={`rounded-2xl p-7 h-full transition-all ${s.highlight ? "bg-sky-500/[0.08] border border-sky-400/20" : `${SURFACE} ${SURFACE_HOVER}`}`}>
              <div className="flex items-center justify-between mb-7">
                <span className="text-xs font-mono font-semibold text-white/30 tracking-widest">{s.num}</span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.highlight ? "bg-sky-500/20 text-sky-300" : "bg-white/[0.04] text-white/60"}`}>
                  <s.Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const Prazo = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className={`rounded-2xl ${SURFACE} p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6`}>
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6 text-sky-400" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-2">Prazo e custo</p>
            <p className="text-2xl font-semibold text-white mb-2">R$ 49 · laudo em até 24h úteis</p>
            <p className="text-sm text-white/60 leading-relaxed">
              Pagamento único. Sem mensalidade. Se o laudo precisar de ajuste para atender à farmácia, a readequação é
              feita sem custo adicional. A fralda mensal pela Farmácia Popular custa entre R$ 200 e R$ 350 no mercado —
              a economia anual pode chegar a R$ 4.200.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const QuandoNaoPrecisa = () => (
  <section className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className="rounded-2xl bg-amber-500/[0.06] border border-amber-400/20 p-7">
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" strokeWidth={1.75} />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-2">Quando você não precisa pagar</p>
              <p className="text-sm text-white/75 leading-relaxed">
                Se o idoso tem médico de família ativo no SUS ou faz consultas regulares em UBS, o laudo pode ser
                solicitado gratuitamente na próxima consulta. Muitos médicos de família emitem sem cobrar — basta pedir
                explicitamente o documento para o programa Farmácia Popular.
              </p>
              <p className="text-sm text-white/75 leading-relaxed mt-3">
                O serviço online por R$ 49 resolve o caso de quem não tem médico de referência, mora longe de UBS,
                ou não quer aguardar semanas por uma consulta enquanto continua comprando fraldas no varejo.
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
              desc: "Guia completo sobre o programa Farmácia Popular e como retirar a fralda.",
            },
            {
              href: "/incontinencia-urinaria-idosos",
              title: "Incontinência urinária em idosos",
              desc: "Quando a incontinência indica necessidade de fralda — do ponto de vista clínico.",
            },
            {
              href: "/blog/fralda-geriatrica-por-telemedicina",
              title: "Fralda por telemedicina",
              desc: "Como a teleconsulta resolveu o acesso ao benefício para milhares de famílias.",
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
          Você sabe há quantos meses está pagando por algo gratuito?
        </h2>
        <p className="text-white/60 font-light mb-8 max-w-xl mx-auto">
          O laudo sai em até 24h. Pague uma vez, retire a fralda todo mês pelo programa Farmácia Popular do SUS.
        </p>
        <Button asChild size="lg" className="rounded-full px-10 py-6 bg-sky-500 hover:bg-sky-400 text-[#070B12] font-bold shadow-xl shadow-sky-500/25 gap-2">
          <a href={FUNIL}><Sparkles className="w-5 h-5" />Pedir meu laudo — R$ 49<ArrowRight className="w-5 h-5" /></a>
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

export default function PillarLaudo() {
  useSeo();
  return (
    <main className={`${BG} min-h-screen text-white`}>
      <Header />
      <Breadcrumb />
      <Hero />
      <OQueE />
      <ComoFunciona />
      <Prazo />
      <QuandoNaoPrecisa />
      <InternalLinks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
