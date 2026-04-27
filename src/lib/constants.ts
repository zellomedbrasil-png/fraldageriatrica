export const PRICE_BRL = 59;
export const PRICE_LABEL = "R$ 59";

const WA_NUMBER = "5585991275429";
const WA_MESSAGE = "Quero solicitar a avaliação médica para laudo de fralda geriátrica.";

export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export const SITE_URL = "https://fraldageriatrica.com";
export const SITE_NAME = "fraldageriatrica.com";

/**
 * Lightweight analytics event helper.
 * Pushes to window.dataLayer if GTM is present; otherwise no-op.
 */
export type AnalyticsLocation =
  | "hero"
  | "header"
  | "header_mobile"
  | "precos"
  | "faq"
  | "sticky_mobile"
  | "para_quem"
  | "farmacia_popular";

export function trackCtaClick(location: AnalyticsLocation) {
  if (typeof window === "undefined") return;
  // @ts-expect-error - dataLayer is injected by GTM when present
  const dl = (window.dataLayer = window.dataLayer || []);
  dl.push({ event: "cta_click", location });
  dl.push({ event: "whatsapp_open", location });
}