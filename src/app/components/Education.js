"use client";
import { useScrollReveal } from "../hooks";

const EDUCATION = [
  { icon: "🎓", type: "degree", title: "B.S. in Computer Science", school: "University of Technology", year: "2017 — 2021" },
  { icon: "📜", type: "cert", title: "TensorFlow Developer Certificate", school: "Google — TensorFlow", year: "2023" },
  { icon: "📜", type: "cert", title: "AWS Solutions Architect — Associate", school: "Amazon Web Services", year: "2022" },
  { icon: "📜", type: "cert", title: "Meta Front-End Developer Professional", school: "Meta — Coursera", year: "2022" },
];

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="education" ref={ref}>
      <div className="reveal">
        <div className="section-label">Learning</div>
        <div className="section-title">
          Education &amp; <span className="gradient-text">Certifications</span>
        </div>
        <div className="section-subtitle">
          Continuous learning fuels my growth as a technologist.
        </div>
      </div>
      <div className="edu-grid">
        {EDUCATION.map((edu, i) => (
          <div key={edu.title} className={`glass-card edu-card reveal reveal-delay-${i + 1}`}>
            <div className={`edu-icon ${edu.type}`}>{edu.icon}</div>
            <div className="edu-info">
              <h3>{edu.title}</h3>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-year">{edu.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
