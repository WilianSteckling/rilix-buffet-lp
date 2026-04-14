"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { hero, shared } from "@/utils/styles";

export default function Hero() {
  return (
    <section className={hero.section}>
      <div className={hero.bg}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={hero.video}
        >
          <source src="/assets/video/video-hero.mp4" type="video/mp4" />
        </video>
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
          O simulador de Realidade Virtual Rilix Coaster oferece uma experiência imersiva que atrai novos clientes, fideliza pais e crianças, e aumenta drasticamente o ticket médio das suas festas.
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