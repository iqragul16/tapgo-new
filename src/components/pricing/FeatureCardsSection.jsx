import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import readerImg from "../../assets/reader.avif";
import kioskImg from "../../assets/kiosk5.avif";
import dashboardImg from "../../assets/dashboard.avif";
import qrImg from "../../assets/computer.avif";
import analyticsImg from "../../assets/analytics.avif";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    title: "Reader",
    description:
      "A fast, reliable reader device built for everyday checkout flows simple to set up and effortless to use.",
    image: readerImg,
  },
  {
    title: "Kiosk",
    description:
      "A self service kiosk that lets customers order and pay on their own, reducing wait times and freeing up staff.",
    image: kioskImg,
  },
  {
    title: "Dashboard",
    description:
      "A clean, real time dashboard that gives you full visibility into sales, orders, and performance at a glance.",
    image: dashboardImg,
  },
  {
    title: "QR & Computer",
    description:
      "Contactless QR ordering paired with a full desktop experience for managing everything from any computer.",
    image: qrImg,
  },
  {
    title: "Analytics",
    description:
      "Deep analytics that turn raw transaction data into insights you can actually act on.",
    image: analyticsImg,
  },
];

const STRIP = 26;
const DESKTOP_MEDIA_QUERY = "(min-width: 801px)";

export default function FeatureCardsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stackRef = useRef(null);
  const cardRefs = useRef([]);

  cardRefs.current = [];

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // -----------------------------
      // Heading animation
      // -----------------------------
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      const mm = gsap.matchMedia();

      // -----------------------------
      // Desktop animation
      // -----------------------------
      mm.add(DESKTOP_MEDIA_QUERY, () => {
        const cards = cardRefs.current;
        const total = cards.length;

        // Initial card positions
        cards.forEach((card, i) => {
          gsap.set(card, {
            y: i === 0 ? 0 : "100%",
            scale: 1,
            zIndex: i + 1,
            transformOrigin: "top center",
          });
        });

        const timeline = gsap.timeline({
  defaults: {
    ease: "none",
  },

  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top top",
    end: () => `+=${(total - 1) * window.innerHeight}`,
    scrub: 1,

    pin: stackRef.current,
    pinSpacing: true,

    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

        // -----------------------------
        // Card-by-card animation
        // -----------------------------
        for (let i = 1; i < total; i++) {
          const segment = i - 1;

          // New card comes from completely below
          timeline.to(
            cards[i],
            {
              y: 0,
              duration: 1,
            },
            segment
          );

          // Previous cards move slightly upward
          // leaving a small visible strip
          for (let j = 0; j < i; j++) {
            timeline.to(
              cards[j],
              {
                y: -STRIP * (i - j),
                scale: 1 - 0.02 * (i - j),
                duration: 1,
              },
              segment
            );
          }
        }

        return () => {
          timeline.kill();
        };
      });

      // -----------------------------
      // Tablet + Mobile
      // -----------------------------
      mm.add("(max-width: 800px)", () => {
        gsap.set(cardRefs.current, {
          clearProps: "all",
        });
      });

      return () => {
        mm.revert();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-5 py-20 md:px-8 lg:px-12"
    >
      {/* Heading */}
      <div
        ref={headingRef}
        className="mx-auto mb-12 max-w-5xl text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Essential Hardware
        </h2>
      </div>

      {/* Cards */}
    <div
  ref={stackRef}
  className="
    flex flex-col gap-6
    min-[801px]:relative
    min-[801px]:block
    min-[801px]:h-[70vh]
    min-[801px]:gap-0
  "
>
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            ref={addCardRef}
            className="
              flex
              flex-col-reverse
              gap-6
              rounded-3xl
              bg-[#F3F3F3]
              p-6
              shadow-lg
              will-change-transform

              min-[801px]:absolute
              min-[801px]:inset-0
              min-[801px]:flex-row
              min-[801px]:items-center
              min-[801px]:gap-12
              min-[801px]:p-16
            "
          >
            {/* Text */}
            <div className="flex-1 text-center min-[801px]:text-left">
  <h3 className="mb-4 text-2xl font-bold min-[801px]:text-3xl">
    {card.title}
  </h3>

  <p className="text-base leading-relaxed text-neutral-600 min-[801px]:text-lg">
    {card.description}
  </p>
</div>

            {/* Image */}
            <div className="flex flex-1 items-center justify-center">
              <img
                src={card.image}
                alt={card.title}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-auto w-full max-w-md object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}