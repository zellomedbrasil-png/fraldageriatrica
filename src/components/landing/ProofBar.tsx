import { ShieldCheck } from "lucide-react";

const selos = ["CFM", "ANVISA", "ICP-Brasil", "LGPD"];

const ProofBar = () => {
  return (
    <section
      aria-label="Conformidade regulatória"
      className="bg-surface-elevated border-y border-border"
    >
      <div className="container-page min-h-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-text-tertiary shrink-0" strokeWidth={1.75} />
          <p className="text-[12px] sm:text-[13px] font-medium text-text-tertiary tracking-tight">
            Operamos em conformidade com:
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {selos.map((s) => (
            <li
              key={s}
              className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] uppercase text-text-tertiary hover:text-text-secondary transition-colors"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProofBar;
