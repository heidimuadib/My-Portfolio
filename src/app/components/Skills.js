"use client";
import { useScrollReveal, useSkillBarAnimation } from "../hooks";

const SKILLS = [
  {
    icon: "⚙️",
    title: "Automation & DevOps",
    desc: "Building intelligent workflows, RPA bots, and CI/CD pipelines for maximum efficiency.",
    tags: ["GoHighLevel", "n8n", "Make (Integromat)", "Zapier", "Slack", "Zoom", "Tally", "Airtable", "Calendly", "Docker", "GitHub Actions"],
    tagColor: "purple",
    bars: [
      { label: "Workflow Automation", value: 95, color: "purple" },
      { label: "CI/CD Pipelines", value: 85, color: "purple" },
    ],
  },
  {
    icon: "🎨",
    title: "Frontend Development",
    desc: "Crafting responsive, performant, and beautiful user interfaces with modern frameworks.",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "Vue.js", "Framer Motion"],
    tagColor: "green",
    bars: [
      { label: "React / Next.js", value: 90, color: "green" },
      { label: "UI/UX Design", value: 82, color: "green" },
    ],
  },
  {
    icon: "🔧",
    title: "Backend & Cloud",
    desc: "Engineering robust APIs, microservices, and cloud-native architectures at scale.",
    tags: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Firebase", "PHP", "Laravel (PHP Framework)", "Supabase", "Java", "C++", "MySQL"],
    tagColor: "orange",
    bars: [
      { label: "API Architecture", value: 90, color: "cyan" },
      { label: "Cloud Services", value: 86, color: "cyan" },
    ],
  },
];

export default function Skills() {
  const revealRef = useScrollReveal();
  const barRef = useSkillBarAnimation();

  return (
    <section className="section" id="skills" ref={(el) => { revealRef.current = el; barRef.current = el; }}>
      <div className="reveal">
        <div className="section-label">Expertise</div>
        <div className="section-title">
          Technical <span className="gradient-text">Arsenal</span>
        </div>
        <div className="section-subtitle">
          A comprehensive toolkit honed through years of building intelligent, scalable systems.
        </div>
      </div>
      <div className="skills-grid">
        {SKILLS.map((skill, i) => (
          <div key={skill.title} className={`glass-card skill-card reveal reveal-delay-${i + 1}`}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{skill.desc}</p>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span key={tag} className={`skill-tag ${skill.tagColor}`}>{tag}</span>
              ))}
            </div>
            <div className="skill-bar-container">
              {skill.bars.map((bar) => (
                <div key={bar.label} className="skill-bar-item">
                  <div className="skill-bar-header">
                    <span>{bar.label}</span>
                    <span>{bar.value}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-bar-fill ${bar.color}`}
                      style={{ "--target-width": `${bar.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
