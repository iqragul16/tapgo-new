import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const textRef = useRef(null);

  const lines = [
    "At TapGo, we're revolutionizing the restaurant industry with",
    "smart, hardware-free ordering solutions. From self service",
    "kiosks to mobile QR ordering, we help businesses serve",
    "faster and smarter. No setup fees, no hardware costs",
    "just seamless digital tools that grow with your business.",
    "Whether you're a café, restaurant, or food court,",
    "TapGo simplifies operations and boosts customer satisfaction.",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;

      const letters = textRef.current.querySelectorAll(".letter");

      gsap.fromTo(
        letters,
        {
          opacity: 0.15,
        },
        {
          opacity: 1,
          stagger: 0.02,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 35%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      // Recalculate animation positions after layout is ready
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, textRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
  className="
    w-full
    px-5
    py-8

    sm:px-6
    sm:py-10

    md:px-8
    md:py-4

    lg:px-10
    lg:py-8

    xl:py-10
  "
>
      <div className="mx-auto w-full max-w-6xl min-w-0">

        {/* Heading */}
        <h2
          className="
            mb-5
            text-center
            text-3xl
            font-normal
            leading-tight
            tracking-tight
            text-gray-900

            sm:mb-6
            sm:text-4xl

           md:mb-5
            md:text-5xl

           lg:mb-6
            lg:text-5xl
          "
        >
          About Us
        </h2>

        {/* Animated Text */}
        <div
          ref={textRef}
          className="
            mx-auto
            w-full
            max-w-5xl
            min-w-0
            overflow-hidden
            text-center
          "
        >
          {lines.map((line, index) => (
            <p
              key={index}
              className="
                m-0
                w-full
                max-w-full
                text-[clamp(12px,2.4vw,36px)]
                font-normal
                leading-[1.4]
                text-black

                sm:leading-[1.35]
                md:leading-[1.3]
                lg:leading-[1.15]
              "
            >
              {line.split("").map((char, i) => (
                <span key={i} className="letter">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutUs;