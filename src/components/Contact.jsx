import { useState } from 'react'

// Web3Forms access key — get a free one at https://web3forms.com (enter your
// destination email, copy the access key it sends). It's public by design.
const ACCESS_KEY = 'b081ea20-3258-4250-a6c2-36b2323d759a'

const contacts = [
  { icon: '✉️', label: '1debrupdey1@gmail.com', href: 'mailto:1debrupdey1@gmail.com' },
  { icon: '🔗', label: 'linkedin.com/in/debrup-dey', href: 'https://linkedin.com/in/debrup-dey' },
  { icon: '📍', label: 'Bengaluru', href: null },
]

const reasons = ['Collaboration', 'Job opportunity', 'Feedback', 'Just saying hi', 'Other']

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' }, // no Content-Type: browser sets the multipart boundary
        body: new FormData(form),
      })
      const result = await res.json()
      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-aside">
          <p className="contact-intro">
            Have a question, an opportunity, or just want to say hi? Drop me a message
            and I’ll get back to you — or reach me directly through any of these.
          </p>
          <div className="contact-list">
            {contacts.map((c, i) => {
              const inner = (
                <>
                  <span className="contact-icon">{c.icon}</span>
                  {c.label}
                </>
              )
              if (!c.href) {
                return <span className="contact-chip" key={i}>{inner}</span>
              }
              const external = c.href.startsWith('http')
              return (
                <a
                  className="contact-chip"
                  href={c.href}
                  key={i}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {inner}
                </a>
              )
            })}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
        {/* Web3Forms config (sent via FormData) */}
        <input type="hidden" name="access_key" value={ACCESS_KEY} />
        <input type="hidden" name="subject" value="New message from your portfolio site" />
        <input type="hidden" name="from_name" value="Portfolio Contact Form" />
        {/* Honeypot — hidden from users; bots that fill it are rejected */}
        <label className="hp">
          Don’t fill this out: <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>

        <div className="form-row">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
        </div>

        <select name="reason" defaultValue={reasons[0]} aria-label="Reason for contact">
          {reasons.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        <textarea name="message" placeholder="Your message" required />

        <div className="form-foot">
          <button type="submit" className="contact-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'success' && (
            <span className="form-status form-status-ok">Thanks! Your message has been sent.</span>
          )}
          {status === 'error' && (
            <span className="form-status form-status-err">
              Something went wrong — please email me directly.
            </span>
          )}
        </div>
        </form>
      </div>
    </section>
  )
}
