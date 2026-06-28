import { useEffect, useState } from 'react'

// Award certificate images — imported so Vite bundles + fingerprints them.
import wowAward from '../assets/awards/wow-award.jpg'
import stockEsop from '../assets/awards/stock-esop.jpg'
import insta2023 from '../assets/awards/insta-2023.jpg'
import insta2024 from '../assets/awards/insta-2024.jpg'
import insta2025 from '../assets/awards/insta-2025.jpg'

// Achievements — Awards, Patents, Hackathons, Mentorship. Edit the arrays to
// update. Entries with an `image` render a clickable thumbnail (opens lightbox).
const groups = [
  {
    id: 'awards',
    title: 'Awards & Recognition',
    entries: [
      { title: 'WOW Award — Infosys RISE', meta: 'Q3 FY24', image: wowAward, description: 'Recognized for significant impact, dedication and hard work — STG Unit.' },
      { title: 'Stock Award (ESOP)', meta: 'Infosys', image: stockEsop, description: 'Employee Stock Ownership Program — for exemplary contribution and commitment. Signed by CEO Salil Parekh.' },
      { title: 'Insta Award', meta: 'Sep 2023', image: insta2023, description: 'GenAI POCs and a POV on text-embedding models for question-answering and summarization with small fine-tuned models.' },
      { title: 'Insta Award', meta: 'Sep 2024', image: insta2024, description: 'Pivotal role building Legacy Code Documentation & Search for the CAPI Code Platform using GenAI / Agentic RAG.' },
      { title: 'Insta Award', meta: 'Aug 2025', image: insta2025, description: 'Built the code-indexing service powering the code-intel tool (incl. COBOL support without tree-sitter); mentored junior developers.' },
    ],
  },
  {
    id: 'patents',
    title: 'Patents',
    entries: [
      { title: 'Belief Space Management for Digital Artifacts', meta: 'Filed', description: 'Co-inventor on a filed patent in agentic AI.' },
      { title: 'Adaptive Visualization of Digital Artifacts', meta: 'Filed', description: 'Co-inventor on a filed patent in agentic AI.' },
    ],
  },
  {
    id: 'hackathons',
    title: 'Hackathons',
    entries: [
      { title: 'Makethon 18 — Infosys', meta: 'Winner', description: 'Built Inclusify, an AI-powered cultural inclusivity platform.' },
      { title: 'IBM watsonx', meta: '3rd Place', description: 'Recognized for excellence in generative AI solution development.' },
    ],
  },
  {
    id: 'mentorship',
    title: 'Mentorship',
    entries: [
      { title: 'Infosys InStep', meta: 'Mentor', description: 'Mentored InStep interns in Generative AI — guiding them through agentic AI and RAG projects.' },
    ],
  },
]

export default function Achievements() {
  // The award entry shown full-size in the lightbox, or null when closed.
  const [lightbox, setLightbox] = useState(null)

  // Close the lightbox on Escape (only while it's open).
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="achievements">
      <h2 className="section-title">Achievements</h2>

      {groups.map((group) => (
        <div className="achv-sub" id={group.id} key={group.id}>
          <h3 className="achv-subtitle">{group.title}</h3>
          <div className={`achv-entries${group.id === 'awards' ? ' awards-grid' : ''}`}>
            {group.entries.map((entry, i) => (
              <div className="achv-entry" key={i}>
                {entry.image && (
                  <button
                    className="achv-thumb"
                    onClick={() => setLightbox(entry)}
                    aria-label={`View ${entry.title} certificate`}
                  >
                    <img src={entry.image} alt={entry.title} loading="lazy" />
                  </button>
                )}
                <div className="achv-entry-head">
                  <h4>{entry.title}</h4>
                  <span className="achv-entry-meta">{entry.meta}</span>
                </div>
                <p>{entry.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close certificate"
          >
            &times;
          </button>
          {/* Stop clicks on the image itself from closing the overlay. */}
          <img
            src={lightbox.image}
            alt={lightbox.title}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
