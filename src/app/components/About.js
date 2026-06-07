"use client";
import { useState } from "react";
import { useScrollReveal } from "../hooks";

export default function About() {
  const ref = useScrollReveal();
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <section className="section" id="about" ref={ref}>
      <div className="reveal">
        <div className="section-label">About Me</div>
        <div className="section-title">
          Passionate About <span className="gradient-text">Innovation</span>
        </div>
        <div className="section-subtitle">
          Bridging the gap between high-performance web architecture and applied artificial intelligence.
        </div>
      </div>

      <div className="bento-grid">
        {/* Core Philosophy Card */}
        <div className="bento-card bento-large reveal reveal-delay-1">
          <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "16px" }}>
            Engineering intelligent systems that scale operations.
          </h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "16px" }}>
            I don&apos;t just build software—I engineer solutions. As a hybrid{" "}
            <strong style={{ color: "var(--accent-cyan)" }}>AI Automation Specialist</strong> and{" "}
            <strong style={{ color: "var(--accent-purple)" }}>Full Stack Developer</strong>, my focus is identifying complex business inefficiencies and turning them into streamlined, automated engines.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem" }}>
            Whether I&apos;m developing a responsive, state-of-the-art web platform or deploying autonomous agentic workflows, I build solutions that buy back time and deliver measurable ROI.
          </p>
        </div>

        {/* Impact Card */}
        <div className="bento-card bento-impact reveal reveal-delay-2">
          <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--accent-cyan)", marginBottom: "8px" }}>40%+</div>
          <div style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>Efficiency Gains</div>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>
            Architected intelligent pipelines at TechVision Labs that eliminated manual bottlenecks and transformed team workflows.
          </p>
        </div>

        {/* Tech Toggle Card */}
        <div className="bento-card reveal reveal-delay-3">
          <div className="tech-toggle">
            <button 
              className={`tech-btn ${activeTab === "ai" ? "active" : ""}`}
              onClick={() => setActiveTab("ai")}
            >
              AI / Auto
            </button>
            <button 
              className={`tech-btn ${activeTab === "web" ? "active" : ""}`}
              onClick={() => setActiveTab("web")}
            >
              Full Stack
            </button>
          </div>
          
          {activeTab === "ai" ? (
            <div className="tech-list">
              <div className="tech-item">❖ <span>Agentic Workflows &amp; n8n</span></div>
              <div className="tech-item">❖ <span>GoHighLevel (GHL) Automation</span></div>
              <div className="tech-item">❖ <span>Make.com &amp; Zapier Pipelines</span></div>
              <div className="tech-item">❖ <span>AI CRM Integrations &amp; Funnels</span></div>
            </div>
          ) : (
            <div className="tech-list" style={{ color: "var(--accent-purple)" }}>
              <div className="tech-item" style={{ color: "var(--accent-purple)" }}>❖ <span>Next.js / React</span></div>
              <div className="tech-item" style={{ color: "var(--accent-purple)" }}>❖ <span>TypeScript / JavaScript</span></div>
              <div className="tech-item" style={{ color: "var(--accent-purple)" }}>❖ <span>Node.js / Express</span></div>
              <div className="tech-item" style={{ color: "var(--accent-purple)" }}>❖ <span>Scalable APIs</span></div>
            </div>
          )}
        </div>

        {/* Code Snippet Card */}
        <div className="bento-card bento-code reveal reveal-delay-4">
          <div className="code-block" style={{ margin: 0, height: "100%", border: "none" }}>
            <div className="code-header">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
            </div>
            <pre>
              <code>
                <span className="code-keyword">class</span>{" "}
                <span className="code-function">PaulBongaos</span> {"{"}
                {"\n"}
                {"  "}
                <span className="code-keyword">constructor</span>() {"{"}
                {"\n"}
                {"    "}
                <span className="code-keyword">this</span>.role ={" "}
                <span className="code-string">&quot;AI Automation Specialist &amp; Full Stack Developer&quot;</span>;{"\n"}
                {"    "}
                <span className="code-keyword">this</span>.mission ={" "}
                <span className="code-string">&quot;Engineering intelligent systems that scale businesses&quot;</span>;{"\n"}
                {"  "}
                {"}"}{"\n"}{"\n"}
                {"  "}
                <span className="code-function">execute</span>() {"{"}
                {"\n"}
                {"    "}
                <span className="code-keyword">return</span>{" "}
                <span className="code-keyword">this</span>.identifyInefficiencies(){"\n"}
                {"      "}.buildAutomationPipelines(){"\n"}
                {"      "}.deliverValue({"{"}{"\n"}
                {"        "}efficiencyGain: <span className="code-string">&quot;40%+&quot;</span>,{"\n"}
                {"        "}impact: <span className="code-string">&quot;Maximized ROI&quot;</span>{"\n"}
                {"      "}{"}"});{"\n"}
                {"  "}
                {"}"}{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>

        {/* Terminal Status Card */}
        <div className="bento-card reveal reveal-delay-4" style={{ backgroundColor: "#0a0a0f", fontFamily: "var(--font-mono)", fontSize: "0.85rem", padding: "24px", color: "var(--accent-green)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", borderBottom: "1px solid var(--border-glass)", paddingBottom: "12px" }}>
            <div style={{ background: "#ff5f57", width: "10px", height: "10px", borderRadius: "50%" }}></div>
            <div style={{ background: "#febc2e", width: "10px", height: "10px", borderRadius: "50%" }}></div>
            <div style={{ background: "#28c840", width: "10px", height: "10px", borderRadius: "50%" }}></div>
            <span style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginLeft: "8px", letterSpacing: "1px" }}>SYSTEM.LOG</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ color: "var(--text-secondary)" }}>&gt; init <span style={{ color: "var(--accent-cyan)" }}>PaulBongaos.exe</span></div>
            <div style={{ color: "var(--text-secondary)" }}>&gt; load neural_nets <span style={{ color: "var(--accent-green)" }}>[OK]</span></div>
            <div style={{ color: "var(--text-secondary)" }}>&gt; optimize pipelines <span style={{ color: "var(--accent-green)" }}>[OK]</span></div>
            <div style={{ marginTop: "4px" }}>&gt; status: 100% OPERATIONAL<span className="blinking-cursor"></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
