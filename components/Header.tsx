"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const headerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-40 flex justify-center px-6 py-6 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-lg bg-graphite/70" : "bg-transparent"
      }`}
    >
      <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm uppercase tracking-[0.35em] text-mint">
            Система Самозапуска
          </span>
          <span className="hidden text-xs text-sand/70 md:inline">
            Манифест взаимной экономики 2026
          </span>
        </div>
        <Link
          href="#start"
          className="hidden rounded-full border border-amber/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber transition hover:shadow-glow md:inline"
        >
          Вниз
        </Link>
      </div>
    </motion.header>
  );
}
