import CallToAction from "../components/CallToAction";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Manifest from "../components/Manifest";
import SectionIntro from "../components/SectionIntro";
import SectionMovement from "../components/SectionMovement";

const TELEGRAM_FALLBACK = "https://t.me/your_telegram_username";

export default function Page() {
  const telegramLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? TELEGRAM_FALLBACK;

  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero telegramLink={telegramLink} />
      <SectionIntro />
      <SectionMovement />
      <Manifest />
      <CallToAction telegramLink={telegramLink} />
    </main>
  );
}
