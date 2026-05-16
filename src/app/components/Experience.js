"use client";
import { useScrollReveal } from "../hooks";

const EXPERIENCES = [
  {
    date: "2023 — Present",
    title: "AI Automation Specialist",
    company: "TechVision Labs",
    desc: "Lead the design and deployment of AI-powered automation solutions for enterprise clients. Architect LLM-integrated workflows, build custom ML pipelines, and manage cloud infrastructure. Achieved 40% efficiency gains across 12+ client organizations.",
    tags: [
      { name: "Python", color: "" },
      { name: "LangChain", color: "" },
      { name: "n8n", color: "purple" },
      { name: "AWS", color: "green" },
    ],
  },
  {
    date: "2021 — 2023",
    title: "Full Stack Developer",
    company: "InnoStack Digital",
    desc: "Developed and maintained scalable web applications using React, Node.js, and cloud services. Built real-time features, REST/GraphQL APIs, and implemented CI/CD pipelines. Mentored junior developers and led code review processes.",
    tags: [
      { name: "React", color: "green" },
      { name: "Node.js", color: "green" },
      { name: "PostgreSQL", color: "orange" },
      { name: "Docker", color: "purple" },
    ],
  },
  {
    date: "2020 — 2021",
    title: "Junior Web Developer",
    company: "Digital Craft Agency",
    desc: "Built responsive websites and e-commerce platforms for SMB clients. Gained foundational experience in JavaScript, PHP, and database management while delivering 20+ client projects on time and under budget.",
    tags: [
      { name: "JavaScript", color: "green" },
      { name: "PHP", color: "orange" },
      { name: "MySQL", color: "orange" },
    ],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="reveal">
        <div className="section-label">Career</div>
        <div className="section-title">
          Professional <span className="gradient-text">Experience</span>
        </div>
        <div className="section-subtitle">
          Key roles where I&apos;ve driven innovation and delivered measurable impact.
        </div>
      </div>
      <div className="timeline">
        {EXPERIENCES.map((exp, i) => (
          <div key={exp.date} className={`timeline-item glass-card reveal reveal-delay-${i + 1}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{exp.date}</div>
            <h3>{exp.title}</h3>
            <div className="timeline-company">{exp.company}</div>
            <p>{exp.desc}</p>
            <div className="timeline-tags">
              {exp.tags.map((tag) => (
                <span key={tag.name} className={`skill-tag ${tag.color}`}>{tag.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
