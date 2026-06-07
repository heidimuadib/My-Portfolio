"use client";
import { useState } from "react";
import { useScrollReveal } from "../hooks";

const CONTACT_ITEMS = [
  { icon: "fas fa-envelope", label: "Email", value: "paul.bongaos.work@gmail.com", href: "mailto:paul.bongaos.work@gmail.com" },
  { icon: "fas fa-map-marker-alt", label: "Location", value: "Sta. Cruz, Calape, Bohol - Philippines", href: "#" },
  { icon: "fas fa-phone", label: "Phone", value: "+63 9944714053", href: "tel:+639944714053" },
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

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          e.target.reset();
        }, 5000);
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
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
            disabled={loading || submitted}
            style={{
              justifyContent: "center",
              background: submitted ? "linear-gradient(135deg, #10b981, #00d4ff)" : undefined,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {submitted ? (
              <><i className="fas fa-check"></i> Message Sent!</>
            ) : loading ? (
              <><i className="fas fa-spinner fa-spin"></i> Sending...</>
            ) : (
              <><i className="fas fa-paper-plane"></i> Send Message</>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
