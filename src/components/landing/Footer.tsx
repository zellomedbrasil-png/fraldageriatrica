import { MessageCircle, Mail, Stethoscope } from "lucide-react";
import Logo from "./Logo";

const cols = [
  {
    title: "Navegação",
    links: [
      { label: "Como Funciona", href: "#como-funciona" },
      { label: "Quem Tem Direito", href: "#quem-tem-direito" },
      { label: "Preços", href: "#precos" },
      { label: "FAQ", href: "#faq" },
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

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-page py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo />
            <p className="text-[13px] text-text-secondary mt-4 leading-relaxed max-w-xs">
              Telemedicina especializada em laudos para fralda geriátrica, com conformidade legal e
              cuidado humano.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-bold text-text-primary uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[11px] font-bold text-text-primary uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/5585991275429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] text-text-secondary hover:text-text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@fraldageriatrica.com"
                  className="inline-flex items-center gap-2 text-[14px] text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.75} />
                  E-mail
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-surface-elevated border border-border p-5 flex items-start gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Stethoscope className="w-5 h-5 text-primary" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[13px] font-bold text-text-primary">Responsável Técnico</p>
            <p className="text-[13px] text-text-secondary mt-0.5">
              Dr. [Nome] — CRM/[UF] [número]
            </p>
            <p className="text-[12px] text-text-tertiary mt-1 leading-relaxed">
              Diretor Técnico responsável conforme Resolução CFM 2.314/2022.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border space-y-4">
          <p className="text-[12px] text-text-tertiary leading-relaxed max-w-4xl">
            fraldageriatrica.com é uma plataforma de telemedicina especializada em emissão de
            laudos médicos para uso de fralda geriátrica. Atuamos conforme a Portaria GM/MS nº
            3.073/2024 e Resolução CFM 2.314/2022. Este serviço não substitui acompanhamento médico
            regular nem realiza diagnósticos novos. A distribuição gratuita das fraldas é
            responsabilidade do Programa Farmácia Popular do Brasil; nosso serviço se limita à
            emissão do laudo médico exigido pelo programa.
          </p>
          <p className="text-[12px] text-text-tertiary">
            © 2026 fraldageriatrica.com — Operado por receitas.site. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
