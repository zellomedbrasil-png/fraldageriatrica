import { Heart } from "lucide-react";

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
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 group-hover:scale-95 transition-transform duration-300">
        <Heart className="w-[18px] h-[18px]" strokeWidth={2.25} />
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
