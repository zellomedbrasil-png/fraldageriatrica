import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ComoFunciona from "@/components/landing/ComoFunciona";
import Precos from "@/components/landing/Precos";
import FAQ, { faqItems } from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const SITE_URL = "https://fraldageriatrica.com/";
const TITLE =
  "Laudo Médico para Fralda Geriátrica Online — Avaliação em 24h | fraldageriatrica.com";
const DESCRIPTION =
  "Avaliação médica por telemedicina para emissão de laudo de fralda geriátrica, em até 24h, com médico de CRM ativo. Conforme Portaria GM/MS 3.073/2024 e Resolução CFM 2.314/2022.";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "fraldageriatrica.com",
    description:
      "Plataforma de telemedicina especializada em emissão de laudo médico para uso de fralda geriátrica, conforme Portaria GM/MS nº 3.073/2024 e Resolução CFM 2.314/2022.",
    url: SITE_URL,
    medicalSpecialty: "Telemedicine",
    areaServed: { "@type": "Country", name: "Brasil" },
    employee: {
      "@type": "Person",
      name: "Diretor Técnico Médico",
      jobTitle: "Diretor Técnico — Responsável pela emissão dos laudos",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Laudo médico para fralda geriátrica",
    description:
      "Avaliação clínica via telemedicina e emissão de laudo médico para fralda geriátrica, válido por 180 dias, aceito em farmácias credenciadas do Programa Farmácia Popular.",
    provider: { "@type": "MedicalBusiness", name: "fraldageriatrica.com" },
    areaServed: { "@type": "Country", name: "Brasil" },
    offers: {
      "@type": "Offer",
      price: "59.00",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: SITE_URL + "#precos",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "laudo fralda geriátrica, fralda geriátrica grátis, farmácia popular fralda, receita fralda geriátrica online, incontinência idoso",
      },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "pt-BR" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "fraldageriatrica.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <Hero />
        <ComoFunciona />
        <Precos />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
// reload
