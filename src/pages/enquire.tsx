import { Nav, Footer } from '../components/layout'

export const EnquirePage = () => (
  <>
    <Nav active="enquire" />

    {/* ── PAGE HERO ── */}
    <section class="page-hero">
      <div class="page-hero__glow" aria-hidden="true"></div>
      <div class="wrap">
        <div class="page-hero__content">
          <span class="eyebrow">Get in Touch</span>
          <h1 class="page-hero__h1">Start a <span class="grad-text">conversation</span></h1>
          <p class="page-hero__sub">Whether you have a specific commercial challenge in mind or want to explore how Vantage can support your revenue growth — reach out and let's talk.</p>
        </div>
      </div>
    </section>

    {/* ── ENQUIRE CONTENT ── */}
    <section class="section">
      <div class="wrap">
        <div class="enquire-wrap">

          {/* Left: info */}
          <div>
            <span class="eyebrow">Contact Details</span>
            <h2 class="h2" style="margin-bottom:1.5rem">We'd love to<br/><span class="grad-text">hear from you</span></h2>
            <p class="body-text">Vantage Revenue Advisory works with a focused group of clients where senior commercial leadership makes a meaningful difference. If you believe there's a fit, we'd welcome the conversation.</p>

            <div style="margin-top:2rem">
              <div class="enquire-info__item">
                <div class="enquire-info__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 5.33 5.33l1.85-1.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>
                </div>
                <div>
                  <div class="enquire-info__label">Phone</div>
                  <div class="enquire-info__val">
                    <a href="tel:+61498490430">+61 498 490 430</a>
                  </div>
                </div>
              </div>

              <div class="enquire-info__item">
                <div class="enquire-info__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div class="enquire-info__label">Email</div>
                  <div class="enquire-info__val">
                    <a href="mailto:info@vantagerevenueadvisory.com.au">info@vantagerevenueadvisory.com.au</a>
                  </div>
                </div>
              </div>

              <div class="enquire-info__item">
                <div class="enquire-info__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div class="enquire-info__label">Location</div>
                  <div class="enquire-info__val">Melbourne, Victoria, Australia</div>
                </div>
              </div>
            </div>

            <div style="margin-top:2.5rem;padding:1.75rem;background:var(--dark-3);border:1px solid var(--border-dim);border-radius:var(--r-lg)">
              <h4 style="font-family:var(--font-head);font-size:.95rem;font-weight:600;color:var(--white);margin-bottom:1rem">What to expect</h4>
              <div style="display:flex;flex-direction:column;gap:.75rem">
                {([
                  'An initial response within one business day',
                  'A brief discovery conversation to understand your situation',
                  'An honest assessment of whether there is a strong fit',
                  'A clear proposal if we agree to proceed',
                ] as const).map(item => (
                  <div key={item} style="display:flex;align-items:flex-start;gap:.6rem;font-size:.875rem;color:#9A9590">
                    <span style="color:#C5A059;font-weight:700;flex-shrink:0">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div class="form-card">
              <h3 style="font-family:var(--font-head);font-size:1.2rem;font-weight:700;color:var(--white);margin-bottom:.5rem">Send an enquiry</h3>
              <p style="font-size:.875rem;color:var(--text-muted);margin-bottom:2rem">Fill in the form below and we'll be in touch shortly.</p>

              <form action="/enquire" method="post" id="enquire-form">
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="first-name">First name <span>*</span></label>
                    <input class="form-input" type="text" id="first-name" name="first_name" placeholder="Jane" required autocomplete="given-name" />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="last-name">Last name <span>*</span></label>
                    <input class="form-input" type="text" id="last-name" name="last_name" placeholder="Smith" required autocomplete="family-name" />
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="email">Email address <span>*</span></label>
                  <input class="form-input" type="email" id="email" name="email" placeholder="jane@company.com" required autocomplete="email" />
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="phone">Phone number</label>
                    <input class="form-input" type="tel" id="phone" name="phone" placeholder="+61 4XX XXX XXX" autocomplete="tel" />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="company">Company <span>*</span></label>
                    <input class="form-input" type="text" id="company" name="company" placeholder="Your company" required autocomplete="organization" />
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="service">Area of interest</label>
                  <select class="form-select" id="service" name="service">
                    <option value="" selected>Select a service area...</option>
                    <option value="pipeline-design">Pipeline Design</option>
                    <option value="fractional-cro">Fractional CRO</option>
                    <option value="apac-market-entry">APAC Market Entry</option>
                    <option value="gtm-strategy">GTM Strategy</option>
                    <option value="commercial-due-diligence">Commercial Due Diligence</option>
                    <option value="sales-enablement">Sales Enablement</option>
                    <option value="revenue-architecture">Revenue Architecture</option>
                    <option value="investor-readiness">Investor Readiness</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="message">Message <span>*</span></label>
                  <textarea class="form-textarea" id="message" name="message" placeholder="Tell us about your business and what you're looking to achieve..." required></textarea>
                </div>

                <div class="form-check">
                  <input class="form-check__input" type="checkbox" id="privacy" name="privacy" required />
                  <label class="form-check__label" for="privacy">
                    I have read and agree to the <a href="/privacy-policy">Privacy Policy</a> and consent to being contacted by Vantage Revenue Advisory.
                  </label>
                </div>

                <button type="submit" class="form-submit" id="enquire-submit" disabled>
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
