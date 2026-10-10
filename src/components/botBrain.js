// botBrain.js — the "intelligence" behind Nova.
// It's rule/intent based (free, no API), but structured to feel smart:
// - matches INTENTS (multiple phrasings), not single keywords
// - supports follow-up context (e.g. after "pricing" it can go deeper)
// - returns a reply + optional quick-reply chips
//
// TO UPGRADE TO REAL AI later: replace getReply() with an async fetch to an
// AI API (OpenAI/Claude). The UI already supports async via the typing delay.

const intents = [
  {
    name: "greeting",
    patterns: ["hi", "hello", "hey", "good morning", "good evening", "yo"],
    reply: "Hey there! I'm Nova, the AI assistant for Nova Labs. I can help with our services, pricing, booking a call, or answering any questions. What brings you here today?",
    chips: ["What do you offer?", "Pricing", "Book a call"],
  },
  {
    name: "services",
    patterns: ["service", "offer", "do you do", "what can you", "help with", "products"],
    reply: "Nova Labs helps businesses with three things:\n\n• Custom websites & web apps\n• AI chatbots & automation\n• Branding & design\n\nWant details on any of these?",
    chips: ["Websites", "AI chatbots", "Pricing"],
  },
  {
    name: "websites",
    patterns: ["website", "web app", "web development", "site"],
    reply: "We build fast, modern websites — from simple landing pages to full web apps. Typical turnaround is 1–3 weeks. Would you like a rough quote?",
    chips: ["Get a quote", "See pricing"],
  },
  {
    name: "chatbots",
    patterns: ["chatbot", "ai", "automation", "bot", "assistant"],
    reply: "That's my specialty 😊 We build AI assistants like me that answer customer questions 24/7, capture leads, and book appointments automatically. They can be added to any website in days.",
    chips: ["How much?", "Book a call"],
  },
  {
    name: "pricing",
    patterns: ["price", "pricing", "cost", "how much", "rate", "charge", "budget", "quote"],
    reply: "Here's a rough guide:\n\n• Landing page — from $400\n• Business website — from $900\n• AI chatbot — from $600\n• Custom web app — let's talk\n\nEvery project is quoted to fit your needs. Shall I set up a quick call to give you an exact figure?",
    chips: ["Book a call", "Leave my details"],
  },
  {
    name: "booking",
    patterns: ["book", "call", "meeting", "schedule", "appointment", "talk to", "demo"],
    reply: "Perfect — let's set that up. Could you share your name and email, and I'll have the team reach out within 24 hours?",
    chips: [],
    action: "collectLead",
  },
  {
    name: "hours",
    patterns: ["hour", "open", "available", "when", "timing"],
    reply: "The team is available Monday–Friday, 9am–6pm, but I'm here 24/7 to answer questions and take requests. 🌙",
    chips: ["Services", "Pricing"],
  },
  {
    name: "contact",
    patterns: ["contact", "email", "phone", "reach", "where"],
    reply: "You can reach the team at hello@novalabs.ai, or just leave your details here and we'll come to you. Want to do that?",
    chips: ["Leave my details", "Book a call"],
  },
  {
    name: "thanks",
    patterns: ["thank", "thanks", "cheers", "appreciate", "bye"],
    reply: "Anytime! 🙌 If you think of anything else, I'm right here. Have a great day!",
    chips: [],
  },
];

const fallback = {
  reply: "Good question! I don't have an exact answer for that, but the team definitely can. Want to leave your details or book a quick call so they can help you directly?",
  chips: ["Book a call", "See services", "Pricing"],
};

// Picks the best matching intent for a message.
export function getReply(text) {
  const lower = text.toLowerCase();
  let best = null;
  let bestScore = 0;

  for (const intent of intents) {
    // score = how many of the intent's phrases appear in the message
    const score = intent.patterns.reduce((s, p) => (lower.includes(p) ? s + 1 : s), 0);
    if (score > bestScore) { bestScore = score; best = intent; }
  }

  if (best && bestScore > 0) {
    return { reply: best.reply, chips: best.chips, action: best.action || null };
  }
  return { reply: fallback.reply, chips: fallback.chips, action: null };
}
