import Image from "next/image";
import heroPortrait from "../photo.jpg";

const coverStories = [
  {
    kicker: "Манифест",
    title: "Свобода стартовать как ты есть",
    copy:
      "Я собираю среду, где прошлые роли не диктуют будущее. Открываемся, чтобы работать честно и без стыда за биографию.",
    tone: "dune",
  },
  {
    kicker: "Результаты",
    title: "Делаем ставку на действия",
    copy:
      "Каждую неделю фиксируем шаги, а не мечты. Планируем запуск, меряем влияние, корректируемся и движемся дальше.",
    tone: "ink",
  },
  {
    kicker: "Поддержка",
    title: "Сообщество без позы",
    copy:
      "Вместо мотивационных шоу — круг союзников. Делимся практикой, находим партнёров и держим курс на устойчивость.",
    tone: "blush",
  },
];

const atelierScenes = [
  {
    title: "Ателье навыков",
    copy: "Разбираем твой опыт на элементы, собираем новую подачу и упаковку — аккуратно, в ритме, который подходит тебе.",
  },
  {
    title: "Редакция истории",
    copy: "Пишем историю бренда в стиле журнала: смело, лаконично, без клише и с вниманием к твоему голосу.",
  },
  {
    title: "Съёмка ответственности",
    copy: "Договариваемся на честных условиях: оплата появляется только после твоих первых доходов.",
  },
];

const ritualSteps = [
  "Признай, что хочешь идти без марафонской суеты и хайпа.",
  "Напиши мне и расскажи, что уже умеешь, а чего хочешь достичь.",
  "Получай поддержку и контрольные точки, чтобы расти уверенно.",
];

const investment = [
  { label: "Подписка на среду", amount: "25 $", detail: "ежемесячно в своё развитие" },
  { label: "Инфраструктура", amount: "2000 ₽", detail: "на пространство и сервисы" },
  { label: "Оплата наставнику", amount: "0 ₽", detail: "до твоего первого дохода" },
];

const editorialNotes = [
  {
    heading: "Почему сейчас",
    text: "Мир меняется быстрее журналов. Ты можешь потерять годы, выбирая не то окружение. Здесь мы стартуем сразу.",
  },
  {
    heading: "Какой формат",
    text: "Гибрид консультаций, живых разборов и тихой работы. Всё подано тактильно: живые шоты, короткие тексты, реальные задачи.",
  },
  {
    heading: "Что в итоге",
    text: "Сильный личный бренд, первые клиенты и навык продавать себя без ощущения самозванца.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <figure className="hero-media">
        <Image
          src={heroPortrait}
          alt="Портрет Артемия — основателя сообщества честных запусков"
          fill
          priority
          sizes="(max-width: 960px) 100vw, 960px"
        />
      </figure>
      <div className="page__content">
        <header className="hero">
          <span className="hero__label">Авторская система</span>
          <h1 className="hero__title">Запусти своё имя как обложку Vogue</h1>
          <p className="hero__lede">
            Я — Артемий. Собираю сообщество честных запусков, где твой опыт становится брендом, а твой голос звучит
            смело и без фальши. Всё адаптировано под мобильный ритм — включайся и действуй.
          </p>
          <div className="hero__cta">
            <a className="button" href="https://t.me/BAPHbl" target="_blank" rel="noopener noreferrer">
              Написать в Telegram
            </a>
            <span className="button-note">Ответ в течение 24 часов</span>
          </div>
        </header>

        <section className="cover-grid" aria-label="Обложки нашего сообщества">
          {coverStories.map((story, index) => (
            <article key={index} className={`cover-card tone-${story.tone}`}>
              <span className="cover-card__kicker">{story.kicker}</span>
              <h2 className="cover-card__title">{story.title}</h2>
              <p className="cover-card__copy">{story.copy}</p>
            </article>
          ))}
        </section>

        <section className="atelier">
          <div className="atelier__window">
            <h2>Мастерская запуска</h2>
            <p>
              Работаем слоями: стратегия, визуальная подача, продажа. Каждый блок — как отдельное окно в модном журнале,
              чтобы ты мог пролистывать прогресс с телефона.
            </p>
          </div>
          <div className="atelier__panels">
            {atelierScenes.map((scene, index) => (
              <article key={index} className="panel">
                <h3>{scene.title}</h3>
                <p>{scene.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ritual">
          <div className="ritual__steps">
            <h2>Ритуал запуска</h2>
            <ol>
              {ritualSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="ritual__investment">
            <h3>Инвестиции</h3>
            <ul>
              {investment.map((item, index) => (
                <li key={index}>
                  <span className="investment__label">{item.label}</span>
                  <span className="investment__amount">{item.amount}</span>
                  <span className="investment__detail">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="editorial">
          <div className="editorial__headline">
            <span>Редакционный взгляд</span>
            <h2>Личная история вместо стандартного курса</h2>
          </div>
          <div className="editorial__notes">
            {editorialNotes.map((note, index) => (
              <article key={index}>
                <h3>{note.heading}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div>
            <h2>Готов сделать первый кадр?</h2>
            <p>
              Напиши мне коротко, чем живёшь и чего хочешь достичь. Мы соберём персональный план, который поместится в твой
              телефон и удержит фокус.
            </p>
          </div>
          <a className="button button--dark" href="https://t.me/BAPHbl" target="_blank" rel="noopener noreferrer">
            Telegram @BAPHbl
          </a>
        </footer>
      </div>
    </main>
  );
}
