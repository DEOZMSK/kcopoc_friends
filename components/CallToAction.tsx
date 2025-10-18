interface CallToActionProps {
  telegramLink: string;
}

export default function CallToAction({ telegramLink }: CallToActionProps) {
  return (
    <section
      style={{
        padding: "2rem",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "1rem",
        margin: "2rem auto",
        maxWidth: "640px",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>CallToAction placeholder</h2>
      <p style={{ marginBottom: "1.5rem" }}>
        This placeholder section keeps the deployment working while the final design is prepared.
      </p>
      <a href={telegramLink} style={{ color: "#0366d6", textDecoration: "underline" }}>
        Contact us on Telegram
      </a>
    </section>
  );
}
