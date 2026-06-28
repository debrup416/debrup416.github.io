import ParticlesBackground from './components/ParticlesBackground.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Achievements from './components/Achievements.jsx'
import Projects from './components/Projects.jsx'
import Interests from './components/Interests.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />

      <div className="container">
        <Header />

        <About />

        <Experience />

        <Projects />

        <Skills />

        <Achievements />

        <Interests />

        <Contact />

        <Footer />
      </div>
    </>
  )
}
