interface LogoProps {
  className?: string;
  symbolOnly?: boolean;
  invert?: boolean;
}

const Logo = ({ className = "", symbolOnly = false, invert = false }: LogoProps) => {
  const textColor = invert ? "text-white" : "text-text-primary";
  const tertiaryColor = invert ? "text-white/60" : "text-text-tertiary";

  return (
    <a
      href="/"
      className={`inline-flex items-center gap-2.5 group ring-focus rounded-lg ${className}`}
      aria-label="fraldageriatrica.com — página inicial"
    >
      <LogoSymbol className="w-9 h-9 transition-transform duration-300 group-hover:scale-105" />
      {!symbolOnly && (
        <span className={`font-display text-[17px] tracking-tightest leading-none ${textColor}`}>
          <span className="font-normal">fralda</span>
          <span className="font-bold">geriátrica</span>
          <span className={`font-light ${tertiaryColor}`}>.com</span>
        </span>
      )}
    </a>
  );
};

export const LogoSymbol = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer protective form (navy) — represents the caregiver embracing */}
    <path
      d="M20 4C11.163 4 4 11.163 4 20c0 5.523 2.8 10.39 7.058 13.265.86.58 2.022-.06 1.97-1.097-.21-4.16 1.34-8.32 4.347-11.327A14.93 14.93 0 0 1 28.7 16.495c1.038-.052 1.677-1.21 1.097-2.07A15.93 15.93 0 0 0 20 4Z"
      fill="var(--brand-primary)"
    />
    {/* Inner embraced form (green) — represents the elder being cared for */}
    <path
      d="M28.942 10.735c-.86-.58-2.022.06-1.97 1.097.21 4.16-1.34 8.32-4.347 11.327A14.93 14.93 0 0 1 11.3 27.505c-1.038.052-1.677 1.21-1.097 2.07A15.93 15.93 0 0 0 20 36c8.837 0 16-7.163 16-16 0-5.523-2.8-10.39-7.058-13.265Z"
      fill="var(--brand-secondary)"
    />
    {/* Connecting heart of light at center */}
    <circle cx="20" cy="20" r="2" fill="var(--surface-base)" />
  </svg>
);

export default Logo;
