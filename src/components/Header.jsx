import profilePic from '../assets/profile.png'

export default function Header() {
  return (
    <header>
      <div className="hero-text">
        <h1>
          <span className="hero-greeting">Hi, I'm</span>{' '}
          <span className="hero-name">Debrup</span>
        </h1>
        <p className="hero-subtitle">Specialist Programmer (L2) @ Infosys · Generative AI &amp; Agentic AI Engineer</p>
      </div>
      <img className="hero-photo" src={profilePic} alt="Debrup Dey" />
    </header>
  )
}
