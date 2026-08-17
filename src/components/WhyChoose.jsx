import React, { useEffect, useRef, useState, useCallback } from "react";

/**
 * MERIDIAN — Scroll Storytelling Section
 * A premium, cinematic scroll-driven story on a white background.
 * React + Tailwind only. Pass your own photo via the `imageSrc` prop:
 * <ScrollStory imageSrc="/your-photo.jpg" />
 * If no prop is given, IMAGE_SRC below is used as a placeholder.
 */

import machineImg from "../assets/new.avif";
const IMAGE_SRC = machineImg;
const FEATURES = [
  {
    title: "Movement",
    description:
      "A hand-finished automatic caliber with a 42-hour reserve, visible through a sapphire caseback. Every escapement is regulated by eye, not by machine.",
  },
  {
    title: "Case",
    description:
      "Milled from a single block of grade-5 titanium — half the weight of steel, twice the resistance to the elements it's built to survive.",
  },
  {
    title: "Crystal",
    description:
      "Domed sapphire, flat on the inside and curved on the outside, with nine layers of anti-reflective coating so the dial reads true in any light.",
  },
  {
    title: "Strap",
    description:
      "Vegetable-tanned leather, hand-stitched in saddle thread, made to soften and darken with a decade of wear on the wrist.",
  },
];

// Zone boundaries across the 0–1 scroll-progress range.
// Each pair marks [hold-end, next-hold-start] so every scene gets a
// settled beat before the next transition begins (~1s of scroll dwell).
const Z = {
  heroHoldEnd: 0.04,
  s1In: 0.14,
  s1HoldEnd: 0.2,
  s2In: 0.3,
  s2HoldEnd: 0.36,
  s3In: 0.46,
  s3HoldEnd: 0.52,
  s4In: 0.62,
  s4HoldEnd: 0.85,
  releaseEnd: 0.97,
};

