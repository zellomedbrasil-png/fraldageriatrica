import { SEO } from "@/components/SEO";
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
  MapPin,
  Phone,
  Mail,
  Globe,
  BookOpen,
  Stethoscope,
  Heart,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/landing/ScrollReveal";

const FUNIL = "/funil";
const CANONICAL = "https://fraldageriatrica.com/dr-roberto-arcanjo";
const OG_IMAGE = "https://fraldageriatrica.com/img/dr-roberto-arcanjo.jpg";
const PAGE_TITLE =
  "Dr. Roberto Arcanjo — Médico CRM/CE 26.155 | Fralda Geriátrica";
const PAGE_DESC =
  "Dr. Roberto Arcanjo, médico CRM/CE 26.155, pós-graduado em Geriatria pelo Hospital Israelita Albert Einstein. Responsável técnico pelo fraldageriatrica.com.";

const BG = "bg-[#070B12]";
const SURFACE = "bg-white/[0.03] border border-white/[0.07]";
const SURFACE_HOVER = "hover:border-sky-400/30 hover:bg-white/[0.05]";
const SOFT_GRADIENT =
  "bg-[radial-gradient(ellipse_at_top,hsl(210_92%_55%/0.18)_0%,transparent_55%)]";

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
      <a href="/" className="flex items-center gap-2.5">
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
  <section className="relative pt-8 pb-16 overflow-hidden">
    <div className={`absolute inset-0 ${SOFT_GRADIENT} pointer-events-none`} />
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/[0.05] rounded-full blur-[100px] pointer-events-none" />
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
        <ScrollReveal>
          <div className="shrink-0">
            <img
              src="/img/dr-roberto-arcanjo.jpg"
              alt="Dr. Roberto Arcanjo, médico CRM/CE 26.155, pós-graduado em Geriatria"
              width={200}
              height={200}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover border border-white/[0.08] shadow-2xl shadow-black/40"
              loading="eager"
            />
          </div>
        </ScrollReveal>

        <div className="text-center sm:text-left">
          <ScrollReveal delay={0.05}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
              <BadgeCheck className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-xs font-medium text-white/70">CRM/CE 26.155 · CREMEC ativo</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1 leading-tight">
              Dr. Roberto Arcanjo
            </h1>
            <p className="text-sky-400 font-medium mb-1">Médico · CRM/CE 26.155</p>
            <p className="text-white/50 text-sm mb-5 italic">
              Pós-graduado em Geriatria — Hospital Israelita Albert Einstein
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {[
                { Icon: BadgeCheck, label: "CRM/CE 26.155" },
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

const Sobre = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Sobre</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Quem é o Dr. Roberto Arcanjo</h2>
      </ScrollReveal>
      <div className="space-y-4 text-sm text-white/70 leading-relaxed">
        <ScrollReveal delay={0.05}>
          <p>
            Sou médico inscrito no Conselho Regional de Medicina do Estado do Ceará sob o{" "}
            <strong className="text-white">CRM 26.155</strong>, com atuação voltada ao{" "}
            <strong className="text-white">cuidado integral da pessoa idosa</strong>, com foco em prevenção,
            autonomia e qualidade de vida.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p>
            Pós-graduado em Geriatria pelo{" "}
            <a href="https://www.einstein.br" target="_blank" rel="noopener" className="text-sky-400 hover:underline">
              Hospital Israelita Albert Einstein
            </a>
            , desenvolvo uma medicina centrada no paciente, aliando ciência, escuta ativa e visão humanizada
            do envelhecimento. Atuo tanto em contextos hospitalares quanto no acompanhamento clínico
            individualizado em consultório particular.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p>
            O <strong className="text-white">fraldageriatrica.com</strong> nasceu de uma constatação simples:
            muitas famílias brasileiras não sabem que a Portaria GM/MS nº 3.073/2024 e a Portaria nº 937/2017
            garantem o fornecimento gratuito de fraldas geriátricas pela{" "}
            <a href="/fralda-geriatrica-gratis-sus" className="text-sky-400 hover:underline">
              Farmácia Popular do SUS
            </a>{" "}
            a idosos e pessoas com deficiência, mediante laudo médico. Esse serviço existe para resgatar esse
            direito de forma simples, digna e dentro da legalidade médica.
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const Formacao = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Formação</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Formação acadêmica</h2>
      </ScrollReveal>
      <div className="space-y-3">
        {[
          {
            Icon: GraduationCap,
            title: "Graduação em Medicina",
            institution: "Universidade Estácio de Sá (UNESA)",
            location: "Rio de Janeiro, RJ",
            status: "Concluído",
          },
          {
            Icon: BookOpen,
            title: "Pós-graduação em Geriatria",
            institution: "Hospital Israelita Albert Einstein",
            location: "São Paulo, SP",
            status: "Concluído",
            highlight: true,
          },
          {
            Icon: BookOpen,
            title: "Pós-graduação em Medicina do Envelhecimento",
            institution: "PUC/RS",
            location: "Porto Alegre, RS",
            status: "Em curso",
          },
          {
            Icon: BookOpen,
            title: "Pós-graduação em Gastroenterologia",
            institution: "Unyleya",
            location: "Brasil",
            status: "Em curso",
          },
        ].map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.07}>
            <div className={`rounded-2xl p-5 flex items-start gap-5 transition-all ${f.highlight ? "bg-sky-500/[0.06] border border-sky-400/20" : `${SURFACE} ${SURFACE_HOVER}`}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${f.highlight ? "bg-sky-500/20" : "bg-white/[0.04]"}`}>
                <f.Icon className={`w-5 h-5 ${f.highlight ? "text-sky-400" : "text-white/50"}`} strokeWidth={1.75} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white text-sm mb-0.5">{f.title}</p>
                <p className="text-sm text-white/55">{f.institution}</p>
                <p className="text-xs text-white/35 mt-0.5">{f.location}</p>
              </div>
              <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                f.status === "Concluído"
                  ? "text-sky-400 bg-sky-400/10"
                  : "text-amber-400 bg-amber-400/10"
              }`}>{f.status}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const Experiencia = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Experiência</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Atuação profissional</h2>
      </ScrollReveal>
      <div className="space-y-4">
        <ScrollReveal delay={0.05}>
          <div className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-6 transition-all`}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5 text-sky-400" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-semibold text-white mb-0.5">Clínica AllMed</p>
                <p className="text-xs text-sky-400 mb-2 uppercase tracking-wider font-medium">Fortaleza, CE · Atual</p>
                <p className="text-sm text-white/55 leading-relaxed">
                  Consultório particular com foco em longevidade saudável, saúde preventiva e qualidade de vida
                  para adultos e idosos. Atendimento presencial e por telemedicina para todo o Brasil.
                </p>
                <p className="text-xs text-white/35 mt-2">Rua João Lobo Filho, 250 — Fortaleza/CE</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-6 transition-all`}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5 text-white/50" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-semibold text-white mb-0.5">Médico plantonista</p>
                <p className="text-xs text-white/40 mb-2 uppercase tracking-wider font-medium">Hospitais de Barreiras, Ocara e Guaiúba</p>
                <p className="text-sm text-white/55 leading-relaxed">
                  Atuação em pronto-atendimento, manejo clínico de pacientes idosos e suporte multidisciplinar
                  hospitalar. Experiência complementar em ambulatórios voltados ao cuidado da pessoa idosa,
                  cuidados paliativos e medicina preventiva.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const AreasAtuacao = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Clínica</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Áreas de atuação clínica</h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          {
            Icon: Activity,
            title: "Avaliação Geriátrica Ampla (AGA)",
            desc: "Análise integrada dos aspectos físicos, mentais, funcionais e sociais do idoso.",
          },
          {
            Icon: Heart,
            title: "Manejo de doenças crônicas",
            desc: "Hipertensão, diabetes, osteoporose e demência com foco em funcionalidade.",
          },
          {
            Icon: Check,
            title: "Prescrição de estilo de vida",
            desc: "Alimentação, movimento e sono como ferramentas terapêuticas.",
          },
          {
            Icon: ShieldCheck,
            title: "Prevenção de quedas e fragilidade",
            desc: "Estratégias para preservar autonomia e segurança do idoso.",
          },
          {
            Icon: Heart,
            title: "Cuidados paliativos e finitude",
            desc: "Comunicação sensível, manejo de sintomas e suporte familiar.",
          },
          {
            Icon: Stethoscope,
            title: "Telemedicina",
            desc: "Atendimento online conforme Resolução CFM nº 2.314/2022, para todo o Brasil.",
          },
        ].map((a, i) => (
          <ScrollReveal key={a.title} delay={i * 0.06}>
            <div className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-5 flex gap-4 h-full transition-all`}>
              <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <a.Icon className="w-4 h-4 text-sky-400" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-1">{a.title}</p>
                <p className="text-xs text-white/50 leading-relaxed">{a.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const Etica = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className="rounded-2xl bg-sky-500/[0.06] border border-sky-400/20 p-7">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Compromisso ético</p>
          <p className="text-sm text-white/75 leading-relaxed mb-3">
            Todo conteúdo publicado neste site é revisado e assinado por mim. As informações têm caráter
            educativo e informativo, <strong className="text-white">não substituem a consulta médica presencial</strong>{" "}
            e seguem o Código de Ética Médica (Resolução CFM nº 2.217/2018) e as normas de publicidade médica
            (Resolução CFM nº 1.974/2011).
          </p>
          <p className="text-sm text-white/75 leading-relaxed">
            Em caso de emergência, procure um serviço de pronto-atendimento ou ligue para o{" "}
            <strong className="text-white">SAMU 192</strong>.
          </p>
          <p className="text-xs text-white/40 mt-4">
            Verifique a inscrição no{" "}
            <a href="https://portal.cfm.org.br/busca-medicos/" target="_blank" rel="noopener" className="text-sky-400 hover:underline">
              portal oficial do CFM
            </a>{" "}
            · CRM/CE 26.155 · Situação: ativo
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const Contato = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Contato</p>
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Entre em contato</h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        {[
          { Icon: MapPin, label: "Clínica AllMed", value: "Rua João Lobo Filho, 250 — Fortaleza/CE", href: null },
          { Icon: Phone, label: "WhatsApp", value: "+55 (85) 99909-9750", href: "https://wa.me/5585999099750" },
          { Icon: Mail, label: "E-mail", value: "contato@robertoarcanjo.com", href: "mailto:contato@robertoarcanjo.com" },
          { Icon: Globe, label: "Site pessoal", value: "www.robertoarcanjo.com", href: "https://www.robertoarcanjo.com" },
        ].map((c, i) => (
          <ScrollReveal key={c.label} delay={i * 0.07}>
            <div className={`rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-5 flex gap-4 items-start transition-all`}>
              <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <c.Icon className="w-4 h-4 text-sky-400" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-0.5">{c.label}</p>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="text-sm text-white hover:text-sky-300 transition-colors">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm text-white/70">{c.value}</p>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.3}>
        <p className="text-sm text-white/50 text-center">
          Atendimento via telemedicina para todo o Brasil.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

const ConteudoRevisado = () => (
  <section className="py-16 border-b border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-6">Conteúdo revisado</p>
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
          O Dr. Roberto Arcanjo avalia o paciente por videochamada e emite o laudo médico para retirada
          de fralda gratuita na Farmácia Popular. R$ 49, entregue em até 24h úteis.
        </p>
        <Button asChild size="lg" className="rounded-full px-10 py-6 bg-sky-500 hover:bg-sky-400 text-[#070B12] font-bold shadow-xl shadow-sky-500/25 gap-2">
          <a href={FUNIL}><Sparkles className="w-5 h-5" />Pedir meu laudo — R$ 49<ArrowRight className="w-5 h-5" /></a>
        </Button>
        <div className="mt-6 flex justify-center gap-6 text-xs text-white/40">
          <span className="flex items-center gap-1.5"><BadgeCheck className="w-3.5 h-3.5 text-sky-400" />CRM/CE 26.155</span>
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
        © 2026 fraldageriatrica.com · Dr. Roberto Arcanjo CRM/CE 26.155 · Geriatria
      </p>
    </div>
  </footer>
);

export default function Medico() {
  return (
    <main className={`${BG} min-h-screen text-white`}>
      <SEO 
        title={PAGE_TITLE}
        description={PAGE_DESC}
        canonicalPath="/dr-roberto-arcanjo"
        keywords="Dr. Roberto Arcanjo geriatra, CRM/CE 26.155, médico laudo fralda online, geriatra Albert Einstein"
        robots="index, follow"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Physician",
            "@id": `${CANONICAL}#physician`,
            name: "Dr. Roberto Arcanjo",
            givenName: "Roberto",
            familyName: "Arcanjo",
            honorificPrefix: "Dr.",
            image: OG_IMAGE,
            url: CANONICAL,
            jobTitle: "Médico",
            description:
              "Médico inscrito no CRM/CE sob o número 26.155, com pós-graduação em Geriatria pelo Hospital Israelita Albert Einstein. Atuação voltada ao cuidado integral da pessoa idosa, com foco em prevenção, autonomia e qualidade de vida.",
            telephone: "+55-85-99909-9750",
            email: "contato@robertoarcanjo.com",
            identifier: [{ "@type": "PropertyValue", propertyID: "CRM", value: "CRM/CE 26.155" }],
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "Universidade Estácio de Sá (UNESA)",
                address: { "@type": "PostalAddress", addressLocality: "Rio de Janeiro", addressRegion: "RJ", addressCountry: "BR" },
              },
              {
                "@type": "EducationalOrganization",
                name: "Hospital Israelita Albert Einstein",
                url: "https://www.einstein.br",
              },
            ],
            knowsAbout: [
              "Cuidado da pessoa idosa", "Avaliação Geriátrica Ampla", "Medicina do envelhecimento",
              "Manejo de doenças crônicas no idoso", "Polifarmácia e desprescrição", "Prevenção de quedas e fragilidade",
              "Cuidados paliativos", "Incontinência urinária no idoso", "Telemedicina",
              "Atendimento em pronto socorro", "Farmácia Popular do Brasil",
            ],
            knowsLanguage: ["pt-BR", "en"],
            areaServed: { "@type": "Country", name: "Brasil" },
            availableService: [
              { "@type": "MedicalTherapy", name: "Teleconsulta para pessoa idosa" },
              { "@type": "MedicalProcedure", name: "Emissão de laudo médico para fralda geriátrica via Farmácia Popular" },
              { "@type": "MedicalTherapy", name: "Avaliação Geriátrica Ampla (AGA)" },
            ],
            worksFor: [
              { "@type": "MedicalBusiness", "@id": "https://fraldageriatrica.com#organization", name: "Fralda Geriátrica", url: "https://fraldageriatrica.com" },
              { "@type": "MedicalClinic", name: "Clínica AllMed", address: { "@type": "PostalAddress", streetAddress: "Rua João Lobo Filho, 250", addressLocality: "Fortaleza", addressRegion: "CE", addressCountry: "BR" } },
            ],
            memberOf: { "@type": "Organization", name: "Conselho Regional de Medicina do Estado do Ceará", url: "https://www.cremec.org.br" },
            sameAs: ["https://www.robertoarcanjo.com", "https://portal.cfm.org.br/busca-medicos"],
          },
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: CANONICAL,
            name: "Sobre o Dr. Roberto Arcanjo",
            description: "Página oficial do médico responsável pelo fraldageriatrica.com.",
            mainEntity: { "@id": `${CANONICAL}#physician` },
            isPartOf: { "@type": "WebSite", name: "Fralda Geriátrica", url: "https://fraldageriatrica.com" },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: "https://fraldageriatrica.com/" },
              { "@type": "ListItem", position: 2, name: "Dr. Roberto Arcanjo", item: CANONICAL },
            ],
          },
        ]}
      />
      <Header />
      <Breadcrumb />
      <Hero />
      <Sobre />
      <Formacao />
      <Experiencia />
      <AreasAtuacao />
      <Etica />
      <Contato />
      <ConteudoRevisado />
      <CTA />
      <Footer />
    </main>
  );
}
