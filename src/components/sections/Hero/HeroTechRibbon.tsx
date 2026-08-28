const tech = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "MongoDB",
  "SQL",
  "JWT Authentication",
  "REST APIs",
  "Docker",
  "Generative AI",
  "LLMs",
  "RAG",
  "Vector Databases",
  "Embeddings",
  "Agentic AI",
  "Prompt Engineering",
  "LangChain",
  "LangGraph",
];

export default function HeroTechRibbon() {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
        Core Technologies
      </p>

      <div className="flex flex-wrap gap-3">
        {tech.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
