import { Stethoscope, Lock, FileCheck } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-surface-soft pt-20 pb-12 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="mb-4 opacity-90">
              <Logo />
            </div>
            <p className="text-base text-foreground/70 max-w-xs">
              Plataforma de telemedicina para avaliação médica e emissão de laudo de fralda
              geriátrica.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-base text-foreground/80 hover:text-primary transition-colors"
            >
              Termos
            </a>
            <a
              href="#"
              className="text-base text-foreground/80 hover:text-primary transition-colors"
            >
              Privacidade
            </a>
            <a
              href="mailto:contato@fraldageriatrica.com"
              className="text-base text-foreground/80 hover:text-primary transition-colors"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Selos institucionais — compliance & confiança */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl bg-card border border-border p-5">
            <div className="flex items-center gap-2 mb-2">
              <Stethoscope className="w-5 h-5 text-primary" strokeWidth={2} />
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                Responsável Técnico
              </p>
            </div>
            <p className="text-sm text-foreground font-medium">Dr. [Nome] — CRM/[UF] [número]</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Diretor Técnico Médico — Razão Social [Empresa Ltda] — CNPJ [00.000.000/0000-00].
            </p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-5">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-primary" strokeWidth={2} />
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                Segurança de Dados
              </p>
            </div>
            <p className="text-sm text-foreground font-medium">Conformidade LGPD</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Dados de saúde tratados com base legal específica e canal aberto para titulares.
            </p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-5">
            <div className="flex items-center gap-2 mb-2">
              <FileCheck className="w-5 h-5 text-primary" strokeWidth={2} />
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                Conformidade
              </p>
            </div>
            <p className="text-sm text-foreground font-medium">
              Portaria 3.073/2024 · CFM 2.314/2022
            </p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Telemedicina regulamentada e laudo conforme programa Farmácia Popular.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 fraldageriatrica.com — Operado por receitas.site
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card px-3 py-1.5 rounded-full border border-border">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Telemedicina — CFM 2.314/2022
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
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
