interface HeroProps {
  telegramLink: string;
}

export default function Hero({ telegramLink }: HeroProps) {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-5xl flex-col items-center justify-center gap-6 px-6 text-center text-sand">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Hero placeholder</h1>
      <p className="max-w-2xl text-base text-sand/70 md:text-lg">
        Здесь появится главный блок страницы. Пока что это простая заглушка, чтобы сборка успешно проходила и дизайн можно было
        доработать позже.
      </p>
      <a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-amber px-6 py-3 text-sm font-semibold text-graphite transition hover:opacity-90"
      >
        Связаться в Telegram
      </a>
    </section>
  );
}
