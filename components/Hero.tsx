type HeroProps = {
  telegramLink: string;
};

const Hero = ({ telegramLink }: HeroProps) => {
  return (
    <section>
      <h2>Hero placeholder</h2>
      <p>Minimal hero component to satisfy build requirements.</p>
      <a href={telegramLink}>Open Telegram</a>
    </section>
  );
};

export default Hero;
