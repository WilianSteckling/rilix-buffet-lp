"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { cn } from "@/utils/cn";
import { ctaStyles, shared } from "@/utils/styles";

export default function CTA() {
  return (
    <section id="contato" className={ctaStyles.section}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(ctaStyles.container, shared.glassPanel)}
      >
        <div className={ctaStyles.glowBg}></div>

        <div className={ctaStyles.content}>
          <h2 className={ctaStyles.title}>
            Pronto para <span className={shared.textAccent}>lotar a agenda</span> do seu Buffet?
          </h2>
          <p className={ctaStyles.desc}>
            Preencha o formulário e receba uma proposta personalizada com condições especiais para o seu buffet infantil.
          </p>

          <form
            className={ctaStyles.form}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className={ctaStyles.input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefone / WhatsApp"
              required
              className={ctaStyles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail corporativo"
              required
              className={ctaStyles.input}
            />
            <button type="submit" className={ctaStyles.btnSubmit}>
              <Send className="w-5 h-5" />
              Solicitar Proposta
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}