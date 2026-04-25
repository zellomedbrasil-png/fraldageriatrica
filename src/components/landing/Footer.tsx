import { MessageCircle, Mail } from "lucide-react";
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
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo />
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              Telemedicina especializada em laudos para fralda geriátrica.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/5585991275429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@fraldageriatrica.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  E-mail
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs font-semibold text-foreground">Responsável Técnico</p>
              <p className="text-xs text-muted-foreground mt-1">
                Dr. [Nome] — CRM/[UF] [número]
              </p>
              <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                Diretor Técnico responsável conforme Resolução CFM 2.314/2022.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border space-y-4">
          <p className="text-[11px] text-muted-foreground leading-relaxed max-w-4xl">
            fraldageriatrica.com é uma plataforma de telemedicina especializada em emissão de
            laudos médicos para uso de fralda geriátrica. Atuamos conforme a Portaria GM/MS nº
            3.073/2024 e Resolução CFM 2.314/2022. Este serviço não substitui acompanhamento médico
            regular nem realiza diagnósticos novos. A distribuição gratuita das fraldas é
            responsabilidade do Programa Farmácia Popular do Brasil; nosso serviço se limita à
            emissão do laudo médico exigido pelo programa.
          </p>
          <p className="text-[11px] text-muted-foreground">
            © 2026 fraldageriatrica.com — Operado por receitas.site. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;