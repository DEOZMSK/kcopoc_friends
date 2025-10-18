"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Ты не бизнесмен, и это нормально.",
    description: "Мы начнём с веры в себя, а не с бизнес-плана.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-amber"
      >
        <path
          d="M32 8L12 20v24l20 12 20-12V20L32 8z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
        <circle cx="32" cy="32" r="6" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Просто хочешь начать — я покажу, как.",
    description: "Соберём твою первую систему шаг за шагом, без слов \"сложно\".",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-mint"
      >
        <path
          d="M16 32h32M16 24h24M16 40h16"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
        <rect
          x="10"
          y="14"
          width="44"
          height="36"
          rx="10"
          stroke="currentColor"
          strokeWidth="3"
          opacity="0.4"
        />
      </svg>
    )
  },
  {
    title: "Соберём систему целиком.",
    description: "Сайт, бот, витрина и движение вперёд — всё в одном потоке.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-sand"
      >
        <path
          d="M12 20h40M12 32h40M12 44h40"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
        <circle cx="32" cy="32" r="4" fill="currentColor" />
        <circle cx="44" cy="44" r="4" fill="currentColor" />
      </svg>
    )
  }
];

export default function SectionIntro() {
  return (
    <section className="relative z-10 mx-auto mt-24 flex w-full max-w-5xl flex-col gap-10 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {items.map((item) => (
          <motion.div
            key={item.title}
            className="glass-panel flex flex-col gap-6 p-8"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between">
              {item.icon}
              <span className="font-glitch text-lg uppercase tracking-[0.2em] text-mint/70">
                2026
              </span>
            </div>
            <h3 className="font-display text-xl text-sand md:text-2xl">{item.title}</h3>
            <p className="text-sm text-sand/70 md:text-base">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
