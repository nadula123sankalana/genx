import { Nav, Footer } from '../components/layout'

export const HomePage = () => (
  <>
    <Nav active="home" />

    {/* ── HERO ── */}
    <section class="hero">
      <div class="hero__bg" aria-hidden="true">
        <div class="hero__glow-1"></div>
        <div class="hero__glow-2"></div>
        <div class="hero__grid"></div>
        <div class="hero__fade"></div>
      </div>

      <div class="wrap hero__wrap">
        <div class="hero__content">
          <div class="pill">
            <span class="pill__dot"></span>
            Senior Fractional Commercial Leadership
          </div>
          <h1 class="hero__h1">
            Building revenue engines<br />
            for <span class="grad-text">ambitious B2B</span><br />
            technology companies
          </h1>
          <p class="hero__lead">
            Senior fractional commercial leadership for founders, investors, and growth-stage B2B technology businesses that need sharper GTM execution and stronger revenue foundations.
          </p>
          <div class="hero__actions">
            <a href="/enquire"  class="btn btn--gold">Start a Conversation</a>
            <a href="/services" class="btn btn--ghost">View Services</a>
          </div>
        </div>

        {/* Side card */}
        <div class="hero__card" aria-hidden="true">
          <div class="hero__card-num">25+</div>
          <div class="hero__card-label">Years Enterprise<br/>GTM Leadership</div>
          <div class="hero__card-divider"></div>
          <div class="hero__card-row">
            <div class="hero__card-dot"></div>
            <span class="hero__card-text">Fractional CRO &amp; Revenue Leadership</span>
          </div>
          <div class="hero__card-row">
            <div class="hero__card-dot"></div>
            <span class="hero__card-text">APAC Market Entry Expertise</span>
          </div>
          <div class="hero__card-row">
            <div class="hero__card-dot"></div>
            <span class="hero__card-text">8 Specialist Advisory Services</span>
          </div>
          <div class="hero__card-row">
            <div class="hero__card-dot"></div>
            <span class="hero__card-text">Melbourne-based, globally relevant</span>
          </div>
        </div>
      </div>

      <div class="hero__scroll" aria-hidden="true">
        <div class="hero__scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    {/* ── METRICS BAND ── */}
    <section class="metrics" aria-label="Key capabilities">
      <div class="wrap">
        <div class="metrics__grid">
          <div class="metrics__item">
            <span class="metrics__val grad-text">25+</span>
            <span class="metrics__label">Years Enterprise GTM</span>
            <span class="metrics__desc">Senior commercial leadership across B2B technology markets</span>
          </div>
          <div class="metrics__item">
            <span class="metrics__val grad-text">CRO</span>
            <span class="metrics__label">Fractional Leadership</span>
            <span class="metrics__desc">Executive-level revenue leadership, no full-time overhead</span>
          </div>
          <div class="metrics__item">
            <span class="metrics__val grad-text">APAC</span>
            <span class="metrics__label">Market Entry</span>
            <span class="metrics__desc">Practical support for Asia-Pacific expansion and execution</span>
          </div>
          <div class="metrics__item">
            <span class="metrics__val grad-text">8</span>
            <span class="metrics__label">Service Areas</span>
            <span class="metrics__desc">Specialist advisory covering every revenue growth lever</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── WHY VANTAGE ── */}
    <section class="section" id="why">
      <div class="wrap">
        <div class="section__head section__head--center">
          <span class="eyebrow">Why Vantage</span>
          <h2 class="h2">Growth challenges rarely come from<br/>a lack of <span class="grad-text">ambition</span></h2>
          <p class="section__sub">More often they come from gaps in GTM clarity, pipeline discipline, commercial leadership, or revenue systems. Vantage bridges those gaps with experienced, execution-first advisory.</p>
        </div>
        <div class="cards3">
          <div class="card card--hover">
            <div class="card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <h4 class="card__title">GTM Clarity</h4>
            <p class="card__body">Sharper positioning, clearer route-to-market, and execution sequencing that converts strategy into pipeline momentum.</p>
          </div>
          <div class="card card--hover">
            <div class="card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h4 class="card__title">Revenue Systems</h4>
            <p class="card__body">Commercial infrastructure that scales — pipeline architecture, KPI frameworks, and repeatable revenue processes built for growth.</p>
          </div>
          <div class="card card--hover">
            <div class="card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h4 class="card__title">Senior Leadership</h4>
            <p class="card__body">Fractional CRO-level expertise — executive perspective and commercial accountability when your business needs it most.</p>
          </div>
          <div class="card card--hover">
            <div class="card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h4 class="card__title">APAC Execution</h4>
            <p class="card__body">Practical market entry support for B2B technology companies expanding into the Asia-Pacific region with confidence.</p>
          </div>
          <div class="card card--hover">
            <div class="card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
            </div>
            <h4 class="card__title">Investor Confidence</h4>
            <p class="card__body">Commercial due diligence and investor readiness that strengthens your revenue narrative and growth case for capital.</p>
          </div>
          <div class="card card--hover">
            <div class="card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h4 class="card__title">Execution First</h4>
            <p class="card__body">Not just strategy — practical momentum across pipeline, leadership, positioning, planning, and commercial systems.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ── SERVICES GRID ── */}
    <section class="section section--dark" id="services">
      <div class="wrap">
        <div class="section__head">
          <span class="eyebrow">What We Do</span>
          <h2 class="h2">Eight ways Vantage builds<br/>your <span class="grad-text">revenue engine</span></h2>
          <p class="section__sub">Every engagement is tailored to strengthen commercial execution where it matters most.</p>
        </div>
        <div class="svc-grid">
          {([
            { n:'01', id:'pipeline-design',          t:'Pipeline Design',           d:'Funnel structure, stage logic, conversion discipline, and reporting frameworks that create pipeline clarity.' },
            { n:'02', id:'fractional-cro',           t:'Fractional CRO',            d:'Senior revenue leadership and commercial planning without the overhead of a full-time executive hire.' },
            { n:'03', id:'apac-market-entry',        t:'APAC Market Entry',         d:'Regional opportunity assessment, entry planning, and practical execution support for Asia-Pacific expansion.' },
            { n:'04', id:'gtm-strategy',             t:'GTM Strategy',              d:'Positioning, route-to-market review, and execution sequencing aligned to your growth objectives.' },
            { n:'05', id:'commercial-due-diligence',   t:'Commercial Due Diligence',  d:'Revenue maturity assessment and risk analysis for investors and founder-led transactions.' },
            { n:'06', id:'sales-enablement',           t:'Sales Enablement',          d:'Process review, messaging refinement, and capability uplift that improves sales team effectiveness.' },
            { n:'07', id:'revenue-architecture',       t:'Revenue Architecture',      d:'Systems thinking, KPI alignment, and commercial infrastructure designed for scalable growth.' },
            { n:'08', id:'investor-readiness',         t:'Investor Readiness',        d:'Commercial narrative refinement and growth-readiness review that builds investor confidence.' },
          ] as const).map(s => (
            <div class="svc-card" key={s.n}>
              <span class="svc-card__num">{s.n}</span>
              <h4 class="svc-card__title">{s.t}</h4>
              <p class="svc-card__body">{s.d}</p>
              <a href={`/services#${s.id}`} class="svc-card__link">
                Learn more
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          ))}
        </div>
        <div class="section__cta-center">
          <a href="/services" class="btn btn--ghost-light">View All Services</a>
        </div>
      </div>
    </section>

    {/* ── FOUNDER SPLIT ── */}
    <section class="section" id="founder">
      <div class="wrap">
        <div class="split">
          <div class="split__visual">
            <div class="founder-card">
              <div class="founder-card__top">
                <div class="founder-card__avatar">V</div>
                <div>
                  <div class="founder-card__name">Founder &amp; GTM Advisor</div>
                  <div class="founder-card__role">Vantage Revenue Advisory</div>
                </div>
              </div>
              <blockquote class="founder-card__quote">
                "Vantage brings an execution-first perspective to revenue growth — not just strategy, but practical momentum across pipeline, leadership, positioning, planning, and commercial systems."
              </blockquote>
              <div class="founder-card__tags">
                <span class="tag">25+ Years GTM</span>
                <span class="tag">Fractional CRO</span>
                <span class="tag">APAC Specialist</span>
                <span class="tag">Melbourne, AU</span>
              </div>
              <img
                src="https://www.genspark.ai/api/files/s/KQgqTdYC"
                alt="Vantage Revenue Advisory"
                class="founder-card__logo"
                loading="lazy"
              />
            </div>
          </div>

          <div class="split__content">
            <span class="eyebrow">About Vantage</span>
            <h2 class="h2">Why Vantage <span class="grad-text">exists</span></h2>
            <div class="gold-bar"></div>
            <p class="body-text">Growth ambition often moves faster than commercial structure. Many businesses reach a point where stronger leadership, clearer prioritisation, and better revenue discipline become essential — but a full-time executive hire isn't the right answer yet.</p>
            <p class="body-text">Vantage exists to bring experienced commercial guidance to those critical moments, with an execution-first approach that turns strategy into measurable revenue momentum.</p>
            <ul class="check-list">
              <li class="check-list__item"><span class="check-list__icon">→</span>Founders who need sharper GTM direction</li>
              <li class="check-list__item"><span class="check-list__icon">→</span>Investors who need practical revenue insight</li>
              <li class="check-list__item"><span class="check-list__icon">→</span>B2B tech companies preparing for scale</li>
              <li class="check-list__item"><span class="check-list__icon">→</span>Growth-stage teams navigating GTM complexity</li>
            </ul>
            <a href="/about" class="btn btn--ghost">More About Vantage</a>
          </div>
        </div>
      </div>
    </section>

    {/* ── APPROACH PREVIEW ── */}
    <section class="section section--dark" id="approach">
      <div class="wrap">
        <div class="section__head section__head--center">
          <span class="eyebrow">How We Work</span>
          <h2 class="h2">A model that turns ambition into<br/><span class="grad-text">commercial momentum</span></h2>
        </div>
        <div class="steps">
          <div class="step">
            <div class="step__num">01</div>
            <h4 class="step__title">Diagnose</h4>
            <p class="step__body">Assess current commercial position, GTM structure, and the friction points limiting growth.</p>
          </div>
          <div class="step__connector" aria-hidden="true"></div>
          <div class="step">
            <div class="step__num">02</div>
            <h4 class="step__title">Design</h4>
            <p class="step__body">Create a practical GTM and revenue plan aligned to your specific stage and objectives.</p>
          </div>
          <div class="step__connector" aria-hidden="true"></div>
          <div class="step">
            <div class="step__num">03</div>
            <h4 class="step__title">Execute</h4>
            <p class="step__body">Support implementation with hands-on commercial leadership and structured accountability.</p>
          </div>
          <div class="step__connector" aria-hidden="true"></div>
          <div class="step">
            <div class="step__num">04</div>
            <h4 class="step__title">Optimise</h4>
            <p class="step__body">Refine performance, improve repeatability, and build a stronger revenue engine over time.</p>
          </div>
        </div>
        <div class="section__cta-center" style="margin-top:3.5rem">
          <a href="/approach" class="btn btn--ghost-light">Explore Our Approach</a>
        </div>
      </div>
    </section>

    {/* ── CTA BAND ── */}
    <section class="cta-band">
      <div class="wrap">
        <div class="cta-band__inner">
          <div class="cta-band__text">
            <h2 class="cta-band__h2">Ready to build a stronger<br/><span class="grad-text">revenue engine?</span></h2>
            <p class="cta-band__sub">If your business needs experienced GTM leadership, sharper revenue structure, or a stronger path to commercial scale — Vantage Revenue Advisory can help.</p>
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
