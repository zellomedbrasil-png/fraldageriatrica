import { Stethoscope } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-surface-soft pt-16 pb-16 border-t border-border">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div className="max-w-sm">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-[14px] text-ink-500 leading-[1.6]">
              Plataforma de telemedicina para avaliação médica e emissão de laudo de fralda
              geriátrica.
            </p>
          </div>
          <nav className="flex flex-col gap-3" aria-label="Rodapé">
            <a
              href="#como-funciona"
              className="text-[14px] font-medium text-ink-700 hover:text-primary transition-colors"
            >
              Como funciona
            </a>
            <a
              href="#precos"
              className="text-[14px] font-medium text-ink-700 hover:text-primary transition-colors"
            >
              Investimento
            </a>
            <a
              href="#faq"
              className="text-[14px] font-medium text-ink-700 hover:text-primary transition-colors"
            >
              Dúvidas
            </a>
            <a
              href="#"
              className="text-[14px] font-medium text-ink-500 hover:text-primary transition-colors"
            >
              Termos
            </a>
            <a
              href="#"
              className="text-[14px] font-medium text-ink-500 hover:text-primary transition-colors"
            >
              Privacidade
            </a>
            <a
              href="mailto:contato@fraldageriatrica.com"
              className="text-[14px] font-medium text-ink-500 hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>

        {/* Bloco do responsável técnico — exigência CFM 2.314/2022 */}
        <div className="rounded-2xl bg-white border border-border p-6 mb-8 flex items-start gap-4 shadow-sm">
          <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center shrink-0">
            <Stethoscope className="w-5 h-5 text-primary" strokeWidth={2} />
          </div>
          <div className="text-left">
            <p className="text-[12px] font-semibold text-primary uppercase tracking-[0.1em]">
              Responsável Técnico
            </p>
            <p className="text-[15px] font-semibold text-ink-900 mt-1.5">Dr. [Nome] — CRM/[UF] [número]</p>
            <p className="text-[13px] text-ink-500 mt-1 leading-[1.6]">
              Diretor Técnico Médico, conforme Resolução CFM nº 2.314/2022. Razão social: [Razão
              Social] — CNPJ [00.000.000/0000-00].
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-ink-500">
            &copy; 2026 fraldageriatrica.com — Operado por receitas.site
          </p>
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-success bg-success/10 px-3 py-1.5 rounded-full border border-success/20">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
            Telemedicina — CFM 2.314/2022
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-[12px] text-ink-500 text-center leading-[1.6] max-w-[720px] mx-auto">
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
