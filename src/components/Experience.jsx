// Experience — Infosys STG projects. Edit this array to update the timeline.
const experiences = [
  {
    title: 'Code Intelligence Platform',
    org: 'Infosys STG',
    date: 'Apr 2025 – Present',
    tech: 'Python · Tree-sitter · Neo4j · Qdrant · MCP · Google ADK · LLMs · FastAPI',
    bullets: [
      'Architected a platform that turns 50+ repos into a searchable code knowledge graph — 1M+ relationships linking functions, files, and services.',
      'Parsed code with Tree-sitter and indexed it two ways: a Neo4j graph for structure/dependencies and Qdrant embeddings for semantic search, with incremental re-indexing and cross-repo linking.',
      'Exposed it via an MCP server (9 tools) and built a code-intelligence agent — a planner delegating to specialized sub-agents — that answers with citations, speeding debugging and onboarding.',
    ],
  },
  {
    title: 'Legacy COBOL Comprehension & Knowledge Extraction',
    org: 'Infosys STG',
    date: 'Oct 2024 – Mar 2025',
    tech: 'Python · Custom Parsers · Neo4j · LLMs',
    bullets: [
      'Developed an AI system to reverse-engineer and document legacy COBOL codebases, accelerating business-logic extraction by 70x over manual analysis.',
      'Built a 40k+ node dependency DAG across 50+ modules, extracting workflows, business logic, 3600+ glossary terms, and variable lifecycles to recover tribal knowledge.',
      'Engineered division-aware COBOL parsers with copybook expansion and embedded SQL/CICS extraction, plus path-based retrieval over the graph.',
    ],
  },
  {
    title: 'Agentic Code-RAG System',
    org: 'Infosys STG',
    date: 'Apr 2024 – Sept 2024',
    tech: 'Python · Agentic RAG · LangGraph · LlamaIndex · Qdrant · LLMs',
    bullets: [
      'Built an agentic Code-RAG platform where a router agent dispatches queries across a hybrid retriever (semantic + BM25, query rewriting, HyDE) and a knowledge-graph pipeline, with LLM reranking — lifting recall by 35% and ranking quality by 28% (NDCG@10).',
      'Scaled context-aware coding agents to 1000+ daily queries across 50+ developers, cutting task-resolution time by ~70%.',
    ],
  },
  {
    title: 'Multi-Agent Audit Automation System',
    org: 'Infosys STG',
    date: 'Mar 2023 – Mar 2024',
    tech: 'Python · LangGraph · LLMs · State Management',
    bullets: [
      'Built a hierarchical LangGraph multi-agent auditing platform: an orchestrator infers intent, generates a custom audit plan, and routes to 5+ process-specific subagents (e.g. 3-way match across Invoice/PO/Receipt).',
      'Implemented human-in-the-loop escalation over a shared state store, preserving plan, history, and context across hand-offs.',
      'Automated compliance checks across 10k+ transactions, cutting audit cycle time by ~80% at ~95% match accuracy.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <div className="timeline-head">
                <h3>{exp.title}</h3>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <p className="timeline-org">{exp.org}</p>
              {exp.tech && <p className="timeline-tech">{exp.tech}</p>}
              <ul>
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
