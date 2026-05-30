function getFormattedDate() {
  const now = new Date()
  const weekday = now.toLocaleDateString('en-US', { weekday: 'short' })
  const month = now.toLocaleDateString('en-US', { month: 'short' })
  const day = now.getDate()
  const year = now.getFullYear()
  return `${weekday} · ${month} ${day} · ${year}`
}

export default function Home() {
  const dateStr = getFormattedDate()

  return (
    <div className="wrap">

      {/* ============ TOP BAR ============ */}
      <header className="top">
        <a href="/" className="mark" aria-label="Stoop — home">
          <span className="dot" aria-hidden="true"></span>
          Stoop
        </a>
        <nav aria-label="Primary">
          <a href="#daily">Daily puzzles</a>
          <a href="#oven">In the oven</a>
          <a href="#how">How it works</a>
          <a href="#about">About</a>
        </nav>
        <span className="date" aria-hidden="true">{dateStr}</span>
      </header>

      {/* ============ MASTHEAD ============ */}
      <section className="masthead" aria-labelledby="brand">
        <h1 id="brand">Stoop<span className="amp">&amp;</span>chill.</h1>
        <div className="pitch">
          <span className="tag">tiny games, every day</span>
          <p className="one-liner">
            <em>Free daily browser games</em> for geography nerds, cocktail fans &amp;{' '}
            curious people — no account, no download, refreshes at midnight.
          </p>
        </div>
        <div className="stamp-small" aria-hidden="true">
          <span className="est">a small corner of the internet</span>
          <span className="since">est. 2025 · made by one human</span>
        </div>
      </section>

      {/* ============ DAILY PUZZLES ============ */}
      <section id="daily" aria-labelledby="daily-h">
        <div className="tile-label">
          <h2 id="daily-h">Daily puzzles</h2>
          <span className="meta">
            3 games · new puzzle every day
          </span>
        </div>

        <div className="daily">

          {/* DailyGuessr */}
          <a className="card c1" href="https://dailyguessr.app">
            <div className="card-left">
              <div className="live-row">
                <span className="live-dot" aria-hidden="true"></span>
                Live now
              </div>
              <div className="icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
                  <path d="M9 4v13" />
                  <path d="M15 7v13" />
                </svg>
              </div>
              <h3 className="game-name">DailyGuessr</h3>
              <p className="game-desc">Guess a location from a 360° street panorama.</p>
              <span className="game-url">dailyguessr.app</span>
              <span className="play-btn">Play today <span className="arrow">→</span></span>
            </div>
            <div className="card-right">
              <div className="ticket" aria-hidden="true">
                <div className="t-head">
                  <h4 className="t-name">DailyGuessr</h4>
                  <span className="t-num">#042</span>
                </div>
                <hr />
                <div className="emotion">Well Travelled</div>
                <div className="guesses">
                  <span className="g ci" style={{background:'#8a7355',borderColor:'#8a7355'}}></span>
                  <span className="g ci" style={{background:'#4a6fa5',borderColor:'#4a6fa5'}}></span>
                  <span className="g ci empty"></span>
                  <span className="g ci empty"></span>
                  <span className="g ci empty"></span>
                </div>
                <div className="context">234 km away</div>
                <hr />
                <div className="score-row">
                  <span className="score">8,847</span>
                  <span className="pts">pts</span>
                </div>
              </div>
            </div>
          </a>

          {/* FlagGuessr */}
          <a className="card c2" href="https://flagguessr.app">
            <div className="card-left">
              <div className="live-row">
                <span className="live-dot" aria-hidden="true"></span>
                Live now
              </div>
              <div className="icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 14v7" />
                  <path d="M19 3v15a1 1 0 0 1 -1 1h-13" />
                  <path d="M5 3m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                </svg>
              </div>
              <h3 className="game-name">FlagGuessr</h3>
              <p className="game-desc">Name the country from a zoomed-in piece of flag.</p>
              <span className="game-url">flagguessr.app</span>
              <span className="play-btn">Play today <span className="arrow">→</span></span>
            </div>
            <div className="card-right">
              <div className="ticket" aria-hidden="true">
                <div className="t-head">
                  <h4 className="t-name">FlagGuessr</h4>
                  <span className="t-num">#038</span>
                </div>
                <hr />
                <div className="emotion">Vexillologist</div>
                <div className="guesses">
                  <span className="g sq correct"></span>
                  <span className="g sq empty"></span>
                  <span className="g sq empty"></span>
                  <span className="g sq empty"></span>
                  <span className="g sq empty"></span>
                </div>
                <div className="context">1st guess · perfect</div>
                <hr />
                <div className="score-row">
                  <span className="score">10,000</span>
                  <span className="pts">pts</span>
                </div>
              </div>
            </div>
          </a>

          {/* CocktailGuessr */}
          <a className="card c3" href="https://cocktailguessr.app">
            <div className="card-left">
              <div className="live-row">
                <span className="live-dot" aria-hidden="true"></span>
                Live now
              </div>
              <div className="icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8 21l8 0" />
                  <path d="M12 15l0 6" />
                  <path d="M17 3l1 7c0 3.314 -2.686 6 -6 6s-6 -2.686 -6 -6l1 -7z" />
                  <path d="M6.5 7h11" />
                </svg>
              </div>
              <h3 className="game-name">CocktailGuessr</h3>
              <p className="game-desc">Identify the cocktail from a tight close-up shot.</p>
              <span className="game-url">cocktailguessr.app</span>
              <span className="play-btn">Play today <span className="arrow">→</span></span>
            </div>
            <div className="card-right">
              <div className="ticket" aria-hidden="true">
                <div className="t-head">
                  <h4 className="t-name">CocktailGuessr</h4>
                  <span className="t-num">#015</span>
                </div>
                <hr />
                <div className="emotion">Head Bartender</div>
                <div className="guesses">
                  <span className="g sq wrong"></span>
                  <span className="g sq correct"></span>
                  <span className="g sq empty"></span>
                  <span className="g sq empty"></span>
                  <span className="g sq empty"></span>
                </div>
                <div className="context">2nd guess · nice</div>
                <hr />
                <div className="score-row">
                  <span className="score">8,000</span>
                  <span className="pts">pts</span>
                </div>
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* ============ PLAY FOREVER ============ */}
      <section id="arcade" aria-labelledby="arcade-h">
        <div className="tile-label">
          <h2 id="arcade-h">Play forever</h2>
          <span className="meta">play at your own pace · 300 levels each</span>
        </div>

        <div className="daily">

          {/* Palette */}
          <a className="card c4 card--arcade" href="https://palette.stoop.games" target="_blank" rel="noopener noreferrer">
            <div className="card-left">
              <div className="live-row">
                <span className="live-dot" aria-hidden="true"></span>
                Live now
              </div>
              <div className="icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 10l16 0" />
                  <path d="M4 14l16 0" />
                  <path d="M9 10m0 -1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" />
                  <path d="M15 14m0 -1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" />
                </svg>
              </div>
              <h3 className="game-name">Palette</h3>
              <p className="game-desc">Mix the sliders to match today&apos;s colour.</p>
              <span className="game-url">palette.stoop.games</span>
              <span className="play-btn">Play today <span className="arrow">→</span></span>
            </div>
          </a>

          {/* Bloom */}
          <a className="card c5 card--arcade" href="https://bloom.stoop.games" target="_blank" rel="noopener noreferrer">
            <div className="card-left">
              <div className="live-row">
                <span className="live-dot" aria-hidden="true"></span>
                Live now
              </div>
              <div className="icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="1"  y="1"  width="5" height="5" rx="1" fill="#c45a3a" stroke="none"/>
                  <rect x="7"  y="1"  width="5" height="5" rx="1" fill="#d49a3a" stroke="none"/>
                  <rect x="13" y="1"  width="5" height="5" rx="1" fill="#7a8a5e" stroke="none"/>
                  <rect x="19" y="1"  width="5" height="5" rx="1" fill="#6b4858" stroke="none"/>
                  <rect x="1"  y="7"  width="5" height="5" rx="1" fill="#d49a3a" stroke="none"/>
                  <rect x="7"  y="7"  width="5" height="5" rx="1" fill="#c45a3a" stroke="none"/>
                  <rect x="13" y="7"  width="5" height="5" rx="1" fill="#6b4858" stroke="none"/>
                  <rect x="19" y="7"  width="5" height="5" rx="1" fill="#7a8a5e" stroke="none"/>
                  <rect x="1"  y="13" width="5" height="5" rx="1" fill="#7a8a5e" stroke="none"/>
                  <rect x="7"  y="13" width="5" height="5" rx="1" fill="#6b4858" stroke="none"/>
                  <rect x="13" y="13" width="5" height="5" rx="1" fill="#c45a3a" stroke="none"/>
                  <rect x="19" y="13" width="5" height="5" rx="1" fill="#d49a3a" stroke="none"/>
                  <rect x="1"  y="19" width="5" height="5" rx="1" fill="#6b4858" stroke="none"/>
                  <rect x="7"  y="19" width="5" height="5" rx="1" fill="#7a8a5e" stroke="none"/>
                  <rect x="13" y="19" width="5" height="5" rx="1" fill="#c45a3a" stroke="none"/>
                  <rect x="19" y="19" width="5" height="5" rx="1" fill="#d49a3a" stroke="none"/>
                </svg>
              </div>
              <h3 className="game-name">Bloom</h3>
              <p className="game-desc">Flood-fill the 14×14 grid in as few moves as possible.</p>
              <span className="game-url">bloom.stoop.games</span>
              <span className="play-btn">Play today <span className="arrow">→</span></span>
            </div>
          </a>

        </div>
      </section>

      {/* ============ IN THE OVEN ============ */}
      <section id="oven" aria-labelledby="oven-h">
        <div className="tile-label">
          <h2 id="oven-h">In the oven</h2>
          <span className="meta">3 coming</span>
        </div>

        <div className="factslap-row">

          <article className="mini-wide">
            <div className="mini-emoji" aria-hidden="true">💵</div>
            <div className="mini-body">
              <h3 className="mini-name">BanknoteGuessr</h3>
              <p className="mini-desc">Zoom in on a banknote. Guess the country. Five tries, three hints: continent, currency, region.</p>
            </div>
            <div className="mini-verdicts" aria-hidden="true">
              <span className="verdict-chip v-true">🌍 Continent</span>
              <span className="verdict-chip v-ctx">💰 Currency</span>
              <span className="verdict-chip v-false">📍 Region</span>
            </div>
            <span className="mini-tag">coming &apos;26</span>
          </article>

          <article className="mini-wide">
            <div className="mini-emoji" aria-hidden="true">🧠</div>
            <div className="mini-body">
              <h3 className="mini-name">FactSlap</h3>
              <p className="mini-desc">Five claims a day. True, false — or missing context? The third option is where real media literacy lives.</p>
            </div>
            <div className="mini-verdicts" aria-hidden="true">
              <span className="verdict-chip v-true">✓ True</span>
              <span className="verdict-chip v-false">✗ False</span>
              <span className="verdict-chip v-ctx">⚠ Context</span>
            </div>
            <span className="mini-tag">coming &apos;26</span>
          </article>

          <article className="mini-wide">
            <div className="mini-emoji" aria-hidden="true">🧪</div>
            <div className="mini-body">
              <h3 className="mini-name">Sortl</h3>
              <p className="mini-desc">Sort coloured liquids into pure test tubes. One layer at a time, no mixing at the end.</p>
            </div>
            <div className="mini-verdicts" aria-hidden="true">
              <span className="verdict-chip v-true">Infinite levels</span>
            </div>
            <span className="mini-tag">coming &apos;26</span>
          </article>

        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how" aria-labelledby="how-h">
        <div className="section-head">
          <span className="num">01 / 02</span>
          <h2 id="how-h">How it works.</h2>
          <span className="sub">no account needed ✿</span>
        </div>

        <div className="howto">
          <p className="lede">
            Every Stoop game is a <em>free daily browser game</em> — nothing to install, no sign-up,
            no email. Just open the link and you&apos;re playing.
          </p>

          <ol className="howto-steps" role="list">
            <li className="step">
              <div className="num-circle">01</div>
              <h3>Open.</h3>
              <p>Click any game above. It loads in your browser. No account, no download, no cookie banner.</p>
            </li>
            <li className="step">
              <div className="num-circle">02</div>
              <h3>Guess.</h3>
              <p>You get one shot at today&apos;s puzzle. Same puzzle for everyone, everywhere — takes about a minute.</p>
            </li>
            <li className="step">
              <div className="num-circle">03</div>
              <h3>Come back tomorrow.</h3>
              <p>A fresh puzzle drops at 00:00 UTC. Build a streak, share your score, do it again over breakfast.</p>
            </li>
          </ol>

          <p className="howto-foot">that&apos;s the whole game, honestly</p>

          <p className="howto-extra">
            Prefer to play at your own pace? <strong>Palette</strong> and <strong>Bloom</strong>{' '}
            also have 300 levels each — no waiting, no daily reset.{' '}
            Just pick up where you left off.
          </p>

          <div className="receipt" aria-label="Schedule and platform stats">
            <div className="midnight">
              New puzzles drop
              <b>every day at 00:00 UTC</b>
              one shot, no rerolls
            </div>
            <div className="dash" aria-hidden="true"></div>
            <div className="stats">
              <span><b>3</b> daily games</span>
              <span><b>2</b> arcade games</span>
              <span><b>5</b> in the oven</span>
              <span><b>free</b> · forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="about">
        <div>
          <h2 style={{fontFamily:'var(--display)',fontWeight:400,fontSize:'44px',lineHeight:1,margin:'0 0 18px',color:'var(--ink)',letterSpacing:'-0.015em'}}>
            Made by one person, on a stoop.
          </h2>
          <p>
            Stoop is run by exactly <em>one human being</em>. No team, no investors,
            no roadmap deck. Just little daily puzzle games made because I think the
            internet is more fun with small, weird corners in it.
          </p>
          <p>
            Everything here is free. Everything here will stay free. If you played
            something and liked it, that&apos;s the whole point — tell a friend, share
            your streak, come back tomorrow.
          </p>
        </div>

        <aside className="ledger" aria-label="Platform stats">
          <h4>The numbers</h4>
          <ul>
            <li><b>Games live</b> <span>05</span></li>
            <li><b>In the oven</b> <span>05</span></li>
            <li><b>Account required</b> <span>NEVER</span></li>
            <li><b>Trackers installed</b> <span>00</span></li>
            <li><b>Built by</b> <span>ONE PERSON</span></li>
          </ul>
        </aside>
      </section>

      {/* ============ FOOTER ============ */}
      <footer>
        <div>
          <p className="foot-mark">Stoop</p>
          <span className="foot-tag">see you tomorrow ✿</span>
        </div>
        <nav aria-label="Footer">
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
          <a href="https://twitter.com">Updates</a>
        </nav>
        <span className="copy">© 2026 · Stoop · No cookies, mostly</span>
      </footer>

    </div>
  )
}
