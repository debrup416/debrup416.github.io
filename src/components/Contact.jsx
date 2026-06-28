const contacts = [
  { icon: '📍', label: 'Electronic City, Bangalore', href: null },
  { icon: '✉️', label: '1debrupdey1@gmail.com', href: 'mailto:1debrupdey1@gmail.com' },
  { icon: '🔗', label: 'linkedin.com/in/debrup-dey', href: 'https://linkedin.com/in/debrup-dey' },
  { icon: '💻', label: 'github.com/debrup416', href: 'https://github.com/debrup416' },
  { icon: '🧩', label: 'leetcode.com/u/writtensyntax', href: 'https://leetcode.com/u/writtensyntax/' },
]

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
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
    </section>
  )
}
