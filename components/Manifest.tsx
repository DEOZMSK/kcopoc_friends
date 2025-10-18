"use client";

import { motion } from "framer-motion";

const lines = [
  "Я собираю не учеников, а союзников.",
  "Не тех, кто уже умеет — а тех, кто только начинает.",
  "",
  "Я не беру деньги вперёд.",
  "Ты вкладываешь в себя — 25 $.",
  "Ты поддерживаешь систему — 2000 ₽.",
  "",
  "Я не зарабатываю на тебе.",
  "Я беру не деньги, а доверие.",
  "",
  "Если ты начнёшь зарабатывать — поблагодари.",
  "Если нет — значит, я ещё не помог достаточно.",
  "",
  "Меня не нужно оплачивать — меня нужно слушать."
];

export default function Manifest() {
  return (
    <section className="relative mx-auto mt-36 w-full max-w-4xl px-6">
      <motion.div
        className="glass-panel relative overflow-hidden p-12 md:p-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(199,255,219,0.15),transparent_55%)]" />
        <motion.h3
          className="font-display text-3xl uppercase tracking-[0.4em] text-amber md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        >
          Манифест
        </motion.h3>
        <div className="mt-10 flex flex-col gap-4">
          {lines.map((line, index) => (
            <motion.p
              key={`${line}-${index}`}
              className={`text-lg leading-relaxed text-sand/90 md:text-2xl ${
                line === "" ? "h-6" : ""
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.15 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
