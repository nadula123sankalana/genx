import { Nav, Footer } from '../components/layout'

export const ServicesPage = () => (
  <>
    <Nav active="services" />

    {/* ── PAGE HERO ── */}
    <section class="page-hero">
      <div class="page-hero__glow" aria-hidden="true"></div>
      <div class="wrap">
        <div class="page-hero__content">
          <span class="eyebrow">Advisory Services</span>
          <h1 class="page-hero__h1">Advisory services built for<br/><span class="grad-text">commercial growth</span></h1>
          <p class="page-hero__sub">Eight specialist service areas, each designed to strengthen a specific dimension of your revenue engine. Every engagement is tailored to where your business needs it most.</p>
        </div>
      </div>
    </section>

    {/* ── SERVICES LIST ── */}
    <section class="section">
      <div class="wrap">
        <div class="section__head">
          <span class="eyebrow">What We Do</span>
          <h2 class="h2">Eight specialist areas.<br/><span class="grad-text">One revenue focus.</span></h2>
          <p class="section__sub">From pipeline architecture to investor readiness — every service is grounded in 25+ years of enterprise GTM experience.</p>
        </div>

        <div class="services-list">
          {([
            {
              n: '01',
              id: 'pipeline-design',
              t: 'Pipeline Design',
              d: 'Funnel architecture, stage logic, conversion reporting, and pipeline discipline frameworks that give your revenue team clarity and commercial momentum. Covers lead qualification, stage gate design, forecasting methodology, and CRM structure alignment.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            },
            {
              n: '02',
              id: 'fractional-cro',
              t: 'Fractional CRO',
              d: 'Senior revenue leadership and commercial planning delivered on a fractional basis. Executive-level accountability for pipeline, forecast, and GTM execution — without the cost or commitment of a full-time hire. Ideal for Series A–C businesses building toward a permanent CRO.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            },
            {
              n: '03',
              id: 'apac-market-entry',
              t: 'APAC Market Entry',
              d: 'Regional opportunity assessment, channel strategy, partner identification, and practical go-to-market execution planning for B2B technology companies entering or scaling within Asia-Pacific. Includes market sizing, competitive landscape analysis, and localisation considerations.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            },
            {
              n: '04',
              id: 'gtm-strategy',
              t: 'GTM Strategy',
              d: 'Positioning clarity, ICP definition, route-to-market review, and execution sequencing aligned to your business stage and growth objectives. Moves beyond frameworks to produce a practical commercial plan your team can execute with confidence.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            },
            {
              n: '05',
              id: 'commercial-due-diligence',
              t: 'Commercial Due Diligence',
              d: 'Revenue maturity assessment, GTM risk analysis, and commercial growth evaluation for investors, acquirers, and founders preparing for transactions. Provides a structured view of revenue quality, pipeline health, sales capability, and commercial upside.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            },
            {
              n: '06',
              id: 'sales-enablement',
              t: 'Sales Enablement',
              d: 'Process review, sales methodology alignment, messaging refinement, and capability uplift that strengthens your revenue team\'s ability to convert. Covers qualification frameworks, objection handling, demo design, and win/loss analysis.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            },
            {
              n: '07',
              id: 'revenue-architecture',
              t: 'Revenue Architecture',
              d: 'Systems thinking and commercial infrastructure design that builds scalable revenue foundations. Covers KPI framework design, revenue team structure, compensation model alignment, technology stack audit, and operating rhythm establishment.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            },
            {
              n: '08',
              id: 'investor-readiness',
              t: 'Investor Readiness',
              d: 'Commercial narrative development, revenue model stress-testing, and growth-readiness review that builds investor confidence. Supports pre-raise preparation for founders and helps investors assess commercial quality in target businesses.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
            },
          ] as const).map(s => (
            <div class="service-detail" id={s.id} key={s.n}>
              <div class="service-detail__num">{s.n}</div>
              <div class="service-detail__body">
                <h3 class="service-detail__title">{s.t}</h3>
                <p class="service-detail__desc">{s.d}</p>
              </div>
              <div class="service-detail__icon">{s.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── ENGAGEMENT MODELS ── */}
    <section class="section section--dark">
      <div class="wrap">
        <div class="section__head section__head--center">
          <span class="eyebrow">Engagement Models</span>
          <h2 class="h2">Structured to suit your<br/><span class="grad-text">stage and objectives</span></h2>
          <p class="section__sub">Vantage engagements are designed to deliver senior commercial leadership at the right level of involvement for your business.</p>
        </div>

        <div class="eng-grid">
          <div class="eng-card">
            <h3 class="eng-card__title">Strategic Advisory</h3>
            <p class="eng-card__body">Senior GTM and revenue advisory on a retained basis. Provides ongoing commercial counsel, GTM review, and strategic input as your business evolves.</p>
            <div class="eng-card__features">
              <div class="eng-card__feature">Monthly strategic sessions</div>
              <div class="eng-card__feature">Commercial review &amp; challenge</div>
              <div class="eng-card__feature">On-call advisory access</div>
              <div class="eng-card__feature">Board-level commercial input</div>
            </div>
          </div>

          <div class="eng-card eng-card--featured">
            <div class="eng-card__badge">Most Popular</div>
            <h3 class="eng-card__title">Fractional Leadership</h3>
            <p class="eng-card__body">Embedded fractional CRO engagement with defined scope, structured accountability, and hands-on execution support across pipeline, team, and GTM.</p>
            <div class="eng-card__features">
              <div class="eng-card__feature">Defined weekly involvement</div>
              <div class="eng-card__feature">Pipeline &amp; forecast ownership</div>
              <div class="eng-card__feature">Team leadership &amp; coaching</div>
              <div class="eng-card__feature">GTM execution accountability</div>
            </div>
          </div>

          <div class="eng-card">
            <h3 class="eng-card__title">Project-Based</h3>
            <p class="eng-card__body">Focused engagement scoped around a specific commercial challenge — market entry, due diligence, GTM review, or revenue architecture design.</p>
            <div class="eng-card__features">
              <div class="eng-card__feature">Defined scope &amp; deliverables</div>
              <div class="eng-card__feature">Fixed timeline engagement</div>
              <div class="eng-card__feature">Structured output &amp; findings</div>
              <div class="eng-card__feature">Implementation guidance</div>
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
            <h2 class="cta-band__h2">Not sure which service<br/><span class="grad-text">fits your needs?</span></h2>
            <p class="cta-band__sub">Start a conversation. We'll help you identify the right approach for your commercial stage and growth objectives.</p>
          </div>
          <div class="cta-band__actions">
            <a href="/enquire" class="btn btn--gold">Start a Conversation</a>
            <a href="/approach" class="btn btn--ghost-light">Our Approach</a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
