"use client";
import { useState } from "react";
import { useScrollReveal } from "../hooks";

const CONTACT_ITEMS = [
  { icon: "fas fa-envelope", label: "Email", value: "alex@example.com", href: "mailto:alex@example.com" },
  { icon: "fas fa-map-marker-alt", label: "Location", value: "San Francisco, CA", href: "#" },
  { icon: "fas fa-phone", label: "Phone", value: "+1 (555) 123-4567", href: "#" },
];

const SOCIALS = [
  { icon: "fab fa-github", label: "GitHub", href: "#" },
  { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "#" },
  { icon: "fab fa-x-twitter", label: "Twitter", href: "#" },
  { icon: "fab fa-dev", label: "Dev.to", href: "#" },
];

export default function Contact() {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="reveal">
        <div className="section-label">Connect</div>
        <div className="section-title">
          Let&apos;s Build Something <span className="gradient-text">Amazing</span>
        </div>
        <div className="section-subtitle">
          Have a project in mind? Let&apos;s collaborate and turn your vision into reality.
        </div>
      </div>
      <div className="contact-grid">
        <div className="reveal reveal-delay-1">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            {CONTACT_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="contact-item">
                <div className="contact-icon"><i className={item.icon}></i></div>
                <div>
                  <div className="contact-item-label">{item.label}</div>
                  <div className="contact-item-value">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="social-links">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="social-link" aria-label={s.label}>
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <form className="contact-form glass-card reveal reveal-delay-2" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Project inquiry..." />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Tell me about your project..." required></textarea>
          </div>
          <button
            type="submit"
            className="btn-primary"
            style={{
              justifyContent: "center",
              background: submitted ? "linear-gradient(135deg, #10b981, #00d4ff)" : undefined,
            }}
          >
            {submitted ? (
              <><i className="fas fa-check"></i> Message Sent!</>
            ) : (
              <><i className="fas fa-paper-plane"></i> Send Message</>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
