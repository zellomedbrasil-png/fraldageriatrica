import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ComoFunciona from "@/components/landing/ComoFunciona";
import ParaQuem from "@/components/landing/ParaQuem";
import FarmaciaPopular from "@/components/landing/FarmaciaPopular";
import MobileCTA from "@/components/landing/MobileCTA";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { WA_LINK, SITE_URL } from "@/lib/constants";

const TITLE = "Como funciona o laudo de fralda geriátrica online | fraldageriatrica.com";
const DESCRIPTION =
  "Entenda o passo a passo da telemedicina para avaliação médica e emissão do laudo de fralda geriátrica em até 24 horas, conforme Portaria GM/MS 3.073/2024.";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/como-funciona` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/como-funciona` }],
  }),
  component: ComoFuncionaPage,
});

function ComoFuncionaPage() {
  return (
    <div className="scroll-smooth">
      <Header />
      <main id="main" className="pt-24">
        <section className="max-w-3xl mx-auto px-6 pt-8 pb-4 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para a home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground tracking-tighter-custom mb-4 leading-[1.05]">
            Como funciona o laudo de fralda geriátrica online
          </h1>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            Avaliação médica por telemedicina, conforme a Resolução CFM nº 2.314/2022. Em caso de
            indicação clínica, o laudo é emitido com assinatura digital ICP-Brasil em até 24 horas.
          </p>
        </section>

        <ComoFunciona />
        <ParaQuem />
        <FarmaciaPopular />

        <section className="py-20 text-center">
          <Button asChild variant="premium" size="xl">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para solicitar avaliação médica"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar avaliação — R$ 59
            </a>
          </Button>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}