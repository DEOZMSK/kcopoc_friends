type CallToActionProps = {
  telegramLink: string;
};

const CallToAction = ({ telegramLink }: CallToActionProps) => {
  return (
    <section>
      <h2>CallToAction placeholder</h2>
      <p>Connect with us through the provided Telegram link.</p>
      <a href={telegramLink}>Contact via Telegram</a>
    </section>
  );
};

export default CallToAction;
