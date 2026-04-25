import { Instagram, MessageCircle, Mail, Stethoscope } from "lucide-react";
import Logo from "./Logo";

const cols = [
  {
    title: "Navegação",
    links: [
      { label: "Como Funciona", href: "#como-funciona" },
      { label: "Quem Tem Direito", href: "#quem-tem-direito" },
      { label: "Preço", href: "#precos" },
      { label: "FAQ", href: "#faq" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de Uso", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "LGPD", href: "#" },
      { label: "Política de Reembolso", href: "#" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/fraldageriatrica",
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5585991275429",
    icon: MessageCircle,
  },
  {
    label: "E-mail",
    href: "mailto:contato@fraldageriatrica.com",
    icon: Mail,
  },
];

const Footer = () => {
  return (
    <footer
      className="text-ink-200/85"
      style={{ backgroundColor: "oklch(0.18 0.025 230)" }}
    >
      <div className="container-page pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Coluna 1 — Marca */}
          <div>
            <div className="[&_*]:text-white">
              <Logo />
            </div>
            <p className="text-[13px] text-ink-200/70 mt-4 leading-relaxed max-w-xs">
              Telemedicina especializada em laudos para fralda geriátrica.
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 text-ink-200/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <s.icon className="w-4 h-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-ink-200/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Coluna 4 — Responsável Técnico */}
          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              Responsável Técnico
            </h3>
            <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                <Stethoscope className="w-4 h-4 text-accent" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white">
                  Dr. [Nome] — CRM/[UF] [número]
                </p>
                <p className="text-[12px] text-ink-200/60 mt-1 leading-relaxed">
                  Diretor Técnico responsável conforme Resolução CFM 2.314/2022.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <p className="text-[11px] text-ink-200/60 leading-relaxed max-w-4xl">
            fraldageriatrica.com é uma plataforma de telemedicina especializada em emissão de
            laudos médicos para uso de fralda geriátrica, atuando conforme a Portaria GM/MS nº
            3.073/2024 e a Resolução CFM 2.314/2022. Este serviço não substitui acompanhamento
            médico regular nem realiza diagnósticos novos. A distribuição gratuita das fraldas é
            responsabilidade exclusiva do Programa Farmácia Popular do Brasil; nosso serviço se
            limita à avaliação clínica e emissão do laudo médico exigido pelo programa.
          </p>
          <p className="text-[11px] text-ink-200/50">
            © 2026 fraldageriatrica.com — Operado por receitas.site
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
