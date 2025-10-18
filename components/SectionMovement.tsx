export default function SectionMovement() {
  return (
    <section className="mx-auto my-16 w-full max-w-4xl space-y-4 px-6 text-sand">
      <h2 className="text-2xl font-semibold md:text-3xl">SectionMovement placeholder</h2>
      <p className="text-sm text-sand/70 md:text-base">
        Здесь позже появится блок с историей движения. Пока оставляем простую версию для стабильной сборки.
      </p>
      <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-sand/60">
        <span>Андрей</span>
        <span>Саша</span>
        <span>Лена</span>
        <span>Юля</span>
      </div>
    </section>
  );
}
