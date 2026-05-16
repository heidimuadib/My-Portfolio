"use client";
import { useState, useEffect } from "react";

const WORDS = ["Intelligent", "Automated", "Scalable", "Innovative"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setFading(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="dot"></span> Available for opportunities
          </div>
          <h1>
            I Build{" "}
            <span
              className="gradient-text"
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(10px)" : "translateY(0)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                display: "inline-block",
              }}
            >
              {WORDS[wordIndex]}
            </span>
            <br />
            Digital Experiences
          </h1>
          <p className="hero-description">
            AI Automation Specialist &amp; Full Stack Developer crafting
            innovative solutions at the intersection of artificial intelligence,
            process automation, and modern web architecture.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              <i className="fas fa-rocket"></i> View Projects
            </a>
            <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              <i className="fas fa-paper-plane"></i> Get In Touch
            </a>
          </div>
          <div className="hero-stats">
            {[
              { value: "25+", label: "Projects" },
              { value: "3+", label: "Years Exp." },
              { value: "15+", label: "Technologies" },
              { value: "99%", label: "Uptime" },
            ].map((s) => (
              <div key={s.label}>
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src="/images/profile-avatar.png" alt="Alex Rivera" />
          </div>
          <div className="floating-card">🤖 AI/ML Engineer</div>
          <div className="floating-card">⚡ Full Stack Dev</div>
          <div className="floating-card">🔧 Automation Pro</div>
        </div>
      </div>
    </section>
  );
}
