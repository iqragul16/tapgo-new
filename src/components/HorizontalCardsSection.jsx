import React, { useEffect, useRef, useState, useCallback } from "react";


// ------------------------------------------------------------------
// TapGo — Scroll Storytelling Section
// ------------------------------------------------------------------
// Pure React (useState/useEffect/useRef) + Tailwind. No animation
// libraries. Cards now flow as ONE continuous filmstrip — all 5 sit
// side by side in a row and glide together from right to left as a
// single connected motion, instead of appearing one at a time.
//
// >>> Drop your 5 photos in ./assets/ next to this file, named
//     card-1.jpg ... card-5.jpg (or edit the paths below to match
//     wherever you keep them in your project). <<<
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";

const HEADING = "What does TapGo offer?";
const DESCRIPTION =
  "Discover how TapGo is transforming restaurants with speed, simplicity, and smart service.";

const FEATURES = [
  {
    image: card1,
    title: "Instant Ordering",
    description:
      "Guests tap, browse, and order in seconds — no waiting for a server, no standing in line.",
  },
  {
    image: card2,
    title: "Smart Menus",
    description:
      "Menus adapt in real time, highlighting what's in stock and updating the moment something sells out.",
  },
  {
    image: card3,
    title: "Contactless Payments",
    description:
      "Every card, wallet, and QR method accepted in one tap — checkout that never slows the table down.",
  },
  {
    image: card4,
    title: "Real-Time Insights",
    description:
      "Every order feeds a live dashboard, so owners see what's selling and what to change instantly.",
  },
  {
    image: card5,
    title: "Loyalty & Rewards",
    description:
      "Every order automatically earns points redeemable table-side, turning first visits into regulars.",
  },
];

