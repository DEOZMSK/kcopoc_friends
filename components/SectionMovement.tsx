"use client";

import { motion } from "framer-motion";

const names = [
  "Андрей",
  "Саша",
  "Лена",
  "Юля",
  "Гоша",
  "Мира",
  "Кирилл",
  "Женя",
  "Оля",
  "Вика",
  "Илья",
  "Катя"
];

export default function SectionMovement() {
  return (
    <section className="relative mx-auto mt-32 flex w-full max-w-5xl flex-col gap-10 px-6">
      <motion.div
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-12 shadow-glow backdrop-blur-2xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,213,128,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(199,255,219,0.22),transparent_60%)]" />
        </div>
        <div className="flex flex-col gap-6">
          <motion.h2
            className="font-display text-3xl text-sand md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
          >
            Уже десятки таких же, как ты, начали путь — без опыта и пафоса.
          </motion.h2>
          <p className="max-w-2xl text-base text-sand/70 md:text-lg">
            У каждого из них не было готового ответа. Теперь у них есть движение, поддержка и собственная система.
          </p>
          <div className="relative mt-6 overflow-hidden rounded-full border border-white/10 bg-white/5 py-4">
            <div className="moving-names whitespace-nowrap text-lg uppercase tracking-[0.6em] text-sand/70">
              {names.concat(names).map((name, index) => (
                <span key={`${name}-${index}`} className="font-display">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
