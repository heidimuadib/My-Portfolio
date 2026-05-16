"use client";
import { useScrollReveal } from "../hooks";

const PROJECTS = [
  {
    image: "/images/project-ai-dashboard.png",
    category: "AI / Machine Learning",
    title: "NeuralSync — AI Analytics Platform",
    desc: "An enterprise-grade AI platform that provides real-time predictive analytics, natural language querying, and automated report generation. Reduced client decision-making time by 40%.",
    metrics: [
      { value: "40%", label: "Faster Decisions" },
      { value: "98.5%", label: "Model Accuracy" },
      { value: "10K+", label: "Daily Queries" },
    ],
    tech: [
      { name: "Python", color: "" },
      { name: "TensorFlow", color: "" },
      { name: "React", color: "" },
      { name: "FastAPI", color: "" },
      { name: "PostgreSQL", color: "" },
    ],
    liveLink: "#",
    sourceLink: "#",
    liveLabel: "Live Demo",
  },
  {
    image: "/images/project-fullstack.png",
    category: "Full Stack",
    title: "CloudForge — SaaS Management Suite",
    desc: "A multi-tenant SaaS platform with real-time collaboration, role-based access, and integrated payment processing. Scaled to serve 500+ organizations with 99.9% uptime.",
    metrics: [
      { value: "500+", label: "Organizations" },
      { value: "99.9%", label: "Uptime" },
      { value: "50ms", label: "Avg Response" },
    ],
    tech: [
      { name: "Next.js", color: "green" },
      { name: "Node.js", color: "green" },
      { name: "MongoDB", color: "green" },
      { name: "Stripe", color: "green" },
      { name: "AWS", color: "green" },
    ],
    liveLink: "#",
    sourceLink: "#",
    liveLabel: "Live Demo",
  },
  {
    image: "/images/project-automation.png",
    category: "Automation / RPA",
    title: "AutoPilot — Intelligent Workflow Engine",
    desc: "An automation framework that orchestrates 200+ business processes using AI-driven decision trees. Eliminated 30 hours/week of manual tasks for enterprise clients.",
    metrics: [
      { value: "200+", label: "Workflows" },
      { value: "30h", label: "Saved/Week" },
      { value: "$120K", label: "Cost Saved/Yr" },
    ],
    tech: [
      { name: "n8n", color: "purple" },
      { name: "Python", color: "purple" },
      { name: "Docker", color: "purple" },
      { name: "Redis", color: "purple" },
      { name: "OpenAI", color: "purple" },
    ],
    liveLink: "#",
    sourceLink: "#",
    liveLabel: "Case Study",
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="reveal">
        <div className="section-label">Portfolio</div>
        <div className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </div>
        <div className="section-subtitle">
          A curated selection of projects demonstrating expertise across AI,
          automation, and full stack development.
        </div>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <div key={project.title} className={`glass-card project-card reveal reveal-delay-${i + 1}`}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-image-overlay"></div>
            </div>
            <div className="project-body">
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-metrics">
                {project.metrics.map((m) => (
                  <div key={m.label} className="metric">
                    <div className="metric-value">{m.value}</div>
                    <div className="metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t.name} className={`skill-tag ${t.color}`}>{t.name}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} className="project-link primary">
                  <i className="fas fa-external-link-alt"></i> {project.liveLabel}
                </a>
                <a href={project.sourceLink} className="project-link secondary">
                  <i className="fab fa-github"></i> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
