import logoSrc from "@/assets/logo-fraldageriatrica.png";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <a href="#" className={`flex items-center gap-2 group ${className}`} aria-label="fraldageriatrica.com">
      <img
        src={logoSrc}
        alt=""
        width={32}
        height={32}
        className="w-8 h-8 object-contain group-hover:scale-95 transition-transform duration-300"
      />
      <span className="font-semibold text-lg tracking-tighter-custom text-foreground group-hover:text-primary transition-colors">
        fraldageriatrica<span className="text-slate-400 font-normal">.com</span>
      </span>
    </a>
  );
};

export default Logo;