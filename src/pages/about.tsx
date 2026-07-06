import { Nav, Footer } from '../components/layout'

export const AboutPage = () => (
  <>
    <Nav active="about" />

    {/* ── PAGE HERO ── */}
    <section class="page-hero">
      <div class="page-hero__glow" aria-hidden="true"></div>
      <div class="wrap">
        <div class="page-hero__content">
          <span class="eyebrow">About Vantage</span>
          <h1 class="page-hero__h1">Senior commercial leadership<br/>for <span class="grad-text">ambitious B2B</span> technology</h1>
          <p class="page-hero__sub">Vantage Revenue Advisory brings experienced GTM leadership to founders, investors, and growth-stage businesses that need more than a strategy deck.</p>
        </div>
      </div>
    </section>

    {/* ── WHY VANTAGE EXISTS ── */}
    <section class="section">
      <div class="wrap">
        <div class="about-grid">
          <div>
            <span class="eyebrow">Why We Exist</span>
            <h2 class="h2">Built for the gap between <span class="grad-text">ambition and execution</span></h2>
            <div class="gold-bar"></div>
            <p class="body-text">Many B2B technology businesses reach a pivotal stage where growth ambition outpaces commercial structure. The GTM motion lacks clarity. Pipeline discipline is inconsistent. Revenue leadership is stretched or absent. A full-time CRO hire isn't yet justified — but the gap is real and costly.</p>
            <p class="body-text">Vantage exists to bridge that gap. We bring senior commercial experience to the moments that matter most — with a hands-on, execution-first approach that translates strategy into pipeline momentum and sustainable growth.</p>
            <p class="body-text">This is not consulting at arm's length. It is experienced commercial leadership, delivered at the right scale for your stage.</p>

            <div class="about-stats-row">
              <div class="about-stat">
                <span class="about-stat__val grad-text">25+</span>
                <span class="about-stat__label">Years GTM Experience</span>
              </div>
              <div class="about-stat">
                <span class="about-stat__val grad-text">8</span>
                <span class="about-stat__label">Service Areas</span>
              </div>
              <div class="about-stat">
                <span class="about-stat__val grad-text">APAC</span>
                <span class="about-stat__label">Market Expertise</span>
              </div>
            </div>
          </div>

          <div>
            <div class="founder-card">
              <div class="founder-card__top">
                <div class="founder-card__avatar">V</div>
                <div>
                  <div class="founder-card__name">Founder &amp; GTM Advisor</div>
                  <div class="founder-card__role">Vantage Revenue Advisory · Melbourne, AU</div>
                </div>
              </div>
              <blockquote class="founder-card__quote">
                "The best commercial leaders don't just set strategy — they build the systems, culture, and discipline that let revenue grow reliably. That's what Vantage delivers."
              </blockquote>
              <div style="display:flex;flex-direction:column;gap:.75rem;margin-bottom:1.75rem">
                {([
                  'GTM Strategy &amp; Execution',
                  'Fractional CRO Leadership',
                  'APAC Market Entry',
                  'Revenue Architecture',
                  'Pipeline Design &amp; Discipline',
                  'Investor Readiness',
                ] as const).map(p => (
                  <div key={p} style="display:flex;align-items:center;gap:.6rem;font-size:.875rem;color:#9A9590">
                    <span style="color:#C5A059;font-weight:700">→</span>
                    <span dangerouslySetInnerHTML={{__html: p}} />
                  </div>
                ))}
              </div>
              <img
                src="/c.png"
                alt="Vantage Revenue Advisory"
                class="founder-card__logo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── WHO WE HELP ── */}
    <section class="section section--dark">
      <div class="wrap">
        <div class="section__head section__head--center">
          <span class="eyebrow">Who We Help</span>
          <h2 class="h2">Built for <span class="grad-text">B2B technology</span> companies at critical growth stages</h2>
          <p class="section__sub">Vantage works with a focused set of clients where senior commercial leadership makes the most meaningful difference.</p>
        </div>
        <div class="who-grid">
          <div class="who-card">
            <div class="who-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h4 class="who-card__title">Founders &amp; CEOs</h4>
            <p class="who-card__body">Leaders of B2B tech companies who need experienced commercial guidance to sharpen GTM strategy and build repeatable revenue motion without a full-time CRO hire.</p>
          </div>
          <div class="who-card">
            <div class="who-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
            </div>
            <h4 class="who-card__title">Investors &amp; PE Firms</h4>
            <p class="who-card__body">Investors who need commercial due diligence, revenue maturity assessment, or portfolio company GTM support from a senior commercial operator.</p>
          </div>
          <div class="who-card">
            <div class="who-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h4 class="who-card__title">Growth-Stage B2B Tech</h4>
            <p class="who-card__body">Scale-up businesses with traction but inconsistent pipeline, unclear GTM sequencing, or revenue growth that has plateaued below potential.</p>
          </div>
          <div class="who-card">
            <div class="who-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h4 class="who-card__title">APAC Expansion Businesses</h4>
            <p class="who-card__body">Technology companies entering or growing within Asia-Pacific who need a commercially experienced guide with deep regional understanding.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ── WHAT CLIENTS VALUE ── */}
    <section class="section">
      <div class="wrap">
        <div class="split">
          <div class="split__content">
            <span class="eyebrow">What Clients Value</span>
            <h2 class="h2">The principles that define<br/><span class="grad-text">every engagement</span></h2>
            <div class="gold-bar"></div>
            <p class="body-text">Clients don't just engage Vantage for expertise. They value a specific approach — commercially grounded, execution-focused, and consistently honest about what will and won't work.</p>
          </div>
          <div>
            <div class="values-list">
              {([
                { n:'01', t:'Commercial honesty',         b:'Straightforward advice, including when the difficult truth is the most valuable thing we can offer.' },
                { n:'02', t:'Senior-level engagement',    b:'Every engagement is led by an experienced commercial operator — not delegated to junior consultants.' },
                { n:'03', t:'Execution accountability',   b:'A hands-on approach that prioritises implementation and measurable outcomes over recommendations alone.' },
                { n:'04', t:'Context-first thinking',     b:'Strategy that is grounded in the specific commercial context, stage, and constraints of your business.' },
                { n:'05', t:'Revenue-focused outcomes',   b:'Everything is oriented toward building stronger commercial foundations and measurable revenue improvement.' },
                { n:'06', t:'Long-term perspective',      b:'Advisory built around what is right for your business trajectory, not just the immediate engagement.' },
              ] as const).map(v => (
                <div class="value-item" key={v.n}>
                  <span class="value-item__num">{v.n}</span>
                  <div>
                    <div class="value-item__title">{v.t}</div>
                    <div class="value-item__body">{v.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA BAND ── */}
    <section class="cta-band">
      <div class="wrap">
        <div class="cta-band__inner">
          <div class="cta-band__text">
            <h2 class="cta-band__h2">Ready to strengthen your<br/><span class="grad-text">commercial foundation?</span></h2>
            <p class="cta-band__sub">Reach out to start a conversation about your revenue goals and how Vantage can help.</p>
          </div>
          <div class="cta-band__actions">
            <a href="/enquire"  class="btn btn--gold">Start a Conversation</a>
            <a href="/services" class="btn btn--ghost-light">View Services</a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
