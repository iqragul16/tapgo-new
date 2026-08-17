import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Drives the pinned "Why Choose TapGo?" scroll story.
 *
 * Design of the timeline (all values are scrub-driven, not time-driven):
 *   0.00 -> 0.55   heading fades out
 *   0.05 -> 1.15   tablet rotates from flat (set in CSS) to upright
 *   1.10 -> 2.30   tablet translates + scales down to its resting spot on the right
 *   1.90 -> end    feature cards reveal one at a time, staggered
 *
 * The "before" state for every animated element is authored in the JSX/CSS
 * (see TapGoScrollStory.jsx), not with gsap.set(). GSAP reads that computed
 * starting transform automatically the first time each tween is evaluated,
 * so the section also looks correct before JS has run or if a tween is
 * skipped entirely (prefers-reduced-motion).
 */
export function useTapGoTimeline({
  sectionRef,
  headingRef,
  tabletStageRef,
  tabletRef,
  tabletShadowRef,
  cardRefs,
}) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 640px) and (max-width: 1023px)",
        isMobile: "(max-width: 639px)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, isMobile, reduced } = context.conditions;
        const cards = cardRefs.current;

        // Respect reduced motion: no pin, no 3D, just gentle fades.
        if (reduced) {
          const st1 = gsap.to(headingRef.current, {
            autoAlpha: 0,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=50%",
              scrub: true,
            },
          });

          const cardTweens = cards.map((card) =>
            gsap.to(card, {
              autoAlpha: 1,
              x: 0,
              duration: 0.4,
              scrollTrigger: { trigger: card, start: "top 85%" },
            })
          );

          return () => {
            st1.scrollTrigger?.kill();
            cardTweens.forEach((t) => t.scrollTrigger?.kill());
          };
        }

        // How far right the tablet travels once it's upright, and how much
        // it shrinks to make room for the feature column. Tune these two
        // numbers to match your actual asset — they're the only "magic
        // numbers" in the whole timeline.
        const travelX = isDesktop ? "26vw" : isMobile ? "0vw" : "16vw";
        const restScale = isMobile ? 0.74 : 0.62;

        const tl = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            // Longer runway = slower, more deliberate motion per pixel
            // scrolled — this is most of what makes it read as "cinematic"
            // rather than rushed.
            end: isMobile ? "+=260%" : "+=380%",
            // A touch of lag behind the raw scroll position (instead of 1:1)
            // is what gives Apple's pages their "smoothed" feel.
            scrub: 1.4,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Heading fades as the story begins.
        tl.to(headingRef.current, { autoAlpha: 0, y: -28, filter: "blur(6px)", duration: 0.5 }, 0);

        // 2. Tablet stands upright with a decelerating "snap" (power4.out is
        // close to Apple's own cubic-bezier(0.16, 1, 0.3, 1) product-reveal ease).
        tl.to(
          tabletRef.current,
          { rotateX: 0, rotateZ: 0, duration: 1.3, ease: "power4.out" },
          0.05
        );

        // The contact shadow tightens as the tablet lifts off the "table".
        tl.to(
          tabletShadowRef.current,
          { opacity: 0.16, scaleX: 0.5, duration: 1.3, ease: "power4.out" },
          0.05
        );

        // 3. Once upright, the whole stage slides right and settles smaller,
        // clearing space on the left for the feature copy. Skipped on mobile,
        // where the tablet just stays centered above the cards.
        if (!isMobile) {
          tl.to(
            tabletStageRef.current,
            { x: travelX, scale: restScale, duration: 1.3, ease: "power3.inOut" },
            1.25
          );
          tl.to(
            tabletShadowRef.current,
            { x: travelX, scale: restScale * 0.9, duration: 1.3, ease: "power3.inOut" },
            1.25
          );
        } else {
          tl.to(tabletStageRef.current, { scale: restScale, duration: 1.0 }, 1.25);
        }

        // 4. Feature cards reveal one by one as the tablet parks — a soft
        // focus-pull (blur -> sharp) alongside the usual fade/slide reads as
        // more premium than a flat opacity fade.
        const cardStart = isMobile ? 1.9 : 2.15;
        const cardStep = isMobile ? 0.3 : 0.46;
        cards.forEach((card, i) => {
          tl.fromTo(
            card,
            { filter: "blur(8px)" },
            {
              autoAlpha: 1,
              x: 0,
              filter: "blur(0px)",
              duration: 0.6,
              ease: "power2.out",
            },
            cardStart + i * cardStep
          );
        });

        return () => tl.scrollTrigger?.kill();
      }
    );

    return () => mm.revert();
  }, [sectionRef, headingRef, tabletStageRef, tabletRef, tabletShadowRef, cardRefs]);
}