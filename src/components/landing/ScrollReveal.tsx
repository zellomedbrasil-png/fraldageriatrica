"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

const directionTransform: Record<string, string> = {
  up: "translate3d(0, 24px, 0)",
  down: "translate3d(0, -24px, 0)",
  left: "translate3d(24px, 0, 0)",
  right: "translate3d(-24px, 0, 0)",
};

const ScrollReveal = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible to keep SSR layout intact and avoid blank-page flashes.
  // We only hide-and-animate after mount, when we know JS is available.
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      setVisible(true);
      return;
    }
    // Out of view at mount: hide, then reveal on enter.
    setVisible(false);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : directionTransform[direction],
        transition: mounted
          ? `opacity 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`
          : "none",
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
