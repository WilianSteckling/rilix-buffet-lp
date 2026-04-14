"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { packshotStyles, shared } from "@/utils/styles";

export default function ProductsPackshot() {
  return (
    <section className={packshotStyles.section}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(packshotStyles.wrapper, shared.glassPanel)}
      >
        <div className={packshotStyles.glow} />

        <picture>
          <source
            srcSet="/assets/images/packshot-web.png"
            media="(min-width: 768px)"
          />
          <img
            src="/assets/images/packshot-mobile.png"
            alt="Rilix Coaster — modelos disponíveis para buffets infantis"
            className={packshotStyles.img}
          />
        </picture>
      </motion.div>
    </section>
  );
}
