import Reveal from "./Reveal";

const steps = [
  { title: "Tell us about your business", desc: "Share your services, pricing, and common questions. Takes 10 minutes." },
  { title: "We train your assistant", desc: "Nova learns everything and is ready to chat in your brand's voice." },
  { title: "Add it to your site", desc: "Paste one snippet and your 24/7 assistant goes live instantly." },
];

function HowItWorks() {
  return (
    <section id="how">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>How it works</span>
          <h2 className="section-title">Live in <span className="gradient-text">three steps</span></h2>
          <p className="section-subtitle">No code, no complexity. Up and running in a day.</p>
        </Reveal>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="step">
                <div className="step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
