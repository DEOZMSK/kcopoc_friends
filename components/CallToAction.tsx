interface CallToActionProps {
  telegramLink: string;
}

export default function CallToAction({ telegramLink }: CallToActionProps) {
  return (
    <section className="mx-auto my-16 w-full max-w-3xl space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sand shadow-glow">
      <h2 className="text-2xl font-semibold md:text-3xl">CallToAction placeholder</h2>
      <p className="text-sm text-sand/70 md:text-base">
        Этот блок временно заменён упрощённой версией, чтобы проект можно было деплоить. Финальный контент добавим позже.
      </p>
      <a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-amber px-6 py-3 text-sm font-semibold text-graphite transition hover:opacity-90"
      >
        Написать в Telegram
      </a>
    </section>
  );
}
