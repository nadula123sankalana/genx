import { Nav, Footer } from '../components/layout'

export const NotFoundPage = () => (
  <>
    <Nav />

    <section class="center-hero">
      <div style="max-width:520px;width:100%">
        <div class="center-hero__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <p style="font-family:var(--font-head);font-size:5rem;font-weight:800;background:linear-gradient(135deg,#C5A059,#E8C96A);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;margin-bottom:1rem;text-align:center">404</p>
        <h1 class="center-hero__h1">Page not found</h1>
        <p class="center-hero__p">The page you're looking for doesn't exist or may have been moved. Let's get you back on track.</p>
        <div class="center-hero__actions">
          <a href="/" class="btn btn--gold">Back to Home</a>
          <a href="/enquire" class="btn btn--ghost">Enquire Now</a>
        </div>
        <div style="margin-top:3rem;padding:1.5rem 2rem;background:var(--dark-2);border:1px solid var(--border-dim);border-radius:var(--r-lg);text-align:left">
          <p style="font-size:.82rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem">Popular pages</p>
          <div style="display:flex;flex-direction:column;gap:.6rem">
            <a href="/services" style="display:flex;align-items:center;gap:.6rem;font-size:.875rem;color:var(--text-muted);transition:color .15s">
              <span style="color:var(--gold)">→</span> Advisory Services
            </a>
            <a href="/about" style="display:flex;align-items:center;gap:.6rem;font-size:.875rem;color:var(--text-muted);transition:color .15s">
              <span style="color:var(--gold)">→</span> About Vantage
            </a>
            <a href="/approach" style="display:flex;align-items:center;gap:.6rem;font-size:.875rem;color:var(--text-muted);transition:color .15s">
              <span style="color:var(--gold)">→</span> Our Approach
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
