import { SEO } from "@/components/SEO";
import {
  Shield,
  Plus,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/landing/ScrollReveal";
import { blogPosts, BlogPostData } from "@/data/blogPosts";

// ───────────────── Constantes
const WHATSAPP = "/funil";

const PAGE_TITLE = "Blog | Fralda Geriátrica — Cuidados, Direitos e Saúde do Idoso";
const PAGE_DESC =
  "Artigos sobre cuidados com idosos, direitos pelo SUS, dicas para cuidadores e informações sobre fralda geriátrica gratuita pela Farmácia Popular.";
const CANONICAL = "https://fraldageriatrica.com/blog";

// ───────────────── Design tokens
const BG = "bg-[#070B12]";
const SURFACE = "bg-white/[0.03] border border-white/[0.07]";
const SURFACE_HOVER = "hover:border-sky-400/30 hover:bg-white/[0.05]";
const TEXT = "text-white";
const SOFT_GRADIENT =
  "bg-[radial-gradient(ellipse_at_top,hsl(210_92%_55%/0.18)_0%,transparent_55%)]";

// ───────────────── Logo
const Logo = ({ size = 32 }: { size?: number }) => (
  <div
    className="relative bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/25"
    style={{ width: size, height: size }}
  >
    <Shield className="text-[#070B12]" style={{ width: size * 0.62, height: size * 0.62 }} strokeWidth={2.25} />
    <Plus
      className="absolute text-[#070B12]"
      style={{ width: size * 0.32, height: size * 0.32 }}
      strokeWidth={3}
    />
  </div>
);

// ───────────────── Header
const Header = () => (
  <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#070B12]/70 border-b border-white/[0.06]">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="/fralda" className="flex items-center gap-2.5 group">
        <Logo size={32} />
        <span className="font-semibold text-lg tracking-tighter-custom text-white">
          fralda<span className="text-white/60 font-normal">geriátrica</span>
        </span>
      </a>

      <div className="hidden md:flex items-center gap-5">
        <a href="/fralda#como-funciona" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Como funciona</a>
        <a href="/fralda#faq" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Dúvidas</a>
        <a href="/blog" className="text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors">Blog</a>
        <Button
          asChild
          className="rounded-full bg-sky-500 hover:bg-sky-400 text-[#070B12] font-semibold gap-2"
          data-cta-id="blog-header-whatsapp"
        >
          <a href={WHATSAPP}>
            <Sparkles className="w-4 h-4" />
            Pedir meu laudo
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>

      <Button
        asChild
        size="sm"
        className="md:hidden rounded-full bg-sky-500 hover:bg-sky-400 text-[#070B12] font-semibold gap-2"
        data-cta-id="blog-header-mobile"
      >
        <a href={WHATSAPP}>
          <Sparkles className="w-4 h-4" />
          Pedir meu laudo
          <ArrowRight className="w-4 h-4" />
        </a>
      </Button>
    </div>
  </nav>
);

// ───────────────── Hero do Blog
const BlogHero = () => (
  <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
    <div className={`absolute inset-0 ${SOFT_GRADIENT} pointer-events-none`} />
    <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <ScrollReveal delay={0}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8">
          <Tag className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-xs font-medium text-white/70 tracking-tight">
            Informação para cuidadores e famílias
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tighter-custom mb-4 leading-[1.05]">
          Blog{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">
            fraldageriatrica
          </span>
        </h1>
        <p className="text-lg text-white/60 font-light max-w-2xl">
          Direitos pelo SUS, cuidados com idosos e tudo o que você precisa saber para garantir o bem-estar do seu familiar.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

// ───────────────── Card de post em destaque (com imagem lateral)
const FeaturedCard = ({ post }: { post: BlogPostData }) => (
  <ScrollReveal>
    <a
      href={`/blog/${post.slug}`}
      className={`group relative overflow-hidden rounded-3xl ${SURFACE} ${SURFACE_HOVER} flex flex-col md:flex-row transition-all duration-300 block`}
    >
      {/* Imagem */}
      <div className="md:w-[42%] shrink-0 relative overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none min-h-[220px]">
        <img
          src={post.image.srcMedium}
          alt={post.image.alt}
          width={post.image.width}
          height={post.image.height}
          fetchpriority="high"
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#070B12]/50 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/60 to-transparent md:hidden" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex-1 p-8 sm:p-10">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold uppercase tracking-widest text-sky-400">
              <Sparkles className="w-3 h-3" />
              Destaque
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
              {post.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tighter-custom mb-3 group-hover:text-sky-200 transition-colors leading-snug">
            {post.title}
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-6 max-w-xl flex-1">
            {post.description}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="text-white/20">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} de leitura
              </span>
            </div>
            <span className="hidden sm:inline-flex items-center gap-2 text-sky-400 text-sm font-semibold group-hover:gap-3 transition-all">
              Ler artigo
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </a>
  </ScrollReveal>
);

// ───────────────── Card de post comum (com imagem no topo)
const PostCard = ({ post, delay = 0 }: { post: BlogPostData; delay?: number }) => (
  <ScrollReveal delay={delay}>
    <a
      href={`/blog/${post.slug}`}
      className={`group rounded-3xl ${SURFACE} ${SURFACE_HOVER} flex flex-col h-full transition-all duration-300 block overflow-hidden`}
    >
      {/* Imagem */}
      <div className="relative overflow-hidden h-44 shrink-0">
        <img
          src={post.image.srcMedium}
          alt={post.image.alt}
          width={post.image.width}
          height={350}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/80 to-transparent" />
        <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest text-sky-400 px-2 py-0.5 rounded-full bg-[#070B12]/70 border border-sky-400/20 backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-white tracking-tight mb-2 group-hover:text-sky-200 transition-colors leading-snug flex-1">
          {post.title}
        </h3>
        <p className="text-sm text-white/55 leading-relaxed mb-5 line-clamp-3">
          {post.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 text-xs text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-white/20">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </a>
  </ScrollReveal>
);

// ───────────────── Grade de posts
const PostGrid = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="py-8 pb-24">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        <FeaturedCard post={featured} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((post, i) => (
            <PostCard key={post.slug} post={post} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ───────────────── CTA inline
const CtaBlog = () => (
  <section className="py-16 border-y border-white/[0.06]">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-500/[0.10] via-white/[0.02] to-transparent p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="absolute -top-24 right-0 w-64 h-64 bg-sky-500/15 rounded-full blur-[80px]" />
          <div className="relative z-10 flex-1 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
              Direto ao ponto
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tighter-custom mb-2">
              Já sabe que tem direito?
            </h2>
            <p className="text-white/60 font-light">
              Emita o laudo médico online em até 24h e comece a retirar a fralda grátis.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Button
              asChild
              size="lg"
              className="rounded-full px-7 py-5 bg-sky-500 hover:bg-sky-400 text-[#070B12] font-bold shadow-xl shadow-sky-500/30 hover:shadow-sky-400/50 hover:-translate-y-1 active:scale-95 transition-all duration-300 group overflow-hidden relative border border-sky-400/50"
              data-cta-id="blog-cta"
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
          <p className="text-sm text-white/50 max-w-xs">
            Telemedicina ética para famílias que cuidam.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a href="/fralda#como-funciona" className="text-white/55 hover:text-sky-400 transition-colors">Como funciona</a>
          <a href="/fralda#calculadora" className="text-white/55 hover:text-sky-400 transition-colors">Calculadora</a>
          <a href="/fralda#faq" className="text-white/55 hover:text-sky-400 transition-colors">Dúvidas</a>
          <a href="/blog" className="text-sky-400 hover:text-sky-300 transition-colors">Blog</a>
          <a href="#" className="text-white/55 hover:text-sky-400 transition-colors">Privacidade (LGPD)</a>
          <a href="#" className="text-white/55 hover:text-sky-400 transition-colors">Termos</a>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/[0.06]">
        <p className="text-xs text-white/50 leading-relaxed max-w-3xl">
          Este serviço não substitui atendimento presencial de emergência. A
          emissão do laudo está sujeita à avaliação médica individual conforme
          a Resolução CFM 2.314/2022. A fralda geriátrica é fornecida
          gratuitamente pelo programa Farmácia Popular do SUS, conforme as
          Portarias GM/MS nº 3.073/2024 e nº 937/2017; este site não
          comercializa o produto.
        </p>
        <p className="text-xs text-white/50 mt-3">
          © 2026 fraldageriatrica.com. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

// ───────────────── Page
const Blog = () => {
  return (
    <div className={`min-h-screen ${BG} ${TEXT} antialiased selection:bg-sky-500/30`}>
      <SEO 
        title={PAGE_TITLE} 
        description={PAGE_DESC} 
        canonicalPath="/blog" 
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "https://fraldageriatrica.com/fralda" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://fraldageriatrica.com/blog" }
          ]
        }}
      />
      <Header />
      <main>
        <BlogHero />
        <PostGrid />
        <CtaBlog />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
