"use client";
import { useState } from "react";
import { useScrollReveal } from "../hooks";

const PROJECTS = [
  {
    image: "/images/sparky.png",
    category: "AI & Automation",
    title: "Sparky Electrical GHL Automation",
    desc: "An automated lead tracking and routing workflow in GoHighLevel. Incoming leads via webhooks are instantly processed, with custom field mapping for urgency levels. The system automatically routes leads into the Sparky Pipeline, creates opportunity cards, sends refined SMS messages, and triggers customized internal Slack notifications to alert the team instantly.",
    metrics: [
      { value: "Instant", label: "Lead Capture" },
      { value: "GHL", label: "Pipeline Sync" },
      { value: "Custom", label: "Slack Alerts" },
    ],
    tech: [
      { name: "GoHighLevel", color: "orange" },
      { name: "Slack API", color: "purple" },
      { name: "Webhooks", color: "purple" },
      { name: "React", color: "purple" },
      { name: "Tailwind CSS", color: "cyan" },
    ],
    liveLink: "https://sparky-au.vercel.app/",
    sourceLink: "#",
    liveLabel: "Live Site",
    gallery: ["/images/sparky.png"],
  },
  {
    image: "/images/project-plumber.png",
    category: "AI & Automation",
    title: "Emergency Plumber AU & GHL Automation",
    desc: "An automated lead generation and triage system. When a lead is captured via webhook, GoHighLevel (GHL) processes conditional logic to segment urgent and non-urgent contacts, dynamically routes them into distinct pipelines/opportunities, and alerts staff instantly on Slack for high-priority emergency responses.",
    metrics: [
      { value: "GHL", label: "Pipeline Sync" },
      { value: "Instant", label: "Slack Alerts" },
      { value: "Dual-Path", label: "Lead Triage" },
    ],
    tech: [
      { name: "GoHighLevel", color: "orange" },
      { name: "Slack API", color: "purple" },
      { name: "Webhooks", color: "purple" },
      { name: "React", color: "purple" },
      { name: "Tailwind CSS", color: "cyan" },
    ],
    liveLink: "https://emergency-plumber-au.vercel.app/",
    sourceLink: "#",
    liveLabel: "Live Site",
    gallery: ["/images/project-plumber.png"],
  },
  {
    image: "/images/portfolio-contact-automation.png",
    category: "AI & Automation",
    title: "Portfolio Contact Form Automation",
    desc: "A real-time, multi-channel automation built with n8n. When a visitor submits the contact form, a webhook simultaneously logs the lead in Airtable as a new CRM record, sends an auto-reply via Gmail, and fires an instant Telegram alert with the full inquiry details — all in one trigger.",
    metrics: [
      { value: "3", label: "Channels" },
      { value: "0ms", label: "Manual Work" },
      { value: "100%", label: "Automated" },
    ],
    tech: [
      { name: "n8n", color: "purple" },
      { name: "Airtable", color: "orange" },
      { name: "Gmail", color: "cyan" },
      { name: "Telegram", color: "cyan" },
      { name: "Webhook", color: "purple" },
    ],
    liveLink: "#",
    sourceLink: "#",
    liveLabel: "View Workflow",
    gallery: ["/images/portfolio-contact-automation.png"],
  },
  {
    image: "/images/project-gsy.png",
    category: "Web Development",
    title: "GSY PHARMA",
    desc: "Developed a robust, multi-tenant healthcare ecosystem featuring integrated mobile and web platforms for patients, doctors, and staff, encompassing a centralized super admin dashboard, POS module, and automated inventory monitoring.",
    metrics: [
      { value: "Multi", label: "Tenant" },
      { value: "POS", label: "Integrated" },
      { value: "24/7", label: "Inventory" },
    ],
    tech: [
      { name: "React", color: "purple" },
      { name: "Node.js", color: "purple" },
      { name: "PostgreSQL", color: "purple" },
      { name: "WebRTC", color: "purple" },
    ],
    liveLink: "https://www.gsypharma.online",
    sourceLink: "#",
    liveLabel: "Live Demo",
    gallery: [
      "/images/project-gsy.png",
    ],
  },
  {
    image: "/images/project-ai-dashboard.png",
    category: "Web Development",
    title: "Waterworks Management System",
    desc: "Developed a web-based waterworks management system for the Local Government Unit (LGU) of Calape, Bohol. The system monitors meter readings, customer records, and billing, featuring role-based access, AJAX-powered data updates, and MySQL integration.",
    metrics: [
      { value: "6K+", label: "Active Consumers" },
      { value: "OJT", label: "LGU Calape Bohol" },
    ],
    tech: [
      { name: "AJAX", color: "" },
      { name: "MySQL", color: "" },
      { name: "JavaScript", color: "" },
    ],
    liveLink: "https://waterworks.calapebohol.com",
    sourceLink: "#",
    liveLabel: "Live Demo",
    gallery: [
      "/images/project-ai-dashboard.png",
    ],
  },
  {
    image: "/images/project-fullstack.png",
    category: "Web Development",
    title: "HR Management System",
    desc: "Built a web-based HR management system to handle employee records, attendance tracking, and personnel information, incorporating user authentication, role-based dashboards, and a centralized MySQL database for streamlined workforce management.",
    metrics: [
      { value: "OJT", label: "LGU Calape Bohol" },
    ],
    tech: [
      { name: "MySQL", color: "green" },
      { name: "JavaScript", color: "green" },
      { name: "HTML/CSS", color: "green" },
    ],
    liveLink: "https://hr.calapebohol.com/",
    sourceLink: "#",
    liveLabel: "Live Demo",
    gallery: [
      "/images/project-fullstack.png",
    ],
  },
];

