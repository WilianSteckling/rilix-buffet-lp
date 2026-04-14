"use client";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingUp, Gamepad2, ToolCaseIcon, ToolboxIcon, PenTool, Wrench, UserRoundCogIcon, UserCogIcon } from "lucide-react";
import { cn } from "@/utils/cn";
import { bento, shared, icons } from "@/utils/styles";

const features = [
  {
    title: "Retorno do Investimento (ROI)",
    description: "Atração premium que permite cobrar pacotes VIPs mais caros nas suas festas.",
    icon: <TrendingUp className={icons.green} />,
    className: "md:col-span-2",
  },
  {
    title: "Seguro para Crianças",
    description: "Design ergonômico e software controlado.",
    icon: <ShieldCheck className={icons.purple} />,
    className: "md:col-span-1",
  },
  {
    title: "Plug & Play",
    description: "Baixíssima manutenção. Só ligar e faturar.",
    icon: <Zap className={icons.yellow} />,
    className: "md:col-span-1",
  },
  {
    title: "Mais de 10 Cenários",
    description: "De cenários com dinossauros a aventuras espaciais.",
    icon: <Gamepad2 className={icons.blue} />,
    className: "md:col-span-1",
  },
  {
    title: "Suporte Completo",
    description: "Equipe dedicada para ajudar em todas as etapas.",
    icon: <UserCogIcon className={icons.purple} />,
    className: "md:col-span-1",
  },
];

export default function BentoFeatures() {
  return (
    <section className={bento.section}>
      <div className={bento.header}>
        <h2 className={bento.title}>
          Projetado para o seu <span className={shared.textAccent}>Lucro</span>
        </h2>
        <p className={bento.subtitle}>
          Tudo que um dono de buffet precisa: operação simples e alto impacto visual.
        </p>
      </div>

      <div className={bento.grid}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(bento.card, shared.glassPanel, feature.className)}
          >
            <div>
              <div className={bento.cardIconWrapper}>
                {feature.icon}
              </div>
              <h3 className={bento.cardTitle}>{feature.title}</h3>
              <p className={bento.cardDesc}>{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}