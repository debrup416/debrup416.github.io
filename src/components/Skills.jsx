const skillGroups = [
  {
    category: 'AI / ML',
    items: ['RAG', 'Agentic RAG', 'BM25 / Hybrid Search', 'Embeddings', 'Prompt Engineering', 'Evals', 'LlamaIndex', 'LangChain', 'LangGraph', 'Google ADK', 'MCP', 'Azure AI', 'LLMs'],
  },
  {
    category: 'Languages',
    items: ['Python', 'C++', 'SQL'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Django'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Git'],
  },
  {
    category: 'Databases & Vector Stores',
    items: ['PostgreSQL', 'Neo4j', 'Qdrant', 'ChromaDB'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      {skillGroups.map((group) => (
        <div className="skill-group" key={group.category}>
          <h3>{group.category}</h3>
          <div className="skills">
            {group.items.map((item) => (
              <span className="skill" key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
