import { Bot } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo"><span className="logo-mark"><Bot /></span>Nova</div>
        <p>The AI assistant that works while you sleep.</p>
        <p style={{ marginTop: "16px", fontSize: "0.82rem", opacity: 0.6 }}>
          © {new Date().getFullYear()} Nova Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
