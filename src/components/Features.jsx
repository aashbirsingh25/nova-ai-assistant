import { MessageSquare, Target, CalendarCheck, Brain, Zap, BarChart3 } from "lucide-react";
import Reveal from "./Reveal";

// Features: what the assistant does — framed as business benefits.
const features = [
  { Icon: MessageSquare, title: "Answers instantly", desc: "Replies to customer questions 24/7, so you never miss an enquiry — even at 3am." },
  { Icon: Target, title: "Captures leads", desc: "Collects names and emails from interested visitors and hands them straight to you." },
  { Icon: CalendarCheck, title: "Books appointments", desc: "Lets customers schedule calls or visits right inside the conversation." },
  { Icon: Brain, title: "Learns your business", desc: "Trained on your services, pricing, and FAQs so every answer sounds like you." },
  { Icon: Zap, title: "Sets up in days", desc: "Drops into any website with a single snippet — no technical work on your end." },
  { Icon: BarChart3, title: "Tracks everything", desc: "See what customers ask most, so you know exactly what they want." },
];

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>Features</span>
          <h2 className="section-title">Everything your <span className="gradient-text">customers need</span></h2>
          <p className="section-subtitle">One assistant that works like your best employee — but never sleeps.</p>
        </Reveal>
        <div className="feature-grid">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="feature-card">
                <div className="feature-icon"><f.Icon /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
