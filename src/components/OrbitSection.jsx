import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import OrbitRing from "./OrbitRing";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OUTER_ICONS, MIDDLE_ICONS } from "./orbitData";
gsap.registerPlugin(ScrollTrigger);
export default function OrbitSection() {
  const sectionRef = useRef(null);

  const stageRef = useRef(null);

  const outerRef = useRef(null);

  const middleRef = useRef(null);
const [sizes, setSizes] = useState({
  outer: 620,
  middle: 420,
  inner: 240,
  card: 140,
  outerIcon: 60,
  middleIcon: 50,
});

useEffect(() => {
  const resize = () => {
    if (window.innerWidth < 640) {
      setSizes({
        outer: 300,
        middle: 210,
        inner: 110,
        card: 80,
        outerIcon: 38,
        middleIcon: 32,
      });
    } else if (window.innerWidth < 1024) {
      setSizes({
        outer: 470,
        middle: 320,
        inner: 180,
        card: 110,
        outerIcon: 48,
        middleIcon: 40,
      });
    } else {
      setSizes({
        outer: 620,
        middle: 420,
        inner: 240,
        card: 140,
        outerIcon: 60,
        middleIcon: 50,
      });
    }
  };

  resize();

  window.addEventListener("resize", resize);

  return () => {
    window.removeEventListener("resize", resize);
  };
}, []);
useEffect(() => {
  if (!outerRef.current || !middleRef.current) return;

  const outer = gsap.to(outerRef.current, {
    rotation: 360,
    duration: 45,
    repeat: -1,
    ease: "none",
    transformOrigin: "center center",
  });

  const middle = gsap.to(middleRef.current, {
    rotation: -360,
    duration: 32,
    repeat: -1,
    ease: "none",
    transformOrigin: "center center",
  });

  const outerIcons = gsap.to(
    outerRef.current.querySelectorAll(".orbit-icon"),
    {
      rotation: -360,
      duration: 45,
      repeat: -1,
      ease: "none",
    }
  );

  const middleIcons = gsap.to(
    middleRef.current.querySelectorAll(".orbit-icon"),
    {
      rotation: 360,
      duration: 32,
      repeat: -1,
      ease: "none",
    }
  );

  return () => {
    outer.kill();
    middle.kill();
    outerIcons.kill();
    middleIcons.kill();
  };
}, []);
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      stageRef.current,
      {
        scale: 1,
        y: 0,
        opacity: 1,
      },
      {
        scale: 2.5,
        y: 0,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: false,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      }
    );
  }, sectionRef);

 return () => {
  ctx.revert();
};
}, []);
  return (
    <section
ref={sectionRef}
className="
    relative
    h-[2500px]
    bg-white
  "
>
      <div
ref={stageRef}
className="
sticky
    top-0
    h-screen
    flex
    items-center
    justify-center
    will-change-transform
"
>
        {/* OUTER RING */}

        <OrbitRing
          ref={outerRef}
size={sizes.outer}
          iconSize={sizes.outerIcon}
          icons={OUTER_ICONS}
          className="border border-black/80"
        />

        {/* MIDDLE RING */}

        <OrbitRing
          ref={middleRef}
          size={sizes.middle}
          iconSize={sizes.middleIcon}
          icons={MIDDLE_ICONS}
          className="border border-black/70"
        />

        {/* INNER RING */}
{/* INNER RING */}

<div
  className="absolute rounded-full border border-gray-300"
  style={{
    width: sizes.inner,
    height: sizes.inner,
  }}
></div>

        {/* CENTER CARD */}

       <div
  className="
    absolute
    z-20
    rounded-2xl
    border-2
    border-black
    bg-white
    flex
    items-center
    justify-center
    shadow-[0_15px_45px_rgba(0,0,0,0.12)]
  "
  style={{
    width: sizes.card,
    height: sizes.card,
  }}
>
          <h2
            className="
            text-4xl
            font-black
            tracking-tight
            "
          >
            TapGo
          </h2>
        </div>
      </div>
    </section>
  );
}