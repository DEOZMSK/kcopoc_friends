"use client";

import { motion } from "framer-motion";
import { useMemo, useState, type CSSProperties } from "react";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

interface HeroProps {
  telegramLink: string;
}

export default function Hero({ telegramLink }: HeroProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });

  const gradientStyle = useMemo<CSSProperties>(
    () => ({
      "--x": `${cursorPosition.x}%`,
      "--y": `${cursorPosition.y}%`
    }),
    [cursorPosition]
  );

  return (
    <section
      id="start"
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden px-6 pt-40"
    >
      <motion.div
        className="floating-gradient relative w-full max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-glow backdrop-blur-2xl md:p-16"
        style={gradientStyle}
        onPointerMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          const x = ((event.clientX - bounds.left) / bounds.width) * 100;
          const y = ((event.clientY - bounds.top) / bounds.height) * 100;
          setCursorPosition({ x, y });
        }}
        initial="hidden"
        whileInView="visible"
        variants={heroVariants}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.span
          className="font-display text-sm uppercase tracking-[0.5em] text-mint"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        >
          Манифест взаимной экономики
        </motion.span>
        <motion.h1
          className="mt-6 font-display text-glow text-4xl leading-tight text-sand md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
        >
          Начни своё дело из дома.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg text-sand/80 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
        >
          Я помогу тебе собрать свою систему — сайт, бот и витрину — без бюджета и опыта.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col gap-6 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
        >
          <motion.a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-amber/60 bg-amber px-8 py-3 text-base font-semibold text-graphite shadow-glow transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,213,128,0.45)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber to-mint opacity-0 transition duration-500 group-hover:opacity-100" />
            <span className="relative z-10">Написать в Telegram</span>
          </motion.a>
          <p className="max-w-sm text-sm text-sand/60">
            Я не беру предоплату. Эти 25 $ и 2000 ₽ — твоя ответственность перед собой, не передо мной.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
