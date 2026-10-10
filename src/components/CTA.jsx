import { useState } from "react";
import Reveal from "./Reveal";

// CTA: final call to action with a simple lead form.
function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="cta" className="cta">
      <div className="container">
        <Reveal>
          <div className="cta-box">
            <h2 className="section-title">Ready to never miss a <span className="gradient-text">customer</span> again?</h2>
            <p className="section-subtitle" style={{ marginBottom: "36px" }}>
              Start your free trial. Your AI assistant can be live by tomorrow.
            </p>
            {sent ? (
              <p style={{ fontSize: "1.1rem", color: "#fff" }}>
                Thanks! We&apos;ll email you setup details at <strong>{email}</strong> shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", gap: "12px", maxWidth: "440px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  style={{ flex: 1, minWidth: "220px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--line)", borderRadius: "12px", padding: "15px 18px", color: "var(--ink)", fontFamily: "var(--body)", fontSize: "1rem" }}
                />
                <button type="submit" className="btn">Start free trial</button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTA;
