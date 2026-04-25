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
      <div className="w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center text-primary-foreground shadow-md group-hover:scale-95 transition-transform duration-300">
        <Stethoscope className="w-[18px] h-[18px]" strokeWidth={2} />
      </div>
      <span
        className={`font-semibold text-[15px] tracking-tight transition-colors ${
          invert ? "text-white" : "text-foreground group-hover:text-primary"
        }`}
      >
        fralda<span className={invert ? "text-white/60 font-normal" : "text-ink-400 font-normal"}>geriatrica.com</span>
      </span>
    </a>
  );
};

export default Logo;
