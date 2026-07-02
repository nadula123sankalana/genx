import { Hono } from 'hono'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { AboutPage } from './pages/about'
import { ServicesPage } from './pages/services'
import { ApproachPage } from './pages/approach'
import { EnquirePage } from './pages/enquire'
import { ThankYouPage } from './pages/thankyou'
import { PrivacyPolicyPage } from './pages/privacy'
import { NotFoundPage } from './pages/404'

const app = new Hono()

app.use(renderer)

app.get('/', (c) =>
  c.render(<HomePage />, { title: 'Vantage Revenue Advisory | GTM & Revenue Strategy for B2B Tech', description: 'Senior fractional commercial leadership for founders, investors, and ambitious B2B technology companies. Build a stronger revenue engine.' })
)

app.get('/about', (c) =>
  c.render(<AboutPage />, { title: 'About | Vantage Revenue Advisory', description: 'Senior GTM advisory grounded in 25+ years of commercial leadership across B2B technology.' })
)

app.get('/services', (c) =>
  c.render(<ServicesPage />, { title: 'Services | Vantage Revenue Advisory', description: 'Pipeline Design, Fractional CRO, APAC Market Entry, GTM Strategy and more.' })
)

app.get('/approach', (c) =>
  c.render(<ApproachPage />, { title: 'Our Approach | Vantage Revenue Advisory', description: 'Diagnose. Design. Execute. Optimise. A practical model that turns ambition into commercial momentum.' })
)

app.get('/enquire', (c) =>
  c.render(<EnquirePage />, { title: 'Enquire | Vantage Revenue Advisory', description: 'Start a conversation about your revenue growth.' })
)

app.post('/enquire', (c) => c.redirect('/thank-you'))

app.get('/thank-you', (c) =>
  c.render(<ThankYouPage />, { title: 'Thank You | Vantage Revenue Advisory' })
)

app.get('/privacy-policy', (c) =>
  c.render(<PrivacyPolicyPage />, { title: 'Privacy Policy | Vantage Revenue Advisory', description: 'How Vantage Revenue Advisory collects, uses, and protects your personal information.' })
)

app.notFound((c) =>
  c.render(<NotFoundPage />, { title: '404 | Vantage Revenue Advisory' })
)

export default app