function GalleryModal({ project, onClose }) {
  const [current, setCurrent] = useState(0);
  const images = project.gallery;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "fadeInModal 0.25s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-glass)",
          borderRadius: "20px",
          maxWidth: "900px",
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Modal Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "18px 24px", borderBottom: "1px solid var(--border-glass)",
        }}>
          <div>
            <div style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "4px" }}>
              Screenshots
            </div>
            <div style={{ fontWeight: "700", fontSize: "1.1rem" }}>{project.title}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
              {current + 1} / {images.length}
            </span>
            <button
              onClick={onClose}
              style={{
                width: "36px", height: "36px", borderRadius: "50%",
                border: "1px solid var(--border-glass)", background: "var(--bg-glass)",
                color: "var(--text-secondary)", cursor: "pointer", fontSize: "1.1rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "var(--transition)",
              }}
              onMouseEnter={e => { e.target.style.color = "var(--text-primary)"; e.target.style.borderColor = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={e => { e.target.style.color = "var(--text-secondary)"; e.target.style.borderColor = "var(--border-glass)"; }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Image Viewer */}
        <div style={{ position: "relative", background: "#000", minHeight: "420px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            key={current}
            src={images[current]}
            alt={`${project.title} screenshot ${current + 1}`}
            style={{ maxWidth: "100%", maxHeight: "520px", objectFit: "contain", animation: "fadeSlide 0.3s ease" }}
          />

          {images.length > 1 && (
            <>
              <button onClick={prev} style={navBtnStyle("left")}>‹</button>
              <button onClick={next} style={navBtnStyle("right")}>›</button>
            </>
          )}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div style={{
            display: "flex", gap: "10px", padding: "16px 24px",
            overflowX: "auto", borderTop: "1px solid var(--border-glass)",
            background: "rgba(0,0,0,0.3)",
          }}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                onClick={() => setCurrent(i)}
                style={{
                  width: "80px", height: "56px", objectFit: "cover",
                  borderRadius: "8px", cursor: "pointer", flexShrink: 0,
                  border: current === i ? "2px solid var(--accent-cyan)" : "2px solid transparent",
                  opacity: current === i ? 1 : 0.5,
                  transition: "var(--transition)",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const navBtnStyle = (side) => ({
  position: "absolute",
  [side]: "16px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "44px", height: "44px",
  borderRadius: "50%",
  border: "1px solid var(--border-glass)",
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(10px)",
  color: "var(--text-primary)",
  fontSize: "1.6rem",
  cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  transition: "var(--transition)",
  lineHeight: 1,
});

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const ref = useScrollReveal([filter]);
  const [galleryProject, setGalleryProject] = useState(null);

  const categories = ["All", "Web Development", "AI & Automation"];

  const filteredProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section className="section" id="projects" ref={ref}>
      {/* Lightbox modal */}
      {galleryProject && (
        <GalleryModal project={galleryProject} onClose={() => setGalleryProject(null)} />
      )}

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

      {/* Filter Toggle */}
      <div className="project-filter-container reveal reveal-delay-1" style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <div style={{ display: "flex", gap: "10px", background: "rgba(0,0,0,0.3)", padding: "8px", borderRadius: "50px", border: "1px solid var(--border-glass)", flexWrap: "wrap", justifyContent: "center" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: "10px 24px",
                borderRadius: "50px",
                border: "none",
                background: filter === cat ? "var(--bg-card)" : "transparent",
                color: filter === cat ? "var(--text-primary)" : "var(--text-secondary)",
                boxShadow: filter === cat ? "0 4px 15px rgba(0,0,0,0.2)" : "none",
                cursor: "pointer",
                transition: "var(--transition)",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid" key={filter}>
        {filteredProjects.map((project, i) => (
          <div key={project.title} className={`glass-card project-card reveal reveal-delay-${(i % 4) + 1}`}>
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
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link primary">
                  <i className="fas fa-external-link-alt"></i> {project.liveLabel}
                </a>
                {project.gallery && project.gallery.length > 0 && (
                  <button
                    onClick={() => setGalleryProject(project)}
                    className="project-link secondary"
                    style={{ border: "none", cursor: "pointer" }}
                  >
                    <i className="fas fa-images"></i> Screenshots
                  </button>
                )}
                {project.sourceLink !== "#" && (
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    <i className={project.sourceIcon || "fab fa-github"}></i> {project.sourceLabel || "Source"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
