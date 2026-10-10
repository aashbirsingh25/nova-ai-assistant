import { useState, useEffect } from "react";
import { Bot } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo"><span className="logo-mark"><Bot /></span>Nova</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#cta">Get started</a></li>
        </ul>
        <a href="#cta" className="btn">Try it free</a>
      </div>
    </nav>
  );
}

export default Navbar;
