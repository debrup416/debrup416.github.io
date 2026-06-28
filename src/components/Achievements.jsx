// Achievements — Patents, Hackathons, Mentorship. Edit the arrays to update.
const groups = [
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
  return (
    <section id="achievements">
      <h2 className="section-title">Achievements</h2>

      {groups.map((group) => (
        <div className="achv-sub" id={group.id} key={group.id}>
          <h3 className="achv-subtitle">{group.title}</h3>
          <div className="achv-entries">
            {group.entries.map((entry, i) => (
              <div className="achv-entry" key={i}>
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
    </section>
  )
}
