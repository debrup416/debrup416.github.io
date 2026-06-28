import Card from './Card.jsx'

export default function FeaturedProject() {
  return (
    <Card id="projects" title="Featured Project">
      <h3>Manim Animation Agent</h3>
      <p>An AI-powered mathematical animation generator: a multi-agent system that converts math problems into animated Manim videos through a 4-phase pipeline of 12+ LLM agents for reasoning, storyboarding, code generation, and vision-based refinement — cutting animation time from hours to minutes.</p>
      <p className="project-tech">Python · Google ADK · Azure OpenAI · LiteLLM · Manim</p>
    </Card>
  )
}
