interface HeroProps {
  telegramLink: string;
}

export default function Hero({ telegramLink }: HeroProps) {
  return (
    <section
      style={{
        padding: "3rem 1.5rem",
        textAlign: "center",
        margin: "0 auto",
        maxWidth: "720px",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Hero placeholder</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        This simple hero component is standing in until the full experience is ready.
      </p>
      <a href={telegramLink} style={{ color: "#0366d6", textDecoration: "underline" }}>
        Open Telegram link
      </a>
    </section>
  );
}
