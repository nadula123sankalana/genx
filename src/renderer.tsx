import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'Vantage Revenue Advisory'}</title>
        <meta name="description" content={description as string || 'Building revenue engines for ambitious B2B technology companies. Senior fractional commercial leadership for founders, investors, and growth-stage businesses.'} />
        <meta name="theme-color" content="#0A0A0A" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title as string || 'Vantage Revenue Advisory'} />
        <meta property="og:description" content={description as string || 'Building revenue engines for ambitious B2B technology companies.'} />
        <meta property="og:site_name" content="Vantage Revenue Advisory" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="/static/style.css" />
      </head>
      <body>
        <div id="page-wrap">
          {children}
        </div>

        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            // ── Nav scroll shadow ──
            var nav = document.getElementById('nav');
            if (nav) {
              window.addEventListener('scroll', function() {
                nav.classList.toggle('nav--scrolled', window.scrollY > 40);
              }, { passive: true });
            }

            // ── Mobile menu toggle ──
            var tog = document.getElementById('nav-tog');
            var mob = document.getElementById('mob-menu');
            if (tog && mob) {
              tog.addEventListener('click', function() {
                var open = mob.classList.toggle('mob-menu--open');
                tog.setAttribute('aria-expanded', open ? 'true' : 'false');
                document.body.style.overflow = open ? 'hidden' : '';
              });
              mob.querySelectorAll('a').forEach(function(a) {
                a.addEventListener('click', function() {
                  mob.classList.remove('mob-menu--open');
                  tog.setAttribute('aria-expanded', 'false');
                  document.body.style.overflow = '';
                });
              });
            }

            // ── Scroll-triggered fade-in ──
            if ('IntersectionObserver' in window) {
              var els = document.querySelectorAll(
                '.card, .who-card, .value-item, .pillar, ' +
                '.step-full, .eng-card, .service-detail, ' +
                '.svc-card, .metrics__item, .step, .section__head'
              );
              var obs = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

              els.forEach(function(el, i) {
                el.classList.add('fade-up');
                el.style.transitionDelay = Math.min((i % 4) * 0.07, 0.28) + 's';
                obs.observe(el);
              });
            }

            // ── Enquiry form: validation + loading state ──
            var form = document.getElementById('enquire-form');
            var submitBtn = document.getElementById('enquire-submit');
            if (form && submitBtn) {
              var requiredFields = ['first-name', 'last-name', 'email', 'company', 'message'];

              function isFormValid() {
                var allFilled = requiredFields.every(function(id) {
                  var el = document.getElementById(id);
                  return el && el.value.trim() !== '';
                });
                var privacy = document.getElementById('privacy');
                var email = document.getElementById('email');
                var emailValid = email && /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value.trim());
                return allFilled && emailValid && privacy && privacy.checked;
              }

              function updateSubmitState() {
                submitBtn.disabled = !isFormValid();
              }

              requiredFields.forEach(function(id) {
                var el = document.getElementById(id);
                if (el) {
                  el.addEventListener('input', updateSubmitState);
                  el.addEventListener('change', updateSubmitState);
                }
              });
              var privacyEl = document.getElementById('privacy');
              if (privacyEl) privacyEl.addEventListener('change', updateSubmitState);
              updateSubmitState();

              form.addEventListener('submit', function() {
                submitBtn.textContent = 'Sending…';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '.7';
              });
            }
          })();
        `}} />
      </body>
    </html>
  )
})
