"use client";
import { motion } from "framer-motion";
import { Stethoscope, CalendarCheck, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.jpg";

const bullets = [
  { icon: Stethoscope, label: "Médico com CRM ativo" },
  { icon: CalendarCheck, label: "Laudo válido por 180 dias" },
  { icon: MapPin, label: "Aceito em farmácias credenciadas" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
              <span className="text-[12px] font-medium text-text-secondary tracking-tight">
                Telemedicina ativa — atendimento em até 24 horas
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 text-[40px] sm:text-5xl lg:text-[56px] font-bold text-text-primary tracking-tightest leading-[1.05]"
            >
              Laudo médico para fralda geriátrica,{" "}
              <span className="text-gradient-brand">em até 24 horas</span>, sem sair de casa.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 text-[17px] lg:text-lg text-text-secondary font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Acesse fraldas geriátricas gratuitamente pelo Programa Farmácia Popular com o
              laudo emitido pelo nosso médico via telemedicina.
            </motion.p>

            <motion.ul
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 justify-center lg:justify-start"
            >
              {bullets.map((b) => (
                <li
                  key={b.label}
                  className="flex items-center gap-2.5 text-[14px] font-medium text-text-primary"
                >
                  <span className="w-7 h-7 rounded-full bg-accent-soft flex items-center justify-center">
                    <b.icon className="w-3.5 h-3.5 text-accent" strokeWidth={2.25} />
                  </span>
                  {b.label}
                </li>
              ))}
            </motion.ul>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-lg h-14 px-7 text-[15px] font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent-glow gap-2 hover:-translate-y-0.5 transition-all"
                data-event="cta_click"
                data-plan="laudo"
              >
                <a href="#precos">
                  Solicitar Meu Laudo — R$ 79
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </Button>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-text-secondary hover:text-text-primary transition-colors ring-focus rounded px-2 py-1"
              >
                Ver como funciona
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </motion.div>

            <motion.p
              custom={5}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 text-[12px] text-text-tertiary tracking-tight"
            >
              Reembolso integral por critério clínico • LGPD • Assinatura ICP-Brasil
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-accent/15 via-primary/8 to-transparent blur-2xl"
                aria-hidden="true"
              />
              <div className="relative aspect-square rounded-[32px] bg-surface-elevated border border-border overflow-hidden shadow-elegant">
                <img
                  src={heroImg}
                  alt="Ilustração de duas mãos entrelaçadas em gesto de cuidado intergeracional"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating credibility chip */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:translate-x-0 bg-card border border-border rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 whitespace-nowrap">
                <div className="w-9 h-9 rounded-full bg-accent-soft flex items-center justify-center">
                  <Stethoscope className="w-4.5 h-4.5 text-accent" strokeWidth={2} />
                </div>
                <div className="leading-tight">
                  <p className="text-[11px] text-text-tertiary uppercase tracking-wider font-semibold">
                    Telemedicina
                  </p>
                  <p className="text-[13px] font-semibold text-text-primary">CFM 2.314/2022</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
