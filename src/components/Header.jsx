import profilePic from '../assets/profile.jpg'
import { SHOW_RESUME } from '../config.js'

export default function Header() {
  return (
    <header>
      <div className="hero-text">
        <h1>
          <span className="hero-greeting">Hi, I'm</span>{' '}
          <span className="hero-name">Debrup</span>
        </h1>
        <p className="hero-subtitle">Specialist Programmer (L2) @ Infosys · Generative AI &amp; Agentic AI Engineer</p>
        {SHOW_RESUME && (
          <div className="hero-cta">
            <a
              className="btn-primary"
              href="/Debrup_Dey_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a className="btn-ghost" href="/Debrup_Dey_Resume.pdf" download>
              Download
            </a>
          </div>
        )}
      </div>
      <div className="hero-photo-frame">
        <img className="hero-photo" src={profilePic} alt="Debrup Dey" />
      </div>
    </header>
  )
}
