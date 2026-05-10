import { useEffect, useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  Shield,
  Plus,
  ArrowRight,
  ArrowLeft,
  Check,
  Lock,
  ShieldCheck,
  CreditCard,
  MessageCircle,
  Sparkles,
  AlertTriangle,
  Scale,
  HeartPulse,
  Wallet,
  Users,
  UserRound,
  HeartHandshake,
  User,
  Calendar,
  Accessibility,
  Droplet,
  Droplets,
  RefreshCw,
  BedDouble,
  TrendingDown,
  PiggyBank,
  Search,
  Building2,
  Moon,
  Sun,
  Repeat,
  HelpCircle,
  Lightbulb,
  Package,
  IdCard,
  Copy,
  QrCode,
  Smartphone,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ───────────── Config
const TOTAL = 11;
const PRECO_LAUDO = 49;
const INFINITEPAY_LINK = "https://checkout.infinitepay.io/zellomed/fUAoB8O8VE";

// ───────────── PIX nativo
const PIX_KEY = "contato@fraldageriatrica.com";
const PIX_NAME = "FraldaGeriatrica";
const PIX_CITY = "Fortaleza";

const _emv = (id: string, v: string) => `${id}${v.length.toString().padStart(2,"0")}${v}`;
const genPixPayload = (key: string, amount: number, txid: string): string => {
  if (!key) return "";
  const mai = _emv("00","BR.GOV.BCB.PIX") + _emv("01", key);
  const body =
    _emv("00","01") +
    _emv("26", mai) +
    _emv("52","0000") +
    _emv("53","986") +
    _emv("54", amount.toFixed(2)) +
    _emv("58","BR") +
    _emv("59", PIX_NAME.slice(0,25)) +
    _emv("60", PIX_CITY.slice(0,15)) +
    _emv("62", _emv("05", txid.replace(/\W/g,"").slice(0,25))) +
    "6304";
  let c = 0xffff;
  for (const ch of body) { c ^= ch.charCodeAt(0) << 8; for (let i=0;i<8;i++) c=(c&0x8000)?(c<<1)^0x1021:c<<1; }
  return body + (c & 0xffff).toString(16).toUpperCase().padStart(4,"0");
};
const WA_NUMBER = "5585991275429";
const WA_LINK = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const WEBHOOK_URL = "https://hook.us2.make.com/79ejyf1e4xsaeifc1r7adfhaa7gha8s4";
const submitLead = async (state: State, orderId: string) => {
  if (!WEBHOOK_URL) return;
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        orderId,
        nome: state.nome,
        cpf: state.cpf,
        whatsapp: state.whatsapp,
        email: state.email,
        paraQuem: state.paraQuem,
        idade: state.idade,
        condicao: state.condicao,
        gastoMensal: state.gasto,
        tamanho: state.tamanho,
        frequencia: state.freq,
        origem: "Fralda Geriatrica SUS",
        data: new Date().toISOString()
      }),
    });
  } catch (e) {
    console.error("Erro ao enviar lead", e);
  }
};

// ───────────── SEO
const PAGE_TITLE =
  "Funil guiado · Solicite o laudo para fralda gratuita pelo SUS";
const PAGE_DESC =
  "Em 10 passos rápidos descubra se sua família tem direito à fralda geriátrica gratuita pelo SUS e receba o laudo médico em até 24h.";
const CANONICAL = "https://fraldageriatrica.com/funil";

