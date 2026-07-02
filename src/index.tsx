import { Hono } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use(renderer)
app.use('/static/*', serveStatic({ root: './' }))

app.get('/', async (c) => {
  const { HomePage } = await import('./pages/home')
  return c.render(<HomePage />, { title: 'Vantage Revenue Advisory | GTM & Revenue Strategy for B2B Tech', description: 'Senior fractional commercial leadership for founders, investors, and ambitious B2B technology companies. Build a stronger revenue engine.' })
})

app.get('/about', async (c) => {
  const { AboutPage } = await import('./pages/about')
  return c.render(<AboutPage />, { title: 'About | Vantage Revenue Advisory', description: 'Senior GTM advisory grounded in 25+ years of commercial leadership across B2B technology.' })
})

app.get('/services', async (c) => {
  const { ServicesPage } = await import('./pages/services')
  return c.render(<ServicesPage />, { title: 'Services | Vantage Revenue Advisory', description: 'Pipeline Design, Fractional CRO, APAC Market Entry, GTM Strategy and more.' })
})

app.get('/approach', async (c) => {
  const { ApproachPage } = await import('./pages/approach')
  return c.render(<ApproachPage />, { title: 'Our Approach | Vantage Revenue Advisory', description: 'Diagnose. Design. Execute. Optimise. A practical model that turns ambition into commercial momentum.' })
})

app.get('/enquire', async (c) => {
  const { EnquirePage } = await import('./pages/enquire')
  return c.render(<EnquirePage />, { title: 'Enquire | Vantage Revenue Advisory', description: 'Start a conversation about your revenue growth.' })
})

app.post('/enquire', async (c) => {
  return c.redirect('/thank-you')
})

app.get('/thank-you', async (c) => {
  const { ThankYouPage } = await import('./pages/thankyou')
  return c.render(<ThankYouPage />, { title: 'Thank You | Vantage Revenue Advisory' })
})

app.get('/privacy-policy', async (c) => {
  const { PrivacyPolicyPage } = await import('./pages/privacy')
  return c.render(<PrivacyPolicyPage />, { title: 'Privacy Policy | Vantage Revenue Advisory', description: 'How Vantage Revenue Advisory collects, uses, and protects your personal information.' })
})

app.notFound(async (c) => {
  const { NotFoundPage } = await import('./pages/404')
  return c.render(<NotFoundPage />, { title: '404 | Vantage Revenue Advisory' })
})

export default app