function clamp01(t) {
  return Math.min(1, Math.max(0, t));
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Piecewise-linear keyframe evaluator with cubic easing inside each segment.
// stops: [[progress, value], ...] sorted ascending by progress.
function keyframe(p, stops) {
  for (let i = 0; i < stops.length - 1; i++) {
    const [p0, v0] = stops[i];
    const [p1, v1] = stops[i + 1];
    if (p <= p1 || i === stops.length - 2) {
      if (p1 === p0) return v1;
      const t = easeInOutCubic(clamp01((p - p0) / (p1 - p0)));
      return v0 + (v1 - v0) * t;
    }
  }
  return stops[stops.length - 1][1];
}

function fadeStops(inStart, inEnd, holdEnd, outEnd) {
  return [
    [0, 0],
    [inStart, 0],
    [inEnd, 1],
    [holdEnd, 1],
    [outEnd, 0],
    [1, 0],
  ];
}

function riseStops(inStart, inEnd, holdEnd, outEnd) {
  return [
    [0, 18],
    [inStart, 18],
    [inEnd, 0],
    [holdEnd, 0],
    [outEnd, -14],
    [1, -14],
  ];
}

export default function ScrollStory({ imageSrc = IMAGE_SRC }) {
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const targetProgress = useRef(0);
  const smoothProgress = useRef(0);
  const reducedMotion = useRef(false);

  const [display, setDisplay] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
    const onChange = (e) => (reducedMotion.current = e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
  const checkSize = () => setIsMobile(window.innerWidth < 768);

  checkSize();

  window.addEventListener("resize", checkSize);

  return () => window.removeEventListener("resize", checkSize);
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

  useEffect(() => {
    const tick = () => {
      const ease = reducedMotion.current ? 1 : 0.09;
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

  // --- Hero heading/description ---
  const heroOpacity = keyframe(p, [
    [0, 1],
    [Z.heroHoldEnd, 1],
    [Z.s1In, 0],
    [1, 0],
  ]);
  const heroY = keyframe(p, [
    [0, 0],
    [Z.heroHoldEnd, 0],
    [Z.s1In, -28],
    [1, -28],
  ]);

  // --- Watch image transforms ---
  const rotateX = keyframe(p, [
    [0, 50],
    [Z.heroHoldEnd, 50],
    [Z.s1In, 0],
    [1, 0],
  ]);

  const desktopTranslateX = keyframe(p, [
    [0, 0],
    [Z.heroHoldEnd, 0],
    [Z.s1In, 72],
    [Z.s1HoldEnd, 72],
    [Z.s2In, -72],
    [Z.s2HoldEnd, -72],
    [Z.s3In, 72],
    [Z.s3HoldEnd, 72],
    [Z.s4In, -72],
    [Z.s4HoldEnd, -72],
    [Z.releaseEnd, 0],
    [1, 0],
  ]);

  const mobileTranslateY = keyframe(p, [
    [0, 0],
    [Z.heroHoldEnd, 0],
    [Z.s1In, -18],
    [1, -18],
  ]);

  const imageScale = keyframe(p, [
    [0, 1],
    [Z.heroHoldEnd, 1],
    [Z.s1In, 1.04],
    [1, 1.04],
  ]);

  // --- Feature opacity / rise per scene ---
  const featureStops = [
    [Z.heroHoldEnd, Z.s1In, Z.s1HoldEnd, Z.s2In],
    [Z.s1HoldEnd, Z.s2In, Z.s2HoldEnd, Z.s3In],
    [Z.s2HoldEnd, Z.s3In, Z.s3HoldEnd, Z.s4In],
    [Z.s3HoldEnd, Z.s4In, Z.s4HoldEnd, Z.releaseEnd],
  ];

  const features = FEATURES.map((f, i) => {
    const [a, b, c, d] = featureStops[i];
    return {
      ...f,
      opacity: keyframe(p, fadeStops(a, b, c, d)),
      y: keyframe(p, riseStops(a, b, c, d)),
      side: i % 2 === 0 ? "left" : "right",
    };
  });

  const activeIndex = features.reduce(
    (best, f, i) => (f.opacity > features[best].opacity ? i : best),
    0
  );
  const anyFeatureVisible = features.some((f) => f.opacity > 0.05);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: "600vh", backgroundColor: "#ffffff" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .merid-serif { font-family: 'Fraunces', serif; }
        .merid-sans { font-family: 'Inter', sans-serif; }
        .merid-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(198,166,100,0.14) 0%, rgba(198,166,100,0.04) 45%, transparent 70%)",
          }}
        />

        {/* hairline frame */}
        {/* <div className="pointer-events-none absolute inset-6 rounded-[2px] border border-[#e7e3da] sm:inset-8" /> */}

        {/* Hero heading + description */}
       <div
  className="absolute left-1/2 top-[8%] w-[90%] max-w-xl -translate-x-1/2 text-center sm:top-[10%]"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${heroY}px)`,
          }}
        >
          
          <h2 className="
  mt-4
  text-3xl
  sm:text-4xl
  md:text-5xl
  lg:text-5xl
  text-gray-900
  font-normal
  leading-tight
">
  Why choose TapGo?
</h2>
          <p className="merid-sans mx-auto mt-4 w-full max-w-[520px] text-[13px] sm:text-[15px] leading-relaxed text-[#6b6559]">
  Smart tools that simplify service, reduce costs and increase customer satisfaction.
</p>
        </div>

       {/* Image */}
<div
  className="absolute left-1/2 top-1/2"
  style={{
    transform: isMobile
  ? `translate(-50%, calc(-50% + 20px + ${mobileTranslateY}px))`
  : `translate(calc(-50% + ${desktopTranslateX}px), calc(-50% + 20px))`,
    perspective: "1200px",
  }}
>
  {/* Soft Glow */}
  <div className="absolute left-1/2 top-1/2 -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 blur-[80px] opacity-70 sm:h-[340px] sm:w-[340px] md:h-[430px] md:w-[430px] lg:h-[500px] lg:w-[500px]" />

  {/* Image */}
  <div
    style={{
      transformStyle: "preserve-3d",
      transform: `rotateX(${rotateX}deg) scale(${imageScale})`,
      transition: "transform 0.05s linear",
    }}
  >
    <img
  src={imageSrc}
  alt="Meridian"
  draggable="false"
  className="
    w-[190px]
    max-w-[70vw]
    sm:w-[280px]
    md:w-[380px]
    lg:w-[500px]
    max-h-[65vh]
    sm:max-h-[75vh]
    lg:max-h-[85vh]
    object-contain
    select-none
  "
/>
  </div>
</div>

        {/* Desktop / tablet feature text — alternating left/right */}
        {!isMobile && (
          <>
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`absolute top-1/2 w-[78%] max-w-[210px] -translate-y-1/2 sm:max-w-xs md:max-w-sm ${
                  f.side === "left"
                    ? "left-[0%] text-left sm:left-[7%] md:left-[9%] lg:left-[11%]"
                    : "right-[0%] text-right sm:right-[7%] md:right-[9%] lg:right-[11%]"
                }`}
                style={{
                  opacity: f.opacity,
                  transform: `translateY(calc(-50% + ${f.y}px))`,
                  pointerEvents: f.opacity > 0.5 ? "auto" : "none",
                }}
              >
                {/* <p className="merid-mono mb-2 text-[11px] tracking-[0.3em] text-[#a6813f]">
                  0{i + 1}
                </p> */}
                <h3 className="merid-serif text-[clamp(1.4rem,2.6vw,2.1rem)] font-medium leading-tight text-[#161512]">
                  {f.title}
                </h3>
                <p className="merid-sans mt-3 text-[13px] leading-relaxed text-[#6b6559] sm:text-[14px] md:text-[15px]">
                  {f.description}
                </p>
              </div>
            ))}
          </>
        )}

        {/* Mobile feature text — always centered below the image */}
        {isMobile && (
          <div className="absolute left-1/2 top-[78%] sm:top-[82%] w-[88%] max-w-[420px] -translate-x-1/2 text-center">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="absolute left-0 top-0 w-full"
                style={{
                  opacity: f.opacity,
                  transform: `translateY(${f.y}px)`,
                  pointerEvents: f.opacity > 0.5 ? "auto" : "none",
                }}
              >
                
                <h3 className="merid-serif text-[1.35rem] font-medium leading-tight text-[#161512]">
                  {f.title}
                </h3>
<p className="merid-sans mx-auto mt-2 w-full max-w-[300px] text-[13px] sm:text-[14px] leading-relaxed text-[#6b6559]">                  {f.description}
                </p>
              </div>
            ))}
          </div>
        )}

        
      </div>
    </section>
  );
}