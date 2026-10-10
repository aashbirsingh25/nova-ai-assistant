import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ChatWindow from "./ChatWindow";
import Counter from "./Counter";

// Hero: pitch on the left, the LIVE chat demo on the right.
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge"><Sparkles /> Powered by AI</div>
            <h1>Your 24/7 <span className="gradient-text">AI assistant</span> for business</h1>
            <p>
              Nova answers customer questions, captures leads, and books
              appointments — automatically, around the clock. Try the live demo →
            </p>
            <div className="hero-cta">
              <a href="#cta" className="btn">Get started free</a>
              <a href="#features" className="btn btn-ghost">See features</a>
            </div>
            <div className="hero-stats">
              <Counter staticText="24/7" label="Always online" />
              <Counter staticText="<1s" label="Response time" />
              <Counter staticText="0" label="Enquiries missed" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Gentle floating motion on the chat window */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChatWindow />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
