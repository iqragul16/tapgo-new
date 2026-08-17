import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import video from "../assets/firstvedio.mp4";

function ShowcaseSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const videoRef = useRef(null);
const videoWrapperRef = useRef(null);
useEffect(() => {
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // Desktop
    mm.add("(min-width: 768px)", () => {
      gsap.set(headingRef.current, {
        scale: 1.3,
        y: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: false,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        headingRef.current,
        {
          scale: 1,
          y: -100,
          ease: "none",
        },
        0
      );

      tl.to(
        videoRef.current,
        {
          width: "100%",
          borderRadius: "0px",
          ease: "none",
        },
        0
      );

      tl.to(
        videoWrapperRef.current,
        {
          y: -120,
          ease: "none",
        },
        0
      );
    });

    // Mobile
    mm.add("(max-width: 767px)", () => {
      gsap.set(videoWrapperRef.current, {
        clearProps: "all",
      });

      gsap.set(videoRef.current, {
        clearProps: "all",
      });
    });
  }, sectionRef);

  return () => {
    ctx.revert();
  };
}, []);
  return (
   <section
  ref={sectionRef}
  className="relative bg-white min-h-[1650px] pt-24 md:pt-36 lg:pt-44 pb-20 md:pb-32"
>
  <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

    {/* Big Heading */}
    <div
      ref={headingRef}
      className="w-full flex justify-center relative z-10"
    >
      <h1
        className="
          text-center
          font-black
          uppercase
          leading-none
          tracking-tight
          text-[22vw]
          md:text-[18vw]
          lg:text-[16vw]
          xl:text-[15vw]
          select-none
        "
      >
        TAPGO
      </h1>
    </div>

    {/* Video */}
    <div
      ref={videoWrapperRef}
      className="
        relative
        mt-6
        md:-mt-16
        lg:-mt-20
        flex
        justify-center
        z-20
      "
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="
          w-[92%]
          md:w-[70%]
          rounded-3xl
          md:rounded-[35px]
          object-cover
          shadow-2xl
          h-[220px]
          sm:h-[300px]
          md:h-[420px]
          lg:h-[600px]
        "
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>

  </div>
</section>
  );
}

export default ShowcaseSection;