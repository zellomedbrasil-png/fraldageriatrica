import { useEffect } from "react";
import {
  Shield,
  Plus,
  BadgeCheck,
  ShieldCheck,
  Lock,
  Check,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Award,
  BookOpen,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/landing/ScrollReveal";

const FUNIL = "/funil";
const CANONICAL = "https://fraldageriatrica.com/dr-roberto-arcanjo";
const PAGE_TITLE =
  "Dr. Roberto Arcanjo — Geriatra CRM 26.155-CE | fraldageriatrica.com";
const PAGE_DESC =
  "Dr. Roberto Arcanjo, médico geriatra com CRM 26.155-CE ativo no CFM, especialista em laudo médico para fralda geriátrica via telemedicina. Revisão clínica e emissão com assinatura ICP-Brasil.";
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
    upsertMeta("name", "keywords", "Dr. Roberto Arcanjo geriatra, CRM 26155-CE, médico laudo fralda online, geriatra telemedicina Ceará");
    upsertMeta("name", "theme-color", "#070B12");
    upsertMeta("property", "og:title", PAGE_TITLE);
    upsertMeta("property", "og:description", PAGE_DESC);
    upsertMeta("property", "og:type", "profile");
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

    const ldId = "ld-medico";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: "Dr. Roberto Arcanjo",
        honorificPrefix: "Dr.",
        jobTitle: "Médico Geriatra",
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "CRM",
          recognizedBy: {
            "@type": "Organization",
            name: "Conselho Federal de Medicina",
            url: "https://portal.cfm.org.br",
          },
          identifier: "26.155-CE",
        },
        medicalSpecialty: [
          { "@type": "MedicalSpecialty", name: "Geriatrics" },
        ],
        worksFor: {
          "@type": "MedicalBusiness",
          name: "fraldageriatrica.com",
          url: "https://fraldageriatrica.com",
          medicalSpecialty: "Geriatrics",
          areaServed: "BR",
          priceRange: "R$49",
        },
        url: CANONICAL,
        sameAs: [
          `https://portal.cfm.org.br/busca-medicos/`,
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "fraldageriatrica.com",
        url: "https://fraldageriatrica.com",
        description: "Emissão de laudo médico online para fralda geriátrica gratuita pelo programa Farmácia Popular do SUS.",
        medicalSpecialty: "Geriatrics",
        priceRange: "R$49",
        areaServed: "BR",
        founder: {
          "@type": "Physician",
          name: "Dr. Roberto Arcanjo",
          hasCredential: "CRM 26.155-CE",
        },
      },
    ]);
    document.head.appendChild(ld);
  }, []);
};

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
      <li className="text-white/60">Dr. Roberto Arcanjo</li>
    </ol>
  </nav>
);

