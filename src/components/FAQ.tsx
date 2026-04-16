"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "O equipamento é seguro para crianças pequenas?",
    answer: "Sim! O Rilix Coaster é certificado e foi desenvolvido com foco total em segurança. É indicado para crianças a partir de 5 anos de idade. Os óculos de VR são adaptados ao tamanho do rosto infantil e a experiência é controlada para não causar nenhum desconforto. São mais de 450.000 sessões realizadas por mêssem nenhum incidente."
  },
  {
    question: "Precisa de muita infraestrutura ou obra para instalar?",
    answer: "Absolutamente não! O Rilix é 100% plug & play. Basta uma tomada de 110V ou 220V e um espaço de aproximadamente 2m² para posicionar o equipamento. A instalação leva em média 15-20 minutos e nossa equipe acompanha tudo remotamente. Zero obras, zero complicação."
  },
  {
    question: "E se o equipamento apresentar algum problema?",
    answer: "Você tem suporte técnico todo dia da semana através de WhatsApp, telefone e e-mail. Em casos mais complexos, enviamos um técnico ao local sem custo adicional durante o período de garantia. Todos os equipamentos possuem garantia de 12 meses com possibilidade de extensão."
  },
  {
    question: "Como funciona a cobrança com as famílias? Posso cobrar pelo uso?",
    answer: "Sim! Você pode cobrar separadamente pelo uso do Rilix ou incluir no pacote da festa. A maioria dos nossos parceiros cobra entre R$10 e R$20 por criança por sessão (3-5 minutos) ou inclui como diferencial no pacote premium com ticket maior. Nossa equipe comercial te orienta na melhor estratégia para o seu buffet."
  },
  {
    question: "O conteúdo VR é atualizado? Como ficam as novidades?",
    answer: "O Rilix possui um catálogo com mais de 10 cenários VR e é atualizado periodicamente com novos conteúdos. As atualizações são automáticas via internet, sem custo adicional. Sempre haverá novidade para as crianças que retornarem ao seu buffet."
  },
  {
    question: "Em quanto tempo recupero o investimento?",
    answer: "Com base nos dados dos nossos parceiros, o retorno médio do investimento ocorre entre 8 e 12 meses. Isso considerando buffets que realizam entre 10 e 15 festas por mês e cobram entre R$10 e R$20 por criança. Obviamente, o resultado varia de acordo com o número de festas e a estratégia de precificação adotada."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-header">
        <h2 className="faq-title">Perguntas <span className="text-accent">Frequentes</span></h2>
        <p className="faq-subtitle">Tudo o que você precisa saber antes de transformar seu buffet.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`faq-item ${isOpen ? "border-[#5b97cd]/30 bg-white/[0.02]" : "border-white/5"}`}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="faq-question group"
              >
                <span className={isOpen ? "text-white" : "text-gray-300 group-hover:text-white transition-colors"}>
                  {faq.question}
                </span>
                <div className="faq-icon-wrapper">
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-[#5b97cd]" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 group-hover:text-[#5b97cd] transition-colors" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="faq-answer-wrapper"
                  >
                    <p className="faq-answer">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}