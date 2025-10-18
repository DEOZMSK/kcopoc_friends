# Система Самозапуска — одностраничный манифест

Современный одностраничный сайт-манифест о взаимной экономике и запуске своего дела из дома. Проект создан на Next.js 14 с Tailwind CSS и Framer Motion и готов к деплою на Vercel.

## 🚀 Стек

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- Framer Motion 11
- TypeScript 5

## 📦 Установка и запуск

```bash
npm install
npm run dev
```

Сайт будет доступен по адресу [http://localhost:3000](http://localhost:3000).

## 🧱 Структура проекта

```
/app
  layout.tsx
  page.tsx
/components
  CallToAction.tsx
  Header.tsx
  Hero.tsx
  Manifest.tsx
  SectionIntro.tsx
  SectionMovement.tsx
/public
  favicon.ico
  images/og-image.png
  manifest.json
  robots.txt
```

## 🧩 Переменные окружения

Создайте файл `.env.local` и укажите ссылку на личный Telegram:

```
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/your_telegram_username
```

## 🧾 Сборка и деплой

1. `npm run build`
2. `npm run start` — локальная проверка production-сборки
3. `vercel --prod` — публикация на Vercel
4. Обновите `NEXT_PUBLIC_TELEGRAM_LINK` перед деплоем
5. Проверьте предпросмотр ссылки в Telegram (OG-изображение `/images/og-image.png`)

## 📄 Лицензия

Проект доступен под лицензией MIT.
