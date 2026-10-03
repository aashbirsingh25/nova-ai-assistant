# Nova — AI Assistant for Business

A modern product landing page for an AI chatbot assistant, featuring a fully
interactive live chat demo. Built with React, Vite, and Framer Motion.

![Status](https://img.shields.io/badge/status-demo-blueviolet)

## Features

- **Live chat demo** — a working conversational assistant with:
  - Intent matching (understands varied phrasings, not just exact keywords)
  - Realistic typing indicator and response delay
  - Quick-reply suggestion chips
  - Lead-capture flow (collects name & email in-conversation)
- **Smooth momentum scrolling** (Lenis)
- **Scroll-reveal + micro animations** (Framer Motion), including animated stat counters
- **Modern dark SaaS theme** with drifting ambient gradient glows
- Fully responsive

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lenis](https://lenis.darkroom.engineering/) — smooth scroll
- Plain CSS (custom design system)

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # build for production
npm run preview  # preview the production build
```

## Project Structure

```
src/
  App.jsx                # root component
  index.css              # design system + all styles
  main.jsx               # entry point + Lenis smooth scroll setup
  components/
    Navbar.jsx           # sticky navigation
    Hero.jsx             # headline + live chat demo + animated stats
    ChatWindow.jsx       # the interactive chat UI (typing, lead capture)
    botBrain.js          # intent-matching reply engine
    Counter.jsx          # count-up stat animation
    TrustBar.jsx         # "trusted by" logo strip
    Features.jsx         # feature grid
    HowItWorks.jsx       # 3-step section
    CTA.jsx              # call-to-action + email capture
    Footer.jsx
    Reveal.jsx           # reusable scroll-reveal wrapper
```

## About the AI

The chat demo is intent/rule-based (keyword matching) for an instant, zero-cost,
fully self-contained demo. The logic lives in `botBrain.js`, separated from the UI,
and the chat flow is already async-friendly — so it can be upgraded to a live AI API
(e.g. OpenAI) by swapping the `getReply()` function.

---

Built by Aashbir Singh.
