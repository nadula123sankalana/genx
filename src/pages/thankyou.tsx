import { Nav, Footer } from '../components/layout'

export const ThankYouPage = () => (
  <>
    <Nav />

    <section class="center-hero">
      <div style="max-width:520px;width:100%">
        <div class="center-hero__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <div class="pill" style="margin:0 auto 1.5rem;width:fit-content">
          <span class="pill__dot"></span>
          Enquiry received
        </div>
        <h1 class="center-hero__h1">Thank you for<br/><span class="grad-text">reaching out</span></h1>
        <p class="center-hero__p">Your enquiry has been received. We'll review your message and be in touch within one business day to discuss how Vantage can support your revenue goals.</p>
        <div class="center-hero__actions">
          <a href="/" class="btn btn--gold">Back to Home</a>
          <a href="/services" class="btn btn--ghost">View Services</a>
        </div>
        <div style="margin-top:3rem;padding:1.5rem 2rem;background:var(--dark-2);border:1px solid var(--border-dim);border-radius:var(--r-lg);text-align:left">
          <p style="font-size:.82rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem">While you wait, explore</p>
          <div style="display:flex;flex-direction:column;gap:.6rem">
            <a href="/services" style="display:flex;align-items:center;gap:.6rem;font-size:.875rem;color:var(--text-muted);transition:color .15s">
              <span style="color:var(--gold)">→</span> Our eight specialist service areas
            </a>
            <a href="/approach" style="display:flex;align-items:center;gap:.6rem;font-size:.875rem;color:var(--text-muted);transition:color .15s">
              <span style="color:var(--gold)">→</span> How the Vantage approach works
            </a>
            <a href="/about" style="display:flex;align-items:center;gap:.6rem;font-size:.875rem;color:var(--text-muted);transition:color .15s">
              <span style="color:var(--gold)">→</span> About Vantage Revenue Advisory
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
