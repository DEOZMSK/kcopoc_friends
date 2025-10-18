"use client";

import { motion } from "framer-motion";

interface CallToActionProps {
  telegramLink: string;
}

export default function CallToAction({ telegramLink }: CallToActionProps) {
  return (
    <section className="relative mx-auto mt-32 mb-24 flex w-full max-w-4xl flex-col items-center gap-8 px-6 text-center">
      <motion.div
        className="w-full rounded-[2.5rem] border border-white/10 bg-white/5 p-12 shadow-glow backdrop-blur-2xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.p
          className="font-display text-2xl text-sand md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        >
          Хочешь начать своё дело без страха и бюджета?
        </motion.p>
        <motion.p
          className="mt-6 text-base text-sand/70 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        >
          Напиши мне сейчас — я помогу понять, с чего начать.
        </motion.p>
        <motion.a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-amber/70 bg-amber px-10 py-4 text-lg font-semibold text-graphite shadow-glow transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,213,128,0.45)]"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Написать Артемию в Telegram
        </motion.a>
      </motion.div>
      <p className="text-xs uppercase tracking-[0.35em] text-sand/40">
        © Артемий Ксорос | Система Самозапуска | 2025
      </p>
      <motion.a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
      >
        <span className="inline-flex w-full items-center justify-center rounded-full bg-amber px-6 py-4 text-base font-semibold text-graphite shadow-glow transition hover:shadow-[0_0_35px_rgba(255,213,128,0.45)]">
          Написать Артемию в Telegram
        </span>
      </motion.a>
    </section>
  );
}
