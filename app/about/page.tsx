export const metadata = {
  title: 'About — Stoop',
  description: 'Stoop is a small collection of free daily browser games, made by one person.',
}

export default function AboutPage() {
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

        <h1>Made by one person,<br />on a stoop.</h1>

        <p>
          Stoop is run by exactly <em>one human being</em>. No team, no investors,
          no roadmap deck. Just little daily puzzle games made because the internet
          is more fun with small, weird corners in it.
        </p>
        <p>
          Everything here is free. Everything here will stay free. If you played
          something and liked it, that&apos;s the whole point — tell a friend, share
          your streak, come back tomorrow.
        </p>
        <p>
          The games live at their own domains:{' '}
          <a href="https://dailyguessr.app">dailyguessr.app</a>,{' '}
          <a href="https://flagguessr.app">flagguessr.app</a>,{' '}
          <a href="https://cocktailguessr.app">cocktailguessr.app</a>.
          More are in the oven.
        </p>

        <h2>The numbers</h2>
        <p>
          3 games live · 5 in the oven · 0 trackers · 0 accounts required ·
          built by 1 person · est. 2025.
        </p>

        <h2>Philosophy</h2>
        <p>
          No dark patterns. No streaks that punish you. No notifications.
          One puzzle a day, takes a minute, resets at midnight UTC.
          That&apos;s the whole deal.
        </p>
      </div>
    </div>
  )
}
