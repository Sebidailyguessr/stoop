export const metadata = {
  title: 'Contact — Stoop',
  description: 'Get in touch with Stoop.',
}

export default function ContactPage() {
  return (
    <div className="wrap">
      <header className="top">
        <a href="/" className="mark" aria-label="Stoop — home">
          <span className="dot" aria-hidden="true"></span>
          Stoop
        </a>
      </header>

      <div className="subpage">
        <a href="/" className="back-link">← Back to Stoop</a>

        <h1>Say hello.</h1>

        <p>
          Got a bug report, a game idea, or just want to say you liked something?
          Drop an email — it goes directly to the one human who runs this place.
        </p>
        <p>
          <a href="mailto:hello@stoop.games">hello@stoop.games</a>
        </p>

        <h2>What to expect</h2>
        <p>
          No support team, no ticket system. Just a person reading email.
          Response time varies — usually within a day or two.
        </p>

        <h2>Bug reports</h2>
        <p>
          Please include the game name, what happened, and which browser you&apos;re using.
          Screenshots are welcome.
        </p>
      </div>
    </div>
  )
}
