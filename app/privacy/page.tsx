export const metadata = {
  title: 'Privacy — Stoop',
  description: 'Privacy policy for Stoop and its games.',
}

export default function PrivacyPage() {
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

        <h1>Privacy.</h1>

        <p>
          The short version: Stoop does not collect personal data, does not require
          an account, and does not sell anything to anyone.
        </p>

        <h2>Analytics</h2>
        <p>
          This site uses <a href="https://umami.is">Umami</a> for privacy-friendly
          analytics — no cookies, no fingerprinting, no cross-site tracking.
          Aggregate page-view counts only.
        </p>

        <h2>Cookies</h2>
        <p>
          No tracking cookies. Games may store your daily result in <em>localStorage</em>{' '}
          so your score persists on page reload. This data never leaves your browser.
        </p>

        <h2>Third parties</h2>
        <p>
          No advertising networks. No data brokers. No social media pixels.
          External links (Twitter / X, game domains) are governed by their own
          privacy policies.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? <a href="/contact">Get in touch.</a>
        </p>
      </div>
    </div>
  )
}
