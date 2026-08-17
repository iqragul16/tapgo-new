"use client";

import { useRef } from "react";
import { useTapGoTimeline } from "../hooks/useTapGoTimeline";
import FeatureCard from "./FeatureCard";
import { TAPGO_FEATURES } from "../data/features.js";

const TABLET_SRC = "/new.avif";

export default function TapGoScrollStory() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const tabletStageRef = useRef(null);
  const tabletRef = useRef(null);
  const tabletShadowRef = useRef(null);

  const cardRefs = useRef([]);
  cardRefs.current = [];
  const registerCard = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };
  // ... baaki code waisa hi rahega

  useTapGoTimeline({
    sectionRef,
    headingRef,
    tabletStageRef,
    tabletRef,
    tabletShadowRef,
    cardRefs,
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-200"
    >
      {/* Heading — top center, minimal gap above the tablet */}
      <h2
        ref={headingRef}
        className="absolute left-1/2 top-6 z-20 w-full -translate-x-1/2 px-4 text-center text-3xl font-semibold tracking-tight text-neutral-900 sm:top-8 sm:text-4xl md:text-5xl"
      >
        Why Choose TapGo?
      </h2>

      {/* Feature column — hidden behind/left of the tablet until it slides away */}
      <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 lg:px-20">
        <ul className="flex w-full max-w-md flex-col gap-7 sm:gap-9">
          {TAPGO_FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} refCallback={registerCard} />
          ))}
        </ul>
      </div>

      {/* Tablet stage: perspective lives on the parent, 3D transform on the tablet itself */}
      <div
        className="absolute left-1/2 top-[30%] z-30 -translate-x-1/2 sm:top-[26%] md:top-[24%] [perspective:1400px]"
      >
        <div ref={tabletStageRef} className="relative">
          {/* Contact shadow, standing in for the "table" the tablet lies on */}
          <div
            ref={tabletShadowRef}
            className="absolute left-1/2 top-[88%] h-6 w-[70%] -translate-x-1/2 rounded-full bg-black/30 opacity-60 blur-xl"
          />

          {/* Starts flat (rotateX 78°) as if lying on a table; the timeline
              tweens rotateX/rotateZ to 0 to stand it upright. */}
          <div
            ref={tabletRef}
            className="w-[74vw] max-w-[520px] origin-bottom [transform-style:preserve-3d] [transform:rotateX(78deg)_rotateZ(-4deg)] will-change-transform sm:w-[56vw] md:w-[42vw] lg:w-[30vw]"
          >
            <img
              src={TABLET_SRC}
              alt="TapGo running on a tablet"
              draggable={false}
              className="w-full select-none rounded-[2rem] shadow-[0_50px_100px_-25px_rgba(0,0,0,0.5)] ring-1 ring-black/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
