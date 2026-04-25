import { Stethoscope } from "lucide-react";

interface LogoProps {
  className?: string;
  invert?: boolean;
}

const Logo = ({ className = "", invert = false }: LogoProps) => {
  return (
    <a
      href="#"
      className={`flex items-center gap-2 group ${className}`}
      aria-label="fraldageriatrica.com — página inicial"
    >
      <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-primary-foreground transition-transform duration-300 group-hover:scale-95">
        <Stethoscope className="w-5 h-5" strokeWidth={2} />
      </div>
      <span
        className={`font-semibold text-base tracking-tighter-custom transition-colors ${
          invert ? "text-white" : "text-foreground group-hover:text-primary"
        }`}
      >
        fralda<span className={invert ? "text-white/60 font-normal" : "text-ink-400 font-normal"}>geriatrica.com</span>
      </span>
    </a>
  );
};

export default Logo;
