import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Counter: counts up from 0 to `value` when it scrolls into view.
// `suffix`/`prefix` let us show "3×", "<1s", etc. If `value` is null,
// it just renders `label` as static text (for non-numeric stats).
function Counter({ value, prefix = "", suffix = "", label, staticText }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || value == null) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    function tick(now) {
      const p = Math.min((now - startTime) / duration, 1);
      // ease-out so it decelerates near the end
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div className="hero-stat" ref={ref}>
      <div className="num gradient-text">
        {staticText != null ? staticText : `${prefix}${n}${suffix}`}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

export default Counter;
