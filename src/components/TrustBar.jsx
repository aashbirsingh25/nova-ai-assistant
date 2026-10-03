import Reveal from "./Reveal";

// TrustBar: a simple "trusted by" strip of company names.
// Text-based "logos" keep it dependency-free while looking product-like.
const names = ["NORTHWIND", "Lumio", "ACME Co", "Vertex", "bloom.", "QUANTA"];

function TrustBar() {
  return (
    <div className="trustbar">
      <div className="container">
        <Reveal>
          <p className="trust-label">Trusted by forward-thinking teams</p>
          <div className="trust-logos">
            {names.map((n, i) => <span key={i}>{n}</span>)}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default TrustBar;
