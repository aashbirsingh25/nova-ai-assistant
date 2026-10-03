import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getReply } from "./botBrain";

// ChatWindow: the live demo chat. Handles messages, the "thinking" typing
// indicator, a realistic delay (so it feels like real AI), and lead capture.
function ChatWindow() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Nova 🤖 — the AI assistant for Nova Labs. Ask me anything about our services, pricing, or book a call." },
  ]);
  const [chips, setChips] = useState(["What do you offer?", "Pricing", "Book a call"]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [collectingLead, setCollectingLead] = useState(false);
  const scrollRef = useRef(null);

  // Keep the view pinned to the newest message / typing dots.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  // Core send flow: show user msg -> show typing -> after a delay, show reply.
  function send(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setChips([]);

    // If we're waiting for lead details, treat this message as the lead.
    if (collectingLead) {
      setCollectingLead(false);
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((m) => [...m, { from: "bot", text: "Got it ✅ Thank you! The team will reach out within 24 hours. Anything else I can help with in the meantime?" }]);
        setChips(["Services", "Pricing"]);
      }, 1400);
      return;
    }

    // Normal flow: think, then reply.
    setTyping(true);
    const { reply, chips: newChips, action } = getReply(trimmed);
    // Delay scales a little with reply length, so longer answers "take longer".
    const delay = 700 + Math.min(reply.length * 12, 1400);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: reply }]);
      setChips(newChips || []);
      if (action === "collectLead") setCollectingLead(true);
    }, delay);
  }

  return (
    <div className="chat-shell">
      <div className="chat-top">
        <div className="chat-avatar">N</div>
        <div>
          <div className="ct-name">Nova</div>
          <div className="ct-status">Online · AI Assistant</div>
        </div>
      </div>

      <div className="chat-scroll" ref={scrollRef}>
        {messages.map((m, i) => (
          <motion.div
            key={i}
            className={`row ${m.from}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* whiteSpace preserves the line breaks in multi-line replies */}
            <div className="msg-bubble" style={{ whiteSpace: "pre-line" }}>{m.text}</div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        <AnimatePresence>
          {typing && (
            <motion.div
              className="row bot"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="typing"><span></span><span></span><span></span></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick-reply chips */}
      {chips.length > 0 && (
        <div className="chat-chips">
          {chips.map((c, i) => (
            <button key={i} onClick={() => send(c)}>{c}</button>
          ))}
        </div>
      )}

      {/* Compose box */}
      <form className="chat-compose" onSubmit={(e) => { e.preventDefault(); send(input); }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={collectingLead ? "Type your name & email..." : "Ask Nova anything..."}
        />
        <button type="submit" aria-label="Send">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;
