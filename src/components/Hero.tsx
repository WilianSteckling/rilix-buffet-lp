"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { hero, shared } from "@/utils/styles";

export default function Hero() {
  return (
    <section className={hero.section}>
      <div className={hero.bg}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <iframe
            src="https://www.youtube.com/embed/qDXnbK1i6Ow?autoplay=1&mute=1&loop=1&playlist=qDXnbK1i6Ow&controls=0&disablekb=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1"
            title="Background video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full border-0 opacity-40 mix-blend-screen"
          />
        </div>
        <div className={hero.overlay}></div>
      </div>

      <div className={hero.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(hero.badge, shared.glassPanel)}
        >
          <span className={hero.badgeDot}></span>
          A atração #1 para Buffets Infantis
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={hero.title}
        >
          Transforme seu Buffet na <br className="hidden md:block" />
          <span className={hero.titleHighlight}>Principal Atração da Cidade</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={hero.desc}
        >
          O simulador de Realidade Virtual Rilix Coaster oferece uma experiência imersiva que atrai novos clientes, fideliza pais e crianças, e aumenta consideravelmente o ticket médio das suas festas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className={hero.btn}>
            <span className={hero.btnContent}>
              Falar com um Consultor <ArrowRight className={hero.btnIcon} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}