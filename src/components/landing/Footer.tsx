import Logo from "./Logo";
import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, ShieldCheck, BadgeCheck, Lock } from "lucide-react";
import { WA_LINK } from "@/lib/constants";

const Footer = () => {
  return (
    <footer
      className="pt-20 pb-10 border-t border-border"
      style={{ background: "var(--surface-soft)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top: Logo + 4 colunas */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 lg:col-span-2 max-w-sm">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Plataforma de telemedicina para avaliação médica e emissão de laudo de fralda
              geriátrica, conforme a Portaria GM/MS nº 3.073/2024.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-white border border-border rounded-full px-2.5 py-1">
                <ShieldCheck className="w-3 h-3" strokeWidth={2.25} />
                ICP-Brasil
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-white border border-border rounded-full px-2.5 py-1">
                <BadgeCheck className="w-3 h-3" strokeWidth={2.25} />
                CFM 2.314/2022
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-white border border-border rounded-full px-2.5 py-1">
                <Lock className="w-3 h-3" strokeWidth={2.25} />
                LGPD
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-foreground uppercase tracking-[0.14em] mb-4">
              Serviço
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/como-funciona"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Como funciona
                </Link>
              </li>
              <li>
                <Link
                  to="/perguntas-frequentes"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Perguntas frequentes
                </Link>
              </li>
              <li>
                <a
                  href="/#precos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Preços
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-foreground uppercase tracking-[0.14em] mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Termos de uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  LGPD
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-foreground uppercase tracking-[0.14em] mb-4">
              Contato
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@fraldageriatrica.com"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  contato@fraldageriatrica.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Aviso legal médico */}
        <div className="border-t border-border pt-8">
          <p className="text-[11px] text-muted-foreground leading-relaxed max-w-4xl">
            <span className="font-semibold text-foreground/80">Aviso legal médico:</span>{" "}
            fraldageriatrica.com é uma plataforma de telemedicina especializada em emissão de
            laudos médicos para uso de fralda geriátrica, atuando conforme a Portaria GM/MS nº
            3.073/2024 e a Resolução CFM nº 2.314/2022. Este serviço não substitui acompanhamento
            médico regular nem realiza diagnósticos novos. A distribuição gratuita das fraldas é
            responsabilidade exclusiva do Programa Farmácia Popular do Brasil; o nosso serviço se
            limita à avaliação clínica e emissão do laudo médico exigido pelo programa. A emissão
            do laudo está condicionada à indicação clínica identificada pelo médico responsável,
            identificado no documento por nome completo e CRM.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} fraldageriatrica.com — Operado por receitas.site
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white px-3 py-1.5 rounded-full border border-border shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
            Atendimento ativo · Resposta em até 24h
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
