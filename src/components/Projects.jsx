import { useEffect, useState } from 'react'

// Architecture diagrams (per pipeline stage) — imported so Vite bundles them.
import manimSolve from '../assets/projects/manim/stage1-solve.png'
import manimStoryboard from '../assets/projects/manim/stage2-storyboard.png'
import manimCodegen from '../assets/projects/manim/stage3-codegen.png'
import manimRender from '../assets/projects/manim/stage4-render-qa.png'

// Projects — add a new object to this array for each future project.
// `details` (optional) is shown in a popup when the card is clicked. Each block
// has a `heading` plus either `text` (paragraph) or `list` (bullet points).
// `diagrams` (optional) renders clickable architecture images in the popup.
const projects = [
  {
    title: 'Manim Animation Agent',
    tech: 'Python · Google ADK · Azure OpenAI · LiteLLM · Manim',
    description:
      'An AI-powered mathematical animation generator: a multi-agent system that converts math problems into animated Manim videos through a 4-stage pipeline of 12+ LLM agents for solving, storyboarding, code generation, and vision-based QA — cutting animation time from hours to minutes.',
    link: '',
    stats: [
      { value: '4', label: 'Pipeline stages' },
      { value: '12+', label: 'LLM agents' },
      { value: '≥9/10', label: 'Vision QA gate' },
      { value: 'Hours→min', label: 'Time saved' },
    ],
    details: [
      {
        heading: 'Overview',
        text: 'An agentic pipeline that turns a math problem into a high-quality animated explainer video. Four sequential stages — Solve, Storyboard, Code Generation, and Render & QA — coordinate 12+ specialized LLM agents. Each stage runs a bounded critic/refine loop (max 3 iterations), and the final video is gated on an automated vision-model quality score of ≥9/10.',
      },
      {
        heading: 'How it works — the 4-stage pipeline',
        list: [
          { label: 'Solve', text: 'A solver agent drafts the solution, then a critic/refiner loop hardens it — using web search and Wolfram Alpha to verify — into a step-by-step mathematical solution.' },
          { label: 'Storyboard', text: 'A storyboarder agent turns the solution into a scene-by-scene visual plan, refined by a critic loop, then decomposed into an animatable scene list.' },
          { label: 'Code Generation', text: 'An explorer agent gathers Manim API insights, a generator writes the code, and a review loop validates it (syntax check, lint, preview render) into a first video.' },
          { label: 'Render & QA', text: 'The video is re-rendered while a vision LLM extracts frames and scores quality 1–10; below threshold it refines the code and loops, exiting at ≥9/10.' },
        ],
      },
      {
        heading: 'Engineering highlights',
        list: [
          'Bounded refinement loops (max 3 iterations) at every stage to cap cost and avoid runaway generation.',
          'Vision-model QA gate (≥9/10) for objective, automated quality control instead of manual review.',
          'Tool-using agents: web search, Wolfram Alpha, Manim docs/source exploration, and syntax/lint/preview validation.',
        ],
      },
    ],
    diagrams: [
      { src: manimSolve, caption: 'Stage 1 — Solve' },
      { src: manimStoryboard, caption: 'Stage 2 — Storyboard' },
      { src: manimCodegen, caption: 'Stage 3 — Code Generation' },
      { src: manimRender, caption: 'Stage 4 — Render & QA' },
    ],
  },
]

export default function Projects() {
  // The project shown in the popup, or null when closed.
  const [active, setActive] = useState(null)
  // A diagram enlarged over the popup, or null when closed.
  const [zoom, setZoom] = useState(null)

  // Escape closes the zoomed diagram first, then the popup.
  useEffect(() => {
    if (!active && !zoom) return
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (zoom) setZoom(null)
      else setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, zoom])

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => {
          const clickable = Boolean(project.details)
          return (
            <div
              className={`project-card${clickable ? ' is-clickable' : ''}`}
              key={i}
              onClick={clickable ? () => setActive(project) : undefined}
              role={clickable ? 'button' : undefined}
              tabIndex={clickable ? 0 : undefined}
              onKeyDown={
                clickable
                  ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setActive(project)
                      }
                    }
                  : undefined
              }
            >
              <div className="project-head">
                <h3>{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`Open ${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    ↗
                  </a>
                )}
              </div>
              <p>{project.description}</p>
              {project.tech && <p className="project-tech">{project.tech}</p>}
              {clickable && <span className="project-more">Click for details →</span>}
            </div>
          )
        })}
      </div>

      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActive(null)}
              aria-label="Close details"
            >
              &times;
            </button>
            <h3 className="modal-title">{active.title}</h3>

            {active.tech && (
              <div className="modal-chips">
                {active.tech.split('·').map((t, c) => (
                  <span className="modal-chip" key={c}>
                    {t.trim()}
                  </span>
                ))}
              </div>
            )}

            {active.stats && (
              <div className="modal-stats">
                {active.stats.map((stat, s) => (
                  <div className="modal-stat" key={s}>
                    <span className="modal-stat-value">{stat.value}</span>
                    <span className="modal-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            {active.details.map((block, j) => (
              <div className="modal-block" key={j}>
                <h4>{block.heading}</h4>
                {block.text && <p>{block.text}</p>}
                {block.list && (
                  <ul>
                    {block.list.map((item, k) => (
                      <li key={k}>
                        {typeof item === 'string' ? (
                          item
                        ) : (
                          <>
                            <strong className="modal-li-label">{item.label}</strong>
                            {' — '}
                            {item.text}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {active.diagrams && (
              <div className="modal-block">
                <h4>Architecture</h4>
                <div className="modal-diagrams">
                  {active.diagrams.map((d, n) => (
                    <figure className="modal-diagram" key={n}>
                      <button
                        className="modal-diagram-btn"
                        onClick={() => setZoom(d)}
                        aria-label={`Enlarge ${d.caption} diagram`}
                      >
                        <img src={d.src} alt={d.caption} loading="lazy" />
                      </button>
                      <figcaption>{d.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}

            {active.link && (
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                Visit project ↗
              </a>
            )}
          </div>
        </div>
      )}

      {zoom && (
        <div className="lightbox lightbox-over" onClick={() => setZoom(null)}>
          <button
            className="lightbox-close"
            onClick={() => setZoom(null)}
            aria-label="Close diagram"
          >
            &times;
          </button>
          <img
            src={zoom.src}
            alt={zoom.caption}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
