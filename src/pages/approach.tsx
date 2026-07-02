import { Nav, Footer } from '../components/layout'

export const ApproachPage = () => (
  <>
    <Nav active="approach" />

    {/* ── PAGE HERO ── */}
    <section class="page-hero">
      <div class="page-hero__glow" aria-hidden="true"></div>
      <div class="wrap">
        <div class="page-hero__content">
          <span class="eyebrow">Our Approach</span>
          <h1 class="page-hero__h1">A practical, commercially<br/><span class="grad-text">grounded model</span></h1>
          <p class="page-hero__sub">Every Vantage engagement follows a structured four-step process designed to move from commercial assessment to sustainable revenue growth — with clarity and accountability at every stage.</p>
        </div>
      </div>
    </section>

    {/* ── APPROACH INTRO ── */}
    <section class="section">
      <div class="wrap">
        <div class="approach-intro">
          <div>
            <span class="eyebrow">The Foundation</span>
            <h2 class="h2">Execution-first.<br/><span class="grad-text">Outcome-driven.</span></h2>
            <div class="gold-bar"></div>
            <p class="body-text">Vantage was built on the conviction that most revenue growth challenges are not strategy problems — they are execution problems. The diagnosis is usually clear. The difficulty is in turning that diagnosis into disciplined, consistent commercial action.</p>
            <p class="body-text">Our approach is designed to do exactly that. It is practical, commercially grounded, and adapted to the specific stage and constraints of your business — not applied as a generic framework.</p>
          </div>
          <div class="pillars-grid">
            {([
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                t: 'Commercially grounded',
                b: 'Strategy rooted in real commercial dynamics, not theoretical frameworks.'
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
                t: 'Execution focused',
                b: 'Moving from insight to action with structured accountability and hands-on support.'
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
                t: 'Outcome driven',
                b: 'Every engagement is measured against concrete commercial improvement and revenue momentum.'
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                t: 'Adaptable',
                b: 'Calibrated to your stage, team capability, and commercial constraints — not a one-size-fits-all model.'
              },
            ] as const).map(p => (
              <div class="pillar" key={p.t}>
                <div class="pillar__icon">{p.icon}</div>
                <div class="pillar__title">{p.t}</div>
                <div class="pillar__body">{p.b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── FOUR-STEP PROCESS ── */}
    <section class="section section--dark">
      <div class="wrap">
        <div class="section__head section__head--center">
          <span class="eyebrow">The Process</span>
          <h2 class="h2">Four steps from diagnosis<br/>to <span class="grad-text">commercial momentum</span></h2>
        </div>

        <div class="steps-full">
          <div class="step-full">
            <div class="step-full__left">
              <div class="step-full__circle">
                <span class="step-full__num">01</span>
              </div>
              <div class="step-full__line"></div>
            </div>
            <div class="step-full__content">
              <h3 class="step-full__title">Diagnose</h3>
              <p class="step-full__desc">Begin with a clear-eyed assessment of your current commercial position. Understand where the GTM motion is working, where it is breaking down, and what is most limiting growth. This is not an audit for its own sake — it is the foundation for an actionable commercial plan.</p>
              <div class="step-full__outcomes">
                <div class="step-full__outcome">GTM structure and positioning review</div>
                <div class="step-full__outcome">Pipeline health and conversion analysis</div>
                <div class="step-full__outcome">Commercial team capability assessment</div>
                <div class="step-full__outcome">Revenue risk and opportunity identification</div>
              </div>
            </div>
          </div>

          <div class="step-full">
            <div class="step-full__left">
              <div class="step-full__circle">
                <span class="step-full__num">02</span>
              </div>
              <div class="step-full__line"></div>
            </div>
            <div class="step-full__content">
              <h3 class="step-full__title">Design</h3>
              <p class="step-full__desc">Build a practical GTM and revenue plan that addresses the specific gaps identified in the diagnostic phase. Grounded in your business stage, team capacity, and growth objectives — not a generic strategy template. The output is a plan your team can actually execute.</p>
              <div class="step-full__outcomes">
                <div class="step-full__outcome">Prioritised commercial improvement roadmap</div>
                <div class="step-full__outcome">GTM motion and sequencing plan</div>
                <div class="step-full__outcome">Pipeline architecture and stage design</div>
                <div class="step-full__outcome">KPI framework and accountability structure</div>
              </div>
            </div>
          </div>

          <div class="step-full">
            <div class="step-full__left">
              <div class="step-full__circle">
                <span class="step-full__num">03</span>
              </div>
              <div class="step-full__line"></div>
            </div>
            <div class="step-full__content">
              <h3 class="step-full__title">Execute</h3>
              <p class="step-full__desc">Support implementation with hands-on commercial leadership. Not advice from a distance — active participation in the execution phase with structured accountability, coaching, and course-correction as needed. This is where strategy becomes commercial momentum.</p>
              <div class="step-full__outcomes">
                <div class="step-full__outcome">Fractional CRO-level execution leadership</div>
                <div class="step-full__outcome">Sales team coaching and capability uplift</div>
                <div class="step-full__outcome">Pipeline and forecast management</div>
                <div class="step-full__outcome">GTM motion implementation and refinement</div>
              </div>
            </div>
          </div>

          <div class="step-full">
            <div class="step-full__left">
              <div class="step-full__circle">
                <span class="step-full__num">04</span>
              </div>
            </div>
            <div class="step-full__content">
              <h3 class="step-full__title">Optimise</h3>
              <p class="step-full__desc">Build on early results with a focus on repeatability, scalability, and long-term commercial strength. Use performance data to refine the revenue model, improve team capability, and embed the commercial discipline that drives sustainable growth.</p>
              <div class="step-full__outcomes">
                <div class="step-full__outcome">Performance review against commercial targets</div>
                <div class="step-full__outcome">GTM motion refinement and improvement</div>
                <div class="step-full__outcome">Revenue infrastructure hardening</div>
                <div class="step-full__outcome">Transition planning for long-term sustainability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── ENGAGEMENT MODELS BRIEF ── */}
    <section class="section">
      <div class="wrap">
        <div class="section__head section__head--center">
          <span class="eyebrow">Engagement Models</span>
          <h2 class="h2">Structured for your<br/><span class="grad-text">stage and needs</span></h2>
          <p class="section__sub">The four-step process is applied within an engagement model that fits your commercial situation and objectives.</p>
        </div>
        <div class="cards3">
          <div class="card">
            <div class="card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h4 class="card__title">Strategic Advisory</h4>
            <p class="card__body">Retained senior GTM and revenue advisory providing ongoing commercial counsel, GTM review, and strategic input as your business evolves.</p>
          </div>
          <div class="card" style="border-color:rgba(197,160,89,.3)">
            <div class="card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <h4 class="card__title">Fractional Leadership</h4>
            <p class="card__body">Embedded fractional CRO engagement with defined scope, structured accountability, and hands-on execution support across pipeline and GTM.</p>
          </div>
          <div class="card">
            <div class="card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h4 class="card__title">Project-Based</h4>
            <p class="card__body">Focused engagement scoped around a specific commercial challenge — market entry, due diligence, GTM review, or revenue architecture design.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA BAND ── */}
    <section class="cta-band">
      <div class="wrap">
        <div class="cta-band__inner">
          <div class="cta-band__text">
            <h2 class="cta-band__h2">Ready to put this process<br/><span class="grad-text">to work for you?</span></h2>
            <p class="cta-band__sub">Start a conversation about your commercial situation and how Vantage can help you build a stronger revenue engine.</p>
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
