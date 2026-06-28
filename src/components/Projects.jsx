// Projects — add a new object to this array for each future project.
const projects = [
  {
    title: 'Manim Animation Agent',
    tech: 'Python · Google ADK · Azure OpenAI · LiteLLM · Manim',
    description:
      'An AI-powered mathematical animation generator: a multi-agent system that converts math problems into animated Manim videos through a 4-phase pipeline of 12+ LLM agents for reasoning, storyboarding, code generation, and vision-based refinement — cutting animation time from hours to minutes.',
    link: '',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-head">
              <h3>{project.title}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`Open ${project.title}`}
                >
                  ↗
                </a>
              )}
            </div>
            <p>{project.description}</p>
            {project.tech && <p className="project-tech">{project.tech}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