const Hero = () => (
  <section className="relative pt-8 pb-20 overflow-hidden">
    <div className={`absolute inset-0 ${SOFT_GRADIENT} pointer-events-none`} />
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/[0.05] rounded-full blur-[100px] pointer-events-none" />
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <div className="flex flex-col sm:flex-row items-start gap-8">
        <ScrollReveal>
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-sky-500/20 to-sky-500/5 border border-sky-400/20 flex items-center justify-center shrink-0">
            <Stethoscope className="w-12 h-12 sm:w-16 sm:h-16 text-sky-400/70" strokeWidth={1} />
          </div>
        </ScrollReveal>
        <div>
          <ScrollReveal delay={0.05}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
              <BadgeCheck className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-xs font-medium text-white/70">CRM 26.155-CE · CFM ativo</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3 leading-tight">
              Dr. Roberto Arcanjo
            </h1>
            <p className="text-sky-400 font-medium mb-4">Médico Geriatra · CRM 26.155-CE</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-white/65 leading-relaxed text-sm max-w-xl">
              Responsável pela avaliação clínica e emissão de laudos médicos para{" "}
              <a href="/fralda-geriatrica-gratis-sus" className="text-sky-400 hover:underline">fralda geriátrica gratuita</a>{" "}
              pelo programa Farmácia Popular do SUS. Atendimento por{" "}
              <a href="/laudo-medico-online" className="text-sky-400 hover:underline">teleconsulta</a>{" "}
              com assinatura digital ICP-Brasil, válida em todo o território nacional.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3 mt-5">
              {[
                { Icon: BadgeCheck, label: "CRM 26.155-CE ativo" },
                { Icon: ShieldCheck, label: "Assinatura ICP-Brasil" },
                { Icon: Lock, label: "LGPD" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-1.5 text-xs text-white/50">
                  <b.Icon className="w-3.5 h-3.5 text-sky-400" />
                  {b.label}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

const Formacao = () => (
  <section className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Formação e qualificação</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-10">Credenciais</h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          {
            Icon: GraduationCap,
            title: "Medicina",
            desc: "Graduação em Medicina com registro ativo no Conselho Regional de Medicina do Ceará — CRM 26.155-CE.",
          },
          {
            Icon: Award,
            title: "Especialidade em Geriatria",
            desc: "Especialização em geriatria com foco em cuidados ao idoso, incontinência, mobilidade e avaliação geriátrica abrangente.",
          },
          {
            Icon: BookOpen,
            title: "Telemedicina",
            desc: "Habilitado para teleconsultas conforme a Resolução CFM 2.314/2022, com emissão de laudos de validade jurídica plena por videochamada.",
          },
          {
            Icon: Stethoscope,
            title: "Programa Farmácia Popular",
            desc: "Especialista nos requisitos técnicos da Portaria GM/MS 3.073/2024 para emissão de laudos dentro do programa de distribuição gratuita de fraldas.",
          },
        ].map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 0.08}>
            <div className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-6 h-full transition-all`}>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <c.Icon className="w-5 h-5 text-sky-400" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{c.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const Responsabilidade = () => (
  <section className="py-20 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Responsabilidade editorial</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Revisão médica do conteúdo</h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-8">
        <ScrollReveal delay={0.05}>
          <p className="text-white/70 leading-relaxed text-sm">
            Todo o conteúdo clínico publicado no fraldageriatrica.com — incluindo artigos do blog, guias de incontinência
            e orientações sobre o programa Farmácia Popular — é revisado pelo Dr. Roberto Arcanjo antes da publicação.
            A data de revisão aparece no rodapé de cada página e no schema JSON-LD.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="space-y-3">
            {[
              "Informações sobre portarias e direitos do SUS verificadas na fonte oficial",
              "Condutas clínicas alinhadas com diretrizes da SBGG (Sociedade Brasileira de Geriatria)",
              "Nenhum dado clínico publicado sem revisão do médico responsável",
              "Laudos emitidos individualmente após avaliação de cada paciente",
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

const Verificacao = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className={`rounded-2xl ${SURFACE} p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6`}>
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
            <BadgeCheck className="w-6 h-6 text-sky-400" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-2">Verificação pública do CRM</p>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              O registro do Dr. Roberto Arcanjo pode ser verificado diretamente no portal do{" "}
              <a href="https://portal.cfm.org.br/busca-medicos/" target="_blank" rel="noopener" className="text-sky-400 hover:underline">
                Conselho Federal de Medicina
              </a>{" "}
              (CFM). Qualquer cidadão pode confirmar a situação do CRM de um médico antes de uma teleconsulta — e deve fazê-lo.
            </p>
            <p className="text-xs text-white/40">
              CRM 26.155-CE · Situação: ativo · Especialidade: Geriatria
            </p>
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
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-6">Conteúdo revisado pelo Dr. Roberto</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: "/fralda-geriatrica-gratis-sus", title: "Fralda grátis pelo SUS" },
            { href: "/laudo-medico-online", title: "Laudo médico online" },
            { href: "/incontinencia-urinaria-idosos", title: "Incontinência urinária em idosos" },
            { href: "/cuidar-de-idoso-em-casa", title: "Cuidar de idoso em casa" },
          ].map((l) => (
            <a key={l.href} href={l.href} className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-4 block transition-all group`}>
              <p className="text-sm font-medium text-white group-hover:text-sky-300 transition-colors">{l.title}</p>
            </a>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
          Agende a teleconsulta
        </h2>
        <p className="text-white/60 font-light mb-8 max-w-xl mx-auto">
          O Dr. Roberto Arcanjo avalia o paciente por videochamada e emite o laudo médico para retirada de fralda
          gratuita na Farmácia Popular. R$ 49, entregue em até 24h úteis.
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
        © 2025 fraldageriatrica.com · Dr. Roberto Arcanjo CRM 26.155-CE · Geriatria
      </p>
    </div>
  </footer>
);

export default function Medico() {
  useSeo();
  return (
    <main className={`${BG} min-h-screen text-white`}>
      <Header />
      <Breadcrumb />
      <Hero />
      <Formacao />
      <Responsabilidade />
      <Verificacao />
      <InternalLinks />
      <CTA />
      <Footer />
    </main>
  );
}
