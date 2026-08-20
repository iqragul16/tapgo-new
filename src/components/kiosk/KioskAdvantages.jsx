import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    number: "1",
    title: "Increased efficiency",
    description:
      "Automate the order and payment process for faster transactions, reducing wait times and improving operational efficiency.",
  },
  {
    number: "2",
    title: "Improved customer experience",
    description:
      "Offer a wider selection of items and easy customization options, empowering customers and enhancing their dining experience.",
  },
  {
    number: "3",
    title: "Cost savings",
    description:
      "Reduce expenses by minimizing the need for additional staff and minimizing order errors, resulting in improved profitability.",
  },
];

export default function KioskAdvantages() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(headingRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 60,
      });

      // Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Heading first
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Cards after heading
      tl.to(
        cardsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.2"
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-5 py-24 sm:px-8 lg:py-32"
    >
      {/* Heading */}
      <div
        ref={headingRef}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="font-sans text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
  Advantage of the kiosk
</h2>

      <p className="mx-auto mt-4 max-w-6xl text-center font-sans text-[14px] font-normal leading-6 text-neutral-500">
 Transform your restaurant experience with TapGo Kiosk. Enjoy increased efficiency, improved customer satisfaction, cost savings, and scalable 
 <br className="hidden md:block"/>
 solutions for streamlined operations and enhanced profitability.
</p>
      </div>

      {/* Advantages */}
      <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-16 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3 lg:gap-24">
        {advantages.map((item, index) => (
          <div
            key={item.number}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            {/* Number */}
            <div
              className="
                mb-9
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-[#d51b55]
                via-[#c9184a]
                to-[#f3a0b8]
                text-2xl
                font-normal
                text-white
                shadow-[0_8px_18px_rgba(201,24,74,0.25)]
              "
            >
              {item.number}
            </div>

            {/* Text */}
            <h3 className="mb-2 text-lg font-sans leading-normal tracking-tight text-bold sm:text-2xl">
              {item.title}
            </h3>

            <p className="text-base leading-6 font-sans text-neutral-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}