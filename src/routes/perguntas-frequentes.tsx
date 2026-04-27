import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import FAQ, { faqItems } from "@/components/landing/FAQ";
import MobileCTA from "@/components/landing/MobileCTA";
import { ArrowLeft } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

const TITLE =
  "Perguntas frequentes sobre laudo de fralda geriátrica | fraldageriatrica.com";
const DESCRIPTION =
  "Tire suas dúvidas sobre o laudo médico para fralda geriátrica: quem tem direito, prazos, validade, renovação e como retirar fraldas no Programa Farmácia Popular.";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const Route = createFileRoute("/perguntas-frequentes")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/perguntas-frequentes` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/perguntas-frequentes` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
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
            Perguntas frequentes
          </h1>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            Tudo o que você precisa saber sobre o serviço, regulamentação e o seu direito ao
            benefício do Programa Farmácia Popular.
          </p>
        </section>
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}