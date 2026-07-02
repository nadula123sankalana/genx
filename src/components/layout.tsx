// Shared Nav + Footer — premium redesign

export const Nav = ({ active = '' }: { active?: string }) => (
  <>
    <header class="nav" id="nav">
      <div class="nav__inner">
        <a href="/" class="nav__logo" aria-label="Vantage Revenue Advisory — Home">
          <div class="nav__logo-fallback">
            <div class="nav__logo-mark">V</div>
            <div class="nav__logo-text">
              <span class="nav__logo-name">Vantage</span>
              <span class="nav__logo-sub">Revenue Advisory</span>
            </div>
          </div>
        </a>

        <nav class="nav__links" aria-label="Primary navigation">
          <a href="/"         class={`nav__link${active === 'home'     ? ' nav__link--active' : ''}`}>Home</a>
          <a href="/about"    class={`nav__link${active === 'about'    ? ' nav__link--active' : ''}`}>About</a>
          <a href="/services" class={`nav__link${active === 'services' ? ' nav__link--active' : ''}`}>Services</a>
          <a href="/approach" class={`nav__link${active === 'approach' ? ' nav__link--active' : ''}`}>Approach</a>
          <a href="/enquire"  class="nav__cta">Enquire</a>
        </nav>

        <button class="nav__tog" id="nav-tog" aria-label="Toggle menu" aria-expanded="false" aria-controls="mob-menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>

    {/* Mobile overlay menu */}
    <div class="mob-menu" id="mob-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div class="mob-menu__inner">
        <a href="/"         class="mob-menu__link">Home</a>
        <a href="/about"    class="mob-menu__link">About</a>
        <a href="/services" class="mob-menu__link">Services</a>
        <a href="/approach" class="mob-menu__link">Approach</a>
        <a href="/enquire"  class="mob-menu__cta">Enquire Now</a>
      </div>
    </div>
  </>
)

export const Footer = () => (
  <footer class="footer">
    <div class="wrap">
      <div class="footer__top">

        <div class="footer__brand">
          <div class="footer__brand-logo">
            <div class="footer__logo-mark">V</div>
            <div class="footer__logo-text">
              <span class="footer__logo-name">Vantage</span>
              <span class="footer__logo-sub">Revenue Advisory</span>
            </div>
          </div>
          <p class="footer__tagline">
            Building revenue engines for ambitious B2B technology companies.
          </p>
        </div>

        <div class="footer__nav">
          <div class="footer__col">
            <h5 class="footer__col-head">Navigate</h5>
            <a href="/"         class="footer__link">Home</a>
            <a href="/about"    class="footer__link">About</a>
            <a href="/services" class="footer__link">Services</a>
            <a href="/approach" class="footer__link">Approach</a>
            <a href="/enquire"  class="footer__link">Enquire</a>
          </div>
          <div class="footer__col">
            <h5 class="footer__col-head">Services</h5>
            <a href="/services" class="footer__link">Pipeline Design</a>
            <a href="/services" class="footer__link">Fractional CRO</a>
            <a href="/services" class="footer__link">APAC Market Entry</a>
            <a href="/services" class="footer__link">GTM Strategy</a>
            <a href="/services" class="footer__link">Revenue Architecture</a>
          </div>
          <div class="footer__col">
            <h5 class="footer__col-head">Contact</h5>
            <a href="tel:+61498490430"                       class="footer__link">+61 498 490 430</a>
            <a href="mailto:info@vantagerevenueadvisory.com.au" class="footer__link">info@vantagerevenueadvisory.com.au</a>
            <span class="footer__link footer__link--plain">Melbourne, Victoria, AU</span>
          </div>
        </div>

      </div>

      <div class="footer__bottom">
        <p class="footer__copy">© 2026 Vantage Revenue Advisory. All rights reserved.</p>
        <a href="/privacy-policy" class="footer__legal">Privacy Policy</a>
      </div>
    </div>
  </footer>
)
