import { Stethoscope } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-12 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="mb-4 opacity-90">
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Plataforma de telemedicina para avaliação médica e emissão de laudo de fralda
              geriátrica.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Termos
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacidade
            </a>
            <a
              href="mailto:contato@fraldageriatrica.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Bloco do responsável técnico — exigência CFM 2.314/2022 */}
        <div className="rounded-2xl bg-card border border-border p-5 mb-8 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Stethoscope className="w-5 h-5 text-primary" strokeWidth={1.75} />
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
              Responsável Técnico
            </p>
            <p className="text-sm text-foreground mt-1">Dr. [Nome] — CRM/[UF] [número]</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Diretor Técnico Médico, conforme Resolução CFM nº 2.314/2022. Razão social: [Razão
              Social] — CNPJ [00.000.000/0000-00].
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 fraldageriatrica.com — Operado por receitas.site
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-card px-3 py-1 rounded-full border border-border shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Telemedicina — CFM 2.314/2022
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-[10px] text-muted-foreground/60 text-center leading-relaxed max-w-2xl mx-auto">
            fraldageriatrica.com é uma plataforma de telemedicina especializada em emissão de
            laudos médicos para uso de fralda geriátrica, atuando conforme a Portaria GM/MS nº
            3.073/2024 e a Resolução CFM 2.314/2022. Este serviço não substitui acompanhamento
            médico regular nem realiza diagnósticos novos. A distribuição gratuita das fraldas é
            responsabilidade exclusiva do Programa Farmácia Popular do Brasil; nosso serviço se
            limita à avaliação clínica e emissão do laudo médico exigido pelo programa. A emissão
            do laudo está condicionada à indicação clínica identificada pelo médico responsável.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
