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
    "faster and smarter.No setup fees, no hardware costs",
    "just seamless digital tools that grow with your business.",
    "Whether you're a café, restaurant, or food court,",
    "TapGo simplifies operations and boosts customer satisfaction.",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          },
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">

        {/* Heading */}
        <h2
          className="
            mb-8
            text-center
            text-3xl
            font-normal
            leading-tight
            tracking-tight
            text-gray-900
            sm:mb-10
            sm:text-4xl
            md:text-5xl
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
            text-center
          "
        >
          {lines.map((line, index) => (
            <p
              key={index}
              className="
                text-[17px]
                font-normal
                leading-[1.45]
                text-black
                sm:text-xl
                sm:leading-[1.4]
                md:text-2xl
                lg:text-4xl
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