"use client";
import { useScrollReveal } from "../hooks";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="about" ref={ref}>
      <div className="reveal">
        <div className="section-label">About Me</div>
        <div className="section-title">
          Passionate About <span className="gradient-text">Innovation</span>
        </div>
        <div className="section-subtitle">
          I blend AI intelligence with full stack engineering to build systems
          that think, adapt, and scale.
        </div>
      </div>
      <div className="about-grid">
        <div className="glass-card reveal reveal-delay-1">
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "0.95rem" }}>
            I&apos;m a driven technologist who thrives at the crossroads of{" "}
            <strong style={{ color: "var(--accent-cyan)" }}>artificial intelligence</strong> and{" "}
            <strong style={{ color: "var(--accent-purple)" }}>full stack development</strong>.
            With a deep passion for automation, I design and deploy end-to-end
            solutions — from intelligent chatbots and predictive models to
            scalable web platforms and CI/CD pipelines.
          </p>
          <br />
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "0.95rem" }}>
            My mission: eliminate inefficiency through smart technology. Whether
            it&apos;s building a neural network for sentiment analysis,
            architecting a microservices backend, or automating workflows with
            RPA — I bring precision, creativity, and relentless curiosity to
            every project.
          </p>
        </div>
        <div className="code-block reveal reveal-delay-2">
          <div className="code-header">
            <span className="code-dot"></span>
            <span className="code-dot"></span>
            <span className="code-dot"></span>
          </div>
          <pre>
            <code>
              <span className="code-keyword">class</span>{" "}
              <span className="code-function">AlexRivera</span> {"{"}
              {"\n"}
              {"  "}
              <span className="code-keyword">constructor</span>() {"{"}
              {"\n"}
              {"    "}
              <span className="code-keyword">this</span>.role ={" "}
              <span className="code-string">&quot;AI Automation Specialist&quot;</span>;{"\n"}
              {"    "}
              <span className="code-keyword">this</span>.stack ={" "}
              <span className="code-string">&quot;Full Stack Developer&quot;</span>;{"\n"}
              {"    "}
              <span className="code-keyword">this</span>.passion = [{"\n"}
              {"      "}
              <span className="code-string">&quot;Machine Learning&quot;</span>,{"\n"}
              {"      "}
              <span className="code-string">&quot;Process Automation&quot;</span>,{"\n"}
              {"      "}
              <span className="code-string">&quot;Cloud Architecture&quot;</span>,{"\n"}
              {"      "}
              <span className="code-string">&quot;Scalable Systems&quot;</span>{"\n"}
              {"    "}];{"\n"}
              {"  "}
              {"}"}{"\n"}{"\n"}
              {"  "}
              <span className="code-function">buildSomethingAwesome</span>() {"{"}
              {"\n"}
              {"    "}
              <span className="code-keyword">return</span>{" "}
              <span className="code-string">&quot;Let&apos;s innovate together 🚀&quot;</span>;{"\n"}
              {"  "}
              {"}"}{"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
