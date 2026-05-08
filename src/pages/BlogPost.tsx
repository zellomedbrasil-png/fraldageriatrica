import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  Shield,
  Plus,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  ChevronRight,
  AlertCircle,
  Lightbulb,
  Info,
  User,
  CheckCircle2,
  List,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/landing/ScrollReveal";
import {
  getPostBySlug,
  getRelatedPosts,
  BlogPostData,
  ContentBlock,
} from "@/data/blogPosts";

// ───────────────── Helpers
const slugify = (text: string) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');

// ───────────────── Constantes
const WHATSAPP = "/funil";
const SITE = "https://fraldageriatrica.com";

// ───────────────── Design tokens
const BG = "bg-[#070B12]";
const SURFACE = "bg-white/[0.03] border border-white/[0.07]";
const SURFACE_HOVER = "hover:border-sky-400/30 hover:bg-white/[0.05]";
const TEXT = "text-white";
const SOFT_GRADIENT =
  "bg-[radial-gradient(ellipse_at_top,hsl(210_92%_55%/0.18)_0%,transparent_55%)]";

// ───────────────── SEO Hook
const useSeo = (post: BlogPostData) => {
  useEffect(() => {
    if (!post) return;

    const title = `${post.title} | fraldageriatrica.com`;
    const canonical = `${SITE}/blog/${post.slug}`;
    const ogImage = `${SITE}/og-fralda.jpg`;

    document.title = title;
    document.documentElement.lang = "pt-BR";

    const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    upsertMeta("name", "description", post.description);
    upsertMeta("name", "keywords", post.keywords || "");
    upsertMeta("name", "theme-color", "#070B12");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", post.description);
    upsertMeta("property", "og:type", "article");
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:locale", "pt_BR");
    upsertMeta("property", "article:published_time", post.dateIso);
    if (post.lastReviewedDate) upsertMeta("property", "article:modified_time", post.lastReviewedDate);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", post.description);
    upsertMeta("name", "twitter:image", ogImage);

    let canon = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = canonical;

    // JSON-LD Article + MedicalWebPage
    const ldId = "ld-blog-post";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    
    const schemas: any[] = [
      {
        "@context": "https://schema.org",
        "@type": ["Article", "MedicalWebPage"],
        headline: post.title,
        description: post.description,
        datePublished: post.dateIso,
        dateModified: post.lastReviewedDate || post.dateIso,
        lastReviewed: post.lastReviewedDate || post.dateIso,
        url: canonical,
        image: ogImage,
        inLanguage: "pt-BR",
        publisher: {
          "@type": "MedicalBusiness",
          name: "fraldageriatrica.com",
          url: SITE,
          logo: { "@type": "ImageObject", url: `${SITE}/og-fralda.jpg` },
          telephone: "",
          areaServed: "BR",
          medicalSpecialty: "Geriatrics"
        },
        author: {
          "@type": "Person",
          name: post.authorName || "Equipe Médica fraldageriatrica.com",
          jobTitle: post.authorSpecialty,
          medicalSpecialty: "Geriatrics",
          url: SITE
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/fralda` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: canonical },
        ],
      }
    ];

    if (post.faqs && post.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      });
    }

    ld.text = JSON.stringify(schemas);
    document.head.appendChild(ld);
    
    return () => {
      document.getElementById(ldId)?.remove();
    }
  }, [post]);
};

// ───────────────── Logo
const Logo = ({ size = 32 }: { size?: number }) => (
  <div
    className="relative bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/25"
    style={{ width: size, height: size }}
  >
    <Shield className="text-[#070B12]" style={{ width: size * 0.62, height: size * 0.62 }} strokeWidth={2.25} />
    <Plus className="absolute text-[#070B12]" style={{ width: size * 0.32, height: size * 0.32 }} strokeWidth={3} />
  </div>
);

// ───────────────── Header
const Header = () => (
  <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#070B12]/70 border-b border-white/[0.06]">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="/fralda" className="flex items-center gap-2.5">
        <Logo size={32} />
        <span className="font-semibold text-lg tracking-tighter-custom text-white">
          fralda<span className="text-white/60 font-normal">geriátrica</span>
        </span>
      </a>
      <div className="hidden md:flex items-center gap-5">
        <a href="/fralda#como-funciona" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Como funciona</a>
        <a href="/fralda#faq" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Dúvidas</a>
        <a href="/blog" className="text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors">Blog</a>
        <Button asChild className="rounded-full bg-sky-500 hover:bg-sky-400 text-[#070B12] font-semibold gap-2" data-cta-id="post-header">
          <a href={WHATSAPP}>
            <Sparkles className="w-4 h-4" />
            Pedir meu laudo
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
      <Button asChild size="sm" className="md:hidden rounded-full bg-sky-500 hover:bg-sky-400 text-[#070B12] font-semibold gap-2" data-cta-id="post-header-mobile">
        <a href={WHATSAPP}>
          <Sparkles className="w-4 h-4" />
          Pedir meu laudo
        </a>
      </Button>
    </div>
  </nav>
);

// ───────────────── Breadcrumb
const Breadcrumb = ({ category, title }: { category: string; title: string }) => (
  <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/60 flex-wrap">
    <a href="/fralda" className="hover:text-white/80 transition-colors">Início</a>
    <ChevronRight className="w-3 h-3" />
    <a href="/blog" className="hover:text-white/70 transition-colors">Blog</a>
    <ChevronRight className="w-3 h-3" />
    <span className="text-sky-400">{category}</span>
    <ChevronRight className="w-3 h-3" />
    <span className="text-white/60 truncate max-w-[200px] sm:max-w-none">{title}</span>
  </nav>
);

// ───────────────── Author Block
const AuthorBlock = ({ post }: { post: BlogPostData }) => {
  if (!post.authorName) return null;
  return (
    <div className="flex items-center gap-3 mt-5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] inline-flex">
      <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center shrink-0 border border-sky-400/20">
        <User className="w-5 h-5 text-sky-400" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-white">Por {post.authorName}</span>
        <span className="text-xs text-white/50 uppercase tracking-wider font-medium">
          {post.authorSpecialty} {post.authorCrm ? `· CRM ${post.authorCrm}` : ''}
        </span>
      </div>
      <div className="ml-4 pl-4 border-l border-white/[0.08] flex flex-col">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 className="w-3 h-3" />
          <span className="text-xs font-semibold uppercase tracking-wider">Revisão Médica</span>
        </div>
        <span className="text-xs text-white/60">{post.lastReviewedDate}</span>
      </div>
    </div>
  );
};

// ───────────────── Hero do artigo
const ArticleHero = ({ post }: { post: BlogPostData }) => (
  <section className="relative pt-28 pb-0 lg:pt-36 overflow-hidden">
    <div className={`absolute inset-0 ${SOFT_GRADIENT} pointer-events-none`} />
    <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <ScrollReveal delay={0}>
        <Breadcrumb category={post.category} title={post.title} />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="mt-5 mb-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold uppercase tracking-widest text-sky-400">
            {post.category}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tighter-custom leading-[1.08] mb-5">
          {post.title}
        </h1>
        <p className="text-lg text-white/60 font-light leading-relaxed mb-6">
          {post.description}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-6 border-b border-white/[0.07]">
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="text-white/20">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} de leitura
            </span>
          </div>
        </div>
        
        <AuthorBlock post={post} />
      </ScrollReveal>

      {/* Imagem hero */}
      <ScrollReveal delay={0.2}>
        <div className="mt-8 mb-0 relative rounded-2xl overflow-hidden">
          <img
            src={post.image.src}
            alt={post.image.alt}
            width={post.image.width}
            height={post.image.height}
            fetchpriority="high"
            className="w-full object-cover max-h-[420px] rounded-2xl"
          />
          <a
            href={post.image.photographerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-3 text-xs text-white/60 hover:text-white/70 transition-colors"
          >
            Foto: {post.image.photographer} · Pexels
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// ───────────────── Table of Contents
const TableOfContents = ({ content }: { content: ContentBlock[] }) => {
  const h2Blocks = content.filter((b) => b.type === "h2") as { type: "h2"; text: string }[];
  if (h2Blocks.length === 0) return null;

  return (
    <div className="my-10 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
      <div className="flex items-center gap-2.5 mb-4 text-white">
        <List className="w-5 h-5 text-sky-400" />
        <h3 className="font-semibold tracking-tight">Neste artigo</h3>
      </div>
      <nav aria-label="Índice do artigo">
        <ul className="space-y-3">
          {h2Blocks.map((block, i) => {
            const id = slugify(block.text);
            return (
              <li key={i}>
                <a
                  href={`#${id}`}
                  className="flex items-start gap-2 text-sm text-white/60 hover:text-sky-400 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-50" />
                  <span dangerouslySetInnerHTML={{ __html: block.text }} />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

// ───────────────── Callout
const calloutConfig = {
  info: { Icon: Info, bg: "bg-sky-500/[0.07] border-sky-400/20", icon: "text-sky-400", title: "text-sky-300" },
  tip: { Icon: Lightbulb, bg: "bg-emerald-500/[0.07] border-emerald-400/20", icon: "text-emerald-400", title: "text-emerald-300" },
  warning: { Icon: AlertCircle, bg: "bg-amber-500/[0.07] border-amber-400/20", icon: "text-amber-400", title: "text-amber-300" },
};

const Callout = ({ title, body, variant }: { title: string; body: string; variant: "info" | "tip" | "warning" }) => {
  const cfg = calloutConfig[variant];
  return (
    <div className={`rounded-2xl border ${cfg.bg} p-5 flex gap-4 my-7`}>
      <cfg.Icon className={`w-5 h-5 ${cfg.icon} shrink-0 mt-0.5`} strokeWidth={1.75} />
      <div>
        <p className={`text-sm font-semibold ${cfg.title} mb-1`}>{title}</p>
        <p className="text-sm text-white/65 leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
};

// ───────────────── Tabela
const Table = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto my-7 rounded-2xl border border-white/[0.07]">
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-white/[0.07] bg-white/[0.03]">
          {headers.map((h) => (
            <th key={h} className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest text-sky-400">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={`border-b border-white/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.015]"}`}>
            {row.map((cell, j) => (
              <td key={j} className="px-5 py-3 text-white/75">
                {j === 0 ? <span className="font-semibold text-white">{cell}</span> : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ───────────────── Renderizador de bloco de conteúdo
const Block = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={slugify(block.text)} className="text-2xl sm:text-3xl font-semibold text-white tracking-tighter-custom mt-12 mb-4 leading-snug scroll-mt-24">
          <span dangerouslySetInnerHTML={{ __html: block.text }} />
        </h2>
      );
    case "h3":
      return (
        <h3 id={slugify(block.text)} className="text-xl font-semibold text-white/90 mt-8 mb-3 scroll-mt-24">
          <span dangerouslySetInnerHTML={{ __html: block.text }} />
        </h3>
      );
    case "p":
      return (
        <p
          className="text-base text-white/70 leading-[1.85] mb-5 font-light"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    case "ul":
      return (
        <ul className="space-y-3 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-base text-white/70 leading-relaxed font-light">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-3 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-base text-white/70 leading-relaxed font-light">
              <span className="font-mono text-sky-400 text-sm font-semibold shrink-0 mt-0.5 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ol>
      );
    case "callout":
      return <Callout title={block.title} body={block.body} variant={block.variant} />;
    case "table":
      return <Table headers={block.headers} rows={block.rows} />;
    default:
      return null;
  }
};

// ───────────────── Faq Section
const FaqSection = ({ post }: { post: BlogPostData }) => {
  if (!post.faqs || post.faqs.length === 0) return null;

  return (
    <div className="mt-16 pt-10 border-t border-white/[0.06]">
      <h2 className="text-2xl font-semibold text-white tracking-tighter-custom mb-6">
        Perguntas Frequentes
      </h2>
      <div className="space-y-6">
        {post.faqs.map((faq, i) => (
          <div key={i} className="group">
            <h3 className="text-lg font-medium text-white/90 mb-2">
              {faq.question}
            </h3>
            <p className="text-base text-white/60 font-light leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ───────────────── Corpo do artigo
const ArticleBody = ({ post }: { post: BlogPostData }) => (
  <section className="pb-16 pt-6">
    <div className="max-w-3xl mx-auto px-6 relative">
      <TableOfContents content={post.content} />
      <article>
        {post.content.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </article>
      <FaqSection post={post} />
      
      {/* Disclaimer de Revisão (E-E-A-T) */}
      <div className="mt-16 p-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] text-center">
        <p className="text-xs text-white/60">
          Este conteúdo tem caráter puramente informativo e não substitui a consulta médica presencial.
          {post.lastReviewedDate && (
            <span className="block mt-1">Última revisão clínica em {post.lastReviewedDate}.</span>
          )}
        </p>
      </div>
    </div>
  </section>
);

// ───────────────── CTA inline
const CtaPost = () => (
  <section className="py-12 border-y border-white/[0.06]">
    <div className="max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-500/[0.10] via-white/[0.02] to-transparent p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="absolute -top-20 right-0 w-56 h-56 bg-sky-500/15 rounded-full blur-[70px]" />
          <div className="relative z-10 flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
              Direto ao ponto
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tighter-custom mb-1.5">
              Precisa do laudo médico para fralda?
            </h2>
            <p className="text-white/60 text-sm font-light">
              Emitimos online em até 24h úteis, por apenas R$ 49. Sem sair de casa.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Button
              asChild
              size="lg"
              className="rounded-full px-7 py-5 bg-sky-500 hover:bg-sky-400 text-[#070B12] font-bold shadow-xl shadow-sky-500/30 hover:shadow-sky-400/50 hover:-translate-y-1 active:scale-95 transition-all duration-300 group overflow-hidden relative border border-sky-400/50"
              data-cta-id="post-cta"
            >
              <a href={WHATSAPP} className="flex items-center gap-2 relative">
                <span className="absolute inset-0 w-full h-full bg-white/20 blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <Sparkles className="w-5 h-5 relative z-10" />
                <span className="relative z-10 tracking-tight">Pedir meu laudo</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// ───────────────── Posts relacionados
const RelatedPosts = ({ currentSlug }: { currentSlug: string }) => {
  const related = getRelatedPosts(currentSlug, 3);
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
            Continue lendo
          </p>
          <h2 className="text-2xl font-semibold text-white tracking-tighter-custom mb-8">
            Outros artigos
          </h2>
        </ScrollReveal>
        <div className="space-y-3">
          {related.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.07}>
              <a
                href={`/blog/${post.slug}`}
                className={`group flex items-center justify-between gap-4 rounded-2xl ${SURFACE} ${SURFACE_HOVER} p-5 transition-all duration-300`}
              >
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-1 block">
                    {post.category}
                  </span>
                  <p className="text-sm font-medium text-white group-hover:text-sky-200 transition-colors truncate">
                    {post.title}
                  </p>
                  <span className="text-xs text-white/60">{post.readTime} de leitura</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-sky-400 group-hover:translate-x-1 shrink-0 transition-all" />
              </a>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.25}>
          <div className="mt-6 text-center">
            <a href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-sky-400 transition-colors">
              Ver todos os artigos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// ───────────────── Voltar ao topo
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 backdrop-blur-md hover:bg-sky-500/20 transition-all shadow-lg shadow-sky-500/5 group"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};

// ───────────────── Footer
const Footer = () => (
  <footer className="pt-16 pb-12 border-t border-white/[0.06]">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Logo size={24} />
            <span className="font-semibold text-base tracking-tighter-custom text-white">
              fraldageriatrica.com
            </span>
          </div>
          <p className="text-sm text-white/50 max-w-xs">Telemedicina ética para famílias que cuidam.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a href="/fralda#como-funciona" className="text-white/55 hover:text-sky-400 transition-colors">Como funciona</a>
          <a href="/fralda#faq" className="text-white/55 hover:text-sky-400 transition-colors">Dúvidas</a>
          <a href="/blog" className="text-sky-400 hover:text-sky-300 transition-colors">Blog</a>
          <a href="#" className="text-white/55 hover:text-sky-400 transition-colors">Privacidade (LGPD)</a>
          <a href="#" className="text-white/55 hover:text-sky-400 transition-colors">Termos</a>
        </div>
      </div>
      <div className="pt-6 border-t border-white/[0.06]">
        <p className="text-xs text-white/50 leading-relaxed max-w-3xl">
          Conteúdo informativo. Não substitui atendimento presencial de emergência ou consulta médica. A emissão do laudo está sujeita à avaliação médica individual conforme a Resolução CFM 2.314/2022. A fralda geriátrica é fornecida gratuitamente pelo programa Farmácia Popular do SUS, conforme as Portarias GM/MS nº 3.073/2024 e nº 937/2017.
        </p>
        <p className="text-xs text-white/50 mt-3">
          © 2026 fraldageriatrica.com. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

// ───────────────── Page
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useSeo(post as BlogPostData);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className={`min-h-screen ${BG} ${TEXT} antialiased selection:bg-sky-500/30`}>
      <Header />
      <main>
        <ArticleHero post={post} />
        <ArticleBody post={post} />
        <CtaPost />
        <RelatedPosts currentSlug={post.slug} />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogPost;