function clamp01(t) {
  return Math.min(1, Math.max(0, t));
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function HorizontalCardsSection({ navbarHeight = 0 }) {
  const sectionRef = useRef(null);
  const stripRef = useRef(null);
  const rafRef = useRef(null);
  const targetProgress = useRef(0);
  const smoothProgress = useRef(0);
  const reducedMotion = useRef(false);

  const [display, setDisplay] = useState(0);
  const [dims, setDims] = useState({ viewport: 0, strip: 0 });

  // Respect reduced-motion users.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
    const onChange = (e) => (reducedMotion.current = e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  

  // Measure the strip's real rendered width so the travel distance
  // (fully hidden right → fully hidden left) is always exact,
  // whatever the screen size or card sizing breakpoint.
  useEffect(() => {
   
    const measure = () => {
      if (!stripRef.current) return;
      setDims({
        viewport: window.innerWidth,
        strip: stripRef.current.scrollWidth,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const raw = total > 0 ? -rect.top / total : 0;
    targetProgress.current = clamp01(raw);
  }, []);

  useEffect(() => {
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Slow exponential settle: cards keep gliding for roughly 1-1.5s
  // after the user stops scrolling, then ease to a stop, instead of
  // snapping straight to the scroll position.
  useEffect(() => {
    const tick = () => {
      const ease = reducedMotion.current ? 1 : 0.045;
      smoothProgress.current +=
        (targetProgress.current - smoothProgress.current) * ease;
      if (Math.abs(targetProgress.current - smoothProgress.current) < 0.0004) {
        smoothProgress.current = targetProgress.current;
      }
      setDisplay(smoothProgress.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

 

  const p = display;
  const eased = easeInOutCubic(p);

  // Single continuous travel: the whole strip starts fully hidden
  // past the right edge and ends fully hidden past the left edge —
  // one connected motion, not five separate ones.
  const startX = dims.viewport;
  const endX = -dims.strip;
  const stripX = startX + (endX - startX) * eased;

  return (
  <section
  ref={sectionRef}
  className="relative w-full overflow-x-clip bg-white"
  style={{ height: "600vh" }}
>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .tg-serif { font-family: 'Fraunces', serif; }
        .tg-sans { font-family: 'Inter', sans-serif; }
        .tg-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="sticky top-0 h-screen w-full overflow-x-hidden overflow-y-hidden bg-white">
        {/* Heading — pinned below the navbar for the whole scroll, never fades */}
        <div
          className="absolute left-1/2 w-[86%] max-w-xl -translate-x-1/2 text-center"
          style={{
 top: `calc(${navbarHeight}px + clamp(20px,6%,50px))`
}}
        >
          <h2 className="tg-serif text-[clamp(1.6rem,3.8vw,2.6rem)] font-medium leading-[1.1] text-[#161512]">
            {HEADING}
          </h2>
          <p className="tg-sans mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-[#6b6559] sm:text-[15px]">
            {DESCRIPTION}
          </p>
        </div>

        {/* Ambient glow behind the card stage */}
        <div
          className="pointer-events-none absolute left-1/2 top-[62%] h-[420px] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,182,193,0.4) 0%, rgba(255,182,193,0.12) 50%, transparent 72%)",
          }}
        />

        {/* Filmstrip track — clips the strip to the viewport width, with a soft edge fade */}
        <div
  className="
    absolute left-0 right-0
    top-[48%]
    sm:top-[45%]
    md:top-[56%]
    lg:top-[62%]
    w-full
    -translate-y-1/2
    overflow-hidden
  "
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div
            ref={stripRef}
            className="flex w-max items-center gap-6 sm:gap-7 md:gap-8"
            style={{
             transform: `translate3d(${stripX}px, 0, 0)`,
transition: "transform 0.05s linear",
willChange: "transform",
            }}
          >
            {FEATURES.map((f, i) => (
              <Card key={f.title} feature={f} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ feature, index }) {
  return (
<div
  className="
    relative flex-shrink-0 overflow-hidden rounded-[14px]
    w-[200px] h-[280px]
    sm:w-[240px] sm:h-[330px]
    md:w-[280px] md:h-[390px]
    lg:w-[320px] lg:h-[440px]
    shadow-[0_20px_45px_rgba(0,0,0,0.18)]
  "
>      <img
        src={feature.image}
        alt={feature.title}
        className="absolute inset-0 h-full w-full object-cover"
        draggable="false"
      />
      {/* bottom scrim so light text stays readable over any photo */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-left">
        <p className="tg-mono mb-1.5 text-[10px] tracking-[0.3em] text-[#e6cf9a]">
          0{index + 1}
        </p>
        <h3 className="tg-serif text-[1.15rem] font-medium leading-tight text-white sm:text-[1.3rem]">
          {feature.title}
        </h3>
        <p className="tg-sans mt-2 text-[12.5px] leading-relaxed text-white/80 sm:text-[13.5px]">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

// ---- Mobile: storytelling fully disabled, plain vertical flow ----
function MobileStory() {
  return (
    <section className="w-full bg-white px-6 py-16 text-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .tg-serif { font-family: 'Fraunces', serif; }
        .tg-sans { font-family: 'Inter', sans-serif; }
        .tg-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <h2 className="tg-serif text-[1.8rem] font-medium leading-tight text-[#161512]">
        {HEADING}
      </h2>
      <p className="tg-sans mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-[#6b6559]">
        {DESCRIPTION}
      </p>

      {FEATURES.map((f, i) => (
        <div
          key={f.title}
          className="relative mx-auto mt-12 h-[340px] w-[250px] overflow-hidden rounded-[14px] shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
        >
          <img
            src={f.image}
            alt={f.title}
            className="absolute inset-0 h-full w-full object-cover"
            draggable="false"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-left">
            <p className="tg-mono mb-1.5 text-[10px] tracking-[0.3em] text-[#e6cf9a]">
              0{i + 1}
            </p>
            <h3 className="tg-serif text-[1.2rem] font-medium leading-tight text-white">
              {f.title}
            </h3>
            <p className="tg-sans mt-2 text-[13px] leading-relaxed text-white/80">
              {f.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}