const useSeo = () => {
  useEffect(() => {
    document.title = PAGE_TITLE;
    document.documentElement.lang = "pt-BR";
    const upsert = (
      attr: "name" | "property",
      key: string,
      content: string,
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`,
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    upsert("name", "description", PAGE_DESC);
    upsert("property", "og:title", PAGE_TITLE);
    upsert("property", "og:description", PAGE_DESC);
    upsert("property", "og:type", "website");
    upsert("property", "og:url", CANONICAL);
    let canonical =
      document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = CANONICAL;
  }, []);
};

// ───────────── Tokens locais (mesma estética do /fralda)
const BG = "bg-[#070B12]";
const SURFACE = "bg-white/[0.03] border border-white/[0.07]";
const SOFT_GRADIENT =
  "bg-[radial-gradient(ellipse_at_top,hsl(210_92%_55%/0.18)_0%,transparent_55%)]";

// ───────────── Helpers de máscara/validação
const onlyDigits = (s: string) => s.replace(/\D/g, "");

const formatCPF = (raw: string) => {
  const v = onlyDigits(raw).slice(0, 11);
  if (v.length > 9)
    return v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
  if (v.length > 6) return v.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
  if (v.length > 3) return v.replace(/(\d{3})(\d{1,3})/, "$1.$2");
  return v;
};

const validateCPF = (cpfRaw: string) => {
  const cpf = onlyDigits(cpfRaw);
  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;
  let sum = 0;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1]) * (11 - i);
  let rem = (sum * 10) % 11;
  if (rem === 10 || rem === 11) rem = 0;
  if (rem !== parseInt(cpf[9])) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf[i - 1]) * (12 - i);
  rem = (sum * 10) % 11;
  if (rem === 10 || rem === 11) rem = 0;
  return rem === parseInt(cpf[10]);
};

const formatPhone = (raw: string) => {
  const v = onlyDigits(raw).slice(0, 11);
  if (v.length > 6)
    return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
  if (v.length > 2) return `(${v.slice(0, 2)}) ${v.slice(2)}`;
  if (v.length > 0) return `(${v}`;
  return "";
};

// ───────────── Tipos
type Tamanho = "P" | "M" | "G" | "EG";
type Freq = "3-5" | "6-8" | "8+" | "nao-sei";

type State = {
  step: number;
  paraQuem: string;
  idade: string;
  condicao: string;
  gasto: string;
  tamanho: Tamanho | "";
  freq: Freq | "";
  nome: string;
  cpf: string;
  whatsapp: string;
  email: string;
};

const initial: State = {
  step: 1,
  paraQuem: "",
  idade: "",
  condicao: "",
  gasto: "",
  tamanho: "",
  freq: "",
  nome: "",
  cpf: "",
  whatsapp: "",
  email: "",
};

const FREQ_LABELS: Record<Freq, string> = {
  "3-5": "3 a 5 fraldas / dia",
  "6-8": "6 a 8 fraldas / dia",
  "8+": "8 ou mais fraldas / dia",
  "nao-sei": "A definir pelo médico",
};
const FREQ_ECONOMIA: Record<Freq, number> = {
  "3-5": 3600,
  "6-8": 4800,
  "8+": 6000,
  "nao-sei": 4800,
};

// ───────────── Componentes UI

const Logo = () => (
  <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
    <div className="relative w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
      <Shield className="w-5 h-5" strokeWidth={2} />
      <Plus
        className="absolute w-3 h-3 text-sky-300"
        strokeWidth={3}
      />
    </div>
    <div className="leading-tight">
      <div className="text-white font-semibold tracking-tight">
        fralda<span className="text-white/50">geriátrica</span>
      </div>
      <div className="text-[11px] uppercase tracking-[0.14em] text-white/40">
        Direito ao SUS · Telemedicina
      </div>
    </div>
  </a>
);

const ProgressBar = ({ step }: { step: number }) => {
  const pct = Math.round((step / TOTAL) * 100);
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 mt-6" aria-label={`Etapa ${step} de ${TOTAL}`}>
      <div className="flex items-center justify-between mb-2 text-[11px] uppercase tracking-[0.16em] text-white/45 font-mono">
        <span>
          Etapa {String(step).padStart(2, "0")}{" "}
          <span className="text-white/25">/ {TOTAL}</span>
        </span>
        <span className="text-sky-400">{pct}%</span>
      </div>
      <div className="h-1 w-full rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-500 to-sky-300 transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

type OptionDef = { value: string; title: string; sub?: string; icon?: React.ReactNode };

const OptionList = ({
  options,
  selected,
  onSelect,
}: {
  options: OptionDef[];
  selected: string;
  onSelect: (v: string) => void;
}) => (
  <div className="grid gap-2.5 sm:gap-3" role="radiogroup">
    {options.map((o) => {
      const active = selected === o.value;
      return (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={active}
          onClick={() => onSelect(o.value)}
          className={`group relative flex items-center gap-3 sm:gap-4 text-left rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 transition-all border ${active
              ? "bg-sky-500/[0.08] border-sky-400/60 ring-1 ring-sky-400/40"
              : "bg-white/[0.025] border-white/[0.07] hover:border-sky-400/40 hover:bg-white/[0.05]"
            }`}
        >
          <div
            className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${active
                ? "bg-sky-500/20 text-sky-300 border border-sky-400/40"
                : "bg-white/[0.04] text-white/70 border border-white/[0.07]"
              }`}
          >
            {o.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-medium tracking-tight text-[15px] sm:text-base">
              {o.title}
            </div>
            {o.sub && (
              <div className="text-xs text-white/45 mt-0.5 leading-snug">{o.sub}</div>
            )}
          </div>
          <div
            className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center ${active
                ? "border-sky-400 bg-sky-400 text-slate-950"
                : "border-white/20"
              }`}
          >
            {active && <Check className="w-3 h-3" strokeWidth={3} />}
          </div>
        </button>
      );
    })}
  </div>
);

const StepHeader = ({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) => (
  <div className="mb-7">
    <div className="text-[11px] uppercase tracking-[0.16em] text-sky-400/80 font-mono mb-3">
      {eyebrow}
    </div>
    <h2 className="text-2xl sm:text-3xl text-white font-semibold tracking-tighter-custom leading-tight">
      {title}
    </h2>
    {desc && (
      <p className="text-white/55 text-[15px] leading-relaxed mt-3 max-w-prose">
        {desc}
      </p>
    )}
  </div>
);

const InfoNote = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex gap-3 items-start rounded-xl bg-sky-500/[0.06] border border-sky-400/20 px-4 py-3 mb-5 text-sm text-white/70 leading-relaxed">
    <div className="text-sky-400 shrink-0 mt-0.5">{icon}</div>
    <div>{children}</div>
  </div>
);

const PrimaryBtn = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    size="lg"
    className="w-full mt-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold gap-2 disabled:opacity-40"
  >
    {children}
    <ArrowRight className="w-4 h-4" />
  </Button>
);

const BackBtn = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="mt-3 w-full text-center text-xs text-white/40 hover:text-white/70 transition-colors py-2 inline-flex items-center justify-center gap-1.5"
  >
    <ArrowLeft className="w-3 h-3" /> Voltar
  </button>
);

// ───────────── Página
const Funil = () => {
  useSeo();
  const [s, setS] = useState<State>(initial);

  // Persistência leve em sessionStorage
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("funil-fralda");
      if (saved) setS(JSON.parse(saved));
    } catch { }
  }, []);
  useEffect(() => {
    try {
      sessionStorage.setItem("funil-fralda", JSON.stringify(s));
    } catch { }
  }, [s]);

  const goto = (n: number) => {
    setS((p) => ({ ...p, step: Math.max(1, Math.min(TOTAL, n)) }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const choose =
    (key: keyof State, nextStep: number) => (v: string) => {
      setS((p) => ({ ...p, [key]: v }));
      setTimeout(() => goto(nextStep), 320);
    };

  const cpfOk = useMemo(() => validateCPF(s.cpf), [s.cpf]);
  const nomeOk = useMemo(
    () => s.nome.trim().split(/\s+/).filter(Boolean).length >= 2,
    [s.nome],
  );
  const whatsOk = onlyDigits(s.whatsapp).length >= 10;

  const economia = s.freq ? FREQ_ECONOMIA[s.freq] : 4800;
  const [orderId] = useState(
    () => "FG-" + (Date.now() % 1000000).toString().padStart(6, "0"),
  );
  const [payMethod, setPayMethod] = useState<"pix" | "card" | "">("");
  const [copied, setCopied] = useState(false);

  const pixPayload = useMemo(
    () => genPixPayload(PIX_KEY, PRECO_LAUDO, orderId),
    [orderId]
  );

  const copyPix = () => {
    navigator.clipboard.writeText(pixPayload).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className={`${BG} min-h-screen text-white relative overflow-hidden`}>
      {/* Glow de topo */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[520px] ${SOFT_GRADIENT}`}
      />

      {/* Editorial band */}
      <div className="relative z-10 w-full bg-white/[0.04] border-b border-white/[0.06] py-2.5 text-center text-xs text-white/60 tracking-wide">
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-70" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-400" />
          </span>
          Atendimento médico online · Laudo emitido em até 24h úteis
        </span>
      </div>

      {/* Header */}
      <header className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 pt-6 sm:pt-7 flex items-center justify-between gap-3">
        <Logo />
        <div className="text-right text-[10px] sm:text-[11px] text-white/45 leading-tight font-mono shrink-0">
          <div className="text-white/70 font-semibold">CRM ativo</div>
          <div className="hidden sm:block">CFM 2.314/2022</div>
        </div>
      </header>

      <ProgressBar step={s.step} />

      {/* Card */}
      <main className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 mt-6 pb-16">
        <div
          className={`${SURFACE} rounded-3xl backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] p-5 sm:p-8 md:p-10 animate-fade-in`}
          key={s.step}
        >
          {/* STEP 1 */}
          {s.step === 1 && (
            <section>
              <StepHeader
                eyebrow="Etapa 01 · Elegibilidade"
                title={
                  <>
                    Você está solicitando para{" "}
                    <em className="text-sky-400 not-italic">quem?</em>
                  </>
                }
                desc="Vamos verificar se há direito ao benefício gratuito garantido pela legislação federal."
              />
              <OptionList
                selected={s.paraQuem}
                onSelect={choose("paraQuem", 2)}
                options={[
                  { value: "mae-pai", icon: <Users className="w-5 h-5" />, title: "Para minha mãe ou pai", sub: "O caso mais comum" },
                  { value: "avo", icon: <UserRound className="w-5 h-5" />, title: "Para meu avô ou avó", sub: "Cuidando de quem cuidou de você" },
                  { value: "familiar", icon: <HeartHandshake className="w-5 h-5" />, title: "Para um familiar ou paciente", sub: "Outro grau de parentesco" },
                  { value: "eu", icon: <User className="w-5 h-5" />, title: "Para mim mesmo(a)", sub: "Solicitação para uso próprio" },
                ]}
              />
            </section>
          )}

{/* STEP 2 */}
          {s.step === 2 && (
            <section>
              <StepHeader
                eyebrow="Etapa 02 · Condição clínica"
                title={
                  <>
                    Apresenta alguma <em className="text-sky-400 not-italic">dessas condições?</em>
                  </>
                }
                desc="Estas são as condições clínicas que o laudo médico vai documentar para liberar o benefício."
              />
              <InfoNote icon={<Scale className="w-4 h-4" />}>
                Cobertas pela <strong className="text-white">Portaria GM/MS nº 3.073/2024</strong> — basta uma delas para garantir o direito.
              </InfoNote>
              <OptionList
                selected={s.condicao}
                onSelect={choose("condicao", 3)}
                options={[
                  { value: "urinaria", icon: <Droplet className="w-5 h-5" />, title: "Incontinência urinária", sub: "Perda involuntária de urina" },
                  { value: "fecal", icon: <Droplets className="w-5 h-5" />, title: "Incontinência fecal", sub: "Perda involuntária de fezes" },
                  { value: "mista", icon: <RefreshCw className="w-5 h-5" />, title: "Incontinência mista", sub: "Urinária e fecal" },
                  { value: "acamado", icon: <BedDouble className="w-5 h-5" />, title: "Acamado(a) ou imobilizado(a)", sub: "Mobilidade reduzida" },
                ]}
              />
              <BackBtn onClick={() => goto(1)} />
            </section>
          )}

          {/* STEP 2 */}
          {s.step === 3 && (
            <section>
              <StepHeader
                eyebrow="Etapa 03 · Situação atual"
                title={
                  <>
                    Hoje, vocês já <em className="text-sky-400 not-italic">compram</em> fralda?
                  </>
                }
                desc="Queremos entender o quanto sua família está gastando — e o que você vai parar de pagar."
              />
              <OptionList
                selected={s.gasto}
                onSelect={choose("gasto", 4)}
                options={[
                  { value: "alto", icon: <TrendingDown className="w-5 h-5" />, title: "Sim, mais de R$ 300 por mês", sub: "Pesa bastante no orçamento" },
                  { value: "economiza", icon: <PiggyBank className="w-5 h-5" />, title: "Sim, tentamos economizar", sub: "Difícil, mas a gente se vira" },
                  { value: "preparando", icon: <Search className="w-5 h-5" />, title: "Ainda não, mas já está precisando", sub: "Estamos nos preparando" },
                  { value: "outro", icon: <Building2 className="w-5 h-5" />, title: "Conseguimos por outro meio", sub: "Burocrático e demorado" },
                ]}
              />
              <BackBtn onClick={() => goto(2)} />
            </section>
          )}

          {/* STEP 4 — Educacional */}
          {s.step === 4 && (
            <section>
              <StepHeader
                eyebrow="Etapa 04 · Antes de continuar"
                title={
                  <>
                    Uma <em className="text-sky-400 not-italic">dúvida</em> que quase todo mundo tem
                  </>
                }
                desc="Muitas famílias confundem o que é gratuito e o que é pago. Vamos deixar claro de uma vez."
              />

              <div className={`${SURFACE} rounded-2xl p-5 sm:p-6 mb-4`}>
                <div className="text-[11px] uppercase tracking-[0.16em] text-sky-400/80 font-mono mb-4">
                  Como funciona, na prática
                </div>
                <ul className="space-y-4 text-sm text-white/75 leading-relaxed">
                  <li className="flex gap-3">
                    <Check className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-white">A fralda é 100% gratuita.</strong> Você paga <strong className="text-white">apenas a emissão do laudo médico particular</strong> (obrigatório por lei).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Calendar className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-white">Um único laudo garante 6 meses de fraldas.</strong> E você pode retirar até 4 fraldas/dia na Farmácia Popular.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>
                      A Farmácia Popular <span className="text-amber-300">não entrega a fralda sem o laudo válido</span>, mesmo sendo um direito garantido.
                    </span>
                  </li>
                </ul>
              </div>

              

              <PrimaryBtn onClick={() => goto(5)}>
                Entendi · quero meu laudo
              </PrimaryBtn>
              <BackBtn onClick={() => goto(3)} />
            </section>
          )}

          {/* STEP 5 — Tamanho */}
          {s.step === 5 && (
            <section>
              <StepHeader
                eyebrow="Etapa 05 · Personalização"
                title={
                  <>
                    Qual o <em className="text-sky-400 not-italic">tamanho</em> da fralda?
                  </>
                }
                desc="Essa informação vai diretamente no laudo. O tamanho correto evita recusa na farmácia."
              />
              <InfoNote icon={<AlertTriangle className="w-4 h-4" />}>
                Em caso de dúvida ou peso oscilante, escolha o tamanho{" "}
                <strong className="text-white">imediatamente acima</strong>.
              </InfoNote>
              <OptionList
                selected={s.tamanho}
                onSelect={(v) => {
                  setS((p) => ({ ...p, tamanho: v as Tamanho }));
                  setTimeout(() => goto(6), 320);
                }}
                options={[
                  { value: "P", icon: <span className="font-semibold text-base">P</span>, title: "Pequeno", sub: "40 a 60 kg · cintura 60–80 cm" },
                  { value: "M", icon: <span className="font-semibold text-base">M</span>, title: "Médio", sub: "55 a 80 kg · cintura 80–110 cm" },
                  { value: "G", icon: <span className="font-semibold text-base">G</span>, title: "Grande", sub: "75 a 100 kg · cintura 110–135 cm" },
                  { value: "EG", icon: <span className="font-semibold text-sm">EG</span>, title: "Extra Grande", sub: "95 a 130 kg · cintura > 135 cm" },
                ]}
              />
              <BackBtn onClick={() => goto(4)} />
            </section>
          )}

          {/* STEP 6 — Frequência */}
          {s.step === 6 && (
            <section>
              <StepHeader
                eyebrow="Etapa 06 · Quantidade"
                title={
                  <>
                    Com que <em className="text-sky-400 not-italic">frequência</em> usa por dia?
                  </>
                }
                desc="Define a quantidade prescrita no laudo. Quanto maior a necessidade, mais a Farmácia Popular fornece."
              />
              <InfoNote icon={<Package className="w-4 h-4" />}>
                <strong className="text-white">Como funciona o fornecimento:</strong> SUS libera até <strong className="text-white">4 fraldas/dia</strong> — você retira <strong className="text-white">até 40 a cada 10 dias</strong> na farmácia.
              </InfoNote>
              <OptionList
                selected={s.freq}
                onSelect={(v) => {
                  setS((p) => ({ ...p, freq: v as Freq }));
                  setTimeout(() => goto(7), 320);
                }}
                options={[
                  { value: "3-5", icon: <Moon className="w-5 h-5" />, title: "Apenas à noite", sub: "3 a 5 fraldas por dia" },
                  { value: "6-8", icon: <Sun className="w-5 h-5" />, title: "Durante o dia também", sub: "6 a 8 fraldas por dia" },
                  { value: "8+", icon: <Repeat className="w-5 h-5" />, title: "Uso contínuo", sub: "Acamado(a) — 8 ou mais por dia" },
                  { value: "nao-sei", icon: <HelpCircle className="w-5 h-5" />, title: "Não sei ao certo", sub: "O médico avalia e prescreve" },
                ]}
              />
              <BackBtn onClick={() => goto(5)} />
            </section>
          )}

          {/* STEP 7 — Nome + CPF */}
          {s.step === 7 && (
            <section>
              <StepHeader
                eyebrow="Etapa 07 · Dados do paciente"
                title={
                  <>
                    Para emitir o <em className="text-sky-400 not-italic">laudo oficial</em>
                  </>
                }
                desc="Os dados do paciente precisam estar exatos no laudo para ser aceito na Farmácia Popular."
              />
              <InfoNote icon={<Lock className="w-4 h-4" />}>
                Seus dados são tratados sob <strong className="text-white">sigilo médico</strong> e protegidos pela LGPD. Nunca compartilhamos com terceiros.
              </InfoNote>

              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.14em] text-white/45 font-mono mb-2 block">
                    Nome completo do paciente
                  </label>
                  <Input
                    value={s.nome}
                    maxLength={120}
                    onChange={(e) => setS((p) => ({ ...p, nome: e.target.value }))}
                    placeholder="Ex: Maria Aparecida Silva"
                    className="bg-white/[0.04] border-white/[0.10] text-white h-12 placeholder:text-white/30"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.14em] text-white/45 font-mono mb-2 block">
                    CPF do paciente
                  </label>
                  <Input
                    value={s.cpf}
                    inputMode="numeric"
                    maxLength={14}
                    onChange={(e) =>
                      setS((p) => ({ ...p, cpf: formatCPF(e.target.value) }))
                    }
                    placeholder="000.000.000-00"
                    className={`bg-white/[0.04] border-white/[0.10] text-white h-12 placeholder:text-white/30 ${s.cpf && !cpfOk ? "border-rose-400/60" : ""
                      } ${cpfOk ? "border-sky-400/60" : ""}`}
                  />
                  <div
                    className={`text-xs mt-2 ${cpfOk
                        ? "text-sky-400"
                        : s.cpf
                          ? "text-rose-300"
                          : "text-white/40"
                      }`}
                  >
                    {cpfOk
                      ? "✓ CPF válido"
                      : s.cpf && onlyDigits(s.cpf).length === 11
                        ? "CPF inválido — verifique os números"
                        : "Será usado apenas no laudo médico."}
                  </div>
                </div>
              </div>

              <PrimaryBtn
                onClick={() => goto(8)}
                disabled={!(nomeOk && cpfOk)}
              >
                Continuar
              </PrimaryBtn>
              <BackBtn onClick={() => goto(6)} />
            </section>
          )}

          {/* STEP 8 — WhatsApp + Email + Resumo */}
          {s.step === 8 && (
            <section>
              {/* Resumo movido da Etapa 11 para cá */}
              <div className={`${SURFACE} rounded-2xl p-5 mb-8`}>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-white/45 font-mono">
                    Resumo do pedido
                  </span>
                  <span className="text-[11px] font-mono text-white/35">#{orderId}</span>
                </div>
                <dl className="text-sm divide-y divide-white/[0.05]">
                  {[
                    ["Paciente", s.nome || "—"],
                    ["CPF", s.cpf || "—"],
                    ["Tamanho da fralda", s.tamanho ? `Tamanho ${s.tamanho}` : "—"],
                    ["Frequência de uso", s.freq ? FREQ_LABELS[s.freq] : "—"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2.5 gap-4">
                      <dt className="text-white/45">{k}</dt>
                      <dd className="text-white text-right truncate max-w-[60%]">{v}</dd>
                    </div>
                  ))}
                  <div className="flex justify-between py-2.5 gap-4">
                    <dt className="text-white/45">Entrega do laudo</dt>
                    <dd className="text-sky-400 text-right">Em até 24h após confirmação</dd>
                  </div>
                </dl>
              </div>

              <StepHeader
                eyebrow="Etapa 08 · Contato"
                title={
                  <>
                    Onde <em className="text-sky-400 not-italic">enviamos</em> o laudo?
                  </>
                }
                desc="O laudo digital chega no seu WhatsApp em até 24 horas após a confirmação do pagamento."
              />
              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.14em] text-white/45 font-mono mb-2 block">
                    WhatsApp para receber o laudo
                  </label>
                  <Input
                    value={s.whatsapp}
                    inputMode="numeric"
                    maxLength={15}
                    onChange={(e) =>
                      setS((p) => ({
                        ...p,
                        whatsapp: formatPhone(e.target.value),
                      }))
                    }
                    placeholder="(00) 00000-0000"
                    className="bg-white/[0.04] border-white/[0.10] text-white h-12 placeholder:text-white/30"
                  />
                  <div className="text-xs text-white/40 mt-2">
                    Use um número que você consulta com frequência.
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.14em] text-white/45 font-mono mb-2 block">
                    E-mail <span className="text-white/30 lowercase normal-case tracking-normal ml-1">(opcional)</span>
                  </label>
                  <Input
                    type="email"
                    value={s.email}
                    onChange={(e) =>
                      setS((p) => ({
                        ...p,
                        email: e.target.value,
                      }))
                    }
                    placeholder="seu.email@exemplo.com"
                    className="bg-white/[0.04] border-white/[0.10] text-white h-12 placeholder:text-white/30"
                  />
                </div>
              </div>

              <PrimaryBtn
                onClick={() => {
                  submitLead(s, orderId);
                  goto(9);
                }}
                disabled={!whatsOk}
              >
                Gerar meu laudo médico
              </PrimaryBtn>
              <BackBtn onClick={() => goto(7)} />
            </section>
          )}

          {/* STEP 9 — Preview do Laudo */}
          {s.step === 9 && (
            <section>
              <StepHeader
                eyebrow="Etapa 09 · Documento Gerado"
                title={
                  <>
                    Seu <em className="text-sky-400 not-italic">laudo médico</em> está quase pronto
                  </>
                }
                desc="Aqui está a simulação do seu documento. O parecer médico e a assinatura serão liberados logo após a emissão."
              />

              {/* Document Paper */}
              <div className="bg-[#fcfdfd] rounded-t-xl rounded-b-md p-5 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden mb-6 text-slate-900 border border-slate-200 border-t-4 border-t-sky-500">
                
                {/* Marca d'água sutil */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                  <Shield className="w-64 h-64" />
                </div>

                {/* Header do Laudo */}
                <div className="flex items-center justify-between mb-6 pb-5 border-b border-slate-200 relative">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                      <Shield className="w-5 h-5" strokeWidth={2} />
                      <Plus className="absolute w-2.5 h-2.5 text-sky-400" strokeWidth={3} />
                    </div>
                    <div className="leading-tight text-left">
                      <div className="text-slate-800 font-bold tracking-tight text-[15px]">
                        fralda<span className="text-slate-400 font-medium">geriátrica</span>
                      </div>
                      <div className="text-[8px] uppercase tracking-[0.16em] text-slate-400 font-semibold mt-0.5">
                        Direito ao SUS · Telemedicina
                      </div>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <h3 className="font-bold text-[13px] tracking-widest uppercase text-slate-800">Laudo Médico</h3>
                    <p className="text-[9px] text-slate-400 font-mono tracking-widest mt-0.5">USO CONTÍNUO</p>
                  </div>
                </div>

                {/* Dados do Paciente (Legíveis) */}
                <div className="space-y-3.5 mb-8 relative">
                  <div className="flex justify-between items-end border-b border-dotted border-slate-300 pb-1.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Paciente</span>
                    <span className="text-[13px] font-bold truncate max-w-[70%] text-slate-800 uppercase">{s.nome || "—"}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-dotted border-slate-300 pb-1.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">CPF</span>
                    <span className="text-[13px] font-bold text-slate-800">{s.cpf || "—"}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-dotted border-slate-300 pb-1.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Prescrição</span>
                    <span className="text-[13px] font-bold text-slate-800 uppercase">Fralda Geriátrica - Tam. {s.tamanho || "—"}</span>
                  </div>
                </div>

                {/* Área Desfocada */}
                <div className="relative">
                  <div className="blur-[4.5px] opacity-60 select-none pointer-events-none space-y-4">
                    <p className="text-[13px] text-justify leading-relaxed text-slate-700">
                      Atesto para os devidos fins que o(a) paciente acima identificado(a) encontra-se sob meus cuidados médicos, apresentando quadro clínico compatível com incontinência crônica e necessidade contínua e ininterrupta do uso de fraldas geriátricas descartáveis. A condição requer atenção higiênica rigorosa para prevenção de lesões dermatológicas associadas à umidade.
                    </p>
                    <p className="text-[13px] text-justify leading-relaxed text-slate-700">
                      De acordo com os protocolos estabelecidos pela Portaria GM/MS nº 3.073/2024 e normativas correlatas, prescrevo a dispensação mensal de unidades na quantidade estipulada, visando à manutenção da dignidade e integridade física do paciente em domicílio.
                    </p>
                    <div className="mt-10 flex items-end justify-between px-2">
                      <div className="w-16 h-16 border-2 border-slate-300 p-1 rounded-sm">
                        <div className="w-full h-full bg-slate-300 rounded-sm"></div>
                      </div>
                      <div className="w-56 border-t-2 border-slate-400 text-center pt-2">
                        <div className="w-40 h-8 bg-slate-300/50 rounded-full mx-auto mb-2 skew-x-12"></div>
                        <p className="text-[11px] uppercase font-bold text-slate-800 tracking-wider">Assinatura Digital Médica</p>
                        <p className="text-[9px] text-slate-500 mt-0.5">CRM / Validação ICP-Brasil</p>
                      </div>
                    </div>
                  </div>

                  {/* Overlay Clicável */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 backdrop-blur-[1px]">
                    <button 
                      onClick={() => goto(10)}
                      className="bg-slate-900/95 text-white rounded-2xl p-6 text-center w-full max-w-[280px] sm:max-w-[320px] shadow-[0_15px_50px_-10px_rgba(14,165,233,0.4)] backdrop-blur-md border border-sky-500/30 cursor-pointer hover:bg-slate-800 hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(14,165,233,0.5)] hover:border-sky-400 transition-all duration-300 group"
                    >
                      <div className="relative w-14 h-14 bg-sky-500/10 border border-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-500/20 transition-colors">
                        <Lock className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 rounded-full border border-sky-400/50 animate-ping opacity-20"></div>
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-sky-400 mb-2.5">
                        Laudo Médico Gerado
                      </p>
                      <p className="text-[13px] text-slate-300 leading-snug px-1">
                        O seu documento está pronto.<br/>
                        <span className="text-white font-medium mt-1.5 block group-hover:text-sky-300 transition-colors">
                          Clique para liberar o acesso
                        </span>
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              <BackBtn onClick={() => goto(8)} />
            </section>
          )}

          {/* STEP 10 — Checkout nativo */}
          {s.step === 10 && (
            <section>
              {/* Cabeçalho preço */}
              <div className="text-center mb-6">
                <div className="text-[11px] uppercase tracking-[0.16em] text-sky-400/80 font-mono mb-2">
                  Laudo autorizado para emissão
                </div>
                <h2 className="text-2xl sm:text-3xl text-white font-semibold tracking-tighter-custom leading-tight">
                  Finalize o pagamento
                </h2>
                <div className="flex items-baseline justify-center gap-1 mt-3">
                  <span className="text-white/50 text-lg">R$</span>
                  <span className="text-5xl font-bold text-white tracking-tight">49</span>
                  <span className="text-white/50 text-lg">,00</span>
                </div>
                <p className="text-white/40 text-xs mt-1.5">Consulta + laudo com validade de 6 meses</p>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 p-1 rounded-xl bg-white/[0.04] border border-white/[0.07] mb-5">
                <button
                  type="button"
                  onClick={() => setPayMethod("pix")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    payMethod !== "card"
                      ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  Pix
                </button>
                <button
                  type="button"
                  onClick={() => setPayMethod("card")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    payMethod === "card"
                      ? "bg-sky-500/15 text-sky-300 border border-sky-500/30"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  Cartão
                </button>
              </div>

              {payMethod !== "card" ? (
                /* ── PIX NATIVO ── */
                <div className="grid gap-4">
                  {/* QR Code */}
                  <div className="flex flex-col items-center gap-4 bg-white rounded-2xl p-6">
                    <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">
                      Escaneie com o app do seu banco
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                      <QRCodeSVG
                        value={pixPayload}
                        size={200}
                        bgColor="#ffffff"
                        fgColor="#0f172a"
                        level="M"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-slate-700 font-semibold text-sm">R$ 49,00</p>
                      <p className="text-slate-400 text-xs mt-0.5">Laudo Médico · {orderId}</p>
                    </div>
                  </div>

                  {/* Copia e Cola */}
                  <div className={`${SURFACE} rounded-2xl p-4`}>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/40 font-mono mb-3">
                      Ou copie o código Pix
                    </p>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2.5 text-[11px] text-white/50 font-mono truncate">
                        {pixPayload.slice(0, 48)}…
                      </div>
                      <button
                        type="button"
                        onClick={copyPix}
                        className={`shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          copied
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-sky-500/15 text-sky-300 border border-sky-500/30 hover:bg-sky-500/25"
                        }`}
                      >
                        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        {copied ? "Copiado!" : "Copiar"}
                      </button>
                    </div>
                  </div>

                  {/* Já paguei */}
                  <button
                    type="button"
                    onClick={() => goto(11)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all"
                  >
                    <Check className="w-4 h-4 text-emerald-400" />
                    Já fiz o pagamento
                  </button>
                </div>
              ) : (
                /* ── CARTÃO → InfinitePay ── */
                <div className="grid gap-4">
                  <div className={`${SURFACE} rounded-2xl p-5 text-center`}>
                    <CreditCard className="w-10 h-10 text-sky-400 mx-auto mb-3" />
                    <p className="text-white font-semibold mb-1">Pagamento com cartão</p>
                    <p className="text-white/45 text-sm leading-relaxed mb-5">
                      Clique abaixo para pagar com cartão de crédito no ambiente seguro da InfinitePay.
                    </p>
                    <a
                      href={INFINITEPAY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setTimeout(() => goto(11), 3000)}
                      className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all"
                    >
                      <Lock className="w-4 h-4" />
                      Pagar com Cartão
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => goto(11)}
                    className="w-full text-xs text-white/35 hover:text-white/60 py-2 transition-colors"
                  >
                    Já finalizei o pagamento
                  </button>
                </div>
              )}

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-white/20 mt-5 mb-1">
                <Lock className="w-3 h-3" />
                <span>Pix via chave registrada · Cartão via InfinitePay</span>
              </div>

              <BackBtn onClick={() => goto(9)} />
            </section>
          )}

          {/* STEP 11 — Confirmação */}
          {s.step === 11 && (
            <section className="text-center pt-4">
              <div className="relative inline-flex w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 items-center justify-center text-green-400 mb-6">
                <CheckCircle className="w-8 h-8 relative z-10" strokeWidth={2.5} />
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl text-white font-bold tracking-tighter-custom leading-tight mb-4">
                Pagamento recebido.<br />
                Seu laudo está <span className="text-green-400">sendo emitido.</span>
              </h2>

              <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-6 mb-8 text-left space-y-4">
                <p className="text-white/70 text-[15px] leading-relaxed">
                  O <strong className="text-white">Laudo Médico em PDF</strong> com assinatura digital ICP-Brasil será enviado pelo WhatsApp em até <strong className="text-white">24 horas úteis</strong>.
                </p>
                <div className="flex items-start gap-3 bg-white/[0.03] rounded-xl p-4">
                  <Smartphone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-white/60 leading-relaxed">
                    Envie o <strong className="text-white">comprovante de pagamento</strong> no WhatsApp abaixo para priorizarmos a emissão.
                  </p>
                </div>
                <dl className="text-sm divide-y divide-white/[0.05]">
                  {[
                    ["Pedido", `#${orderId}`],
                    ["Paciente", s.nome || "—"],
                    ["WhatsApp para entrega", s.whatsapp || "—"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2.5 gap-4">
                      <dt className="text-white/40">{k}</dt>
                      <dd className="text-white text-right truncate max-w-[60%]">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <a
                href={WA_LINK(
                  `Olá! Acabei de pagar o laudo. Pedido #${orderId}. Paciente: ${s.nome}. Segue o comprovante.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl py-4 font-bold text-white bg-[#25D366] hover:bg-[#1ea954] shadow-[0_10px_30px_-10px_rgba(37,211,102,0.4)] transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar Comprovante no WhatsApp
              </a>

              <p className="text-[11px] text-white/30 mt-6 max-w-[260px] mx-auto leading-relaxed">
                Nossa equipe médica está online e emite o laudo em até 24h úteis após a validação.
              </p>

              <div className="mt-8">
                <BackBtn onClick={() => goto(10)} />
              </div>
            </section>
          )}
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-8">
          {[
            { icon: <ShieldCheck className="w-3 h-3" />, label: "LGPD compliant" },
            { icon: <ShieldCheck className="w-3 h-3" />, label: "CFM regulamentado" },
            { icon: <Scale className="w-3 h-3" />, label: "Portaria 3.073/2024" },
            { icon: <Sparkles className="w-3 h-3" />, label: "100% online" },
          ].map((t) => (
            <span
              key={t.label}
              className="inline-flex items-center gap-1.5 text-[11px] text-white/40 font-medium"
            >
              <span className="text-sky-400">{t.icon}</span>
              {t.label}
            </span>
          ))}
        </div>

        <div className="text-center text-[11px] text-white/30 mt-6 italic">
          fraldageriatrica.com · serviço de telemedicina regulamentado
        </div>
      </main>
    </div>
  );
};

export default Funil;
